import Link from 'next/link';
import { latestArticle } from '@/lib/latest-article';
import { formatDate } from '@/lib/blog';
import { easternDate } from '@/lib/rotation';

// Home page block: the newest news edition or blog article in this language.
// Renders nothing if the language has no article yet.
const T = {
  en: { today: 'Today’s article', latest: 'Latest article', news: 'Florida insurance news', blog: 'Insurance guide', read: 'Read the article', all: 'All news' },
  es: { today: 'Artículo de hoy', latest: 'Último artículo', news: 'Noticias de seguros en Florida', blog: 'Guía de seguros', read: 'Leer el artículo', all: 'Todas las noticias' },
  ru: { today: 'Статья дня', latest: 'Свежая статья', news: 'Страховые новости Флориды', blog: 'Гид по страхованию', read: 'Читать статью', all: 'Все новости' },
} as const;

export default function TodaysArticle({ lang }: { lang: string }) {
  const a = latestArticle(lang);
  if (!a) return null;
  const t = T[(lang === 'es' || lang === 'ru' ? lang : 'en') as keyof typeof T];
  const isToday = a.date === easternDate();
  return (
    <section className="section todays-article" aria-labelledby="todays-article-title">
      <div className="container">
        <div className="ta-card">
          <p className="ta-kicker">
            <span className="ta-dot" aria-hidden /> {isToday ? t.today : t.latest}
            <span className="ta-sep" aria-hidden>·</span>
            <span className="ta-kind">{a.kind === 'news' ? t.news : t.blog}</span>
          </p>
          <h2 id="todays-article-title" className="ta-title">
            <Link href={a.href}>{a.title}</Link>
          </h2>
          <p className="ta-meta">
            <time dateTime={a.date}>{formatDate(a.date, lang)}</time>
          </p>
          <p className="ta-excerpt">{a.excerpt}</p>
          <div className="ta-actions">
            <Link href={a.href} className="cta ta-read">{t.read} →</Link>
            {a.kind === 'news' && <Link href={`/${lang}/news`} className="ta-all">{t.all}</Link>}
          </div>
        </div>
      </div>
    </section>
  );
}
