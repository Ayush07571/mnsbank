'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

const BRANCHES = [
  { id: 'BAIRAGARHI_HO', label: 'Head Office — Bairagarh' },
  { id: 'TT_NAGAR', label: 'TT Nagar Branch' },
  { id: 'KAROND', label: 'Karond Branch' },
];

interface GuidedInquiryFormProps {
  productName?: string;
  className?: string;
}

type Step = 1 | 2 | 3 | 'success';

export default function GuidedInquiryForm({ productName, className }: GuidedInquiryFormProps) {
  const [step, setStep] = useState<Step>(1);
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [branch, setBranch] = useState('BAIRAGARHI_HO');
  const [message, setMessage] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const mobileValid = /^[6-9]\d{9}$/.test(mobile);
  const nameValid = fullName.trim().length >= 2;

  const handleSubmit = async () => {
    if (!nameValid || !mobileValid) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/save-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          mobile,
          product: productName ?? 'general',
          branch,
          message: message.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setReferenceNumber(data.referenceNumber);
        setStep('success');
      } else {
        setError(data.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (step === 'success') {
    return (
      <Card className={className}>
        <CardContent className="py-10 text-center space-y-4">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-text-primary">Request Received!</h3>
          <p className="text-text-secondary text-sm max-w-xs mx-auto">
            Our team will contact you at <strong>{mobile}</strong> within 24 hours.
          </p>
          <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-card px-4 py-3 inline-block">
            <p className="text-xs text-text-secondary mb-0.5">Your Reference Number</p>
            <p className="font-mono font-bold text-brand-primary text-lg">{referenceNumber}</p>
          </div>
          <p className="text-xs text-text-secondary">
            Save this reference number for future correspondence.
          </p>
        </CardContent>
      </Card>
    );
  }

  const steps = [
    { num: 1, label: 'Your Name' },
    { num: 2, label: 'Contact' },
    { num: 3, label: 'Branch & Message' },
  ];

  return (
    <Card className={cn('overflow-hidden', className)}>
      {/* Step progress */}
      <div className="bg-surface border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className={cn(
                'flex items-center gap-2',
                step >= s.num ? 'text-brand-primary' : 'text-text-secondary'
              )}>
                <div className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors',
                  step > s.num
                    ? 'bg-brand-primary border-brand-primary text-white'
                    : step === s.num
                    ? 'border-brand-primary text-brand-primary bg-white'
                    : 'border-border text-text-secondary bg-white'
                )}>
                  {step > s.num ? '✓' : s.num}
                </div>
                <span className="text-xs font-medium hidden sm:block">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={cn(
                  'h-px flex-1 mx-3 transition-colors',
                  step > s.num ? 'bg-brand-primary' : 'bg-border'
                )} />
              )}
            </div>
          ))}
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {productName && (
          <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-card px-4 py-2 text-sm text-brand-primary font-medium">
            Inquiring about: {productName}
          </div>
        )}

        {/* Step 1: Name */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Your Full Name <span className="text-error">*</span>
              </label>
              <Input
                id="inq-fullname"
                placeholder="e.g. Ramesh Sharma"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className={cn(!nameValid && fullName && 'border-error')}
                autoFocus
              />
              {!nameValid && fullName && (
                <p className="text-xs text-error mt-1">Please enter your full name (min. 2 characters)</p>
              )}
            </div>
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              disabled={!nameValid}
              onClick={() => setStep(2)}
            >
              Continue →
            </Button>
          </div>
        )}

        {/* Step 2: Mobile */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Mobile Number <span className="text-error">*</span>
              </label>
              <div className="flex gap-2">
                <span className="flex items-center px-3 bg-surface border border-border rounded-input text-sm text-text-secondary">+91</span>
                <Input
                  id="inq-mobile"
                  placeholder="9XXXXXXXXX"
                  value={mobile}
                  onChange={e => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  inputMode="numeric"
                  className={cn(!mobileValid && mobile.length === 10 && 'border-error', 'flex-1')}
                  autoFocus
                />
              </div>
              {mobile.length === 10 && !mobileValid && (
                <p className="text-xs text-error mt-1">
                  Must be a valid 10-digit number starting with 6, 7, 8, or 9
                </p>
              )}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1" onClick={() => setStep(1)}>
                ← Back
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="flex-1"
                disabled={!mobileValid}
                onClick={() => setStep(3)}
              >
                Continue →
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Branch + Message */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Preferred Branch
              </label>
              <div className="space-y-2">
                {BRANCHES.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setBranch(b.id)}
                    className={cn(
                      'w-full text-left px-4 py-2.5 rounded-input border text-sm transition-colors',
                      branch === b.id
                        ? 'border-brand-primary bg-brand-primary/5 text-brand-primary font-medium'
                        : 'border-border text-text-secondary hover:border-brand-primary'
                    )}
                  >
                    {branch === b.id && <span className="mr-2">✓</span>}
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Message <span className="text-text-secondary font-normal">(optional)</span>
              </label>
              <textarea
                id="inq-message"
                rows={3}
                placeholder="Tell us how we can help you..."
                value={message}
                onChange={e => setMessage(e.target.value.slice(0, 300))}
                className="flex w-full rounded-input border border-border bg-background px-3 py-2 text-sm placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              />
              <p className="text-xs text-text-secondary text-right mt-1">{message.length}/300</p>
            </div>

            {error && (
              <div className="bg-error/10 border border-error/30 rounded-card px-4 py-2 text-sm text-error">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1" onClick={() => setStep(2)}>
                ← Back
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="flex-1"
                disabled={submitting}
                onClick={handleSubmit}
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  'Submit Request ✓'
                )}
              </Button>
            </div>
          </div>
        )}

        <p className="text-xs text-text-secondary text-center">
          Your information is kept confidential and used only to contact you.
        </p>
      </CardContent>
    </Card>
  );
}
