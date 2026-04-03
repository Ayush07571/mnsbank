'use client';

import { LocatorMapWrapper } from '@/components/maps/LocatorMapWrapper';
import { Location } from '@/components/maps/LocatorMap';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

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
      lng: 77.4126,
    },
    services: [
      'Personal Banking',
      'Business Banking',
      'Loans',
      'Deposits',
      'Forex',
      'Locker',
      'Insurance',
    ],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed',
    },
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
      lat: 23.227,
      lng: 77.4375,
    },
    services: ['Personal Banking', 'Business Banking', 'Loans', 'Deposits'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed',
    },
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
      lng: 77.4344,
    },
    services: ['Personal Banking', 'Loans', 'Deposits', 'Forex'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed',
    },
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
      lng: 77.4019,
    },
    services: ['Personal Banking', 'Business Banking', 'Deposits'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed',
    },
  },
  {
    id: '5',
    name: 'MNS Bank - Indore',
    type: 'branch',
    address: '567, MG Road',
    city: 'Indore',
    state: 'Madhya Pradesh',
    pincode: '452001',
    phone: '0731-234-5678',
    email: 'indore@mnsbank.com',
    coordinates: {
      lat: 22.7196,
      lng: 75.8577,
    },
    services: [
      'Personal Banking',
      'Business Banking',
      'Loans',
      'Deposits',
      'Forex',
    ],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed',
    },
  },
  {
    id: '6',
    name: 'MNS Bank - Gwalior',
    type: 'branch',
    address: '890, City Center',
    city: 'Gwalior',
    state: 'Madhya Pradesh',
    pincode: '474001',
    phone: '0751-345-6789',
    email: 'gwalior@mnsbank.com',
    coordinates: {
      lat: 26.2124,
      lng: 78.1771,
    },
    services: ['Personal Banking', 'Business Banking', 'Loans', 'Deposits'],
    timings: {
      weekdays: '9:30 AM - 4:30 PM',
      saturday: '9:30 AM - 2:00 PM',
      sunday: 'Closed',
    },
  },
];

export default function BranchLocatorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Branch Locator
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Find the nearest MNS Bank branch. Get detailed information about
              branch services, timings, and directions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="px-8" asChild>
                <Link href="/branch-locator">Find Nearest Branch</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 border-white text-white hover:bg-white hover:text-brand-primary"
                asChild
              >
                <Link href="/contact-us">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Branch Services Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                50+ Branches
              </h3>
              <p className="text-text-secondary text-sm">
                Across Madhya Pradesh
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                All Services
              </h3>
              <p className="text-text-secondary text-sm">
                Complete Banking Solutions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                15+ Cities
              </h3>
              <p className="text-text-secondary text-sm">Expanding Network</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Expert Staff
              </h3>
              <p className="text-text-secondary text-sm">
                Professional Service
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Map */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-text-primary">
                Find Branches Near You
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <LocatorMapWrapper
                locations={branchLocations}
                height="500px"
                filterType="branch"
                showControls={true}
              />
            </CardContent>
          </Card>
        </div>

        {/* Branch Services */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-text-primary">
                Branch Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-text-primary mb-4">
                    Personal Banking
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Savings & Current Accounts</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Personal Loans</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Home & Car Loans</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Deposit Schemes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-4">
                    Business Banking
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Current Accounts</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Business Loans</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Trade Finance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Cash Management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-4">
                    Other Services
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Foreign Exchange</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Locker Facilities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Insurance Services</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Dematerialized Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Branch List */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-text-primary">
                All Branch Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {branchLocations.map(branch => (
                  <div
                    key={branch.id}
                    className="p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-brand-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-text-primary mb-2">
                          {branch.name}
                        </h3>
                        <p className="text-text-secondary text-sm mb-2">
                          {branch.address}, {branch.city}, {branch.state} -{' '}
                          {branch.pincode}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {branch.services
                            ?.slice(0, 3)
                            .map((service, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                              >
                                {service}
                              </span>
                            ))}
                          {branch.services && branch.services.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{branch.services.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div>
                            <p className="text-text-secondary">
                              <strong>Phone:</strong> {branch.phone}
                            </p>
                            {branch.email && (
                              <p className="text-text-secondary">
                                <strong>Email:</strong> {branch.email}
                              </p>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                // Open Google Maps with branch location
                                const query = `${branch.name}, ${branch.address}, ${branch.city}, ${branch.state} ${branch.pincode}`;
                                const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
                                window.open(url, '_blank');
                              }}
                            >
                              Get Directions
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                // Open phone dialer
                                window.location.href = `tel:${branch.phone}`;
                              }}
                            >
                              Call Branch
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

        {/* Banking Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-text-primary">
              Branch Banking Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">
                  Regular Banking Hours
                </h3>
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
                    <span className="text-text-secondary">
                      2nd & 4th Saturday
                    </span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">
                  Special Services Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Locker Services</span>
                    <span className="font-medium">9:30 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Forex Services</span>
                    <span className="font-medium">9:30 AM - 3:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Loan Processing</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">
                      Business Banking
                    </span>
                    <span className="font-medium">9:30 AM - 4:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
