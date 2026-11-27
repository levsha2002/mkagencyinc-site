import type { NewsEdition, NewsSource } from '../types';

// Edition for Friday, Nov. 27, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-27',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:19 a.m. EST Fri Nov 27, 2026',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-27',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=txt&version=1&glossary=0',
  title: 'Coastal Hazard Message, 4:52 a.m. EST Fri Nov 27, 2026',
};

const FTL_RAIN_REPORT: NewsSource = {
  name: 'City of Fort Lauderdale',
  date: '2026-11-25',
  url: 'https://legistar.granicus.com/FortLauderdale/attachments/09385fad-faaf-4356-98e3-f59e900c102b.pdf',
  title: 'November 2026 Rain Event Response (CAM #26-1201, Exhibit 1), City Commission Conference Meeting of Dec. 2, 2026',
};

const FTL_MEETING: NewsSource = {
  name: 'City of Fort Lauderdale',
  date: '2026-11-25',
  url: 'https://fortlauderdale.legistar.com/MeetingDetail.aspx?LEGID=2160&GID=252&G=F11871F6-88F5-40B5-BD94-B6711694F9A7',
  title: 'City Commission Conference Meeting, Dec. 2, 2026, 1:35 p.m.: agenda',
};

const BROWARD_MARC: NewsSource = {
  name: 'Broward County (release posted by the Town of Hillsboro Beach)',
  date: '2026-11-25',
  url: 'https://www.townofhillsborobeach.com/m/newsflash/Home/Detail/621',
  title: 'Broward County Resource Center to Open to Assist Residents Impacted by Recent Floods',
};

const HOLLYWOOD_RECOVERY: NewsSource = {
  name: 'City of Hollywood',
  date: '2026-11-25',
  url: 'https://www.hollywoodfl.org/CivicAlerts.aspx?AID=1899',
  title: 'Hollywood Flood Recovery: More Assistance and Community Resources Available',
};

const FDEM_FALL: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-27',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding: Individual Assistance and Multi-Agency Resource Centers (checked Nov. 27, 2026)',
};

const FEMA_4956_AREAS: NewsSource = {
  name: 'FEMA',
  date: '2026-11-24',
  url: 'https://www.fema.gov/disaster/4956/designated-areas',
  title: 'Designated Areas: Disaster 4956',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-27',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Fri Nov 27, 2026',
};

