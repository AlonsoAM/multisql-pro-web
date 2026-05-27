'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18n-context';
import type { Locale } from '@/lib/i18n';
import { locales, localeNames } from '@/lib/i18n';
import clsx from 'clsx';

export function LanguageSelector() {
  const { locale } = useI18n();
  const router = useRouter();
  const pathname = usePathname();

  function changeLocale(next: Locale) {
    if (next === locale) return;
    const segments = pathname.split('/');
    if (segments[1] && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    const target = segments.join('/') || `/${next}`;
    try {
      document.cookie = `multisql.locale=${next}; path=/; max-age=31536000; samesite=lax`;
    } catch {}
    router.push(target);
  }

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={(e) => changeLocale(e.target.value as Locale)}
        className={clsx(
          'appearance-none cursor-pointer text-[12px] mono rounded px-2 py-1.5 pr-6 transition-colors',
        )}
        style={{
          color: 'var(--fg-muted)',
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border)',
        }}
        aria-label="Select language"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeNames[l]}
          </option>
        ))}
      </select>
      <div
        className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2"
        style={{ color: 'var(--fg-subtle)' }}
      >
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
