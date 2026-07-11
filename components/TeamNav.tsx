'use client';

import { useEffect, useRef, useState } from 'react';
import type { TeamMember } from '@/lib/team-data';

export default function TeamNav({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState(members[0]?.slug);
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
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    members.forEach((m) => {
      const el = document.getElementById(m.slug);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [members]);

  const scrollTo = (slug: string) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="team-nav" aria-label="Jump to team member">
      <ul>
        {members.map((m) => (
          <li key={m.slug}>
            <button
              type="button"
              className={active === m.slug ? 'on' : ''}
              onClick={() => scrollTo(m.slug)}
            >
              {m.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
