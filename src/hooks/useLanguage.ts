'use client';

import { useLanguageContext } from '@/context/LanguageContext';

export const useLanguage = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguageContext();

  return {
    currentLanguage,
    languages,
    changeLanguage,
  };
};
