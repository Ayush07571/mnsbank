"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BreadcrumbItem, updateBreadcrumbStructuredData } from "@/lib/seo";

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    let finalBreadcrumbs: BreadcrumbItem[];

    if (items) {
      finalBreadcrumbs = items;
    } else {
      // Generate breadcrumbs from pathname
      finalBreadcrumbs = generateBreadcrumbsFromPath(pathname);
    }

    setBreadcrumbs(finalBreadcrumbs);
    updateBreadcrumbStructuredData(finalBreadcrumbs);
  }, [pathname, items]);

  function generateBreadcrumbsFromPath(path: string): BreadcrumbItem[] {
    const pathSegments = path.split("/").filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: "Home", href: "/" }
    ];

    let currentPath = "";
    
    // Skip locale segments (en, hi)
    const filteredSegments = pathSegments.filter(segment => !["en", "hi"].includes(segment));
    
    filteredSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert URL segment to readable name
      const name = segmentToName(segment);
      
      breadcrumbs.push({
        name,
        href: currentPath,
      });
    });

    return breadcrumbs;
  }

  function segmentToName(segment: string): string {
    // Handle special cases for banking terms
    const specialCases: Record<string, string> = {
      "about-us": "About Us",
      "board-of-directors": "Board of Directors",
      "annual-reports": "Annual Reports",
      "branch-locator": "Branch Locator",
      "atm-locator": "ATM Locator",
      "locate-us": "Locate Us",
      "contact-us": "Contact Us",
      "grievance-redressal": "Grievance Redressal",
      "deaf-unclaimed-deposits": "DEAF Unclaimed Deposits",
      "net-banking": "Net Banking",
      "mobile-banking": "Mobile Banking",
      "interest-rates": "Interest Rates",
      "service-charges": "Service Charges",
      "download-forms": "Download Forms",
      "privacy-policy": "Privacy Policy",
      "policy-centre": "Policy Centre",
      "kyc-ckyc": "KYC/CKYC",
      "cyber-awareness": "Cyber Awareness",
      "positive-pay": "Positive Pay",
      "ifsc-codes": "IFSC Codes",
      "savings-account": "Savings Account",
      "current-account": "Current Account",
      "personal-loan": "Personal Loan",
      "home-loan": "Home Loan",
      "car-loan": "Car Loan",
      "gold-loan": "Gold Loan",
      "education-loan": "Education Loan",
      "business-loan": "Business Loan",
      "emi-calculator": "EMI Calculator",
      "upi-qr": "UPI & QR",
      "bbps": "BBPS",
      "imps": "IMPS",
      "neft-rtgs": "NEFT/RTGS",
      "sms-banking": "SMS Banking",
      "debit-cards": "Debit Cards",
      "pan": "PAN Services",
      "locker": "Locker Facility",
      "pm-jeevan-yojana": "PM Jeevan Yojana",
      "pm-suraksha-yojana": "PM Suraksha Yojana",
      "mutual-funds": "Mutual Funds",
      "insurance": "Insurance",
      "demat": "Demat Services",
      "asba": "ASBA Services",
      "careers": "Careers",
      "tenders": "Tenders",
      "membership": "Membership",
      "management": "Management",
      "committees": "Committees",
      "feedback": "Feedback",
      "sitemap": "Sitemap",
    };

    return specialCases[segment] || segment.split("-").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  }

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs for just the home page
  }

  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className={`py-3 px-4 bg-gray-50 border-b border-gray-200 ${className}`}
    >
      <ol className="flex items-center space-x-2 text-sm max-w-7xl mx-auto">
        {breadcrumbs.map((breadcrumb, index) => (
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
