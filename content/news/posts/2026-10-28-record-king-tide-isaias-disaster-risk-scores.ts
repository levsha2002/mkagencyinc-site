import type { NewsEdition, NewsSource } from '../types';

// Edition for Wednesday, Oct. 28, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NOAA_VK: NewsSource = {
  name: 'NOAA Tides & Currents',
  date: '2026-10-27',
  url: 'https://tidesandcurrents.noaa.gov/waterlevels.html?id=8723214',
  title: 'Water levels, Virginia Key, FL (station 8723214), preliminary data',
};

const CBS_MIAMI: NewsSource = {
  name: 'CBS News Miami',
  date: '2026-10-27',
  url: 'https://www.cbsnews.com/miami/news/south-florida-king-tide-fort-lauderdale-miami-october-2026/',
  title: 'King tide flooding in South Florida could be worst so far as residents prepare for more surging water',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-28',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=mfl&wwa=all',
  title: 'Coastal Hazard Message, NWS Miami, 5:39 a.m. EDT Wed Oct 28, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-28',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 6:59 a.m. EDT Wed Oct 28, 2026',
};

const NWS_KEY: NewsSource = {
  name: 'National Weather Service Key West',
  date: '2026-10-28',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=key&wwa=all',
  title: 'Coastal Flood Warning, Florida Keys, 4:00 a.m. EDT Wed Oct 28, 2026',
};

const MDC_KING_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const FEMA_4955: NewsSource = {
  name: 'FEMA',
  date: '2026-10-27',
  url: 'https://www.fema.gov/disaster/4955',
  title: 'Florida Hurricane Isaias (DR-4955-FL)',
};

const WEAR: NewsSource = {
  name: 'WEAR News',
  date: '2026-10-27',
  url: 'https://weartv.com/news/local/trump-grants-major-disaster-declaration-for-florida-unlocking-federal-aid-after-isaias',
  title: 'Trump grants major disaster declaration for Florida, unlocking federal aid after Isaias',
};

const NORTHESCAMBIA: NewsSource = {
  name: 'NorthEscambia.com',
  date: '2026-10-28',
  url: 'https://www.northescambia.com/2026/10/disaster-declaration-approved-for-local-governments-individual-fema-aid-remains-under-review-2',
  title: 'Disaster Declaration Approved For Local Governments; Individual FEMA Aid Remains Under Review',
};

const OIR_ISAIAS: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-27',
  url: 'https://floir.gov/home/hurricane-isaias',
  title: 'Hurricane Isaias catastrophe claims data (data as of Oct. 27, 2026)',
};

const FL_AG: NewsSource = {
  name: 'Florida Attorney General',
  date: '2026-10-23',
  url: 'https://www.myfloridalegal.com/newsrelease/attorney-general-james-uthmeier-files-lawsuit-against-first-street-technology',
  title: 'Attorney General files lawsuit against a climate-risk data company',
};

const WLRN: NewsSource = {
  name: 'WLRN / Florida Phoenix',
  date: '2026-10-27',
  url: 'https://www.wlrn.org/government-politics/2026-10-27/uthmeier-property-risk-assessment-company-is-marketing-fear-to-advance-a-climate-activism-agenda',
  title: 'Florida sues property risk-assessment company',
};

const IJ_RISK: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-10-27',
  url: 'https://www.insurancejournal.com/news/southeast/2026/10/27/890449.htm',
  title: 'Florida AG sues climate modeler over home risk scores',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-28',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8 a.m. EDT Wed Oct 28, 2026',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://www.floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'National Council on Compensation Insurance 2026 Public Rate Hearing',
};

