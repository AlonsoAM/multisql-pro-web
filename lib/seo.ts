import type { Metadata } from 'next';
import { site } from './site';
import type { Locale } from './i18n';
import { locales, translations } from './i18n';

/**
 * Genera el objeto `alternates` con canonical + hreflang para cada locale.
 * Path debe ser SIN prefijo de locale (ej. "/docs/permissions").
 */
export function buildAlternates(locale: Locale, pathWithoutLocale: string) {
  const cleanPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l === 'es' ? 'es-ES' : 'en-US'] = `${site.url}/${l}${cleanPath}`;
  }
  languages['x-default'] = `${site.url}/${'es'}${cleanPath}`;
  return {
    canonical: `${site.url}/${locale}${cleanPath}`,
    languages,
  };
}

export function buildOpenGraph(locale: Locale, opts: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
}): NonNullable<Metadata['openGraph']> {
  const cleanPath = opts.path === '/' ? '' : opts.path;
  return {
    type: opts.type ?? 'website',
    locale: locale === 'es' ? 'es_ES' : 'en_US',
    alternateLocale: locales
      .filter((l) => l !== locale)
      .map((l) => (l === 'es' ? 'es_ES' : 'en_US')),
    url: `${site.url}/${locale}${cleanPath}`,
    siteName: site.name,
    title: opts.title,
    description: opts.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.name }],
  };
}

export function buildTwitter(opts: {
  title: string;
  description: string;
}): NonNullable<Metadata['twitter']> {
  return {
    card: 'summary_large_image',
    title: opts.title,
    description: opts.description,
    images: ['/opengraph-image'],
  };
}

/**
 * Genera Metadata completo para una página, con i18n SEO bien hecho.
 */
export function buildPageMetadata(args: {
  locale: Locale;
  pathWithoutLocale: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
}): Metadata {
  return {
    title: args.title,
    description: args.description,
    alternates: buildAlternates(args.locale, args.pathWithoutLocale),
    openGraph: buildOpenGraph(args.locale, {
      title: args.title,
      description: args.description,
      path: args.pathWithoutLocale,
      type: args.type,
    }),
    twitter: buildTwitter({ title: args.title, description: args.description }),
  };
}

/**
 * JSON-LD: WebSite + Organization (root del sitio).
 */
export function websiteJsonLd(locale: Locale) {
  const t = translations[locale];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: t.site.description,
        inLanguage: locale === 'es' ? 'es-ES' : 'en-US',
        publisher: { '@id': `${site.url}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${site.url}/${locale}/docs?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: {
          '@type': 'ImageObject',
          url: `${site.url}/icon.svg`,
        },
        founder: {
          '@type': 'Person',
          name: site.author.name,
          jobTitle: site.author.title,
          url: site.github.url,
        },
        sameAs: [site.github.url, 'https://modelcontextprotocol.io'],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${site.url}/#software`,
        name: site.name,
        operatingSystem: 'Windows, macOS, Linux',
        applicationCategory: 'DeveloperApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        aggregateRating: undefined,
        url: site.github.url,
        author: { '@id': `${site.url}/#organization` },
        softwareVersion: '2.0',
        license: 'https://opensource.org/licenses/MIT',
      },
    ],
  };
}

export function articleJsonLd(args: {
  locale: Locale;
  pathWithoutLocale: string;
  title: string;
  description: string;
  breadcrumbs: { name: string; href: string }[];
}) {
  const url = `${site.url}/${args.locale}${args.pathWithoutLocale === '/' ? '' : args.pathWithoutLocale}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: args.title,
        description: args.description,
        url,
        inLanguage: args.locale === 'es' ? 'es-ES' : 'en-US',
        isPartOf: { '@id': `${site.url}/#website` },
        author: {
          '@type': 'Person',
          name: site.author.name,
          url: site.github.url,
        },
        publisher: { '@id': `${site.url}/#organization` },
        image: `${site.url}/opengraph-image`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: args.breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${site.url}${b.href}`,
        })),
      },
    ],
  };
}
