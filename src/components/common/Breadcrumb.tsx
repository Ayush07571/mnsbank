"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { BreadcrumbItem, updateBreadcrumbStructuredData } from "@/lib/seo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const pathname = usePathname();
  const { t } = useTranslation('common');

  const segmentToName = useCallback((segment: string): string => {
    // Try to get translation from breadcrumb namespace
    const translatedName = t(`breadcrumb.${segment}`) as string;
    
    // If translation exists and is not just the key, return it
    if (translatedName && translatedName !== `breadcrumb.${segment}`) {
      return translatedName;
    }

    return segment.split("-").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  }, [t]);

  const breadcrumbs = useMemo(() => {
    if (items) return items;

    const pathSegments = pathname.split("/").filter(segment => segment);
    const crumbs: BreadcrumbItem[] = [
      { name: t('breadcrumb.home') as string, href: "/" }
    ];

    let currentPath = "";
    
    // Skip locale segments (en, hi)
    const filteredSegments = pathSegments.filter(segment => !["en", "hi"].includes(segment));
    
    filteredSegments.forEach((segment) => {
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
      className={`py-3 px-4 bg-gray-50 border-b border-gray-200 ${className}`}
    >
      <ol className="flex items-center space-x-2 text-sm max-w-7xl mx-auto">
        {breadcrumbs.map((breadcrumb: BreadcrumbItem, index: number) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400" aria-hidden="true">
                /
              </span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {breadcrumb.name}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
