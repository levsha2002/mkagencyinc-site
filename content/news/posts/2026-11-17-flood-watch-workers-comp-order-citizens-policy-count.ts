import type { NewsEdition, NewsSource } from '../types';

// Edition for Tuesday, Nov. 17, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_FFA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-17',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=FFA&format=txt&version=1&glossary=0',
  title: 'Flood Watch, NWS Miami, 8:07 a.m. EST Tue Nov 17, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-17',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 5:48 a.m. EST Tue Nov 17, 2026',
};

const OIR_WC: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-11-16',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/11/16/insurance-commissioner-mike-yaworsky-approves-7.4--workers--compensation-rate-cut--marking-11th-straight-year-of-reductions',
  title: 'Insurance Commissioner Mike Yaworsky Approves 7.4% Workers’ Compensation Rate Cut',
};

const PHOENIX_WC: NewsSource = {
  name: 'Florida Phoenix',
  date: '2026-11-16',
  url: 'https://floridaphoenix.com/2026/11/16/workers-compensation-rates-ordered-lowered-by-average-7-4-in-2027/',
  title: 'Workers’ compensation rates ordered lowered by average 7.4% in 2027',
};

const CITIZENS_PIF: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-11-10',
  url: 'https://www.citizensfla.com/policies-in-force',
  title: 'Policies in Force: month-end Oct. 31, 2026 (report run Nov. 10, 2026)',
};

const CITIZENS_COUNTY: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-11-10',
  url: 'https://www.citizensfla.com/documents/20702/38830519/20261031+Detail+by+County.pdf/bd671853-f860-c77a-62fa-9d4f9e0be36e',
  title: 'Policies in Force, Detail by County, Oct. 31, 2026 (PDF)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-17',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Tue Nov 17, 2026',
};

