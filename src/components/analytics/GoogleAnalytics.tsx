"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ga4, useGA4 } from "@/lib/analytics";

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { trackPageView } = useGA4();

  useEffect(() => {
    // Initialize GA4
    if (measurementId) {
      ga4.initialize();
    }
  }, [measurementId]);

  useEffect(() => {
    // Track page views on route changes
    if (measurementId) {
      const fullUrl = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
      trackPageView(fullUrl);
    }
  }, [pathname, searchParams, measurementId, trackPageView]);

  return null; // This component doesn't render anything
}
