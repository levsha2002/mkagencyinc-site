import type { NewsEdition, NewsSource } from '../types';

// Edition for Thursday, Nov. 26, 2026 (Thanksgiving, ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_PNS: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-26',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=PNS&format=txt&version=1&glossary=0',
  title: 'Public Information Statement: preliminary 48-hour precipitation reports, 8:32 a.m. EST Thu Nov 26, 2026',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-26',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=txt&version=1&glossary=0',
  title: 'Coastal Hazard Message, 12:56 a.m. EST Thu Nov 26, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-26',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:18 a.m. EST Thu Nov 26, 2026',
};

const NESDIS_WRAP: NewsSource = {
  name: 'NOAA (NESDIS)',
  date: '2026-11-24',
  url: 'https://www.nesdis.noaa.gov/news/2026-hurricane-season-wrap',
  title: '2026 Hurricane Season Wrap-Up',
};

const NHC_SEASON: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-26',
  url: 'https://www.nhc.noaa.gov/data/tcr/?basin=atl&season=2026',
  title: '2026 Atlantic Hurricane Season: Tropical Cyclone Reports and season summary',
};

const FDEM_FALL: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-26',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding: Individual Assistance and Multi-Agency Resource Centers (checked Nov. 26, 2026)',
};

const FEMA_4956_AREAS: NewsSource = {
  name: 'FEMA',
  date: '2026-11-24',
  url: 'https://www.fema.gov/disaster/4956/designated-areas',
  title: 'Designated Areas: Disaster 4956',
};

const FTL_NEWS: NewsSource = {
  name: 'City of Fort Lauderdale',
  date: '2026-11-25',
  url: 'https://www.fortlauderdale.gov/news',
  title: 'Flood Watch Remains in Effect for Fort Lauderdale Through Late Tonight',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-26',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Thu Nov 26, 2026',
};

