'use client';

import React, { createContext, useContext, useEffect } from 'react';
import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/i18n';

type I18nContextType = {
  locale: Locale;
  t: typeof translations.es | typeof translations.en;
};

const I18nContext = createContext<I18nContextType | null>(null);

const LOCALE_COOKIE = 'multisql.locale';

export function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
    } catch {}
  }, [locale]);

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}

export function localePath(locale: Locale, href: string): string {
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#')) {
    return href;
  }
  if (href === '/') return `/${locale}`;
  if (href.startsWith('/')) return `/${locale}${href}`;
  return href;
}
