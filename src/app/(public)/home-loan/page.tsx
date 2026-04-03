'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Image from 'next/image';
import { EMICalculator } from '@/components/product/EMICalculator';
import { useTranslation } from '@/hooks/useTranslation';
import type { ProductProcessStep } from '@/types/product';

export default function HomeLoanPage() {
  const { t } = useTranslation('products');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl mb-6">
                {t('hero.homeLoan')}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {t('hero.homeLoanDesc')}
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl skew-x-3 hover:skew-x-0 transition-transform duration-500 border-4 border-white/20">
                <Image 
                  src="/images/hero-home-loan.png" 
                  alt={t('hero.homeLoan') as string} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* EMI Calculator */}
        <div id="calculator" className="mb-12">
          <EMICalculator defaultRate={8.5} maxAmount={50000000} />
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
                  {((t('homeLoan.details', []) as unknown) as string[]).map((detail: string, i: number) => (
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
                  {((t('homeLoan.benefits', []) as unknown) as string[]).map((benefit: string, i: number) => (
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
                  {((t('homeLoan.eligibility.salaried', []) as unknown) as string[]).map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.selfEmployed')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('homeLoan.eligibility.selfEmployed', []) as unknown) as string[]).map((item: string, i: number) => (
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
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.personal')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('homeLoan.documents.personal', []) as unknown) as string[]).map((doc: string, i: number) => (
                    <li key={i}>• {doc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.propertyDocs')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('homeLoan.documents.property', []) as unknown) as string[]).map((doc: string, i: number) => (
                    <li key={i}>• {doc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">{t('sections.process')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {((t('homeLoan.process', []) as unknown) as ProductProcessStep[]).map((step: ProductProcessStep, i: number) => (
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
      </div>
    </div>
  );
}
