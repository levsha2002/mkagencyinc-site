import type { NewsEdition, NewsSource } from '../types';

// Edition for Sunday, Nov. 1, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_FFA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-01',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=FFA&format=CI&version=1&glossary=0',
  title: 'Flood Watch, NWS Miami, 12:43 a.m. Sun Nov 1, 2026',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-01',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 1:57 a.m. Sun Nov 1, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-01',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 5:38 a.m. EST Sun Nov 1, 2026',
};

const NWS_KEY: NewsSource = {
  name: 'National Weather Service Key West',
  date: '2026-11-01',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=key&wwa=all',
  title: 'Active watches, warnings and advisories, NWS Key West, Sun Nov 1, 2026',
};

const GAO_FLOOD: NewsSource = {
  name: 'U.S. Government Accountability Office',
  date: '2026-10-01',
  url: 'https://www.gao.gov/products/gao-27-108012',
  title: 'Flood Insurance: Congressional Action Could Help Increase Coverage for At-Risk Properties (GAO-27-108012)',
};

const LA_ILLUMINATOR: NewsSource = {
  name: 'Louisiana Illuminator',
  date: '2026-10-30',
  url: 'https://lailluminator.com/2026/10/30/watchdogs-report-urges-congress-to-take-action-on-flood-insurance/',
  title: 'Watchdog’s report urges Congress to take action on flood insurance',
};

const WA_AG_GM: NewsSource = {
  name: 'Washington State Attorney General',
  date: '2026-10-29',
  url: 'https://www.atg.wa.gov/news/news-releases/gm-pay-220m-sharing-drivers-private-data-case-co-led-washington',
  title: 'GM to pay $220M for sharing drivers’ private data in case co-led by Washington',
};

