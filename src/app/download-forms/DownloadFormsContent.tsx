'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface FormDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  size: string;
  downloadUrl: string;
  format: string;
}

const formDocuments: FormDocument[] = [
  // Account Opening Forms
  {
    id: 'savings-account',
    title: 'Savings Account Opening Form',
    description: 'Complete form for opening a new savings account with MNS Bank',
    category: 'Account Opening',
    lastUpdated: '2024-03-01',
    size: '245 KB',
    downloadUrl: '/forms/savings-account.pdf',
    format: 'PDF',
  },
  {
    id: 'current-account',
    title: 'Current Account Opening Form',
    description: 'Form for opening a current account for business and professional use',
    category: 'Account Opening',
    lastUpdated: '2024-03-01',
    size: '268 KB',
    downloadUrl: '/forms/current-account.pdf',
    format: 'PDF',
  },
  {
    id: 'fixed-deposit',
    title: 'Fixed Deposit Account Form',
    description: 'Application form for opening fixed deposit accounts',
    category: 'Account Opening',
    lastUpdated: '2024-03-01',
    size: '189 KB',
    downloadUrl: '/forms/fixed-deposit.pdf',
    format: 'PDF',
  },
  {
    id: 'recurring-deposit',
    title: 'Recurring Deposit Account Form',
    description: 'Form for opening recurring deposit accounts',
    category: 'Account Opening',
    lastUpdated: '2024-03-01',
    size: '195 KB',
    downloadUrl: '/forms/recurring-deposit.pdf',
    format: 'PDF',
  },
  
  // Loan Application Forms
  {
    id: 'personal-loan',
    title: 'Personal Loan Application Form',
    description: 'Complete application for personal loans up to ₹10 lakhs',
    category: 'Loan Applications',
    lastUpdated: '2024-03-01',
    size: '312 KB',
    downloadUrl: '/forms/personal-loan.pdf',
    format: 'PDF',
  },
  {
    id: 'home-loan',
    title: 'Home Loan Application Form',
    description: 'Comprehensive form for home loan applications',
    category: 'Loan Applications',
    lastUpdated: '2024-03-01',
    size: '456 KB',
    downloadUrl: '/forms/home-loan.pdf',
    format: 'PDF',
  },
  {
    id: 'car-loan',
    title: 'Car Loan Application Form',
    description: 'Application form for new and used car loans',
    category: 'Loan Applications',
    lastUpdated: '2024-03-01',
    size: '289 KB',
    downloadUrl: '/forms/car-loan.pdf',
    format: 'PDF',
  },
  {
    id: 'business-loan',
    title: 'Business Loan Application Form',
    description: 'Form for business and MSME loan applications',
    category: 'Loan Applications',
    lastUpdated: '2024-03-01',
    size: '398 KB',
    downloadUrl: '/forms/business-loan.pdf',
    format: 'PDF',
  },
  {
    id: 'gold-loan',
    title: 'Gold Loan Application Form',
    description: 'Quick application for gold loans against gold ornaments',
    category: 'Loan Applications',
    lastUpdated: '2024-03-01',
    size: '234 KB',
    downloadUrl: '/forms/gold-loan.pdf',
    format: 'PDF',
  },
  
  // KYC Forms
  {
    id: 'kyc-form',
    title: 'KYC Form',
    description: 'Know Your Customer form for all banking services',
    category: 'KYC Forms',
    lastUpdated: '2024-03-01',
    size: '156 KB',
    downloadUrl: '/forms/kyc-form.pdf',
    format: 'PDF',
  },
  {
    id: 'ckyc-form',
    title: 'CKYC Form',
    description: 'Central KYC form for unified KYC across financial institutions',
    category: 'KYC Forms',
    lastUpdated: '2024-03-01',
    size: '178 KB',
    downloadUrl: '/forms/ckyc-form.pdf',
    format: 'PDF',
  },
  {
    id: 'pan-update',
    title: 'PAN Update Form',
    description: 'Form for updating PAN details in bank records',
    category: 'KYC Forms',
    lastUpdated: '2024-03-01',
    size: '98 KB',
    downloadUrl: '/forms/pan-update.pdf',
    format: 'PDF',
  },
  {
    id: 'aadhaar-update',
    title: 'Aadhaar Update Form',
    description: 'Form for updating Aadhaar details in bank records',
    category: 'KYC Forms',
    lastUpdated: '2024-03-01',
    size: '112 KB',
    downloadUrl: '/forms/aadhaar-update.pdf',
    format: 'PDF',
  },
  
  // Service Forms
  {
    id: 'cheque-book',
    title: 'Cheque Book Request Form',
    description: 'Request form for new cheque book issuance',
    category: 'Service Requests',
    lastUpdated: '2024-03-01',
    size: '67 KB',
    downloadUrl: '/forms/cheque-book.pdf',
    format: 'PDF',
  },
  {
    id: 'debit-card',
    title: 'Debit Card Application Form',
    description: 'Application form for new debit card issuance',
    category: 'Service Requests',
    lastUpdated: '2024-03-01',
    size: '145 KB',
    downloadUrl: '/forms/debit-card.pdf',
    format: 'PDF',
  },
  {
    id: 'credit-card',
    title: 'Credit Card Application Form',
    description: 'Application form for MNS Bank credit cards',
    category: 'Service Requests',
    lastUpdated: '2024-03-01',
    size: '234 KB',
    downloadUrl: '/forms/credit-card.pdf',
    format: 'PDF',
  },
  {
    id: 'internet-banking',
    title: 'Internet Banking Registration Form',
    description: 'Registration form for net banking services',
    category: 'Service Requests',
    lastUpdated: '2024-03-01',
    size: '89 KB',
    downloadUrl: '/forms/internet-banking.pdf',
    format: 'PDF',
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking Registration Form',
    description: 'Form for registering mobile banking services',
    category: 'Service Requests',
    lastUpdated: '2024-03-01',
    size: '78 KB',
    downloadUrl: '/forms/mobile-banking.pdf',
    format: 'PDF',
  },
  
  // Government Schemes
  {
    id: 'pm-jan-dhan',
    title: 'PM Jan Dhan Yojana Form',
    description: 'Application form for Pradhan Mantri Jan Dhan Yojana',
    category: 'Government Schemes',
    lastUpdated: '2024-03-01',
    size: '198 KB',
    downloadUrl: '/forms/pm-jan-dhan.pdf',
    format: 'PDF',
  },
  {
    id: 'sukanya-samriddhi',
    title: 'Sukanya Samriddhi Account Form',
    description: 'Application form for Sukanya Samriddhi Yojana',
    category: 'Government Schemes',
    lastUpdated: '2024-03-01',
    size: '167 KB',
    downloadUrl: '/forms/sukanya-samriddhi.pdf',
    format: 'PDF',
  },
  {
    id: 'ppf-account',
    title: 'PPF Account Opening Form',
    description: 'Form for opening Public Provident Fund account',
    category: 'Government Schemes',
    lastUpdated: '2024-03-01',
    size: '189 KB',
    downloadUrl: '/forms/ppf-account.pdf',
    format: 'PDF',
  },
  
  // Miscellaneous
  {
    id: 'nomination',
    title: 'Nomination Form',
    description: 'Form for adding or updating nomination details',
    category: 'Miscellaneous',
    lastUpdated: '2024-03-01',
    size: '76 KB',
    downloadUrl: '/forms/nomination.pdf',
    format: 'PDF',
  },
  {
    id: 'joint-account',
    title: 'Joint Account Opening Form',
    description: 'Form for opening joint accounts with multiple holders',
    category: 'Miscellaneous',
    lastUpdated: '2024-03-01',
    size: '234 KB',
    downloadUrl: '/forms/joint-account.pdf',
    format: 'PDF',
  },
  {
    id: 'minor-account',
    title: 'Minor Account Opening Form',
    description: 'Form for opening accounts for minors',
    category: 'Miscellaneous',
    lastUpdated: '2024-03-01',
    size: '156 KB',
    downloadUrl: '/forms/minor-account.pdf',
    format: 'PDF',
  },
];

