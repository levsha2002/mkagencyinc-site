import type { NewsEdition, NewsSource } from '../types';

// Edition for Thursday, Oct. 8, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NHC_ISAIAS_7A: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-08',
  url: 'https://www.nhc.noaa.gov/archive/2026/al09/al092026.public_a.007.shtml',
  title: 'Hurricane Isaias Intermediate Advisory Number 7A',
};

const CITIZENS_SUSPENSION: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-10-07',
  url: 'https://www.citizensfla.com/-/20261007-citizens-is-under-binding-suspension',
  title: 'Citizens Is Under Binding Suspension (Tropical Storm Isaias)',
};

const OIR_REFILLS: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-07',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/07/notice-to-industry-florida-law-reminder-for-early-prescription-refills',
  title: 'Notice to Industry: Florida Law Reminder for Early Prescription Refills',
};

const PHOENIX_AFFILIATES: NewsSource = {
  name: 'Florida Phoenix',
  date: '2026-10-07',
  url: 'https://floridaphoenix.com/2026/10/07/ingoglia-seeks-transparency-on-property-insurance-payments-to-affiliates/',
  title: 'Ingoglia seeks ‘transparency’ on property insurance payments to affiliates',
};

const HB1399: NewsSource = {
  name: 'The Florida Senate',
  date: '2026-03-13',
  url: 'https://www.flsenate.gov/Session/Bill/2026/1399',
  title: 'HB 1399 (2026): Property Insurance Affiliates',
};

const GAO_FLOOD: NewsSource = {
  name: 'U.S. Government Accountability Office',
  date: '2026-10-01',
  url: 'https://www.gao.gov/products/gao-27-108012',
  title: 'Flood Insurance: Congressional Action Could Help Increase Coverage for At-Risk Properties (GAO-27-108012)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const FLOODSMART: NewsSource = {
  name: 'FloodSmart (FEMA / NFIP)',
  date: '2026-10-08',
  url: 'https://www.floodsmart.gov/get-insured/buy-a-policy',
  title: 'Buy a Flood Insurance Policy',
};

const MIAMI_DADE_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

