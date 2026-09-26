// Which languages a URL exists in, for the header language switcher.
// Client-safe: no content imports. Most routes exist in en/es/ru; list here
// only the ones that don't, so the switcher never links to a 404.
type Lang = 'en' | 'es' | 'ru';

/** Fixed pages that exist in fewer than three languages. `fallback` is where
 *  the switcher sends visitors of a missing language (a path without /lang). */
export const LIMITED_LANG_PAGES: Record<string, { langs: Lang[]; fallback: string }> = {
  '/flood-insurance-homestead-fl': { langs: ['en', 'es'], fallback: '/homeowners-insurance-florida-city' },
};

/** Target of the language switcher for `pathname` in language `l`.
 *  Blog articles can exist in any subset of languages, and the header cannot
 *  know which without shipping post data to the browser, so the switcher goes
 *  to the blog index; each article links its own translations in the page.
 *  News editions work the same way (to /[lang]/news). */
export function switchLangHref(pathname: string, l: string): string {
  const rest = pathname.replace(/^\/(en|es|ru)(?=\/|$)/, '');
  if (/^\/blog\/[^/]+\/?$/.test(rest)) return `/${l}/blog`;
  if (/^\/news\/[^/]+\/?$/.test(rest)) return `/${l}/news`;
  const limited = LIMITED_LANG_PAGES[rest.replace(/\/$/, '')];
  if (limited && !limited.langs.includes(l as Lang)) return `/${l}${limited.fallback}`;
  return `/${l}${rest}`;
}
