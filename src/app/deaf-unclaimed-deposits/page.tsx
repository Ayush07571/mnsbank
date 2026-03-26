import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { DEAFTable } from '@/components/compliance/DEAFTable';

export const metadata: Metadata = {
  title: 'DEAF Unclaimed Deposits | MNS Bank',
  description: 'Search and view Depositor Education and Awareness Fund (DEAF) unclaimed deposits at MNS Bank Bhopal',
};

export default function DEAFUnclaimedDepositsPage() {
  // Handle 301 redirect from old PHP URLs
  // This will be handled by middleware in production
  // For now, we'll handle it here
  
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            DEAF Unclaimed Deposits
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl">
            Search and view unclaimed deposits under the Depositor Education and Awareness Fund (DEAF) scheme. 
            This initiative helps account holders identify and claim their forgotten deposits.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-brand-accent mb-2">
                Important Information
              </h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Unclaimed deposits are transferred to DEAF after 10 years of inactivity</li>
                <li>• Account holders can claim their deposits by visiting the nearest branch</li>
                <li>• Please bring valid identity proof and account documents</li>
                <li>• For assistance, contact our customer service at 1800-123-4567</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search Instructions */}
        <div className="bg-surface border border-border rounded-lg p-6 mb-8">
          <h2 className="font-heading text-xl font-semibold text-text-primary mb-4">
            How to Search
          </h2>
          <ol className="text-sm text-text-secondary space-y-2">
            <li>1. Enter your account name, account number, or address in the search box</li>
            <li>2. Click the search button or press Enter</li>
            <li>3. Browse through the results to find your unclaimed deposit</li>
            <li>4. Note down your account details and visit the branch to claim</li>
          </ol>
        </div>

        {/* DEAF Table */}
        <DEAFTable />

        {/* Contact Information */}
        <div className="mt-12 bg-surface border border-border rounded-lg p-6">
          <h2 className="font-heading text-xl font-semibold text-text-primary mb-4">
            Need Help?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-text-primary mb-2">Visit Our Branch</h3>
              <p className="text-sm text-text-secondary mb-1">
                Head Office - Bairagarh
              </p>
              <p className="text-sm text-text-secondary">
                123 Main Street, Bhopal, Madhya Pradesh 462016
              </p>
            </div>
            <div>
              <h3 className="font-medium text-text-primary mb-2">Contact Us</h3>
              <p className="text-sm text-text-secondary mb-1">
                Toll-Free: 1800-123-4567
              </p>
              <p className="text-sm text-text-secondary mb-1">
                Email: support@mnsbankbhopal.com
              </p>
              <p className="text-sm text-text-secondary">
                Working Hours: 9:30 AM - 4:00 PM (Monday to Saturday)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export const unstable_instant = {
  prefetch: 'static',
};