import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Management Team - Leadership | MNS Bank',
  description: 'Meet MNS Bank management team. Learn about our senior leadership and their expertise in banking and financial services.',
  keywords: 'management team, senior leadership, bank management, executive team, MNS Bank leadership',
};

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Management Team
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Meet the experienced management team that drives MNS Bank&apos;s growth and innovation in banking services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Management Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Leadership Excellence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">8</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Senior Executives</h3>
                <p className="text-text-secondary">Leading key business functions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">150+</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Years Experience</h3>
                <p className="text-text-secondary">Average experience per executive</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">100%</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Customer Focus</h3>
                <p className="text-text-secondary">Committed to service excellence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-2xl">24/7</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Leadership</h3>
                <p className="text-text-secondary">Always available for our customers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Senior Management */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Senior Management Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Rajesh Kumar</h3>
                <p className="text-brand-accent font-semibold mb-4">Chairman & Managing Director</p>
                <p className="text-text-secondary mb-4">
                  Leading MNS Bank with over 35 years of banking experience. Expertise in strategic planning, digital transformation, and corporate governance.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Key Focus Areas:</h4>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Strategic Leadership</li>
                      <li>• Digital Innovation</li>
                      <li>• Risk Management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Previous Experience:</h4>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Senior Executive, RBI</li>
                      <li>• CEO, Leading Private Bank</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Sanjay Gupta</h3>
                <p className="text-brand-accent font-semibold mb-4">Chief Operating Officer</p>
                <p className="text-text-secondary mb-4">
                  Overseeing all banking operations with 25+ years of experience in retail banking and branch management.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Key Focus Areas:</h4>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Operations Excellence</li>
                      <li>• Branch Banking</li>
                      <li>• Customer Service</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Previous Experience:</h4>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Regional Manager, Nationalized Bank</li>
                      <li>• Head of Operations, Private Bank</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Smt. Meera Reddy</h3>
                <p className="text-brand-accent font-semibold mb-4">Chief Financial Officer</p>
                <p className="text-text-secondary mb-4">
                  Managing financial operations with 20+ years of expertise in financial management and regulatory compliance.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Key Focus Areas:</h4>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Financial Planning</li>
                      <li>• Regulatory Compliance</li>
                      <li>• Treasury Management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Previous Experience:</h4>
                    <ul className="text-text-secondary space-y-1">
                      <li>• CFO, Financial Services Company</li>
                      <li>• Senior Manager, Big Four Audit Firm</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Rajiv Malhotra</h3>
                <p className="text-brand-accent font-semibold mb-4">Chief Credit Officer</p>
                <p className="text-text-secondary mb-4">
                  Leading credit risk management with 22+ years of experience in credit assessment and loan portfolio management.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Key Focus Areas:</h4>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Credit Risk Management</li>
                      <li>• Loan Portfolio</li>
                      <li>• Recovery Management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Previous Experience:</h4>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Credit Head, Private Sector Bank</li>
                      <li>• Senior Credit Manager, NBFC</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Heads */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Department Heads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Vikram Singh</h3>
                <p className="text-brand-accent font-semibold mb-2">Chief Technology Officer</p>
                <p className="text-text-secondary text-sm mb-2">Digital Banking & IT</p>
                <p className="text-text-secondary text-xs">20+ years in banking technology</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Smt. Kavita Nair</h3>
                <p className="text-brand-accent font-semibold mb-2">Chief Human Resources Officer</p>
                <p className="text-text-secondary text-sm mb-2">HR & Talent Management</p>
                <p className="text-text-secondary text-xs">18+ years in HR leadership</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Arun Kumar</h3>
                <p className="text-brand-accent font-semibold mb-2">Chief Marketing Officer</p>
                <p className="text-text-secondary text-sm mb-2">Marketing & Branding</p>
                <p className="text-text-secondary text-xs">15+ years in banking marketing</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Shri Sunil Verma</h3>
                <p className="text-brand-accent font-semibold mb-2">Chief Risk Officer</p>
                <p className="text-text-secondary text-sm mb-2">Risk Management</p>
                <p className="text-text-secondary text-xs">22+ years in risk management</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Smt. Priya Sharma</h3>
                <p className="text-brand-accent font-semibold mb-2">Chief Compliance Officer</p>
                <p className="text-text-secondary text-sm mb-2">Compliance & Legal</p>
                <p className="text-text-secondary text-xs">17+ years in banking compliance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regional Managers */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Regional Leadership
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">North Region</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Shri Amit Singh</p>
                      <p className="text-sm text-brand-accent">Regional Head - North</p>
                      <p className="text-xs text-text-secondary">25+ branches</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">South Region</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Shri Ramesh Kumar</p>
                      <p className="text-sm text-brand-accent">Regional Head - South</p>
                      <p className="text-xs text-text-secondary">30+ branches</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">East Region</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Shri Subhash Roy</p>
                      <p className="text-sm text-brand-accent">Regional Head - East</p>
                      <p className="text-xs text-text-secondary">20+ branches</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">West Region</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Shri Deepak Patel</p>
                      <p className="text-sm text-brand-accent">Regional Head - West</p>
                      <p className="text-xs text-text-secondary">25+ branches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership Philosophy */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Our Leadership Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Customer First</h3>
                <p className="text-text-secondary text-sm">Putting customers at the center of all decisions and actions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Integrity</h3>
                <p className="text-text-secondary text-sm">Upholding ethical standards and transparency in all operations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Innovation</h3>
                <p className="text-text-secondary text-sm">Embracing technology and new ideas for better banking</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Connect with Our Leadership
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Our management team is always available to address your concerns and suggestions. Feel free to reach out to us.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Corporate Office</h3>
                <p className="text-text-secondary">MNS Bank Head Office</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Email</h3>
                <p className="text-text-secondary">management@mnsbank.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Phone</h3>
                <p className="text-text-secondary">1800-123-4567</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

