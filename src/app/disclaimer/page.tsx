import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Disclaimer | MNS Bank',
  description:
    'Legal disclaimer for MNS Bank website, services, and financial information.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl text-text-primary mb-4">
            Disclaimer
          </h1>
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <span>Last Updated: January 15, 2024</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-brand-accent/20">
          <CardHeader>
            <CardTitle className="text-text-primary flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-brand-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>General Disclaimer</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                The information provided on this website is for general
                informational purposes only. While we endeavour to keep the
                information up to date and correct, MNS Bank makes no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or
                availability with respect to the website or the information,
                products, services, or related graphics contained on the website
                for any purpose.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer Content */}
        <div className="space-y-8">
          {/* No Financial Advice */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                1. No Financial Advice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                The content on this website does not constitute financial,
                investment, or professional advice. Users are advised to seek
                independent professional advice before making any financial
                decisions based on the information provided here.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                2. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                In no event will MNS Bank be liable for any loss or damage
                including without limitation, indirect or consequential loss or
                damage, or any loss or damage whatsoever arising from loss of
                data or profits arising out of, or in connection with, the use
                of this website.
              </p>
            </CardContent>
          </Card>

          {/* External Links */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                3. External Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                Through this website, you may be able to link to other websites
                which are not under the control of MNS Bank. We have no control
                over the nature, content, and availability of those sites. The
                inclusion of any links does not necessarily imply a
                recommendation or endorse the views expressed within them.
              </p>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                4. Service Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                Every effort is made to keep the website up and running
                smoothly. However, MNS Bank takes no responsibility for, and
                will not be liable for, the website being temporarily
                unavailable due to technical issues beyond our control.
              </p>
            </CardContent>
          </Card>

          {/* Regulatory Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                5. Regulatory Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                MNS Bank is regulated by the Reserve Bank of India (RBI). All
                banking services are subject to RBI guidelines and the
                bank&apos;s internal policies as updated from time to time.
              </p>
            </CardContent>
          </Card>

          {/* Accuracy of Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-text-primary">
                6. Accuracy of Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary">
                While we strive for accuracy, interest rates, service charges,
                and product features shown on the website are subject to change
                without prior notice. Please contact your nearest branch for the
                most current information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
