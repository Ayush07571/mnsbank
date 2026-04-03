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
    const maturityAmount = P * (Math.pow(1 + i, n / 3) - 1) / (1 - Math.pow(1 + i, -1/3));
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
    trackCalculatorUse(type === 'fd' ? 'fd_calculator' : 'rd_calculator', amount, tenure);
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
    <div className={cn('space-y-6', className)}>
      {/* ... (input section) */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-text-primary">
              {t('deposit.calculatorTitle', 'Deposit Calculator')}
            </CardTitle>
            <div className="flex bg-surface rounded-input p-1">
              <button
                onClick={() => setType('fd')}
                className={cn(
                  'px-4 py-1 text-xs font-medium rounded-input transition-all',
                  type === 'fd' ? 'bg-brand-primary text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {t('deposit.fd', 'Fixed Deposit')}
              </button>
              <button
                onClick={() => setType('rd')}
                className={cn(
                  'px-4 py-1 text-xs font-medium rounded-input transition-all',
                  type === 'rd' ? 'bg-brand-primary text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {t('deposit.rd', 'Recurring Deposit')}
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              {type === 'fd' ? t('deposit.principal', 'Principal Amount') : t('deposit.monthlyInst', 'Monthly Installment')}
            </label>
            <Input
              type="text"
              value={formatCurrency(amount)}
              onChange={(e) => handleAmountChange(e.target.value)}
              className="text-lg font-semibold"
            />
            <input
              type="range"
              min={type === 'fd' ? 10000 : 500}
              max={type === 'fd' ? 10000000 : 500000}
              step={type === 'fd' ? 10000 : 500}
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="w-full mt-4"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                {t('deposit.rate', 'Interest Rate')} (% p.a.)
              </label>
              <Input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                step="0.1"
                className="font-semibold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                {t('deposit.tenure', 'Tenure')} ({t('deposit.months', 'Months')})
              </label>
              <Input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(parseInt(e.target.value) || 0)}
                className="font-semibold"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-brand-primary text-white">
        <CardContent className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-white/70 text-sm mb-1">{t('deposit.totalInvestment', 'Total Investment')}</p>
              <p className="text-2xl font-bold">{formatCurrency(calculation.totalInvestment)}</p>
            </div>
            <div>
              <p className="text-white/70 text-sm mb-1">{t('deposit.totalInterest', 'Interest Earned')}</p>
              <p className="text-2xl font-bold">{formatCurrency(calculation.totalInterest)}</p>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0">
              <p className="text-white/90 text-sm mb-1 font-semibold">{t('deposit.maturityAmount', 'Maturity Amount')}</p>
              <p className="text-4xl font-bold">{formatCurrency(calculation.maturityAmount)}</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
              onClick={handleReset}
            >
              {t('common:common.reset', 'Reset')}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <p className="text-xs text-text-secondary italic px-2">
        * {t('deposit.disclaimer', 'Interest calculated on quarterly compounding basis as per RBI norms. Actual returns may vary.')}
      </p>
    </div>
  );
}
