import type { NewsEdition, NewsSource } from '../types';

// Edition for Thursday, Oct. 15, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const ESCAMBIA_FEMA: NewsSource = {
  name: 'Escambia County',
  date: '2026-10-14',
  url: 'https://myescambia.com/news/news-article/2026/10/14/escambia-county-fema-update-on-hurricane-isaias',
  title: 'Escambia County FEMA Update on Hurricane Isaias',
};

const ESCAMBIA_DAMAGE: NewsSource = {
  name: 'Escambia County',
  date: '2026-10-13',
  url: 'https://myescambia.com/news/news-article/2026/10/13/escambia-county-completes-initial-damage-assessment-for-hurricane-isaias',
  title: 'Escambia County Completes Initial Damage Assessment for Hurricane Isaias',
};

const PLT_FEMA: NewsSource = {
  name: 'Pensacola Local Today',
  date: '2026-10-15',
  url: 'https://pensacolalocaltoday.com/isaias-fema-individual-assistance/',
  title: 'No FEMA aid for Isaias households yet in Escambia',
};

const FEMA_EM_PR: NewsSource = {
  name: 'Federal Emergency Management Agency',
  date: '2026-10-09',
  url: 'https://www.fema.gov/press-release/20261009/president-donald-j-trump-approves-emergency-declaration-florida',
  title: 'President Approves Emergency Declaration for Florida',
};

const FEMA_3655: NewsSource = {
  name: 'Federal Emergency Management Agency',
  date: '2026-10-15',
  url: 'https://www.fema.gov/disaster/3655',
  title: 'EM-3655-FL Hurricane Isaias (Florida)',
};

const OIR_DATACALL: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-12',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/12/data-call-notice-hurricane-isaias-catastrophe-reporting',
  title: 'DATA CALL NOTICE: Hurricane Isaias Catastrophe Reporting',
};

const OIR_CAT: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-15',
  url: 'https://www.floir.gov/tools-and-data/catastrophe-reporting',
  title: 'Catastrophe Reporting',
};

const FL_PRESS_LOSSES: NewsSource = {
  name: 'The Florida Press',
  date: '2026-10-15',
  url: 'https://www.thefloridapress.com/news/isaias-insured-losses-estimated-at-1-billion-to-3-billion-far-below-pre-storm-fo',
  title:
    'Isaias Insured Losses Estimated at $1 Billion to $3 Billion, Far Below Pre-Storm Forecasts and Hurricane Michael',
};

const DFS_RESOURCES: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-15',
  url: 'https://myfloridacfo.com/division/consumers/storm/resources',
  title: 'Hurricane Resources — Insurance Assistance Hub locations',
};

const WEAR_HUB: NewsSource = {
  name: 'WEAR',
  date: '2026-10-14',
  url: 'https://weartv.com/news/local/temporary-hurricane-insurance-claims-hub-available-at-uwf-through-friday',
  title: 'Temporary hurricane insurance claims hub available at UWF through Friday',
};

const FDEM_ISAIAS: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-10-15',
  url: 'https://www.floridadisaster.org/disaster-updates/hurricane-isaias/',
  title: 'Hurricane Isaias — Disaster Updates',
};

const FDACS_PR: NewsSource = {
  name: 'Florida Department of Agriculture and Consumer Services',
  date: '2026-10-12',
  url: 'https://www.fdacs.gov/News-Events/Press-Releases/2026-Press-Releases/Commissioner-Wilton-Simpson-Launches-Loan-Program-for-Florida-Farmers-Impacted-by-Hurricane-Isaias',
  title:
    'Commissioner Wilton Simpson Launches Loan Program for Florida Farmers Impacted by Hurricane Isaias',
};

const FDACS_PROGRAM: NewsSource = {
  name: 'Florida Department of Agriculture and Consumer Services',
  date: '2026-10-15',
  url: 'https://www.fdacs.gov/Agriculture-Industry/Agriculture-and-Aquaculture-Producers-Natural-Disaster-Recovery-Loan-Program',
  title: 'Agriculture and Aquaculture Producers Emergency Loan Program',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-15',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Atlantic Tropical Weather Outlook, 8 a.m. EDT Thu Oct 15, 2026',
};

const MIAMI_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (Agent)',
};

