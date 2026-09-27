import Image from 'next/image';
import type { HeroImage } from '@/content/hero';

// Full-bleed photo behind a hero section (daily rotation). Server component:
// the image is chosen during the ISR render, so the HTML already contains the
// right <img> (preloaded via `priority`) and nothing swaps on the client.
// The parent section needs the `hero--photo` class (position + stacking).
export default function HeroBackdrop({ image, alt }: { image: HeroImage; alt: string }) {
  return (
    <div className="hero-backdrop">
      <Image src={image.src} alt={alt} fill priority sizes="100vw" quality={70} className="hero-backdrop-img" />
    </div>
  );
}
