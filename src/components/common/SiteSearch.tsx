"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useGA4 } from "@/lib/analytics";

interface SearchResult {
  title: string;
  url: string;
  category: string;
  description?: string;
}

interface SiteSearchProps {
  className?: string;
  placeholder?: string;
}

export default function SiteSearch({ className, placeholder }: SiteSearchProps) {
  const { t } = useTranslation('common');
  const { trackCTAClick, trackBranchSearch } = useGA4();
  const router = useRouter();
  const pathname = usePathname();
  
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Static search index for MNS Bank pages
  const searchIndex: SearchResult[] = [
    // Personal Banking
    { title: "Savings Account", url: "/savings-account", category: "Personal Banking", description: "Open a savings account with competitive interest rates" },
    { title: "Current Account", url: "/current-account", category: "Personal Banking", description: "Manage your daily transactions with a current account" },
    { title: "Personal Loan", url: "/personal-loan", category: "Loans", description: "Get personal loans with flexible repayment options" },
    { title: "Home Loan", url: "/home-loan", category: "Loans", description: "Finance your dream home with our home loans" },
    { title: "Car Loan", url: "/car-loan", category: "Loans", description: "Get a car loan for your dream vehicle" },
    { title: "Gold Loan", url: "/gold-loan", category: "Loans", description: "Get instant loans against your gold jewelry" },
    { title: "Education Loan", url: "/education-loan", category: "Loans", description: "Finance your education with our education loans" },
    
    // Business Banking
    { title: "Business Loans", url: "/working-capital-loan", category: "Business Banking", description: "Working capital loans for your business needs" },
    { title: "Current Account Business", url: "/current-account", category: "Business Banking", description: "Business current accounts for enterprises" },
    { title: "Trade Finance", url: "/professional-loan", category: "Business Banking", description: "Trade finance solutions for businesses" },
    
    // Digital Services
    { title: "Net Banking", url: "/net-banking", category: "Digital Services", description: "Secure online banking services" },
    { title: "Mobile Banking", url: "/mobile-banking", category: "Digital Services", description: "Bank on the go with our mobile app" },
    { title: "UPI & QR", url: "/upi-qr", category: "Digital Services", description: "Instant payments with UPI and QR codes" },
    { title: "IMPS", url: "/imps", category: "Digital Services", description: "Immediate Payment Service 24/7" },
    { title: "NEFT/RTGS", url: "/neft-rtgs", category: "Digital Services", description: "Electronic fund transfer services" },
    { title: "SMS Banking", url: "/sms-banking", category: "Digital Services", description: "Banking services via SMS" },
    
    // Tools & Calculators
    { title: "EMI Calculator", url: "/emi-calculator", category: "Tools", description: "Calculate your loan EMI instantly" },
    { title: "Interest Rates", url: "/interest-rates", category: "Information", description: "Current interest rates for all products" },
    { title: "Service Charges", url: "/service-charges", category: "Information", description: "Complete schedule of service charges" },
    
    // Customer Services
    { title: "Branch Locator", url: "/branch-locator", category: "Customer Service", description: "Find our nearest branch" },
    { title: "ATM Locator", url: "/atm-locator", category: "Customer Service", description: "Find our nearest ATM" },
    { title: "Contact Us", url: "/contact-us", category: "Customer Service", description: "Get in touch with us" },
    { title: "Feedback", url: "/feedback", category: "Customer Service", description: "Share your feedback with us" },
    
    // Compliance & Information
    { title: "DEAF Unclaimed Deposits", url: "/deaf-unclaimed-deposits", category: "Compliance", description: "Search for unclaimed deposits" },
    { title: "Grievance Redressal", url: "/grievance-redressal", category: "Compliance", description: "File and track your grievances" },
    { title: "Privacy Policy", url: "/privacy-policy", category: "Compliance", description: "Our privacy policy and data protection" },
    { title: "Policy Centre", url: "/policy-centre", category: "Compliance", description: "Important banking policies and documents" },
    
    // About & Careers
    { title: "About Us", url: "/about-us", category: "About", description: "Learn about MNS Bank's history and mission" },
    { title: "Board of Directors", url: "/board-of-directors", category: "About", description: "Meet our board of directors" },
    { title: "Careers", url: "/careers", category: "About", description: "Join our team and build your career" },
    { title: "Tenders", url: "/tenders", category: "About", description: "View current tender opportunities" },
    
    // Other Services
    { title: "Locker Facility", url: "/locker", category: "Services", description: "Secure locker facility for your valuables" },
    { title: "PAN Services", url: "/pan", category: "Services", description: "PAN card application and services" },
    { title: "Insurance", url: "/insurance", category: "Services", description: "Insurance products and services" },
    { title: "Mutual Funds", url: "/mutual-funds", category: "Services", description: "Mutual fund investment options" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay for better UX
    const timer = setTimeout(() => {
      const filteredResults = searchIndex.filter((item) => {
        const searchLower = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.description?.toLowerCase().includes(searchLower) ||
          item.category.toLowerCase().includes(searchLower)
        );
      });

      // Sort by relevance (title matches first, then description)
      filteredResults.sort((a, b) => {
        const aTitleLower = a.title.toLowerCase();
        const bTitleLower = b.title.toLowerCase();
        const searchLower = query.toLowerCase();
        
        const aTitleStartsWith = aTitleLower.startsWith(searchLower);
        const bTitleStartsWith = bTitleLower.startsWith(searchLower);
        
        if (aTitleStartsWith && !bTitleStartsWith) return -1;
        if (!aTitleStartsWith && bTitleStartsWith) return 1;
        
        return aTitleLower.localeCompare(bTitleLower);
      });

      setResults(filteredResults.slice(0, 8)); // Limit to 8 results
      setIsLoading(false);
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    trackCTAClick('search_result', result.url);
    setQuery("");
    setIsOpen(false);
    router.push(result.url);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      trackCTAClick('search_submit', 'search');
      // For now, just navigate to the first result or a search results page
      if (results.length > 0) {
        handleResultClick(results[0]);
      }
    }
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
    if (value.length >= 2) {
      trackBranchSearch(value); // Using branch search for general search tracking
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Input
            type="text"
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder || t('search.placeholder', 'Search products, services, branches...')}
            className="w-full pr-10"
            onFocus={() => query.length >= 2 && setIsOpen(true)}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="p-1 h-auto"
              disabled={!query.trim()}
            >
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </form>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-brand-primary"></div>
              <span className="ml-2">Searching...</span>
            </div>
          ) : results.length > 0 ? (
            <div>
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm text-gray-600 font-medium">
                  {results.length} results found
                </p>
              </div>
              {results.map((result, index) => (
                <button
                  key={`${result.url}-${index}`}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {result.title}
                        </p>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          {result.category}
                        </span>
                      </div>
                      {result.description && (
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                          {result.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              <svg
                className="w-8 h-8 mx-auto mb-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-sm">No results found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">
                Try searching for products, services, or branches
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
