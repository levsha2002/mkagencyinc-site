import Link from 'next/link';
import HeroBackdrop from '@/components/hero/HeroBackdrop';
import { dailyHero } from '@/content/hero';
import { PHONE_DISPLAY, PHONE_TEL, getDict } from '@/lib/dictionaries';
import RatingBadge from '@/components/RatingBadge';
import LeadForm from '@/components/LeadForm';
import RelatedCoverage from '@/components/RelatedCoverage';
import RelatedGuides from '@/components/RelatedGuides';
import AreasWeServe from '@/components/city/AreasWeServe';
import GapCallout from '@/components/GapCallout';
import { pageMetadata } from '@/lib/seo';

// ISR: re-render daily. The rating comes from data/reviews.json (see lib/reviews.ts);
// an optional live fetch (RATING_LIVE_FETCH=1) is cached for a week.
// Daily hero rotation (photo + H1 accent + sub, America/New_York date):
// pools in content/hero/copy/auto.ts and HERO_IMAGE_POOLS.auto in content/hero/index.ts.
// The H1 keyword prefix (t.h1a) stays fixed for SEO. Hourly ISR picks up the new day.
export const revalidate = 3600;

// Гео-лендинг: Car Insurance — Florida City / Homestead.
// Контент самодостаточный (не в dictionaries.ts), по образцу quote/layout.tsx.

type Lang = 'en' | 'es' | 'ru';

