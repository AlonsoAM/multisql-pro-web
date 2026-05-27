'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { getDocsNav } from '@/lib/docs-nav';
import { useI18n } from '@/lib/i18n-context';

export function DocsSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { locale } = useI18n();
  const docsNav = getDocsNav(locale);
  return (
    <nav aria-label="Documentation" className="text-[13.5px]">
      {docsNav.map((section) => (
        <div key={section.title} className="mb-6">
          <p
            className="mono text-[10.5px] uppercase tracking-[0.1em] mb-2"
            style={{ color: 'var(--fg-subtle)' }}
          >
            {section.title}
          </p>
          <ul className="space-y-px">
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={clsx(
                      'block px-2.5 py-1.5 rounded transition-colors',
                    )}
                    style={{
                      color: active ? 'var(--fg)' : 'var(--fg-muted)',
                      background: active ? 'var(--accent-soft)' : 'transparent',
                      borderLeft: active
                        ? '2px solid var(--accent)'
                        : '2px solid transparent',
                      paddingLeft: active ? '0.5rem' : '0.625rem',
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
