import type { NewsEdition, NewsSource } from '../types';

// Edition for Friday, Nov. 13, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const GOV_MDD_LETTER: NewsSource = {
  name: 'Office of the Governor (letter posted by U.S. Rep. Mike Haridopolos)',
  date: '2026-11-09',
  url: 'https://haridopolos.house.gov/sites/evo-subsites/haridopolos.house.gov/files/evo-media-document/expedited-major-disaster-declaration-request-2026-fall-flooding-compressed.pdf',
  title: 'Request for Expedited Major Disaster Declaration, 2026 Fall Flooding',
};

const MOODY_MDD: NewsSource = {
  name: 'U.S. Sen. Ashley Moody',
  date: '2026-11-12',
  url: 'https://www.moody.senate.gov/press-releases/senator-moody-calls-on-president-to-approve-floridas-request-for-expedited-emergency-declaration-following-major-flooding-event/',
  title: 'Senator Moody Calls on President to Approve Florida’s Request for Expedited Emergency Declaration Following Major Flooding Event',
};

const FDEM_FALL: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-12',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding',
};

const FLHSMV_HOLIDAY: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-11-10',
  url: 'https://www.flhsmv.gov/2026/11/10/flhsmv-and-fhp-ask-motorists-not-to-wing-it-and-arrive-alive-this-holiday-season/',
  title: 'FLHSMV and FHP Ask Motorists Not to ‘Wing It’ and Arrive Alive This Holiday Season',
};

const IJ_FTL_FLOOD: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-11-12',
  url: 'https://www.insurancejournal.com/news/southeast/2026/11/12/892445.htm',
  title: 'Fort Lauderdale Official Urges Rapid Fix to Worsening Flooding in South Florida',
};

const MD_KING_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-13',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 6:43 a.m. EST Fri Nov 13, 2026',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-13',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Fri Nov 13, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-27',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'NCCI 2026 Public Rate Hearing',
};

