import type { NewsEdition, NewsSource } from '../types';

// Edition for Monday, Nov. 23, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-23',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=txt&version=1&glossary=0',
  title: 'Coastal Hazard Message (Coastal Flood Statement for Tuesday morning), 12:17 a.m. EST Mon Nov 23, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-23',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:23 a.m. EST Mon Nov 23, 2026',
};

const NWS_MFL_PNS: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-22',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=PNS&format=txt&version=1&glossary=0',
  title: 'Public Information Statement: NWS damage survey for southern Palm Beach County tornado, 6:09 p.m. EST Sun Nov 22, 2026',
};

const HWD_STORM: NewsSource = {
  name: 'City of Hollywood',
  date: '2026-11-22',
  url: 'https://www.hollywoodfl.org/CivicAlerts.aspx?AID=1882',
  title: 'Storm Update',
};

const HWD_REPORT: NewsSource = {
  name: 'City of Hollywood',
  date: '2026-11-19',
  url: 'https://www.hollywoodfl.org/CivicAlerts.aspx?AID=1886',
  title: 'Report Storm-Related Property or Vehicle Damage',
};

const HWD_BUSINESS: NewsSource = {
  name: 'City of Hollywood',
  date: '2026-11-20',
  url: 'https://www.hollywoodfl.org/CivicAlerts.aspx?AID=1890',
  title: 'Report Storm-Related Business Damage',
};

const HWD_CLEANUP: NewsSource = {
  name: 'City of Hollywood',
  date: '2026-11-20',
  url: 'https://www.hollywoodfl.org/CivicAlerts.aspx?AID=1894',
  title: 'Flooded Home Cleanup Safety Tips and Permitting Information',
};

const FC_SURVEY: NewsSource = {
  name: 'FloridaCommerce (FloridaDisaster.biz)',
  date: '2026-11-23',
  url: 'https://floridadisaster.biz/Respond/BusinessDamageAssessmentsSurvey',
  title: 'Business Damage Assessment Survey (checked Nov. 23, 2026)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-23',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Mon Nov 23, 2026',
};

const GOV_CLOSURES: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-11-16',
  url: 'https://www.flgov.com/eog/news/press/2026/governor-ron-desantis-announces-additional-state-office-closures-holiday-season',
  title: 'Governor Ron DeSantis Announces Additional State Office Closures for the Holiday Season',
};

const WEEK = [NWS_MFL_CFW, NWS_MFL_AFD];
const TORNADO = [NWS_MFL_PNS];
const RECOVERY = [HWD_STORM, HWD_REPORT, HWD_BUSINESS, HWD_CLEANUP, FC_SURVEY];
const BOX = [FEMA_REAUTH, NHC_TWO, GOV_CLOSURES];

