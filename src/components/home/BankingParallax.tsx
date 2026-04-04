'use client';
import React from 'react';
import { HeroParallax } from '@/components/ui/hero-parallax';

export function BankingParallax() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="absolute top-0 left-0 w-full">
        <HeroParallax products={bankingProducts} />
      </div>
    </div>
  );
}

export const bankingProducts = [
  {
    title: 'Savings Account',
    link: '/savings-account',
    thumbnail: '/images/savings-account.png',
  },
  {
    title: 'Home Loans',
    link: '/home-loan',
    thumbnail: '/images/hero-home-loan.png',
  },
  {
    title: 'Business Banking',
    link: '/current-account',
    thumbnail: '/images/hero-business.png',
  },
  {
    title: 'Digital Banking',
    link: '/net-banking',
    thumbnail: '/images/hero-digital.png',
  },
  {
    title: 'Personal Loans',
    link: '/personal-loan',
    thumbnail: '/images/personal-loan.png',
  },
  {
    title: 'Gold Loans',
    link: '/gold-loan',
    thumbnail: '/images/gold-loan.png',
  },
  {
    title: 'Fixed Deposits',
    link: '/time-deposit',
    thumbnail: '/images/time-deposit.png',
  },
  {
    title: 'Debit Cards',
    link: '/debit-cards',
    thumbnail: '/images/dicgc-insured.png',
  },
  {
    title: 'Insurance',
    link: '/insurance',
    thumbnail: '/images/rbi-regulated.png',
  },
  {
    title: 'Mobile Banking',
    link: '/mobile-banking',
    thumbnail: '/images/hero-digital.png',
  },
  {
    title: 'Education Loans',
    link: '/education-loan',
    thumbnail: '/images/education-loan.png',
  },
  {
    title: 'Car Loans',
    link: '/car-loan',
    thumbnail: '/images/car-loan.png',
  },
  {
    title: 'Recurring Deposits',
    link: '/recurring-deposit',
    thumbnail: '/images/recurring-deposit.png',
  },
  {
    title: 'ATM Services',
    link: '/atm-locator',
    thumbnail: '/images/hero-digital.png',
  },
  {
    title: 'Investment Services',
    link: '/mutual-funds',
    thumbnail: '/images/rbi-regulated.png',
  },
];
