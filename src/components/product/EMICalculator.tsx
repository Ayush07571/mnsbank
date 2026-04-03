'use client';

import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useGA4 } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface EMICalculation {
  emi: number;
  totalInterest: number;
  totalAmount: number;
  monthlyBreakdown: {
    month: number;
    principal: number;
    interest: number;
    balance: number;
  }[];
}

interface EMICalculatorProps {
  className?: string;
  defaultRate?: number;
  maxAmount?: number;
  showAmortization?: boolean;
}

export function EMICalculator({
  className,
  defaultRate = 10.5,
  maxAmount = 50000000, // Default to 5 Crores
  showAmortization = true,
}: EMICalculatorProps) {
  const { t } = useTranslation('products');
  const { trackCalculatorUse } = useGA4();

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(defaultRate);
  const [loanTenure, setLoanTenure] = useState(120); // in months

  const [showDetails, setShowDetails] = useState(false);

  // RBI EMI Calculation Formula
  // EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
  // Where P = Principal, R = Monthly Interest Rate, N = Loan Tenure in months
  const calculateEMI = (principal: number, rate: number, tenure: number): EMICalculation => {
    const monthlyRate = rate / 12 / 100; // Convert annual rate to monthly rate
    
    // Calculate EMI using RBI formula
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenure) / 
                (Math.pow(1 + monthlyRate, tenure) - 1);
    
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;
    
    // Generate amortization schedule
    const monthlyBreakdown = [];
    let balance = principal;
    
    for (let month = 1; month <= tenure; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = emi - interestPayment;
      balance -= principalPayment;
      
      monthlyBreakdown.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance),
      });
    }
    
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      monthlyBreakdown,
    };
  };

  const calculation = useMemo(() => {
    return calculateEMI(loanAmount, interestRate, loanTenure);
  }, [loanAmount, interestRate, loanTenure]);

  // Track analytics separately — no setState needed
  useEffect(() => {
    if (calculation) {
      trackCalculatorUse('emi_calculator', loanAmount, loanTenure);
    }
  }, [loanAmount, loanTenure, trackCalculatorUse, calculation]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleAmountChange = (value: string) => {
    // If the input is empty or just the currency symbol, set to 0
    if (!value || value === '₹' || value === '₹ ') {
      setLoanAmount(0);
      return;
    }

    const num = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    
    // Limit to 10 Crores hard limit if maxAmount is not set higher
    const hardLimit = Math.max(maxAmount, 100000000);
    if (num <= hardLimit) {
      setLoanAmount(num);
    }
  };

  const handleRateChange = (value: string) => {
    const num = parseFloat(value) || 0;
    if (num >= 0 && num <= 30) {
      setInterestRate(num);
    }
  };

  const handleTenureChange = (value: string) => {
    const num = parseInt(value) || 0;
    if (num >= 12 && num <= 360) {
      setLoanTenure(num);
    }
  };

  const getTenureYears = (months: number): string => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${months} ${t('emi.months', 'months')}`;
    } else if (remainingMonths === 0) {
      return `${years} ${years === 1 ? t('emi.year', 'year') : t('emi.years', 'years')}`;
    } else {
      return `${years} ${years === 1 ? t('emi.year', 'year') : t('emi.years', 'years')} ${remainingMonths} ${t('emi.months', 'months')}`;
    }
  };

  if (!calculation) return null;

  return (
    <div className={cn('space-y-6', className)}>
      {/* Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-text-primary">
            {t('emi.calculatorTitle', 'EMI Calculator')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              {t('emi.loanAmount', 'Loan Amount')}
            </label>
            <Input
              type="text"
              value={formatCurrency(loanAmount)}
              onChange={(e) => handleAmountChange(e.target.value)}
              className="text-lg font-semibold"
            />
            <div className="mt-2">
              <input
                type="range"
                min="100000"
                max={maxAmount}
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>{formatCurrency(100000)}</span>
                <span>{formatCurrency(maxAmount)}</span>
              </div>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              {t('emi.interestRate', 'Interest Rate')} (% p.a.)
            </label>
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => handleRateChange(e.target.value)}
              step="0.1"
              min="0"
              max="30"
              className="text-lg font-semibold"
            />
            <div className="mt-2">
              <input
                type="range"
                min="5"
                max="25"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>5%</span>
                <span>25%</span>
              </div>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              {t('emi.loanTenure', 'Loan Tenure')}
            </label>
            <Input
              type="number"
              value={loanTenure}
              onChange={(e) => handleTenureChange(e.target.value)}
              min="12"
              max="360"
              className="text-lg font-semibold"
            />
            <div className="mt-2">
              <input
                type="range"
                min="12"
                max="360"
                step="6"
                value={loanTenure}
                onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>{t('emi.oneYear', '1 Year')}</span>
                <span>{t('emi.thirtyYears', '30 Years')}</span>
              </div>
            </div>
            <p className="text-sm text-text-secondary mt-1">
              {getTenureYears(loanTenure)}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card>
        <CardHeader>
          <CardTitle className="text-text-primary">
            {t('emi.calculationResult', 'EMI Calculation Result')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-sm text-text-secondary mb-1">
                {t('emi.monthlyEMI', 'Monthly EMI')}
              </p>
              <p className="text-3xl font-bold text-brand-primary">
                {formatCurrency(calculation.emi)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-text-secondary mb-1">
                {t('emi.totalInterest', 'Total Interest')}
              </p>
              <p className="text-2xl font-semibold text-text-primary">
                {formatCurrency(calculation.totalInterest)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-text-secondary mb-1">
                {t('emi.totalAmount', 'Total Amount')}
              </p>
              <p className="text-2xl font-semibold text-text-primary">
                {formatCurrency(calculation.totalAmount)}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails 
                ? t('emi.hideDetails', 'Hide Details') 
                : t('emi.showDetails', 'Show Details')
              }
            </Button>
            <Button variant="outline" size="lg" className="flex-1" onClick={() => window.location.href = '/contact-us'}>
              {t('emi.applyNow', 'Apply Now')}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Breakdown */}
      {showDetails && showAmortization && (
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">
              {t('emi.amortizationSchedule', 'Amortization Schedule')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2">{t('emi.month', 'Month')}</th>
                    <th className="text-right py-2 px-2">{t('emi.principal', 'Principal')}</th>
                    <th className="text-right py-2 px-2">{t('emi.interest', 'Interest')}</th>
                    <th className="text-right py-2 px-2">{t('emi.balance', 'Balance')}</th>
                  </tr>
                </thead>
                <tbody>
                  {calculation.monthlyBreakdown.map((payment, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-2 px-2">{payment.month}</td>
                      <td className="text-right py-2 px-2">
                        {formatCurrency(payment.principal)}
                      </td>
                      <td className="text-right py-2 px-2">
                        {formatCurrency(payment.interest)}
                      </td>
                      <td className="text-right py-2 px-2">
                        {formatCurrency(payment.balance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Disclaimer */}
      <div className="bg-surface border border-border rounded-card p-4">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h5 className="font-medium text-brand-accent mb-1">
              {t('emi.disclaimerTitle', 'Important Note')}
            </h5>
            <p className="text-sm text-text-secondary">
              {t('emi.disclaimer', 'The EMI calculator is for illustrative purposes only. Actual EMIs may vary based on bank policies, processing fees, and other charges. Please contact the bank for exact calculations.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
