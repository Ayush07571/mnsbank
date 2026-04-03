import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'UPI & QR Services - Instant Digital Payments | MNS Bank',
  description:
    'Experience seamless digital payments with MNS Bank UPI and QR services. Send money instantly, scan QR codes, and enjoy secure transactions 24/7.',
  keywords:
    'UPI, QR payments, digital payments, instant money transfer, BHIM, UPI apps, QR scanner',
};

export default function UPIQRPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                UPI & QR Services
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Experience the future of banking with instant digital payments.
                Send money, pay bills, and shop seamlessly using UPI and QR
                codes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8" asChild>
                  <Link href="/mobile-app-coming-soon">Create UPI ID</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 border-white text-white hover:bg-white hover:text-brand-primary"
                  asChild
                >
                  <Link href="/mobile-app-coming-soon">Download App</Link>
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Instant
                </h3>
                <p className="text-white/80">24/7 transfers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Secure
                </h3>
                <p className="text-white/80">Bank-level security</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Free
                </h3>
                <p className="text-white/80">No transaction charges</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* UPI Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Why Choose MNS Bank UPI?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Instant Transfers
                </h3>
                <p className="text-text-secondary">
                  Send money instantly to anyone, anytime, anywhere in India
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Bank-Level Security
                </h3>
                <p className="text-text-secondary">
                  Multi-layer security with PIN and biometric authentication
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  No Transaction Limits
                </h3>
                <p className="text-text-secondary">
                  Transfer up to ₹1 lakh per transaction with higher daily
                  limits
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Use */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              How to Get Started with UPI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">
                    1
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Create UPI ID
                </h3>
                <p className="text-text-secondary text-sm">
                  Register your UPI ID with your MNS Bank account
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">
                    2
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Set UPI PIN
                </h3>
                <p className="text-text-secondary text-sm">
                  Create a secure 4-6 digit UPI PIN for transactions
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">
                    3
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Link Bank Account
                </h3>
                <p className="text-text-secondary text-sm">
                  Link your MNS Bank account to your UPI ID
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">
                    4
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Start Transacting
                </h3>
                <p className="text-text-secondary text-sm">
                  Send money, pay bills, and scan QR codes instantly
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* UPI Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-text-primary">
                UPI Payment Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Person-to-Person (P2P) transfers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Person-to-Merchant (P2M) payments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>QR code scanning and generation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Bill payments and recharges</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Request money feature</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Check account balance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-text-primary">
                QR Code Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Generate personal QR codes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Merchant QR code payments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Dynamic QR codes for payments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>QR code for bill payments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Offline QR code payments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>QR code for donations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Supported Apps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Supported UPI Apps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 font-bold">BHIM</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">BHIM</h3>
                <p className="text-text-secondary text-sm">
                  Official UPI app by NPCI
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 font-bold">Paytm</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Paytm</h3>
                <p className="text-text-secondary text-sm">
                  Digital wallet and UPI
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 font-bold">PhonePe</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  PhonePe
                </h3>
                <p className="text-text-secondary text-sm">
                  Simple and fast UPI app
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 font-bold">GPay</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Google Pay
                </h3>
                <p className="text-text-secondary text-sm">
                  Google&apos;s UPI solution
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-text-secondary mb-4">
                And many more UPI apps supporting MNS Bank
              </p>
              <Button variant="outline" asChild>
                <Link href="/mobile-app-coming-soon">View All Apps</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Limits and Charges */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Transaction Limits & Charges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">
                  Transaction Limits
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">
                      Per Transaction Limit
                    </span>
                    <span className="font-medium">₹1,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">
                      Daily Limit (Default)
                    </span>
                    <span className="font-medium">₹1,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">
                      Daily Limit (Enhanced)
                    </span>
                    <span className="font-medium">₹2,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Monthly Limit</span>
                    <span className="font-medium">₹5,00,000</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">
                  Charges
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Fund Transfer</span>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Bill Payments</span>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">QR Payments</span>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">UPI ID Creation</span>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Security Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Secure PIN
                </h3>
                <p className="text-text-secondary text-sm">
                  4-6 digit UPI PIN for all transactions
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Biometric Auth
                </h3>
                <p className="text-text-secondary text-sm">
                  Fingerprint and face recognition support
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  End-to-End Encryption
                </h3>
                <p className="text-text-secondary text-sm">
                  Bank-level encryption for all transactions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  What is UPI?
                </h3>
                <p className="text-text-secondary">
                  UPI (Unified Payments Interface) is an instant real-time
                  payment system that allows you to transfer money between any
                  two parties using a mobile device.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  How do I create a UPI ID?
                </h3>
                <p className="text-text-secondary">
                  You can create a UPI ID through any UPI app by registering
                  your mobile number and linking your MNS Bank account.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Is UPI safe?
                </h3>
                <p className="text-text-secondary">
                  Yes, UPI is completely safe with bank-level security,
                  encryption, and multi-factor authentication including UPI PIN
                  and biometrics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  What are the charges for UPI transactions?
                </h3>
                <p className="text-text-secondary">
                  UPI transactions are completely free of charge. There are no
                  fees for sending money, paying bills, or making QR payments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Start Your Digital Payment Journey Today!
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Join millions of users who are already enjoying the benefits of
              instant, secure, and free digital payments with MNS Bank UPI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8" asChild>
                <Link href="/mobile-app-coming-soon">Create UPI ID Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <Link href="/mobile-app-coming-soon">Download Mobile App</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
