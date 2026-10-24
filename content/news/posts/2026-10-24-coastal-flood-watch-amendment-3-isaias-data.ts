import type { NewsEdition, NewsSource } from '../types';

// Edition for Saturday, Oct. 24, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_CFA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-24',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=mfl&wwa=all',
  title: 'Coastal Hazard Message, NWS Miami, 1:07 a.m. EDT Sat Oct 24, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-24',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, Sat Oct 24, 2026 (7:45 a.m. issuance)',
};

const MIAMI_KING_TIDES: NewsSource = {
  name: 'City of Miami',
  date: '2026-10-24',
  url: 'https://www.miami.gov/My-Government/Climate-Change-in-the-City-of-Miami/King-Tides',
  title: 'King Tides: 2026 dates and peak tide times',
};

const MB_PARKING: NewsSource = {
  name: 'City of Miami Beach',
  date: '2026-10-24',
  url: 'https://www.miamibeachfl.gov/city-hall/parking/residents-only/parking-flood-relief-program/',
  title: 'King Tide Flood Relief Parking Program',
};

const GOV_AMEND3: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-10-21',
  url: 'https://www.flgov.com/eog/news/press/2026/governor-ron-desantis-hosts-miami-roundtable-support-amendment-3-property-tax',
  title: 'Governor Ron DeSantis Hosts Miami Roundtable in Support of Amendment 3',
};

const PHOENIX_AMEND3: NewsSource = {
  name: 'Florida Phoenix',
  date: '2026-10-21',
  url: 'https://floridaphoenix.com/2026/10/21/despite-earlier-hesitation-to-campaign-desantis-hosts-event-supporting-amendment-3/',
  title: 'Despite earlier hesitation to campaign, DeSantis hosts event supporting Amendment 3',
};

const OIR_CRF: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-23',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/23/notice-to-industry-hurricane-isaias-catastrophe-reporting',
  title: 'Notice to Industry: Hurricane Isaias Catastrophe Reporting',
};

const NBC6_ISAIAS: NewsSource = {
  name: 'NBC 6 South Florida (News Service of Florida)',
  date: '2026-10-23',
  url: 'https://www.nbcmiami.com/weather/hurricane-season/hurricane-isaias-insurance-claims-top-580-million/3876511/',
  title: 'Hurricane Isaias insurance claims top $580 million',
};

const NWS_KEY: NewsSource = {
  name: 'National Weather Service Key West',
  date: '2026-10-24',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=key&wwa=all',
  title: 'Coastal Flood Warning, Monroe Upper Keys, 4:00 a.m. EDT Sat Oct 24, 2026',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-24',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8 a.m. EDT Sat Oct 24, 2026',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/20/media-advisory-national-council-on-compensation-insurance-public-rate-hearing',
  title: 'Media Advisory: National Council on Compensation Insurance Public Rate Hearing',
};

