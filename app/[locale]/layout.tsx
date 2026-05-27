import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locales, translations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { I18nProvider } from '@/lib/i18n-context';
import { NavProgress } from '@/components/NavProgress';
import { JsonLd } from '@/components/JsonLd';
import { websiteJsonLd, buildAlternates } from '@/lib/seo';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!(locales as readonly string[]).includes(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const t = translations[locale];
  return {
    title: { default: `${site.name} · ${t.site.tagline}`, template: `%s · ${site.name}` },
    description: t.site.description,
    alternates: buildAlternates(locale, '/'),
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => (l === 'es' ? 'es_ES' : 'en_US')),
      url: `${site.url}/${locale}`,
      siteName: site.name,
      title: `${site.name} · ${t.site.tagline}`,
      description: t.site.description,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${site.name} · ${t.site.tagline}`,
      description: t.site.description,
      images: ['/opengraph-image'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) {
    notFound();
  }
  const typed = locale as Locale;
  return (
    <I18nProvider locale={typed}>
      <NavProgress />
      <JsonLd data={websiteJsonLd(typed)} />
      {children}
    </I18nProvider>
  );
}
