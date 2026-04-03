'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { DepositCalculator } from '@/components/product/DepositCalculator';
import { useTranslation } from '@/hooks/useTranslation';

export default function TimeDepositPage() {
  const { t } = useTranslation('products');
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl mb-6">
                {t('hero.timeDeposit')}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {t('hero.timeDepositDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8" asChild>
                  <Link href="/contact-us">{t('sections.applyNow')}</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary" asChild>
                  <Link href="#calculator">{t('sections.checkEmi', 'Calculate Interest')}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
                <Image 
                  src="/images/time-deposit.png" 
                  alt={t('hero.timeDeposit') as string} 
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
        {/* Key Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Time Deposit Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Scheme Details</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Investment Amount: ₹5,000 to No Limit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tenure: 6 months to 10 years</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interest Rate: 5.5% to 7.5% p.a.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interest Payment: Quarterly/Annually</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Benefits</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Higher interest than savings account</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Loan facility against deposit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tax benefits under Section 80C</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Auto-renewal facility available</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interest Rates */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Interest Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold text-text-primary">Tenure</th>
                    <th className="text-left p-3 font-semibold text-text-primary">General Public</th>
                    <th className="text-left p-3 font-semibold text-text-primary">Senior Citizens</th>
                    <th className="text-left p-3 font-semibold text-text-primary">Staff</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">6 months - 1 year</td>
                    <td className="p-3 text-brand-accent font-semibold">5.5% p.a.</td>
                    <td className="p-3 text-brand-accent font-semibold">6.0% p.a.</td>
                    <td className="p-3 text-brand-accent font-semibold">6.5% p.a.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">1 year - 3 years</td>
                    <td className="p-3 text-brand-accent font-semibold">6.0% p.a.</td>
                    <td className="p-3 text-brand-accent font-semibold">6.5% p.a.</td>
                    <td className="p-3 text-brand-accent font-semibold">7.0% p.a.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">3 years - 5 years</td>
                    <td className="p-3 text-brand-accent font-semibold">6.5% p.a.</td>
                    <td className="p-3 text-brand-accent font-semibold">7.0% p.a.</td>
                    <td className="p-3 text-brand-accent font-semibold">7.5% p.a.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-text-secondary">5 years - 10 years</td>
                    <td className="p-3 text-brand-accent font-semibold">7.0% p.a.</td>
                    <td className="p-3 text-brand-accent font-semibold">7.5% p.a.</td>
                    <td className="p-3 text-brand-accent font-semibold">8.0% p.a.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Interest Calculator */}
        <div id="calculator" className="mb-12">
          <DepositCalculator />
        </div>

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
                  <li>• Age: 18 to 65 years</li>
                  <li>• Indian citizen</li>
                  <li>• Valid identity proof</li>
                  <li>• Valid address proof</li>
                  <li>• PAN card (mandatory)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">For Minors</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Age: Below 18 years</li>
                  <li>• Guardian required</li>
                  <li>• Birth certificate</li>
                  <li>• Guardian&apos;s identity proof</li>
                  <li>• Guardian&apos;s address proof</li>
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
                <h3 className="font-semibold text-text-primary mb-4">Identity Proof</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Aadhaar card</li>
                  <li>• PAN card (mandatory)</li>
                  <li>• Voter ID card</li>
                  <li>• Driving license</li>
                  <li>• Passport</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Address Proof</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Utility bills (electricity, water, gas)</li>
                  <li>• Bank statements (last 3 months)</li>
                  <li>• Rent agreement</li>
                  <li>• Passport</li>
                  <li>• Property tax receipt</li>
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
                <h4 className="font-semibold text-text-primary mb-2">Fill Application</h4>
                <p className="text-text-secondary text-sm">Complete the application form</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Submit Documents</h4>
                <p className="text-text-secondary text-sm">Provide KYC documents</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Deposit Amount</h4>
                <p className="text-text-secondary text-sm">Make the initial deposit</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Get Certificate</h4>
                <p className="text-text-secondary text-sm">Receive deposit certificate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl text-text-primary mb-4">
              {t('sections.ctaTitle', 'Ready to Grow Your Savings?')}
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Open a MNS Bank time deposit today and enjoy attractive interest rates, flexible tenure options, and guaranteed returns for your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8" asChild>
                <Link href="/contact-us">Apply Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <Link href="/download-forms">Download Forms</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

