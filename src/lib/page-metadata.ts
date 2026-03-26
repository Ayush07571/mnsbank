import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

interface PageSEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function createPageMetadata(config: PageSEOConfig): Metadata {
  const baseMetadata = generatePageMetadata(
    config.title,
    config.description,
    config.path,
    config.keywords
  );

  return {
    ...baseMetadata,
    ...(config.noIndex && {
      robots: {
        index: false,
        follow: true,
        googleBot: {
          index: false,
          follow: true,
        },
      },
    }),
  };
}

// Predefined SEO configs for common pages
export const SEO_CONFIGS = {
  HOME: {
    title: "MNS Bank Bhopal - Cooperative Banking Services",
    description: "MNS Bank is a leading cooperative bank in Bhopal offering personal and business banking services, loans, deposits, and digital banking solutions.",
    path: "/",
    keywords: ["MNS Bank", "Bhopal", "cooperative bank", "banking services", "personal loans", "business loans"] as string[],
  },
  ABOUT_US: {
    title: "About MNS Bank Bhopal - Our History & Mission",
    description: "Learn about MNS Bank Bhopal's history, mission, and commitment to serving the community with trusted banking services.",
    path: "/about-us",
    keywords: ["MNS Bank history", "MNS Bank mission", "cooperative bank Bhopal", "bank leadership"] as string[],
  },
  CONTACT_US: {
    title: "Contact MNS Bank Bhopal - Branch Locations & Support",
    description: "Get in touch with MNS Bank Bhopal. Find branch locations, contact numbers, and customer support information.",
    path: "/contact-us",
    keywords: ["MNS Bank contact", "bank branches Bhopal", "customer support", "bank helpline"] as string[],
  },
  PERSONAL_LOAN: {
    title: "Personal Loans in Bhopal - MNS Bank",
    description: "Apply for personal loans at MNS Bank Bhopal with competitive interest rates, quick processing, and flexible repayment options.",
    path: "/personal-loan",
    keywords: ["personal loan Bhopal", "MNS Bank personal loan", "quick loan", "low interest loan"] as string[],
  },
  HOME_LOAN: {
    title: "Home Loans in Bhopal - MNS Bank Housing Finance",
    description: "Get home loans from MNS Bank Bhopal with attractive interest rates, long tenure, and easy EMI options for your dream home.",
    path: "/home-loan",
    keywords: ["home loan Bhopal", "housing finance", "MNS Bank home loan", "home loan interest rates"] as string[],
  },
  SAVINGS_ACCOUNT: {
    title: "Savings Account - MNS Bank Bhopal",
    description: "Open a savings account with MNS Bank Bhopal. Enjoy competitive interest rates, online banking, and secure banking services.",
    path: "/savings-account",
    keywords: ["savings account Bhopal", "MNS Bank savings", "bank account opening", "interest rates"] as string[],
  },
  NET_BANKING: {
    title: "Net Banking Services - MNS Bank Online Banking",
    description: "Access MNS Bank net banking services for secure online transactions, fund transfers, bill payments, and account management.",
    path: "/net-banking",
    keywords: ["net banking", "online banking", "MNS Bank digital", "secure transactions"] as string[],
  },
  INTEREST_RATES: {
    title: "Interest Rates - MNS Bank Bhopal",
    description: "Check current interest rates for loans, deposits, and savings accounts at MNS Bank Bhopal. Competitive rates for all banking products.",
    path: "/interest-rates",
    keywords: ["interest rates", "loan rates", "deposit rates", "MNS Bank rates"] as string[],
  },
  CAREERS: {
    title: "Careers at MNS Bank Bhopal - Job Opportunities",
    description: "Explore career opportunities at MNS Bank Bhopal. Join our team and contribute to community banking excellence.",
    path: "/careers",
    keywords: ["MNS Bank careers", "banking jobs Bhopal", "employment opportunities", "bank recruitment"] as string[],
  },
  DEAF_UNCLAIMED_DEPOSITS: {
    title: "DEAF Unclaimed Deposits - MNS Bank RBI Compliance",
    description: "Search for unclaimed deposits as per RBI DEAF guidelines. MNS Bank maintains updated records of unclaimed accounts.",
    path: "/deaf-unclaimed-deposits",
    keywords: ["DEAF", "unclaimed deposits", "RBI compliance", "MNS Bank deposits"] as string[],
  },
  GRIEVANCE_REDPRESSAL: {
    title: "Grievance Redressal - MNS Bank Customer Support",
    description: "File grievances and access MNS Bank's grievance redressal mechanism. RBI compliant customer complaint resolution.",
    path: "/grievance-redressal",
    keywords: ["grievance redressal", "customer complaints", "bank ombudsman", "RBI grievance"] as string[],
  },
} as const;

export type SEOConfigKey = keyof typeof SEO_CONFIGS;
