'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { EMICalculator } from '@/components/product/EMICalculator';
import { useTranslation } from '@/hooks/useTranslation';
import type { ProductProcessStep } from '@/types/product';

export default function GoldLoanPage() {
  const { t } = useTranslation('products');
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl mb-6">
                {t('hero.goldLoan')}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {t('hero.goldLoanDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us">
                  <Button variant="secondary" size="lg" className="px-8">
                    {t('sections.applyNow')}
                  </Button>
                </Link>
                <Link href="#calculator">
                  <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                    {t('sections.checkEmi')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500 border-4 border-white/20">
                <Image 
                   src="/images/gold-loan.png" 
                   alt={t('hero.goldLoan') as string} 
                   fill
                   className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* EMI Calculator */}
        <div id="calculator" className="mb-12">
          <EMICalculator defaultRate={9.5} maxAmount={5000000} />
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
                  {((t('goldLoan.details', []) as unknown) as string[]).map((detail, i) => (
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
                  {((t('goldLoan.benefits', []) as unknown) as string[]).map((benefit, i) => (
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
            <h3 className="font-semibold text-text-primary mb-4">{t('sections.requirements')}</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-text-secondary">
              {((t('goldLoan.eligibility.requirements', []) as unknown) as string[]).map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">{t('sections.documents')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-3 text-text-secondary">
              {((t('goldLoan.documents.required', []) as unknown) as string[]).map((doc, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Application Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">{t('sections.process')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {((t('goldLoan.process', []) as unknown) as ProductProcessStep[]).map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{step.title}</h4>
                  <p className="text-text-secondary text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl text-text-primary mb-4">
              {t('sections.ctaTitle', 'Ready to Get Started?')}
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Unlock the value of your gold today with MNS Bank&apos;s affordable gold loans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button variant="primary" size="lg" className="px-8">Apply Now</Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <a href="/download-forms">Download Forms</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

