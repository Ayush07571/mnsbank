import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import FeedbackForm from '@/components/FeedbackForm';

export const metadata: Metadata = {
  title: 'Feedback & Complaints - Customer Service | MNS Bank',
  description: 'Share your feedback or file complaints with MNS Bank. We value your feedback and are committed to excellent customer service.',
  keywords: 'customer feedback, complaints, customer service, grievance redressal, bank feedback',
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Feedback & Complaints
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              We value your feedback and are committed to providing excellent customer service. Share your experience or report any concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <div className="md:col-span-2">
            <FeedbackForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-text-primary">
                  Other Ways to Reach Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Customer Care</h3>
                    <p className="text-text-secondary">1800-123-4567</p>
                    <p className="text-sm text-text-secondary">24/7 Available</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Email Support</h3>
                    <p className="text-text-secondary">support@mnsbank.com</p>
                    <p className="text-sm text-text-secondary">Response within 24 hours</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">WhatsApp</h3>
                    <p className="text-text-secondary">+91 98765 43210</p>
                    <p className="text-sm text-text-secondary">9 AM - 6 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grievance Redressal */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-text-primary">
                  Grievance Redressal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary mb-4">
                  For unresolved issues, you can escalate to our grievance redressal cell.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-text-secondary">
                    <strong>Email:</strong> grievance@mnsbank.com
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Phone:</strong> 1800-987-6543
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Nodal Officer:</strong> 1800-876-5432
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-text-primary">
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">General Queries</span>
                    <span className="text-brand-primary font-semibold">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Service Issues</span>
                    <span className="text-brand-primary font-semibold">48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Complaints</span>
                    <span className="text-brand-primary font-semibold">3-5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Grievances</span>
                    <span className="text-brand-primary font-semibold">7 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">How long does it take to resolve a complaint?</h3>
                <p className="text-text-secondary">Most complaints are resolved within 3-5 business days. Complex issues may take up to 30 days as per RBI guidelines.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Will I receive a confirmation for my feedback?</h3>
                <p className="text-text-secondary">Yes, you will receive an email confirmation with a reference number to track your feedback status.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">What if I&apos;m not satisfied with the resolution?</h3>
                <p className="text-text-secondary">You can escalate the issue to our grievance redressal cell or contact the Banking Ombudsman.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Is my feedback kept confidential?</h3>
                <p className="text-text-secondary">Yes, all feedback is kept confidential and used only for improving our services.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}