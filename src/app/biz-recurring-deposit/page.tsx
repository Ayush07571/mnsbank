import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Business Recurring Deposit | MNS Bank',
  description: 'Build your business savings systematically with MNS Bank\'s business recurring deposit scheme. Regular deposits with attractive interest rates',
};

export default function BizRecurringDepositPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Business Recurring Deposit
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Build your business savings systematically with MNS Bank&apos;s business recurring deposit scheme. Enjoy attractive interest rates, flexible monthly deposits, and disciplined savings for your business financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                  Calculate Savings
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Regular Savings</h3>
                <p className="text-white/80">Build discipline in business saving</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">High Interest</h3>
                <p className="text-white/80">Rates up to 7.0% p.a.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Flexible Amount</h3>
                <p className="text-white/80">Start from ₹1,000 per month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Key Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Business Recurring Deposit Features</CardTitle>
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
                    <span>Monthly Deposit: ₹1,000 to No Limit</span>
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
                    <span>Interest Rate: 5.5% to 7.0% p.a.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Compounded Quarterly</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Business Benefits</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Disciplined business savings habit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Auto-debit from business account</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Higher loan facility against deposit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Business tax benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interest Calculator */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Business Savings Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Investment Examples</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Monthly: ₹10,000</span>
                      <span className="text-brand-accent font-semibold">3 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Maturity Amount</span>
                      <span className="text-brand-accent font-semibold">₹4,05,000</span>
                    </div>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Monthly: ₹25,000</span>
                      <span className="text-brand-accent font-semibold">5 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Maturity Amount</span>
                      <span className="text-brand-accent font-semibold">₹18,12,500</span>
                    </div>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Monthly: ₹50,000</span>
                      <span className="text-brand-accent font-semibold">7 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Maturity Amount</span>
                      <span className="text-brand-accent font-semibold">₹49,87,500</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Business Interest Rates</h3>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">6 months - 1 year</span>
                      <span className="text-sm text-brand-accent">5.5% p.a.</span>
                    </div>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">1 year - 3 years</span>
                      <span className="text-sm text-brand-accent">6.0% p.a.</span>
                    </div>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">3 years - 5 years</span>
                      <span className="text-sm text-brand-accent">6.5% p.a.</span>
                    </div>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">5 years - 10 years</span>
                      <span className="text-sm text-brand-accent">7.0% p.a.</span>
                    </div>
                  </div>
                </div>
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
                <h3 className="font-semibold text-text-primary mb-4">For Businesses</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Registered business entity</li>
                  <li>• Valid business registration documents</li>
                  <li>• GST registration (if applicable)</li>
                  <li>• Business bank account</li>
                  <li>• PAN card of business</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">For Proprietors</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Valid business registration</li>
                  <li>• Individual PAN card</li>
                  <li>• Identity proof of proprietor</li>
                  <li>• Address proof of business</li>
                  <li>• Business bank statements</li>
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
                <h3 className="font-semibold text-text-primary mb-4">Business Documents</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Business registration certificate</li>
                  <li>• GST registration certificate</li>
                  <li>• Partnership deed / MOA & AOA</li>
                  <li>• PAN card of business</li>
                  <li>• Business bank statements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Authorized Signatory Documents</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Identity proof (Aadhaar, PAN, Voter ID)</li>
                  <li>• Address proof (Utility bill, rent agreement)</li>
                  <li>• Passport size photographs</li>
                  <li>• PAN card (mandatory)</li>
                  <li>• Authorization letter</li>
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
                <p className="text-text-secondary text-sm">Complete the business application form</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Submit Documents</h4>
                <p className="text-text-secondary text-sm">Provide business and KYC documents</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Set Up Auto-debit</h4>
                <p className="text-text-secondary text-sm">Setup monthly auto-debit from business account</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Get Certificate</h4>
                <p className="text-text-secondary text-sm">Receive business deposit certificate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Ready to Build Your Business Savings?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Open a MNS Bank business recurring deposit today and build your business savings systematically with attractive interest rates and disciplined monthly deposits.
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

