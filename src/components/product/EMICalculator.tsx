'use client';

import { useState, useMemo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
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
  defaultAmount?: number;
  defaultRate?: number;
  defaultTenure?: number;
  maxAmount?: number;
}

export function EMICalculator({ 
  className,
  defaultAmount = 1000000,
  defaultRate = 10.5,
  defaultTenure = 120,
  maxAmount = 50000000
}: EMICalculatorProps) {
  const { t } = useTranslation('products');
  const [loanAmount, setLoanAmount] = useState(defaultAmount);
  const [interestRate, setInterestRate] = useState(defaultRate);
  const [loanTenure, setLoanTenure] = useState(defaultTenure);

  const [shouldCalculate, setShouldCalculate] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const calculateEMI = (principal: number, rate: number, tenure: number): EMICalculation => {
    if (principal <= 0 || tenure <= 0) {
      return {
        emi: 0,
        totalInterest: 0,
        totalAmount: 0,
        monthlyBreakdown: [],
      };
    }

    let emi: number;
    let totalInterest: number;
    let totalAmount: number;
    const monthlyBreakdown: EMICalculation['monthlyBreakdown'] = [];

    if (rate === 0) {
      emi = principal / tenure;
      totalAmount = principal;
      totalInterest = 0;
      
      let balance = principal;
      for (let month = 1; month <= tenure; month++) {
        const principalPayment = emi;
        balance -= principalPayment;
        
        monthlyBreakdown.push({
          month,
          principal: principalPayment,
          interest: 0,
          balance: Math.max(0, balance),
        });
      }
    } else {
      const monthlyRate = rate / 12 / 100;
      emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenure) / 
                  (Math.pow(1 + monthlyRate, tenure) - 1);
      
      totalAmount = emi * tenure;
      totalInterest = totalAmount - principal;
      
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
    }
    
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      monthlyBreakdown,
    };
  };

  const calculation = useMemo(() => {
    if (!shouldCalculate) {
      return {
        emi: 0,
        totalInterest: 0,
        totalAmount: 0,
        monthlyBreakdown: [],
      };
    }
    return calculateEMI(loanAmount, interestRate, loanTenure);
  }, [loanAmount, interestRate, loanTenure, shouldCalculate]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCalculate = () => {
    setShouldCalculate(true);
    setShowDetails(false);
  };

  const handleReset = () => {
    setLoanAmount(defaultAmount);
    setInterestRate(defaultRate);
    setLoanTenure(defaultTenure);
    setShouldCalculate(false);
    setShowDetails(false);
  };

  return (
    <div className={cn('space-y-6', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-text-primary">
            {t('emi.calculatorTitle')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              {t('emi.loanAmount')}
            </label>
            <Input
              type="text"
              value={formatCurrency(loanAmount)}
              onChange={(e) => setLoanAmount(parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0)}
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
              {t('emi.interestRate')} (% p.a.)
            </label>
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
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
              {t('emi.loanTenure')} ({t('emi.months')})
            </label>
            <Input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(parseInt(e.target.value) || 0)}
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
                <span>12 {t('emi.months')}</span>
                <span>360 {t('emi.months')}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card>
        <CardHeader>
          <CardTitle className="text-text-primary">
            {t('emi.calculationResult')}
            {!shouldCalculate && (
              <span className="ml-2 text-sm font-normal text-gray-500">
                (Click &quot;{t('emi.calculatorTitle')}&quot; to see results)
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-sm text-text-secondary mb-1">
                {t('emi.monthlyEMI')}
              </p>
              <p className="text-3xl font-bold text-brand-primary">
                {formatCurrency(calculation.emi)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-text-secondary mb-1">
                {t('emi.totalInterest')}
              </p>
              <p className="text-2xl font-semibold text-text-primary">
                {formatCurrency(calculation.totalInterest)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-text-secondary mb-1">
                {t('emi.totalAmount')}
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
              onClick={handleCalculate}
            >
              {t('emi.calculate')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={handleReset}
            >
              {t('common:common.reset')}
            </Button>
            <Button variant="outline" size="lg" className="flex-1" onClick={() => window.location.href = '/contact-us'}>
              {t('emi.applyNow')}
            </Button>
          </div>

          {/* Show Details Button */}
          {shouldCalculate && (
            <div className="mt-3">
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? t('emi.hideDetails') : t('emi.showDetails')}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detailed Breakdown */}
      {showDetails && (
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">
              {t('emi.amortizationSchedule')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">{t('emi.month')}</th>
                    <th className="text-right p-2">{t('emi.principal')}</th>
                    <th className="text-right p-2">{t('emi.interest')}</th>
                    <th className="text-right p-2">{t('emi.balance')}</th>
                  </tr>
                </thead>
                <tbody>
                  {calculation.monthlyBreakdown.map((item) => (
                    <tr key={item.month} className="border-b">
                      <td className="p-2">{item.month}</td>
                      <td className="text-right p-2">{formatCurrency(item.principal)}</td>
                      <td className="text-right p-2">{formatCurrency(item.interest)}</td>
                      <td className="text-right p-2">{formatCurrency(item.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
