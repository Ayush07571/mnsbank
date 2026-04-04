'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { BreadcrumbItem, updateBreadcrumbStructuredData } from '@/lib/seo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const pathname = usePathname();
  const { t } = useTranslation('common');

  const segmentToName = useCallback(
    (segment: string): string => {
      // Try to get translation from breadcrumb namespace
      const translatedName = t(`breadcrumb.${segment}`) as string;

      // If translation exists and is not just the key, return it
      if (translatedName && translatedName !== `breadcrumb.${segment}`) {
        return translatedName;
      }

      return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    },
    [t]
  );

  const breadcrumbs = useMemo(() => {
    if (items) return items;

    const pathSegments = pathname.split('/').filter(segment => segment);
    const crumbs: BreadcrumbItem[] = [
      { name: t('breadcrumb.home') as string, href: '/' },
    ];

    let currentPath = '';

    // Skip locale segments (en, hi)
    const filteredSegments = pathSegments.filter(
      segment => !['en', 'hi'].includes(segment)
    );

    filteredSegments.forEach(segment => {
      currentPath += `/${segment}`;

      // Convert URL segment to readable name
      const name = segmentToName(segment);

      crumbs.push({
        name,
        href: currentPath,
      });
    });

    return crumbs;
  }, [pathname, items, t, segmentToName]);

  useEffect(() => {
    updateBreadcrumbStructuredData(breadcrumbs);
  }, [breadcrumbs]);

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs for just the home page
  }

  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={`py-6 px-4 bg-white/50 backdrop-blur-md border-b border-black/5 sticky top-20 z-20 ${className}`}
    >
      <ol className="flex items-center space-x-2 text-xs max-w-6xl mx-auto">
        {breadcrumbs.map((breadcrumb: BreadcrumbItem, index: number) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <span
                  className="mx-3 text-text-secondary opacity-30 font-light"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
              {isLast ? (
                <span
                  className="text-text-primary font-black uppercase tracking-widest opacity-90"
                  aria-current="page"
                >
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-text-secondary font-bold uppercase tracking-widest hover:text-brand-primary transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
