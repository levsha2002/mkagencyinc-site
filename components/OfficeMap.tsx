'use client';

import { useState } from 'react';

const MAP_SRC =
  'https://www.google.com/maps?q=33550+S+Dixie+Hwy+Suite+102,+Florida+City,+FL+33034&z=17&output=embed';

/** The Google Maps embed pulls in maps.googleapis.com as soon as the iframe
 *  is in view. On /team that iframe sits near the top of a phone screen and
 *  was loading during first paint. The map stays a button until asked for. */
export default function OfficeMap({ label, title }: { label: string; title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="office-map-embed">
      {open ? (
        <iframe title={title} src={MAP_SRC} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <button type="button" className="office-map-open" onClick={() => setOpen(true)}>
          📍 {label}
        </button>
      )}
    </div>
  );
}
