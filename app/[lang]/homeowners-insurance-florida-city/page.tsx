import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import RelatedCoverage from '@/components/RelatedCoverage';
import { buildAlternates } from '@/lib/seo';

// Гео-лендинг: Homeowners Insurance — Florida City / Homestead.
// Контент самодостаточный (не в dictionaries.ts), по образцу car-insurance-florida-city/page.tsx.

type Lang = 'en' | 'es' | 'ru';

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'Homeowners Insurance in Florida City & Homestead, FL | M&K Agency',
    metaDesc:
      'Local agents at a family-owned agency help South Miami-Dade homeowners get hurricane-ready coverage in place. Fast quotes for closing. Free quote — English, Español, по-русски.',
    kicker: 'Homeowners Insurance · Florida City & Homestead',
    h1a: 'Homeowners insurance in Florida City & Homestead,',
    h1b: 'that holds up when a storm hits.',
    sub: 'South Miami-Dade homeowners face real hurricane and flood risk — and a market where carriers come and go. We make sure your coverage is actually there when you need it — and that you understand exactly what it includes.',
    cta: 'Have an agent call me',
    call: `Call ${PHONE_DISPLAY}`,
    whyTitle: 'Why Florida homeowners insurance is a mess right now — and what we do about it',
    whyText:
      'Rising reinsurance costs, hurricane exposure, and several carrier exits and insolvencies have made Florida one of the hardest homeowners insurance markets in the country. As a family-owned local agency, we take the time to explain what your policy actually covers, help you navigate 4-point and wind mitigation inspections, and make sure every credit and discount you qualify for is applied.',
    covTitle: 'Coverage we quote every day',
    cov: [
      { h: 'Dwelling & other structures', p: 'Rebuild cost for your home, plus detached structures like a shed, fence, or detached garage.' },
      { h: 'Wind & hurricane coverage', p: 'Florida’s most important coverage line — we make sure your wind deductible and limits actually match your home’s risk.' },
      { h: 'Liability & medical payments', p: 'Protection if someone is injured on your property, or your family is responsible for damage to someone else’s.' },
      { h: 'Loss of use / additional living expenses', p: 'Covers hotel and living costs if your home becomes temporarily uninhabitable after a covered loss.' },
      { h: '4-point & wind mitigation inspection help', p: 'Homes over 20 years old typically need these before a carrier will issue a policy — we can point you to inspectors who turn them around fast.' },
      { h: 'Flood insurance guidance', p: 'Standard homeowners policies exclude flood. We’ll tell you honestly whether you need a separate NFIP or private flood policy for your address.' },
    ],
    localTitle: 'A real office, 10 minutes away',
    localText:
      'We’re at 33550 S Dixie Hwy, Suite 102, Florida City — serving homeowners across Homestead, Leisure City, Naranja and South Miami-Dade. Walk in, call, or text. We’ll help you get a policy in place fast for a purchase closing, or review your renewal before your rate changes.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Talk to a licensed agent',
    faqTitle: 'Homeowners insurance in Florida City — common questions',
    faq: [
      { q: 'Why did my homeowners insurance premium go up so much?', a: 'Rising reinsurance costs (what carriers pay to insure themselves against catastrophic losses), construction and repair cost inflation, and hurricane risk have driven premiums up across Florida — especially for older homes. Reviewing your policy with an agent each year, rather than auto-renewing without looking, is the most effective way to confirm you still have the right coverage and every discount you qualify for.' },
      { q: 'Do I need flood insurance separately?', a: 'Yes — standard homeowners policies exclude flood damage entirely. Whether you legally need it depends on your flood zone and whether you have a mortgage, but we recommend most Miami-Dade homeowners at least get a quote, since flood damage isn’t rare here.' },
      { q: 'What is a 4-point inspection and when do I need one?', a: 'It’s an inspection of your home’s roof, electrical, plumbing, and HVAC systems, typically required by carriers for homes older than about 20 years before they’ll issue a new policy. A wind mitigation inspection (which can lower your premium) is often done at the same visit.' },
      { q: 'How fast can you bind coverage for a home purchase closing?', a: 'Often within the same day once we have your address, purchase price, and any required inspection reports. We work directly with title companies and lenders to keep closings on schedule.' },
      { q: 'Who will I be working with?', a: 'We’re a family-owned Allstate agency in Florida City. A licensed agent will review your home’s age, location, and inspection results with you and explain the coverage available for your situation.' },
    ],
    disclaimer: 'Coverage descriptions are general information, not policy language. Requirements and eligibility vary by carrier, home age, and location.',
  },
  es: {
    metaTitle: 'Seguro de Casa en Florida City y Homestead, FL | M&K Agency',
    metaDesc:
      'Agentes locales de una agencia familiar ayudan a los propietarios del sur de Miami-Dade a tener cobertura lista para huracanes. Cotizaciones rápidas para el cierre. Hablamos español.',
    kicker: 'Seguro de Casa · Florida City y Homestead',
    h1a: 'Seguro de casa en Florida City y Homestead,',
    h1b: 'que aguanta cuando llega la tormenta.',
    sub: 'Los propietarios del sur de Miami-Dade enfrentan un riesgo real de huracanes e inundaciones — y un mercado donde las aseguradoras entran y salen. Nos aseguramos de que su cobertura realmente esté ahí cuando la necesite — y de que usted entienda exactamente qué incluye.',
    cta: 'Que me llame un agente',
    call: `Llame ${PHONE_DISPLAY}`,
    whyTitle: 'Por qué el seguro de casa en Florida es un desastre ahora mismo — y qué hacemos al respecto',
    whyText:
      'El aumento en costos de reaseguro, la exposición a huracanes y varias salidas e insolvencias de aseguradoras han hecho de Florida uno de los mercados de seguro de casa más difíciles del país. Como agencia familiar local, nos tomamos el tiempo de explicarle qué cubre realmente su póliza, le ayudamos con las inspecciones de 4 puntos y mitigación de viento, y verificamos que se aplique cada crédito y descuento al que tenga derecho.',
    covTitle: 'Coberturas que cotizamos todos los días',
    cov: [
      { h: 'Vivienda y otras estructuras', p: 'Costo de reconstrucción de su casa, más estructuras separadas como cobertizo, cerca o garaje independiente.' },
      { h: 'Cobertura de viento y huracán', p: 'La línea de cobertura más importante en Florida — verificamos que su deducible de viento y límites correspondan realmente al riesgo de su casa.' },
      { h: 'Responsabilidad civil y pagos médicos', p: 'Protección si alguien se lesiona en su propiedad, o si su familia es responsable de daños a la propiedad de otra persona.' },
      { h: 'Pérdida de uso / gastos adicionales de vivienda', p: 'Cubre hotel y gastos de vida si su casa queda temporalmente inhabitable tras un siniestro cubierto.' },
      { h: 'Ayuda con inspección de 4 puntos y mitigación de viento', p: 'Las casas de más de 20 años generalmente las necesitan antes de que una aseguradora emita una póliza — le recomendamos inspectores que las realizan rápido.' },
      { h: 'Orientación sobre seguro de inundación', p: 'Las pólizas estándar de casa excluyen inundación. Le diremos honestamente si necesita una póliza separada de NFIP o de inundación privada para su dirección.' },
    ],
    localTitle: 'Una oficina real, a 10 minutos',
    localText:
      'Estamos en 33550 S Dixie Hwy, Suite 102, Florida City — atendemos a propietarios en Homestead, Leisure City, Naranja y el sur de Miami-Dade. Visítenos, llame o envíe un texto. Le ayudamos a tener una póliza lista rápido para el cierre de una compra, o a revisar su renovación antes de que cambie su tarifa.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Hable con un agente licenciado',
    faqTitle: 'Seguro de casa en Florida City — preguntas frecuentes',
    faq: [
      { q: '¿Por qué subió tanto mi prima de seguro de casa?', a: 'El aumento en costos de reaseguro (lo que pagan las aseguradoras para protegerse de pérdidas catastróficas), la inflación en costos de construcción y reparación, y el riesgo de huracanes han elevado las primas en toda Florida — especialmente en casas más antiguas. Revisar su póliza con un agente cada año, en lugar de renovar automáticamente sin verla, es la forma más eficaz de confirmar que tiene la cobertura correcta y todos los descuentos que le corresponden.' },
      { q: '¿Necesito seguro de inundación por separado?', a: 'Sí — las pólizas estándar de casa excluyen totalmente el daño por inundación. Si legalmente lo necesita depende de su zona de inundación y si tiene hipoteca, pero recomendamos que la mayoría de los propietarios en Miami-Dade al menos obtengan una cotización, ya que el daño por inundación no es raro aquí.' },
      { q: '¿Qué es una inspección de 4 puntos y cuándo la necesito?', a: 'Es una inspección del techo, sistema eléctrico, plomería y HVAC de su casa, generalmente requerida por las aseguradoras para casas de más de 20 años antes de emitir una nueva póliza. Una inspección de mitigación de viento (que puede bajar su prima) a menudo se hace en la misma visita.' },
      { q: '¿Qué tan rápido pueden emitir cobertura para el cierre de una compra?', a: 'A menudo el mismo día una vez que tenemos su dirección, precio de compra y cualquier informe de inspección requerido. Trabajamos directamente con compañías de título y prestamistas para mantener los cierres a tiempo.' },
      { q: '¿Con quién voy a trabajar?', a: 'Somos una agencia familiar de Allstate en Florida City. Un agente licenciado revisará con usted la antigüedad, la ubicación y los resultados de inspección de su casa y le explicará la cobertura disponible para su situación.' },
    ],
    disclaimer: 'Las descripciones de cobertura son información general, no lenguaje de póliza. Los requisitos y la elegibilidad varían según la aseguradora, la antigüedad y la ubicación de la casa.',
  },
  ru: {
    metaTitle: 'Страховка дома во Florida City и Homestead, FL | M&K Agency',
    metaDesc:
      'Местные агенты семейного агентства помогут домовладельцам юга Miami-Dade оформить страховку дома, готовую к ураганам. Быстрый расчёт для closing. Говорим по-русски.',
    kicker: 'Страховка дома · Florida City и Homestead',
    h1a: 'Страховка дома во Florida City и Homestead —',
    h1b: 'та, что реально работает при урагане.',
    sub: 'Домовладельцы юга Miami-Dade сталкиваются с реальным риском ураганов и наводнений — и рынком, где страховые компании то появляются, то исчезают. Мы проследим, чтобы ваше покрытие действительно сработало, когда понадобится — и чтобы вы точно понимали, что в него входит.',
    cta: 'Заказать звонок агента',
    call: `Звоните ${PHONE_DISPLAY}`,
    whyTitle: 'Почему страховка дома во Флориде сейчас в хаосе — и что мы с этим делаем',
    whyText:
      'Рост стоимости перестрахования, риск ураганов и уход/банкротство нескольких страховых компаний сделали Флориду одним из самых сложных рынков страхования жилья в стране. Как местное семейное агентство, мы находим время объяснить, что реально покрывает ваш полис, помогаем с проверками 4-point и wind mitigation и следим, чтобы были применены все скидки и кредиты, на которые вы имеете право.',
    covTitle: 'Что мы считаем каждый день',
    cov: [
      { h: 'Dwelling и другие строения', p: 'Стоимость восстановления дома, плюс отдельные строения — сарай, забор, отдельный гараж.' },
      { h: 'Wind & hurricane coverage', p: 'Самая важная строка покрытия во Флориде — мы проверим, что ваш wind-дедактибл и лимиты реально соответствуют риску дома.' },
      { h: 'Liability и медицинские выплаты', p: 'Защита, если кто-то получил травму на вашем участке, или ваша семья виновна в ущербе чужому имуществу.' },
      { h: 'Loss of use / дополнительные расходы на жильё', p: 'Покрывает отель и расходы на жизнь, если дом временно непригоден для жилья после покрытого случая.' },
      { h: 'Помощь с 4-point и wind mitigation проверками', p: 'Дома старше 20 лет обычно требуют их перед выдачей полиса — подскажем инспекторов, которые сделают проверку быстро.' },
      { h: 'Консультация по страхованию от наводнения', p: 'Стандартный полис дома не покрывает наводнение. Честно скажем, нужен ли вам отдельный полис NFIP или частная страховка от наводнения для вашего адреса.' },
    ],
    localTitle: 'Настоящий офис в 10 минутах',
    localText:
      'Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City — работаем с домовладельцами Homestead, Leisure City, Naranja и юга Miami-Dade. Заходите, звоните или пишите. Поможем быстро оформить полис для closing при покупке, или разберём ваш renewal до того, как изменится тариф.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Поговорить с лицензированным агентом',
    faqTitle: 'Страховка дома во Florida City — частые вопросы',
    faq: [
      { q: 'Почему моя премия за страховку дома так выросла?', a: 'Рост стоимости перестрахования (то, что страховые платят за защиту от катастрофических убытков), инфляция стоимости стройматериалов и ремонта, а также риск ураганов подняли премии по всей Флориде — особенно для старых домов. Разбор полиса с агентом раз в год, а не автопродление не глядя, — самый надёжный способ убедиться, что у вас правильное покрытие и все положенные скидки.' },
      { q: 'Нужна ли мне отдельная страховка от наводнения?', a: 'Да — стандартный полис дома полностью исключает ущерб от наводнения. Обязательна ли она по закону, зависит от вашей flood-зоны и наличия ипотеки, но мы рекомендуем большинству домовладельцев Miami-Dade хотя бы запросить расчёт, поскольку ущерб от наводнения здесь не редкость.' },
      { q: 'Что такое 4-point inspection и когда она нужна?', a: 'Это проверка крыши, электрики, сантехники и HVAC дома, обычно требуемая страховыми для домов старше примерно 20 лет перед выдачей нового полиса. Проверка wind mitigation (которая может снизить премию) часто проводится в тот же визит.' },
      { q: 'Как быстро можно оформить покрытие для closing при покупке дома?', a: 'Часто в тот же день, как только у нас есть адрес, цена покупки и необходимые отчёты по инспекциям. Работаем напрямую с title-компаниями и кредиторами, чтобы closing прошёл по графику.' },
      { q: 'С кем именно я буду работать?', a: 'Мы — семейное агентство Allstate во Florida City. Лицензированный агент разберёт с вами возраст и расположение дома, результаты инспекций и объяснит, какое покрытие доступно в вашей ситуации.' },
    ],
    disclaimer: 'Описания покрытий — общая информация, а не текст полиса. Требования и условия зависят от страховой компании, возраста и расположения дома.',
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
    alternates: buildAlternates(params.lang, '/homeowners-insurance-florida-city'),
  };
}

export default function HomeownersInsuranceFloridaCity({ params }: { params: { lang: string } }) {
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
      <RelatedCoverage lang={l} current="/homeowners-insurance-florida-city" />
    </main>
  );
}
