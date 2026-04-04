'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export interface DepositRate {
  id: string;
  productType:
    | 'savings'
    | 'time-deposit'
    | 'double-deposit'
    | 'recurring-deposit';
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
    highlighted: true,
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
    highlighted: false,
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
    highlighted: false,
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
    highlighted: false,
  },
];

export function FeaturedRates() {
  const [selectedProductType, setSelectedProductType] = useState<string>('all');

  const filteredRates =
    selectedProductType === 'all'
      ? depositRates
      : depositRates.filter(rate => rate.productType === selectedProductType);

  const productTypeLabels = {
    all: 'All',
    savings: 'Savings',
    'time-deposit': 'FD',
    'double-deposit': 'Double',
    'recurring-deposit': 'RD',
  };

  const getProductIcon = (productType: string) => {
    switch (productType) {
      case 'savings':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
          </svg>
        );
      case 'time-deposit':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
          </svg>
        );
    }
  };

  return (
    <section className="section-padding bg-gray-50/50 relative overflow-hidden">
      <div className="container-tight relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tighter">
              Featured Deposit Rates
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
              High-yield returns for your hard-earned savings.
            </p>
          </div>
        </ScrollReveal>

        {/* Product Type Filter */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-gray-200/50 backdrop-blur-sm rounded-full w-fit mx-auto border border-black/5">
            {Object.entries(productTypeLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedProductType(key)}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  selectedProductType === key
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Rates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredRates.map((rate, idx) => (
            <ScrollReveal
              key={rate.id}
              direction="up"
              delay={0.1 + idx * 0.1}
              className="h-full"
            >
              <Card
                className={`group relative h-full overflow-hidden transition-all duration-500 rounded-[2.5rem] border-0 shadow-soft hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-brand-primary ${
                  rate.highlighted
                    ? 'ring-2 ring-brand-primary/50'
                    : 'border border-black/5'
                }`}
              >
                {rate.highlighted && (
                  <div className="absolute top-6 right-6 z-20">
                    <span className="bg-brand-accent text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-accent/20">
                      Top Choice
                    </span>
                  </div>
                )}

                <CardHeader className="pt-10 pb-6 items-center text-center">
                  <div className="w-16 h-16 bg-brand-primary/5 text-brand-primary rounded-[1.25rem] flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {getProductIcon(rate.productType)}
                  </div>
                  <CardTitle className="font-heading text-xl font-black text-text-primary group-hover:text-white transition-colors">
                    {rate.productName}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-8 pb-10 flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="relative mb-8 p-6 rounded-3xl bg-surface group-hover:bg-white/10 group-hover:text-white transition-all duration-500">
                      <div className="text-4xl font-black tracking-tight mb-1">
                        {rate.generalRate}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                        Annual General Rate
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center text-sm border-b border-black/5 group-hover:border-white/10 pb-2">
                        <span className="text-text-secondary font-medium group-hover:text-white/60">
                          Senior Citizen
                        </span>
                        <span className="font-black text-brand-primary group-hover:text-brand-accent transition-colors">
                          {rate.seniorCitizenRate}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-black/5 group-hover:border-white/10 pb-2">
                        <span className="text-text-secondary font-medium group-hover:text-white/60">
                          Staff Rate
                        </span>
                        <span className="font-black text-brand-primary group-hover:text-brand-accent transition-colors">
                          {rate.staffRate}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-text-secondary font-medium group-hover:text-white/60">
                          Tenure
                        </span>
                        <span className="font-bold text-text-primary group-hover:text-white transition-colors">
                          {rate.tenure}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link href={rate.link} className="block mt-auto">
                    <Button
                      className={`w-full rounded-full py-6 font-black uppercase tracking-widest text-[11px] transition-all duration-300 ${
                        rate.highlighted
                          ? 'bg-brand-primary text-white group-hover:bg-white group-hover:text-brand-primary'
                          : 'bg-surface text-text-primary group-hover:bg-white group-hover:text-brand-primary'
                      }`}
                    >
                      Invest Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center mt-16 pt-8 border-t border-black/5">
            <p className="text-xs text-text-secondary font-medium max-w-xl mx-auto opacity-60">
              *Interest rates are subject to change. MNS Bank is a member of
              DICGC, insuring your deposits up to ₹5 Lakhs.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