export const edition: NewsEdition = {
  slug: '2026-10-24-coastal-flood-watch-amendment-3-isaias-data',
  datePublished: '2026-10-24',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 24, 2026: A Coastal Flood Watch for Miami-Dade and Broward as the peak king tides arrive, what Amendment 3 on the Nov. 3 ballot would change for homeowners and businesses, and the next round of Hurricane Isaias claims data',
      metaTitle: 'Insurance News Oct. 24, 2026: Coastal Flood Watch | M&K',
      description:
        'Coastal Flood Watch for Miami-Dade and Broward through Monday, what the Amendment 3 property tax measure would do, and the next Isaias claims report.',
      ogAlt:
        'A coastal house beside rising water with a red beach flag, a ballot box with a house on the ballot, and a clipboard with a rising bar chart and a storm symbol',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Coastal Flood Watch for Miami-Dade and Broward from late Saturday through Monday evening as the peak king tides arrive',
          summary:
            'The National Weather Service in Miami has added a **Coastal Flood Watch** for coastal Miami-Dade and Broward from late Saturday night through Monday evening, meaning significant coastal flooding is possible; the current advisory for moderate flooding runs until 2 a.m. Sunday. The office warns that numerous roads may close and that low-lying homes, businesses and some critical infrastructure may be flooded, with major tidal flooding possible early next week when strong northeast winds and high surf line up with the peak king tides. For rain, the most likely outcome is about 1 to 1.5 inches through Monday, with a less likely scenario of 3 to 4 inches, and gusts of 35 to 40 mph are possible on Monday. The City of Miami lists peak tides around 8:58 a.m. and 9:04 p.m. Sunday and 9:44 a.m. and 9:48 p.m. Monday, with flooding usually lasting about an hour and a half on either side of the peak.',
          why: 'Move cars out of low streets and garages before Sunday’s high tides, and never drive through water of unknown depth: salt water can ruin a car, and that damage falls under comprehensive coverage ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Miami Beach runs a king tide parking program that lets registered residents on low-lying streets use three city garages while a flood notice is active. Damage to a home from rising water is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), which usually has a 30-day wait, so it won’t help this weekend but is worth reviewing before the November king tides ([king tides guide](/en/blog/king-tides-flood-insurance-miami-dade)).',
          sources: [NWS_MFL_CFA, NWS_MFL_AFD, MIAMI_KING_TIDES, MB_PARKING],
        },
        {
          headline:
            'Amendment 3 on the Nov. 3 ballot: what the property tax measure would change for homesteads and business property',
          summary:
            'Amendment 3 would raise the homestead exemption from non-school property taxes to the first $150,000 of a home’s value in 2027 and $250,000 in 2028, with later inflation adjustments, and would let the Legislature go further, up to ending non-school property taxes on homesteads. It would also lower the cap on yearly assessment increases for non-residential property, such as commercial buildings, from 10% to 5%. Like every constitutional amendment, it needs 60% of the vote to pass. Gov. DeSantis campaigned for it at a Miami roundtable on Oct. 21, while Senate President Ben Albritton, the Florida Sheriffs Association and firefighter and police groups oppose it, warning of pressure on local budgets; state economists estimate it would reduce local revenue by about $5 billion in its first year.',
          why: 'Property taxes are often paid through the same mortgage escrow account as homeowners insurance, so a change in either one moves your monthly payment; if you own a business property, the assessment cap would affect future tax bills, not your insurance. Read the full ballot text before you vote, and check your homestead status with the Miami-Dade Property Appraiser. Whatever happens on Nov. 3, your insurance coverage stays the same until you change it, and you can [ask us to review it](/en/quote).',
          sources: [GOV_AMEND3, PHOENIX_AMEND3],
        },
        {
          headline:
            'State orders insurers to file the next round of Hurricane Isaias claims data by noon Tuesday',
          summary:
            'On Oct. 23 the Office of Insurance Regulation told property insurers to submit another simplified catastrophe report for Hurricane Isaias by 12 p.m. ET on Tuesday, Oct. 27. Reporting is cumulative and covers a wide range of lines, including homeowners, mobile homes, private flood, commercial multi-peril, physical damage to personal and commercial vehicles, and surplus lines. The latest figures OIR has posted, reported as of Oct. 20, show close to 55,000 claims statewide, most of them in the western Panhandle, and about 22% of claims closed. The new filings should give the public an updated picture after next week’s deadline.',
          why: 'Most Isaias claims come from the western Panhandle, but many South Florida residents own property or have family there. If you have an open Isaias claim, keep a written log of every call, photo and email, answer the adjuster’s requests quickly, and if a claim closes without payment, ask for the reason in writing. The state’s consumer helpline is 1-877-693-5236, and our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida) explains the usual deadlines.',
          sources: [OIR_CRF, NBC6_ISAIAS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Also this week',
          text: 'In the Keys, the Coastal Flood Warning for major saltwater flooding in the Upper Keys was extended until 5 a.m. Sunday, and the Middle and Lower Keys remain under an advisory. The National Hurricane Center does not expect any tropical cyclone to form in the next seven days (8 a.m. Saturday outlook). On Tuesday, Oct. 27, at 10 a.m. ET, the Office of Insurance Regulation holds a virtual public hearing on the workers’ comp rate filing from the National Council on Compensation Insurance (NCCI); written comments are accepted through 5 p.m. ET on Nov. 10 at ratehearings@floir.gov, subject “NCCI”.',
        },
      ],
      extraSources: [NWS_KEY, NHC_TWO, OIR_NCCI],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 24 de octubre de 2026: vigilancia por inundación costera en Miami-Dade y Broward durante el pico de las mareas reales, qué cambiaría la Enmienda 3 de la boleta del 3 de noviembre para propietarios y negocios, y la próxima ronda de datos de reclamos del huracán Isaías',
      metaTitle: 'Noticias de seguros 24/10/2026: vigilancia costera | M&K',
      description:
        'Vigilancia por inundación costera en Miami-Dade y Broward hasta el lunes, qué haría la Enmienda 3 sobre impuestos a la propiedad y el próximo informe de Isaías.',
      ogAlt:
        'Una casa costera junto al agua que sube con una bandera roja de playa, una urna con una casa dibujada en la boleta y un portapapeles con un gráfico de barras ascendente y un símbolo de tormenta',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada noticia está resumida con nuestras propias palabras, con enlace a la fuente original.',
      items: [
        {
          headline:
            'Vigilancia por inundación costera en Miami-Dade y Broward desde la noche del sábado hasta el lunes por la tarde, durante el pico de las mareas reales',
          summary:
            'El Servicio Nacional de Meteorología (NWS) en Miami emitió una **vigilancia por inundación costera (Coastal Flood Watch)** para la costa de Miami-Dade y Broward desde la noche del sábado hasta el lunes por la tarde, lo que significa que es posible una inundación costera importante; el aviso actual por inundación moderada sigue vigente hasta las 2 a.m. del domingo. La oficina advierte que muchas calles podrían cerrarse y que viviendas, negocios y parte de la infraestructura crítica en zonas bajas podrían inundarse, con posible inundación mayor por marea a comienzos de la semana, cuando los fuertes vientos del noreste y el oleaje coincidan con el pico de las mareas reales (king tides). En cuanto a la lluvia, lo más probable es entre 1 y 1.5 pulgadas hasta el lunes, con un escenario menos probable de 3 a 4 pulgadas, y el lunes podría haber ráfagas de 35 a 40 mph. La Ciudad de Miami indica picos de marea hacia las 8:58 a.m. y las 9:04 p.m. del domingo, y las 9:44 a.m. y las 9:48 p.m. del lunes; la inundación suele durar alrededor de una hora y media antes y después del pico.',
          why: 'Saque el carro de las calles bajas y de los garajes antes de las mareas altas del domingo, y nunca maneje por agua de profundidad desconocida: el agua salada puede arruinar un vehículo, y ese daño lo cubre la cobertura comprensiva ([comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida)). Miami Beach tiene un programa de estacionamiento durante las mareas reales que permite a los residentes inscritos que viven en calles bajas usar tres garajes de la ciudad mientras haya un aviso de inundación activo. El daño a la vivienda por el agua que sube solo lo cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, que normalmente tiene un periodo de espera de 30 días; no servirá este fin de semana, pero conviene revisarla antes de las mareas reales de noviembre ([guía de mareas reales](/es/blog/king-tides-flood-insurance-miami-dade)).',
          sources: [NWS_MFL_CFA, NWS_MFL_AFD, MIAMI_KING_TIDES, MB_PARKING],
        },
        {
          headline:
            'Enmienda 3 en la boleta del 3 de noviembre: qué cambiaría la medida de impuestos a la propiedad para viviendas con homestead y propiedades comerciales',
          summary:
            'La Enmienda 3 elevaría la exención de homestead de los impuestos a la propiedad no escolares a los primeros $150,000 del valor de la vivienda en 2027 y a $250,000 en 2028, con ajustes posteriores por inflación, y permitiría a la Legislatura ir más allá, hasta eliminar los impuestos no escolares sobre las viviendas con homestead. También bajaría del 10% al 5% el tope del aumento anual de la tasación de propiedades no residenciales, como los edificios comerciales. Como toda enmienda constitucional, necesita el 60% de los votos para aprobarse. El gobernador DeSantis hizo campaña a favor en una mesa redonda en Miami el 21 de octubre, mientras que el presidente del Senado, Ben Albritton, la Asociación de Alguaciles de Florida y gremios de bomberos y policías se oponen y advierten de la presión sobre los presupuestos locales; los economistas del Estado calculan que reduciría los ingresos locales en unos $5,000 millones en su primer año.',
          why: 'Los impuestos a la propiedad suelen pagarse por la misma cuenta de depósito (escrow) de la hipoteca que el seguro de vivienda, así que un cambio en cualquiera de los dos mueve su pago mensual; si tiene una propiedad comercial, el tope de tasación afectaría sus futuras facturas de impuestos, no su seguro. Lea el texto completo de la boleta antes de votar y verifique su estatus de homestead con el Tasador de Propiedades de Miami-Dade. Pase lo que pase el 3 de noviembre, su cobertura de seguro sigue igual hasta que usted la cambie, y puede [pedirnos que la revisemos](/es/quote).',
          sources: [GOV_AMEND3, PHOENIX_AMEND3],
        },
        {
          headline:
            'El Estado ordena a las aseguradoras presentar la próxima ronda de datos de reclamos del huracán Isaías antes del mediodía del martes',
          summary:
            'El 23 de octubre, la Oficina de Regulación de Seguros (OIR) pidió a las aseguradoras de propiedad presentar otro informe simplificado de catástrofe sobre el huracán Isaías antes de las 12 p.m. (hora del Este) del martes 27 de octubre. El informe es acumulativo y abarca muchas líneas, entre ellas vivienda, casas móviles, inundación privada, propiedad comercial multirriesgo, daños físicos a autos personales y comerciales, y líneas excedentes (surplus lines). Las cifras más recientes publicadas por la OIR, con datos al 20 de octubre, muestran cerca de 55,000 reclamos en todo el Estado, la mayoría en el oeste del Panhandle, y alrededor del 22% de los reclamos cerrados. Los nuevos informes deberían dar al público un panorama actualizado después del plazo de la próxima semana.',
          why: 'La mayoría de los reclamos por Isaías vienen del oeste del Panhandle, pero muchos residentes del sur de Florida tienen propiedades o familia allí. Si tiene un reclamo abierto por Isaías, lleve un registro escrito de cada llamada, foto y correo, responda rápido a lo que pida el ajustador y, si el reclamo se cierra sin pago, pida el motivo por escrito. La línea de ayuda al consumidor del Estado es 1-877-693-5236, y nuestra [guía de plazos de reclamos por huracán](/es/blog/hurricane-claim-timeline-florida) explica los pasos habituales.',
          sources: [OIR_CRF, NBC6_ISAIAS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'También esta semana',
          text: 'En los Cayos, la advertencia por inundación costera mayor con agua salada en los Cayos Superiores se extendió hasta las 5 a.m. del domingo, y los Cayos Medios e Inferiores siguen bajo aviso. El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en los próximos siete días (perspectiva de las 8 a.m. del sábado). El martes 27 de octubre, a las 10 a.m. (hora del Este), la Oficina de Regulación de Seguros celebra una audiencia pública virtual sobre la solicitud de tarifas de compensación laboral (workers’ comp) del National Council on Compensation Insurance (NCCI); se aceptan comentarios por escrito hasta las 5 p.m. (hora del Este) del 10 de noviembre en ratehearings@floir.gov, con el asunto “NCCI”.',
        },
      ],
      extraSources: [NWS_KEY, NHC_TWO, OIR_NCCI],
    },
    ru: {
      title:
        'Страховые новости Флориды, 24 октября 2026: штормовое оповещение о прибрежном подтоплении для Miami-Dade и Broward на пике king tide, что изменит поправка 3 на выборах 3 ноября для домовладельцев и бизнеса, и новый сбор данных о претензиях после урагана Isaias',
      metaTitle: 'Страховые новости 24.10.2026: угроза подтопления | M&K',
      description:
        'Оповещение о прибрежном подтоплении в Miami-Dade и Broward до понедельника, что сделает поправка 3 о налоге на недвижимость и новый отчёт по Isaias.',
      ogAlt:
        'Прибрежный дом у поднимающейся воды с красным пляжным флагом, урна для голосования с домиком на бюллетене и планшет с растущей столбчатой диаграммой и значком шторма',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Для Miami-Dade и Broward объявлено оповещение о прибрежном подтоплении с ночи субботы до вечера понедельника на пике king tide',
          summary:
            'Национальная метеослужба (NWS) в Майами добавила для побережья Miami-Dade и Broward **оповещение о возможном прибрежном подтоплении (Coastal Flood Watch)** с ночи субботы до вечера понедельника: возможно значительное подтопление; нынешняя рекомендация (advisory) об умеренном подтоплении действует до 2:00 воскресенья. Служба предупреждает, что могут быть закрыты многие дороги, а дома, предприятия и часть важной инфраструктуры в низинах могут оказаться под водой; в начале следующей недели, когда сильный северо-восточный ветер и прибой совпадут с пиком сезонных приливов (king tides), возможно сильное подтопление. По дождям наиболее вероятно 1–1,5 дюйма до понедельника, менее вероятный сценарий — 3–4 дюйма; в понедельник возможны порывы ветра 35–40 миль/ч. По данным City of Miami, пик прилива в воскресенье — около 8:58 и 21:04, в понедельник — около 9:44 и 21:48; подтопление обычно длится примерно полтора часа до и после пика.',
          why: 'До воскресных приливов уберите машину с низких улиц и из подземных гаражей и никогда не въезжайте в воду неизвестной глубины: солёная вода может погубить машину, а такой ущерб покрывает comprehensive ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). В Miami Beach действует программа парковки на время king tide: зарегистрированные жители низко расположенных улиц могут ставить машины в трёх городских гаражах, пока действует оповещение о подтоплении. Ущерб дому от поднимающейся воды покрывает только отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), у которого обычно 30-дневный период ожидания: в эти выходные он не поможет, но его стоит обдумать до ноябрьских king tide ([материал о king tides](/ru/blog/king-tides-flood-insurance-miami-dade)).',
          sources: [NWS_MFL_CFA, NWS_MFL_AFD, MIAMI_KING_TIDES, MB_PARKING],
        },
        {
          headline:
            'Поправка 3 на выборах 3 ноября: что изменит мера по налогу на недвижимость для домов с homestead и коммерческой недвижимости',
          summary:
            'Поправка 3 увеличит освобождение homestead от не школьных налогов на недвижимость до первых $150 000 стоимости дома в 2027 году и до $250 000 в 2028 году с последующей индексацией на инфляцию, а также позволит Легислатуре пойти дальше — вплоть до полной отмены не школьных налогов на дома с homestead. Кроме того, предел ежегодного роста оценочной стоимости нежилой недвижимости, например коммерческих зданий, снизится с 10% до 5%. Как и любая поправка к конституции штата, она должна набрать 60% голосов. Губернатор DeSantis агитировал за неё на круглом столе в Майами 21 октября, а председатель Сената Ben Albritton, Ассоциация шерифов Флориды, а также объединения пожарных и полицейских выступают против, предупреждая о нагрузке на местные бюджеты; по оценке экономистов штата, в первый год поправка сократит доходы местных властей примерно на $5 млрд.',
          why: 'Налог на недвижимость часто платится через тот же ипотечный счёт escrow, что и страховка дома, поэтому изменение любого из них меняет ваш ежемесячный платёж; если у вас коммерческая недвижимость, предел оценки повлияет на будущие налоговые счета, но не на страховку. Перед голосованием прочитайте полный текст бюллетеня и проверьте свой статус homestead у оценщика недвижимости Miami-Dade (Property Appraiser). Каким бы ни был итог 3 ноября, ваше страховое покрытие остаётся прежним, пока вы сами его не измените, — а [проверить его можно у нас](/ru/quote).',
          sources: [GOV_AMEND3, PHOENIX_AMEND3],
        },
        {
          headline:
            'Штат обязал страховщиков до полудня вторника сдать новые данные о претензиях после урагана Isaias',
          summary:
            '23 октября Управление по регулированию страхования (OIR) поручило страховщикам имущества до 12:00 по восточному времени вторника, 27 октября, подать ещё один упрощённый отчёт о катастрофе по урагану Isaias. Отчёт накопительный и охватывает широкий круг видов страхования, включая жильё, мобильные дома, частное страхование от наводнения, комплексное страхование бизнеса (commercial multi-peril), физический ущерб личным и коммерческим автомобилям и surplus lines. Последние опубликованные OIR данные — по состоянию на 20 октября — показывают около 55 000 претензий по штату, в основном на западе Panhandle; закрыто около 22% претензий. После срока на следующей неделе новые отчёты должны дать обновлённую картину.',
          why: 'Большинство претензий по Isaias приходится на запад Panhandle, но у многих жителей Южной Флориды там есть недвижимость или родственники. Если у вас открыта претензия по Isaias, записывайте каждый звонок, фото и письмо, быстро отвечайте на запросы аджастера, а если претензию закрыли без выплаты, попросите письменно указать причину. Горячая линия штата для потребителей — 1-877-693-5236, а обычные сроки описаны в нашем [материале о сроках урегулирования ураганных претензий](/ru/blog/hurricane-claim-timeline-florida).',
          sources: [OIR_CRF, NBC6_ISAIAS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Также на этой неделе',
          text: 'На Кис предупреждение о сильном подтоплении солёной водой в Верхних Кис продлено до 5:00 воскресенья, а для Средних и Нижних Кис по-прежнему действует рекомендация (advisory). Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней (прогноз на 8:00 субботы). Во вторник, 27 октября, в 10:00 по восточному времени OIR проведёт виртуальные публичные слушания по заявке National Council on Compensation Insurance (NCCI) на тарифы workers’ comp; письменные комментарии принимаются до 17:00 по восточному времени 10 ноября на ratehearings@floir.gov с темой письма «NCCI».',
        },
      ],
      extraSources: [NWS_KEY, NHC_TWO, OIR_NCCI],
    },
  },
};
