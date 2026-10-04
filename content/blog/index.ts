// Blog registry. To publish a post: add a file in ./posts/ that exports
// `post: BlogPost`, then import it and add it to this array. Order doesn't
// matter (the index sorts by datePublished). See content/blog/README.md.
import type { BlogPost } from './types';
import { post as citizensFlood2027 } from './posts/citizens-flood-insurance-requirement-2027';
import { post as citizensTakeoutOffer } from './posts/citizens-takeout-offer';
import { post as uninsuredMotoristFlorida } from './posts/uninsured-motorist-coverage-florida';
import { post as sr22FloridaGuia } from './posts/sr22-florida-guia';
import { post as nonOwnerSr22Florida } from './posts/non-owner-sr22-florida';
import { post as windMitigationInspectionFlorida } from './posts/wind-mitigation-inspection-florida';
import { post as motorcycleHelmetLaw } from './posts/florida-motorcycle-helmet-law-medical-coverage';
import { post as jetSkiRentalGuests } from './posts/jet-ski-rental-guest-drivers-florida';
import { post as boatHurricanePlan } from './posts/hurricane-plan-for-your-boat-florida';
import { post as atvUtvRoads } from './posts/atv-utv-public-roads-florida';
import { post as golfCartRoads } from './posts/golf-cart-rules-florida-public-roads';
import { post as autocycleEndorsement } from './posts/autocycle-motorcycle-endorsement-florida';
import { post as lifeIncomeReplacement } from './posts/life-insurance-income-replacement-florida';

export const posts: BlogPost[] = [
  citizensFlood2027,
  citizensTakeoutOffer,
  uninsuredMotoristFlorida,
  sr22FloridaGuia,
  nonOwnerSr22Florida,
  windMitigationInspectionFlorida,
  motorcycleHelmetLaw,
  jetSkiRentalGuests,
  boatHurricanePlan,
  atvUtvRoads,
  golfCartRoads,
  autocycleEndorsement,
  lifeIncomeReplacement,
];
