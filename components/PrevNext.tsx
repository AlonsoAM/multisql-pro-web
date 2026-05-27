'use client';

import Link from 'next/link';
import { getPrevNext } from '@/lib/docs-nav';
import { useI18n } from '@/lib/i18n-context';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';

export function PrevNext({ href }: { href: string }) {
  const { locale, t } = useI18n();
  const { prev, next } = getPrevNext(locale, href);
  if (!prev && !next) return null;

  const prevLabel = t.pagination.previous;
  const nextLabel = t.pagination.next;

  return (
    <nav
      aria-label="Page navigation"
      className="not-prose mt-16 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group p-4 rounded-lg transition-colors"
          style={{
            border: '1px solid var(--border)',
            background: 'var(--bg-panel)',
          }}
        >
          <div className="flex items-center gap-1.5 text-[11px] mono uppercase tracking-[0.08em] mb-1.5" style={{ color: 'var(--fg-subtle)' }}>
            <ArrowLeftIcon size={11} />
            {prevLabel}
          </div>
          <div className="text-[14px] font-medium" style={{ color: 'var(--fg)' }}>
            {prev.title}
          </div>
        </Link>
      ) : <div />}
      {next ? (
        <Link
          href={next.href}
          className="group p-4 rounded-lg transition-colors text-right sm:col-start-2"
          style={{
            border: '1px solid var(--border)',
            background: 'var(--bg-panel)',
          }}
        >
          <div className="flex items-center justify-end gap-1.5 text-[11px] mono uppercase tracking-[0.08em] mb-1.5" style={{ color: 'var(--fg-subtle)' }}>
            {nextLabel}
            <ArrowRightIcon size={11} />
          </div>
          <div className="text-[14px] font-medium" style={{ color: 'var(--fg)' }}>
            {next.title}
          </div>
        </Link>
      ) : null}
    </nav>
  );
}
