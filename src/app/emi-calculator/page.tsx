import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'EMI Calculator | MNS Bank',
  description: 'Calculate your loan EMI with MNS Bank\'s online EMI calculator. Get instant results for home loan, personal loan, car loan, and business loans',
};

export default function EMICalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                EMI Calculator
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Calculate your loan EMI instantly with MNS Bank's online EMI calculator. Plan your finances better with accurate monthly payment calculations for all types of loans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  Calculate EMI
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                  Apply for Loan
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
                <h3 className="font-heading text-xl font-semibold mb-2">Instant Results</h3>
                <p className="text-white/80">Get EMI in seconds</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Accurate</h3>
                <p className="text-white/80">Precise calculations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Multiple Loans</h3>
                <p className="text-white/80">All loan types supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* EMI Calculator */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Calculate Your EMI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Loan Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">₹</span>
                      <input
                        type="number"
                        className="w-full pl-8 pr-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        placeholder="500000"
                        defaultValue="500000"
                      />
                    </div>
                    <input
                      type="range"
                      className="w-full mt-2"
                      min="10000"
                      max="50000000"
                      defaultValue="500000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Interest Rate (% p.a.)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        className="w-full pr-8 pl-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        placeholder="12.5"
                        defaultValue="12.5"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary">%</span>
                    </div>
                    <input
                      type="range"
                      className="w-full mt-2"
                      min="5"
                      max="25"
                      defaultValue="12.5"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Loan Tenure
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        className="w-full pr-8 pl-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        placeholder="20"
                        defaultValue="20"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary">years</span>
                    </div>
                    <input
                      type="range"
                      className="w-full mt-2"
                      min="1"
                      max="30"
                      defaultValue="20"
                    />
                  </div>
                  <Button variant="primary" size="lg" className="w-full">
                    Calculate EMI
                  </Button>
                </div>
              </div>
              <div>
                <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-text-primary mb-4">EMI Calculation Results</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Monthly EMI</span>
                      <span className="text-2xl font-bold text-brand-accent">₹11,365</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Total Interest Payable</span>
                      <span className="font-semibold">₹2,22,760</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Total Payment</span>
                      <span className="font-semibold">₹7,22,760</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loan Types */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Popular Loan Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Home Loan</h3>
                <p className="text-text-secondary text-sm mb-4">Lowest rates starting from 11.5%</p>
                <Button variant="outline" size="sm" className="w-full">
                  Calculate Now
                </Button>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Personal Loan</h3>
                <p className="text-text-secondary text-sm mb-4">Quick approval, minimal documentation</p>
                <Button variant="outline" size="sm" className="w-full">
                  Calculate Now
                </Button>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Car Loan</h3>
                <p className="text-text-secondary text-sm mb-4">100% on-road financing available</p>
                <Button variant="outline" size="sm" className="w-full">
                  Calculate Now
                </Button>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Business Loan</h3>
                <p className="text-text-secondary text-sm mb-4">Flexible terms for business needs</p>
                <Button variant="outline" size="sm" className="w-full">
                  Calculate Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* EMI Formula */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">EMI Formula</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">How EMI is Calculated</h3>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                  <div className="mb-4">
                    EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
                  </div>
                  <div className="text-xs text-gray-600">
                    <p className="mb-2">Where:</p>
                    <ul className="space-y-1">
                      <li>• P = Principal Loan Amount</li>
                      <li>• R = Monthly Interest Rate</li>
                      <li>• N = Loan Tenure in Months</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Factors Affecting EMI</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Principal Amount</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interest Rate</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Loan Tenure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Processing Fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips for Lower EMI */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Tips for Lower EMI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Higher Down Payment</h3>
                <p className="text-text-secondary text-sm">Make a larger down payment to reduce the principal amount</p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Longer Tenure</h3>
                <p className="text-text-secondary text-sm">Choose a longer loan tenure to reduce monthly EMI</p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Better Credit Score</h3>
                <p className="text-text-secondary text-sm">Maintain a good credit score to get lower interest rates</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Ready to Apply for a Loan?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Calculate your EMI and apply for a loan with MNS Bank. Get competitive interest rates, quick approval, and flexible repayment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Contact Advisor
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