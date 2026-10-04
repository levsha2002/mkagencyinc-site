import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against official sources:
// - s. 482.1562 (2026): anyone applying commercial fertilizer to an urban landscape must hold
//   the FDACS limited certification; requires the s. 403.9338 training certificate; valid 4
//   years; recertification needs 4 CEU classroom hours (2 on fertilizer BMPs); does NOT
//   authorize pesticide application (incl. pesticide-fertilizer mixes), a pest control
//   business, or unlicensed workers under supervision; yard workers using the resident's
//   fertilizer and equipment on individual residential properties are exempt.
// - s. 403.9338 (2026): DEP/UF-IFAS training; certificate holder not subject to additional
//   local testing.
// - s. 403.9337 (2026): model Florida-friendly fertilizer ordinance; local governments.
// - FDACS FAQ: six hours of Green Industry BMP training; certificate valid four years.
// - Miami-Dade County Fertilizer Regulations page (DERM, Ch. 18C, adopted April 2021):
//   no N or P fertilizer May 15 - Oct 31; 20-ft fertilizer-free zones; P only with a soil test;
//   deflector shields; clippings off streets/drains; no application before heavy rain
//   (> 2 in/24 h) or within 60 days after seeding/sodding; commercial applicators carry FDACS
//   certification; GI-BMP certificate needed to obtain/renew the county Local Business Tax
//   receipt; applies countywide incl. municipalities; enforcement under Ch. 8CC.
// Nitrogen rate numbers left out (detail; readers are pointed to the ordinance). No fees.
const S = {
  s4821562: 'https://www.flsenate.gov/Laws/Statutes/2026/482.1562',
  s4039338: 'https://www.flsenate.gov/Laws/Statutes/2026/403.9338',
  fdacs: 'https://www.fdacs.gov/Business-Services/Pest-Control/Pest-Control-FAQ/Do-commercial-fertilizer-applicators-need-to-be-licensed-to-apply-fertilizers',
  mdc: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1620843942468395',
};

