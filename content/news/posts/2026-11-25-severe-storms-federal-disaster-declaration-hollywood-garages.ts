import type { NewsEdition, NewsSource } from '../types';

// Edition for Wednesday, Nov. 25, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_FFA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-25',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=FFA&format=txt&version=1&glossary=0',
  title: 'Flood Watch, 4:58 a.m. EST Wed Nov 25, 2026',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-24',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=txt&version=1&glossary=0',
  title: 'Coastal Hazard Message (Coastal Flood Advisory, High Rip Current Risk), 11:20 p.m. EST Tue Nov 24, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-25',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:56 a.m. EST Wed Nov 25, 2026',
};

const FEMA_4956: NewsSource = {
  name: 'FEMA',
  date: '2026-11-24',
  url: 'https://www.fema.gov/disaster/4956',
  title: 'Florida Severe Storms and Flooding (DR-4956)',
};

const FEMA_4956_AREAS: NewsSource = {
  name: 'FEMA',
  date: '2026-11-24',
  url: 'https://www.fema.gov/disaster/4956/designated-areas',
  title: 'Designated Areas: Disaster 4956',
};

const WESH_MDD: NewsSource = {
  name: 'WESH 2 News',
  date: '2026-11-24',
  url: 'https://www.wesh.com/article/brevard-county-flood-damage-homes-roads-disaster-declaration-request/74523059',
  title: 'President Trump approves major disaster declaration after historic Florida flooding',
};

const HWD_GARAGES: NewsSource = {
  name: 'City of Hollywood',
  date: '2026-11-24',
  url: 'https://www.hollywoodfl.org/CivicAlerts.aspx?AID=1906',
  title: 'Parking Fees Suspended at City-Operated Parking Garages as of 5pm on Tuesday, November 24th',
};

const FDEM_FALL: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-25',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding: Multi-Agency Resource Centers (checked Nov. 25, 2026)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-25',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Wed Nov 25, 2026',
};

const GOV_CLOSURES: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-11-16',
  url: 'https://www.flgov.com/eog/news/press/2026/governor-ron-desantis-announces-additional-state-office-closures-holiday-season',
  title: 'Governor Ron DeSantis Announces Additional State Office Closures for the Holiday Season',
};

const WEATHER = [NWS_MFL_FFA, NWS_MFL_AFD, NWS_MFL_CFW];
const DECLARATION = [FEMA_4956, FEMA_4956_AREAS, WESH_MDD];
const GARAGES = [HWD_GARAGES];
const MARC = [FDEM_FALL];
const BOX = [FEMA_REAUTH, NHC_TWO, GOV_CLOSURES];

