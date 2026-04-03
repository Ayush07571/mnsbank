'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Image from 'next/image';
import { EMICalculator } from '@/components/product/EMICalculator';
import { useTranslation } from '@/hooks/useTranslation';
export default function PersonalLoanPage() {
  const { t } = useTranslation('products');
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl mb-6">
                {t('hero.personalLoan')}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {t('hero.personalLoanDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8" asChild>
                  <Link href="/contact-us">{t('sections.applyNow')}</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary" asChild>
                  <Link href="#calculator">{t('sections.checkEmi')}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
                <Image 
                  src="/images/personal-loan.png" 
                  alt={t('hero.personalLoan') as string} 
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* EMI Calculator */}
        <div id="calculator" className="mb-12">
          <EMICalculator defaultRate={12.5} maxAmount={1000000} />
        </div>

        {/* Key Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">{t('sections.features')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.details')}</h3>
                <ul className="space-y-3 text-text-secondary">
                  {((t('personalLoan.details', []) as unknown) as string[]).map((detail, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.benefits')}</h3>
                <ul className="space-y-3 text-text-secondary">
                  {((t('personalLoan.benefits', []) as unknown) as string[]).map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eligibility */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">{t('sections.eligibility')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.salaried')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('personalLoan.eligibility.salaried', []) as unknown) as string[]).map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.selfEmployed')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('personalLoan.eligibility.selfEmployed', []) as unknown) as string[]).map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">{t('sections.documents')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.salaried')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('personalLoan.documents.salaried', []) as unknown) as string[]).map((doc, i) => (
                    <li key={i}>• {doc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.selfEmployed')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('personalLoan.documents.selfEmployed', []) as unknown) as string[]).map((doc, i) => (
                    <li key={i}>• {doc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl text-text-primary mb-4">
              {t('sections.ctaTitle')}
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              {t('sections.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8" asChild>
                <Link href="/contact-us">{t('sections.applyNow')}</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <Link href="/download-forms">{t('sections.downloadForms')}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
