'use client';

import { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { referralBusinesses, CATEGORIES } from '@/lib/referral-businesses';
import 'leaflet/dist/leaflet.css';

// This file is only ever loaded client-side via next/dynamic (ssr: false) in
// ReferralMap.tsx, since Leaflet touches `window` on import and would crash
// during server-side rendering. Because the imports here are normal static
// imports (not wrapped in dynamic() individually), TypeScript sees the real
// react-leaflet prop types with no casting needed.
export default function ReferralMapInner() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return referralBusinesses.filter((b) => {
      const matchesCategory = category === 'All' || b.category === category;
      const matchesSearch =
        search.trim() === '' ||
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.city.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="referral-map-card">
      <div className="referral-map-toolbar">
        <input
          placeholder="Search by business name or city..."
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
            scrollWheelZoom: true,
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
                <strong>{b.name}</strong>
                <br />
                <span className="referral-badge">✓ Verified by M&amp;K Agency</span>
                <br />
                {b.category} · {b.city}
                <br />
                {b.description}
                <br />
                <a href={`tel:${b.phone.replace(/[^0-9+]/g, '')}`}>{b.phone}</a>
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
