import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import IfscCodesTable from '@/components/IfscCodesTable';

export const metadata: Metadata = {
  title: 'IFSC Codes - MNS Bank Branch Codes | MNS Bank',
  description: 'Find MNS Bank IFSC codes for all branches. Search by branch name, city, or IFSC code. Complete list of MNS Bank branch IFSC codes.',
  keywords: 'IFSC codes, MNS Bank IFSC, bank IFSC codes, branch codes, bank branches, IFSC search',
};

export default function IfscCodesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              MNS Bank IFSC Codes
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Find IFSC codes for all MNS Bank branches. Search by branch name, city, or IFSC code for seamless fund transfers.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="py-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Search IFSC/Branch/City
                </label>
                <input
                  type="text"
                  placeholder="Enter IFSC code, branch name, or city..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Filter by State
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                >
                  <option value="all">All States</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Total Branches
                </label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-brand-primary">20</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* IFSC Codes Table */}
        <IfscCodesTable />

        {/* Important Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-text-primary">
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">About IFSC Code</h3>
                <p className="text-text-secondary mb-4">
                  IFSC (Indian Financial System Code) is an 11-character alphanumeric code that facilitates electronic fund transfers in India.
                </p>
                <p className="text-text-secondary mb-4">
                  MNS Bank IFSC codes follow the format: MNSB + 7-digit branch code
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-text-secondary">
                    <strong>Format:</strong> MNSBXXXXXXX
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Example:</strong> MNSB0000001
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">How to Find IFSC</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Check your cheque book leaf or passbook</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Visit our website IFSC search page</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Contact our customer service</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Check RBI website for bank details</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-text-primary">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">What is IFSC code?</h3>
                <p className="text-text-secondary">IFSC (Indian Financial System Code) is an 11-character alphanumeric code used to identify bank branches in India for electronic fund transfers.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">How can I find MNS Bank IFSC code?</h3>
                <p className="text-text-secondary">You can find MNS Bank IFSC codes on our website, in your cheque book, passbook, or by contacting our customer service.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Is IFSC code mandatory for fund transfers?</h3>
                <p className="text-text-secondary">Yes, IFSC code is mandatory for NEFT, RTGS, and IMPS transfers to identify the beneficiary's bank branch.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Can I transfer funds without IFSC code?</h3>
                <p className="text-text-secondary">No, IFSC code is required for all electronic fund transfers to ensure the money reaches the correct branch.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="mt-8">
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Need Help Finding IFSC Code?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Contact our customer service team for assistance in finding the correct IFSC code for your transactions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Customer Care</h3>
                <p className="text-text-secondary">1800-123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Email</h3>
                <p className="text-text-secondary">support@mnsbank.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">WhatsApp</h3>
                <p className="text-text-secondary">+91 98765 43210</p>
              </div>
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