const WX = [NWS_MFL_FFA, NWS_MFL_AFD];
const WC = [OIR_WC, PHOENIX_WC];
const CIT = [CITIZENS_PIF, CITIZENS_COUNTY];
const BOX = [FEMA_REAUTH, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-17-flood-watch-workers-comp-order-citizens-policy-count',
  datePublished: '2026-11-17',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 17, 2026: a Flood Watch for all of Southeast Florida through Thursday, the state orders a 7.4% average decrease in workers’ compensation rates for 2027, and Citizens drops to about 216,000 policies',
      metaTitle: 'Insurance News Nov. 17, 2026: Flood Watch, Workers’ Comp, Citizens | M&K',
      description:
        'NWS Miami issues a Flood Watch through Thursday evening, OIR approves a 7.4% average workers’ comp rate decrease from Jan. 1, 2027, and Citizens reports 216,447 policies.',
      ogAlt:
        'Heavy rain falling on a flooded street near a house, a hard hat and a clipboard on a desk, and a row of houses with a downward arrow',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Tuesday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: NWS Miami issues a Flood Watch for Miami-Dade, Broward and Palm Beach from 1 p.m. Tuesday through Thursday evening',
          summary:
            'At 8:07 a.m. Tuesday, NWS Miami put **all of Southeast Florida under a Flood Watch from 1 p.m. Tuesday through Thursday evening**, including metro, inland, coastal and far south Miami-Dade, Broward and Palm Beach. Several rounds of storms could bring **2 to 4 inches** of rain through late Thursday, with **6 to 8 inches and isolated amounts over 10 inches** possible and rainfall rates of 1 to 2 inches per hour. Forecasters say repeated heavy rain along the east coast could cause impactful urban flash flooding, and they also warn of life-threatening rip currents and dangerous surf at Miami-Dade, Broward and Palm Beach beaches for the rest of the week.',
          why: 'A watch means flooding is possible, so act before the rain: clear gutters and the storm drain in front of your home, move cars to higher ground, and never drive through standing water. Flood damage to a car is covered only if the policy includes comprehensive coverage, and homeowners policies generally exclude flood; take dated photos if water gets in. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida) and [flood insurance](/en/flood-insurance-homestead-fl).',
          sources: WX,
        },
        {
          headline:
            'Follow-up: Florida’s insurance commissioner approves a 7.4% overall average decrease in workers’ compensation rates for policies starting Jan. 1, 2027',
          summary:
            'On Monday, Nov. 16, Insurance Commissioner Mike Yaworsky signed a final order approving the **7.4% statewide overall rate decrease** for workers’ compensation proposed by the National Council on Compensation Insurance (NCCI), the rating organization that files these rates. It applies to **new and renewal policies effective on or after Jan. 1, 2027**, and OIR says it is the 11th year in a row that Florida has lowered these rates. The order follows the virtual public hearing OIR held on Oct. 27.',
          why: 'The 7.4% is a statewide average: what happens to your own policy at renewal still depends on your payroll, job classifications and claims history. Most Florida employers must carry workers’ comp, construction businesses generally need it from their first employee, and exempt officers must keep a valid exemption on file with the state. See [workers’ comp exemptions in construction](/en/blog/workers-comp-exemption-florida-construction) and [employee or 1099?](/en/blog/helper-employee-or-1099-florida-workers-comp).',
          sources: WC,
        },
        {
          headline:
            'New: Citizens Property Insurance reports 216,447 policies at the end of October, 38,389 fewer than a month earlier',
          summary:
            'Citizens’ latest monthly report shows **216,447 policies in force on Oct. 31, 2026**, down from 254,836 on Sept. 30; its weekly snapshot put the count at 215,131 on Nov. 13. Statewide, 168,941 were homeowners multiperil policies and 43,622 were wind-only policies. In **Miami-Dade**, the county report lists **43,650 multiperil policies** (6,237 fewer than in September) and **9,382 wind-only policies** (2,818 fewer); the report excludes policies being moved through the takeout program.',
          why: 'A smaller Citizens does not change any existing policy mid-term. If you received a takeout offer, compare the coverage, deductibles and exclusions before the choice deadline, and remember that Citizens policies requiring flood coverage must have it from Jan. 1, 2027. See [Citizens and a local agent](/en/blog/citizens-property-insurance-local-agent) and [the Citizens flood requirement](/en/blog/citizens-flood-insurance-requirement-2027).',
          sources: CIT,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program is authorized through **11:59 p.m. Dec. 11, 2026**, 24 days from today; FEMA’s page still shows no newer extension. The Legislature meets in its Organization Session today, and Miami-Dade commissioners meet today on several items, including the final vote on sidewalk delivery-robot rules; we will report outcomes once they are posted. National Hurricane Center, 7 a.m. Tuesday: no tropical cyclone formation expected in the next 7 days.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 17 de noviembre de 2026: vigilancia de inundaciones para todo el sureste de Florida hasta el jueves, el estado ordena una reducción promedio del 7,4 % en las tarifas de compensación laboral para 2027 y Citizens baja a unas 216.000 pólizas',
      metaTitle: 'Noticias 17 nov. 2026: inundaciones, compensación laboral, Citizens | M&K',
      description:
        'NWS Miami emite una vigilancia de inundaciones hasta el jueves por la noche, la OIR aprueba una baja promedio del 7,4 % en compensación laboral desde el 1 de enero de 2027 y Citizens reporta 216.447 pólizas.',
      ogAlt:
        'Lluvia intensa sobre una calle inundada junto a una casa, un casco de obra y un portapapeles sobre un escritorio, y una hilera de casas con una flecha hacia abajo',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este martes. Cada noticia está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: NWS Miami emite una vigilancia de inundaciones para Miami-Dade, Broward y Palm Beach desde la 1 p. m. del martes hasta el jueves por la noche',
          summary:
            'A las 8:07 a. m. del martes, NWS Miami puso **todo el sureste de Florida bajo vigilancia de inundaciones (Flood Watch) desde la 1 p. m. del martes hasta el jueves por la noche**, incluidas las zonas metropolitanas, del interior, costeras y del extremo sur de Miami-Dade, además de Broward y Palm Beach. Varias rondas de tormentas podrían dejar **de 2 a 4 pulgadas** de lluvia hasta el jueves en la noche, y son posibles **de 6 a 8 pulgadas, con acumulados aislados de más de 10**, con intensidades de 1 a 2 pulgadas por hora. Los meteorólogos advierten que la lluvia fuerte y repetida en la costa este podría causar inundaciones repentinas urbanas de impacto, y también alertan de corrientes de resaca peligrosas y oleaje fuerte en las playas de Miami-Dade, Broward y Palm Beach durante el resto de la semana.',
          why: 'Una vigilancia significa que las inundaciones son posibles, así que actúe antes de la lluvia: limpie las canaletas y el desagüe frente a su casa, mueva los autos a terreno más alto y nunca maneje por calles con agua acumulada. Los daños por inundación a un auto solo se cubren si la póliza incluye cobertura amplia (comprehensive), y las pólizas de vivienda por lo general excluyen las inundaciones; si entra agua, tome fotos con fecha. Vea [comprehensive vs. collision](/es/blog/comprehensive-vs-collision-florida) y [seguro contra inundaciones](/es/flood-insurance-homestead-fl).',
          sources: WX,
        },
        {
          headline:
            'Seguimiento: el comisionado de seguros de Florida aprueba una reducción promedio general del 7,4 % en las tarifas de compensación laboral para pólizas que comiencen desde el 1 de enero de 2027',
          summary:
            'El lunes 16 de noviembre, el comisionado de seguros Mike Yaworsky firmó una orden final que aprueba la **reducción general promedio del 7,4 % a nivel estatal** en las tarifas de compensación laboral (workers’ comp) propuesta por el National Council on Compensation Insurance (NCCI), la organización que presenta estas tarifas. Se aplica a **pólizas nuevas y renovaciones con vigencia a partir del 1 de enero de 2027**, y la OIR indica que es el undécimo año consecutivo en que Florida baja estas tarifas. La orden llega después de la audiencia pública virtual que la OIR celebró el 27 de octubre.',
          why: 'El 7,4 % es un promedio estatal: lo que pase con su propia póliza al renovar depende de su nómina, de las clasificaciones de los puestos y de su historial de reclamos. La mayoría de los empleadores de Florida deben tener compensación laboral, los negocios de construcción por lo general la necesitan desde el primer empleado, y los directivos exentos deben mantener una exención vigente ante el estado. Vea [exenciones de compensación laboral en la construcción](/es/blog/workers-comp-exemption-florida-construction) y [¿empleado o 1099?](/es/blog/helper-employee-or-1099-florida-workers-comp).',
          sources: WC,
        },
        {
          headline:
            'Nuevo: Citizens Property Insurance reporta 216.447 pólizas a fines de octubre, 38.389 menos que un mes antes',
          summary:
            'El informe mensual más reciente de Citizens muestra **216.447 pólizas vigentes al 31 de octubre de 2026**, frente a 254.836 al 30 de septiembre; su resumen semanal situó la cifra en 215.131 al 13 de noviembre. A nivel estatal, 168.941 eran pólizas de vivienda multirriesgo y 43.622 pólizas solo de viento. En **Miami-Dade**, el informe por condado registra **43.650 pólizas multirriesgo** (6.237 menos que en septiembre) y **9.382 pólizas solo de viento** (2.818 menos); el informe excluye las pólizas que están en proceso de traspaso mediante el programa de takeout.',
          why: 'Que Citizens tenga menos pólizas no cambia ninguna póliza vigente a mitad de su plazo. Si recibió una oferta de takeout, compare la cobertura, los deducibles y las exclusiones antes de la fecha límite para elegir, y recuerde que las pólizas de Citizens que requieren cobertura contra inundaciones deben tenerla desde el 1 de enero de 2027. Vea [Citizens y un agente local](/es/blog/citizens-property-insurance-local-agent) y [el requisito de seguro contra inundaciones de Citizens](/es/blog/citizens-flood-insurance-requirement-2027).',
          sources: CIT,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado hasta las **11:59 p. m. del 11 de diciembre de 2026**, dentro de 24 días; la página de FEMA aún no muestra una nueva extensión. La Legislatura celebra hoy su Sesión de Organización, y la comisión de Miami-Dade se reúne hoy para votar varios asuntos, entre ellos la votación final de las reglas para robots de reparto en las aceras; informaremos los resultados cuando se publiquen. Centro Nacional de Huracanes, 7 a. m. del martes: no se espera la formación de ciclones tropicales en los próximos 7 días.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 17 ноября 2026 г.: режим угрозы наводнения (Flood Watch) для всего юго-востока Флориды до четверга, штат утвердил снижение тарифов на страхование компенсаций работникам в среднем на 7,4 % на 2027 год, а у Citizens осталось около 216 000 полисов',
      metaTitle: 'Новости 17 ноября 2026: наводнение, workers’ comp, Citizens | M&K',
      description:
        'NWS Miami объявил Flood Watch до вечера четверга, OIR утвердил снижение тарифов workers’ comp в среднем на 7,4 % с 1 января 2027 г., у Citizens 216 447 полисов.',
      ogAlt:
        'Сильный дождь над затопленной улицей рядом с домом, строительная каска и планшет на столе и ряд домов со стрелкой вниз',
      intro:
        'Три новости для владельцев домов, водителей и малого бизнеса на юге Флориды в этот вторник. Каждая изложена своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: NWS Miami объявил режим Flood Watch (угроза наводнения) для Майами-Дейд, Броварда и Палм-Бич с 13:00 вторника до вечера четверга',
          summary:
            'Во вторник в 8:07 NWS Miami ввёл для **всего юго-востока Флориды режим Flood Watch с 13:00 вторника до вечера четверга** — в городских, внутренних, прибрежных и южных районах Майами-Дейд, а также в Броварде и Палм-Бич. Несколько волн гроз могут принести **2–4 дюйма** (5–10 см) осадков до позднего вечера четверга, а местами возможно **6–8 дюймов и в отдельных точках больше 10** (15–25 см и больше) при интенсивности 1–2 дюйма в час. Синоптики предупреждают, что повторяющиеся ливни на восточном побережье могут вызвать серьёзные внезапные подтопления в городах, а до конца недели на пляжах Майами-Дейд, Броварда и Палм-Бич ожидаются опасные разрывные течения и сильный прибой.',
          why: 'Flood Watch означает, что наводнение возможно, поэтому действуйте до дождя: очистите водостоки и ливнёвку перед домом, переставьте машины повыше и никогда не въезжайте в стоячую воду. Ущерб машине от наводнения покрывается, только если в полисе есть comprehensive, а страховка дома, как правило, наводнения не покрывает; если вода попала внутрь, сделайте фото с датой. См. [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida) и [страхование от наводнения](/ru/flood-insurance-homestead-fl).',
          sources: WX,
        },
        {
          headline:
            'Продолжение темы: страховой комиссар Флориды утвердил снижение тарифов на страхование компенсаций работникам в среднем на 7,4 % для полисов с 1 января 2027 г.',
          summary:
            'В понедельник, 16 ноября, страховой комиссар Майк Ярворски подписал окончательное распоряжение, утверждающее **общее снижение тарифов по штату в среднем на 7,4 %** на страхование компенсаций работникам (workers’ comp), которое предложил NCCI (National Council on Compensation Insurance) — организация, подающая эти тарифы. Оно касается **новых и продлеваемых полисов, вступающих в силу с 1 января 2027 г.**, и, по данным OIR, Флорида снижает эти тарифы уже 11-й год подряд. Распоряжение вышло после виртуальных публичных слушаний, которые OIR провёл 27 октября.',
          why: '7,4 % — это среднее по штату: что будет с вашим полисом при продлении, по-прежнему зависит от фонда зарплаты, классификации работ и истории страховых случаев. Большинство работодателей во Флориде обязаны иметь workers’ comp, строительным компаниям он, как правило, нужен с первого сотрудника, а освобождённые от него руководители должны поддерживать действующее освобождение (exemption) в штате. См. [освобождение от workers’ comp в строительстве](/ru/blog/workers-comp-exemption-florida-construction) и [сотрудник или 1099?](/ru/blog/helper-employee-or-1099-florida-workers-comp).',
          sources: WC,
        },
        {
          headline:
            'Новое: у Citizens Property Insurance на конец октября 216 447 полисов — на 38 389 меньше, чем месяцем ранее',
          summary:
            'Свежий ежемесячный отчёт Citizens показывает **216 447 действующих полисов на 31 октября 2026 г.** против 254 836 на 30 сентября; по еженедельной сводке на 13 ноября их было 215 131. По штату 168 941 — это комплексные полисы на жильё (multiperil) и 43 622 — полисы только от ветра. В **Майами-Дейд**, по отчёту по округам, **43 650 комплексных полисов** (на 6 237 меньше, чем в сентябре) и **9 382 полиса только от ветра** (на 2 818 меньше); в отчёт не входят полисы, которые передаются частным компаниям по программе takeout.',
          why: 'Сокращение Citizens не меняет действующий полис посреди срока. Если вы получили предложение takeout, сравните покрытие, франшизы и исключения до крайнего срока выбора и помните, что полисы Citizens, для которых требуется страховка от наводнения, должны иметь её с 1 января 2027 г. См. [Citizens и местный агент](/ru/blog/citizens-property-insurance-local-agent) и [требование Citizens о страховке от наводнения](/ru/blog/citizens-flood-insurance-requirement-2027).',
          sources: CIT,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) действует **до 23:59 11 декабря 2026 г.**, через 24 дня; на странице FEMA новое продление пока не указано. Сегодня Законодательное собрание проводит организационную сессию, а комиссия Майами-Дейд рассматривает ряд вопросов, в том числе окончательное голосование по правилам для роботов-доставщиков на тротуарах; о результатах сообщим, когда они будут опубликованы. Национальный центр ураганов, 7:00 вторника: образование тропических циклонов в ближайшие 7 дней не ожидается.',
        },
      ],
      extraSources: BOX,
    },
  },
};
