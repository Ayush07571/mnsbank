'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { AccessibilityToolbar } from '@/components/ui/AccessibilityToolbar';
import SiteSearch from '@/components/common/SiteSearch';
import { useLanguage } from '@/hooks/useLanguage';
import { HeaderProps } from '@/types/header';
import { cn } from '@/lib/utils';

// ─── Mega-menu data ────────────────────────────────────────────────────────────

const megaMenuData = {
  personal: {
    'navigation.categories.accounts': [
      {
        labelKey: 'navigation.accounts.savings',
        href: '/savings-account',
        defaultLabel: 'Savings Account',
      },
      {
        labelKey: 'navigation.accounts.current',
        href: '/current-account',
        defaultLabel: 'Current Account',
      },
      {
        labelKey: 'navigation.accounts.doubleDeposit',
        href: '/double-deposit',
        defaultLabel: 'Double Deposit',
      },
      {
        labelKey: 'navigation.accounts.timeDeposit',
        href: '/time-deposit',
        defaultLabel: 'Time Deposit',
      },
      {
        labelKey: 'navigation.accounts.recurringDeposit',
        href: '/recurring-deposit',
        defaultLabel: 'Recurring Deposit',
      },
    ],
    'navigation.categories.deposits': [
      {
        labelKey: 'navigation.deposits.fixed',
        href: '/time-deposit',
        defaultLabel: 'Fixed Deposit (Time)',
      },
      {
        labelKey: 'navigation.deposits.recurring',
        href: '/recurring-deposit',
        defaultLabel: 'Recurring Deposit',
      },
      {
        labelKey: 'navigation.deposits.double',
        href: '/double-deposit',
        defaultLabel: 'Double Deposit',
      },
      {
        labelKey: 'navigation.deposits.rates',
        href: '/interest-rates',
        defaultLabel: 'Interest Rates',
      },
      {
        labelKey: 'navigation.deposits.locker',
        href: '/locker',
        defaultLabel: 'Locker Facility',
      },
    ],
    'navigation.categories.loans': [
      {
        labelKey: 'navigation.loans.personal',
        href: '/personal-loan',
        defaultLabel: 'Personal Loan',
      },
      {
        labelKey: 'navigation.loans.gold',
        href: '/gold-loan',
        defaultLabel: 'Gold Loan',
      },
      {
        labelKey: 'navigation.loans.home',
        href: '/home-loan',
        defaultLabel: 'Home Loan',
      },
      {
        labelKey: 'navigation.loans.car',
        href: '/car-loan',
        defaultLabel: 'Car Loan',
      },
      {
        labelKey: 'navigation.loans.education',
        href: '/education-loan',
        defaultLabel: 'Education Loan',
      },
      {
        labelKey: 'navigation.loans.consumer',
        href: '/consumer-loan',
        defaultLabel: 'Consumer Loan',
      },
      {
        labelKey: 'navigation.loans.festival',
        href: '/festival-loan',
        defaultLabel: 'Festival Loan',
      },
      {
        labelKey: 'navigation.loans.construction',
        href: '/house-construction-loan',
        defaultLabel: 'House Construction',
      },
    ],
    'navigation.categories.services': [
      {
        labelKey: 'navigation.services.netBanking',
        href: '/net-banking',
        defaultLabel: 'Net Banking',
      },
      {
        labelKey: 'navigation.services.mobileBanking',
        href: '/mobile-banking',
        defaultLabel: 'Mobile Banking',
      },
      {
        labelKey: 'navigation.services.upi',
        href: '/upi-qr',
        defaultLabel: 'UPI & QR Services',
      },
      {
        labelKey: 'navigation.services.cards',
        href: '/debit-cards',
        defaultLabel: 'ATM / Debit Card',
      },
    ],
    'navigation.categories.stayConnected': [
      {
        labelKey: 'navigation.stayConnected.contact',
        href: '/contact-us',
        defaultLabel: 'Contact Us',
      },
      {
        labelKey: 'navigation.stayConnected.branches',
        href: '/branch-locator',
        defaultLabel: 'Branch Locator',
      },
      {
        labelKey: 'navigation.stayConnected.atms',
        href: '/atm-locator',
        defaultLabel: 'ATM Locator',
      },
      {
        labelKey: 'navigation.stayConnected.calculator',
        href: '/emi-calculator',
        defaultLabel: 'EMI Calculator',
      },
    ],
  },
  business: {
    'navigation.categories.accounts': [
      {
        labelKey: 'navigation.accounts.current',
        href: '/current-account',
        defaultLabel: 'Current Account',
      },
      {
        labelKey: 'navigation.accounts.bizDouble',
        href: '/biz-double-deposit',
        defaultLabel: 'Business Double Deposit',
      },
    ],
    'navigation.categories.loans': [
      {
        labelKey: 'navigation.loans.workingCapital',
        href: '/working-capital-loan',
        defaultLabel: 'Working Capital Loan',
      },
      {
        labelKey: 'navigation.loans.professional',
        href: '/professional-loan',
        defaultLabel: 'Professional Loan',
      },
      {
        labelKey: 'navigation.loans.overdraft',
        href: '/overdraft-facility',
        defaultLabel: 'Overdraft Facility',
      },
    ],
    'navigation.categories.stayConnected': [
      {
        labelKey: 'navigation.stayConnected.contact',
        href: '/contact-us',
        defaultLabel: 'Contact Us',
      },
      {
        labelKey: 'navigation.stayConnected.forms',
        href: '/download-forms',
        defaultLabel: 'Download Forms',
      },
    ],
  },
};

