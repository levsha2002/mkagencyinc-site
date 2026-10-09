import type { NewsEdition, NewsSource } from '../types';

// Edition for Friday, Oct. 9, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NHC_ISAIAS_11A: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-09',
  url: 'https://www.nhc.noaa.gov/archive/2026/al09/al092026.public_a.011.shtml',
  title: 'Hurricane Isaias Intermediate Advisory Number 11A',
};

const NHC_ISAIAS_TCU: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-09',
  url: 'https://www.nhc.noaa.gov/archive/2026/al09/al092026.update.10091218.shtml',
  title: 'Hurricane Isaias Tropical Cyclone Update: Isaias becomes a major hurricane',
};

const EO_26_211: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-10-07',
  url: 'https://flgov.com/eog/news/executive-orders/2026-211',
  title: 'Executive Order 26-211 (amends EO 26-202, Tropical Storm Isaias)',
};

const FS_627_4025: NewsSource = {
  name: 'The Florida Senate (Florida Statutes)',
  date: '2026-10-09',
  url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.4025',
  title: 'Section 627.4025, Florida Statutes: Residential coverage and hurricane coverage defined',
};

const FS_627_701: NewsSource = {
  name: 'The Florida Senate (Florida Statutes)',
  date: '2026-10-09',
  url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.701',
  title: 'Section 627.701, Florida Statutes: Liability of insureds; coinsurance; deductibles',
};

const CITIZENS_PREPARE: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-10-07',
  url: 'https://www.citizensfla.com/-/20261007-be-prepared-for-hurricane-isaias',
  title: 'Be Prepared for Hurricane Isaias',
};

const DFS_PREPARE: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-08',
  url: 'https://myfloridacfo.com/news/pressreleases/press-release-details/2026/10/08/chief-financial-officer-and-state-fire-marshal-blaise-ingoglia-urges-floridians-to-prepare-now-as-tropical-storm-isaias-strengthens',
  title: 'CFO Blaise Ingoglia Urges Floridians to Prepare Now as Tropical Storm Isaias Strengthens',
};

