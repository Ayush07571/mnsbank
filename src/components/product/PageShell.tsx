'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ProductPageShellProps {
  title: string;
  subtitle?: string;
  heroContent?: React.ReactNode;
  tabs: TabItem[];
  relatedProducts?: React.ReactNode;
  className?: string;
}

export function ProductPageShell({
  title,
  subtitle,
  heroContent,
  tabs,
  relatedProducts,
  className,
}: ProductPageShellProps) {
  const { t } = useTranslation('products');
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className={cn('min-h-screen', className)}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {subtitle}
              </p>
            )}
            {heroContent && (
              <div className="mt-8">
                {heroContent}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-background border-b border-border sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  'flex-1 min-w-[120px] px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                  activeTab === tab.id
                    ? 'border-brand-accent text-brand-accent'
                    : 'border-transparent text-text-secondary hover:text-text-primary'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {activeTabData && (
              <div className="animate-in fade-in-50 duration-300">
                {activeTabData.content}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts && (
        <section className="bg-surface py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text-primary mb-8 text-center">
                {t('relatedProducts.title', 'Related Products')}
              </h2>
              {relatedProducts}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// Individual Tab Components for reuse
export function OverviewTab({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-slate max-w-none">
      {children}
    </div>
  );
}

export function FeaturesTab({ features }: { features: string[] }) {
  const { t } = useTranslation('products');
  
  return (
    <div className="space-y-6">
      <h3 className="font-heading text-xl font-semibold text-text-primary">
        {t('features.title', 'Key Features')}
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-text-secondary">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EligibilityTab({ criteria }: { criteria: string[] }) {
  const { t } = useTranslation('products');
  
  return (
    <div className="space-y-6">
      <h3 className="font-heading text-xl font-semibold text-text-primary">
        {t('eligibility.title', 'Eligibility Criteria')}
      </h3>
      <div className="space-y-3">
        {criteria.map((criterion, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs font-bold">{index + 1}</span>
            </div>
            <p className="text-text-secondary">{criterion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DocumentsTab({ documents }: { documents: { name: string; required: boolean }[] }) {
  const { t } = useTranslation('products');
  
  return (
    <div className="space-y-6">
      <h3 className="font-heading text-xl font-semibold text-text-primary">
        {t('documents.title', 'Required Documents')}
      </h3>
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-border rounded-card">
            <div className="flex items-center space-x-3">
              <div className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center',
                doc.required ? 'bg-brand-primary' : 'bg-surface'
              )}>
                <svg
                  className={cn('w-4 h-4', doc.required ? 'text-white' : 'text-text-secondary')}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-text-primary">{doc.name}</p>
                <p className="text-sm text-text-secondary">
                  {doc.required 
                    ? t('documents.required', 'Required') 
                    : t('documents.optional', 'Optional')
                  }
                </p>
              </div>
            </div>
            {doc.required && (
              <span className="px-2 py-1 bg-brand-accent/10 text-brand-accent text-xs font-medium rounded">
                {t('documents.mandatory', 'Mandatory')}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ApplyTab({ 
  productSlug, 
  ctaText, 
  ctaDescription 
}: { 
  productSlug: string; 
  ctaText?: string; 
  ctaDescription?: string; 
}) {
  const { t } = useTranslation('products');
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="font-heading text-2xl font-semibold text-text-primary mb-4">
          {t('apply.title', 'Ready to Apply?')}
        </h3>
        <p className="text-text-secondary mb-6">
          {ctaDescription || t('apply.description', 'Take the first step towards your financial goals with MNS Bank.')}
        </p>
        <Button variant="primary" size="lg" className="px-8">
          {ctaText || t('apply.cta', 'Apply Now')}
        </Button>
      </div>
      
      <div className="bg-surface rounded-card p-6">
        <h4 className="font-heading text-lg font-semibold text-text-primary mb-4">
          {t('apply.nextSteps', 'Next Steps')}
        </h4>
        <ol className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
            <span className="text-text-secondary">{t('apply.step1', 'Fill out the inquiry form below')}</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
            <span className="text-text-secondary">{t('apply.step2', 'Our representative will contact you')}</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
            <span className="text-text-secondary">{t('apply.step3', 'Submit required documents at the branch')}</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
            <span className="text-text-secondary">{t('apply.step4', 'Get your loan approved and disbursed')}</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
