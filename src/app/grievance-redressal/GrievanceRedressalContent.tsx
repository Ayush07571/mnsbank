'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { EscalationMatrix } from '@/components/compliance/EscalationMatrix';
import InquiryForm from '@/components/forms/InquiryForm';

export default function GrievanceRedressalContent() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Grievance Redressal
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl">
            At MNS Bank, we are committed to providing excellent customer service. 
            If you have any grievances, we have a structured redressal mechanism to address your concerns promptly.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="py-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                Toll-Free Number
              </h3>
              <p className="text-2xl font-bold text-brand-primary mb-4">
                1800-123-4567
              </p>
              <p className="text-sm text-text-secondary">
                Available 24/7 for immediate assistance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="py-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                Email Support
              </h3>
              <p className="text-lg font-medium text-brand-primary mb-4">
                support@mnsbankbhopal.com
              </p>
              <p className="text-sm text-text-secondary">
                We respond within 24 working hours
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="py-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                RBI CMS Portal
              </h3>
              <Button variant="outline" size="sm" className="mt-2" asChild>
                <a 
                  href="https://cms.rbi.org.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Visit Portal
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Button>
              <p className="text-sm text-text-secondary mt-2">
                RBI Complaint Management System
              </p>
            </CardContent>
          </Card>
        </div>

        {/* RBI Compliance Notice */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary flex items-center space-x-2">
              <svg className="w-6 h-6 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>RBI Compliance Notice</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-text-secondary">
                MNS Bank is fully compliant with RBI guidelines on customer grievance redressal. 
                As per RBI Master Direction, we are committed to:
              </p>
              <ul className="text-text-secondary space-y-2">
                <li>• Resolve all customer grievances within 30 days of receipt</li>
                <li>• Provide acknowledgment with unique grievance reference number</li>
                <li>• Maintain proper records of all grievances and their resolutions</li>
                <li>• Display grievance redressal mechanism prominently</li>
                <li>• Appoint a senior officer as Grievance Redressal Officer</li>
              </ul>
              <div className="bg-surface border border-border rounded-lg p-4">
                <h4 className="font-semibold text-text-primary mb-2">Grievance Redressal Officer</h4>
                <p className="text-text-secondary text-sm">
                  <strong>Name:</strong> Chief Operating Officer<br />
                  <strong>Email:</strong> grievance.officer@mnsbankbhopal.com<br />
                  <strong>Phone:</strong> 0755-3456789<br />
                  <strong>Address:</strong> Corporate Office, Bhopal
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Escalation Matrix */}
        <EscalationMatrix />

        {/* Grievance Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">
              File a Grievance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-text-secondary mb-6">
              If you have any complaints or grievances, please fill out the form below. 
              We will acknowledge your grievance within 2 working days and resolve it within 30 days.
            </p>
            <InquiryForm 
              productSlug="grievance"
              onSuccess={(referenceNumber) => {
                alert(`Grievance submitted successfully! Reference: ${referenceNumber}`);
              }}
              onError={(error) => {
                alert(`Submission failed: ${error}`);
              }}
            />
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Other Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Branch Offices</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                  <div>
                    <strong>Head Office - Bairagarh:</strong><br />
                    123 Main Street, Bhopal, MP 462016<br />
                    Phone: 0755-1234567
                  </div>
                  <div>
                    <strong>TT Nagar Branch:</strong><br />
                    45 TT Nagar, Bhopal, MP 462003<br />
                    Phone: 0755-2345678
                  </div>
                  <div>
                    <strong>Karond Branch:</strong><br />
                    789 Karond, Bhopal, MP 462016<br />
                    Phone: 0755-3456789
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Working Hours</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                  <div>
                    <strong>Monday to Saturday:</strong><br />
                    9:30 AM - 4:00 PM
                  </div>
                  <div>
                    <strong>Second & Fourth Saturday:</strong><br />
                    Bank Holiday
                  </div>
                  <div>
                    <strong>Sunday & Public Holidays:</strong><br />
                    Bank Holiday
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Links */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Important Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start" asChild>
                <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer">
                  RBI Complaint Management System
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a href="https://rbi.org.in" target="_blank" rel="noopener noreferrer">
                  Reserve Bank of India
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a href="/deaf-unclaimed-deposits">
                  DEAF Unclaimed Deposits
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a href="/customer-protection">
                  Customer Protection Policy
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
