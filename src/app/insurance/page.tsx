import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Insurance Services - Life, Health, General Insurance | MNS Bank',
  description: 'Comprehensive insurance solutions at MNS Bank. Life insurance, health insurance, motor insurance, and more with trusted partners.',
  keywords: 'insurance, life insurance, health insurance, motor insurance, general insurance, bank insurance services',
};

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Insurance Services
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Comprehensive insurance solutions to protect you, your family, and your assets. Partner with trusted insurers for complete coverage.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Insurance Categories */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Insurance Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Life Insurance</h3>
                <p className="text-text-secondary text-sm">Secure your family&apos;s future</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Health Insurance</h3>
                <p className="text-text-secondary text-sm">Medical coverage for all</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-7a1 1 0 00-1-1h-3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Motor Insurance</h3>
                <p className="text-text-secondary text-sm">Vehicle protection plans</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">General Insurance</h3>
                <p className="text-text-secondary text-sm">Property & liability coverage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Life Insurance */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Life Insurance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Why Life Insurance?</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Financial security for your family</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Long-term wealth creation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tax benefits under Section 80C</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Retirement planning</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Available Plans</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Term Insurance</h4>
                    <p className="text-sm text-text-secondary mb-2">Pure protection plan with high coverage at low premiums</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Coverage up to ₹1 crore</li>
                      <li>• Premium starting from ₹500/month</li>
                      <li>• Tax benefits available</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Endowment Plans</h4>
                    <p className="text-sm text-text-secondary mb-2">Savings cum protection with guaranteed returns</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Maturity benefits</li>
                      <li>• Life coverage</li>
                      <li>• Bonus declarations</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">ULIP Plans</h4>
                    <p className="text-sm text-text-secondary mb-2">Market-linked investment with insurance</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Equity & debt funds</li>
                      <li>• Switching options</li>
                      <li>• Partial withdrawal facility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Insurance */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Health Insurance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Coverage Features</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Cashless hospitalization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Pre and post hospitalization expenses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Daily hospital cash allowance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No claim bonus</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Health Plans</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Individual Health Insurance</h4>
                    <p className="text-sm text-text-secondary mb-2">Comprehensive coverage for individuals</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Sum insured up to ₹50 lakhs</li>
                      <li>• 5000+ network hospitals</li>
                      <li>• Annual premium starting from ₹2,000</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Family Floater</h4>
                    <p className="text-sm text-text-secondary mb-2">Coverage for entire family</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Cover up to 6 family members</li>
                      <li>• Single premium for all</li>
                      <li>• No medical checkup up to 45 years</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Senior Citizen Health</h4>
                    <p className="text-sm text-text-secondary mb-2">Specialized coverage for seniors</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• No pre-existing disease waiting period</li>
                      <li>• Annual health checkups</li>
                      <li>• Co-payment options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Motor Insurance */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Motor Insurance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Coverage Types</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Third-party liability (mandatory)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Comprehensive coverage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Personal accident cover</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 roadside assistance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Vehicle Types</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Car Insurance</h4>
                    <p className="text-sm text-text-secondary mb-2">Complete protection for your car</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Own damage cover</li>
                      <li>• Theft protection</li>
                      <li>• Premium starting from ₹2,000/year</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Bike Insurance</h4>
                    <p className="text-sm text-text-secondary mb-2">Affordable two-wheeler coverage</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Comprehensive plans</li>
                      <li>• Quick claim settlement</li>
                      <li>• Premium starting from ₹500/year</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Commercial Vehicle</h4>
                    <p className="text-sm text-text-secondary mb-2">Business vehicle insurance</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Goods carrying vehicles</li>
                      <li>• Passenger vehicles</li>
                      <li>• Customized coverage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* General Insurance */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              General Insurance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Home Insurance</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Building structure coverage</li>
                  <li>• Contents and valuables</li>
                  <li>• Natural disaster protection</li>
                  <li>• Burglary and theft</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Travel Insurance</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Medical emergencies abroad</li>
                  <li>• Trip cancellation</li>
                  <li>• Lost baggage</li>
                  <li>• Flight delays</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Business Insurance</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Property insurance</li>
                  <li>• Liability coverage</li>
                  <li>• Business interruption</li>
                  <li>• Professional indemnity</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Why Choose MNS Bank for Insurance?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Trusted Partners</h3>
                <p className="text-text-secondary text-sm">Association with leading insurance companies</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Quick Process</h3>
                <p className="text-text-secondary text-sm">Easy application and fast claim settlement</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Expert Advice</h3>
                <p className="text-text-secondary text-sm">Professional guidance for right coverage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Get Protected Today!
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Secure your future with comprehensive insurance solutions. Visit your nearest branch or contact our insurance experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Get Quote
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