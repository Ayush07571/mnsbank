'use client';

import { useState, useEffect } from 'react';
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
    window.open('/cyber-awareness', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="sticky top-0 left-0 right-0 z-[101] overflow-hidden bg-red-600 shadow-2xl"
        >
          <div className="container-tight py-2.5 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
            {/* Background Pulse */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/20 to-red-600/0 animate-pulse pointer-events-none" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-red-600"
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

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  Security Alert
                </span>
                <p className="text-[11px] font-bold text-white tracking-wide">
                  MNS Bank{' '}
                  <span className="underline decoration-white/30">never</span>{' '}
                  requests your PIN, OTP, or Password.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 relative z-10">
              <button
                onClick={handleLearnMore}
                className="text-[9px] font-black uppercase tracking-widest text-white hover:text-white/80 border-b border-white/30 pb-0.5 transition-all"
              >
                Learn More
              </button>

              <button
                onClick={handleDismiss}
                className="p-1.5 bg-black/10 hover:bg-black/20 text-white rounded-lg transition-all"
                aria-label="Dismiss alert"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Timer Progress Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 10, ease: 'linear' }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
