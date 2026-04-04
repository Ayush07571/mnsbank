'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Users,
  Building,
  Briefcase,
  CreditCard,
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: 'Personal Banking',
      links: [
        { label: 'Accounts', href: '/savings-account' },
        { label: 'Deposits', href: '/time-deposit' },
        { label: 'Loans', href: '/personal-loan' },
        { label: 'Services', href: '/upi-qr' },
      ],
    },
    {
      title: 'Business Banking',
      links: [
        { label: 'Accounts', href: '/current-account' },
        { label: 'Deposits', href: '/biz-time-deposit' },
        { label: 'Loans', href: '/working-capital-loan' },
        { label: 'Services', href: '/bbps' },
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
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Policy Centre', href: '/policy-centre' },
        { label: 'Grievance Redressal', href: '/grievance-redressal' },
        { label: 'Careers', href: '/careers' },
        { label: 'Admin Portal', href: '/admin' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/mnsbankbhopal',
      icon: MessageCircle,
    },
    { name: 'Twitter', href: 'https://twitter.com/mnsbankbhopal', icon: Users },
    {
      name: 'Instagram',
      href: 'https://instagram.com/mnsbankbhopal',
      icon: Building,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/mnsbankbhopal',
      icon: Briefcase,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/mnsbankbhopal',
      icon: CreditCard,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-32 pb-12 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="group">
            <Link href="/" className="flex items-center mb-8 group/logo w-fit">
              <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm border border-black/5 group-hover/logo:shadow-md transition-all duration-300">
                <Image
                  src="/assets/favicon.png"
                  alt="MNS Bank"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-bold tracking-tight bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent group-hover/logo:from-brand-primary group-hover/logo:to-brand-accent transition-all duration-300">
                MNS Bank
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-8">
              Your trusted banking partner providing comprehensive financial
              solutions for individuals and businesses with cutting-edge
              technology.
            </p>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-600 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                Bhopal, Madhya Pradesh
              </li>
              <li>
                <a
                  href="mailto:info@mnsbankbhopal.com"
                  className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group"
                >
                  <Mail className="w-5 h-5 mr-2 text-gray-400" />
                  info@mnsbankbhopal.com
                </a>
              </li>
              <li>
                <a
                  href="tel:18001234567"
                  className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group"
                >
                  <Phone className="w-5 h-5 mr-2 text-gray-400" />
                  1800-123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-8 border-t border-black/10 relative z-10">
          {/* Watermark */}
          <div className="absolute -bottom-4 right-0 pointer-events-none select-none overflow-hidden opacity-[0.03] dark:opacity-[0.05] hidden lg:block">
            <h2 className="text-[12rem] font-black tracking-tighter leading-none translate-y-8 uppercase">
              MNS BANK
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 relative z-10">
            <div className="flex items-center space-x-8">
              {/* DICGC Badge */}
              <div className="flex items-center space-x-3 group/badge">
                <div className="p-2 rounded-xl bg-white shadow-sm border border-black/5 group-hover/badge:shadow-md transition-all">
                  <Image
                    src="/images/dicgc-insured.png"
                    alt="DICGC Insured"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-primary">
                    Deposits Insured
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium">
                    DICGC Protected
                  </p>
                </div>
              </div>

              {/* RBI Badge */}
              <div className="flex items-center space-x-3 group/badge">
                <div className="p-2 rounded-xl bg-white shadow-sm border border-black/5 group-hover/badge:shadow-md transition-all">
                  <Image
                    src="/images/rbi-regulated.png"
                    alt="RBI Regulated"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-primary">
                    Regulated Bank
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium">
                    RBI Authorized
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                CONNECT WITH US
              </span>
              <div className="flex items-center space-x-3">
                {socialLinks.map(social => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg translate-y-0 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-black/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} MNS Bank Bhopal. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Link
                href="/sitemap"
                className="text-gray-500 hover:text-brand-accent transition-colors"
              >
                Sitemap
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-brand-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href="/disclaimer"
                className="text-gray-500 hover:text-brand-accent transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
