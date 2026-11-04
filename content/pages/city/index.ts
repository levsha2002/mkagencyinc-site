import type { Lang } from '../../types';
import type { CityPage, CityPageCopy } from './types';
import { CAR_HOMESTEAD } from './car-insurance-homestead-fl';
import { CAR_CUTLER_BAY } from './car-insurance-cutler-bay-fl';
import { CAR_KENDALL } from './car-insurance-kendall-fl';
import { CAR_SUNNY_ISLES } from './car-insurance-sunny-isles-beach-fl';
import { CAR_AVENTURA } from './car-insurance-aventura-fl';
import { CAR_HALLANDALE } from './car-insurance-hallandale-beach-fl';
import { CAR_HOLLYWOOD } from './car-insurance-hollywood-fl';
import { CAR_MIAMI_BEACH } from './car-insurance-miami-beach-fl';
import { CAR_FORT_LAUDERDALE } from './car-insurance-fort-lauderdale-fl';
import { CAR_POMPANO } from './car-insurance-pompano-beach-fl';
import { CAR_BOCA } from './car-insurance-boca-raton-fl';
import { CAR_MIAMI_DADE } from './car-insurance-miami-dade-county-fl';
import { CAR_BROWARD } from './car-insurance-broward-county-fl';
import { CAR_PALM_BEACH } from './car-insurance-palm-beach-county-fl';
import { HOME_HOMESTEAD } from './homeowners-insurance-homestead-fl';
import { HOME_CUTLER_BAY } from './homeowners-insurance-cutler-bay-fl';
import { HOME_KENDALL } from './homeowners-insurance-kendall-fl';
import { HOME_SUNNY_ISLES } from './homeowners-insurance-sunny-isles-beach-fl';
import { HOME_AVENTURA } from './homeowners-insurance-aventura-fl';
import { HOME_HALLANDALE } from './homeowners-insurance-hallandale-beach-fl';
import { HOME_HOLLYWOOD } from './homeowners-insurance-hollywood-fl';
import { HOME_MIAMI_BEACH } from './homeowners-insurance-miami-beach-fl';
import { HOME_FORT_LAUDERDALE } from './homeowners-insurance-fort-lauderdale-fl';
import { HOME_POMPANO } from './homeowners-insurance-pompano-beach-fl';
import { HOME_BOCA } from './homeowners-insurance-boca-raton-fl';
import { HOME_MIAMI_DADE } from './homeowners-insurance-miami-dade-county-fl';
import { HOME_BROWARD } from './homeowners-insurance-broward-county-fl';
import { HOME_PALM_BEACH } from './homeowners-insurance-palm-beach-county-fl';
import { HERO_IMAGES } from '../../hero/images';

export type { CityPage, CityPageCopy } from './types';

// Local SEO pages: city pages + county hubs. Routes live in app/[lang]/<slug>/.
export const CITY_PAGES: CityPage[] = [
  CAR_MIAMI_DADE, CAR_HOMESTEAD, CAR_CUTLER_BAY, CAR_KENDALL, CAR_MIAMI_BEACH, CAR_SUNNY_ISLES, CAR_AVENTURA, CAR_BROWARD, CAR_HALLANDALE, CAR_HOLLYWOOD, CAR_FORT_LAUDERDALE, CAR_POMPANO, CAR_PALM_BEACH, CAR_BOCA,
  HOME_MIAMI_DADE, HOME_HOMESTEAD, HOME_CUTLER_BAY, HOME_KENDALL, HOME_MIAMI_BEACH, HOME_SUNNY_ISLES, HOME_AVENTURA, HOME_BROWARD, HOME_HALLANDALE, HOME_HOLLYWOOD, HOME_FORT_LAUDERDALE, HOME_POMPANO, HOME_PALM_BEACH, HOME_BOCA,
];

export function getCityPage(path: string): CityPage {
  const p = CITY_PAGES.find((c) => c.path === path);
  if (!p) throw new Error(`city page not found: ${path}`);
  return p;
}

/** Plain text of everything a visitor reads in the main body (for checks/word counts). */
export function cityPageText(c: CityPageCopy): string {
  const blocks = [...c.intro, ...c.body, ...c.office]
    .map((b) => ('text' in b ? b.text : b.items.join(' ')))
    .join(' ');
  return [c.h1a, c.h1b, c.sub, blocks, c.checklistTitle, c.checklist.join(' '), c.faq.map((f) => `${f.q} ${f.a}`).join(' ')].join(' ');
}

// Build-time guard: owner rules for these pages. No carrier or staff names
// (other than the default author), no price-superiority claims.
const FORBIDDEN = /allstate|castle key|citizens|brenda|quiroz|emily|senise|cheap|lowest|discount|descuento|más barato|скидк|дешев|дешёв/i;
const LANGS: Lang[] = ['en', 'es', 'ru'];
const seen = new Set<string>();
for (const p of CITY_PAGES) {
  if (seen.has(p.path)) throw new Error(`city: duplicate path ${p.path}`);
  seen.add(p.path);
  if (!HERO_IMAGES[p.heroImage]) throw new Error(`city: unknown hero image ${p.heroImage} on ${p.path}`);
  for (const l of LANGS) {
    const c = p.copy[l];
    const text = `${c.metaTitle} ${c.metaDesc} ${cityPageText(c)}`;
    const m = text.match(FORBIDDEN);
    if (m) throw new Error(`city: forbidden term "${m[0]}" in ${p.path} (${l})`);
    if (c.faq.length < 4) throw new Error(`city: ${p.path} (${l}) needs at least 4 FAQs`);
    if (c.metaTitle.length > 65) throw new Error(`city: ${p.path} (${l}) metaTitle too long (${c.metaTitle.length})`);
    if (c.metaDesc.length > 160) throw new Error(`city: ${p.path} (${l}) metaDesc too long (${c.metaDesc.length})`);
    const words = cityPageText(c).split(/\s+/).filter(Boolean).length;
    if (words < 700) throw new Error(`city: ${p.path} (${l}) is short (${words} words)`);
  }
}
