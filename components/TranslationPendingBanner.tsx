'use client';

import { useI18n } from '@/lib/i18n-context';

export function TranslationPendingBanner() {
  const { locale, t } = useI18n();
  if (locale !== 'en') return null;
  return (
    <div
      className="not-prose mb-6 rounded-md px-4 py-3 text-[13px]"
      style={{
        background: 'var(--bg-subtle)',
        border: '1px solid var(--border)',
        color: 'var(--fg-muted)',
      }}
    >
      <strong style={{ color: 'var(--fg)' }}>{t.translationPending.title}.</strong>{' '}
      {t.translationPending.message}
    </div>
  );
}
