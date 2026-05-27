'use client';

import { ArrowRightIcon } from './Icons';
import { useI18n } from '@/lib/i18n-context';

export function Steps() {
  const { t } = useI18n();
  const steps = t.steps.items;

  return (
    <section
      className="py-20 sm:py-28"
      style={{
        background: 'var(--bg-panel)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p
            className="mono text-[11px] uppercase tracking-[0.1em] mb-3"
            style={{ color: 'var(--accent)' }}
          >
            {t.steps.sectionLabel}
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-semibold tracking-[-0.03em]">
            {t.steps.title}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-px md:gap-0 rounded-xl overflow-hidden"
          style={{
            border: '1px solid var(--border)',
            background: 'var(--border)',
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="relative p-7 sm:p-8"
              style={{
                background: 'var(--bg-card)',
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="mono text-[11px] tracking-[0.1em] px-2 py-1 rounded shrink-0"
                  style={{
                    color: 'var(--accent)',
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {s.num}
                </span>
                {i < steps.length - 1 && (
                  <span
                    className="hidden md:inline-flex absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: 'var(--fg-subtle)' }}
                    aria-hidden
                  >
                    <ArrowRightIcon size={14} />
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
