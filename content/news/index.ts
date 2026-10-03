// News registry. To publish an edition: add a file in ./posts/ that exports
// `edition: NewsEdition`, then import it and add it to this array. Order doesn't
// matter (the index sorts by datePublished, newest first). See content/news/README.md.
import type { NewsEdition } from './types';
import { edition as e20260926 } from './posts/2026-09-26-citizens-rate-filings-king-tides';
import { edition as e20261002 } from './posts/2026-10-02-rental-rates-driving-citizens-agents';
import { edition as e20261003 } from './posts/2026-10-03-life-coa-king-tides-figa-citizens';

export const editions: NewsEdition[] = [
  e20260926,
  e20261002,
  e20261003,
];
