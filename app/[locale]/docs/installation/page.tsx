import type { Metadata } from 'next';
import { DocsLayout } from '@/components/DocsLayout';
import { translations, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import ContentEs from './content.es.mdx';
import ContentEn from './content.en.mdx';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = translations[locale as Locale] ?? translations.es;
  return {
    title: t.docsMeta.installation.title,
    description: t.docsMeta.installation.description,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function InstallationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (locales as readonly string[]).includes(rawLocale)
    ? (rawLocale as Locale)
    : 'es';
  const t = translations[locale];
  const Content = locale === 'en' ? ContentEn : ContentEs;
  return (
    <DocsLayout
      href={`/${locale}/docs/installation`}
      meta={{
        title: t.docsMeta.installation.title,
        description: t.docsMeta.installation.description,
      }}
    >
      <Content />
    </DocsLayout>
  );
}
