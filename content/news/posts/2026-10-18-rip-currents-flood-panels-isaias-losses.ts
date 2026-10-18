import type { NewsEdition, NewsSource } from '../types';

// Edition for Sunday, Oct. 18, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-18',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Atlantic Tropical Weather Outlook, 8 a.m. EDT Sun Oct 18, 2026',
};

const NWS_MFL_WWA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-18',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=mfl&wwa=all',
  title: 'Watches, Warnings & Advisories issued by NWS Miami',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-18',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, Oct. 18, 2026',
};

const CBS_MIAMI_RAIN: NewsSource = {
  name: 'CBS News Miami',
  date: '2026-10-17',
  url: 'https://www.cbsnews.com/miami/news/next-weather-alert-south-florida-rain-10-17-2026/',
  title: 'South Florida under a NEXT Weather Alert Saturday evening for heavy rain',
};

const HERALD_FLOOD_PANELS: NewsSource = {
  name: 'Miami Herald via WUSF',
  date: '2026-10-17',
  url: 'https://www.wusf.org/environment/2026-10-17/florida-homes-face-growing-flood-risk-why-are-some-protections-off-limits',
  title: 'Florida homes face growing flood risk. Why are some protections off-limits?',
};

const FLOODSMART_MINIMIZE: NewsSource = {
  name: 'FEMA National Flood Insurance Program (FloodSmart)',
  date: '2026-10-18',
  url: 'https://www.floodsmart.gov/prepare/minimize-damage',
  title: 'Minimize Flood Damage',
};

const FLOODSMART_LOSS_AVOIDANCE: NewsSource = {
  name: 'FEMA National Flood Insurance Program (FloodSmart for Agents)',
  date: '2026-10-18',
  url: 'https://agents.floodsmart.gov/topics/flood-loss-avoidance',
  title: 'Flood Loss Avoidance',
};

const IJ_ISAIAS_LOSSES: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-10-15',
  url: 'https://www.insurancejournal.com/news/southeast/2026/10/15/889051.htm',
  title: 'Isaias insured-loss estimate and rating-agency view',
};

const MOODYS_RMS: NewsSource = {
  name: 'Moody’s RMS Event Response',
  date: '2026-10-16',
  url: 'https://www.moodys.com/web/en/us/insights/insurance/moodys-rms-event-response-estimates-insured-losses-from-hurricane-isaias.html',
  title: 'Insured-loss estimate for Hurricane Isaias',
};

const OIR_CAT: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-18',
  url: 'https://www.floir.gov/tools-and-data/catastrophe-reporting',
  title: 'Catastrophe Reporting',
};

const FDOT_CALENDAR: NewsSource = {
  name: 'Florida Department of Transportation',
  date: '2026-10-18',
  url: 'https://www.fdot.gov/Safety/campaigncalendar.shtm',
  title: 'Safety Campaign Calendar',
};

const FLHSMV_TEEN: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-10-18',
  url: 'https://www.flhsmv.gov/safety-center/driving-safety/teen-drivers/',
  title: 'Teen Drivers',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (Agent)',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-18',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'National Council on Compensation Insurance Public Rate Hearing 2026',
};

const FEMA_DECLARATIONS: NewsSource = {
  name: 'Federal Emergency Management Agency',
  date: '2026-10-18',
  url: 'https://www.fema.gov/disaster/declarations',
  title: 'Disasters and Other Declarations',
};

const MIAMI_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

