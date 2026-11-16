import type { NewsEdition, NewsSource } from '../types';

// Edition for Monday, Nov. 16, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-16',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 5:46 a.m. EST Mon Nov 16, 2026',
};

const NWS_MFL_SRF: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-16',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=SRF&format=txt&version=1&glossary=0',
  title: 'Surf Zone Forecast, NWS Miami, 3:31 a.m. EST Mon Nov 16, 2026',
};

const MDC_MATTER: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-30',
  url: 'https://www.miamidade.gov/govaction/matter.asp?matter=261940&file=true&yearFolder=Y2026',
  title: 'File 261940: Ordinance related to floodplain regulations (agenda item 4A, first reading Nov. 17, 2026)',
};

const MDC_MEMO: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-11-16',
  url: 'https://www.miamidade.gov/govaction/legistarfiles/Matters/Y2026/261940.pdf',
  title: 'Mayor’s memorandum on File 261940, adoption of FEMA FIRM/FIS (checked Nov. 16, 2026)',
};

const NHTSA_RECALL: NewsSource = {
  name: 'National Highway Traffic Safety Administration',
  date: '2026-11-13',
  url: 'https://www.nhtsa.gov/recalls?nhtsaId=26V733000',
  title: 'Recall 26V733: water pump connector may short circuit (park outside)',
};

const CJ_RECALL: NewsSource = {
  name: 'Claims Journal (Reuters)',
  date: '2026-11-13',
  url: 'https://www.claimsjournal.com/news/national/2026/11/13/341291.htm',
  title: 'NHTSA Urges Owners of 720,000 BMWs to Park Outside Over Fire Risks',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-16',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Mon Nov 16, 2026',
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

const FDEM_FALL: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-16',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding',
};

const FLSENATE_ORG: NewsSource = {
  name: 'The Florida Senate',
  date: '2026-11-16',
  url: 'https://www.flsenate.gov/Home/11-17-2026',
  title: 'Calendar for Nov. 17, 2026: Organization Session',
};

