import { Metadata } from 'next';
import { LocatorMapWrapper } from '@/components/maps/LocatorMapWrapper';
import { Location } from '@/components/maps/LocatorMap';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'ATM Locator - Find MNS Bank ATMs Near You',
  description: 'Find MNS Bank ATMs near you with our interactive ATM locator. Get 24/7 cash access, balance inquiry, and other ATM services.',
  keywords: 'ATM locator, bank ATM, MNS Bank ATMs, find ATM near me, 24/7 ATM, cash withdrawal',
};

const atmLocations: Location[] = [
  {
    id: '1',
    name: 'MNS ATM - Head Office',
    type: 'atm',
    address: '123, Banking Street',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462001',
    phone: '0755-123-4567',
    coordinates: {
      lat: 23.2599,
      lng: 77.4126
    },
    services: ['24/7 ATM', 'Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer', 'Mobile Recharge', 'Bill Payment']
  },
  {
    id: '2',
    name: 'MNS ATM - MP Nagar',
    type: 'atm',
    address: '456, Commercial Area',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462011',
    phone: '0755-234-5678',
    coordinates: {
      lat: 23.2270,
      lng: 77.4375
    },
    services: ['24/7 ATM', 'Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer', 'Cash Deposit']
  },
  {
    id: '3',
    name: 'MNS ATM - Habibganj',
    type: 'atm',
    address: '789, Station Road',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462016',
    phone: '0755-345-6789',
    coordinates: {
      lat: 23.2315,
      lng: 77.4344
    },
    services: ['24/7 ATM', 'Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Mobile Recharge']
  },
  {
    id: '4',
    name: 'MNS ATM - New Market',
    type: 'atm',
    address: '321, Market Complex',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462003',
    phone: '0755-456-7890',
    coordinates: {
      lat: 23.2443,
      lng: 77.4019
    },
    services: ['24/7 ATM', 'Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer']
  },
  {
    id: '5',
    name: 'MNS ATM - Habibganj Railway Station',
    type: 'atm',
    address: 'Near Railway Station',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462016',
    phone: '0755-345-6789',
    coordinates: {
      lat: 23.2325,
      lng: 77.4354
    },
    services: ['24/7 ATM', 'Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Mobile Recharge', 'Railway Booking']
  },
  {
    id: '6',
    name: 'MNS ATM - Airport',
    type: 'atm',
    address: 'Bhopal Airport Terminal',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462030',
    phone: '0755-567-8901',
    coordinates: {
      lat: 23.2875,
      lng: 77.3420
    },
    services: ['24/7 ATM', 'Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer', 'Currency Exchange']
  },
  {
    id: '7',
    name: 'MNS ATM - Indore',
    type: 'atm',
    address: '567, MG Road',
    city: 'Indore',
    state: 'Madhya Pradesh',
    pincode: '452001',
    phone: '0731-234-5678',
    coordinates: {
      lat: 22.7196,
      lng: 75.8577
    },
    services: ['24/7 ATM', 'Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer']
  },
  {
    id: '8',
    name: 'MNS ATM - Gwalior',
    type: 'atm',
    address: '890, City Center',
    city: 'Gwalior',
    state: 'Madhya Pradesh',
    pincode: '474001',
    phone: '0751-345-6789',
    coordinates: {
      lat: 26.2124,
      lng: 78.1771
    },
    services: ['24/7 ATM', 'Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer']
  }
];

export default function ATMLocatorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              ATM Locator
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Find the nearest MNS Bank ATM. Enjoy 24/7 cash access, balance inquiry, and other banking services at our convenient ATM locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="px-8">
                Find Nearest ATM
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* ATM Services Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">100+ ATMs</h3>
              <p className="text-text-secondary text-sm">24/7 Access</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">All Services</h3>
              <p className="text-text-secondary text-sm">Complete ATM Features</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">15+ Cities</h3>
              <p className="text-text-secondary text-sm">Wide Coverage</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">24/7 Support</h3>
              <p className="text-text-secondary text-sm">Helpline Available</p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Map */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-text-primary">
                Find ATMs Near You
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <LocatorMapWrapper
                locations={atmLocations}
                height="500px"
                filterType="atm"
                showControls={true}
              />
            </CardContent>
          </Card>
        </div>

        {/* ATM Services */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-text-primary">
                ATM Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-text-primary mb-4">Basic Services</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Cash Withdrawal</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Balance Inquiry</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mini Statement</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>PIN Change</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-4">Transfer Services</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>NEFT Transfer</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>RTGS Transfer</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>IMPS Transfer</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Card-to-Card Transfer</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-4">Recharge & Bill Pay</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mobile Recharge</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>DTH Recharge</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Electricity Bill</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Gas Bill Payment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ATM List */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-text-primary">
                All ATM Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {atmLocations.map((atm) => (
                  <div key={atm.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-text-primary mb-2">
                          {atm.name}
                        </h3>
                        <p className="text-text-secondary text-sm mb-2">
                          {atm.address}, {atm.city}, {atm.state} - {atm.pincode}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {atm.services?.slice(0, 3).map((service, index) => (
                            <span
                              key={index}
                              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                            >
                              {service}
                            </span>
                          ))}
                          {atm.services && atm.services.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{atm.services.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div>
                            <p className="text-text-secondary">
                              <strong>Phone:</strong> {atm.phone}
                            </p>
                            <p className="text-green-600 font-medium">
                              <strong>Status:</strong> 24/7 Available
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Get Directions
                            </Button>
                            <Button variant="outline" size="sm">
                              Call Support
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ATM Usage Guidelines */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-text-primary">
                ATM Safety Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Always cover your hand while entering PIN</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Check for any suspicious devices on ATM</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Never share your PIN with anyone</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Report lost cards immediately</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-text-primary">
                Transaction Limits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Cash Withdrawal (Per Transaction)</span>
                  <span className="font-medium">₹25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Cash Withdrawal (Daily Limit)</span>
                  <span className="font-medium">₹50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Fund Transfer (Per Transaction)</span>
                  <span className="font-medium">₹1,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Fund Transfer (Daily Limit)</span>
                  <span className="font-medium">₹5,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Balance Inquiry</span>
                  <span className="font-medium">No Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Mini Statement</span>
                  <span className="font-medium">No Limit</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-text-primary">
              ATM Support & Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">ATM Helpline</h3>
                <p className="text-brand-accent font-semibold mb-1">1800-123-4567</p>
                <p className="text-text-secondary text-sm">24/7 Support</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Card Blocking</h3>
                <p className="text-brand-accent font-semibold mb-1">1800-987-6543</p>
                <p className="text-text-secondary text-sm">24/7 Service</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Fraud Reporting</h3>
                <p className="text-brand-accent font-semibold mb-1">1800-456-7890</p>
                <p className="text-text-secondary text-sm">24/7 Available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

