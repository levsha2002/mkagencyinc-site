import type { NewsEdition, NewsSource } from '../types';

// Edition for Saturday, Nov. 14, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const MSFH_FAQ: NewsSource = {
  name: 'My Safe Florida Home Support Center',
  date: '2026-11-06',
  url: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000390446-msfh-program-modernization-faqs',
  title: 'MSFH Program Modernization FAQs',
};

const WFLX_MSFH: NewsSource = {
  name: 'WFLX / WPTV',
  date: '2026-11-11',
  url: 'https://www.wflx.com/2026/11/11/florida-homeowner-touts-10k-my-safe-florida-home-grant-program-offers-these-tips/',
  title: 'Florida homeowner touts $10K My Safe Florida Home grant program, offers these tips',
};

const MD_ROBOTS: NewsSource = {
  name: 'Miami-Dade County Board of County Commissioners',
  date: '2026-10-29',
  url: 'https://www.miamidade.gov/govaction/matter.asp?file=true&matter=261932&yearFolder=Y2026',
  title: 'File No. 261932: Personal Delivery Devices and Mobile Carriers (agenda Nov. 17, 2026, item 7C)',
};

const FP_ROBOTS: NewsSource = {
  name: 'Florida Politics',
  date: '2026-11-11',
  url: 'https://floridapolitics.com/archives/832186-miami-dade-poised-to-set-speed-limits-require-permits-for-sidewalk-delivery-robots/',
  title: 'Miami-Dade poised to set speed limits, require permits for sidewalk delivery robots',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-14',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 5:52 a.m. EST Sat Nov 14, 2026',
};

const NWS_MFL_SRF: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-14',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=SRF&format=txt&version=1&glossary=0',
  title: 'Surf Zone Forecast, NWS Miami, 3:11 a.m. EST Sat Nov 14, 2026',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-14',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Sat Nov 14, 2026',
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
  date: '2026-11-13',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding',
};

