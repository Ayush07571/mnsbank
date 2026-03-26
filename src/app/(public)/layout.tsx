import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import { AccessibilityToolbar } from "@/components/ui/AccessibilityToolbar";
import { Suspense } from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <AccessibilityToolbar />
      <Header />
      <Breadcrumb />
      <main className="flex-1">
        {children}
      </main>
      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
