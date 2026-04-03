import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Sitemap - All Pages | MNS Bank',
  description:
    'Complete sitemap of MNS Bank website. Find all pages, services, and information in one place.',
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
              Navigate through all MNS Bank pages and services. Find everything
              you need in one comprehensive sitemap.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Home & About */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
              Home & About
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/board-of-directors"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link
                  href="/committees"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Committees
                </Link>
              </li>
              <li>
                <Link
                  href="/management"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Management
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/tenders"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Tenders
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Accounts */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
              Accounts & Deposits
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/savings-account"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Savings Account
                </Link>
              </li>
              <li>
                <Link
                  href="/current-account"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Current Account
                </Link>
              </li>
              <li>
                <Link
                  href="/double-deposit"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Double Deposit
                </Link>
              </li>
              <li>
                <Link
                  href="/recurring-deposit"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Recurring Deposit
                </Link>
              </li>
              <li>
                <Link
                  href="/time-deposit"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Time Deposit
                </Link>
              </li>
              <li>
                <Link
                  href="/biz-double-deposit"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Business Double Deposit
                </Link>
              </li>
              <li>
                <Link
                  href="/biz-recurring-deposit"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Business Recurring Deposit
                </Link>
              </li>
              <li>
                <Link
                  href="/biz-time-deposit"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Business Time Deposit
                </Link>
              </li>
              <li>
                <Link
                  href="/locker"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Locker Facility
                </Link>
              </li>
            </ul>
          </div>

          {/* Loans */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
              Loans & Advances
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/home-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Home Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/personal-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/car-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Car Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/education-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Education Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/gold-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Gold Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/consumer-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Consumer Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/professional-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Professional Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/self-employed-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Self Employed Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/transport-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Transport Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/festival-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Festival Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/house-construction-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  House Construction Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan-against-fd"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Loan Against FD
                </Link>
              </li>
              <li>
                <Link
                  href="/loan-against-property"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Loan Against Property
                </Link>
              </li>
              <li>
                <Link
                  href="/loan-against-nsc"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Loan Against NSC
                </Link>
              </li>
              <li>
                <Link
                  href="/working-capital-loan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Working Capital Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/overdraft-facility"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Overdraft Facility
                </Link>
              </li>
              <li>
                <Link
                  href="/mortgage-overdraft"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Mortgage Overdraft
                </Link>
              </li>
              <li>
                <Link
                  href="/micro-finance"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Micro Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
              Banking Services
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/mobile-banking"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Mobile Banking
                </Link>
              </li>
              <li>
                <Link
                  href="/net-banking"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Net Banking
                </Link>
              </li>
              <li>
                <Link
                  href="/upi-qr"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  UPI & QR Services
                </Link>
              </li>
              <li>
                <Link
                  href="/bbps"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  BBPS
                </Link>
              </li>
              <li>
                <Link
                  href="/atm"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  ATM Services
                </Link>
              </li>
              <li>
                <Link
                  href="/debit-cards"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Debit Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/imps"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  IMPS
                </Link>
              </li>
              <li>
                <Link
                  href="/sms-banking"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  SMS Banking
                </Link>
              </li>
              <li>
                <Link
                  href="/neft-rtgs"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  NEFT/RTGS
                </Link>
              </li>
              <li>
                <Link
                  href="/pan"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  PAN Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pm-jeevan-yojana"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  PM Jeevan Yojana
                </Link>
              </li>
              <li>
                <Link
                  href="/pm-suraksha-yojana"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  PM Suraksha Yojana
                </Link>
              </li>
              <li>
                <Link
                  href="/positive-pay"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Positive Pay System
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-8">
          {/* Information */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
              Information
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/annual-reports"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/interest-rates"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Interest Rates
                </Link>
              </li>
              <li>
                <Link
                  href="/service-charges"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Service Charges
                </Link>
              </li>
              <li>
                <Link
                  href="/ifsc-codes"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  IFSC Codes
                </Link>
              </li>
              <li>
                <Link
                  href="/cyber-awareness"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Cyber Awareness
                </Link>
              </li>
              <li>
                <Link
                  href="/download-forms"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Download Forms
                </Link>
              </li>
              <li>
                <Link
                  href="/policy-centre"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Policy Centre
                </Link>
              </li>
              <li>
                <Link
                  href="/grievance-redressal"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/emi-calculator"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/kyc-ckyc"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  KYC/CKYC
                </Link>
              </li>
              <li>
                <Link
                  href="/deaf-unclaimed-deposits"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Unclaimed Deposits
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
              Locations & Contact
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/branch-locator"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Branch Locator
                </Link>
              </li>
              <li>
                <Link
                  href="/atm-locator"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  ATM Locator
                </Link>
              </li>
              <li>
                <Link
                  href="/locate-us"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Locate Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Optional Services */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
              Optional Services
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/insurance"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Insurance Services
                </Link>
              </li>
              <li>
                <Link
                  href="/mutual-funds"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link
                  href="/demat"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Demat Services
                </Link>
              </li>
              <li>
                <Link
                  href="/asba"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  ASBA Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/net-banking"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Login to Net Banking
                </Link>
              </li>
              <li>
                <Link
                  href="/download-forms"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Download Forms
                </Link>
              </li>
              <li>
                <Link
                  href="/emi-calculator"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Calculate EMI
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Give Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-text-secondary hover:text-brand-primary transition-colors"
                >
                  Join Our Team
                </Link>
              </li>
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
                  <span className="text-brand-primary font-bold text-2xl">
                    60+
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Total Pages
                </h3>
                <p className="text-text-secondary">Comprehensive coverage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">
                    18
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Loan Products
                </h3>
                <p className="text-text-secondary">Diverse loan options</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">
                    13
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Digital Services
                </h3>
                <p className="text-text-secondary">Modern banking solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">
                    24/7
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Support
                </h3>
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
              Can&apos;t find what you&apos;re looking for? Our customer service
              team is here to help you navigate our website and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8" asChild>
                <Link href="/contact-us">Contact Support</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <Link href="/feedback">Send Feedback</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
