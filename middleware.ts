import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { HERO_PREVIEW_PATH, ROTATING_PATHS } from '@/lib/rotation-paths';

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
  if (hasLocale) {
    // Testing aid for the daily hero rotation: /en?day=3 or
    // /es/coverage-check?date=2026-10-04 renders that day's variant via the
    // dynamic, noindex /[lang]/hero-preview route. Everything else is untouched.
    const sp = req.nextUrl.searchParams;
    if (sp.has('day') || sp.has('date')) {
      const [, lang, ...rest] = pathname.split('/');
      const path = rest.join('/').replace(/\/+$/, '');
      if ((ROTATING_PATHS as readonly string[]).includes(path)) {
        const url = req.nextUrl.clone();
        url.pathname = `/${lang}/${HERO_PREVIEW_PATH}`;
        url.searchParams.set('path', path);
        const res = NextResponse.rewrite(url);
        res.headers.set('X-Robots-Tag', 'noindex, nofollow');
        res.headers.set('Cache-Control', 'private, no-store');
        return res;
      }
    }
    return;
  }
  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
matcher: ['/((?!api|_next|.*\\..*).*)']
};
