import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { getFlatDocsNav } from '@/lib/docs-nav';
import { locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

function altLang(l: Locale): string {
  return l === 'es' ? 'es-ES' : 'en-US';
}

function buildAlternates(pathWithoutLocale: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[altLang(l)] = `${site.url}/${l}${pathWithoutLocale}`;
  }
  languages['x-default'] = `${site.url}/es${pathWithoutLocale}`;
  return languages;
}

function pathToBare(href: string): string {
  // Remove leading "/{locale}" → bare path. "/es/docs/foo" → "/docs/foo"
  for (const l of locales) {
    if (href === `/${l}`) return '';
    if (href.startsWith(`/${l}/`)) return href.slice(`/${l}`.length);
  }
  return href;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Home per locale
  for (const locale of locales) {
    entries.push({
      url: `${site.url}/${locale}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: buildAlternates('') },
    });
  }

  // Docs per locale (deduplicate bare paths since each locale has same routes)
  const seen = new Set<string>();
  for (const locale of locales) {
    for (const item of getFlatDocsNav(locale)) {
      const bare = pathToBare(item.href);
      const key = `${locale}::${bare}`;
      if (seen.has(key)) continue;
      seen.add(key);

      // Prioritize key pages
      const isHigh = bare === '/docs/getting-started' || bare === '/docs/permissions' || bare === '/docs';
      const isIntegration = bare.startsWith('/docs/integrations/');

      entries.push({
        url: `${site.url}/${locale}${bare}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: isHigh ? 0.9 : isIntegration ? 0.6 : 0.7,
        alternates: { languages: buildAlternates(bare) },
      });
    }
  }

  return entries;
}
