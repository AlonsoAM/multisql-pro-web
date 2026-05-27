'use client';

import { usePathname } from 'next/navigation';
import { DocsSidebar } from './DocsSidebar';
import { OnThisPage } from './OnThisPage';
import { DocsMobileNav } from './DocsMobileNav';
import { PrevNext } from './PrevNext';
import { TranslationPendingBanner } from './TranslationPendingBanner';
import { useI18n } from '@/lib/i18n-context';
import { locales } from '@/lib/i18n';

export function DocsLayout({
  children,
  href,
  meta,
  showTranslationPending = false,
}: {
  children: React.ReactNode;
  href?: string;
  meta?: { title: string; description?: string };
  showTranslationPending?: boolean;
}) {
  const pathname = usePathname();
  const { locale } = useI18n();

  // Normalize href so it always includes the current locale prefix.
  // If a page passes /docs/xyz (legacy), prepend the locale.
  let resolvedHref: string;
  if (href) {
    const hasLocale = (locales as readonly string[]).some(
      (l) => href === `/${l}` || href.startsWith(`/${l}/`),
    );
    resolvedHref = hasLocale ? href : `/${locale}${href}`;
  } else {
    resolvedHref = pathname;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-16">
      <div className="lg:hidden mb-6">
        <DocsMobileNav />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)_200px] gap-10">
        <aside
          className="hidden lg:block"
          aria-label="Docs sidebar"
        >
          <div
            className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2"
          >
            <DocsSidebar />
          </div>
        </aside>

        <article className="min-w-0">
          {meta && (
            <header className="mb-8">
              <h1 className="text-[34px] sm:text-[40px] font-semibold tracking-[-0.04em] leading-[1.1]">
                {meta.title}
              </h1>
              {meta.description && (
                <p
                  className="mt-3 text-[16px] leading-relaxed"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {meta.description}
                </p>
              )}
            </header>
          )}
          {showTranslationPending && <TranslationPendingBanner />}
          <div id="docs-content" className="prose">
            {children}
          </div>
          <PrevNext href={resolvedHref} />
        </article>

        <aside
          className="hidden xl:block"
          aria-label="On this page"
        >
          <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <OnThisPage />
          </div>
        </aside>
      </div>
    </div>
  );
}