export const edition: NewsEdition = {
  slug: '2026-10-15-escambia-pda-oir-crf-hubs-fdacs',
  datePublished: '2026-10-15',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 15, 2026: Escambia damage assessments advance, OIR’s noon claim deadline, hubs’ last two days, and farm recovery loans',
      metaTitle: 'Insurance News Oct. 15, 2026: Escambia PDA | M&K Agency',
      description:
        'Today: Escambia meets Public Assistance threshold while IA assessments continue, OIR’s second Isaias CRF is due at noon, DFS hubs run through Friday, and FDACS opens farm recovery loans.',
      ogAlt:
        'A damage-assessment clipboard with a checkmark, a noon deadline clock, and a recovery building',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners as Panhandle recovery from Hurricane Isaias continues. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: Escambia meets Public Assistance threshold; Individual Assistance still under review — no major disaster yet',
          summary:
            'On Oct. 14 Escambia County and the City of Pensacola worked with state damage-assessment teams after Hurricane Isaias. The joint Public Assistance team determined Escambia meets the threshold for Public Assistance to local governments once a presidential major disaster declaration is issued; the Individual Assistance team was still assessing whether the county meets that separate threshold. Escambia’s initial public-infrastructure estimate is about $64 million and does not include private property. As of Thursday morning, FEMA’s Florida Isaias record remained emergency declaration EM-3655-FL only — not a major disaster — so household Individual Assistance was still not open. Miami-Dade, Broward and Monroe are not designated for this event.',
          why: 'If family in the Panhandle asks about “FEMA money,” the path is still: report damage locally, file with your insurer first, and wait for a major-disaster / Individual Assistance designation before anyone can apply at DisasterAssistance.gov.',
          sources: [ESCAMBIA_FEMA, ESCAMBIA_DAMAGE, PLT_FEMA, FEMA_3655, FEMA_EM_PR],
        },
        {
          headline:
            'Update: OIR’s second Isaias claim filing is due noon ET today; public aggregates still not posted this morning',
          summary:
            'Insurers’ second simplified Catastrophe Reporting Form for Hurricane Isaias is due to the Florida Office of Insurance Regulation by noon Eastern today, Oct. 15. Filings are cumulative. OIR’s public catastrophe-reporting page still showed no statewide Isaias claim or loss aggregates as of this morning — only the Oct. 12 data-call notice and older-storm tables. Separately, industry modelers cited today put insured losses roughly in a $1 billion to $3 billion range across the storm’s path (one firm $2–3 billion wind and storm surge; another $1–2 billion onshore property), well below Hurricane Michael’s Florida toll, but those are models — not OIR’s official count.',
          why: 'Watch floir.gov for the first official Florida claim totals after today’s deadline. If you have storm damage, file promptly with photos and receipts; do not wait for the aggregates to appear.',
          sources: [OIR_DATACALL, OIR_CAT, FL_PRESS_LOSSES],
        },
        {
          headline:
            'Update: Destin and Pensacola insurance hubs enter their last two scheduled days',
          summary:
            'Florida DFS Insurance Assistance Hubs in Destin (Morgan Sports Complex, 4200 Indian Bayou Trail) and Pensacola (University of West Florida, 11000 University Parkway, Parking Lot B) remain listed through Friday, Oct. 16 — today and tomorrow are the last two scheduled days, generally 9 a.m. to 4 p.m. Central. Local coverage notes carriers and consumer-services staff can help open or follow up on claims; bring a photo ID, insurance card or policy details, and damage photos if you have them. Helpline 1-877-693-5236; fraud reports 1-800-378-0445 or FraudFreeFlorida.com. FDEM’s Isaias page also lists Multi-Agency Resource Centers; Okaloosa locations were scheduled to open Oct. 15.',
          why: 'If you or relatives still need in-person claim help in the Panhandle, go today or Friday — or call the helpline — before the hubs’ listed window closes.',
          sources: [DFS_RESOURCES, WEAR_HUB, FDEM_ISAIAS],
        },
        {
          headline:
            'FDACS opens interest-free farm and aquaculture recovery loans up to $500,000 after Isaias',
          summary:
            'On Oct. 12 Florida Agriculture Commissioner Wilton Simpson announced that eligible farmers, ranchers, growers and aquaculture producers with Isaias damage can apply for interest-free loans of up to $500,000 through the Agriculture and Aquaculture Producers Natural Disaster Recovery Loan Program. Loans may fund repair or replacement of essential physical property (fences, equipment, greenhouses and other buildings), debris removal, or aquaculture restocking. Damaged property must be in listed Panhandle, Big Bend and west-central counties (including Escambia, Santa Rosa, Okaloosa, Walton, Hillsborough, Pasco and Pinellas); Miami-Dade, Broward and Monroe are not on the Isaias county list. Applicants should photograph damage and keep receipts; program rules limit how many loans a producer may receive per storm and over time.',
          why: 'Ag and aquaculture operators with Isaias damage in an eligible county should review FDACS eligibility and apply through the department’s portal — and disclose other recovery funds so loans do not unlawfully duplicate other aid.',
          sources: [FDACS_PR, FDACS_PROGRAM],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Tropics & calendar',
          text: 'NHC’s Thursday 8 a.m. EDT outlook: tropical cyclone formation is not expected over the next 7 days. No Florida threat. Reminder: Miami-Dade’s next king-tide window is Oct. 24–30; Citizens’ next personal-lines assumption is Tuesday, Oct. 20.',
        },
      ],
      extraSources: [NHC_TWO, MIAMI_KING, CITIZENS_CAL],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 15 de octubre de 2026: avanzan las evaluaciones en Escambia, plazo de mediodía de la OIR, últimos dos días de los hubs y préstamos agrícolas',
      metaTitle: 'Noticias de seguros, 15 oct. 2026: Escambia PDA | M&K',
      description:
        'Hoy: Escambia alcanza el umbral de Public Assistance mientras sigue la evaluación de IA, el segundo CRF de Isaías vence al mediodía, los hubs del DFS abren hasta el viernes y FDACS abre préstamos agrícolas.',
      ogAlt:
        'Un portapapeles de evaluación con un visto bueno, un reloj de mediodía y un edificio de recuperación',
      intro:
        'Cuatro novedades para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida, mientras sigue la recuperación en el Panhandle tras el huracán Isaías. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: Escambia alcanza el umbral de Public Assistance; Individual Assistance sigue en revisión — aún no hay desastre mayor',
          summary:
            'El 14 de octubre el condado de Escambia y la Ciudad de Pensacola trabajaron con equipos estatales de evaluación de daños tras el huracán Isaías. El equipo conjunto de Public Assistance determinó que Escambia alcanza el umbral para asistencia a gobiernos locales una vez que se emita una declaración presidencial de desastre mayor; el equipo de Individual Assistance seguía evaluando si el condado alcanza ese umbral separado. La estimación inicial de infraestructura pública de Escambia es de unos $64 millones y no incluye propiedad privada. Esta mañana del jueves, el registro de FEMA para Isaías en Florida seguía siendo solo la declaración de emergencia EM-3655-FL — no un desastre mayor — así que Individual Assistance para hogares aún no estaba abierta. Miami-Dade, Broward y Monroe no están designados para este evento.',
          why: 'Si familiares en el Panhandle preguntan por “dinero de FEMA”, el camino sigue siendo: reportar daños a nivel local, presentar primero el reclamo al seguro, y esperar una designación de desastre mayor / Individual Assistance antes de poder solicitar en DisasterAssistance.gov.',
          sources: [ESCAMBIA_FEMA, ESCAMBIA_DAMAGE, PLT_FEMA, FEMA_3655, FEMA_EM_PR],
        },
        {
          headline:
            'Actualización: el segundo filing de reclamos de Isaías ante la OIR vence al mediodía hora del Este hoy; aún no hay agregados públicos esta mañana',
          summary:
            'El segundo Catastrophe Reporting Form simplificado por el huracán Isaías debe presentarse ante la Oficina de Regulación de Seguros de Florida a más tardar al mediodía hora del Este de hoy, 15 de octubre. Los filings son acumulativos. La página pública de reportes de catástrofe de la OIR aún no mostraba totales estatales de reclamos o pérdidas por Isaías esta mañana — solo el aviso del data call del 12 de octubre y tablas de tormentas anteriores. Por separado, modeladores de la industria citados hoy sitúan las pérdidas aseguradas en torno a $1.000 a $3.000 millones en la trayectoria de la tormenta (una firma $2–3 mil millones por viento y marejada; otra $1–2 mil millones en propiedad en tierra), muy por debajo del costo de Michael en Florida, pero son modelos — no el conteo oficial de la OIR.',
          why: 'Revise floir.gov tras el plazo de hoy para los primeros totales oficiales de reclamos en Florida. Si tiene daños por la tormenta, presente el reclamo pronto con fotos y recibos; no espere a que aparezcan los agregados.',
          sources: [OIR_DATACALL, OIR_CAT, FL_PRESS_LOSSES],
        },
        {
          headline:
            'Actualización: los hubs de seguros de Destin y Pensacola entran en sus últimos dos días programados',
          summary:
            'Los Insurance Assistance Hubs del DFS de Florida en Destin (Morgan Sports Complex, 4200 Indian Bayou Trail) y Pensacola (University of West Florida, 11000 University Parkway, Parking Lot B) figuran hasta el viernes 16 de octubre: hoy y mañana son los últimos dos días programados, en general de 9 a.m. a 4 p.m. hora del Centro. Cobertura local señala que aseguradoras y personal de servicios al consumidor pueden ayudar a abrir o dar seguimiento a reclamos; lleve identificación con foto, tarjeta o datos de la póliza y fotos del daño si las tiene. Línea de ayuda 1-877-693-5236; denuncias de fraude 1-800-378-0445 o FraudFreeFlorida.com. La página de Isaías de FDEM también lista Multi-Agency Resource Centers; las ubicaciones de Okaloosa debían abrir el 15 de octubre.',
          why: 'Si usted o familiares aún necesitan ayuda presencial con un reclamo en el Panhandle, vaya hoy o el viernes — o llame a la línea de ayuda — antes de que cierre la ventana publicada de los hubs.',
          sources: [DFS_RESOURCES, WEAR_HUB, FDEM_ISAIAS],
        },
        {
          headline:
            'FDACS abre préstamos sin intereses de hasta $500.000 para granjas y acuicultura tras Isaías',
          summary:
            'El 12 de octubre el comisionado de Agricultura de Florida, Wilton Simpson, anunció que agricultores, ganaderos, productores y acuicultores elegibles con daños por Isaías pueden solicitar préstamos sin intereses de hasta $500.000 a través del Agriculture and Aquaculture Producers Natural Disaster Recovery Loan Program. Los fondos pueden usarse para reparar o reemplazar propiedad física esencial (cercas, equipo, invernaderos y otros edificios), retirar escombros o reponer acuicultura. La propiedad dañada debe estar en condados listados del Panhandle, Big Bend y centro-oeste (incluidos Escambia, Santa Rosa, Okaloosa, Walton, Hillsborough, Pasco y Pinellas); Miami-Dade, Broward y Monroe no están en la lista de Isaías. Los solicitantes deben fotografiar los daños y guardar recibos; las reglas limitan cuántos préstamos puede recibir un productor por tormenta y a lo largo del tiempo.',
          why: 'Operadores agrícolas o de acuicultura con daños por Isaías en un condado elegible deben revisar los requisitos de FDACS y solicitar en el portal del departamento — y declarar otros fondos de recuperación para no duplicar ilegalmente otras ayudas.',
          sources: [FDACS_PR, FDACS_PROGRAM],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Trópico y calendario',
          text: 'Pronóstico del NHC del jueves a las 8 a.m. hora del Este: no se espera formación de ciclones tropicales en los próximos 7 días. Sin amenaza para Florida. Recordatorio: la próxima ventana de mareas altas (king tides) en Miami-Dade es del 24 al 30 de octubre; la próxima asunción de líneas personales de Citizens es el martes 20 de octubre.',
        },
      ],
      extraSources: [NHC_TWO, MIAMI_KING, CITIZENS_CAL],
    },
    ru: {
      title:
        'Страховые новости Флориды, 15 октября 2026: оценки ущерба в Escambia, дедлайн OIR в полдень, последние два дня хабов и аграрные кредиты',
      metaTitle: 'Страховые новости 15 окт. 2026: Escambia PDA | M&K',
      description:
        'Сегодня: Escambia достигла порога Public Assistance, пока идёт оценка IA; второй CRF по «Исайасу» — в полдень; хабы DFS до пятницы; FDACS открыл аграрные recovery-кредиты.',
      ogAlt:
        'Планшет оценки ущерба с галочкой, часы полуденного дедлайна и здание для восстановления',
      intro:
        'Четыре новости для владельцев жилья, водителей и малого бизнеса в Южной Флориде: на Panhandle продолжается восстановление после урагана «Исайас». Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: Escambia достигла порога Public Assistance; Individual Assistance ещё оценивают — major disaster пока нет',
          summary:
            '14 октября округ Escambia и город Pensacola работали с штатными командами оценки ущерба после урагана «Исайас». Совместная команда Public Assistance определила, что Escambia достигает порога для помощи местным властям после presidential major disaster declaration; команда Individual Assistance ещё оценивала, достигает ли округ отдельного порога IA. Первая оценка публичной инфраструктуры Escambia — около $64 млн и не включает частную собственность. Утром в четверг запись FEMA по «Исайасу» во Флориде оставалась только emergency declaration EM-3655-FL — не major disaster — поэтому Individual Assistance для домохозяйств ещё не открыта. Miami-Dade, Broward и Monroe не designated по этому событию.',
          why: 'Если родственники на Panhandle спрашивают про «деньги FEMA», путь пока тот же: сообщить ущерб местным властям, сначала подать страховщику, и ждать designation major disaster / Individual Assistance, прежде чем кто-то сможет подать заявку на DisasterAssistance.gov.',
          sources: [ESCAMBIA_FEMA, ESCAMBIA_DAMAGE, PLT_FEMA, FEMA_3655, FEMA_EM_PR],
        },
        {
          headline:
            'Обновление: второй filing убытков по «Исайасу» в OIR — сегодня в полдень ET; публичных агрегатов этим утром ещё нет',
          summary:
            'Второй упрощённый Catastrophe Reporting Form по урагану «Исайас» страховщики должны подать в Управление страхового регулирования Флориды до полудня Eastern сегодня, 15 октября. Filings накопительные. На публичной странице catastrophe reporting OIR этим утром по-прежнему не было сводных штатных цифр по убыткам «Исайаса» — только уведомление о data call от 12 октября и таблицы по прошлым штормам. Отдельно отраслевые модели, на которые ссылаются сегодня, оценивают застрахованные убытки примерно в диапазоне $1–3 млрд по траектории шторма (одна фирма $2–3 млрд ветер и штормовой нагон; другая $1–2 млрд onshore property) — заметно ниже Florida-счёта Hurricane Michael, но это модели, а не официальный подсчёт OIR.',
          why: 'После сегодняшнего дедлайна смотрите floir.gov — первые официальные цифры по Florida claims. При ущербе от шторма подавайте заявление быстро с фото и чеками; не ждите появления агрегатов.',
          sources: [OIR_DATACALL, OIR_CAT, FL_PRESS_LOSSES],
        },
        {
          headline:
            'Обновление: страховые хабы в Destin и Pensacola входят в последние два запланированных дня',
          summary:
            'Insurance Assistance Hubs DFS Флориды в Destin (Morgan Sports Complex, 4200 Indian Bayou Trail) и Pensacola (University of West Florida, 11000 University Parkway, Parking Lot B) указаны до пятницы, 16 октября: сегодня и завтра — последние два запланированных дня, обычно с 9:00 до 16:00 по центральному времени. Местные репортажи отмечают, что страховщики и специалисты consumer services могут помочь открыть или продвинуть убыток; возьмите удостоверение с фото, карту/данные полиса и фото ущерба, если есть. Телефон помощи 1-877-693-5236; о мошенничестве — 1-800-378-0445 или FraudFreeFlorida.com. На странице «Исайаса» FDEM также перечислены Multi-Agency Resource Centers; площадки в Okaloosa должны были открыться 15 октября.',
          why: 'Если вам или родственникам ещё нужна очная помощь по убытку на Panhandle, едьте сегодня или в пятницу — или звоните на горячую линию — пока не закрылось объявленное окно хабов.',
          sources: [DFS_RESOURCES, WEAR_HUB, FDEM_ISAIAS],
        },
        {
          headline:
            'FDACS открыл беспроцентные recovery-кредиты до $500 000 для ферм и аквакультуры после «Исайаса»',
          summary:
            '12 октября комиссар сельского хозяйства Флориды Wilton Simpson объявил, что подходящие фермеры, ранчо, производители и аквакультура с ущербом от «Исайаса» могут подать заявку на беспроцентные кредиты до $500 000 через Agriculture and Aquaculture Producers Natural Disaster Recovery Loan Program. Средства можно направить на ремонт или замену essential physical property (заборы, оборудование, теплицы и другие здания), вывоз мусора или restock аквакультуры. Повреждённое имущество должно быть в перечисленных округах Panhandle, Big Bend и западно-центральной Флориды (включая Escambia, Santa Rosa, Okaloosa, Walton, Hillsborough, Pasco и Pinellas); Miami-Dade, Broward и Monroe в списке по «Исайасу» нет. Заявителям советуют фотографировать ущерб и хранить чеки; правила ограничивают, сколько кредитов производитель может получить на один шторм и за период времени.',
          why: 'Аграрным и аквакультурным операторам с ущербом от «Исайаса» в eligible county стоит проверить требования FDACS и подать заявку через портал ведомства — и указать другие recovery-средства, чтобы не дублировать незаконно иную помощь.',
          sources: [FDACS_PR, FDACS_PROGRAM],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Тропики и календарь',
          text: 'Утренний обзор NHC в четверг в 8:00 ET: образование тропических циклонов в ближайшие 7 дней не ожидается. Угрозы Флориде нет. Напоминание: следующее окно king tides в Miami-Dade — 24–30 октября; следующий assumption personal lines Citizens — вторник, 20 октября.',
        },
      ],
      extraSources: [NHC_TWO, MIAMI_KING, CITIZENS_CAL],
    },
  },
};
