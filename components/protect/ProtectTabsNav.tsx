import Link from 'next/link';
import { TOPICS, PROTECT_PATH, topicPath, type Lang, type TopicSlug } from '@/content/pages/protect';
import { PROTECT_UI } from './ui';
import s from './Protect.module.css';

/** Topic tabs shown at the top of every protection page (links, so each tab
 *  is its own URL). `current` = topic slug, or 'overview' for the hub. */
export default function ProtectTabsNav({ lang, current }: { lang: Lang; current: TopicSlug | 'overview' }) {
  const ui = PROTECT_UI[lang];
  const items = [
    { key: 'overview', href: `/${lang}${PROTECT_PATH}`, label: ui.overview },
    ...TOPICS.map((p) => ({ key: p.slug, href: `/${lang}${topicPath(p.slug)}`, label: p.t[lang].tab })),
  ];
  return (
    <div className={s.tabsWrap}>
      <nav className={`container ${s.tabsNav}`} aria-label={ui.tabsAria}>
        {items.map((it) => (
          <Link key={it.key} href={it.href} className={s.tabLink} aria-current={it.key === current ? 'page' : undefined}>
            <span aria-hidden>{ui.tabIcons[it.key]}</span> {it.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
