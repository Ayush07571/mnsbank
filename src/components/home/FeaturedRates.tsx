'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export interface DepositRate {
  id: string;
  productType: 'savings' | 'time-deposit' | 'double-deposit' | 'recurring-deposit';
  productName: string;
  generalRate: string;
  seniorCitizenRate: string;
  staffRate: string;
  tenure: string;
  minAmount: string;
  features: string[];
  link: string;
  highlighted?: boolean;
}

const depositRates: DepositRate[] = [
  {
    id: '1',
    productType: 'double-deposit',
    productName: 'Double Deposit Scheme',
    generalRate: '10.3%',
    seniorCitizenRate: '10.8%',
    staffRate: '11.3%',
    tenure: '84 months',
    minAmount: '₹10,000',
    features: ['Guaranteed doubling', 'Loan facility', 'Premature withdrawal'],
    link: '/double-deposit',
    highlighted: true
  },
  {
    id: '2',
    productType: 'time-deposit',
    productName: 'Time Deposit (5+ years)',
    generalRate: '7.0%',
    seniorCitizenRate: '7.5%',
    staffRate: '8.0%',
    tenure: '5-10 years',
    minAmount: '₹5,000',
    features: ['Highest interest', 'Tax benefits', 'Auto-renewal'],
    link: '/time-deposit',
    highlighted: false
  },
  {
    id: '3',
    productType: 'recurring-deposit',
    productName: 'Recurring Deposit',
    generalRate: '6.5%',
    seniorCitizenRate: '7.0%',
    staffRate: '7.5%',
    tenure: '5-10 years',
    minAmount: '₹500/month',
    features: ['Disciplined saving', 'Auto-debit', 'Flexible tenure'],
    link: '/recurring-deposit',
    highlighted: false
  },
  {
    id: '4',
    productType: 'savings',
    productName: 'Premium Savings Account',
    generalRate: '4.0%',
    seniorCitizenRate: '4.5%',
    staffRate: '5.0%',
    tenure: 'No tenure',
    minAmount: '₹5,000',
    features: ['Zero balance option', 'Digital banking', 'Free debit card'],
    link: '/savings-account',
    highlighted: false
  }
];

export function FeaturedRates() {
  const [selectedProductType, setSelectedProductType] = useState<string>('all');

  const filteredRates = selectedProductType === 'all' 
    ? depositRates 
    : depositRates.filter(rate => rate.productType === selectedProductType);

  const productTypeLabels = {
    'all': 'All Products',
    'savings': 'Savings',
    'time-deposit': 'Time Deposit',
    'double-deposit': 'Double Deposit',
    'recurring-deposit': 'Recurring Deposit'
  };

  const getProductIcon = (productType: string) => {
    switch (productType) {
      case 'savings':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
        );
      case 'time-deposit':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
          </svg>
        );
      case 'double-deposit':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
        );
      case 'recurring-deposit':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
        );
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Featured Deposit Rates
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Grow your savings with our competitive interest rates and flexible deposit options
          </p>
        </div>

        {/* Product Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(productTypeLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedProductType(key)}
              className={`px-4 py-2 rounded-full font-medium transition-colors flex items-center space-x-2 ${
                selectedProductType === key
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-text-secondary border border-border hover:bg-gray-50'
              }`}
            >
              <span>{getProductIcon(key)}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Rates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRates.map((rate) => (
            <Card key={rate.id} className={`relative hover:shadow-lg transition-shadow ${
              rate.highlighted ? 'border-2 border-brand-primary/50' : ''
            }`}>
              {rate.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  {getProductIcon(rate.productType)}
                </div>
                <CardTitle className="text-lg font-semibold text-text-primary">
                  {rate.productName}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">
                      {rate.generalRate}
                    </div>
                    <div className="text-sm text-green-600">General Public</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Senior Citizen:</span>
                      <span className="font-semibold text-brand-accent">{rate.seniorCitizenRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Staff:</span>
                      <span className="font-semibold text-brand-accent">{rate.staffRate}</span>
                    </div>
                  </div>
                  <div className="border-t pt-3 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Tenure:</span>
                      <span className="font-medium">{rate.tenure}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Min Amount:</span>
                      <span className="font-medium">{rate.minAmount}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {rate.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="text-xs text-text-secondary flex items-center space-x-1">
                        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button variant="primary" size="sm" className="w-full" asChild>
                  <a href={rate.link}>
                    Apply Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Rates */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/interest-rates">
              View All Interest Rates
            </a>
          </Button>
        </div>

        {/* Rate Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-text-secondary">
            *Interest rates are subject to change without notice. Rates mentioned above are effective as of today.
          </p>
        </div>
      </div>
    </div>
  );
}
