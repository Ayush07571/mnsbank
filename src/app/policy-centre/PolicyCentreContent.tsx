'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface PolicyDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  size: string;
  downloadUrl: string;
}

const policyDocuments: PolicyDocument[] = [
  {
    id: 'fair-practices',
    title: 'Fair Practices Code',
    description: 'Comprehensive guide to our commitment to fair and transparent banking practices',
    category: 'Customer Protection',
    lastUpdated: '2024-01-15',
    size: '2.3 MB',
    downloadUrl: '/policies/fair-practices-code.pdf',
  },
  {
    id: 'citizens-charter',
    title: 'Citizens Charter',
    description: 'Our commitment to service standards and customer rights',
    category: 'Customer Protection',
    lastUpdated: '2024-01-15',
    size: '1.8 MB',
    downloadUrl: '/policies/citizens-charter.pdf',
  },
  {
    id: 'interest-rates',
    title: 'Schedule of Interest Rates',
    description: 'Current interest rates applicable to various deposit and loan products',
    category: 'Products & Services',
    lastUpdated: '2024-03-01',
    size: '856 KB',
    downloadUrl: '/policies/interest-rates.pdf',
  },
  {
    id: 'service-charges',
    title: 'Schedule of Service Charges',
    description: 'Detailed list of charges applicable to various banking services',
    category: 'Products & Services',
    lastUpdated: '2024-03-01',
    size: '1.2 MB',
    downloadUrl: '/policies/service-charges.pdf',
  },
  {
    id: 'terms-conditions',
    title: 'Terms and Conditions',
    description: 'General terms and conditions for banking services',
    category: 'Legal',
    lastUpdated: '2024-01-15',
    size: '3.1 MB',
    downloadUrl: '/policies/terms-conditions.pdf',
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information',
    category: 'Legal',
    lastUpdated: '2024-01-15',
    size: '945 KB',
    downloadUrl: '/policies/privacy-policy.pdf',
  },
  {
    id: 'grievance-redressal',
    title: 'Grievance Redressal Policy',
    description: 'Procedures for addressing customer complaints and grievances',
    category: 'Customer Protection',
    lastUpdated: '2024-01-15',
    size: '1.5 MB',
    downloadUrl: '/policies/grievance-redressal.pdf',
  },
  {
    id: 'deaf-policy',
    title: 'DEAF Policy',
    description: 'Depositor Education and Awareness Fund policy and procedures',
    category: 'Regulatory Compliance',
    lastUpdated: '2024-02-01',
    size: '2.1 MB',
    downloadUrl: '/policies/deaf-policy.pdf',
  },
  {
    id: 'kyc-policy',
    title: 'KYC Policy',
    description: 'Know Your Customer policy and procedures',
    category: 'Regulatory Compliance',
    lastUpdated: '2024-01-15',
    size: '1.8 MB',
    downloadUrl: '/policies/kyc-policy.pdf',
  },
  {
    id: 'aml-policy',
    title: 'Anti-Money Laundering Policy',
    description: 'AML and CFT policy framework',
    category: 'Regulatory Compliance',
    lastUpdated: '2024-01-15',
    size: '2.5 MB',
    downloadUrl: '/policies/aml-policy.pdf',
  },
];

const categories = Array.from(new Set(policyDocuments.map(doc => doc.category)));

export default function PolicyCentreContent() {
  const handleDownload = (document: PolicyDocument) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading: ${document.title}`);
    alert(`Downloading: ${document.title}\n\nIn production, this would download the actual PDF file.`);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Policy Centre
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl">
            Access all MNS Bank policies, procedures, and regulatory guidelines. Download important documents for your reference.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary flex items-center space-x-2">
              <svg className="w-6 h-6 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Important Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                All policies are updated regularly to reflect regulatory changes and bank procedures. 
                Please ensure you have the latest version of any document.
              </p>
              <p>
                For any queries regarding our policies, please contact our customer service at 1800-123-4567 
                or email us at support@mnsbankbhopal.com
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Filter by Category */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Browse by Category
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
                    // In a real implementation, this would filter the documents
                    console.log(`Filter by: ${category}`);
                  }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Policy Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {policyDocuments.map((document) => (
            <Card key={document.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-brand-accent/10 text-brand-accent rounded mb-2">
                      {document.category}
                    </span>
                    <CardTitle className="text-text-primary text-lg">
                      {document.title}
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
                  {document.description}
                </p>
                <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                  <span>Updated: {new Date(document.lastUpdated).toLocaleDateString()}</span>
                  <span>Size: {document.size}</span>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => handleDownload(document)}
                >
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
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
                <h3 className="font-semibold text-text-primary mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="/grievance-redressal">Grievance Redressal</a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="/deaf-unclaimed-deposits">DEAF Information</a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="/contact-us">Contact Us</a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
