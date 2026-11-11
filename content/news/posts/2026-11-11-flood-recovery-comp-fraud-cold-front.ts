import type { NewsEdition, NewsSource } from '../types';

// Edition for Wednesday, Nov. 11, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const FDEM_FALL: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-11',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding — Multi-Agency Resource Centers',
};

const FDEM_BIZ_SURVEY: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-06',
  url: 'https://www.floridadisaster.org/news-media/news/20261106-icymi-floridacommerce-activates-business-damage-assessment-survey-to-measure-impact-of-damage-caused-by-the-2026-fall-flooding/',
  title: 'ICYMI: FloridaCommerce Activates Business Damage Assessment Survey for the 2026 Fall Flooding',
};

const MAST_FLOOD: NewsSource = {
  name: 'U.S. Rep. Brian Mast',
  date: '2026-11-09',
  url: 'https://mast.house.gov/2026/11/09/flood-recovery-how-to-find-help/',
  title: 'Flood Recovery: How to find help',
};

const WFLX_RIVIERA: NewsSource = {
  name: 'WFLX / WPTV',
  date: '2026-11-10',
  url: 'https://www.wflx.com/2026/11/10/riviera-beach-residents-face-costly-recovery-after-flooding-leaves-homes-damaged-many-without-flood-insurance/',
  title: 'Riviera Beach residents face costly recovery after flooding leaves homes damaged, many without flood insurance',
};

const DFS_WC_FRAUD: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-11-10',
  url: 'https://www.myfloridacfo.com/news/pressreleases/press-release-details/2026/11/10/chief-financial-officer-blaise-ingoglia-announces-arrest-after--100-000-workers--compensation-fraud-scheme',
  title: 'Chief Financial Officer Blaise Ingoglia Announces Arrest After $100,000 Workers’ Compensation Fraud Scheme',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-11',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 5:52 a.m. EST Wed Nov 11, 2026',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-11',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Wed Nov 11, 2026',
};

const CITIZENS_BANNER: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-11-11',
  url: 'https://www.citizensfla.com/',
  title: 'Citizens closed Wednesday, Nov. 11, for Veterans Day',
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