const NY_AG_GM: NewsSource = {
  name: 'New York State Attorney General',
  date: '2026-10-29',
  url: 'https://ag.ny.gov/press-release/2026/attorney-general-james-secures-220-million-general-motors-selling-drivers',
  title: 'Attorney General James Secures $220 Million from General Motors for Selling Drivers’ Private Data',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-01',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Sun Nov 1, 2026',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (updated 03.26.2026)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

export const edition: NewsEdition = {
  slug: '2026-11-01-flood-watch-flood-coverage-gap-driver-data',
  datePublished: '2026-11-01',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 1, 2026: a Flood Watch covers Miami-Dade, Broward and Palm Beach into Monday, a federal watchdog says most at-risk properties have no flood coverage, and Florida joins a settlement over driving data sold to insurers',
      metaTitle: 'Insurance News Nov. 1, 2026: Flood Watch, Flood Gap, Car Data | M&K',
      description:
        'Flood Watch for Miami-Dade, Broward and Palm Beach into Monday, a GAO report on the flood coverage gap, and a 36-state settlement over driving data sold to insurers.',
      ogAlt:
        'A dark rain cloud with heavy rain over a house and a car in a flooded street, a house under an umbrella beside a map with a blue flood zone, and a car with a location pin and a padlock',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners on the first Sunday of November. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'Update: A Flood Watch covers all of Miami-Dade, Broward and Palm Beach through Monday afternoon, and the coastal flood advisory now runs through Monday',
          summary:
            'The National Weather Service in Miami issued a **Flood Watch from 10 a.m. Sunday to 3 p.m. Monday** for all of Miami-Dade, Broward and Palm Beach counties, including Florida City, Homestead and Kendall. Bands of heavy rain could bring 3 to 5 inches in scattered spots and as much as 5 to 7 inches in isolated places, possibly within a few hours, with street flooding and road closures the main risk; forecasters warn impacts could be worse if the heaviest rain falls near the coast at high tide. The Coastal Flood Advisory for minor to moderate tidal flooding on the coast was extended again, to **7 p.m. Monday**, and in Monroe County the Key West office issued a Flood Warning for the Lower Keys on Sunday morning after 2 to 4 inches of rain.',
          why: 'Turn around at flooded roads: water damage to a car is a comprehensive claim, not collision ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). If water gets into your home or business, take dated photos before you clean up; rising water from streets is usually covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), which generally takes 30 days to start.',
          sources: [NWS_MFL_FFA, NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY],
        },
        {
          headline: 'Federal watchdog: 86% of high-risk U.S. properties have no flood insurance, and FEMA maps miss much of the heavy-rain risk',
          summary:
            'A report from the U.S. Government Accountability Office (GAO), which its analysts presented at an online briefing on **Oct. 29**, found that as of April 2026, **86% of high-risk properties** had no National Flood Insurance Program (NFIP) coverage. GAO says the FEMA maps that decide who must buy flood insurance with a federally backed mortgage do not capture all flood risk, especially from heavy rainfall, and estimates that about 13 million high-risk properties sit outside FEMA’s special flood hazard areas. It asks Congress to consider counting heavy-rain risk in those rules, publishing property-level flood risk, requiring lenders to give buyers a flood insurance quote before closing, and raising the NFIP limits, which are still $250,000 for a single-family home and $100,000 for contents.',
          why: 'A low-risk flood zone on a map does not mean your street can’t flood, as this weekend’s rain shows. Standard homeowners policies generally exclude flood, so ask us whether a [flood policy](/en/flood-insurance-homestead-fl) makes sense for your home; our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade) explains the 30-day wait and what a policy covers.',
          sources: [GAO_FLOOD, LA_ILLUMINATOR],
        },
        {
          headline: 'Florida is part of a 36-state settlement with GM over driving data sold to brokers and passed on to insurers',
          summary:
            'General Motors agreed on **Oct. 29** to pay $220 million to a coalition of 36 attorneys general, including Florida’s, over its former Smart Driver program. The states say that from 2016 to 2024 GM tracked trips, hard braking, rapid acceleration and speeding, then sold the data to data brokers who resold it to insurance companies, some of which used it in setting rates, even though GM had told drivers it would not share data with insurers without express consent. The money goes to the states, and under the settlement GM must get drivers’ affirmative express consent before collecting or sharing driving and location data and must train dealerships not to enroll customers without it.',
          why: 'Your driving record and, in some cases, data from your car or a phone app can affect your auto insurance. Read what you agree to at the dealership or in a connected-car app, and if your rate changes at renewal, you can ask what information was used. We can review your [car insurance](/en/quote) and explain what affects it.',
          sources: [WA_AG_GM, NY_AG_GM],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'Citizens policyholders who received offers for the Nov. 17 takeout round have until **Thursday, Nov. 5** to register their choice; if no choice is registered, Citizens assigns the policy to one of the companies that selected it. The National Hurricane Center does not expect any tropical cyclone to form in the next seven days (7 a.m. Sunday outlook). The National Flood Insurance Program remains authorized only through 11:59 p.m. on Dec. 11, 2026; in a lapse, existing policies stay in force and valid claims are paid, but FEMA would stop selling and renewing policies.',
        },
      ],
      extraSources: [CITIZENS_CAL, NHC_TWO, FEMA_REAUTH],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 1 de noviembre de 2026: vigilancia por inundaciones en Miami-Dade, Broward y Palm Beach hasta el lunes, un organismo federal advierte que la mayoría de las propiedades en riesgo no tiene seguro contra inundaciones y Florida se suma a un acuerdo por datos de manejo vendidos a aseguradoras',
      metaTitle: 'Noticias de seguros 1/11/2026: inundaciones y datos del carro | M&K',
      description:
        'Vigilancia por inundaciones en Miami-Dade, Broward y Palm Beach hasta el lunes, un informe de la GAO sobre la falta de seguro contra inundaciones y un acuerdo por datos de manejo.',
      ogAlt:
        'Una nube oscura con lluvia intensa sobre una casa y un carro en una calle inundada, una casa bajo un paraguas junto a un mapa con una zona inundable azul y un carro con un marcador de ubicación y un candado',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida este primer domingo de noviembre. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline: 'Actualización: vigilancia por inundaciones en todo Miami-Dade, Broward y Palm Beach hasta el lunes en la tarde, y el aviso por inundación costera se extiende hasta el lunes',
          summary:
            'El Servicio Nacional de Meteorología (NWS) en Miami emitió una **vigilancia por inundaciones (Flood Watch) desde las 10 a.m. del domingo hasta las 3 p.m. del lunes** para todos los condados de Miami-Dade, Broward y Palm Beach, incluidos Florida City, Homestead y Kendall. Las bandas de lluvia intensa podrían dejar de 3 a 5 pulgadas en puntos dispersos y hasta 5 a 7 pulgadas en lugares aislados, posiblemente en pocas horas, con calles inundadas y cierres de vías como principal riesgo; los meteorólogos advierten que el impacto podría ser mayor si la lluvia más fuerte cae cerca de la costa durante la marea alta. El aviso por inundación costera de menor a moderada (Coastal Flood Advisory) se extendió otra vez, hasta las **7 p.m. del lunes**, y en el condado de Monroe la oficina de Key West emitió el domingo en la mañana una advertencia de inundación para los Cayos Bajos tras caer de 2 a 4 pulgadas de lluvia.',
          why: 'Si la calle está inundada, dé la vuelta: el daño por agua a un carro es un reclamo de comprehensive, no de colisión ([comprehensive o collision](/es/blog/comprehensive-vs-collision-florida)). Si el agua entra a su casa o negocio, tome fotos con fecha antes de limpiar; el agua que sube desde la calle normalmente solo la cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, que por lo general tarda 30 días en entrar en vigor.',
          sources: [NWS_MFL_FFA, NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY],
        },
        {
          headline: 'Organismo federal de control: el 86% de las propiedades de alto riesgo en EE. UU. no tiene seguro contra inundaciones, y los mapas de FEMA no reflejan buena parte del riesgo por lluvias fuertes',
          summary:
            'Un informe de la Oficina de Rendición de Cuentas del Gobierno de EE. UU. (GAO), que sus analistas presentaron en una sesión en línea el **29 de octubre**, concluyó que, a abril de 2026, el **86% de las propiedades de alto riesgo** no tenía cobertura del Programa Nacional de Seguro contra Inundaciones (NFIP). La GAO señala que los mapas de FEMA que determinan quién debe comprar seguro contra inundaciones con una hipoteca respaldada por el gobierno federal no recogen todo el riesgo, sobre todo el de lluvias fuertes, y calcula que unos 13 millones de propiedades de alto riesgo están fuera de las zonas especiales de riesgo de inundación de FEMA. Pide al Congreso considerar incluir el riesgo por lluvia en esas reglas, publicar el riesgo de inundación de cada propiedad, exigir que los prestamistas den al comprador una cotización de seguro contra inundaciones antes del cierre y subir los límites del NFIP, que siguen en $250,000 para una vivienda unifamiliar y $100,000 para el contenido.',
          why: 'Que el mapa marque una zona de bajo riesgo no significa que su calle no se pueda inundar, como muestra la lluvia de este fin de semana. Las pólizas de vivienda normalmente excluyen las inundaciones; pregúntenos si una [póliza de inundación](/es/flood-insurance-homestead-fl) tiene sentido para su casa. Nuestra [guía sobre las mareas reales](/es/blog/king-tides-flood-insurance-miami-dade) explica la espera de 30 días y qué cubre la póliza.',
          sources: [GAO_FLOOD, LA_ILLUMINATOR],
        },
        {
          headline: 'Florida forma parte de un acuerdo de 36 estados con GM por datos de manejo vendidos a intermediarios y luego a aseguradoras',
          summary:
            'General Motors acordó el **29 de octubre** pagar $220 millones a una coalición de 36 fiscales generales, entre ellos el de Florida, por su antiguo programa Smart Driver. Según los estados, de 2016 a 2024 GM registró los viajes, frenazos, aceleraciones bruscas y excesos de velocidad, y vendió esos datos a intermediarios de datos que los revendieron a compañías de seguros, algunas de las cuales los usaron para fijar tarifas, aunque GM había dicho a los conductores que no compartiría datos con aseguradoras sin su consentimiento expreso. El dinero va a los estados; con el acuerdo, GM debe obtener el consentimiento afirmativo y expreso de los conductores antes de recopilar o compartir datos de manejo y ubicación, y capacitar a los concesionarios para que no inscriban a clientes sin ese consentimiento.',
          why: 'Su historial de manejo y, en algunos casos, los datos de su carro o de una app del celular pueden influir en su seguro de auto. Lea lo que acepta en el concesionario o en la app del carro conectado y, si su tarifa cambia al renovar, puede preguntar qué información se usó. Podemos revisar su [seguro de auto](/es/quote) y explicarle qué lo afecta.',
          sources: [WA_AG_GM, NY_AG_GM],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'Los asegurados de Citizens que recibieron ofertas para la ronda de traspaso (takeout) del 17 de noviembre tienen hasta el **jueves 5 de noviembre** para registrar su decisión; si no registran ninguna, Citizens asigna la póliza a una de las compañías que la seleccionaron. El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en los próximos siete días (pronóstico de las 7 a.m. del domingo). El Programa Nacional de Seguro contra Inundaciones (NFIP) sigue autorizado solo hasta las 11:59 p.m. del 11 de diciembre de 2026; si vence, las pólizas existentes siguen vigentes y los reclamos válidos se pagan, pero FEMA dejaría de vender y renovar pólizas.',
        },
      ],
      extraSources: [CITIZENS_CAL, NHC_TWO, FEMA_REAUTH],
    },
    ru: {
      title:
        'Страховые новости Флориды, 1 ноября 2026: в Майами-Дейд, Броварде и Палм-Бич до понедельника действует угроза наводнений, федеральные аудиторы сообщают, что у большинства домов в зоне риска нет страховки от наводнения, а Флорида участвует в соглашении о данных вождения, проданных страховщикам',
      metaTitle: 'Страховые новости 1.11.2026: ливни, наводнения, данные авто | M&K',
      description:
        'Угроза наводнений в Майами-Дейд, Броварде и Палм-Бич до понедельника, доклад GAO о нехватке страховки от наводнений и соглашение штатов о данных вождения.',
      ogAlt:
        'Тёмная туча с сильным дождём над домом и машиной на затопленной улице, дом под зонтом рядом с картой с синей зоной затопления и машина со значком геолокации и замком',
      intro:
        'Три новости для владельцев жилья, водителей и малого бизнеса Южной Флориды в первое воскресенье ноября. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: 'Обновление: угроза наводнений (Flood Watch) действует во всех округах Майами-Дейд, Бровард и Палм-Бич до понедельника, а предупреждение о прибрежном подтоплении продлено до понедельника',
          summary:
            'Национальная метеослужба (NWS) в Майами объявила **Flood Watch с 10:00 воскресенья до 15:00 понедельника** для всех округов Майами-Дейд, Бровард и Палм-Бич, включая Флорида-Сити, Хомстед и Кендалл. Полосы сильного дождя могут принести 3–5 дюймов в отдельных местах и до 5–7 дюймов локально, возможно всего за несколько часов; главный риск — затопленные улицы и перекрытые дороги, а если самый сильный дождь придётся на побережье во время прилива, последствия могут быть серьёзнее. Рекомендация о слабом и умеренном прибрежном подтоплении (Coastal Flood Advisory) снова продлена — до **19:00 понедельника**, а в округе Монро офис NWS в Ки-Уэсте утром в воскресенье объявил предупреждение о наводнении для Нижних Кис после 2–4 дюймов дождя.',
          why: 'Не въезжайте на затопленную дорогу: ущерб машине от воды — это претензия по comprehensive, а не по collision ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Если вода попала в дом или помещение бизнеса, сделайте фото с датой до уборки; вода, поднявшаяся с улицы, обычно покрывается только отдельным [полисом от наводнения](/ru/flood-insurance-homestead-fl), который, как правило, начинает действовать через 30 дней.',
          sources: [NWS_MFL_FFA, NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY],
        },
        {
          headline: 'Федеральные аудиторы: у 86% объектов в зоне высокого риска в США нет страховки от наводнения, а карты FEMA не учитывают большую часть риска от ливней',
          summary:
            'Счётная палата США (GAO) в докладе, который её аналитики представили на онлайн-брифинге **29 октября**, пришла к выводу, что по состоянию на апрель 2026 года у **86% объектов в зоне высокого риска** не было полиса Национальной программы страхования от наводнений (NFIP). По данным GAO, карты FEMA, по которым определяют, кто обязан покупать страховку от наводнения при ипотеке с федеральной поддержкой, учитывают не весь риск, особенно от ливней; около 13 миллионов объектов высокого риска находятся за пределами особых зон затопления FEMA. GAO предлагает Конгрессу рассмотреть учёт риска ливней в этих правилах, публикацию данных о риске затопления для каждого объекта, обязанность кредиторов выдавать покупателю расчёт страховки от наводнения до сделки и повышение лимитов NFIP, которые по-прежнему составляют $250 000 на частный дом и $100 000 на имущество.',
          why: 'Зона низкого риска на карте не означает, что вашу улицу не затопит, — это хорошо видно по дождям в эти выходные. Обычная страховка жилья, как правило, не покрывает наводнения, поэтому спросите нас, нужен ли вам [полис от наводнения](/ru/flood-insurance-homestead-fl); в нашем [гиде о сизигийных приливах](/ru/blog/king-tides-flood-insurance-miami-dade) объясняется 30-дневное ожидание и что покрывает полис.',
          sources: [GAO_FLOOD, LA_ILLUMINATOR],
        },
        {
          headline: 'Флорида участвует в соглашении 36 штатов с GM о данных вождения, которые продавали посредникам, а те — страховщикам',
          summary:
            '**29 октября** General Motors согласилась выплатить $220 млн коалиции из 36 генеральных прокуроров, включая прокурора Флориды, по делу о прежней программе Smart Driver. По данным штатов, с 2016 по 2024 год GM записывала поездки, резкие торможения и ускорения, превышения скорости и продавала эти данные брокерам данных, которые перепродавали их страховым компаниям; часть страховщиков использовала их при расчёте тарифов, хотя GM обещала водителям не передавать данные страховщикам без их явного согласия. Деньги получат штаты; по соглашению GM обязана получать явное и активное согласие водителей, прежде чем собирать или передавать данные о вождении и местоположении, и обучить дилеров не подписывать клиентов на такие программы без согласия.',
          why: 'На автостраховку влияет история вождения, а иногда и данные из машины или приложения в телефоне. Читайте, на что вы соглашаетесь у дилера или в приложении подключённого автомобиля, а если тариф изменился при продлении, вы вправе спросить, какие данные использовались. Мы можем проверить вашу [автостраховку](/ru/quote) и объяснить, что на неё влияет.',
          sources: [WA_AG_GM, NY_AG_GM],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Клиенты Citizens, получившие предложения в раунде передачи полисов (takeout) на 17 ноября, должны сообщить о своём выборе до **четверга, 5 ноября**; если выбор не зарегистрирован, Citizens передаёт полис одной из компаний, которые его отобрали. Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней (прогноз на 7:00 воскресенья). Национальная программа страхования от наводнений (NFIP) действует только до 23:59 11 декабря 2026 года; если её не продлят, действующие полисы сохранятся и обоснованные претензии будут оплачиваться, но FEMA перестанет продавать и продлевать полисы.',
        },
      ],
      extraSources: [CITIZENS_CAL, NHC_TWO, FEMA_REAUTH],
    },
  },
};
