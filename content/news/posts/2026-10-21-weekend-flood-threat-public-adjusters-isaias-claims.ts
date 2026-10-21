import type { NewsEdition, NewsSource } from '../types';

// Edition for Wednesday, Oct. 21, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-21',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, Wed Oct 21, 2026',
};

const NWS_MFL_WWA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-20',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=mfl&wwa=all',
  title: 'Coastal Hazard Message: Coastal Flood Statement and High Rip Current Risk, coastal Broward and Miami-Dade',
};

const SFWMD_WEEKLY: NewsSource = {
  name: 'South Florida Water Management District',
  date: '2026-10-19',
  url: 'https://sfwmd.gov/news-events/news/weekly-king-tide-forecast-46',
  title: 'Weekly King Tide Forecast (Oct. 19–27, 2026)',
};

const AG_PA: NewsSource = {
  name: 'Florida Office of the Attorney General',
  date: '2026-10-20',
  url: 'https://www.myfloridalegal.com/newsrelease/attorney-general-james-uthmeier-launches-investigation-homeowners-insurers-blocking',
  title: 'Attorney General Launches Investigation into Homeowners Insurers for Blocking Outside Claims Assistance',
};

const OIR_ISAIAS: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://floir.gov/home/hurricane-isaias',
  title: 'Hurricane Isaias: catastrophe claims data (as of Oct. 20, 2026)',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/20/media-advisory-national-council-on-compensation-insurance-public-rate-hearing',
  title: 'Media Advisory: National Council on Compensation Insurance Public Rate Hearing',
};

const FL_GOV_DR: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-10-16',
  url: 'https://www.flgov.com/eog/news/press/2026/governor-ron-desantis-announces-florida-requests-approval-major-disaster',
  title: 'Florida Requests Approval for Major Disaster Declaration Following Hurricane Isaias',
};

