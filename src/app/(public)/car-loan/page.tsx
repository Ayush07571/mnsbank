'use client';

import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { EMICalculator } from '@/components/product/EMICalculator';
import { useTranslation } from '@/hooks/useTranslation';
import type { ProductProcessStep } from '@/types/product';

export default function CarLoanPage() {
  const { t } = useTranslation('products');
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl mb-6">
                {t('hero.carLoan')}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {t('hero.carLoanDesc')}
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
                <Image 
                  src="/images/car-loan.png" 
                  alt={t('hero.carLoan') as string} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl animate-pulse" />
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
                  {((t('carLoan.details', []) as unknown) as string[]).map((detail: string, i: number) => (
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
                  {((t('carLoan.benefits', []) as unknown) as string[]).map((benefit: string, i: number) => (
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
                  {((t('carLoan.eligibility.salaried', []) as unknown) as string[]).map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.selfEmployed')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('carLoan.eligibility.selfEmployed', []) as unknown) as string[]).map((item: string, i: number) => (
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
                  {((t('carLoan.documents.salaried', []) as unknown) as string[]).map((doc: string, i: number) => (
                    <li key={i}>• {doc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">{t('sections.selfEmployed')}</h3>
                <ul className="space-y-2 text-text-secondary">
                  {((t('carLoan.documents.selfEmployed', []) as unknown) as string[]).map((doc: string, i: number) => (
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
              {((t('carLoan.process', []) as unknown) as ProductProcessStep[]).map((step: ProductProcessStep, i: number) => (
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

        {/* Car Types */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Types of Vehicles We Finance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">New Cars</h3>
                <p className="text-text-secondary text-sm">Brand new vehicles from all manufacturers</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Used Cars</h3>
                <p className="text-text-secondary text-sm">Pre-owned cars up to 5 years old</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Commercial Vehicles</h3>
                <p className="text-text-secondary text-sm">Vans, trucks, and commercial vehicles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eligibility */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Eligibility Criteria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">For Individuals</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Age: 21 to 65 years</li>
                  <li>• Minimum annual income: ₹3 Lakhs</li>
                  <li>• Stable employment for at least 2 years</li>
                  <li>• Good credit score (650+)</li>
                  <li>• Valid driving license</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">For Businesses</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Business existence: Minimum 3 years</li>
                  <li>• Annual turnover: Minimum ₹10 Lakhs</li>
                  <li>• Profitable for last 2 years</li>
                  <li>• Good banking relationship</li>
                  <li>• Required business documents</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Required Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">For Salaried Individuals</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Identity proof (Aadhaar, PAN, Voter ID)</li>
                  <li>• Address proof (Utility bill, rent agreement)</li>
                  <li>• Income proof (salary slips, Form 16)</li>
                  <li>• Bank statements (last 6 months)</li>
                  <li>• Passport size photographs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">For Self-Employed</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Business registration documents</li>
                  <li>• Income tax returns (last 2 years)</li>
                  <li>• Financial statements (balance sheet, P&L)</li>
                  <li>• Bank statements (last 6 months)</li>
                  <li>• Business address proof</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Application Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Apply Online</h4>
                <p className="text-text-secondary text-sm">Fill application form with required details</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Submit Documents</h4>
                <p className="text-text-secondary text-sm">Upload required documents online</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Verification</h4>
                <p className="text-text-secondary text-sm">Our team verifies your application</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Loan Disbursement</h4>
                <p className="text-text-secondary text-sm">Get loan amount credited to your account</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl text-text-primary mb-4">
              Ready to Drive Your Dream Car?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Apply for MNS Bank car loan today and get competitive interest rates with quick approval and flexible repayment options.
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

