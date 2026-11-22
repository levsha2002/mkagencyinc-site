import type { NewsEdition, NewsSource } from '../types';

// Edition for Sunday, Nov. 22, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const CBS_TOR: NewsSource = {
  name: 'CBS News Miami',
  date: '2026-11-21',
  url: 'https://www.cbsnews.com/miami/news/miami-dade-broward-tornado-warning-11-21-2026/',
  title: 'Tornado warning now canceled was issued for parts of Miami-Dade, Broward counties',
};

const NBC6_TOR: NewsSource = {
  name: 'NBC 6 South Florida',
  date: '2026-11-21',
  url: 'https://www.nbcmiami.com/news/local/possible-tornado-causes-damage-in-delray-beach-after-severe-storms-in-south-florida/3891427/',
  title: 'Video from Delray Beach shows what appears to be a tornado; damage reported in Boca Raton',
};

const NWS_MFL_LSR: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-21',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=LSR&format=txt&version=1&glossary=0',
  title: 'Preliminary Local Storm Reports, NWS Miami, Sat Nov 21, 2026',
};

const NWS_MIA_CLI: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-22',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MIA&product=CLI&format=txt&version=1&glossary=0',
  title: 'Miami climate summary for Nov. 21, 2026 (issued 4:27 a.m. EST Sun Nov 22)',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-22',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:24 a.m. EST Sun Nov 22, 2026',
};

const FLHSMV_HOLIDAY: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-11-10',
  url: 'https://www.flhsmv.gov/2026/11/10/flhsmv-and-fhp-ask-motorists-not-to-wing-it-and-arrive-alive-this-holiday-season/',
  title: 'FLHSMV and FHP Ask Motorists Not to ‘Wing It’ and Arrive Alive This Holiday Season',
};

const MDC_KINGTIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const MDFR_THANKSGIVING: NewsSource = {
  name: 'Miami-Dade Fire Rescue',
  date: '2026-11-17',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1761928565370826',
  title: 'Give thanks, stay safe: Make fire prevention part of your Thanksgiving celebration',
};

const MDFR_COOKING: NewsSource = {
  name: 'Miami-Dade Fire Rescue',
  date: '2026-11-22',
  url: 'https://www.miamidade.gov/global/fire/safety-cooking.page',
  title: 'Cooking safety (checked Nov. 22, 2026)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const GOV_CLOSURES: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-11-16',
  url: 'https://www.flgov.com/eog/news/press/2026/governor-ron-desantis-announces-additional-state-office-closures-holiday-season',
  title: 'Governor Ron DeSantis Announces Additional State Office Closures for the Holiday Season',
};

const MDC_THANKSGIVING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-11-12',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1510679875350520',
  title: 'Have a happy and safe Thanksgiving',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-22',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Sun Nov 22, 2026',
};

