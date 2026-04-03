import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Privacy Policy | MNS Bank',
  description: 'MNS Bank Privacy Policy compliant with DPDP Act 2023 - How we collect, use, and protect your personal information',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <span>Last Updated: January 15, 2024</span>
            <span>•</span>
            <span>Effective Date: January 15, 2024</span>
          </div>
        </div>

        {/* DPDP Act Notice */}
        <Card className="mb-8 border-brand-accent/20">
          <CardHeader>
            <CardTitle className="text-text-primary flex items-center space-x-2">
              <svg className="w-6 h-6 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>DPDP Act 2023 Compliance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                This Privacy Policy is compliant with the Digital Personal Data Protection (DPDP) Act, 2023, 
                and outlines how MNS Bank collects, uses, stores, and protects your personal data in accordance 
                with applicable Indian laws and regulations.
              </p>
              <p>
                By using our services, you consent to the collection and use of your personal information 
                as described in this policy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                1. Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                MNS Bank (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the 
                security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your personal data when you interact with our banking services.
              </p>
              <p className="text-text-secondary">
                This policy applies to all personal data collected by MNS Bank through our website, mobile 
                applications, branches, ATMs, and other banking channels.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                2. Definitions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Personal Data</h4>
                  <p className="text-text-secondary text-sm">
                    Any information that can be used to identify an individual, including but not limited to name, 
                    address, phone number, email address, PAN, Aadhaar number, account details, and biometric data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Data Principal</h4>
                  <p className="text-text-secondary text-sm">
                    The individual to whom the personal data relates.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Data Fiduciary</h4>
                  <p className="text-text-secondary text-sm">
                    Any person who processes personal data on behalf of another person.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Consent</h4>
                  <p className="text-text-secondary text-sm">
                    Any freely given, specific, informed, and unambiguous indication of the data principal&apos;s wishes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                3. Personal Data We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Account Opening Data</h4>
                  <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                    <li>Name, date of birth, gender, nationality</li>
                    <li>Permanent and communication addresses</li>
                    <li>Phone numbers and email addresses</li>
                    <li>PAN, Aadhaar, and other government identification</li>
                    <li>Photographs and biometric data</li>
                    <li>Occupation and income information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Transaction Data</h4>
                  <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                    <li>Account numbers and transaction details</li>
                    <li>Credit/debit card information</li>
                    <li>Loan details and repayment history</li>
                    <li>Investment and deposit information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Digital Footprint</h4>
                  <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Basis for Processing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                4. Legal Basis for Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                We process your personal data only on the following legal bases as per the DPDP Act 2023:
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Consent</h4>
                  <p className="text-text-secondary text-sm">
                    We obtain your explicit consent for processing personal data for purposes such as marketing 
                    and promotional communications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Performance of Contract</h4>
                  <p className="text-text-secondary text-sm">
                    Processing is necessary for the performance of our banking services and contractual obligations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Compliance with Legal Obligations</h4>
                  <p className="text-text-secondary text-sm">
                    We process data to comply with applicable laws, regulations, and regulatory requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Legitimate Interests</h4>
                  <p className="text-text-secondary text-sm">
                    Processing is necessary for our legitimate interests, such as fraud prevention and security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                5. How We Use Your Personal Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                We use your personal data for the following purposes:
              </p>
              <ul className="text-text-secondary space-y-2 list-disc list-inside">
                <li>To provide and maintain banking services</li>
                <li>To verify your identity and prevent fraud</li>
                <li>To process transactions and maintain accounts</li>
                <li>To assess creditworthiness and manage risk</li>
                <li>To send important service communications</li>
                <li>To comply with regulatory and legal requirements</li>
                <li>To improve our products and services</li>
                <li>To provide customer support and assistance</li>
                <li>For marketing purposes (with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                6. Data Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                We may share your personal data only in the following circumstances:
              </p>
              <ul className="text-text-secondary space-y-2 list-disc list-inside">
                <li>With regulatory authorities as required by law</li>
                <li>With credit bureaus for credit assessment</li>
                <li>With government agencies for KYC/AML compliance</li>
                <li>With service providers who process data on our behalf</li>
                <li>With law enforcement agencies for investigation purposes</li>
                <li>With other banks for inter-bank transactions</li>
              </ul>
              <p className="text-text-secondary text-sm font-medium mt-4">
                We ensure that all data sharing is done with appropriate safeguards and in compliance with applicable laws.
              </p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                7. Data Security Measures
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                We implement robust security measures to protect your personal data:
              </p>
              <ul className="text-text-secondary space-y-2 list-disc list-inside">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authorization systems</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
                <li>Secure data storage and backup systems</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                8. Your Rights Under DPDP Act 2023
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Right to Information</h4>
                  <p className="text-text-secondary text-sm">
                    You have the right to know what personal data we have collected about you and how it is being used.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Right to Correction</h4>
                  <p className="text-text-secondary text-sm">
                    You can request correction of inaccurate or incomplete personal data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Right to Erasure</h4>
                  <p className="text-text-secondary text-sm">
                    You can request deletion of your personal data in certain circumstances.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Right to Data Portability</h4>
                  <p className="text-text-secondary text-sm">
                    You can request a copy of your personal data in a machine-readable format.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Right to Grievance Redressal</h4>
                  <p className="text-text-secondary text-sm">
                    You can file complaints with us or the Data Protection Board of India.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                9. Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                We retain your personal data only as long as necessary for the purposes for which it was collected, 
                unless a longer retention period is required or permitted by law.
              </p>
              <p className="text-text-secondary">
                After the retention period expires, we securely delete or anonymize your personal data in accordance 
                with our data retention policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                10. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                If you have any questions about this Privacy Policy or wish to exercise your rights under the DPDP Act 2023, please contact us:
              </p>
              <div className="bg-surface border border-border rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <p><strong>Data Protection Officer</strong></p>
                  <p>MNS Bank</p>
                  <p>123 Main Street, Bairagarh, Bhopal, Madhya Pradesh 462016</p>
                  <p>Email: dpo@mnsbankbhopal.com</p>
                  <p>Phone: 0755-3456789</p>
                  <p>Toll-Free: 1800-123-4567</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm">
                For grievances related to data protection, you may also contact the Data Protection Board of India 
                at their official website or through their grievance redressal mechanism.
              </p>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                11. Changes to This Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                applicable laws, or regulatory requirements. We will notify you of any material changes by:
              </p>
              <ul className="text-text-secondary space-y-2 list-disc list-inside">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered customers</li>
                <li>Displaying notices in our branches and ATMs</li>
                <li>Sending SMS alerts for important updates</li>
              </ul>
              <p className="text-text-secondary">
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