export const edition: NewsEdition = {
  slug: '2026-10-09-isaias-major-deductible-citizens-claims',
  datePublished: '2026-10-09',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 9, 2026: Isaias becomes a major hurricane, the statewide hurricane-deductible window, and how to report a Citizens claim',
      metaTitle: 'Insurance News Oct. 9, 2026: Major Hurricane Isaias | M&K Agency',
      description:
        'Today: Isaias strengthens to a major hurricane before Panhandle landfall, why Florida’s hurricane-deductible window is open statewide, and Citizens claim tips.',
      ogAlt: 'A hurricane symbol over the Florida Panhandle, an insurance policy and a phone',
      intro:
        'Three updates from the last two days for South Florida homeowners, drivers and small-business owners, all tied to Hurricane Isaias. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'Update: Isaias becomes a major hurricane before landfall; state emergency grows to 27 counties',
          summary:
            'At 7 a.m. CDT (8 a.m. EDT) on Friday, the National Hurricane Center placed **Hurricane Isaias** about 245 miles south of Pensacola, moving north-northeast at 15 mph, and minutes later said Hurricane Hunter data showed top winds near 120 mph, making it a major hurricane. A hurricane warning runs from Ocean Springs, Mississippi, to the Bay/Gulf county line in Florida, a storm surge warning covers the mouth of the Mississippi River to the Suwannee River, and NHC expects landfall inside the warning area tonight or early Saturday, with 6–9 feet of surge possible from the Alabama/Florida border to Grayton Beach. Governor DeSantis amended his emergency order (EO 26-211) to add Citrus and Levy counties, so 27 North and Big Bend counties are now covered; Miami-Dade, Broward and Monroe are not among them.',
          why: 'South Florida is far from the track, but statewide insurance rules are tied to Florida watches and warnings (see the next two items). If you have family or a business in the Panhandle, follow local evacuation orders.',
          sources: [NHC_ISAIAS_11A, NHC_ISAIAS_TCU, EO_26_211],
        },
        {
          headline: 'Why the hurricane-deductible window is now open across all of Florida, including Miami-Dade',
          summary:
            'Under section 627.4025, Florida Statutes, the “hurricane” period used by residential policies starts when the National Hurricane Center issues a hurricane warning for any part of Florida and ends 72 hours after the last hurricane watch or warning for Florida is lifted. NHC’s hurricane warning for the Panhandle means that window is open statewide, so wind damage from Isaias’s storm system during that time would fall under a policy’s separate hurricane deductible, even far from landfall. Section 627.701 requires that deductible to be shown in dollars on the declarations page, and it applies once per calendar year to covered hurricane losses with the same insurer group.',
          why: 'Look up your hurricane deductible on your declarations page now so a claim doesn’t surprise you; our [wind deductible guide](/en/florida-home-insurance-wind-deductible) explains how it works.',
          sources: [FS_627_4025, FS_627_701],
        },
        {
          headline: 'Citizens and the CFO: get your documents ready, and know how to report a claim',
          summary:
            'Citizens Property Insurance says it is ready to respond to Isaias claims and asks policyholders to confirm their contact and mortgage-company details through myPolicy or their agent, and to keep policies, IDs and a home inventory in a waterproof place. Claims can be reported online through myPolicy or by phone at 866.411.2742, which Citizens says is staffed 24/7. On Oct. 8, Chief Financial Officer Blaise Ingoglia added tips such as taking a digital inventory of your home before the storm, keeping at least half a tank of gas or half a charge in your car, and never driving through flooded roads. Citizens’ statewide pause on new policies and coverage increases, in place since Oct. 7, continues while any Florida watch or warning is up.',
          why: 'A quick phone video of each room today makes any future claim easier. Our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) walks through the steps after a storm.',
          sources: [CITIZENS_PREPARE, DFS_PREPARE],
        },
      ],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 9 de octubre de 2026: Isaías se convierte en huracán mayor, el periodo del deducible por huracán en todo el estado y cómo reportar un reclamo a Citizens',
      metaTitle: 'Noticias de seguros, 9 oct. 2026: Isaías, huracán mayor | M&K',
      description:
        'Hoy: Isaías se intensifica a huracán mayor antes de tocar tierra en el Panhandle, por qué rige el deducible por huracán en todo Florida y consejos de Citizens.',
      ogAlt: 'Un símbolo de huracán sobre el Panhandle de Florida, una póliza de seguro y un teléfono',
      intro:
        'Tres novedades de los últimos dos días para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida, todas relacionadas con el huracán Isaías. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline: 'Actualización: Isaías se convierte en huracán mayor antes de tocar tierra; la emergencia estatal se amplía a 27 condados',
          summary:
            'A las 7 a.m. hora del Centro (8 a.m. hora del Este) del viernes, el Centro Nacional de Huracanes ubicó al **huracán Isaías** (Isaias, en inglés) a unas 245 millas al sur de Pensacola, avanzando hacia el nor-noreste a 15 mph, y minutos después informó que los datos de los cazahuracanes mostraban vientos máximos de unas 120 mph, lo que lo convierte en huracán mayor. Hay aviso de huracán desde Ocean Springs (Misisipi) hasta el límite entre los condados Bay y Gulf en Florida, aviso de marejada ciclónica desde la desembocadura del Misisipi hasta el río Suwannee, y el NHC prevé que toque tierra dentro de la zona de aviso esta noche o temprano el sábado, con una marejada de 6 a 9 pies posible entre la frontera de Alabama y Florida y Grayton Beach. El gobernador DeSantis modificó su orden de emergencia (EO 26-211) para añadir los condados Citrus y Levy, de modo que ya son 27 condados del norte y del Big Bend; Miami-Dade, Broward y Monroe no están incluidos.',
          why: 'El sur de la Florida está lejos de la trayectoria, pero las reglas de seguros a nivel estatal dependen de las vigilancias y avisos en Florida (vea las dos noticias siguientes). Si tiene familia o un negocio en el Panhandle, siga las órdenes de evacuación locales.',
          sources: [NHC_ISAIAS_11A, NHC_ISAIAS_TCU, EO_26_211],
        },
        {
          headline: 'Por qué ya rige el periodo del deducible por huracán en toda Florida, incluido Miami-Dade',
          summary:
            'Según la sección 627.4025 de los Estatutos de Florida, el periodo de “huracán” que usan las pólizas residenciales empieza cuando el Centro Nacional de Huracanes emite un aviso de huracán para cualquier parte de Florida y termina 72 horas después de que se levante la última vigilancia o aviso de huracán en Florida. El aviso de huracán del NHC para el Panhandle significa que ese periodo está abierto en todo el estado, así que los daños por viento del sistema de Isaías durante ese tiempo caerían bajo el deducible separado por huracán de la póliza, aunque ocurran lejos de donde toque tierra. La sección 627.701 exige que ese deducible aparezca en dólares en la página de declaraciones, y se aplica una vez por año calendario a las pérdidas cubiertas por huracán con el mismo grupo asegurador.',
          why: 'Busque hoy su deducible por huracán en la página de declaraciones para que un reclamo no lo tome por sorpresa; nuestra [guía del deducible por viento](/es/florida-home-insurance-wind-deductible) explica cómo funciona.',
          sources: [FS_627_4025, FS_627_701],
        },
        {
          headline: 'Citizens y el CFO: tenga sus documentos listos y sepa cómo reportar un reclamo',
          summary:
            'Citizens Property Insurance dice que está lista para atender reclamos por Isaías y pide a sus asegurados confirmar sus datos de contacto y de la compañía hipotecaria en myPolicy o con su agente, y guardar pólizas, identificaciones y un inventario del hogar en un lugar impermeable. Los reclamos se pueden reportar en línea por myPolicy o por teléfono al 866.411.2742, que según Citizens atiende las 24 horas, los 7 días. El 8 de octubre, el director financiero del estado (CFO), Blaise Ingoglia, añadió consejos como hacer un inventario digital de la casa antes de la tormenta, mantener al menos medio tanque de gasolina o media carga en el auto y nunca manejar por calles inundadas. La pausa estatal de Citizens para pólizas nuevas y aumentos de cobertura, vigente desde el 7 de octubre, continúa mientras haya vigilancias o avisos en Florida.',
          why: 'Un video rápido con el teléfono de cada habitación hoy facilita cualquier reclamo futuro. Nuestra [lista para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida) explica los pasos después de una tormenta.',
          sources: [CITIZENS_PREPARE, DFS_PREPARE],
        },
      ],
    },
    ru: {
      title:
        'Страховые новости Флориды, 9 октября 2026: «Исайас» стал мощным ураганом, ураганная франшиза действует по всему штату, как заявить убыток в Citizens',
      metaTitle: 'Страховые новости 9 окт. 2026: мощный ураган «Исайас» | M&K',
      description:
        'Сегодня: «Исайас» усилился до мощного урагана перед выходом на Панхэндл, почему ураганная франшиза действует по всей Флориде, и советы Citizens по убыткам.',
      ogAlt: 'Значок урагана над Панхэндлом Флориды, страховой полис и телефон',
      intro:
        'Три новости за последние два дня для владельцев жилья, водителей и малого бизнеса в Южной Флориде — все связаны с ураганом «Исайас». Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: 'Обновление: «Исайас» стал мощным ураганом перед выходом на сушу; режим ЧС расширен до 27 округов',
          summary:
            'В 7:00 по центральному времени (8:00 по восточному) в пятницу Национальный центр ураганов (NHC) сообщил, что **ураган «Исайас»** (Isaias) находится примерно в 245 милях к югу от Пенсаколы и движется на северо-северо-восток со скоростью 15 миль/ч, а через несколько минут — что, по данным самолёта-разведчика, максимальный ветер достиг около 120 миль/ч, то есть ураган стал мощным (major hurricane). Hurricane warning действует от Оушен-Спрингс (Миссисипи) до границы округов Bay и Gulf во Флориде, предупреждение о штормовом нагоне — от устья Миссисипи до реки Суванни; NHC ожидает выхода на сушу в зоне предупреждения сегодня ночью или рано утром в субботу, с нагоном 6–9 футов между границей Алабамы и Флориды и Грейтон-Бич. Губернатор ДеСантис дополнил указ о ЧС (EO 26-211) округами Citrus и Levy — теперь это 27 округов на севере и в районе Биг-Бенд; Майами-Дейд, Бровард и Монро в их число не входят.',
          why: 'Южная Флорида далеко от траектории, но правила страхования по всему штату привязаны к предупреждениям во Флориде (см. две следующие новости). Если у вас родные или бизнес в Панхэндле, выполняйте местные распоряжения об эвакуации.',
          sources: [NHC_ISAIAS_11A, NHC_ISAIAS_TCU, EO_26_211],
        },
        {
          headline: 'Почему ураганная франшиза теперь действует по всей Флориде, включая Майами-Дейд',
          summary:
            'По статье 627.4025 Статутов Флориды «ураганный» период в полисах на жильё начинается, когда NHC объявляет hurricane warning для любой части Флориды, и заканчивается через 72 часа после снятия последнего hurricane watch или warning во Флориде. Раз для Панхэндла объявлен hurricane warning, этот период открыт по всему штату: ущерб от ветра, вызванный системой «Исайаса» в это время, попадёт под отдельную ураганную франшизу полиса, даже вдали от места выхода на сушу. Статья 627.701 требует указывать эту франшизу в долларах на странице деклараций, и она применяется один раз за календарный год к застрахованным ураганным убыткам в одной страховой группе.',
          why: 'Найдите свою ураганную франшизу на странице деклараций уже сейчас, чтобы она не стала сюрпризом при убытке; как она работает, объясняет наш [гид по ветровой франшизе](/ru/florida-home-insurance-wind-deductible).',
          sources: [FS_627_4025, FS_627_701],
        },
        {
          headline: 'Citizens и CFO штата: подготовьте документы и знайте, как заявить убыток',
          summary:
            'Citizens Property Insurance сообщает, что готова принимать убытки от «Исайаса», и просит клиентов проверить контактные данные и сведения об ипотечном кредиторе в myPolicy или у своего агента, а полисы, документы и опись имущества хранить в водонепроницаемом месте. Заявить убыток можно онлайн через myPolicy или по телефону 866.411.2742, который, по словам Citizens, работает круглосуточно. 8 октября финансовый директор штата (CFO) Блейз Инголья добавил советы: сделать цифровую опись дома до шторма, держать в машине не меньше половины бака или половины заряда и никогда не ехать по затопленным дорогам. Пауза Citizens на новые полисы и увеличение покрытия по всему штату, действующая с 7 октября, сохраняется, пока во Флориде есть watch или warning.',
          why: 'Короткое видео каждой комнаты на телефон сегодня облегчит любой будущий убыток. Пошагово — в нашем [чек-листе по ураганным убыткам](/ru/blog/hurricane-claim-checklist-florida).',
          sources: [CITIZENS_PREPARE, DFS_PREPARE],
        },
      ],
    },
  },
};
