import Link from 'next/link';
import { Fragment } from 'react';

// Renders the tiny inline markup used in content/*: [text](href) and **bold**.
// The href may contain one level of balanced parentheses, e.g. eCFR "Appendix%20A(1)%20to%20Part%2061".
const HREF = String.raw`((?:[^()\s]|\([^()\s]*\))+)`;
const TOKEN = new RegExp(String.raw`\[([^\]]+)\]\(` + HREF + String.raw`\)|\*\*([^*]+)\*\*`, 'g');
const LINK = new RegExp(String.raw`\[([^\]]+)\]\(` + HREF + String.raw`\)`, 'g');

export function RichText({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) out.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>);
    if (m[1] !== undefined) {
      const href = m[2];
      out.push(
        href.startsWith('/') || href.startsWith('#') ? (
          <Link key={i++} href={href}>{m[1]}</Link>
        ) : (
          <a key={i++} href={href} target="_blank" rel="noopener noreferrer">{m[1]}</a>
        )
      );
    } else {
      out.push(<strong key={i++}>{m[3]}</strong>);
    }
    last = TOKEN.lastIndex;
  }
  if (last < text.length) out.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}

/** Plain text version (for JSON-LD and meta). */
export function stripInline(text: string): string {
  return text.replace(LINK, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
}