export const post: BlogPost = {
  slug: 'fertilizer-rules-landscapers-miami-dade',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Fertilizer Rules for Landscapers in Miami-Dade: State Certification and the Summer Ban',
      metaTitle: 'Fertilizer Rules for Miami-Dade Landscapers | M&K Agency',
      description: 'Do you fertilize lawns in Miami-Dade? The FDACS applicator certification, the May 15–October 31 ban, fertilizer-free zones and the business tax link.',
      excerpt: 'If your crew spreads fertilizer for customers in Miami-Dade, two sets of rules apply: a state certification and a county ordinance with a summer ban. What each one requires, with the official links.',
      category: 'Landscaping insurance',
      body: [
        { type: 'p', text: 'Fertilizer is part of the job for most lawn and landscape businesses. In Miami-Dade it is also regulated twice: by the state, which certifies the people who apply it commercially, and by the county, which limits when, where and how much. This guide sums up both. It does not cover pesticides, which have their own licensing.' },
        { type: 'h2', text: 'The state certification' },
        { type: 'p', text: 'Under [s. 482.1562](' + S.s4821562 + '), anyone applying commercial fertilizer to an urban landscape must hold a **limited certification for urban landscape commercial fertilizer application** from the Florida Department of Agriculture and Consumer Services (FDACS). The main points:' },
        { type: 'ul', items: [
          '**Training first.** You submit a certificate from the Green Industries Best Management Practices training, which FDACS describes as six hours ([FDACS](' + S.fdacs + ')). With that state certification, you are not subject to additional local testing ([s. 403.9338](' + S.s4039338 + ')).',
          '**Four years.** The certification expires 4 years after it is issued. To renew, you need 4 classroom hours of continuing education, at least 2 of them on fertilizer best management practices.',
          '**Each person.** It does not allow uncertified workers to apply fertilizer under your supervision.',
          '**Fertilizer only.** It does not authorize applying pesticides to turf or ornamentals, including weed-and-feed type pesticide-fertilizer mixes, or running a pest control business.',
        ] },
        { type: 'p', text: 'One exemption: yard workers who fertilize only individual residential properties, using fertilizer and equipment provided by the owner or resident, do not need the certification.' },
        { type: 'h2', text: 'The Miami-Dade fertilizer ordinance' },
        { type: 'p', text: 'Miami-Dade adopted its Florida-friendly fertilizer ordinance (Chapter 18C of the county code) in April 2021 to protect canals, lakes and Biscayne Bay. It applies throughout the county, including inside cities, and some cities add their own rules ([Miami-Dade County](' + S.mdc + ')). Key rules for commercial applicators:' },
        { type: 'ul', items: [
          '**Summer ban:** no fertilizer containing nitrogen or phosphorus from **May 15 through October 31**.',
          '**Fertilizer-free zones:** none within **20 feet** of a water body, storm drain, Biscayne Bay, wetlands or the top of a seawall.',
          '**Phosphorus** only when a soil test shows a deficiency.',
          '**Weather and new sod:** no nitrogen or phosphorus during severe weather advisories, when more than 2 inches of rain in 24 hours is forecast, or in the first 60 days after seeding or sodding.',
          '**On the job:** use deflector shields near pavement and water, keep clippings off sidewalks, streets and drains, and carry proof of your FDACS certification while applying.',
          '**Rates:** the ordinance limits how much nitrogen you can apply per application and per year, and sets a slow-release share for granular products. Check the county page for the numbers.',
        ] },
        { type: 'h2', text: 'The business tax receipt connection' },
        { type: 'p', text: 'The county also ties the training to your paperwork. To obtain or renew a Miami-Dade Local Business Tax Receipt in a category that may apply fertilizer, you must show the Green Industries BMP training certificate. For the other first steps of opening a business, see our guide to [opening a small business in Miami-Dade](/en/blog/start-small-business-miami-dade-licenses).' },
        { type: 'h2', text: 'Why this matters for your insurance' },
        { type: 'p', text: 'When we quote, we describe your operations as they are. Tell us whether your crews apply fertilizer or chemicals, who holds which certification, and whether any work is near water. For coverage built around lawn and landscape work, see our [landscaping insurance page](/en/landscaping-insurance-florida).' },
        { type: 'callout', title: 'Setting up or reviewing your coverage?', text: '[Request a quote](/en/quote) and list every service you offer. A licensed agent will go over it with you in English, Spanish or Russian. This is general information, not legal advice; check the statute and the county ordinance for the full rules.' },
      ],
      faq: [
        { q: 'When can’t you fertilize in Miami-Dade?', a: 'Fertilizer containing nitrogen or phosphorus may not be applied from May 15 through October 31, and never within 20 feet of water bodies, storm drains, wetlands or a seawall.' },
        { q: 'Do I need a license to fertilize lawns commercially in Florida?', a: 'Yes. Anyone applying commercial fertilizer to an urban landscape needs the FDACS limited certification for urban landscape commercial fertilizer application, which requires Green Industries BMP training.' },
        { q: 'Does the fertilizer certification let me apply weed-and-feed?', a: 'No. It does not authorize applying pesticides, including pesticide-fertilizer mixtures, to turf or ornamentals. That requires separate pesticide licensing.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 482.1562 (2026): limited certification for urban landscape commercial fertilizer application', url: S.s4821562 },
        { label: 'Florida Statutes s. 403.9338 (2026): urban landscape best management practices training', url: S.s4039338 },
        { label: 'FDACS: Do commercial fertilizer applicators need to be licensed?', url: S.fdacs },
        { label: 'Miami-Dade County (DERM): Fertilizer Regulations', url: S.mdc },
      ],
    },
    es: {
      title: 'Reglas de fertilizante para jardineros en Miami-Dade: certificación del estado y la prohibición de verano',
      metaTitle: 'Fertilizante en Miami-Dade: reglas para jardineros | M&K Agency',
      description: '¿Fertiliza jardines en Miami-Dade? La certificación de FDACS, la prohibición del 15 de mayo al 31 de octubre, las zonas sin fertilizante y el recibo local.',
      excerpt: 'Si su cuadrilla aplica fertilizante a clientes en Miami-Dade, hay dos juegos de reglas: una certificación del estado y una ordenanza del condado con prohibición de verano. Qué exige cada una, con los enlaces oficiales.',
      category: 'Seguro para jardinería',
      body: [
        { type: 'p', text: 'El fertilizante es parte del trabajo de casi cualquier negocio de jardinería y mantenimiento de grama. En Miami-Dade, además, está regulado dos veces: el estado certifica a quienes lo aplican de forma comercial, y el condado limita cuándo, dónde y cuánto. Esta guía resume las dos. No trata los pesticidas, que tienen su propia licencia.' },
        { type: 'h2', text: 'La certificación del estado' },
        { type: 'p', text: 'Según la [sección 482.1562](' + S.s4821562 + '), toda persona que aplique fertilizante comercial en jardines urbanos debe tener la **certificación limitada para aplicación comercial de fertilizante en paisajes urbanos** del Departamento de Agricultura y Servicios al Consumidor de Florida (FDACS). Lo principal:' },
        { type: 'ul', items: [
          '**Primero el curso.** Se presenta el certificado del curso de Buenas Prácticas de Manejo para la Industria Verde (GI-BMP), que según FDACS dura seis horas ([FDACS](' + S.fdacs + ')). Con esa certificación estatal no le pueden exigir exámenes locales adicionales ([sección 403.9338](' + S.s4039338 + ')).',
          '**Cuatro años.** La certificación vence a los 4 años. Para renovarla necesita 4 horas de educación continua en aula, al menos 2 sobre buenas prácticas con fertilizantes.',
          '**Cada persona.** No permite que trabajadores sin certificación apliquen fertilizante bajo su supervisión.',
          '**Solo fertilizante.** No autoriza aplicar pesticidas a la grama u ornamentales, incluidas las mezclas tipo weed-and-feed, ni operar un negocio de control de plagas.',
        ] },
        { type: 'p', text: 'Una excepción: quienes fertilizan solo casas particulares con el fertilizante y el equipo que les da el dueño o el residente no necesitan la certificación.' },
        { type: 'h2', text: 'La ordenanza de fertilizantes de Miami-Dade' },
        { type: 'p', text: 'Miami-Dade aprobó en abril de 2021 su ordenanza de uso de fertilizantes Florida-friendly (Capítulo 18C del código del condado) para proteger canales, lagos y la Bahía de Biscayne. Aplica en todo el condado, también dentro de las ciudades, y algunas ciudades tienen reglas adicionales ([Condado de Miami-Dade](' + S.mdc + ')). Las reglas clave para aplicadores comerciales:' },
        { type: 'ul', items: [
          '**Prohibición de verano:** nada de fertilizante con nitrógeno o fósforo del **15 de mayo al 31 de octubre**.',
          '**Zonas sin fertilizante:** a menos de **20 pies** de cuerpos de agua, desagües pluviales, la Bahía de Biscayne, humedales o el borde de un muro de contención (seawall).',
          '**Fósforo** solo si un análisis de suelo muestra deficiencia.',
          '**Clima y grama nueva:** nada de nitrógeno ni fósforo durante avisos de mal tiempo, cuando se pronostican más de 2 pulgadas de lluvia en 24 horas, ni en los primeros 60 días después de sembrar o poner sod.',
          '**En el trabajo:** use deflectores cerca del pavimento y del agua, no deje grama cortada en aceras, calles ni desagües, y lleve consigo la prueba de su certificación de FDACS.',
          '**Cantidades:** la ordenanza limita el nitrógeno por aplicación y por año, y fija un porcentaje de liberación lenta para productos granulados. Vea las cifras en la página del condado.',
        ] },
        { type: 'h2', text: 'La relación con el recibo de impuesto local' },
        { type: 'p', text: 'El condado también conecta el curso con sus trámites: para obtener o renovar el Local Business Tax Receipt de Miami-Dade en una categoría que pueda aplicar fertilizante, debe presentar el certificado del curso GI-BMP. Para los demás pasos al abrir un negocio, vea nuestra guía sobre [cómo abrir un pequeño negocio en Miami-Dade](/es/blog/start-small-business-miami-dade-licenses).' },
        { type: 'h2', text: 'Por qué importa para su seguro' },
        { type: 'p', text: 'Al cotizar describimos sus operaciones tal como son. Díganos si sus cuadrillas aplican fertilizantes o químicos, quién tiene cada certificación y si trabajan cerca del agua. Para coberturas pensadas para jardinería, vea nuestra [página de seguro para jardinería](/es/landscaping-insurance-florida).' },
        { type: 'callout', title: '¿Va a contratar o revisar su seguro?', text: '[Pida una cotización](/es/quote) e incluya todos los servicios que ofrece. Un agente con licencia lo revisa con usted en español, inglés o ruso. Esto es información general, no asesoría legal; consulte la ley y la ordenanza del condado para ver todas las reglas.' },
      ],
      faq: [
        { q: '¿Cuándo no se puede fertilizar en Miami-Dade?', a: 'No se puede aplicar fertilizante con nitrógeno o fósforo del 15 de mayo al 31 de octubre, y nunca a menos de 20 pies de cuerpos de agua, desagües pluviales, humedales o un seawall.' },
        { q: '¿Necesito licencia para fertilizar jardines de forma comercial en Florida?', a: 'Sí. Quien aplica fertilizante comercial en jardines urbanos necesita la certificación limitada de FDACS, que exige el curso de Buenas Prácticas de Manejo para la Industria Verde.' },
        { q: '¿La certificación de fertilizante me permite aplicar weed-and-feed?', a: 'No. No autoriza aplicar pesticidas, incluidas las mezclas de pesticida y fertilizante, a la grama u ornamentales. Para eso se necesita una licencia de pesticidas aparte.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 482.1562 (2026): certificación limitada para aplicación comercial de fertilizante (en inglés)', url: S.s4821562 },
        { label: 'Estatutos de Florida, sección 403.9338 (2026): capacitación en buenas prácticas de manejo (en inglés)', url: S.s4039338 },
        { label: 'FDACS: ¿necesitan licencia los aplicadores comerciales de fertilizante? (en inglés)', url: S.fdacs },
        { label: 'Condado de Miami-Dade (DERM): reglamento de fertilizantes (en inglés)', url: S.mdc },
      ],
    },
    ru: {
      title: 'Правила по удобрениям для ландшафтных компаний в Майами-Дейд: сертификат штата и летний запрет',
      metaTitle: 'Удобрения в Майами-Дейд: правила для лендскейперов | M&K Agency',
      description: 'Удобряете газоны в Майами-Дейд? Сертификат FDACS, запрет с 15 мая по 31 октября, зоны без удобрений и связь с business tax receipt.',
      excerpt: 'Если ваша бригада вносит удобрения клиентам в Майами-Дейд, действуют два набора правил: сертификат штата и окружной закон с летним запретом. Что требует каждый, со ссылками на официальные источники.',
      category: 'Страхование ландшафтного бизнеса',
      body: [
        { type: 'p', text: 'Удобрения — обычная часть работы почти любой компании по уходу за газонами и ландшафтом. В Майами-Дейд их регулируют дважды: штат сертифицирует тех, кто вносит удобрения на коммерческой основе, а округ ограничивает, когда, где и сколько. Здесь кратко об обоих. Пестициды сюда не входят — для них отдельное лицензирование.' },
        { type: 'h2', text: 'Сертификат штата' },
        { type: 'p', text: 'По [ст. 482.1562](' + S.s4821562 + ') любой, кто вносит коммерческие удобрения на городские газоны и клумбы, должен иметь **limited certification for urban landscape commercial fertilizer application** от Департамента сельского хозяйства и защиты потребителей Флориды (FDACS). Главное:' },
        { type: 'ul', items: [
          '**Сначала обучение.** Подаётся сертификат курса Green Industries Best Management Practices (GI-BMP); по данным FDACS, это шесть часов ([FDACS](' + S.fdacs + ')). С этим сертификатом штата дополнительных местных экзаменов от вас требовать не могут ([ст. 403.9338](' + S.s4039338 + ')).',
          '**Четыре года.** Сертификат действует 4 года. Для продления нужно 4 часа очного повышения квалификации, из них не меньше 2 — по правилам работы с удобрениями.',
          '**На каждого человека.** Работники без сертификата не могут вносить удобрения «под вашим присмотром».',
          '**Только удобрения.** Сертификат не даёт права вносить пестициды на газон или декоративные растения, включая смеси типа weed-and-feed, и не даёт права вести pest control бизнес.',
        ] },
        { type: 'p', text: 'Исключение: тем, кто удобряет только частные дома удобрением и инструментом владельца или жильца, сертификат не нужен.' },
        { type: 'h2', text: 'Окружной закон Майами-Дейд об удобрениях' },
        { type: 'p', text: 'В апреле 2021 года Майами-Дейд принял закон о Florida-friendly удобрениях (глава 18C окружного кодекса), чтобы защитить каналы, озёра и залив Бискейн. Он действует по всему округу, в том числе внутри городов, а некоторые города добавляют свои правила ([округ Майами-Дейд](' + S.mdc + ')). Ключевые правила для коммерческих компаний:' },
        { type: 'ul', items: [
          '**Летний запрет:** никаких удобрений с азотом или фосфором с **15 мая по 31 октября**.',
          '**Зоны без удобрений:** ближе **20 футов** к водоёму, ливнёвке, заливу Бискейн, заболоченным участкам или краю seawall вносить нельзя.',
          '**Фосфор** — только если анализ почвы показал его нехватку.',
          '**Погода и новый газон:** никакого азота и фосфора при штормовых предупреждениях, при прогнозе более 2 дюймов осадков за 24 часа и в первые 60 дней после посева или укладки sod.',
          '**На объекте:** используйте отражающие щитки рядом с асфальтом и водой, не оставляйте скошенную траву на тротуарах, дорогах и в ливнёвках, держите при себе подтверждение сертификата FDACS.',
          '**Нормы:** закон ограничивает количество азота за одно внесение и за год и задаёт долю медленно высвобождающегося азота в гранулах. Цифры — на странице округа.',
        ] },
        { type: 'h2', text: 'Связь с Business Tax Receipt' },
        { type: 'p', text: 'Округ связывает обучение и с документами: чтобы получить или продлить Local Business Tax Receipt в Майами-Дейд по категории, где возможно внесение удобрений, нужно показать сертификат курса GI-BMP. Об остальных первых шагах при открытии бизнеса — в нашей статье о том, [как открыть малый бизнес в Майами-Дейд](/ru/blog/start-small-business-miami-dade-licenses).' },
        { type: 'h2', text: 'Почему это важно для страховки' },
        { type: 'p', text: 'При расчёте мы описываем вашу работу такой, какая она есть. Скажите нам, вносят ли ваши бригады удобрения или химию, у кого какой сертификат и бывают ли работы рядом с водой. Страхование под ландшафтный бизнес — на нашей [странице страхования для лендскейперов](/ru/landscaping-insurance-florida).' },
        { type: 'callout', title: 'Оформляете или пересматриваете страховку?', text: '[Оставьте заявку на расчёт](/ru/quote) и перечислите все услуги, которые вы оказываете. Лицензированный агент разберёт всё с вами на русском, английском или испанском. Это общая информация, а не юридическая консультация; полные правила — в законе штата и окружном кодексе.' },
      ],
      faq: [
        { q: 'Когда в Майами-Дейд нельзя вносить удобрения?', a: 'Удобрения с азотом или фосфором нельзя вносить с 15 мая по 31 октября, а ближе 20 футов к водоёмам, ливнёвкам, заболоченным участкам и seawall — никогда.' },
        { q: 'Нужна ли во Флориде лицензия, чтобы удобрять газоны за деньги?', a: 'Да. Для коммерческого внесения удобрений на городские газоны нужен limited certification от FDACS, а для него — курс Green Industries BMP.' },
        { q: 'Можно ли с этим сертификатом вносить weed-and-feed?', a: 'Нет. Он не даёт права вносить пестициды, включая смеси пестицидов с удобрениями, на газон или декоративные растения. Для этого нужна отдельная лицензия на пестициды.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 482.1562 (2026): сертификат на коммерческое внесение удобрений (на английском)', url: S.s4821562 },
        { label: 'Законы Флориды, ст. 403.9338 (2026): обучение best management practices (на английском)', url: S.s4039338 },
        { label: 'FDACS: нужна ли лицензия для коммерческого внесения удобрений? (на английском)', url: S.fdacs },
        { label: 'Округ Майами-Дейд (DERM): правила по удобрениям (на английском)', url: S.mdc },
      ],
    },
  },
};
