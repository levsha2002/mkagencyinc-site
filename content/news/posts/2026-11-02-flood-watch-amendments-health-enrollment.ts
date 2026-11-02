import type { NewsEdition, NewsSource } from '../types';

// Edition for Monday, Nov. 2, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_FFA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-01',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=FFA&format=CI&version=1&glossary=0',
  title: 'Flood Watch, NWS Miami, 11:59 p.m. EST Sun Nov 1, 2026',
};

const NWS_MFL_LSR: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-01',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=LSR&format=CI&version=1&glossary=0',
  title: 'Local Storm Report, NWS Miami, 8:16 p.m. EST Sun Nov 1, 2026',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-02',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 1:41 a.m. EST Mon Nov 2, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-02',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, Mon Nov 2, 2026',
};

const NBC6_FLOOD: NewsSource = {
  name: 'NBC 6 South Florida',
  date: '2026-11-01',
  url: 'https://www.nbcmiami.com/weather/stories-weather/live-radar-flood-watch-in-effect-as-heavy-rain-drenches-south-florida/3881463/',
  title: 'Flood Watch in effect as heavy rain drenches South Florida',
};

const MDC_SOE: NewsSource = {
  name: 'Miami-Dade Supervisor of Elections',
  date: '2026-10-30',
  url: 'https://www.miamidade.gov/global/release.page?Mduid_release=rel1793374782158732',
  title: 'Miami-Dade Supervisor of Elections reminds voters of temporary polling place changes ahead of November 3 General Election',
};

const NBC6_AMENDMENTS: NewsSource = {
  name: 'NBC 6 South Florida',
  date: '2026-10-27',
  url: 'https://www.nbcmiami.com/elections/these-are-the-florida-amendments-on-the-november-2026-ballot/3877785/',
  title: 'These are the Florida amendments on the November 2026 ballot',
};

const HC_DATES: NewsSource = {
  name: 'HealthCare.gov',
  date: '2026-11-01',
  url: 'https://www.healthcare.gov/quick-guide/dates-and-deadlines/',
  title: 'Dates and deadlines for 2027 health insurance',
};

