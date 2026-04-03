import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Board Committees - Corporate Governance | MNS Bank',
  description: 'MNS Bank board committees ensure effective corporate governance. Learn about Audit, Risk Management, and Nomination committees.',
  keywords: 'board committees, corporate governance, audit committee, risk management, nomination committee, bank governance',
};

export default function CommitteesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Board Committees
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              MNS Bank board committees ensure effective corporate governance, risk management, and strategic oversight for sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Committees Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Committees Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">3 Core Committees</h3>
                <p className="text-text-secondary">Audit, Risk Management, Nomination & Remuneration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Independent Oversight</h3>
                <p className="text-text-secondary">Chaired by independent directors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Regular Meetings</h3>
                <p className="text-text-secondary">Quarterly meetings with additional sessions as needed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Audit Committee */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Audit Committee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Committee Charter</h3>
                <p className="text-text-secondary mb-4">
                  The Audit Committee oversees the bank's financial reporting process, internal control systems, and audit functions. It ensures compliance with regulatory requirements and accounting standards.
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium text-text-primary">Key Responsibilities:</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Review financial statements before publication</li>
                    <li>• Monitor internal audit and control systems</li>
                    <li>• Oversight of external audit functions</li>
                    <li>• Review compliance with laws and regulations</li>
                    <li>• Examine related party transactions</li>
                    <li>• Monitor risk management systems</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Committee Members</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Dr. Anita Sharma</p>
                      <p className="text-sm text-brand-accent">Chairperson</p>
                      <p className="text-xs text-text-secondary">Independent Director</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Shri Vikram Singh</p>
                      <p className="text-sm text-brand-accent">Member</p>
                      <p className="text-xs text-text-secondary">Independent Director</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Smt. Meera Reddy</p>
                      <p className="text-sm text-brand-accent">Member</p>
                      <p className="text-xs text-text-secondary">Executive Director - Finance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Management Committee */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Risk Management Committee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Committee Charter</h3>
                <p className="text-text-secondary mb-4">
                  The Risk Management Committee oversees the bank's risk management framework, ensuring adequate risk identification, measurement, monitoring, and control systems.
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium text-text-primary">Key Responsibilities:</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Review and approve risk management policies</li>
                    <li>• Monitor credit risk assessment and management</li>
                    <li>• Oversee market risk and liquidity risk</li>
                    <li>• Review operational risk management</li>
                    <li>• Monitor capital adequacy and stress testing</li>
                    <li>• Review compliance with Basel norms</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Committee Members</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Shri Rajesh Kumar</p>
                      <p className="text-sm text-brand-accent">Chairperson</p>
                      <p className="text-xs text-text-secondary">Chairman & MD</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Dr. Priya Patel</p>
                      <p className="text-sm text-brand-accent">Member</p>
                      <p className="text-xs text-text-secondary">Independent Director</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Shri Rajiv Malhotra</p>
                      <p className="text-sm text-brand-accent">Member</p>
                      <p className="text-xs text-text-secondary">Executive Director - Credit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nomination & Remuneration Committee */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Nomination & Remuneration Committee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Committee Charter</h3>
                <p className="text-text-secondary mb-4">
                  The Nomination & Remuneration Committee handles board appointments, director remuneration, and succession planning to ensure effective governance.
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium text-text-primary">Key Responsibilities:</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Identify and evaluate candidates for board positions</li>
                    <li>• Recommend director appointments and reappointments</li>
                    <li>• Fix remuneration of directors and senior management</li>
                    <li>• Develop succession planning strategies</li>
                    <li>• Evaluate board and committee performance</li>
                    <li>• Review and approve stock option plans</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Committee Members</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Dr. Priya Patel</p>
                      <p className="text-sm text-brand-accent">Chairperson</p>
                      <p className="text-xs text-text-secondary">Independent Director</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Shri Arun Kumar</p>
                      <p className="text-sm text-brand-accent">Member</p>
                      <p className="text-xs text-text-secondary">Independent Director</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Smt. Kavita Nair</p>
                      <p className="text-sm text-brand-accent">Member</p>
                      <p className="text-xs text-text-secondary">Executive Director - HR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Committee Meetings */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Committee Meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Committee</th>
                    <th className="text-left py-3 px-4">Frequency</th>
                    <th className="text-left py-3 px-4">Last Meeting</th>
                    <th className="text-left py-3 px-4">Next Meeting</th>
                    <th className="text-center py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Audit Committee</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4">July 10, 2024</td>
                    <td className="py-3 px-4">October 10, 2024</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-green-600 text-sm">On Schedule</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Risk Management Committee</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4">July 12, 2024</td>
                    <td className="py-3 px-4">October 12, 2024</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-green-600 text-sm">On Schedule</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Nomination & Remuneration</td>
                    <td className="py-3 px-4">Bi-annual</td>
                    <td className="py-3 px-4">April 15, 2024</td>
                    <td className="py-3 px-4">October 15, 2024</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-green-600 text-sm">On Schedule</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Committee Secretariat
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              For committee-related queries, meeting requests, or governance matters, please contact our Committee Secretariat.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Contact Person</h3>
                <p className="text-text-secondary">Committee Coordinator</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Email</h3>
                <p className="text-text-secondary">committees@mnsbank.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Phone</h3>
                <p className="text-text-secondary">1800-987-6544</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

