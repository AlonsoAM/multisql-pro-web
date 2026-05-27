'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { GithubIcon } from './Icons';
import { site } from '@/lib/site';
import { useI18n, localePath } from '@/lib/i18n-context';

export function Footer() {
  const { t, locale } = useI18n();
  const lp = (p: string) => localePath(locale, p);

  const columns = [
    {
      title: t.footer.product,
      links: [
        { href: lp('/'), label: t.footer.home },
        { href: lp('/docs/getting-started'), label: t.footer.quickstart },
        { href: lp('/docs/configuration'), label: t.footer.dashboard },
        { href: lp('/docs/permissions'), label: t.footer.permissions },
      ],
    },
    {
      title: t.footer.docs,
      links: [
        { href: lp('/docs'), label: t.footer.overview },
        { href: lp('/docs/tools'), label: t.footer.mcpTools },
        { href: lp('/docs/api'), label: t.footer.httpApi },
        { href: lp('/docs/examples'), label: t.footer.examples },
        { href: lp('/docs/troubleshooting'), label: t.footer.troubleshooting },
      ],
    },
    {
      title: t.footer.integrations,
      links: [
        { href: lp('/docs/integrations/claude-code'), label: t.docsNav.claudeCode },
        { href: lp('/docs/integrations/claude-desktop'), label: t.docsNav.claudeDesktop },
        { href: lp('/docs/integrations/cursor'), label: t.docsNav.cursor },
        { href: lp('/docs/integrations/windsurf'), label: t.docsNav.windsurf },
        { href: lp('/docs/integrations/opencode'), label: t.docsNav.openCode },
        { href: lp('/docs/integrations/codex'), label: t.docsNav.codex },
        { href: lp('/docs/integrations/vscode'), label: t.docsNav.vscode },
      ],
    },
    {
      title: t.footer.author,
      links: [
        { href: site.github.url, label: 'GitHub', external: true },
        { href: 'https://modelcontextprotocol.io', label: t.footer.aboutMcp, external: true },
      ],
    },
  ];

  return (
    <footer
      className="mt-32"
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-2">
            <Logo />
            <p
              className="mt-4 text-[13.5px] leading-relaxed max-w-sm"
              style={{ color: 'var(--fg-muted)' }}
            >
              {t.footer.description}
            </p>
            <a
              href={site.github.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 mt-5 text-[12.5px] mono"
              style={{ color: 'var(--fg-muted)' }}
            >
              <GithubIcon size={13} />
              <span>{site.github.repo}</span>
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3
                className="text-[11px] mono uppercase tracking-[0.08em] mb-3"
                style={{ color: 'var(--fg-subtle)' }}
              >
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    {'external' in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-[13px] transition-colors hover:text-[var(--fg)]"
                        style={{ color: 'var(--fg-muted)' }}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[13px] transition-colors hover:text-[var(--fg)]"
                        style={{ color: 'var(--fg-muted)' }}
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px]"
          style={{
            borderTop: '1px solid var(--border)',
            color: 'var(--fg-subtle)',
          }}
        >
          <span>
            © {site.year} {site.author.name} · {site.license} {t.footer.license}
          </span>
          <span className="mono">{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}
