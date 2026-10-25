import type { NewsEdition, NewsSource } from '../types';

// Edition for Sunday, Oct. 25, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-25',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=mfl&wwa=all',
  title: 'Coastal Hazard Message, NWS Miami, 7:43 a.m. EDT Sun Oct 25, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-25',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, Sun Oct 25, 2026',
};

const NWS_KEY: NewsSource = {
  name: 'National Weather Service Key West',
  date: '2026-10-25',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=key&wwa=all',
  title: 'Coastal Flood Warning, Monroe Upper Keys, 4:00 a.m. EDT Sun Oct 25, 2026',
};

const MDC_TAX: NewsSource = {
  name: 'Miami-Dade County Office of the Tax Collector',
  date: '2026-10-25',
  url: 'https://www.mdctaxcollector.gov/services/real-estate-tax-payments',
  title: 'Real Estate Taxes: 2026 annual tax notices',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (updated 03.26.2026)',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-25',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8 a.m. EDT Sun Oct 25, 2026',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/20/media-advisory-national-council-on-compensation-insurance-public-rate-hearing',
  title: 'Media Advisory: National Council on Compensation Insurance Public Rate Hearing',
};

const OIR_CRF: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-23',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/23/notice-to-industry-hurricane-isaias-catastrophe-reporting',
  title: 'Notice to Industry: Hurricane Isaias Catastrophe Reporting',
};

