import { Fragment } from 'react';

// Renders plain text with bare https:// URLs turned
// into real links. Trailing sentence punctuation stays outside the link.
// Used by the legal pages, whose copy lives as plain strings in
// lib/legal-content.ts.
const URL_RE = /(https?:\/\/[^\s]+?)(?=[.,;:!?)\u201d"']*(?:\s|$))/g;

export default function LinkifiedText({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of Array.from(text.matchAll(URL_RE))) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    const label = m[0];
    const href = label;
    out.push(
      <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ overflowWrap: 'anywhere' }}>
        {label}
      </a>,
    );
    last = i + label.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <Fragment>{out}</Fragment>;
}
