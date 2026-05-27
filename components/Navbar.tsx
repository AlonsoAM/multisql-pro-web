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
    { href: localePath(locale, '/docs/integrations/claude-code'), label: t.navbar.integrations, matchPrefix: localePath(locale, '/docs/integrations') },
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

  const starsLabel =
    stars === null ? null : stars < 1000 ? String(stars) : `${(stars / 1000).toFixed(1)}k`;

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backdropFilter: 'saturate(180%) blur(12px)',
        WebkitBackdropFilter: 'saturate(180%) blur(12px)',
        background: 'var(--bg-overlay)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'border-color 200ms, box-shadow 200ms',
        boxShadow: scrolled ? '0 1px 2px rgba(0,0,0,0.04), 0 4px 24px -8px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center gap-5">
        <Link
          href={localePath(locale, '/')}
          aria-label="MultiSQL Pro home"
          className="shrink-0 inline-flex items-center gap-2 group"
        >
          <Logo />
        </Link>

        <span
          className="hidden lg:inline-flex items-center gap-1 mono text-[10px] uppercase tracking-[0.08em] px-1.5 py-[3px] rounded-full"
          style={{
            color: 'var(--fg-subtle)',
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border)',
          }}
        >
          {t.navbar.version}
        </span>

        <ul className="hidden md:flex items-center gap-0.5 ml-1">
          {navLinks.map((l) => {
            const matchHref = l.matchPrefix ?? l.href;
            const active = pathname === l.href || pathname.startsWith(matchHref + '/') || pathname === matchHref;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    'relative inline-flex items-center px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors',
                  )}
                  style={{
                    color: active ? 'var(--fg)' : 'var(--fg-muted)',
                    background: active ? 'var(--bg-subtle)' : 'transparent',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex-1" />

        <div className="hidden sm:flex items-center gap-2">
          <a
            href={site.github.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Star on GitHub"
            className="group inline-flex items-center gap-2 h-8 px-3 rounded-md text-[12px] mono transition-colors"
            style={{
              color: 'var(--fg)',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border)',
            }}
          >
            <GithubIcon size={13} />
            <span style={{ color: 'var(--fg-muted)' }}>|</span>
            <span className="inline-flex items-center gap-1">
              <StarIcon size={11} />
              <span>{starsLabel ?? '★'}</span>
            </span>
          </a>

          <div
            className="h-6 w-px"
            style={{ background: 'var(--border)' }}
            aria-hidden
          />

          <LanguageSelector />
          <ThemeToggle />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md transition-colors"
          style={{
            border: '1px solid var(--border)',
            background: 'var(--bg-panel)',
            color: 'var(--fg)',
          }}
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
            {navLinks.map((l) => {
              const matchHref = l.matchPrefix ?? l.href;
              const active = pathname === l.href || pathname.startsWith(matchHref + '/');
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-3 py-2.5 rounded-md text-[14px] font-medium transition-colors"
                    style={{
                      color: active ? 'var(--fg)' : 'var(--fg-muted)',
                      background: active ? 'var(--bg-subtle)' : 'transparent',
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-1 mt-1" style={{ borderTop: '1px solid var(--border)' }}>
              <a
                href={site.github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-3 py-2.5 rounded-md text-[14px]"
                style={{ color: 'var(--fg)' }}
              >
                <GithubIcon size={14} />
                <span>{t.navbar.github}</span>
                <span className="ml-auto inline-flex items-center gap-1 mono text-[11px]" style={{ color: 'var(--fg-muted)' }}>
                  <StarIcon size={11} />
                  {starsLabel ?? '★'}
                </span>
              </a>
            </li>
            <li className="pt-3 flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