export const edition: NewsEdition = {
  slug: '2026-10-25-coastal-flood-warning-tax-bills-citizens-takeout',
  datePublished: '2026-10-25',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 25, 2026: A Coastal Flood Warning for Miami-Dade and Broward on Monday and Tuesday, Miami-Dade property tax bills arrive Oct. 30, and the next Citizens takeout dates',
      metaTitle: 'Insurance News Oct. 25, 2026: Coastal Flood Warning | M&K',
      description:
        'Coastal Flood Warning for Miami-Dade and Broward Monday–Tuesday, 2026 Miami-Dade tax bills on Oct. 30, and Citizens takeout letters and deadlines.',
      ogAlt:
        'A house and a car beside rising water under a full moon with wind-bent palms, an envelope with a property tax bill and a house symbol, and a calendar with a checked date',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Watch upgraded to a Coastal Flood Warning: major tidal flooding possible in coastal Miami-Dade and Broward on Monday and Tuesday',
          summary:
            'On Sunday morning the National Weather Service in Miami upgraded Saturday’s watch to a **Coastal Flood Warning** for coastal Miami-Dade, Broward and Palm Beach, in effect from 2 a.m. Monday to 8 p.m. Tuesday; the current advisory runs until 2 a.m. Monday. Moderate flooding is expected around each high tide, reaching major flood stage on Monday and Tuesday, and forecasters say numerous roads may close and low-lying homes, businesses and some critical infrastructure will be flooded; advisories will likely be needed through much of the week after the king-tide peak. Northeast winds of 20 to 25 mph with gusts of 30 to 35 mph (occasionally near 40) are likely, a Wind Advisory for the immediate coast is possible Monday night into Tuesday, and showers today could cause isolated flash flooding in the east coast metro areas. In the Upper Keys, the warning for major saltwater flooding is in effect until 5 a.m. Monday.',
          why: 'Move cars to higher ground or a garage above street level before Monday’s high tides, and never drive through water of unknown depth: salt water can ruin a car, and that damage falls under comprehensive coverage ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Bring in or tie down patio furniture, bins and other loose items before the gusts. Damage to a home from rising water is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), so take dated photos of any damage and see our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY],
        },
        {
          headline: 'Miami-Dade’s 2026 property tax bills go out Friday, Oct. 30',
          summary:
            'The Miami-Dade County Tax Collector says the 2026 annual tax notices will be mailed on Oct. 30, 2026, the same day they are emailed to BillExpress subscribers and become available to view and pay online. Under Florida law, if 2026 real estate taxes are not paid before June 1, 2027, a tax certificate may be issued on the property, which can eventually lead to its loss; the annual certificate sale begins June 1, 2027. The office can be reached at (305) 375-5448.',
          why: 'If your mortgage payment includes escrow, your lender pays both the tax bill and your homeowners insurance from that account, so a change in either one can change your monthly payment; check your next escrow statement. If you own your home outright or own business property, you pay the bill yourself, and it is a good moment to confirm your insurance renewal date as well. Questions about your homestead exemption or assessed value go to the Miami-Dade Property Appraiser, and you can [ask us to review your coverage](/en/quote).',
          sources: [MDC_TAX],
        },
        {
          headline:
            'Citizens takeout: Nov. 5 choice deadline for the Nov. 17 round, and new letters due Oct. 28 for the Dec. 15 round',
          summary:
            'Under Citizens Property Insurance’s 2026 personal-lines depopulation calendar, policyholders whose policies were selected for the Nov. 17 assumption received choice letters around Sept. 28 and have until **Thursday, Nov. 5** to register their choice. The next round starts Wednesday, Oct. 28, when Citizens sends choice letters for the Dec. 15 assumption, with a choice deadline of Dec. 4. If no choice is registered by the deadline, Citizens assigns the policy to one of the takeout companies that selected it, and to the one with the lowest estimated premium if more than one did. The packets include coverage worksheets and estimated premiums for Citizens and for each offer.',
          why: 'If a letter from Citizens arrives, don’t set it aside: compare the coverage, deductibles and the company behind each offer, not only the premium, and register your choice yourself or through your agent before the deadline. Our guide to [Citizens and working with a local agent](/en/blog/citizens-property-insurance-local-agent) and our explainer on the [Citizens takeout offer](/en/blog/citizens-takeout-offer) walk through the steps.',
          sources: [CITIZENS_CAL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Also this week',
          text: 'The National Hurricane Center does not expect any tropical cyclone to form in the next seven days (8 a.m. Sunday outlook). On Tuesday, Oct. 27, property insurers must file their next Hurricane Isaias claims report with the Office of Insurance Regulation by noon ET, and at 10 a.m. ET the office holds a virtual public hearing on the workers’ comp rate filing from the National Council on Compensation Insurance (NCCI); written comments are accepted through 5 p.m. ET on Nov. 10 at ratehearings@floir.gov, subject “NCCI”.',
        },
      ],
      extraSources: [NHC_TWO, OIR_CRF, OIR_NCCI],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 25 de octubre de 2026: advertencia por inundación costera en Miami-Dade y Broward el lunes y el martes, las facturas del impuesto a la propiedad de Miami-Dade llegan el 30 de octubre y las próximas fechas de Citizens',
      metaTitle: 'Noticias de seguros 25/10/2026: inundación costera | M&K',
      description:
        'Advertencia por inundación costera en Miami-Dade y Broward lunes y martes, facturas de impuestos de Miami-Dade el 30 de octubre y fechas de Citizens.',
      ogAlt:
        'Una casa y un carro junto al agua que sube bajo la luna llena con palmas dobladas por el viento, un sobre con una factura de impuestos y el dibujo de una casa, y un calendario con una fecha marcada',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada noticia está resumida con nuestras propias palabras, con enlace a la fuente original.',
      items: [
        {
          headline:
            'La vigilancia pasa a advertencia por inundación costera: posible inundación mayor por marea en la costa de Miami-Dade y Broward el lunes y el martes',
          summary:
            'El domingo por la mañana, el Servicio Nacional de Meteorología (NWS) en Miami convirtió la vigilancia del sábado en una **advertencia por inundación costera (Coastal Flood Warning)** para la costa de Miami-Dade, Broward y Palm Beach, vigente desde las 2 a.m. del lunes hasta las 8 p.m. del martes; el aviso actual sigue hasta las 2 a.m. del lunes. Se espera inundación moderada en cada marea alta, que llegaría a nivel de inundación mayor el lunes y el martes; muchas calles podrían cerrarse y viviendas, negocios y parte de la infraestructura crítica en zonas bajas quedarán bajo el agua, y probablemente harán falta avisos durante buena parte de la semana después del pico de las mareas reales (king tides). Se prevén vientos del noreste de 20 a 25 mph con ráfagas de 30 a 35 mph (en ocasiones cerca de 40), es posible un aviso por viento en la franja costera entre la noche del lunes y el martes, y los aguaceros de hoy podrían causar inundaciones repentinas aisladas en las zonas urbanas de la costa este. En los Cayos Superiores, la advertencia por inundación mayor con agua salada sigue vigente hasta las 5 a.m. del lunes.',
          why: 'Antes de las mareas altas del lunes, lleve el carro a un lugar alto o a un garaje por encima del nivel de la calle, y nunca maneje por agua de profundidad desconocida: el agua salada puede arruinar un vehículo, y ese daño lo cubre la cobertura comprensiva ([comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida)). Guarde o amarre los muebles del patio, los botes de basura y otros objetos sueltos antes de las ráfagas. El daño a la vivienda por el agua que sube solo lo cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte; tome fotos con fecha de cualquier daño y consulte nuestra [guía de mareas reales](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY],
        },
        {
          headline: 'Las facturas del impuesto a la propiedad 2026 de Miami-Dade salen el viernes 30 de octubre',
          summary:
            'La Oficina del Recaudador de Impuestos (Tax Collector) del Condado Miami-Dade informa que los avisos anuales de impuestos de 2026 se enviarán por correo el 30 de octubre de 2026, el mismo día en que llegarán por email a los suscriptores de BillExpress y podrán consultarse y pagarse en línea. Según la ley de Florida, si los impuestos inmobiliarios de 2026 no se pagan antes del 1 de junio de 2027, se puede emitir un certificado fiscal sobre la propiedad, lo que con el tiempo puede llevar a perderla; la venta anual de certificados comienza el 1 de junio de 2027. El teléfono de la oficina es el (305) 375-5448.',
          why: 'Si su pago de hipoteca incluye una cuenta de depósito (escrow), el banco paga con ella tanto los impuestos como el seguro de vivienda, así que un cambio en cualquiera de los dos puede cambiar su pago mensual; revise su próximo estado de escrow. Si su casa está pagada o tiene una propiedad comercial, usted paga la factura directamente, y es buen momento para confirmar también la fecha de renovación de su seguro. Las preguntas sobre la exención de homestead o el valor tasado se dirigen al Tasador de Propiedades de Miami-Dade, y puede [pedirnos que revisemos su cobertura](/es/quote).',
          sources: [MDC_TAX],
        },
        {
          headline:
            'Citizens: plazo del 5 de noviembre para la ronda del 17 de noviembre y nuevas cartas el 28 de octubre para la del 15 de diciembre',
          summary:
            'Según el calendario de despoblación de líneas personales 2026 de Citizens Property Insurance, los asegurados cuyas pólizas fueron seleccionadas para la asunción del 17 de noviembre recibieron cartas de elección hacia el 28 de septiembre y tienen hasta el **jueves 5 de noviembre** para registrar su decisión. La siguiente ronda empieza el miércoles 28 de octubre, cuando Citizens envía las cartas de elección para la asunción del 15 de diciembre, con plazo hasta el 4 de diciembre. Si no se registra ninguna decisión a tiempo, Citizens asigna la póliza a una de las compañías que la seleccionaron (takeout), y si fueron varias, a la de menor prima estimada. Los paquetes incluyen hojas de cobertura y primas estimadas de Citizens y de cada oferta.',
          why: 'Si le llega una carta de Citizens, no la deje para después: compare la cobertura, los deducibles y la compañía detrás de cada oferta, no solo la prima, y registre su decisión usted mismo o por medio de su agente antes del plazo. Nuestra guía sobre [Citizens y cómo trabajar con un agente local](/es/blog/citizens-property-insurance-local-agent) explica los pasos.',
          sources: [CITIZENS_CAL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'También esta semana',
          text: 'El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en los próximos siete días (perspectiva de las 8 a.m. del domingo). El martes 27 de octubre, las aseguradoras de propiedad deben presentar a la Oficina de Regulación de Seguros (OIR) su próximo informe de reclamos del huracán Isaías antes del mediodía (hora del Este), y a las 10 a.m. la OIR celebra una audiencia pública virtual sobre la solicitud de tarifas de compensación laboral (workers’ comp) del National Council on Compensation Insurance (NCCI); se aceptan comentarios por escrito hasta las 5 p.m. (hora del Este) del 10 de noviembre en ratehearings@floir.gov, con el asunto “NCCI”.',
        },
      ],
      extraSources: [NHC_TWO, OIR_CRF, OIR_NCCI],
    },
    ru: {
      title:
        'Страховые новости Флориды, 25 октября 2026: предупреждение о прибрежном подтоплении в Miami-Dade и Broward на понедельник и вторник, налоговые счета Miami-Dade придут 30 октября, и ближайшие сроки по передаче полисов Citizens',
      metaTitle: 'Страховые новости 25.10.2026: прибрежное подтопление | M&K',
      description:
        'Предупреждение о подтоплении в Miami-Dade и Broward в пн–вт, налоговые счета Miami-Dade 30 октября и сроки по передаче полисов Citizens.',
      ogAlt:
        'Дом и машина у поднимающейся воды под полной луной и пальмы, согнутые ветром, конверт с налоговым счётом и значком дома, календарь с отмеченной датой',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Оповещение сменилось предупреждением: в понедельник и вторник на побережье Miami-Dade и Broward возможно сильное приливное подтопление',
          summary:
            'В воскресенье утром Национальная метеослужба (NWS) в Майами повысила субботнее оповещение до **предупреждения о прибрежном подтоплении (Coastal Flood Warning)** для побережья Miami-Dade, Broward и Palm Beach: оно действует с 2:00 понедельника до 20:00 вторника, а нынешняя рекомендация (advisory) — до 2:00 понедельника. В каждый прилив ожидается умеренное подтопление, а в понедельник и вторник вода может достичь уровня сильного подтопления: многие дороги могут закрыть, дома, предприятия и часть важной инфраструктуры в низинах окажутся под водой, а после пика king tide рекомендации, скорее всего, понадобятся почти всю неделю. Ожидается северо-восточный ветер 20–25 миль/ч с порывами 30–35 миль/ч (иногда около 40); в ночь на вторник и во вторник для самой прибрежной полосы возможна рекомендация по ветру (Wind Advisory), а сегодняшние ливни могут вызвать локальные внезапные подтопления в городах восточного побережья. В Верхних Кис предупреждение о сильном подтоплении солёной водой действует до 5:00 понедельника.',
          why: 'До понедельничных приливов переставьте машину повыше или в гараж выше уровня улицы и никогда не въезжайте в воду неизвестной глубины: солёная вода может погубить машину, а такой ущерб покрывает comprehensive ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). До порывов ветра уберите или закрепите садовую мебель, мусорные баки и другие незакреплённые вещи. Ущерб дому от поднимающейся воды покрывает только отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), поэтому фотографируйте любые повреждения с датой и загляните в наш [материал о king tides](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY],
        },
        {
          headline: 'Счета Miami-Dade по налогу на недвижимость за 2026 год придут в пятницу, 30 октября',
          summary:
            'Налоговое управление округа Miami-Dade (Tax Collector) сообщает, что ежегодные налоговые уведомления за 2026 год будут разосланы по почте 30 октября 2026 года; в тот же день они придут по email подписчикам BillExpress, и их можно будет посмотреть и оплатить онлайн. По закону Флориды, если налог на недвижимость за 2026 год не оплачен до 1 июня 2027 года, на объект может быть выпущен налоговый сертификат, что со временем может привести к потере недвижимости; ежегодная продажа сертификатов начинается 1 июня 2027 года. Телефон управления — (305) 375-5448.',
          why: 'Если в ваш ипотечный платёж входит escrow, банк оплачивает с этого счёта и налог, и страховку дома, поэтому изменение любого из них может изменить ежемесячный платёж — посмотрите следующую выписку по escrow. Если дом у вас без ипотеки или у вас коммерческая недвижимость, счёт вы оплачиваете сами — заодно уточните и дату продления страховки. Вопросы об освобождении homestead или оценочной стоимости — к оценщику недвижимости Miami-Dade (Property Appraiser), а [проверить страховое покрытие можно у нас](/ru/quote).',
          sources: [MDC_TAX],
        },
        {
          headline:
            'Citizens: до 5 ноября нужно сделать выбор в раунде 17 ноября, а 28 октября придут письма по раунду 15 декабря',
          summary:
            'По календарю передачи полисов Citizens Property Insurance на 2026 год (personal lines), владельцы полисов, отобранных для передачи 17 ноября, получили письма с выбором около 28 сентября, и зарегистрировать решение нужно до **четверга, 5 ноября**. Следующий раунд начинается в среду, 28 октября: Citizens разошлёт письма по передаче 15 декабря, срок выбора — 4 декабря. Если до срока решение не зарегистрировано, Citizens передаёт полис одной из компаний (takeout), которые его выбрали, а если таких несколько — той, у которой расчётная премия ниже. В пакет документов входят сравнительные таблицы покрытия и расчётные премии Citizens и каждого предложения.',
          why: 'Если пришло письмо от Citizens, не откладывайте его: сравните покрытие, франшизы и саму компанию в каждом предложении, а не только премию, и зарегистрируйте выбор сами или через своего агента до срока. Пошагово об этом — в нашем материале о [Citizens и работе с местным агентом](/ru/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_CAL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Также на этой неделе',
          text: 'Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней (прогноз на 8:00 воскресенья). Во вторник, 27 октября, страховщики имущества должны до 12:00 по восточному времени сдать в Управление по регулированию страхования (OIR) очередной отчёт о претензиях по урагану Isaias, а в 10:00 OIR проведёт виртуальные публичные слушания по заявке National Council on Compensation Insurance (NCCI) на тарифы workers’ comp; письменные комментарии принимаются до 17:00 по восточному времени 10 ноября на ratehearings@floir.gov с темой письма «NCCI».',
        },
      ],
      extraSources: [NHC_TWO, OIR_CRF, OIR_NCCI],
    },
  },
};
