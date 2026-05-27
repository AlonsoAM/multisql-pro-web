import type { Metadata } from 'next';
import Link from 'next/link';
import { DocsLayout } from '@/components/DocsLayout';
import { getDocsNav } from '@/lib/docs-nav';
import { ArrowRightIcon } from '@/components/Icons';
import { translations, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = translations[locale as Locale] ?? translations.es;
  return {
    title: t.docs.title,
    description: t.docs.description,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function DocsHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (locales as readonly string[]).includes(rawLocale)
    ? (rawLocale as Locale)
    : 'es';
  const t = translations[locale];
  const docsNav = getDocsNav(locale);
  const docsHref = `/${locale}/docs`;

  return (
    <DocsLayout
      href={docsHref}
      meta={{
        title: t.docs.title,
        description: t.docs.homeDescription,
      }}
    >
      <div className="not-prose grid sm:grid-cols-2 gap-4 mt-2">
        {docsNav
          .flatMap((s) => s.items.map((i) => ({ ...i, section: s.title })))
          .filter((i) => i.href !== docsHref)
          .slice(0, 8)
          .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-5 rounded-lg transition-colors"
              style={{
                background: 'var(--bg-panel)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="mono text-[10px] uppercase tracking-[0.1em]"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {item.section}
                </span>
                <ArrowRightIcon size={12} />
              </div>
              <h3 className="text-[15px] font-semibold tracking-[-0.01em]">{item.title}</h3>
              {item.description && (
                <p className="text-[13px] mt-1.5" style={{ color: 'var(--fg-muted)' }}>
                  {item.description}
                </p>
              )}
            </Link>
          ))}
      </div>

      <h2>{t.docs.whereToStart}</h2>
      <p>
        {t.docs.newToMultisqlBefore}{' '}
        <Link href={`/${locale}/docs/getting-started`}>{t.docs.newToMultisqlLink}</Link>{' '}
        {t.docs.newToMultisqlAfter}
      </p>
      <p>
        {t.docs.comfortableBefore}{' '}
        <Link href={`/${locale}/docs/configuration`}>{t.docs.comfortableLink1}</Link>{' '}
        {t.docs.comfortableMiddle}{' '}
        <Link href={`/${locale}/docs/integrations/claude-code`}>{t.docs.comfortableLink2}</Link>
        {t.docs.comfortableAfter}
      </p>

      <h2>{t.docs.whatIsMcp}</h2>
      <p>{t.docs.whatIsMcpText}</p>
    </DocsLayout>
  );
}
