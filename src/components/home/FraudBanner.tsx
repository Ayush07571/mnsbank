'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export function FraudBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('fraud-banner-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('fraud-banner-dismissed', 'true');
  };

  const handleLearnMore = () => {
    window.open('/fraud-awareness', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[100] p-4 pointer-events-none"
        >
          <div className="container mx-auto max-w-6xl pointer-events-auto">
            <div className="relative group overflow-hidden glass border-red-500/30 bg-red-600/90 backdrop-blur-xl text-white rounded-[2rem] shadow-[0_20px_50px_-20px_rgba(220,38,38,0.5)] border">
              {/* Animated background pulse */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/20 to-red-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-6 relative z-10">
                <div className="flex items-center gap-6">
                  {/* Alert Icon with Ring */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse" />
                    <div className="relative w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/10">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Alert Message */}
                  <div className="text-center md:text-left">
                    <h3 className="font-heading text-lg font-black uppercase tracking-[0.15em] mb-1 text-white">
                      Critical Security Alert
                    </h3>
                    <p className="text-sm font-medium text-white/90 leading-relaxed max-w-xl">
                      MNS Bank{' '}
                      <span className="underline decoration-white/30 underline-offset-4">
                        never
                      </span>{' '}
                      requests your PIN, OTP, or Password. Stay vigilant against
                      phishing.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 font-black uppercase tracking-widest text-[10px] bg-white text-red-600 border-0 hover:bg-red-50 hover:scale-105 transition-all shadow-lg shadow-black/10"
                    onClick={handleLearnMore}
                  >
                    Get Protected
                  </Button>

                  <button
                    onClick={handleDismiss}
                    className="p-3 bg-black/10 hover:bg-black/20 text-white rounded-2xl transition-all hover:scale-110 active:scale-95"
                    aria-label="Dismiss alert"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Progress Bar (Timer indicator) */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 10, ease: 'linear' }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 origin-left"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
