'use client';

import Link from 'next/link';
import { useI18n, localePath } from '@/lib/i18n-context';

export function Integrations() {
  const { t, locale } = useI18n();
  const lp = (p: string) => localePath(locale, p);

  const items = [
    { name: t.docsNav.claudeCode, href: lp('/docs/integrations/claude-code') },
    { name: t.docsNav.claudeDesktop, href: lp('/docs/integrations/claude-desktop') },
    { name: t.docsNav.cursor, href: lp('/docs/integrations/cursor') },
    { name: t.docsNav.windsurf, href: lp('/docs/integrations/windsurf') },
    { name: t.docsNav.openCode, href: lp('/docs/integrations/opencode') },
    { name: t.docsNav.codex, href: lp('/docs/integrations/codex') },
    { name: t.docsNav.vscode, href: lp('/docs/integrations/vscode') },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
          <div>
            <p
              className="mono text-[11px] uppercase tracking-[0.1em] mb-2"
              style={{ color: 'var(--fg-subtle)' }}
            >
              {t.integrations.label}
            </p>
            <h2 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.025em]">
              {t.integrations.title}
            </h2>
          </div>
          <span
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.08em] px-2.5 py-1 rounded-full"
            style={{
              color: 'var(--accent)',
              background: 'var(--accent-soft)',
              border: '1px solid var(--border)',
            }}
          >
            <span className="status-dot" data-status="online" />
            {t.integrations.compatible}
          </span>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px overflow-hidden rounded-xl"
          style={{
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}
        >
          {items.map((i) => (
            <Link
              key={i.name}
              href={i.href}
              className="px-5 py-7 flex items-center justify-center text-center transition-colors hover:bg-[var(--bg-subtle)]"
              style={{ background: 'var(--bg-panel)' }}
            >
              <span
                className="text-[14px] font-medium tracking-tight"
                style={{ color: 'var(--fg)' }}
              >
                {i.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
