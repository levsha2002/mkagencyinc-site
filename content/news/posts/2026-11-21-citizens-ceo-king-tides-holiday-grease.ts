import type { NewsEdition, NewsSource } from '../types';

// Edition for Saturday, Nov. 21, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const CITIZENS_CERIO: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-11-20',
  url: 'https://www.citizensfla.com/-/20261120-cerio-to-step-down-in-january',
  title: 'Citizens President/CEO Tim Cerio to Step Down in January',
};

const MB_KINGTIDES: NewsSource = {
  name: 'City of Miami Beach',
  date: '2026-11-21',
  url: 'https://www.miamibeachfl.gov/flood-awareness/kingtides/',
  title: '2026 King Tides Predictions: Nov. 23–26 (peak tide times, Virginia Key station)',
};

const MDC_KINGTIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-21',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:42 a.m. EST Sat Nov 21, 2026',
};

const MDC_GREASE: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-11-20',
  url: 'https://www.miamidade.gov/global/release.page?Mduid_release=rel1795016885691814',
  title: 'Focus on food and family and avoid holiday clogs when you “Can the Grease”',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const EO_26_232: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-11-18',
  url: 'https://www.flgov.com/eog/sites/default/files/executive-orders/2026/EO%2026-232.pdf',
  title: 'Executive Order 26-232 (amending EO 26-227, 2026 Fall Flooding)',
};

const MSFH_FAQ: NewsSource = {
  name: 'My Safe Florida Home',
  date: '2026-11-06',
  url: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000390446-msfh-program-modernization-faqs',
  title: 'MSFH Program Modernization FAQs',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-21',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Sat Nov 21, 2026',
};

const TIDES = [MB_KINGTIDES, MDC_KINGTIDES, NWS_MFL_AFD, NHC_TWO];
const BOX = [FEMA_REAUTH, EO_26_232, MSFH_FAQ];

