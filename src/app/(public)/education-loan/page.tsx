'use client';

import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { EMICalculator } from '@/components/product/EMICalculator';
import { useTranslation } from '@/hooks/useTranslation';
import type { EducationExpense, ProductProcessStep } from '@/types/product';

export default function EducationLoanPage() {
  const { t } = useTranslation('products');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl mb-6">
                {t('hero.educationLoan')}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {t('hero.educationLoanDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  {t('sections.applyNow')}
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary" asChild>
                  <a href="#calculator">{t('sections.checkEmi')}</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
                <Image 
                  src="/images/education-loan.png" 
                  alt={t('hero.educationLoan') as string} 
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
          <EMICalculator defaultRate={11.5} maxAmount={4000000} />
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
                  {((t('educationLoan.details', []) as unknown) as string[]).map((detail: string, i: number) => (
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
                  {((t('educationLoan.benefits', []) as unknown) as string[]).map((benefit: string, i: number) => (
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

        {/* Moratorium Details */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">{t('sections.moratorium')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.courseMoratorium')}</h3>
                <ul className="space-y-3 text-text-secondary">
                  {((t('educationLoan.moratorium.course', []) as unknown) as string[]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.postCourseMoratorium')}</h3>
                <ul className="space-y-3 text-text-secondary">
                  {((t('educationLoan.moratorium.postCourse', []) as unknown) as string[]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Covered Expenses */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">{t('sections.expenses')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {((t('educationLoan.expenses', []) as unknown) as EducationExpense[]).map((expense: EducationExpense, i: number) => (
                <div key={i} className="text-center p-6 border border-border rounded-lg">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{expense.title}</h3>
                  <p className="text-text-secondary text-sm">{expense.desc}</p>
                </div>
              ))}
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
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.student')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('educationLoan.eligibility.student', []) as unknown) as string[]).map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.parent')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('educationLoan.eligibility.parent', []) as unknown) as string[]).map((item: string, i: number) => (
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
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.student')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('educationLoan.documents.student', []) as unknown) as string[]).map((doc: string, i: number) => (
                    <li key={i}>• {doc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.parent')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('educationLoan.documents.parent', []) as unknown) as string[]).map((doc: string, i: number) => (
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
              {((t('educationLoan.process', []) as unknown) as ProductProcessStep[]).map((step: ProductProcessStep, i: number) => (
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
              Invest in Your Education Today!
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Apply for MNS Bank education loan today and get moratorium facility, competitive interest rates, and flexible repayment options for your educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8">
                Apply Now
              </Button>
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