export const edition: NewsEdition = {
  slug: '2026-10-08-isaias-binding-refills-affiliates-flood',
  datePublished: '2026-10-08',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 8, 2026: Hurricane Isaias and a Citizens binding pause, early prescription refills, insurer affiliate payments, a flood-coverage gap',
      metaTitle: 'Insurance News Oct. 8, 2026: Hurricane Isaias | M&K Agency',
      description:
        'Today: Hurricane Isaias and Citizens’ statewide binding pause, early refills in storm counties, the CFO on insurer affiliates and a GAO flood report.',
      ogAlt: 'A hurricane symbol, a prescription bottle and a house with flood water on a light blue background',
      intro:
        'Four updates from the last few days for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: Isaias is now a hurricane, with warnings for the Florida Panhandle; Citizens pauses new coverage statewide',
          summary:
            'As of the National Hurricane Center’s 7 a.m. CDT (8 a.m. EDT) update on Thursday, **Hurricane Isaias** had top winds near 80 mph and was about 385 miles south-southwest of the mouth of the Mississippi River, with more strengthening expected through early Friday. A hurricane warning runs from Ocean Springs, Mississippi, to the Bay/Gulf county line in Florida, a storm surge warning reaches east to the Steinhatchee River, and NHC expects landfall inside the warning area late Friday or early Saturday, with up to 5–7 feet of surge possible between Ocean Springs and Indian Pass. Because watches and warnings now cover part of Florida, Citizens Property Insurance suspended binding **statewide** at 11:05 a.m. ET on Oct. 7, so agents can’t bind new Citizens policies or changes that increase coverage until Citizens lifts the pause. Miami-Dade, Broward and Monroe are not under any Isaias watch or warning.',
          why: 'The pause applies in South Florida too, but it only stops new coverage and coverage increases, and Citizens says transactions submitted before it began may still be processed. If you are closing on a home or planned to change a Citizens policy this week, ask your agent where things stand; our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida) explains what to do after a storm.',
          sources: [NHC_ISAIAS_7A, CITIZENS_SUSPENSION],
        },
        {
          headline: 'Early prescription refills are allowed in the 25 counties under the Isaias emergency',
          summary:
            'On Oct. 7, the Office of Insurance Regulation reminded health insurers, HMOs and pharmacy benefit managers that Florida law requires early refills during an emergency. Under section 252.358, Florida Statutes, they must waive “refill too soon” limits and pay for at least a 30-day supply when a member lives in a county that is under a hurricane warning, is named in the Governor’s state-of-emergency order, or has activated its emergency operations center, as long as refills remain on the prescription. The Isaias order covers 25 North Florida counties, including Escambia, Okaloosa, Bay and Leon; refills must be requested within 30 days of the triggering event or while it lasts, and OIR can extend that window.',
          why: 'If parents or relatives in the Panhandle or Big Bend take daily medication, remind them to refill now. The same rule would apply here if a hurricane warning or emergency order ever covers Miami-Dade.',
          sources: [OIR_REFILLS],
        },
        {
          headline: 'CFO calls for more transparency on money property insurers pay their affiliates',
          summary:
            'At a news conference in Tampa on Oct. 7, Chief Financial Officer Blaise Ingoglia said there should be more transparency about money that flows between Florida property insurers and their affiliated companies. He was responding to recent newspaper reports on a 2022 analysis commissioned by the Office of Insurance Regulation, which found that from 2017 to 2019 insurers claimed $432 million in losses while paying $1.3 billion in fees to affiliates, and that 20 insurers paid more than a “fair and reasonable” benchmark. A 2026 House bill (HB 1399) that would have required insurers to show such payments are fair and reasonable passed the House 106–3 but died in the Senate Rules Committee in March.',
          why: 'Nothing changes for policyholders today: any new oversight rules would need a new law. It is a topic to watch when lawmakers return, and a good reminder to review your [homeowners policy](/en/homeowners-insurance-florida-city) with an agent at each renewal.',
          sources: [PHOENIX_AFFILIATES, HB1399],
        },
        {
          headline: 'GAO: most homes at high flood risk have no flood insurance; NFIP’s deadline is Dec. 11',
          summary:
            'A Government Accountability Office report released Oct. 1 found that, as of April 2026, 86% of high-risk U.S. properties had no NFIP flood policy. Flood insurance is generally required only for federally backed mortgages in FEMA’s special flood hazard areas, and GAO estimates that about 13 million high-risk properties sit outside those mapped zones, largely because the maps don’t fully capture flooding from heavy rain. GAO asked Congress to consider counting all sources of flooding in the requirement, publishing property-level flood risk, having lenders on federally backed mortgages give buyers a flood quote before closing, and raising NFIP coverage limits.',
          why: 'Most homeowners policies exclude flood, and a new NFIP policy generally takes effect 30 days after purchase, so don’t wait for a storm. FEMA also notes that Congress must renew the NFIP by 11:59 p.m. on Dec. 11, 2026, or new policies and renewals would stop. Our [flood insurance page](/en/flood-insurance-homestead-fl) explains the basics.',
          sources: [GAO_FLOOD, FEMA_REAUTH, FLOODSMART],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'King tides continue through Oct. 13',
          text: 'Miami-Dade County’s current king-tide window runs through **Oct. 13**, and the next one is Oct. 24–30. Move your car to higher ground before high tide if you can, don’t drive through flooded streets, and rinse your vehicle with fresh water after driving through salt water. Isaias is far from South Florida, but keep an eye on the [National Hurricane Center](https://www.nhc.noaa.gov/) for updates.',
        },
      ],
      extraSources: [MIAMI_DADE_TIDES],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 8 de octubre de 2026: huracán Isaías y pausa de Citizens, recetas anticipadas, pagos a afiliadas y la brecha del seguro de inundación',
      metaTitle: 'Noticias de seguros, 8 oct. 2026: huracán Isaías y Citizens | M&K',
      description:
        'Hoy: el huracán Isaías y la pausa estatal de Citizens, recetas anticipadas en los condados en emergencia, el CFO sobre pagos a afiliadas y un informe de la GAO.',
      ogAlt: 'Un símbolo de huracán, un frasco de medicina y una casa con agua de inundación sobre fondo celeste',
      intro:
        'Cuatro novedades de los últimos días para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: Isaías ya es huracán, con avisos en el Panhandle de Florida; Citizens suspende nuevas coberturas en todo el estado',
          summary:
            'Según la actualización de las 7 a.m. hora del Centro (8 a.m. hora del Este) del jueves del Centro Nacional de Huracanes, el **huracán Isaías** (Isaias, en inglés) tenía vientos máximos de unas 80 mph y estaba a unas 385 millas al sur-suroeste de la desembocadura del río Misisipi, y se espera que siga fortaleciéndose hasta el viernes temprano. Hay aviso de huracán desde Ocean Springs (Misisipi) hasta el límite entre los condados Bay y Gulf en Florida, y aviso de marejada ciclónica hacia el este hasta el río Steinhatchee; el NHC prevé que toque tierra dentro de la zona de aviso entre la noche del viernes y la madrugada del sábado, con una marejada de hasta 5 a 7 pies entre Ocean Springs e Indian Pass. Como ya hay vigilancias y avisos para parte de Florida, Citizens Property Insurance suspendió la emisión de pólizas **en todo el estado** a las 11:05 a.m. del 7 de octubre: los agentes no pueden emitir pólizas nuevas de Citizens ni cambios que aumenten la cobertura hasta que Citizens levante la pausa. Miami-Dade, Broward y Monroe no están bajo ninguna vigilancia ni aviso por Isaías.',
          why: 'La pausa también rige en el sur de la Florida, pero solo frena coberturas nuevas y aumentos de cobertura, y Citizens indica que las solicitudes enviadas antes de que empezara todavía pueden tramitarse. Si va a cerrar la compra de una casa o pensaba modificar su póliza de Citizens esta semana, consulte a su agente; nuestra [guía de plazos de reclamos por huracán](/es/blog/hurricane-claim-timeline-florida) explica qué hacer después de una tormenta.',
          sources: [NHC_ISAIAS_7A, CITIZENS_SUSPENSION],
        },
        {
          headline: 'Se permiten resurtidos anticipados de recetas en los 25 condados en emergencia por Isaías',
          summary:
            'El 7 de octubre, la Oficina de Regulación de Seguros (OIR) recordó a las aseguradoras de salud, HMO y administradoras de beneficios de farmacia que la ley de Florida exige permitir resurtidos anticipados durante una emergencia. Según la sección 252.358 de los Estatutos de Florida, deben suspender los bloqueos de “resurtido demasiado pronto” y pagar al menos un suministro de 30 días cuando el asegurado vive en un condado bajo aviso de huracán, incluido en la orden de emergencia del gobernador o con su centro de operaciones de emergencia activado, siempre que a la receta le queden resurtidos. La orden por Isaías abarca 25 condados del norte de Florida, entre ellos Escambia, Okaloosa, Bay y Leon; el resurtido debe pedirse dentro de los 30 días siguientes al hecho que lo activa o mientras dure, y la OIR puede ampliar ese plazo.',
          why: 'Si tiene padres o familiares en el Panhandle o el Big Bend que toman medicamentos a diario, recuérdeles resurtir ahora. La misma regla se aplicaría aquí si algún día hubiera un aviso de huracán o una orden de emergencia para Miami-Dade.',
          sources: [OIR_REFILLS],
        },
        {
          headline: 'El CFO pide más transparencia sobre lo que las aseguradoras de propiedad pagan a sus empresas afiliadas',
          summary:
            'En una conferencia de prensa en Tampa el 7 de octubre, el director financiero del estado (CFO), Blaise Ingoglia, dijo que debe haber más transparencia sobre el dinero que circula entre las aseguradoras de propiedad de Florida y sus empresas afiliadas. Respondía a reportajes recientes sobre un análisis de 2022 encargado por la Oficina de Regulación de Seguros, según el cual entre 2017 y 2019 las aseguradoras declararon $432 millones en pérdidas mientras pagaban $1,300 millones en honorarios a afiliadas, y 20 aseguradoras pagaron por encima de un parámetro considerado “justo y razonable”. Un proyecto de ley de la Cámara de 2026 (HB 1399), que habría obligado a las aseguradoras a demostrar que esos pagos son justos y razonables, se aprobó en la Cámara por 106 a 3, pero murió en el Comité de Reglas del Senado en marzo.',
          why: 'Por ahora no cambia nada para los asegurados: cualquier nueva supervisión necesitaría una ley nueva. Es un tema a seguir cuando vuelva a reunirse la Legislatura, y un buen recordatorio para revisar su [póliza de vivienda](/es/homeowners-insurance-florida-city) con un agente en cada renovación.',
          sources: [PHOENIX_AFFILIATES, HB1399],
        },
        {
          headline: 'GAO: la mayoría de las casas con alto riesgo de inundación no tiene seguro; el plazo del NFIP vence el 11 de diciembre',
          summary:
            'Un informe de la Oficina de Rendición de Cuentas del Gobierno (GAO) publicado el 1 de octubre concluyó que, a abril de 2026, el 86% de las propiedades de alto riesgo en EE. UU. no tenía póliza de inundación del NFIP. Por lo general, el seguro de inundación solo es obligatorio para hipotecas con respaldo federal en las zonas especiales de riesgo de inundación de FEMA, y la GAO calcula que unos 13 millones de propiedades de alto riesgo quedan fuera de esas zonas, en gran parte porque los mapas no reflejan bien las inundaciones por lluvias intensas. La GAO pidió al Congreso considerar que el requisito tenga en cuenta todas las fuentes de inundación, publicar el riesgo de cada propiedad, exigir que los prestamistas de hipotecas con respaldo federal entreguen una cotización de seguro de inundación antes del cierre y subir los límites de cobertura del NFIP.',
          why: 'La mayoría de las pólizas de vivienda excluye las inundaciones, y una póliza nueva del NFIP por lo general entra en vigor 30 días después de la compra, así que no espere a que venga una tormenta. FEMA recuerda además que el Congreso debe renovar el NFIP antes de las 11:59 p.m. del 11 de diciembre de 2026; de lo contrario, se detendrían las pólizas nuevas y las renovaciones. Nuestra [página de seguro de inundación](/es/flood-insurance-homestead-fl) explica lo básico.',
          sources: [GAO_FLOOD, FEMA_REAUTH, FLOODSMART],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Las mareas reales siguen hasta el 13 de octubre',
          text: 'La ventana actual de mareas reales (king tides) en Miami-Dade dura hasta el **13 de octubre**, y la siguiente será del 24 al 30. Si puede, lleve el auto a un lugar más alto antes de la marea, no maneje por calles inundadas y enjuague el vehículo con agua dulce si pasó por agua salada. Isaías está lejos del sur de la Florida, pero siga las actualizaciones del [Centro Nacional de Huracanes](https://www.nhc.noaa.gov/).',
        },
      ],
      extraSources: [MIAMI_DADE_TIDES],
    },
    ru: {
      title:
        'Новости страхования во Флориде, 8 октября 2026: ураган «Исайас» и пауза Citizens, досрочные рецепты, выплаты аффилированным компаниям и пробел в страховании от наводнений',
      metaTitle: 'Новости страхования, 8 окт. 2026: ураган «Исайас», Citizens | M&K',
      description:
        'Сегодня: ураган «Исайас» и пауза Citizens по всему штату, досрочная выдача лекарств в округах с ЧС, CFO о выплатах аффилированным компаниям и доклад GAO.',
      ogAlt: 'Значок урагана, баночка с лекарством и дом в воде на светло-голубом фоне',
      intro:
        'Четыре новости последних дней для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: «Исайас» стал ураганом, для Панхэндла Флориды объявлены warnings; Citizens приостановил новое покрытие по всему штату',
          summary:
            'По данным Национального центра ураганов (NHC) на 7:00 по центральному времени (8:00 по восточному) в четверг, у **урагана «Исайас»** (Isaias) максимальный ветер около 80 миль в час, он находится примерно в 385 милях к юго-юго-западу от устья Миссисипи и, по прогнозу, продолжит усиливаться до утра пятницы. Hurricane warning действует от Ошен-Спрингс (Миссисипи) до границы округов Bay и Gulf во Флориде, storm surge warning — на восток до реки Стейнхатчи; NHC ожидает выход на сушу в зоне предупреждения поздно вечером в пятницу или рано утром в субботу, а нагон воды между Ошен-Спрингс и Индиан-Пасс может достичь 5–7 футов. Поскольку watches и warnings уже объявлены для части Флориды, Citizens Property Insurance с 11:05 утра 7 октября приостановил оформление **по всему штату**: агенты не могут оформлять новые полисы Citizens или изменения с увеличением покрытия, пока Citizens не снимет паузу. Для Майами-Дейда, Броуарда и Монро никаких watches или warnings по «Исайасу» нет.',
          why: 'Пауза действует и в Южной Флориде, но касается только нового покрытия и его увеличения, а заявки, поданные до её начала, по словам Citizens, ещё могут быть обработаны. Если на этой неделе у вас закрытие сделки по дому или вы собирались менять полис Citizens, уточните у агента, как обстоят дела; что делать после шторма, описано в нашей [статье о сроках урегулирования после урагана](/ru/blog/hurricane-claim-timeline-florida).',
          sources: [NHC_ISAIAS_7A, CITIZENS_SUSPENSION],
        },
        {
          headline: 'В 25 округах с режимом ЧС из-за «Исайаса» разрешено досрочно получать лекарства по рецепту',
          summary:
            '7 октября Управление по регулированию страхования (OIR) напомнило медицинским страховщикам, HMO и операторам аптечных льгот, что закон Флориды требует разрешать досрочное пополнение рецептов во время чрезвычайной ситуации. По статье 252.358 Статутов Флориды они должны снять ограничения «слишком рано для повторной выдачи» и оплатить запас минимум на 30 дней, если застрахованный живёт в округе, где действует hurricane warning, который включён в указ губернатора о ЧС или где развёрнут оперативный штаб по ЧС, — при условии, что по рецепту остались повторные выдачи. Указ по «Исайасу» охватывает 25 округов на севере Флориды, в том числе Escambia, Okaloosa, Bay и Leon; обратиться за лекарством нужно в течение 30 дней после наступления такого условия или пока оно действует, и OIR может продлить этот срок.',
          why: 'Если у вас есть родители или родственники в Панхэндле или районе Биг-Бенд, которые постоянно принимают лекарства, напомните им пополнить запас сейчас. То же правило заработает и у нас, если для Майами-Дейда когда-нибудь объявят hurricane warning или режим ЧС.',
          sources: [OIR_REFILLS],
        },
        {
          headline: 'CFO штата призвал к большей прозрачности выплат страховщиков жилья своим аффилированным компаниям',
          summary:
            'На пресс-конференции в Тампе 7 октября финансовый директор штата (CFO) Блейз Инголья заявил, что денежные потоки между страховщиками недвижимости во Флориде и их аффилированными компаниями должны быть прозрачнее. Он отвечал на недавние публикации в прессе об анализе 2022 года, заказанном Управлением по регулированию страхования: по его данным, в 2017–2019 годах страховщики заявили $432 млн убытков, но при этом заплатили аффилированным компаниям $1,3 млрд, а 20 страховщиков превысили ориентир «справедливых и разумных» выплат. Законопроект палаты представителей 2026 года (HB 1399), который обязал бы страховщиков доказывать, что такие платежи справедливы и разумны, прошёл палату 106 голосами против 3, но в марте «умер» в комитете по регламенту Сената.',
          why: 'Для клиентов пока ничего не меняется: новые правила надзора потребуют нового закона. За темой стоит следить, когда законодатели вернутся к работе, а заодно — пересматривать [полис на жильё](/ru/homeowners-insurance-florida-city) с агентом при каждом продлении.',
          sources: [PHOENIX_AFFILIATES, HB1399],
        },
        {
          headline: 'GAO: у большинства домов с высоким риском наводнения нет страховки; срок NFIP истекает 11 декабря',
          summary:
            'В докладе Счётной палаты США (GAO), опубликованном 1 октября, говорится, что на апрель 2026 года у 86% объектов с высоким риском наводнения в США не было полиса NFIP. Как правило, страховка от наводнения обязательна только при ипотеке с федеральной поддержкой в особых зонах риска по картам FEMA, а около 13 млн объектов с высоким риском, по оценке GAO, находятся за пределами этих зон — во многом потому, что карты плохо учитывают затопления от сильных ливней. GAO предложила Конгрессу учитывать в этом требовании все источники наводнений, публиковать данные о риске по каждому объекту, обязать кредиторов по ипотеке с федеральной поддержкой давать покупателю расчёт стоимости flood-полиса до закрытия сделки и повысить лимиты покрытия NFIP.',
          why: 'Большинство полисов на жильё не покрывают наводнение, а новый полис NFIP обычно начинает действовать только через 30 дней после покупки, так что не ждите шторма. Кроме того, FEMA напоминает: Конгресс должен продлить NFIP до 23:59 11 декабря 2026 года, иначе продажа новых полисов и продления остановятся. О страховке от наводнения и новом требовании Citizens читайте в нашей [статье](/ru/blog/citizens-flood-insurance-requirement-2027).',
          sources: [GAO_FLOOD, FEMA_REAUTH, FLOODSMART],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'King tides продлятся до 13 октября',
          text: 'Текущее окно king tides в Майами-Дейде продлится до **13 октября**, следующее — 24–30 октября. По возможности заранее переставьте машину повыше, не въезжайте на затопленные улицы и промойте автомобиль пресной водой, если проехали по солёной. «Исайас» далеко от Южной Флориды, но следите за обновлениями [Национального центра ураганов](https://www.nhc.noaa.gov/).',
        },
      ],
      extraSources: [MIAMI_DADE_TIDES],
    },
  },
};
