import type { Locale } from './i18n';
import { translations } from './i18n';

export type DocsLink = {
  title: string;
  href: string;
  description?: string;
};

export type DocsSection = {
  title: string;
  items: DocsLink[];
};

export function getDocsNav(locale: Locale): DocsSection[] {
  const t = translations[locale].docsNav;
  const p = (path: string) => `/${locale}${path}`;
  return [
    {
      title: t.gettingStarted,
      items: [
        { title: t.overview, href: p('/docs'), description: t.overviewDesc },
        { title: t.quickstart, href: p('/docs/getting-started'), description: t.quickstartDesc },
        { title: t.installation, href: p('/docs/installation'), description: t.installationDesc },
      ],
    },
    {
      title: t.configuration,
      items: [
        { title: t.dashboard, href: p('/docs/configuration'), description: t.dashboardDesc },
        { title: t.permissions, href: p('/docs/permissions'), description: t.permissionsDesc },
      ],
    },
    {
      title: t.reference,
      items: [
        { title: t.mcpTools, href: p('/docs/tools'), description: t.mcpToolsDesc },
        { title: t.httpApi, href: p('/docs/api'), description: t.httpApiDesc },
        { title: t.examples, href: p('/docs/examples'), description: t.examplesDesc },
      ],
    },
    {
      title: t.integrations,
      items: [
        { title: t.claudeCode, href: p('/docs/integrations/claude-code') },
        { title: t.claudeDesktop, href: p('/docs/integrations/claude-desktop') },
        { title: t.cursor, href: p('/docs/integrations/cursor') },
        { title: t.windsurf, href: p('/docs/integrations/windsurf') },
        { title: t.openCode, href: p('/docs/integrations/opencode') },
        { title: t.codex, href: p('/docs/integrations/codex') },
        { title: t.vscode, href: p('/docs/integrations/vscode') },
      ],
    },
    {
      title: t.help,
      items: [
        { title: t.troubleshooting, href: p('/docs/troubleshooting'), description: t.troubleshootingDesc },
      ],
    },
  ];
}

export function getFlatDocsNav(locale: Locale): DocsLink[] {
  return getDocsNav(locale).flatMap((s) => s.items);
}

export function getPrevNext(locale: Locale, href: string) {
  const flat = getFlatDocsNav(locale);
  const idx = flat.findIndex((l) => l.href === href);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}
