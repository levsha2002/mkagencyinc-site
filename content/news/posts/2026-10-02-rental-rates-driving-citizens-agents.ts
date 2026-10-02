import type { NewsEdition, NewsSource } from '../types';

// Edition for Friday, Oct. 2, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const OIR_RENTAL: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-02',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/02/commissioner-mike-yaworsky-approves-an-average--12.8--rate-decrease-for-more-than-120-000-rental-insurance-policies--effective-this-month',
  title:
    'Commissioner Mike Yaworsky Approves an Average -12.8% Rate Decrease for More Than 120,000 Rental Insurance Policies, Effective this Month',
};

const OCALA_DRIVING: NewsSource = {
  name: 'USA TODAY Network – Florida (via Ocala Star-Banner)',
  date: '2026-10-01',
  url: 'https://www.ocala.com/story/news/state/2026/10/01/new-florida-laws-drivers-october/92035355007/',
  title: 'Driving in Florida? New laws you need to know starting Oct. 1',
};

const FS_316_065: NewsSource = {
  name: 'Florida Statutes § 316.065 (2026)',
  date: '2026-10-01',
  url: 'https://www.flsenate.gov/Laws/Statutes/2026/0316.065',
  title: '316.065 Crashes; reports; penalties',
};

const SB488: NewsSource = {
  name: 'The Florida Senate: SB 488 (Chapter 2026-39)',
  date: '2026-04-22',
  url: 'https://www.flsenate.gov/Session/Bill/2026/488',
  title: 'Senate Bill 488 (2026): Transportation',
};

const IJ_CITIZENS_AGENTS: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-09-30',
  url: 'https://www.insurancejournal.com/news/southeast/2026/09/30/887275.htm',
  title: 'Florida Agents Appointed With Citizens Drops as Carrier Competition Grows',
};

const OIR_CEASE: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-09-28',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/09/28/insurance-commissioner-mike-yaworsky-orders-immediate-cease-and-desist-against-company-for-unlicensed-activity',
  title:
    'Insurance Commissioner Mike Yaworsky Orders Immediate Cease and Desist Against Company for Unlicensed Activity',
};

const MIAMI_DADE_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};


const NHC: NewsSource = {
  name: 'National Hurricane Center: Atlantic Tropical Weather Outlook',
  date: '2026-10-02',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8:00 AM EDT Fri Oct 2 2026',
};

