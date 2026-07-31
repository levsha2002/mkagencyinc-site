'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LifeGalleryClient({ photos }: { photos: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="life-masonry">
        {photos.map((src) => (
          <button
            key={src}
            type="button"
            className="life-thumb"
            onClick={() => setActive(src)}
            aria-label="View photo larger"
          >
            {/* Masonry: CSS sets width 100% / height auto, so these numbers
                only drive which resized variants next/image produces. */}
            <Image src={src} alt="" width={600} height={800} sizes="(max-width: 700px) 50vw, 300px" />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="life-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="life-lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img src={active} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