const FLOOD = [FDEM_FALL, FDEM_BIZ_SURVEY, MAST_FLOOD, WFLX_RIVIERA];
const COMP = [DFS_WC_FRAUD];
const WX = [NWS_MFL_AFD];
const BOX = [CITIZENS_BANNER, FEMA_REAUTH, OIR_NCCI, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-11-flood-recovery-comp-fraud-cold-front',
  datePublished: '2026-11-11',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 11, 2026: a flood recovery center opens in Riviera Beach, a payroll-hiding workers’ comp arrest, and storms today before Friday’s cold front',
      metaTitle: 'Insurance News Nov. 11, 2026: Flood Help, Comp Fraud, Cold Front | M&K',
      description:
        'A flood recovery center opens in Riviera Beach with no federal declaration yet, the state charges a builder with hiding payroll from his comp insurer, and a cold front nears.',
      ogAlt:
        'A flooded house with a water line beside a help-center tent, a clipboard with payroll bars and a magnifying glass, and a storm cloud with hail and a cold front arrow over palm trees',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Veterans Day. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: A flood recovery center is open in Riviera Beach, but there is still no federal disaster declaration for the fall flooding',
          summary:
            'Palm Beach County, the City of Riviera Beach and the state opened a **Multi-Agency Resource Center** on Tuesday at the Wells Recreation Center, 2409 Avenue H West, Riviera Beach, open **7 a.m. to 7 p.m.**; the state asks visitors to bring ID, proof of residence, insurance information and records of their losses. Rep. Brian Mast’s office noted on Nov. 9 that there was no federal disaster declaration yet, so FEMA aid for flooded homes wasn’t available, and urged residents to report damage to their county even if they have insurance; as of this morning, FEMA’s public declarations data still shows no new Florida declaration since late October. Businesses in the 14 counties on the fall-flooding list, including Palm Beach, can report losses in the state’s Business Damage Assessment Survey at FloridaDisaster.biz (choose “2026 Fall Flooding”); it is not an application for aid. WFLX reported on Nov. 10 that many homeowners in Riviera Beach’s Lone Pine Estates had no flood insurance, and the neighborhood’s HOA president said the area isn’t in a flood zone.',
          why: 'A standard home or condo policy doesn’t cover rising floodwater, and you don’t have to live in a high-risk zone to buy flood coverage. A new NFIP policy usually takes 30 days to start, and the program’s authority runs only through Dec. 11, so don’t wait. Photograph damage before you clean up. See our [flood insurance page](/en/flood-insurance-homestead-fl) and [king tides and flood insurance guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: FLOOD,
        },
        {
          headline:
            'New: State arrests a construction company owner accused of hiding nearly $1 million in payroll from his comp insurer',
          summary:
            'The Department of Financial Services announced on Nov. 10 that its investigators arrested the owner of a construction company on Nov. 5 on charges of grand theft, organized scheme to defraud and workers’ compensation fraud. According to DFS, he concealed his real payroll when applying for coverage: investigators found **$968,278.71** in unreported payroll and **$1,074,278.71** in checks cashed through money service businesses, and DFS puts the insurer’s loss at about **$100,566**. The Miami-Dade State Attorney’s Office will prosecute; the charges are allegations, not a conviction. DFS asks anyone with information about insurance fraud to call **1-800-378-0445** or report it at FraudFreeFlorida.com.',
          why: 'Workers’ comp is rated on your payroll, so report it accurately when you buy the policy and update your agent when you add crews. Insurers usually audit payroll after the policy year, and paying workers off the books can turn into a criminal case. See our guides on [helpers: employee or 1099?](/en/blog/helper-employee-or-1099-florida-workers-comp) and [subcontractor certificates](/en/blog/subcontractor-insurance-certificates-florida).',
          sources: COMP,
        },
        {
          headline:
            'Update: Storms with possible small hail this afternoon, the cold front early Friday, and a chance of a Gulf low early next week',
          summary:
            'NWS Miami’s 5:52 a.m. Area Forecast Discussion expects scattered showers and storms to form this afternoon over the interior and east coast metro areas. A few could turn strong around Lake Okeechobee and Palm Beach County, with gusty winds, frequent lightning, small hail and heavy downpours. A strong cold front should cross South Florida **late Thursday night into Friday morning**. Behind it comes the coolest air of the fall so far, with lows Saturday morning in the **mid to upper 50s** in most areas (low 60s right on the east coast) and Saturday highs in the low 70s. Forecasters add that a low could form over the Gulf early next week and raise rain chances Monday and Tuesday, but they call that part of the forecast highly uncertain.',
          why: 'Hail or a fallen branch on your car is generally a comprehensive claim. Hail damage to a roof is generally a claim under your home policy, subject to its deductible. Take dated photos right away and report the damage promptly. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'Citizens is **closed today, Wednesday, Nov. 11, for Veterans Day**. Claims can still be reported through myPolicy or the 24/7 line at 866-411-2742, and regular hours resume Thursday. The federal flood insurance program is authorized through **11:59 p.m. on Dec. 11, 2026**, 30 days from today, and FEMA’s page still shows no new extension. The public comment record on NCCI’s 2027 workers’ comp filing (a requested −7.4% average for the voluntary market) closed Nov. 10, and OIR hasn’t posted an order yet. National Hurricane Center, 7 a.m. Wednesday: no tropical cyclone formation expected in the next 7 days.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 11 de noviembre de 2026: abre un centro de ayuda por inundaciones en Riviera Beach, arresto por ocultar nómina al seguro de compensación laboral y tormentas hoy antes del frente frío del viernes',
      metaTitle: 'Noticias 11 nov. 2026: ayuda por inundación, fraude laboral, frente frío | M&K',
      description:
        'Abre un centro de ayuda por inundaciones en Riviera Beach sin declaración federal aún, arrestan a un constructor por ocultar nómina y se acerca un frente frío.',
      ogAlt:
        'Una casa inundada con la marca del agua junto a una carpa de ayuda, un portapapeles con barras de nómina y una lupa, y una nube de tormenta con granizo y la flecha de un frente frío sobre palmeras',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida en este Día de los Veteranos. Cada noticia está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: abre en Riviera Beach un centro de ayuda por las inundaciones, pero aún no hay declaración federal de desastre',
          summary:
            'El condado de Palm Beach, la ciudad de Riviera Beach y el estado abrieron el martes un **Centro de Recursos Multiagencia** en el Wells Recreation Center, 2409 Avenue H West, Riviera Beach, con horario de **7 a.m. a 7 p.m.**; el estado pide llevar identificación, prueba de residencia, los datos de su seguro y documentos de las pérdidas. La oficina del congresista Brian Mast señaló el 9 de noviembre que todavía no había una declaración federal de desastre, por lo que la ayuda de FEMA para viviendas inundadas no estaba disponible, y pidió a los residentes reportar los daños a su condado aunque tengan seguro; esta mañana, los datos públicos de declaraciones de FEMA siguen sin mostrar ninguna declaración nueva para Florida desde finales de octubre. Los negocios de los 14 condados incluidos en la emergencia por las inundaciones de otoño, entre ellos Palm Beach, pueden reportar sus pérdidas en la encuesta estatal de daños a negocios en FloridaDisaster.biz (opción “2026 Fall Flooding”); no es una solicitud de ayuda. WFLX informó el 10 de noviembre que muchos propietarios de Lone Pine Estates, en Riviera Beach, no tenían seguro de inundación, y la presidenta de la asociación de vecinos dijo que la zona no está en un área de inundación.',
          why: 'Una póliza normal de vivienda o de condominio no cubre el agua que sube por inundación, y no hace falta vivir en una zona de alto riesgo para comprar esa cobertura. Una póliza nueva del NFIP suele tardar 30 días en entrar en vigor, y la autorización del programa llega solo hasta el 11 de diciembre, así que no lo deje para después. Tome fotos de los daños antes de limpiar. Vea nuestra [página de seguro de inundación](/es/flood-insurance-homestead-fl) y la [guía sobre mareas reales y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: FLOOD,
        },
        {
          headline:
            'Nuevo: el estado arresta al dueño de una constructora acusado de ocultar casi $1 millón en nómina a su aseguradora de compensación laboral',
          summary:
            'El Departamento de Servicios Financieros (DFS) anunció el 10 de noviembre que sus investigadores arrestaron el 5 de noviembre al dueño de una empresa de construcción por hurto mayor, esquema organizado para defraudar y fraude de compensación laboral. Según el DFS, ocultó su nómina real al solicitar la cobertura: los investigadores hallaron **$968,278.71** en nómina no declarada y **$1,074,278.71** en cheques cobrados a través de negocios de servicios monetarios, y el DFS calcula la pérdida de la aseguradora en unos **$100,566**. La Fiscalía del condado Miami-Dade llevará el caso; los cargos son acusaciones, no una condena. El DFS pide que cualquier información sobre fraude de seguros se reporte al **1-800-378-0445** o en FraudFreeFlorida.com.',
          why: 'La compensación laboral se calcula sobre su nómina, así que declárela con exactitud al contratar la póliza y avise a su agente cuando sume cuadrillas. Las aseguradoras suelen auditar la nómina al terminar el año de póliza, y pagar a trabajadores por fuera de los libros puede terminar en un caso penal. Vea nuestras guías sobre [ayudantes: ¿empleado o 1099?](/es/blog/helper-employee-or-1099-florida-workers-comp) y [certificados de subcontratistas](/es/blog/subcontractor-insurance-certificates-florida).',
          sources: COMP,
        },
        {
          headline:
            'Actualización: tormentas con posible granizo pequeño esta tarde, el frente frío el viernes temprano y posible baja en el Golfo a inicios de la próxima semana',
          summary:
            'La discusión de pronóstico de las 5:52 a.m. del Servicio Meteorológico Nacional en Miami prevé chubascos y tormentas dispersas esta tarde en el interior y en las áreas metropolitanas de la costa este. Algunas podrían volverse fuertes cerca del lago Okeechobee y en el condado de Palm Beach, con ráfagas, rayos frecuentes, granizo pequeño y aguaceros. Un fuerte frente frío cruzaría el sur de Florida **a última hora del jueves y la mañana del viernes**. Detrás llegaría el aire más fresco del otoño hasta ahora, con mínimas el sábado por la mañana **entre los 55 y 59 °F (13–15 °C)** en la mayoría de las zonas (alrededor de 60–63 °F justo en la costa este) y máximas el sábado de poco más de 70 °F. Los meteorólogos añaden que a inicios de la próxima semana podría formarse una baja en el Golfo y aumentar las lluvias el lunes y el martes, aunque esa parte del pronóstico es muy incierta.',
          why: 'El granizo o una rama caída sobre su auto suele reclamarse bajo la cobertura comprensiva. El daño por granizo en el techo suele reclamarse bajo su póliza de vivienda, sujeto a su deducible. Tome fotos con fecha de inmediato y reporte el daño a tiempo. Vea [comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'Citizens está **cerrado hoy, miércoles 11 de noviembre, por el Día de los Veteranos**. Los reclamos pueden reportarse en myPolicy o en la línea 24/7, 866-411-2742, y el horario normal vuelve el jueves. El programa federal de seguro contra inundaciones está autorizado hasta las **11:59 p.m. del 11 de diciembre de 2026**, dentro de 30 días, y la página de FEMA aún no muestra una nueva prórroga. El plazo de comentarios públicos sobre la solicitud de NCCI de tarifas de compensación laboral para 2027 (un cambio promedio solicitado de −7.4% para el mercado voluntario) cerró el 10 de noviembre, y la OIR aún no ha publicado su orden. Centro Nacional de Huracanes, 7 a.m. del miércoles: no se espera la formación de ciclones tropicales en los próximos 7 días.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 11 ноября 2026 г.: в Ривьера-Бич открылся центр помощи после наводнения, арест за сокрытие зарплатной ведомости от страховщика workers’ comp, а сегодня грозы перед пятничным холодным фронтом',
      metaTitle: 'Новости 11 ноября 2026: помощь после наводнения, мошенничество, фронт | M&K',
      description:
        'В Ривьера-Бич открылся центр помощи после наводнения, федеральной декларации пока нет; строителя обвиняют в сокрытии зарплат от страховщика; идёт холодный фронт.',
      ogAlt:
        'Затопленный дом с отметкой уровня воды рядом с палаткой центра помощи, планшет со столбиками зарплатной ведомости и лупой, грозовое облако с градом и стрелкой холодного фронта над пальмами',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса Южной Флориды в День ветеранов. Каждая изложена нашими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: в Ривьера-Бич открылся центр помощи после наводнения, но федеральной декларации о бедствии по осенним наводнениям всё ещё нет',
          summary:
            'Округ Палм-Бич, город Ривьера-Бич и штат во вторник открыли **многоведомственный ресурсный центр** в Wells Recreation Center по адресу 2409 Avenue H West, Riviera Beach; часы работы — **с 7:00 до 19:00**. Штат просит взять с собой удостоверение личности, подтверждение адреса, данные страховки и документы об ущербе. Офис конгрессмена Брайана Маста 9 ноября отметил, что федеральной декларации о бедствии пока нет, поэтому помощь FEMA для затопленных домов недоступна, и призвал жителей сообщать об ущербе в свой округ, даже если у них есть страховка; по состоянию на сегодняшнее утро в открытых данных FEMA новых деклараций по Флориде с конца октября нет. Предприятия из 14 округов, попавших в режим ЧС из-за осенних наводнений, включая Палм-Бич, могут сообщить об ущербе в опросе штата для бизнеса на FloridaDisaster.biz (вариант «2026 Fall Flooding»); это не заявка на помощь. Телеканал WFLX 10 ноября сообщил, что у многих владельцев домов в районе Lone Pine Estates в Ривьера-Бич не было страховки от наводнения, а председатель ассоциации жителей сказала, что район не входит в зону затопления.',
          why: 'Обычный полис на дом или кондо не покрывает ущерб от поднявшейся воды, а покупать страховку от наводнения можно, даже если вы живёте не в зоне высокого риска. Новый полис NFIP обычно вступает в силу через 30 дней, а полномочия программы действуют только до 11 декабря, так что не откладывайте. Сфотографируйте ущерб до уборки. Подробнее — на нашей [странице страхования от наводнения](/ru/flood-insurance-homestead-fl) и в [статье о королевских приливах и страховке от наводнения](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: FLOOD,
        },
        {
          headline:
            'Новое: штат арестовал владельца строительной компании, которого обвиняют в сокрытии почти $1 млн зарплат от страховщика workers’ comp',
          summary:
            'Департамент финансовых услуг Флориды (DFS) 10 ноября сообщил, что его следователи 5 ноября арестовали владельца строительной компании по обвинениям в крупной краже, организованной схеме мошенничества и мошенничестве с компенсацией работникам (workers’ comp). По данным DFS, при оформлении страховки он скрыл реальный фонд оплаты труда: следователи обнаружили **$968 278,71** незаявленных зарплат и **$1 074 278,71** в чеках, обналиченных через пункты денежных переводов, а ущерб страховщику DFS оценивает примерно в **$100 566**. Дело будет вести прокуратура округа Майами-Дейд; обвинения — это ещё не приговор. О любых случаях страхового мошенничества DFS просит сообщать по телефону **1-800-378-0445** или на сайте FraudFreeFlorida.com.',
          why: 'Workers’ comp рассчитывается от вашего фонда оплаты труда, поэтому указывайте его точно при покупке полиса и сообщайте агенту, когда нанимаете новые бригады. После окончания года полиса страховщики обычно проверяют зарплатную ведомость, а оплата работникам «в обход книг» может обернуться уголовным делом. Подробнее — в наших статьях [помощник: сотрудник или 1099?](/ru/blog/helper-employee-or-1099-florida-workers-comp) и [сертификаты субподрядчиков](/ru/blog/subcontractor-insurance-certificates-florida).',
          sources: COMP,
        },
        {
          headline:
            'Обновление: сегодня днём грозы с возможным мелким градом, холодный фронт рано утром в пятницу, а в начале следующей недели возможен циклон в Мексиканском заливе',
          summary:
            'Прогностическое обсуждение NWS Miami от 5:52 ожидает сегодня днём отдельные ливни и грозы во внутренних районах и в агломерациях восточного побережья. Некоторые могут усилиться у озера Окичоби и в округе Палм-Бич: порывистый ветер, частые молнии, мелкий град и сильный ливень. Сильный холодный фронт пройдёт через Южную Флориду **поздно вечером в четверг и утром в пятницу**. За ним придёт самый прохладный за эту осень воздух: в субботу утром в большинстве районов **55–59 °F (13–15 °C)**, у самого восточного побережья около 60–63 °F (16–17 °C), а днём в субботу лишь немногим выше 70 °F (21–23 °C). Синоптики добавляют, что в начале следующей недели над Мексиканским заливом может образоваться область низкого давления и в понедельник и вторник станет дождливее, но эта часть прогноза очень неопределённа.',
          why: 'Ущерб машине от града или упавшей ветки обычно возмещается по comprehensive. Град, повредивший крышу, — обычно случай по полису на дом с учётом франшизы. Сразу сделайте фотографии с датой и сообщите об ущербе без промедления. Подробнее — в статье [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Citizens **сегодня, в среду, 11 ноября, не работает из-за Дня ветеранов**. Сообщить о страховом случае можно через myPolicy или по круглосуточной линии 866-411-2742; обычный график возобновится в четверг. Федеральная программа страхования от наводнений действует **до 23:59 11 декабря 2026 г.**, то есть ещё 30 дней; на странице FEMA нового продления пока нет. Приём публичных комментариев по заявке NCCI о тарифах workers’ comp на 2027 год (запрошено среднее изменение −7,4% для добровольного рынка) завершился 10 ноября; приказа OIR пока нет. Национальный центр по ураганам, 7:00 среды: в ближайшие 7 дней образование тропических циклонов не ожидается.',
        },
      ],
      extraSources: BOX,
    },
  },
};
