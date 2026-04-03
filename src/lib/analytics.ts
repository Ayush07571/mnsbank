// Google Analytics 4 implementation for MNS Bank
// Tracking events: pageviews, form_submit, language_toggle, calculator_use

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export interface GA4Event {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export class GoogleAnalytics {
  private static instance: GoogleAnalytics;
  private measurementId: string;
  private isInitialized = false;
  private isDisabled = false;

  private constructor() {
    this.measurementId = process.env.NEXT_PUBLIC_GA_ID || '';
    this.isDisabled = !this.measurementId || this.measurementId === 'G-XXXXXXXXXX';
  }

  public static getInstance(): GoogleAnalytics {
    if (!GoogleAnalytics.instance) {
      GoogleAnalytics.instance = new GoogleAnalytics();
    }
    return GoogleAnalytics.instance;
  }

  public initialize(): void {
    if (typeof window === 'undefined' || this.isDisabled) {
      return;
    }

    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).gtag = (window as any).gtag || function() {
      ((window as any).gtag.q = (window as any).gtag.q || []).push(arguments);
    };
    (window as any).gtag.q = (window as any).gtag.q || [];

    // Configure GA4
    window.gtag('js', new Date());
    window.gtag('config', this.measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        custom_parameter_1: 'language',
        custom_parameter_2: 'branch',
        custom_parameter_3: 'product_category',
      },
    });

    this.isInitialized = true;
  }

  public trackPageView(pagePath?: string, pageTitle?: string): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    window.gtag('config', this.measurementId, {
      page_path: pagePath || window.location.pathname,
      page_title: pageTitle || document.title,
    });
  }

  public trackEvent(event: GA4Event): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      custom_parameter_1: this.getCurrentLanguage(),
      custom_parameter_2: this.getCurrentBranch(),
      custom_parameter_3: this.getProductCategory(),
    });
  }

  // Specific event tracking methods
  public trackFormSubmit(formName: string, success: boolean = true): void {
    this.trackEvent({
      action: 'form_submit',
      category: 'engagement',
      label: formName,
      value: success ? 1 : 0,
    });
  }

  public trackLanguageToggle(fromLang: string, toLang: string): void {
    this.trackEvent({
      action: 'language_toggle',
      category: 'user_interaction',
      label: `${fromLang}_to_${toLang}`,
    });
  }

  public trackCalculatorUse(calculatorType: string, amount?: number, tenure?: number): void {
    this.trackEvent({
      action: 'calculator_use',
      category: 'tool_interaction',
      label: calculatorType,
      value: amount,
    });
  }

  public trackCTAClick(ctaText: string, destination: string): void {
    this.trackEvent({
      action: 'cta_click',
      category: 'engagement',
      label: `${ctaText}_to_${destination}`,
    });
  }

  public trackBranchSearch(branchName: string): void {
    this.trackEvent({
      action: 'branch_search',
      category: 'navigation',
      label: branchName,
    });
  }

  public trackProductView(productName: string, productCategory: string): void {
    this.trackEvent({
      action: 'product_view',
      category: 'engagement',
      label: productName,
    });
  }

  public trackDownload(fileName: string, fileType: string): void {
    this.trackEvent({
      action: 'file_download',
      category: 'engagement',
      label: `${fileType}_${fileName}`,
    });
  }

  // Helper methods to extract context
  private getCurrentLanguage(): string {
    if (typeof window === 'undefined') return 'unknown';
    
    // Check localStorage first
    const storedLang = localStorage.getItem('language') || localStorage.getItem('i18nextLng');
    if (storedLang) return storedLang;
    
    // Check HTML lang attribute
    const htmlLang = document.documentElement.lang;
    if (htmlLang) return htmlLang;
    
    // Check URL path
    const path = window.location.pathname;
    if (path.startsWith('/hi')) return 'hi';
    if (path.startsWith('/en')) return 'en';
    
    return 'unknown';
  }

  private getCurrentBranch(): string {
    if (typeof window === 'undefined') return 'unknown';
    
    // Try to get from URL params or page context
    const urlParams = new URLSearchParams(window.location.search);
    const branch = urlParams.get('branch') || urlParams.get('location');
    
    return branch || 'unknown';
  }

  private getProductCategory(): string {
    if (typeof window === 'undefined') return 'unknown';
    
    const path = window.location.pathname;
    
    if (path.includes('/personal-loan') || path.includes('/home-loan') || path.includes('/car-loan')) {
      return 'personal_loans';
    }
    if (path.includes('/business-loan') || path.includes('/working-capital')) {
      return 'business_loans';
    }
    if (path.includes('/savings-account') || path.includes('/current-account') || path.includes('/deposit')) {
      return 'deposits';
    }
    if (path.includes('/net-banking') || path.includes('/mobile-banking') || path.includes('/upi')) {
      return 'digital_services';
    }
    
    return 'other';
  }
}

// Export singleton instance
export const ga4 = GoogleAnalytics.getInstance();

import { useCallback, useMemo } from 'react';

// Custom hook for React components
export function useGA4() {
  const trackPageView = useCallback((pagePath?: string, pageTitle?: string) => {
    ga4.trackPageView(pagePath, pageTitle);
  }, []);

  const trackFormSubmit = useCallback((formName: string, success?: boolean) => {
    ga4.trackFormSubmit(formName, success);
  }, []);

  const trackLanguageToggle = useCallback((fromLang: string, toLang: string) => {
    ga4.trackLanguageToggle(fromLang, toLang);
  }, []);

  const trackCalculatorUse = useCallback((calculatorType: string, amount?: number, tenure?: number) => {
    ga4.trackCalculatorUse(calculatorType, amount, tenure);
  }, []);

  const trackCTAClick = useCallback((ctaText: string, destination: string) => {
    ga4.trackCTAClick(ctaText, destination);
  }, []);

  const trackBranchSearch = useCallback((branchName: string) => {
    ga4.trackBranchSearch(branchName);
  }, []);

  const trackProductView = useCallback((productName: string, productCategory: string) => {
    ga4.trackProductView(productName, productCategory);
  }, []);

  const trackDownload = useCallback((fileName: string, fileType: string) => {
    ga4.trackDownload(fileName, fileType);
  }, []);

  return useMemo(() => ({
    trackPageView,
    trackFormSubmit,
    trackLanguageToggle,
    trackCalculatorUse,
    trackCTAClick,
    trackBranchSearch,
    trackProductView,
    trackDownload,
  }), [
    trackPageView,
    trackFormSubmit,
    trackLanguageToggle,
    trackCalculatorUse,
    trackCTAClick,
    trackBranchSearch,
    trackProductView,
    trackDownload,
  ]);
}
