'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Button } from '@/components/ui/Button';
import { AccessibilityToolbar } from '@/components/ui/AccessibilityToolbar';
import SiteSearch from '@/components/common/SiteSearch';
import { useLanguage } from '@/hooks/useLanguage';
import { NavigationItem, HeaderProps, MobileMenuState } from '@/types/header';
import { cn } from '@/lib/utils';

const navigationData = {
  en: {
    personal: [
      { label: 'Accounts', href: '/savings-account' },
      { label: 'Deposits', href: '/time-deposit' },
      { label: 'Loans', href: '/personal-loan' },
      { label: 'Services', href: '/upi-qr' },
      { label: 'Stay Connected', href: '/contact-us' },
    ],
    business: [
      { label: 'Accounts', href: '/current-account' },
      { label: 'Deposits', href: '/biz-time-deposit' },
      { label: 'Loans', href: '/working-capital-loan' },
      { label: 'Services', href: '/bbps' },
      { label: 'Stay Connected', href: '/contact-us' },
    ],
  },
  hi: {
    personal: [
      { label: 'खाते', href: '/savings-account' },
      { label: 'जमा', href: '/time-deposit' },
      { label: 'ऋण', href: '/personal-loan' },
      { label: 'सेवाएं', href: '/upi-qr' },
      { label: 'जुड़े रहें', href: '/contact-us' },
    ],
    business: [
      { label: 'खाते', href: '/current-account' },
      { label: 'जमा', href: '/biz-time-deposit' },
      { label: 'ऋण', href: '/working-capital-loan' },
      { label: 'सेवाएं', href: '/bbps' },
      { label: 'जुड़े रहें', href: '/contact-us' },
    ],
  },
};

export function Header({ className }: HeaderProps) {
  const { t } = useTranslation('common');
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  const [mobileMenu, setMobileMenu] = useState<MobileMenuState>({
    isOpen: false,
    activeTab: 'personal',
  });
  const [activeNavTab, setActiveNavTab] = useState<'personal' | 'business'>('personal');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentNav = navigationData[currentLanguage.code as keyof typeof navigationData];

  const toggleMobileMenu = () => {
    setMobileMenu(prev => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const closeMobileMenu = () => {
    setMobileMenu({ isOpen: false, activeTab: 'personal' });
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
          isScrolled && 'border-b border-border shadow-sm',
          className
        )}
      >
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-brand-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MNS</span>
                </div>
                <span className="font-heading text-brand-primary hidden sm:block">
                  MNS Bank Bhopal
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden lg:block">
                <SiteSearch 
                  placeholder={t('search.placeholder', 'Search...')}
                  className="w-64"
                />
              </div>

              {/* Language Toggle */}
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-text-secondary">{t('navigation.language')}:</span>
                <div className="flex rounded-input border border-border overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        'px-3 py-1 text-sm transition-colors',
                        currentLanguage.code === lang.code
                          ? 'bg-brand-accent text-white'
                          : 'bg-background text-text-primary hover:bg-surface'
                      )}
                    >
                      {lang.nativeName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Net Banking CTA */}
              <Link href="/net-banking" target="_blank">
                <Button variant="primary" size="sm" className="hidden sm:flex">
                  {t('navigation.netBanking')}
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenu.isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </Button>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center justify-between py-4">
              {/* Desktop Navigation Tabs */}
              <div className="flex items-center space-x-8">
                <div className="flex rounded-input border border-border overflow-hidden">
                  <button 
                    onClick={() => setActiveNavTab('personal')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeNavTab === 'personal' 
                        ? 'bg-brand-primary text-white' 
                        : 'text-text-primary hover:bg-surface'
                    }`}
                  >
                    {t('navigation.personalBanking')}
                  </button>
                  <button 
                    onClick={() => setActiveNavTab('business')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeNavTab === 'business' 
                        ? 'bg-brand-primary text-white' 
                        : 'text-text-primary hover:bg-surface'
                    }`}
                  >
                    {t('navigation.businessBanking')}
                  </button>
                </div>
                
                {/* Navigation Menu */}
                <ul className="flex items-center space-x-6">
                  {currentNav[activeNavTab].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-text-primary hover:text-brand-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu.isOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-brand-primary rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MNS</span>
                  </div>
                  <span className="font-heading text-brand-primary">MNS Bank</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>

              {/* Mobile Navigation Tabs */}
              <div className="flex mb-4">
                <button
                  onClick={() => setActiveNavTab('personal')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-input ${
                    activeNavTab === 'personal' 
                      ? 'bg-brand-primary text-white' 
                      : 'bg-surface text-text-primary'
                  }`}
                >
                  {t('navigation.personalBanking')}
                </button>
                <button
                  onClick={() => setActiveNavTab('business')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-input ${
                    activeNavTab === 'business' 
                      ? 'bg-brand-primary text-white' 
                      : 'bg-surface text-text-primary'
                  }`}
                >
                  {t('navigation.businessBanking')}
                </button>
              </div>

              {/* Mobile Navigation Menu */}
              <div className="border-t border-border py-4 space-y-3">
                <div className="px-4">
                  <ul className="space-y-3">
                    {currentNav[activeNavTab].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-2 text-text-primary hover:text-brand-accent transition-colors"
                          onClick={() => setMobileMenu(prev => ({ ...prev, isOpen: false }))}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile Language & Net Banking */}
              <div className="border-t border-border py-4 space-y-3">
                <div className="px-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-text-secondary">{t('navigation.language')}:</span>
                    <div className="flex rounded-input border border-border overflow-hidden">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={cn(
                            'px-3 py-1 text-sm transition-colors',
                            currentLanguage.code === lang.code
                              ? 'bg-brand-accent text-white'
                              : 'bg-background text-text-primary'
                          )}
                        >
                          {lang.nativeName}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="px-4">
                  <Link href="/net-banking" target="_blank">
                    <Button variant="primary" size="sm" className="w-full">
                      {t('navigation.netBanking')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Toolbar */}
      <AccessibilityToolbar />
    </>
  );
}
