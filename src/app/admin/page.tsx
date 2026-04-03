import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Dashboard — Admin | MNS Bank',
  robots: 'noindex, nofollow'
};

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 border-b pb-4">Admin Dashboard</h1>
        <p className="mt-2 text-slate-600">Welcome to the MNS Bank internal management portal. Select a tool to begin.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-brand-primary">
          <CardHeader>
            <CardTitle>Customer Inquiries</CardTitle>
            <CardDescription>View and manage product inquiries and contact form submissions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/inquiries" className="inline-flex items-center text-brand-primary font-medium hover:underline">
              Go to Inquiries
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-brand-accent">
          <CardHeader>
            <CardTitle>DEAF Upload</CardTitle>
            <CardDescription>Upload strictly formatted compliance CSVs containing unclaimed deposit records.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/deaf-upload" className="inline-flex items-center text-brand-primary font-medium hover:underline">
              Go to DEAF Upload
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
