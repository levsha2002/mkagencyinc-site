'use client';

import { useEffect, useRef, useState } from 'react';

const CATEGORIES: { key: string; label: string }[] = [
  { key: 'auto', label: 'Auto' },
  { key: 'home', label: 'Home' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'life', label: 'Life' },
  { key: 'specialty', label: 'Other' },
];

export default function InsuranceCategoryNav() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    CATEGORIES.forEach((c) => {
      const el = document.getElementById(c.key);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (key: string) => {
    document.getElementById(key)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="insurance-cat-nav" aria-label="Jump to insurance category">
      <ul>
        {CATEGORIES.map((c) => (
          <li key={c.key}>
            <button
              type="button"
              className={active === c.key ? 'on' : ''}
              onClick={() => scrollTo(c.key)}
            >
              {c.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
