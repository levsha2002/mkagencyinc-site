import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es', 'ru'];

function pickLocale(req: NextRequest) {
  const header = req.headers.get('accept-language') || '';
  if (/^ru|,ru/i.test(header)) return 'ru';
  if (/^es|,es/i.test(header)) return 'es';
  return 'en';
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // /studio is a real top-level route (app/studio: internal image generator,
  // not localized). Without this it was redirected to /en/studio, a 404.
  if (pathname === '/studio' || pathname.startsWith('/studio/')) return;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;
  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
matcher: ['/((?!api|_next|.*\\..*).*)']
};
