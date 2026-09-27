import type { Lang } from '../../types';

export interface HeroCopy {
  /** First line of the H1 (home page only). */
  lead?: string;
  /** Headline (see ./index.ts for how each page type uses it). */
  h: string;
  /** Subheadline paragraph. */
  sub: string;
}

export type HeroCopyPool = Record<Lang, HeroCopy[]>;

export const L = (lead: string, h: string, sub: string): HeroCopy => ({ lead, h, sub });
export const V = (h: string, sub: string): HeroCopy => ({ h, sub });
