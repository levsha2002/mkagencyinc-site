import type { NewsEdition, NewsSource } from '../types';

// Edition for Friday, Oct. 23, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-23',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, Fri Oct 23, 2026 (7:53 a.m. issuance)',
};

const NWS_MFL_CFA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-23',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=mfl&wwa=all',
  title: 'Coastal Hazard Message, NWS Miami, 12:36 a.m. EDT Fri Oct 23, 2026',
};

const CBS_PREP: NewsSource = {
  name: 'CBS News Miami',
  date: '2026-10-22',
  url: 'https://www.cbsnews.com/miami/news/south-florida-king-tides-flooding-hollywood-fort-lauderdale-preparations/',
  title: 'South Florida braces for king tide flooding as heavy rain, onshore winds threaten the coast',
};

const NWS_KEY_CFW: NewsSource = {
  name: 'National Weather Service Key West',
  date: '2026-10-23',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=key&wwa=all',
  title: 'Coastal Flood Warning, Monroe Upper Keys, 9:07 a.m. EDT Fri Oct 23, 2026',
};

const SFWMD_SEASON: NewsSource = {
  name: 'South Florida Water Management District',
  date: '2026-08-04',
  url: 'https://www.sfwmd.gov/news-events/news/2026-king-tide-season-forecast',
  title: '2026 King Tide Season Forecast',
};

const FSC_PRESUIT: NewsSource = {
  name: 'Supreme Court of Florida',
  date: '2026-10-22',
  url: 'https://flcourts-media.flcourts.gov/content/download/2497129/opinion/Opinion_SC2024-0025.pdf',
  title: 'Opinion, No. SC2024-0025 (Oct. 22, 2026)',
};

const LOCAL10_DORAL: NewsSource = {
  name: 'Local 10 News (WPLG)',
  date: '2026-10-21',
  url: 'https://www.local10.com/news/local/2026/10/21/5-arrested-2-at-large-over-alleged-insurance-agents-licensing-fraud-out-of-doral-office/',
  title: '5 arrested, 2 at large over alleged insurance agents’ licensing fraud out of Doral office',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-23',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8 a.m. EDT Fri Oct 23, 2026',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/20/media-advisory-national-council-on-compensation-insurance-public-rate-hearing',
  title: 'Media Advisory: National Council on Compensation Insurance Public Rate Hearing',
};

