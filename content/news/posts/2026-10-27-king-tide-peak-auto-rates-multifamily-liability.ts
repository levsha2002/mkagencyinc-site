import type { NewsEdition, NewsSource } from '../types';

// Edition for Tuesday, Oct. 27, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-27',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=mfl&wwa=all',
  title: 'Coastal Hazard Message, NWS Miami, 1:22 a.m. EDT Tue Oct 27, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-27',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 7:22 a.m. EDT Tue Oct 27, 2026',
};

const SFWMD: NewsSource = {
  name: 'South Florida Water Management District',
  date: '2026-10-26',
  url: 'https://sfwmd.gov/news-events/news/weekly-king-tide-forecast-47',
  title: 'Weekly King Tide Forecast (Oct. 26 – Nov. 3, 2026)',
};

const CBS_MIAMI: NewsSource = {
  name: 'CBS News Miami',
  date: '2026-10-26',
  url: 'https://www.cbsnews.com/miami/news/king-tide-miami-fort-lauderdale-south-florida-today-october-26-2026/',
  title: 'King tide flooding in South Florida has businesses, residents experiencing multiple rounds of rising water',
};

const NWS_KEY: NewsSource = {
  name: 'National Weather Service Key West',
  date: '2026-10-27',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=key&wwa=all',
  title: 'Coastal Flood Warning, Florida Keys, 4:00 a.m. EDT Tue Oct 27, 2026',
};

const OIR_AUTO: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-26',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/26/commissioner-mike-yaworsky-approves--7--auto-rate-decrease-for-usaa--impacting-more-than-498-000-policies',
  title: 'OIR press release on approved auto rate decreases, Oct. 26, 2026',
};

const IJ_MULTIFAMILY: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-10-26',
  url: 'https://www.insurancejournal.com/news/southeast/2026/10/26/890217.htm',
  title: 'Florida Reforms Cut Property Premiums but Data Show Multifamily Liability Rates Up',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-27',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8 a.m. EDT Tue Oct 27, 2026',
};

const OIR_CRF: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-23',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/23/notice-to-industry-hurricane-isaias-catastrophe-reporting',
  title: 'Notice to Industry: Hurricane Isaias Catastrophe Reporting',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/20/media-advisory-national-council-on-compensation-insurance-public-rate-hearing',
  title: 'Media Advisory: National Council on Compensation Insurance Public Rate Hearing',
};

