'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export function FraudBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if the banner was dismissed in this session
    const dismissed = sessionStorage.getItem('fraud-banner-dismissed');
    if (!dismissed) {
      // Show banner after a short delay to allow page to load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('fraud-banner-dismissed', 'true');
  };

  const handleLearnMore = () => {
    // Navigate to fraud awareness page or open modal
    window.open('/fraud-awareness', '_blank');
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            {/* Alert Icon */}
            <div className="flex-shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Alert Message */}
            <div className="flex-1">
              <div className="text-sm font-medium">
                ⚠️ Important: Fraud Alert
              </div>
              <div className="text-xs text-red-100 mt-1">
                MNS Bank never asks for your OTP, password, or sensitive information. Be cautious of fraudulent calls and messages.
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white hover:text-red-600"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
            
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Dismiss fraud alert"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-red-700">
        <div className="h-full bg-red-400 animate-pulse" style={{ width: '100%' }} />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
