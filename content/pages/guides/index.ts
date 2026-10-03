import type { Lang } from '../../types';
import type { GuidePage, GuidePageCopy } from './types';
import { AGENT_HOMESTEAD } from './insurance-agent-homestead';
import { AGENT_KENDALL } from './insurance-agent-kendall';
import { WIND_DEDUCTIBLE } from './florida-home-insurance-wind-deductible';
import { AFTER_ACCIDENT } from './auto-insurance-after-accident-miami-dade';
import { COMMERCIAL_FC } from './commercial-insurance-florida-city';
import { RUSSIAN_AGENT } from './russian-speaking-insurance-agent-miami';
import { HERO_IMAGES } from '../../hero/images';

export type { GuidePage, GuidePageCopy } from './types';

// Local agent hubs and guides. Routes live in app/[lang]/<slug>/.
export const GUIDE_PAGES: GuidePage[] = [
  AGENT_HOMESTEAD, AGENT_KENDALL, WIND_DEDUCTIBLE, AFTER_ACCIDENT, COMMERCIAL_FC, RUSSIAN_AGENT,
];

export function getGuidePage(path: string): GuidePage {
  const p = GUIDE_PAGES.find((c) => c.path === path);
  if (!p) throw new Error(`guide page not found: ${path}`);
  return p;
}

/** Plain text of everything a visitor reads in the main body (for checks/word counts). */
export function guidePageText(c: GuidePageCopy): string {
  const blocks = [...c.intro, ...c.body, ...c.office]
    .map((b) => ('text' in b ? b.text : b.items.join(' ')))
    .join(' ');
  return [c.h1a, c.h1b, c.answer, blocks, c.checklistTitle, c.checklist.join(' '), c.faq.map((f) => `${f.q} ${f.a}`).join(' '), c.related.map((r) => r.label).join(' ')].join(' ');
}

// Build-time guard (owner rules, see types.ts). Citizens is allowed here.
const FORBIDDEN = /allstate|castle key|natgen|national general|next insurance|\bargo\b|progressive|geico|state farm|brenda|quiroz|emily|senise|cheap|lowest|\bbest\b|guarantee|discount|saving|descuento|ahorr|más barato|garantiz|mejor precio|скидк|дешев|дешёв|экономи|гарантир|лучш(ий|ая|ее|ие|их)|el mejor|la mejor|los mejores|workers.?\s?comp|inland marine|commercial property|LICENSE\/NPN/i;
const LANGS: Lang[] = ['en', 'es', 'ru'];
const seen = new Set<string>();
for (const p of GUIDE_PAGES) {
  if (seen.has(p.path)) throw new Error(`guides: duplicate path ${p.path}`);
  seen.add(p.path);
  if (!HERO_IMAGES[p.heroImage]) throw new Error(`guides: unknown hero image ${p.heroImage} on ${p.path}`);
  for (const l of LANGS) {
    const c = p.copy[l];
    const text = `${c.metaTitle} ${c.metaDesc} ${guidePageText(c)}`;
    const m = text.match(FORBIDDEN);
    if (m) throw new Error(`guides: forbidden term "${m[0]}" in ${p.path} (${l})`);
    if (c.faq.length < 4) throw new Error(`guides: ${p.path} (${l}) needs at least 4 FAQs`);
    if (c.metaTitle.length > 60) throw new Error(`guides: ${p.path} (${l}) metaTitle too long (${c.metaTitle.length})`);
    if (c.metaDesc.length > 160) throw new Error(`guides: ${p.path} (${l}) metaDesc too long (${c.metaDesc.length})`);
    if (l === 'ru' && c.related.some((r) => r.path === '/flood-insurance-homestead-fl')) throw new Error(`guides: ${p.path} (ru) links to an EN/ES-only page`);
  }
}