export const edition: NewsEdition = {
  slug: '2026-11-25-severe-storms-federal-disaster-declaration-hollywood-garages',
  datePublished: '2026-11-25',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 25, 2026: heavier rain and a tornado risk on Thanksgiving Eve, a federal disaster declaration for Palm Beach and five other counties, Hollywood garages open for residents’ cars, and a new address for Broward’s recovery center',
      metaTitle: 'Insurance News Nov. 25, 2026: Storms, Federal Disaster Aid | M&K',
      description:
        'Flood Watch and severe storm risk in South Florida today, FEMA approves a disaster declaration for six counties, Hollywood garages open to residents, and the Broward MARC.',
      ogAlt:
        'A dark storm cloud with lightning and a small funnel over a palm tree and a car in floodwater, a columned government building with a checked document, and a multi-level parking garage on higher ground',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners on the day before Thanksgiving. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: the rain forecast went up, and severe storms with a few tornadoes are possible this afternoon in Miami-Dade and Broward',
          summary:
            'NWS Miami kept the **Flood Watch for metro and coastal Miami-Dade, Broward and Palm Beach through late tonight** and raised its numbers since Tuesday: **2 to 4 inches is now the most likely amount**, with a reasonable worst case of 5 to 7 inches and **10 inches or more possible in a few spots**, on ground already saturated by last week’s rain. A low forming near the western tip of Cuba is expected to track across or near South Florida this afternoon, and the Storm Prediction Center has raised Southeast Florida to a **“Slight” (level 2) severe risk**, with damaging gusts and a few tornadoes the main threats, including a **5% tornado probability over Miami-Dade and Broward**. With the king tides, NWS also has a **Coastal Flood Advisory for moderate coastal flooding in coastal Palm Beach and Broward until 7 a.m. Thursday** (minor flooding for coastal Miami-Dade) and a High Rip Current Risk through Thursday evening; the rain should clear by Thursday afternoon, followed by a dry, cooler Friday and Saturday.',
          why: 'Park on higher ground before the afternoon storms, don’t drive through water of unknown depth, and plan holiday trips around the worst of the rain. Water that rises from the street into a home is flood, which standard homeowners policies exclude; wind or a tree falling on the roof is usually a homeowners claim, and a car damaged by floodwater or a falling limb is covered only with comprehensive. See [king tides and flood insurance](/en/blog/king-tides-flood-insurance-miami-dade), [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida) and [Thanksgiving weekend driving](/en/blog/thanksgiving-holiday-driving-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'Update: FEMA approves a major disaster declaration for Palm Beach and five other counties; Broward and Miami-Dade are not on the list yet',
          summary:
            'The President approved **Major Disaster Declaration DR-4956** for Florida on **Tuesday, Nov. 24**, covering severe storms and flooding from **Oct. 31 and continuing**. FEMA’s designated areas show **assistance for individuals and households in Brevard, Indian River, Martin, Okeechobee, Palm Beach and St. Lucie counties**, and Public Assistance for local governments in Brevard, Hardee, Indian River, Martin, Okeechobee and Palm Beach. **Broward and Miami-Dade are not designated as of Wednesday morning**; WESH, citing the state emergency management division, reports that Broward was part of the newer expedited request filed after last week’s flooding. Residents of the designated counties can apply at DisasterAssistance.gov, in the FEMA app or at 800-621-3362.',
          why: 'FEMA says to file with your insurance company first, because its aid cannot pay for losses that insurance already covers. Keep the claim number, adjuster letters and any denial: FEMA may ask for them, and an uninsured or underinsured loss is what federal aid looks at. See [the storm claim checklist](/en/blog/hurricane-claim-checklist-florida), [claim deadlines](/en/blog/hurricane-claim-timeline-florida) and [homeowners insurance in Palm Beach County](/en/homeowners-insurance-palm-beach-county-fl).',
          sources: DECLARATION,
        },
        {
          headline:
            'Hollywood opens five city garages to residents’ cars until 7 a.m. Thursday',
          summary:
            'To help residents of low-lying, flood-prone streets, the City of Hollywood has **waived parking fees in its city-operated garages since 5 p.m. Tuesday**. The garages are Garfield (300 Connecticut St.) and Nebraska (327 Nebraska St.) on Hollywood Beach, and Van Buren (251 S. 20th Ave.), Radius (251 N. 19th Ave.) and University Station (2031 Polk St.) downtown. Spaces are first come, first served for personal vehicles, **proof of Hollywood residency is required**, commercial trucks and fleet vehicles are not allowed, and cars must be in marked spaces or they can be ticketed or towed. Standard rates return at **7 a.m. Thursday, Nov. 26**, so move your car out by then.',
          why: 'Moving a car out of a flood-prone street is the simplest way to avoid a flood-damage claim, especially if your policy has liability only and no comprehensive. Business owners: work trucks and fleet vehicles aren’t allowed in these garages, so plan another high spot for them; for a commercial vehicle, flood damage is covered only by the physical damage (comprehensive) part of its policy. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida), [car insurance in Hollywood](/en/car-insurance-hollywood-fl) and [work truck insurance](/en/work-truck-insurance-florida).',
          sources: GARAGES,
        },
        {
          headline:
            'Update: Broward’s state recovery center opens Friday at Dania Beach City Hall, at a new address',
          summary:
            'The state’s Multi-Agency Resource Center for Broward still opens on **Friday, Nov. 27, 7 a.m. to 7 p.m.**, but the state emergency management page now lists it at **Dania Beach City Hall, 100 W. Dania Beach Blvd.**, instead of the City Hall parking garage at 49 Park Ave. E. that we reported Tuesday. At the center, residents can meet state agencies and nonprofit partners about recovery help, from cleanup to emotional support. Bring identification, proof of residence, your insurance information and any official papers about your flood losses.',
          why: 'Bring your policy declarations page and claim number if you already filed; they speed up any referral. If you have flood insurance and haven’t reported the damage yet, call your flood insurer now rather than waiting for a federal decision for Broward. See [the storm claim checklist](/en/blog/hurricane-claim-checklist-florida) and [homeowners insurance in Broward County](/en/homeowners-insurance-broward-county-fl).',
          sources: MARC,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'State offices are closed today, Wednesday, Nov. 25, and on Thursday and Friday for Thanksgiving. The National Flood Insurance Program is authorized **through 11:59 p.m. on Dec. 11** (16 days left; FEMA’s reauthorization page has not changed since Sept. 28), and a new NFIP policy usually starts after a 30-day wait, so it would not cover today’s rain. The National Hurricane Center expects no tropical cyclones in the next seven days, and the Atlantic hurricane season ends Monday, Nov. 30.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 25 de noviembre de 2026: más lluvia y riesgo de tornados en la víspera de Acción de Gracias, declaración federal de desastre para Palm Beach y otros cinco condados, garajes de Hollywood abiertos para los autos de los residentes y nueva dirección del centro de recuperación de Broward',
      metaTitle: 'Noticias de seguros 25 nov. 2026: tormentas y ayuda federal | M&K',
      description:
        'Vigilancia de inundaciones y riesgo de tormentas severas hoy en el sur de Florida, FEMA aprueba una declaración de desastre para seis condados y garajes en Hollywood.',
      ogAlt:
        'Una nube de tormenta oscura con un rayo y un pequeño embudo sobre una palmera y un auto en agua de inundación, un edificio de gobierno con columnas y un documento aprobado, y un garaje de varios pisos en terreno alto',
      intro:
        'Cuatro novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida en la víspera de Acción de Gracias. Cada noticia está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: subió el pronóstico de lluvia y esta tarde podría haber tormentas severas y algunos tornados en Miami-Dade y Broward',
          summary:
            'El Servicio Meteorológico Nacional en Miami mantiene la **vigilancia de inundaciones para las zonas metropolitanas y costeras de Miami-Dade, Broward y Palm Beach hasta esta noche** y subió sus cifras desde el martes: ahora lo **más probable son 2 a 4 pulgadas**, con un peor escenario razonable de 5 a 7 y **posibles 10 pulgadas o más en algunos puntos**, sobre un suelo ya saturado por la lluvia de la semana pasada. Se espera que una baja presión que se forma cerca del extremo occidental de Cuba pase sobre el sur de Florida o cerca de la región esta tarde, y el Centro de Predicción de Tormentas subió el sureste de Florida a **riesgo “leve” (nivel 2) de tormentas severas**, con ráfagas dañinas y algunos tornados como amenazas principales, incluida una **probabilidad de tornado del 5% sobre Miami-Dade y Broward**. Por las mareas reales, también rige un **aviso de inundación costera por inundación moderada en la costa de Palm Beach y Broward hasta las 7 a.m. del jueves** (inundación menor en la costa de Miami-Dade) y un riesgo alto de corrientes de resaca hasta el jueves por la tarde; la lluvia debería irse el jueves por la tarde, y el viernes y el sábado vendrán secos y más frescos.',
          why: 'Estacione en terreno alto antes de las tormentas de la tarde, no maneje por agua de profundidad desconocida y planifique los viajes del feriado para evitar lo peor de la lluvia. El agua que sube de la calle y entra a la casa es inundación, y las pólizas de vivienda estándar la excluyen; el viento o un árbol que cae sobre el techo suele ser un reclamo de la póliza de vivienda, y un auto dañado por agua o por una rama solo está cubierto con la cobertura comprensiva. Vea [mareas reales y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade), [comprensivo vs. colisión](/es/blog/comprehensive-vs-collision-florida) y [manejar el fin de semana de Acción de Gracias](/es/blog/thanksgiving-holiday-driving-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'Actualización: FEMA aprueba una declaración de desastre mayor para Palm Beach y otros cinco condados; Broward y Miami-Dade todavía no están en la lista',
          summary:
            'El presidente aprobó el **martes 24 de noviembre la Declaración de Desastre Mayor DR-4956** para Florida, por tormentas severas e inundaciones desde el **31 de octubre y en curso**. Según las áreas designadas por FEMA, hay **asistencia para personas y hogares en los condados de Brevard, Indian River, Martin, Okeechobee, Palm Beach y St. Lucie**, y asistencia pública para gobiernos locales en Brevard, Hardee, Indian River, Martin, Okeechobee y Palm Beach. **Broward y Miami-Dade no figuran como designados hasta el miércoles por la mañana**; WESH, citando a la división estatal de manejo de emergencias, informa que Broward forma parte de la nueva solicitud urgente presentada tras las inundaciones de la semana pasada. Los residentes de los condados designados pueden solicitar ayuda en DisasterAssistance.gov, en la app de FEMA o al 800-621-3362.',
          why: 'FEMA pide presentar primero el reclamo a su aseguradora, porque su ayuda no puede pagar pérdidas que el seguro ya cubre. Guarde el número de reclamo, las cartas del ajustador y cualquier negativa: FEMA puede pedirlos, y la ayuda federal se fija en las pérdidas sin seguro o con seguro insuficiente. Vea [lista para reclamos por tormenta](/es/blog/hurricane-claim-checklist-florida), [plazos del reclamo](/es/blog/hurricane-claim-timeline-florida) y [seguro de vivienda en el condado de Palm Beach](/es/homeowners-insurance-palm-beach-county-fl).',
          sources: DECLARATION,
        },
        {
          headline:
            'Hollywood abre cinco garajes municipales para los autos de los residentes hasta las 7 a.m. del jueves',
          summary:
            'Para ayudar a quienes viven en calles bajas propensas a inundarse, la Ciudad de Hollywood **suspendió desde las 5 p.m. del martes el cobro de estacionamiento en sus garajes municipales**. Son Garfield (300 Connecticut St.) y Nebraska (327 Nebraska St.) en Hollywood Beach, y Van Buren (251 S. 20th Ave.), Radius (251 N. 19th Ave.) y University Station (2031 Polk St.) en el centro. Los espacios se asignan por orden de llegada para vehículos personales, **se exige prueba de residencia en Hollywood**, no se admiten camiones comerciales ni vehículos de flota, y los autos deben quedar en espacios marcados o pueden ser multados o remolcados. La tarifa normal vuelve a las **7 a.m. del jueves 26 de noviembre**, así que retire su auto antes de esa hora.',
          why: 'Sacar el auto de una calle que se inunda es la forma más sencilla de evitar un reclamo por daños de agua, sobre todo si su póliza solo tiene responsabilidad civil y no comprensiva. Dueños de negocio: los camiones de trabajo y vehículos de flota no se admiten en estos garajes, así que busque otro lugar alto para ellos; en un vehículo comercial, el daño por inundación solo lo cubre la parte de daños físicos (comprensiva) de su póliza. Vea [comprensivo vs. colisión](/es/blog/comprehensive-vs-collision-florida), [seguro de auto en Hollywood](/es/car-insurance-hollywood-fl) y [seguro para camiones de trabajo](/es/work-truck-insurance-florida).',
          sources: GARAGES,
        },
        {
          headline:
            'Actualización: el centro estatal de recuperación de Broward abre el viernes en el Ayuntamiento de Dania Beach, con nueva dirección',
          summary:
            'El Centro de Recursos Multiagencia del estado para Broward sigue abriendo el **viernes 27 de noviembre, de 7 a.m. a 7 p.m.**, pero la página estatal de manejo de emergencias ahora lo ubica en el **Ayuntamiento de Dania Beach, 100 W. Dania Beach Blvd.**, en lugar del estacionamiento del Ayuntamiento en 49 Park Ave. E. que informamos el martes. Allí los residentes pueden reunirse con agencias estatales y organizaciones sin fines de lucro para pedir ayuda en la recuperación, desde la limpieza hasta apoyo emocional. Lleve identificación, comprobante de domicilio, los datos de su seguro y cualquier documento oficial sobre sus pérdidas por la inundación.',
          why: 'Lleve la página de declaraciones de su póliza y el número de reclamo si ya lo presentó; agilizan cualquier referido. Si tiene seguro de inundación y aún no reportó el daño, llame ya a su aseguradora de inundación en lugar de esperar una decisión federal para Broward. Vea [lista para reclamos por tormenta](/es/blog/hurricane-claim-checklist-florida) y [seguro de vivienda en el condado de Broward](/es/homeowners-insurance-broward-county-fl).',
          sources: MARC,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'Las oficinas estatales cierran hoy, miércoles 25 de noviembre, y el jueves y el viernes por Acción de Gracias. El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p.m. del 11 de diciembre** (quedan 16 días; la página de FEMA sobre la reautorización no cambia desde el 28 de septiembre), y una póliza nueva del NFIP suele entrar en vigor tras 30 días de espera, así que no cubriría la lluvia de hoy. El Centro Nacional de Huracanes no espera ciclones tropicales en los próximos siete días, y la temporada de huracanes del Atlántico termina el lunes 30 de noviembre.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 25 ноября 2026: накануне Дня благодарения больше дождя и риск торнадо, федеральная декларация о бедствии для Палм-Бич и ещё пяти округов, гаражи Голливуда открыты для машин жителей и новый адрес центра помощи в Бровард',
      metaTitle: 'Страховые новости 25 ноября 2026: грозы, федеральная помощь | M&K',
      description:
        'Угроза наводнения и сильных гроз сегодня в Южной Флориде, FEMA одобрило декларацию о бедствии для шести округов, гаражи Голливуда и центр помощи в Бровард.',
      ogAlt:
        'Тёмная грозовая туча с молнией и небольшой воронкой над пальмой и машиной в воде, здание с колоннами и одобренный документ, многоэтажный паркинг на возвышенности',
      intro:
        'Четыре новости для владельцев домов, водителей и малого бизнеса Южной Флориды накануне Дня благодарения. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: прогноз осадков повысили, днём в Майами-Дейд и Бровард возможны сильные грозы и отдельные торнадо',
          summary:
            'Национальная метеослужба в Майами оставила **Flood Watch (угрозу наводнения) для городских и прибрежных районов Майами-Дейд, Бровард и Палм-Бич до поздней ночи** и повысила прогноз по сравнению со вторником: теперь **наиболее вероятно 2–4 дюйма осадков**, при разумно худшем сценарии 5–7 дюймов, а **местами возможно 10 дюймов и больше** — и всё это на земле, которая и так пропитана дождями прошлой недели. Область низкого давления, формирующаяся у западной оконечности Кубы, днём должна пройти над Южной Флоридой или рядом с ней; Центр прогнозирования штормов повысил для юго-востока Флориды **риск сильных гроз до уровня «Slight» (2 из 5)**: главные угрозы — разрушительные порывы ветра и отдельные торнадо, **вероятность торнадо над Майами-Дейд и Бровард — 5%**. Из-за king tides (сизигийных приливов) действует **предупреждение об умеренном прибрежном подтоплении на побережье Палм-Бич и Бровард до 7 утра четверга** (на побережье Майами-Дейд — слабое подтопление) и высокий риск отбойных течений до вечера четверга. Дождь должен закончиться в четверг днём, а пятница и суббота будут сухими и прохладнее.',
          why: 'Переставьте машину повыше до дневных гроз, не въезжайте в воду неизвестной глубины и планируйте праздничные поездки так, чтобы переждать самый сильный дождь. Вода, которая поднимается с улицы и заходит в дом, — это наводнение, а стандартный полис на дом его исключает; ветер или упавшее на крышу дерево — обычно случай по полису на дом, а машину, пострадавшую от воды или упавшей ветки, покрывает только comprehensive. Подробнее: [king tides и страховка от наводнения](/ru/blog/king-tides-flood-insurance-miami-dade), [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida) и [поездки на День благодарения](/ru/blog/thanksgiving-holiday-driving-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'Обновление: FEMA одобрило декларацию о крупном стихийном бедствии для Палм-Бич и ещё пяти округов; Бровард и Майами-Дейд в список пока не вошли',
          summary:
            'Во **вторник, 24 ноября, президент одобрил декларацию о крупном стихийном бедствии DR-4956** для Флориды — по сильным грозам и наводнениям **с 31 октября и по настоящее время**. По данным FEMA о назначенных территориях, **помощь частным лицам и семьям доступна в округах Бревард, Индиан-Ривер, Мартин, Окичоби, Палм-Бич и Сент-Луси**, а помощь местным властям (Public Assistance) — в Бревард, Харди, Индиан-Ривер, Мартин, Окичоби и Палм-Бич. **Бровард и Майами-Дейд по состоянию на утро среды в списке нет**; телеканал WESH со ссылкой на управление по чрезвычайным ситуациям штата сообщает, что Бровард включён в новый срочный запрос, поданный после наводнения прошлой недели. Жители назначенных округов могут подать заявку на DisasterAssistance.gov, в приложении FEMA или по телефону 800-621-3362.',
          why: 'FEMA просит сначала подать претензию в свою страховую: федеральная помощь не оплачивает убытки, которые уже покрывает страховка. Сохраните номер претензии, письма аджастера и любой отказ — FEMA может их запросить, ведь федеральная помощь смотрит именно на незастрахованные или недостаточно застрахованные убытки. Подробнее: [чек-лист претензии после шторма](/ru/blog/hurricane-claim-checklist-florida), [сроки претензии](/ru/blog/hurricane-claim-timeline-florida) и [страховка дома в округе Палм-Бич](/ru/homeowners-insurance-palm-beach-county-fl).',
          sources: DECLARATION,
        },
        {
          headline:
            'Голливуд открыл пять городских гаражей для машин жителей до 7 утра четверга',
          summary:
            'Чтобы помочь жителям низких улиц, которые часто затапливает, город Голливуд **с 5 вечера вторника не берёт плату за парковку в городских гаражах**. Это Garfield (300 Connecticut St.) и Nebraska (327 Nebraska St.) на Hollywood Beach, а также Van Buren (251 S. 20th Ave.), Radius (251 N. 19th Ave.) и University Station (2031 Polk St.) в центре. Места — в порядке очереди и только для личных машин, **нужно подтверждение, что вы живёте в Голливуде**; коммерческие грузовики и машины автопарков не допускаются, а машины вне размеченных мест могут оштрафовать или эвакуировать. Обычный тариф вернётся в **7 утра четверга, 26 ноября**, поэтому заберите машину до этого времени.',
          why: 'Убрать машину с улицы, которую заливает, — самый простой способ избежать претензии за ущерб от воды, особенно если в полисе только ответственность (liability) без comprehensive. Владельцам бизнеса: рабочие грузовики и машины автопарка в эти гаражи не пускают, поэтому заранее найдите для них другое высокое место; у коммерческой машины ущерб от наводнения покрывает только часть полиса за физический ущерб (comprehensive). Подробнее: [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida), [автостраховка в Голливуде](/ru/car-insurance-hollywood-fl) и [страховка рабочих грузовиков](/ru/work-truck-insurance-florida).',
          sources: GARAGES,
        },
        {
          headline:
            'Обновление: центр помощи штата для Бровард откроется в пятницу в мэрии Дания-Бич — по новому адресу',
          summary:
            'Многоведомственный центр помощи (MARC) штата для округа Бровард по-прежнему открывается **в пятницу, 27 ноября, с 7 утра до 7 вечера**, но на странице управления по чрезвычайным ситуациям штата теперь указан адрес **мэрии Дания-Бич: 100 W. Dania Beach Blvd.** — вместо гаража мэрии на 49 Park Ave. E., о котором мы писали во вторник. Там жители могут встретиться с представителями ведомств штата и некоммерческих организаций и узнать о помощи при восстановлении — от уборки до психологической поддержки. Возьмите с собой удостоверение личности, подтверждение адреса, данные страховки и любые официальные документы об ущербе от наводнения.',
          why: 'Возьмите страницу деклараций полиса и номер претензии, если вы её уже подали, — так любое направление оформят быстрее. Если у вас есть страховка от наводнения, а об ущербе вы ещё не сообщили, звоните своей страховой сейчас, не дожидаясь федерального решения по Бровард. Подробнее: [чек-лист претензии после шторма](/ru/blog/hurricane-claim-checklist-florida) и [страховка дома в округе Бровард](/ru/homeowners-insurance-broward-county-fl).',
          sources: MARC,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Учреждения штата закрыты сегодня, в среду 25 ноября, а также в четверг и пятницу по случаю Дня благодарения. Национальная программа страхования от наводнений (NFIP) продлена **до 23:59 11 декабря** (осталось 16 дней; страница FEMA о продлении не менялась с 28 сентября), а новый полис NFIP обычно вступает в силу через 30 дней, так что сегодняшний дождь он не покроет. Национальный центр по ураганам не ожидает тропических циклонов в ближайшие семь дней, а сезон ураганов в Атлантике заканчивается в понедельник, 30 ноября.',
        },
      ],
      extraSources: BOX,
    },
  },
};
