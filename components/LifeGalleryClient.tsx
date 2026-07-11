'use client';

import { useState } from 'react';

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
            <img src={src} alt="" loading="lazy" />
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
