import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n';

const PUBLIC_FILE = /\.(.*)$/;

function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get('multisql.locale')?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) return cookie;
  const accept = req.headers.get('accept-language') || '';
  const preferred = accept.split(',')[0]?.split('-')[0]?.toLowerCase();
  if (preferred && (locales as readonly string[]).includes(preferred)) return preferred;
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.svg' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/opengraph-image' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = (locales as readonly string[]).some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );

  if (!hasLocale) {
    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
