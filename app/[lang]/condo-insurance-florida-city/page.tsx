import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import { buildAlternates } from '@/lib/seo';

// Гео-лендинг: Condo Insurance (HO-6) — Florida City / Homestead.
// Контент самодостаточный (не в dictionaries.ts), по образцу car-insurance-florida-city/page.tsx.

type Lang = 'en' | 'es' | 'ru';

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'Condo Insurance (HO-6) in Florida City & Homestead, FL | M&K Agency',
    metaDesc:
      'HO-6 condo insurance for South Miami-Dade — covers what your HOA master policy doesn’t. Fast quotes for closing. Free quote — English, Español, по-русски.',
    kicker: 'Condo Insurance (HO-6) · Florida City & Homestead',
    h1a: 'Condo insurance in Florida City & Homestead,',
    h1b: 'for what your HOA doesn’t cover.',
    sub: 'Your condo association’s master policy protects the building. An HO-6 policy protects your unit, your belongings, and you. We shop 15+ A-rated carriers so closing isn’t held up by an insurance gap.',
    cta: 'Get my free condo quote',
    call: `Call ${PHONE_DISPLAY}`,
    whyTitle: 'Why condo insurance in Florida has gotten more complicated — and what we do about it',
    whyText:
      'Since the Surfside collapse, Florida condo associations face mandatory milestone inspections and stronger reserve requirements — and buildings that fall short can see insurance costs jump or coverage tighten. Lenders now scrutinize condo policies more closely before closing, too. As an independent agency, we don’t sell just one carrier’s HO-6 form — we compare several, check your association’s master policy for gaps, and make sure your loss-assessment and liability limits actually match the risk.',
    covTitle: 'Coverage we quote every day',
    cov: [
      { h: 'Interior unit coverage (HO-6)', p: 'Flooring, cabinets, built-in fixtures, and any upgrades you’ve made inside your unit — the parts your association’s master policy doesn’t touch.' },
      { h: 'Personal property & loss of use', p: 'Your furniture, electronics, and belongings, plus additional living expenses if your unit becomes unlivable after a covered loss.' },
      { h: 'Liability inside your unit', p: 'If a guest is hurt in your condo, or your unit causes damage to a neighbor’s, this coverage handles the legal and medical costs.' },
      { h: 'Loss assessment coverage', p: 'When the HOA levies a special assessment after a covered building-wide loss, this coverage can reimburse your share.' },
      { h: 'Water damage & pipe-burst liability', p: 'A burst pipe or overflowing tub that damages a neighbor’s unit can be a five- or six-figure claim. We make sure your limits are actually enough.' },
      { h: 'Fast binder for closing', p: 'Most lenders require proof of HO-6 coverage before closing. We can usually quote and bind within the same day.' },
    ],
    localTitle: 'A real office, 10 minutes away',
    localText:
      'We’re at 33550 S Dixie Hwy, Suite 102, Florida City — serving condo owners across Homestead, Leisure City, Naranja and South Miami-Dade. Walk in, call, or text. We’ll also review your HOA’s master policy documents with you at no charge, so you know exactly what you’re responsible for.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Compare 15+ carriers now',
    faqTitle: 'Condo insurance (HO-6) in Florida City — common questions',
    faq: [
      { q: 'What does HO-6 condo insurance actually cover?', a: 'HO-6 covers the interior of your unit (flooring, cabinets, fixtures, upgrades), your personal belongings, liability for injuries inside your unit, and loss of use if you can’t live there after a covered claim. It does not cover the building structure itself — that’s the HOA’s master policy.' },
      { q: 'My HOA has a master policy — do I still need my own insurance?', a: 'Almost always, yes. The master policy protects the building structure and common areas, but rarely your flooring, cabinets, personal belongings, or your liability inside the unit. Most mortgage lenders require a separate HO-6 policy before closing.' },
      { q: 'Why did my condo insurance premium go up so much recently?', a: 'Post-Surfside inspection and reserve requirements, rising reinsurance costs, and hurricane risk have pushed premiums up across Florida, especially in older buildings. Comparing multiple carriers is the most effective way to avoid overpaying for the coverage you actually need.' },
      { q: 'What is loss assessment coverage and do I need it?', a: 'If your HOA has to levy a special assessment on all owners after a covered building-wide loss (a fire in a common area, for example), loss assessment coverage can reimburse your share, up to your policy limit. We recommend it for nearly every condo owner.' },
      { q: 'How fast can I get proof of insurance for closing?', a: 'Usually the same day. Send us your HOA’s master policy declarations page and we can typically quote, bind, and issue a certificate within hours.' },
    ],
    disclaimer: 'Coverage descriptions are general information, not policy language. Requirements and eligibility vary by carrier, association, and unit.',
  },
  es: {
    metaTitle: 'Seguro de Condominio (HO-6) en Florida City y Homestead, FL | M&K Agency',
    metaDesc:
      'Seguro HO-6 para condominios en el sur de Miami-Dade — cubre lo que la póliza maestra de su asociación no cubre. Cotización rápida para el cierre. Hablamos español.',
    kicker: 'Seguro de Condominio (HO-6) · Florida City y Homestead',
    h1a: 'Seguro de condominio en Florida City y Homestead,',
    h1b: 'para lo que su HOA no cubre.',
    sub: 'La póliza maestra de su asociación protege el edificio. Una póliza HO-6 lo protege a usted, su unidad y sus pertenencias. Comparamos 15+ aseguradoras A-rated para que el cierre no se retrase por un vacío de cobertura.',
    cta: 'Cotización gratis de condominio',
    call: `Llame ${PHONE_DISPLAY}`,
    whyTitle: 'Por qué el seguro de condominio en Florida se ha complicado — y qué hacemos al respecto',
    whyText:
      'Desde el colapso de Surfside, las asociaciones de condominios en Florida enfrentan inspecciones estructurales obligatorias (“milestone”) y mayores requisitos de reservas — y los edificios que no cumplen pueden ver primas más altas o coberturas más limitadas. Los prestamistas ahora revisan las pólizas de condominio con más detalle antes del cierre. Como agencia independiente, no vendemos la forma HO-6 de una sola aseguradora — comparamos varias, revisamos la póliza maestra de su asociación en busca de vacíos, y verificamos que sus límites de “loss assessment” y responsabilidad civil realmente correspondan al riesgo.',
    covTitle: 'Coberturas que cotizamos todos los días',
    cov: [
      { h: 'Cobertura del interior de la unidad (HO-6)', p: 'Pisos, gabinetes, instalaciones fijas y cualquier mejora dentro de su unidad — las partes que la póliza maestra de su asociación no cubre.' },
      { h: 'Bienes personales y pérdida de uso', p: 'Sus muebles, electrónicos y pertenencias, además de gastos adicionales de vivienda si su unidad queda inhabitable tras un siniestro cubierto.' },
      { h: 'Responsabilidad civil dentro de su unidad', p: 'Si un invitado se lesiona en su condominio, o su unidad causa daños a un vecino, esta cobertura maneja los costos legales y médicos.' },
      { h: 'Cobertura de “loss assessment”', p: 'Cuando la HOA impone una cuota especial tras un siniestro cubierto que afecta a todo el edificio, esta cobertura puede reembolsar su parte.' },
      { h: 'Daños por agua y responsabilidad por tuberías', p: 'Una tubería rota o una bañera desbordada que dañe la unidad de un vecino puede ser un reclamo de cinco o seis cifras. Verificamos que sus límites sean realmente suficientes.' },
      { h: 'Emisión rápida para el cierre', p: 'La mayoría de los prestamistas exigen comprobante de cobertura HO-6 antes del cierre. Normalmente cotizamos y emitimos el mismo día.' },
    ],
    localTitle: 'Una oficina real, a 10 minutos',
    localText:
      'Estamos en 33550 S Dixie Hwy, Suite 102, Florida City — atendemos a propietarios de condominios en Homestead, Leisure City, Naranja y el sur de Miami-Dade. Visítenos, llame o envíe un texto. También revisamos sin costo los documentos de la póliza maestra de su HOA con usted, para que sepa exactamente de qué es responsable.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Compare 15+ aseguradoras ahora',
    faqTitle: 'Seguro de condominio (HO-6) en Florida City — preguntas frecuentes',
    faq: [
      { q: '¿Qué cubre realmente el seguro HO-6 de condominio?', a: 'HO-6 cubre el interior de su unidad (pisos, gabinetes, instalaciones, mejoras), sus pertenencias personales, responsabilidad civil por lesiones dentro de su unidad, y pérdida de uso si no puede vivir ahí tras un siniestro cubierto. No cubre la estructura del edificio — eso corresponde a la póliza maestra de la HOA.' },
      { q: 'Mi HOA tiene póliza maestra — ¿aún necesito mi propio seguro?', a: 'Casi siempre, sí. La póliza maestra protege la estructura del edificio y las áreas comunes, pero rara vez sus pisos, gabinetes, pertenencias o su responsabilidad civil dentro de la unidad. La mayoría de los prestamistas exige una póliza HO-6 separada antes del cierre.' },
      { q: '¿Por qué subió tanto mi prima de seguro de condominio?', a: 'Los requisitos de inspección y reservas posteriores a Surfside, el aumento en costos de reaseguro y el riesgo de huracanes han elevado las primas en toda Florida, especialmente en edificios más antiguos. Comparar varias aseguradoras es la forma más eficaz de no pagar de más.' },
      { q: '¿Qué es la cobertura de “loss assessment” y la necesito?', a: 'Si su HOA debe imponer una cuota especial a todos los propietarios tras un siniestro cubierto que afecta a todo el edificio (un incendio en un área común, por ejemplo), esta cobertura puede reembolsar su parte, hasta el límite de su póliza. La recomendamos para casi todo propietario de condominio.' },
      { q: '¿Qué tan rápido obtengo el comprobante para el cierre?', a: 'Normalmente el mismo día. Envíenos la página de declaraciones de la póliza maestra de su HOA y generalmente podemos cotizar, emitir y entregar un certificado en cuestión de horas.' },
    ],
    disclaimer: 'Las descripciones de cobertura son información general, no lenguaje de póliza. Los requisitos y la elegibilidad varían según la aseguradora, la asociación y la unidad.',
  },
  ru: {
    metaTitle: 'Страховка кондо (HO-6) во Florida City и Homestead, FL | M&K Agency',
    metaDesc:
      'HO-6 страховка кондоминиума для юга Miami-Dade — покрывает то, что не покрывает master-полис вашей ассоциации. Быстрый расчёт для closing. Говорим по-русски.',
    kicker: 'Страховка кондо (HO-6) · Florida City и Homestead',
    h1a: 'Страховка кондоминиума во Florida City и Homestead —',
    h1b: 'на то, что не покрывает HOA.',
    sub: 'Master-полис вашей ассоциации защищает здание. Полис HO-6 защищает вашу квартиру, вещи и вас лично. Мы сравним 15+ страховых A-rated, чтобы closing не задержался из-за пробела в покрытии.',
    cta: 'Бесплатный расчёт страховки кондо',
    call: `Звоните ${PHONE_DISPLAY}`,
    whyTitle: 'Почему страховка кондо во Флориде усложнилась — и что мы с этим делаем',
    whyText:
      'После обрушения здания в Surfside ассоциации кондоминиумов Флориды обязаны проходить структурные проверки (milestone inspections) и формировать более крупные резервные фонды — а здания, не соответствующие требованиям, сталкиваются с ростом премий или сужением покрытия. Кредиторы теперь тщательнее проверяют полисы кондо перед closing. Как независимое агентство, мы не продаём форму HO-6 одной компании — мы сравниваем несколько страховых, проверяем master-полис вашей ассоциации на пробелы и следим, чтобы лимиты loss assessment и liability реально соответствовали риску.',
    covTitle: 'Что мы считаем каждый день',
    cov: [
      { h: 'Покрытие интерьера квартиры (HO-6)', p: 'Полы, шкафы, встроенные элементы и любые улучшения внутри вашей квартиры — то, что не затрагивает master-полис ассоциации.' },
      { h: 'Личное имущество и loss of use', p: 'Мебель, техника и вещи, а также компенсация дополнительных расходов на жильё, если квартира станет непригодной после покрытого случая.' },
      { h: 'Liability внутри квартиры', p: 'Если гость получил травму в вашей квартире, или ваша квартира стала причиной ущерба соседям — это покрытие берёт на себя юридические и медицинские расходы.' },
      { h: 'Loss assessment coverage', p: 'Когда HOA вводит специальный взнос после покрытого случая, затронувшего всё здание, это покрытие может компенсировать вашу долю.' },
      { h: 'Ущерб от воды и ответственность за трубы', p: 'Прорвавшаяся труба или перелившаяся ванна, повредившая квартиру соседа, может обернуться иском на пять-шесть цифр. Мы проверим, что ваших лимитов реально достаточно.' },
      { h: 'Быстрое оформление для closing', p: 'Большинство кредиторов требуют подтверждение HO-6 перед closing. Обычно можем рассчитать и оформить в тот же день.' },
    ],
    localTitle: 'Настоящий офис в 10 минутах',
    localText:
      'Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City — работаем с владельцами кондо в Homestead, Leisure City, Naranja и на юге Miami-Dade. Заходите, звоните или пишите. Также бесплатно разберём документы master-полиса вашей HOA, чтобы вы точно знали, за что отвечаете сами.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Сравнить 15+ страховых сейчас',
    faqTitle: 'Страховка кондо (HO-6) во Florida City — частые вопросы',
    faq: [
      { q: 'Что реально покрывает HO-6 страховка кондо?', a: 'HO-6 покрывает интерьер квартиры (полы, шкафы, встроенные элементы, улучшения), личные вещи, liability за травмы внутри квартиры и loss of use, если жить там временно нельзя после покрытого случая. Саму конструкцию здания не покрывает — это зона master-полиса HOA.' },
      { q: 'У моей HOA есть master-полис — нужна ли мне своя страховка?', a: 'Почти всегда да. Master-полис защищает конструкцию здания и общие зоны, но редко покрывает полы, шкафы, личные вещи или вашу liability внутри квартиры. Большинство кредиторов требует отдельный полис HO-6 перед closing.' },
      { q: 'Почему моя премия за страховку кондо так выросла?', a: 'Требования по проверкам и резервам после Surfside, рост стоимости перестрахования и риск ураганов подняли премии по всей Флориде, особенно в старых зданиях. Сравнение нескольких страховых — самый эффективный способ не переплачивать.' },
      { q: 'Что такое loss assessment coverage и нужно ли оно мне?', a: 'Если HOA вводит специальный взнос для всех владельцев после покрытого случая, затронувшего всё здание (например, пожар в общей зоне), это покрытие может компенсировать вашу долю в пределах лимита полиса. Рекомендуем его практически каждому владельцу кондо.' },
      { q: 'Как быстро получить подтверждение для closing?', a: 'Обычно в тот же день. Пришлите нам страницу деклараций master-полиса вашей HOA — как правило, мы можем рассчитать, оформить и выдать сертификат за несколько часов.' },
    ],
    disclaimer: 'Описания покрытий — общая информация, а не текст полиса. Требования и условия зависят от страховой компании, ассоциации и квартиры.',
  },
};