const FL_PHOENIX_ACA: NewsSource = {
  name: 'Florida Phoenix',
  date: '2026-11-01',
  url: 'https://floridaphoenix.com/2026/11/01/__trashed-4/',
  title: 'It’s here: 2027 Obamacare enrollment',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-02',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Mon Nov 2, 2026',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (updated 03.26.2026)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const WX = [NWS_MFL_FFA, NWS_MFL_LSR, NWS_MFL_CFW, NWS_MFL_AFD, NBC6_FLOOD];
const VOTE = [MDC_SOE, NBC6_AMENDMENTS];
const ACA = [HC_DATES, FL_PHOENIX_ACA];
const BOX = [CITIZENS_CAL, NHC_TWO, FEMA_REAUTH];

export const edition: NewsEdition = {
  slug: '2026-11-02-flood-watch-amendments-health-enrollment',
  datePublished: '2026-11-02',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 2, 2026: the Flood Watch is extended through Monday evening after Sunday’s flash flooding, Tuesday’s ballot includes a homestead property tax amendment, and open enrollment for 2027 health coverage has begun',
      metaTitle: 'Insurance News Nov. 2, 2026: Flood Watch, Amendments, Health | M&K',
      description:
        'The Flood Watch now covers all of South Florida through Monday evening, what is on Tuesday’s ballot including Amendment 3, and 2027 health coverage open enrollment.',
      ogAlt:
        'A dark rain cloud over a house and a car standing in floodwater, a ballot box beside a small house, and a health shield next to a calendar',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners on the Monday before Election Day. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: After flash flooding on Sunday, the Flood Watch now covers all of South Florida through Monday evening, and the coastal flood advisory runs to Tuesday',
          summary:
            'Heavy rain bands caused localized flash flooding on Sunday: a Flash Flood Warning covered parts of Miami-Dade in the early afternoon, and on Sunday evening an emergency manager reported water entering homes near Northlake Boulevard and Florida’s Turnpike in Palm Beach Gardens. The National Weather Service in Miami extended the **Flood Watch through Monday evening** and expanded it to all of South Florida, including Florida City, Homestead, Kendall and the Redland; most places could get 1 to 3 inches on Monday, with 3 to 5 inches in scattered spots and isolated totals of 6 to 9 inches within two to four hours. More rain is expected Tuesday, mainly along the east coast, and a **Coastal Flood Advisory** for minor to moderate tidal flooding on the Miami-Dade, Broward and Palm Beach coast now runs until **7 p.m. Tuesday**, with a high rip current risk through Tuesday evening. Forecasters expect less rain from midweek, but tides will climb again ahead of the Nov. 9 new moon.',
          why: 'Turn around at flooded roads: water damage to a car is a comprehensive claim, not collision ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). If water gets into your home or business, take dated photos before you clean up and see our [claim checklist](/en/blog/hurricane-claim-checklist-florida); rising water is usually covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), which generally takes 30 days to start.',
          sources: WX,
        },
        {
          headline:
            'Update: Polls are open 7 a.m. to 7 p.m. Tuesday, and three proposed amendments are on the ballot, including Amendment 3 on homestead property taxes',
          summary:
            'Florida votes on **Tuesday, Nov. 3**, and in Miami-Dade polls are open **7 a.m. to 7 p.m.**; anyone in line by 7 p.m. can vote, but Election Day voters must use their assigned precinct. The Supervisor of Elections temporarily moved 12 polling places, including precincts 825 and 836 in South Dade, which move from the South Dade Regional Library to the South Dade Government Center at 10710 SW 211 St. Each of the three statewide amendments needs 60% to pass. **Amendment 3** would raise the homestead exemption from non-school property taxes to $150,000 in 2027 and $250,000 in 2028, then adjust it for inflation, and would lower the yearly assessment cap on non-homestead property from 10% to 5%; **Amendment 2** would exempt equipment and other tangible personal property on land used for agriculture or agritourism from property taxes, and **Amendment 1** would raise the cap on the state’s rainy-day fund.',
          why: 'Property taxes are not part of your insurance premium, but for many homeowners both are paid through the same mortgage escrow account, so the result can change your monthly payment at the next escrow review. Whatever happens with exemptions, your dwelling coverage should reflect what it would cost to rebuild your home, not its assessed or taxable value; we can review your [home policy](/en/homeowners-insurance-florida-city) with you.',
          sources: VOTE,
        },
        {
          headline: 'Open enrollment for 2027 health coverage on HealthCare.gov began Nov. 1 and runs to Dec. 15 for a Jan. 1 start',
          summary:
            'The marketplace open enrollment period for 2027 started on **Nov. 1**: enroll or change plans by **Dec. 15** for coverage that starts Jan. 1, or between Dec. 16 and **Jan. 15** for coverage that starts Feb. 1. According to the Florida Phoenix, citing data from the state Office of Insurance Regulation, 12 companies offer marketplace plans in Florida for 2027, and the average monthly premium is rising 10.4% before tax credits. About 3.85 million Floridians had marketplace coverage in effect in 2026, down from 4.3 million in 2025, after enhanced federal premium tax credits ended. Trained navigators can help people compare plans and check whether they qualify for a tax credit.',
          why: 'If you are self-employed, a 1099 worker or a small-business owner buying your own coverage, compare deductibles and doctor networks, not only the monthly premium, and confirm whether a plan sold outside the marketplace meets ACA rules. Health coverage also matters for drivers: Florida’s required PIP pays only up to $10,000 for injuries in a car crash ([Florida minimum car insurance](/en/blog/florida-minimum-car-insurance-requirements)).',
          sources: ACA,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'Citizens policyholders who received offers for the Nov. 17 takeout round have until **Thursday, Nov. 5** to register their choice; if no choice is registered, Citizens assigns the policy to one of the companies that selected it. The National Hurricane Center says an area of low pressure could form northeast of the Bahamas in a couple of days and may gain subtropical features late this week as it moves away to the east-northeast, with a 20% chance of formation over seven days (7 a.m. Monday outlook). The National Flood Insurance Program remains authorized only through 11:59 p.m. on Dec. 11, 2026.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros de Florida, 2 de noviembre de 2026: la vigilancia por inundaciones se extiende hasta el lunes en la noche tras las inundaciones repentinas del domingo, la boleta del martes incluye una enmienda sobre el impuesto a la propiedad con homestead y comenzó la inscripción abierta para la cobertura médica de 2027',
      metaTitle: 'Noticias de seguros 2/11/2026: inundaciones, enmiendas y salud | M&K',
      description:
        'Vigilancia por inundaciones en todo el sur de Florida hasta el lunes en la noche, qué hay en la boleta del martes, incluida la Enmienda 3, y la inscripción abierta para 2027.',
      ogAlt:
        'Una nube oscura de lluvia sobre una casa y un carro en el agua, una urna electoral junto a una casita y un escudo de salud al lado de un calendario',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida, el lunes antes del Día de las Elecciones. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline:
            'Actualización: tras las inundaciones repentinas del domingo, la vigilancia por inundaciones cubre todo el sur de Florida hasta el lunes en la noche y el aviso por inundación costera sigue hasta el martes',
          summary:
            'Las bandas de lluvia intensa provocaron inundaciones repentinas localizadas el domingo: una advertencia de inundación repentina (Flash Flood Warning) cubrió partes de Miami-Dade a primera hora de la tarde y, en la noche, un funcionario de manejo de emergencias reportó agua entrando en viviendas cerca de Northlake Boulevard y el Turnpike de Florida, en Palm Beach Gardens. El Servicio Nacional de Meteorología (NWS) en Miami extendió la **vigilancia por inundaciones (Flood Watch) hasta el lunes en la noche** y la amplió a todo el sur de Florida, incluidos Florida City, Homestead, Kendall y el Redland; en la mayoría de las zonas podrían caer de 1 a 3 pulgadas el lunes, de 3 a 5 en puntos dispersos y, en lugares aislados, de 6 a 9 pulgadas en dos a cuatro horas. Se espera más lluvia el martes, sobre todo en la costa este, y el **aviso por inundación costera** de menor a moderada (Coastal Flood Advisory) en la costa de Miami-Dade, Broward y Palm Beach sigue hasta las **7 p.m. del martes**, con alto riesgo de corrientes de resaca hasta el martes en la noche. Los meteorólogos prevén menos lluvia desde mediados de semana, pero las mareas volverán a subir antes de la luna nueva del 9 de noviembre.',
          why: 'Si la calle está inundada, dé la vuelta: el daño por agua a un carro es un reclamo de comprehensive, no de colisión ([comprehensive o collision](/es/blog/comprehensive-vs-collision-florida)). Si el agua entra a su casa o negocio, tome fotos con fecha antes de limpiar y revise nuestra [lista para reclamos](/es/blog/hurricane-claim-checklist-florida); el agua que sube normalmente solo la cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, que por lo general tarda 30 días en entrar en vigor.',
          sources: WX,
        },
        {
          headline:
            'Actualización: las urnas abren de 7 a.m. a 7 p.m. el martes y hay tres enmiendas en la boleta, entre ellas la Enmienda 3 sobre el impuesto a la propiedad con homestead',
          summary:
            'Florida vota el **martes 3 de noviembre** y en Miami-Dade los centros de votación abren de **7 a.m. a 7 p.m.**; quien esté en la fila a las 7 p.m. puede votar, pero el Día de las Elecciones cada elector debe acudir a su recinto asignado. La Supervisora de Elecciones trasladó temporalmente 12 centros de votación, entre ellos los recintos 825 y 836 del sur del condado, que pasan de la South Dade Regional Library al South Dade Government Center, en el 10710 SW 211 St. Cada una de las tres enmiendas estatales necesita el 60% de los votos para aprobarse. La **Enmienda 3** elevaría la exención de homestead en los impuestos a la propiedad que no son escolares a $150,000 en 2027 y a $250,000 en 2028, con ajuste por inflación después, y bajaría del 10% al 5% el tope anual de aumento de la tasación para propiedades sin homestead; la **Enmienda 2** eximiría de impuestos a la propiedad los equipos y otros bienes muebles en terrenos dedicados a la agricultura o al agroturismo, y la **Enmienda 1** subiría el tope del fondo de reserva del estado.',
          why: 'Los impuestos a la propiedad no forman parte de su prima de seguro, pero muchos propietarios pagan ambos a través de la misma cuenta escrow de la hipoteca, así que el resultado puede cambiar su pago mensual en la próxima revisión del escrow. Pase lo que pase con las exenciones, la cobertura de su vivienda debe reflejar lo que costaría reconstruirla, no su valor tasado o imponible; podemos revisar su [póliza de vivienda](/es/homeowners-insurance-florida-city) con usted.',
          sources: VOTE,
        },
        {
          headline: 'La inscripción abierta para la cobertura médica de 2027 en HealthCare.gov comenzó el 1 de noviembre y sigue hasta el 15 de diciembre para empezar el 1 de enero',
          summary:
            'El periodo de inscripción abierta del mercado de seguros médicos para 2027 comenzó el **1 de noviembre**: quien se inscriba o cambie de plan a más tardar el **15 de diciembre** tendrá cobertura desde el 1 de enero, y quien lo haga entre el 16 de diciembre y el **15 de enero**, desde el 1 de febrero. Según el Florida Phoenix, con datos de la Oficina de Regulación de Seguros del estado, 12 compañías ofrecen planes del mercado en Florida para 2027 y la prima mensual promedio sube un 10.4% antes de los créditos fiscales. Unos 3.85 millones de floridanos tenían cobertura del mercado vigente en 2026, frente a 4.3 millones en 2025, después de que terminaran los créditos fiscales federales ampliados para las primas. Los navegadores capacitados pueden ayudar a comparar planes y a verificar si alguien califica para un crédito fiscal.',
          why: 'Si trabaja por cuenta propia, con un 1099 o tiene un pequeño negocio y compra su propia cobertura, compare deducibles y redes de médicos, no solo la prima mensual, y confirme si un plan vendido fuera del mercado cumple las reglas de la ACA. La cobertura médica también importa al manejar: el PIP obligatorio en Florida paga solo hasta $10,000 por lesiones en un accidente de carro ([seguro mínimo de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements)).',
          sources: ACA,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'Los asegurados de Citizens que recibieron ofertas para la ronda de traspaso (takeout) del 17 de noviembre tienen hasta el **jueves 5 de noviembre** para registrar su decisión; si no la registran, Citizens asigna la póliza a una de las compañías que la seleccionaron. El Centro Nacional de Huracanes indica que podría formarse un área de baja presión al noreste de las Bahamas en un par de días y adquirir rasgos subtropicales a fines de semana mientras se aleja hacia el este-noreste, con un 20% de probabilidad de formación en siete días (perspectiva de las 7 a.m. del lunes). El Programa Nacional de Seguro contra Inundaciones sigue autorizado solo hasta las 11:59 p.m. del 11 de diciembre de 2026.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 2 ноября 2026: после внезапных паводков в воскресенье Flood Watch продлён до вечера понедельника, во вторник на голосовании поправка о налоге на жильё с homestead, а запись на медицинскую страховку на 2027 год уже открыта',
      metaTitle: 'Страховые новости 2.11.2026: паводки, поправки, медстраховка | M&K',
      description:
        'Flood Watch для всего юга Флориды до вечера понедельника, что стоит в бюллетене во вторник, включая поправку 3, и открытая запись на медстраховку на 2027 год.',
      ogAlt:
        'Тёмная дождевая туча над домом и машиной в воде, урна для голосования рядом с маленьким домом и медицинский щит рядом с календарём',
      intro:
        'Три новости для владельцев жилья, водителей и владельцев малого бизнеса на юге Флориды в понедельник накануне дня выборов. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: после внезапных паводков в воскресенье Flood Watch охватывает весь юг Флориды до вечера понедельника, а предупреждение о прибрежном подтоплении действует до вторника',
          summary:
            'В воскресенье полосы сильного дождя вызвали местные внезапные паводки: днём часть округа Майами-Дейд была под предупреждением Flash Flood Warning, а вечером служба по чрезвычайным ситуациям сообщила, что вода заходит в дома возле Northlake Boulevard и Florida’s Turnpike в Палм-Бич-Гарденс. Национальная метеослужба (NWS) в Майами **продлила Flood Watch до вечера понедельника** и распространила его на весь юг Флориды, включая Флорида-Сити, Хомстед, Кендалл и Редленд: в понедельник в большинстве мест ожидается 1–3 дюйма осадков, местами 3–5 дюймов, а в отдельных точках 6–9 дюймов за два-четыре часа. Во вторник дожди продолжатся, в основном на восточном побережье, а **Coastal Flood Advisory** (слабое и умеренное прибрежное подтопление) на побережье Майами-Дейд, Бровард и Палм-Бич действует до **19:00 вторника**; высокий риск обратных течений сохраняется до вечера вторника. С середины недели дождей должно стать меньше, но перед новолунием 9 ноября приливы снова поднимутся.',
          why: 'Не въезжайте на затопленную дорогу: ущерб машине от воды — это претензия по comprehensive, а не по collision ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Если вода попала в дом или помещение бизнеса, сделайте фото с датой до уборки и посмотрите наш [чек-лист для претензии](/ru/blog/hurricane-claim-checklist-florida); поднявшуюся воду обычно покрывает только отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), который, как правило, начинает действовать через 30 дней.',
          sources: WX,
        },
        {
          headline:
            'Обновление: во вторник участки открыты с 7:00 до 19:00, в бюллетене три поправки, включая поправку 3 о налоге на жильё с homestead',
          summary:
            'Флорида голосует во **вторник, 3 ноября**; в Майами-Дейд участки открыты **с 7:00 до 19:00**, и все, кто стоит в очереди к 19:00, смогут проголосовать, но в день выборов голосовать нужно на своём закреплённом участке. Избирательная комиссия округа временно перенесла 12 участков, в том числе участки 825 и 836 на юге округа: вместо South Dade Regional Library они работают в South Dade Government Center по адресу 10710 SW 211 St. Каждой из трёх поправок к конституции штата для принятия нужно 60% голосов. **Поправка 3** увеличила бы льготу homestead по налогам на недвижимость, не идущим на школы, до $150,000 в 2027 году и до $250,000 в 2028 году с последующей индексацией на инфляцию и снизила бы годовой предел роста оценки для недвижимости без homestead с 10% до 5%; **поправка 2** освободила бы от налога на имущество оборудование и другое движимое имущество на землях, используемых для сельского хозяйства или агротуризма, а **поправка 1** подняла бы предел резервного фонда штата.',
          why: 'Налог на недвижимость не входит в страховую премию, но у многих владельцев оба платежа идут через один эскроу-счёт ипотеки, поэтому итог голосования может изменить ежемесячный платёж при следующем пересмотре эскроу. Что бы ни решили по льготам, страховая сумма на дом должна отражать стоимость его восстановления, а не оценочную или налогооблагаемую стоимость; мы можем вместе с вами проверить [страховку дома](/ru/homeowners-insurance-florida-city).',
          sources: VOTE,
        },
        {
          headline: 'Запись на медицинскую страховку на 2027 год на HealthCare.gov открылась 1 ноября и идёт до 15 декабря для начала покрытия с 1 января',
          summary:
            'Период открытой записи на рынке медицинского страхования на 2027 год начался **1 ноября**: тем, кто оформит или сменит план до **15 декабря**, покрытие начнётся с 1 января, а тем, кто сделает это с 16 декабря по **15 января**, — с 1 февраля. По данным Florida Phoenix со ссылкой на Управление по регулированию страхования штата, в 2027 году планы на рынке во Флориде предлагают 12 компаний, а средняя ежемесячная премия растёт на 10.4% до учёта налоговых кредитов. В 2026 году действующее покрытие с рынка было примерно у 3.85 млн жителей Флориды против 4.3 млн в 2025 году — после того как закончились расширенные федеральные налоговые кредиты на премии. Обученные консультанты (navigators) помогают сравнить планы и проверить, положен ли налоговый кредит.',
          why: 'Если вы работаете на себя, по 1099 или владеете малым бизнесом и покупаете страховку сами, сравнивайте франшизы и сети врачей, а не только ежемесячный взнос, и уточняйте, соответствует ли план, продаваемый вне рынка, правилам ACA. Медстраховка важна и водителям: обязательный во Флориде PIP оплачивает травмы в ДТП только до $10,000 ([минимальная автостраховка во Флориде](/ru/blog/florida-minimum-car-insurance-requirements)).',
          sources: ACA,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Клиенты Citizens, получившие предложения в раунде передачи полисов (takeout) 17 ноября, должны зарегистрировать свой выбор до **четверга, 5 ноября**; если выбор не сделан, Citizens передаёт полис одной из компаний, которые его выбрали. Национальный центр по ураганам сообщает, что через пару дней к северо-востоку от Багам может образоваться область низкого давления, которая к концу недели может приобрести субтропические черты, уходя на восток-северо-восток; вероятность формирования за семь дней — 20% (прогноз на 7:00 понедельника). Национальная программа страхования от наводнений (NFIP) продлена только до 23:59 11 декабря 2026 года.',
        },
      ],
      extraSources: BOX,
    },
  },
};
