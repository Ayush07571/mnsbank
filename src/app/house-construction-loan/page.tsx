import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'House Construction Loan | MNS Bank',
  description: 'Get house construction loans at competitive interest rates with flexible repayment options from MNS Bank Bhopal',
};

export default function HouseConstructionLoanPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                House Construction Loan
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Build your dream home with MNS Bank's construction loans. Get competitive interest rates, flexible disbursement options, and expert guidance throughout your construction journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  Apply Now
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
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Step-by-Step Disbursement</h3>
                <p className="text-white/80">Funds released as construction progresses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Flexible Tenure</h3>
                <p className="text-white/80">Up to 20 years repayment period</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Low Interest</h3>
                <p className="text-white/80">Competitive rates starting from 10.5%</p>
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
            <CardTitle className="text-text-primary">House Construction Loan Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Loan Details</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Loan Amount: ₹10 Lakhs to ₹3 Crores</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interest Rate: 10.5% to 14.5% p.a.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Loan Tenure: 5 to 20 years</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Processing Fee: 0.5% of loan amount</span>
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
                    <span>Step-by-step disbursement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interest paid only on utilized amount</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible repayment options</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tax benefits on interest</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Construction Stages */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Construction Stages & Disbursement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Foundation</h3>
                <p className="text-text-secondary text-sm">20% of loan amount</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Structure</h3>
                <p className="text-text-secondary text-sm">30% of loan amount</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Finishing</h3>
                <p className="text-text-secondary text-sm">30% of loan amount</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Completion</h3>
                <p className="text-text-secondary text-sm">20% of loan amount</p>
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
                  <li>• Minimum monthly income: ₹35,000</li>
                  <li>• Work experience: Minimum 3 years</li>
                  <li>• Good credit score (650+)</li>
                  <li>• Own land or property for construction</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Property Requirements</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Clear title of the land</li>
                  <li>• Approved construction plan</li>
                  <li>• Building permits and approvals</li>
                  <li>• Location within bank's service area</li>
                  <li>• Property valuation report</li>
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
                <h3 className="font-semibold text-text-primary mb-4">Property Documents</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Land title deed and registration</li>
                  <li>• Approved construction plan</li>
                  <li>• Building permits and NOC</li>
                  <li>• Property tax receipts</li>
                  <li>• Estimate from certified architect</li>
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
                <p className="text-text-secondary text-sm">Submit application with property details</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Property Verification</h4>
                <p className="text-text-secondary text-sm">Our team verifies property documents</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Loan Approval</h4>
                <p className="text-text-secondary text-sm">Get loan approval based on eligibility</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Stage-wise Disbursement</h4>
                <p className="text-text-secondary text-sm">Funds released as construction progresses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Apply for MNS Bank house construction loan today and get step-by-step disbursement, competitive interest rates, and expert guidance throughout your construction journey.
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