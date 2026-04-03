import type { Metadata } from "next";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mnsbankbhopal.com"),
  title: {
    default: "MNS Bank Bhopal - Cooperative Banking Services",
    template: "%s | MNS Bank Bhopal",
  },
  description: "MNS Bank is a leading cooperative bank in Bhopal offering personal and business banking services, loans, deposits, and digital banking solutions.",
  keywords: [
    "MNS Bank",
    "Bhopal",
    "cooperative bank",
    "banking services",
    "personal loans",
    "business loans",
    "deposits",
    "digital banking",
    "net banking",
    "mobile banking",
    "UPI",
    "ATM services",
    "Bhopal bank",
  ],
  authors: [{ name: "MNS Bank Bhopal" }],
  creator: "MNS Bank Bhopal",
  publisher: "MNS Bank Bhopal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mnsbankbhopal.com",
    title: "MNS Bank Bhopal - Cooperative Banking Services",
    description: "MNS Bank is a leading cooperative bank in Bhopal offering personal and business banking services, loans, deposits, and digital banking solutions.",
    siteName: "MNS Bank Bhopal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MNS Bank Bhopal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MNS Bank Bhopal - Cooperative Banking Services",
    description: "MNS Bank is a leading cooperative bank in Bhopal offering personal and business banking services, loans, deposits, and digital banking solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://mnsbankbhopal.com",
    languages: {
      "en-US": "https://mnsbankbhopal.com",
      "hi-IN": "https://mnsbankbhopal.com/hi",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1A3A6B" />
        <meta name="msapplication-TileColor" content="#1A3A6B" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* JSON-LD Structured Data for Bank */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BankOrCreditUnion",
              name: "MNS Bank Bhopal",
              description: "MNS Bank is a leading cooperative bank in Bhopal offering personal and business banking services, loans, deposits, and digital banking solutions.",
              url: "https://mnsbankbhopal.com",
              logo: "https://mnsbankbhopal.com/logo.png",
              image: "https://mnsbankbhopal.com/og-image.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-755-2545161",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Road, Bairagarh",
                addressLocality: "Bhopal",
                addressRegion: "Madhya Pradesh",
                postalCode: "462022",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.2599,
                longitude: 77.4126,
              },
              openingHours: "Mo-Fr 10:00-17:00",
              sameAs: [
                "https://www.facebook.com/mnsbankbhopal",
                "https://www.twitter.com/mnsbankbhopal",
                "https://www.linkedin.com/company/mnsbankbhopal",
              ],
            }),
          }}
        />
        
        {/* JSON-LD BreadcrumbList Template */}
        <script
          type="application/ld+json"
          id="breadcrumb-structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://mnsbankbhopal.com",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Suspense fallback={null}>
            <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID} />
          </Suspense>
          <div id="root">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