const WX = [NWS_MFL_AFD, NWS_MFL_SRF];
const MAPS = [MDC_MATTER, MDC_MEMO];
const RECALL = [NHTSA_RECALL, CJ_RECALL];
const BOX = [FEMA_REAUTH, FLSENATE_ORG, OIR_NCCI, FDEM_FALL, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-16-urban-flood-risk-new-flood-maps-park-outside-recall',
  datePublished: '2026-11-16',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 16, 2026: the urban flood risk rises to level 2 of 4 on the east coast Tuesday to Thursday, Miami-Dade takes a first vote on adopting FEMA’s new flood maps, and owners of about 720,000 older BMWs are told to park outside',
      metaTitle: 'Insurance News Nov. 16, 2026: Flood Risk, Flood Maps, Recall | M&K',
      description:
        'NWS Miami raises the east-coast flood risk to Slight (2 of 4) Tue–Thu, Miami-Dade weighs adopting FEMA’s new flood maps, and NHTSA posts a park-outside fire recall.',
      ogAlt:
        'A heavy rain cloud over a flooded city street with a storm drain, a flood-zone map on a clipboard next to a house, and a car parked away from a garage under a warning triangle',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Monday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: NWS Miami raises the flood threat for the Miami-Dade, Broward and Palm Beach metro areas to Slight (level 2 of 4) for Tuesday through Thursday',
          summary:
            'In its Monday morning forecast discussion, NWS Miami says the Weather Prediction Center has raised the excessive-rainfall risk for the east coast metro areas to **Slight (level 2 of 4) on Tuesday, Wednesday and Thursday**, up from Marginal (level 1) on Sunday, and soils are still saturated from recent rain. The most likely outcome is **2 to 4 inches** across Miami-Dade, Broward and Palm Beach through Friday morning, enough for localized urban flooding; in a reasonable worst case (about a 1-in-10 chance), isolated spots could see **6 to 8 inches or more**, with impactful flash flooding, though timing and placement remain uncertain. A **High Rip Current Risk** is in effect for the three counties’ beaches through Wednesday evening, a Small Craft Advisory runs from Monday afternoon to Wednesday evening, and forecasters warn of rough surf and possible significant beach erosion; conditions should improve by the weekend.',
          why: 'Clear gutters and the storm drain in front of your home today, park on higher ground, and never drive through standing water: flood damage to a car is covered only if the policy includes comprehensive coverage, and homeowners policies generally exclude flood. An NFIP policy bought now generally starts after a 30-day wait, so it would not cover this week. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida) and [flood insurance](/en/flood-insurance-homestead-fl).',
          sources: WX,
        },
        {
          headline:
            'Update: Miami-Dade commissioners take a first vote Tuesday on adopting FEMA’s new flood maps, which take effect Feb. 19, 2027',
          summary:
            'Miami-Dade’s Board of County Commissioners has an ordinance (File 261940, sponsored by Commissioner Micky Steinberg) on **first reading on Tuesday, Nov. 17**. It would update Chapter 11C of the county code so that it references FEMA’s Flood Insurance Rate Maps and Flood Insurance Study as FEMA amends them, and adopts FEMA’s Letters of Map Change for individual properties. The mayor’s memo says FEMA and the Florida Division of Emergency Management requested the change, that it keeps the county eligible for the National Flood Insurance Program and its Community Rating System Class 3 standing, and that FEMA’s **revised maps take effect Feb. 19, 2027**, replacing maps in effect since Sept. 11, 2009; cities must adopt the new maps too unless their codes already do so automatically. The updated maps change flood zones and base flood elevations in places, and new construction and substantial improvements in low-lying areas will have to meet the updated elevation standards.',
          why: 'Check how your property is mapped before Feb. 19: if your building moves into a high-risk zone, a mortgage lender will generally require flood insurance, and an elevation certificate or a FEMA map amendment may matter for your coverage. The county’s Flood Zone Hot Line is (305) 372-6466. See [flood insurance](/en/flood-insurance-homestead-fl) and our [king tides and flood insurance guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: MAPS,
        },
        {
          headline:
            'New: NHTSA tells owners of about 720,000 older BMW models to park outside and away from buildings because of a fire risk',
          summary:
            'Under recall 26V733, announced Friday, Nov. 13, the National Highway Traffic Safety Administration says owners of **720,796 BMW vehicles** should **park outside and away from structures** until a repair is done, because an improperly sealed electrical connector on the water pump can get wet and short circuit, raising the risk of fire. The recall covers certain 2012–2018 models, including some 2-, 3-, 4- and 5-Series, X1, X3, X4, Z4 and X5 xDrive40e vehicles; it replaces a 2024 recall, and cars already repaired under that one need the new fix, which is still being developed. NHTSA says owner letters are expected in December and the VINs will be searchable on NHTSA.gov from **Dec. 25**; Reuters reported that the automaker knows of 10 fires that may be related.',
          why: 'If you drive an older BMW, park it outside and away from your house or garage until it is repaired, and check any car you own for open recalls with the plate or VIN lookup at NHTSA.gov. A fire that starts in a parked car can damage the home as well, and fire damage to the car itself is generally covered only with comprehensive coverage. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: RECALL,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program is authorized through **11:59 p.m. Dec. 11, 2026**, 25 days from today; FEMA’s page still shows no newer extension. On Tuesday, Nov. 17, the Legislature holds its Organization Session (the Senate convenes at 10 a.m.), and Miami-Dade commissioners take their final vote on sidewalk delivery-robot rules. OIR has not yet posted its order on NCCI’s 2027 workers’ compensation rate request. As of Monday morning we had not seen a federal decision on Florida’s request for a Major Disaster Declaration for the fall flooding. National Hurricane Center, 7 a.m. Monday: no tropical cyclone formation expected in the next 7 days.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 16 de noviembre de 2026: el riesgo de inundaciones urbanas sube al nivel 2 de 4 en la costa este de martes a jueves, Miami-Dade vota por primera vez la adopción de los nuevos mapas de inundación de FEMA y se pide a los dueños de unos 720.000 BMW antiguos que estacionen al aire libre',
      metaTitle: 'Noticias 16 nov. 2026: inundaciones, mapas de FEMA, retiro | M&K',
      description:
        'NWS Miami eleva el riesgo de inundaciones en la costa este a Leve (2 de 4) de martes a jueves, Miami-Dade evalúa los nuevos mapas de FEMA y NHTSA publica un retiro por incendio.',
      ogAlt:
        'Una nube de lluvia intensa sobre una calle inundada con un desagüe pluvial, un mapa de zonas de inundación en un portapapeles junto a una casa y un auto estacionado lejos de un garaje bajo un triángulo de advertencia',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este lunes. Cada noticia está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: NWS Miami eleva a Leve (nivel 2 de 4) el riesgo de inundaciones para las zonas metropolitanas de Miami-Dade, Broward y Palm Beach de martes a jueves',
          summary:
            'En su discusión de pronóstico del lunes por la mañana, NWS Miami indica que el Centro de Predicción del Tiempo elevó el riesgo de lluvias excesivas en las zonas metropolitanas de la costa este a **Leve (nivel 2 de 4) el martes, el miércoles y el jueves**, frente al nivel Marginal (1) del domingo, y que los suelos siguen saturados por las lluvias recientes. Lo más probable son **2 a 4 pulgadas** (5 a 10 cm) en Miami-Dade, Broward y Palm Beach hasta el viernes por la mañana, suficiente para inundaciones urbanas localizadas; en el peor escenario razonable (alrededor de 1 probabilidad en 10), algunos puntos aislados podrían recibir **6 a 8 pulgadas o más** (15 a 20 cm), con inundaciones repentinas de impacto, aunque el momento y el lugar siguen siendo inciertos. Rige un **riesgo alto de corrientes de resaca** en las playas de los tres condados hasta el miércoles por la noche y un aviso para embarcaciones pequeñas desde la tarde del lunes hasta la noche del miércoles; además se espera oleaje fuerte y posible erosión importante de las playas, con mejoría hacia el fin de semana.',
          why: 'Limpie hoy las canaletas y el desagüe frente a su casa, estacione en terreno más alto y nunca maneje por calles con agua acumulada: los daños por inundación a un auto solo se cubren si la póliza incluye cobertura amplia (comprehensive), y las pólizas de vivienda por lo general excluyen las inundaciones. Una póliza del NFIP comprada ahora normalmente entra en vigor tras una espera de 30 días, así que no cubriría esta semana. Vea [comprehensive vs. collision](/es/blog/comprehensive-vs-collision-florida) y [seguro contra inundaciones](/es/flood-insurance-homestead-fl).',
          sources: WX,
        },
        {
          headline:
            'Actualización: la Comisión de Miami-Dade vota en primera lectura el martes la adopción de los nuevos mapas de inundación de FEMA, que entran en vigor el 19 de febrero de 2027',
          summary:
            'La Junta de Comisionados del Condado de Miami-Dade tiene en **primera lectura el martes 17 de noviembre** una ordenanza (expediente 261940, patrocinada por la comisionada Micky Steinberg). Actualizaría el capítulo 11C del código del condado para que haga referencia a los Mapas de Tasas de Seguro contra Inundaciones (FIRM) y al Estudio de Seguro contra Inundaciones de FEMA según FEMA los vaya modificando, y adoptaría las Cartas de Cambio de Mapa (LOMC) que FEMA emite para propiedades individuales. El memorando de la alcaldesa explica que lo pidieron FEMA y la División de Manejo de Emergencias de Florida, que mantiene al condado dentro del Programa Nacional de Seguro contra Inundaciones y su clasificación Clase 3 en el Sistema de Calificación Comunitaria, y que los **mapas revisados de FEMA entran en vigor el 19 de febrero de 2027**, en reemplazo de los vigentes desde el 11 de septiembre de 2009; las ciudades también deben adoptarlos, salvo que su código ya lo haga de forma automática. Los nuevos mapas cambian en algunos lugares las zonas de inundación y las elevaciones base, y las construcciones nuevas y mejoras sustanciales en zonas bajas deberán cumplir los estándares de elevación actualizados.',
          why: 'Revise cómo queda mapeada su propiedad antes del 19 de febrero: si el edificio pasa a una zona de alto riesgo, el banco hipotecario por lo general exigirá seguro contra inundaciones, y un certificado de elevación o una enmienda del mapa de FEMA pueden influir en su cobertura. La línea de zonas de inundación del condado es el (305) 372-6466. Vea [seguro contra inundaciones](/es/flood-insurance-homestead-fl) y nuestra [guía sobre mareas reales y seguro contra inundaciones](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: MAPS,
        },
        {
          headline:
            'Nuevo: NHTSA pide a los dueños de unos 720.000 BMW de modelos antiguos que estacionen al aire libre y lejos de edificios por riesgo de incendio',
          summary:
            'Con el retiro 26V733, anunciado el viernes 13 de noviembre, la Administración Nacional de Seguridad del Tráfico en las Carreteras (NHTSA) indica que los dueños de **720.796 vehículos BMW** deben **estacionarlos al aire libre y lejos de estructuras** hasta que se haga la reparación, porque un conector eléctrico mal sellado de la bomba de agua puede mojarse y hacer cortocircuito, lo que aumenta el riesgo de incendio. El retiro abarca ciertos modelos 2012–2018, entre ellos algunos Serie 2, 3, 4 y 5, X1, X3, X4, Z4 y X5 xDrive40e; reemplaza un retiro de 2024, y los autos ya reparados bajo ese retiro necesitan la nueva solución, que todavía está en desarrollo. Según NHTSA, las cartas a los dueños se esperan en diciembre y los números VIN podrán consultarse en NHTSA.gov a partir del **25 de diciembre**; Reuters informó que el fabricante tiene conocimiento de 10 incendios que podrían estar relacionados.',
          why: 'Si maneja un BMW antiguo, estaciónelo al aire libre y lejos de su casa o garaje hasta que lo reparen, y revise si cualquier auto suyo tiene retiros pendientes con la búsqueda por placa o VIN en NHTSA.gov. Un incendio que empieza en un auto estacionado también puede dañar la vivienda, y los daños por fuego al propio auto por lo general solo se cubren con cobertura amplia (comprehensive). Vea [comprehensive vs. collision](/es/blog/comprehensive-vs-collision-florida).',
          sources: RECALL,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones está autorizado **hasta las 11:59 p.m. del 11 de diciembre de 2026**, dentro de 25 días; la página de FEMA aún no muestra una nueva extensión. El martes 17 de noviembre la Legislatura celebra su Sesión de Organización (el Senado se reúne a las 10 a.m.) y la Comisión de Miami-Dade vota de forma definitiva las reglas para los robots de reparto en las aceras. La OIR todavía no ha publicado su orden sobre la solicitud de tarifas de compensación laboral de NCCI para 2027. Hasta el lunes por la mañana no habíamos visto una decisión federal sobre la solicitud de Florida de una Declaración de Desastre Mayor por las inundaciones de otoño. Centro Nacional de Huracanes, 7 a.m. del lunes: no se espera la formación de ciclones tropicales en los próximos 7 días.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 16 ноября 2026 г.: риск городских подтоплений на восточном побережье со вторника по четверг повышен до уровня 2 из 4, Майами-Дейд впервые голосует за новые карты затопления FEMA, а владельцам около 720 000 старых BMW советуют парковаться на улице',
      metaTitle: 'Новости 16 ноября 2026: подтопления, карты FEMA, отзыв | M&K',
      description:
        'NWS Miami повысил риск подтоплений на восточном побережье до «умеренного» (2 из 4) со вторника по четверг, Майами-Дейд рассматривает новые карты FEMA, NHTSA объявило отзыв из-за риска пожара.',
      ogAlt:
        'Тяжёлая дождевая туча над затопленной городской улицей с ливнёвкой, карта зон затопления на планшете рядом с домом и машина, припаркованная подальше от гаража, под предупреждающим треугольником',
      intro:
        'Три новости для владельцев домов, водителей и малого бизнеса на юге Флориды в этот понедельник. Каждая изложена своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: NWS Miami повысил угрозу подтоплений для городов Майами-Дейд, Бровард и Палм-Бич до «умеренной» (уровень 2 из 4) со вторника по четверг',
          summary:
            'В утреннем прогностическом обсуждении в понедельник NWS Miami сообщает, что Центр прогнозирования погоды (WPC) повысил риск сильных осадков для городов восточного побережья до **«умеренного» (Slight, уровень 2 из 4) во вторник, среду и четверг** — в воскресенье был минимальный уровень 1, — а почва всё ещё насыщена водой после недавних дождей. Наиболее вероятный сценарий — **2–4 дюйма** (5–10 см) осадков в Майами-Дейд, Броварде и Палм-Бич до утра пятницы, чего достаточно для локальных городских подтоплений; при разумно худшем сценарии (примерно 1 шанс из 10) в отдельных местах может выпасть **6–8 дюймов и больше** (15–20 см) с серьёзными внезапными наводнениями, хотя время и место пока трудно предсказать. До вечера среды на пляжах трёх округов действует **высокий риск разрывных течений**, с понедельника днём до вечера среды — предупреждение для малых судов; синоптики ожидают сильный прибой и возможный значительный размыв пляжей, а к выходным погода должна улучшиться.',
          why: 'Сегодня же очистите водостоки и ливнёвку перед домом, паркуйтесь на возвышенных местах и никогда не въезжайте в стоячую воду: ущерб машине от наводнения покрывается, только если в полисе есть comprehensive, а страховка дома, как правило, наводнения не покрывает. Полис NFIP, купленный сейчас, обычно вступает в силу через 30 дней, так что эту неделю он не покроет. См. [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida) и [страхование от наводнения](/ru/flood-insurance-homestead-fl).',
          sources: WX,
        },
        {
          headline:
            'Обновление: во вторник комиссия Майами-Дейд в первом чтении голосует за принятие новых карт затопления FEMA, которые вступают в силу 19 февраля 2027 г.',
          summary:
            'Совет комиссаров округа Майами-Дейд рассматривает **во вторник, 17 ноября, в первом чтении** постановление (дело 261940, внесено комиссаром Мики Стейнберг). Оно обновит главу 11C кодекса округа, чтобы та ссылалась на карты страховых тарифов от наводнений (FIRM) и исследование рисков затопления FEMA с учётом всех последующих изменений FEMA, а также примет письма FEMA об изменении карты (LOMC) для отдельных участков. В меморандуме мэра говорится, что этого попросили FEMA и Управление по чрезвычайным ситуациям Флориды, что это сохраняет участие округа в Национальной программе страхования от наводнений (NFIP) и его 3-й класс в системе рейтинга сообществ (CRS), и что **обновлённые карты FEMA вступают в силу 19 февраля 2027 г.**, заменяя карты, действующие с 11 сентября 2009 г.; города тоже должны принять новые карты, если их кодексы уже не делают этого автоматически. Новые карты местами меняют зоны затопления и базовые отметки высоты, и новое строительство и капитальная реконструкция в низинах должны будут соответствовать обновлённым требованиям по высоте.',
          why: 'Проверьте, как ваш участок отмечен на новых картах, до 19 февраля: если здание попадёт в зону высокого риска, ипотечный кредитор, как правило, потребует страховку от наводнения, а сертификат высоты (elevation certificate) или поправка к карте FEMA могут повлиять на ваше покрытие. Горячая линия округа по зонам затопления: (305) 372-6466. См. [страхование от наводнения](/ru/flood-insurance-homestead-fl) и наш [гид о королевских приливах и страховке от наводнения](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: MAPS,
        },
        {
          headline:
            'Новое: NHTSA советует владельцам около 720 000 старых BMW парковаться на улице и подальше от зданий из-за риска пожара',
          summary:
            'В рамках отзыва 26V733, объявленного в пятницу, 13 ноября, Национальное управление безопасности дорожного движения США (NHTSA) сообщает, что владельцам **720 796 автомобилей BMW** следует **парковать их на улице и подальше от строений**, пока не будет сделан ремонт: плохо загерметизированный электрический разъём водяного насоса может намокнуть и замкнуть, что повышает риск возгорания. Отзыв касается ряда моделей 2012–2018 годов, в том числе некоторых 2-й, 3-й, 4-й и 5-й серий, X1, X3, X4, Z4 и X5 xDrive40e; он заменяет отзыв 2024 года, и машинам, уже отремонтированным по нему, нужен новый ремонт, который ещё разрабатывается. По данным NHTSA, письма владельцам ожидаются в декабре, а проверить VIN на NHTSA.gov можно будет с **25 декабря**; Reuters сообщает, что производителю известно о 10 возгораниях, которые могут быть с этим связаны.',
          why: 'Если у вас старый BMW, паркуйте его на улице, подальше от дома и гаража, до ремонта, а любую свою машину проверьте на открытые отзывы по номеру или VIN на NHTSA.gov. Пожар, начавшийся в припаркованной машине, может повредить и дом, а ущерб самой машине от огня, как правило, покрывается только при наличии comprehensive. См. [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: RECALL,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) действует **до 23:59 11 декабря 2026 г.**, через 25 дней; на странице FEMA новое продление пока не указано. Во вторник, 17 ноября, Законодательное собрание проводит организационную сессию (Сенат собирается в 10:00), а комиссия Майами-Дейд окончательно голосует за правила для роботов-доставщиков на тротуарах. OIR ещё не опубликовал решение по запросу NCCI о тарифах на страхование компенсаций работникам на 2027 год. На утро понедельника мы не видели федерального решения по запросу Флориды об объявлении крупного стихийного бедствия из-за осенних наводнений. Национальный центр ураганов, 7:00 понедельника: образование тропических циклонов в ближайшие 7 дней не ожидается.',
        },
      ],
      extraSources: BOX,
    },
  },
};
