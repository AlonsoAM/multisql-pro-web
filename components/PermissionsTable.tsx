'use client';

import { CheckIcon, CloseIcon, LockIcon } from './Icons';
import Link from 'next/link';
import { useI18n, localePath } from '@/lib/i18n-context';

function Cell({ allowed }: { allowed: boolean }) {
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded"
      style={{
        background: allowed ? 'var(--accent-soft)' : 'var(--bg-subtle)',
        color: allowed ? 'var(--accent)' : 'var(--fg-subtle)',
        border: '1px solid var(--border)',
      }}
      aria-label={allowed ? 'Allowed' : 'Blocked'}
    >
      {allowed ? <CheckIcon size={12} /> : <CloseIcon size={12} />}
    </span>
  );
}

export function PermissionsTable() {
  const { t, locale } = useI18n();
  const rows = t.permissionsTable.rows;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div className="max-w-md">
            <p
              className="mono text-[11px] uppercase tracking-[0.1em] mb-3"
              style={{ color: 'var(--accent)' }}
            >
              {t.permissionsTable.sectionLabel}
            </p>
            <h2 className="text-[30px] sm:text-[38px] font-semibold tracking-[-0.03em]">
              {t.permissionsTable.titlePart1}{' '}
              <span style={{ color: 'var(--fg-muted)' }}>
                {t.permissionsTable.titlePart2}
              </span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              {t.permissionsTable.description}
            </p>
            <Link
              href={localePath(locale, '/docs/permissions')}
              className="inline-flex items-center gap-2 mt-6 text-[13px] mono"
              style={{ color: 'var(--accent)' }}
            >
              <LockIcon size={13} />
              {t.permissionsTable.readThePermissionModel}
            </Link>
          </div>

          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid var(--border)', background: 'var(--bg-panel)' }}
          >
            <div
              className="grid grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] text-[11px] mono uppercase tracking-[0.08em] px-5 py-3"
              style={{
                color: 'var(--fg-subtle)',
                borderBottom: '1px solid var(--border)',
                background: 'var(--bg-subtle)',
              }}
            >
              <span>{t.permissionsTable.connectionType}</span>
              <span className="text-center">{t.permissionsTable.select}</span>
              <span className="text-center">{t.permissionsTable.dml}</span>
              <span className="text-center">{t.permissionsTable.ddl}</span>
              <span className="text-center">{t.permissionsTable.exec}</span>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.type}
                className="grid grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] items-center px-5 py-4"
                style={{
                  borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="mono text-[13px] font-medium">{r.type}</span>
                    <span
                      className="mono text-[9.5px] uppercase tracking-[0.08em] px-1.5 py-0.5 rounded"
                      style={{
                        color: i < 2 ? 'var(--color-status-warn)' : 'var(--color-status-info)',
                        border: '1px solid var(--border)',
                        background: 'var(--bg-subtle)',
                      }}
                    >
                      {i < 2 ? t.permissionsTable.readWrite : t.permissionsTable.readOnly}
                    </span>
                  </div>
                  <p className="text-[12px] mt-1" style={{ color: 'var(--fg-muted)' }}>
                    {r.description}
                  </p>
                </div>
                <span className="flex justify-center">
                  <Cell allowed={true} />
                </span>
                <span className="flex justify-center">
                  <Cell allowed={i < 2} />
                </span>
                <span className="flex justify-center">
                  <Cell allowed={i < 2} />
                </span>
                <span className="flex justify-center">
                  <Cell allowed={i < 2} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
