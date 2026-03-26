import { Metadata } from 'next';
import { LocatorMapWrapper } from '@/components/maps/LocatorMapWrapper';
import { Location } from '@/components/maps/LocatorMap';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Contact Us | MNS Bank',
  description: 'Get in touch with MNS Bank. Find our contact information, branch locations, and customer service details for all your banking needs',
};

const branchLocations: Location[] = [
  {
    id: '1',
    name: 'MNS Bank - Head Office',
    type: 'branch',
    address: '123, Banking Street',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462001',
    phone: '0755-123-4567',
    email: 'headoffice@mnsbank.com',
    coordinates: {
      lat: 23.2599,
      lng: 77.4126
    },
    services: ['Personal Banking', 'Business Banking', 'Loans', 'Deposits', 'Forex', 'Locker', 'Insurance'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '2',
    name: 'MNS Bank - MP Nagar',
    type: 'branch',
    address: '456, Commercial Area',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462011',
    phone: '0755-234-5678',
    email: 'mpnagar@mnsbank.com',
    coordinates: {
      lat: 23.2270,
      lng: 77.4375
    },
    services: ['Personal Banking', 'Business Banking', 'Loans', 'Deposits'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '3',
    name: 'MNS Bank - Habibganj',
    type: 'branch',
    address: '789, Station Road',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462016',
    phone: '0755-345-6789',
    email: 'habibganj@mnsbank.com',
    coordinates: {
      lat: 23.2315,
      lng: 77.4344
    },
    services: ['Personal Banking', 'Loans', 'Deposits', 'Forex'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '4',
    name: 'MNS Bank - New Market',
    type: 'branch',
    address: '321, Market Complex',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462003',
    phone: '0755-456-7890',
    email: 'newmarket@mnsbank.com',
    coordinates: {
      lat: 23.2443,
      lng: 77.4019
    },
    services: ['Personal Banking', 'Business Banking', 'Deposits'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed'
    }
  }
];

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Get in touch with MNS Bank for all your banking needs. Find our contact information, branch locations, and customer service details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-8">
                  Find Branch
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                  Call Us
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
                <h3 className="font-heading text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-white/80">Always available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Multiple Channels</h3>
                <p className="text-white/80">Phone, email, chat</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Branch Network</h3>
                <p className="text-white/80">50+ locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Contact Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Phone Banking</h3>
                <div className="space-y-2">
                  <p className="text-brand-accent font-semibold">1800-123-4567</p>
                  <p className="text-text-secondary text-sm">Toll Free (India)</p>
                  <p className="text-brand-accent font-semibold">+91-755-123-4567</p>
                  <p className="text-text-secondary text-sm">International</p>
                  <p className="text-text-secondary text-sm">Available 24/7</p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Email Support</h3>
                <div className="space-y-2">
                  <p className="text-brand-accent font-semibold">support@mnsbank.com</p>
                  <p className="text-text-secondary text-sm">General Queries</p>
                  <p className="text-brand-accent font-semibold">loans@mnsbank.com</p>
                  <p className="text-text-secondary text-sm">Loan Applications</p>
                  <p className="text-brand-accent font-semibold">complaints@mnsbank.com</p>
                  <p className="text-text-secondary text-sm">Grievances</p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Head Office</h3>
                <div className="space-y-2">
                  <p className="text-text-secondary">MNS Bank Ltd.</p>
                  <p className="text-text-secondary">123, Banking Street</p>
                  <p className="text-text-secondary">MP Nagar, Bhopal</p>
                  <p className="text-text-secondary">Madhya Pradesh - 462001</p>
                  <p className="text-text-secondary">India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Branch Locator */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Find Our Branches</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <LocatorMapWrapper
              locations={branchLocations}
              height="400px"
              filterType="branch"
              showControls={true}
            />
          </CardContent>
        </Card>

        {/* Branch Contacts */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Branch Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {branchLocations.map((branch) => (
                <div key={branch.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-2">
                        {branch.name}
                      </h3>
                      <p className="text-text-secondary text-sm mb-2">
                        {branch.address}, {branch.city}, {branch.state} - {branch.pincode}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-text-secondary">
                            <strong>Phone:</strong> {branch.phone}
                          </p>
                          <p className="text-text-secondary">
                            <strong>Email:</strong> {branch.email}
                          </p>
                        </div>
                        <div>
                          <p className="text-text-secondary">
                            <strong>Weekdays:</strong> {branch.timings?.weekdays}
                          </p>
                          <p className="text-text-secondary">
                            <strong>Saturday:</strong> {branch.timings?.saturday}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <Button variant="outline" size="sm">
                          Get Directions
                        </Button>
                        <Button variant="outline" size="sm">
                          Call Branch
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inquiry Form */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="loan">Loan Application</option>
                      <option value="account">Account Related</option>
                      <option value="complaint">Complaint</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                    />
                    <label htmlFor="terms" className="text-sm text-text-secondary">
                      I agree to be contacted regarding my inquiry
                    </label>
                  </div>
                  <Button variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-text-primary mb-4">Other Ways to Reach Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Visit Our Branch</h4>
                        <p className="text-text-secondary text-sm">Visit any of our branches for personalized assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Call Our Helpline</h4>
                        <p className="text-text-secondary text-sm">1800-123-4567 for immediate assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Email Us</h4>
                        <p className="text-text-secondary text-sm">support@mnsbank.com for detailed inquiries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Service */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Customer Service</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Account Services</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Account opening</li>
                  <li>• Balance inquiry</li>
                  <li>• Cheque book request</li>
                  <li>• Debit card services</li>
                  <li>• Net banking support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Loan Services</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Loan application</li>
                  <li>• EMI calculation</li>
                  <li>• Prepayment queries</li>
                  <li>• Loan status</li>
                  <li>• Documentation help</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Other Services</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Bill payments</li>
                  <li>• Fund transfers</li>
                  <li>• Investment products</li>
                  <li>• Insurance services</li>
                  <li>• Forex services</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Business Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Branch Banking</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Monday - Friday</span>
                    <span className="font-medium">9:30 AM - 4:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Saturday</span>
                    <span className="font-medium">9:30 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">2nd & 4th Saturday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Phone Banking</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">24/7 Support</span>
                    <span className="font-medium">Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Emergency Services</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Loan Support</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Technical Support</span>
                    <span className="font-medium">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-text-primary">Connect With Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Social Media</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">f</span>
                    </div>
                    <span className="text-text-secondary">Facebook: @mnsbank</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">t</span>
                    </div>
                    <span className="text-text-secondary">Twitter: @mnsbank</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">i</span>
                    </div>
                    <span className="text-text-secondary">Instagram: @mnsbank</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">in</span>
                    </div>
                    <span className="text-text-secondary">LinkedIn: mns-bank</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Mobile Banking</h3>
                <div className="space-y-3">
                  <p className="text-text-secondary mb-4">Download our mobile banking app for convenient banking on the go</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                      App Store
                    </Button>
                    <Button variant="outline" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                      Play Store
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Need Help? We're Here for You!
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Whether you have a question about our services, need help with your account, or want to apply for a loan, our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8">
                Call Us Now
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Send Email
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