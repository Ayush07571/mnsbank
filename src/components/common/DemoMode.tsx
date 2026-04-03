'use client';

import { getDemoConfig, showDemoBadge } from '@/lib/demo-config';

export function DemoBadge() {
  const config = getDemoConfig();
  
  if (!config.isDemo) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium shadow-lg">
        DEMO MODE
      </div>
    </div>
  );
}

export function DemoNotice({ children }: { children: React.ReactNode }) {
  const config = getDemoConfig();
  
  if (!config.isDemo) return <>{children}</>;

  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 bg-yellow-50 bg-opacity-90 flex items-center justify-center z-40">
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-md">
          <h3 className="font-semibold text-yellow-800 mb-2">Demo Mode Active</h3>
          <p className="text-yellow-700 text-sm">
            This is a demonstration. No real transactions or data processing occurs.
          </p>
        </div>
      </div>
    </div>
  );
}
