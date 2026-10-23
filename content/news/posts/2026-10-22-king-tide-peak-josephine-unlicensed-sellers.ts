import type { NewsEdition, NewsSource } from '../types';

// Edition for Thursday, Oct. 22, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-22',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, Thu Oct 22, 2026 (7:27 p.m. issuance)',
};

const MDC_KING_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const NHC_JOSEPHINE_5: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-22',
  url: 'https://www.nhc.noaa.gov/archive/2026/al10/al102026.public.005.shtml',
  title: 'Post-Tropical Cyclone Josephine Advisory Number 5 (5 p.m. AST Oct 22, 2026)',
};

const NHC_JOSEPHINE_1: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-21',
  url: 'https://www.nhc.noaa.gov/archive/2026/al10/al102026.public.001.shtml',
  title: 'Subtropical Storm Josephine Advisory Number 1 (5 p.m. AST Oct 21, 2026)',
};

const OIR_CD: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-21',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/21/insurance-commissioner-mike-yaworsky-orders-immediate-cease-and-desist-against-two-companies-for-unlicensed-activity',
  title: 'Insurance Commissioner Mike Yaworsky Orders Immediate Cease and Desist Against Two Companies for Unlicensed Activity',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/20/media-advisory-national-council-on-compensation-insurance-public-rate-hearing',
  title: 'Media Advisory: National Council on Compensation Insurance Public Rate Hearing',
};