// Inline links in the copy (global CSS resets <a> to inherit color).
const linkStyle = { color: 'var(--blue)', fontWeight: 600 } as const;

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'Car Insurance in Florida City, FL | M&K Agency',
    metaDesc:
      'Local licensed agents in Florida City and Homestead explain exactly what your auto policy covers. English, Español, по-русски.',
    kicker: 'Auto Insurance · Florida City & Homestead',
    h1a: 'Car insurance in Florida City & Homestead,',
    h1b: 'explained in plain language.',
    sub: 'Your neighbors on S Dixie Hwy will explain exactly what your auto policy covers. One call, three languages, real local agents.',
    cta: 'Have an agent call me',
    call: `Call ${PHONE_DISPLAY}`,
    whyTitle: 'Why auto insurance costs more around here — and what we do about it',
    whyText:
      'Miami-Dade drivers pay some of the highest auto premiums in Florida: dense traffic on US-1 and the Turnpike, high uninsured-driver rates, and storm exposure all push prices up. As a local agency in Florida City, we review your exact driving profile and apply every discount you qualify for — and explain your coverage in plain language.',
    covTitle: 'Coverage we quote every day',
    cov: [
      { h: 'State-minimum PIP & PDL', p: 'Florida requires $10,000 PIP and $10,000 property damage liability. We make sure you meet the law — and explain where minimum coverage leaves you exposed.' },
      { h: 'Full coverage (comp & collision)', p: 'Protection for your own car — accidents, theft, flood and hurricane damage. Required by most lenders and leases.' },
      { h: 'Bodily injury & uninsured motorist', p: 'About 1 in 5 Florida drivers is uninsured. UM coverage protects you and your family when the other driver has nothing.' },
      { h: 'SR-22 / FR-44 filings', p: 'After a DUI or license issue, we handle the state filing and find carriers that still offer fair rates.' },
      { h: 'Rideshare (Uber / Lyft)', p: 'Personal policies exclude rideshare driving. We quote endorsements and hybrid policies that cover every mile.' },
      { h: 'Motorcycle, boat & RV', p: 'From Harleys to jet skis — bundle your toys with your auto policy and save on both.' },
    ],
    localTitle: 'A real office, 10 minutes away',
    localText:
      'We’re at 33550 S Dixie Hwy, Suite 102, Florida City — next to Homestead, Leisure City and Naranja. Walk in, call, or text. Same-day proof of insurance, help with FL DHSMV paperwork, and claims guidance from people who know your roads.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Talk to a licensed agent',
    faqTitle: 'Car insurance in Florida City — common questions',
    faq: [
      { q: 'What car insurance is required in Florida City, FL?', a: 'Florida law requires $10,000 in Personal Injury Protection (PIP) and $10,000 in Property Damage Liability (PDL). Bodily injury liability is not required for most drivers but is strongly recommended — and required after certain violations (SR-22/FR-44).' },
      { q: 'Why is car insurance so expensive in Miami-Dade County?', a: 'High traffic density, one of the highest uninsured-driver rates in the country, storm exposure, and litigation costs all raise premiums. Reviewing your exact profile and applying every eligible discount is the most effective way to avoid overpaying.' },
      { q: 'Can you insure drivers with a foreign or international license?', a: 'Yes. We work with newcomers every week in English, Spanish, and Russian, and explain every step of the process.' },
      { q: 'How fast can I get proof of insurance?', a: 'Usually the same day. Most policies can be quoted, bound, and documented within an hour — you leave with valid Florida proof of insurance.' },
      { q: 'Do you charge a fee for quotes?', a: 'No. Quotes are free and there is no obligation, and requesting one does not affect your credit score.' },
    ],
    disclaimer: 'Coverage descriptions are general information, not policy language. Requirements and eligibility vary by carrier and driver profile.',
  },
  es: {
    metaTitle: 'Seguro de carro en Florida City y Homestead | M&K Agency',
    metaDesc:
      `¿Busca seguro de auto o aseguranza de carro en Homestead o Florida City? Agentes licenciados le explican su póliza en español. Llame al ${PHONE_DISPLAY}.`,
    kicker: 'Seguro de auto · Florida City y Homestead',
    h1a: 'Seguro de carro en Florida City y Homestead,',
    h1b: 'explicado con claridad.',
    sub: 'Sus vecinos en S Dixie Hwy le explican exactamente qué cubre su póliza de auto. Una llamada, tres idiomas, agentes locales de verdad.',
    cta: 'Que me llame un agente',
    call: `Llame al ${PHONE_DISPLAY}`,
    whyTitle: 'Su seguro de auto, explicado por un agente local',
    whyText:
      'Muchos en Homestead y Florida City le dicen “aseguranza de carro”; en la póliza aparece como seguro de auto. Se llame como se llame, en M&K Agency le explicamos en español qué cubre cada parte: el PIP y el PDL que exige Florida, la responsabilidad por lesiones corporales, la cobertura de motorista sin seguro y las coberturas de choque y amplia para su propio carro. Revisamos con usted quién maneja, qué vehículos tiene y qué necesita proteger, y le decimos con claridad qué incluye cada opción antes de que firme.',
    whyLinks: [
      '¿Le pidieron un SR-22 o un FR-44? Vea nuestra página de ',
      { href: '/es/sr22-insurance-florida-city', label: 'seguro SR-22 y FR-44 en Florida City' },
      '. ¿Acaba de llegar a Florida o maneja con licencia de otro país? Lea nuestra guía sobre el ',
      { href: '/es/blog/seguro-auto-licencia-extranjera-florida', label: 'seguro de auto con licencia extranjera' },
      '.',
    ],
    covTitle: 'Coberturas que cotizamos todos los días',
    cov: [
      { h: 'Mínimo de Florida: PIP y PDL', p: 'La ley de Florida exige $10,000 de PIP y $10,000 de responsabilidad por daños a la propiedad (PDL). Nos aseguramos de que cumpla con la ley y le explicamos en qué casos el mínimo lo deja desprotegido.', link: { href: '/es/blog/florida-minimum-car-insurance-requirements', label: 'Qué cubren el PIP y el PDL' } },
      { h: 'Cobertura completa: choque y amplia', p: 'Las coberturas de choque (collision) y amplia (comprehensive) protegen su propio carro en accidentes, robo, inundación y huracanes. La mayoría de los préstamos y contratos de leasing las exigen.', link: { href: '/es/blog/comprehensive-vs-collision-florida', label: 'Cobertura amplia vs. colisión' } },
      { h: 'Lesiones corporales y motorista sin seguro', p: 'No todos los conductores en Florida tienen seguro suficiente. La cobertura de motorista sin seguro (UM) lo protege a usted y a su familia cuando el otro conductor no tiene con qué responder.' },
      { h: 'Certificados SR-22 y FR-44', p: 'Después de ciertas infracciones o de una condena por DUI, el estado puede exigirle un SR-22 (límites 10/20/10) o un FR-44 (100/300/50). Le cotizamos la póliza y la aseguradora presenta el certificado ante el FLHSMV.', link: { href: '/es/sr22-insurance-florida-city', label: 'Seguro SR-22 y FR-44 en Florida City' } },
      { h: 'Rideshare (Uber / Lyft)', p: 'Por lo general, la póliza personal no cubre el tiempo en que usted maneja para una app de rideshare. Le cotizamos endosos y pólizas pensadas para ese uso.' },
      { h: 'Moto, bote y casa rodante (RV)', p: 'De motos a jet skis: cotizamos sus otros vehículos junto con su seguro de carro, con el mismo agente para todo.' },
    ],
    localTitle: 'Una oficina de verdad, a 10 minutos',
    localText:
      'Estamos en 33550 S Dixie Hwy, Suite 102, Florida City, cerca de Homestead, Leisure City y Naranja. Atendemos de lunes a viernes de 9 a 6, y los sábados con cita. Visítenos, llámenos o envíenos un mensaje de texto: normalmente puede tener su comprobante de seguro el mismo día, le ayudamos con los trámites del FLHSMV y lo acompañamos durante el reclamo.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Hable con un agente licenciado',
    faqTitle: 'Seguro de carro en Florida City: preguntas frecuentes',
    faq: [
      { q: '¿Qué seguro de auto es obligatorio en Florida?', a: 'La ley de Florida exige $10,000 de Protección contra Lesiones Personales (PIP) y $10,000 de Responsabilidad por Daños a la Propiedad (PDL). La cobertura de lesiones corporales (BI) no es obligatoria para la mayoría de los conductores, pero es muy recomendable, y el estado la exige después de ciertas infracciones mediante un SR-22 o un FR-44.' },
      { q: '¿Cuándo me piden un SR-22 o un FR-44?', a: 'Según el FLHSMV, si usted tuvo la culpa de un choque con heridos y no tenía cobertura de lesiones corporales, debe mantener límites de 10/20/10 con un SR-22 durante tres años, además de cumplir otros requisitos del caso. Tras una condena por DUI, la ley exige un FR-44 con $100,000/$300,000 por lesiones y $50,000 por daños a la propiedad durante un mínimo de tres años (s. 324.023).', link: { href: '/es/sr22-insurance-florida-city', label: 'Seguro SR-22 y FR-44 en Florida City' } },
      { q: '¿Aseguran a conductores con licencia extranjera?', a: 'Sí. Cada semana atendemos a recién llegados en español, inglés y ruso. Como visitante, puede manejar en Florida con una licencia válida de su país (s. 322.04); cuando se establece aquí, tiene 30 días para sacar la licencia de Florida.', link: { href: '/es/blog/seguro-auto-licencia-extranjera-florida', label: 'Guía para recién llegados con licencia extranjera' } },
      { q: '¿Qué tan rápido obtengo mi comprobante de seguro?', a: 'Normalmente el mismo día. Muchas pólizas se cotizan y se emiten en menos de una hora, y usted sale con su comprobante de seguro de Florida.' },
      { q: '¿Qué necesito para cotizar mi seguro de carro?', a: 'Su licencia de conducir, el número VIN o el año, la marca y el modelo del carro, la dirección donde lo guarda, los datos de los demás conductores de su casa y, si la tiene, la página de declaraciones de su póliza actual. Si le exigen un SR-22 o un FR-44, traiga también el aviso del FLHSMV.' },
    ],
    disclaimer: 'Las descripciones de las coberturas son información general, no el texto de la póliza. Los requisitos y la elegibilidad varían según la aseguradora y el perfil del conductor.',
  },
  ru: {
    metaTitle: 'Автостраховка во Флорида-Сити, FL | M&K Agency',
    metaDesc:
      'Местные лицензированные агенты во Флорида-Сити и Хомстеде объяснят, что покрывает ваш полис. Говорим по-русски.',
    kicker: 'Автостраховка · Florida City и Homestead',
    h1a: 'Автостраховка во Florida City и Homestead —',
    h1b: 'объясним простыми словами.',
    sub: 'Ваши соседи с S Dixie Hwy объяснят, что именно покрывает ваш полис. Один звонок, три языка, настоящие местные агенты.',
    cta: 'Заказать звонок агента',
    call: `Звоните ${PHONE_DISPLAY}`,
    whyTitle: 'Почему автостраховка здесь дороже — и что мы с этим делаем',
    whyText:
      'Водители Miami-Dade платят одни из самых высоких премий во Флориде: плотный трафик на US-1 и Turnpike, высокая доля незастрахованных водителей и ураганы поднимают цены. Как местное агентство во Florida City, мы разбираем ваш профиль вождения и применяем каждую положенную скидку — и объясняем ваше покрытие простыми словами.',
    covTitle: 'Что мы считаем каждый день',
    cov: [
      { h: 'Минимум штата: PIP и PDL', p: 'Флорида требует $10,000 PIP и $10,000 ответственности за имущество. Мы обеспечим соответствие закону — и объясним, где минимальное покрытие оставляет вас без защиты.' },
      { h: 'Полное покрытие (comp & collision)', p: 'Защита вашей машины — ДТП, угон, наводнение, ураган. Обязательна для большинства кредитов и лизинга.' },
      { h: 'Bodily injury и незастрахованный водитель', p: 'Примерно каждый пятый водитель Флориды не застрахован. Покрытие UM защищает вас и семью, когда у виновника ничего нет.' },
      { h: 'SR-22 / FR-44', p: 'После DUI или проблем с правами оформим государственную подачу и найдём страховые с адекватными тарифами.' },
      { h: 'Rideshare (Uber / Lyft)', p: 'Личные полисы не покрывают работу в такси. Подберём эндорсменты и гибридные полисы на каждую милю.' },
      { h: 'Мотоцикл, лодка, RV', p: 'От Harley до гидроцикла — объедините технику с автополисом и сэкономьте на обоих.' },
    ],
    localTitle: 'Настоящий офис в 10 минутах',
    localText:
      'Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City — рядом Homestead, Leisure City и Naranja. Заходите, звоните или пишите. Подтверждение страховки в тот же день, помощь с документами DHSMV и сопровождение по клеймам.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Поговорить с лицензированным агентом',
    faqTitle: 'Автостраховка во Florida City — частые вопросы',
    faq: [
      { q: 'Какая автостраховка обязательна во Florida City, FL?', a: 'Закон Флориды требует $10,000 PIP (Personal Injury Protection) и $10,000 PDL (ответственность за имущество). Bodily injury для большинства не обязательна, но настоятельно рекомендуется — а после некоторых нарушений обязательна (SR-22/FR-44).' },
      { q: 'Почему страховка в Miami-Dade такая дорогая?', a: 'Плотный трафик, один из самых высоких в стране процентов незастрахованных водителей, ураганы и судебные издержки поднимают премии. Разбор вашего профиля и применение каждой положенной скидки — самый эффективный способ не переплачивать.' },
      { q: 'Страхуете ли водителей с иностранными правами?', a: 'Да. Мы каждую неделю помогаем новоприбывшим — на английском, испанском и русском, и объясняем каждый шаг процесса.' },
      { q: 'Как быстро я получу подтверждение страховки?', a: 'Обычно в тот же день. Большинство полисов рассчитываются и оформляются за час — вы уходите с действующим флоридским подтверждением.' },
      { q: 'Расчёт платный?', a: 'Нет. Расчёты бесплатны и ни к чему не обязывают, и обращение за расчётом не влияет на кредитный рейтинг.' },
    ],
    disclaimer: 'Описания покрытий — общая информация, а не текст полиса. Требования и условия зависят от страховой компании и профиля водителя.',
  },
};

