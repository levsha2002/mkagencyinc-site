'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import s from './Protect.module.css';

export type HubTabItem = {
  slug: string;
  label: string;
  icon: string;
  title: string;
  points: string[];
  more: string;
  href: string;
  img: { src: string; width: number; height: number; alt: string };
};

// Accessible tabs (WAI-ARIA tabs pattern): arrow keys / Home / End move
// between tabs, #<slug> in the URL opens that tab. All panels are in the HTML
// (hidden ones use the `hidden` attribute), so the content is crawlable.
export default function HubTabs({ items, label }: { items: HubTabItem[]; label: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const fromHash = () => {
      const i = items.findIndex((x) => `#${x.slug}` === window.location.hash);
      if (i >= 0) setActive(i);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, [items]);

  const select = useCallback((i: number, focus = false) => {
    setActive(i);
    if (focus) refs.current[i]?.focus();
    if (typeof window !== 'undefined') window.history.replaceState(null, '', `#${items[i].slug}`);
  }, [items]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = items.length;
    let next = -1;
    if (e.key === 'ArrowRight') next = (i + 1) % n;
    else if (e.key === 'ArrowLeft') next = (i - 1 + n) % n;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = n - 1;
    if (next >= 0) { e.preventDefault(); select(next, true); }
  };

  return (
    <div>
      <div role="tablist" aria-label={label} className={s.tablist}>
        {items.map((it, i) => (
          <button
            key={it.slug}
            ref={(el) => { refs.current[i] = el; }}
            role="tab"
            type="button"
            id={`tab-${it.slug}`}
            aria-selected={i === active}
            aria-controls={`panel-${it.slug}`}
            tabIndex={i === active ? 0 : -1}
            className={s.tabBtn}
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span aria-hidden>{it.icon}</span> {it.label}
          </button>
        ))}
      </div>
      {items.map((it, i) => (
        <div
          key={it.slug}
          role="tabpanel"
          id={`panel-${it.slug}`}
          aria-labelledby={`tab-${it.slug}`}
          hidden={i !== active}
          tabIndex={0}
          className={s.panel}
        >
          <div>
            <h3>{it.title}</h3>
            <ul>{it.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <Link className={`cta ${s.panelMore}`} href={it.href}>{it.more} →</Link>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={it.img.src} width={it.img.width} height={it.img.height} alt={it.img.alt} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
        </div>
      ))}
    </div>
  );
}
