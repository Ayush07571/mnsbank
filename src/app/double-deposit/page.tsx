import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Double Deposit Scheme | MNS Bank',
  description: 'Double your money with MNS Bank\'s double deposit scheme. Get attractive interest rates and flexible tenure options',
};

export default function DoubleDepositPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Double Deposit Scheme
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Double your money with MNS Bank's attractive double deposit scheme. Enjoy guaranteed returns, flexible tenure options, and secure investment for your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                  Calculate Returns
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
                <h3 className="font-heading text-xl font-semibold mb-2">Double Returns</h3>
                <p className="text-white/80">Double your investment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Guaranteed</h3>
                <p className="text-white/80">Assured returns on maturity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Flexible Tenure</h3>
                <p className="text-white/80">Choose your preferred duration</p>
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
            <CardTitle className="text-text-primary">Double Deposit Scheme Features</CardTitle>
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
                    <span>Investment Amount: ₹10,000 to ₹25 Lakhs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tenure: 84 months (7 years)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Maturity Amount: Double the deposit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Effective Rate: ~10.3% p.a.</span>
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
                    <span>Guaranteed doubling of investment</span>
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
                    <span>Premature withdrawal allowed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Nomination facility available</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interest Calculator */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Returns Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Investment Examples</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Investment Amount</span>
                      <span className="text-brand-accent font-semibold">₹50,000</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Tenure</span>
                      <span className="text-text-secondary">84 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Maturity Amount</span>
                      <span className="text-brand-accent font-semibold">₹1,00,000</span>
                    </div>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Investment Amount</span>
                      <span className="text-brand-accent font-semibold">₹1,00,000</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Tenure</span>
                      <span className="text-text-secondary">84 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Maturity Amount</span>
                      <span className="text-brand-accent font-semibold">₹2,00,000</span>
                    </div>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Investment Amount</span>
                      <span className="text-brand-accent font-semibold">₹5,00,000</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Tenure</span>
                      <span className="text-text-secondary">84 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Maturity Amount</span>
                      <span className="text-brand-accent font-semibold">₹10,00,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Premature Withdrawal</h3>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">After 2 years</span>
                      <span className="text-sm text-brand-accent">Deposit amount only</span>
                    </div>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">After 3 years</span>
                      <span className="text-sm text-brand-accent">Deposit + 5% interest</span>
                    </div>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">After 5 years</span>
                      <span className="text-sm text-brand-accent">Deposit + 15% interest</span>
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
                  <li>• Guardian's identity proof</li>
                  <li>• Guardian's address proof</li>
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
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Ready to Double Your Investment?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Open a MNS Bank double deposit scheme today and double your money with guaranteed returns and secure investment options.
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

