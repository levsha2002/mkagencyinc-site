import type { NewsEdition, NewsSource } from '../types';

// Edition for Tuesday, Oct. 20, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const OIR_ISAIAS: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-19',
  url: 'https://floir.gov/home/hurricane-isaias',
  title: 'Hurricane Isaias: catastrophe claims data (as of Oct. 15, 2026)',
};

const FL_PHOENIX: NewsSource = {
  name: 'Florida Phoenix',
  date: '2026-10-19',
  url: 'https://floridaphoenix.com/2026/10/19/hurricane-isaias-leaves-582m-in-insured-damage-states-seeks-237m-from-fema/',
  title: 'Hurricane Isaias leaves $582M in insured damage; state seeks $237M from FEMA',
};

const FEMA_3655: NewsSource = {
  name: 'Federal Emergency Management Agency',
  date: '2026-10-20',
  url: 'https://www.fema.gov/disaster/3655',
  title: 'Florida Hurricane Isaias (EM-3655-FL)',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-20',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, Tue Oct 20, 2026',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-20',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Atlantic Tropical Weather Outlook, 8 a.m. EDT Tue Oct 20, 2026',
};

const MIAMI_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const SFWMD_KING: NewsSource = {
  name: 'South Florida Water Management District',
  date: '2026-10-20',
  url: 'https://sfwmd.gov/news-events/news/2026-king-tide-season-forecast',
  title: '2026 King Tide Season Forecast',
};

const CITIZENS_PAY: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-10-15',
  url: 'https://www.citizensfla.com/-/20261015-online-payment-system-changes',
  title: 'Online Payment System Changes',
};

const OIR_COA: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-19',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/19/commissioner-mike-yaworsky-forces-troubled-company-to-surrender-certificate-of-authority',
  title: 'Commissioner Forces Troubled Company to Surrender Certificate of Authority',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (Agent)',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'National Council on Compensation Insurance Public Rate Hearing 2026',
};

