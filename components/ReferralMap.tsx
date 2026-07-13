'use client';

import dynamic from 'next/dynamic';

// Load the real map only in the browser — Leaflet touches `window` on
// import, which crashes during server-side rendering/build.
const ReferralMapInner = dynamic(() => import('./ReferralMapInner'), {
  ssr: false,
  loading: () => (
    <div className="referral-map-card" style={{ padding: 40, textAlign: 'center', color: 'var(--muted)' }}>
      Loading map...
    </div>
  ),
});

export default function ReferralMap({ searchPlaceholder }: { searchPlaceholder?: string }) {
  return <ReferralMapInner searchPlaceholder={searchPlaceholder} />;
}
