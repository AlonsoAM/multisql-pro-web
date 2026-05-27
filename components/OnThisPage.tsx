'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

type Heading = { id: string; text: string; level: number };

export function OnThisPage() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const root = document.getElementById('docs-content');
    if (!root) return;
    const found = Array.from(root.querySelectorAll<HTMLElement>('h2, h3'))
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: Number(el.tagName.substring(1)),
      }));
    setHeadings(found);

    if (found.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '0px 0px -75% 0px', threshold: [0, 1] },
    );

    found.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className="text-[12.5px]"
    >
      <p
        className="mono text-[10.5px] uppercase tracking-[0.1em] mb-3"
        style={{ color: 'var(--fg-subtle)' }}
      >
        On this page
      </p>
      <ul className="space-y-1.5">
        {headings.map((h) => {
          const active = h.id === activeId;
          return (
            <li
              key={h.id}
              style={{ paddingLeft: h.level === 3 ? 12 : 0 }}
            >
              <a
                href={`#${h.id}`}
                className={clsx('block transition-colors')}
                style={{
                  color: active ? 'var(--accent)' : 'var(--fg-muted)',
                  borderLeft: active ? '1px solid var(--accent)' : '1px solid transparent',
                  paddingLeft: 8,
                  marginLeft: -8,
                }}
              >
                {h.text.replace(/#$/, '').trim()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