export const edition: NewsEdition = {
  slug: '2026-11-23-coastal-flooding-ef1-tornado-flood-damage-reports',
  datePublished: '2026-11-23',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 23, 2026: a coastal flood statement for Tuesday’s high tide and a wet, stormy Wednesday, an EF-1 rating for Saturday’s Palm Beach County tornado, and how Hollywood is collecting flood damage reports',
      metaTitle: 'Insurance News Nov. 23, 2026: Tides, EF-1 Tornado, Damage Reports | M&K',
      description:
        'NWS issues a coastal flood statement for Tuesday and flags heavy rain Wednesday, rates Saturday’s Palm Beach County tornado EF-1, and Hollywood collects flood damage reports.',
      ogAlt:
        'A full moon and a rain cloud over a street where tide water reaches a parked car, a palm tree and a house roof with a few missing shingles under a funnel cloud, and a clipboard form next to a small storefront',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Monday of Thanksgiving week. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: NWS issues a coastal flood statement for Tuesday morning’s high tide and warns of heavy rain and possible severe storms on Wednesday',
          summary:
            'Overnight, NWS Miami issued a **Coastal Flood Statement for coastal Miami-Dade, Broward and Palm Beach for Tuesday morning**, expecting isolated minor coastal flooding with some water on low-lying roads and property. Monday and most of Tuesday stay mostly dry, but a low-pressure system is expected to affect South Florida on **Wednesday**, and forecasters say locally heavy rain and severe storms are possible; early estimates point to **2 to 4 inches for the east coast metro areas**, with locally higher amounts, depending on the low’s track and speed. NWS adds that Wednesday’s rain could coincide with king-tide water levels near moderate flood thresholds, before drier, cooler air arrives by Thursday night.',
          why: 'If you live or park near the coast or in a low-lying street, move your car to higher ground before the morning high tide and before Wednesday’s rain, and never drive through flooded roads: flood damage to a car is covered only if you carry comprehensive, and standard homeowners policies exclude flood, which needs a separate flood policy. If you are driving to Thanksgiving gatherings on Wednesday, plan for rain on top of holiday traffic. See [king tides and flood insurance](/en/blog/king-tides-flood-insurance-miami-dade), [flood insurance](/en/flood-insurance-homestead-fl) and [Thanksgiving weekend driving](/en/blog/thanksgiving-holiday-driving-florida).',
          sources: WEEK,
        },
        {
          headline:
            'New: NWS rates Saturday’s southern Palm Beach County tornado EF-1, with peak winds estimated at 102 mph along a 7.6-mile path',
          summary:
            'After a damage survey, NWS Miami rated the tornado that touched down Saturday evening in southern Palm Beach County an **EF-1, with estimated peak winds of 102 mph**. It began around 6:04 p.m. in the Boca Gardens neighborhood in the Boca Raton area and tracked north for **7.64 miles** with a maximum width of 500 yards before lifting over western Boynton Beach at about 6:31 p.m.; no injuries or deaths were reported. Damage was mostly widespread tree damage with occasional roof damage, and the survey team could not enter some gated communities, so the findings are preliminary.',
          why: 'Wind and tornado damage to a home is normally a homeowners claim, and because this was not a hurricane, your regular (all other perils) deductible usually applies rather than a hurricane deductible; check your declarations page. Photograph roof, fence and car damage before cleanup, make only temporary repairs and keep receipts, and report the claim promptly (Florida law sets a one-year deadline for initial notice). A tree that falls on a car is a comprehensive claim. See [storm claim checklist](/en/blog/hurricane-claim-checklist-florida), [homeowners insurance in Boca Raton](/en/homeowners-insurance-boca-raton-fl) and [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: TORNADO,
        },
        {
          headline:
            'New: Hollywood asks residents and businesses to report damage from last week’s flooding, and points businesses to the state survey',
          summary:
            'In its Nov. 22 update, the City of Hollywood in Broward says floodwater is receding but standing water remains on some streets, and some traffic signals are still out, so drivers should treat those intersections as four-way stops. The city is asking residents with **property or vehicle damage** to report it through its online form with photos, saying the information will be shared with state and federal officials to support requests for funding assistance. Businesses are directed to the **state’s Business Damage Assessment Survey** (event “2026 Fall Flooding”), which the state notes is not an application for assistance and is a public record; flooded businesses can also ask the state’s ESF 18 team for cleanup buckets, tarps and temporary power at 850-815-4925. The city also advises contacting your insurance agent before you start cleaning a flooded home.',
          why: 'These city and state reports help officials measure the damage, but they do not replace an insurance claim: report flood damage to your flood insurer, car damage under comprehensive, and business losses to your commercial insurer as soon as you can, with photos and a list of damaged items. Many commercial property and homeowners policies exclude flood, and sewer or drain backup often needs its own endorsement, so check what your policy actually covers before you throw out damaged items. See [water backup vs. flood insurance](/en/blog/water-backup-vs-flood-insurance-florida), [commercial insurance](/en/commercial-insurance-florida-city) and [homeowners insurance in Hollywood](/en/homeowners-insurance-hollywood-fl).',
          sources: RECOVERY,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program (NFIP) is authorized **through 11:59 p.m. on Dec. 11** (18 days away), and FEMA’s reauthorization page has not changed since Sept. 28; a new NFIP policy generally takes 30 days to start. The National Hurricane Center expects no tropical cyclone formation in the next seven days, and the Atlantic hurricane season ends Nov. 30. State offices close Wednesday, Nov. 25, through Friday, Nov. 27.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 23 de noviembre de 2026: aviso de inundación costera para la marea alta del martes y un miércoles lluvioso y tormentoso, categoría EF-1 para el tornado del sábado en Palm Beach y cómo Hollywood recoge reportes de daños por inundación',
      metaTitle: 'Noticias de seguros 23 nov. 2026: mareas, tornado EF-1, daños | M&K',
      description:
        'El NWS emite un aviso de inundación costera para el martes y prevé lluvias fuertes el miércoles, califica EF-1 el tornado del sábado y Hollywood recoge reportes de daños.',
      ogAlt:
        'Una luna llena y una nube de lluvia sobre una calle donde el agua de la marea llega a un auto estacionado, una palmera y el techo de una casa con algunas tejas sueltas bajo una nube de embudo, y un formulario en una tablilla junto a un pequeño local comercial',
      intro:
        'Tres actualizaciones para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida en este lunes de la semana de Acción de Gracias. Cada noticia está resumida con nuestras propias palabras, con enlace a la fuente original.',
      items: [
        {
          headline:
            'Actualización: el NWS emite un aviso de inundación costera para la marea alta del martes por la mañana y advierte de lluvias fuertes y posibles tormentas severas el miércoles',
          summary:
            'Durante la madrugada, el NWS de Miami emitió un **aviso de inundación costera (Coastal Flood Statement) para la costa de Miami-Dade, Broward y Palm Beach el martes por la mañana**: prevé inundación costera leve y aislada, con algo de agua en calles y propiedades bajas. El lunes y casi todo el martes seguirán mayormente secos, pero se espera que un sistema de baja presión afecte al sur de Florida el **miércoles**, con posibilidad de lluvias localmente intensas y tormentas severas; los primeros cálculos apuntan a **entre 2 y 4 pulgadas en las zonas metropolitanas de la costa este**, con cantidades mayores en algunos puntos, según la trayectoria y la velocidad de la baja. El NWS añade que la lluvia del miércoles podría coincidir con niveles de marea real cercanos al umbral de inundación moderada, antes de que llegue aire más seco y fresco para el jueves por la noche.',
          why: 'Si vive o se estaciona cerca de la costa o en una calle baja, mueva su auto a un lugar más alto antes de la marea alta de la mañana y antes de la lluvia del miércoles, y nunca maneje por calles inundadas: el daño por inundación a un auto solo está cubierto si tiene cobertura integral (comprehensive), y las pólizas de propietario estándar excluyen la inundación, que requiere una póliza aparte. Si va a manejar el miércoles a una reunión de Acción de Gracias, cuente con lluvia además del tráfico del feriado. Vea [mareas reales y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade), [seguro de inundación](/es/flood-insurance-homestead-fl) y [manejar el fin de semana de Acción de Gracias](/es/blog/thanksgiving-holiday-driving-florida).',
          sources: WEEK,
        },
        {
          headline:
            'Nuevo: el NWS califica EF-1 el tornado del sábado en el sur de Palm Beach, con vientos máximos estimados de 102 mph en un recorrido de 7.6 millas',
          summary:
            'Tras inspeccionar los daños, el NWS de Miami calificó como **EF-1, con vientos máximos estimados de 102 mph**, el tornado que tocó tierra el sábado por la tarde en el sur del condado de Palm Beach. Comenzó hacia las 6:04 p.m. en el vecindario Boca Gardens, en la zona de Boca Raton, y avanzó hacia el norte durante **7.64 millas**, con un ancho máximo de 500 yardas, hasta disiparse sobre el oeste de Boynton Beach hacia las 6:31 p.m.; no hubo heridos ni muertos. Los daños fueron sobre todo árboles afectados en una amplia zona y algunos techos dañados; el equipo no pudo entrar a varias comunidades cerradas, por lo que los resultados son preliminares.',
          why: 'El daño por viento o tornado a una vivienda normalmente se reclama al seguro de propietario y, como no fue un huracán, por lo general se aplica su deducible regular (para todos los demás riesgos) y no el deducible de huracán; revise la página de declaraciones de su póliza. Fotografíe los daños al techo, la cerca y el auto antes de limpiar, haga solo reparaciones temporales, guarde los recibos y reporte el reclamo pronto (la ley de Florida fija un año para el aviso inicial). Un árbol que cae sobre un auto se reclama por la cobertura integral. Vea [lista para reclamos por tormenta](/es/blog/hurricane-claim-checklist-florida), [seguro de vivienda en Boca Raton](/es/homeowners-insurance-boca-raton-fl) y [integral vs. colisión](/es/blog/comprehensive-vs-collision-florida).',
          sources: TORNADO,
        },
        {
          headline:
            'Nuevo: Hollywood pide a residentes y negocios reportar los daños de las inundaciones de la semana pasada y remite a los negocios a la encuesta estatal',
          summary:
            'En su actualización del 22 de noviembre, la Ciudad de Hollywood, en Broward, informa que el agua está bajando, pero todavía hay agua estancada en algunas calles y algunos semáforos siguen apagados, por lo que esas intersecciones deben tratarse como paradas de cuatro vías. La ciudad pide a los residentes con **daños a su propiedad o a su vehículo** que los reporten en su formulario en línea con fotos, y explica que la información se compartirá con funcionarios estatales y federales para respaldar solicitudes de fondos de asistencia. A los negocios los remite a la **encuesta estatal de evaluación de daños a negocios** (evento «2026 Fall Flooding»), que según el estado no es una solicitud de ayuda y es un registro público; los negocios inundados también pueden pedir al equipo estatal ESF 18 cubetas de limpieza, lonas y energía temporal al 850-815-4925. La ciudad también aconseja comunicarse con su agente de seguros antes de empezar a limpiar una casa inundada.',
          why: 'Estos reportes de la ciudad y del estado ayudan a medir los daños, pero no sustituyen un reclamo de seguro: reporte cuanto antes los daños por inundación a su aseguradora de inundación, los del auto por la cobertura integral y las pérdidas del negocio a su aseguradora comercial, con fotos y una lista de lo dañado. Muchas pólizas de propiedad comercial y de propietario excluyen la inundación, y el retroceso de alcantarillas o desagües suele requerir un endoso propio, así que revise qué cubre realmente su póliza antes de botar las cosas dañadas. Vea [retroceso de agua vs. seguro de inundación](/es/blog/water-backup-vs-flood-insurance-florida), [seguro comercial](/es/commercial-insurance-florida-city) y [seguro de vivienda en Hollywood](/es/homeowners-insurance-hollywood-fl).',
          sources: RECOVERY,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p.m. del 11 de diciembre** (faltan 18 días), y la página de FEMA sobre la reautorización no ha cambiado desde el 28 de septiembre; una póliza nueva del NFIP por lo general tarda 30 días en entrar en vigor. El Centro Nacional de Huracanes no prevé la formación de ciclones tropicales en los próximos siete días, y la temporada de huracanes del Atlántico termina el 30 de noviembre. Las oficinas estatales cierran del miércoles 25 al viernes 27 de noviembre.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 23 ноября 2026 г.: предупреждение о прибрежном подтоплении во время прилива во вторник и дождливая грозовая среда, категория EF-1 для субботнего торнадо в Палм-Бич и как Голливуд собирает сведения об ущербе от наводнения',
      metaTitle: 'Страховые новости 23.11.2026: приливы, торнадо EF-1, ущерб | M&K',
      description:
        'NWS предупреждает о подтоплении побережья во вторник и сильных дождях в среду, субботний торнадо в Палм-Бич получил EF-1, а Голливуд собирает сведения об ущербе.',
      ogAlt:
        'Полная луна и дождевое облако над улицей, где приливная вода доходит до припаркованной машины, пальма и крыша дома с несколькими сорванными черепицами под воронкой, и бланк на планшете рядом с небольшим магазином',
      intro:
        'Три новости для владельцев домов, водителей и владельцев малого бизнеса в Южной Флориде в понедельник недели Дня благодарения. Каждая изложена своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: NWS предупреждает о прибрежном подтоплении во время утреннего прилива во вторник, а в среду ждёт сильных дождей и возможных сильных гроз',
          summary:
            'Ночью Метеослужба Майами (NWS) выпустила **предупреждение о прибрежном подтоплении (Coastal Flood Statement) для побережья Майами-Дейд, Бровард и Палм-Бич на утро вторника**: ожидается местами слабое подтопление, вода может выйти на низкие улицы и участки. Понедельник и большая часть вторника пройдут в основном без осадков, но в **среду** на Южную Флориду, как ожидается, выйдет область низкого давления, и синоптики допускают местами сильные ливни и сильные грозы; по первым оценкам, в **прибрежных городах восточного побережья выпадет от 2 до 4 дюймов** осадков, местами больше — в зависимости от траектории и скорости циклона. NWS добавляет, что дожди в среду могут совпасть с сизигийным приливом, уровень которого приблизится к порогу умеренного подтопления; к ночи четверга придёт более сухой и прохладный воздух.',
          why: 'Если вы живёте или паркуетесь у побережья или на низкой улице, переставьте машину повыше до утреннего прилива и до дождей в среду и никогда не въезжайте в затопленную дорогу: ущерб машине от воды покрывается, только если у вас есть comprehensive, а стандартный полис страхования дома наводнение исключает — для этого нужен отдельный полис. Если в среду едете к родным на День благодарения, закладывайте время и на дождь, и на праздничные пробки. См. [сизигийные приливы и страхование от наводнения](/ru/blog/king-tides-flood-insurance-miami-dade), [страхование от наводнения](/ru/flood-insurance-homestead-fl) и [поездки на выходных Дня благодарения](/ru/blog/thanksgiving-holiday-driving-florida).',
          sources: WEEK,
        },
        {
          headline:
            'Новое: NWS присвоила субботнему торнадо на юге округа Палм-Бич категорию EF-1 — пиковый ветер около 102 миль в час, путь 7,6 мили',
          summary:
            'Обследовав ущерб, Метеослужба Майами присвоила торнадо, прошедшему в субботу вечером по югу округа Палм-Бич, **категорию EF-1 с расчётным пиковым ветром 102 мили в час**. Он коснулся земли около 18:04 в районе Boca Gardens в окрестностях Бока-Ратона и прошёл на север **7,64 мили** при максимальной ширине 500 ярдов, а около 18:31 оторвался от земли над западной частью Бойнтон-Бич; пострадавших и погибших нет. В основном повреждены деревья на большой площади, местами — крыши; в некоторые закрытые посёлки обследователи попасть не смогли, поэтому данные предварительные.',
          why: 'Ущерб дому от ветра и торнадо обычно заявляют по полису страхования дома, и поскольку это был не ураган, как правило, применяется обычная франшиза (на все прочие риски), а не ураганная — сверьтесь со страницей деклараций полиса. Сфотографируйте повреждения крыши, забора и машины до уборки, делайте только временный ремонт, сохраняйте чеки и не тяните с заявлением (по закону Флориды первичное уведомление нужно подать в течение года). Дерево, упавшее на машину, — это случай по comprehensive. См. [памятку по заявлению после шторма](/ru/blog/hurricane-claim-checklist-florida), [страхование дома в Бока-Ратоне](/ru/homeowners-insurance-boca-raton-fl) и [comprehensive или collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: TORNADO,
        },
        {
          headline:
            'Новое: Голливуд просит жителей и бизнес сообщить об ущербе от наводнения прошлой недели и направляет предпринимателей к опросу штата',
          summary:
            'В сводке от 22 ноября власти города Голливуд (округ Бровард) сообщают, что вода уходит, но на некоторых улицах ещё стоит, а часть светофоров не работает — такие перекрёстки нужно проезжать как четырёхсторонние стоп-перекрёстки. Город просит жителей, у которых пострадали **дом, имущество или машина**, сообщить об этом через онлайн-форму с фотографиями: сведения передадут властям штата и федеральным чиновникам в обоснование запросов на финансовую помощь. Бизнес направляют к **опросу штата об ущербе предприятиям** (событие «2026 Fall Flooding»); штат подчёркивает, что это не заявка на помощь и что ответы являются публичными документами. Пострадавшие предприятия также могут запросить у команды штата ESF 18 вёдра для уборки, брезент и временное электропитание по телефону 850-815-4925, а город советует связаться со страховым агентом до того, как начинать уборку в затопленном доме.',
          why: 'Отчёты для города и штата помогают оценить масштаб ущерба, но не заменяют страховое заявление: как можно скорее сообщите об ущербе от наводнения своей страховой по полису от наводнения, о повреждении машины — по comprehensive, а об убытках бизнеса — своему коммерческому страховщику, с фотографиями и списком пострадавших вещей. Многие полисы на коммерческую недвижимость и на дом наводнение исключают, а обратный ток воды из канализации или стоков часто требует отдельного дополнения, поэтому проверьте, что именно покрывает ваш полис, прежде чем выбрасывать испорченное. См. [обратный ток воды и страхование от наводнения](/ru/blog/water-backup-vs-flood-insurance-florida), [страхование бизнеса](/ru/commercial-insurance-florida-city) и [страхование дома в Голливуде](/ru/homeowners-insurance-hollywood-fl).',
          sources: RECOVERY,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) действует **до 23:59 11 декабря** (осталось 18 дней); страница FEMA о продлении программы не менялась с 28 сентября, а новый полис NFIP, как правило, вступает в силу через 30 дней. Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней, а атлантический сезон ураганов заканчивается 30 ноября. Учреждения штата закрыты со среды, 25 ноября, по пятницу, 27 ноября.',
        },
      ],
      extraSources: BOX,
    },
  },
};
