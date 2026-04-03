// Import locale data directly
import commonEn from '@/app/locales/en/common.json';
import homeEn from '@/app/locales/en/home.json';
import productsEn from '@/app/locales/en/products.json';
import formsEn from '@/app/locales/en/forms.json';
import navigationEn from '@/app/locales/en/navigation.json';
import pagesEn from '@/app/locales/en/pages.json';

import commonHi from '@/app/locales/hi/common.json';
import homeHi from '@/app/locales/hi/home.json';
import navigationHi from '@/app/locales/hi/navigation.json';
import formsHi from '@/app/locales/hi/forms.json';
import pagesHi from '@/app/locales/hi/pages.json';
import productsHi from '@/app/locales/hi/products.json';

// Define the static dictionary structure to resolve 500 compilation errors
export const dictionaries = {
  en: {
    common: commonEn,
    home: homeEn,
    navigation: navigationEn,
    forms: formsEn,
    pages: pagesEn,
    products: productsEn,
  },
  hi: {
    common: commonHi,
    home: homeHi,
    navigation: navigationHi,
    forms: formsHi,
    pages: pagesHi,
    products: productsHi,
  }
} as const;

export type LanguageCode = keyof typeof dictionaries;
export type Namespace = keyof typeof dictionaries['en'];
