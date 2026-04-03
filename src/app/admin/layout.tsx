import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CurrentYear } from '@/components/common/CurrentYear';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Admin Header */}
      <header className="bg-brand-primary text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-6">
              <Link href="/admin" className="font-heading font-bold text-xl hover:text-brand-accent transition-colors">
                MNS Bank Admin
              </Link>
              <nav className="hidden md:flex space-x-4">
                <Link href="/admin/inquiries" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Inquiries
                </Link>
                <Link href="/admin/deaf-upload" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  DEAF Upload
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <form action="/api/auth/logout" method="POST">
                <Button type="submit" variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                  Logout
                </Button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="flex-1 py-8">
        {children}
      </main>

      {/* Admin Footer */}
      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          &copy; <CurrentYear /> MNS Bank Bhopal. All rights reserved. <br/>
          Internal Banking Dashboard.
        </div>
      </footer>
    </div>
  );
}
