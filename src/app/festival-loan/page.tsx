import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Festival Loan | MNS Bank',
  description: 'Get special festival loans at discounted rates for Diwali, Eid, Christmas and other festivals from MNS Bank Bhopal',
};

export default function FestivalLoanPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Festival Loan
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Celebrate festivals without financial worries! MNS Bank offers special festival loans with discounted interest rates and quick approval.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                  Check Offers
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 13.5 8.5a1 1 0 01-1.414-1.414l.293-.293H11a1 1 0 011 1v3a1 1 0 11-2 0V6h-1.121l.293-.293a1 1 0 111.414-1.414l.646.646A1 1 0 0112 2.586V2zM17 10a1 1 0 01-1 1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm-2-1a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM9 3a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Special Offers</h3>
                <p className="text-white/80">Discounted rates for all festivals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Quick Processing</h3>
                <p className="text-white/80">Same day approval for festival loans</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Higher Amount</h3>
                <p className="text-white/80">Increased loan limits for festivals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Festival Offers */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Festival Special Offers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Loan Details</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Loan Amount: ₹25,000 to ₹15 Lakhs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Special Rate: 11.5% to 16.5% p.a.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Loan Tenure: 6 months to 4 years</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Processing Fee: Waived for festival loans</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Special Benefits</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>0.5% discount on regular rates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Zero processing fee</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible repayment options</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Quick documentation process</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Festival Categories */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Festival Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 13.5 8.5a1 1 0 01-1.414-1.414l.293-.293H11a1 1 0 011 1v3a1 1 0 11-2 0V6h-1.121l.293-.293a1 1 0 111.414-1.414l.646.646A1 1 0 0112 2.586V2zM17 10a1 1 0 01-1 1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm-2-1a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM9 3a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Diwali Special</h3>
                <p className="text-text-secondary text-sm">Special offers for Diwali celebrations</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 13.5 8.5a1 1 0 01-1.414-1.414l.293-.293H11a1 1 0 011 1v3a1 1 0 11-2 0V6h-1.121l.293-.293a1 1 0 111.414-1.414l.646.646A1 1 0 0112 2.586V2zM17 10a1 1 0 01-1 1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm-2-1a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM9 3a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Eid Celebrations</h3>
                <p className="text-text-secondary text-sm">Special rates for Eid-ul-Fitr & Eid-ul-Adha</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 13.5 8.5a1 1 0 01-1.414-1.414l.293-.293H11a1 1 0 011 1v3a1 1 0 11-2 0V6h-1.121l.293-.293a1 1 0 111.414-1.414l.646.646A1 1 0 0112 2.586V2zM17 10a1 1 0 01-1 1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm-2-1a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM9 3a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Christmas & New Year</h3>
                <p className="text-text-secondary text-sm">Holiday season special offers</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 13.5 8.5a1 1 0 01-1.414-1.414l.293-.293H11a1 1 0 011 1v3a1 1 0 11-2 0V6h-1.121l.293-.293a1 1 0 111.414-1.414l.646.646A1 1 0 0112 2.586V2zM17 10a1 1 0 01-1 1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm-2-1a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM9 3a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Regional Festivals</h3>
                <p className="text-text-secondary text-sm">Special offers for local celebrations</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 13.5 8.5a1 1 0 01-1.414-1.414l.293-.293H11a1 1 0 011 1v3a1 1 0 11-2 0V6h-1.121l.293-.293a1 1 0 111.414-1.414l.646.646A1 1 0 0112 2.586V2zM17 10a1 1 0 01-1 1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm-2-1a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM9 3a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Marriage Season</h3>
                <p className="text-text-secondary text-sm">Special wedding season offers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Celebrate Festivals Without Financial Worries!
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Apply for MNS Bank festival loan today and enjoy special discounts, zero processing fees, and quick approval for all your festival celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <a href="/download-forms">Download Forms</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


