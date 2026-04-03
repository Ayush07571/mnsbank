import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Overdraft Facility | MNS Bank',
  description: 'Get overdraft facility at competitive interest rates with flexible withdrawal options from MNS Bank Bhopal',
};

export default function OverdraftFacilityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Overdraft Facility
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Get flexible working capital with MNS Bank&apos;s overdraft facility. Enjoy competitive interest rates, flexible withdrawals, and pay interest only on utilized amount.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                  Check Eligibility
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Flexible Withdrawals</h3>
                <p className="text-white/80">Withdraw funds as needed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Pay on Utilized</h3>
                <p className="text-white/80">Interest only on used amount</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">High Limits</h3>
                <p className="text-white/80">Up to ₹50 Lakhs credit limit</p>
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
            <CardTitle className="text-text-primary">Overdraft Facility Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Facility Details</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Overdraft Limit: ₹1 Lakh to ₹50 Lakhs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interest Rate: 14.5% to 18.5% p.a.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Facility Tenure: 1 year (renewable)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Processing Fee: 1% of facility amount</span>
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
                    <span>Interest on utilized amount only</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible withdrawals and repayments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No fixed EMI obligations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Annual renewal facility</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">How Overdraft Facility Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Set Up Facility</h3>
                <p className="text-text-secondary text-sm">Get overdraft limit approved</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Withdraw as Needed</h3>
                <p className="text-text-secondary text-sm">Withdraw funds anytime up to limit</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Pay Interest Only</h3>
                <p className="text-text-secondary text-sm">Pay interest only on utilized amount</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Renew Annually</h3>
                <p className="text-text-secondary text-sm">Renew facility every year</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ideal For */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Ideal For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Business Working Capital</h3>
                <p className="text-text-secondary text-sm">Meet seasonal business needs</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Cash Flow Management</h3>
                <p className="text-text-secondary text-sm">Manage irregular cash flows</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Emergency Funds</h3>
                <p className="text-text-secondary text-sm">Ready access to emergency money</p>
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
                  <li>• Stable income source</li>
                  <li>• Good credit score (650+)</li>
                  <li>• Existing relationship with MNS Bank</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">For Businesses</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Business existence: Minimum 2 years</li>
                  <li>• Annual turnover: Minimum ₹15 Lakhs</li>
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
                <h3 className="font-semibold text-text-primary mb-4">Personal Documents</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Identity proof (Aadhaar, PAN, Voter ID)</li>
                  <li>• Address proof (Utility bill, rent agreement)</li>
                  <li>• Income proof (salary slips, Form 16)</li>
                  <li>• Bank statements (last 6 months)</li>
                  <li>• Passport size photographs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Business Documents</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Business registration documents</li>
                  <li>• Income tax returns (last 2 years)</li>
                  <li>• Financial statements (balance sheet, P&L)</li>
                  <li>• Bank statements (last 6 months)</li>
                  <li>• GST registration and returns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Need Flexible Working Capital?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Apply for MNS Bank overdraft facility today and get flexible access to funds while paying interest only on the utilized amount.
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


export const unstable_instant = {
  prefetch: 'static',
};