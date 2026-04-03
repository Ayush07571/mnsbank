import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About Us - MNS Bank History & Vision | MNS Bank',
  description: 'Learn about MNS Bank history, vision, mission, and values. Discover our journey, leadership, and commitment to customer service.',
  keywords: 'about MNS Bank, bank history, vision mission, bank values, cooperative banking, customer service',
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                About MNS Bank
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Serving communities with trust and excellence since 1985. MNS Bank is committed to providing innovative banking solutions while maintaining our cooperative values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  Our Story
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">39 Years</h3>
                <p className="text-white/80">Of service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">100+ Branches</h3>
                <p className="text-white/80">Across India</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">1 Million+</h3>
                <p className="text-white/80">Happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Our Story */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Founded in 1985</h3>
                <p className="text-text-secondary mb-4">
                  MNS Bank was established with a vision to provide accessible banking services to communities across India. What started as a small cooperative bank has grown into a trusted financial institution serving over a million customers.
                </p>
                <p className="text-text-secondary mb-4">
                   Our journey has been marked by steady growth, innovation, and unwavering commitment to our customers. We&apos;ve embraced technology while maintaining our core values of trust, transparency, and community service.
                </p>
                <p className="text-text-secondary">
                  Today, we stand as a testament to the power of cooperative banking, proving that financial institutions can be both profitable and socially responsible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">85</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">1985</h4>
                      <p className="text-text-secondary text-sm">Bank established with 5 branches</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">95</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">1995</h4>
                      <p className="text-text-secondary text-sm">Expanded to 25 branches, introduced computerization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">05</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">2005</h4>
                      <p className="text-text-secondary text-sm">Launched internet banking services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">15</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">2015</h4>
                      <p className="text-text-secondary text-sm">Reached 100 branches, launched mobile banking</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">24</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">2024</h4>
                      <p className="text-text-secondary text-sm">Crossed 1 million customers, digital transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision & Mission */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Vision & Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Our Vision</h3>
                <p className="text-text-secondary mb-4">
                  To be the most trusted and preferred banking partner for our communities, delivering innovative financial solutions while upholding the highest standards of integrity and social responsibility.
                </p>
                <p className="text-text-secondary">
                  We envision a future where quality banking services are accessible to all, contributing to the economic prosperity of the communities we serve.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Our Mission</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Provide excellent customer service with personalized attention</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Embrace technology to enhance banking experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Promote financial inclusion in underserved areas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Maintain financial strength and stability</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Our Core Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Integrity</h3>
                <p className="text-text-secondary text-sm">Upholding ethical standards in all our dealings</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Customer Focus</h3>
                <p className="text-text-secondary text-sm">Putting customers at the center of everything we do</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Innovation</h3>
                <p className="text-text-secondary text-sm">Continuously improving and embracing new technologies</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14.5 19a2.5 2.5 0 01-5 0H15a3 3 0 01-3 3h-4a3 3 0 01-3-3h5.5a2.5 2.5 0 01-5 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Community</h3>
                <p className="text-text-secondary text-sm">Contributing to the social and economic development</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Leadership Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Rajesh Kumar</h3>
                <p className="text-text-secondary text-sm mb-2">Managing Director & CEO</p>
                <p className="text-text-secondary text-xs">30+ years in banking industry</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Anita Sharma</h3>
                <p className="text-text-secondary text-sm mb-2">Deputy Managing Director</p>
                <p className="text-text-secondary text-xs">25+ years in finance and operations</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Vikram Singh</h3>
                <p className="text-text-secondary text-sm mb-2">Chief Technology Officer</p>
                <p className="text-text-secondary text-xs">20+ years in banking technology</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Our Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Best Cooperative Bank</h3>
                <p className="text-text-secondary text-sm mb-2">Awarded by Banking Federation</p>
                <p className="text-brand-accent font-semibold">2023</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Digital Excellence</h3>
                <p className="text-text-secondary text-sm mb-2">For innovative digital banking solutions</p>
                <p className="text-brand-accent font-semibold">2022</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Fastest Growing Bank</h3>
                <p className="text-text-secondary text-sm mb-2">Recognized for consistent growth</p>
                <p className="text-brand-accent font-semibold">2021</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CSR Initiatives */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Corporate Social Responsibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Education Initiatives</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Scholarship programs for meritorious students</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Computer literacy programs in rural areas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>School infrastructure development</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Community Development</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Health camps and medical facilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Clean drinking water projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Women empowerment programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              We&apos;re here to help you with your banking needs. Visit our branches, call our helpline, or reach out through our digital channels.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Call Us</h3>
                <p className="text-text-secondary">1800-123-4567</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Email Us</h3>
                <p className="text-text-secondary">info@mnsbank.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Visit Us</h3>
                <p className="text-text-secondary">100+ Branches Nationwide</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8">
                Find Nearest Branch
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


