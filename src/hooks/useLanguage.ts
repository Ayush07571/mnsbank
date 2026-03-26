'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Language } from '@/types/header';

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
];

export function useLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    // Extract language from pathname
    const pathSegments = pathname.split('/').filter(Boolean);
    const langCode = pathSegments[0];
    
    if (langCode && ['en', 'hi'].includes(langCode)) {
      const lang = languages.find(l => l.code === langCode) || languages[0];
      setCurrentLanguage(lang);
    }
  }, [pathname]);

  const changeLanguage = (languageCode: string) => {
    // For now, just update the state without navigation
    // since Hindi pages don't exist yet
    const lang = languages.find(l => l.code === languageCode) || languages[0];
    setCurrentLanguage(lang);
    
    // TODO: When Hindi pages are created, uncomment the navigation logic:
    // const pathSegments = pathname.split('/').filter(Boolean);
    // if (['en', 'hi'].includes(pathSegments[0])) {
    //   pathSegments.shift(); // Remove language code
    // }
    // 
    // const newPath = languageCode === 'en' 
    //   ? `/${pathSegments.join('/')}` 
    //   : `/${languageCode}/${pathSegments.join('/')}`;
    // 
    // router.push(newPath);
  };

  return {
    currentLanguage,
    languages,
    changeLanguage,
  };
}