const WEATHER = [NWS_MFL_AFD, NWS_MFL_CFW];
const FTL = [FTL_RAIN_REPORT, FTL_MEETING];
const RECOVERY = [BROWARD_MARC, HOLLYWOOD_RECOVERY, FDEM_FALL, FEMA_4956_AREAS];
const BOX = [FEMA_REAUTH, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-27-tuesday-rain-fort-lauderdale-flood-report-broward-recovery-center',
  datePublished: '2026-11-27',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 27, 2026: a dry start to the weekend before rain returns with Tuesday the wettest day, Fort Lauderdale counts more than 300 flood calls, and Broward’s recovery center opens today',
      metaTitle: 'Insurance News Nov. 27, 2026: Tuesday Rain, Flood Recovery | M&K',
      description:
        'Rain returns to South Florida early next week, Fort Lauderdale’s first report on the November flooding, and Broward’s recovery center hours through Dec. 11.',
      ogAlt:
        'A sun and a rain cloud over a calendar with one day highlighted, a city building with a clipboard and a pile of sandbags, and a house with a folder and a green check mark',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners the day after Thanksgiving. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: dry through Saturday, then showers from Sunday, with Tuesday the best chance of heavy rain',
          summary:
            'NWS Miami expects **mild, dry weather through Saturday**, with highs in the low to mid 70s today. Moisture returns from the Gulf on Sunday: **Sunday and Monday look like scattered showers** with an outside chance of a thunderstorm, and **Tuesday currently has the best chance of widespread rain with periods of moderate to heavy downpours**, though forecasters say the details are still uncertain. A front is expected to bring rain chances down by the middle to end of next week. A Coastal Flood Statement for isolated minor flooding of low-lying roads runs **until 11 a.m. today** along the coasts of Palm Beach, Broward and Miami-Dade, Far South Miami-Dade and Mainland Monroe, and a High Rip Current Risk lasts through this evening for coastal Palm Beach.',
          why: 'Use the dry days to clear gutters and yard drains and to move valuables off the floor if your home flooded last week. If new water gets in on Tuesday, photograph it separately and note the date, because a second storm can mean a separate claim with its own deductible. A new flood policy usually has a 30-day wait, so it won’t cover next week’s rain. See [flood insurance in Homestead](/en/flood-insurance-homestead-fl), [king tides and flood insurance](/en/blog/king-tides-flood-insurance-miami-dade) and [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'New: Fort Lauderdale’s first flood report counts more than 300 service requests and adds sandbag days on Dec. 5 and 6',
          summary:
            'In a presentation prepared for the City Commission’s **Dec. 2 conference meeting**, Fort Lauderdale gives its first tally of the heavy rain that fell **between Nov. 17 and Nov. 25**: **more than 300 flood-related service requests** and **nearly 20 high-water responses in about 30 hours**, including five serious medical incidents. The city names Melrose Park, Melrose Manors, Edgewood, Shady Banks, River Oaks and Riverland as the hardest-hit neighborhoods, says inspectors rated flood-affected buildings from no damage to catastrophic and shared the findings with Broward County Emergency Management, and reports extra bulk trash and debris pickup with code enforcement for trash and debris violations suspended. It also adds a sandbag handout on **Saturday and Sunday, Dec. 5 and 6, from 10 a.m. to 1 p.m.** at Floyd Hull/Morton Center, George English, Holiday, Mills Pond and Riverland parks.',
          why: 'A city damage rating is not an insurance claim, and debris crews won’t wait for your adjuster. Before you put soaked carpet, drywall or furniture at the curb, photograph it, list what it is and keep a small sample of flooring if you can. Flood damage from rising water is covered only by a flood policy, while a sewer or drain backup depends on your homeowners endorsements. See [water backup vs. flood](/en/blog/water-backup-vs-flood-insurance-florida) and [homeowners insurance in Fort Lauderdale](/en/homeowners-insurance-fort-lauderdale-fl).',
          sources: FTL,
        },
        {
          headline:
            'Update: Broward and Hollywood say the Dania Beach recovery center opens today at 1 p.m. and stays open daily through Dec. 11',
          summary:
            'Broward County and the City of Hollywood say the **Multi-Agency Resource Center at Dania Beach City Hall, 100 W. Dania Beach Blvd.**, opens **today, Friday, Nov. 27, from 1 to 7 p.m.**, then runs **daily from 7 a.m. to 7 p.m. through Friday, Dec. 11**. The state emergency management page still showed “Opening 11/28” on Friday morning, and our Nov. 26 edition followed that page, so call ahead or check before you go. Bring identification, proof of residence, insurance information and papers about your losses. Hollywood’s recovery list also points residents with insurance disputes or FEMA questions to Coast to Coast Legal Aid (954-736-2400) and Legal Aid Service of Broward County (954-765-8950). FEMA’s individual assistance under DR-4956 still does not include Broward or Miami-Dade.',
          why: 'Bring your policy declarations page and any claim number, and file with your insurer or flood insurer before asking for other aid. Most policies expect you to take reasonable steps to prevent more damage, such as drying out the home, so keep receipts for fans, dehumidifiers and cleanup. See [the storm claim checklist](/en/blog/hurricane-claim-checklist-florida), [the claim timeline](/en/blog/hurricane-claim-timeline-florida) and [homeowners insurance in Broward County](/en/homeowners-insurance-broward-county-fl).',
          sources: RECOVERY,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program is authorized **through 11:59 p.m. on Dec. 11** (14 days left; FEMA’s reauthorization page has not changed since Sept. 28), and a new NFIP policy usually starts after a 30-day wait. The National Hurricane Center expects no tropical cyclones in the next seven days, and the Atlantic hurricane season officially ends Monday, Nov. 30.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 27 de noviembre de 2026: un comienzo de fin de semana seco antes de que vuelva la lluvia, con el martes como el día más húmedo; Fort Lauderdale contabiliza más de 300 llamadas por inundación, y el centro de ayuda de Broward abre hoy',
      metaTitle: 'Noticias de seguros 27 nov. 2026: lluvia el martes y ayuda | M&K',
      description:
        'Vuelve la lluvia al sur de Florida a comienzos de la semana, el primer informe de Fort Lauderdale sobre las inundaciones y el horario del centro de ayuda de Broward hasta el 11 de diciembre.',
      ogAlt:
        'Un sol y una nube de lluvia sobre un calendario con un día resaltado, un edificio municipal con un portapapeles y una pila de sacos de arena, y una casa con una carpeta y una marca verde',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida al día siguiente de Acción de Gracias. Cada noticia está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: seco hasta el sábado, aguaceros desde el domingo y el martes con la mayor probabilidad de lluvia fuerte',
          summary:
            'El Servicio Meteorológico Nacional en Miami prevé **tiempo templado y seco hasta el sábado**, con máximas entre bajos y medios 70 °F hoy. El domingo vuelve la humedad desde el Golfo: **el domingo y el lunes se esperan aguaceros dispersos**, con una pequeña posibilidad de tormenta eléctrica, y **el martes es, por ahora, el día con más probabilidad de lluvia generalizada, con ratos de aguaceros moderados a fuertes**, aunque los pronosticadores advierten que los detalles aún son inciertos. Un frente debería reducir las probabilidades de lluvia hacia mediados o finales de la próxima semana. **Hasta las 11 a.m. de hoy** rige una declaración de inundación costera por inundaciones menores y aisladas en calles bajas en la costa de Palm Beach, Broward y Miami-Dade, el extremo sur de Miami-Dade y Monroe continental, y el riesgo alto de corrientes de resaca sigue hasta esta noche en la costa de Palm Beach.',
          why: 'Aproveche los días secos para limpiar canaletas y desagües del patio y para subir del piso los objetos de valor si su casa se inundó la semana pasada. Si el martes vuelve a entrar agua, tome fotos aparte y anote la fecha, porque una segunda tormenta puede ser un reclamo distinto con su propio deducible. Una póliza de inundación nueva suele tener 30 días de espera, así que no cubrirá la lluvia de la próxima semana. Vea [seguro de inundación en Homestead](/es/flood-insurance-homestead-fl), [mareas reales y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade) y [comprensivo vs. colisión](/es/blog/comprehensive-vs-collision-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'Nuevo: el primer informe de Fort Lauderdale sobre las inundaciones cuenta más de 300 solicitudes de servicio y suma entregas de sacos de arena el 5 y 6 de diciembre',
          summary:
            'En una presentación preparada para la **reunión de trabajo de la Comisión Municipal del 2 de diciembre**, Fort Lauderdale hace su primer balance de las fuertes lluvias que cayeron **entre el 17 y el 25 de noviembre**: **más de 300 solicitudes de servicio relacionadas con inundaciones** y **casi 20 respuestas por agua alta en unas 30 horas**, entre ellas cinco incidentes médicos graves. La ciudad señala a Melrose Park, Melrose Manors, Edgewood, Shady Banks, River Oaks y Riverland como los vecindarios más afectados, explica que sus inspectores clasificaron los edificios dañados desde «sin daños» hasta «catastrófico» y compartieron los resultados con la oficina de manejo de emergencias del condado de Broward, y reporta recogidas adicionales de basura voluminosa y escombros, con la aplicación del código suspendida para las infracciones por basura y escombros. Además, agrega una entrega de sacos de arena el **sábado 5 y el domingo 6 de diciembre, de 10 a.m. a 1 p.m.**, en Floyd Hull/Morton Center y en los parques George English, Holiday, Mills Pond y Riverland.',
          why: 'La clasificación de daños de la ciudad no es un reclamo de seguro, y los camiones de escombros no van a esperar a su ajustador. Antes de sacar a la acera alfombras, paneles de yeso o muebles empapados, tómeles fotos, haga una lista y, si puede, guarde una muestra pequeña del piso. El daño por agua que sube desde afuera solo lo cubre una póliza de inundación; el retroceso de alcantarillas o desagües depende de los endosos de su póliza de vivienda. Vea [desbordamiento de drenaje vs. inundación](/es/blog/water-backup-vs-flood-insurance-florida) y [seguro de vivienda en Fort Lauderdale](/es/homeowners-insurance-fort-lauderdale-fl).',
          sources: FTL,
        },
        {
          headline:
            'Actualización: Broward y Hollywood dicen que el centro de ayuda de Dania Beach abre hoy a la 1 p.m. y funcionará a diario hasta el 11 de diciembre',
          summary:
            'El condado de Broward y la ciudad de Hollywood informan que el **Centro de Recursos Multiagencia en el Ayuntamiento de Dania Beach, 100 W. Dania Beach Blvd.**, abre **hoy, viernes 27 de noviembre, de 1 a 7 p.m.**, y luego funcionará **todos los días de 7 a.m. a 7 p.m. hasta el viernes 11 de diciembre**. La página estatal de manejo de emergencias todavía decía «Opening 11/28» el viernes por la mañana, y nuestra edición del 26 de noviembre siguió esa página, así que llame o confirme antes de ir. Lleve identificación, prueba de residencia, información de su seguro y documentos sobre sus pérdidas. La lista de recursos de Hollywood también remite a quienes tengan disputas con su seguro o preguntas sobre FEMA a Coast to Coast Legal Aid (954-736-2400) y a Legal Aid Service of Broward County (954-765-8950). La asistencia individual de FEMA bajo la declaración DR-4956 sigue sin incluir a Broward ni a Miami-Dade.',
          why: 'Lleve la página de declaraciones de su póliza y el número de reclamo, si lo tiene, y presente el reclamo a su aseguradora o a su seguro de inundación antes de pedir otras ayudas. La mayoría de las pólizas esperan que usted tome medidas razonables para evitar más daños, como secar la casa, así que guarde los recibos de ventiladores, deshumidificadores y limpieza. Vea [la lista para reclamos después de una tormenta](/es/blog/hurricane-claim-checklist-florida), [los plazos del reclamo](/es/blog/hurricane-claim-timeline-florida) y [seguro de vivienda en el condado de Broward](/es/homeowners-insurance-broward-county-fl).',
          sources: RECOVERY,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p.m. del 11 de diciembre** (faltan 14 días; la página de FEMA sobre la reautorización no cambia desde el 28 de septiembre), y una póliza nueva del NFIP suele empezar después de 30 días de espera. El Centro Nacional de Huracanes no prevé ciclones tropicales en los próximos siete días, y la temporada de huracanes del Atlántico termina oficialmente el lunes 30 de noviembre.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 27 ноября 2026 года: сухое начало выходных, а затем снова дожди, сильнее всего во вторник; Форт-Лодердейл насчитал более 300 обращений из-за наводнения, а центр помощи в Броварде открывается сегодня',
      metaTitle: 'Страховые новости 27.11.2026: дождь во вторник, помощь | M&K',
      description:
        'В начале недели в Южную Флориду возвращаются дожди, первый отчёт Форт-Лодердейла о ноябрьском наводнении и часы работы центра помощи в Броварде до 11 декабря.',
      ogAlt:
        'Солнце и дождевое облако над календарём с выделенным днём, здание мэрии с планшетом и грудой мешков с песком, дом с папкой и зелёной галочкой',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде на следующий день после Дня благодарения. Каждая новость пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: сухо до субботы, с воскресенья ливни, а сильный дождь вероятнее всего во вторник',
          summary:
            'Национальная метеослужба в Майами ожидает **мягкую сухую погоду до субботы**, сегодня днём около 21–24 °C. В воскресенье с Мексиканского залива снова придёт влага: **в воскресенье и понедельник ожидаются местами ливни**, небольшая вероятность грозы, а **вторник пока выглядит самым дождливым днём — с обширными осадками и периодами умеренных и сильных ливней**, хотя синоптики подчёркивают, что детали ещё не ясны. К середине или концу следующей недели фронт должен снизить вероятность дождей. **До 11:00 сегодня** действует сообщение о прибрежном подтоплении (отдельные небольшие подтопления низких улиц) на побережье Палм-Бич, Броварда и Майами-Дейда, на крайнем юге Майами-Дейда и в материковой части Монро, а высокий риск разрывных течений на побережье Палм-Бич сохраняется до вечера.',
          why: 'Пока сухо, прочистите водостоки и дренаж во дворе и, если дом затопило на прошлой неделе, поднимите ценные вещи с пола. Если во вторник вода снова попадёт в дом, сфотографируйте новый ущерб отдельно и запишите дату: второй шторм может считаться отдельным страховым случаем со своей франшизой. У нового полиса от наводнения обычно 30-дневный период ожидания, так что дожди следующей недели он не покроет. См. [страхование от наводнения в Хомстеде](/ru/flood-insurance-homestead-fl), [королевские приливы и страховка от наводнения](/ru/blog/king-tides-flood-insurance-miami-dade) и [каско: comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'Новое: в первом отчёте Форт-Лодердейла о наводнении — более 300 обращений, а 5 и 6 декабря добавлены дни раздачи мешков с песком',
          summary:
            'В презентации к **рабочему заседанию городской комиссии 2 декабря** Форт-Лодердейл впервые подвёл итоги сильных дождей **с 17 по 25 ноября**: **более 300 обращений в городские службы из-за подтоплений** и **почти 20 выездов на затопленные участки примерно за 30 часов**, в том числе пять серьёзных медицинских случаев. Сильнее всего пострадали районы Melrose Park, Melrose Manors, Edgewood, Shady Banks, River Oaks и Riverland. Городские инспекторы оценили повреждённые здания по шкале от «без ущерба» до «катастрофический» и передали данные в управление по чрезвычайным ситуациям округа Бровард; город также организовал дополнительный вывоз крупногабаритного мусора и обломков и приостановил контроль за нарушениями правил по мусору и обломкам. Кроме того, **в субботу и воскресенье, 5 и 6 декабря, с 10:00 до 13:00** будут раздавать мешки с песком в Floyd Hull/Morton Center и парках George English, Holiday, Mills Pond и Riverland.',
          why: 'Оценка ущерба городом — это не страховое заявление, а мусоровозы не будут ждать вашего оценщика. Прежде чем выносить на обочину промокшие ковры, гипсокартон или мебель, сфотографируйте их, составьте список и, если можно, сохраните небольшой образец напольного покрытия. Ущерб от поднявшейся снаружи воды покрывает только полис от наводнения, а обратный выброс из канализации или стока зависит от дополнений к полису на дом. См. [обратный выброс канализации и наводнение](/ru/blog/water-backup-vs-flood-insurance-florida) и [страхование дома в Форт-Лодердейле](/ru/homeowners-insurance-fort-lauderdale-fl).',
          sources: FTL,
        },
        {
          headline:
            'Обновление: Бровард и Голливуд сообщают, что центр помощи в Дания-Бич открывается сегодня в 13:00 и будет работать ежедневно до 11 декабря',
          summary:
            'По данным округа Бровард и города Голливуд, **межведомственный центр помощи (MARC) в здании мэрии Дания-Бич, 100 W. Dania Beach Blvd.**, открывается **сегодня, в пятницу 27 ноября, с 13:00 до 19:00**, а затем будет работать **ежедневно с 7:00 до 19:00 до пятницы 11 декабря**. На странице управления по ЧС штата в пятницу утром всё ещё значилось «Opening 11/28», и наш выпуск от 26 ноября опирался на эту страницу, поэтому перед поездкой позвоните или проверьте. Возьмите удостоверение личности, подтверждение адреса, данные страховки и документы об ущербе. В списке ресурсов Голливуда тем, у кого спор со страховой или вопросы по FEMA, рекомендуют Coast to Coast Legal Aid (954-736-2400) и Legal Aid Service of Broward County (954-765-8950). Индивидуальная помощь FEMA по декларации DR-4956 по-прежнему не распространяется на Бровард и Майами-Дейд.',
          why: 'Возьмите страницу деклараций полиса и номер заявления, если он есть, и подайте заявление своему страховщику или по полису от наводнения, прежде чем просить другую помощь. Большинство полисов требуют принять разумные меры, чтобы ущерб не увеличился, например просушить дом, поэтому сохраняйте чеки за вентиляторы, осушители и уборку. См. [чек-лист для страхового случая после шторма](/ru/blog/hurricane-claim-checklist-florida), [сроки по страховому случаю](/ru/blog/hurricane-claim-timeline-florida) и [страхование дома в округе Бровард](/ru/homeowners-insurance-broward-county-fl).',
          sources: RECOVERY,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) продлена **до 23:59 11 декабря** (осталось 14 дней; страница FEMA о продлении не менялась с 28 сентября), а новый полис NFIP обычно вступает в силу после 30-дневного ожидания. Национальный центр ураганов не ожидает тропических циклонов в ближайшие семь дней, а сезон ураганов в Атлантике официально заканчивается в понедельник, 30 ноября.',
        },
      ],
      extraSources: BOX,
    },
  },
};
