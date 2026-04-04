'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useGA4 } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface DepositCalculation {
  maturityAmount: number;
  totalInvestment: number;
  totalInterest: number;
}

export function DepositCalculator({ className }: { className?: string }) {
  const { t } = useTranslation('products');
  const { trackCalculatorUse } = useGA4();

  const [type, setType] = useState<'fd' | 'rd'>('fd');
  const [amount, setAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenure, setTenure] = useState(12); // months

  const calculateFD = useCallback((P: number, r: number, n: number) => {
    // ... (rest of the logic remains the same)
    const quarters = n / 3;
    const maturityAmount = P * Math.pow(1 + r / 400, quarters);

    return {
      maturityAmount: Math.round(maturityAmount),
      totalInvestment: P,
      totalInterest: Math.round(maturityAmount - P),
    };
  }, []);

  const calculateRD = useCallback((P: number, r: number, n: number) => {
    const i = r / 400;
    const maturityAmount =
      (P * (Math.pow(1 + i, n / 3) - 1)) / (1 - Math.pow(1 + i, -1 / 3));
    const totalInvestment = P * n;

    return {
      maturityAmount: Math.round(maturityAmount),
      totalInvestment,
      totalInterest: Math.round(maturityAmount - totalInvestment),
    };
  }, []);

  const calculation = useMemo<DepositCalculation>(() => {
    return type === 'fd'
      ? calculateFD(amount, interestRate, tenure)
      : calculateRD(amount, interestRate, tenure);
  }, [type, amount, interestRate, tenure, calculateFD, calculateRD]);

  useEffect(() => {
    trackCalculatorUse(
      type === 'fd' ? 'fd_calculator' : 'rd_calculator',
      amount,
      tenure
    );
  }, [type, amount, tenure, trackCalculatorUse]);

  const handleReset = () => {
    setAmount(100000);
    setInterestRate(7.5);
    setTenure(12);
    setType('fd');
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleAmountChange = (val: string) => {
    const num = parseInt(val.replace(/[^0-9]/g, '')) || 0;
    if (num <= 100000000) setAmount(num);
  };

  return (
    <div className={cn('grid lg:grid-cols-5 gap-8', className)}>
      <Card className="lg:col-span-3 border-0 shadow-soft rounded-[2.5rem] bg-white overflow-hidden">
        <CardHeader className="pt-10 pb-6 px-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <CardTitle className="font-heading text-3xl font-black text-text-primary tracking-tighter">
              {t('deposit.calculatorTitle', 'Deposit Calculator')}
            </CardTitle>
            <div className="flex bg-surface rounded-full p-1.5 border border-black/5">
              <button
                onClick={() => setType('fd')}
                className={cn(
                  'px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300',
                  type === 'fd'
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {t('deposit.fd', 'Fixed')}
              </button>
              <button
                onClick={() => setType('rd')}
                className={cn(
                  'px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300',
                  type === 'rd'
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {t('deposit.rd', 'Recurring')}
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-10 pb-12 space-y-10">
          <div className="group">
            <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-4 opacity-60">
              {type === 'fd'
                ? t('deposit.principal', 'Principal Amount')
                : t('deposit.monthlyInst', 'Monthly Installment')}
            </label>
            <Input
              type="text"
              value={formatCurrency(amount)}
              onChange={e => handleAmountChange(e.target.value)}
              className="text-2xl font-black h-16 rounded-2xl border-black/5 bg-surface pl-6 focus:bg-white transition-all shadow-sm"
            />
            <div className="mt-8 px-2">
              <input
                type="range"
                min={type === 'fd' ? 10000 : 500}
                max={type === 'fd' ? 10000000 : 500000}
                step={type === 'fd' ? 10000 : 500}
                value={amount}
                onChange={e => setAmount(parseInt(e.target.value))}
                className="w-full accent-brand-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="group">
              <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-4 opacity-60">
                {t('deposit.rate', 'Interest Rate')} (% p.a.)
              </label>
              <Input
                type="number"
                value={interestRate}
                onChange={e => setInterestRate(parseFloat(e.target.value) || 0)}
                step="0.1"
                className="text-2xl font-black h-16 rounded-2xl border-black/5 bg-surface pl-6 focus:bg-white transition-all shadow-sm"
              />
            </div>
            <div className="group">
              <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-4 opacity-60">
                {t('deposit.tenure', 'Tenure')} ({t('deposit.months', 'Months')}
                )
              </label>
              <Input
                type="number"
                value={tenure}
                onChange={e => setTenure(parseInt(e.target.value) || 0)}
                className="text-2xl font-black h-16 rounded-2xl border-black/5 bg-surface pl-6 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2 bg-brand-primary text-white border-0 shadow-2xl rounded-[2.5rem] overflow-hidden relative">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

        <CardContent className="h-full flex flex-col p-10">
          <div className="flex-grow space-y-10">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-3">
                {t('deposit.maturityAmount', 'Total Maturity Value')}
              </p>
              <p className="text-4xl sm:text-5xl font-black tracking-tighter">
                {formatCurrency(calculation.maturityAmount)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 px-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">
                  {t('deposit.totalInvestment', 'Invested')}
                </p>
                <p className="text-lg font-black">
                  {formatCurrency(calculation.totalInvestment)}
                </p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">
                  {t('deposit.totalInterest', 'Earned')}
                </p>
                <p className="text-lg font-black text-brand-accent">
                  {formatCurrency(calculation.totalInterest)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <Button
              variant="secondary"
              className="w-full h-16 rounded-full text-xs font-black uppercase tracking-widest bg-white text-brand-primary border-0 hover:scale-105 transition-all shadow-xl shadow-black/20"
              onClick={() => (window.location.href = '/contact-us')}
            >
              {t('deposit.applyNow', 'Open Account Now')}
            </Button>
            <button
              onClick={handleReset}
              className="w-full text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors py-2"
            >
              {t('common:common.reset', 'Reset Parameters')}
            </button>
          </div>
        </CardContent>
      </Card>

      <p className="text-xs text-text-secondary italic px-2">
        *{' '}
        {t(
          'deposit.disclaimer',
          'Interest calculated on quarterly compounding basis as per RBI norms. Actual returns may vary.'
        )}
      </p>
    </div>
  );
}
