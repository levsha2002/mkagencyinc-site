'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// True while any lead form ([data-lead-form]) is on screen or a form field has
// focus (on phones the keyboard is then open). The floating chat / Talk-to-
// Agent buttons hide themselves on small screens while this is true, so they
// never sit on top of the consent text or the submit button.
export function useLeadFormInView() {
  const pathname = usePathname();
  const [inView, setInView] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        setInView(visible.size > 0);
      },
      { threshold: 0 },
    );
    const scan = () => document.querySelectorAll('[data-lead-form]').forEach((el) => io.observe(el));
    scan();
    // Client-rendered forms can mount a moment after navigation.
    const t = window.setTimeout(scan, 600);
    return () => {
      window.clearTimeout(t);
      io.disconnect();
      setInView(false);
    };
  }, [pathname]);

  useEffect(() => {
    const isField = (el: EventTarget | null) =>
      el instanceof HTMLElement &&
      el.matches('input:not([type=checkbox]):not([type=radio]), textarea, select') &&
      !el.closest('.mk-widget, .talk-now');
    const onIn = (e: FocusEvent) => { if (isField(e.target)) setTyping(true); };
    const onOut = (e: FocusEvent) => { if (isField(e.target)) setTyping(false); };
    document.addEventListener('focusin', onIn);
    document.addEventListener('focusout', onOut);
    return () => {
      document.removeEventListener('focusin', onIn);
      document.removeEventListener('focusout', onOut);
    };
  }, []);

  return inView || typing;
}
