import { car } from './car';
import { home } from './home';
import { life } from './life';
import { umbrella } from './umbrella';
import { HUB } from './hub';
import { FIGURES } from './figures';
import { SOURCES } from './sources';
import type { TopicPage } from './types';

export * from './types';
export { HUB };
export { SOURCES, sourceList } from './sources';
export { FIGURES, figureSrc } from './figures';

export const TOPICS: TopicPage[] = [car, home, life, umbrella];

export function getTopic(slug: string): TopicPage | undefined {
  return TOPICS.find((p) => p.slug === slug);
}

export { PROTECT_PATH, topicPath } from './types-paths';

// Build-time guard: the learning section must never name carriers, staff or
// price promises, and must not mention dealers/lenders/banks (owner's rules).
// Any hit fails `next build`.
const FORBIDDEN =
  /allstate|castle key|citizens|geico|state farm|progressive|nationwide|liberty mutual|travelers|usaa|farmers|brenda|quiroz|emily|senise|cheap|lowest|discount|save money|savings on|descuento|más barato|economic[oa]s? precio|скидк|дешев|дешёв|dealer|lender|\bbank|concesionario|prestamista|banco|дилер|кредитор|банк|attorney|abogado|адвокат|lawyer/i;
for (const doc of [...TOPICS.map((t) => t.t), HUB, FIGURES, SOURCES]) {
  const text = JSON.stringify(doc);
  const m = text.match(FORBIDDEN);
  if (m) throw new Error(`protect content: forbidden term "${m[0]}"`);
}