const WEATHER = [NWS_MFL_PNS, NWS_MFL_CFW, NWS_MFL_AFD];
const SEASON = [NESDIS_WRAP, NHC_SEASON];
const RECOVERY = [FDEM_FALL, FEMA_4956_AREAS, FTL_NEWS];
const BOX = [FEMA_REAUTH, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-26-rain-totals-hurricane-season-wrap-recovery-help',
  datePublished: '2026-11-26',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 26, 2026: up to 7 inches of rain around Homestead and Broward before Thanksgiving, NOAA wraps up a one-hurricane Atlantic season, and where flood recovery help stands',
      metaTitle: 'Insurance News Nov. 26, 2026: Rain Totals, Season Wrap-Up | M&K',
      description:
        'How much rain fell in South Florida before Thanksgiving, NOAA’s 2026 hurricane season wrap-up, and the latest on federal aid and Broward’s recovery center.',
      ogAlt:
        'A rain gauge filled with water under a clearing cloud and sun, a hurricane symbol over a calendar with the last day circled, and a house next to a phone showing a photo with a green check mark',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners on Thanksgiving Day. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: the rain is over, and preliminary totals reach about 7 inches near Homestead and in north Broward',
          summary:
            'The Flood Watch for Miami-Dade, Broward and Palm Beach **expired at 1 a.m. Thursday**, and NWS Miami’s preliminary 48-hour reports show how much fell: **about 7 inches near Homestead and Naranja**, around 6.4 inches southeast of Florida City, 6.9 inches near Coral Gables and 5.1 inches at Miami International Airport. In Broward, gauges near **Parkland, Coconut Creek and Coral Springs recorded 7 to 7.75 inches**, and readings above 7 inches came in near Lake Worth in Palm Beach County. NWS notes these are early reports from many kinds of stations, not all official. A **Coastal Flood Advisory (moderate) for coastal Palm Beach and Broward and a Coastal Flood Statement for coastal Miami-Dade run until 10 a.m. today**, a High Rip Current Risk lasts through this evening, Friday and Saturday look dry, and showers and storms may return from Sunday evening into early next week.',
          why: 'If water got into your home or car, report it now and photograph everything before you clean up or throw anything away. Water that came in from the street is flood, which standard homeowners policies exclude (it needs a flood policy); a car damaged by floodwater is covered only with comprehensive. See [flood insurance in Homestead](/en/flood-insurance-homestead-fl), [water backup vs. flood](/en/blog/water-backup-vs-flood-insurance-florida) and [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'NOAA wraps up the 2026 Atlantic season: 10 named storms and one hurricane, Isaias',
          summary:
            'With the season ending **Monday, Nov. 30**, NOAA published its wrap-up on Nov. 24: the Atlantic produced **10 named storms, and only one, Isaias, became a hurricane**, compared with an average of 14 named storms and seven hurricanes. Isaias peaked as a Category 3 and made landfall as a **Category 2 near Destin** in the Florida Panhandle, bringing storm surge to Panama City Beach plus flooding rain and damaging gusts across the Southeast. NOAA ties the quiet Atlantic to a **very strong El Niño**, which increases the wind shear that tears developing storms apart, and the National Hurricane Center’s season summary puts total storm energy about 83% below normal.',
          why: 'A quiet season doesn’t mean a dry one: this month’s flooding in South Florida came from storms that were not hurricanes, so damage from them usually falls under your regular deductible rather than a hurricane deductible, and flood is still excluded from homeowners policies. The off-season is a good time to review coverage and paperwork before June 1. See [the end-of-season checklist](/en/blog/end-of-hurricane-season-checklist-florida) and [the storm claim checklist](/en/blog/hurricane-claim-checklist-florida).',
          sources: SEASON,
        },
        {
          headline:
            'Update: federal aid still covers six counties, and Broward’s recovery center now shows a Saturday opening',
          summary:
            'FEMA’s designated areas for **Major Disaster Declaration DR-4956** still list individual assistance only for **Brevard, Indian River, Martin, Okeechobee, Palm Beach and St. Lucie**; **Broward and Miami-Dade have not been added as of Thursday morning**. The state emergency management page now lists the Broward Multi-Agency Resource Center as **opening Saturday, Nov. 28**, 7 a.m. to 7 p.m., in the northwest conference room of Dania Beach City Hall, 100 W. Dania Beach Blvd.; earlier city notices, including ours, said Friday, so check the state page before you go. Bring identification, proof of residence, insurance information and papers about your losses. Fort Lauderdale also asks residents whose homes flooded to photograph the damage and report it through FixIt FTL or at 954-828-8000.',
          why: 'A city damage report or a visit to the recovery center is not an insurance claim. File with your insurer or flood insurer first and keep the claim number: FEMA can’t pay for losses insurance already covers, and it may ask for your insurance decision. See [the storm claim checklist](/en/blog/hurricane-claim-checklist-florida) and [homeowners insurance in Broward County](/en/homeowners-insurance-broward-county-fl).',
          sources: RECOVERY,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program is authorized **through 11:59 p.m. on Dec. 11** (15 days left; FEMA’s reauthorization page has not changed since Sept. 28), and a new NFIP policy usually starts after a 30-day wait. The National Hurricane Center expects no tropical cyclones in the next seven days. Happy Thanksgiving from all of us at M&K Agency.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 26 de noviembre de 2026: hasta 7 pulgadas de lluvia en Homestead y Broward antes de Acción de Gracias, NOAA cierra una temporada atlántica con un solo huracán y en qué va la ayuda por las inundaciones',
      metaTitle: 'Noticias de seguros 26 nov. 2026: lluvia y fin de temporada | M&K',
      description:
        'Cuánto llovió en el sur de Florida antes de Acción de Gracias, el balance de NOAA de la temporada de huracanes 2026 y lo último sobre la ayuda federal en Broward.',
      ogAlt:
        'Un pluviómetro lleno de agua bajo una nube que se despeja y el sol, un símbolo de huracán sobre un calendario con el último día marcado, y una casa junto a un teléfono que muestra una foto con una marca verde',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida en el Día de Acción de Gracias. Cada noticia está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: terminó la lluvia, y los totales preliminares llegan a unas 7 pulgadas cerca de Homestead y en el norte de Broward',
          summary:
            'La vigilancia de inundaciones para Miami-Dade, Broward y Palm Beach **venció a la 1 a.m. del jueves**, y los reportes preliminares de 48 horas del Servicio Meteorológico Nacional en Miami muestran cuánto cayó: **cerca de 7 pulgadas junto a Homestead y Naranja**, unas 6.4 pulgadas al sureste de Florida City, 6.9 cerca de Coral Gables y 5.1 en el Aeropuerto Internacional de Miami. En Broward, los pluviómetros cerca de **Parkland, Coconut Creek y Coral Springs marcaron entre 7 y 7.75 pulgadas**, y cerca de Lake Worth, en Palm Beach, hubo lecturas de más de 7. El servicio aclara que son reportes iniciales de estaciones de distintos tipos, no todos oficiales. Hasta las **10 a.m. de hoy rigen un aviso de inundación costera (moderada) para la costa de Palm Beach y Broward y una declaración de inundación costera para la costa de Miami-Dade**; el riesgo alto de corrientes de resaca sigue hasta esta noche, el viernes y el sábado se ven secos, y los aguaceros y tormentas podrían volver desde el domingo por la noche hasta comienzos de la próxima semana.',
          why: 'Si entró agua a su casa o a su auto, repórtelo ya y tome fotos de todo antes de limpiar o botar algo. El agua que entró desde la calle es inundación, que las pólizas de vivienda estándar excluyen (hace falta una póliza de inundación); un auto dañado por agua solo está cubierto con la cobertura comprensiva. Vea [seguro de inundación en Homestead](/es/flood-insurance-homestead-fl), [desbordamiento de drenaje vs. inundación](/es/blog/water-backup-vs-flood-insurance-florida) y [comprensivo vs. colisión](/es/blog/comprehensive-vs-collision-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'NOAA hace el balance de la temporada atlántica 2026: 10 tormentas con nombre y un solo huracán, Isaias',
          summary:
            'Como la temporada termina el **lunes 30 de noviembre**, NOAA publicó su balance el 24 de noviembre: en el Atlántico se formaron **10 tormentas con nombre y solo una, Isaias, llegó a huracán**, frente a un promedio de 14 tormentas y siete huracanes. Isaias alcanzó la categoría 3 y tocó tierra como **categoría 2 cerca de Destin**, en el Panhandle de Florida, con marejada ciclónica en Panama City Beach, lluvias con inundaciones y ráfagas dañinas en el sureste del país. NOAA atribuye la calma del Atlántico a un **El Niño muy fuerte**, que aumenta la cizalladura del viento que desarma las tormentas en formación, y el resumen del Centro Nacional de Huracanes sitúa la energía total de la temporada en cerca de un 83% por debajo de lo normal.',
          why: 'Una temporada tranquila no significa una temporada seca: las inundaciones de este mes en el sur de Florida vinieron de tormentas que no eran huracanes, así que esos daños suelen caer bajo su deducible normal y no bajo el deducible de huracán, y la inundación sigue excluida de las pólizas de vivienda. Los meses fuera de temporada son buen momento para revisar coberturas y papeles antes del 1 de junio. Vea [la lista de fin de temporada](/es/blog/end-of-hurricane-season-checklist-florida) y [la lista para reclamos por tormenta](/es/blog/hurricane-claim-checklist-florida).',
          sources: SEASON,
        },
        {
          headline:
            'Actualización: la ayuda federal sigue cubriendo seis condados, y el centro de recuperación de Broward ahora figura con apertura el sábado',
          summary:
            'Las áreas designadas por FEMA para la **Declaración de Desastre Mayor DR-4956** siguen incluyendo asistencia individual solo para **Brevard, Indian River, Martin, Okeechobee, Palm Beach y St. Lucie**; **Broward y Miami-Dade no se habían agregado hasta el jueves por la mañana**. La página estatal de manejo de emergencias ahora indica que el Centro de Recursos Multiagencia de Broward **abre el sábado 28 de noviembre**, de 7 a.m. a 7 p.m., en la sala de conferencias noroeste del Ayuntamiento de Dania Beach, 100 W. Dania Beach Blvd.; avisos anteriores, incluido el nuestro, decían viernes, así que revise la página estatal antes de ir. Lleve identificación, prueba de residencia, los datos de su seguro y los papeles sobre sus pérdidas. Fort Lauderdale también pide a los residentes cuyas casas se inundaron que fotografíen los daños y los reporten en FixIt FTL o al 954-828-8000.',
          why: 'Un reporte de daños a la ciudad o una visita al centro de recuperación no es un reclamo al seguro. Presente primero el reclamo a su aseguradora o a su seguro de inundación y guarde el número de reclamo: FEMA no puede pagar pérdidas que el seguro ya cubre y puede pedirle la decisión de su aseguradora. Vea [la lista para reclamos por tormenta](/es/blog/hurricane-claim-checklist-florida) y [seguro de vivienda en el condado de Broward](/es/homeowners-insurance-broward-county-fl).',
          sources: RECOVERY,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones está autorizado **hasta las 11:59 p.m. del 11 de diciembre** (quedan 15 días; la página de FEMA sobre la reautorización no cambia desde el 28 de septiembre), y una póliza nueva del NFIP suele entrar en vigor tras una espera de 30 días. El Centro Nacional de Huracanes no espera ciclones tropicales en los próximos siete días. ¡Feliz Día de Acción de Gracias de parte de todo el equipo de M&K Agency!',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 26 ноября 2026: до 7 дюймов дождя в районе Хомстеда и в Броварде перед Днём благодарения, NOAA подводит итоги атлантического сезона с одним ураганом, и что с помощью пострадавшим от наводнения',
      metaTitle: 'Страховые новости 26.11.2026: осадки и итоги сезона | M&K',
      description:
        'Сколько дождя выпало в Южной Флориде перед Днём благодарения, итоги сезона ураганов 2026 от NOAA и новости о федеральной помощи и центре помощи в Броварде.',
      ogAlt:
        'Дождемер, полный воды, под рассеивающейся тучей и солнцем, значок урагана над календарём с обведённым последним днём, и дом рядом с телефоном, на экране которого фото с зелёной галочкой',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса Южной Флориды в День благодарения. Каждая изложена своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: дожди закончились, предварительно у Хомстеда и на севере Броварда выпало около 7 дюймов',
          summary:
            'Предупреждение о возможном наводнении (Flood Watch) для Майами-Дейд, Броварда и Палм-Бич **истекло в 1 час ночи в четверг**, а предварительные 48-часовые данные Национальной метеослужбы в Майами показывают, сколько выпало: **около 7 дюймов у Хомстеда и Наранхи**, примерно 6,4 дюйма юго-восточнее Флорида-Сити, 6,9 у Корал-Гейблс и 5,1 в Международном аэропорту Майами. В Броварде датчики у **Паркленда, Коконат-Крик и Корал-Спрингс показали от 7 до 7,75 дюйма**, а у Лейк-Уэрта в округе Палм-Бич — больше 7. Метеослужба подчёркивает, что это первые данные с разных станций и не все из них официальные. **До 10 утра сегодня действуют предупреждение о прибрежном подтоплении (умеренном) для побережья Палм-Бич и Броварда и сообщение о прибрежном подтоплении для побережья Майами-Дейд**, высокий риск обратных течений сохраняется до вечера, пятница и суббота ожидаются сухими, а ливни и грозы могут вернуться с вечера воскресенья до начала следующей недели.',
          why: 'Если вода попала в дом или в машину, сообщите об ущербе сейчас и сфотографируйте всё до уборки и до того, как что-то выбросить. Вода, зашедшая с улицы, — это наводнение, а стандартные полисы на дом его исключают (нужен отдельный полис от наводнения); машина, повреждённая водой, покрывается только по comprehensive. См. [страхование от наводнения в Хомстеде](/ru/flood-insurance-homestead-fl), [обратный поток канализации и наводнение](/ru/blog/water-backup-vs-flood-insurance-florida) и [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'NOAA подвела итоги атлантического сезона 2026: 10 именных штормов и всего один ураган — «Исайяс»',
          summary:
            'Сезон заканчивается **в понедельник, 30 ноября**, и NOAA опубликовала итоги 24 ноября: в Атлантике сформировались **10 именных штормов, и только один, «Исайяс» (Isaias), стал ураганом** — при среднем показателе 14 штормов и семь ураганов. «Исайяс» достиг 3-й категории и вышел на сушу **со 2-й категорией у Дестина** во флоридском Панхэндле: штормовой нагон в Панама-Сити-Бич, ливни с наводнениями и сильные порывы ветра на юго-востоке страны. NOAA связывает затишье в Атлантике с **очень сильным Эль-Ниньо**, который усиливает сдвиг ветра и мешает штормам набрать силу, а по сводке Национального центра ураганов суммарная энергия сезона примерно на 83% ниже нормы.',
          why: 'Тихий сезон не значит сухой: наводнения этого месяца в Южной Флориде вызвали штормы, которые ураганами не были, поэтому такой ущерб обычно идёт по обычной франшизе, а не по ураганной, и наводнение по-прежнему исключено из полисов на дом. Межсезонье — удобное время проверить покрытие и документы до 1 июня. См. [чек-лист на конец сезона](/ru/blog/end-of-hurricane-season-checklist-florida) и [чек-лист для страхового случая после шторма](/ru/blog/hurricane-claim-checklist-florida).',
          sources: SEASON,
        },
        {
          headline:
            'Обновление: федеральная помощь по-прежнему для шести округов, а центр помощи в Броварде теперь откроется в субботу',
          summary:
            'В списке территорий FEMA по **декларации о крупном бедствии DR-4956** индивидуальная помощь по-прежнему предусмотрена только для **Бревард, Индиан-Ривер, Мартин, Окичоби, Палм-Бич и Сент-Луси**; **Бровард и Майами-Дейд на утро четверга не добавлены**. На странице управления по чрезвычайным ситуациям штата Многопрофильный центр помощи (MARC) в Броварде теперь указан с **открытием в субботу, 28 ноября**, с 7 утра до 7 вечера, в северо-западном конференц-зале мэрии Дания-Бич, 100 W. Dania Beach Blvd.; в прежних объявлениях, в том числе у нас, была пятница, так что перед поездкой проверьте страницу штата. Возьмите удостоверение личности, подтверждение адреса, данные страховки и документы об ущербе. Форт-Лодердейл также просит жителей, чьи дома затопило, сфотографировать ущерб и сообщить о нём через FixIt FTL или по телефону 954-828-8000.',
          why: 'Сообщение об ущербе городу или визит в центр помощи — это не страховое заявление. Сначала подайте заявление своему страховщику или по полису от наводнения и сохраните номер дела: FEMA не может оплачивать то, что покрывает страховка, и может запросить решение страховщика. См. [чек-лист для страхового случая после шторма](/ru/blog/hurricane-claim-checklist-florida) и [страхование дома в округе Бровард](/ru/homeowners-insurance-broward-county-fl).',
          sources: RECOVERY,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) продлена **до 23:59 11 декабря** (осталось 15 дней; страница FEMA о продлении не менялась с 28 сентября), а новый полис NFIP обычно вступает в силу после 30-дневного ожидания. Национальный центр ураганов не ожидает тропических циклонов в ближайшие семь дней. С Днём благодарения от всей команды M&K Agency!',
        },
      ],
      extraSources: BOX,
    },
  },
};