export const edition: NewsEdition = {
  slug: '2026-10-22-king-tide-peak-josephine-unlicensed-sellers',
  datePublished: '2026-10-22',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 22, 2026: The season’s peak king tide meets heavy rain and strong wind Sunday–Monday, Josephine moves away, and the state orders two unlicensed sellers to stop',
      metaTitle: 'Insurance News Oct. 22, 2026: Peak King Tide Ahead | M&K',
      description:
        'NWS Miami says the peak king tide lines up with heavy rain and wind Sunday–Monday, Josephine heads out to sea, and OIR orders two unlicensed sellers to stop.',
      ogAlt:
        'A house and a parked car near high water under a full moon and rain cloud, a storm swirl moving away over the ocean, and a license card with a check mark and a cross',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'NWS Miami: the season’s peak king tide arrives Sunday–Monday, right when the heaviest rain and wind are expected',
          summary:
            'The National Weather Service in Miami has a Coastal Flood Advisory for the east coast through 8 p.m. Saturday and expects moderate coastal flooding with each high-tide cycle. Forecasters say the cycle peaks Sunday into Monday, that this is also the highest king tide of the season, and that it coincides with the strongest onshore wind and the heaviest rain; major flooding right on the coast is within the range of possible outcomes, and heavy rain backing up drainage could cause similar impacts even if the tide gauges fall short of the major level. Rain amounts are uncertain and have come down from Wednesday’s discussion: widespread 1–2 inches Sunday through Monday, with a roughly 50% chance that averages reach 3–5 inches and isolated spots see 7–9 inches, anywhere from Cape Canaveral to Homestead. There is also a 40–60% chance of sustained winds near 25 mph with gusts around 35 mph, enough for downed limbs and fronds and loose items blowing around.',
          why: 'Before Sunday, move cars out of low spots, clear drains and gutters, lift valuables off the floor, secure loose outdoor items and avoid driving through standing water; Miami-Dade County also advises rinsing a car with fresh water after it has been in salt water. Flood damage to a home is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), and a new National Flood Insurance Program policy generally has a 30-day waiting period, so one bought now won’t cover this event; for cars, flood damage falls under comprehensive coverage ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). More in our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_AFD, MDC_KING_TIDES],
        },
        {
          headline:
            'Update: Josephine is moving away from the U.S., but its swells keep the Atlantic beaches dangerous',
          summary:
            'The National Hurricane Center started advisories on Subtropical Storm Josephine on Wednesday, Oct. 21, about 265 miles south of Nantucket with 65 mph winds. By its last advisory on Thursday afternoon, Josephine had become a post-tropical cyclone about 235 miles east-southeast of Nantucket, expected to turn into a powerful extratropical low with hurricane-force winds while heading away from the United States; no coastal watches or warnings were in effect. The center says swells from the storm are creating life-threatening surf and rip currents along much of the eastern seaboard, with minor to locally moderate coastal flooding at high tide along the Mid-Atlantic coast. In South Florida, NWS Miami keeps a high rip-current risk through Saturday evening and expects beach conditions to be at their worst late this weekend into early next week.',
          why: 'Josephine itself is not a wind or storm-surge threat to Florida, so the danger here is the water: stay out of the Atlantic or swim only near a lifeguard, and if you are caught in a rip current, stay calm, float and swim parallel to shore. Cars parked near the beach are the ones most exposed to salt water over the next few days.',
          sources: [NHC_JOSEPHINE_5, NHC_JOSEPHINE_1],
        },
        {
          headline:
            'OIR orders two out-of-state sellers of vehicle service agreements and home warranties to stop operating without a Florida license',
          summary:
            'On Oct. 21 the Florida Office of Insurance Regulation announced it is ordering two companies to cease and desist immediately, under threat of administrative penalty, after market conduct examinations. One, based in New Jersey, sold a motor vehicle service agreement to a Florida consumer without being licensed to do business in Florida; the other, based in New York, sold home warranties to Florida consumers without a license and without being appointed as a sales representative for any home warranty association or authorized insurer here. OIR urges people to research a business and confirm it is properly licensed before signing a contract; the company names and the complaints are in OIR’s release, which we are not repeating here.',
          why: 'If you get a call, mailer or online pitch for a vehicle service contract or a home warranty, look the company up in OIR’s [Active Company Search](https://companysearch.myfloridacfo.gov/) before you pay. These products are not the same as an auto or homeowners policy and don’t replace the coverage your lender or the state requires. To report a problem, the state’s Division of Consumer Services helpline is 1-877-693-5236; if you are unsure what your policy covers, [ask us](/en/quote).',
          sources: [OIR_CD],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Coming up: workers’ comp rate hearing',
          text: 'The Office of Insurance Regulation will hold a virtual public hearing on the workers’ compensation rate filing from the National Council on Compensation Insurance on Tuesday, Oct. 27, at 10 a.m. ET; you can join online or by phone at (850) 328-4354, access code 492598897#. The record stays open for written comments through Nov. 10 at 5 p.m. ET; OIR’s advisory asks that they go to ratehearings@floir.gov with the subject line “NCCI”.',
        },
      ],
      extraSources: [OIR_NCCI],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 22 de oct. de 2026: la marea rey más alta de la temporada coincide con lluvia fuerte y viento el domingo y el lunes, Josephine se aleja y el Estado ordena detenerse a dos vendedores sin licencia',
      metaTitle: 'Noticias de seguros 22/10/2026: pico de marea rey | M&K',
      description:
        'NWS Miami: la marea rey más alta coincide con lluvia y viento el domingo y el lunes; Josephine se aleja y la OIR frena a dos vendedores sin licencia.',
      ogAlt:
        'Una casa y un auto estacionado junto al agua alta bajo la luna llena y una nube de lluvia, un remolino de tormenta que se aleja sobre el océano y una tarjeta de licencia con una marca de verificación y una cruz',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'NWS Miami: la marea rey más alta de la temporada llega el domingo y el lunes, justo cuando se esperan la lluvia y el viento más fuertes',
          summary:
            'El Servicio Nacional de Meteorología (NWS) en Miami mantiene un Aviso de Inundación Costera (Coastal Flood Advisory) para la costa este hasta las 8 p.m. del sábado y espera inundación costera moderada en cada ciclo de marea alta. Los meteorólogos indican que el ciclo alcanza su punto máximo del domingo al lunes, que además será la marea rey más alta de la temporada, y que coincide con el viento del mar más fuerte y la lluvia más intensa; una inundación mayor justo en la costa está dentro de lo posible, y si la lluvia fuerte impide el drenaje, los efectos podrían ser parecidos aunque los medidores de marea no lleguen al nivel mayor. La cantidad de lluvia es incierta y ha bajado respecto a la discusión del miércoles: de 1 a 2 pulgadas en general del domingo al lunes, con cerca de un 50% de probabilidad de que los promedios lleguen a 3–5 pulgadas y de que algunos puntos aislados reciban 7–9 pulgadas, en cualquier lugar entre Cape Canaveral y Homestead. También hay un 40–60% de probabilidad de vientos sostenidos cercanos a 25 mph con ráfagas de unas 35 mph, suficientes para derribar ramas y hojas de palmera y mover objetos sueltos.',
          why: 'Antes del domingo, saque los autos de las zonas bajas, limpie desagües y canaletas, suba del piso los objetos de valor, asegure lo que esté suelto afuera y no maneje por agua estancada; además, el condado de Miami-Dade recomienda enjuagar el auto con agua dulce después de que haya estado en agua salada. Los daños por inundación en la vivienda solo los cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, y una póliza nueva del Programa Nacional de Seguro contra Inundaciones (NFIP) por lo general tiene un período de espera de 30 días, así que comprarla ahora no cubrirá este evento; en los autos, el daño por inundación lo cubre la cobertura amplia (comprehensive) ([comprehensive vs. colisión](/es/blog/comprehensive-vs-collision-florida)). Más información en nuestra [guía sobre las mareas rey](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_AFD, MDC_KING_TIDES],
        },
        {
          headline:
            'Actualización: Josephine se aleja de Estados Unidos, pero su oleaje mantiene peligrosas las playas del Atlántico',
          summary:
            'El Centro Nacional de Huracanes (NHC) comenzó a emitir avisos sobre la tormenta subtropical Josephine el miércoles 21 de octubre, a unas 265 millas al sur de Nantucket y con vientos de 65 mph. En su último aviso, el jueves por la tarde, Josephine ya era un ciclón postropical a unas 235 millas al este-sureste de Nantucket, que se espera se convierta en un potente ciclón extratropical con vientos de fuerza de huracán mientras se aleja de Estados Unidos; no había avisos ni vigilancias costeras vigentes. El centro indica que el oleaje de la tormenta crea oleaje y corrientes de resaca que ponen en peligro la vida en gran parte de la costa este, con inundación costera de leve a localmente moderada en la marea alta a lo largo de la costa del Atlántico medio. En el sur de Florida, el NWS de Miami mantiene un alto riesgo de corrientes de resaca hasta el sábado por la noche y prevé que las condiciones en las playas sean peores a fines de este fin de semana y a comienzos de la próxima.',
          why: 'Josephine en sí no es una amenaza de viento ni de marejada ciclónica para Florida, así que el peligro está en el agua: no se meta al Atlántico o nade solo cerca de un salvavidas, y si lo atrapa una corriente de resaca, mantenga la calma, flote y nade en paralelo a la orilla. Los autos estacionados cerca de la playa son los más expuestos al agua salada en los próximos días.',
          sources: [NHC_JOSEPHINE_5, NHC_JOSEPHINE_1],
        },
        {
          headline:
            'La OIR ordena a dos vendedores de otro estado de contratos de servicio para vehículos y garantías de vivienda que dejen de operar sin licencia de Florida',
          summary:
            'El 21 de octubre, la Oficina de Regulación de Seguros de Florida (OIR) anunció que ordena a dos empresas cesar de inmediato su actividad (cease and desist), bajo amenaza de sanción administrativa, tras exámenes de conducta de mercado. Una, con sede en Nueva Jersey, vendió un contrato de servicio para vehículos a un consumidor de Florida sin tener licencia para operar en el estado; la otra, con sede en Nueva York, vendió garantías de vivienda a consumidores de Florida sin licencia y sin estar designada como representante de ventas de ninguna asociación de garantías de vivienda ni de ninguna aseguradora autorizada en Florida. La OIR pide a los consumidores investigar a un negocio y confirmar que tenga licencia antes de firmar un contrato; los nombres de las empresas y las quejas están en el comunicado de la OIR, que aquí no repetimos.',
          why: 'Si recibe una llamada, un folleto o una oferta en línea de un contrato de servicio para su vehículo o de una garantía de vivienda, busque a la empresa en la [búsqueda de compañías activas](https://companysearch.myfloridacfo.gov/) de la OIR antes de pagar. Estos productos no son lo mismo que una póliza de auto o de vivienda y no reemplazan la cobertura que exigen su prestamista o el Estado. Para reportar un problema, la línea de ayuda de la División de Servicios al Consumidor del Estado es 1-877-693-5236; si no está seguro de qué cubre su póliza, [consúltenos](/es/quote).',
          sources: [OIR_CD],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Próximamente: audiencia sobre tarifas de compensación laboral',
          text: 'La Oficina de Regulación de Seguros celebrará el martes 27 de octubre a las 10 a.m. (hora del Este) una audiencia pública virtual sobre la solicitud de tarifas de compensación laboral (workers’ comp) del National Council on Compensation Insurance (NCCI); se puede participar en línea o por teléfono al (850) 328-4354, código de acceso 492598897#. El expediente sigue abierto a comentarios por escrito hasta el 10 de noviembre a las 5 p.m. (hora del Este); el aviso de la OIR pide enviarlos a ratehearings@floir.gov con el asunto “NCCI”.',
        },
      ],
      extraSources: [OIR_NCCI],
    },
    ru: {
      title:
        'Страховые новости Флориды, 22 октября 2026: самый высокий king tide сезона совпадает с ливнями и ветром в воскресенье–понедельник, Josephine уходит в океан, а штат приказал остановиться двум продавцам без лицензии',
      metaTitle: 'Страховые новости 22.10.2026: пик king tide | M&K Agency',
      description:
        'NWS Miami: пик king tide совпадёт с ливнями и ветром в воскресенье–понедельник, Josephine уходит в океан, OIR остановила двух продавцов без лицензии.',
      ogAlt:
        'Дом и припаркованная машина у высокой воды под полной луной и дождевой тучей, уходящий над океаном штормовой вихрь и карточка лицензии с галочкой и крестиком',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'NWS Miami: самый высокий king tide сезона придёт в воскресенье–понедельник — как раз когда ждут самый сильный дождь и ветер',
          summary:
            'Национальная метеослужба (NWS) в Майами держит для восточного побережья предупреждение о прибрежном подтоплении (Coastal Flood Advisory) до 20:00 в субботу и ожидает умеренного прибрежного подтопления в каждый цикл прилива. Синоптики пишут, что цикл достигнет пика с воскресенья на понедельник, что это будет самый высокий king tide сезона и что он совпадёт с самым сильным ветром с океана и самыми сильными дождями; сильное подтопление прямо на побережье входит в число возможных сценариев, а ливни, мешающие стоку воды, могут дать похожие последствия, даже если приборы не дотянут до сильного уровня. Количество осадков неопределённо и ниже, чем в обсуждении среды: в целом 1–2 дюйма с воскресенья по понедельник, примерно 50% вероятности, что средние значения дойдут до 3–5 дюймов, а в отдельных местах выпадет 7–9 дюймов — где угодно между Cape Canaveral и Homestead. Кроме того, 40–60% вероятности устойчивого ветра около 25 миль/ч с порывами около 35 миль/ч — этого достаточно, чтобы ломались ветки и листья пальм и разлетались незакреплённые вещи.',
          why: 'До воскресенья уберите машины из низких мест, прочистите водостоки, поднимите ценные вещи с пола, закрепите лёгкие вещи во дворе и не въезжайте в стоячую воду; округ Miami-Dade также советует ополоснуть машину пресной водой после соляной воды. Ущерб дому от наводнения покрывает только отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), а у нового полиса федеральной программы NFIP обычно 30-дневный период ожидания — купленный сейчас, он это событие не покроет; ущерб машине от воды покрывает comprehensive ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Подробнее — в нашем [материале о king tides](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_AFD, MDC_KING_TIDES],
        },
        {
          headline:
            'Обновление: Josephine уходит от США, но её волны оставляют атлантические пляжи опасными',
          summary:
            'Национальный центр по ураганам (NHC) начал выпускать бюллетени по субтропическому шторму Josephine в среду, 21 октября: он находился примерно в 265 милях к югу от Нантакета, ветер до 65 миль/ч. К последнему бюллетеню в четверг днём Josephine уже стал посттропическим циклоном примерно в 235 милях к востоку-юго-востоку от Нантакета; ожидается, что он превратится в мощный внетропический циклон с ветром ураганной силы, удаляясь от Соединённых Штатов; прибрежных предупреждений и оповещений не действовало. Центр сообщает, что волны от шторма создают опасный для жизни прибой и обратные течения (rip currents) вдоль значительной части восточного побережья, а на побережье Среднеатлантических штатов во время приливов — слабое и местами умеренное подтопление. В Южной Флориде NWS Miami сохраняет высокий риск обратных течений до вечера субботы и ждёт, что обстановка на пляжах будет хуже всего в конце этих выходных и в начале следующей недели.',
          why: 'Сам Josephine не несёт Флориде угрозы ветром или штормовым нагоном, так что опасность — в воде: не заходите в Атлантику или плавайте только рядом со спасателем, а если вас затянуло обратным течением, сохраняйте спокойствие, держитесь на воде и плывите параллельно берегу. Машины, припаркованные у пляжа, в ближайшие дни больше всего рискуют попасть под солёную воду.',
          sources: [NHC_JOSEPHINE_5, NHC_JOSEPHINE_1],
        },
        {
          headline:
            'OIR приказала двум продавцам из других штатов — сервисных контрактов на авто и домашних гарантий — прекратить работу без лицензии Флориды',
          summary:
            'Управление страхового регулирования Флориды (OIR) 21 октября объявило, что после проверок рыночного поведения приказывает двум компаниям немедленно прекратить деятельность (cease and desist) под угрозой административного штрафа. Одна, из штата Нью-Джерси, продала жителю Флориды сервисный контракт на автомобиль, не имея лицензии на работу во Флориде; другая, из штата Нью-Йорк, продавала жителям Флориды домашние гарантии без лицензии и без назначения торговым представителем какой-либо ассоциации домашних гарантий или допущенного страховщика во Флориде. OIR призывает проверять компанию и убеждаться в наличии лицензии, прежде чем подписывать договор; названия компаний и жалобы есть в релизе OIR, здесь мы их не повторяем.',
          why: 'Если вам звонят, присылают рекламу или предлагают в интернете сервисный контракт на автомобиль или домашнюю гарантию, перед оплатой найдите компанию в [поиске действующих компаний](https://companysearch.myfloridacfo.gov/) OIR. Эти продукты — не то же самое, что полис на авто или на дом, и они не заменяют покрытие, которого требуют кредитор или штат. Сообщить о проблеме можно на горячую линию Отдела по защите потребителей штата: 1-877-693-5236; если не уверены, что покрывает ваш полис, [спросите нас](/ru/quote).',
          sources: [OIR_CD],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Скоро: слушания по тарифам workers’ comp',
          text: 'Во вторник, 27 октября, в 10:00 по восточному времени OIR проведёт виртуальные публичные слушания по заявке National Council on Compensation Insurance (NCCI) на тарифы страхования работников от несчастных случаев (workers’ comp); подключиться можно онлайн или по телефону (850) 328-4354, код доступа 492598897#. Письменные комментарии принимаются до 17:00 по восточному времени 10 ноября; в уведомлении OIR просит отправлять их на ratehearings@floir.gov с темой письма «NCCI».',
        },
      ],
      extraSources: [OIR_NCCI],
    },
  },
};