export const edition: NewsEdition = {
  slug: '2026-10-18-rip-currents-flood-panels-isaias-losses',
  datePublished: '2026-10-18',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 18, 2026: Rough surf and a coastal low, flood-panel rules for homes, and new Isaias loss estimates',
      metaTitle: 'Insurance News Oct. 18, 2026: Rip Currents, Flood Panels | M&K Agency',
      description:
        'Today: high rip-current risk on South Florida beaches through Thursday, why Miami-Dade won’t permit flood panels on homes in flood zones, new Isaias loss estimates, and Teen Driver Safety Week.',
      ogAlt:
        'A beach warning flag over rough waves, a house with a temporary flood barrier at the door, and a rising bar chart',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners after a stormy weekend. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Rough week on the coast: high rip-current risk on all South Florida Atlantic beaches through Thursday, and NHC is watching a coastal low',
          summary:
            'A cold front pushed bands of heavy rain over the east-coast metro areas Saturday night into Sunday; the National Weather Service in Miami said some spots along the Broward and Palm Beach coasts picked up 3 to 5 inches in one to two hours overnight. Behind the front, gusty northeast winds bring a high rip-current risk to the Atlantic beaches of Palm Beach, Broward and Miami-Dade through Thursday evening, high-surf advisories for Palm Beach (through Wednesday morning) and Broward (Monday afternoon to Tuesday evening), and a small craft advisory for Biscayne Bay and nearby coastal waters through 8 p.m. Wednesday. Separately, the National Hurricane Center’s 8 a.m. Sunday outlook expects a storm-force, non-tropical low to form off the Southeast U.S. coast later today or tonight, with a 30% chance of subtropical development over seven days (near 0% in 48 hours) and high winds, coastal flooding and dangerous surf for parts of the East Coast either way.',
          why: 'Don’t drive through flooded streets: flood damage to your own car is generally a comprehensive-coverage claim, and liability-only policies don’t pay for it. Boat owners should check lines and fenders this week, and if water gets into your home or business, photograph it before you clean up.',
          sources: [NWS_MFL_WWA, NWS_MFL_AFD, NHC_TWO, CBS_MIAMI_RAIN],
        },
        {
          headline:
            'Flood panels vs. temporary barriers: Miami-Dade won’t permit permanent panels on homes in flood zones',
          summary:
            'A Miami Herald report published Oct. 17 explains why many South Florida homeowners can’t simply bolt flood panels onto their houses: permanently attached barriers count as “dry floodproofing,” which federal flood-insurance rules and the Florida Building Code generally don’t allow for single-family homes in flood zones, and Miami-Dade County told the paper it doesn’t issue residential flood-panel permits in flood zones. A floodplain consultant quoted in the story warned that installing panels without a permit can cause code problems and complicate a flood claim, while temporary products such as inflatable dams, removable door barriers and sandbags are generally treated differently. Commercial buildings are a separate case: permitted, certified flood panels are allowed there. FEMA’s National Flood Insurance Program also says policyholders facing an imminent flood can be reimbursed up to $1,000 for loss-avoidance supplies and labor (sandbags, pumps, lumber, plastic sheeting) and up to $1,000 for moving insured property out of harm’s way, if they keep receipts and a record of the time spent.',
          why: 'Before you buy a flood barrier, ask your city or county building department what is allowed at your address. If you have an NFIP policy, keep receipts for sandbags or pumps bought ahead of a flood. Our [king tides and flood insurance guide](/en/blog/king-tides-flood-insurance-miami-dade) covers the basics.',
          sources: [HERALD_FLOOD_PANELS, FLOODSMART_LOSS_AVOIDANCE, FLOODSMART_MINIMIZE],
        },
        {
          headline:
            'Update: New Isaias loss estimates cluster around $3 billion; Citizens reports about 860 claims',
          summary:
            'Two catastrophe-modeling firms published new insured-loss estimates for Hurricane Isaias after our last update: one put privately insured wind and storm-surge losses at about $3 billion (Oct. 15, not counting NFIP flood claims), and another estimated $2.5 billion to $4.5 billion, with a best estimate of $3.5 billion (Oct. 16), including roughly $250 million from surge, inland flooding and NFIP losses. A major insurance rating agency called Isaias an “earnings event” for insurers rather than a threat to their capital. Citizens Property Insurance held about 8,800 policies in the 10-county Panhandle area at landfall and had received about 860 claims by Oct. 15, mostly residential, Insurance Journal reported, citing OIR data and a Citizens spokesman. These are model estimates: as of Sunday morning, OIR’s public catastrophe-reporting page still showed no official statewide Isaias claim totals.',
          why: 'For South Florida this points to a storm the market can absorb, but it does not change any individual policy or renewal by itself. If you or family own damaged property in the Panhandle, keep documenting and following up on the claim; official totals should appear on floir.gov.',
          sources: [IJ_ISAIAS_LOSSES, MOODYS_RMS, OIR_CAT],
        },
        {
          headline: 'National Teen Driver Safety Week starts today, Oct. 18–24',
          summary:
            'Florida’s state safety-campaign calendar marks Oct. 18–24 as National Teen Driver Safety Week, overlapping with National School Bus Safety Week on Oct. 19–23. The Florida Department of Highway Safety and Motor Vehicles joins the National Highway Traffic Safety Administration each October to remind teens, and the adults around them, of the basics: buckle up on every trip, obey speed limits, never drive under the influence of drugs or alcohol, and keep your full attention on the road.',
          why: 'Use this week to talk with any teen at home about keeping the phone away while driving, and tell your agent when a teen in your household gets a learner’s or driver’s license so your auto policy lists every driver.',
          sources: [FDOT_CALENDAR, FLHSMV_TEEN],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Coming up this week',
          text: 'Tuesday, Oct. 20: Citizens’ next personal-lines assumption date, and the deadline to prefile expert testimony for OIR’s Oct. 27 workers’ compensation rate hearing (written public comments stay open until Nov. 10, 5 p.m. ET). FEMA: as of Sunday morning, Florida’s Isaias record was still emergency declaration EM-3655-FL only; the state’s Oct. 16 major-disaster request is pending, so household Individual Assistance is not open yet. Miami-Dade king tides: Oct. 24–30.',
        },
      ],
      extraSources: [CITIZENS_CAL, OIR_NCCI, FEMA_DECLARATIONS, MIAMI_KING],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 18 de octubre de 2026: oleaje peligroso y una baja costera, reglas sobre paneles contra inundación en casas y nuevas estimaciones de pérdidas por Isaías',
      metaTitle: 'Noticias de seguros, 18 oct. 2026: corrientes y paneles | M&K',
      description:
        'Hoy: alto riesgo de corrientes de resaca en las playas del sur de la Florida hasta el jueves, por qué Miami-Dade no permite paneles antiinundación en casas, pérdidas por Isaías y seguridad vial juvenil.',
      ogAlt:
        'Una bandera de advertencia sobre olas fuertes, una casa con una barrera temporal contra inundación en la puerta y un gráfico de barras',
      intro:
        'Cuatro novedades para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida después de un fin de semana lluvioso. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Semana difícil en la costa: alto riesgo de corrientes de resaca en todas las playas del Atlántico del sur de la Florida hasta el jueves, y el NHC vigila una baja costera',
          summary:
            'Un frente frío dejó bandas de lluvia intensa sobre las zonas metropolitanas de la costa este entre la noche del sábado y el domingo; el Servicio Nacional de Meteorología en Miami informó que algunos puntos de la costa de Broward y Palm Beach acumularon de 3 a 5 pulgadas en una o dos horas durante la madrugada. Detrás del frente, los vientos racheados del noreste traen alto riesgo de corrientes de resaca a las playas atlánticas de Palm Beach, Broward y Miami-Dade hasta la noche del jueves, avisos de oleaje alto para Palm Beach (hasta el miércoles por la mañana) y Broward (de la tarde del lunes a la noche del martes), y un aviso para embarcaciones pequeñas en la bahía de Biscayne y aguas costeras cercanas hasta las 8 p.m. del miércoles. Además, el pronóstico del Centro Nacional de Huracanes de las 8 a.m. del domingo prevé que hoy o esta noche se forme una baja no tropical con vientos de tormenta frente a la costa sureste de EE. UU., con 30 % de probabilidad de desarrollo subtropical en siete días (casi 0 % en 48 horas) y, se desarrolle o no, vientos fuertes, inundación costera y oleaje peligroso en partes de la costa este.',
          why: 'No maneje por calles inundadas: el daño por inundación a su propio auto normalmente se reclama bajo la cobertura comprensiva (comprehensive), y las pólizas de solo responsabilidad civil no lo pagan. Si tiene bote, revise amarras y defensas esta semana; y si entra agua a su casa o negocio, tome fotos antes de limpiar.',
          sources: [NWS_MFL_WWA, NWS_MFL_AFD, NHC_TWO, CBS_MIAMI_RAIN],
        },
        {
          headline:
            'Paneles fijos o barreras temporales: Miami-Dade no permite paneles permanentes contra inundación en casas dentro de zonas inundables',
          summary:
            'Un reportaje del Miami Herald publicado el 17 de octubre explica por qué muchos propietarios del sur de la Florida no pueden simplemente atornillar paneles contra inundación a su casa: las barreras fijas cuentan como “impermeabilización en seco” (dry floodproofing), que las normas federales del seguro de inundación y el Código de Construcción de Florida en general no permiten en viviendas unifamiliares dentro de zonas inundables, y el condado de Miami-Dade le dijo al periódico que no emite permisos de paneles para viviendas en esas zonas. Un consultor en manejo de llanuras inundables citado en el reportaje advirtió que instalarlos sin permiso puede traer problemas con el código y complicar un reclamo de inundación, mientras que los productos temporales —diques inflables, barreras desmontables para puertas, sacos de arena— en general se tratan de otra forma. Los edificios comerciales son un caso aparte: allí sí se permiten paneles certificados con permiso. Además, el Programa Nacional de Seguro contra Inundaciones (NFIP) de FEMA indica que, ante una inundación inminente, el asegurado puede recibir un reembolso de hasta $1,000 por materiales y mano de obra para evitar pérdidas (sacos de arena, bombas, madera, plástico) y de hasta $1,000 por mover bienes asegurados a un lugar seguro, si guarda los recibos y un registro del tiempo invertido.',
          why: 'Antes de comprar una barrera contra inundación, pregunte al departamento de construcción de su ciudad o condado qué está permitido en su dirección. Si tiene póliza del NFIP, guarde los recibos de sacos de arena o bombas comprados antes de una inundación. Nuestra [guía sobre mareas altas y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade) explica lo básico.',
          sources: [HERALD_FLOOD_PANELS, FLOODSMART_LOSS_AVOIDANCE, FLOODSMART_MINIMIZE],
        },
        {
          headline:
            'Actualización: las nuevas estimaciones de pérdidas por Isaías rondan los $3 mil millones; Citizens reporta unos 860 reclamos',
          summary:
            'Dos firmas de modelación de catástrofes publicaron nuevas estimaciones de pérdidas aseguradas por el huracán Isaías después de nuestra última actualización: una calculó unos $3 mil millones en pérdidas privadas por viento y marejada (15 de octubre, sin contar reclamos de inundación del NFIP), y otra estimó entre $2,500 y $4,500 millones, con una cifra más probable de $3,500 millones (16 de octubre), que incluye unos $250 millones por marejada, inundación tierra adentro y pérdidas del NFIP. Una importante agencia calificadora del sector describió a Isaías como un “evento de ganancias” para las aseguradoras, no una amenaza para su capital. Citizens Property Insurance tenía unas 8,800 pólizas en el área de 10 condados del Panhandle al tocar tierra el huracán y había recibido unos 860 reclamos al 15 de octubre, en su mayoría residenciales, según Insurance Journal, con datos de la OIR y de un portavoz de Citizens. Son estimaciones de modelos: esta mañana del domingo, la página pública de reportes de catástrofes de la OIR todavía no mostraba totales oficiales de reclamos por Isaías en el estado.',
          why: 'Para el sur de la Florida, esto apunta a una tormenta que el mercado puede absorber, pero por sí solo no cambia ninguna póliza ni renovación individual. Si usted o su familia tienen una propiedad dañada en el Panhandle, siga documentando y dando seguimiento al reclamo; los totales oficiales deberían aparecer en floir.gov.',
          sources: [IJ_ISAIAS_LOSSES, MOODYS_RMS, OIR_CAT],
        },
        {
          headline: 'Hoy empieza la Semana Nacional de Seguridad para Conductores Adolescentes (18 al 24 de octubre)',
          summary:
            'El calendario estatal de campañas de seguridad vial de Florida marca del 18 al 24 de octubre como la Semana Nacional de Seguridad para Conductores Adolescentes, que coincide con la Semana Nacional de Seguridad del Autobús Escolar del 19 al 23 de octubre. Cada octubre, el Departamento de Seguridad en Carreteras y Vehículos Motorizados de Florida (FLHSMV) se suma a la Administración Nacional de Seguridad del Tráfico en las Carreteras (NHTSA) para recordar a los jóvenes, y a los adultos que los rodean, lo básico: usar el cinturón en cada viaje, respetar los límites de velocidad, nunca manejar bajo los efectos de drogas o alcohol y mantener toda la atención en la vía.',
          why: 'Aproveche esta semana para hablar de manejar sin el celular con cualquier adolescente en casa, y avise a su agente cuando un joven de su hogar obtenga el permiso de aprendizaje o la licencia, para que su póliza de auto incluya a todos los conductores.',
          sources: [FDOT_CALENDAR, FLHSMV_TEEN],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Lo que viene esta semana',
          text: 'Martes 20 de octubre: próxima fecha de asunción de pólizas personales de Citizens, y plazo para presentar por adelantado el testimonio de expertos para la audiencia de tarifas de compensación laboral (workers’ comp) de la OIR del 27 de octubre (los comentarios públicos por escrito se reciben hasta el 10 de noviembre, 5 p.m. ET). FEMA: esta mañana del domingo, el registro de Isaías en Florida seguía siendo solo la declaración de emergencia EM-3655-FL; la solicitud estatal de desastre mayor del 16 de octubre está pendiente, así que la Individual Assistance para hogares aún no está abierta. Mareas altas (king tides) en Miami-Dade: 24 al 30 de octubre.',
        },
      ],
      extraSources: [CITIZENS_CAL, OIR_NCCI, FEMA_DECLARATIONS, MIAMI_KING],
    },
    ru: {
      title:
        'Страховые новости Флориды, 18 октября 2026: шторм на побережье и прибрежный циклон, правила для противопаводковых щитов на домах и новые оценки убытков от «Исайаса»',
      metaTitle: 'Страховые новости 18.10.2026: rip currents, щиты | M&K Agency',
      description:
        'Сегодня: высокий риск rip currents на пляжах Южной Флориды до четверга, почему Miami-Dade не разрешает противопаводковые щиты на домах, новые оценки убытков от «Исайаса» и неделя безопасности юных водителей.',
      ogAlt:
        'Предупреждающий флаг над высокими волнами, дом с временным барьером от воды у двери и растущая столбчатая диаграмма',
      intro:
        'Четыре новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде после дождливых выходных. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Неспокойная неделя на побережье: высокий риск rip currents на всех атлантических пляжах Южной Флориды до четверга, NHC следит за прибрежным циклоном',
          summary:
            'Холодный фронт в ночь с субботы на воскресенье принёс полосы сильного дождя на восточное побережье; Национальная метеослужба в Майами сообщила, что местами на побережье Broward и Palm Beach за один-два часа ночью выпало от 3 до 5 дюймов. За фронтом порывистый северо-восточный ветер: высокий риск rip currents (обратных течений) на атлантических пляжах Palm Beach, Broward и Miami-Dade до вечера четверга, предупреждения о высоком прибое для Palm Beach (до утра среды) и Broward (с понедельника днём до вечера вторника), а также предупреждение для малых судов в Biscayne Bay и прибрежных водах до 20:00 среды. Отдельно: по утреннему обзору Национального центра ураганов (8:00 в воскресенье) сегодня днём или ночью у юго-восточного побережья США сформируется нетропический циклон со штормовым ветром; шанс субтропического развития за семь дней — 30% (за 48 часов — почти 0%), но в любом случае он принесёт сильный ветер, прибрежное подтопление и опасный прибой на части Восточного побережья.',
          why: 'Не въезжайте на затопленные улицы: ущерб от воды вашей собственной машине обычно покрывается по comprehensive, а полис только с liability его не оплачивает. Владельцам лодок стоит на этой неделе проверить швартовы и кранцы; если вода попала в дом или офис, сфотографируйте всё до уборки.',
          sources: [NWS_MFL_WWA, NWS_MFL_AFD, NHC_TWO, CBS_MIAMI_RAIN],
        },
        {
          headline:
            'Стационарные щиты или временные барьеры: Miami-Dade не выдаёт разрешений на постоянные противопаводковые щиты для домов в зонах затопления',
          summary:
            'Материал Miami Herald от 17 октября объясняет, почему многие домовладельцы Южной Флориды не могут просто прикрутить к дому противопаводковые щиты: постоянно закреплённые барьеры считаются «сухой гидроизоляцией» (dry floodproofing), которую федеральные правила страхования от наводнений и Строительный кодекс Флориды, как правило, не допускают для частных домов в зонах затопления, а округ Miami-Dade сообщил газете, что не выдаёт разрешений на такие щиты для жилых домов в этих зонах. Консультант по пойменным территориям, которого цитирует газета, предупредил, что установка без разрешения может обернуться проблемами с кодексом и осложнить страховой случай по наводнению; временные средства — надувные дамбы, съёмные барьеры для дверей, мешки с песком — обычно рассматриваются иначе. Коммерческие здания — отдельная история: там сертифицированные щиты с разрешением допускаются. Кроме того, по данным программы NFIP (FEMA), при неминуемом наводнении страхователь может получить возмещение до $1,000 на материалы и работу по предотвращению ущерба (мешки с песком, насосы, доски, плёнка) и до $1,000 на перенос застрахованного имущества в безопасное место, если сохранит чеки и учёт потраченного времени.',
          why: 'Прежде чем покупать противопаводковый барьер, уточните в строительном отделе вашего города или округа, что разрешено по вашему адресу. Если у вас полис NFIP, сохраняйте чеки за мешки с песком или насосы, купленные перед наводнением. Основы — в нашем [гайде о king tides и страховании от наводнений](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: [HERALD_FLOOD_PANELS, FLOODSMART_LOSS_AVOIDANCE, FLOODSMART_MINIMIZE],
        },
        {
          headline:
            'Обновление: новые оценки убытков от «Исайаса» — около $3 млрд; Citizens сообщает примерно о 860 страховых случаях',
          summary:
            'После нашего прошлого обновления две компании по моделированию катастроф опубликовали новые оценки застрахованных убытков от урагана «Исайас»: одна оценила частные убытки от ветра и нагона примерно в $3 млрд (15 октября, без учёта претензий по NFIP), другая — от $2,5 до $4,5 млрд, с наиболее вероятной цифрой $3,5 млрд (16 октября), включая около $250 млн от нагона, внутренних паводков и убытков NFIP. Крупное рейтинговое агентство назвало «Исайас» для страховщиков «событием уровня прибыли» (earnings event), а не угрозой их капиталу. У Citizens Property Insurance на момент выхода урагана на сушу было около 8 800 полисов в 10 округах Panhandle, и к 15 октября компания получила около 860 заявлений об убытках, в основном по жилью, — сообщает Insurance Journal со ссылкой на данные OIR и представителя Citizens. Это модельные оценки: на утро воскресенья на публичной странице catastrophe reporting OIR официальных сводных цифр по «Исайасу» по штату всё ещё не было.',
          why: 'Для Южной Флориды это скорее сигнал, что рынок справится с этим штормом, но само по себе это не меняет ни один конкретный полис или продление. Если у вас или родственников есть пострадавшая недвижимость в Panhandle, продолжайте документировать ущерб и вести страховой случай; официальные цифры должны появиться на floir.gov.',
          sources: [IJ_ISAIAS_LOSSES, MOODYS_RMS, OIR_CAT],
        },
        {
          headline: 'Сегодня начинается Национальная неделя безопасности юных водителей (18–24 октября)',
          summary:
            'Календарь кампаний по безопасности дорожного движения штата Флорида отмечает 18–24 октября как National Teen Driver Safety Week; она пересекается с неделей безопасности школьных автобусов (National School Bus Safety Week) 19–23 октября. Каждый октябрь FLHSMV (Департамент безопасности дорожного движения и автотранспорта Флориды) вместе с федеральным NHTSA напоминает подросткам и взрослым рядом с ними об основах: пристёгиваться в каждой поездке, соблюдать скоростной режим, никогда не садиться за руль под воздействием алкоголя или наркотиков и полностью сосредотачиваться на дороге.',
          why: 'Используйте эту неделю, чтобы поговорить с подростком о вождении без телефона, и сообщите агенту, когда подросток в вашей семье получит learner’s permit или права, — чтобы в автополисе были указаны все водители.',
          sources: [FDOT_CALENDAR, FLHSMV_TEEN],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Что впереди на этой неделе',
          text: 'Вторник, 20 октября: очередная дата assumption личных полисов Citizens, а также крайний срок предварительной подачи экспертных показаний к слушанию OIR по тарифам workers’ comp 27 октября (письменные публичные комментарии принимают до 10 ноября, 17:00 ET). FEMA: на утро воскресенья по «Исайасу» во Флориде действовала только чрезвычайная декларация EM-3655-FL; запрос штата о major disaster от 16 октября ещё рассматривается, поэтому Individual Assistance для домохозяйств пока не открыта. King tides в Miami-Dade: 24–30 октября.',
        },
      ],
      extraSources: [CITIZENS_CAL, OIR_NCCI, FEMA_DECLARATIONS, MIAMI_KING],
    },
  },
};
