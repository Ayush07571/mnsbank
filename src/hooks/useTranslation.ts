'use client';

import { ReactNode } from 'react';
import { useLanguage } from './useLanguage';
import { dictionaries, LanguageCode, Namespace } from '@/lib/i18n/dictionaries';

export function useTranslation(defaultNs: Namespace | string = 'common') {
  const { currentLanguage } = useLanguage();

  const t = (key: string, defaultValue?: string | ReactNode, options?: Record<string, string | number | ReactNode>): string | ReactNode => {
    // Determine language, fallback to 'en'
    const langCode = currentLanguage?.code || 'en';
    const lang: LanguageCode = (dictionaries as Record<string, unknown>)[langCode] ? langCode as LanguageCode : 'en';
    
    // Support "namespace:key.subkey" or fallback to defaultNs
    let namespace = defaultNs;
    let path = key;

    if (key.includes(':')) {
      const parts = key.split(':');
      namespace = parts[0];
      path = parts.slice(1).join(':');
    }

    // Traverse dictionary object
    const dict = (dictionaries as Record<string, Record<string, unknown>>)[lang]?.[namespace] || (dictionaries as Record<string, Record<string, unknown>>)['en']?.[namespace] || {};
    
    const keys = path.split('.');
    let result: unknown = dict;
    
    for (const k of keys) {
      if (result === undefined || result === null || typeof result !== 'object') break;
      result = (result as Record<string, unknown>)[k];
    }

    let finalResult: string | ReactNode = (typeof result === 'string' || (result && typeof result === 'object')) ? (result as string | ReactNode) : (defaultValue || path);

    // Simple interpolation for strings
    if (typeof finalResult === 'string' && options) {
      Object.keys(options).forEach(optKey => {
        const val = options[optKey];
        if (typeof val === 'string' || typeof val === 'number') {
          finalResult = (finalResult as string).replace(`{${optKey}}`, String(val));
        }
      });
    }

    return finalResult;
  };

  return { t };
}