const AID = [GOV_MDD_LETTER, MOODY_MDD, FDEM_FALL];
const DRIVE = [FLHSMV_HOLIDAY];
const TIDES = [IJ_FTL_FLOOD, MD_KING_TIDES];
const WX = [NWS_MFL_AFD];
const BOX = [FEMA_REAUTH, OIR_NCCI, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-13-flood-aid-counties-holiday-driving-king-tides-cold-front',
  datePublished: '2026-11-13',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 13, 2026: the flood-aid request names nine counties, troopers start their holiday driving push, Fort Lauderdale looks at quick king-tide fixes, and the cold front arrives today',
      metaTitle: 'Insurance News Nov. 13, 2026: Flood Aid, Holiday Driving, King Tides | M&K',
      description:
        'Florida’s federal flood-aid request covers nine counties, FLHSMV starts its holiday safe-driving campaign, Fort Lauderdale weighs fast flood fixes before the Nov. 23–26 king tides, and a cold front arrives.',
      ogAlt:
        'A flooded house beside a document with a seal, a car on a road beside a calendar with an autumn leaf, a seawall with rising water, an up arrow and a house on a raised street, and a cold front arrow with a thermometer over palm trees',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners this Friday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: Florida’s flood-aid request covers nine counties, including Palm Beach and Martin, and still awaits a federal decision',
          summary:
            'The governor’s Nov. 9 letter to the president, now posted online by U.S. Rep. Mike Haridopolos’s office, asks for an **expedited Major Disaster Declaration** for nine counties: Brevard, DeSoto, Hardee, Highlands, Indian River, Martin, Okeechobee, Palm Beach and St. Lucie. It requests Individual Assistance for households, federal help with debris removal and emergency protective measures, direct federal assistance and Hazard Mitigation Grant Program funding, and asks to skip formal field damage assessments, with an incident period starting Oct. 31. On Nov. 12, U.S. Sen. Ashley Moody urged the president to approve the request quickly. As of Friday morning we had not seen an approval announced; Miami-Dade and Broward are not among the nine counties.',
          why: 'If you own a home or business in one of these counties and had water damage, keep documenting it and file with your insurer now; federal help, if approved, is for basic needs and uninsured losses and does not replace a claim. Rising water is not covered by a standard home policy. See our [flood insurance page](/en/flood-insurance-homestead-fl) and [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida) for flooded cars.',
          sources: AID,
        },
        {
          headline:
            'New: Troopers launch the “don’t wing it” holiday driving campaign, citing 7,331 crashes over last year’s Thanksgiving weekend',
          summary:
            'FLHSMV and the Florida Highway Patrol said on Nov. 10 that from now through the end of the year they will focus on **impaired driving, hit-and-run awareness and vehicle readiness**. The agency counted more than 1,000 crashes involving alcohol, drugs or both in November and December 2025, and **7,331 crashes with 45 deaths** during last year’s five-day Thanksgiving travel period (Wednesday through Sunday), with the most crashes on the Wednesday before the holiday. Drivers are asked to check tire pressure, tread and tire age, brakes, fluids and lights, and to keep their license, registration and proof of insurance (or rental agreement) within reach.',
          why: 'If you are stopped or involved in a crash, you will need proof of insurance right away; Florida accepts it on your phone. See [electronic proof of insurance in Florida](/en/blog/electronic-proof-of-insurance-florida). Renting a car for the holidays? Read [rental car insurance for the holidays](/en/blog/rental-car-insurance-florida-holidays), and check your [uninsured motorist coverage](/en/blog/uninsured-motorist-coverage-florida), which can help after a hit-and-run.',
          sources: DRIVE,
        },
        {
          headline:
            'New: A Fort Lauderdale commissioner asks for a 90-day plan to raise roads and seawalls as king-tide flooding worsens; next tides Nov. 23–26',
          summary:
            'Fort Lauderdale Commissioner Steve Glassman has asked city staff to come back within 90 days with a framework for quicker flood relief, including **raising roads, elevating seawalls and financial help for flood barriers on homes**, Insurance Journal reported on Nov. 12, citing the South Florida Sun Sentinel. He said king-tide flooding in recent weeks reached streets that had never flooded before and cut off access to homes and businesses; the city says staff are reviewing the idea alongside its longer-term stormwater projects. Miami-Dade County lists the next king-tide window as **Nov. 23–26**, and warns that flooding can be worse when the tides line up with heavy rain or strong winds.',
          why: 'Tidal flooding is still flood: a standard home policy does not cover rising water, and a new flood policy usually needs 30 days to take effect, so coverage bought today would not start before the Nov. 23–26 tides. Move cars to higher ground before high tide; a car damaged by salt water is generally a comprehensive claim. See [king tides and flood insurance](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: TIDES,
        },
        {
          headline:
            'Update: The cold front crosses South Florida today; a cool, breezy weekend, rough Atlantic seas and gusty winds next week',
          summary:
            'NWS Miami’s 6:43 a.m. Area Forecast Discussion says the strong front moves through today with little rain, and a **Small Craft Advisory** for the local Atlantic waters runs from 10 p.m. tonight to 11 a.m. Saturday, with Atlantic seas building to 4–7 feet Saturday. Saturday morning lows are forecast in the upper 50s in the coastal metros and the low to mid 50s around Lake Okeechobee and inland, with highs in the low 70s on the east coast (Homestead about 60 at dawn and 73 in the afternoon). The cool spell is expected to be short, with warming from Sunday; a low forming in the Gulf could bring gusty northeast winds and onshore showers from Monday, but its track and rain totals for midweek are still very uncertain.',
          why: 'Boat owners: check lines, covers and anchors before the advisory starts tonight; see [boat insurance](/en/boat-insurance-florida). With a week of gusty winds possible, secure patio furniture and loose items and clear gutters and drains now; wind damage is a home-policy claim, but preventing it is better. For your home coverage, see [homeowners insurance in Florida City](/en/homeowners-insurance-florida-city).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program is authorized through **11:59 p.m. Dec. 11, 2026**, 28 days from today; FEMA’s page still shows no newer extension. OIR has not yet posted its order on NCCI’s 2027 workers’ compensation rate request (an overall average change of −7.4% requested for the voluntary market; comments closed Nov. 10). The Legislature’s Organization Session is Tuesday, Nov. 17. National Hurricane Center, 7 a.m. Friday: no tropical cyclone formation expected in the next 7 days.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 13 de noviembre de 2026: la solicitud de ayuda federal por las inundaciones incluye nueve condados, la Patrulla de Carreteras arranca su campaña de fiestas, Fort Lauderdale busca soluciones rápidas para las mareas altas y hoy llega el frente frío',
      metaTitle: 'Noticias 13 nov. 2026: ayuda por inundación, fiestas al volante, mareas | M&K',
      description:
        'La solicitud de ayuda federal de Florida abarca nueve condados, FLHSMV inicia su campaña de manejo seguro en las fiestas, Fort Lauderdale estudia medidas rápidas ante las mareas del 23 al 26 de noviembre y llega un frente frío.',
      ogAlt:
        'Una casa inundada junto a un documento con sello, un auto en una carretera junto a un calendario con una hoja de otoño, un muro de contención con agua subiendo, una flecha hacia arriba y una casa sobre una calle elevada, y una flecha de frente frío con un termómetro sobre palmeras',
      intro:
        'Cuatro novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este viernes. Cada noticia está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline:
            'Actualización: la solicitud de ayuda federal por las inundaciones abarca nueve condados, entre ellos Palm Beach y Martin, y sigue pendiente',
          summary:
            'La carta del gobernador al presidente, fechada el 9 de noviembre y ahora publicada por la oficina del congresista Mike Haridopolos, pide una **declaración de desastre mayor por vía acelerada** para nueve condados: Brevard, DeSoto, Hardee, Highlands, Indian River, Martin, Okeechobee, Palm Beach y St. Lucie. Solicita Asistencia Individual para los hogares, ayuda federal para retirar escombros y medidas de protección de emergencia, asistencia federal directa y fondos del Programa de Subvenciones para la Mitigación de Riesgos, y pide omitir las evaluaciones formales de daños en el terreno, con un período del incidente que comienza el 31 de octubre. El 12 de noviembre, la senadora federal Ashley Moody pidió al presidente que la apruebe pronto. Hasta el viernes por la mañana no habíamos visto ningún anuncio de aprobación; Miami-Dade y Broward no figuran entre los nueve condados.',
          why: 'Si tiene casa o negocio en uno de esos condados y sufrió daños por agua, siga documentándolos y presente su reclamo a la aseguradora ya; la ayuda federal, si se aprueba, cubre necesidades básicas y pérdidas sin seguro, y no reemplaza un reclamo. La póliza de vivienda estándar no cubre el agua que sube. Vea nuestra [página de seguro contra inundaciones](/es/flood-insurance-homestead-fl) y [cobertura amplia vs. choque](/es/blog/comprehensive-vs-collision-florida) si se inundó su auto.',
          sources: AID,
        },
        {
          headline:
            'Nuevo: la Patrulla de Carreteras lanza su campaña de fiestas “no lo dejes al azar”, tras 7,331 choques en el fin de semana de Acción de Gracias del año pasado',
          summary:
            'El FLHSMV y la Patrulla de Carreteras de Florida anunciaron el 10 de noviembre que, desde ahora hasta fin de año, se enfocarán en **manejar bajo los efectos del alcohol o drogas, la concienciación sobre choques con fuga y el buen estado del vehículo**. La agencia contó más de 1,000 choques con alcohol, drogas o ambos en noviembre y diciembre de 2025, y **7,331 choques con 45 muertes** en los cinco días de viaje de Acción de Gracias del año pasado (de miércoles a domingo); el día con más choques fue el miércoles previo a la fiesta. Piden revisar la presión, el dibujo y la antigüedad de las llantas, los frenos, los líquidos y las luces, y llevar a mano la licencia, el registro y la prueba de seguro (o el contrato de alquiler).',
          why: 'Si lo detienen o tiene un choque, necesitará su prueba de seguro en el momento; en Florida se acepta en el teléfono. Vea [prueba electrónica de seguro en Florida](/es/blog/electronic-proof-of-insurance-florida). ¿Va a alquilar un auto en las fiestas? Lea [seguro de auto de alquiler en las fiestas](/es/blog/rental-car-insurance-florida-holidays) y revise su [cobertura de motorista sin seguro](/es/blog/uninsured-motorist-coverage-florida), que puede ayudar tras un choque con fuga.',
          sources: DRIVE,
        },
        {
          headline:
            'Nuevo: un comisionado de Fort Lauderdale pide en 90 días un plan para elevar calles y muros de contención ante las mareas altas; las próximas, del 23 al 26 de noviembre',
          summary:
            'El comisionado de Fort Lauderdale Steve Glassman pidió al personal de la ciudad un marco de medidas rápidas contra las inundaciones en un plazo de 90 días, que incluya **elevar calles y muros de contención y dar apoyo económico para barreras contra inundaciones en las viviendas**, informó Insurance Journal el 12 de noviembre, citando al South Florida Sun Sentinel. Según Glassman, en las últimas semanas las mareas altas (king tides) inundaron calles que nunca se habían mojado y cortaron el acceso a casas y negocios; la ciudad dice que el personal estudia la propuesta junto con sus proyectos de drenaje a largo plazo. El condado de Miami-Dade indica que la próxima ventana de mareas altas será **del 23 al 26 de noviembre** y advierte que las inundaciones pueden empeorar si coinciden con lluvias fuertes o vientos intensos.',
          why: 'La inundación por marea sigue siendo inundación: la póliza de vivienda estándar no cubre el agua que sube, y una póliza nueva de inundación suele tardar 30 días en entrar en vigor, así que la que compre hoy no empezaría antes de las mareas del 23 al 26 de noviembre. Mueva su auto a un lugar alto antes de la marea; el daño por agua salada en un auto suele ser un reclamo de cobertura amplia. Vea [mareas altas y seguro contra inundaciones](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: TIDES,
        },
        {
          headline:
            'Actualización: el frente frío cruza hoy el sur de Florida; fin de semana fresco y con brisa, mar agitado en el Atlántico y ráfagas la próxima semana',
          summary:
            'La discusión de pronóstico de las 6:43 a.m. del Servicio Meteorológico Nacional en Miami indica que el frente fuerte pasa hoy con poca lluvia, y que rige un **aviso para embarcaciones pequeñas** en las aguas locales del Atlántico desde las 10 p.m. de hoy hasta las 11 a.m. del sábado, con olas de 4 a 7 pies en el Atlántico el sábado. Para el sábado por la mañana se esperan mínimas de 57 a 59 °F (unos 14–15 °C) en las zonas urbanas de la costa y de 50 a 55 °F alrededor del lago Okeechobee y en el interior, con máximas de unos 70–72 °F en la costa este (en Homestead, cerca de 60 °F al amanecer y 73 °F por la tarde). El frescor durará poco y las temperaturas subirán desde el domingo; una baja que se formaría en el Golfo podría traer ráfagas del noreste y chubascos en la costa desde el lunes, pero su trayectoria y la lluvia de mitad de semana siguen siendo muy inciertas.',
          why: 'Dueños de embarcaciones: revisen amarras, fundas y anclas antes de que empiece el aviso esta noche; vea [seguro de embarcaciones](/es/boat-insurance-florida). Con una semana de posibles ráfagas, asegure muebles de patio y objetos sueltos y limpie canaletas y desagües desde ahora; el daño por viento se reclama a la póliza de vivienda, pero es mejor prevenirlo. Para su vivienda, vea [seguro de vivienda en Florida City](/es/homeowners-insurance-florida-city).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El programa federal de seguro contra inundaciones está autorizado hasta las **11:59 p.m. del 11 de diciembre de 2026**, dentro de 28 días, y la página de FEMA aún no muestra una nueva prórroga. La OIR todavía no ha publicado su orden sobre la solicitud de NCCI de tarifas de compensación laboral para 2027 (un cambio promedio solicitado de −7.4% para el mercado voluntario; el plazo de comentarios cerró el 10 de noviembre). La sesión de organización de la Legislatura es el martes 17 de noviembre. Centro Nacional de Huracanes, 7 a.m. del viernes: no se espera la formación de ciclones tropicales en los próximos 7 días.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 13 ноября 2026 г.: в запросе на федеральную помощь после наводнений девять округов, дорожный патруль начинает праздничную кампанию, Форт-Лодердейл ищет быстрые меры против приливных подтоплений, а сегодня приходит холодный фронт',
      metaTitle: 'Новости 13 ноября 2026: помощь после наводнений, праздничные дороги, приливы | M&K',
      description:
        'Запрос Флориды на федеральную помощь охватывает девять округов, FLHSMV начинает праздничную кампанию за безопасное вождение, Форт-Лодердейл обсуждает быстрые меры перед приливами 23–26 ноября, приходит холодный фронт.',
      ogAlt:
        'Затопленный дом рядом с документом с печатью, машина на дороге рядом с календарём с осенним листом, волнорез с поднимающейся водой, стрелка вверх и дом на приподнятой улице, стрелка холодного фронта с термометром над пальмами',
      intro:
        'Четыре новости для домовладельцев, водителей и владельцев малого бизнеса Южной Флориды в эту пятницу. Каждая изложена нашими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: запрос Флориды на федеральную помощь после наводнений охватывает девять округов, включая Палм-Бич и Мартин; решения пока нет',
          summary:
            'Письмо губернатора президенту от 9 ноября, которое теперь опубликовал офис конгрессмена Майка Харидополоса, содержит просьбу **в ускоренном порядке объявить крупное бедствие (Major Disaster Declaration)** в девяти округах: Бревард, ДеСото, Харди, Хайлендс, Индиан-Ривер, Мартин, Окичоби, Палм-Бич и Сент-Луси. Штат просит индивидуальную помощь для семей, федеральную поддержку при вывозе мусора и экстренных защитных мерах, прямую федеральную помощь и средства программы грантов на снижение рисков (HMGP), а также просит обойтись без формальной оценки ущерба на месте; период бедствия — с 31 октября. 12 ноября сенатор США Эшли Муди призвала президента быстро одобрить запрос. На утро пятницы сообщений об одобрении мы не нашли; Майами-Дейд и Броуард в число девяти округов не входят.',
          why: 'Если у вас дом или бизнес в одном из этих округов и есть ущерб от воды, продолжайте его документировать и подавайте претензию страховщику уже сейчас; федеральная помощь, если её одобрят, рассчитана на базовые нужды и незастрахованные потери и не заменяет страховую выплату. Ущерб от поднявшейся воды обычный полис на дом не покрывает. Подробнее — на нашей [странице страхования от наводнения](/ru/flood-insurance-homestead-fl) и в статье [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida) о затопленных машинах.',
          sources: AID,
        },
        {
          headline:
            'Новое: дорожный патруль начинает праздничную кампанию «не полагайтесь на авось» — в прошлый День благодарения было 7 331 ДТП',
          summary:
            'FLHSMV и Дорожный патруль Флориды 10 ноября объявили, что с этого момента и до конца года будут уделять особое внимание **вождению в нетрезвом виде или под действием наркотиков, ДТП с оставлением места происшествия и техническому состоянию машин**. По данным ведомства, в ноябре и декабре 2025 года произошло более 1000 аварий с участием алкоголя, наркотиков или того и другого, а за пять праздничных дней Дня благодарения в прошлом году (со среды по воскресенье) — **7 331 ДТП и 45 погибших**; больше всего аварий пришлось на среду накануне праздника. Водителей просят проверить давление, протектор и возраст шин, тормоза, жидкости и фары, а также держать под рукой права, регистрацию и подтверждение страховки (или договор аренды).',
          why: 'Если вас остановят или вы попадёте в аварию, подтверждение страховки понадобится сразу; во Флориде его можно показать на телефоне. См. статью [электронное подтверждение страховки во Флориде](/ru/blog/electronic-proof-of-insurance-florida). Берёте машину напрокат на праздники? Прочитайте [страховка арендованной машины в праздники](/ru/blog/rental-car-insurance-florida-holidays) и проверьте покрытие [от незастрахованных водителей](/ru/blog/uninsured-motorist-coverage-florida) — оно может помочь, если виновник скрылся.',
          sources: DRIVE,
        },
        {
          headline:
            'Новое: член городской комиссии Форт-Лодердейла просит за 90 дней подготовить план подъёма дорог и волнорезов из-за усиливающихся приливных подтоплений; следующие приливы — 23–26 ноября',
          summary:
            'Член городской комиссии Форт-Лодердейла Стив Глассман поручил сотрудникам мэрии в течение 90 дней подготовить план быстрых мер против подтоплений, в том числе **подъём дорог, наращивание волнорезов и финансовую помощь жителям на защитные барьеры для домов**, сообщил Insurance Journal 12 ноября со ссылкой на South Florida Sun Sentinel. По словам Глассмана, за последние недели приливы (king tides) залили улицы, которые раньше никогда не затапливало, и перекрыли подъезд к домам и предприятиям; в мэрии говорят, что изучают предложение вместе с долгосрочными проектами ливневой канализации. Округ Майами-Дейд называет следующее окно сильных приливов — **23–26 ноября** — и предупреждает, что подтопления бывают сильнее, если приливы совпадают с ливнями или сильным ветром.',
          why: 'Подтопление приливом — это тоже наводнение: обычный полис на дом не покрывает поднявшуюся воду, а новый полис от наводнения обычно вступает в силу через 30 дней, так что купленный сегодня не начнёт действовать до приливов 23–26 ноября. Перед приливом отгоните машину повыше; ущерб машине от солёной воды обычно проходит по comprehensive. Подробнее — в статье [приливы king tides и страхование от наводнения](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: TIDES,
        },
        {
          headline:
            'Обновление: холодный фронт проходит через Южную Флориду сегодня; прохладные ветреные выходные, шторм в Атлантике и порывистый ветер на следующей неделе',
          summary:
            'Согласно прогностическому обсуждению NWS Miami от 6:43, сильный фронт проходит сегодня почти без дождя, а для прибрежных вод Атлантики с 22:00 сегодня до 11:00 субботы действует **предупреждение для малых судов (Small Craft Advisory)**; в субботу волны в Атлантике вырастут до 4–7 футов (1,2–2 м). В субботу утром в прибрежных городах ожидается 57–59 °F (около 14–15 °C), у озера Окичоби и во внутренних районах — 50–55 °F (10–13 °C), днём на восточном побережье около 70–72 °F (21–22 °C); в Хомстеде около 60 °F (16 °C) на рассвете и 73 °F (23 °C) днём. Похолодание будет коротким, с воскресенья потеплеет; область низкого давления, которая может сформироваться в Мексиканском заливе, с понедельника способна принести порывистый северо-восточный ветер и ливни с моря, но её траектория и количество осадков в середине недели пока очень неопределённы.',
          why: 'Владельцам лодок: проверьте швартовы, чехлы и якоря до начала предупреждения сегодня вечером; см. [страхование лодки](/ru/boat-insurance-florida). Раз возможна целая неделя порывистого ветра, закрепите садовую мебель и незакреплённые предметы и прочистите водостоки уже сейчас; ущерб от ветра — случай по полису на дом, но лучше его предотвратить. О защите дома — на странице [страхование дома во Флорида-Сити](/ru/homeowners-insurance-florida-city).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Федеральная программа страхования от наводнений действует **до 23:59 11 декабря 2026 г.**, то есть ещё 28 дней; на странице FEMA нового продления пока нет. Приказа OIR по заявке NCCI о тарифах workers’ comp на 2027 год (запрошено среднее изменение −7,4% для добровольного рынка; приём комментариев завершился 10 ноября) пока нет. Организационная сессия Законодательного собрания — во вторник, 17 ноября. Национальный центр по ураганам, 7:00 пятницы: в ближайшие 7 дней образование тропических циклонов не ожидается.',
        },
      ],
      extraSources: BOX,
    },
  },
};
