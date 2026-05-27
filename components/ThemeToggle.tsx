'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { SunIcon, MoonIcon, MonitorIcon } from './Icons';

type Pref = 'light' | 'dark' | 'system';
const STORAGE_KEY = 'multisql.theme';

function applyTheme(pref: Pref) {
  const isDark =
    pref === 'dark' ||
    (pref === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.documentElement.dataset.themePref = pref;
  if (pref === 'system') {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, pref);
  }
}

function getInitialPref(): Pref {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'system';
}

export function ThemeToggle() {
  const [pref, setPref] = useState<Pref>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setPref(getInitialPref());
    setMounted(true);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      const cur = (localStorage.getItem(STORAGE_KEY) as Pref) || 'system';
      if (cur === 'system') applyTheme('system');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  function set(next: Pref) {
    setPref(next);
    applyTheme(next);
  }

  const options: { value: Pref; label: string; icon: React.ReactNode }[] = [
    { value: 'system', label: 'System theme', icon: <MonitorIcon size={13} /> },
    { value: 'light', label: 'Light theme', icon: <SunIcon size={13} /> },
    { value: 'dark', label: 'Dark theme', icon: <MoonIcon size={13} /> },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center p-[2px] rounded-md"
      style={{
        background: 'var(--bg-subtle)',
        border: '1px solid var(--border)',
      }}
    >
      {options.map((opt) => {
        const active = mounted && pref === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={opt.label}
            onClick={() => set(opt.value)}
            className={clsx(
              'inline-flex items-center justify-center px-2 py-[5px] rounded transition-colors',
            )}
            style={{
              color: active ? 'var(--fg)' : 'var(--fg-subtle)',
              background: active ? 'var(--bg-panel)' : 'transparent',
              boxShadow: active ? '0 0 0 1px var(--border-strong)' : 'none',
            }}
          >
            {opt.icon}
          </button>
        );
      })}
    </div>
  );
}