const aboutMenu = [
  {
    labelKey: 'navigation.about.us',
    href: '/about-us',
    defaultLabel: 'About Us',
  },
  {
    labelKey: 'navigation.about.board',
    href: '/board-of-directors',
    defaultLabel: 'Board of Directors',
  },
  {
    labelKey: 'navigation.about.reports',
    href: '/annual-reports',
    defaultLabel: 'Annual Reports',
  },
  {
    labelKey: 'navigation.about.careers',
    href: '/careers',
    defaultLabel: 'Careers',
  },
];

const complianceMenu = [
  {
    labelKey: 'navigation.compliance.grievance',
    href: '/grievance-redressal',
    defaultLabel: 'Grievance Redressal',
  },
  {
    labelKey: 'navigation.compliance.policy',
    href: '/policy-centre',
    defaultLabel: 'Policy Centre',
  },
  {
    labelKey: 'navigation.compliance.kyc',
    href: '/kyc-ckyc',
    defaultLabel: 'KYC / CKYC',
  },
  {
    labelKey: 'navigation.compliance.privacy',
    href: '/privacy-policy',
    defaultLabel: 'Privacy Policy',
  },
];

// ─── Dropdown Component ─────────────────────────────────────────────────────────

function TopNavDropdown({
  label,
  items,
  tNav,
}: {
  label: string;
  items: { labelKey: string; href: string; defaultLabel: string }[];
  tNav: (key: string, defaultValue?: string) => string | React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(p => !p)}
        className="flex items-center gap-1 text-sm text-text-primary hover:text-brand-accent transition-colors py-2 font-medium"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={cn('w-4 h-4 transition-transform', open && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-52 bg-background border border-border rounded-card shadow-lg py-2">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-text-secondary hover:text-brand-accent hover:bg-surface transition-colors"
            >
              {tNav(item.labelKey, item.defaultLabel)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Mega Menu Panel ────────────────────────────────────────────────────────────

function MegaMenuPanel({
  tab,
  open,
  onClose,
  tNav,
}: {
  tab: 'personal' | 'business';
  open: boolean;
  onClose: () => void;
  tNav: (key: string, defaultValue?: string) => string | React.ReactNode;
}) {
  const data = megaMenuData[tab];

  if (!open) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full z-50 bg-background border-t border-b border-border shadow-xl"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-5 gap-6">
          {Object.entries(data).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-primary mb-3 pb-1 border-b border-border">
                {tNav(
                  category.replace('navigation.categories.', 'categories.')
                )}
              </h3>
              <ul className="space-y-1.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-sm text-text-secondary hover:text-brand-accent transition-colors leading-snug block"
                    >
                      {tNav(link.labelKey, link.defaultLabel)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Header ────────────────────────────────────────────────────────────────

export function Header({ className }: HeaderProps) {
  const { t: tCommon } = useTranslation('common');
  const { t: tNav } = useTranslation('navigation');
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>(
    'personal'
  );
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <Image
                  src="/assets/logo.png"
                  alt="MNS Bank"
                  width={150}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden lg:block">
                <SiteSearch
                  placeholder={
                    tCommon('search.placeholder', 'Search...') as string
                  }
                  className="w-64"
                />
              </div>

              {/* Language Toggle */}
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-text-secondary">
                  {tCommon('navigation.language')}:
                </span>
                <div className="flex rounded-input border border-border overflow-hidden">
                  {languages.map(lang => (
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
                  {tNav('netBanking', 'Net Banking')}
                </Button>
              </Link>

              {/* Placeholder to preserve layout space where the floating button sits */}
              <div className="md:hidden w-[44px] h-[44px]" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block relative" ref={megaRef}>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-1">
                {(['personal', 'business'] as const).map(tab => (
                  <button
                    key={tab}
                    onMouseEnter={() => {
                      setActiveTab(tab);
                      setMegaOpen(true);
                    }}
                    onClick={() => {
                      setActiveTab(tab);
                      setMegaOpen(p => !p);
                    }}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-input transition-colors',
                      activeTab === tab && megaOpen
                        ? 'bg-brand-primary text-white'
                        : 'text-text-primary hover:bg-surface'
                    )}
                  >
                    {tab === 'personal'
                      ? tNav('personalBanking', 'Personal Banking')
                      : tNav('businessBanking', 'Business Banking')}
                    <svg
                      className={cn(
                        'inline w-3 h-3 ml-1 transition-transform',
                        activeTab === tab && megaOpen && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ))}

                <div className="h-5 w-px bg-border mx-2" />

                <TopNavDropdown
                  label={tCommon('navigation.aboutUs', 'About Us') as string}
                  items={aboutMenu}
                  tNav={tNav}
                />

                <div className="h-5 w-px bg-border mx-2" />

                <TopNavDropdown
                  label={
                    tCommon(
                      'navigation.complianceLegal',
                      'Compliance & Legal'
                    ) as string
                  }
                  items={complianceMenu}
                  tNav={tNav}
                />
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <Link
                  href="/interest-rates"
                  className="text-text-secondary hover:text-brand-accent transition-colors"
                >
                  {tNav('deposits.rates', 'Interest Rates')}
                </Link>
                <Link
                  href="/branch-locator"
                  className="text-text-secondary hover:text-brand-accent transition-colors"
                >
                  {tNav('stayConnected.branches', 'Branch Locator')}
                </Link>
                <Link
                  href="/emi-calculator"
                  className="text-text-secondary hover:text-brand-accent transition-colors"
                >
                  {tNav('stayConnected.calculator', 'EMI Calculator')}
                </Link>
              </div>
            </div>

            <MegaMenuPanel
              tab={activeTab}
              open={megaOpen}
              onClose={() => setMegaOpen(false)}
              tNav={tNav}
            />
          </nav>
        </div>
      </header>

      {/*
        ─── Floating hamburger / close button ──────────────────────────────────
        Rendered OUTSIDE the header so it is never clipped or covered by the
        mobile overlay (z-50). Fixed position mirrors where it sits in the
        header row. z-[9999] guarantees it is always on top of everything.
      */}
      <button
        onClick={() => setMobileOpen(p => !p)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        className={cn(
          'fixed top-3 right-4 z-[9999] md:hidden',
          'flex items-center justify-center w-[44px] h-[44px] rounded-lg transition-colors',
          mobileOpen
            ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
            : 'bg-background text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 border border-border'
        )}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden overflow-y-auto">
          <div className="container mx-auto px-4 pb-8">
            {/* Spacer so content clears the header + floating button */}
            <div className="h-[72px]" />

            {/* Personal / Business tab switcher */}
            <div className="flex rounded-input border border-border overflow-hidden mb-4">
              {(['personal', 'business'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'flex-1 py-2 text-sm font-medium transition-colors',
                    activeTab === tab
                      ? 'bg-brand-primary text-white'
                      : 'bg-surface text-text-primary'
                  )}
                >
                  {tab === 'personal'
                    ? tNav('personal', 'Personal')
                    : tNav('business', 'Business')}
                </button>
              ))}
            </div>

            {/* Categories */}
            {Object.entries(megaMenuData[activeTab]).map(
              ([category, links]) => (
                <div key={category} className="border-b border-border">
                  <button
                    onClick={() =>
                      setMobileCategory(
                        mobileCategory === category ? null : category
                      )
                    }
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold text-text-primary"
                  >
                    {tNav(
                      category.replace('navigation.categories.', 'categories.'),
                      category
                        .split('.')
                        .pop()
                        ?.replace(/([A-Z])/g, ' $1')
                        .replace(/^./, s => s.toUpperCase())
                    )}
                    <svg
                      className={cn(
                        'w-4 h-4 transition-transform',
                        mobileCategory === category && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileCategory === category && (
                    <ul className="pb-3 pl-4 space-y-2">
                      {links.map(link => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm text-text-secondary hover:text-brand-accent transition-colors py-1"
                          >
                            {tNav(link.labelKey, link.defaultLabel)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}

            {/* About Us */}
            <div className="border-b border-border">
              <button
                onClick={() =>
                  setMobileCategory(mobileCategory === 'about' ? null : 'about')
                }
                className="w-full flex items-center justify-between py-3 text-sm font-semibold text-text-primary"
              >
                {tNav('aboutUs', 'About Us')}
                <svg
                  className={cn(
                    'w-4 h-4 transition-transform',
                    mobileCategory === 'about' && 'rotate-180'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileCategory === 'about' && (
                <ul className="pb-3 pl-4 space-y-2">
                  {aboutMenu.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-text-secondary hover:text-brand-accent transition-colors py-1"
                      >
                        {tNav(link.labelKey, link.defaultLabel)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Language + Net Banking */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">
                  {tCommon('navigation.language')}:
                </span>
                <div className="flex rounded-input border border-border overflow-hidden">
                  {languages.map(lang => (
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
              <Link
                href="/net-banking"
                target="_blank"
                onClick={() => setMobileOpen(false)}
              >
                <Button variant="primary" size="sm" className="w-full">
                  {tNav('netBanking', 'Net Banking')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <AccessibilityToolbar />
    </>
  );
}
