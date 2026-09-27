// /[lang]/coverage-check: "Free Coverage Check" landing page (Google Ads
// destination for the Coverage Checkup / Revisión de cobertura / Condo HO-6
// campaigns). All visible copy for the three languages lives here.
//
// EN is the owner-approved copy, used verbatim. ES (usted) and RU are
// translations of the same copy.
//
// COMPLIANCE: no carrier brands, no former staff, no price / "cheap" claims,
// no reviews or ratings until a real Google reviews widget is added.
// Client-safe: imported by the page (server) and the form (client).

export type Lang = 'en' | 'es' | 'ru';
export const pickLang = (l?: string): Lang => (l === 'es' || l === 'ru' ? l : 'en');

export const CC_PATH = '/coverage-check';
/** Lead `source` sent to /api/callback (shows in the email + Telegram alert). */
export const CC_SOURCE = 'coverage-check';

/** Canonical (English) policy values sent to the API, in form order. */
export const CC_POLICIES = ['Auto', 'Home', 'Condo (HO-6)', 'Business', 'Life', 'Other'] as const;
export type CcPolicy = (typeof CC_POLICIES)[number];

export const LANG_SELF: Record<Lang, string> = { en: 'English', es: 'Español', ru: 'Русский' };

// Consent: the form uses the site's standard required TCPA / FTSA checkbox
// (components/ConsentCheckbox + lib/consent.ts), same text and stored version
// as every other lead form.

type Gap = { id: string; label: string; img: string; alt: string; h: string; p: string };
type Step = { n: string; h: string; p: string };
type Faq = { q: string; a: string };

export type CcCopy = {
  stepWord: string; // "Step" label shown with each step number
  metaTitle: string;
  metaDesc: string;
  badge: string;
  h1: string;
  sub: string;
  cta: string;
  callPrefix: string; // followed by the phone number
  micro: string;
  heroAlt: string;
  gapsH2: string;
  gaps: Gap[]; // ids double as page anchors (#auto, #home, #condo, #business, #life)
  gapsCta: string;
  howH2: string;
  steps: Step[];
  tip: string;
  trustH2: string;
  trust: string[];
  faqH2: string;
  faq: Faq[];
  formH2: string;
  formSub: string;
  form: {
    name: string;
    phone: string;
    lang: string;
    policy: string;
    choose: string;
    policies: Record<CcPolicy, string>;
    submit: string;
    sending: string;
    talkBefore: string; // "Prefer to talk now? Call "
    talkMid: string; // " or "
    talkWa: string; // "message us on WhatsApp"
    talkAfter: string; // "."
    waText: string; // prefilled WhatsApp message on this page
    badPhone: string;
    err: string;
    okH: string;
    okP: string;
  };
  reviewsH2: string;
  reviewsSoon: string;
};

