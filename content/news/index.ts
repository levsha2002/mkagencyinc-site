// News registry. To publish an edition: add a file in ./posts/ that exports
// `edition: NewsEdition`, then import it and add it to this array. Order doesn't
// matter (the index sorts by datePublished, newest first). See content/news/README.md.
import type { NewsEdition } from './types';
import { edition as e20260926 } from './posts/2026-09-26-citizens-rate-filings-king-tides';
import { edition as e20261002 } from './posts/2026-10-02-rental-rates-driving-citizens-agents';
import { edition as e20261003 } from './posts/2026-10-03-life-coa-king-tides-figa-citizens';
import { edition as e20261004 } from './posts/2026-10-04-homeowner-poll-nfip-cmv';
import { edition as e20261006 } from './posts/2026-10-06-citizens-forms-comp-hearing-claims';
import { edition as e20261007 } from './posts/2026-10-07-isaias-citizens-battery-appraisal';
import { edition as e20261008 } from './posts/2026-10-08-isaias-binding-refills-affiliates-flood';
import { edition as e20261009 } from './posts/2026-10-09-isaias-major-deductible-citizens-claims';
import { edition as e20261010 } from './posts/2026-10-10-isaias-landfall-fema-dfs-claim-deadlines';

export const editions: NewsEdition[] = [
  e20260926,
  e20261002,
  e20261003,
  e20261004,
  e20261006,
  e20261007,
  e20261008,
  e20261009,
  e20261010,
];
