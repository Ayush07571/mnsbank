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
  maxAmount = 50000000,
}: EMICalculatorProps) {
  const { t } = useTranslation('products');
  const [loanAmount, setLoanAmount] = useState(defaultAmount);
  const [interestRate, setInterestRate] = useState(defaultRate);
  const [loanTenure, setLoanTenure] = useState(defaultTenure);

  const [shouldCalculate, setShouldCalculate] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const calculateEMI = (
    principal: number,
    rate: number,
    tenure: number
  ): EMICalculation => {
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
      emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
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
    <div className={cn('space-y-8', className)}>
      <Card className="border-0 shadow-soft overflow-hidden rounded-[2.5rem] bg-white">
        <CardHeader className="pt-10 pb-6 px-10">
          <CardTitle className="font-heading text-3xl font-black text-text-primary tracking-tighter">
            {t('emi.calculatorTitle')}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-10 pb-12 space-y-10">
          {/* Loan Amount */}
          <div className="group">
            <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-4 opacity-60">
              {t('emi.loanAmount')}
            </label>
            <div className="relative">
              <Input
                type="text"
                value={formatCurrency(loanAmount)}
                onChange={e =>
                  setLoanAmount(
                    parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0
                  )
                }
                className="text-2xl font-black h-16 rounded-2xl border-black/5 bg-surface pl-6 focus:bg-white transition-all shadow-sm group-hover:border-brand-primary/20"
              />
            </div>
            <div className="mt-8 px-2">
              <input
                type="range"
                min="100000"
                max={maxAmount}
                step="100000"
                value={loanAmount}
                onChange={e => setLoanAmount(parseInt(e.target.value))}
                className="w-full accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase tracking-widest mt-4 opacity-50">
                <span>{formatCurrency(100000)}</span>
                <span>{formatCurrency(maxAmount)}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Interest Rate */}
            <div className="group">
              <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-4 opacity-60">
                {t('emi.interestRate')} (% p.a.)
              </label>
              <Input
                type="number"
                value={interestRate}
                onChange={e => setInterestRate(parseFloat(e.target.value) || 0)}
                step="0.1"
                min="0"
                max="30"
                className="text-2xl font-black h-16 rounded-2xl border-black/5 bg-surface pl-6 focus:bg-white transition-all shadow-sm group-hover:border-brand-primary/20"
              />
              <div className="mt-8 px-2">
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="0.1"
                  value={interestRate}
                  onChange={e => setInterestRate(parseFloat(e.target.value))}
                  className="w-full accent-brand-primary"
                />
                <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase tracking-widest mt-4 opacity-50">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className="group">
              <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-4 opacity-60">
                {t('emi.loanTenure')} ({t('emi.months')})
              </label>
              <Input
                type="number"
                value={loanTenure}
                onChange={e => setLoanTenure(parseInt(e.target.value) || 0)}
                min="12"
                max="360"
                className="text-2xl font-black h-16 rounded-2xl border-black/5 bg-surface pl-6 focus:bg-white transition-all shadow-sm group-hover:border-brand-primary/20"
              />
              <div className="mt-8 px-2">
                <input
                  type="range"
                  min="12"
                  max="360"
                  step="6"
                  value={loanTenure}
                  onChange={e => setLoanTenure(parseInt(e.target.value))}
                  className="w-full accent-brand-primary"
                />
                <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase tracking-widest mt-4 opacity-50">
                  <span>12 {t('emi.months')}</span>
                  <span>360 {t('emi.months')}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="border-0 shadow-2xl overflow-hidden rounded-[3rem] bg-brand-primary text-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

        <CardHeader className="pt-12 pb-8 px-12">
          <CardTitle className="font-heading text-2xl font-black text-white tracking-tighter flex items-center gap-3">
            {t('emi.calculationResult')}
            {!shouldCalculate && (
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">
                (Pending)
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 flex flex-col items-center text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-4">
                {t('emi.monthlyEMI')}
              </p>
              <p className="text-5xl font-black text-white tracking-tighter">
                {formatCurrency(calculation.emi)}
              </p>
            </div>
            <div className="text-center md:text-left py-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">
                {t('emi.totalInterest')}
              </p>
              <p className="text-2xl font-black text-white">
                {formatCurrency(calculation.totalInterest)}
              </p>
            </div>
            <div className="text-center md:text-left py-4 border-t border-white/10 md:border-t-0 md:border-l md:pl-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">
                {t('emi.totalAmount')}
              </p>
              <p className="text-2xl font-black text-white">
                {formatCurrency(calculation.totalAmount)}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-white/10">
            <Button
              variant="secondary"
              size="lg"
              className="flex-1 h-16 rounded-full text-sm font-black uppercase tracking-widest bg-white text-brand-primary border-0 hover:scale-105 transition-all shadow-xl shadow-black/20"
              onClick={handleCalculate}
            >
              {t('emi.calculate')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 h-16 rounded-full text-sm font-black uppercase tracking-widest border-white/20 text-white hover:bg-white/10 transition-all"
              onClick={handleReset}
            >
              {t('common:common.reset')}
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="flex-1 h-16 rounded-full text-sm font-black uppercase tracking-widest bg-brand-accent text-white border-0 hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
              onClick={() => (window.location.href = '/contact-us')}
            >
              {t('emi.applyNow')}
            </Button>
          </div>

          {/* Show Details Button */}
          {shouldCalculate && (
            <div className="mt-8 text-center">
              <button
                className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? t('emi.hideDetails') : t('emi.showDetails')}{' '}
                {showDetails ? '↑' : '↓'}
              </button>
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
                  {calculation.monthlyBreakdown.map(item => (
                    <tr key={item.month} className="border-b">
                      <td className="p-2">{item.month}</td>
                      <td className="text-right p-2">
                        {formatCurrency(item.principal)}
                      </td>
                      <td className="text-right p-2">
                        {formatCurrency(item.interest)}
                      </td>
                      <td className="text-right p-2">
                        {formatCurrency(item.balance)}
                      </td>
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