export const CC: Record<Lang, CcCopy> = {
  en: {
    stepWord: 'Step',
    metaTitle: 'Free 5-Minute Coverage Check | M&K Agency, Florida',
    metaDesc:
      'A licensed Florida agent reviews your auto, home, condo, business or life policy and shows you the gaps. Free, no obligation. English, Spanish, Russian.',
    badge: '🛡️ Free coverage check',
    h1: 'Free 5-Minute Coverage Check for Florida Families',
    sub: "Most people find out what their policy doesn't cover after the accident, the storm, or the lawsuit. A licensed agent will review your auto, home, condo, business, or life coverage and show you the gaps before they cost you.",
    cta: 'Have an agent call me',
    callPrefix: 'Or call now:',
    micro: 'Free. No obligation. English · Español · Русский',
    heroAlt: 'A Florida family in front of their home',
    gapsH2: 'Where your current policy could leave you exposed',
    gaps: [
      {
        id: 'auto',
        label: 'Auto',
        img: '/images/gap-auto.jpg',
        alt: 'Two cars after a collision on a Florida street',
        h: "Auto: the other driver's minimum policy won't cover you",
        p: "Florida doesn't require most drivers to carry bodily injury liability. Your required PIP pays 80% of your medical bills, up to $10,000. If an uninsured or underinsured driver hits you and your bills go past that, Uninsured Motorist (UM/UIM) coverage is what pays the rest. Many people declined it when they bought their policy and don't know it.",
      },
      {
        id: 'home',
        label: 'Home',
        img: '/images/Hero-hurricane.jpg',
        alt: 'Florida homes with tarped roofs after a hurricane',
        h: 'Home: your hurricane deductible may be bigger than you think',
        p: "In Florida, hurricane deductibles are often a percentage of your home's insured value, commonly 2%, 5% or 10%, not a flat amount. On a home insured for $300,000, a 5% deductible means you pay the first $15,000 of hurricane damage yourself. We'll show you what yours is and what your options are before the next storm.",
      },
      {
        id: 'condo',
        label: 'Condo',
        img: '/images/gap-home.jpg',
        alt: 'A Florida condo building',
        h: 'Condo: the master policy stops short of your unit',
        p: "Your association's master policy covers the building. In Florida it generally doesn't cover your floors, cabinets, countertops, appliances, wall coverings, or anything you own. And when the association passes a hurricane deductible on to owners, Florida HO-6 policies are only required to include $2,000 of loss assessment coverage.",
      },
      {
        id: 'business',
        label: 'Business',
        img: '/images/gap-commercial.jpg',
        alt: 'A small business owner at her shop door',
        h: 'Business: one lawsuit can outrun your limit',
        p: "A customer slips in your shop. Your work truck rear-ends someone. Many small businesses carry a $1,000,000 limit and assume that's enough. If a judgment goes higher, or the claim falls outside what your policy covers, the difference comes out of your business.",
      },
      {
        id: 'life',
        label: 'Life',
        img: '/images/gap-life.jpg',
        alt: 'A parent with three children at the kitchen table',
        h: "Life: your paycheck stops, your mortgage doesn't",
        p: "Picture a parent earning $60,000 a year, with a $250,000 mortgage and two kids. A work policy equal to one year's salary pays $60,000. How long could your family keep the house on that?",
      },
    ],
    gapsCta: 'Find my gaps. Have an agent call me',
    howH2: 'How it works',
    steps: [
      { n: '1', h: 'Leave your number.', p: 'Your name, your phone, and which policy you want checked. It takes 30 seconds.' },
      { n: '2', h: 'An agent calls you', p: 'within one hour during business hours (Mon–Fri, 9 AM–6 PM ET).' },
      { n: '3', h: 'You get a clear review:', p: "what's protected, what isn't, and what to fix. You don't have to buy anything." },
    ],
    tip: 'Tip: Have the first page of your policy (the declarations page) handy. A photo on your phone is fine.',
    trustH2: 'A family agency that stays after the sale',
    trust: [
      'Family-owned agency with 5,000+ clients across Florida and a team of 12.',
      'We speak English, Spanish, and Russian.',
      "When you have a claim, we help you from the first call to the final payment. We don't disappear after the sale.",
      'A personal agent you know by name, not an 800-number queue.',
      'Licensed in Florida, license #L109526. Office: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034.',
    ],
    faqH2: 'Questions people ask before a coverage check',
    faq: [
      { q: 'Is it really free?', a: "Yes. There's no fee, no obligation, and no pressure. We review what you have and tell you what we find." },
      { q: 'Do I have to cancel my current policy?', a: "No. Keep your policy. If we find a gap, we'll show you how to close it. If a change makes sense, we'll explain why, and the decision is yours." },
      { q: 'Will you help me with a claim?', a: "Yes. We help you report it, follow up with the adjuster, and keep you updated until it's settled." },
      { q: "My English isn't strong. Is that a problem?", a: 'Not at all. Our agents speak Spanish and Russian. Pick your language in the form and an agent who speaks it will call you.' },
      { q: 'How fast will you call me?', a: 'Within one hour during business hours, Monday to Friday, 9 AM–6 PM ET. If you write to us after hours, we call the next business morning.' },
      { q: 'What if my coverage is fine?', a: "Then you'll know for sure, and it cost you nothing. That's a good outcome too." },
    ],
    formH2: "Find out what your policy doesn't cover before you need it",
    formSub: '5 minutes on the phone. Free. No obligation.',
    form: {
      name: 'Full name',
      phone: 'Phone number',
      lang: 'Preferred language',
      policy: 'Which policy should we check?',
      choose: 'Choose one',
      policies: {
        Auto: 'Auto',
        Home: 'Home',
        'Condo (HO-6)': 'Condo (HO-6)',
        Business: 'Business',
        Life: 'Life',
        Other: 'Other (motorcycle, boat, renters, pet)',
      },
      submit: 'Have an agent call me',
      sending: 'Sending…',
      talkBefore: 'Prefer to talk now? Call ',
      talkMid: ' or ',
      talkWa: 'message us on WhatsApp',
      talkAfter: '.',
      waText: "Hi, I'd like a free coverage check.",
      badPhone: 'Please enter a 10-digit phone number.',
      err: 'Something went wrong and your request was not sent. Please try again or call us.',
      okH: 'Thank you! We got your request.',
      okP: "An agent will call you within one hour during business hours (Mon–Fri, 9 AM–6 PM ET). If it's after hours, we'll call you the next business morning.",
    },
    reviewsH2: 'What our clients say',
    reviewsSoon: 'Google reviews from our clients will appear here soon.',
  },

  es: {
    stepWord: 'Paso',
    metaTitle: 'Revisión Gratis de Cobertura en 5 Minutos | M&K Agency, Florida',
    metaDesc:
      'Un agente licenciado en Florida revisa su póliza de auto, casa, condominio, negocio o vida y le muestra los huecos. Gratis y sin compromiso. Hablamos español.',
    badge: '🛡️ Revisión de cobertura gratis',
    h1: 'Revisión gratis de su cobertura en 5 minutos para familias de Florida',
    sub: 'La mayoría de las personas descubre lo que su póliza no cubre después del accidente, la tormenta o la demanda. Un agente licenciado revisará su seguro de auto, casa, condominio, negocio o vida y le mostrará los huecos antes de que le cuesten caro.',
    cta: 'Que me llame un agente',
    callPrefix: 'O llame ahora:',
    micro: 'Gratis. Sin compromiso. English · Español · Русский',
    heroAlt: 'Una familia de Florida frente a su casa',
    gapsH2: 'Dónde su póliza actual podría dejarlo desprotegido',
    gaps: [
      {
        id: 'auto',
        label: 'Auto',
        img: '/images/gap-auto.jpg',
        alt: 'Dos autos después de un choque en una calle de Florida',
        h: 'Auto: la póliza mínima del otro conductor no lo va a cubrir a usted',
        p: 'Florida no exige a la mayoría de los conductores tener seguro de responsabilidad por lesiones corporales. Su PIP obligatorio paga el 80% de sus gastos médicos, hasta $10,000. Si lo choca un conductor sin seguro o con seguro insuficiente y sus gastos pasan de esa cantidad, la cobertura de Motorista sin Seguro (UM/UIM) es la que paga el resto. Muchas personas la rechazaron cuando compraron su póliza y ni lo saben.',
      },
      {
        id: 'home',
        label: 'Casa',
        img: '/images/Hero-hurricane.jpg',
        alt: 'Casas de Florida con techos cubiertos con lonas después de un huracán',
        h: 'Casa: su deducible de huracán puede ser más alto de lo que cree',
        p: 'En Florida, el deducible de huracán suele ser un porcentaje del valor asegurado de su casa, comúnmente 2%, 5% o 10%, y no una cantidad fija. En una casa asegurada por $300,000, un deducible del 5% significa que usted paga de su bolsillo los primeros $15,000 de daños por huracán. Le mostramos cuál es el suyo y qué opciones tiene antes de la próxima tormenta.',
      },
      {
        id: 'condo',
        label: 'Condominio',
        img: '/images/gap-home.jpg',
        alt: 'Un edificio de condominios en Florida',
        h: 'Condominio: la póliza maestra no llega hasta su unidad',
        p: 'La póliza maestra de su asociación cubre el edificio. En Florida, por lo general no cubre sus pisos, gabinetes, encimeras, electrodomésticos, revestimientos de pared ni nada de lo que usted tiene. Y cuando la asociación les pasa a los dueños el deducible de huracán, las pólizas HO-6 de Florida solo están obligadas a incluir $2,000 de cobertura de evaluación por pérdidas (loss assessment).',
      },
      {
        id: 'business',
        label: 'Negocio',
        img: '/images/gap-commercial.jpg',
        alt: 'Una dueña de negocio en la puerta de su local',
        h: 'Negocio: una sola demanda puede superar su límite',
        p: 'Un cliente se resbala en su local. Su camioneta de trabajo choca a otro auto por detrás. Muchos pequeños negocios tienen un límite de $1,000,000 y creen que es suficiente. Si una sentencia es mayor, o el reclamo queda fuera de lo que cubre su póliza, la diferencia sale de su negocio.',
      },
      {
        id: 'life',
        label: 'Vida',
        img: '/images/gap-life.jpg',
        alt: 'Un padre con sus tres hijos en la mesa de la cocina',
        h: 'Vida: su sueldo se detiene, su hipoteca no',
        p: 'Imagine a un padre o una madre que gana $60,000 al año, con una hipoteca de $250,000 y dos hijos. Un seguro del trabajo equivalente a un año de sueldo paga $60,000. ¿Por cuánto tiempo podría su familia conservar la casa con eso?',
      },
    ],
    gapsCta: 'Ver mis huecos: que me llame un agente',
    howH2: 'Cómo funciona',
    steps: [
      { n: '1', h: 'Deje su número.', p: 'Su nombre, su teléfono y qué póliza quiere revisar. Toma 30 segundos.' },
      { n: '2', h: 'Un agente le llama', p: 'en menos de una hora en horario de oficina (lunes a viernes, 9 AM–6 PM ET).' },
      { n: '3', h: 'Recibe una revisión clara:', p: 'qué está protegido, qué no y qué conviene corregir. No tiene que comprar nada.' },
    ],
    tip: 'Consejo: tenga a mano la primera página de su póliza (la página de declaraciones). Una foto en su teléfono está bien.',
    trustH2: 'Una agencia familiar que sigue a su lado después de la venta',
    trust: [
      'Agencia familiar con más de 5,000 clientes en toda Florida y un equipo de 12 personas.',
      'Hablamos inglés, español y ruso.',
      'Cuando tiene un reclamo, le ayudamos desde la primera llamada hasta el pago final. No desaparecemos después de la venta.',
      'Un agente personal que usted conoce por su nombre, no una fila de espera en un número 800.',
      'Licenciados en Florida, licencia #L109526. Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034.',
    ],
    faqH2: 'Preguntas que nos hacen antes de una revisión de cobertura',
    faq: [
      { q: '¿De verdad es gratis?', a: 'Sí. No hay costo, ni compromiso, ni presión. Revisamos lo que tiene y le decimos lo que encontramos.' },
      { q: '¿Tengo que cancelar mi póliza actual?', a: 'No. Quédese con su póliza. Si encontramos un hueco, le mostramos cómo cerrarlo. Si conviene hacer un cambio, le explicamos por qué, y la decisión es suya.' },
      { q: '¿Me ayudan con un reclamo?', a: 'Sí. Le ayudamos a reportarlo, le damos seguimiento con el ajustador y lo mantenemos informado hasta que se resuelva.' },
      { q: 'No hablo bien inglés. ¿Es un problema?', a: 'Para nada. Nuestros agentes hablan español y ruso. Elija su idioma en el formulario y le llamará un agente que lo hable.' },
      { q: '¿Qué tan rápido me llaman?', a: 'En menos de una hora en horario de oficina, de lunes a viernes, de 9 AM a 6 PM ET. Si nos escribe fuera de ese horario, le llamamos a primera hora del siguiente día hábil.' },
      { q: '¿Y si mi cobertura está bien?', a: 'Entonces lo sabrá con seguridad, y no le costó nada. Eso también es un buen resultado.' },
    ],
    formH2: 'Descubra lo que su póliza no cubre antes de necesitarlo',
    formSub: '5 minutos por teléfono. Gratis. Sin compromiso.',
    form: {
      name: 'Nombre completo',
      phone: 'Teléfono',
      lang: 'Idioma preferido',
      policy: '¿Qué póliza revisamos?',
      choose: 'Elija una',
      policies: {
        Auto: 'Auto',
        Home: 'Casa',
        'Condo (HO-6)': 'Condominio (HO-6)',
        Business: 'Negocio',
        Life: 'Vida',
        Other: 'Otra (motocicleta, bote, inquilino, mascota)',
      },
      submit: 'Que me llame un agente',
      sending: 'Enviando…',
      talkBefore: '¿Prefiere hablar ahora? Llame al ',
      talkMid: ' o ',
      talkWa: 'escríbanos por WhatsApp',
      talkAfter: '.',
      waText: 'Hola, quisiera una revisión gratis de mi cobertura.',
      badPhone: 'Escriba un número de teléfono de 10 dígitos.',
      err: 'No pudimos enviar su solicitud. Intente de nuevo o llámenos.',
      okH: '¡Gracias! Recibimos su solicitud.',
      okP: 'Un agente le llamará en menos de una hora en horario de oficina (lunes a viernes, 9 AM–6 PM ET). Si ya es fuera de horario, le llamamos a primera hora del siguiente día hábil.',
    },
    reviewsH2: 'Lo que dicen nuestros clientes',
    reviewsSoon: 'Muy pronto verá aquí las reseñas de Google de nuestros clientes.',
  },

  ru: {
    stepWord: 'Шаг',
    metaTitle: 'Бесплатная проверка страховки за 5 минут | M&K Agency, Флорида',
    metaDesc:
      'Лицензированный агент во Флориде проверит ваш полис авто, дома, кондо, бизнеса или жизни и покажет пробелы. Бесплатно и без обязательств. Говорим по-русски.',
    badge: '🛡️ Бесплатная проверка страховки',
    h1: 'Бесплатная проверка страховки за 5 минут для семей во Флориде',
    sub: 'Большинство людей узнаёт, чего не покрывает их полис, уже после аварии, шторма или судебного иска. Лицензированный агент проверит вашу страховку авто, дома, кондо, бизнеса или жизни и покажет пробелы до того, как они обойдутся вам дорого.',
    cta: 'Заказать звонок агента',
    callPrefix: 'Или позвоните сейчас:',
    micro: 'Бесплатно. Без обязательств. English · Español · Русский',
    heroAlt: 'Семья во Флориде перед своим домом',
    gapsH2: 'Где ваш нынешний полис может оставить вас без защиты',
    gaps: [
      {
        id: 'auto',
        label: 'Авто',
        img: '/images/gap-auto.jpg',
        alt: 'Две машины после аварии на улице во Флориде',
        h: 'Авто: минимальный полис другого водителя вас не защитит',
        p: 'Во Флориде большинство водителей не обязаны страховать ответственность за травмы других людей (bodily injury liability). Ваш обязательный PIP оплачивает 80% медицинских счетов, но не больше $10,000. Если в вас врезался водитель без страховки или с недостаточной страховкой, а ваши счета превысили эту сумму, остальное оплачивает страховка от незастрахованных водителей (UM/UIM). Многие отказались от неё при покупке полиса и даже не знают об этом.',
      },
      {
        id: 'home',
        label: 'Дом',
        img: '/images/Hero-hurricane.jpg',
        alt: 'Дома во Флориде с крышами под брезентом после урагана',
        h: 'Дом: франшиза на ураган может оказаться больше, чем вы думаете',
        p: 'Во Флориде франшиза на ураган часто считается в процентах от страховой стоимости дома, обычно 2%, 5% или 10%, а не фиксированной суммой. Если дом застрахован на $300,000, франшиза 5% означает, что первые $15,000 ущерба от урагана вы оплачиваете сами. Мы покажем, какая франшиза у вас и какие есть варианты, до следующего шторма.',
      },
      {
        id: 'condo',
        label: 'Кондо',
        img: '/images/gap-home.jpg',
        alt: 'Жилой комплекс кондо во Флориде',
        h: 'Кондо: полис ассоциации не доходит до вашей квартиры',
        p: 'Мастер-полис вашей ассоциации покрывает здание. Во Флориде он, как правило, не покрывает ваши полы, шкафы, столешницы, бытовую технику, отделку стен и всё ваше имущество. А когда ассоциация перекладывает франшизу по урагану на владельцев, полисы HO-6 во Флориде обязаны включать всего $2,000 покрытия таких взносов (loss assessment).',
      },
      {
        id: 'business',
        label: 'Бизнес',
        img: '/images/gap-commercial.jpg',
        alt: 'Владелица небольшого бизнеса у дверей своего магазина',
        h: 'Бизнес: один иск может превысить ваш лимит',
        p: 'Клиент поскользнулся у вас в магазине. Ваш рабочий грузовик врезался сзади в чужую машину. Многие малые бизнесы держат лимит $1,000,000 и считают, что этого хватит. Если суд присудит больше или случай не подпадает под покрытие полиса, разницу заплатит ваш бизнес.',
      },
      {
        id: 'life',
        label: 'Жизнь',
        img: '/images/gap-life.jpg',
        alt: 'Отец с тремя детьми за кухонным столом',
        h: 'Жизнь: зарплата прекращается, а ипотека — нет',
        p: 'Представьте родителя с доходом $60,000 в год, ипотекой на $250,000 и двумя детьми. Страховка от работы в размере годовой зарплаты выплатит $60,000. Как долго ваша семья сможет платить за дом на эти деньги?',
      },
    ],
    gapsCta: 'Найти мои пробелы: заказать звонок агента',
    howH2: 'Как это работает',
    steps: [
      { n: '1', h: 'Оставьте номер.', p: 'Ваше имя, телефон и какой полис проверить. Это займёт 30 секунд.' },
      { n: '2', h: 'Агент перезвонит вам', p: 'в течение часа в рабочее время (пн–пт, 9:00–18:00 ET).' },
      { n: '3', h: 'Вы получите понятный разбор:', p: 'что защищено, что нет и что стоит исправить. Покупать ничего не нужно.' },
    ],
    tip: 'Совет: держите под рукой первую страницу полиса (declarations page). Подойдёт и фото на телефоне.',
    trustH2: 'Семейное агентство, которое не исчезает после продажи',
    trust: [
      'Семейное агентство: более 5,000 клиентов по всей Флориде и команда из 12 человек.',
      'Мы говорим на английском, испанском и русском.',
      'Если у вас страховой случай, мы помогаем от первого звонка до финальной выплаты. Мы не исчезаем после продажи.',
      'Личный агент, которого вы знаете по имени, а не очередь на горячей линии.',
      'Лицензия штата Флорида #L109526. Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034.',
    ],
    faqH2: 'Что спрашивают перед проверкой страховки',
    faq: [
      { q: 'Это правда бесплатно?', a: 'Да. Никакой платы, никаких обязательств и никакого давления. Мы смотрим, что у вас есть, и рассказываем, что нашли.' },
      { q: 'Нужно ли отменять мой текущий полис?', a: 'Нет. Оставьте свой полис. Если мы найдём пробел, покажем, как его закрыть. Если изменения имеют смысл, объясним почему, а решать будете вы.' },
      { q: 'Вы поможете со страховым случаем?', a: 'Да. Поможем заявить о случае, будем держать связь с оценщиком (adjuster) и сообщать вам новости, пока всё не будет урегулировано.' },
      { q: 'Я плохо говорю по-английски. Это проблема?', a: 'Совсем нет. Наши агенты говорят по-испански и по-русски. Выберите язык в форме, и вам позвонит агент, который на нём говорит.' },
      { q: 'Как быстро вы позвоните?', a: 'В течение часа в рабочее время, с понедельника по пятницу, 9:00–18:00 ET. Если вы напишете нам в нерабочее время, мы позвоним утром следующего рабочего дня.' },
      { q: 'А если с моей страховкой всё в порядке?', a: 'Тогда вы будете знать это наверняка, и это ничего вам не стоило. Это тоже хороший результат.' },
    ],
    formH2: 'Узнайте, чего не покрывает ваш полис, пока это не понадобилось',
    formSub: '5 минут по телефону. Бесплатно. Без обязательств.',
    form: {
      name: 'Имя и фамилия',
      phone: 'Телефон',
      lang: 'Предпочитаемый язык',
      policy: 'Какой полис проверить?',
      choose: 'Выберите',
      policies: {
        Auto: 'Авто',
        Home: 'Дом',
        'Condo (HO-6)': 'Кондо (HO-6)',
        Business: 'Бизнес',
        Life: 'Жизнь',
        Other: 'Другое (мотоцикл, лодка, аренда жилья, питомец)',
      },
      submit: 'Заказать звонок агента',
      sending: 'Отправляем…',
      talkBefore: 'Хотите поговорить сейчас? Позвоните ',
      talkMid: ' или ',
      talkWa: 'напишите нам в WhatsApp',
      talkAfter: '.',
      waText: 'Здравствуйте, хочу бесплатную проверку покрытия.',
      badPhone: 'Введите номер телефона из 10 цифр.',
      err: 'Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.',
      okH: 'Спасибо! Заявка получена.',
      okP: 'Агент позвонит вам в течение часа в рабочее время (пн–пт, 9:00–18:00 ET). Если сейчас нерабочее время, мы позвоним утром следующего рабочего дня.',
    },
    reviewsH2: 'Что говорят наши клиенты',
    reviewsSoon: 'Скоро здесь появятся отзывы наших клиентов из Google.',
  },
};