function pick(lang: string): { l: Lang; t: any } {
  const l: Lang = lang === 'es' || lang === 'ru' ? (lang as Lang) : 'en';
  return { l, t: C[l] };
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const { t } = pick(params.lang);
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: buildAlternates(params.lang, '/condo-insurance-florida-city'),
  };
}

export default function CondoInsuranceFloridaCity({ params }: { params: { lang: string } }) {
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

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge gold">{t.kicker}</span>
            <h1>
              {t.h1a} <span className="accent">{t.h1b}</span>
            </h1>
            <p className="sub">{t.sub}</p>
            <a className="cta" href="#quote">{t.cta}</a>
            <div className="rated" style={{ marginLeft: 12 }}>
              <span className="stars">★★★★★</span>
              <span>{t.langLine}</span>
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
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container">
          <h2>{t.covTitle}</h2>
          <div className="cards4" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {t.cov.map((c: { h: string; p: string }) => (
              <div className="svc" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
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

      <section className="section" style={{ background: '#f2f7ff' }} id="quote">
        <div className="container">
          <h2>{t.faqTitle}</h2>
          <div style={{ maxWidth: '46rem', margin: '0 auto' }}>
            {t.faq.map((f: { q: string; a: string }) => (
              <details key={f.q} style={{ background: '#fff', border: '1px solid #e6ecf5', borderRadius: 14, padding: '14px 18px', marginBottom: 10 }}>
                <summary style={{ fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }}>{f.q}</summary>
                <p style={{ marginTop: 8, color: 'var(--muted)' }}>{f.a}</p>
              </details>
            ))}
            <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: 14 }}>{t.disclaimer}</p>
            <p style={{ textAlign: 'center', marginTop: 22 }}>
              <Link className="cta" href={`/${l}/quote`}>{t.cta}</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