export const edition: NewsEdition = {
  slug: '2026-11-21-citizens-ceo-king-tides-holiday-grease',
  datePublished: '2026-11-21',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 21, 2026: Citizens CEO Tim Cerio will step down in January, king tides arrive during Thanksgiving week, and Miami-Dade asks residents to keep holiday grease out of their drains',
      metaTitle: 'Insurance News Nov. 21, 2026: Citizens CEO, King Tides, Grease | M&K',
      description:
        'Citizens CEO Tim Cerio will leave in January, king tides peak Nov. 23–26 with more rain possible, and Miami-Dade warns about holiday grease clogs in home pipes.',
      ogAlt:
        'A state building with a calendar, a high tide reaching a coastal street with a parked car under a rain cloud, and a kitchen sink next to a jar of cooled grease and a trash can',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Saturday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'New: Citizens Property Insurance CEO Tim Cerio will step down in January 2027',
          summary:
            'Citizens announced on Friday, Nov. 20, that President/CEO and Executive Director **Tim Cerio will leave in January 2027** to return to the private sector, after nearly four years at the head of the state-created insurer of last resort. Citizens says its policy count fell from about **1.4 million to 215,000** during his tenure through its depopulation and clearinghouse programs. Under Florida law, the Citizens Board of Governors will appoint his replacement, and that appointment needs **confirmation by the Florida Senate**; no successor was named.',
          why: 'The announcement is about leadership only and does not describe any change to existing policies. If you are insured with Citizens, your renewal date, any takeout offers you receive and the flood-coverage requirement that extends to most Citizens personal residential policies with wind coverage starting Jan. 1, 2027 (set by state law) are unaffected by it. See [Citizens flood requirement for 2027](/en/blog/citizens-flood-insurance-requirement-2027) and [working with a local agent on Citizens](/en/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_CERIO],
        },
        {
          headline:
            'Reminder: king tides run Monday through Thanksgiving Day, and another front may bring rain on Tuesday and Wednesday',
          summary:
            'Miami-Dade County lists **Nov. 23–26** as this fall’s king tide dates, and the City of Miami Beach’s tide table for the Virginia Key station shows peaks from **7:33 a.m. and 7:35 p.m. Monday** to **10:04 a.m. and 10:10 p.m. Thursday**, with water often staying high for 1.5 to 2 hours on either side. NWS Miami expects scattered thunderstorms this afternoon that could cause urban and poor-drainage flooding on soils still saturated from this week’s rain, a dry Monday, and higher shower and storm chances on **Tuesday and Wednesday** as another front approaches. The National Hurricane Center places a large non-tropical low a few hundred miles east of northeast Florida and gives it only a 10% chance of development.',
          why: 'Saltwater on a street can damage cars quickly: the county suggests moving vehicles to higher ground before the tides and rinsing them with fresh water after driving through salt water, and flood damage to a car is covered only if you carry comprehensive. Homeowners policies generally exclude flood, and a new flood policy usually has a 30-day waiting period, so it will not take effect before these tides. See [king tides and flood insurance](/en/blog/king-tides-flood-insurance-miami-dade), [flood insurance](/en/flood-insurance-homestead-fl) and [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: TIDES,
        },
        {
          headline:
            'New: Miami-Dade Water and Sewer asks residents to keep Thanksgiving grease out of sinks; private-side backups are the homeowner’s to fix',
          summary:
            'In a Nov. 20 release, the Miami-Dade Water and Sewer Department reminded customers that even small amounts of grease poured down a drain can harden and cause backups in home plumbing or the public sewer. It recommends pouring grease into a heat-safe container, letting it solidify and throwing it in the trash, scraping plates into the garbage and not putting food scraps down the disposal. The department says its crews responded to **648 grease- and debris-related clogs** in the past year, and it states plainly that when a backup happens on private-side pipes, **repairs are the homeowner’s responsibility**.',
          why: 'Damage from a sewer or drain backup is often excluded from standard homeowners policies unless you have added water backup coverage, and a flood policy does not cover a backup unless flooding in the area caused it. Check whether your policy includes a water backup endorsement before the holiday cooking starts. See [water backup vs. flood insurance](/en/blog/water-backup-vs-flood-insurance-florida) and [homeowners insurance in Florida City](/en/homeowners-insurance-florida-city).',
          sources: [MDC_GREASE],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program (NFIP) is authorized **through 11:59 p.m. on Dec. 11, 2026**, 20 days from today; FEMA’s reauthorization page shows no change. The governor’s state of emergency for the fall flooding (Executive Order 26-232, Nov. 18) includes Miami-Dade and Broward; no federal disaster declaration for the flooding had been announced as of this morning. The My Safe Florida Home applicant portal is expected to reopen Dec. 4, and hurricane season officially ends Nov. 30.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 21 de noviembre de 2026: el CEO de Citizens, Tim Cerio, dejará el cargo en enero, las mareas reales llegan en la semana de Acción de Gracias y Miami-Dade pide no echar la grasa de las fiestas por el desagüe',
      metaTitle: 'Noticias de seguros 21 nov. 2026: CEO de Citizens, mareas, grasa | M&K',
      description:
        'Tim Cerio dejará Citizens en enero, las mareas reales llegan del 23 al 26 de noviembre con posible lluvia y Miami-Dade advierte sobre tapones de grasa en casa.',
      ogAlt:
        'Un edificio estatal con un calendario, una marea alta que llega a una calle costera con un auto estacionado bajo una nube de lluvia, y un fregadero junto a un frasco de grasa enfriada y un bote de basura',
      intro:
        'Tres actualizaciones para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este sábado. Cada noticia está resumida con nuestras propias palabras, con enlace a la fuente original.',
      items: [
        {
          headline:
            'Nuevo: Tim Cerio, CEO de Citizens Property Insurance, dejará el cargo en enero de 2027',
          summary:
            'Citizens anunció el viernes 20 de noviembre que su presidente, CEO y director ejecutivo, **Tim Cerio, se irá en enero de 2027** para volver al sector privado, tras casi cuatro años al frente de la aseguradora de último recurso creada por el estado. Según Citizens, durante su gestión la cantidad de pólizas bajó de unos **1.4 millones a 215,000** gracias a sus programas de despoblación y de la cámara de compensación (clearinghouse). Por ley, la Junta de Gobernadores de Citizens nombrará a su reemplazo, y ese nombramiento debe ser **confirmado por el Senado de Florida**; todavía no se ha designado sucesor.',
          why: 'El anuncio se refiere solo al liderazgo y no menciona ningún cambio en las pólizas vigentes. Si está asegurado con Citizens, su fecha de renovación, las ofertas de traspaso (takeout) que reciba y el requisito de seguro de inundación que se extiende a la mayoría de las pólizas residenciales personales de Citizens con cobertura de viento a partir del 1 de enero de 2027 (fijado por ley estatal) no cambian por esta noticia. Vea [el requisito de inundación de Citizens para 2027](/es/blog/citizens-flood-insurance-requirement-2027) y [Citizens con un agente local](/es/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_CERIO],
        },
        {
          headline:
            'Recordatorio: las mareas reales van del lunes al Día de Acción de Gracias, y otro frente podría traer lluvia el martes y el miércoles',
          summary:
            'El condado de Miami-Dade señala el **23 al 26 de noviembre** como las fechas de mareas reales (king tides) de este otoño, y la tabla de la Ciudad de Miami Beach para la estación de Virginia Key muestra picos desde las **7:33 a.m. y 7:35 p.m. del lunes** hasta las **10:04 a.m. y 10:10 p.m. del jueves**; el agua suele mantenerse alta entre 1.5 y 2 horas antes y después de cada pico. El NWS de Miami prevé tormentas dispersas esta tarde que podrían causar inundaciones urbanas y en zonas de mal drenaje, porque el suelo sigue saturado por las lluvias de esta semana, un lunes seco y más probabilidad de aguaceros y tormentas el **martes y el miércoles** con la llegada de otro frente. El Centro Nacional de Huracanes ubica una gran baja presión no tropical a unos cientos de millas al este del noreste de Florida y le da apenas un 10% de probabilidad de desarrollo.',
          why: 'El agua salada en la calle puede dañar un auto muy rápido: el condado recomienda mover los vehículos a zonas altas antes de las mareas y enjuagarlos con agua dulce si pasaron por agua salada, y el daño por inundación a un auto solo está cubierto si tiene cobertura integral (comprehensive). Las pólizas de vivienda por lo general excluyen la inundación, y una póliza de inundación nueva suele tener un período de espera de 30 días, así que no entraría en vigor antes de estas mareas. Vea [mareas reales y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade), [seguro de inundación](/es/flood-insurance-homestead-fl) e [integral vs. choque](/es/blog/comprehensive-vs-collision-florida).',
          sources: TIDES,
        },
        {
          headline:
            'Nuevo: Agua y Alcantarillado de Miami-Dade pide no echar la grasa de Acción de Gracias por el fregadero; los tapones en la tubería privada los repara el dueño',
          summary:
            'En un comunicado del 20 de noviembre, el Departamento de Agua y Alcantarillado de Miami-Dade (WASD) recordó que incluso un poco de grasa vertida por el desagüe puede endurecerse y tapar la plomería de la casa o el alcantarillado público. Recomienda echar la grasa en un recipiente resistente al calor, dejar que se solidifique y tirarla a la basura, raspar los platos en el bote de basura y no echar restos de comida al triturador. El departamento informa que en el último año sus cuadrillas atendieron **648 tapones causados por grasa y residuos**, y aclara que si el atasco ocurre en las tuberías del lado privado, **la reparación le corresponde al propietario**.',
          why: 'Los daños por el reflujo de alcantarillado o desagües suelen estar excluidos de las pólizas de vivienda estándar, a menos que haya agregado cobertura de reflujo de agua (water backup), y una póliza de inundación no cubre ese reflujo salvo que lo cause una inundación en la zona. Revise si su póliza incluye ese endoso antes de empezar a cocinar para las fiestas. Vea [reflujo de agua vs. seguro de inundación](/es/blog/water-backup-vs-flood-insurance-florida) y [seguro de vivienda en Florida City](/es/homeowners-insurance-florida-city).',
          sources: [MDC_GREASE],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p.m. del 11 de diciembre de 2026**, dentro de 20 días; la página de FEMA sobre la reautorización no muestra cambios. El estado de emergencia del gobernador por las inundaciones de otoño (Orden Ejecutiva 26-232, del 18 de noviembre) incluye Miami-Dade y Broward; hasta esta mañana no se había anunciado una declaración federal de desastre por estas inundaciones. Se espera que el portal de solicitantes de My Safe Florida Home vuelva a abrir el 4 de diciembre, y la temporada de huracanes termina oficialmente el 30 de noviembre.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Новости страхования во Флориде, 21 ноября 2026 г.: глава Citizens Тим Серио уйдёт в отставку в январе, «королевские приливы» придутся на неделю Дня благодарения, а Майами-Дейд просит не сливать праздничный жир в раковину',
      metaTitle: 'Новости страхования 21.11.2026: глава Citizens, приливы, жир | M&K',
      description:
        'Глава Citizens Тим Серио уйдёт в январе, «королевские приливы» ожидаются 23–26 ноября на фоне дождей, а Майами-Дейд предупреждает о засорах из-за жира.',
      ogAlt:
        'Здание государственного учреждения с календарём, высокий прилив на прибрежной улице с припаркованной машиной под дождевой тучей и кухонная раковина рядом с банкой застывшего жира и мусорным ведром',
      intro:
        'Три новости для владельцев жилья, водителей и владельцев малого бизнеса на юге Флориды в эту субботу. Каждый материал мы пересказали своими словами и дали ссылку на первоисточник.',
      items: [
        {
          headline:
            'Новое: глава Citizens Property Insurance Тим Серио покинет пост в январе 2027 года',
          summary:
            'В пятницу, 20 ноября, Citizens объявила, что её президент, CEO и исполнительный директор **Тим Серио уйдёт в январе 2027 года** и вернётся в частный сектор; компанией — созданным штатом страховщиком последней инстанции — он руководил почти четыре года. По данным Citizens, за это время число её полисов сократилось **примерно с 1,4 млн до 215 тыс.** благодаря программам передачи полисов частным страховщикам (depopulation и clearinghouse). По закону преемника назначит Совет управляющих Citizens, а назначение должен **утвердить Сенат Флориды**; имя преемника пока не названо.',
          why: 'Речь идёт только о смене руководства: об изменениях в действующих полисах в сообщении не говорится. Если вы застрахованы в Citizens, дата продления, предложения о переводе полиса (takeout) и требование иметь страховку от наводнения, которое с 1 января 2027 года распространяется на большинство личных жилищных полисов Citizens с покрытием от ветра (оно установлено законом штата), от этой новости не зависят. Подробнее: [требование Citizens о страховке от наводнения в 2027 году](/ru/blog/citizens-flood-insurance-requirement-2027) и [Citizens через местного агента](/ru/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_CERIO],
        },
        {
          headline:
            'Напоминание: «королевские приливы» продлятся с понедельника до Дня благодарения, а во вторник и среду новый фронт может принести дожди',
          summary:
            'Округ Майами-Дейд называет **23–26 ноября** датами осенних «королевских приливов» (king tides), а таблица города Майами-Бич для станции Вирджиния-Ки показывает пики от **7:33 и 19:35 в понедельник** до **10:04 и 22:10 в четверг**; высокая вода обычно держится по 1,5–2 часа до и после пика. Метеослужба NWS Miami ожидает сегодня днём отдельные грозы, которые могут подтопить улицы и плохо дренируемые участки, ведь земля ещё пропитана водой после дождей этой недели; понедельник будет сухим, а во **вторник и среду** с приближением нового фронта ливни и грозы снова станут вероятнее. Крупная нетропическая область низкого давления находится в нескольких сотнях миль к востоку от северо-востока Флориды; Национальный центр по ураганам оценивает шансы её развития лишь в 10%.',
          why: 'Солёная вода на улице быстро портит машину: округ советует заранее переставить автомобиль повыше, а после поездки по солёной воде промыть его пресной; ущерб машине от затопления покрывается только при наличии comprehensive. Полисы страхования жилья, как правило, не покрывают наводнение, а у нового полиса от наводнения обычно есть 30-дневный период ожидания, так что к этим приливам он вступить в силу не успеет. Подробнее: [«королевские приливы» и страховка от наводнения](/ru/blog/king-tides-flood-insurance-miami-dade), [страхование от наводнения](/ru/flood-insurance-homestead-fl) и [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: TIDES,
        },
        {
          headline:
            'Новое: водоканал Майами-Дейд просит не сливать жир в раковину на День благодарения; засоры в частных трубах устраняет владелец дома',
          summary:
            'В сообщении от 20 ноября Департамент водоснабжения и канализации Майами-Дейд (WASD) напомнил, что даже небольшое количество жира, слитого в раковину, застывает и может вызвать засор в домашней сантехнике или в городской канализации. Департамент советует сливать жир в термостойкую ёмкость, давать ему застыть и выбрасывать в мусор, счищать остатки еды с тарелок в ведро и не отправлять объедки в измельчитель. По его данным, за последний год бригады выезжали на **648 засоров из-за жира и мусора**, а если засор возник в трубах на частной стороне, **ремонт — забота владельца дома**.',
          why: 'Ущерб от обратного тока канализации или стоков (water backup) стандартные полисы страхования жилья часто исключают, если вы не добавили соответствующее покрытие, а полис от наводнения такой ущерб не покрывает, если его не вызвало наводнение в районе. Проверьте, есть ли в вашем полисе дополнение water backup, ещё до праздничной готовки. Подробнее: [water backup и страховка от наводнения](/ru/blog/water-backup-vs-flood-insurance-florida) и [страхование жилья во Флорида-Сити](/ru/homeowners-insurance-florida-city).',
          sources: [MDC_GREASE],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) действует **до 23:59 11 декабря 2026 г.**, то есть ещё 20 дней; на странице FEMA о продлении программы изменений нет. Режим чрезвычайной ситуации, введённый губернатором из-за осенних наводнений (указ 26-232 от 18 ноября), распространяется на Майами-Дейд и Бровард; о федеральном объявлении бедствия в связи с этими наводнениями на утро субботы не сообщалось. Портал для заявителей программы My Safe Florida Home, как ожидается, снова откроется 4 декабря, а сезон ураганов официально заканчивается 30 ноября.',
        },
      ],
      extraSources: BOX,
    },
  },
};