export const edition: NewsEdition = {
  slug: '2026-10-20-isaias-claims-king-tides-citizens-payments',
  datePublished: '2026-10-20',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 20, 2026: First official Isaias claim numbers, king-tide flooding possible from midweek, and changes to Citizens online payments',
      metaTitle: 'Insurance News Oct. 20, 2026: Isaias Claims, King Tides | M&K',
      description:
        'OIR posts first Isaias claim numbers, NWS Miami warns of king-tide flooding from midweek, Citizens changes online payments, and a mobile-home insurer exits.',
      ogAlt:
        'A clipboard with a bar chart, a house with high water and a full moon over the waves, and a payment card with a calendar',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'State posts its first official Isaias claim numbers: about 46,500 claims and $582 million in estimated insured losses',
          summary:
            'The Florida Office of Insurance Regulation has published its first claims data for Hurricane Isaias: as of Oct. 15, insurers had reported 46,509 claims and about $582 million in estimated insured losses, most of them on homeowners policies (35,014 claims). Santa Rosa and Escambia counties account for nearly four out of five claims; Broward had 25, and Miami-Dade was not on the top-20 county list. Only 11.9% of claims had been closed by then, 1,127 with a payment and 4,418 without one, and most of the no-payment closures (3,785) fell under “administrative reasons,” a category OIR says can include inquiries, withdrawn or duplicate claims, claims opened in error and a lack of contact or cooperation from the policyholder; smaller groups were closed because the damage was below the deductible (222) or there was no flood coverage (86). Separately, the state’s emergency management agency told the Florida Phoenix that preliminary assessments found nearly 1,000 damaged homes in eight Panhandle counties that could qualify for federal individual assistance; as of Tuesday morning, FEMA still listed only the Oct. 9 emergency declaration (EM-3655-FL) for Florida.',
          why: 'The numbers hold a lesson for South Florida, too: after a storm, keep your phone number and email current with your insurer, answer the adjuster and send requested documents promptly, and report each loss once, so your claim doesn’t close for paperwork reasons. Our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) walks through the steps.',
          sources: [OIR_ISAIAS, FL_PHOENIX, FEMA_3655],
        },
        {
          headline:
            'Update: NWS Miami says king-tide flooding is possible from midweek, and the offshore low’s two-day odds jump to 40%',
          summary:
            'In its Tuesday forecast discussion, the National Weather Service in Miami says minor to moderate coastal flooding is possible around each day’s high tides starting midweek and lasting through at least the weekend, as the fall king-tide cycle arrives. The high rip-current risk on the Atlantic beaches of Palm Beach, Broward and Miami-Dade stays in place through at least Thursday, and Miami-Dade County lists Oct. 24–30 as this fall’s highest predicted king tides, with the South Florida Water Management District putting the year’s top predicted east-coast peak on Oct. 27. Offshore, the National Hurricane Center’s 8 a.m. Tuesday outlook gives the storm-force low off the North Carolina coast a 40% chance of development within 48 hours (it was near 0% on Monday); it could briefly take on subtropical characteristics over the Gulf Stream before speeding northeast away from the U.S. by the end of the week.',
          why: 'If you live or park in a low-lying coastal area, move your car to higher ground before high tide, don’t drive through standing water (it is likely salt water), and rinse your car with fresh water if you do. Flooding of a home is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl); our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade) explains more.',
          sources: [NWS_MFL_AFD, MIAMI_KING, SFWMD_KING, NHC_TWO],
        },
        {
          headline:
            'Citizens changes its online payment system: re-enter saved cards, split payments, and a card processing fee',
          summary:
            'Citizens Property Insurance Corporation announced on Oct. 15 that it is updating online payments made through its myPolicy portal and its one-time payment option. Policyholders can now split a card payment between two credit or debit cards, and those on semiannual or quarterly plans can pay more than the minimum due, up to the full balance; any extra is applied to future balances and is not refunded as long as the policy stays in force. Payment methods saved in myPolicy will not carry over, so they must be entered again at the next payment; payments made by phone post the following calendar day, and Citizens notes that the vendor processing the transaction applies a 2.99% fee to each credit or debit card used. Citizens is emailing direct-bill policyholders who have an email address on file and renew between Oct. 1 and Dec. 31, 2026; everyone else will be notified in December.',
          why: 'If you pay Citizens yourself (not through your mortgage escrow), log in to myPolicy before your next due date and save your payment method again so a payment isn’t missed, and keep the receipt. Questions about your Citizens policy or renewal? [We can help](/en/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_PAY],
        },
        {
          headline: 'State regulator forces a Florida-only mobile-home insurer to surrender its license',
          summary:
            'On Oct. 19 the Florida Office of Insurance Regulation said it is forcing a company licensed in 2020 to write only mobile-home coverage in Florida to give up its certificate of authority, after a period of administrative supervision and a finding that the company was in unsound financial condition. According to OIR, the company’s surplus had dropped to about $15.09 million, just above the state’s $15 million minimum for residential property insurers, and in March 2024 it filed a withdrawal plan that moved roughly 8,000 policies to another company and canceled more than 1,100 effective May 31, 2024; OIR then placed it under supervision and required refunds of unearned premium to canceled customers. OIR says it will make sure any remaining liabilities are handled promptly under Florida law.',
          why: 'If you own a mobile or manufactured home and have an unresolved claim or refund with an insurer that has left Florida, call the state’s insurance consumer helpline at 1-877-693-5236. Before you buy or renew, you can check that a company is licensed with OIR’s Active Company Search.',
          sources: [OIR_COA],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Today and this week',
          text: 'Today, Tuesday, Oct. 20, is Citizens’ personal-lines assumption date: policyholders whose policies were assumed are mailed a Notice of Assumption and Nonrenewal with a Certificate of Assumption, and those whose selected policies were not assumed get an Unsuccessful Assumption Notice. Today is also the deadline to prefile expert testimony for OIR’s virtual public hearing on Tuesday, Oct. 27, at 10 a.m. ET on NCCI’s proposed 7.4% average decrease in voluntary-market workers’ compensation rates for 2027; written comments go to ratehearings@floir.com until Nov. 10 at 5 p.m. ET.',
        },
      ],
      extraSources: [CITIZENS_CAL, OIR_NCCI],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 20 de octubre de 2026: primeras cifras oficiales de reclamos por Isaías, posibles inundaciones por mareas altas desde mediados de semana y cambios en los pagos en línea de Citizens',
      metaTitle: 'Noticias de seguros, 20 oct. 2026: reclamos por Isaías | M&K',
      description:
        'La OIR publica las primeras cifras de reclamos por Isaías, el NWS advierte inundaciones por mareas altas, Citizens cambia sus pagos en línea y más.',
      ogAlt:
        'Un portapapeles con un gráfico de barras, una casa con el agua alta y la luna llena sobre las olas, y una tarjeta de pago con un calendario',
      intro:
        'Cuatro novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de la Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'El estado publica las primeras cifras oficiales de reclamos por Isaías: unos 46,500 reclamos y $582 millones en pérdidas aseguradas estimadas',
          summary:
            'La Oficina de Regulación de Seguros de Florida (OIR) publicó sus primeros datos de reclamos por el huracán Isaías: hasta el 15 de octubre, las aseguradoras habían reportado 46,509 reclamos y unos $582 millones en pérdidas aseguradas estimadas, en su mayoría en pólizas de vivienda (35,014 reclamos). Los condados de Santa Rosa y Escambia concentran casi cuatro de cada cinco reclamos; Broward registró 25 y Miami-Dade no figura entre los 20 condados con más reclamos. Para esa fecha solo se había cerrado el 11.9 % de los reclamos, 1,127 con pago y 4,418 sin pago, y la mayoría de los cierres sin pago (3,785) entraron en la categoría de “razones administrativas”, que según la OIR puede incluir consultas, reclamos retirados o duplicados, reclamos abiertos por error y falta de contacto o de cooperación del asegurado; grupos más pequeños se cerraron porque el daño no superaba el deducible (222) o porque no había cobertura de inundación (86). Por otra parte, la agencia estatal de manejo de emergencias dijo al Florida Phoenix que las evaluaciones preliminares encontraron cerca de 1,000 viviendas dañadas en ocho condados del Panhandle que podrían calificar para asistencia individual federal; el martes por la mañana, FEMA seguía mostrando para Florida solo la declaración de emergencia del 9 de octubre (EM-3655-FL).',
          why: 'Las cifras también dejan una lección para el sur de la Florida: después de una tormenta, mantenga al día su teléfono y correo electrónico con su aseguradora, responda al ajustador y envíe pronto los documentos que le pidan, y reporte cada daño una sola vez, para que su reclamo no se cierre por trámites. Nuestra [guía de pasos para un reclamo por huracán](/es/blog/hurricane-claim-checklist-florida) se lo explica.',
          sources: [OIR_ISAIAS, FL_PHOENIX, FEMA_3655],
        },
        {
          headline:
            'Actualización: el NWS de Miami advierte posibles inundaciones por mareas altas desde mediados de semana, y la baja frente a la costa sube al 40 % en dos días',
          summary:
            'En su discusión de pronóstico del martes, el Servicio Nacional de Meteorología (NWS) en Miami indica que es posible una inundación costera de leve a moderada alrededor de la marea alta de cada día a partir de mediados de semana y al menos hasta el fin de semana, con la llegada del ciclo de mareas altas de otoño (king tides). El riesgo alto de corrientes de resaca en las playas atlánticas de Palm Beach, Broward y Miami-Dade se mantiene al menos hasta el jueves, y el Condado Miami-Dade señala del 24 al 30 de octubre como las mareas más altas previstas este otoño, mientras que el Distrito de Administración del Agua del Sur de la Florida (SFWMD) ubica el pico anual previsto para la costa este el 27 de octubre. Mar adentro, el pronóstico de las 8 a.m. del martes del Centro Nacional de Huracanes da un 40 % de probabilidad de desarrollo en 48 horas a la baja con vientos de tormenta frente a la costa de Carolina del Norte (el lunes estaba cerca de 0 %); podría adquirir brevemente características subtropicales sobre la corriente del Golfo antes de alejarse rápidamente hacia el noreste, lejos de EE. UU., a finales de semana.',
          why: 'Si vive o estaciona en una zona costera baja, mueva el auto a un lugar más alto antes de la marea alta, no maneje por agua estancada (lo más probable es que sea agua salada) y, si tuvo que hacerlo, enjuague el auto con agua dulce. La inundación de una vivienda solo la cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte; en nuestra [guía sobre las mareas altas](/es/blog/king-tides-flood-insurance-miami-dade) le explicamos más.',
          sources: [NWS_MFL_AFD, MIAMI_KING, SFWMD_KING, NHC_TWO],
        },
        {
          headline:
            'Citizens cambia su sistema de pagos en línea: hay que volver a guardar las tarjetas, se puede dividir el pago y hay un cargo por tarjeta',
          summary:
            'Citizens Property Insurance Corporation anunció el 15 de octubre cambios en los pagos en línea que se hacen por su portal myPolicy y en la opción de pago único. Ahora se puede dividir un pago entre dos tarjetas de crédito o débito, y quien tiene un plan de pago semestral o trimestral puede pagar más del mínimo, hasta el saldo total; el excedente se aplica a saldos futuros y no se reembolsa mientras la póliza siga vigente. Los métodos de pago guardados en myPolicy no pasarán al nuevo sistema, así que habrá que ingresarlos de nuevo en el próximo pago; los pagos por teléfono se acreditan al día calendario siguiente, y Citizens indica que el proveedor que procesa la transacción cobra un cargo del 2.99 % por cada tarjeta de crédito o débito que se use. Citizens está enviando correos a los asegurados con facturación directa que tienen un correo electrónico registrado y renuevan entre el 1 de octubre y el 31 de diciembre de 2026; los demás recibirán el aviso en diciembre.',
          why: 'Si usted le paga a Citizens directamente (no a través del escrow de su hipoteca), entre a myPolicy antes de su próxima fecha de pago y vuelva a guardar su método de pago para no saltarse un pago, y conserve el recibo. ¿Preguntas sobre su póliza o su renovación con Citizens? [Le ayudamos](/es/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_PAY],
        },
        {
          headline:
            'El regulador estatal obliga a una aseguradora de casas móviles que solo operaba en Florida a entregar su licencia',
          summary:
            'El 19 de octubre, la OIR informó que obliga a una compañía autorizada en 2020 para asegurar únicamente casas móviles en Florida a entregar su certificado de autorización, tras un periodo de supervisión administrativa y después de determinar que su situación financiera no era sólida. Según la OIR, el superávit de la compañía había bajado a unos $15.09 millones, apenas por encima del mínimo estatal de $15 millones para aseguradoras de propiedad residencial, y en marzo de 2024 presentó un plan de retiro que trasladó unas 8,000 pólizas a otra compañía y canceló más de 1,100 a partir del 31 de mayo de 2024; entonces la OIR la puso bajo supervisión y le exigió devolver la prima no devengada a los clientes cancelados. La OIR afirma que se asegurará de que cualquier obligación pendiente se atienda con rapidez y conforme a la ley de Florida.',
          why: 'Si tiene una casa móvil o prefabricada y un reclamo o reembolso pendiente con una aseguradora que se fue de Florida, llame a la línea estatal de ayuda al consumidor de seguros, 1-877-693-5236. Antes de comprar o renovar, puede verificar que una compañía esté autorizada con la herramienta Active Company Search de la OIR.',
          sources: [OIR_COA],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Hoy y esta semana',
          text: 'Hoy, martes 20 de octubre, es la fecha de asunción de pólizas personales de Citizens: a quienes se les asumió la póliza se les envía por correo un aviso de asunción y no renovación (Notice of Assumption and Nonrenewal) con un certificado de asunción, y quienes tenían la póliza seleccionada pero no fue asumida reciben un aviso de asunción no realizada (Unsuccessful Assumption Notice). Hoy también vence el plazo para presentar por adelantado el testimonio de expertos para la audiencia pública virtual de la OIR del martes 27 de octubre a las 10 a.m. (hora del Este) sobre la reducción promedio del 7.4 % que propone el NCCI para las tarifas de compensación laboral (workers’ comp) del mercado voluntario en 2027; los comentarios por escrito se reciben en ratehearings@floir.com hasta el 10 de noviembre a las 5 p.m. (hora del Este).',
        },
      ],
      extraSources: [CITIZENS_CAL, OIR_NCCI],
    },
    ru: {
      title:
        'Страховые новости Флориды, 20 октября 2026: первые официальные цифры по страховым случаям после «Исайаса», возможное подтопление от king tides с середины недели и новая онлайн-оплата в Citizens',
      metaTitle: 'Страховые новости 20.10.2026: «Исайас», king tides | M&K Agency',
      description:
        'OIR опубликовало первые данные по «Исайасу», в Майами ждут подтопления от king tides, Citizens меняет онлайн-оплату, страховщик мобильных домов уходит.',
      ogAlt:
        'Планшет с бумагами и столбчатой диаграммой, дом у высокой воды под полной луной и платёжная карта с календарём',
      intro:
        'Четыре новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Штат опубликовал первые официальные данные по страховым случаям после «Исайаса»: около 46 500 заявлений и $582 млн оценочных убытков',
          summary:
            'Управление по регулированию страхования Флориды (OIR) опубликовало первые данные по урагану «Исайас»: на 15 октября страховщики сообщили о 46 509 заявлениях о страховых случаях и примерно $582 млн оценочных застрахованных убытков, причём большинство заявлений (35 014) — по полисам страхования домов. Почти четыре из пяти заявлений приходятся на округа Santa Rosa и Escambia; в Broward их 25, а Miami-Dade в список 20 округов с наибольшим числом заявлений не попал. К этой дате было закрыто лишь 11,9% заявлений — 1 127 с выплатой и 4 418 без выплаты, причём большинство закрытых без выплаты (3 785) отнесены к «административным причинам»: по словам OIR, сюда входят простые запросы, отозванные или дублирующиеся заявления, заявления, открытые по ошибке, и случаи, когда страхователь не выходит на связь или не сотрудничает; меньшую часть закрыли из-за ущерба ниже франшизы (222) или отсутствия покрытия от наводнения (86). Кроме того, агентство штата по чрезвычайным ситуациям сообщило изданию Florida Phoenix, что предварительная оценка выявила почти 1 000 повреждённых жилых домов в восьми округах Панхэндла — их владельцы могут претендовать на федеральную индивидуальную помощь; на утро вторника FEMA по-прежнему указывала для Флориды только чрезвычайную декларацию от 9 октября (EM-3655-FL).',
          why: 'Эти цифры — урок и для Южной Флориды: после шторма держите у страховщика актуальные телефон и email, отвечайте аджастеру и быстро присылайте запрошенные документы, а о каждом ущербе сообщайте один раз — тогда заявление не закроют по формальным причинам. Пошагово — в нашем [чек-листе на случай урагана](/ru/blog/hurricane-claim-checklist-florida).',
          sources: [OIR_ISAIAS, FL_PHOENIX, FEMA_3655],
        },
        {
          headline:
            'Обновление: метеослужба в Майами предупреждает о возможном подтоплении от king tides с середины недели, а шанс развития циклона у побережья за два дня вырос до 40%',
          summary:
            'В прогностическом обсуждении во вторник Национальная метеослужба (NWS) в Майами пишет, что с середины недели и как минимум до выходных во время ежедневных приливов возможно слабое или умеренное прибрежное подтопление: начинается осенний цикл king tides — самых высоких приливов года. Высокий риск rip currents (обратных течений) на атлантических пляжах Palm Beach, Broward и Miami-Dade сохраняется как минимум до четверга; округ Miami-Dade называет самыми высокими ожидаемыми приливами этой осени 24–30 октября, а Управление водными ресурсами Южной Флориды (SFWMD) ждёт годового пика на восточном побережье 27 октября. В открытом море Национальный центр ураганов в обзоре на 8:00 вторника оценил шанс развития нетропического циклона со штормовым ветром у побережья Северной Каролины в 40% за 48 часов (в понедельник — почти 0%); над Гольфстримом он может ненадолго приобрести субтропические черты, а к концу недели быстро уйти на северо-восток, прочь от США.',
          why: 'Если вы живёте или паркуетесь в низкой прибрежной зоне, отгоните машину повыше до прилива, не въезжайте в стоячую воду (скорее всего, она солёная), а если пришлось — промойте машину пресной водой. Подтопление дома покрывает только отдельный полис от наводнения, а не стандартная страховка дома; подробнее — в нашем [материале о king tides](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_AFD, MIAMI_KING, SFWMD_KING, NHC_TWO],
        },
        {
          headline:
            'Citizens меняет онлайн-оплату: сохранённые карты придётся ввести заново, платёж можно разделить, за оплату картой берётся комиссия',
          summary:
            'Citizens Property Insurance Corporation 15 октября объявила об изменениях в онлайн-оплате через портал myPolicy и в разовых платежах. Теперь платёж можно разделить между двумя кредитными или дебетовыми картами, а клиенты с полугодовым или квартальным графиком могут заплатить больше минимума, вплоть до полной суммы; переплата идёт в счёт будущих платежей и не возвращается, пока полис действует. Способы оплаты, сохранённые в myPolicy, в новую систему не перенесутся — их нужно будет ввести заново при следующем платеже; платежи по телефону зачисляются на следующий календарный день, а компания, которая обрабатывает платежи, как указывает Citizens, берёт комиссию 2,99% с каждой использованной кредитной или дебетовой карты. Citizens рассылает письма клиентам с прямой оплатой (direct pay), у которых указан email и продление полиса приходится на период с 1 октября по 31 декабря 2026 года; остальных уведомят в декабре.',
          why: 'Если вы платите Citizens сами (а не через escrow по ипотеке), зайдите в myPolicy до следующего срока оплаты и заново сохраните способ оплаты, чтобы не пропустить платёж, и сохраните квитанцию. Вопросы по полису или продлению в Citizens? [Поможем](/ru/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_PAY],
        },
        {
          headline:
            'Регулятор заставил страховщика мобильных домов, работавшего только во Флориде, сдать лицензию',
          summary:
            '19 октября OIR сообщило, что вынуждает компанию, получившую в 2020 году лицензию на страхование только мобильных домов во Флориде, сдать сертификат на право деятельности — после периода административного надзора и вывода о её неустойчивом финансовом положении. По данным OIR, собственный капитал (surplus) компании опустился примерно до $15,09 млн — чуть выше минимума в $15 млн, который штат требует от страховщиков жилой недвижимости, а в марте 2024 года она подала план ухода с рынка, по которому около 8 000 полисов перешли к другой компании, а более 1 100 были аннулированы с 31 мая 2024 года; тогда OIR взяло её под административный надзор и потребовало вернуть клиентам неиспользованную часть премии. OIR обещает, что все оставшиеся обязательства компании будут урегулированы быстро и по закону Флориды.',
          why: 'Если у вас мобильный или сборный дом и остался незакрытый страховой случай или возврат денег от страховщика, ушедшего из Флориды, звоните на горячую линию штата по вопросам страхования: 1-877-693-5236. Перед покупкой или продлением полиса лицензию компании можно проверить через Active Company Search на сайте OIR.',
          sources: [OIR_COA],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Сегодня и на этой неделе',
          text: 'Сегодня, во вторник 20 октября, — дата assumption личных полисов Citizens: тем, чьи полисы перешли к новой компании, по почте отправляют уведомление о передаче и непродлении (Notice of Assumption and Nonrenewal) с сертификатом о передаче (Certificate of Assumption), а тем, чей полис был выбран, но не передан, — уведомление о несостоявшейся передаче (Unsuccessful Assumption Notice). Сегодня же истекает срок предварительной подачи экспертных показаний к виртуальным публичным слушаниям OIR во вторник 27 октября в 10:00 по восточному времени — о предложенном NCCI снижении тарифов workers’ comp на добровольном рынке в среднем на 7,4% на 2027 год; письменные комментарии принимаются на ratehearings@floir.com до 17:00 по восточному времени 10 ноября.',
        },
      ],
      extraSources: [CITIZENS_CAL, OIR_NCCI],
    },
  },
};
