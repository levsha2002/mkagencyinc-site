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

export const posts: BlogPost[] = [
  citizensFlood2027,
  citizensTakeoutOffer,
  uninsuredMotoristFlorida,
  sr22FloridaGuia,
  nonOwnerSr22Florida,
  windMitigationInspectionFlorida,
];