const STORMS = [CBS_TOR, NBC6_TOR, NWS_MFL_LSR, NWS_MIA_CLI];
const WEEK = [NWS_MFL_AFD, MDC_KINGTIDES, FLHSMV_HOLIDAY];
const COOKING = [MDFR_THANKSGIVING, MDFR_COOKING];
const BOX = [GOV_CLOSURES, MDC_THANKSGIVING, FEMA_REAUTH, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-22-tornado-warnings-tuesday-tides-cooking-fires',
  datePublished: '2026-11-22',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 22, 2026: Saturday’s tornado warnings across South Florida, possible coastal flooding from Tuesday’s high tide, and Miami-Dade Fire Rescue’s Thanksgiving cooking reminder',
      metaTitle: 'Insurance News Nov. 22, 2026: Tornado Warnings, Tides, Cooking | M&K',
      description:
        'Tornado warnings hit Miami-Dade, Broward and Palm Beach on Saturday, NWS flags minor coastal flooding from Tuesday, and Miami-Dade Fire Rescue shares holiday cooking tips.',
      ogAlt:
        'A thunderstorm cloud with a funnel over palm trees and a house, a calendar next to a car on a street with rising tide water, and a stovetop pan with a lid beside a kitchen fire extinguisher',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Sunday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'New: Saturday storms brought tornado warnings to northern Miami-Dade, Broward and Palm Beach, and Miami’s November rain passed 10 inches',
          summary:
            'At 11:57 a.m. Saturday, NWS Miami issued a **tornado warning for northern Miami-Dade and south-central Broward** after radar showed rotation in a storm near Hialeah Gardens; it was cancelled at 12:13 p.m. when the storm weakened, and earlier, at 11:22 a.m., an off-duty NWS employee had reported a waterspout east of Miami Beach. In the evening, storms in **southeastern Palm Beach County** prompted two more tornado warnings and a Tornado Watch until 10 p.m.; NWS logged a public-confirmed tornado near Delray Beach and preliminary reports of wind damage to a home in western Delray Beach and downed branches in Boca Raton. Miami International Airport recorded 0.61 inch of rain on Saturday, bringing **November’s total to 10.00 inches**, against a normal of 2.66 inches by this date.',
          why: 'If a storm damaged your roof, windows, fence or car, take photos before cleanup, make only temporary repairs to prevent further damage and keep the receipts. Wind damage to a home is normally a homeowners policy claim, while storm damage to a car (a fallen branch, hail, flooding) falls under comprehensive, not collision. See [storm claim checklist](/en/blog/hurricane-claim-checklist-florida), [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida) and [homeowners insurance in Florida City](/en/homeowners-insurance-florida-city).',
          sources: STORMS,
        },
        {
          headline:
            'Update: NWS now flags possible minor coastal flooding starting with Tuesday’s high tide, with the most active rain day on Wednesday',
          summary:
            'In its Sunday morning forecast discussion, NWS Miami says **minor coastal flooding is possible beginning with Tuesday morning’s high tide** along both the Atlantic and Gulf coasts, during the king tide period that runs through Thanksgiving Day. After a quiet Sunday and a dry Monday, another front and a weak low will bring scattered showers and thunderstorms on Tuesday and Wednesday, with **Wednesday expected to be the most active day** and locally heavy rain possible, especially in southeast Florida, depending on the low’s track. Drier air should return for the end of the work week, while the Atlantic waters may turn briefly hazardous mid to late week.',
          why: 'Wednesday is also the busiest day on the roads: in its holiday safety release, FLHSMV noted that last year the most crashes of the five-day Thanksgiving period happened on the Wednesday before the holiday. If you drive that day, allow extra time, avoid flooded streets and keep your car off low-lying roads near high tide, since flood damage to a vehicle is covered only by comprehensive. See [king tides and flood insurance](/en/blog/king-tides-flood-insurance-miami-dade), [flood insurance](/en/flood-insurance-homestead-fl) and [rental car insurance for the holidays](/en/blog/rental-car-insurance-florida-holidays).',
          sources: WEEK,
        },
        {
          headline:
            'New: Miami-Dade Fire Rescue’s Thanksgiving reminder: stay in the kitchen while you cook and never put water on a grease fire',
          summary:
            'In a Nov. 17 post, Miami-Dade Fire Rescue asked residents to “keep fire safety on the menu” this Thanksgiving. Its cooking safety page cites the U.S. Fire Administration: **cooking is the leading cause of home fires and home fire injuries**, and unattended cooking is the leading cause of kitchen fires. The department advises never leaving the kitchen or the house while food is cooking, keeping an ABC-rated extinguisher in the kitchen, **never using water on a grease fire** (cover the pan or use baking soda instead) and never disconnecting a smoke alarm while you cook.',
          why: 'Fire is a peril that homeowners, condo and renters policies generally cover, but even a small kitchen fire can mean a deductible, smoke cleanup and time out of your home. Before the holiday, make sure your smoke alarms work, and check that your personal property limit and loss of use (additional living expenses) coverage fit your household today. See [home fire safety](/en/blog/space-heater-fire-safety-florida-homes) and [homeowners insurance in Florida City](/en/homeowners-insurance-florida-city).',
          sources: COOKING,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'State offices will be closed **Wednesday, Nov. 25, through Friday, Nov. 27** (the governor added Nov. 25 to the regular Thanksgiving holidays), and Miami-Dade County offices will be closed Thursday and Friday, so handle any paperwork with government offices by Tuesday or check the specific office’s hours first. The National Flood Insurance Program (NFIP) is authorized **through 11:59 p.m. on Dec. 11, 2026**, 19 days from today; FEMA’s reauthorization page shows no change. The National Hurricane Center expects no tropical development, and hurricane season officially ends Nov. 30.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 22 de noviembre de 2026: avisos de tornado del sábado en el sur de Florida, posibles inundaciones costeras con la marea alta del martes y el recordatorio de Bomberos de Miami-Dade para cocinar en Acción de Gracias',
      metaTitle: 'Noticias de seguros 22 nov. 2026: tornados, mareas, cocina | M&K',
      description:
        'Avisos de tornado el sábado en Miami-Dade, Broward y Palm Beach, el NWS prevé inundación costera leve desde el martes y Bomberos de Miami-Dade da consejos para cocinar.',
      ogAlt:
        'Una nube de tormenta con un embudo sobre palmeras y una casa, un calendario junto a un auto en una calle con agua de marea, y una sartén con tapa en la estufa al lado de un extintor de cocina',
      intro:
        'Tres actualizaciones para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este domingo. Cada noticia está resumida con nuestras propias palabras, con enlace a la fuente original.',
      items: [
        {
          headline:
            'Nuevo: las tormentas del sábado trajeron avisos de tornado al norte de Miami-Dade, Broward y Palm Beach, y la lluvia de noviembre en Miami ya supera las 10 pulgadas',
          summary:
            'A las 11:57 a.m. del sábado, el NWS de Miami emitió un **aviso de tornado para el norte de Miami-Dade y el centro-sur de Broward** porque el radar detectó rotación en una tormenta cerca de Hialeah Gardens; se canceló a las 12:13 p.m., cuando la tormenta se debilitó, y antes, a las 11:22 a.m., un empleado del NWS fuera de servicio había reportado una tromba marina al este de Miami Beach. Por la tarde, las tormentas en el **sureste del condado de Palm Beach** provocaron otros dos avisos de tornado y una vigilancia de tornado hasta las 10 p.m.; el NWS registró un tornado confirmado por el público cerca de Delray Beach e informes preliminares de daños por viento en una vivienda del oeste de Delray Beach y ramas caídas en Boca Raton. El Aeropuerto Internacional de Miami registró 0.61 pulgadas de lluvia el sábado, con lo que **el total de noviembre llega a 10.00 pulgadas**, frente a un promedio normal de 2.66 pulgadas a esta fecha.',
          why: 'Si una tormenta dañó su techo, ventanas, cerca o auto, tome fotos antes de limpiar, haga solo reparaciones temporales para evitar más daños y guarde los recibos. El daño por viento a una vivienda normalmente se reclama al seguro de propietario, mientras que el daño por tormenta a un auto (una rama caída, granizo, inundación) corresponde a la cobertura integral (comprehensive), no a la de choque (collision). Vea [lista para reclamos por tormenta](/es/blog/hurricane-claim-checklist-florida), [comprehensive vs. collision](/es/blog/comprehensive-vs-collision-florida) y [seguro de propietario en Florida City](/es/homeowners-insurance-florida-city).',
          sources: STORMS,
        },
        {
          headline:
            'Actualización: el NWS ya prevé posibles inundaciones costeras leves a partir de la marea alta del martes, y el miércoles sería el día más lluvioso',
          summary:
            'En su discusión de pronóstico del domingo por la mañana, el NWS de Miami indica que **es posible una inundación costera leve a partir de la marea alta del martes por la mañana** en las costas del Atlántico y del Golfo, durante el periodo de mareas reales que se extiende hasta el Día de Acción de Gracias. Después de un domingo tranquilo y un lunes seco, otro frente y una baja débil traerán chubascos y tormentas dispersas el martes y el miércoles; **el miércoles sería el día más activo**, con posibles lluvias fuertes localizadas, sobre todo en el sureste de Florida, según la trayectoria de la baja. El aire más seco volvería hacia el final de la semana laboral, y las aguas del Atlántico podrían ponerse peligrosas por un tiempo a mediados o finales de semana.',
          why: 'El miércoles también es el día de más tráfico: en su comunicado de seguridad para las fiestas, el FLHSMV señaló que el año pasado la mayor cantidad de choques del periodo de cinco días de Acción de Gracias ocurrió el miércoles anterior al feriado. Si maneja ese día, salga con tiempo, evite calles inundadas y no deje el auto en calles bajas cerca de la hora de la marea alta, porque el daño por inundación a un vehículo solo lo cubre la cobertura integral. Vea [mareas reales y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade), [seguro de inundación](/es/flood-insurance-homestead-fl) y [seguro de auto de alquiler en las fiestas](/es/blog/rental-car-insurance-florida-holidays).',
          sources: WEEK,
        },
        {
          headline:
            'Nuevo: Bomberos de Miami-Dade recuerda para Acción de Gracias: no se aleje de la cocina y nunca eche agua a un fuego de grasa',
          summary:
            'En una publicación del 17 de noviembre, el Departamento de Bomberos de Miami-Dade (Miami-Dade Fire Rescue) pidió a los residentes incluir la seguridad contra incendios en el menú de Acción de Gracias. Su página de seguridad en la cocina cita a la Administración de Incendios de EE. UU.: **cocinar es la principal causa de incendios y de lesiones por incendio en el hogar**, y dejar la cocina sin supervisión es la principal causa de los incendios en la cocina. El departamento aconseja no salir de la cocina ni de la casa mientras se cocina, tener un extintor tipo ABC en la cocina, **nunca usar agua en un fuego de grasa** (tape la sartén o use bicarbonato de sodio) y nunca desconectar el detector de humo para cocinar.',
          why: 'El fuego es un riesgo que las pólizas de propietario, de condominio y de inquilino generalmente cubren, pero incluso un incendio pequeño en la cocina puede significar un deducible, limpieza de humo y tiempo fuera de su casa. Antes de la fiesta, compruebe que sus detectores de humo funcionen y revise que el límite para sus pertenencias y la cobertura de pérdida de uso (gastos adicionales de vivienda) correspondan a su hogar hoy. Vea [seguridad contra incendios en casa](/es/blog/space-heater-fire-safety-florida-homes) y [seguro de propietario en Florida City](/es/homeowners-insurance-florida-city).',
          sources: COOKING,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'Las oficinas estatales estarán cerradas **del miércoles 25 al viernes 27 de noviembre** (el gobernador añadió el 25 a los feriados regulares de Acción de Gracias), y las oficinas del condado de Miami-Dade cerrarán el jueves y el viernes, así que haga sus trámites con oficinas públicas antes del martes o consulte primero el horario de la oficina. El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p.m. del 11 de diciembre de 2026**, dentro de 19 días; la página de FEMA sobre la reautorización no muestra cambios. El Centro Nacional de Huracanes no prevé desarrollo tropical, y la temporada de huracanes termina oficialmente el 30 de noviembre.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 22 ноября 2026 г.: субботние предупреждения о торнадо в Южной Флориде, возможное прибрежное подтопление во время прилива во вторник и напоминание пожарных Майами-Дейд о безопасной готовке на День благодарения',
      metaTitle: 'Страховые новости 22.11.2026: торнадо, приливы, кухня | M&K',
      description:
        'В субботу в Майами-Дейд, Бровард и Палм-Бич объявляли предупреждения о торнадо, NWS ждёт слабого подтопления побережья со вторника, пожарные дают советы по готовке.',
      ogAlt:
        'Грозовое облако с воронкой над пальмами и домом, календарь рядом с машиной на улице с приливной водой и сковорода с крышкой на плите рядом с кухонным огнетушителем',
      intro:
        'Три новости для владельцев домов, водителей и владельцев малого бизнеса в Южной Флориде в это воскресенье. Каждая изложена своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Новое: субботние грозы принесли предупреждения о торнадо на север Майами-Дейд, в Бровард и Палм-Бич, а осадки в Майами за ноябрь превысили 10 дюймов',
          summary:
            'В субботу в 11:57 Метеослужба Майами (NWS) объявила **предупреждение о торнадо для севера Майами-Дейд и центрально-южной части Бровард**: радар показал вращение в грозе возле Хайалиа-Гарденс. В 12:13 предупреждение отменили, так как гроза ослабла, а ещё раньше, в 11:22, сотрудник NWS, находившийся не на смене, сообщил о смерче над водой к востоку от Майами-Бич. Вечером грозы на **юго-востоке округа Палм-Бич** вызвали ещё два предупреждения о торнадо и режим угрозы торнадо до 22:00; NWS зафиксировала подтверждённый очевидцами торнадо возле Делрей-Бич и предварительные сообщения о повреждении ветром дома на западе Делрей-Бич и о сломанных ветках в Бока-Ратоне. В международном аэропорту Майами в субботу выпало 0,61 дюйма осадков, и **сумма за ноябрь достигла 10,00 дюйма** при норме 2,66 дюйма на эту дату.',
          why: 'Если гроза повредила крышу, окна, забор или машину, сфотографируйте ущерб до уборки, делайте только временный ремонт, чтобы не допустить новых повреждений, и сохраняйте чеки. Ущерб дому от ветра обычно заявляют по полису страхования жилья, а ущерб машине от непогоды (упавшая ветка, град, затопление) покрывает comprehensive, а не collision. См. [чек-лист для страхового случая после шторма](/ru/blog/hurricane-claim-checklist-florida), [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida) и [страхование жилья во Флорида-Сити](/ru/homeowners-insurance-florida-city).',
          sources: STORMS,
        },
        {
          headline:
            'Обновление: NWS допускает слабое подтопление побережья начиная с утреннего прилива во вторник, а самым дождливым днём станет среда',
          summary:
            'В воскресном утреннем прогнозе Метеослужба Майами пишет, что **слабое прибрежное подтопление возможно начиная с утреннего прилива во вторник** на атлантическом и на заливном побережье — в период сизигийных приливов (king tides), который продлится до Дня благодарения. После спокойного воскресенья и сухого понедельника новый фронт и слабый циклон принесут во вторник и среду местами ливни и грозы; **самым активным днём ожидается среда**, когда в зависимости от траектории циклона возможны локально сильные дожди, особенно на юго-востоке Флориды. К концу рабочей недели должен вернуться более сухой воздух, а в Атлантике в середине или конце недели возможно кратковременное опасное волнение.',
          why: 'Среда — ещё и самый загруженный день на дорогах: в праздничном обращении FLHSMV отмечало, что в прошлом году больше всего аварий за пятидневный период Дня благодарения пришлось на среду перед праздником. Если едете в этот день, выезжайте заранее, объезжайте затопленные улицы и не оставляйте машину на низких участках во время прилива: ущерб автомобилю от воды покрывает только comprehensive. См. [king tides и страхование от наводнения](/ru/blog/king-tides-flood-insurance-miami-dade), [страхование от наводнения](/ru/flood-insurance-homestead-fl) и [страховка для арендованной машины в праздники](/ru/blog/rental-car-insurance-florida-holidays).',
          sources: WEEK,
        },
        {
          headline:
            'Новое: пожарные Майами-Дейд напоминают перед Днём благодарения — не уходите из кухни во время готовки и никогда не заливайте горящий жир водой',
          summary:
            'В публикации от 17 ноября пожарно-спасательная служба Майами-Дейд (Miami-Dade Fire Rescue) призвала жителей не забывать о пожарной безопасности в День благодарения. На её странице о безопасной готовке со ссылкой на Пожарную администрацию США сказано, что **готовка — главная причина пожаров и травм при пожарах в домах**, а оставленная без присмотра плита — главная причина пожаров на кухне. Служба советует не уходить из кухни и из дома, пока еда готовится, держать на кухне огнетушитель класса ABC, **никогда не тушить горящий жир водой** (накройте сковороду крышкой или засыпьте пищевой содой) и не отключать датчик дыма на время готовки.',
          why: 'Пожар — риск, который полисы страхования дома, кондоминиума и арендатора, как правило, покрывают, но даже небольшое возгорание на кухне может обернуться франшизой, очисткой от дыма и временным переездом. Перед праздником проверьте датчики дыма, а заодно посмотрите, соответствуют ли сегодняшним потребностям семьи лимит на личное имущество и покрытие loss of use (дополнительные расходы на проживание). См. [пожарная безопасность дома](/ru/blog/space-heater-fire-safety-florida-homes) и [страхование жилья во Флорида-Сити](/ru/homeowners-insurance-florida-city).',
          sources: COOKING,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Государственные учреждения штата будут закрыты **со среды, 25 ноября, по пятницу, 27 ноября** (губернатор добавил 25-е к обычным выходным на День благодарения), а учреждения округа Майами-Дейд — в четверг и пятницу, поэтому дела с госучреждениями лучше закончить до вторника или заранее уточнить часы работы нужного офиса. Национальная программа страхования от наводнений (NFIP) действует **до 23:59 11 декабря 2026 г.**, то есть ещё 19 дней; на странице FEMA о продлении программы изменений нет. Национальный центр по ураганам не ожидает образования тропических систем, а сезон ураганов официально заканчивается 30 ноября.',
        },
      ],
      extraSources: BOX,
    },
  },
};
