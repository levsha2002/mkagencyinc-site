import Link from 'next/link';

// "Where your current policy leaves you exposed" — gap-analysis section
// (Design A + C zigzag). Photo/text rows alternate on desktop, stack on
// mobile (photo first). Dollar figures are illustrative examples, disclosed
// in the note below the section.

type Lang = 'en' | 'es' | 'ru';

const T: Record<Lang, any> = {
  en: {
    kicker: "WHERE YOU'RE EXPOSED",
    title: 'Where your current policy leaves you exposed',
    sub: 'The gaps most Florida policies quietly leave behind — and how we close them.',
    note: 'Illustrative example scenarios — actual coverage and outcomes vary by policy and carrier.',
    rows: [
      {
        label: 'AUTO', img: '/images/gap-auto.jpg', alt: 'Car on a Florida highway',
        h: "The other driver's minimum policy won't rebuild your life.",
        stats: [
          { b: '$1.2M+', s: "damages beyond the at-fault driver's policy" },
          { b: '$41,000', s: 'bank debt on an uncovered total loss' },
        ],
        cta: 'Check my UM/UIM limit →', href: '/quote',
      },
      {
        label: 'HOME / CONDO', img: '/images/gap-home.jpg', alt: 'Florida home',
        h: 'Your association master policy stops at your front door.',
        stats: [
          { b: '$190,000', s: 'injury lawsuit brought against you' },
          { b: '$28,000', s: 'mold cleanup after a leak' },
        ],
        cta: 'Does my HO-6 cover this? →', href: '/quote',
      },
      {
        label: 'COMMERCIAL', img: '/images/gap-commercial.jpg', alt: 'Local business storefront',
        h: 'One lawsuit or one closed month can undo years of work.',
        stats: [
          { b: '$250,000', s: 'slip-and-fall claim' },
          { b: '4 months', s: 'no income while your building is closed' },
        ],
        cta: 'Is my liability limit enough? →', href: '/quote',
      },
      {
        label: 'LIFE', img: '/images/gap-life.jpg', alt: 'Family together at home',
        h: 'If your income stopped tomorrow, what would your family stand on?',
        stats: [
          { b: '100%', s: 'of mortgage, bills and tuition left to family' },
          { b: 'Years', s: "of your children's plans put at risk" },
        ],
        cta: "Protect my family's future →", href: '/life',
      },
    ],
  },
  es: {
    kicker: 'DONDE ESTÁ EXPUESTO',
    title: 'Donde su póliza actual lo deja expuesto',
    sub: 'Los vacíos que la mayoría de las pólizas de Florida dejan en silencio — y cómo los cerramos.',
    note: 'Escenarios de ejemplo ilustrativos — la cobertura y los resultados reales varían según la póliza y la aseguradora.',
    rows: [
      {
        label: 'AUTO', img: '/images/gap-auto.jpg', alt: 'Auto en una carretera de Florida',
        h: 'La póliza mínima del otro conductor no reconstruirá su vida.',
        stats: [
          { b: '$1.2M+', s: 'daños más allá de la póliza del conductor culpable' },
          { b: '$41,000', s: 'deuda bancaria por una pérdida total sin cobertura' },
        ],
        cta: 'Revisar mi límite UM/UIM →', href: '/quote',
      },
      {
        label: 'CASA / CONDOMINIO', img: '/images/gap-home.jpg', alt: 'Casa en Florida',
        h: 'La póliza maestra de su asociación se detiene en su puerta.',
        stats: [
          { b: '$190,000', s: 'demanda por lesiones en su contra' },
          { b: '$28,000', s: 'limpieza de moho tras una fuga' },
        ],
        cta: '¿Mi HO-6 cubre esto? →', href: '/quote',
      },
      {
        label: 'COMERCIAL', img: '/images/gap-commercial.jpg', alt: 'Negocio local',
        h: 'Una demanda o un mes cerrado puede deshacer años de trabajo.',
        stats: [
          { b: '$250,000', s: 'reclamo por resbalón y caída' },
          { b: '4 meses', s: 'sin ingresos con su edificio cerrado' },
        ],
        cta: '¿Mi límite de responsabilidad alcanza? →', href: '/quote',
      },
      {
        label: 'VIDA', img: '/images/gap-life.jpg', alt: 'Familia en casa',
        h: 'Si su ingreso se detuviera mañana, ¿sobre qué se sostendría su familia?',
        stats: [
          { b: '100%', s: 'de la hipoteca, cuentas y colegiaturas quedan a la familia' },
          { b: 'Años', s: 'de los planes de sus hijos en riesgo' },
        ],
        cta: 'Proteger el futuro de mi familia →', href: '/life',
      },
    ],
  },
  ru: {
    kicker: 'ГДЕ ВЫ НЕ ЗАЩИЩЕНЫ',
    title: 'Где ваш текущий полис оставляет вас без защиты',
    sub: 'Пробелы, которые большинство полисов Флориды тихо оставляют — и как мы их закрываем.',
    note: 'Иллюстративные примеры — реальное покрытие и результаты зависят от полиса и страховой компании.',
    rows: [
      {
        label: 'АВТО', img: '/images/gap-auto.jpg', alt: 'Машина на трассе во Флориде',
        h: 'Минимальный полис виновника аварии не восстановит вашу жизнь.',
        stats: [
          { b: '$1.2M+', s: 'ущерб сверх полиса виновного водителя' },
          { b: '$41,000', s: 'долг банку за непокрытую полную гибель авто' },
        ],
        cta: 'Проверить мой лимит UM/UIM →', href: '/quote',
      },
      {
        label: 'ДОМ / КОНДО', img: '/images/gap-home.jpg', alt: 'Дом во Флориде',
        h: 'Master-полис вашей ассоциации заканчивается у вашей двери.',
        stats: [
          { b: '$190,000', s: 'иск о травме против вас' },
          { b: '$28,000', s: 'устранение плесени после протечки' },
        ],
        cta: 'Покрывает ли это мой HO-6? →', href: '/quote',
      },
      {
        label: 'БИЗНЕС', img: '/images/gap-commercial.jpg', alt: 'Местный бизнес',
        h: 'Один иск или один закрытый месяц могут перечеркнуть годы работы.',
        stats: [
          { b: '$250,000', s: 'иск за падение на территории' },
          { b: '4 месяца', s: 'без дохода, пока здание закрыто' },
        ],
        cta: 'Достаточен ли мой лимит ответственности? →', href: '/quote',
      },
      {
        label: 'ЖИЗНЬ', img: '/images/gap-life.jpg', alt: 'Семья дома',
        h: 'Если ваш доход остановится завтра — на что будет опираться семья?',
        stats: [
          { b: '100%', s: 'ипотеки, счетов и учёбы лягут на семью' },
          { b: 'Годы', s: 'планов ваших детей окажутся под угрозой' },
        ],
        cta: 'Защитить будущее семьи →', href: '/life',
      },
    ],
  },
};

export default function GapAnalysis({ lang }: { lang: string }) {
  const l: Lang = lang === 'es' || lang === 'ru' ? (lang as Lang) : 'en';
  const t = T[l];

  return (
    <section className="gap-section">
      <div className="container">
        <p className="kicker">{t.kicker}</p>
        <h2>{t.title}</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: 8 }}>{t.sub}</p>

        <div className="gap-rows">
          {t.rows.map((r: any, i: number) => (
            <div className="gap-row" key={r.label}>
              {i % 2 === 0 && <img className="gap-photo" src={r.img} alt={r.alt} />}
              <div>
                <span className="gap-label">{r.label}</span>
                <h3>{r.h}</h3>
                <div className="gap-stats">
                  {r.stats.map((s: any) => (
                    <div className="gap-stat" key={s.b}>
                      <b>{s.b}</b>
                      <span>{s.s}</span>
                    </div>
                  ))}
                </div>
                <Link className="gap-cta" href={`/${l}${r.href}`}>{r.cta}</Link>
              </div>
              {i % 2 === 1 && <img className="gap-photo" src={r.img} alt={r.alt} />}
            </div>
          ))}
        </div>

        <p className="gap-note">{t.note}</p>
      </div>
    </section>
  );
}
