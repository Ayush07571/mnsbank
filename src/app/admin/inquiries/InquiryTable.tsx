'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface Inquiry {
  referenceNumber: string;
  fullName: string;
  mobile: string;
  product: string;
  branch: string;
  message: string;
  submittedAt: string;
  status: string;
}

const BRANCH_LABELS: Record<string, string> = {
  BAIRAGARHI_HO: 'Head Office',
  TT_NAGAR: 'TT Nagar',
  KAROND: 'Karond',
};

function downloadCSV(rows: Inquiry[]) {
  const header = ['Reference', 'Name', 'Mobile', 'Product', 'Branch', 'Message', 'Submitted At', 'Status'];
  const lines = rows.map(r => [
    r.referenceNumber, r.fullName, r.mobile, r.product,
    BRANCH_LABELS[r.branch] ?? r.branch,
    `"${(r.message ?? '').replace(/"/g, '""')}"`,
    r.submittedAt, r.status,
  ].join(','));
  const csv = [header.join(','), ...lines].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mns-inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function InquiryTable({ inquiries }: { inquiries: Inquiry[] }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = inquiries
    .filter(r => filter === 'all' || r.branch === filter)
    .filter(r =>
      search === '' ||
      r.fullName.toLowerCase().includes(search.toLowerCase()) ||
      r.mobile.includes(search) ||
      r.referenceNumber.toLowerCase().includes(search.toLowerCase())
    )
    .slice()
    .reverse(); // newest first

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between bg-white border border-border rounded-card p-4">
        <div className="flex gap-2 flex-wrap">
          {['all', 'BAIRAGARHI_HO', 'TT_NAGAR', 'KAROND'].map(b => (
            <button
              key={b}
              onClick={() => setFilter(b)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                filter === b
                  ? 'bg-brand-primary text-white border-brand-primary'
                  : 'border-border text-text-secondary hover:border-brand-primary'
              }`}
            >
              {b === 'all' ? 'All Branches' : BRANCH_LABELS[b]}
            </button>
          ))}
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="search"
            placeholder="Search name, mobile, ref…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 sm:w-64 h-9 rounded-input border border-border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => downloadCSV(inquiries)}
            className="gap-1.5 whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export CSV
          </Button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-border rounded-card p-12 text-center text-text-secondary">
          {inquiries.length === 0
            ? 'No inquiries received yet.'
            : 'No results match your search.'}
        </div>
      ) : (
        <div className="bg-white border border-border rounded-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-surface border-b border-border">
              <tr>
                {['Reference', 'Name', 'Mobile', 'Product', 'Branch', 'Message', 'Submitted At'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wide whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(row => (
                <tr key={row.referenceNumber} className="hover:bg-surface transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-brand-primary whitespace-nowrap">{row.referenceNumber}</td>
                  <td className="px-4 py-3 font-medium text-text-primary whitespace-nowrap">{row.fullName}</td>
                  <td className="px-4 py-3 text-text-secondary">{row.mobile}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs px-2 py-0.5 rounded-full">
                      {row.product}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-secondary whitespace-nowrap">
                    {BRANCH_LABELS[row.branch] ?? row.branch}
                  </td>
                  <td className="px-4 py-3 text-text-secondary max-w-48 truncate" title={row.message}>
                    {row.message || '—'}
                  </td>
                  <td className="px-4 py-3 text-text-secondary whitespace-nowrap text-xs">
                    {new Date(row.submittedAt).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 py-2 border-t border-border text-xs text-text-secondary">
            Showing {filtered.length} of {inquiries.length} records
          </div>
        </div>
      )}
    </div>
  );
}
