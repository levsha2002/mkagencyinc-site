// Hero headline/subheadline pools, one file per page type. See ../README.md.
import type { HeroCopyPool } from './types';
import { home } from './home';
import { auto } from './auto';
import { homeowners } from './homeowners';
import { condo } from './condo';
import { commercial } from './commercial';
import { life } from './life';
import { coverage } from './coverage';

export type { HeroCopy, HeroCopyPool } from './types';

export const HERO_COPY = { home, auto, homeowners, condo, commercial, life, coverage } satisfies Record<string, HeroCopyPool>;
