'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useState } from 'react';

export default function KYCCKYCContent() {
  const [ckycNumber, setCkycNumber] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleCKYCLookup = async () => {
    if (!ckycNumber.trim()) {
      alert('Please enter a CKYC number');
      return;
    }

    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock response - in production, this would be a real API call
      setSearchResult({
        status: 'found',
        data: {
          ckycNumber: ckycNumber,
          name: 'RAJESH KUMAR',
          dateOfBirth: '15-03-1985',
          address: '123 MAIN STREET, BHOAPL, MADHYA PRADESH 462016',
          mobile: '9876543210',
          email: 'rajesh.kumar@email.com',
          pan: 'ABCDE1234F',
          aadhaar: 'XXXX-XXXX-1234',
          photoAvailable: true,
          signatureAvailable: true,
          lastUpdated: '2024-02-15',
          verifiedBy: 'MNS Bank',
        }
      });
      setIsSearching(false);
    }, 1500);
  };

  const resetSearch = () => {
    setCkycNumber('');
    setSearchResult(null);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            KYC & CKYC Services
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl">
            Complete your Know Your Customer (KYC) verification and check your Central KYC (CKYC) status 
            with MNS Bank for seamless banking services.
          </p>
        </div>

        {/* CKYC Lookup Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary flex items-center space-x-2">
              <svg className="w-6 h-6 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>CKYC Status Check</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <p className="text-text-secondary mb-4">
                  Check your Central KYC status by entering your CKYC number. CKYC is a 14-digit number 
                  that uniquely identifies your KYC records across all financial institutions.
                </p>
                
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter 14-digit CKYC number"
                      value={ckycNumber}
                      onChange={(e) => setCkycNumber(e.target.value)}
                      maxLength={14}
                      className="text-lg"
                    />
                  </div>
                  <Button
                    variant="primary"
                    onClick={handleCKYCLookup}
                    disabled={isSearching}
                    className="px-6"
                  >
                    {isSearching ? 'Searching...' : 'Check Status'}
                  </Button>
                  {searchResult && (
                    <Button
                      variant="outline"
                      onClick={resetSearch}
                      className="px-6"
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </div>

              {/* Search Results */}
              {searchResult && (
                <div className="border border-border rounded-lg p-6 bg-surface">
                  <h3 className="font-semibold text-text-primary mb-4">CKYC Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-text-secondary">CKYC Number:</span>
                        <p className="font-medium text-text-primary">{searchResult.data.ckycNumber}</p>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary">Name:</span>
                        <p className="font-medium text-text-primary">{searchResult.data.name}</p>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary">Date of Birth:</span>
                        <p className="font-medium text-text-primary">{searchResult.data.dateOfBirth}</p>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary">Address:</span>
                        <p className="font-medium text-text-primary">{searchResult.data.address}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-text-secondary">Mobile:</span>
                        <p className="font-medium text-text-primary">{searchResult.data.mobile}</p>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary">Email:</span>
                        <p className="font-medium text-text-primary">{searchResult.data.email}</p>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary">PAN:</span>
                        <p className="font-medium text-text-primary">{searchResult.data.pan}</p>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary">Aadhaar:</span>
                        <p className="font-medium text-text-primary">{searchResult.data.aadhaar}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${
                          searchResult.data.photoAvailable 
                            ? 'bg-success/10 text-success' 
                            : 'bg-warning/10 text-warning'
                        }`}>
                          {searchResult.data.photoAvailable ? 'Photo Available' : 'Photo Not Available'}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${
                          searchResult.data.signatureAvailable 
                            ? 'bg-success/10 text-success' 
                            : 'bg-warning/10 text-warning'
                        }`}>
                          {searchResult.data.signatureAvailable ? 'Signature Available' : 'Signature Not Available'}
                        </span>
                      </div>
                      <div className="text-sm text-text-secondary">
                        Last Updated: {new Date(searchResult.data.lastUpdated).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* KYC Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">
              About KYC & CKYC
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-text-primary mb-3">What is KYC?</h3>
              <p className="text-text-secondary">
                Know Your Customer (KYC) is a verification process that financial institutions use to 
                verify the identity of their customers and assess potential risks of illegal intentions 
                towards the financial relationship.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-3">What is CKYC?</h3>
              <p className="text-text-secondary">
                Central KYC (CKYC) is a centralized system for maintaining KYC records of customers 
                in a digital format. Once your CKYC is done, you don't need to repeat the KYC process 
                for opening new accounts with different financial institutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-3">Benefits of CKYC</h3>
              <ul className="text-text-secondary space-y-2 list-disc list-inside">
                <li>Single KYC verification for all financial institutions</li>
                <li>Faster account opening and loan processing</li>
                <li>Digital and paperless verification process</li>
                <li>Secure storage of your KYC documents</li>
                <li>Easy updates and modifications to KYC details</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* KYC Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">
              KYC Process at MNS Bank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Submit Application</h4>
                  <p className="text-text-secondary text-sm">Fill KYC form with required details</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Provide Documents</h4>
                  <p className="text-text-secondary text-sm">Submit ID and address proof</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Biometric Verification</h4>
                  <p className="text-text-secondary text-sm">Fingerprint and photo capture</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">CKYC Generation</h4>
                  <p className="text-text-secondary text-sm">Receive your CKYC number</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Required Documents for KYC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Mandatory Documents</h3>
                <ul className="text-text-secondary space-y-2 list-disc list-inside">
                  <li>PAN Card (mandatory)</li>
                  <li>Aadhaar Card (preferred)</li>
                  <li>Passport size photograph (2 copies)</li>
                  <li>Signature specimen</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Address Proof (any one)</h3>
                <ul className="text-text-secondary space-y-2 list-disc list-inside">
                  <li>Aadhaar Card (if address updated)</li>
                  <li>Passport</li>
                  <li>Voter ID Card</li>
                  <li>Driving License</li>
                  <li>Utility bills (last 3 months)</li>
                  <li>Bank account statement (last 6 months)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Forms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">
              Download KYC Forms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start" asChild>
                <a href="/download-forms#kyc-forms">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  KYC Form
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a href="/download-forms#kyc-forms">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  CKYC Form
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-3">KYC Support</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p><strong>Phone:</strong> 1800-123-4567</p>
                  <p><strong>Email:</strong> kyc@mnsbankbhopal.com</p>
                  <p><strong>Working Hours:</strong> 9:30 AM - 4:00 PM (Mon-Sat)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Visit Our Branch</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p><strong>Head Office:</strong> Bairagarh, Bhopal</p>
                  <p><strong>TT Nagar Branch:</strong> TT Nagar, Bhopal</p>
                  <p><strong>Karond Branch:</strong> Karond, Bhopal</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