export const edition: NewsEdition = {
  slug: '2026-10-28-record-king-tide-isaias-disaster-risk-scores',
  datePublished: '2026-10-28',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 28, 2026: Tuesday’s king tide reaches near-record levels, a major disaster is declared for Hurricane Isaias, Isaias claims pass 62,000, and the state sues over online home risk scores',
      metaTitle: 'Insurance News Oct. 28, 2026: Near-Record Tide, Isaias | M&K',
      description:
        'Tuesday’s king tide hit near-record levels, a major disaster is declared for Isaias (public aid only), claims pass 62,000, and Florida sues over home risk scores.',
      ogAlt:
        'A house and a car in high water under a full moon with a tide gauge, a government building with a shield, a clipboard with a bar chart, and a house listing card with a magnifying glass',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: Tuesday’s king tide was one of the highest ever measured near Miami; the flood warning gives way to an advisory through Thursday',
          summary:
            'NOAA’s Virginia Key tide gauge near Miami peaked at about **2.54 feet above the normal high-tide line** around 10:20 a.m. Tuesday (preliminary data), which CBS News Miami reported is the third-highest level at that gauge since records began in 1994, while the Port Everglades gauge in Fort Lauderdale set a record of its own. For a second straight day, salt water covered streets and stalled cars, including on Collins Avenue in Miami Beach and in Fort Lauderdale neighborhoods where city officials said pumping doesn’t help while the tide is that high. The National Weather Service in Miami says the Coastal Flood Warning for coastal Miami-Dade and Broward ends at 8 p.m. tonight and is followed by a Coastal Flood Advisory for moderate flooding until 8 p.m. Thursday, with major flooding still possible at today’s high tide. In the Keys, the warning for major saltwater flooding now runs until 5 a.m. Thursday.',
          why: 'If your car sat in salt water, have it checked soon and report it to your insurer: flood damage to a car falls under comprehensive coverage ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)), and if you shop for a used car in the coming months, learn how to [spot a flood-damaged car](/en/blog/flood-damaged-used-car-florida). Flood damage to a home is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), which usually starts 30 days after purchase; Miami-Dade County lists the next king tide windows as Nov. 6–9 and Nov. 23–26.',
          sources: [NOAA_VK, CBS_MIAMI, NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY, MDC_KING_TIDES],
        },
        {
          headline:
            'Major disaster declared for Hurricane Isaias, but for now only public assistance in the Panhandle',
          summary:
            'FEMA lists a major disaster declaration for Florida dated **Oct. 27** (DR-4955-FL) for Hurricane Isaias, with an incident period of Oct. 6–12. So far it authorizes only Public Assistance, which reimburses state and local governments and certain nonprofits for emergency work and repairs to public facilities, in 15 Panhandle and Big Bend counties, including Escambia, Santa Rosa, Okaloosa, Walton and Bay. No county has been designated for Individual Assistance, the program that offers grants to households, and WEAR News reported that FEMA is still reviewing the state’s request for that help in eight counties. No South Florida county is part of the declaration.',
          why: 'Public Assistance is not paid to homeowners or businesses. If you or your family own property in the affected area, file with your home, flood or auto insurer now and keep every settlement or denial letter, because FEMA can’t pay for losses that insurance already covers. Our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) walks through the steps.',
          sources: [FEMA_4955, WEAR, NORTHESCAMBIA],
        },
        {
          headline: 'Isaias claims pass 62,000, and about 15,300 have closed without payment so far',
          summary:
            'The Office of Insurance Regulation’s latest data, as of Oct. 27, show **62,295 claims** from Hurricane Isaias, up from about 55,000 a week earlier, with estimated insured losses of about $652 million. Residential property makes up 52,133 claims, led by Santa Rosa (29,463) and Escambia (19,274) counties, and 39.5% of all claims are closed: 9,293 with payment and 15,342 without. Of the claims closed without payment, OIR lists 4,040 where the damage was below the deductible, 220 with no flood coverage and 9,837 for administrative reasons, such as a withdrawn or duplicate claim or no contact with the policyholder.',
          why: 'A claim closed without payment isn’t always a denial; many are paperwork. If your claim was closed and you didn’t expect it, ask your insurer for the reason in writing, answer the adjuster’s calls and messages, and know your hurricane deductible before the next storm. Florida’s insurance consumer helpline is 1-877-693-5236. See our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida).',
          sources: [OIR_ISAIAS],
        },
        {
          headline: 'Florida sues a climate-risk data company over flood scores shown on home listings',
          summary:
            'The Florida Attorney General filed suit on **Oct. 23** in Polk County state court against a company whose 1-to-10 scores for flood, wind, fire and heat risk have appeared on major real-estate websites, alleging violations of the Florida Deceptive and Unfair Trade Practices Act. According to the complaint, as reported by Florida Phoenix and WLRN, some properties get a high flood-risk score where FEMA maps show minimal flood hazard, owners can’t correct the score that buyers, lenders and insurers see, and homes with high scores sell more slowly. The state seeks civil penalties and clear disclosure that the scores are uncertain; these are allegations the court has not ruled on, and Insurance Journal noted that Nebraska filed a similar suit in August.',
          why: 'A score on a listing site is not your official flood zone. Before you buy, refinance or renew, check the property’s FEMA flood zone and ask your lender what it requires; even a low-risk zone can flood, as this week’s tides showed. Our [flood insurance page](/en/flood-insurance-homestead-fl) explains how zones and policies work, or [ask us](/en/quote).',
          sources: [FL_AG, WLRN, IJ_RISK],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Also this week',
          text: 'The National Hurricane Center does not expect any tropical cyclone to form in the next seven days (8 a.m. Wednesday outlook). The Office of Insurance Regulation held its public hearing on the workers’ comp rate filing from the National Council on Compensation Insurance (NCCI) on Tuesday; no decision has been posted yet, and written comments are accepted through 5 p.m. ET on Nov. 10 at ratehearings@floir.gov.',
        },
      ],
      extraSources: [NHC_TWO, OIR_NCCI],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 28 de octubre de 2026: la marea real del martes llega a niveles casi récord, declaran desastre mayor por el huracán Isaías, los reclamos por Isaías superan los 62,000 y el estado demanda por las puntuaciones de riesgo en anuncios de casas',
      metaTitle: 'Noticias de seguros 28/10/2026: marea casi récord, Isaías | M&K',
      description:
        'Marea real casi récord el martes, desastre mayor por Isaías (solo ayuda pública), más de 62,000 reclamos y demanda de Florida por puntuaciones de riesgo de viviendas.',
      ogAlt:
        'Una casa y un carro en agua alta bajo la luna llena junto a un medidor de marea, un edificio de gobierno con un escudo, un portapapeles con un gráfico de barras y la ficha de una casa en venta con una lupa',
      intro:
        'Cuatro novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline:
            'Actualización: la marea real del martes fue una de las más altas jamás medidas cerca de Miami; la advertencia por inundación pasa a aviso hasta el jueves',
          summary:
            'El medidor de marea de NOAA en Virginia Key, cerca de Miami, llegó a unos **2.54 pies por encima del nivel normal de la marea alta** hacia las 10:20 a.m. del martes (datos preliminares); según CBS News Miami, es el tercer nivel más alto en ese medidor desde que comenzaron los registros en 1994, y el medidor de Port Everglades, en Fort Lauderdale, marcó su propio récord. Por segundo día seguido el agua salada cubrió calles y dejó carros varados, entre otros lugares en Collins Avenue, en Miami Beach, y en barrios de Fort Lauderdale donde la ciudad explicó que bombear no sirve mientras la marea está tan alta. El Servicio Nacional de Meteorología (NWS) en Miami informa que la advertencia por inundación costera (Coastal Flood Warning) para la costa de Miami-Dade y Broward termina a las 8 p.m. de hoy y da paso a un aviso (Coastal Flood Advisory) por inundación moderada hasta las 8 p.m. del jueves; en la marea alta de hoy todavía es posible una inundación mayor. En los Cayos, la advertencia por inundación mayor con agua salada rige ahora hasta las 5 a.m. del jueves.',
          why: 'Si su carro estuvo en agua salada, hágalo revisar pronto y avise a su aseguradora: el daño por inundación en un carro entra en la cobertura comprensiva ([comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida)), y si piensa comprar un carro usado en los próximos meses, aprenda a [detectar un carro dañado por inundación](/es/blog/flood-damaged-used-car-florida). El daño por inundación en la casa solo lo cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, que normalmente empieza 30 días después de comprarla; el condado Miami-Dade indica que las próximas mareas reales serán del 6 al 9 y del 23 al 26 de noviembre.',
          sources: [NOAA_VK, CBS_MIAMI, NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY, MDC_KING_TIDES],
        },
        {
          headline:
            'Declaran desastre mayor por el huracán Isaías, pero por ahora solo con asistencia pública en el Panhandle',
          summary:
            'FEMA registra una declaración de desastre mayor para Florida con fecha del **27 de octubre** (DR-4955-FL) por el huracán Isaías, con un período del incidente del 6 al 12 de octubre. Por ahora solo autoriza Asistencia Pública, que reembolsa a gobiernos estatales y locales y a ciertas organizaciones sin fines de lucro por trabajos de emergencia y reparaciones de instalaciones públicas, en 15 condados del Panhandle y de la región Big Bend, entre ellos Escambia, Santa Rosa, Okaloosa, Walton y Bay. Ningún condado ha sido designado para Asistencia Individual, el programa que da subvenciones a los hogares, y WEAR News informó que FEMA sigue revisando la solicitud del estado de esa ayuda para ocho condados. Ningún condado del sur de Florida forma parte de la declaración.',
          why: 'La Asistencia Pública no se paga a propietarios ni a negocios. Si usted o su familia tienen propiedades en la zona afectada, presenten ya el reclamo a su seguro de vivienda, de inundación o de auto y guarden toda carta de pago o de rechazo, porque FEMA no puede pagar pérdidas que ya cubre un seguro. Nuestra [lista para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida) explica los pasos.',
          sources: [FEMA_4955, WEAR, NORTHESCAMBIA],
        },
        {
          headline: 'Los reclamos por Isaías superan los 62,000 y unos 15,300 se han cerrado sin pago hasta ahora',
          summary:
            'Los datos más recientes de la Oficina de Regulación de Seguros (OIR), al 27 de octubre, muestran **62,295 reclamos** por el huracán Isaías, frente a unos 55,000 una semana antes, con pérdidas aseguradas estimadas de unos $652 millones. La propiedad residencial suma 52,133 reclamos, encabezados por los condados Santa Rosa (29,463) y Escambia (19,274), y el 39.5% de todos los reclamos está cerrado: 9,293 con pago y 15,342 sin pago. Entre los cerrados sin pago, la OIR cuenta 4,040 en los que el daño no superaba el deducible, 220 sin cobertura de inundación y 9,837 por motivos administrativos, como un reclamo retirado o duplicado o la falta de contacto con el asegurado.',
          why: 'Un reclamo cerrado sin pago no siempre es un rechazo; muchos son trámites. Si cerraron su reclamo y no lo esperaba, pida a su aseguradora el motivo por escrito, conteste las llamadas y mensajes del ajustador y conozca su deducible por huracán antes de la próxima tormenta. La línea de ayuda al consumidor de seguros de Florida es 1-877-693-5236. Vea nuestra [guía de plazos para reclamos por huracán](/es/blog/hurricane-claim-timeline-florida).',
          sources: [OIR_ISAIAS],
        },
        {
          headline: 'Florida demanda a una empresa de datos de riesgo climático por las puntuaciones de inundación en anuncios de casas',
          summary:
            'La Fiscalía General de Florida presentó el **23 de octubre** una demanda en un tribunal estatal del condado Polk contra una empresa cuyas puntuaciones del 1 al 10 de riesgo de inundación, viento, incendio y calor han aparecido en grandes sitios web de bienes raíces, por presuntas violaciones de la Ley de Prácticas Comerciales Engañosas y Desleales de Florida. Según la demanda, tal como la reportaron Florida Phoenix y WLRN, algunas propiedades reciben una puntuación alta de riesgo de inundación donde los mapas de FEMA muestran un riesgo mínimo, los dueños no pueden corregir la puntuación que ven compradores, prestamistas y aseguradoras, y las casas con puntuaciones altas tardan más en venderse. El estado pide sanciones civiles y que se aclare que las puntuaciones son inciertas; son acusaciones sobre las que el tribunal aún no ha decidido, e Insurance Journal señaló que Nebraska presentó una demanda similar en agosto.',
          why: 'Una puntuación en un sitio de anuncios no es su zona de inundación oficial. Antes de comprar, refinanciar o renovar, verifique la zona de inundación de FEMA de la propiedad y pregunte a su prestamista qué exige; incluso una zona de bajo riesgo puede inundarse, como mostraron las mareas de esta semana. Nuestra [página de seguro de inundación](/es/flood-insurance-homestead-fl) explica cómo funcionan las zonas y las pólizas, o [consúltenos](/es/quote).',
          sources: [FL_AG, WLRN, IJ_RISK],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'También esta semana',
          text: 'El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en los próximos siete días (pronóstico de las 8 a.m. del miércoles). La Oficina de Regulación de Seguros celebró el martes su audiencia pública sobre la solicitud de tarifas de compensación laboral (workers’ comp) del Consejo Nacional de Seguros de Compensación (NCCI); todavía no se ha publicado una decisión, y se aceptan comentarios por escrito hasta las 5 p.m. ET del 10 de noviembre en ratehearings@floir.gov.',
        },
      ],
      extraSources: [NHC_TWO, OIR_NCCI],
    },
    ru: {
      title:
        'Страховые новости Флориды, 28 октября 2026: прилив во вторник почти побил рекорды, по урагану Isaias объявлено крупное стихийное бедствие, страховых случаев по Isaias больше 62 000, а штат подал в суд из-за оценок риска в объявлениях о продаже домов',
      metaTitle: 'Страховые новости 28.10.2026: высокий прилив, Isaias | M&K',
      description:
        'Почти рекордный king tide во вторник, крупное бедствие по Isaias (пока только помощь властям), более 62 000 страховых случаев и иск Флориды из-за оценок риска домов.',
      ogAlt:
        'Дом и машина в высокой воде под полной луной рядом с футштоком, здание госучреждения со щитом, планшет со столбчатой диаграммой и карточка дома на продажу с лупой',
      intro:
        'Четыре новости для владельцев жилья, водителей и малого бизнеса Южной Флориды. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: прилив во вторник стал одним из самых высоких за всю историю измерений у Майами; штормовое предупреждение о подтоплении сменяется рекомендацией до четверга',
          summary:
            'Мареограф NOAA на Virginia Key у Майами во вторник около 10:20 утра показал примерно **2,54 фута выше обычного уровня полной воды** (предварительные данные). По данным CBS News Miami, это третий по высоте уровень на этом посту с начала наблюдений в 1994 году, а мареограф Port Everglades в Форт-Лодердейле установил собственный рекорд. Второй день подряд солёная вода заливала улицы и глушила машины, в том числе на Collins Avenue в Майами-Бич и в районах Форт-Лодердейла, где городские власти объяснили, что откачка не помогает, пока прилив так высок. Национальная метеослужба (NWS) в Майами сообщает, что предупреждение о прибрежном подтоплении (Coastal Flood Warning) для побережья Майами-Дейд и Броварда заканчивается сегодня в 20:00, после чего до 20:00 четверга действует рекомендация (Coastal Flood Advisory) из-за умеренного подтопления; во время сегодняшней полной воды сильное подтопление всё ещё возможно. На Keys предупреждение о сильном подтоплении солёной водой продлено до 5:00 четверга.',
          why: 'Если ваша машина стояла в солёной воде, проверьте её как можно скорее и сообщите страховой: ущерб машине от наводнения покрывает comprehensive ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)), а если в ближайшие месяцы будете покупать подержанную машину, узнайте, [как распознать машину после наводнения](/ru/blog/flood-damaged-used-car-florida). Ущерб дому от наводнения покрывает только отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), который обычно начинает действовать через 30 дней после покупки; по данным округа Майами-Дейд, следующие king tides ожидаются 6–9 и 23–26 ноября.',
          sources: [NOAA_VK, CBS_MIAMI, NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY, MDC_KING_TIDES],
        },
        {
          headline:
            'По урагану Isaias объявлено крупное стихийное бедствие, но пока только с помощью властям на северо-западе штата',
          summary:
            'В базе FEMA значится декларация о крупном стихийном бедствии во Флориде от **27 октября** (DR-4955-FL) по урагану Isaias с периодом инцидента 6–12 октября. Пока она разрешает только Public Assistance — возмещение властям штата и округов и некоторым некоммерческим организациям расходов на аварийные работы и ремонт общественных объектов — в 15 округах Панхэндла и региона Big Bend, включая Escambia, Santa Rosa, Okaloosa, Walton и Bay. Ни один округ пока не включён в Individual Assistance — программу грантов для домохозяйств, и, по данным WEAR News, FEMA всё ещё рассматривает запрос штата о такой помощи для восьми округов. Округа Южной Флориды в декларацию не входят.',
          why: 'Public Assistance не выплачивается владельцам домов и бизнесу. Если у вас или ваших родных есть недвижимость в пострадавшем районе, подавайте заявление в свою страховую по дому, наводнению или авто уже сейчас и сохраняйте все письма о выплате или отказе: FEMA не может оплачивать убытки, которые уже покрывает страховка. Шаги описаны в нашем [чек-листе по страховому случаю после урагана](/ru/blog/hurricane-claim-checklist-florida).',
          sources: [FEMA_4955, WEAR, NORTHESCAMBIA],
        },
        {
          headline: 'Страховых случаев по Isaias больше 62 000, около 15 300 уже закрыты без выплаты',
          summary:
            'По последним данным Управления страхового регулирования Флориды (OIR) на 27 октября, по урагану Isaias заявлено **62 295 страховых случаев** — неделей раньше их было около 55 000, — а оценочные застрахованные убытки составляют около $652 млн. На жилую недвижимость приходится 52 133 случая, больше всего в округах Santa Rosa (29 463) и Escambia (19 274); закрыто 39,5% всех случаев: 9 293 с выплатой и 15 342 без неё. Среди закрытых без выплаты OIR называет 4 040 случаев, где ущерб не превысил франшизу, 220 — без покрытия от наводнения и 9 837 — по административным причинам, например заявление отозвано, продублировано или с владельцем полиса не удалось связаться.',
          why: 'Случай, закрытый без выплаты, — не всегда отказ: часто это формальности. Если ваш случай закрыли неожиданно, попросите страховую письменно указать причину, отвечайте на звонки и сообщения аджастера и заранее узнайте свою ураганную франшизу до следующего шторма. Телефон помощи потребителям страховых услуг Флориды: 1-877-693-5236. См. наш материал о [сроках по страховым случаям после урагана](/ru/blog/hurricane-claim-timeline-florida).',
          sources: [OIR_ISAIAS],
        },
        {
          headline: 'Флорида подала в суд на компанию климатических данных из-за оценок риска наводнения в объявлениях о продаже домов',
          summary:
            'Генеральный прокурор Флориды **23 октября** подал иск в суд штата в округе Polk против компании, чьи оценки риска наводнения, ветра, пожаров и жары по шкале от 1 до 10 появлялись на крупных сайтах недвижимости, обвиняя её в нарушении закона Флориды о недобросовестной и вводящей в заблуждение торговой практике. Согласно иску, как его пересказывают Florida Phoenix и WLRN, некоторые объекты получают высокую оценку риска наводнения там, где карты FEMA показывают минимальную опасность, владельцы не могут исправить оценку, которую видят покупатели, кредиторы и страховщики, а дома с высокими оценками продаются медленнее. Штат требует гражданских штрафов и ясного указания на то, что оценки неточны; это обвинения, по которым суд ещё не вынес решения, а Insurance Journal отмечает, что в августе похожий иск подала Небраска.',
          why: 'Оценка на сайте объявлений — это не официальная зона затопления. Перед покупкой, рефинансированием или продлением полиса проверьте зону FEMA для конкретного адреса и уточните требования своего кредитора; даже зона низкого риска может затопить, что и показали приливы этой недели. Как устроены зоны и полисы, рассказано на нашей [странице о страховании от наводнения](/ru/flood-insurance-homestead-fl), или [спросите нас](/ru/quote).',
          sources: [FL_AG, WLRN, IJ_RISK],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Также на этой неделе',
          text: 'Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней (прогноз на 8:00 среды). Во вторник Управление страхового регулирования провело публичные слушания по заявке Национального совета по страхованию компенсаций работникам (NCCI) о тарифах workers’ comp; решение пока не опубликовано, письменные комментарии принимаются до 17:00 ET 10 ноября по адресу ratehearings@floir.gov.',
        },
      ],
      extraSources: [NHC_TWO, OIR_NCCI],
    },
  },
};
