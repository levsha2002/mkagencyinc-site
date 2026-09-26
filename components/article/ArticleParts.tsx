import Link from 'next/link';
import type { Block, Faq, Source } from '@/content/types';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import { RichText } from './RichText';
import s from './Article.module.css';

type Lang = 'en' | 'es' | 'ru';

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className={s.body}>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i}><RichText text={b.text} /></p>;
          case 'h2':
            return <h2 key={i}><RichText text={b.text} /></h2>;
          case 'h3':
            return <h3 key={i}><RichText text={b.text} /></h3>;
          case 'ul':
            return <ul key={i}>{b.items.map((it, j) => <li key={j}><RichText text={it} /></li>)}</ul>;
          case 'ol':
            return <ol key={i}>{b.items.map((it, j) => <li key={j}><RichText text={it} /></li>)}</ol>;
          case 'callout':
            return (
              <div key={i} className={s.callout}>
                {b.title && <p className={s.calloutTitle}>{b.title}</p>}
                <p><RichText text={b.text} /></p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

const CTA: Record<Lang, { h: string; p: string; quote: string; call: string; small: string }> = {
  en: {
    h: 'Talk it through with a licensed agent',
    p: 'M&K Agency is a local office in Florida City serving Homestead and South Miami-Dade, in English, Spanish and Russian.',
    quote: 'Request a quote',
    call: `Call ${PHONE_DISPLAY}`,
    small: '33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 · Mon–Fri 9–6, Saturday by appointment',
  },
  es: {
    h: 'Hable con un agente licenciado',
    p: 'M&K Agency es una oficina local en Florida City que atiende a Homestead y todo el sur de Miami-Dade, en español, inglés y ruso.',
    quote: 'Pida una cotización',
    call: `Llame al ${PHONE_DISPLAY}`,
    small: '33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 · Lunes a viernes de 9 a 6, sábados con cita',
  },
  ru: {
    h: 'Обсудите с лицензированным агентом',
    p: 'M&K Agency — местный офис во Florida City, обслуживаем Homestead и юг Miami-Dade на английском, испанском и русском.',
    quote: 'Запросить расчёт',
    call: `Звоните ${PHONE_DISPLAY}`,
    small: '33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 · Пн–Пт 9–6, в субботу по записи',
  },
};

export function ArticleCta({ lang }: { lang: Lang }) {
  const c = CTA[lang];
  return (
    <aside className={s.cta} aria-label={c.h}>
      <h2>{c.h}</h2>
      <p>{c.p}</p>
      <div className={s.ctaRow}>
        <Link className={s.ctaBtn} href={`/${lang}/quote`}>{c.quote}</Link>
        <a className={s.ctaBtnAlt} href={`tel:${PHONE_TEL}`}>{c.call}</a>
      </div>
      <p className={s.ctaSmall}>{c.small}</p>
    </aside>
  );
}

const FAQ_TITLE: Record<Lang, string> = { en: 'Frequently asked questions', es: 'Preguntas frecuentes', ru: 'Частые вопросы' };

export function FaqList({ lang, faq, title }: { lang: Lang; faq: Faq[]; title?: string }) {
  if (!faq.length) return null;
  return (
    <section className={s.faq}>
      <h2>{title ?? FAQ_TITLE[lang]}</h2>
      {faq.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p><RichText text={f.a} /></p>
        </details>
      ))}
    </section>
  );
}

export const DISCLAIMER: Record<Lang, string> = {
  en: 'This article is general information, not legal advice or policy language. Coverage depends on the terms, limits and exclusions of your policy, and eligibility rules can change. Talk with a licensed agent about your situation.',
  es: 'Este artículo es información general, no asesoría legal ni lenguaje de póliza. La cobertura depende de los términos, límites y exclusiones de su póliza, y las reglas de elegibilidad pueden cambiar. Consulte su caso con un agente licenciado.',
  ru: 'Эта статья — общая информация, а не юридическая консультация и не текст полиса. Покрытие зависит от условий, лимитов и исключений вашего полиса, а правила могут меняться. Обсудите свою ситуацию с лицензированным агентом.',
};

const SOURCES_TITLE: Record<Lang, string> = { en: 'Sources', es: 'Fuentes', ru: 'Источники' };

export function SourceList({ lang, sources, updatedLine }: { lang: Lang; sources: Source[]; updatedLine?: string }) {
  if (!sources.length) return null;
  return (
    <section className={s.sources}>
      <h2>{SOURCES_TITLE[lang]}</h2>
      {updatedLine && <p style={{ marginBottom: 6 }}>{updatedLine}</p>}
      <ul>
        {sources.map((src) => (
          <li key={src.url}>
            <a href={src.url} target="_blank" rel="noopener noreferrer">{src.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Disclaimer({ lang }: { lang: Lang }) {
  return <p className={s.disclaimer}>{DISCLAIMER[lang]}</p>;
}

export const articleStyles = s;
