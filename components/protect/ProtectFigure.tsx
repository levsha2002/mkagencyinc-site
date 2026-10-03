import { FIGURES, figureSrc, type FigureKey, type Lang } from '@/content/pages/protect';
import s from './Protect.module.css';

/** Localized SVG illustration with alt text and a short caption. */
export default function ProtectFigure({ lang, name, hero = false, priority = false }: { lang: Lang; name: FigureKey; hero?: boolean; priority?: boolean }) {
  const f = FIGURES[name];
  const { src, width, height } = figureSrc(name, lang);
  return (
    <figure className={hero ? s.heroFig : s.figure}>
      {/* SVG with text inside; plain <img> keeps it crisp at any size. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} width={width} height={height} alt={f.alt[lang]} loading={priority ? 'eager' : 'lazy'} decoding="async" />
      {!hero && <figcaption>{f.caption[lang]}</figcaption>}
    </figure>
  );
}
