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
import { edition as e20261011 } from './posts/2026-10-11-citizens-reopens-emergency-expands-oir-data-call';
import { edition as e20261012 } from './posts/2026-10-12-dfs-hub-deductible-closes-king-tides';
import { edition as e20261013 } from './posts/2026-10-13-pensacola-hub-oir-crf-bridge-loan';
import { edition as e20261014 } from './posts/2026-10-14-dfast-claims-flhsmv-fema';
import { edition as e20261015 } from './posts/2026-10-15-escambia-pda-oir-crf-hubs-fdacs';
import { edition as e20261017 } from './posts/2026-10-17-major-disaster-rv-citizens';
import { edition as e20261018 } from './posts/2026-10-18-rip-currents-flood-panels-isaias-losses';
import { edition as e20261019 } from './posts/2026-10-19-flhsmv-breach-coastal-low-school-bus';
import { edition as e20261020 } from './posts/2026-10-20-isaias-claims-king-tides-citizens-payments';
import { edition as e20261021 } from './posts/2026-10-21-weekend-flood-threat-public-adjusters-isaias-claims';
import { edition as e20261022 } from './posts/2026-10-22-king-tide-peak-josephine-unlicensed-sellers';

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
  e20261011,
  e20261012,
  e20261013,
  e20261014,
  e20261015,
  e20261017,
  e20261018,
  e20261019,
  e20261020,
  e20261021,
  e20261022,
];
