import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Sitemap - All Pages | MNS Bank',
  description: 'Complete sitemap of MNS Bank website. Find all pages, services, and information in one place.',
  keywords: 'sitemap, website map, MNS Bank pages, all pages, navigation',
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Sitemap
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Navigate through all MNS Bank pages and services. Find everything you need in one comprehensive sitemap.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Home & About */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">Home & About</h2>
            <ul className="space-y-3">
              <li><Link href="/" className="text-text-secondary hover:text-brand-primary transition-colors">Home</Link></li>
              <li><a href="/about-us" className="text-text-secondary hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="/membership" className="text-text-secondary hover:text-brand-primary transition-colors">Membership</a></li>
              <li><a href="/board-of-directors" className="text-text-secondary hover:text-brand-primary transition-colors">Board of Directors</a></li>
              <li><a href="/committees" className="text-text-secondary hover:text-brand-primary transition-colors">Committees</a></li>
              <li><a href="/management" className="text-text-secondary hover:text-brand-primary transition-colors">Management</a></li>
              <li><a href="/careers" className="text-text-secondary hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="/tenders" className="text-text-secondary hover:text-brand-primary transition-colors">Tenders</a></li>
              <li><a href="/feedback" className="text-text-secondary hover:text-brand-primary transition-colors">Feedback</a></li>
              <li><a href="/sitemap" className="text-text-secondary hover:text-brand-primary transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Accounts */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">Accounts & Deposits</h2>
            <ul className="space-y-3">
              <li><a href="/savings-account" className="text-text-secondary hover:text-brand-primary transition-colors">Savings Account</a></li>
              <li><a href="/current-account" className="text-text-secondary hover:text-brand-primary transition-colors">Current Account</a></li>
              <li><a href="/double-deposit" className="text-text-secondary hover:text-brand-primary transition-colors">Double Deposit</a></li>
              <li><a href="/recurring-deposit" className="text-text-secondary hover:text-brand-primary transition-colors">Recurring Deposit</a></li>
              <li><a href="/time-deposit" className="text-text-secondary hover:text-brand-primary transition-colors">Time Deposit</a></li>
              <li><a href="/biz-double-deposit" className="text-text-secondary hover:text-brand-primary transition-colors">Business Double Deposit</a></li>
              <li><a href="/biz-recurring-deposit" className="text-text-secondary hover:text-brand-primary transition-colors">Business Recurring Deposit</a></li>
              <li><a href="/biz-time-deposit" className="text-text-secondary hover:text-brand-primary transition-colors">Business Time Deposit</a></li>
              <li><a href="/locker" className="text-text-secondary hover:text-brand-primary transition-colors">Locker Facility</a></li>
            </ul>
          </div>

          {/* Loans */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">Loans & Advances</h2>
            <ul className="space-y-3">
              <li><a href="/home-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Home Loan</a></li>
              <li><a href="/personal-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Personal Loan</a></li>
              <li><a href="/car-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Car Loan</a></li>
              <li><a href="/education-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Education Loan</a></li>
              <li><a href="/gold-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Gold Loan</a></li>
              <li><a href="/consumer-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Consumer Loan</a></li>
              <li><a href="/professional-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Professional Loan</a></li>
              <li><a href="/self-employed-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Self Employed Loan</a></li>
              <li><a href="/transport-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Transport Loan</a></li>
              <li><a href="/festival-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Festival Loan</a></li>
              <li><a href="/house-construction-loan" className="text-text-secondary hover:text-brand-primary transition-colors">House Construction Loan</a></li>
              <li><a href="/loan-against-fd" className="text-text-secondary hover:text-brand-primary transition-colors">Loan Against FD</a></li>
              <li><a href="/loan-against-property" className="text-text-secondary hover:text-brand-primary transition-colors">Loan Against Property</a></li>
              <li><a href="/loan-against-nsc" className="text-text-secondary hover:text-brand-primary transition-colors">Loan Against NSC</a></li>
              <li><a href="/working-capital-loan" className="text-text-secondary hover:text-brand-primary transition-colors">Working Capital Loan</a></li>
              <li><a href="/overdraft-facility" className="text-text-secondary hover:text-brand-primary transition-colors">Overdraft Facility</a></li>
              <li><a href="/mortgage-overdraft" className="text-text-secondary hover:text-brand-primary transition-colors">Mortgage Overdraft</a></li>
              <li><a href="/micro-finance" className="text-text-secondary hover:text-brand-primary transition-colors">Micro Finance</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">Banking Services</h2>
            <ul className="space-y-3">
              <li><a href="/mobile-banking" className="text-text-secondary hover:text-brand-primary transition-colors">Mobile Banking</a></li>
              <li><a href="/net-banking" className="text-text-secondary hover:text-brand-primary transition-colors">Net Banking</a></li>
              <li><a href="/upi-qr" className="text-text-secondary hover:text-brand-primary transition-colors">UPI & QR Services</a></li>
              <li><a href="/bbps" className="text-text-secondary hover:text-brand-primary transition-colors">BBPS</a></li>
              <li><a href="/atm" className="text-text-secondary hover:text-brand-primary transition-colors">ATM Services</a></li>
              <li><a href="/debit-cards" className="text-text-secondary hover:text-brand-primary transition-colors">Debit Cards</a></li>
              <li><a href="/imps" className="text-text-secondary hover:text-brand-primary transition-colors">IMPS</a></li>
              <li><a href="/sms-banking" className="text-text-secondary hover:text-brand-primary transition-colors">SMS Banking</a></li>
              <li><a href="/neft-rtgs" className="text-text-secondary hover:text-brand-primary transition-colors">NEFT/RTGS</a></li>
              <li><a href="/pan" className="text-text-secondary hover:text-brand-primary transition-colors">PAN Services</a></li>
              <li><a href="/pm-jeevan-yojana" className="text-text-secondary hover:text-brand-primary transition-colors">PM Jeevan Yojana</a></li>
              <li><a href="/pm-suraksha-yojana" className="text-text-secondary hover:text-brand-primary transition-colors">PM Suraksha Yojana</a></li>
              <li><a href="/positive-pay" className="text-text-secondary hover:text-brand-primary transition-colors">Positive Pay System</a></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-8">
          {/* Information */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">Information</h2>
            <ul className="space-y-3">
              <li><a href="/annual-reports" className="text-text-secondary hover:text-brand-primary transition-colors">Annual Reports</a></li>
              <li><a href="/interest-rates" className="text-text-secondary hover:text-brand-primary transition-colors">Interest Rates</a></li>
              <li><a href="/service-charges" className="text-text-secondary hover:text-brand-primary transition-colors">Service Charges</a></li>
              <li><a href="/ifsc-codes" className="text-text-secondary hover:text-brand-primary transition-colors">IFSC Codes</a></li>
              <li><a href="/cyber-awareness" className="text-text-secondary hover:text-brand-primary transition-colors">Cyber Awareness</a></li>
              <li><a href="/download-forms" className="text-text-secondary hover:text-brand-primary transition-colors">Download Forms</a></li>
              <li><a href="/policy-centre" className="text-text-secondary hover:text-brand-primary transition-colors">Policy Centre</a></li>
              <li><a href="/grievance-redressal" className="text-text-secondary hover:text-brand-primary transition-colors">Grievance Redressal</a></li>
              <li><a href="/privacy-policy" className="text-text-secondary hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/emi-calculator" className="text-text-secondary hover:text-brand-primary transition-colors">EMI Calculator</a></li>
              <li><a href="/kyc-ckyc" className="text-text-secondary hover:text-brand-primary transition-colors">KYC/CKYC</a></li>
              <li><a href="/deaf-unclaimed-deposits" className="text-text-secondary hover:text-brand-primary transition-colors">Unclaimed Deposits</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">Locations & Contact</h2>
            <ul className="space-y-3">
              <li><a href="/branch-locator" className="text-text-secondary hover:text-brand-primary transition-colors">Branch Locator</a></li>
              <li><a href="/atm-locator" className="text-text-secondary hover:text-brand-primary transition-colors">ATM Locator</a></li>
              <li><a href="/locate-us" className="text-text-secondary hover:text-brand-primary transition-colors">Locate Us</a></li>
              <li><a href="/contact-us" className="text-text-secondary hover:text-brand-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Optional Services */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">Optional Services</h2>
            <ul className="space-y-3">
              <li><a href="/insurance" className="text-text-secondary hover:text-brand-primary transition-colors">Insurance Services</a></li>
              <li><a href="/mutual-funds" className="text-text-secondary hover:text-brand-primary transition-colors">Mutual Funds</a></li>
              <li><a href="/demat" className="text-text-secondary hover:text-brand-primary transition-colors">Demat Services</a></li>
              <li><a href="/asba" className="text-text-secondary hover:text-brand-primary transition-colors">ASBA Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">Quick Links</h2>
            <ul className="space-y-3">
              <li><a href="/net-banking" className="text-text-secondary hover:text-brand-primary transition-colors">Login to Net Banking</a></li>
              <li><a href="/download-forms" className="text-text-secondary hover:text-brand-primary transition-colors">Download Forms</a></li>
              <li><a href="/emi-calculator" className="text-text-secondary hover:text-brand-primary transition-colors">Calculate EMI</a></li>
              <li><a href="/feedback" className="text-text-secondary hover:text-brand-primary transition-colors">Give Feedback</a></li>
              <li><a href="/careers" className="text-text-secondary hover:text-brand-primary transition-colors">Join Our Team</a></li>
            </ul>
          </div>
        </div>

        {/* Statistics */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Website Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">60+</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Total Pages</h3>
                <p className="text-text-secondary">Comprehensive coverage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">18</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Loan Products</h3>
                <p className="text-text-secondary">Diverse loan options</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">13</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Digital Services</h3>
                <p className="text-text-secondary">Modern banking solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">24/7</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Support</h3>
                <p className="text-text-secondary">Always available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-8">
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Need Help Finding Something?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our customer service team is here to help you navigate our website and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8" onClick={() => window.location.href = '/contact-us'}>
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={() => window.location.href = '/contact-us'}>
                Send Feedback
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