const categories = Array.from(new Set(formDocuments.map(form => form.category)));

export default function DownloadFormsContent() {
  const handleDownload = (form: FormDocument) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading: ${form.title}`);
    alert(`Downloading: ${form.title}\n\nIn production, this would download the actual ${form.format} file.\n\nSize: ${form.size}`);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Download Forms
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl">
            Download all necessary banking forms for account opening, loan applications, KYC, and other services. 
            All forms are available in PDF format for easy printing and submission.
          </p>
        </div>

        {/* Important Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary flex items-center space-x-2">
              <svg className="w-6 h-6 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Important Instructions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex items-start space-x-2">
                <span className="text-brand-accent mt-1">•</span>
                <span>Fill the forms completely and accurately to avoid delays in processing</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-brand-accent mt-1">•</span>
                <span>Attach required documents (ID proof, address proof, photographs, etc.)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-brand-accent mt-1">•</span>
                <span>Sign the form in all required places before submission</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-brand-accent mt-1">•</span>
                <span>Submit forms along with required documents at any MNS Bank branch</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-brand-accent mt-1">•</span>
                <span>For assistance, please call our customer service at 1800-123-4567</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Filter by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // In a real implementation, this would filter the forms
                    console.log(`Filter by: ${category}`);
                  }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Forms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {formDocuments.map((form) => (
            <Card key={form.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-brand-accent/10 text-brand-accent rounded mb-2">
                      {form.category}
                    </span>
                    <CardTitle className="text-text-primary text-lg">
                      {form.title}
                    </CardTitle>
                  </div>
                  <div className="w-10 h-10 bg-brand-primary/10 rounded flex items-center justify-center flex-shrink-0 ml-3">
                    <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-sm mb-4">
                  {form.description}
                </p>
                <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                  <span>Updated: {new Date(form.lastUpdated).toLocaleDateString()}</span>
                  <span>{form.size}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleDownload(form)}
                  >
                    Download {form.format}
                  </Button>
                  <span className="text-xs text-text-secondary">
                    {form.format}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Required Documents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Common Required Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-3">For Account Opening</h3>
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Passport size photographs (2-3)</li>
                  <li>ID proof (Aadhaar, PAN, Voter ID, Passport)</li>
                  <li>Address proof (Utility bill, rent agreement)</li>
                  <li>PAN card (mandatory)</li>
                  <li>Signature proof</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-3">For Loan Applications</h3>
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Income proof (salary slips, IT returns)</li>
                  <li>Bank statements (last 6 months)</li>
                  <li>Property documents (for secured loans)</li>
                  <li>Business proof (for business loans)</li>
                  <li>Existing loan statements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p><strong>Customer Service:</strong> 1800-123-4567</p>
                  <p><strong>Email:</strong> support@mnsbankbhopal.com</p>
                  <p><strong>Working Hours:</strong> 9:30 AM - 4:00 PM (Mon-Sat)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Branch Locations</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p><strong>Head Office:</strong> Bairagarh, Bhopal</p>
                  <p><strong>TT Nagar Branch:</strong> TT Nagar, Bhopal</p>
                  <p><strong>Karond Branch:</strong> Karond, Bhopal</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
