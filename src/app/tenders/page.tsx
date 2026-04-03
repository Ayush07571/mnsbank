import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Tenders - Procurement Opportunities | MNS Bank',
  description: 'View MNS Bank tender opportunities and procurement notices. Participate in our tender process for goods, services, and works.',
  keywords: 'tenders, procurement, bank tenders, vendor registration, supplier opportunities, MNS Bank procurement',
};

export default function TendersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Tenders & Procurement
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Explore tender opportunities with MNS Bank. We welcome qualified vendors and suppliers to participate in our transparent procurement process.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Procurement Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Procurement Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Transparent</h3>
                <p className="text-text-secondary">Fair and open process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Competitive</h3>
                <p className="text-text-secondary">Best value for money</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Quality</h3>
                <p className="text-text-secondary">High standards maintained</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Timely</h3>
                <p className="text-text-secondary">Efficient delivery</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Tenders */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Current Tenders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">ATM Cash Management Services</h3>
                    <p className="text-brand-accent font-semibold mb-2">Services</p>
                    <p className="text-text-secondary text-sm mb-2">Cash replenishment and maintenance services for ATMs</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/contact-us'}>View Details</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Last Date:</span>
                    <span className="text-text-secondary"> 15 Nov 2024</span>
                  </div>
                  <div>
                    <span className="font-medium">Value:</span>
                    <span className="text-text-secondary"> ₹50 Lakhs</span>
                  </div>
                  <div>
                    <span className="font-medium">Posted:</span>
                    <span className="text-text-secondary"> 25 Oct 2024</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Bank Stationery Supply</h3>
                    <p className="text-brand-accent font-semibold mb-2">Goods</p>
                    <p className="text-text-secondary text-sm mb-2">Supply of bank stationery, forms, and marketing materials</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/contact-us'}>View Details</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Last Date:</span>
                    <span className="text-text-secondary"> 20 Nov 2024</span>
                  </div>
                  <div>
                    <span className="font-medium">Value:</span>
                    <span className="text-text-secondary"> ₹25 Lakhs</span>
                  </div>
                  <div>
                    <span className="font-medium">Posted:</span>
                    <span className="text-text-secondary"> 28 Oct 2024</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">IT Infrastructure Upgradation</h3>
                    <p className="text-brand-accent font-semibold mb-2">Works</p>
                    <p className="text-text-secondary text-sm mb-2">Network infrastructure and server upgradation at branches</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/contact-us'}>View Details</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Last Date:</span>
                    <span className="text-text-secondary"> 25 Nov 2024</span>
                  </div>
                  <div>
                    <span className="font-medium">Value:</span>
                    <span className="text-text-secondary"> ₹75 Lakhs</span>
                  </div>
                  <div>
                    <span className="font-medium">Posted:</span>
                    <span className="text-text-secondary"> 30 Oct 2024</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Security Services</h3>
                    <p className="text-brand-accent font-semibold mb-2">Services</p>
                    <p className="text-text-secondary text-sm mb-2">Security guard services for bank branches and ATMs</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/contact-us'}>View Details</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Last Date:</span>
                    <span className="text-text-secondary"> 30 Nov 2024</span>
                  </div>
                  <div>
                    <span className="font-medium">Value:</span>
                    <span className="text-text-secondary"> ₹40 Lakhs</span>
                  </div>
                  <div>
                    <span className="font-medium">Posted:</span>
                    <span className="text-text-secondary"> 2 Nov 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tender Categories */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Tender Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Goods</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Computer hardware and peripherals</li>
                  <li>• Banking equipment and furniture</li>
                  <li>• Stationery and office supplies</li>
                  <li>• Marketing materials</li>
                  <li>• Security equipment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Services</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• ATM cash management</li>
                  <li>• Security services</li>
                  <li>• Housekeeping services</li>
                  <li>• IT maintenance</li>
                  <li>• Consultancy services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Works</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Civil construction</li>
                  <li>• Electrical works</li>
                  <li>• Interior decoration</li>
                  <li>• Network infrastructure</li>
                  <li>• Maintenance works</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tender Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Tender Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Tender Notice</h3>
                <p className="text-text-secondary text-sm">Publish tender notice</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Bid Submission</h3>
                <p className="text-text-secondary text-sm">Submit technical and financial bids</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Evaluation</h3>
                <p className="text-text-secondary text-sm">Technical and financial evaluation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Award</h3>
                <p className="text-text-secondary text-sm">Contract award and notification</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vendor Registration */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Vendor Registration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Registration Requirements</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Valid business registration certificate</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>PAN and GST registration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Financial statements for last 3 years</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Experience certificates and references</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Benefits of Registration</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Receive tender notifications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Participate in multiple tenders</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Build long-term partnership</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Get priority consideration</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Past Tenders */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Recently Closed Tenders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Tender Title</th>
                    <th className="text-left py-3 px-4">Category</th>
                    <th className="text-left py-3 px-4">Value</th>
                    <th className="text-left py-3 px-4">Closed Date</th>
                    <th className="text-center py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Branch Renovation Works</td>
                    <td className="py-3 px-4">Works</td>
                    <td className="py-3 px-4">₹30 Lakhs</td>
                    <td className="py-3 px-4">15 Oct 2024</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-green-600 text-sm">Awarded</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Software Development</td>
                    <td className="py-3 px-4">Services</td>
                    <td className="py-3 px-4">₹60 Lakhs</td>
                    <td className="py-3 px-4">10 Oct 2024</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-green-600 text-sm">Awarded</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Office Furniture Supply</td>
                    <td className="py-3 px-4">Goods</td>
                    <td className="py-3 px-4">₹20 Lakhs</td>
                    <td className="py-3 px-4">5 Oct 2024</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-green-600 text-sm">Awarded</span>
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
              Procurement Department
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              For tender-related queries, vendor registration, or procurement information, please contact our Procurement Department.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Email</h3>
                <p className="text-text-secondary">procurement@mnsbank.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Phone</h3>
                <p className="text-text-secondary">1800-123-4569</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Address</h3>
                <p className="text-text-secondary">Procurement Department, MNS Bank Head Office</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