export const edition: NewsEdition = {
  slug: '2026-10-23-keys-flood-warning-presuit-notice-license-fraud',
  datePublished: '2026-10-23',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 23, 2026: A coastal flood warning for the Upper Keys, the latest weekend outlook for Miami-Dade and Broward, a Florida Supreme Court ruling on pre-suit notice, and arrests in a Doral licensing-exam scheme',
      metaTitle: 'Insurance News Oct. 23, 2026: Keys Flood Warning | M&K',
      description:
        'Major tidal flooding warning for the Upper Keys, the weekend king tide outlook, a Supreme Court ruling on pre-suit notice and arrests in a Doral exam scheme.',
      ogAlt:
        'A raised coastal house and a car beside rising water under a full moon, a gavel resting on a document, and a license card with a magnifying glass',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Upper Keys under a Coastal Flood Warning for major saltwater flooding through Saturday morning',
          summary:
            'On Friday morning the National Weather Service in Key West upgraded the Upper Keys from an advisory to a **Coastal Flood Warning**, calling for major saltwater flooding around high tide through Saturday morning. The office says numerous roads may close and that low-lying homes, businesses and some critical infrastructure will be flooded, with some shoreline erosion. The Middle Keys remain under an advisory for moderate flooding, and the Lower Keys were added to the advisory for minor to moderate flooding. The South Florida Water Management District’s season forecast lists Oct. 28 and 30 as the highest predicted tides of the year for the Keys, so the tides are not done yet.',
          why: 'If you live in or drive to Key Largo and the Upper Keys, check the tide times before you go, keep cars on higher ground and never drive through water of unknown depth; salt water can ruin a car, and that damage falls under comprehensive coverage ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Water damage to a home from a flood is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), so take dated photos of any damage and keep receipts for cleanup.',
          sources: [NWS_KEY_CFW, SFWMD_SEASON],
        },
        {
          headline:
            'Update: Miami-Dade and Broward flood advisory may be extended or upgraded as the peak king tide arrives Sunday–Monday; rain totals trend lower',
          summary:
            'The Coastal Flood Advisory for coastal Miami-Dade and Broward runs until 8 p.m. Saturday, and NWS Miami says it will need to be either extended into next week or upgraded to a warning Sunday into Monday, when the king tides peak and rain chances and onshore winds are highest. Moderate coastal flooding is expected with each high tide, and major coastal flooding is possible late this weekend into early next week. Rain forecasts keep coming down: one scenario brings 2–3 inches to the east coast metro areas through Monday, and the chance of widespread totals above 2 inches is about 45%, though storms stuck along the coast could still flood low spots. Gusts over 35 mph are possible Sunday and Monday, Atlantic seas could reach 10–14 feet, and Fort Lauderdale’s chief resiliency officer told CBS News Miami she expects tides higher than the city has ever seen through Tuesday and Wednesday.',
          why: 'Before Sunday, move cars out of low streets and garages, clear drains and gutters, lift valuables off the floor and tie down loose outdoor items; CBS News Miami reports that Hollywood may open beach parking garages so residents can move cars away from salt water. A new National Flood Insurance Program policy generally has a 30-day waiting period, so it won’t cover this weekend, but it is worth asking about before the next king tides in November; more in our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_CFA, NWS_MFL_AFD, CBS_PREP],
        },
        {
          headline:
            'Florida Supreme Court: the pre-suit notice rule for property claims does not apply to policies issued before July 1, 2021',
          summary:
            'Since July 1, 2021, Florida law (section 627.70152) has required a homeowner to file a notice of intent to sue with the Department of Financial Services at least 10 business days before suing a property insurer, and a suit filed without it must be dismissed. On Oct. 22 the Florida Supreme Court unanimously ruled that this requirement does not reach policies issued before that date, because the law changed substantive rights and the Legislature did not clearly say it should apply retroactively. The case involved a 2019 water-damage claim under a policy issued that April. The ruling settles a split among the appeals courts: the Third District, which covers Miami-Dade and Monroe, and the Fourth District had applied the rule to older policies, while four other districts had not.',
          why: 'Policies issued on or after July 1, 2021 are still covered by the notice rule, so anyone thinking about suing over a current claim has to file the notice with the state first. The ruling mostly matters for older, still-unresolved claims from before July 2021; if you have one, talk to a licensed Florida attorney (this is not legal advice). For help with a claim that is going nowhere, the state’s consumer helpline is 1-877-693-5236, and our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida) explains the usual steps.',
          sources: [FSC_PRESUIT],
        },
        {
          headline:
            'Five arrested in an alleged scheme to cheat on insurance licensing exams out of a Doral office',
          summary:
            'Criminal investigators with the Florida Department of Financial Services arrested five people in Miami-Dade County on Wednesday, Oct. 21, in an alleged scheme to help applicants pass online insurance licensing exams, Local 10 News reported from arrest records. According to the reports, a helper stayed out of the camera’s view and worked the exam controls while the applicant stayed visible to the online proctor. Charges include racketeering and organized fraud, and some of those arrested are also charged with acting as an insurance agent without a license; two more suspects were still being sought. These are allegations, and everyone charged is presumed innocent until proven guilty.',
          why: 'Before you buy a policy or hand over a payment, check that the person selling it holds an active Florida license in the state’s [licensee search](https://licenseesearch.fldfs.com/), and make premium payments only to the insurer or a licensed agency, never to a personal account. You can always look up our agents there too, or [ask us for a quote](/en/quote).',
          sources: [LOCAL10_DORAL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Also this week',
          text: 'The National Hurricane Center does not expect any tropical cyclone to form in the Atlantic, Caribbean or Gulf in the next seven days (8 a.m. Friday outlook). On Tuesday, Oct. 27, at 10 a.m. ET, the Office of Insurance Regulation holds a virtual public hearing on the 2027 workers’ comp rate filing from the National Council on Compensation Insurance (NCCI); written comments are accepted through 5 p.m. ET on Nov. 10 at ratehearings@floir.gov, subject “NCCI”.',
        },
      ],
      extraSources: [NHC_TWO, OIR_NCCI],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 23 de octubre de 2026: aviso de inundación costera para los Cayos Altos, el pronóstico del fin de semana para Miami-Dade y Broward, un fallo de la Corte Suprema sobre el aviso previo a una demanda y arrestos por un fraude con exámenes de licencia en Doral',
      metaTitle: 'Noticias de seguros 23/10/2026: aviso en los Cayos | M&K',
      description:
        'Aviso por inundación mayor en los Cayos Altos, el king tide del fin de semana, un fallo de la Corte Suprema sobre el aviso previo y arrestos por fraude en Doral.',
      ogAlt:
        'Una casa elevada junto a la costa y un auto cerca del agua que sube bajo la luna llena, un mazo de juez sobre un documento y una tarjeta de licencia con una lupa',
      intro:
        'Cuatro novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada noticia está resumida con nuestras propias palabras, con enlace a la fuente original.',
      items: [
        {
          headline:
            'Los Cayos Altos, bajo aviso de inundación costera por inundación mayor con agua salada hasta el sábado por la mañana',
          summary:
            'El viernes por la mañana, el Servicio Nacional de Meteorología (NWS) en Key West elevó la alerta de los Cayos Altos (Upper Keys) a un **aviso de inundación costera (Coastal Flood Warning)** por inundación mayor con agua salada durante las mareas altas hasta el sábado por la mañana. La oficina advierte que podrían cerrarse numerosas calles y que se inundarán viviendas, negocios y parte de la infraestructura crítica en zonas bajas, con algo de erosión en la costa. Los Cayos Medios siguen bajo advertencia (advisory) por inundación moderada, y los Cayos Bajos se sumaron a la advertencia por inundación de leve a moderada. El pronóstico de temporada del Distrito de Gestión del Agua del Sur de Florida (SFWMD) señala el 28 y el 30 de octubre como las mareas más altas del año en los Cayos, así que las mareas todavía no han terminado.',
          why: 'Si vive en Key Largo o en los Cayos Altos, o maneja hasta allá, revise el horario de las mareas antes de salir, deje el auto en un lugar alto y nunca cruce agua de profundidad desconocida; el agua salada puede arruinar un vehículo, y ese daño lo cubre la cobertura comprensiva ([comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida)). El daño que una inundación cause a su vivienda solo lo cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, así que tome fotos con fecha de cualquier daño y guarde los recibos de la limpieza.',
          sources: [NWS_KEY_CFW, SFWMD_SEASON],
        },
        {
          headline:
            'Actualización: la advertencia por inundación costera en Miami-Dade y Broward podría extenderse o elevarse a aviso con el pico del king tide del domingo y el lunes; bajan los pronósticos de lluvia',
          summary:
            'La advertencia por inundación costera (Coastal Flood Advisory) para la costa de Miami-Dade y Broward rige hasta las 8 p.m. del sábado, y el NWS de Miami dice que habrá que extenderla hasta la próxima semana o convertirla en aviso (warning) entre el domingo y el lunes, cuando las mareas king tide lleguen a su punto máximo y la lluvia y el viento del mar sean más fuertes. Se espera inundación costera moderada en cada marea alta, y es posible una inundación costera mayor desde el final del fin de semana hasta comienzos de la próxima semana. Los pronósticos de lluvia siguen bajando: un escenario deja de 2 a 3 pulgadas en las zonas metropolitanas de la costa este hasta el lunes, y la probabilidad de que caigan más de 2 pulgadas de forma generalizada es de alrededor del 45%, aunque las tormentas que se queden sobre la costa aún podrían inundar zonas bajas. El domingo y el lunes podría haber ráfagas de más de 35 mph y olas de 10 a 14 pies en el Atlántico, y la directora de resiliencia de Fort Lauderdale dijo a CBS News Miami que espera mareas más altas que nunca en la ciudad hasta el martes y el miércoles.',
          why: 'Antes del domingo, saque los autos de calles y garajes bajos, limpie desagües y canaletas, levante del piso los objetos de valor y asegure lo que tenga suelto afuera; según CBS News Miami, Hollywood podría abrir los garajes de estacionamiento de la playa para que los residentes alejen sus autos del agua salada. Una póliza nueva del Programa Nacional de Seguro contra Inundaciones (NFIP) suele tener un período de espera de 30 días, así que no cubriría este fin de semana, pero conviene preguntar por ella antes de las próximas mareas altas de noviembre; más detalles en nuestra [guía sobre los king tides](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_CFA, NWS_MFL_AFD, CBS_PREP],
        },
        {
          headline:
            'Corte Suprema de Florida: el aviso previo a una demanda por un reclamo de propiedad no se aplica a pólizas emitidas antes del 1 de julio de 2021',
          summary:
            'Desde el 1 de julio de 2021, la ley de Florida (sección 627.70152) exige que el asegurado presente ante el Departamento de Servicios Financieros un aviso de intención de demandar al menos 10 días hábiles antes de demandar a su aseguradora de propiedad, y una demanda presentada sin ese aviso debe desestimarse. El 22 de octubre, la Corte Suprema de Florida decidió por unanimidad que ese requisito no alcanza a las pólizas emitidas antes de esa fecha, porque la ley cambió derechos sustantivos y la Legislatura no dijo con claridad que debía aplicarse de forma retroactiva. El caso trataba de un reclamo por daño de agua de 2019, bajo una póliza emitida en abril de ese año. El fallo resuelve una división entre los tribunales de apelación: el Tercer Distrito, que abarca Miami-Dade y Monroe, y el Cuarto Distrito aplicaban la regla a pólizas anteriores, mientras que otros cuatro distritos no lo hacían.',
          why: 'Las pólizas emitidas a partir del 1 de julio de 2021 siguen sujetas a esta regla, así que quien piense demandar por un reclamo actual primero tiene que presentar el aviso ante el Estado. El fallo importa sobre todo para reclamos antiguos, de antes de julio de 2021, que siguen sin resolverse; si tiene uno, consulte con un abogado con licencia en Florida (esto no es asesoría legal). Si su reclamo no avanza, la línea de ayuda al consumidor del Estado es 1-877-693-5236, y nuestra [guía de plazos de un reclamo por huracán](/es/blog/hurricane-claim-timeline-florida) explica los pasos habituales.',
          sources: [FSC_PRESUIT],
        },
        {
          headline:
            'Cinco arrestados por un presunto fraude para aprobar exámenes de licencia de seguros desde una oficina en Doral',
          summary:
            'Investigadores criminales del Departamento de Servicios Financieros de Florida arrestaron el miércoles 21 de octubre a cinco personas en el condado Miami-Dade por un presunto esquema para ayudar a aspirantes a aprobar exámenes de licencia de seguros en línea, según informó Local 10 News a partir de los reportes de arresto. De acuerdo con esos reportes, un cómplice se quedaba fuera del alcance de la cámara y manejaba los controles del examen mientras el aspirante seguía visible para el supervisor en línea. Los cargos incluyen crimen organizado (racketeering) y fraude organizado, y a algunos de los arrestados también se les acusa de actuar como agente de seguros sin licencia; otros dos sospechosos seguían prófugos. Se trata de acusaciones, y toda persona acusada se presume inocente mientras no se demuestre lo contrario.',
          why: 'Antes de comprar una póliza o entregar un pago, compruebe en el [buscador de licencias](https://licenseesearch.fldfs.com/) del Estado que quien se la vende tiene una licencia activa en Florida, y pague las primas solo a la aseguradora o a una agencia con licencia, nunca a una cuenta personal. Allí también puede buscar a nuestros agentes, o [pídanos una cotización](/es/quote).',
          sources: [LOCAL10_DORAL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'También esta semana',
          text: 'El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en el Atlántico, el Caribe ni el Golfo en los próximos siete días (perspectiva de las 8 a.m. del viernes). El martes 27 de octubre, a las 10 a.m. (hora del Este), la Oficina de Regulación de Seguros celebra una audiencia pública virtual sobre la solicitud de tarifas de compensación laboral (workers’ comp) para 2027 del National Council on Compensation Insurance (NCCI); se aceptan comentarios por escrito hasta las 5 p.m. (hora del Este) del 10 de noviembre en ratehearings@floir.gov, con el asunto “NCCI”.',
        },
      ],
      extraSources: [NHC_TWO, OIR_NCCI],
    },
    ru: {
      title:
        'Страховые новости Флориды, 23 октября 2026: штормовое предупреждение о подтоплении в Верхних Кис, прогноз на выходные для Miami-Dade и Broward, решение Верховного суда об уведомлении перед иском и аресты по схеме с лицензионными экзаменами в Doral',
      metaTitle: 'Страховые новости 23.10.2026: подтопление в Кис | M&K',
      description:
        'Предупреждение о сильном подтоплении в Верхних Кис, king tide в выходные, решение Верховного суда об уведомлении перед иском и аресты по схеме в Doral.',
      ogAlt:
        'Приподнятый прибрежный дом и машина у поднимающейся воды под полной луной, судейский молоток на документе и карточка лицензии с лупой',
      intro:
        'Четыре новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Для Верхних Кис объявлено штормовое предупреждение о сильном подтоплении солёной водой до утра субботы',
          summary:
            'В пятницу утром Национальная метеослужба (NWS) в Key West повысила уровень тревоги для Верхних Кис (Upper Keys) с рекомендации до **предупреждения о прибрежном подтоплении (Coastal Flood Warning)**: во время приливов до утра субботы ожидается сильное подтопление солёной водой. По данным службы, могут быть закрыты многие дороги, а дома, предприятия и часть важной инфраструктуры в низинах окажутся под водой; возможен размыв берега. Для Средних Кис по-прежнему действует рекомендация (advisory) об умеренном подтоплении, а Нижние Кис добавлены в рекомендацию о слабом или умеренном подтоплении. По сезонному прогнозу Управления водных ресурсов Южной Флориды (SFWMD), самые высокие приливы года на Кис ожидаются 28 и 30 октября, так что большая вода ещё не закончилась.',
          why: 'Если вы живёте в Key Largo и на Верхних Кис или ездите туда, перед поездкой проверьте время прилива, оставляйте машину повыше и никогда не въезжайте в воду неизвестной глубины; солёная вода может погубить машину, а такой ущерб покрывает comprehensive ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Ущерб дому от наводнения покрывает только отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), поэтому фотографируйте любые повреждения с датой и сохраняйте чеки за уборку.',
          sources: [NWS_KEY_CFW, SFWMD_SEASON],
        },
        {
          headline:
            'Обновление: рекомендацию о подтоплении для Miami-Dade и Broward могут продлить или повысить до предупреждения на пике king tide в воскресенье–понедельник; прогноз дождей снижается',
          summary:
            'Рекомендация о прибрежном подтоплении (Coastal Flood Advisory) для побережья Miami-Dade и Broward действует до 20:00 субботы, и NWS Miami пишет, что её придётся либо продлить на следующую неделю, либо повысить до предупреждения (warning) в воскресенье–понедельник, когда king tide достигнет пика, а дожди и ветер с океана будут сильнее всего. В каждый прилив ожидается умеренное прибрежное подтопление, а в конце выходных и в начале следующей недели возможно сильное. Прогнозы осадков продолжают снижаться: по одному из сценариев на восточное побережье до понедельника выпадет 2–3 дюйма, а вероятность того, что повсеместно выпадет больше 2 дюймов, — около 45%; впрочем, грозы, застрявшие над побережьем, всё равно могут затопить низины. В воскресенье и понедельник возможны порывы ветра свыше 35 миль/ч и волны в Атлантике высотой 10–14 футов, а директор по устойчивости Fort Lauderdale сказала CBS News Miami, что до вторника–среды ждёт самых высоких приливов в истории города.',
          why: 'До воскресенья уберите машины с низких улиц и из подземных гаражей, прочистите водостоки, поднимите ценные вещи с пола и закрепите всё, что лежит во дворе; по данным CBS News Miami, Hollywood может открыть пляжные паркинги, чтобы жители увели машины от солёной воды. У нового полиса федеральной программы NFIP обычно 30-дневный период ожидания, так что эти выходные он не покроет, но о нём стоит спросить до следующих высоких приливов в ноябре; подробнее — в нашем [материале о king tides](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_CFA, NWS_MFL_AFD, CBS_PREP],
        },
        {
          headline:
            'Верховный суд Флориды: обязательное уведомление перед иском по имущественному страхованию не распространяется на полисы, выданные до 1 июля 2021 года',
          summary:
            'С 1 июля 2021 года закон Флориды (раздел 627.70152) требует, чтобы страхователь не позднее чем за 10 рабочих дней до иска к страховщику имущества подал в Департамент финансовых услуг (DFS) уведомление о намерении судиться; иск без такого уведомления подлежит отклонению. 22 октября Верховный суд Флориды единогласно решил, что это требование не касается полисов, выданных до этой даты: закон изменил материальные права, а Легислатура прямо не указала, что он действует задним числом. Речь шла о претензии 2019 года по ущербу от воды по полису, выданному в апреле того же года. Решение снимает разногласия между апелляционными судами: Третий округ, к которому относятся Miami-Dade и Monroe, и Четвёртый округ применяли это правило к старым полисам, а четыре других округа — нет.',
          why: 'На полисы, выданные 1 июля 2021 года или позже, правило по-прежнему распространяется, так что тому, кто собирается судиться по текущей претензии, сначала нужно подать уведомление в штат. Решение важно в основном для старых, до сих пор не урегулированных претензий, возникших до июля 2021 года; если у вас такая есть, поговорите с адвокатом с лицензией во Флориде (это не юридическая консультация). Если претензия застряла, горячая линия штата для потребителей — 1-877-693-5236, а обычные этапы описаны в нашем [материале о сроках урегулирования ураганных претензий](/ru/blog/hurricane-claim-timeline-florida).',
          sources: [FSC_PRESUIT],
        },
        {
          headline:
            'В Doral арестованы пятеро по делу о предполагаемой схеме сдачи экзаменов на страховую лицензию',
          summary:
            'Следователи Департамента финансовых услуг Флориды в среду, 21 октября, арестовали в округе Miami-Dade пятерых человек по делу о предполагаемой схеме, помогавшей кандидатам сдавать онлайн-экзамены на страховую лицензию, сообщил Local 10 News со ссылкой на протоколы арестов. Согласно протоколам, помощник находился вне поля зрения камеры и сам выбирал ответы, а кандидат оставался на виду у онлайн-экзаменатора. Обвинения включают рэкет (racketeering) и организованное мошенничество, а некоторым арестованным также вменяют работу страховым агентом без лицензии; ещё двоих подозреваемых продолжают искать. Это пока обвинения, и каждый обвиняемый считается невиновным, пока его вина не доказана.',
          why: 'Прежде чем покупать полис или платить, проверьте в [государственной базе лицензий](https://licenseesearch.fldfs.com/), что у продавца есть действующая лицензия Флориды, и вносите платежи только страховой компании или лицензированному агентству, а не на личный счёт. Там же можно проверить и наших агентов — или [запросите у нас расчёт](/ru/quote).',
          sources: [LOCAL10_DORAL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Также на этой неделе',
          text: 'Национальный центр по ураганам не ожидает образования тропических циклонов в Атлантике, Карибском море и Мексиканском заливе в ближайшие семь дней (прогноз на 8:00 пятницы). Во вторник, 27 октября, в 10:00 по восточному времени OIR проведёт виртуальные публичные слушания по заявке National Council on Compensation Insurance (NCCI) на тарифы workers’ comp на 2027 год; письменные комментарии принимаются до 17:00 по восточному времени 10 ноября на ratehearings@floir.gov с темой письма «NCCI».',
        },
      ],
      extraSources: [NHC_TWO, OIR_NCCI],
    },
  },
};
