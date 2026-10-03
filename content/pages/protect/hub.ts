import type { HubCopy, Lang } from './types';

// /[lang]/protect hub: tabs (Car, Home, Life, Umbrella & wealth) with a short
// summary, an illustration and a link to each deep page.
export const HUB: Record<Lang, HubCopy> = {
  en: {
    metaTitle: 'Protect Your Paycheck, Home and Family: Florida Guide | M&K Agency',
    metaDesc:
      'Plain-language guides to uninsured motorist, home liability, life and umbrella insurance, with real Florida cases and simple pictures. In English, Spanish and Russian.',
    kicker: 'Protection guide',
    h1: 'Protect your paycheck, your home and your family',
    sub: "A few things can take a family's money fast: a crash with a driver who has no insurance, a lawsuit, or a death or disability. Pick a topic below. Each guide uses plain words, simple pictures and real Florida cases.",
    tabsTitle: 'Choose a topic',
    tabsIntro: 'Tap a tab to see the short version. Each one links to a full guide.',
    panels: [
      {
        slug: 'car-insurance',
        figure: 'car-shortfall',
        title: 'Car insurance: when the other driver has no insurance',
        points: [
          "Florida doesn't require drivers to carry insurance for injuries they cause. About 1 in 5 Florida drivers was uninsured in 2023.",
          'Your PIP pays $10,000 at most, for medical bills and lost pay together.',
          'Uninsured motorist coverage (UM) on your own policy can pay what the other driver should have paid, up to your limit.',
        ],
        more: 'Read the car insurance guide',
      },
      {
        slug: 'home-insurance',
        figure: 'home-liability',
        title: 'Home insurance: when a guest gets hurt',
        points: [
          'Home liability limits are often $100,000 to $300,000. A bigger claim can fall on you.',
          'Florida was #2 in the U.S. for dog-bite claims in 2025.',
          'A pool, a dog, wet steps: three everyday ways a claim starts.',
        ],
        more: 'Read the home insurance guide',
      },
      {
        slug: 'life-insurance',
        figure: 'family-paycheck',
        title: 'Life insurance: when the paycheck stops for good',
        points: [
          '47% of U.S. adults say they would struggle to pay living expenses within 6 months of losing the main earner.',
          "Life insurance can pay off the mortgage, replace income and help pay for the kids' education.",
          'Coverage through work is a start, but it is usually tied to the job.',
        ],
        more: 'Read the life insurance guide',
      },
      {
        slug: 'umbrella-insurance',
        figure: 'limit-vs-verdict',
        title: 'Umbrella & wealth protection: when the claim is bigger than the limit',
        points: [
          'A real Florida case: a $100,000 policy and an $8.47 million judgment.',
          'An umbrella adds an extra layer on top of your car and home liability.',
          'Wealth protection covers three risks: lawsuits, death and lost income.',
        ],
        more: 'Read the umbrella & wealth guide',
      },
    ],
    whyTitle: 'Why we wrote this',
    why: [
      { type: 'p', text: "We are a family-owned agency in Florida City, with a team of 12 who speak English, Spanish and Russian. After working with more than 5,000 Florida clients, we've learned that the hardest moments come from gaps nobody explained before a crash, a lawsuit or a funeral." },
      { type: 'p', text: "These guides explain those gaps in plain words. When you are ready, send us your policy and we'll check your coverage. A licensed agent calls you back within 1 hour during business hours, and you keep a personal agent who helps you at claim time." },
    ],
    toolsTitle: 'Free tools',
    tools: [
      { href: '/en/coverage-check', label: "Send us your policy and we'll check your coverage", text: 'A licensed agent reviews your policy and shows you the gaps, in plain words.' },
      { href: '/en/protection-check', label: 'Financial protection check and mortgage calculator', text: 'Answer a few quick questions and see where your family may have gaps.' },
    ],
    faq: [
      { q: 'What is this guide?', a: 'A free set of plain-language pages about the coverage gaps that hurt Florida families the most: uninsured drivers, home liability, life insurance and umbrella coverage.' },
      { q: 'Which coverage should I look at first?', a: 'If you drive, start with uninsured motorist coverage. If you have kids or a mortgage, look at life insurance. If you own a home or have savings, look at your liability limits and an umbrella.' },
      { q: 'Are the stories real?', a: 'Stories marked "Example" are made up to explain the idea. Items marked "Real case" come from public Florida court records, and we link to each one.' },
      { q: 'Can you check my current policy?', a: "Yes. Send us your policy and we'll check your coverage. A photo of the first page is enough to start." },
      { q: 'Do you speak Spanish and Russian?', a: 'Yes. Our team of 12 speaks English, Spanish and Russian.' },
    ],
    ctaTitle: "Not sure where your gaps are? Let's look together.",
    ctaText: "Send us your policy and we'll check your coverage. We call back within 1 hour during business hours (Mon–Fri 9–6, Saturday by appointment).",
    disclaimer:
      'These pages are general information, not legal advice and not policy language. What is covered depends on your policy, its limits and its exclusions. Examples are illustrative; real cases come from public records. No one can promise how a claim will turn out.',
    sources: ['iiiUninsured', 'flhsmvInsurance', 'statPip', 'iiiDogBite', 'limra2026', 'caseSc1785'],
  },
  es: {
    metaTitle: 'Proteja su sueldo, su casa y su familia: guía de Florida | M&K Agency',
    metaDesc:
      'Guías en palabras simples sobre conductores sin seguro, responsabilidad en casa, seguro de vida y umbrella, con casos reales de Florida y dibujos sencillos.',
    kicker: 'Guía de protección',
    h1: 'Proteja su sueldo, su casa y su familia',
    sub: 'Hay pocas cosas que pueden llevarse rápido el dinero de una familia: un choque con alguien sin seguro, una demanda, o una muerte o incapacidad. Escoja un tema. Cada guía usa palabras simples, dibujos sencillos y casos reales de Florida.',
    tabsTitle: 'Escoja un tema',
    tabsIntro: 'Toque una pestaña para ver el resumen. Cada una lleva a una guía completa.',
    panels: [
      {
        slug: 'car-insurance',
        figure: 'car-shortfall',
        title: 'Seguro de auto: cuando el otro conductor no tiene seguro',
        points: [
          'Florida no exige seguro para las lesiones que uno le causa a otros. Cerca de 1 de cada 5 conductores en Florida no tenía seguro en 2023.',
          'Su PIP paga como máximo $10,000, para gastos médicos y sueldo perdido juntos.',
          'La cobertura de conductor sin seguro (UM) de su propia póliza puede pagar lo que debió pagar el otro conductor, hasta su límite.',
        ],
        more: 'Leer la guía de seguro de auto',
      },
      {
        slug: 'home-insurance',
        figure: 'home-liability',
        title: 'Seguro de casa: cuando un invitado se lesiona',
        points: [
          'Los límites de responsabilidad de casa suelen ser de $100,000 a $300,000. Un reclamo mayor puede caer en usted.',
          'Florida fue el #2 en EE. UU. en reclamos por mordidas de perro en 2025.',
          'Una piscina, un perro, unos escalones mojados: tres formas comunes en que empieza un reclamo.',
        ],
        more: 'Leer la guía de seguro de casa',
      },
      {
        slug: 'life-insurance',
        figure: 'family-paycheck',
        title: 'Seguro de vida: cuando el sueldo se detiene para siempre',
        points: [
          'El 47% de los adultos en EE. UU. dice que tendría problemas para pagar sus gastos en 6 meses si faltara quien más gana.',
          'El seguro de vida puede pagar la hipoteca, reemplazar el ingreso y ayudar con los estudios de los hijos.',
          'El seguro del trabajo es un comienzo, pero normalmente depende del empleo.',
        ],
        more: 'Leer la guía de seguro de vida',
      },
      {
        slug: 'umbrella-insurance',
        figure: 'limit-vs-verdict',
        title: 'Umbrella y patrimonio: cuando el reclamo es mayor que el límite',
        points: [
          'Un caso real en Florida: una póliza de $100,000 y una sentencia de $8.47 millones.',
          'El umbrella agrega una capa extra encima de la responsabilidad de su auto y su casa.',
          'Proteger el patrimonio cubre tres riesgos: demandas, muerte e ingreso perdido.',
        ],
        more: 'Leer la guía de umbrella y patrimonio',
      },
    ],
    whyTitle: 'Por qué escribimos esto',
    why: [
      { type: 'p', text: 'Somos una agencia familiar en Florida City, con un equipo de 12 personas que hablan español, inglés y ruso. Después de trabajar con más de 5,000 clientes en Florida, aprendimos que los momentos más duros vienen de huecos que nadie explicó antes de un choque, una demanda o un funeral.' },
      { type: 'p', text: 'Estas guías explican esos huecos en palabras simples. Cuando esté listo, envíenos su póliza y revisamos su cobertura. Un agente licenciado le devuelve la llamada en menos de 1 hora en horario de oficina, y usted tiene un agente personal que le ayuda cuando tiene un reclamo.' },
    ],
    toolsTitle: 'Herramientas gratis',
    tools: [
      { href: '/es/coverage-check', label: 'Envíenos su póliza y la revisamos', text: 'Un agente licenciado revisa su póliza y le muestra los huecos, en palabras simples.' },
      { href: '/es/protection-check', label: 'Revisión de protección financiera y calculadora de hipoteca', text: 'Conteste unas preguntas rápidas y vea dónde su familia puede tener huecos.' },
    ],
    faq: [
      { q: '¿Qué es esta guía?', a: 'Un conjunto gratis de páginas en palabras simples sobre los huecos de cobertura que más afectan a las familias de Florida: conductores sin seguro, responsabilidad en casa, seguro de vida y umbrella.' },
      { q: '¿Qué cobertura debo revisar primero?', a: 'Si maneja, empiece por la cobertura de conductor sin seguro. Si tiene hijos o hipoteca, mire el seguro de vida. Si tiene casa propia o ahorros, revise sus límites de responsabilidad y un umbrella.' },
      { q: '¿Las historias son reales?', a: 'Las historias marcadas como "Ejemplo" son inventadas para explicar la idea. Los "casos reales" vienen de registros públicos de tribunales de Florida, y enlazamos cada uno.' },
      { q: '¿Pueden revisar mi póliza actual?', a: 'Sí. Envíenos su póliza y revisamos su cobertura. Para empezar basta con una foto de la primera página.' },
      { q: '¿Hablan español y ruso?', a: 'Sí. Nuestro equipo de 12 personas habla español, inglés y ruso.' },
    ],
    ctaTitle: '¿No sabe dónde están sus huecos? Veámoslo juntos.',
    ctaText: 'Envíenos su póliza y revisamos su cobertura. Le devolvemos la llamada en menos de 1 hora en horario de oficina (lunes a viernes de 9 a 6, sábados con cita).',
    disclaimer:
      'Estas páginas son información general, no asesoría legal ni lenguaje de póliza. Lo que se cubre depende de su póliza, sus límites y sus exclusiones. Los ejemplos son ilustrativos; los casos reales vienen de registros públicos. Nadie puede prometer cómo terminará un reclamo.',
    sources: ['iiiUninsured', 'flhsmvInsurance', 'statPip', 'iiiDogBite', 'limra2026', 'caseSc1785'],
  },
  ru: {
    metaTitle: 'Защитите доход, дом и семью: гид по Флориде | M&K Agency',
    metaDesc:
      'Простые гиды по UM, ответственности дома, страхованию жизни и полису umbrella — с реальными делами во Флориде и понятными схемами. На русском, английском и испанском.',
    kicker: 'Гид по защите',
    h1: 'Защитите свой доход, дом и семью',
    sub: 'Есть несколько вещей, которые быстро отнимают у семьи деньги: авария с водителем без страховки, судебный иск, смерть или потеря трудоспособности. Выберите тему ниже. В каждом гиде — простые слова, понятные схемы и реальные дела во Флориде.',
    tabsTitle: 'Выберите тему',
    tabsIntro: 'Нажмите на вкладку, чтобы увидеть главное. Из каждой можно перейти к полному гиду.',
    panels: [
      {
        slug: 'car-insurance',
        figure: 'car-shortfall',
        title: 'Автострахование: когда у виновника нет страховки',
        points: [
          'Флорида не требует страховать травмы, которые водитель причиняет другим. В 2023 году примерно каждый пятый водитель во Флориде ездил без страховки.',
          'Ваш PIP платит максимум $10 000 — и на лечение, и на потерянный доход вместе.',
          'Покрытие UM в вашем собственном полисе может заплатить то, что должен был заплатить виновник, в пределах лимита.',
        ],
        more: 'Читать гид по автострахованию',
      },
      {
        slug: 'home-insurance',
        figure: 'home-liability',
        title: 'Страховка дома: когда пострадал гость',
        points: [
          'Лимит ответственности по дому часто от $100 000 до $300 000. Если претензия больше, остальное может лечь на вас.',
          'В 2025 году Флорида была на 2-м месте в США по страховым случаям с укусами собак.',
          'Бассейн, собака, мокрые ступеньки — три обычных способа, как начинается претензия.',
        ],
        more: 'Читать гид по страховке дома',
      },
      {
        slug: 'life-insurance',
        figure: 'family-paycheck',
        title: 'Страхование жизни: когда зарплата пропадает навсегда',
        points: [
          '47% взрослых в США говорят, что уже через 6 месяцев с трудом оплачивали бы расходы после потери кормильца.',
          'Страховка жизни может закрыть ипотеку, заменить доход и помочь оплатить учёбу детей.',
          'Страховка от работы — это начало, но обычно она привязана к месту работы.',
        ],
        more: 'Читать гид по страхованию жизни',
      },
      {
        slug: 'umbrella-insurance',
        figure: 'limit-vs-verdict',
        title: 'Umbrella и защита капитала: когда претензия больше лимита',
        points: [
          'Реальное дело во Флориде: полис на $100 000 и решение суда на $8,47 млн.',
          'Umbrella добавляет ещё один слой поверх ответственности по машине и дому.',
          'Защита капитала — это три риска: иски, смерть и потеря дохода.',
        ],
        more: 'Читать гид по umbrella и защите капитала',
      },
    ],
    whyTitle: 'Зачем мы это написали',
    why: [
      { type: 'p', text: 'Мы — семейное агентство во Флорида-Сити, команда из 12 человек, которые говорят по-русски, по-английски и по-испански. За годы работы с более чем 5000 клиентами во Флориде мы поняли: самые тяжёлые моменты возникают из-за дыр в защите, о которых никто не рассказал до аварии, иска или похорон.' },
      { type: 'p', text: 'В этих гидах мы объясняем эти дыры простыми словами. Когда будете готовы, пришлите полис — проверим покрытие. Лицензированный агент перезвонит в течение часа в рабочее время, и у вас будет личный агент, который поможет при страховом случае.' },
    ],
    toolsTitle: 'Бесплатные инструменты',
    tools: [
      { href: '/ru/coverage-check', label: 'Пришлите полис — проверим покрытие', text: 'Лицензированный агент посмотрит ваш полис и простыми словами покажет, где дыры.' },
      { href: '/ru/protection-check', label: 'Проверка финансовой защиты и ипотечный калькулятор', text: 'Ответьте на несколько коротких вопросов и посмотрите, где у семьи могут быть пробелы.' },
    ],
    faq: [
      { q: 'Что это за гид?', a: 'Бесплатный набор страниц простым языком о пробелах в страховке, которые сильнее всего бьют по семьям во Флориде: незастрахованные водители, ответственность дома, страхование жизни и umbrella.' },
      { q: 'С какого покрытия начать?', a: 'Если вы водите машину, начните с UM. Если у вас дети или ипотека, посмотрите страхование жизни. Если у вас свой дом или сбережения, проверьте лимиты ответственности и подумайте об umbrella.' },
      { q: 'Истории настоящие?', a: 'Истории с пометкой «Пример» придуманы, чтобы объяснить идею. «Реальные дела» взяты из открытых судебных документов Флориды, и на каждое есть ссылка.' },
      { q: 'Можете проверить мой нынешний полис?', a: 'Да. Пришлите полис — проверим покрытие. Для начала достаточно фото первой страницы.' },
      { q: 'Вы говорите по-русски и по-испански?', a: 'Да. Наша команда из 12 человек говорит по-русски, по-английски и по-испански.' },
    ],
    ctaTitle: 'Не знаете, где у вас дыры? Давайте посмотрим вместе.',
    ctaText: 'Пришлите полис — проверим покрытие. В рабочее время перезваниваем в течение часа (пн–пт 9–6, в субботу по записи).',
    disclaimer:
      'Эти страницы — общая информация, а не юридическая консультация и не текст полиса. Что покрывается, зависит от вашего полиса, его лимитов и исключений. Примеры условные; реальные дела взяты из открытых документов. Никто не может обещать, чем закончится страховой случай.',
    sources: ['iiiUninsured', 'flhsmvInsurance', 'statPip', 'iiiDogBite', 'limra2026', 'caseSc1785'],
  },
};
