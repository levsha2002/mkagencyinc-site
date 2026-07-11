import fs from 'fs';
import path from 'path';
import LifeGalleryClient from './LifeGalleryClient';

const VALID_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function getLifePhotos(): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'life');
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => VALID_EXT.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/images/life/${f}`);
  } catch {
    // Folder doesn't exist yet or is empty — gallery just won't render.
    return [];
  }
}

export default function LifeGallery() {
  const photos = getLifePhotos();
  if (photos.length === 0) return null;

  return (
    <section className="life-gallery">
      <div className="container">
        <p className="kicker">Life at M&amp;K</p>
        <h2>On the road, at the beach, giving back</h2>
        <p className="life-gallery-sub">
          A look at our team outside the office — motorcycles, community events, and
          everyday moments.
        </p>
        <LifeGalleryClient photos={photos} />
      </div>
    </section>
  );
}
