'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { cn } from '@/lib/utils';

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

interface FooterLink {
  label: string | ReactNode;
  href: string;
}

interface FooterColumn {
  title: string | ReactNode;
  links: FooterLink[];
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/mnsbankbhopal',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mnsbankbhopal',
    icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/mnsbankbhopal',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/mnsbankbhopal',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/mnsbankbhopal',
    icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
];

export function Footer({ className }: { className?: string }) {
  const { t } = useTranslation('common');

  const footerColumns: FooterColumn[] = [
    {
      title: t('navigation.personalBanking'),
      links: [
        { label: t('navigation.accounts'), href: '/savings-account' },
        { label: t('navigation.deposits'), href: '/time-deposit' },
        { label: t('navigation.loans'), href: '/personal-loan' },
        { label: t('navigation.services'), href: '/upi-qr' },
      ],
    },
    {
      title: t('navigation.businessBanking'),
      links: [
        { label: t('navigation.accounts'), href: '/current-account' },
        { label: t('navigation.deposits'), href: '/biz-time-deposit' },
        { label: t('navigation.loans'), href: '/working-capital-loan' },
        { label: t('navigation.services'), href: '/bbps' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Interest Rates', href: '/interest-rates' },
        { label: 'Service Charges', href: '/service-charges' },
        { label: 'Download Forms', href: '/download-forms' },
        { label: 'Branch Locator', href: '/branch-locator' },
      ],
    },
    {
      title: 'Important Links',
      links: [
        { label: t('footer.links.privacyPolicy'), href: '/privacy-policy' },
        { label: 'Policy Centre', href: '/policy-centre' },
        { label: 'Grievance Redressal', href: '/grievance-redressal' },
        { label: 'Careers', href: '/careers' },
        { label: 'Admin Portal', href: '/admin' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { label: 'Head Office', href: '/contact-us' },
        { label: 'TT Nagar Branch', href: '/contact-us' },
        { label: 'Karond Branch', href: '/contact-us' },
        { label: 'Customer Care', href: '/contact-us' },
      ],
    },
  ];

  return (
    <footer className={cn('bg-surface border-t border-border', className)}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {footerColumns.map((column, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-heading text-text-primary">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary hover:text-brand-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              {/* DICGC Badge */}
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {t('footer.trust.dicgc')}
                  </p>
                  <p className="text-xs text-text-secondary">Deposits Insured</p>
                </div>
              </div>

              {/* RBI Badge */}
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">RBI</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {t('footer.trust.rbi')}
                  </p>
                  <p className="text-xs text-text-secondary">Regulated Bank</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-text-secondary mr-2">Follow Us:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-brand-accent transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-text-secondary">
              {t('footer.copyright', '© {year} MNS Bank. All rights reserved.', { year: '2026' })}
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Link
                href="/sitemap"
                className="text-text-secondary hover:text-brand-accent transition-colors"
              >
                {t('footer.links.sitemap')}
              </Link>
              <span className="text-text-secondary">|</span>
              <Link
                href="/privacy-policy"
                className="text-text-secondary hover:text-brand-accent transition-colors"
              >
                {t('footer.links.privacyPolicy')}
              </Link>
              <span className="text-text-secondary">|</span>
              <Link
                href="/privacy-policy"
                className="text-text-secondary hover:text-brand-accent transition-colors"
              >
                {t('footer.links.disclaimer', 'Disclaimer')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