export const edition: NewsEdition = {
  slug: '2026-10-02-rental-rates-driving-citizens-agents',
  datePublished: '2026-10-02',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 2, 2026: renter rates, driving rules now live, Citizens agents and an unlicensed-insurer order',
      metaTitle: 'Insurance News Oct. 2, 2026: Renters, Drivers, Citizens | M&K Agency',
      description:
        'Today: a statewide renter’s-insurance rate decrease, Oct. 1 driving rules now in effect, fewer Citizens-appointed agents, and a cease-and-desist for unlicensed sales.',
      intro:
        'Four updates from the last few days for South Florida renters, drivers, homeowners and small-business owners. Each one is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'State regulator approves an average 12.8% rate decrease for more than 120,000 renter’s policies',
          summary:
            'On Oct. 2, Florida Insurance Commissioner Mike Yaworsky announced that his office approved an average 12.8% rate decrease for HO-4 (renter’s) policies written by one insurer, covering about 121,898 exposures. The change takes effect Oct. 11 for new policies and renewals. OIR said policyholders in more than 30 Florida counties will see average changes between about 13.1% and 13.9% lower, with Broward among the counties where the insurer has a large book of business. An HO-4 policy covers a tenant’s personal belongings and liability; it does not insure the building itself.',
          why: 'If you rent in South Florida and carry renter’s insurance, check your renewal notice against last year’s declarations page—approved filings apply only to that insurer’s book, and your own change still depends on your coverage and location. Ask a licensed agent to walk you through any difference.',
          sources: [OIR_RENTAL],
        },
        {
          headline:
            'Update: Florida’s Oct. 1 driving rules are now in effect—crash reporting, plate frames and REAL ID for registration',
          summary:
            'As of Oct. 1, Florida drivers must immediately notify police of a crash that causes injury or death, or apparent property damage of at least $2,000—the old $500 threshold no longer applies (Florida Statutes § 316.065, as amended by SB 488). The same law clarifies that decorative license-plate frames are allowed if they do not obscure the plate number or the registration sticker in the upper-right corner. New for vehicle registration: you generally need a REAL ID-compliant Florida driver license or ID (or an accepted passport alternative) and a Florida residential or permanent business address to register a motor vehicle. FLHSMV may also send more notices by email.',
          why: 'Even when a fender-bender no longer requires a police call, take photos, exchange information and notify your auto insurer as your policy requires. Before you register a vehicle, confirm your license is REAL ID–compliant (star on the card) so the counter trip isn’t wasted.',
          sources: [OCALA_DRIVING, FS_316_065, SB488],
        },
        {
          headline:
            'Fewer Florida agents stay appointed with Citizens as private-market competition grows',
          summary:
            'Insurance Journal reported on Sept. 30 that the number of agencies appointed with Citizens Property Insurance fell to 5,481 in July, down 215 in seven months, and appointed agents dropped about 3% from a December 2025 peak to 13,403. Citizens data cited in the story show 79% of appointed agencies now handle fewer than 50 Citizens policies each, and only 11 agencies handle more than 2,000. Citizens’ overall policy count is under 260,000 this month, down from about 1.4 million in 2023, as private carriers take more business.',
          why: 'If you still have a Citizens policy, treat every renewal or takeout offer as a chance to compare coverage, deductibles and the hurricane deductible side by side—not as a rubber stamp. More private options in the market does not mean every quote is a better fit for your home.',
          sources: [IJ_CITIZENS_AGENTS],
        },
        {
          headline:
            'OIR orders an unlicensed Destin-area marine insurer to stop selling coverage',
          summary:
            'On Sept. 28, Commissioner Yaworsky announced an immediate cease-and-desist against Hydrogen Deep, LLC, doing business as The Wave Insurance, after a market-conduct exam found it operated without the required Florida license. Regulators say the respondents solicited watersports and marine-livery businesses in the Destin area, issued binders and certificates, collected more than $100,000 in premiums, and failed to pay claims; related criminal cases are pending in Okaloosa County. OIR urges anyone who bought coverage from an unlicensed entity to move to a properly licensed insurer and to verify licenses before buying.',
          why: 'Before you pay a premium—especially for boat, jet-ski or small commercial marine coverage—search the insurer on OIR’s active-company database and confirm your agent’s appointments. Unlicensed “coverage” can leave you with no claims payment when you need it.',
          sources: [OIR_CEASE],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'King tides ahead: Oct. 7–13 window',
          text: 'Miami-Dade’s published king-tide calendar lists the next coastal window for Oct. 7–13 (among the season’s higher predicted tides), with another Oct. 24–30. Sunny-day street flooding is possible in low-lying areas even without rain. Standard homeowners policies generally do not cover flood; check [Citizens’ flood page](https://www.citizensfla.com/flood) if you have a Citizens wind policy heading into the Jan. 1, 2027 flood-insurance requirement. Move cars off flooded streets when you can, and wash salt water off afterward.',
        },
        {
          type: 'callout',
          title: 'Tropics check (Friday, Oct. 2, 8 a.m. EDT)',
          text: 'The [National Hurricane Center](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) is watching only the remnants of former Tropical Storm Fay, several hundred miles south-southeast of Bermuda. Dry air and strong upper-level winds make significant redevelopment unlikely; formation chances are low (10%) through seven days and should end by Sunday. No Florida threat right now. Hurricane season runs through Nov. 30—keep your policy documents and hurricane deductible handy.',
        },
      ],
      extraSources: [MIAMI_DADE_TIDES, NHC],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 2 de octubre de 2026: tarifas para inquilinos, reglas de tránsito vigentes, agentes de Citizens y una orden contra un asegurador sin licencia',
      metaTitle: 'Noticias de seguros, 2 oct. 2026: inquilinos y tránsito | M&K Agency',
      description:
        'Hoy: rebaja de tarifas en seguros de inquilinos, reglas de tránsito del 1 de octubre ya vigentes, menos agentes con Citizens y una orden de cese contra ventas sin licencia.',
      intro:
        'Cuatro novedades de los últimos días para inquilinos, conductores, propietarios y dueños de pequeños negocios del sur de la Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'El regulador estatal aprueba una rebaja promedio del 12.8% para más de 120,000 pólizas de inquilinos',
          summary:
            'El 2 de octubre, el comisionado de Seguros de Florida, Mike Yaworsky, anunció que su oficina aprobó una rebaja promedio del 12.8% en tarifas de pólizas HO-4 (seguro de inquilinos) de una aseguradora, que alcanza unas 121,898 exposiciones. El cambio entra en vigor el 11 de octubre para pólizas nuevas y renovaciones. La OIR indicó que en más de 30 condados de Florida el cambio promedio estará entre cerca de 13.1% y 13.9% a la baja, y que Broward es uno de los condados con mayor volumen de esa aseguradora. Una póliza HO-4 cubre pertenencias personales y responsabilidad civil del inquilino; no asegura el edificio.',
          why: 'Si alquila en el sur de la Florida y tiene seguro de inquilinos, compare el aviso de renovación con la página de declaraciones del año pasado: lo aprobado solo aplica a esa aseguradora, y su cambio concreto depende de su cobertura y ubicación. Pídale a un agente licenciado que le explique cualquier diferencia.',
          sources: [OIR_RENTAL],
        },
        {
          headline:
            'Actualización: las reglas de tránsito del 1 de octubre ya están vigentes—reporte de choques, marcos de placa y REAL ID para registrar el vehículo',
          summary:
            'Desde el 1 de octubre, los conductores en Florida deben avisar de inmediato a la policía si un choque causa heridos o muertos, o daños materiales aparentes de al menos $2,000; el umbral anterior de $500 ya no aplica (Estatutos de Florida § 316.065, reformado por la SB 488). La misma ley aclara que los marcos decorativos de placa están permitidos si no ocultan el número ni la calcomanía de registro en la esquina superior derecha. Novedad para el registro de vehículos: por lo general necesita una licencia o identificación de Florida compatible con REAL ID (o una alternativa de pasaporte aceptada) y una dirección residencial o de negocio permanente en Florida. Además, FLHSMV puede enviar más avisos por correo electrónico.',
          why: 'Aunque un choque menor ya no exija llamar a la policía, tome fotos, intercambie datos y avise a su aseguradora de auto como lo pide su póliza. Antes de registrar un vehículo, confirme que su licencia sea REAL ID (estrella en la tarjeta) para no perder el viaje.',
          sources: [OCALA_DRIVING, FS_316_065, SB488],
        },
        {
          headline:
            'Bajan las agencias de Florida nombradas con Citizens a medida que crece la competencia privada',
          summary:
            'Insurance Journal informó el 30 de septiembre que el número de agencias nombradas con Citizens Property Insurance bajó a 5,481 en julio—215 menos en siete meses—y que los agentes nombrados cayeron cerca de un 3% desde el pico de diciembre de 2025, hasta 13,403. Según los datos de Citizens citados en el reportaje, el 79% de las agencias nombradas maneja hoy menos de 50 pólizas de Citizens, y solo 11 agencias manejan más de 2,000. El total de pólizas de Citizens está por debajo de 260,000 este mes, frente a unos 1.4 millones en 2023, a medida que el mercado privado absorbe más riesgo.',
          why: 'Si todavía tiene una póliza de Citizens, trate cada renovación u oferta de traspaso (takeout) como una oportunidad para comparar coberturas, deducibles y el deducible de huracán—no como un trámite automático. Más opciones privadas no significa que cada cotización le convenga a su casa.',
          sources: [IJ_CITIZENS_AGENTS],
        },
        {
          headline:
            'La OIR ordena a un asegurador marino sin licencia del área de Destin que deje de vender cobertura',
          summary:
            'El 28 de septiembre, el comisionado Yaworsky anunció una orden inmediata de cese y desistimiento contra Hydrogen Deep, LLC, que opera como The Wave Insurance, tras un examen de conducta de mercado que halló que operaba sin la licencia requerida en Florida. Según los reguladores, los involucrados solicitaron negocios de deportes acuáticos y lanchas en el área de Destin, emitieron binders y certificados, cobraron más de $100,000 en primas y no pagaron reclamos; hay causas penales pendientes en el condado de Okaloosa. La OIR pide a quien haya comprado cobertura a una entidad sin licencia que pase a un asegurador debidamente autorizado y que verifique licencias antes de comprar.',
          why: 'Antes de pagar una prima—sobre todo para bote, moto acuática o cobertura marina comercial pequeña—busque al asegurador en la base de compañías activas de la OIR y confirme los nombramientos de su agente. Una “cobertura” sin licencia puede dejarlo sin pago de reclamo cuando lo necesite.',
          sources: [OIR_CEASE],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Mareas reales próximas: ventana del 7 al 13 de octubre',
          text: 'El calendario de mareas reales (king tides) publicado por Miami-Dade marca la próxima ventana costera del 7 al 13 de octubre (entre las mareas más altas previstas de la temporada), y otra del 24 al 30 de octubre. Puede haber inundación urbana con cielo despejado en zonas bajas. El seguro de hogar estándar por lo general no cubre inundación; revise la [página de inundación de Citizens](https://www.citizensfla.com/flood) si tiene una póliza de viento de Citizens de cara al requisito de seguro de inundación del 1 de enero de 2027. Saque el auto de calles inundadas cuando pueda y enjuáguelo con agua dulce después.',
        },
        {
          type: 'callout',
          title: 'Los trópicos hoy (viernes 2 de octubre, 8 a.m. hora del Este)',
          text: 'El [Centro Nacional de Huracanes](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) solo sigue los restos de la antigua tormenta tropical Fay, a varios cientos de millas al sur-sureste de Bermudas. El aire seco y los fuertes vientos en altura hacen poco probable un redesarrollo significativo; la probabilidad de formación es baja (10%) a siete días y debería terminar el domingo. No hay amenaza para Florida ahora. La temporada de huracanes sigue hasta el 30 de noviembre: tenga a mano sus documentos de póliza y conozca su deducible de huracán.',
        },
      ],
      extraSources: [MIAMI_DADE_TIDES, NHC],
    },
    ru: {
      title:
        'Новости страхования во Флориде, 2 октября 2026: тарифы для арендаторов, правила для водителей, агенты Citizens и запрет незарегистрированному страховщику',
      metaTitle: 'Новости страхования, 2 окт. 2026: аренда и водители | M&K Agency',
      description:
        'Сегодня: снижение тарифов по страховке арендаторов, правила вождения с 1 октября уже в силе, меньше агентов у Citizens и приказ о прекращении продаж без лицензии.',
      intro:
        'Четыре новости последних дней для арендаторов, водителей, домовладельцев и малого бизнеса Южной Флориды. Каждая — своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Регулятор штата одобрил среднее снижение тарифа на 12,8% более чем для 120 000 полисов арендаторов',
          summary:
            '2 октября комиссар по страхованию Флориды Майк Яворски объявил, что его ведомство одобрило среднее снижение тарифа на 12,8% по полисам HO-4 (страховка арендатора) у одной страховой компании — около 121 898 единиц риска. Изменение действует с 11 октября для новых полисов и продлений. OIR сообщила, что в более чем 30 округах Флориды среднее изменение составит примерно от −13,1% до −13,9%, а округ Broward — среди тех, где у этой компании большой портфель. Полис HO-4 защищает личные вещи и ответственность арендатора; здание им не страхуется.',
          why: 'Если вы снимаете жильё в Южной Флориде и у вас есть страховка арендатора, сверьте уведомление о продлении с декларацией прошлого года: одобренный тариф касается только портфеля этой компании, а ваше изменение зависит от покрытия и адреса. Попросите лицензированного агента разобрать разницу.',
          sources: [OIR_RENTAL],
        },
        {
          headline:
            'Обновление: правила вождения с 1 октября уже действуют — отчёт о ДТП, рамки номеров и REAL ID для регистрации авто',
          summary:
            'С 1 октября водители во Флориде обязаны немедленно сообщить в полицию о ДТП с травмами или гибелью либо с видимым ущербом имуществу не менее $2 000 — прежний порог $500 больше не применяется (§ 316.065 уставов Флориды в редакции SB 488). Тот же закон уточняет: декоративные рамки номера разрешены, если не закрывают сам номер и регистрационную наклейку в правом верхнем углу. Новое для регистрации авто: как правило, нужна лицензия или ID Флориды с REAL ID (или принятый паспортный вариант) и адрес проживания или постоянного бизнеса во Флориде. FLHSMV также может чаще слать уведомления по электронной почте.',
          why: 'Даже если мелкое ДТП уже не требует вызова полиции, сделайте фото, обменяйтесь данными и сообщите автостраховщику, как требует полис. Перед регистрацией машины убедитесь, что у вас REAL ID (звезда на карте), чтобы не ехать зря.',
          sources: [OCALA_DRIVING, FS_316_065, SB488],
        },
        {
          headline:
            'Во Флориде меньше агентов с назначением в Citizens на фоне роста частного рынка',
          summary:
            'Insurance Journal 30 сентября сообщил, что число агентств с назначением в Citizens Property Insurance снизилось до 5 481 в июле — на 215 за семь месяцев, а число назначенных агентов упало примерно на 3% с пика декабря 2025 до 13 403. По данным Citizens в материале, у 79% назначенных агентств сейчас меньше 50 полисов Citizens, и только 11 агентств ведут больше 2 000. Общий портфель Citizens в этом месяце — менее 260 000 полисов против около 1,4 млн в 2023 году, так как частные компании забирают больше рисков.',
          why: 'Если у вас ещё полис Citizens, каждое продление или предложение takeout — повод сравнить покрытия, франшизы и ураганную франшизу рядом, а не формальность. Больше частных вариантов не значит, что каждая котировка подходит именно вашему дому.',
          sources: [IJ_CITIZENS_AGENTS],
        },
        {
          headline:
            'OIR приказала незарегистрированному морскому страховщику из района Destin прекратить продажи',
          summary:
            '28 сентября комиссар Яворски объявил немедленный cease-and-desist в отношении Hydrogen Deep, LLC (торговля как The Wave Insurance) после проверки рыночного поведения: компания работала без необходимой лицензии Флориды. По данным регуляторов, фигуранты предлагали страхование водного спорта и морского проката в районе Destin, выдавали binders и сертификаты, собрали более $100 000 премий и не оплачивали убытки; в округе Okaloosa идут уголовные дела. OIR советует тем, кто купил покрытие у незарегистрированной структуры, перейти к лицензированному страховщику и проверять лицензии до покупки.',
          why: 'Перед оплатой премии — особенно за лодку, гидроцикл или мелкое коммерческое морское покрытие — проверьте страховщика в базе активных компаний OIR и назначения вашего агента. «Покрытие» без лицензии может оставить вас без выплаты по убытку.',
          sources: [OIR_CEASE],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Впереди king tides: окно 7–13 октября',
          text: 'Календарь высоких приливов Miami-Dade указывает следующее прибрежное окно на 7–13 октября (среди более высоких прогнозируемых приливов сезона) и ещё одно 24–30 октября. В низинах возможно затопление улиц даже без дождя. Стандартный полис домовладельца обычно не покрывает наводнение; смотрите [страницу Citizens о flood](https://www.citizensfla.com/flood), если у вас есть ветровой полис Citizens к требованию страховки от наводнения с 1 января 2027. Убирайте машину с затопленных улиц и после проезда по солёной воде промойте её пресной.',
        },
        {
          type: 'callout',
          title: 'Тропики сегодня (пятница, 2 октября, 8:00 EDT)',
          text: '[Национальный центр ураганов](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) следит только за остатками бывшего тропического шторма Fay в нескольких сотнях миль к югу-юго-востоку от Бермуд. Сухой воздух и сильный верхний ветер делают существенное повторное развитие маловероятным; шанс образования низкий (10%) на семь дней и должен исчезнуть к воскресенью. Угрозы для Флориды сейчас нет. Сезон ураганов до 30 ноября — держите документы полиса и ураганную франшизу под рукой.',
        },
      ],
      extraSources: [MIAMI_DADE_TIDES, NHC],
    },
  },
};
