import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Board of Directors - Leadership Team | MNS Bank',
  description: 'Meet MNS Bank board of directors. Learn about our leadership team, their expertise, and commitment to excellence in banking.',
  keywords: 'board of directors, leadership team, bank management, corporate governance, MNS Bank directors',
};

export default function BoardOfDirectorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Board of Directors
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Meet the distinguished leaders who guide MNS Bank with their expertise, vision, and commitment to excellence in banking.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Board Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Board Composition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">12</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Total Directors</h3>
                <p className="text-text-secondary">Including independent directors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">4</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Independent Directors</h3>
                <p className="text-text-secondary">Ensuring corporate governance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">8</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Executive Directors</h3>
                <p className="text-text-secondary">Managing bank operations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Committees</h3>
                <p className="text-text-secondary">Specialized oversight committees</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chairman */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Chairman
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-semibold text-text-primary mb-2">Shri Rajesh Kumar</h3>
                <p className="text-brand-accent font-semibold mb-4">Chairman & Managing Director</p>
                <p className="text-text-secondary mb-4">
                  Shri Rajesh Kumar brings over 35 years of extensive experience in the banking and financial services sector. Under his leadership, MNS Bank has achieved remarkable growth and digital transformation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Expertise</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Strategic Planning</li>
                      <li>• Risk Management</li>
                      <li>• Digital Banking</li>
                      <li>• Corporate Governance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Previous Roles</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Senior Executive, RBI</li>
                      <li>• CEO, Leading Private Bank</li>
                      <li>• Chairman, Banking Association</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Independent Directors */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Independent Directors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Dr. Anita Sharma</h3>
                <p className="text-brand-accent font-semibold mb-2">Independent Director</p>
                <p className="text-text-secondary text-sm mb-2">Expert in Finance and Economics</p>
                <p className="text-text-secondary text-xs">Former Professor, IIM Ahmedabad</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Vikram Singh</h3>
                <p className="text-brand-accent font-semibold mb-2">Independent Director</p>
                <p className="text-text-secondary text-sm mb-2">Expert in Technology and Digital Transformation</p>
                <p className="text-text-secondary text-xs">Former CTO, Leading Tech Company</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Dr. Priya Patel</h3>
                <p className="text-brand-accent font-semibold mb-2">Independent Director</p>
                <p className="text-text-secondary text-sm mb-2">Expert in Law and Corporate Governance</p>
                <p className="text-text-secondary text-xs">Senior Advocate, Supreme Court</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Arun Kumar</h3>
                <p className="text-brand-accent font-semibold mb-2">Independent Director</p>
                <p className="text-text-secondary text-sm mb-2">Expert in Marketing and Customer Service</p>
                <p className="text-text-secondary text-xs">Former Marketing Head, MNC</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Executive Directors */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Executive Directors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Sanjay Gupta</h3>
                <p className="text-brand-accent font-semibold mb-2">Executive Director - Operations</p>
                <p className="text-text-secondary text-sm mb-2">25+ years in banking operations</p>
                <p className="text-text-secondary text-xs">Former Regional Manager, Nationalized Bank</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Smt. Meera Reddy</h3>
                <p className="text-brand-accent font-semibold mb-2">Executive Director - Finance</p>
                <p className="text-text-secondary text-sm mb-2">20+ years in financial management</p>
                <p className="text-text-secondary text-xs">Former CFO, Financial Services Company</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Rajiv Malhotra</h3>
                <p className="text-brand-accent font-semibold mb-2">Executive Director - Credit</p>
                <p className="text-text-secondary text-sm mb-2">22+ years in credit and risk management</p>
                <p className="text-text-secondary text-xs">Former Credit Head, Private Sector Bank</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Smt. Kavita Nair</h3>
                <p className="text-brand-accent font-semibold mb-2">Executive Director - Human Resources</p>
                <p className="text-text-secondary text-sm mb-2">18+ years in HR and talent management</p>
                <p className="text-text-secondary text-xs">Former HR Head, Banking Corporation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Board Committees */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Board Committees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Audit Committee</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Financial oversight</li>
                  <li>• Internal audit review</li>
                  <li>• Risk assessment</li>
                  <li>• Compliance monitoring</li>
                </ul>
                <p className="text-brand-accent font-semibold mt-2">Chair: Dr. Anita Sharma</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Risk Management Committee</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Credit risk oversight</li>
                  <li>• Market risk monitoring</li>
                  <li>• Operational risk assessment</li>
                  <li>• Capital adequacy review</li>
                </ul>
                <p className="text-brand-accent font-semibold mt-2">Chair: Shri Rajesh Kumar</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Nomination & Remuneration Committee</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Board appointments</li>
                  <li>• Director remuneration</li>
                  <li>• Succession planning</li>
                  <li>• Performance evaluation</li>
                </ul>
                <p className="text-brand-accent font-semibold mt-2">Chair: Dr. Priya Patel</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Board Meetings */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Board Meetings Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">2024 Meeting Schedule</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">Q1 Board Meeting</p>
                      <p className="text-sm text-text-secondary">April 15, 2024</p>
                    </div>
                    <span className="text-green-600 text-sm">Completed</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">Q2 Board Meeting</p>
                      <p className="text-sm text-text-secondary">July 15, 2024</p>
                    </div>
                    <span className="text-green-600 text-sm">Completed</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">Q3 Board Meeting</p>
                      <p className="text-sm text-text-secondary">October 15, 2024</p>
                    </div>
                    <span className="text-blue-600 text-sm">Upcoming</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">Q4 Board Meeting</p>
                      <p className="text-sm text-text-secondary">January 15, 2025</p>
                    </div>
                    <span className="text-gray-600 text-sm">Scheduled</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Meeting Highlights</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-text-primary">Q1 2024</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Approved annual budget</li>
                      <li>• Launched digital banking initiative</li>
                      <li>• Reviewed risk management framework</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Q2 2024</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Approved quarterly results</li>
                      <li>• Approved branch expansion plan</li>
                      <li>• Reviewed CSR initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Board Secretariat
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              For board-related queries, annual general meeting information, or corporate governance matters, please contact our Board Secretariat.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Contact Person</h3>
                <p className="text-text-secondary">Company Secretary</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Email</h3>
                <p className="text-text-secondary">board.secretary@mnsbank.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Phone</h3>
                <p className="text-text-secondary">1800-987-6543</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

