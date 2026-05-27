import type { Metadata } from 'next';
import { DocsLayout } from '@/components/DocsLayout';
import { JsonLd } from '@/components/JsonLd';
import { translations, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { buildPageMetadata, articleJsonLd } from '@/lib/seo';
import ContentEs from './content.es.mdx';
import ContentEn from './content.en.mdx';

const PATH = '/docs/integrations/windsurf';
const META_KEY = 'windsurf' as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typed = (locales as readonly string[]).includes(locale) ? (locale as Locale) : 'es';
  const t = translations[typed];
  return buildPageMetadata({
    locale: typed,
    pathWithoutLocale: PATH,
    title: t.docsMeta[META_KEY].title,
    description: t.docsMeta[META_KEY].description,
    type: 'article',
  });
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({
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
  const meta = {
    title: t.docsMeta[META_KEY].title,
    description: t.docsMeta[META_KEY].description,
  };

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          locale,
          pathWithoutLocale: PATH,
          title: meta.title,
          description: meta.description,
          breadcrumbs: [
          { name: t.docsNav.gettingStarted, href: `/${locale}` },
          { name: t.docs.title, href: `/${locale}/docs` },
          { name: t.docsNav.integrations, href: `/${locale}/docs/integrations/claude-code` },
          { name: meta.title, href: `/${locale}${PATH}` },
        ],
        })}
      />
      <DocsLayout href={`/${locale}${PATH}`} meta={meta}>
        <Content />
      </DocsLayout>
    </>
  );
}
