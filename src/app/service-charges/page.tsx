import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Service Charges | MNS Bank',
  description:
    'View complete schedule of service charges and fees for all MNS Bank products and services',
};

export default function ServiceChargesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Service Charges
              </h1>
              <p className="text-xl mb-8 text-white/90">
                View complete schedule of service charges and fees for all MNS
                Bank products and services. Transparent pricing with no hidden
                costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8" asChild>
                  <Link href="/download-forms">Download Fee Schedule</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 border-white text-white hover:bg-white hover:text-brand-primary"
                  asChild
                >
                  <Link href="/contact-us">Calculate Charges</Link>
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Transparent
                </h3>
                <p className="text-white/80">No hidden charges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Competitive
                </h3>
                <p className="text-white/80">Best rates in market</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Updated
                </h3>
                <p className="text-white/80">Current fee schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Account Related Charges */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Account Related Charges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Savings Account */}
              <div>
                <h3 className="font-semibold text-text-primary mb-4">
                  Savings Account
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-text-primary">
                          Service
                        </th>
                        <th className="text-left p-3 font-semibold text-text-primary">
                          Basic Savings
                        </th>
                        <th className="text-left p-3 font-semibold text-text-primary">
                          Premium Savings
                        </th>
                        <th className="text-left p-3 font-semibold text-text-primary">
                          Senior Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">
                          Minimum Balance
                        </td>
                        <td className="p-3 text-text-secondary">₹0</td>
                        <td className="p-3 text-text-secondary">₹5,000</td>
                        <td className="p-3 text-text-secondary">₹0</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">
                          Balance Non-maintenance
                        </td>
                        <td className="p-3 text-text-secondary">₹0</td>
                        <td className="p-3 text-text-secondary">₹150 + GST</td>
                        <td className="p-3 text-text-secondary">₹0</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">
                          Cheque Book (20 leaves)
                        </td>
                        <td className="p-3 text-text-secondary">Free</td>
                        <td className="p-3 text-text-secondary">Free</td>
                        <td className="p-3 text-text-secondary">Free</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-text-secondary">
                          Debit Card Annual Fee
                        </td>
                        <td className="p-3 text-text-secondary">₹200 + GST</td>
                        <td className="p-3 text-text-secondary">Free</td>
                        <td className="p-3 text-text-secondary">Free</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Current Account */}
              <div>
                <h3 className="font-semibold text-text-primary mb-4">
                  Current Account
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-text-primary">
                          Service
                        </th>
                        <th className="text-left p-3 font-semibold text-text-primary">
                          Basic Current
                        </th>
                        <th className="text-left p-3 font-semibold text-text-primary">
                          Premium Current
                        </th>
                        <th className="text-left p-3 font-semibold text-text-primary">
                          Business Current
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">
                          Minimum Balance
                        </td>
                        <td className="p-3 text-text-secondary">₹0</td>
                        <td className="p-3 text-text-secondary">₹10,000</td>
                        <td className="p-3 text-text-secondary">₹25,000</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">
                          Balance Non-maintenance
                        </td>
                        <td className="p-3 text-text-secondary">₹0</td>
                        <td className="p-3 text-text-secondary">₹300 + GST</td>
                        <td className="p-3 text-text-secondary">₹500 + GST</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-text-secondary">
                          Cheque Book (50 leaves)
                        </td>
                        <td className="p-3 text-text-secondary">Free</td>
                        <td className="p-3 text-text-secondary">Free</td>
                        <td className="p-3 text-text-secondary">Free</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-text-secondary">
                          Business Debit Card
                        </td>
                        <td className="p-3 text-text-secondary">₹300 + GST</td>
                        <td className="p-3 text-text-secondary">Free</td>
                        <td className="p-3 text-text-secondary">Free</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Charges */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Transaction Charges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold text-text-primary">
                      Transaction Type
                    </th>
                    <th className="text-left p-3 font-semibold text-text-primary">
                      Charges
                    </th>
                    <th className="text-left p-3 font-semibold text-text-primary">
                      Free Transactions
                    </th>
                    <th className="text-left p-3 font-semibold text-text-primary">
                      Additional Charges
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">NEFT</td>
                    <td className="p-3 text-text-secondary">
                      Free (up to ₹10,000)
                    </td>
                    <td className="p-3 text-text-secondary">25 per month</td>
                    <td className="p-3 text-text-secondary">
                      ₹5 + GST per transaction
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">RTGS</td>
                    <td className="p-3 text-text-secondary">
                      Free (up to ₹2 Lakhs)
                    </td>
                    <td className="p-3 text-text-secondary">10 per month</td>
                    <td className="p-3 text-text-secondary">
                      ₹10 + GST per transaction
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">IMPS</td>
                    <td className="p-3 text-text-secondary">
                      Free (up to ₹5,000)
                    </td>
                    <td className="p-3 text-text-secondary">20 per month</td>
                    <td className="p-3 text-text-secondary">
                      ₹5 + GST per transaction
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">
                      UPI Transactions
                    </td>
                    <td className="p-3 text-text-secondary">Free</td>
                    <td className="p-3 text-text-secondary">Unlimited</td>
                    <td className="p-3 text-text-secondary">₹0</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-text-secondary">Cash Deposit</td>
                    <td className="p-3 text-text-secondary">
                      Free (up to ₹10,000)
                    </td>
                    <td className="p-3 text-text-secondary">5 per month</td>
                    <td className="p-3 text-text-secondary">
                      ₹3 per ₹1,000 + GST
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Loan Processing Charges */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Loan Processing Charges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold text-text-primary">
                      Loan Type
                    </th>
                    <th className="text-left p-3 font-semibold text-text-primary">
                      Processing Fee
                    </th>
                    <th className="text-left p-3 font-semibold text-text-primary">
                      Prepayment Charges
                    </th>
                    <th className="text-left p-3 font-semibold text-text-primary">
                      Late Payment Charges
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">Personal Loan</td>
                    <td className="p-3 text-text-secondary">
                      2% of loan amount + GST
                    </td>
                    <td className="p-3 text-text-secondary">
                      4% of outstanding principal
                    </td>
                    <td className="p-3 text-text-secondary">
                      2% per month + GST
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">Home Loan</td>
                    <td className="p-3 text-text-secondary">
                      1% of loan amount + GST
                    </td>
                    <td className="p-3 text-text-secondary">
                      2% of outstanding principal
                    </td>
                    <td className="p-3 text-text-secondary">
                      2% per month + GST
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-text-secondary">Car Loan</td>
                    <td className="p-3 text-text-secondary">
                      1.5% of loan amount + GST
                    </td>
                    <td className="p-3 text-text-secondary">
                      3% of outstanding principal
                    </td>
                    <td className="p-3 text-text-secondary">
                      2% per month + GST
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-text-secondary">Business Loan</td>
                    <td className="p-3 text-text-secondary">
                      2% of loan amount + GST
                    </td>
                    <td className="p-3 text-text-secondary">
                      4% of outstanding principal
                    </td>
                    <td className="p-3 text-text-secondary">
                      2% per month + GST
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Other Service Charges */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Other Service Charges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">
                  Documentation Charges
                </h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex justify-between">
                    <span>Account Statement (Physical)</span>
                    <span className="font-semibold">₹50 + GST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Account Statement (Email)</span>
                    <span className="font-semibold">Free</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Certificate (Balance/Interest)</span>
                    <span className="font-semibold">₹100 + GST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Duplicate Passbook</span>
                    <span className="font-semibold">₹150 + GST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Stop Payment Cheque</span>
                    <span className="font-semibold">₹50 + GST</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">
                  Miscellaneous Charges
                </h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex justify-between">
                    <span>Dormant Account Activation</span>
                    <span className="font-semibold">₹200 + GST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Signature Change</span>
                    <span className="font-semibold">₹100 + GST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Address Change</span>
                    <span className="font-semibold">₹50 + GST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mobile Number Change</span>
                    <span className="font-semibold">Free</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Email ID Change</span>
                    <span className="font-semibold">Free</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  GST Applicability
                </h4>
                <p className="text-blue-800 text-sm">
                  All charges mentioned above are exclusive of GST. Applicable
                  GST rates will be charged as per government regulations.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">
                  Charge Revision
                </h4>
                <p className="text-green-800 text-sm">
                  Service charges are subject to revision. Customers will be
                  informed of any changes through appropriate channels.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">
                  Waiver Policy
                </h4>
                <p className="text-yellow-800 text-sm">
                  Certain charges may be waived for priority customers, senior
                  citizens, and special categories as per bank policy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Need Help with Service Charges?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Contact our customer service team or visit your nearest MNS Bank
              branch for detailed information about service charges and fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8" asChild>
                <Link href="/contact-us">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <Link href="/branch-locator">Find Branch</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
