'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { GithubIcon, StarIcon, MenuIcon, CloseIcon } from './Icons';
import { site } from '@/lib/site';
import { useI18n, localePath } from '@/lib/i18n-context';

export function Navbar({ stars }: { stars: number | null }) {
  const { t, locale } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: localePath(locale, '/docs'), label: t.navbar.docs },
    { href: localePath(locale, '/docs/integrations/claude-code'), label: t.navbar.integrations },
    { href: localePath(locale, '/docs/examples'), label: t.navbar.examples },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const starsLabel = stars === null ? null : stars < 1000 ? String(stars) : `${(stars / 1000).toFixed(1)}k`;

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backdropFilter: 'saturate(180%) blur(10px)',
        WebkitBackdropFilter: 'saturate(180%) blur(10px)',
        background: 'var(--bg-overlay)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'border-color 200ms',
      }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center gap-6">
        <Link href={localePath(locale, '/')} aria-label="MultiSQL Pro home" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-1 ml-2">
          {navLinks.map((l) => {
            const active =
              l.href === '/'
                ? pathname === '/'
                : pathname === l.href || pathname.startsWith(l.href + '/');
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    'inline-flex items-center px-2.5 py-1.5 rounded text-[13px] transition-colors',
                  )}
                  style={{
                    color: active ? 'var(--fg)' : 'var(--fg-muted)',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={site.github.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-2.5 py-1.5 rounded text-[13px]"
              style={{ color: 'var(--fg-muted)' }}
            >
              {t.navbar.github}
            </a>
          </li>
        </ul>

        <div className="flex-1" />

        <a
          href={site.github.url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View on GitHub"
          className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1.5 rounded text-[12px] mono"
          style={{
            color: 'var(--fg)',
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border)',
          }}
        >
          <GithubIcon size={13} />
          <span>{starsLabel ? `★ ${starsLabel}` : 'GitHub'}</span>
        </a>

        <div className="hidden sm:flex items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded"
          style={{ border: '1px solid var(--border)', background: 'var(--bg-panel)' }}
        >
          {mobileOpen ? <CloseIcon size={16} /> : <MenuIcon size={16} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'var(--bg-panel)',
            borderColor: 'var(--border)',
          }}
        >
          <ul className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block px-2 py-2 rounded text-[14px]"
                  style={{ color: 'var(--fg)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="block px-2 py-2 rounded text-[14px]"
                style={{ color: 'var(--fg)' }}
              >
                {t.navbar.github} <StarIcon size={12} />
              </a>
            </li>
            <li className="pt-2 flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
