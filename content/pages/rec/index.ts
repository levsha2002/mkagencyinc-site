import type { Lang } from '../../types';
import type { HeroImage } from '../../hero/images';
import type { RecCopy, RecLine, RecPage } from './types';
import sizes from '@/public/images/rec/sizes.json';
import { MOTORCYCLE } from './motorcycle';
import { JET_SKI } from './jet-ski';
import { BOAT } from './boat';
import { OFF_ROAD } from './off-road';
import { GOLF_CART } from './golf-cart';
import { AUTOCYCLE } from './autocycle';
import { LIFE } from './life';

export type { RecPage, RecCopy, RecLine } from './types';

// Florida landing pages for motorcycles, personal watercraft, boats, off-road
// vehicles, golf carts, autocycles and life insurance. Routes: app/[lang]/<slug>/.
// Images: scripts/build-rec-media.mjs -> public/images/rec/ and public/og/rec-<line>.webp.
export const REC_PAGES: RecPage[] = [MOTORCYCLE, JET_SKI, BOAT, OFF_ROAD, GOLF_CART, AUTOCYCLE, LIFE];

export function getRecPage(path: string): RecPage {
  const p = REC_PAGES.find((c) => c.path === path);
  if (!p) throw new Error(`rec page not found: ${path}`);
  return p;
}

/** Wide illustration behind the hero (no text inside, 1440x900). */
export function recHero(line: RecLine, lang: Lang, alt: string): HeroImage {
  return { src: `/images/rec/${line}-hero.webp`, width: 1440, height: 900, alt: { en: alt, es: alt, ru: alt, [lang]: alt } as Record<Lang, string> };
}

/** Localized SVG infographic (text inside). */
export function recFigure(line: RecLine, lang: Lang) {
  const key = `${line}-${lang}` as keyof typeof sizes;
  const sz = sizes[key] ?? { width: 640, height: 760 };
  return { src: `/images/rec/${line}-${lang}.svg`, width: sz.width, height: sz.height };
}

/** 1200x630 share image. */
export const recOg = (line: RecLine) => `/og/rec-${line}.webp`;

/** Plain text of everything a visitor reads (for checks). */
export function recPageText(c: RecCopy): string {
  const blocks = [...c.intro, ...c.body, ...c.agent].map((b) => ('text' in b ? `${b.type === 'callout' && b.title ? b.title + ' ' : ''}${b.text}` : b.items.join(' '))).join(' ');
  return [
    c.metaTitle, c.metaDesc, c.breadcrumb, c.kicker, c.h1a, c.h1b, c.answer, c.leadLabel, blocks,
    c.factsTitle, c.facts.map((f) => `${f.value} ${f.text}`).join(' '), c.figureAlt, c.figureCaption,
    c.gapsTitle, c.gaps.map((g) => `${g.h} ${g.p}`).join(' '), c.coverageTitle, c.coverage.map((g) => `${g.h} ${g.p}`).join(' '), c.coverageNote,
    c.checklistTitle, c.checklist.join(' '), c.agentTitle, c.faqTitle, c.faq.map((f) => `${f.q} ${f.a}`).join(' '), c.related.map((r) => r.label).join(' '),
  ].join(' ');
}

// Build-time guard (owner rules, see types.ts): no carriers, prices/rates,
// discounts, superlatives, guarantees, dealers, lenders or finance companies.
export const REC_FORBIDDEN = /allstate|castle key|natgen|national general|progressive|geico|state farm|liberty mutual|nationwide|travelers|farmers|usaa|markel|foremost|dairyland|boatus|sea tow|cheap|lowest|\bbest\b|guarantee|discount|\bsav(e|es|ing|ings)\b|\bprices?\b|\bpricing\b|\brates?\b|premium|afford|dealer|lender|\bloan|financing|finance compan|\bbank|descuento|ahorr|barat|garantiz|\bmejor(es)?\b|precio|tarifa|prima\b|primas\b|concesionari|prestamista|financiamiento|compañías? financieras?|empresas? financieras?|скидк|дешев|дешёв|экономи|гарантир|лучш|тариф|(?<![а-яё])цен[аыуе]?(?![а-яё])|дилер|кредитор|автосалон|лизинг|рассрочк|lic(ense)?\/npn/i;

const LANGS: Lang[] = ['en', 'es', 'ru'];
const seen = new Set<string>();
for (const p of REC_PAGES) {
  if (seen.has(p.path)) throw new Error(`rec: duplicate path ${p.path}`);
  seen.add(p.path);
  if (p.leadSource !== `rec-${p.line}`) throw new Error(`rec: ${p.path} lead source must be rec-${p.line}`);
  for (const l of LANGS) {
    const c = p.copy[l];
    const m = recPageText(c).match(REC_FORBIDDEN);
    if (m) throw new Error(`rec: forbidden term "${m[0]}" in ${p.path} (${l})`);
    if (c.faq.length < 5) throw new Error(`rec: ${p.path} (${l}) needs at least 5 FAQs`);
    if (c.metaTitle.length > 60) throw new Error(`rec: ${p.path} (${l}) metaTitle too long (${c.metaTitle.length})`);
    if (c.metaDesc.length > 160 || c.metaDesc.length < 110) throw new Error(`rec: ${p.path} (${l}) metaDesc length ${c.metaDesc.length}`);
    const urls = new Set(c.sources.map((s) => s.url));
    for (const f of c.facts) if (!urls.has(f.source)) throw new Error(`rec: ${p.path} (${l}) fact source not in sources: ${f.source}`);
    if (c.related.some((r) => r.path === '/flood-insurance-homestead-fl') && l === 'ru') throw new Error(`rec: ${p.path} (ru) links to an EN/ES-only page`);
  }
}
