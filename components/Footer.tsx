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
        { href: `${site.github.url}/releases`, label: t.footer.releases, external: true },
        { href: `${site.github.url}/issues`, label: t.footer.issues, external: true },
        { href: 'https://modelcontextprotocol.io', label: t.footer.aboutMcp, external: true },
      ],
    },
  ];

  return (
    <footer
      className="mt-32 relative"
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      {/* Decorative gradient strip */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -1,
          left: '10%',
          right: '10%',
          height: 1,
          background:
            'linear-gradient(90deg, transparent, var(--accent) 50%, transparent)',
          opacity: 0.4,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Logo />
            <p
              className="mt-4 text-[13.5px] leading-relaxed max-w-sm"
              style={{ color: 'var(--fg-muted)' }}
            >
              {t.footer.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href={site.github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 h-8 px-3 rounded-md text-[12px] mono transition-colors"
                style={{
                  color: 'var(--fg)',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                }}
              >
                <GithubIcon size={13} />
                <span>{site.github.repo}</span>
              </a>
            </div>

            <div
              className="mt-5 inline-flex items-center gap-2 text-[11.5px]"
              style={{ color: 'var(--fg-subtle)' }}
            >
              <span className="status-dot" data-status="online" aria-hidden />
              <span>{t.footer.statusOperational}</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3
                className="text-[11px] mono uppercase tracking-[0.08em] mb-3.5"
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
                        className="text-[13px] inline-flex items-center gap-1.5 transition-colors footer-link"
                        style={{ color: 'var(--fg-muted)' }}
                      >
                        {l.label}
                        <span
                          className="opacity-0 footer-link-arrow"
                          aria-hidden
                          style={{ transition: 'opacity 150ms' }}
                        >
                          ↗
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[13px] transition-colors footer-link"
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
          className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px]"
          style={{
            borderTop: '1px solid var(--border)',
            color: 'var(--fg-subtle)',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span>
              © {site.year}{' '}
              <a
                href={site.github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-[var(--fg)]"
                style={{ color: 'var(--fg-subtle)' }}
              >
                {site.author.name}
              </a>
            </span>
            <span className="hidden sm:inline" style={{ color: 'var(--border-strong)' }}>·</span>
            <span>
              <Link
                href={`${site.github.url}/blob/main/LICENSE`}
                className="transition-colors hover:text-[var(--fg)]"
                style={{ color: 'var(--fg-subtle)' }}
              >
                {site.license} {t.footer.license}
              </Link>
            </span>
            <span className="hidden sm:inline" style={{ color: 'var(--border-strong)' }}>·</span>
            <span className="italic">{t.footer.madeIn}</span>
          </div>
          <span className="mono">{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}
