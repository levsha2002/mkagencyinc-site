// Blog registry. To publish a post: add a file in ./posts/ that exports
// `post: BlogPost`, then import it and add it to this array. Order doesn't
// matter (the index sorts by datePublished). See content/blog/README.md.
import type { BlogPost } from './types';
import { post as citizensFlood2027 } from './posts/citizens-flood-insurance-requirement-2027';
import { post as citizensTakeoutOffer } from './posts/citizens-takeout-offer';

export const posts: BlogPost[] = [
  citizensFlood2027,
  citizensTakeoutOffer,
];
