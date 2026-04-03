'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { cn } from '@/lib/utils';

interface KFSData {
  rate: number;
  fee: string;
  tenure: string;
  emiExample: {
    amount: number;
    rate: number;
    tenure: string;
    emi: number;
    totalInterest: number;
    totalAmount: number;
  };
  prepaymentCharges: string;
  processingFee: string;
  otherCharges?: string[];
}

interface KFSPanelProps {
  data: KFSData;
  className?: string;
  variant?: 'default' | 'compact';
}

export function KFSPanel({ data, className, variant = 'default' }: KFSPanelProps) {
  const { t } = useTranslation('products');

  if (variant === 'compact') {
    return (
      <div className={cn('bg-surface border border-border rounded-card p-4', className)}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-text-secondary">{t('kfs.rate', 'Interest Rate')}</p>
            <p className="font-semibold text-brand-primary">{data.rate}% p.a.</p>
          </div>
          <div>
            <p className="text-text-secondary">{t('kfs.fee', 'Processing Fee')}</p>
            <p className="font-semibold text-text-primary">{data.processingFee}</p>
          </div>
          <div>
            <p className="text-text-secondary">{t('kfs.tenure', 'Tenure')}</p>
            <p className="font-semibold text-text-primary">{data.tenure}</p>
          </div>
          <div>
            <p className="text-text-secondary">{t('kfs.prepayment', 'Prepayment')}</p>
            <p className="font-semibold text-text-primary">{data.prepaymentCharges}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('bg-surface border border-border rounded-card overflow-hidden', className)}>
      {/* Header */}
      <div className="bg-brand-primary text-white p-4">
        <h3 className="font-heading text-lg font-semibold">
          {t('kfs.title', 'Key Facts Statement (KFS)')}
        </h3>
        <p className="text-white/80 text-sm mt-1">
          {t('kfs.subtitle', 'Important information about your loan terms and conditions')}
        </p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Interest Rate */}
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div>
            <h4 className="font-medium text-text-primary">{t('kfs.rate', 'Interest Rate')}</h4>
            <p className="text-sm text-text-secondary">{t('kfs.rateDescription', 'Annual interest rate applicable')}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-brand-primary">{data.rate}%</p>
            <p className="text-sm text-text-secondary">{t('kfs.perAnnum', 'per annum')}</p>
          </div>
        </div>

        {/* Processing Fee */}
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div>
            <h4 className="font-medium text-text-primary">{t('kfs.processingFee', 'Processing Fee')}</h4>
            <p className="text-sm text-text-secondary">{t('kfs.processingFeeDescription', 'One-time fee charged during loan processing')}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-text-primary">{data.processingFee}</p>
          </div>
        </div>

        {/* Tenure */}
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div>
            <h4 className="font-medium text-text-primary">{t('kfs.tenure', 'Loan Tenure')}</h4>
            <p className="text-sm text-text-secondary">{t('kfs.tenureDescription', 'Maximum loan repayment period')}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-text-primary">{data.tenure}</p>
          </div>
        </div>

        {/* EMI Example */}
        <div className="bg-background rounded-card p-4">
          <h4 className="font-medium text-text-primary mb-3">
            {t('kfs.emiExample', 'Sample EMI Calculation')}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">{t('kfs.loanAmount', 'Loan Amount')}</span>
              <span className="font-medium">₹{data.emiExample.amount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">{t('kfs.interestRate', 'Interest Rate')}</span>
              <span className="font-medium">{data.emiExample.rate}% p.a.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">{t('kfs.loanTenure', 'Loan Tenure')}</span>
              <span className="font-medium">{data.emiExample.tenure}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">{t('kfs.monthlyEMI', 'Monthly EMI')}</span>
              <span className="font-semibold text-brand-primary">₹{data.emiExample.emi.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">{t('kfs.totalInterest', 'Total Interest')}</span>
              <span className="font-medium">₹{data.emiExample.totalInterest.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="font-medium text-text-primary">{t('kfs.totalAmount', 'Total Amount')}</span>
              <span className="font-bold text-lg text-brand-primary">₹{data.emiExample.totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Prepayment Charges */}
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div>
            <h4 className="font-medium text-text-primary">{t('kfs.prepaymentCharges', 'Prepayment Charges')}</h4>
            <p className="text-sm text-text-secondary">{t('kfs.prepaymentDescription', 'Charges for early loan repayment')}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-text-primary">{data.prepaymentCharges}</p>
          </div>
        </div>

        {/* Other Charges */}
        {data.otherCharges && data.otherCharges.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-text-primary">{t('kfs.otherCharges', 'Other Charges')}</h4>
            <div className="space-y-2">
              {data.otherCharges.map((charge, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-text-secondary">{charge}</span>
                  <span className="font-medium text-text-primary">{t('kfs.applicable', 'Applicable')}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-brand-accent/10 rounded-card p-4">
          <div className="flex items-start space-x-2">
            <svg className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h5 className="font-medium text-brand-accent mb-1">
                {t('kfs.disclaimerTitle', 'Important Note')}
              </h5>
              <p className="text-sm text-text-secondary">
                {t('kfs.disclaimer', 'The above rates are indicative and subject to change based on the bank\'s policy, market conditions, and applicant\'s credit profile. Final rates will be communicated at the time of loan approval.')}
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Information */}
        <div className="text-xs text-text-secondary space-y-1">
          <p>
            {t('kfs.regulatory1', 'This KFS is provided as per RBI guidelines on fair lending practices.')}
          </p>
          <p>
            {t('kfs.regulatory2', 'For any queries, please contact our branch or call our customer service.')}
          </p>
          <p>
            {t('kfs.lastUpdated', 'Last updated')}: 01/01/2026
          </p>
        </div>
      </div>
    </div>
  );
}

// Sample KFS data for different loan types
export const sampleKFSData: Record<string, KFSData> = {
  'personal-loan': {
    rate: 12.5,
    fee: '2% of loan amount',
    tenure: '1 to 5 years',
    emiExample: {
      amount: 500000,
      rate: 12.5,
      tenure: '3 years',
      emi: 16667,
      totalInterest: 100012,
      totalAmount: 600012,
    },
    prepaymentCharges: '4% on outstanding amount',
    processingFee: '2% of loan amount',
    otherCharges: ['Documentation charges: ₹500', 'Legal charges: Actual cost'],
  },
  'home-loan': {
    rate: 10.5,
    fee: '1% of loan amount',
    tenure: '1 to 30 years',
    emiExample: {
      amount: 2000000,
      rate: 10.5,
      tenure: '20 years',
      emi: 19796,
      totalInterest: 2751040,
      totalAmount: 4751040,
    },
    prepaymentCharges: '2% on outstanding amount',
    processingFee: '1% of loan amount',
    otherCharges: ['Valuation charges: Actual cost', 'Legal charges: Actual cost'],
  },
  'gold-loan': {
    rate: 9.5,
    fee: '1% of loan amount',
    tenure: '1 month to 3 years',
    emiExample: {
      amount: 100000,
      rate: 9.5,
      tenure: '1 year',
      emi: 8792,
      totalInterest: 5504,
      totalAmount: 105504,
    },
    prepaymentCharges: 'No charges',
    processingFee: '1% of loan amount',
    otherCharges: ['Locker charges: Actual cost'],
  },
};
