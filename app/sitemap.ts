import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { getFlatDocsNav } from '@/lib/docs-nav';
import { locales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseUrl = site.url;

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: locale === 'es' ? 1 : 0.9,
    });
    for (const item of getFlatDocsNav(locale)) {
      entries.push({
        url: `${baseUrl}${item.href}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
