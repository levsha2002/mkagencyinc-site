import type { NewsEdition, NewsSource } from '../types';

// Edition for Saturday, Oct. 3, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const OIR_LIFE: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-01',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/01/notice-to-industry-oir-issues-suspension-of-coa-for-life---health-insurer',
  title: 'Notice to Industry: OIR Issues Suspension of COA for Life & Health Insurer',
};

const OIR_LIFE_ORDER: NewsSource = {
  name: 'Florida Office of Insurance Regulation (Immediate Final Order)',
  date: '2026-09-30',
  url: 'https://floir.gov/docs-sf/default-source/orders/life-and-health/2026/403552-26-ifo.pdf',
  title: 'Immediate Final Order suspending certificate of authority (life & health insurer)',
};

const CBS_KING_TIDES: NewsSource = {
  name: 'CBS News Miami',
  date: '2026-09-30',
  url: 'https://www.cbsnews.com/miami/news/miami-beach-condo-king-tide-flooding-power-outage-sunshine-bay/',
  title:
    'King tides leave Miami Beach condo residents without power, elevators and hot water for days',
};

const MIAMI_DADE_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const SFWMD_TIDES: NewsSource = {
  name: 'South Florida Water Management District',
  date: '2026-08-04',
  url: 'https://www.sfwmd.gov/news-events/news/2026-king-tide-season-forecast',
  title: '2026 King Tide Season Forecast',
};

const FIGA_ASSESSMENTS: NewsSource = {
  name: 'Florida Insurance Guaranty Association',
  date: '2026-02-24',
  url: 'https://figafacts.com/5094-2/',
  title: 'Current FIGA Emergency Assessment Is Concluding',
};

const FIGA_ASSESSMENTS_PAGE: NewsSource = {
  name: 'Florida Insurance Guaranty Association (Assessments)',
  date: '2026-02-24',
  url: 'https://figafacts.com/assessments/',
  title: 'FIGA Assessments — 1% emergency assessment ending 9/30/2026',
};

const CITIZENS_DEPO_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Agent Personal Lines Depopulation Calendar',
};

const CITIZENS_DEPO: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/web/public/depopulation-resources',
  title: 'Depopulation Resources',
};

const NHC: NewsSource = {
  name: 'National Hurricane Center: Atlantic Tropical Weather Outlook',
  date: '2026-10-03',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8:00 AM EDT Sat Oct 3 2026',
};

