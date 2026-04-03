import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import InquiryTable from './InquiryTable';

export const metadata: Metadata = {
  title: 'Inquiry Submissions — Admin | MNS Bank',
  robots: 'noindex, nofollow'
};

import { connection } from 'next/server';

async function getInquiries() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'inquiries.json');
    const raw = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

import { Suspense } from 'react';

async function InquiryList() {
  await connection();
  const inquiries = await getInquiries();

  return (
    <>
      <div className="mb-6">
        <p className="text-text-secondary text-sm mt-1">
          {inquiries?.length || 0} total submissions · Data stored in{' '}
          <code className="text-xs bg-surface border border-border rounded px-1">src/data/inquiries.json</code>
        </p>
      </div>
      <InquiryTable inquiries={inquiries || []} />
    </>
  );
}

export default function InquiriesAdminPage() {
  return (
    <div className="min-h-screen bg-surface p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-text-primary">Customer Inquiries</h1>
        <Suspense fallback={<div className="mt-4 text-text-secondary text-sm">Loading data...</div>}>
          <InquiryList />
        </Suspense>
      </div>
    </div>
  );
}
