'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Language } from '@/types/header';

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
];

interface LanguageContextType {
  currentLanguage: Language;
  languages: Language[];
  changeLanguage: (languageCode: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage/URL only after mounting on the client
  useEffect(() => {
    const savedLang = localStorage.getItem('mns_lang');
    const pathSegments = pathname.split('/').filter(Boolean);
    const urlLang = pathSegments[0];
    
    let initialLangCode = 'en';
    
    if (urlLang && ['en', 'hi'].includes(urlLang)) {
      initialLangCode = urlLang;
    } else if (savedLang && ['en', 'hi'].includes(savedLang)) {
      initialLangCode = savedLang;
    }

    const lang = languages.find(l => l.code === initialLangCode) || languages[0];
    // This is valid: setting state from localStorage (external system) on mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentLanguage(lang);
    document.documentElement.lang = initialLangCode;
    setMounted(true);
  }, [pathname]);

  const changeLanguage = (languageCode: string) => {
    const lang = languages.find(l => l.code === languageCode) || languages[0];
    setCurrentLanguage(lang);
    localStorage.setItem('mns_lang', languageCode);
    document.documentElement.lang = languageCode;
  };

  // We always render the provider so children (like Header) can use useLanguage hook
  // even during SSR/initial hydration, using the default language.
  return (
    <LanguageContext.Provider value={{ currentLanguage, languages, changeLanguage }}>
      <div style={!mounted ? { visibility: 'hidden' } : undefined}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
