'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'next-i18next';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { InquirySubmissionSchema } from '@/lib/validations/inquiry';
import { useGA4 } from '@/lib/analytics';
import { cn } from '@/lib/utils';

type FormData = z.infer<typeof InquirySubmissionSchema>;

interface InquiryFormProps {
  productSlug?: string;
  className?: string;
  onSuccess?: (referenceNumber: string) => void;
  onError?: (error: string) => void;
}

export default function InquiryForm({ 
  productSlug, 
  className, 
  onSuccess, 
  onError 
}: InquiryFormProps) {
  const { t } = useTranslation('forms');
  const { trackFormSubmit } = useGA4();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(InquirySubmissionSchema),
    defaultValues: {
      branch: 'BAIRAGARHI_HO',
      productSlug: productSlug || 'general',
    },
  });

  // Load reCAPTCHA script
  useEffect(() => {
    const loadReCAPTCHA = () => {
      if (typeof window === 'undefined') return;
      
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.onload = () => {
        setRecaptchaLoaded(true);
      };
      script.onerror = () => {
        console.error('Failed to load reCAPTCHA');
      };
      document.head.appendChild(script);
    };

    loadReCAPTCHA();
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!recaptchaLoaded) {
      onError?.('reCAPTCHA not loaded. Please refresh the page.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA v3
      const token = await new Promise<string>((resolve, reject) => {
        if (!window.grecaptcha) {
          reject(new Error('reCAPTCHA not loaded'));
          return;
        }
        window.grecaptcha.ready(() => {
          if (!window.grecaptcha) {
            reject(new Error('reCAPTCHA not available'));
            return;
          }
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: 'submit' })
            .then((token: string) => resolve(token))
            .catch(reject);
        });
      });

      // Add reCAPTCHA token to form data
      const submissionData = { ...data, recaptchaToken: token };

      // Submit form
      const response = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        trackFormSubmit('inquiry_form', true);
        onSuccess?.(result.referenceNumber);
        // Reset form
        setValue('fullName', '');
        setValue('mobile', '');
        setValue('email', '');
        setValue('message', '');
        setValue('branch', 'BAIRAGARHI_HO');
      } else {
        trackFormSubmit('inquiry_form', false);
        onError?.(result.message || 'Submission failed');
      }
    } catch (error) {
      onError?.('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mobileValue = watch('mobile');
  const [mobileError, setMobileError] = useState('');

  const validateMobile = (value: string) => {
    if (!value) {
      setMobileError('');
      return;
    }
    
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(value)) {
      setMobileError('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9');
    } else {
      setMobileError('');
    }
  };

  return (
    <div className={cn('bg-surface rounded-card p-6 border border-border', className)}>
      <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
        {t('inquiry.title', 'Get in Touch')}
      </h3>
      
      <p className="text-sm text-text-secondary mb-6">
        {t('inquiry.subtitle', 'Fill out the form below and our team will contact you shortly.')}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text-primary mb-1">
            {t('inquiry.fullName', 'Full Name')} *
          </label>
          <Input
            id="fullName"
            {...register('fullName')}
            placeholder={t('inquiry.fullNamePlaceholder', 'Enter your full name')}
            className={cn(errors.fullName && 'border-error')}
          />
          {errors.fullName && (
            <p className="text-xs text-error mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-text-primary mb-1">
            {t('inquiry.mobile', 'Mobile Number')} *
          </label>
          <Input
            id="mobile"
            {...register('mobile')}
            placeholder={t('inquiry.mobilePlaceholder', 'Enter 10-digit mobile number')}
            className={cn((errors.mobile || mobileError) && 'border-error')}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              setValue('mobile', value);
              validateMobile(value);
            }}
          />
          {(errors.mobile || mobileError) && (
            <p className="text-xs text-error mt-1">
              {errors.mobile?.message || mobileError}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
            {t('inquiry.email', 'Email Address')}
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder={t('inquiry.emailPlaceholder', 'Enter your email address')}
            className={cn(errors.email && 'border-error')}
          />
          {errors.email && (
            <p className="text-xs text-error mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Branch Selection */}
        <div>
          <label htmlFor="branch" className="block text-sm font-medium text-text-primary mb-1">
            {t('inquiry.branch', 'Preferred Branch')} *
          </label>
          <select
            id="branch"
            {...register('branch')}
            className={cn(
              'flex h-10 w-full rounded-input border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.branch && 'border-error'
            )}
          >
            <option value="BAIRAGARHI_HO">Head Office - Bairagarh</option>
            <option value="TT_NAGAR">TT Nagar Branch</option>
            <option value="KAROND">Karond Branch</option>
          </select>
          {errors.branch && (
            <p className="text-xs text-error mt-1">{errors.branch.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">
            {t('inquiry.message', 'Message')}
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            placeholder={t('inquiry.messagePlaceholder', 'Tell us how we can help you...')}
            className={cn(
              'flex min-h-[80px] w-full rounded-input border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.message && 'border-error'
            )}
            maxLength={250}
          />
          {errors.message && (
            <p className="text-xs text-error mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting || !recaptchaLoaded}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {t('inquiry.submitting', 'Submitting...')}
            </>
          ) : (
            t('inquiry.submit', 'Submit Inquiry')
          )}
        </Button>

        {/* reCAPTCHA Notice */}
        <p className="text-xs text-text-secondary text-center">
          {t('inquiry.recaptchaNotice', 'This site is protected by reCAPTCHA and the Google ')}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent hover:underline"
          >
            {t('inquiry.privacyPolicy', 'Privacy Policy')}
          </a>
          {' '}{t('inquiry.and', 'and ')}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent hover:underline"
          >
            {t('inquiry.termsOfService', 'Terms of Service')}
          </a>
          {'.'}
        </p>
      </form>
    </div>
  );
}

// Add TypeScript declaration for reCAPTCHA
declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