const MSFH = [MSFH_FAQ, WFLX_MSFH];
const ROBOTS = [MD_ROBOTS, FP_ROBOTS];
const WX = [NWS_MFL_AFD, NWS_MFL_SRF];
const BOX = [FEMA_REAUTH, OIR_NCCI, FDEM_FALL, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-14-msfh-portal-delivery-robots-windy-week',
  datePublished: '2026-11-14',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 14, 2026: the My Safe Florida Home portal is closed until Dec. 4, Miami-Dade votes Tuesday on rules for sidewalk delivery robots, and a blustery week is ahead on the water',
      metaTitle: 'Insurance News Nov. 14, 2026: MSFH Portal, Delivery Robots, Winds | M&K',
      description:
        'The My Safe Florida Home applicant portal stays closed until Dec. 4, Miami-Dade takes a final vote on delivery-robot rules with an insurance requirement, and gusty winds return next week.',
      ogAlt:
        'A house with storm shutters beside a laptop showing a calendar, a small wheeled delivery robot on a sidewalk beside a shield, and wind lines with waves and a buoy under a cool sun',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Saturday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'New: The My Safe Florida Home applicant portal is offline for upgrades and is expected back Dec. 4; new grant applications are paused until then',
          summary:
            'The state’s My Safe Florida Home program, which offers hurricane mitigation inspections and grants for qualifying home improvements, says its **applicant portal closed on Nov. 10 and is expected to reopen on Dec. 4, 2026** with a redesigned system. During the closure, new grant applications cannot be accepted. The program says current applicants keep their place and status: inspection companies will keep scheduling approved inspections, and homeowners already approved for a grant may continue their eligible work. Applicants will get an email with instructions for the new portal, and the support center is open weekdays from 8 a.m. to 5 p.m. ET at 850-427-2559; WFLX reported the closure on Nov. 11.',
          why: 'If you planned to apply, use the next three weeks to read the program’s Homeowner’s Guide and gather your documents, and if you already have a wind mitigation report, keep it and share a copy with your insurance agent. See our [My Safe Florida Home guide](/en/blog/my-safe-florida-home-2026) and [homeowners insurance in Florida City](/en/homeowners-insurance-florida-city).',
          sources: MSFH,
        },
        {
          headline:
            'New: Miami-Dade commissioners take a final vote Tuesday on sidewalk delivery-robot rules, including a liability-insurance requirement for operators',
          summary:
            'An ordinance from Commissioner Micky Steinberg is on the County Commission’s **Nov. 17 agenda (item 7C)** for a final vote. It would require operating permits from the county or the city, cap robot speeds at **8 mph on sidewalks, 6 mph in designated high-pedestrian areas and 10 mph in crosswalks**, require a full stop before crosswalks and limit idling on sidewalks to 30 minutes, and bar the robots from school zones during school-zone hours and from blocking curb ramps, transit stops or hydrants. Operators would have to carry **general liability coverage of at least $100,000** (the minimum already set by state law), file a certificate of insurance by Jan. 31 each year and report any crash causing injury or property damage within 24 hours. Operating without a permit or insurance would carry a $500 fine; if adopted, the rules take effect 10 days after passage unless vetoed.',
          why: 'If a delivery robot damages your car or property or injures someone in your family, write down its ID number or scan its QR code, take photos and report it to the operator, which must carry liability coverage. Restaurants and shops that use robot delivery should ask the delivery company for a certificate of insurance; see our [certificate of insurance guide](/en/blog/certificate-of-insurance-contractors-florida) and [business insurance](/en/commercial-insurance-florida-city).',
          sources: ROBOTS,
        },
        {
          headline:
            'Update: A cool, dry weekend, then a blustery work week with gusty northeast winds and possibly dangerous seas and beach conditions',
          summary:
            'NWS Miami’s Saturday morning forecast discussion calls for dry weather and highs up to 10 degrees below normal today, from the mid to upper 60s inland to the low 70s in the metro areas (Homestead about 74), and Sunday morning lows in the upper 40s west of Lake Okeechobee and the upper 50s to low 60s on the east coast. A low forming in the western Gulf is expected to bring **gusty northeast winds** and quick onshore showers along the east coast from Monday, and forecasters say a **prolonged stretch of dangerous marine and beach conditions** could develop for much of the work week on the Atlantic, Gulf and Biscayne Bay waters and at Palm Beach, Broward and Miami-Dade beaches. The low’s track has trended farther south, so the heaviest rain is now expected over the eastern Gulf and the northwestern Bahamas rather than over South Florida; the rip current risk rises from low today to moderate on Sunday.',
          why: 'Boat owners: check lines, covers and anchors before Monday and keep an eye on marine advisories all week; see our [boat insurance page](/en/boat-insurance-florida) and [hurricane plan for your boat](/en/blog/hurricane-plan-for-your-boat-florida), whose checklist also works for a windy week. At home, put away patio furniture and loose items before the wind picks up.',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program is authorized through **11:59 p.m. Dec. 11, 2026**, 27 days from today; FEMA’s page still shows no newer extension. OIR has not yet posted its order on NCCI’s 2027 workers’ compensation rate request (comments closed Nov. 10). As of Saturday morning we had not seen a federal decision on Florida’s request for a Major Disaster Declaration for the fall flooding. The Legislature’s Organization Session is Tuesday, Nov. 17. National Hurricane Center, 7 a.m. Saturday: no tropical cyclone formation expected in the next 7 days.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 14 de noviembre de 2026: el portal de My Safe Florida Home está cerrado hasta el 4 de diciembre, Miami-Dade vota el martes las reglas para los robots de reparto en las aceras y llega una semana de viento en el mar',
      metaTitle: 'Noticias 14 nov. 2026: portal MSFH, robots de reparto, viento | M&K',
      description:
        'El portal de solicitantes de My Safe Florida Home sigue cerrado hasta el 4 de diciembre, Miami-Dade vota las reglas para robots de reparto con requisito de seguro y vuelven las rachas de viento.',
      ogAlt:
        'Una casa con contraventanas junto a una laptop con un calendario, un pequeño robot de reparto con ruedas en una acera junto a un escudo, y líneas de viento con olas y una boya bajo un sol fresco',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este sábado. Cada noticia está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline:
            'Nuevo: el portal de solicitantes de My Safe Florida Home está fuera de servicio por mejoras y volvería el 4 de diciembre; mientras tanto no se aceptan nuevas solicitudes de subvención',
          summary:
            'El programa estatal My Safe Florida Home, que ofrece inspecciones de mitigación contra huracanes y subvenciones para mejoras elegibles en la vivienda, informa que su **portal de solicitantes cerró el 10 de noviembre y se espera que reabra el 4 de diciembre de 2026** con un sistema renovado. Durante el cierre no se pueden recibir nuevas solicitudes de subvención. Según el programa, quienes ya están en trámite conservan su lugar y su estado: las empresas de inspección seguirán agendando las inspecciones aprobadas y los propietarios con subvención aprobada pueden continuar sus obras elegibles. Los solicitantes recibirán un correo con instrucciones para el nuevo portal, y el centro de ayuda atiende de lunes a viernes, de 8 a. m. a 5 p. m. (hora del Este), en el 850-427-2559; WFLX informó sobre el cierre el 11 de noviembre.',
          why: 'Si pensaba solicitar, aproveche estas tres semanas para leer la guía del propietario del programa y reunir sus documentos, y, si ya tiene un informe de mitigación de viento, guárdelo y envíe una copia a su agente de seguros. Vea nuestra [guía de My Safe Florida Home](/es/blog/my-safe-florida-home-2026) y [seguro de vivienda en Florida City](/es/homeowners-insurance-florida-city).',
          sources: MSFH,
        },
        {
          headline:
            'Nuevo: la Comisión de Miami-Dade vota el martes de forma definitiva las reglas para los robots de reparto en las aceras, incluido un seguro de responsabilidad obligatorio',
          summary:
            'Una ordenanza de la comisionada Micky Steinberg figura en la **agenda del 17 de noviembre (punto 7C)** para su votación final. Exigiría permisos del condado o de la ciudad, limitaría la velocidad de los robots a **8 mph en las aceras, 6 mph en zonas designadas de mucho tránsito peatonal y 10 mph en los cruces peatonales**, obligaría a detenerse por completo antes de cada cruce y limitaría a 30 minutos el tiempo detenidos en la acera; además, los robots no podrían circular por zonas escolares en horario escolar ni bloquear rampas, paradas de transporte o hidrantes. Los operadores deberían mantener una **cobertura de responsabilidad general de al menos $100,000** (el mínimo que ya fija la ley estatal), presentar un certificado de seguro antes del 31 de enero de cada año y reportar en 24 horas cualquier incidente con lesiones o daños materiales. Operar sin permiso o sin seguro conllevaría una multa de $500; si se aprueba, la norma entra en vigor 10 días después, salvo veto.',
          why: 'Si un robot de reparto daña su auto o su propiedad o lesiona a alguien de su familia, anote su número de identificación o escanee su código QR, tome fotos y repórtelo al operador, que está obligado a tener seguro de responsabilidad. Los restaurantes y comercios que usan reparto con robots deberían pedir a la empresa un certificado de seguro; vea nuestra [guía sobre certificados de seguro](/es/blog/certificate-of-insurance-contractors-florida) y [seguro para negocios](/es/commercial-insurance-florida-city).',
          sources: ROBOTS,
        },
        {
          headline:
            'Actualización: fin de semana fresco y seco, y luego una semana de rachas del noreste con posible mar peligroso y malas condiciones en las playas',
          summary:
            'La discusión de pronóstico del sábado por la mañana del NWS Miami prevé tiempo seco y máximas hasta 10 grados por debajo de lo normal hoy, entre los 65 y 69 °F en el interior y unos 70 a 72 °F en las zonas metropolitanas (Homestead, unos 74 °F), con mínimas el domingo por la mañana en la parte alta de los 40 °F al oeste del lago Okeechobee y de 57 a 62 °F en la costa este. Una baja que se forma en el oeste del Golfo traería **rachas de viento del noreste** y chubascos rápidos desde el mar en la costa este a partir del lunes, y los meteorólogos advierten que podría haber un **período prolongado de condiciones peligrosas en el mar y en las playas** durante buena parte de la semana, en aguas del Atlántico, del Golfo y de la bahía de Biscayne y en las playas de Palm Beach, Broward y Miami-Dade. La trayectoria de la baja se ha desplazado más al sur, por lo que la lluvia más intensa se espera ahora sobre el este del Golfo y el noroeste de las Bahamas y no sobre el sur de Florida; el riesgo de corrientes de resaca sube de bajo hoy a moderado el domingo.',
          why: 'Dueños de botes: revisen amarres, fundas y anclas antes del lunes y estén atentos a los avisos marinos toda la semana; vea nuestra página de [seguro de botes](/es/boat-insurance-florida) y el [plan de huracanes para su bote](/es/blog/hurricane-plan-for-your-boat-florida), cuya lista también sirve para una semana de viento. En casa, guarde los muebles del patio y los objetos sueltos antes de que arrecie el viento.',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones está autorizado hasta las **11:59 p. m. del 11 de diciembre de 2026**, dentro de 27 días; la página de FEMA aún no muestra una nueva prórroga. La OIR todavía no ha publicado su orden sobre la solicitud de tarifas de compensación laboral de NCCI para 2027 (los comentarios cerraron el 10 de noviembre). Hasta el sábado por la mañana no habíamos visto una decisión federal sobre la solicitud de Florida de una Declaración de Desastre Mayor por las inundaciones de otoño. La Sesión de Organización de la Legislatura es el martes 17 de noviembre. Centro Nacional de Huracanes, 7 a. m. del sábado: no se espera formación de ciclones tropicales en los próximos 7 días.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Новости страхования во Флориде, 14 ноября 2026 г.: портал My Safe Florida Home закрыт до 4 декабря, Майами-Дейд во вторник голосует за правила для роботов-доставщиков на тротуарах, а на воде впереди ветреная неделя',
      metaTitle: 'Новости 14 нояб. 2026: портал MSFH, роботы-доставщики, ветер | M&K',
      description:
        'Портал для заявителей My Safe Florida Home закрыт до 4 декабря, Майами-Дейд окончательно голосует за правила для роботов-доставщиков с требованием страховки, а на следующей неделе вернётся порывистый ветер.',
      ogAlt:
        'Дом со штормовыми ставнями рядом с ноутбуком с календарём, небольшой колёсный робот-доставщик на тротуаре рядом со щитом и линии ветра с волнами и буем под прохладным солнцем',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса на юге Флориды в эту субботу. Каждая изложена своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Новое: портал для заявителей My Safe Florida Home отключён на обновление и должен заработать 4 декабря; до тех пор новые заявки на гранты не принимаются',
          summary:
            'Государственная программа My Safe Florida Home, которая проводит инспекции защиты дома от ураганов и выдаёт гранты на подходящие улучшения, сообщает, что её **портал для заявителей закрылся 10 ноября и, как ожидается, откроется 4 декабря 2026 г.** уже в обновлённом виде. Пока портал закрыт, новые заявки на гранты принять нельзя. По словам программы, текущие участники сохраняют своё место в очереди и статус: инспекционные компании продолжают назначать одобренные инспекции, а владельцы с одобренным грантом могут продолжать разрешённые работы. Заявители получат письмо с инструкциями по новому порталу; служба поддержки работает по будням с 8:00 до 17:00 по восточному времени, телефон 850-427-2559. О закрытии 11 ноября сообщил телеканал WFLX.',
          why: 'Если собирались подавать заявку, используйте эти три недели, чтобы прочитать руководство для домовладельцев и собрать документы, а если у вас уже есть отчёт об инспекции защиты от ветра (wind mitigation), сохраните его и отправьте копию своему страховому агенту. См. наш [гид по My Safe Florida Home](/ru/blog/my-safe-florida-home-2026) и [страхование дома во Флорида-Сити](/ru/homeowners-insurance-florida-city).',
          sources: MSFH,
        },
        {
          headline:
            'Новое: комиссия Майами-Дейд во вторник окончательно голосует за правила для роботов-доставщиков на тротуарах, включая обязательную страховку ответственности',
          summary:
            'Постановление комиссара Мики Стайнберг стоит в **повестке заседания 17 ноября (пункт 7C)** на окончательное голосование. Оно вводит разрешения от округа или города, ограничивает скорость роботов **8 миль/ч (около 13 км/ч) на тротуарах, 6 миль/ч в зонах с интенсивным пешеходным движением и 10 миль/ч на пешеходных переходах**, требует полной остановки перед переходом и ограничивает стоянку на тротуаре 30 минутами; кроме того, роботам нельзя ездить в школьных зонах в часы их действия и загораживать пандусы, остановки транспорта и пожарные гидранты. Операторы обязаны иметь **страховку общей ответственности не менее $100 000** (этот минимум уже установлен законом штата), ежегодно до 31 января подавать сертификат страхования и в течение 24 часов сообщать о любом происшествии с травмами или повреждением имущества. За работу без разрешения или без страховки — штраф $500; в случае принятия правила вступят в силу через 10 дней, если мэр не наложит вето.',
          why: 'Если робот-доставщик повредил вашу машину или имущество или травмировал кого-то из близких, запишите его идентификационный номер или отсканируйте QR-код, сделайте фото и сообщите оператору: у него обязана быть страховка ответственности. Ресторанам и магазинам, которые пользуются доставкой роботами, стоит запросить у компании сертификат страхования; см. наш [гид по сертификатам страхования](/ru/blog/certificate-of-insurance-contractors-florida) и [страхование бизнеса](/ru/commercial-insurance-florida-city).',
          sources: ROBOTS,
        },
        {
          headline:
            'Обновление: прохладные и сухие выходные, затем ветреная рабочая неделя с порывистым северо-восточным ветром и, возможно, опасным морем и пляжами',
          summary:
            'Утреннее прогностическое обсуждение NWS Miami в субботу обещает сухую погоду и дневные температуры до 10 градусов ниже нормы: от 65–69 °F (18–21 °C) во внутренних районах до 70–72 °F (около 21–22 °C) в городах (в Хомстеде около 74 °F, 23 °C); в воскресенье утром к западу от озера Окичоби около 47–49 °F (8–9 °C), на восточном побережье 57–62 °F (14–17 °C). Область низкого давления, формирующаяся на западе Мексиканского залива, с понедельника принесёт **порывистый северо-восточный ветер** и короткие ливни с моря на восточном побережье, а синоптики предупреждают, что большую часть недели может держаться **длительный период опасных условий на воде и на пляжах** — в Атлантике, заливе и бухте Бискейн и на пляжах Палм-Бич, Броварда и Майами-Дейд. Траектория циклона сместилась южнее, поэтому самые сильные дожди теперь ожидаются над восточной частью залива и северо-западом Багамских островов, а не над югом Флориды; риск разрывных течений растёт с низкого сегодня до умеренного в воскресенье.',
          why: 'Владельцам лодок: проверьте швартовы, чехлы и якоря до понедельника и следите за морскими предупреждениями всю неделю; см. [страхование лодки](/ru/boat-insurance-florida) и [план на случай урагана для вашей лодки](/ru/blog/hurricane-plan-for-your-boat-florida) — его чек-лист пригодится и в ветреную неделю. Дома уберите садовую мебель и незакреплённые предметы, пока ветер не усилился.',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Федеральная программа страхования от наводнений действует **до 23:59 11 декабря 2026 г.**, то есть ещё 27 дней; на странице FEMA нового продления пока нет. Приказа OIR по заявке NCCI о тарифах workers’ comp на 2027 год пока нет (приём комментариев завершился 10 ноября). По состоянию на утро субботы мы не видели федерального решения по запросу Флориды об объявлении крупного стихийного бедствия из-за осенних наводнений. Организационная сессия Законодательного собрания — во вторник, 17 ноября. Национальный центр по ураганам, 7:00 субботы: в ближайшие 7 дней образование тропических циклонов не ожидается.',
        },
      ],
      extraSources: BOX,
    },
  },
};
