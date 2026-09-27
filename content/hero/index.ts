// Daily hero rotation: which image + headline each page shows today.
// Pools: ./copy/<type>.ts (text) and ./images.ts (photos). See ./README.md.
import type { Lang } from '../types';
import { pickDaily, rotationDay } from '@/lib/rotation';
import { HERO_COPY, type HeroCopy } from './copy';
import { HERO_IMAGES, type HeroImage, type HeroImageKey } from './images';

export type HeroType = keyof typeof HERO_COPY;
export type { HeroCopy, HeroImage };

/** Image pool per page type. Order = rotation order (index 0 = ?day=0). */
export const HERO_IMAGE_POOLS: Record<HeroType, HeroImageKey[]> = {
  home: [
    'legacy-porch-family', 'legacy-family-home', 'family-10', 'legacy-home-sunset', 'family-11', 'legacy-keys-bridge',
    'home-03', 'family-03', 'legacy-agent-office', 'condo-07', 'auto-02', 'family-08', 'home-07', 'commercial-04',
    'condo-08', 'family-01',
  ],
  auto: [
    'legacy-sunset-highway', 'auto-02', 'auto-05', 'legacy-keys-bridge', 'auto-01', 'auto-06', 'auto-09', 'auto-04',
    'legacy-parked-cars', 'auto-10', 'auto-03', 'auto-08', 'auto-11', 'auto-12', 'auto-07',
  ],
  homeowners: [
    'legacy-home-sunset', 'home-01', 'home-03', 'legacy-family-home', 'home-02', 'home-11', 'home-06', 'home-04',
    'legacy-palm-street', 'home-07', 'home-12', 'home-08', 'home-05', 'home-09', 'home-10',
  ],
  condo: [
    'legacy-condo-building', 'condo-02', 'condo-08', 'condo-01', 'condo-10', 'condo-05', 'condo-09', 'condo-14',
    'condo-06', 'condo-03', 'condo-11', 'condo-12', 'condo-15', 'condo-07', 'condo-04', 'condo-13', 'condo-16',
  ],
  commercial: [
    'commercial-04', 'commercial-01', 'commercial-16', 'legacy-agent-office', 'commercial-14', 'commercial-02',
    'commercial-08', 'commercial-12', 'commercial-17', 'commercial-05', 'commercial-10', 'commercial-15', 'commercial-03',
    'commercial-09', 'commercial-07', 'commercial-13', 'commercial-11', 'commercial-06',
  ],
  life: [
    'legacy-porch-family', 'family-11', 'family-03', 'family-12', 'legacy-beach-family', 'family-09', 'family-01',
    'family-04', 'family-10', 'legacy-family-table', 'family-08', 'family-05', 'family-14', 'family-02', 'family-06',
    'family-07', 'family-13',
  ],
  coverage: [
    'legacy-family-home', 'family-10', 'home-03', 'legacy-agent-office', 'family-12', 'home-11', 'condo-08', 'auto-02',
    'legacy-porch-family', 'commercial-04', 'family-08', 'home-01', 'family-14', 'legacy-family-table', 'family-02',
  ],
};

export const MIN_VARIANTS = 14;

// Build-time guard: the build fails if a pool is too small, an image key is
// unknown, or a forbidden term sneaks into the copy.
const FORBIDDEN = /cheap|lowest|discount|descuento|скидк|дешев|дешёв|más barato|save \$|\d+\s?%/i;
for (const type of Object.keys(HERO_COPY) as HeroType[]) {
  for (const lang of ['en', 'es', 'ru'] as Lang[]) {
    const pool = HERO_COPY[type][lang];
    if (pool.length < MIN_VARIANTS) throw new Error(`hero: ${type}/${lang} has ${pool.length} variants (< ${MIN_VARIANTS})`);
    for (const v of pool) {
      const text = `${v.lead ?? ''} ${v.h} ${v.sub}`;
      if (FORBIDDEN.test(text)) throw new Error(`hero: forbidden term in ${type}/${lang}: "${v.h}"`);
      if (type === 'home' && !v.lead) throw new Error(`hero: home/${lang} variant "${v.h}" needs a lead line`);
    }
  }
  const imgs = HERO_IMAGE_POOLS[type];
  if (imgs.length < MIN_VARIANTS) throw new Error(`hero: ${type} has ${imgs.length} images (< ${MIN_VARIANTS})`);
  for (const k of imgs) if (!HERO_IMAGES[k]) throw new Error(`hero: unknown image "${k}" in ${type}`);
}

function asLang(lang: string): Lang {
  return lang === 'es' || lang === 'ru' ? lang : 'en';
}

export interface DailyHero {
  copy: HeroCopy;
  image: HeroImage;
  alt: string;
  /** Rotation counter used (Eastern day number, or the ?day= override). */
  day: number;
}

/** Today's hero for a page type, in one language. Server-only (reads the date). */
export function dailyHero(type: HeroType, lang: string): DailyHero {
  const l = asLang(lang);
  const image = HERO_IMAGES[pickDaily(HERO_IMAGE_POOLS[type])];
  return { copy: pickDaily(HERO_COPY[type][l]), image, alt: image.alt[l], day: rotationDay() };
}