function pick(lang: string): { l: Lang; t: any } {
  const l: Lang = lang === 'es' || lang === 'ru' ? (lang as Lang) : 'en';
  return { l, t: C[l] };
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const { t } = pick(params.lang);
  return pageMetadata({
    lang: params.lang,
    path: '/car-insurance-florida-city',
    title: t.metaTitle,
    description: t.metaDesc,
  });
}

export default function CarInsuranceFloridaCity({ params }: { params: { lang: string } }) {
  const { l, t } = pick(params.lang);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map((f: { q: string; a: string }) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const hero = dailyHero('auto', l);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="hero hero--photo">
        <HeroBackdrop image={hero.image} alt={hero.alt} />
        <div className="container hero-grid">
          <div>
            <span className="badge gold">{t.kicker}</span>
            <h1>
              {t.h1a} <span className="accent">{hero.copy.h}</span>
            </h1>
            <p className="sub">{hero.copy.sub}</p>
            <a className="cta" href="#quote">{t.cta}</a>
            <div className="rated rated-stack" style={{ marginLeft: 12 }}>
              <span>{t.langLine}</span>
              <RatingBadge lang={l} />
            </div>
          </div>
          <LeadForm lang={l} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.whyTitle}</h2>
          <p style={{ maxWidth: '46rem', margin: '0 auto', textAlign: 'center', color: 'var(--muted)' }}>
            {t.whyText}
          </p>
          {t.whyLinks && (
            <p style={{ maxWidth: '46rem', margin: '14px auto 0', textAlign: 'center', color: 'var(--muted)' }}>
              {t.whyLinks.map((x: string | { href: string; label: string }, i: number) =>
                typeof x === 'string' ? x : <Link key={i} href={x.href} style={{ ...linkStyle, textDecoration: 'underline' }}>{x.label}</Link>,
              )}
            </p>
          )}
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container">
          <h2>{t.covTitle}</h2>
          <div className="cards4 cards3">
            {t.cov.map((c: { h: string; p: string; link?: { href: string; label: string } }) => (
              <div className="svc" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                {c.link && (
                  <p style={{ marginTop: 8 }}>
                    <Link href={c.link.href} style={linkStyle}>{c.link.label} →</Link>
                  </p>
                )}
              </div>
            ))}
          </div>
          <GapCallout lang={l} />
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2 style={{ textAlign: 'left' }}>{t.localTitle}</h2>
            <p style={{ color: 'var(--muted)' }}>{t.localText}</p>
            <p style={{ marginTop: 16 }}>
              <a className="cta" href={`tel:${PHONE_TEL}`}>{t.call}</a>
            </p>
          </div>
          <div className="office">
            <strong>M&K Agency Inc.</strong>
            <p>33550 S Dixie Hwy, Suite 102<br />Florida City, FL 33034</p>
            <p style={{ marginTop: 8 }}>{t.langLine}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }} id="faq">
        <div className="container">
          <h2>{t.faqTitle}</h2>
          <div style={{ maxWidth: '46rem', margin: '0 auto' }}>
            {t.faq.map((f: { q: string; a: string; link?: { href: string; label: string } }) => (
              <details key={f.q} style={{ background: '#fff', border: '1px solid #e6ecf5', borderRadius: 14, padding: '14px 18px', marginBottom: 10 }}>
                <summary style={{ fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }}>{f.q}</summary>
                <p style={{ marginTop: 8, color: 'var(--muted)' }}>{f.a}</p>
                {f.link && (
                  <p style={{ marginTop: 6 }}>
                    <Link href={f.link.href} style={linkStyle}>{f.link.label} →</Link>
                  </p>
                )}
              </details>
            ))}
            <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: 14 }}>{t.disclaimer}</p>
            <p style={{ textAlign: 'center', marginTop: 22 }}>
              <Link className="cta" href={`/${l}/quote`}>{t.cta}</Link>
            </p>
          </div>
        </div>
      </section>
      <AreasWeServe lang={l} current="/car-insurance-florida-city" />
      <RelatedGuides lang={l} page="/car-insurance-florida-city" />
      <RelatedCoverage lang={l} current="/car-insurance-florida-city" />
    </main>
  );
}
