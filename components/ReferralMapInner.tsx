'use client';

import { useState, useMemo } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { referralBusinesses, CATEGORIES } from '@/lib/referral-businesses';
import 'leaflet/dist/leaflet.css';

// This file is only ever loaded client-side via next/dynamic (ssr: false) in
// ReferralMap.tsx, since Leaflet touches `window` on import and would crash
// during server-side rendering. Because the imports here are normal static
// imports (not wrapped in dynamic() individually), TypeScript sees the real
// react-leaflet prop types with no casting needed.

// Leaflet's default marker icon points at relative image paths that Next.js's
// bundler doesn't resolve (404s on marker-icon.png / marker-shadow.png in the
// console). Point the default icon at copies served from /public/leaflet instead.
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});
export default function ReferralMapInner({ searchPlaceholder }: { searchPlaceholder?: string }) {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return referralBusinesses.filter((b) => {
      const matchesCategory = category === 'All' || b.category === category;
      const matchesSearch =
        search.trim() === '' ||
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.city.toLowerCase().includes(search.toLowerCase()) ||
        b.address.toLowerCase().includes(search.toLowerCase()) ||
        b.zip.includes(search.trim());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="referral-map-card">
      <div className="referral-map-toolbar">
        <input
          placeholder={searchPlaceholder || 'Search by business name, address, city, or ZIP code...'}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="referral-map-filters">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            className={category === c ? 'on' : ''}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="referral-map-container">
        <MapContainer
          {...({
            center: [27.8, -81.5],
            zoom: 6,
            minZoom: 6,
            scrollWheelZoom: true,
            maxBounds: [
              [24.3, -87.7], // SW corner — south of Key West, west of the panhandle
              [31.1, -79.8], // NE corner — north of the FL/GA border, east of Palm Beach
            ],
            maxBoundsViscosity: 1.0, // hard stop — can't drag the map past Florida
            style: { height: '100%', width: '100%' },
          } as any)}
        >
          <TileLayer
            {...({
              url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
              attribution: '&copy; OpenStreetMap contributors',
            } as any)}
          />
          {filtered.map((b) => (
            <Marker key={b.slug} {...({ position: [b.lat, b.lng] } as any)}>
              <Popup>
                <div className="referral-popup">
                  {b.cardImage && (
                    <img src={b.cardImage} alt={`${b.name} business card`} className="referral-popup-card" />
                  )}
                  <strong>{b.name}</strong>
                  <br />
                  <span className="referral-badge">✓ Verified by M&amp;K Agency</span>
                  <br />
                  {b.category} · {b.address}, {b.city} {b.zip}
                  <br />
                  {b.description}
                  <br />
                  <a href={`tel:${b.phone.replace(/[^0-9+]/g, '')}`}>{b.phone}</a>
                  {b.website && (
                    <>
                      <br />
                      <a href={b.website} target="_blank" rel="noopener noreferrer">
                        Visit website →
                      </a>
                    </>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {filtered.length === 0 && (
        <p style={{ padding: '16px 20px', color: 'var(--muted)' }}>
          No businesses match that search yet — check back soon, or recommend one below.
        </p>
      )}
    </div>
  );
}
