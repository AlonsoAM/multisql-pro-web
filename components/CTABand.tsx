'use client';

import Link from 'next/link';
import { ArrowRightIcon, GithubIcon } from './Icons';
import { site } from '@/lib/site';
import { useI18n, localePath } from '@/lib/i18n-context';

export function CTABand() {
  const { t, locale } = useI18n();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-12 sm:px-12 sm:py-16"
          style={{
            border: '1px solid var(--border)',
            background: 'var(--bg-panel)',
          }}
        >
          <div
            className="absolute -top-20 -right-10 w-[420px] h-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: 'var(--accent-soft)' }}
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] leading-[1.15]">
              {t.ctaBand.titlePart1}{' '}
              <span style={{ color: 'var(--accent)' }}>{t.ctaBand.titlePart2}</span> {t.ctaBand.titlePart3}
            </h2>
            <p className="mt-4 text-[15px] max-w-xl" style={{ color: 'var(--fg-muted)' }}>
              {t.ctaBand.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={localePath(locale, '/docs/getting-started')}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium px-4 py-2.5 rounded-md transition-transform hover:-translate-y-px"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                  boxShadow: '0 8px 24px -10px var(--accent)',
                }}
              >
                {t.ctaBand.getStarted}
                <ArrowRightIcon size={14} />
              </Link>
              <a
                href={site.github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-[13.5px] px-4 py-2.5 rounded-md"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--fg)',
                }}
              >
                <GithubIcon size={14} />
                {t.ctaBand.starOnGitHub}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
