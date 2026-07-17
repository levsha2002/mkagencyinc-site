import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import RelatedCoverage from '@/components/RelatedCoverage';
import { buildAlternates } from '@/lib/seo';

// Geo-landing: Personal Umbrella Insurance — Florida City / Homestead.
// Self-contained content (not in dictionaries.ts), same pattern as the other geo pages.

type Lang = 'en' | 'es' | 'ru';

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'Umbrella Insurance in Florida City, FL | Extra Liability Protection | M&K Agency',
    metaDesc:
      'A personal umbrella policy adds $1M+ of liability protection on top of your auto and home coverage. Local licensed agents, English, Español, по-русски. Call (305) 859-3953.',
    kicker: 'Personal Umbrella Insurance · Florida City & Homestead',
    h1a: 'One lawsuit shouldn’t undo everything you’ve built.',
    h1b: 'That’s what umbrella insurance is for.',
    sub: 'A personal umbrella policy adds an extra layer of liability protection — usually $1 million or more — on top of the limits on your auto and home insurance. If a serious claim goes beyond those limits, your umbrella steps in to protect your savings, your home, and your future income.',
    cta: 'Have an agent call me',
    call: `Call ${PHONE_DISPLAY}`,
    bannerAlt: 'A Florida family protected by umbrella insurance',
    bannerText: 'For a few hundred dollars a year, most families can add $1 million of extra protection.',
    whyTitle: 'Why your home and auto limits may not be enough',
    whyText:
      'Your auto and home policies each cap how much they’ll pay if you’re found responsible for someone else’s injuries or damage. One at-fault highway accident, a guest hurt at your home, or a teen driver mistake can produce a claim far larger than those limits — and in a lawsuit, your savings, home equity, and future wages can be exposed for the difference. An umbrella policy sits on top of your existing coverage and pays beyond it, plus covers legal defense costs. It’s one of the least expensive ways to protect everything you’ve worked for.',
    covTitle: 'What a personal umbrella policy covers',
    cov: [
      { h: '$1M to $5M+ in extra liability', p: 'Choose a limit that fits your assets and income. Coverage kicks in above your underlying auto and home liability limits.' },
      { h: 'Auto, home & watercraft claims', p: 'Extends over your car, your home, and often your boat or jet ski — one policy backing several parts of your life.' },
      { h: 'Legal defense costs', p: 'Lawyer and court costs from a covered lawsuit are typically paid in addition to your limit — and those costs alone can be substantial.' },
      { h: 'Rental & landlord liability', p: 'Own a rental property? An umbrella can extend over the liability on your rental dwelling policy too.' },
      { h: 'Certain personal-injury claims', p: 'Many umbrella policies also cover claims like libel, slander, and defamation that standard home and auto policies exclude.' },
      { h: 'Protection for the whole household', p: 'Covers you and family members in your home — including teen drivers, often the biggest single liability risk a family faces.' },
    ],
    localTitle: 'A real office, 10 minutes away',
    localText:
      'We’re at 33550 S Dixie Hwy, Suite 102, Florida City — serving families and business owners across Homestead, Leisure City, Naranja and South Miami-Dade. We’ll review your current auto and home limits, make sure they qualify you for an umbrella, and right-size the coverage to what you actually need to protect.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Talk to a licensed agent',
    faqTitle: 'Umbrella insurance in Florida — common questions',
    faq: [
      { q: 'What is umbrella insurance?', a: 'A personal umbrella policy provides extra liability coverage above the limits of your auto, home, or other underlying policies. If you’re responsible for injuries or damage that exceed those limits, the umbrella pays the difference up to its own limit, and also covers related legal defense costs.' },
      { q: 'Do I need it if I already have home and auto insurance?', a: 'Umbrella coverage is a layer on top of them, not a replacement. Home and auto liability limits are often lower than the cost of a serious accident or lawsuit. If you have savings, a home, rental property, a teen driver, or public exposure, an umbrella protects what those base limits don’t.' },
      { q: 'How much does umbrella insurance cost?', a: 'It’s one of the most affordable coverages relative to what it protects — many households add $1 million of coverage for a few hundred dollars a year. Your exact price depends on your household, drivers, properties, and the limit you choose. We’ll go over real numbers with you.' },
      { q: 'How much coverage should I have?', a: 'A common guideline is to carry at least enough umbrella coverage to protect your net worth — and ideally your future income too. We’ll help you land on a limit that fits your situation without over-buying.' },
      { q: 'What does umbrella insurance NOT cover?', a: 'It doesn’t cover your own injuries or property (that’s what your health, auto, and home policies are for), intentional or criminal acts, or most business activities. It’s specifically for third-party liability claims against you.' },
    ],
    disclaimer: 'This is general information, not policy language. Coverage, eligibility, required underlying limits, and pricing vary by carrier and your specific situation.',
  },
  es: {
    metaTitle: 'Seguro Paraguas (Umbrella) en Florida City, FL | Protección de Responsabilidad Extra | M&K Agency',
    metaDesc:
      'Una póliza paraguas agrega $1M+ de protección de responsabilidad sobre su seguro de auto y casa. Agentes locales licenciados. Hablamos español. Llame al (305) 859-3953.',
    kicker: 'Seguro Paraguas (Umbrella) · Florida City y Homestead',
    h1a: 'Una demanda no debería deshacer todo lo que ha construido.',
    h1b: 'Para eso existe el seguro paraguas.',
    sub: 'Una póliza paraguas personal agrega una capa extra de protección de responsabilidad — normalmente $1 millón o más — sobre los límites de su seguro de auto y casa. Si un reclamo serio supera esos límites, su paraguas interviene para proteger sus ahorros, su casa y sus ingresos futuros.',
    cta: 'Que me llame un agente',
    call: `Llame ${PHONE_DISPLAY}`,
    bannerAlt: 'Una familia de Florida protegida por el seguro paraguas',
    bannerText: 'Por unos cientos de dólares al año, la mayoría de las familias pueden agregar $1 millón de protección extra.',
    whyTitle: 'Por qué los límites de su casa y auto pueden no ser suficientes',
    whyText:
      'Sus pólizas de auto y casa limitan cuánto pagarán si usted es responsable de las lesiones o daños de otra persona. Un accidente por su culpa en la autopista, un invitado lesionado en su casa o un error de un conductor adolescente pueden generar un reclamo mucho mayor que esos límites — y en una demanda, sus ahorros, el valor de su casa y sus ingresos futuros pueden quedar expuestos por la diferencia. Una póliza paraguas se coloca sobre su cobertura existente y paga más allá de ella, además de cubrir los costos de defensa legal. Es una de las formas más económicas de proteger todo lo que ha trabajado.',
    covTitle: 'Qué cubre una póliza paraguas personal',
    cov: [
      { h: '$1M a $5M+ de responsabilidad extra', p: 'Elija un límite acorde a sus bienes e ingresos. La cobertura entra por encima de sus límites de responsabilidad de auto y casa.' },
      { h: 'Reclamos de auto, casa y embarcaciones', p: 'Se extiende sobre su auto, su casa y muchas veces su bote o moto acuática — una póliza respaldando varias partes de su vida.' },
      { h: 'Costos de defensa legal', p: 'Los honorarios de abogado y costos judiciales de una demanda cubierta suelen pagarse además de su límite — y solo esos costos pueden ser considerables.' },
      { h: 'Responsabilidad de alquiler / arrendador', p: '¿Tiene una propiedad de alquiler? Un paraguas también puede extenderse sobre la responsabilidad de su póliza de vivienda de alquiler.' },
      { h: 'Ciertos reclamos por daño personal', p: 'Muchas pólizas paraguas también cubren reclamos como difamación y calumnia que las pólizas estándar de casa y auto excluyen.' },
      { h: 'Protección para todo el hogar', p: 'Cubre a usted y a los familiares de su hogar — incluidos los conductores adolescentes, muchas veces el mayor riesgo de responsabilidad de una familia.' },
    ],
    localTitle: 'Una oficina real, a 10 minutos',
    localText:
      'Estamos en 33550 S Dixie Hwy, Suite 102, Florida City — atendemos a familias y dueños de negocios en Homestead, Leisure City, Naranja y el sur de Miami-Dade. Revisamos sus límites actuales de auto y casa, nos aseguramos de que califique para un paraguas y ajustamos la cobertura a lo que realmente necesita proteger.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Hable con un agente licenciado',
    faqTitle: 'Seguro paraguas en Florida — preguntas frecuentes',
    faq: [
      { q: '¿Qué es el seguro paraguas?', a: 'Una póliza paraguas personal ofrece cobertura de responsabilidad extra por encima de los límites de sus pólizas de auto, casa u otras subyacentes. Si usted es responsable de lesiones o daños que superan esos límites, el paraguas paga la diferencia hasta su propio límite, y también cubre los costos de defensa legal relacionados.' },
      { q: '¿La necesito si ya tengo seguro de casa y auto?', a: 'La cobertura paraguas es una capa sobre ellas, no un reemplazo. Los límites de responsabilidad de casa y auto suelen ser menores que el costo de un accidente o demanda serios. Si tiene ahorros, casa, propiedad de alquiler, un conductor adolescente o exposición pública, un paraguas protege lo que esos límites base no cubren.' },
      { q: '¿Cuánto cuesta el seguro paraguas?', a: 'Es una de las coberturas más económicas en relación con lo que protege — muchos hogares agregan $1 millón de cobertura por unos cientos de dólares al año. Su precio exacto depende de su hogar, conductores, propiedades y el límite que elija. Revisaremos números reales con usted.' },
      { q: '¿Cuánta cobertura debo tener?', a: 'Una guía común es tener al menos suficiente cobertura paraguas para proteger su patrimonio neto — e idealmente también sus ingresos futuros. Le ayudamos a definir un límite acorde a su situación sin comprar de más.' },
      { q: '¿Qué NO cubre el seguro paraguas?', a: 'No cubre sus propias lesiones o bienes (para eso están sus pólizas de salud, auto y casa), actos intencionales o delictivos, ni la mayoría de las actividades comerciales. Es específicamente para reclamos de responsabilidad de terceros contra usted.' },
    ],
    disclaimer: 'Esto es información general, no lenguaje de póliza. La cobertura, elegibilidad, límites subyacentes requeridos y precios varían según la aseguradora y su situación específica.',
  },
  ru: {
    metaTitle: 'Зонтичная страховка (Umbrella) во Florida City, FL | Дополнительная защита ответственности | M&K Agency',
    metaDesc:
      'Личный зонтичный полис добавляет $1M+ защиты ответственности поверх авто- и домовой страховки. Местные агенты. Говорим по-русски. Звоните (305) 859-3953.',
    kicker: 'Зонтичная страховка (Umbrella) · Florida City и Homestead',
    h1a: 'Один иск не должен перечеркнуть всё, что вы построили.',
    h1b: 'Для этого и существует зонтичная страховка.',
    sub: 'Личный зонтичный полис добавляет дополнительный слой защиты ответственности — обычно $1 миллион и больше — поверх лимитов вашей авто- и домовой страховки. Если серьёзный иск выходит за эти лимиты, зонтичный полис вступает в дело и защищает ваши сбережения, дом и будущий доход.',
    cta: 'Заказать звонок агента',
    call: `Звоните ${PHONE_DISPLAY}`,
    bannerAlt: 'Семья во Флориде под защитой зонтичной страховки',
    bannerText: 'За несколько сотен долларов в год большинство семей могут добавить $1 миллион дополнительной защиты.',
    whyTitle: 'Почему лимитов дома и авто может не хватить',
    whyText:
      'Ваши авто- и домовой полисы ограничивают, сколько они заплатят, если вы виновны в травмах или ущербе другому человеку. Одна авария по вашей вине на трассе, травма гостя у вас дома или ошибка водителя-подростка могут привести к иску, намного превышающему эти лимиты — и в суде ваши сбережения, стоимость дома и будущая зарплата могут оказаться под ударом на разницу. Зонтичный полис стоит поверх существующего покрытия и платит сверх него, а также покрывает расходы на юридическую защиту. Это один из самых недорогих способов защитить всё, что вы заработали.',
    covTitle: 'Что покрывает личный зонтичный полис',
    cov: [
      { h: 'От $1M до $5M+ дополнительной ответственности', p: 'Выберите лимит под ваши активы и доход. Покрытие включается сверх ваших базовых лимитов ответственности по авто и дому.' },
      { h: 'Иски по авто, дому и водному транспорту', p: 'Распространяется на вашу машину, дом и часто лодку или гидроцикл — один полис поддерживает несколько сфер вашей жизни.' },
      { h: 'Расходы на юридическую защиту', p: 'Услуги адвоката и судебные издержки по покрытому иску обычно оплачиваются сверх лимита — а одни эти расходы могут быть значительными.' },
      { h: 'Ответственность по аренде / для арендодателя', p: 'Есть арендная недвижимость? Зонтик может распространяться и на ответственность по полису арендного жилья.' },
      { h: 'Отдельные иски о личном вреде', p: 'Многие зонтичные полисы также покрывают иски вроде клеветы и диффамации, которые стандартные полисы дома и авто исключают.' },
      { h: 'Защита всей семьи', p: 'Покрывает вас и членов семьи в доме — включая водителей-подростков, часто это самый большой отдельный риск ответственности для семьи.' },
    ],
    localTitle: 'Настоящий офис в 10 минутах',
    localText:
      'Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City — работаем с семьями и владельцами бизнеса в Homestead, Leisure City, Naranja и на юге Miami-Dade. Мы проверим ваши текущие лимиты по авто и дому, убедимся, что вы проходите для зонтичного полиса, и подберём покрытие под то, что действительно нужно защитить.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Поговорить с лицензированным агентом',
    faqTitle: 'Зонтичная страховка во Флориде — частые вопросы',
    faq: [
      { q: 'Что такое зонтичная страховка?', a: 'Личный зонтичный полис даёт дополнительное покрытие ответственности сверх лимитов ваших авто-, домового и других базовых полисов. Если вы виновны в травмах или ущербе, превышающих эти лимиты, зонтик платит разницу до своего лимита, а также покрывает связанные расходы на юридическую защиту.' },
      { q: 'Нужна ли она, если у меня уже есть страховка дома и авто?', a: 'Зонтичное покрытие — это слой поверх них, а не замена. Лимиты ответственности по дому и авто часто ниже стоимости серьёзной аварии или иска. Если у вас есть сбережения, дом, арендная недвижимость, водитель-подросток или публичность, зонтик защищает то, что базовые лимиты не покрывают.' },
      { q: 'Сколько стоит зонтичная страховка?', a: 'Это одно из самых доступных покрытий относительно того, что оно защищает — многие семьи добавляют $1 миллион покрытия за несколько сотен долларов в год. Точная цена зависит от вашей семьи, водителей, недвижимости и выбранного лимита. Разберём реальные цифры вместе.' },
      { q: 'Сколько покрытия мне нужно?', a: 'Частое правило — иметь как минимум столько зонтичного покрытия, чтобы защитить чистую стоимость активов, а в идеале и будущий доход. Поможем подобрать лимит под вашу ситуацию без переплаты.' },
      { q: 'Что зонтичная страховка НЕ покрывает?', a: 'Она не покрывает ваши собственные травмы или имущество (для этого есть медицинская, авто- и домовая страховки), умышленные или преступные действия и большинство бизнес-деятельности. Она именно для исков третьих лиц против вас.' },
    ],
    disclaimer: 'Это общая информация, а не текст полиса. Покрытие, право на участие, требуемые базовые лимиты и цены зависят от страховой компании и вашей конкретной ситуации.',
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
    alternates: buildAlternates(params.lang, '/umbrella-insurance-florida-city'),
  };
}

export default function UmbrellaInsuranceFloridaCity({ params }: { params: { lang: string } }) {
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
              <span className="stars">★★★★½</span>
              <span>{t.langLine}</span>
            </div>
          </div>
          <LeadForm lang={l} />
        </div>
      </section>

      {/* Image banner — background image degrades gracefully to a navy gradient if the file is missing */}
      <section
        aria-label={t.bannerAlt}
        style={{
          backgroundImage: "linear-gradient(rgba(8,42,89,.62), rgba(8,42,89,.62)), url('/images/umbrella-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          padding: '54px 20px',
          textAlign: 'center',
        }}
      >
        <p style={{ maxWidth: '40rem', margin: '0 auto', fontSize: '1.25rem', fontWeight: 600 }}>
          {t.bannerText}
        </p>
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

      <RelatedCoverage lang={l} current="/umbrella-insurance-florida-city" />
    </main>
  );
}
