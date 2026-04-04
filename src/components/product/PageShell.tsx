import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
    <div className={cn('min-h-screen bg-background', className)}>
      {/* Hero Section */}
      <section className="bg-brand-primary relative py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-brand-accent opacity-5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="container-tight relative z-10 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter leading-tight">
              {title}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                {subtitle}
              </p>
            )}
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            {heroContent && (
              <div className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-md max-w-4xl mx-auto text-left shadow-2xl">
                {heroContent}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white/80 backdrop-blur-md border-b border-black/5 sticky top-0 z-30 shadow-soft">
        <div className="container-tight">
          <div className="flex justify-center flex-wrap md:flex-nowrap gap-4 py-2 px-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  'px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300',
                  activeTab === tab.id
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                    : 'bg-surface text-text-secondary border border-black/5 hover:bg-white hover:text-text-primary'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-brand-primary/5 blur-[120px] -translate-y-1/2 -z-10" />

        <div className="container-tight relative z-10">
          <div className="max-w-4xl mx-auto">
            {activeTabData && (
              <ScrollReveal direction="up" delay={0.1}>
                {activeTabData.content}
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts && (
        <section className="section-padding bg-surface">
          <div className="container-tight">
            <ScrollReveal direction="up">
              <h2 className="font-heading text-3xl md:text-4xl font-black text-text-primary mb-12 text-center tracking-tighter">
                {t('relatedProducts.title', 'Related Products')}
              </h2>
            </ScrollReveal>
            <div className="relative z-10">{relatedProducts}</div>
          </div>
        </section>
      )}
    </div>
  );
}

// Individual Tab Components for reuse
export function OverviewTab({ children }: { children: React.ReactNode }) {
  return <div className="prose prose-slate max-w-none">{children}</div>;
}

export function FeaturesTab({ features }: { features: string[] }) {
  const { t } = useTranslation('products');

  return (
    <div className="space-y-10">
      <h3 className="font-heading text-2xl font-black text-text-primary tracking-tighter">
        {t('features.title', 'Key Features')}
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 group p-2">
            <div className="w-10 h-10 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-text-secondary font-medium leading-relaxed group-hover:text-text-primary transition-colors py-2">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EligibilityTab({ criteria }: { criteria: string[] }) {
  const { t } = useTranslation('products');

  return (
    <div className="space-y-10">
      <h3 className="font-heading text-2xl font-black text-text-primary tracking-tighter">
        {t('eligibility.title', 'Eligibility Criteria')}
      </h3>
      <div className="space-y-4">
        {criteria.map((criterion, index) => (
          <div
            key={index}
            className="flex items-start space-x-5 p-4 rounded-3xl bg-surface border border-black/5 group hover:border-brand-primary/20 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform">
              {index + 1}
            </div>
            <p className="text-text-secondary font-medium leading-relaxed py-2">
              {criterion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DocumentsTab({
  documents,
}: {
  documents: { name: string; required: boolean }[];
}) {
  const { t } = useTranslation('products');

  return (
    <div className="space-y-10">
      <h3 className="font-heading text-2xl font-black text-text-primary tracking-tighter">
        {t('documents.title', 'Required Documents')}
      </h3>
      <div className="grid gap-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-6 bg-white border border-black/5 rounded-[2rem] shadow-soft hover:shadow-xl transition-all duration-500 group"
          >
            <div className="flex items-center space-x-5">
              <div
                className={cn(
                  'w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110',
                  doc.required
                    ? 'bg-brand-primary text-white'
                    : 'bg-surface text-text-secondary'
                )}
              >
                <svg
                  className="w-6 h-6"
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
                <p className="font-black text-text-primary leading-tight text-lg">
                  {doc.name}
                </p>
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-1 opacity-60">
                  {doc.required
                    ? t('documents.required', 'Required Mandatory')
                    : t('documents.optional', 'Supporting Document')}
                </p>
              </div>
            </div>
            {doc.required && (
              <span className="px-5 py-2 bg-brand-accent/10 text-brand-accent text-[10px] font-black uppercase tracking-widest rounded-full">
                {t('documents.mandatory', 'Action Required')}
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
  ctaDescription,
}: {
  productSlug: string;
  ctaText?: string;
  ctaDescription?: string;
}) {
  const { t } = useTranslation('products');

  return (
    <div className="space-y-12">
      <div className="text-center bg-brand-primary p-12 rounded-[3.5rem] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

        <h3 className="font-heading text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter">
          {t('apply.title', 'Ready to Apply?')}
        </h3>
        <p className="text-white/80 mb-10 max-w-xl mx-auto font-medium text-lg">
          {ctaDescription ||
            t(
              'apply.description',
              'Take the first step towards your financial goals with MNS Bank.'
            )}
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="px-12 py-8 rounded-full text-sm font-black uppercase tracking-widest bg-white text-brand-primary border-0 hover:scale-105 transition-all shadow-2xl shadow-black/20"
          onClick={() => (window.location.href = '/contact-us')}
        >
          {ctaText || t('apply.cta', 'Open Account Now')}
        </Button>
      </div>

      <div className="bg-surface rounded-[2.5rem] p-10 border border-black/5">
        <h4 className="font-heading text-2xl font-black text-text-primary mb-8 tracking-tighter">
          {t('apply.nextSteps', 'Next Steps')}
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: 1, text: t('apply.step1', 'Fill out inquiry form') },
            { step: 2, text: t('apply.step2', 'Representative call') },
            { step: 3, text: t('apply.step3', 'Document submission') },
            { step: 4, text: t('apply.step4', 'Loan approval') },
          ].map(item => (
            <div
              key={item.step}
              className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300"
            >
              <span className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-black mb-4 shadow-lg shadow-brand-primary/10">
                {item.step}
              </span>
              <span className="text-text-secondary font-bold text-sm leading-tight uppercase tracking-widest opacity-60 mb-2">
                Step {item.step}
              </span>
              <span className="text-text-primary font-black text-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
