import { defaultLocale, translations } from '@/lib/i18n';

const t = translations[defaultLocale];

export const site = {
  name: 'MultiSQL Pro',
  tagline: t.site.tagline,
  description: t.site.description,
  url: 'https://multisql-pro.vercel.app',
  ogImage: '/og-image.png',
  author: {
    name: 'Alonso Anchante',
    title: 'Full Stack Engineer',
    location: 'Ica, Peru',
    email: 'alonso.amoreno@live.com',
  },
  github: {
    repo: 'AlonsoAM/multisql-pro',
    url: 'https://github.com/AlonsoAM/multisql-pro',
    apiUrl: 'https://api.github.com/repos/AlonsoAM/multisql-pro',
  },
  mcp: {
    docsUrl: 'https://modelcontextprotocol.io/',
  },
  license: 'MIT',
  year: 2026,
} as const;

export type SiteConfig = typeof site;
