import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Interest Rates | MNS Bank',
  description: 'View current interest rates for all MNS Bank products including loans, deposits, and business accounts',
};

export default function InterestRatesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Interest Rates
              </h1>
              <p className="text-xl mb-8 text-white/90">
                View current interest rates for all MNS Bank products. Our competitive rates ensure you get the best value for your banking needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  Download Rate Sheet
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                  Calculate EMI
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
                <h3 className="font-heading text-xl font-semibold mb-2">Competitive Rates</h3>
                <p className="text-white/80">Best rates in market</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Transparent</h3>
                <p className="text-white/80">No hidden charges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Updated Daily</h3>
                <p className="text-white/80">Current rates always</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Loan Interest Rates */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Loan Interest Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Personal Loans */}
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Personal Loans</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-text-primary">Loan Type</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Interest Rate</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Processing Fee</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Max Tenure</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Personal Loan</td>
                        <td className="p-3 text-brand-accent font-semibold">13.5% - 18.5% p.a.</td>
                        <td className="p-3 text-text-secondary">2% of loan amount</td>
                        <td className="p-3 text-text-secondary">5 years</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Gold Loan</td>
                        <td className="p-3 text-brand-accent font-semibold">10.5% - 14.5% p.a.</td>
                        <td className="p-3 text-text-secondary">1% of loan amount</td>
                        <td className="p-3 text-text-secondary">3 years</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Car Loan</td>
                        <td className="p-3 text-brand-accent font-semibold">12.5% - 16.5% p.a.</td>
                        <td className="p-3 text-text-secondary">1.5% of loan amount</td>
                        <td className="p-3 text-text-secondary">7 years</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-text-secondary">Home Loan</td>
                        <td className="p-3 text-brand-accent font-semibold">11.5% - 15.5% p.a.</td>
                        <td className="p-3 text-text-secondary">1% of loan amount</td>
                        <td className="p-3 text-text-secondary">30 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Business Loans */}
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Business Loans</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-text-primary">Loan Type</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Interest Rate</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Processing Fee</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Max Tenure</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Working Capital Loan</td>
                        <td className="p-3 text-brand-accent font-semibold">14.5% - 18.5% p.a.</td>
                        <td className="p-3 text-text-secondary">2% of loan amount</td>
                        <td className="p-3 text-text-secondary">7 years</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Transport Loan</td>
                        <td className="p-3 text-brand-accent font-semibold">12.5% - 16.5% p.a.</td>
                        <td className="p-3 text-text-secondary">1.5% of loan amount</td>
                        <td className="p-3 text-text-secondary">7 years</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-text-secondary">Overdraft Facility</td>
                        <td className="p-3 text-brand-accent font-semibold">14.5% - 18.5% p.a.</td>
                        <td className="p-3 text-text-secondary">1% of facility amount</td>
                        <td className="p-3 text-text-secondary">1 year (renewable)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Deposit Interest Rates */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Deposit Interest Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Personal Deposits */}
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Personal Deposits</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-text-primary">Deposit Type</th>
                        <th className="text-left p-3 font-semibold text-text-primary">General Public</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Senior Citizens</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Staff</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Savings Account</td>
                        <td className="p-3 text-brand-accent font-semibold">3.5% - 4.5% p.a.</td>
                        <td className="p-3 text-brand-accent font-semibold">4.0% - 5.0% p.a.</td>
                        <td className="p-3 text-brand-accent font-semibold">4.5% - 5.5% p.a.</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Time Deposit (1-3 years)</td>
                        <td className="p-3 text-brand-accent font-semibold">6.0% p.a.</td>
                        <td className="p-3 text-brand-accent font-semibold">6.5% p.a.</td>
                        <td className="p-3 text-brand-accent font-semibold">7.0% p.a.</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Time Deposit (3-5 years)</td>
                        <td className="p-3 text-brand-accent font-semibold">6.5% p.a.</td>
                        <td className="p-3 text-brand-accent font-semibold">7.0% p.a.</td>
                        <td className="p-3 text-brand-accent font-semibold">7.5% p.a.</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-text-secondary">Double Deposit</td>
                        <td className="p-3 text-brand-accent font-semibold">10.3% p.a. (effective)</td>
                        <td className="p-3 text-brand-accent font-semibold">10.8% p.a. (effective)</td>
                        <td className="p-3 text-brand-accent font-semibold">11.3% p.a. (effective)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Business Deposits */}
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Business Deposits</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-text-primary">Deposit Type</th>
                        <th className="text-left p-3 font-semibold text-text-primary">General Business</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Priority Business</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Staff Business</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Current Account</td>
                        <td className="p-3 text-brand-accent font-semibold">Zero Interest</td>
                        <td className="p-3 text-brand-accent font-semibold">Zero Interest</td>
                        <td className="p-3 text-brand-accent font-semibold">Zero Interest</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">Time Deposit (1-3 years)</td>
                        <td className="p-3 text-brand-accent font-semibold">6.5% p.a.</td>
                        <td className="p-3 text-brand-accent font-semibold">7.0% p.a.</td>
                        <td className="p-3 text-brand-accent font-semibold">7.5% p.a.</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-text-secondary">Business Double Deposit</td>
                        <td className="p-3 text-brand-accent font-semibold">10.3% p.a. (effective)</td>
                        <td className="p-3 text-brand-accent font-semibold">10.8% p.a. (effective)</td>
                        <td className="p-3 text-brand-accent font-semibold">11.3% p.a. (effective)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Important Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Rate Disclaimer</h4>
                <p className="text-blue-800 text-sm">
                  Interest rates are subject to change without notice. Final rates will be determined based on credit assessment, loan amount, and other factors.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Special Offers</h4>
                <p className="text-green-800 text-sm">
                  Special rates available for existing customers, government employees, and women entrepreneurs. Contact your nearest branch for details.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Rate Validity</h4>
                <p className="text-yellow-800 text-sm">
                  Rates mentioned above are effective from today and are subject to revision based on RBI guidelines and market conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Need Help with Interest Rates?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Contact our customer service team or visit your nearest MNS Bank branch for personalized interest rate information and assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Find Branch
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


