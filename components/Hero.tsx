'use client';

import Link from 'next/link';
import { Terminal } from './Terminal';
import { ArrowRightIcon, GithubIcon } from './Icons';
import { site } from '@/lib/site';
import { useI18n, localePath } from '@/lib/i18n-context';

export function Hero() {
  const { t, locale } = useI18n();

  return (
    <section className="relative pt-14 sm:pt-20 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.08em] px-2.5 py-1 rounded-full mb-6"
              style={{
                color: 'var(--accent)',
                background: 'var(--accent-soft)',
                border: '1px solid var(--border)',
              }}
            >
              <span className="status-dot" data-status="online" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-semibold tracking-[-0.04em] leading-[1.02]">
              {t.hero.titlePart1}{' '}
              <span style={{ color: 'var(--fg-muted)' }}>{t.hero.titlePart2}</span>{' '}
              <span style={{ color: 'var(--accent)' }}>{t.hero.titlePart3}</span>
            </h1>

            <p
              className="mt-6 text-[17px] leading-relaxed max-w-xl"
              style={{ color: 'var(--fg-muted)' }}
            >
              {t.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href={localePath(locale, '/docs/getting-started')}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium px-4 py-2.5 rounded-md transition-transform hover:-translate-y-px"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                  boxShadow: '0 1px 0 0 rgba(0,0,0,0.04), 0 8px 24px -8px var(--accent)',
                }}
              >
                {t.hero.getStarted}
                <ArrowRightIcon size={14} />
              </Link>
              <a
                href={site.github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-[13.5px] px-4 py-2.5 rounded-md transition-colors"
                style={{
                  background: 'var(--bg-panel)',
                  border: '1px solid var(--border)',
                  color: 'var(--fg)',
                }}
              >
                <GithubIcon size={14} />
                {t.hero.viewOnGitHub}
              </a>
            </div>

            <div
              className="mt-10 flex items-center gap-5 text-[12px] mono"
              style={{ color: 'var(--fg-subtle)' }}
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="status-dot" data-status="online" />
                {t.hero.mcpNative}
              </span>
              <span>·</span>
              <span>{t.hero.nodeVersion}</span>
              <span>·</span>
              <span>{t.hero.sqlVersion}</span>
              <span>·</span>
              <span>{t.hero.license}</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-3xl opacity-60 blur-3xl"
              style={{
                background:
                  'radial-gradient(60% 50% at 60% 40%, var(--accent-soft), transparent 70%)',
              }}
              aria-hidden
            />
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
