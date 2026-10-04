import type { NewsEdition, NewsSource } from '../types';

// Edition for Sunday, Oct. 4, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const WLRN_UNF: NewsSource = {
  name: 'WLRN / Florida Phoenix',
  date: '2026-09-28',
  url: 'https://www.wlrn.org/government-politics/2026-09-28/survey-floridians-sour-on-prospects-for-the-property-insurance-market',
  title: 'Survey: Floridians sour on prospects for the property insurance market',
};

const NEWS4JAX_UNF: NewsSource = {
  name: 'News4JAX',
  date: '2026-09-28',
  url: 'https://www.news4jax.com/news/local/2026/09/28/unf-poll-florida-homeowners-more-concerned-about-insurance-than-property-taxes/',
  title: 'UNF poll: Florida homeowners more concerned about insurance than property taxes',
};

const TRIPLE_I: NewsSource = {
  name: 'Insurance Business (Triple-I response)',
  date: '2026-10-01',
  url: 'https://www.insurancebusinessmag.com/us/news/breaking-news/triplei-florida-insurance-survey-misses-vastly-improved-market-591949.aspx',
  title: "Triple-I: Florida insurance survey misses 'vastly improved' market",
};

const CRS_NFIP: NewsSource = {
  name: 'Congressional Research Service (IN10835)',
  date: '2026-09-11',
  url: 'https://www.congress.gov/crs_external_products/IN/PDF/IN10835/IN10835.62.pdf',
  title: 'What Happens If the National Flood Insurance Program (NFIP) Lapses?',
};

const FEMA_NFIP: NewsSource = {
  name: 'FEMA — NFIP Congressional Reauthorization',
  date: '2026-10-04',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const CITIZENS_FLOOD: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2023-12-04',
  url: 'https://www.citizensfla.com/-/new-flood-requirements-begin-january-1',
  title: 'New Flood Requirements Begin January 1',
};

const FLHSMV_CMV: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-10-02',
  url: 'https://www.flhsmv.gov/2026/10/02/florida-highway-patrol-participates-in-multi-state-strike-force-operation/',
  title: 'Florida Highway Patrol Participates in Multi-State Strike Force Operation',
};

const NHC: NewsSource = {
  name: 'National Hurricane Center: Atlantic Tropical Weather Outlook',
  date: '2026-10-04',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8:00 AM EDT Sun Oct 4 2026',
};

const MIAMI_DADE_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

