export interface BreadcrumbListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function generateBreadcrumbJsonLd(breadcrumbs: BreadcrumbItem[]): string {
  const breadcrumbList: {
    "@context": string;
    "@type": string;
    itemListElement: BreadcrumbListItem[];
  } = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.href,
    })),
  };

  return JSON.stringify(breadcrumbList);
}

export function updateBreadcrumbStructuredData(breadcrumbs: BreadcrumbItem[]) {
  if (typeof window === "undefined") return;

  const structuredDataElement = document.getElementById("breadcrumb-structured-data");
  if (structuredDataElement) {
    structuredDataElement.textContent = generateBreadcrumbJsonLd(breadcrumbs);
  }
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
  };
  alternates: {
    canonical: string;
    languages: {
      "en-US": string;
      "hi-IN": string;
    };
  };
} {
  const baseUrl = "https://mnsbankbhopal.com";
  const fullUrl = `${baseUrl}${path}`;
  
  return {
    title,
    description,
    keywords: keywords || [
      "MNS Bank",
      "Bhopal",
      "cooperative bank",
      "banking services",
      title.toLowerCase().replace(/\s+/g, " "),
    ],
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: "website",
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        "en-US": fullUrl,
        "hi-IN": `${baseUrl}/hi${path}`,
      },
    },
  };
}

export function generateBranchJsonLd(branchName: string, address: {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  telephone?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}): string {
  const branchData = {
    "@context": "https://schema.org",
    "@type": "BankOrCreditUnion",
    name: `MNS Bank - ${branchName}`,
    description: `MNS Bank ${branchName} branch - Complete banking services in ${address.addressLocality}`,
    url: `https://mnsbankbhopal.com`,
    logo: "https://mnsbankbhopal.com/logo.png",
    image: "https://mnsbankbhopal.com/og-image.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: address.telephone || "+91-755-2545161",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: "IN",
    },
    ...(address.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: address.coordinates.latitude,
        longitude: address.coordinates.longitude,
      },
    }),
    openingHours: "Mo-Fr 10:00-17:00",
    sameAs: [
      "https://www.facebook.com/mnsbankbhopal",
      "https://www.twitter.com/mnsbankbhopal",
      "https://www.linkedin.com/company/mnsbankbhopal",
    ],
  };

  return JSON.stringify(branchData);
}
