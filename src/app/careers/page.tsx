import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Careers - Job Opportunities | MNS Bank',
  description: 'Build your banking career with MNS Bank. Explore job opportunities, join our team, and grow with a leading cooperative bank.',
  keywords: 'banking careers, job opportunities, bank jobs, careers in banking, MNS Bank recruitment',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Build a rewarding career with MNS Bank. We offer growth opportunities, competitive benefits, and a supportive work environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  View Openings
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                  Submit Resume
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">1000+</h3>
                <p className="text-white/80">Employees</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Growth</h3>
                <p className="text-white/80">Opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Culture</h3>
                <p className="text-white/80">Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Why Join Us */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Why Join MNS Bank?
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
                <h3 className="font-semibold text-text-primary mb-2">Career Growth</h3>
                <p className="text-text-secondary text-sm">Clear career progression paths with regular training and development opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Competitive Benefits</h3>
                <p className="text-text-secondary text-sm">Attractive salary packages, performance bonuses, and comprehensive benefits</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Work-Life Balance</h3>
                <p className="text-text-secondary text-sm">Flexible work arrangements and supportive work environment</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Openings */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Current Openings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Relationship Manager</h3>
                    <p className="text-brand-accent font-semibold mb-2">Retail Banking</p>
                    <p className="text-text-secondary text-sm mb-2">Multiple Locations</p>
                  </div>
                  <Button variant="outline" size="sm">Apply Now</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Experience:</span>
                    <span className="text-text-secondary"> 2-5 years</span>
                  </div>
                  <div>
                    <span className="font-medium">Qualification:</span>
                    <span className="text-text-secondary"> MBA/Graduate</span>
                  </div>
                  <div>
                    <span className="font-medium">Posted:</span>
                    <span className="text-text-secondary"> 3 days ago</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Credit Officer</h3>
                    <p className="text-brand-accent font-semibold mb-2">Credit Department</p>
                    <p className="text-text-secondary text-sm mb-2">Head Office</p>
                  </div>
                  <Button variant="outline" size="sm">Apply Now</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Experience:</span>
                    <span className="text-text-secondary"> 3-7 years</span>
                  </div>
                  <div>
                    <span className="font-medium">Qualification:</span>
                    <span className="text-text-secondary"> CA/ICWA/MBA Finance</span>
                  </div>
                  <div>
                    <span className="font-medium">Posted:</span>
                    <span className="text-text-secondary"> 1 week ago</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Digital Banking Executive</h3>
                    <p className="text-brand-accent font-semibold mb-2">Digital Banking</p>
                    <p className="text-text-secondary text-sm mb-2">Multiple Locations</p>
                  </div>
                  <Button variant="outline" size="sm">Apply Now</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Experience:</span>
                    <span className="text-text-secondary"> 1-3 years</span>
                  </div>
                  <div>
                    <span className="font-medium">Qualification:</span>
                    <span className="text-text-secondary"> Graduate</span>
                  </div>
                  <div>
                    <span className="font-medium">Posted:</span>
                    <span className="text-text-secondary"> 2 weeks ago</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Branch Manager</h3>
                    <p className="text-brand-accent font-semibold mb-2">Branch Banking</p>
                    <p className="text-text-secondary text-sm mb-2">Various Branches</p>
                  </div>
                  <Button variant="outline" size="sm">Apply Now</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Experience:</span>
                    <span className="text-text-secondary"> 5-10 years</span>
                  </div>
                  <div>
                    <span className="font-medium">Qualification:</span>
                    <span className="text-text-secondary"> MBA/Graduate</span>
                  </div>
                  <div>
                    <span className="font-medium">Posted:</span>
                    <span className="text-text-secondary"> 3 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Life at MNS Bank */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Life at MNS Bank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Work Environment</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Collaborative and inclusive work culture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Regular team building activities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Open communication channels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Modern office infrastructure</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Employee Benefits</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Performance-based incentives</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Health and wellness programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Professional development support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Employee stock options</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recruitment Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Recruitment Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Application</h3>
                <p className="text-text-secondary text-sm">Submit your resume online</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Screening</h3>
                <p className="text-text-secondary text-sm">Initial resume review</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Interview</h3>
                <p className="text-text-secondary text-sm">Multiple interview rounds</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Offer</h3>
                <p className="text-text-secondary text-sm">Job offer and onboarding</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training & Development */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Training & Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Induction Program</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Comprehensive onboarding</li>
                  <li>• Bank operations training</li>
                  <li>• Product knowledge sessions</li>
                  <li>• System and process training</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Ongoing Training</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Regular skill enhancement programs</li>
                  <li>• Leadership development</li>
                  <li>• Digital banking training</li>
                  <li>• Regulatory compliance updates</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Career Advancement</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Internal job postings</li>
                  <li>• Mentorship programs</li>
                  <li>• Cross-functional exposure</li>
                  <li>• Performance-based promotions</li>
                </ul>
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
                <h3 className="font-semibold text-text-primary mb-2">How do I apply for a job at MNS Bank?</h3>
                <p className="text-text-secondary">You can apply through our careers portal by submitting your resume for relevant positions. You can also send your resume to careers@mnsbank.com.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">What is the typical recruitment timeline?</h3>
                <p className="text-text-secondary">The recruitment process typically takes 2-4 weeks from application to offer, depending on the position and number of candidates.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Does MNS Bank provide training for new employees?</h3>
                <p className="text-text-secondary">Yes, we have a comprehensive induction program and ongoing training initiatives to help employees succeed in their roles.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">What are the growth opportunities at MNS Bank?</h3>
                <p className="text-text-secondary">We offer clear career progression paths, internal job postings, and leadership development programs for employee growth.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Start Your Career Journey
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Join our team and be part of a growing banking institution. We're looking for talented individuals who share our passion for excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Email</h3>
                <p className="text-text-secondary">careers@mnsbank.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Phone</h3>
                <p className="text-text-secondary">1800-123-4568</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Address</h3>
                <p className="text-text-secondary">HR Department, MNS Bank Head Office</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8">
                View All Openings
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Submit Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


export const unstable_instant = {
  prefetch: 'static',
};