export const edition: NewsEdition = {
  slug: '2026-10-04-homeowner-poll-nfip-cmv',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 4, 2026: homeowner poll vs. market data, NFIP Dec. 11 watch, CMV truck blitz',
      metaTitle: 'Insurance News Oct. 4, 2026: Poll, NFIP, Trucks | M&K Agency',
      description:
        'Today: a UNF homeowner poll clashes with industry market data, NFIP authority runs to Dec. 11, and FHP joins a Southeast commercial-truck safety blitz.',
      ogAlt: 'Clipboard with checkmarks beside a Florida flood map and a semi truck on a highway',
      intro:
        'Three updates from the last few days for South Florida homeowners, flood-policy buyers and small businesses that run work trucks. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'UNF poll: most Florida homeowners still see no improvement in the property-insurance market',
          summary:
            'A University of North Florida Public Opinion Research Lab survey of 1,511 insured Florida homeowners (July 16–31, for the Orlando Sentinel and South Florida Sun Sentinel) found 55% saw no signs the market is improving, 26% said it is getting worse, and only 18% expect improvement. Sixty-three percent said they worry more about property insurance than property taxes (±3.18 points). Among homeowners in their home five years or more, 47% reported their annual premium had risen by at least 50% over that span; 25% said they had been dropped by an insurer at least once in five years. On Oct. 1 the Insurance Information Institute (Triple-I) disputed the framing, pointing to indicators such as Citizens’ policy count near 255,000 and recent average homeowners rate-filing direction turning negative statewide—while noting individual bills still vary widely by location and property.',
          why: 'Perception and market data can diverge. At renewal, compare your declarations page, deductibles and carrier options with a licensed agent rather than relying on statewide averages alone—and revisit [homeowners coverage](/en/homeowners-insurance-florida-city) if your situation has changed.',
          sources: [WLRN_UNF, NEWS4JAX_UNF, TRIPLE_I],
        },
        {
          headline:
            'NFIP remains authorized through Dec. 11, 2026—Florida’s next flood-insurance cliff',
          summary:
            'After Congress extended the National Flood Insurance Program with the Continuing Appropriations and Extensions Act, 2027, FEMA and the Congressional Research Service both list Dec. 11, 2026 as the current authorization end date. CRS Insight IN10835 (updated Sept. 11) explains that if authority lapses that day, FEMA cannot issue new flood contracts and NFIP Treasury borrowing authority would fall from about $30.4 billion to $1 billion; policies already in force generally continue to their term end and claims on those policies can still be paid. Florida has more NFIP policies than any other state. Separately, Citizens requires flood coverage for remaining personal-lines wind policies on a phased schedule that reaches all such dwellings by Jan. 1, 2027 (condo unit-owner policies excepted).',
          why: 'If you buy, sell or renew a flood policy this winter—or hold a Citizens wind policy—confirm your renewal timing well before Dec. 11 and review the [Citizens flood requirement](/en/blog/citizens-flood-insurance-requirement-2027). Separate [flood coverage](/en/flood-insurance-homestead-fl) is not part of a standard homeowners policy.',
          sources: [FEMA_NFIP, CRS_NFIP, CITIZENS_FLOOD],
        },
        {
          headline:
            'FHP joins multi-state overnight blitz on commercial trucks along I-95',
          summary:
            'On Oct. 2 the Florida Department of Highway Safety and Motor Vehicles reported results from Operation Saturday Night Fever, an overnight commercial-motor-vehicle enforcement push on Sept. 26 along the I-95 corridor. Florida Highway Patrol’s Office of Commercial Vehicle Enforcement worked with FMCSA and partner states (Georgia, South Carolina, North Carolina) plus ICE. Joint results: 552 inspections, 78 drivers and 25 vehicles placed out of service (12 drivers for English Language Proficiency), plus 7 criminal arrests and 11 ICE detentions. Targeted issues included fatigue, electronic logging-device manipulation, mechanical defects, impaired or distracted driving and cargo securement.',
          why: 'If you run [work trucks](/en/work-truck-insurance-florida) or other commercial vehicles in Florida, keep driver logs, vehicle inspections and cargo securement current—roadside blitzes like this one can take unsafe equipment and drivers out of service overnight.',
          sources: [FLHSMV_CMV],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Tropics check (Sunday, Oct. 4, 8 a.m. EDT)',
          text: 'The [National Hurricane Center](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) says a broad low could form in a few days over the southwestern Gulf of America, with a **low** chance of tropical development (near 0% in 48 hours, **30%** within seven days) while it drifts north. No Florida tropical threat right now. Separately, Miami-Dade’s king-tide calendar lists the next coastal window **Oct. 7–13** (then Oct. 24–30)—move cars off low streets and remember that flood damage is generally not covered by a standard homeowners policy.',
        },
      ],
      extraSources: [NHC, MIAMI_DADE_TIDES],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 4 de octubre de 2026: encuesta de propietarios, NFIP hasta el 11 de diciembre y operativo de camiones',
      metaTitle: 'Noticias de seguros, 4 oct. 2026: encuesta, NFIP, CMV | M&K Agency',
      description:
        'Hoy: una encuesta de UNF choca con datos del mercado, el NFIP sigue autorizado hasta el 11 de diciembre y la FHP se suma a un operativo de camiones comerciales.',
      ogAlt: 'Portapapeles con marcas junto a un mapa de inundación de Florida y un camión en la autopista',
      intro:
        'Tres novedades de los últimos días para propietarios, compradores de seguro de inundación y pequeños negocios con camiones de trabajo en el sur de la Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Encuesta de UNF: la mayoría de los propietarios en Florida aún no ve mejora en el mercado de seguros de vivienda',
          summary:
            'Una encuesta del Public Opinion Research Lab de la University of North Florida a 1.511 propietarios asegurados en Florida (16–31 de julio, para el Orlando Sentinel y el South Florida Sun Sentinel) halló que el 55% no ve señales de mejora, el 26% cree que el mercado empeora y solo el 18% espera mejora. El 63% dijo preocuparse más por el seguro de propiedad que por los impuestos a la propiedad (±3,18 puntos). Entre quienes llevan cinco años o más en su casa, el 47% reportó que su prima anual subió al menos un 50% en ese lapso; el 25% dijo haber sido dado de baja por un asegurador al menos una vez en cinco años. El 1 de octubre, el Insurance Information Institute (Triple-I) cuestionó el enfoque y citó indicadores como el recuento de pólizas de Citizens cerca de 255.000 y la dirección reciente de solicitudes de tarifas de hogar en promedio a la baja a nivel estatal—y advirtió que las facturas individuales varían mucho según ubicación y propiedad.',
          why: 'La percepción y los datos del mercado pueden divergir. En la renovación, compare su página de declaraciones, deducibles y opciones de asegurador con un agente licenciado—y revise su [cobertura de hogar](/es/homeowners-insurance-florida-city) si su situación cambió.',
          sources: [WLRN_UNF, NEWS4JAX_UNF, TRIPLE_I],
        },
        {
          headline:
            'El NFIP sigue autorizado hasta el 11 de diciembre de 2026: el próximo precipicio del seguro de inundación en Florida',
          summary:
            'Tras la extensión del Congreso con la Continuing Appropriations and Extensions Act, 2027, FEMA y el Congressional Research Service señalan el 11 de diciembre de 2026 como fecha actual de fin de autorización del National Flood Insurance Program. El CRS Insight IN10835 (actualizado el 11 de septiembre) explica que, si la autoridad caduca ese día, FEMA no puede emitir contratos nuevos de inundación y la facultad de endeudamiento del NFIP con el Tesoro bajaría de unos 30.400 millones de dólares a 1.000 millones; las pólizas ya vigentes suelen continuar hasta el fin de su término y los reclamos de esas pólizas aún pueden pagarse. Florida tiene más pólizas NFIP que cualquier otro estado. Por separado, Citizens exige seguro de inundación para las pólizas de viento de líneas personales restantes en un calendario por etapas que llega a todas esas viviendas el 1 de enero de 2027 (excepto pólizas de unidad de condominio).',
          why: 'Si compra, vende o renueva una póliza de inundación este invierno—o tiene una póliza de viento de Citizens—confirme el calendario de renovación mucho antes del 11 de diciembre y revise el [requisito de inundación de Citizens](/es/blog/citizens-flood-insurance-requirement-2027). La [cobertura de inundación](/es/flood-insurance-homestead-fl) no forma parte de una póliza de hogar estándar.',
          sources: [FEMA_NFIP, CRS_NFIP, CITIZENS_FLOOD],
        },
        {
          headline:
            'La FHP se suma a un operativo nocturno multiestatal de camiones comerciales en la I-95',
          summary:
            'El 2 de octubre, el Florida Department of Highway Safety and Motor Vehicles informó los resultados de Operation Saturday Night Fever, un operativo nocturno de vehículos comerciales del 26 de septiembre a lo largo del corredor I-95. La Oficina de Cumplimiento de Vehículos Comerciales de la Florida Highway Patrol trabajó con la FMCSA y estados socios (Georgia, Carolina del Sur, Carolina del Norte) además de ICE. Resultados conjuntos: 552 inspecciones, 78 conductores y 25 vehículos puestos fuera de servicio (12 conductores por English Language Proficiency), más 7 arrestos penales y 11 detenciones de ICE. Se enfocaron en fatiga, manipulación de dispositivos de registro electrónico, fallas mecánicas, manejo bajo influencia o distraído y sujeción de carga.',
          why: 'Si opera [camiones de trabajo](/es/work-truck-insurance-florida) u otros vehículos comerciales en Florida, mantenga al día los registros del conductor, las inspecciones del vehículo y la sujeción de carga: operativos como este pueden sacar de servicio de un día para otro el equipo y a los conductores inseguros.',
          sources: [FLHSMV_CMV],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Los trópicos hoy (domingo 4 de octubre, 8 a.m. hora del Este)',
          text: 'El [Centro Nacional de Huracanes](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) indica que en unos días podría formarse un área amplia de baja presión sobre el suroeste del Golfo de América, con probabilidad **baja** de desarrollo tropical (cerca de 0% en 48 horas, **30%** en siete días) mientras se desplace hacia el norte. No hay amenaza tropical para Florida ahora. Por separado, el calendario de mareas reales de Miami-Dade marca la próxima ventana costera del **7 al 13 de octubre** (luego del 24 al 30): mueva los autos de calles bajas y recuerde que el daño por inundación por lo general no lo cubre una póliza de hogar estándar.',
        },
      ],
      extraSources: [NHC, MIAMI_DADE_TIDES],
    },
    ru: {
      title:
        'Новости страхования во Флориде, 4 октября 2026: опрос домовладельцев, NFIP до 11 декабря и рейд по грузовикам',
      metaTitle: 'Новости страхования, 4 окт. 2026: опрос, NFIP, CMV | M&K Agency',
      description:
        'Сегодня: опрос UNF расходится с рыночными данными, NFIP действует до 11 декабря, FHP участвует в рейде по коммерческим грузовикам на I-95.',
      ogAlt: 'Планшет с галочками рядом с картой наводнений Флориды и грузовиком на шоссе',
      intro:
        'Три новости последних дней для домовладельцев, покупателей flood-страховки и малого бизнеса с рабочими грузовиками в Южной Флориде. Каждая — своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Опрос UNF: большинство домовладельцев во Флориде по-прежнему не видят улучшения рынка страхования жилья',
          summary:
            'Опрос Public Opinion Research Lab Университета Северной Флориды среди 1511 застрахованных домовладельцев (16–31 июля, для Orlando Sentinel и South Florida Sun Sentinel) показал: 55% не видят признаков улучшения рынка, 26% считают, что ситуация ухудшается, и лишь 18% ждут улучшения. 63% больше беспокоит страхование имущества, чем налог на недвижимость (±3,18 п.п.). Среди живущих в доме пять лет и дольше 47% сообщили, что годовая премия выросла минимум на 50% за этот срок; 25% сказали, что страховщик хотя бы раз за пять лет отказал в продлении. 1 октября Insurance Information Institute (Triple-I) оспорил акцент опроса, указав на индикаторы вроде числа полисов Citizens около 255 000 и недавнего среднего направления заявок на тарифы домовладельцев в сторону снижения по штату — и напомнил, что отдельные счета сильно зависят от локации и объекта.',
          why: 'Восприятие и рыночные данные могут расходиться. При продлении сравните декларацию, франшизы и варианты страховщиков с лицензированным агентом — и пересмотрите [страхование жилья](/ru/homeowners-insurance-florida-city), если ситуация изменилась.',
          sources: [WLRN_UNF, NEWS4JAX_UNF, TRIPLE_I],
        },
        {
          headline:
            'NFIP действует до 11 декабря 2026 — следующий «обрыв» flood-страхования для Флориды',
          summary:
            'После продления Конгрессом в рамках Continuing Appropriations and Extensions Act, 2027 FEMA и Congressional Research Service указывают 11 декабря 2026 как текущую дату окончания полномочий National Flood Insurance Program. CRS Insight IN10835 (обновлён 11 сентября) поясняет: если полномочия истекут в этот день, FEMA не сможет выдавать новые договоры flood-страхования, а лимит заимствований NFIP у Казначейства упадёт примерно с 30,4 млрд до 1 млрд долларов; уже действующие полисы обычно продолжаются до конца срока, и по ним по-прежнему можно платить убытки. Во Флориде больше полисов NFIP, чем в любом другом штате. Отдельно Citizens требует flood-покрытие для оставшихся ветровых полисов личных линий по поэтапному графику, который к 1 января 2027 охватывает все такие объекты (кроме полисов владельцев квартир в кондо).',
          why: 'Если этой зимой покупаете, продаёте или продлеваете flood-полис — или у вас ветровой полис Citizens — уточните сроки продления задолго до 11 декабря и изучите [требование Citizens по flood](/ru/blog/citizens-flood-insurance-requirement-2027). Отдельное flood-покрытие не входит в стандартный полис домовладельца; запросите котировку на [/ru/quote](/ru/quote).',
          sources: [FEMA_NFIP, CRS_NFIP, CITIZENS_FLOOD],
        },
        {
          headline:
            'FHP участвует в ночном межштатном рейде по коммерческим грузовикам на I-95',
          summary:
            '2 октября Florida Department of Highway Safety and Motor Vehicles сообщил о результатах Operation Saturday Night Fever — ночной проверки коммерческого транспорта 26 сентября вдоль коридора I-95. Office of Commercial Vehicle Enforcement Florida Highway Patrol работала с FMCSA и штатами-партнёрами (Джорджия, Южная и Северная Каролина), а также ICE. Совместные итоги: 552 инспекции, 78 водителей и 25 транспортных средств выведены из эксплуатации (12 водителей — за English Language Proficiency), плюс 7 уголовных арестов и 11 задержаний ICE. В фокусе — усталость, манипуляции с электронными журналами, технические неисправности, вождение в состоянии опьянения или с отвлечением и крепление груза.',
          why: 'Если вы эксплуатируете [рабочие грузовики](/ru/work-truck-insurance-florida) или другой коммерческий транспорт во Флориде, держите журналы водителя, техосмотры и крепление груза в порядке — такие рейды могут за одну ночь снять с линии небезопасную технику и водителей.',
          sources: [FLHSMV_CMV],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Тропики сегодня (воскресенье, 4 октября, 8:00 EDT)',
          text: '[Национальный центр ураганов](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) сообщает: через несколько дней над юго-западом Мексиканского залива может сформироваться обширная область низкого давления с **низкой** вероятностью тропического развития (около 0% за 48 часов, **30%** за семь дней) при дрейфе на север. Угрозы для Флориды сейчас нет. Отдельно календарь king tides Miami-Dade указывает следующее прибрежное окно **7–13 октября** (затем 24–30 октября) — уберите машины с низинных улиц и помните: ущерб от наводнения обычно не покрывается стандартным полисом домовладельца.',
        },
      ],
      extraSources: [NHC, MIAMI_DADE_TIDES],
    },
  },
};