export const edition: NewsEdition = {
  slug: '2026-10-21-weekend-flood-threat-public-adjusters-isaias-claims',
  datePublished: '2026-10-21',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 21, 2026: King tides plus heavy weekend rain raise the flood threat, the state probes “anti-public adjuster” clauses, and Isaias claims pass 54,000',
      metaTitle: 'Insurance News Oct. 21, 2026: Weekend Flood Threat | M&K',
      description:
        'NWS Miami warns king tides and 3–6 inches of weekend rain could bring serious flooding, the AG probes anti-public-adjuster clauses, Isaias claims top 54,000.',
      ogAlt:
        'Storm clouds and rain over a house and a parked car near rising water, a magnifying glass over a policy, and a clipboard with a bar chart',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'King tides plus heavy weekend rain: NWS Miami warns of possible serious flooding along the east coast',
          summary:
            'The National Weather Service in Miami expects minor coastal flooding to start today around high tide along the east coast, and a Coastal Flood Statement covers coastal Miami-Dade and Broward from early Wednesday through Thursday evening. Forecasters say water levels are already running above predictions and could reach moderate flood levels as early as Friday and more likely over the weekend, with Palm Beach County possibly touching major levels at the king-tide peak; the South Florida Water Management District’s outlook for Oct. 19–27 also says east-coast tides may approach the “major” threshold late in that period. On top of the tides, rounds of heavy rain are likely Saturday and Sunday, possibly into Monday: the average forecast is 3 to 6 inches for the east-coast metro from Friday through Monday, with a worst case above 10 inches, plus northeast wind gusts of 30 to 40 mph near the coast. NWS Miami says flood watches or warnings are very likely if the forecast holds, and the high rip-current risk on Atlantic beaches is expected to last into early next week.',
          why: 'Before Friday, move cars out of low spots, clear drains and gutters, lift valuables off the floor and keep your policy numbers handy; never drive through standing water. Flood damage to a home is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), and a new National Flood Insurance Program policy generally has a 30-day waiting period, so buying one now won’t cover this weekend; for cars, flood damage falls under comprehensive coverage ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). More in our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_AFD, NWS_MFL_WWA, SFWMD_WEEKLY],
        },
        {
          headline:
            'Attorney General opens an investigation into policy clauses that bar homeowners from hiring public adjusters',
          summary:
            'Florida Attorney General James Uthmeier announced on Oct. 20 that his office has opened an investigation and subpoenaed a company that writes surplus lines homeowners policies in Florida, looking into possible illegal agreements behind so-called “anti-public adjuster” clauses. According to the office, under these clauses an insurer can reject an entire claim if the homeowner hires a licensed public adjuster, a professional who works only for the policyholder on a claim. The office says such surplus lines policies often cover harder-to-insure homes, such as beachfront properties and houses with older roofs, and the subpoena seeks records on trade-group memberships, communications with other insurers and any agreements to keep homeowners from using public adjusters. This is an investigation, not a finding of wrongdoing.',
          why: 'Before you hire anyone to help with a claim, read the “duties after loss” and claim-conditions sections of your policy (especially if it is a surplus lines policy) and check that the adjuster holds a Florida license with the Department of Financial Services. Not sure what your policy says? [Ask us to review it](/en/quote), and see our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida).',
          sources: [AG_PA],
        },
        {
          headline:
            'Update: Isaias claims climb to about 54,800, with roughly $651 million in losses reported in the state’s claim table',
          summary:
            'The Florida Office of Insurance Regulation has updated its Hurricane Isaias claims data, now as of Oct. 20: insurers report 54,797 claims across all lines, up from 46,509 as of Oct. 15, including 40,774 homeowners claims, 4,695 private passenger auto claims and 1,471 commercial property claims. The claim table shows about $651 million in total losses incurred (the summary line at the top of the page still shows the earlier $582 million figure). About 21.8% of claims have been closed, 3,555 with a payment and 8,413 without; among the no-payment closures, 6,355 were for “administrative reasons,” 1,203 were below the deductible, 694 were excluded or had no policy in force, and 161 lacked flood coverage. Santa Rosa (26,297) and Escambia (16,690) counties still account for most claims; as of Wednesday morning, FEMA had not yet acted on the state’s request for a major disaster declaration.',
          why: 'The deductible and flood numbers are a reminder to know your hurricane deductible and whether you have flood coverage before a storm, not after. Our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida) explains what to expect after you file.',
          sources: [OIR_ISAIAS, FL_GOV_DR],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Coming up: workers’ comp rate hearing',
          text: 'The Office of Insurance Regulation will hold its virtual public hearing on the 2027 workers’ compensation rate filings from the National Council on Compensation Insurance on Tuesday, Oct. 27, at 10 a.m. ET; you can join online or by phone at (850) 328-4354, access code 492598897#. Written public comments are accepted through Nov. 10 at 5 p.m. ET at ratehearings@floir.gov with the subject line “NCCI”.',
        },
      ],
      extraSources: [OIR_NCCI],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 21 de oct. de 2026: mareas rey y fuertes lluvias el fin de semana elevan el riesgo de inundación, el Estado investiga cláusulas contra los ajustadores públicos y los reclamos por Isaias superan los 54,000',
      metaTitle: 'Noticias de seguros 21/10/2026: riesgo de inundación | M&K',
      description:
        'NWS Miami advierte de mareas rey y 3–6 pulgadas de lluvia el fin de semana, el Fiscal General investiga cláusulas contra ajustadores públicos e Isaias.',
      ogAlt:
        'Nubes de tormenta y lluvia sobre una casa y un auto estacionado junto al agua que sube, una lupa sobre una póliza y un portapapeles con un gráfico de barras',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Mareas rey y fuertes lluvias el fin de semana: el NWS de Miami advierte de posibles inundaciones serias en la costa este',
          summary:
            'El Servicio Nacional de Meteorología (NWS) en Miami prevé que hoy comiencen inundaciones costeras leves con la marea alta en la costa este, y una Declaración de Inundación Costera (Coastal Flood Statement) cubre la costa de Miami-Dade y Broward desde la madrugada del miércoles hasta la noche del jueves. Los meteorólogos indican que el agua ya está por encima de lo previsto y podría alcanzar niveles de inundación moderada desde el viernes, y con más probabilidad durante el fin de semana; en el condado de Palm Beach incluso podría llegar a niveles mayores en el pico de las mareas rey. El pronóstico del Distrito de Manejo del Agua del Sur de Florida (SFWMD) para el 19 al 27 de octubre también señala que las mareas de la costa este podrían acercarse al umbral “mayor” al final de ese período. A las mareas se suman probables aguaceros el sábado y el domingo, quizá hasta el lunes: el pronóstico promedio es de 3 a 6 pulgadas de viernes a lunes en el área metropolitana de la costa este, con un peor escenario de más de 10 pulgadas, además de ráfagas del noreste de 30 a 40 mph cerca de la costa. El NWS de Miami dice que es muy probable que se emitan vigilancias o avisos de inundación si el pronóstico se mantiene, y el alto riesgo de corrientes de resaca en las playas del Atlántico seguiría hasta comienzos de la próxima semana.',
          why: 'Antes del viernes, saque los autos de las zonas bajas, limpie desagües y canaletas, suba del piso los objetos de valor y tenga a mano sus números de póliza; nunca maneje por agua estancada. Los daños por inundación en la vivienda solo los cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, y una póliza nueva del Programa Nacional de Seguro contra Inundaciones (NFIP) por lo general tiene un período de espera de 30 días, así que comprarla ahora no cubrirá este fin de semana; en los autos, el daño por inundación lo cubre la cobertura amplia (comprehensive) ([comprehensive vs. colisión](/es/blog/comprehensive-vs-collision-florida)). Más información en nuestra [guía sobre las mareas rey](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_AFD, NWS_MFL_WWA, SFWMD_WEEKLY],
        },
        {
          headline:
            'El Fiscal General investiga cláusulas de pólizas que impiden contratar a un ajustador público',
          summary:
            'El Fiscal General de Florida, James Uthmeier, anunció el 20 de octubre que su oficina abrió una investigación y envió una citación (subpoena) a una empresa que suscribe pólizas de vivienda de líneas excedentes (surplus lines) en Florida, para examinar posibles acuerdos ilegales detrás de las llamadas cláusulas “anti ajustador público”. Según la oficina, con estas cláusulas la aseguradora puede rechazar todo el reclamo si el propietario contrata a un ajustador público con licencia, un profesional que trabaja solo para el asegurado en su reclamo. La oficina explica que estas pólizas de líneas excedentes suelen cubrir viviendas más difíciles de asegurar, como propiedades frente al mar y casas con techos antiguos, y la citación pide registros sobre membresías en asociaciones del sector, comunicaciones con otras aseguradoras y cualquier acuerdo para impedir el uso de ajustadores públicos. Se trata de una investigación, no de una conclusión de que haya habido irregularidades.',
          why: 'Antes de contratar a alguien para que le ayude con un reclamo, lea en su póliza las secciones de obligaciones después de una pérdida (“duties after loss”) y condiciones del reclamo (sobre todo si es una póliza de líneas excedentes) y verifique que el ajustador tenga licencia de Florida ante el Departamento de Servicios Financieros. ¿No está seguro de lo que dice su póliza? [Pídanos que la revisemos](/es/quote) y vea nuestra [lista de pasos para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida).',
          sources: [AG_PA],
        },
        {
          headline:
            'Actualización: los reclamos por Isaias suben a unos 54,800, con cerca de $651 millones en pérdidas en la tabla del Estado',
          summary:
            'La Oficina de Regulación de Seguros de Florida (OIR) actualizó sus datos de reclamos por el huracán Isaias, ahora al 20 de octubre: las aseguradoras reportan 54,797 reclamos en todas las líneas, frente a 46,509 al 15 de octubre, entre ellos 40,774 de seguros de vivienda, 4,695 de autos particulares y 1,471 de propiedad comercial. La tabla de reclamos muestra unos $651 millones en pérdidas totales incurridas (la cifra resumida en la parte superior de la página todavía indica los $582 millones anteriores). Se ha cerrado alrededor del 21.8% de los reclamos, 3,555 con pago y 8,413 sin pago; de los cerrados sin pago, 6,355 fueron por “razones administrativas”, 1,203 por daños por debajo del deducible, 694 por exclusiones o por no haber póliza vigente y 161 por falta de cobertura de inundación. Los condados de Santa Rosa (26,297) y Escambia (16,690) siguen concentrando la mayoría de los reclamos; hasta la mañana del miércoles, FEMA todavía no había respondido a la solicitud del Estado de una declaración de desastre mayor.',
          why: 'Las cifras de deducibles e inundación recuerdan que conviene conocer su deducible por huracán y saber si tiene cobertura de inundación antes de una tormenta, no después. Nuestra [guía de plazos de un reclamo por huracán](/es/blog/hurricane-claim-timeline-florida) explica qué esperar después de presentar el reclamo.',
          sources: [OIR_ISAIAS, FL_GOV_DR],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Próximamente: audiencia sobre tarifas de compensación laboral',
          text: 'La Oficina de Regulación de Seguros celebrará el martes 27 de octubre a las 10 a.m. (hora del Este) su audiencia pública virtual sobre las tarifas de compensación laboral (workers’ comp) para 2027 propuestas por el National Council on Compensation Insurance (NCCI); se puede participar en línea o por teléfono al (850) 328-4354, código de acceso 492598897#. Los comentarios por escrito se reciben hasta el 10 de noviembre a las 5 p.m. (hora del Este) en ratehearings@floir.gov, con el asunto “NCCI”.',
        },
      ],
      extraSources: [OIR_NCCI],
    },
    ru: {
      title:
        'Страховые новости Флориды, 21 октября 2026: king tides и сильные дожди в выходные грозят подтоплением, штат проверяет запреты на публичных аджастеров, заявлений после «Исайаса» — больше 54 000',
      metaTitle: 'Страховые новости 21.10.2026: угроза подтопления | M&K Agency',
      description:
        'NWS Miami: king tides и 3–6 дюймов дождя в выходные, генпрокурор проверяет запрет публичных аджастеров в полисах, заявлений после «Исайаса» — более 54 000.',
      ogAlt:
        'Грозовые тучи и дождь над домом и припаркованной машиной у прибывающей воды, лупа над страховым полисом и планшет со столбчатой диаграммой',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'King tides и ливни в выходные: метеослужба Майами предупреждает о возможном серьёзном подтоплении на восточном побережье',
          summary:
            'Национальная метеослужба (NWS) в Майами ожидает, что уже сегодня во время прилива на восточном побережье начнётся слабое прибрежное подтопление; для прибрежных районов Miami-Dade и Broward действует предупреждение о прибрежном подтоплении (Coastal Flood Statement) — с раннего утра среды до вечера четверга. По словам синоптиков, вода уже стоит выше прогноза и может достичь уровня умеренного подтопления уже в пятницу, а ещё вероятнее — в выходные; в округе Palm Beach на пике king tides не исключён даже сильный уровень. Прогноз Управления водными ресурсами Южной Флориды (SFWMD) на 19–27 октября тоже говорит, что к концу этого периода приливы на восточном побережье могут приблизиться к порогу сильного подтопления. К приливам добавятся ливни: они вероятны в субботу и воскресенье, возможно и в понедельник — в среднем 3–6 дюймов (примерно 8–15 см) с пятницы по понедельник для агломерации восточного побережья, в худшем случае больше 10 дюймов, плюс порывы северо-восточного ветра до 30–40 миль/ч у побережья. NWS Miami пишет, что если прогноз сохранится, предупреждения о наводнении (flood watch или warning) весьма вероятны, а высокий риск обратных течений (rip currents) на атлантических пляжах продержится до начала следующей недели.',
          why: 'До пятницы уберите машины из низких мест, прочистите водостоки, поднимите ценные вещи с пола и держите под рукой номера полисов; никогда не въезжайте в стоячую воду. Ущерб дому от наводнения покрывает только отдельный полис от наводнения (flood), а не стандартная страховка дома, а у нового полиса федеральной программы NFIP обычно 30-дневный период ожидания — купленный сейчас, он эти выходные не покроет; ущерб машине от воды покрывает comprehensive ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Подробнее — в нашем [материале о king tides](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_AFD, NWS_MFL_WWA, SFWMD_WEEKLY],
        },
        {
          headline:
            'Генпрокурор Флориды проверяет пункты полисов, запрещающие нанимать публичного аджастера',
          summary:
            'Генеральный прокурор Флориды Джеймс Утмайер 20 октября объявил, что его офис начал расследование и направил повестку (subpoena) компании, которая оформляет полисы страхования домов на рынке surplus lines во Флориде, — проверяются возможные незаконные договорённости вокруг так называемых пунктов «против публичных аджастеров». По данным офиса, по таким пунктам страховщик может отказать во всём страховом возмещении, если домовладелец наймёт лицензированного публичного аджастера — специалиста, который работает только на страхователя. Офис отмечает, что такие полисы surplus lines часто покрывают дома, которые сложнее застраховать, например у самого океана или со старыми крышами; повестка требует документы о членстве в отраслевых ассоциациях, переписке с другими страховщиками и любых договорённостях не допускать публичных аджастеров. Это расследование, а не вывод о нарушениях.',
          why: 'Прежде чем нанимать кого-то для помощи со страховым случаем, прочитайте в полисе разделы об обязанностях после ущерба («duties after loss») и условиях урегулирования (особенно если полис surplus lines) и проверьте, что у аджастера есть лицензия Флориды в Департаменте финансовых услуг (DFS). Не уверены, что написано в вашем полисе? [Попросите нас его посмотреть](/ru/quote), а также загляните в наш [чек-лист на случай урагана](/ru/blog/hurricane-claim-checklist-florida).',
          sources: [AG_PA],
        },
        {
          headline:
            'Обновление: заявлений после «Исайаса» уже около 54 800, в таблице штата — примерно $651 млн убытков',
          summary:
            'Управление по регулированию страхования Флориды (OIR) обновило данные по урагану «Исайас», теперь на 20 октября: страховщики сообщают о 54 797 заявлениях по всем видам страхования против 46 509 на 15 октября, в том числе 40 774 по страховке домов, 4 695 по личным автомобилям и 1 471 по коммерческой недвижимости. В таблице заявлений общие понесённые убытки составляют около $651 млн (итоговая строка вверху страницы пока показывает прежние $582 млн). Закрыто около 21,8% заявлений — 3 555 с выплатой и 8 413 без выплаты; из закрытых без выплаты 6 355 отнесены к «административным причинам», 1 203 — ущерб ниже франшизы, 694 — исключения из покрытия или отсутствие действующего полиса, 161 — нет покрытия от наводнения. Больше всего заявлений по-прежнему в округах Santa Rosa (26 297) и Escambia (16 690); на утро среды FEMA ещё не приняла решения по запросу штата об объявлении крупного стихийного бедствия (major disaster).',
          why: 'Цифры по франшизам и наводнению — напоминание: знать размер своей ураганной франшизы и есть ли у вас покрытие от наводнения нужно до шторма, а не после. Что происходит после подачи заявления — в нашем [материале о сроках урегулирования после урагана](/ru/blog/hurricane-claim-timeline-florida).',
          sources: [OIR_ISAIAS, FL_GOV_DR],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Скоро: слушания по тарифам workers’ comp',
          text: 'Во вторник, 27 октября, в 10:00 по восточному времени OIR проведёт виртуальные публичные слушания по предложенным National Council on Compensation Insurance (NCCI) тарифам страхования работников от несчастных случаев (workers’ comp) на 2027 год; подключиться можно онлайн или по телефону (850) 328-4354, код доступа 492598897#. Письменные комментарии принимаются до 17:00 по восточному времени 10 ноября на ratehearings@floir.gov с темой письма «NCCI».',
        },
      ],
      extraSources: [OIR_NCCI],
    },
  },
};
