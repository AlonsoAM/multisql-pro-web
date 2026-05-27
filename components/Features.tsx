'use client';

import {
  LayersIcon,
  ShieldIcon,
  PlugIcon,
  ActivityIcon,
  SearchIcon,
  BoltIcon,
} from './Icons';
import { useI18n } from '@/lib/i18n-context';

const icons = [
  <LayersIcon size={18} />,
  <ShieldIcon size={18} />,
  <PlugIcon size={18} />,
  <ActivityIcon size={18} />,
  <SearchIcon size={18} />,
  <BoltIcon size={18} />,
];

export function Features() {
  const { t } = useI18n();
  const features = t.features.items;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p
            className="mono text-[11px] uppercase tracking-[0.1em] mb-3"
            style={{ color: 'var(--accent)' }}
          >
            {t.features.sectionLabel}
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-semibold tracking-[-0.03em]">
            {t.features.title}
          </h2>
          <p className="mt-4 text-[15px]" style={{ color: 'var(--fg-muted)' }}>
            {t.features.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-12 rounded-xl overflow-hidden"
          style={{
            border: '1px solid var(--border)',
            background: 'var(--border)',
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className="p-6 sm:p-7"
              style={{ background: 'var(--bg-panel)' }}
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-md mb-4"
                style={{
                  color: 'var(--accent)',
                  background: 'var(--accent-soft)',
                  border: '1px solid var(--border)',
                }}
              >
                {icons[i]}
              </span>
              <h3 className="text-[15px] font-semibold mb-2 tracking-[-0.01em]">
                {f.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