export const edition: NewsEdition = {
  slug: '2026-10-03-life-coa-king-tides-figa-citizens',
  datePublished: '2026-10-03',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 3, 2026: life-insurer suspension, king-tide outages, FIGA line ends, Citizens choice deadline',
      metaTitle: 'Insurance News Oct. 3, 2026: Life COA, Tides, FIGA | M&K Agency',
      description:
        'Today: OIR suspends a life insurer’s Florida license, Miami Beach king-tide outages, the FIGA 1% line ends for Oct. 1+ policies, and a Monday Citizens takeout deadline.',
      intro:
        'Four updates from the last few days for South Florida homeowners, renters, drivers and anyone with a Citizens or life/annuity policy. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'State regulator suspends a life and health insurer’s authority to sell new or renewal coverage in Florida',
          summary:
            'On Oct. 1, the Florida Office of Insurance Regulation issued an Immediate Final Order suspending one life and health insurer’s certificate of authority after finding the company impaired and noting that South Carolina—its home-state regulator—had started rehabilitation (receivership) proceedings. The company must immediately stop soliciting or accepting new or renewal business in Florida; agents must not place new contracts with it. OIR says the insurer must continue to service existing Florida policies and honor liabilities for losses and unearned premiums while those obligations remain.',
          why: 'If you hold a life, annuity or accident-and-health policy with a company you have not heard from lately, check OIR’s active-company listings and your agent’s appointments before you renew or buy more coverage—and keep paying premiums on in-force policies so you do not create a lapse yourself.',
          sources: [OIR_LIFE, OIR_LIFE_ORDER],
        },
        {
          headline:
            'King tides leave Miami Beach condo residents without power and elevators—next window starts Oct. 7',
          summary:
            'CBS News Miami reported on Sept. 30 that residents at Sunshine Bay Condos and nearby Lincoln Bay Towers dealt with multi-day outages after king-tide flooding filled garages and reached underground electrical, pump and elevator systems. Florida Power & Light said customer-owned equipment needed repairs before service could be safely restored, and flooded garages blocked access. Miami-Dade’s calendar lists the next coastal king-tide window for Oct. 7–13, with another Oct. 24–30; the South Florida Water Management District’s season forecast flags an annual-maximum predicted peak around Oct. 27 on the east coast. Standard homeowners policies generally do not cover flood.',
          why: 'If you live in a low-lying or coastal building, ask your association where electrical and elevator equipment sits and how it is protected—and confirm whether you carry separate [flood insurance](/en/flood-insurance-homestead-fl). Citizens wind policies face a flood-insurance requirement starting Jan. 1, 2027; see our [Citizens flood guide](/en/blog/citizens-flood-insurance-requirement-2027).',
          sources: [CBS_KING_TIDES, MIAMI_DADE_TIDES, SFWMD_TIDES],
        },
        {
          headline:
            'Update: the FIGA 1% emergency assessment no longer applies to policies effective Oct. 1 or later',
          summary:
            'The Florida Insurance Guaranty Association’s 1% emergency assessment (2023A), which has appeared as a separate line on many Florida property-insurance bills, ended for new and renewal policies with an effective date of Oct. 1, 2026 or later. FIGA announced the early wind-down in February: policies effective through Sept. 30, 2026 still carry the assessment for that full policy term, and FIGA will finish reconciliation filings into early 2028. The charge funded covered claims after insurer insolvencies; it is not premium tax and is shown separately from premium.',
          why: 'When your next renewal arrives, look for whether the FIGA line is gone—and remember that your overall renewal can still change for ordinary rating reasons. Compare the declarations page side by side with last year’s bill and ask a licensed agent to walk through any difference.',
          sources: [FIGA_ASSESSMENTS, FIGA_ASSESSMENTS_PAGE],
        },
        {
          headline:
            'Citizens personal-lines takeout: policyholder choice deadline is Monday, Oct. 5',
          summary:
            'Citizens’ 2026 personal-lines depopulation calendar sets Monday, Oct. 5, as the policyholder-choice deadline for the Oct. 20 assumption round. Choice letters for that round went out Aug. 27. If you received an offer and do not register a preference by the deadline, Citizens assigns the policy to one of the takeout companies that selected it—and when more than one company selected it, to the offer with the lowest estimated premium. Preference can be submitted online with your policy number and the registration code on the offer form; agents register choices in PolicyCenter.',
          why: 'If you still have a Citizens packet on the counter, do not wait past Monday. Compare coverage worksheets, deductibles and estimated premiums before you choose—or ask your agent to register the preference you want. More on how takeouts work: our [Citizens takeout guide](/en/blog/citizens-takeout-offer).',
          sources: [CITIZENS_DEPO_CAL, CITIZENS_DEPO],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Tropics check (Saturday, Oct. 3, 8 a.m. EDT)',
          text: 'The [National Hurricane Center](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) says tropical cyclone formation is not expected in the Atlantic, Caribbean or Gulf of America during the next seven days. No Florida tropical threat right now. Hurricane season runs through Nov. 30—keep policy documents and your hurricane deductible handy, and watch the Oct. 7–13 king-tide window for coastal street flooding.',
        },
      ],
      extraSources: [NHC],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 3 de octubre de 2026: suspensión de un asegurador de vida, mareas reales, fin del cargo FIGA y plazo de Citizens',
      metaTitle: 'Noticias de seguros, 3 oct. 2026: vida, mareas, FIGA | M&K Agency',
      description:
        'Hoy: la OIR suspende la licencia de un asegurador de vida, apagones por mareas reales en Miami Beach, el cargo FIGA del 1% deja de aplicar a pólizas del 1 de octubre en adelante, y el lunes vence la elección de takeout de Citizens.',
      intro:
        'Cuatro novedades de los últimos días para propietarios, inquilinos y quien tenga una póliza de Citizens o de vida/anualidad en el sur de la Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'El regulador estatal suspende la autorización de un asegurador de vida y salud para vender pólizas nuevas o renovaciones en Florida',
          summary:
            'El 1 de octubre, la Oficina de Regulación de Seguros de Florida (OIR) emitió una Orden Final Inmediata que suspende el certificado de autoridad de un asegurador de vida y salud tras determinar que la compañía está deteriorada (impaired) y que Carolina del Sur—su regulador domiciliario—abrió un proceso de rehabilitación (receivership). La compañía debe dejar de inmediato de solicitar o aceptar negocios nuevos o renovaciones en Florida; los agentes no deben colocar contratos nuevos con ella. La OIR indica que el asegurador debe seguir atendiendo las pólizas vigentes en Florida y honrar las obligaciones por pérdidas y primas no devengadas mientras existan.',
          why: 'Si tiene una póliza de vida, anualidad o accidente y salud con una compañía de la que no ha sabido últimamente, revise el listado de compañías activas de la OIR y los nombramientos de su agente antes de renovar o comprar más cobertura—y siga pagando las primas de las pólizas en vigor para no crear usted mismo una interrupción.',
          sources: [OIR_LIFE, OIR_LIFE_ORDER],
        },
        {
          headline:
            'Las mareas reales dejan a residentes de condominios en Miami Beach sin electricidad ni ascensores—la próxima ventana empieza el 7 de octubre',
          summary:
            'CBS News Miami informó el 30 de septiembre que residentes de Sunshine Bay Condos y del cercano Lincoln Bay Towers sufrieron apagones de varios días después de que la inundación por king tides llenara garajes y alcanzara sistemas eléctricos, de bombas y ascensores bajo tierra. Florida Power & Light dijo que había equipo de propiedad del cliente que debía repararse antes de restaurar el servicio con seguridad, y que los garajes inundados impedían el acceso. El calendario de Miami-Dade marca la próxima ventana costera del 7 al 13 de octubre, y otra del 24 al 30; el pronóstico de temporada del South Florida Water Management District señala un pico máximo anual previsto alrededor del 27 de octubre en la costa este. El seguro de hogar estándar por lo general no cubre inundación.',
          why: 'Si vive en un edificio bajo o costero, pregunte a la asociación dónde están los equipos eléctricos y de ascensores y cómo están protegidos—y confirme si tiene [seguro de inundación](/es/flood-insurance-homestead-fl) por separado. Las pólizas de viento de Citizens enfrentan un requisito de seguro de inundación a partir del 1 de enero de 2027; vea nuestra [guía de inundación de Citizens](/es/blog/citizens-flood-insurance-requirement-2027).',
          sources: [CBS_KING_TIDES, MIAMI_DADE_TIDES, SFWMD_TIDES],
        },
        {
          headline:
            'Actualización: el cargo de emergencia FIGA del 1% ya no aplica a pólizas con vigencia del 1 de octubre o posterior',
          summary:
            'La evaluación de emergencia del 1% de la Florida Insurance Guaranty Association (FIGA, 2023A), que aparecía como una línea separada en muchas facturas de seguros de propiedad en Florida, dejó de aplicarse a pólizas nuevas y renovaciones con fecha de vigencia del 1 de octubre de 2026 o posterior. FIGA anunció el cierre anticipado en febrero: las pólizas con vigencia hasta el 30 de septiembre de 2026 siguen llevando el cargo durante todo ese término, y FIGA terminará las conciliaciones a inicios de 2028. El cargo financió reclamos cubiertos tras insolvencias de aseguradoras; no es un impuesto sobre la prima y se muestra aparte de la prima.',
          why: 'Cuando llegue su próxima renovación, revise si desapareció la línea FIGA—y recuerde que el total de la renovación aún puede cambiar por razones ordinarias de tarifa. Compare la página de declaraciones con la del año pasado y pídale a un agente licenciado que le explique cualquier diferencia.',
          sources: [FIGA_ASSESSMENTS, FIGA_ASSESSMENTS_PAGE],
        },
        {
          headline:
            'Takeout de Citizens (líneas personales): el plazo para elegir es el lunes 5 de octubre',
          summary:
            'El calendario de despoblación de líneas personales 2026 de Citizens fija el lunes 5 de octubre como fecha límite de elección del asegurado para la ronda de asunción del 20 de octubre. Las cartas de esa ronda salieron el 27 de agosto. Si recibió una oferta y no registra una preferencia a tiempo, Citizens asigna la póliza a una de las compañías de takeout que la seleccionaron—y, si hay más de una, a la oferta con la prima estimada más baja. La preferencia se puede enviar en línea con el número de póliza y el código de registro del formulario de oferta; los agentes registran la elección en PolicyCenter.',
          why: 'Si todavía tiene el paquete de Citizens sobre la mesa, no espere más allá del lunes. Compare las hojas de cobertura, deducibles y primas estimadas antes de elegir—o pídale a su agente que registre la preferencia que usted quiere. Recursos oficiales: [depopulation de Citizens](https://www.citizensfla.com/web/public/depopulation-resources).',
          sources: [CITIZENS_DEPO_CAL, CITIZENS_DEPO],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Los trópicos hoy (sábado 3 de octubre, 8 a.m. hora del Este)',
          text: 'El [Centro Nacional de Huracanes](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) indica que no se espera formación de ciclones tropicales en el Atlántico, el Caribe ni el Golfo de América en los próximos siete días. No hay amenaza tropical para Florida ahora. La temporada de huracanes sigue hasta el 30 de noviembre: tenga a mano sus documentos de póliza y el deducible de huracán, y esté atento a la ventana de mareas reales del 7 al 13 de octubre.',
        },
      ],
      extraSources: [NHC],
    },
    ru: {
      title:
        'Новости страхования во Флориде, 3 октября 2026: приостановка страховщика жизни, king tides, конец сбора FIGA и срок выбора Citizens',
      metaTitle: 'Новости страхования, 3 окт. 2026: жизнь, приливы, FIGA | M&K Agency',
      description:
        'Сегодня: OIR приостановила лицензию страховщика жизни, отключения из‑за king tides в Miami Beach, сбор FIGA 1% больше не действует для полисов с 1 октября, в понедельник — дедлайн выбора takeout Citizens.',
      intro:
        'Четыре новости последних дней для домовладельцев, арендаторов и тех, у кого есть полис Citizens или жизни/аннуитета в Южной Флориде. Каждая — своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Регулятор штата приостановил право страховщика жизни и здоровья продавать новые полисы и продления во Флориде',
          summary:
            '1 октября Управление регулирования страхования Флориды (OIR) вынесло Immediate Final Order о приостановке сертификата полномочий одного страховщика жизни и здоровья: компания признана impaired, а Южная Каролина — домашний регулятор — начала процедуру rehabilitation (receivership). Компания должна немедленно прекратить привлечение и приём нового бизнеса и продлений во Флориде; агенты не должны заключать с ней новые договоры. OIR указывает, что страховщик обязан продолжать обслуживать действующие полисы во Флориде и выполнять обязательства по убыткам и незаработанной премии, пока они существуют.',
          why: 'Если у вас есть полис жизни, аннуитета или accident-and-health у компании, о которой давно не было новостей, перед продлением или покупкой дополнительного покрытия проверьте списки активных компаний OIR и назначения агента — и продолжайте платить премии по действующим полисам, чтобы не создать перерыв сами.',
          sources: [OIR_LIFE, OIR_LIFE_ORDER],
        },
        {
          headline:
            'King tides оставили жителей кондо в Miami Beach без света и лифтов — следующее окно с 7 октября',
          summary:
            'CBS News Miami 30 сентября сообщил, что жители Sunshine Bay Condos и соседнего Lincoln Bay Towers несколько дней оставались без электричества после того, как затопление от king tides заполнило гаражи и затронуло подземные электросистемы, насосы и лифты. Florida Power & Light заявила, что нужно отремонтировать оборудование, принадлежащее клиенту, прежде чем безопасно восстановить подачу, а затопленные гаражи мешали доступу. Календарь Miami-Dade указывает следующее прибрежное окно на 7–13 октября и ещё одно 24–30 октября; сезонный прогноз South Florida Water Management District отмечает годовой максимум примерно 27 октября на восточном побережье. Стандартный полис домовладельца обычно не покрывает наводнение.',
          why: 'Если вы живёте в низинном или прибрежном здании, спросите ассоциацию, где стоят электро- и лифтовое оборудование и как оно защищено — и убедитесь, что у вас есть отдельная страховка от наводнения (запросите котировку на [/ru/quote](/ru/quote)). Ветровые полисы Citizens с 1 января 2027 потребуют flood-страховку; официальная страница: [citizensfla.com/flood](https://www.citizensfla.com/flood).',
          sources: [CBS_KING_TIDES, MIAMI_DADE_TIDES, SFWMD_TIDES],
        },
        {
          headline:
            'Обновление: чрезвычайный сбор FIGA 1% больше не применяется к полисам с датой начала с 1 октября',
          summary:
            'Чрезвычайный сбор 1% Florida Insurance Guaranty Association (FIGA, 2023A), который шёл отдельной строкой во многих счетах по имущественному страхованию во Флориде, больше не применяется к новым полисам и продлениям с датой вступления в силу 1 октября 2026 или позже. FIGA объявила о досрочном завершении в феврале: полисы с датой до 30 сентября 2026 включительно всё ещё несут сбор на весь срок этого полиса, а сверки FIGA продлит до начала 2028. Сбор финансировал покрываемые убытки после банкротств страховщиков; это не налог на премию и показывается отдельно от премии.',
          why: 'Когда придёт следующее продление, посмотрите, исчезла ли строка FIGA — и помните, что общая сумма продления всё равно может измениться по обычным причинам тарифа. Сверьте декларацию с прошлогодней и попросите лицензированного агента разобрать разницу.',
          sources: [FIGA_ASSESSMENTS, FIGA_ASSESSMENTS_PAGE],
        },
        {
          headline:
            'Takeout Citizens (личные линии): срок выбора страхователя — понедельник, 5 октября',
          summary:
            'Календарь депопуляции личных линий Citizens на 2026 год ставит понедельник, 5 октября, крайним сроком выбора страхователя для раунда принятия 20 октября. Письма по этому раунду разосланы 27 августа. Если вы получили предложение и не зарегистрируете предпочтение вовремя, Citizens передаст полис одной из takeout-компаний, которые его выбрали — а при нескольких предложениях — той, у которой ниже оценочная премия. Выбор можно подать онлайн по номеру полиса и коду регистрации с формы предложения; агенты регистрируют выбор в PolicyCenter.',
          why: 'Если пакет Citizens всё ещё лежит на столе, не тяните дольше понедельника. Сравните листы покрытия, франшизы и оценочные премии до выбора — или попросите агента зарегистрировать нужное вам предпочтение. Официальные материалы: [depopulation Citizens](https://www.citizensfla.com/web/public/depopulation-resources).',
          sources: [CITIZENS_DEPO_CAL, CITIZENS_DEPO],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Тропики сегодня (суббота, 3 октября, 8:00 EDT)',
          text: '[Национальный центр ураганов](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) сообщает: образования тропических циклонов в Атлантике, Карибском море и Мексиканском заливе в ближайшие семь дней не ожидается. Угрозы для Флориды сейчас нет. Сезон ураганов до 30 ноября — держите документы полиса и ураганную франшизу под рукой и следите за окном king tides 7–13 октября.',
        },
      ],
      extraSources: [NHC],
    },
  },
};
