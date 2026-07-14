import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import { buildAlternates } from '@/lib/seo';

// Гео-лендинг: Classic & Collector Car Insurance — Florida City / Homestead.
// Контент самодостаточный (не в dictionaries.ts), по образцу car-insurance-florida-city/page.tsx.

type Lang = 'en' | 'es' | 'ru';

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'Classic & Collector Car Insurance in Florida City & Homestead, FL | M&K Agency',
    metaDesc:
      'Agreed-value coverage for classic, collector and antique cars in South Miami-Dade. Low-mileage rates, OEM parts coverage. Free quote — English, Español, по-русски.',
    kicker: 'Classic & Collector Car Insurance · Florida City & Homestead',
    h1a: 'Classic car insurance in Florida City & Homestead,',
    h1b: 'agreed value, not a depreciated guess.',
    sub: 'Your classic isn’t a daily driver — a standard policy shouldn’t treat it like one. We shop agreed-value carriers built for collector cars, so a total loss pays what your car is actually worth.',
    cta: 'Get my free classic car quote',
    call: `Call ${PHONE_DISPLAY}`,
    whyTitle: 'Why a standard auto policy shortchanges a classic — and what we do about it',
    whyText:
      'A regular auto policy pays “actual cash value” on a total loss — a depreciated market estimate that ignores what a well-kept classic or collector car is actually worth to you. Classic car programs work differently: agreed (or guaranteed) value coverage locks in a payout amount you and the carrier settle on up front, low-mileage pricing rewards a car that’s driven for pleasure rather than commuting, and coverage is built around OEM and authentic replacement parts instead of cheaper aftermarket substitutes. We compare specialty carriers so your car is actually protected at its real value.',
    covTitle: 'Coverage we quote every day',
    cov: [
      { h: 'Agreed / guaranteed value coverage', p: 'No depreciation surprises on a total loss — you and the carrier agree on the payout amount when the policy is written.' },
      { h: 'Low-mileage program pricing', p: 'Programs built for vehicles driven up to 5,000 miles a year — shows, cruises, and weekend drives — priced far below a daily-driver policy.' },
      { h: 'OEM & authentic parts coverage', p: 'Repairs use genuine or period-correct parts wherever possible, not the cheapest aftermarket substitute.' },
      { h: 'Roadside assistance for classics', p: 'Flatbed towing to a trusted shop — not a generic tow truck that could damage a restored vehicle.' },
      { h: 'Spare parts & trailer coverage', p: 'Coverage extends to spare parts you keep on hand and the trailer you use to transport the car to shows.' },
      { h: 'Flexible storage & usage terms', p: 'Programs built around how classic owners actually use their cars — garage-kept, limited use, seasonal.' },
    ],
    localTitle: 'A real office, 10 minutes away',
    localText:
      'We’re at 33550 S Dixie Hwy, Suite 102, Florida City — near the cruise-in and car-show circuit across South Miami-Dade. Walk in, call, or text. We’ll help document your car’s condition and value for an accurate agreed-value quote.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Compare classic car rates now',
    faqTitle: 'Classic car insurance in Florida City — common questions',
    faq: [
      { q: 'What counts as a “classic” or “collector” car for insurance?', a: 'Most carriers consider a car eligible around 20-25+ years old, or any vehicle with appreciating collector value — including some modern limited-production or enthusiast cars. Eligibility also depends on condition, storage, and how the car is used.' },
      { q: 'What’s the difference between agreed value and actual cash value?', a: 'Actual cash value pays a depreciated market estimate after a total loss — often far less than a well-kept classic is worth. Agreed value locks in a specific payout amount that you and the carrier agree on when the policy is written, based on an appraisal or documented value.' },
      { q: 'Are there mileage restrictions?', a: 'Most classic car programs cap annual mileage — commonly around 5,000 miles a year, sometimes with seasonal or pleasure-use-only limits — in exchange for significantly lower rates than a daily-driver policy.' },
      { q: 'Can I drive my classic car every day?', a: 'Generally no — classic car programs are priced for limited, pleasure-driving use. If you drive the car regularly, a standard auto policy (possibly with a stated-value endorsement) may be a better fit, and we can help you compare both.' },
      { q: 'Do you insure modified or restomod classics?', a: 'Often, yes. Tell us about engine swaps, modern brakes, or other modifications — some specialty carriers cover restomods, others require the car to remain closer to original. We’ll match you with the right one.' },
    ],
    disclaimer: 'Coverage descriptions are general information, not policy language. Requirements and eligibility vary by carrier, vehicle age, condition, and usage.',
  },
  es: {
    metaTitle: 'Seguro de Autos Clásicos y de Colección en Florida City y Homestead, FL | M&K Agency',
    metaDesc:
      'Cobertura de valor acordado para autos clásicos, de colección y antiguos en el sur de Miami-Dade. Tarifas por bajo kilometraje, piezas OEM. Cotización gratis. Hablamos español.',
    kicker: 'Seguro de Autos Clásicos · Florida City y Homestead',
    h1a: 'Seguro de auto clásico en Florida City y Homestead,',
    h1b: 'valor acordado, no una estimación depreciada.',
    sub: 'Su clásico no es un auto de uso diario — una póliza estándar no debería tratarlo como tal. Comparamos aseguradoras de valor acordado especializadas en autos de colección, para que una pérdida total pague lo que su auto realmente vale.',
    cta: 'Cotización gratis de auto clásico',
    call: `Llame ${PHONE_DISPLAY}`,
    whyTitle: 'Por qué una póliza de auto estándar no le hace justicia a un clásico — y qué hacemos al respecto',
    whyText:
      'Una póliza de auto normal paga “valor real en efectivo” en una pérdida total — una estimación de mercado depreciada que ignora lo que un clásico bien cuidado realmente vale para usted. Los programas de autos clásicos funcionan diferente: la cobertura de valor acordado (o garantizado) fija de antemano el monto que usted y la aseguradora acuerdan, la tarifa por bajo kilometraje premia un auto que se conduce por placer y no para el día a día, y la cobertura se basa en piezas OEM y auténticas en lugar de sustitutos genéricos más baratos.',
    covTitle: 'Coberturas que cotizamos todos los días',
    cov: [
      { h: 'Cobertura de valor acordado / garantizado', p: 'Sin sorpresas de depreciación en una pérdida total — usted y la aseguradora acuerdan el monto de pago al emitir la póliza.' },
      { h: 'Tarifas por programa de bajo kilometraje', p: 'Programas para vehículos conducidos hasta 5,000 millas al año — exhibiciones, paseos y fines de semana — con precios muy por debajo de una póliza de uso diario.' },
      { h: 'Cobertura de piezas OEM y auténticas', p: 'Las reparaciones usan piezas originales o de época siempre que sea posible, no el sustituto genérico más barato.' },
      { h: 'Asistencia en carretera para clásicos', p: 'Remolque de plataforma a un taller de confianza — no una grúa genérica que podría dañar un vehículo restaurado.' },
      { h: 'Cobertura de piezas de repuesto y remolque', p: 'La cobertura se extiende a las piezas de repuesto que guarda y al remolque que usa para transportar el auto a exhibiciones.' },
      { h: 'Términos flexibles de almacenamiento y uso', p: 'Programas diseñados para cómo los dueños de clásicos realmente usan sus autos — guardados en garaje, uso limitado, estacional.' },
    ],
    localTitle: 'Una oficina real, a 10 minutos',
    localText:
      'Estamos en 33550 S Dixie Hwy, Suite 102, Florida City — cerca del circuito de exhibiciones y cruise-ins del sur de Miami-Dade. Visítenos, llame o envíe un texto. Le ayudamos a documentar la condición y el valor de su auto para una cotización de valor acordado precisa.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Compare tarifas de auto clásico ahora',
    faqTitle: 'Seguro de auto clásico en Florida City — preguntas frecuentes',
    faq: [
      { q: '¿Qué se considera un auto “clásico” o “de colección” para el seguro?', a: 'La mayoría de las aseguradoras consideran elegible un auto de 20-25+ años, o cualquier vehículo con valor de colección creciente — incluyendo algunos autos modernos de producción limitada. La elegibilidad también depende de la condición, el almacenamiento y el uso del auto.' },
      { q: '¿Cuál es la diferencia entre valor acordado y valor real en efectivo?', a: 'El valor real en efectivo paga una estimación de mercado depreciada tras una pérdida total — a menudo mucho menos de lo que vale un clásico bien cuidado. El valor acordado fija un monto específico de pago que usted y la aseguradora acuerdan al emitir la póliza, basado en una tasación o valor documentado.' },
      { q: '¿Hay restricciones de kilometraje?', a: 'La mayoría de los programas de autos clásicos limitan el kilometraje anual — comúnmente alrededor de 5,000 millas al año, a veces con uso estacional o solo de placer — a cambio de tarifas mucho más bajas que una póliza de uso diario.' },
      { q: '¿Puedo manejar mi auto clásico todos los días?', a: 'Generalmente no — los programas de autos clásicos están cotizados para uso limitado y de placer. Si maneja el auto regularmente, una póliza de auto estándar (posiblemente con un endoso de valor declarado) puede ser mejor opción, y podemos ayudarle a comparar ambas.' },
      { q: '¿Aseguran clásicos modificados o restomod?', a: 'A menudo, sí. Cuéntenos sobre cambios de motor, frenos modernos u otras modificaciones — algunas aseguradoras especializadas cubren restomods, otras requieren que el auto permanezca más cercano al original. Lo conectamos con la opción correcta.' },
    ],
    disclaimer: 'Las descripciones de cobertura son información general, no lenguaje de póliza. Los requisitos y la elegibilidad varían según la aseguradora, la antigüedad, condición y uso del vehículo.',
  },
  ru: {
    metaTitle: 'Страховка классических и коллекционных авто во Florida City и Homestead, FL | M&K Agency',
    metaDesc:
      'Agreed-value покрытие для классических, коллекционных и антикварных авто на юге Miami-Dade. Тарифы за низкий пробег, OEM-запчасти. Бесплатный расчёт. Говорим по-русски.',
    kicker: 'Страховка классических авто · Florida City и Homestead',
    h1a: 'Страховка классического авто во Florida City и Homestead —',
    h1b: 'agreed value, а не заниженная оценка.',
    sub: 'Ваша классика — не ежедневный транспорт, и стандартный полис не должен относиться к ней так. Мы сравним страховые agreed-value, специализирующиеся на коллекционных авто, чтобы при полной гибели выплатили реальную стоимость машины.',
    cta: 'Бесплатный расчёт страховки классики',
    call: `Звоните ${PHONE_DISPLAY}`,
    whyTitle: 'Почему обычный автополис недооценивает классику — и что мы с этим делаем',
    whyText:
      'Обычный автополис при полной гибели выплачивает «actual cash value» — заниженную рыночную оценку, которая игнорирует реальную ценность ухоженной классики или коллекционного авто для вас. Программы для классических авто работают иначе: agreed (guaranteed) value фиксирует сумму выплаты, согласованную заранее с страховой; тариф за низкий пробег вознаграждает машину, которую используют для удовольствия, а не для повседневных поездок; а ремонт строится вокруг оригинальных OEM-запчастей, а не более дешёвых аналогов.',
    covTitle: 'Что мы считаем каждый день',
    cov: [
      { h: 'Agreed / guaranteed value coverage', p: 'Без сюрпризов с амортизацией при полной гибели — сумма выплаты согласована с страховой заранее, при оформлении полиса.' },
      { h: 'Тариф за программу низкого пробега', p: 'Программы для авто с пробегом до 5,000 миль в год — выставки, покатушки, выходные — по цене значительно ниже обычного полиса.' },
      { h: 'Покрытие OEM и оригинальных запчастей', p: 'Ремонт по возможности использует оригинальные или соответствующие эпохе запчасти, а не самый дешёвый аналог.' },
      { h: 'Помощь на дороге для классики', p: 'Эвакуация на платформе в проверенный сервис — а не обычный эвакуатор, который может повредить восстановленный автомобиль.' },
      { h: 'Покрытие запчастей и прицепа', p: 'Покрытие распространяется на запасные части, которые вы храните, и прицеп, на котором перевозите машину на выставки.' },
      { h: 'Гибкие условия хранения и использования', p: 'Программы, построенные под то, как владельцы классики реально используют машины — гараж, ограниченное использование, сезонность.' },
    ],
    localTitle: 'Настоящий офис в 10 минутах',
    localText:
      'Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City — рядом с маршрутами cruise-in и автовыставок юга Miami-Dade. Заходите, звоните или пишите. Поможем задокументировать состояние и стоимость машины для точного agreed-value расчёта.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Сравнить тарифы на классику сейчас',
    faqTitle: 'Страховка классического авто во Florida City — частые вопросы',
    faq: [
      { q: 'Что считается «классическим» или «коллекционным» авто для страховки?', a: 'Большинство страховых считают подходящей машину возрастом от 20-25 лет, либо любое авто с растущей коллекционной ценностью — включая некоторые современные лимитированные модели. Право на программу также зависит от состояния, условий хранения и использования.' },
      { q: 'В чём разница между agreed value и actual cash value?', a: 'Actual cash value — это заниженная рыночная оценка при полной гибели, часто намного меньше реальной стоимости ухоженной классики. Agreed value фиксирует конкретную сумму выплаты, согласованную с страховой при оформлении полиса, на основе оценки или документированной стоимости.' },
      { q: 'Есть ли ограничения по пробегу?', a: 'Большинство программ для классики ограничивают годовой пробег — обычно около 5,000 миль в год, иногда с сезонными ограничениями или только для развлекательных поездок — в обмен на значительно более низкий тариф, чем у обычного полиса.' },
      { q: 'Могу ли я ездить на классике каждый день?', a: 'Как правило, нет — программы для классики рассчитаны на ограниченное, развлекательное использование. Если вы ездите на машине регулярно, лучше подойдёт обычный автополис (возможно, с эндорсментом stated-value), и мы поможем сравнить оба варианта.' },
      { q: 'Страхуете ли вы модифицированную классику или restomod?', a: 'Часто да. Расскажите нам о замене двигателя, современных тормозах или других модификациях — некоторые специализированные страховые покрывают restomod, другие требуют, чтобы машина оставалась ближе к оригиналу. Подберём подходящий вариант.' },
    ],
    disclaimer: 'Описания покрытий — общая информация, а не текст полиса. Требования и условия зависят от страховой компании, возраста, состояния и использования автомобиля.',
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
    alternates: buildAlternates(params.lang, '/classic-car-insurance-florida-city'),
  };
}

export default function ClassicCarInsuranceFloridaCity({ params }: { params: { lang: string } }) {
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