export const edition: NewsEdition = {
  slug: '2026-10-27-king-tide-peak-auto-rates-multifamily-liability',
  datePublished: '2026-10-27',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 27, 2026: King tides reach the year’s predicted peak after Monday’s flooding, the state approves auto rate decreases for nearly half a million policies, and liability costs rise for apartment and duplex owners',
      metaTitle: 'Insurance News Oct. 27, 2026: King Tide Peak, Auto Rates | M&K',
      description:
        'King tides peak Tuesday under a Coastal Flood Warning through Wednesday, OIR approves auto rate decreases for 498,000+ policies, and multifamily liability trends.',
      ogAlt:
        'A house and a car in rising water under a full moon, a car beside a downward arrow on a document, and a small apartment building with a shield',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: king tides hit the year’s predicted peak today after flooding streets and stalling cars on Monday',
          summary:
            'The South Florida Water Management District lists **Tuesday, Oct. 27** as the year’s highest predicted tide on the East Coast, and on Tuesday morning the National Weather Service in Miami said tide levels were on track to reach moderate to borderline major flood levels within a few hours. The Coastal Flood Warning for coastal Miami-Dade, Broward and Palm Beach stays in effect until 8 p.m. Wednesday, with gusts of 30 to 40 mph again expected along the east coast today. On Monday, CBS News Miami reported that parts of Fort Lauderdale flooded twice, with several vehicles stalling in the morning, while Hollywood crews pumped water off flooded roads. The District expects tides to stay above the minor flood threshold through the weekend, and in the Keys the warning for major saltwater flooding now runs until 5 a.m. Wednesday.',
          why: 'Move cars to higher ground before each high tide and don’t drive through standing water: salt water can damage a car even if it doesn’t stall, and that damage falls under comprehensive coverage ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Flood damage to a home is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), which usually starts 30 days after purchase. Take dated photos of any water damage, and see our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: [SFWMD, NWS_MFL_AFD, NWS_MFL_CFW, CBS_MIAMI, NWS_KEY],
        },
        {
          headline: 'State approves auto rate decreases averaging 7% for more than 498,000 policies',
          summary:
            'The Florida Office of Insurance Regulation (OIR) announced on Oct. 26 that it approved several auto rate decreases for one large insurance group, averaging **−7%** across more than 498,000 Florida policies. Depending on the program, average changes range from −0.4% to −11.2%, and the group’s largest concentrations of business are in Brevard, Escambia and Okaloosa counties. OIR also said the five largest auto insurance groups show a 2026 indicated rate change of −12.6%, covering 81% of Florida’s auto market, and that Florida’s personal auto liability loss ratio in 2025, 52.5%, was the lowest for the state in 15 years.',
          why: 'An approved average doesn’t tell you what your own renewal will look like: that still depends on your driving record, vehicles, ZIP code and the coverage you choose. When your renewal arrives, compare more than the bottom line, including deductibles, bodily injury limits and uninsured motorist coverage ([UM coverage explained](/en/blog/uninsured-motorist-coverage-florida)). If you’d like a second look, [contact us](/en/quote).',
          sources: [OIR_AUTO],
        },
        {
          headline: 'Florida multifamily owners: property premiums have fallen, but liability costs are climbing',
          summary:
            'Insurance Journal reported on Oct. 26 that, according to data from an insurance analytics firm covering more than 1,000 Florida properties, the median property premium per unit for multifamily buildings, a category that runs from duplexes and fourplexes to large apartment complexes, has dropped sharply since early 2025. Liability premiums have moved the other way: the median per unit edged up over the last 18 months, and a smaller, more recent sample came in higher still. The firm ties liability costs to lawsuits and large jury verdicts rather than to local crime rates, and a Florida commercial agent quoted in the article pointed to suits over mold, fires and poor maintenance.',
          why: 'If you own a duplex, a small rental building or mixed-use property, review your liability limits along with the property premium at renewal, and keep records of repairs, inspections and tenant complaints. An [umbrella policy](/en/blog/umbrella-insurance-explained-florida) can add liability limits above your main policy; for business owners, see our [commercial insurance page](/en/commercial-insurance-florida-city).',
          sources: [IJ_MULTIFAMILY],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Also this week',
          text: 'The National Hurricane Center does not expect any tropical cyclone to form in the next seven days (8 a.m. Tuesday outlook). Today, Oct. 27, the Office of Insurance Regulation holds its virtual public hearing at 10 a.m. ET on the workers’ comp rate filing from the National Council on Compensation Insurance (NCCI), with written comments accepted through 5 p.m. ET on Nov. 10 at ratehearings@floir.gov, subject “NCCI”; property insurers also owe OIR their next Hurricane Isaias claims report by noon ET today.',
        },
      ],
      extraSources: [NHC_TWO, OIR_NCCI, OIR_CRF],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 27 de octubre de 2026: las mareas reales llegan hoy a su pico previsto del año tras las inundaciones del lunes, el estado aprueba bajas de tarifas de auto para casi medio millón de pólizas y sube el costo de responsabilidad civil para dueños de edificios de alquiler',
      metaTitle: 'Noticias de seguros 27/10/2026: mareas y tarifas de auto | M&K',
      description:
        'Mareas reales en su pico el martes con advertencia por inundación hasta el miércoles, la OIR aprueba bajas de tarifas de auto para 498,000+ pólizas y la responsabilidad civil en multifamiliares.',
      ogAlt:
        'Una casa y un carro en agua que sube bajo la luna llena, un carro junto a una flecha hacia abajo sobre un documento y un pequeño edificio de apartamentos con un escudo',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline:
            'Actualización: las mareas reales llegan hoy a su pico previsto del año, después de inundar calles y dejar carros varados el lunes',
          summary:
            'El Distrito de Manejo del Agua del Sur de Florida (SFWMD) señala el **martes 27 de octubre** como la marea más alta prevista del año en la costa este, y el martes por la mañana el Servicio Nacional de Meteorología (NWS) en Miami indicó que el nivel del agua iba camino de alcanzar inundación moderada, casi mayor, en pocas horas. La advertencia por inundación costera (Coastal Flood Warning) para la costa de Miami-Dade, Broward y Palm Beach sigue vigente hasta las 8 p.m. del miércoles, y hoy se esperan otra vez ráfagas de 30 a 40 mph en la costa este. El lunes, CBS News Miami informó que partes de Fort Lauderdale se inundaron dos veces y que varios carros se quedaron varados por la mañana, mientras en Hollywood los equipos de la ciudad bombeaban el agua de las calles. El Distrito prevé que las mareas sigan por encima del umbral de inundación menor durante el fin de semana, y en los Cayos la advertencia por inundación mayor con agua salada rige ahora hasta las 5 a.m. del miércoles.',
          why: 'Lleve el carro a un lugar alto antes de cada marea alta y no maneje por agua estancada: el agua salada puede dañar el carro aunque no se apague el motor, y ese daño entra en la cobertura comprensiva ([comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida)). El daño por inundación en la casa solo lo cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, que normalmente empieza 30 días después de comprarla. Tome fotos con fecha de cualquier daño por agua y lea nuestra [guía sobre las mareas reales](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: [SFWMD, NWS_MFL_AFD, NWS_MFL_CFW, CBS_MIAMI, NWS_KEY],
        },
        {
          headline: 'El estado aprueba bajas de tarifas de auto de un 7% en promedio para más de 498,000 pólizas',
          summary:
            'La Oficina de Regulación de Seguros de Florida (OIR) anunció el 26 de octubre que aprobó varias bajas de tarifas de auto para un gran grupo asegurador, con un promedio de **−7%** en más de 498,000 pólizas de Florida. Según el programa, los cambios promedio van de −0.4% a −11.2%, y el grupo concentra la mayor parte de su negocio en los condados Brevard, Escambia y Okaloosa. La OIR añadió que los cinco mayores grupos de seguros de auto muestran para 2026 un cambio de tarifa indicado de −12.6%, que abarca el 81% del mercado de auto de Florida, y que el índice de siniestralidad de responsabilidad civil de auto personal en 2025, de 52.5%, fue el más bajo del estado en 15 años.',
          why: 'Un promedio aprobado no dice cómo será su propia renovación: eso sigue dependiendo de su récord de manejo, sus vehículos, su código postal y la cobertura que elija. Cuando le llegue la renovación, compare algo más que el total: deducibles, límites de lesiones corporales y la cobertura de conductor sin seguro ([qué es la cobertura UM](/es/blog/uninsured-motorist-coverage-florida)). Si quiere una segunda opinión, [contáctenos](/es/quote).',
          sources: [OIR_AUTO],
        },
        {
          headline: 'Dueños de edificios multifamiliares en Florida: baja la prima de propiedad, pero sube el costo de responsabilidad civil',
          summary:
            'Insurance Journal informó el 26 de octubre que, según datos de una firma de análisis de seguros que cubren más de 1,000 propiedades en Florida, la prima mediana de propiedad por unidad en edificios multifamiliares, una categoría que va desde dúplex y cuádruplex hasta grandes complejos de apartamentos, ha bajado de forma marcada desde principios de 2025. Las primas de responsabilidad civil van en sentido contrario: la mediana por unidad subió un poco en los últimos 18 meses, y una muestra más reciente y pequeña salió todavía más alta. La firma relaciona el costo de la responsabilidad civil con las demandas y los veredictos de jurado muy altos, no con la criminalidad de la zona, y un agente comercial de Florida citado en el artículo mencionó demandas por moho, incendios y falta de mantenimiento.',
          why: 'Si tiene un dúplex, un pequeño edificio de alquiler o una propiedad de uso mixto, revise en la renovación sus límites de responsabilidad civil además de la prima de propiedad, y guarde registros de reparaciones, inspecciones y quejas de inquilinos. Una [póliza paraguas](/es/blog/umbrella-insurance-explained-florida) puede añadir límites de responsabilidad por encima de su póliza principal; si tiene un negocio, vea nuestra [página de seguros comerciales](/es/commercial-insurance-florida-city).',
          sources: [IJ_MULTIFAMILY],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'También esta semana',
          text: 'El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en los próximos siete días (perspectiva de las 8 a.m. del martes). Hoy, 27 de octubre, a las 10 a.m. (hora del Este), la Oficina de Regulación de Seguros (OIR) celebra la audiencia pública virtual sobre la solicitud de tarifas de compensación laboral (workers’ comp) del National Council on Compensation Insurance (NCCI); se aceptan comentarios por escrito hasta las 5 p.m. (hora del Este) del 10 de noviembre en ratehearings@floir.gov, con el asunto “NCCI”. Además, las aseguradoras de propiedad deben entregar hoy a la OIR, antes del mediodía, su próximo informe de reclamos del huracán Isaías.',
        },
      ],
      extraSources: [NHC_TWO, OIR_NCCI, OIR_CRF],
    },
    ru: {
      title:
        'Страховые новости Флориды, 27 октября 2026: king tides достигают прогнозного пика года после подтоплений в понедельник, штат одобрил снижение автотарифов почти для полумиллиона полисов, а у владельцев многоквартирных домов растут премии за ответственность',
      metaTitle: 'Страховые новости 27.10.2026: пик приливов, автотарифы | M&K',
      description:
        'Пик king tides во вторник при предупреждении о подтоплении до среды, OIR одобрило снижение автотарифов для 498 000+ полисов и рост стоимости страхования ответственности для многоквартирных домов.',
      ogAlt:
        'Дом и машина в поднимающейся воде под полной луной, машина рядом с документом со стрелкой вниз и небольшой многоквартирный дом со щитом',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: сегодня king tides выходят на прогнозный пик года — в понедельник они уже затопили улицы, а машины глохли в воде',
          summary:
            'Управление водными ресурсами Южной Флориды (SFWMD) называет **вторник, 27 октября**, днём самого высокого прогнозного прилива года на восточном побережье, а утром во вторник Национальная метеослужба (NWS) в Майами сообщила, что уровень воды в ближайшие часы выходит на умеренное, близкое к сильному, подтопление. Предупреждение о прибрежном подтоплении (Coastal Flood Warning) для побережья Miami-Dade, Broward и Palm Beach действует до 20:00 среды, а сегодня на восточном побережье снова ожидаются порывы ветра 30–40 миль/ч. По данным CBS News Miami, в понедельник часть Fort Lauderdale затопило дважды, утром несколько машин заглохли в воде, а в Hollywood городские службы откачивали воду с улиц. SFWMD ожидает, что приливы будут выше порога слабого подтопления и в выходные, а на Кис предупреждение о сильном подтоплении солёной водой теперь действует до 5:00 среды.',
          why: 'Перед каждым приливом переставляйте машину на возвышенное место и не въезжайте в стоячую воду: солёная вода может повредить машину, даже если двигатель не заглох, а такой ущерб покрывает comprehensive ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Ущерб дому от наводнения покрывает только отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), который обычно начинает действовать через 30 дней после покупки. Фотографируйте любые повреждения от воды с датой и загляните в наш [материал о king tides](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: [SFWMD, NWS_MFL_AFD, NWS_MFL_CFW, CBS_MIAMI, NWS_KEY],
        },
        {
          headline: 'Штат одобрил снижение автотарифов в среднем на 7% для более чем 498 000 полисов',
          summary:
            'Управление по регулированию страхования Флориды (OIR) 26 октября объявило, что одобрило несколько снижений автотарифов для одной крупной страховой группы — в среднем на **−7%** по более чем 498 000 полисов во Флориде. В зависимости от программы среднее изменение составляет от −0,4% до −11,2%, а больше всего клиентов у группы в округах Brevard, Escambia и Okaloosa. OIR также сообщило, что у пяти крупнейших автостраховых групп расчётное изменение тарифов на 2026 год составляет −12,6% и охватывает 81% автостраховного рынка Флориды, а коэффициент убыточности по ответственности в личном автостраховании в 2025 году, 52,5%, стал самым низким для штата за 15 лет.',
          why: 'Одобренное среднее значение не говорит, каким будет именно ваше продление: оно по-прежнему зависит от вашей водительской истории, машин, почтового индекса и выбранного покрытия. Когда придёт продление, сравнивайте не только итоговую сумму, но и франшизы, лимиты bodily injury и покрытие от незастрахованных водителей ([что такое UM](/ru/blog/uninsured-motorist-coverage-florida)). Если нужен свежий взгляд на ваш полис — [напишите нам](/ru/quote).',
          sources: [OIR_AUTO],
        },
        {
          headline: 'Владельцам многоквартирных домов во Флориде: премии за имущество снизились, а за ответственность растут',
          summary:
            'Insurance Journal 26 октября сообщил, что, по данным компании, анализирующей страховой рынок, по более чем 1000 объектам во Флориде, медианная премия за страхование имущества в расчёте на квартиру в многоквартирных домах — от дуплексов и домов на четыре квартиры до крупных жилых комплексов — заметно снизилась с начала 2025 года. Премии за ответственность движутся в обратную сторону: медиана в расчёте на квартиру за последние 18 месяцев немного выросла, а более свежая и небольшая выборка показала ещё более высокий уровень. Аналитики связывают стоимость страхования ответственности с исками и крупными решениями присяжных, а не с уровнем преступности в районе, а процитированный в статье коммерческий агент из Флориды упомянул иски из-за плесени, пожаров и плохого содержания зданий.',
          why: 'Если у вас дуплекс, небольшой дом под сдачу или объект смешанного назначения, при продлении проверяйте не только премию за имущество, но и лимиты ответственности, и храните записи о ремонтах, проверках и жалобах жильцов. [Зонтичный полис (umbrella)](/ru/blog/umbrella-insurance-explained-florida) добавляет лимиты ответственности сверх основного полиса; владельцам бизнеса — наша [страница о коммерческом страховании](/ru/commercial-insurance-florida-city).',
          sources: [IJ_MULTIFAMILY],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Также на этой неделе',
          text: 'Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней (прогноз на 8:00 вторника). Сегодня, 27 октября, в 10:00 по восточному времени Управление по регулированию страхования (OIR) проводит виртуальные публичные слушания по заявке National Council on Compensation Insurance (NCCI) на тарифы workers’ comp; письменные комментарии принимаются до 17:00 по восточному времени 10 ноября на ratehearings@floir.gov с темой письма «NCCI». Кроме того, страховщики имущества должны сегодня до 12:00 сдать в OIR очередной отчёт о претензиях по урагану Isaias.',
        },
      ],
      extraSources: [NHC_TWO, OIR_NCCI, OIR_CRF],
    },
  },
};
