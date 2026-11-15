import type { NewsEdition, NewsSource } from '../types';

// Edition for Sunday, Nov. 15, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-15',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 5:42 a.m. EST Sun Nov 15, 2026',
};

const NWS_MFL_SRF: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-15',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=SRF&format=txt&version=1&glossary=0',
  title: 'Surf Zone Forecast, NWS Miami, 3:26 a.m. EST Sun Nov 15, 2026',
};

const OIR_NAIC: NewsSource = {
  name: 'Florida Office of Insurance Regulation (letter posted by the NAIC)',
  date: '2026-11-14',
  url: 'https://content.naic.org/sites/default/files/inline-files/pre-disaster-mitigation-model-act-florida-comment-letter-11142026.pdf',
  title: 'Comment letter: Adoption of the Residential Mitigation Grant Program Model Act',
};

const HCFL_FLOOD: NewsSource = {
  name: 'Hillsborough County',
  date: '2026-11-13',
  url: 'https://hcfl.gov/newsroom/2026/11/13/flood-coverage-becomes-mandatory-for-citizens-property-insurance-customers-in-2027',
  title: 'Flood Coverage Becomes Mandatory for Citizens Property Insurance Customers in 2027',
};

const CITIZENS_FLOOD: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-11-15',
  url: 'https://www.citizensfla.com/flood',
  title: 'Citizens’ Flood Insurance Requirements (checked Nov. 15, 2026)',
};

const FLOODSMART_BUY: NewsSource = {
  name: 'FloodSmart (NFIP)',
  date: '2026-11-15',
  url: 'https://www.floodsmart.gov/get-insured/buy-a-policy',
  title: 'What you need to know about buying flood insurance (checked Nov. 15, 2026)',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-15',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Sun Nov 15, 2026',
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
  date: '2026-11-15',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding',
};

const FLSENATE_ORG: NewsSource = {
  name: 'The Florida Senate',
  date: '2026-11-15',
  url: 'https://www.flsenate.gov/Home/11-17-2026',
  title: 'Calendar for Nov. 17, 2026: Organization Session',
};

const WX = [NWS_MFL_AFD, NWS_MFL_SRF];
const MITIGATION = [OIR_NAIC];
const FLOOD = [CITIZENS_FLOOD, HCFL_FLOOD, FLOODSMART_BUY];
const BOX = [FEMA_REAUTH, FLSENATE_ORG, OIR_NCCI, FDEM_FALL, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-15-heavy-rain-risk-mitigation-grants-citizens-flood',
  datePublished: '2026-11-15',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 15, 2026: heavy rain is now possible on the east coast midweek, Florida’s regulator weighs in on a national home-hardening grant model, and the Citizens flood requirement for all homes is 47 days away',
      metaTitle: 'Insurance News Nov. 15, 2026: Rain Risk, Mitigation, Citizens Flood | M&K',
      description:
        'NWS Miami now sees a chance of heavy east-coast rain Tuesday to Thursday plus high rip current risk, OIR backs a national mitigation-grant model law, and the Citizens flood rule widens Jan. 1.',
      ogAlt:
        'A rain cloud over a city street with a storm drain and rough waves, a house with a hammer and a roof brace beside a document with a seal, and a house raised above water next to a calendar',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Sunday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: NWS Miami now sees a chance of heavy rain on the east coast from Tuesday, after rough seas and a high rip current risk arrive Monday',
          summary:
            'NWS Miami’s Sunday morning forecast discussion says confidence has grown in a **prolonged stretch of dangerous marine and beach conditions**: gusty northeast winds ramp up Monday night and are expected to last through the work week, the rip current risk at Miami-Dade, Broward and Palm Beach beaches turns **high on Monday**, and Atlantic seas build to 5–8 feet Monday and higher by midweek. What is new since Saturday is the rain: forecasters now see a chance of repeated showers and thunderstorms along the east coast metro areas from Tuesday, and the Weather Prediction Center has put parts of the east coast in a **Marginal (level 1 of 4) risk of excessive rainfall Tuesday through Thursday**. Most of the coast is expected to get about 1 to 1.5 inches over seven days, but a reasonable worst case is several inches in isolated spots from Wednesday into Friday, with localized urban flooding possible; forecasters stress that confidence is still low.',
          why: 'Before Tuesday, clear leaves from gutters and the storm drain in front of your house, move cars off low spots that flood in heavy rain, and never drive through a flooded street: water damage to a car is covered only if the policy includes comprehensive coverage, and homeowners policies generally exclude flood. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida), [flood insurance](/en/flood-insurance-homestead-fl) and, for boat owners, our [boat plan checklist](/en/blog/hurricane-plan-for-your-boat-florida).',
          sources: WX,
        },
        {
          headline:
            'New: Florida’s insurance regulator backs a national model law for home-hardening grants, but says the state will keep its own program',
          summary:
            'In a **Nov. 14 letter** to a working group of the National Association of Insurance Commissioners (NAIC), the Florida Office of Insurance Regulation said it strongly supports adopting the **Residential Mitigation Grant Program Model Act**, a template for states that want to set up grant programs that help homeowners strengthen their homes against storms. OIR wrote that Florida will not adopt the model in its current form for now, because the state already runs a mitigation grant program that has developed over decades and, under state law, insurers must recognize wind-mitigation features in the wind portion of the premium. The letter changes nothing for Florida homeowners today; it signals that the state plans to keep its existing approach.',
          why: 'For Florida homes, the tools stay the same: a wind mitigation inspection report that documents your roof, roof-to-wall connections and opening protection, and the My Safe Florida Home program, whose applicant portal is expected back on Dec. 4. Keep a copy of your report and send it to your agent. See our [wind mitigation inspection guide](/en/blog/wind-mitigation-inspection-florida) and [My Safe Florida Home guide](/en/blog/my-safe-florida-home-2026).',
          sources: MITIGATION,
        },
        {
          headline:
            'Reminder: From Jan. 1, 2027, most Citizens homeowners policies with wind coverage will need a flood policy, whatever the flood zone or home value',
          summary:
            'Hillsborough County reminded residents on **Nov. 13** that the last step of the state’s flood requirement for Citizens customers takes effect on **Jan. 1, 2027**. Under section 627.715 of Florida law, Citizens has phased the rule in since 2024 for homes outside high-risk flood zones by dwelling value ($600,000 and up, then $500,000, then $400,000); from Jan. 1 it covers **all new and renewing personal residential policies that include wind coverage**, regardless of value. Condo unit-owner policies, tenant contents policies and policies that exclude wind are not required to carry flood. Citizens asks for proof such as the flood policy declarations page (or the application and proof of payment if the policy is pending) plus a signed flood affirmation form, and the flood limit must at least match the dwelling coverage on the Citizens policy, or the NFIP maximum of $250,000.',
          why: 'If you have Citizens and no flood policy, start now: an NFIP policy generally takes effect 30 days after purchase, so one bought today would start around Dec. 15, and the program’s current authorization runs through Dec. 11. See our [Citizens flood requirement guide](/en/blog/citizens-flood-insurance-requirement-2027), [flood insurance](/en/flood-insurance-homestead-fl) and [request a quote](/en/quote).',
          sources: FLOOD,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program is authorized through **11:59 p.m. Dec. 11, 2026**, 26 days from today; FEMA’s page still shows no newer extension. The Legislature’s Organization Session is Tuesday, Nov. 17 (the Senate convenes at 10 a.m.), the same day Miami-Dade commissioners take their final vote on sidewalk delivery-robot rules. OIR has not yet posted its order on NCCI’s 2027 workers’ compensation rate request. As of Sunday morning we had not seen a federal decision on Florida’s request for a Major Disaster Declaration for the fall flooding. National Hurricane Center, 7 a.m. Sunday: no tropical cyclone formation expected in the next 7 days.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 15 de noviembre de 2026: ahora se esperan posibles lluvias fuertes en la costa este a mitad de semana, el regulador de Florida opina sobre un modelo nacional de subsidios para reforzar viviendas y faltan 47 días para que el requisito de inundación de Citizens alcance a todas las casas',
      metaTitle: 'Noticias 15 nov. 2026: lluvias, mitigación, inundación Citizens | M&K',
      description:
        'El NWS de Miami ve posibles lluvias fuertes en la costa este de martes a jueves y riesgo alto de corrientes de resaca, la OIR apoya una ley modelo de subsidios de mitigación y la regla de Citizens se amplía el 1 de enero.',
      ogAlt:
        'Una nube de lluvia sobre una calle con una alcantarilla y olas agitadas, una casa con un martillo y un refuerzo de techo junto a un documento con sello, y una casa elevada sobre el agua junto a un calendario',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este domingo. Cada noticia está resumida con nuestras propias palabras e incluye el enlace a la fuente original.',
      items: [
        {
          headline:
            'Actualización: el NWS de Miami ya ve posibles lluvias fuertes en la costa este desde el martes, después de que el lunes lleguen mar agitado y riesgo alto de corrientes de resaca',
          summary:
            'La discusión de pronóstico del NWS de Miami de este domingo por la mañana dice que aumentó la confianza en un **periodo prolongado de condiciones peligrosas en el mar y en las playas**: los vientos racheados del noreste se intensifican el lunes por la noche y seguirían toda la semana laboral, el riesgo de corrientes de resaca en las playas de Miami-Dade, Broward y Palm Beach pasa a **alto el lunes** y las olas en el Atlántico suben a 5–8 pies el lunes y más a mitad de semana. La novedad frente al sábado es la lluvia: los meteorólogos ahora ven posibles aguaceros y tormentas repetidos en las zonas metropolitanas de la costa este desde el martes, y el Centro de Predicción Meteorológica (WPC) colocó partes de la costa este en **riesgo marginal (nivel 1 de 4) de lluvia excesiva de martes a jueves**. En la mayor parte de la costa se esperan entre 1 y 1.5 pulgadas en siete días, pero en el peor escenario razonable podrían caer varias pulgadas en puntos aislados entre el miércoles y el viernes, con inundaciones urbanas localizadas; los meteorólogos insisten en que la confianza todavía es baja.',
          why: 'Antes del martes, limpie las canaletas y la alcantarilla frente a su casa, saque el carro de las zonas bajas que se inundan con lluvia fuerte y nunca maneje por una calle inundada: los daños por agua a un vehículo solo están cubiertos si la póliza incluye cobertura amplia (comprehensive), y las pólizas de vivienda por lo general excluyen las inundaciones. Vea [comprehensive vs. collision](/es/blog/comprehensive-vs-collision-florida), [seguro de inundación](/es/flood-insurance-homestead-fl) y, si tiene embarcación, nuestra [lista para proteger su bote](/es/blog/hurricane-plan-for-your-boat-florida).',
          sources: WX,
        },
        {
          headline:
            'Nuevo: el regulador de seguros de Florida apoya una ley modelo nacional de subsidios para reforzar viviendas, pero mantendrá su propio programa',
          summary:
            'En una **carta del 14 de noviembre** a un grupo de trabajo de la Asociación Nacional de Comisionados de Seguros (NAIC), la Oficina de Regulación de Seguros de Florida (OIR) expresó su firme apoyo a la adopción de la **Ley Modelo de Programas de Subsidios de Mitigación Residencial**, una plantilla para los estados que quieran crear programas de ayuda para que los propietarios refuercen sus casas contra tormentas. La OIR explicó que, por ahora, Florida no adoptará el modelo tal como está, porque el estado ya tiene un programa de subsidios de mitigación desarrollado a lo largo de décadas y, por ley estatal, las aseguradoras deben reconocer las mejoras de mitigación contra el viento en la parte de la prima que corresponde al viento. La carta no cambia nada hoy para los propietarios en Florida; indica que el estado mantendrá su enfoque actual.',
          why: 'Para las casas en Florida las herramientas siguen siendo las mismas: el informe de inspección de mitigación de viento, que documenta el techo, las conexiones entre techo y paredes y la protección de ventanas y puertas, y el programa My Safe Florida Home, cuyo portal de solicitantes debería volver el 4 de diciembre. Guarde una copia del informe y envíela a su agente. Vea nuestra [guía de My Safe Florida Home](/es/blog/my-safe-florida-home-2026) y [seguro de vivienda en Florida City](/es/homeowners-insurance-florida-city).',
          sources: MITIGATION,
        },
        {
          headline:
            'Recordatorio: desde el 1 de enero de 2027, la mayoría de las pólizas de vivienda de Citizens con cobertura de viento necesitarán una póliza de inundación, sin importar la zona ni el valor de la casa',
          summary:
            'El condado de Hillsborough recordó el **13 de noviembre** que el último paso del requisito estatal de inundación para los clientes de Citizens entra en vigor el **1 de enero de 2027**. Según la sección 627.715 de la ley de Florida, Citizens lo ha aplicado por etapas desde 2024 a las casas fuera de las zonas de alto riesgo según el valor de la vivienda (desde $600,000, luego $500,000 y luego $400,000); a partir del 1 de enero abarca **todas las pólizas residenciales personales nuevas y renovadas que incluyan cobertura de viento**, sin importar el valor. Las pólizas de unidades de condominio, las de contenido para inquilinos y las que excluyen el viento no están obligadas. Citizens pide como prueba la página de declaraciones de la póliza de inundación (o la solicitud y el comprobante de pago si está en trámite) y un formulario firmado de declaración sobre el seguro de inundación; el límite de inundación debe ser al menos igual a la cobertura de vivienda de la póliza de Citizens, o al máximo del NFIP de $250,000.',
          why: 'Si tiene Citizens y no tiene póliza de inundación, empiece ya: una póliza del NFIP normalmente entra en vigor 30 días después de la compra, así que una contratada hoy empezaría alrededor del 15 de diciembre, y la autorización actual del programa llega hasta el 11 de diciembre. Vea nuestra [guía del requisito de inundación de Citizens](/es/blog/citizens-flood-insurance-requirement-2027), [seguro de inundación](/es/flood-insurance-homestead-fl) y [pida una cotización](/es/quote).',
          sources: FLOOD,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones está autorizado **hasta las 11:59 p.m. del 11 de diciembre de 2026**, dentro de 26 días; la página de FEMA aún no muestra una nueva extensión. La Sesión de Organización de la Legislatura es el martes 17 de noviembre (el Senado se reúne a las 10 a.m.), el mismo día en que la Comisión de Miami-Dade vota de forma definitiva las reglas para los robots de reparto en las aceras. La OIR todavía no ha publicado su orden sobre la solicitud de tarifas de compensación laboral de NCCI para 2027. Hasta el domingo por la mañana no habíamos visto una decisión federal sobre la solicitud de Florida de una Declaración de Desastre Mayor por las inundaciones de otoño. Centro Nacional de Huracanes, 7 a.m. del domingo: no se espera la formación de ciclones tropicales en los próximos 7 días.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 15 ноября 2026 г.: в середине недели на восточном побережье теперь возможны сильные дожди, регулятор Флориды высказался о национальной модели грантов на укрепление домов, а до требования Citizens о страховке от наводнения для всех домов осталось 47 дней',
      metaTitle: 'Новости 15 ноября 2026: дожди, укрепление домов, Citizens | M&K',
      description:
        'NWS Miami допускает сильные дожди на восточном побережье со вторника по четверг и высокий риск разрывных течений, OIR поддержал модельный закон о грантах, а правило Citizens о наводнениях расширяется с 1 января.',
      ogAlt:
        'Дождевая туча над городской улицей с ливнёвкой и бурными волнами, дом с молотком и креплением крыши рядом с документом с печатью, и дом, поднятый над водой, рядом с календарём',
      intro:
        'Три новости для владельцев домов, водителей и малого бизнеса на юге Флориды в это воскресенье. Каждая изложена своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: NWS Miami теперь допускает сильные дожди на восточном побережье со вторника, а уже в понедельник придут шторм на море и высокий риск разрывных течений',
          summary:
            'В воскресном утреннем прогностическом обсуждении NWS Miami говорится, что уверенность в **длительном периоде опасных условий на воде и на пляжах** выросла: порывистый северо-восточный ветер усилится в ночь на вторник и, по прогнозу, продержится всю рабочую неделю, риск разрывных течений на пляжах Майами-Дейд, Броварда и Палм-Бич в **понедельник станет высоким**, а волны в Атлантике вырастут до 5–8 футов (1,5–2,4 м) в понедельник и ещё выше к середине недели. Новое по сравнению с субботой — дожди: синоптики теперь допускают повторяющиеся ливни и грозы в городах восточного побережья начиная со вторника, а Центр прогнозирования погоды (WPC) отнёс часть восточного побережья к **зоне минимального (1 из 4) риска сильных осадков со вторника по четверг**. На большей части побережья за семь дней ожидается около 1–1,5 дюйма (25–38 мм), но при разумно худшем сценарии в отдельных местах со среды по пятницу может выпасть несколько дюймов, с локальными подтоплениями в городах; синоптики подчёркивают, что уверенность в прогнозе пока низкая.',
          why: 'До вторника очистите водостоки и ливнёвку перед домом от листьев, уберите машину с низких мест, которые заливает в сильный дождь, и никогда не въезжайте на затопленную улицу: повреждение машины водой покрывается, только если в полисе есть comprehensive, а страховка дома, как правило, наводнения не покрывает. См. [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida), [страхование от наводнения](/ru/flood-insurance-homestead-fl), а владельцам лодок — наш [чек-лист для лодки](/ru/blog/hurricane-plan-for-your-boat-florida).',
          sources: WX,
        },
        {
          headline:
            'Новое: страховой регулятор Флориды поддержал национальный модельный закон о грантах на укрепление домов, но сохранит собственную программу',
          summary:
            'В **письме от 14 ноября** рабочей группе Национальной ассоциации страховых комиссаров (NAIC) Управление по регулированию страхования Флориды (OIR) заявило, что решительно поддерживает принятие **модельного закона о программах грантов на защиту жилья (Residential Mitigation Grant Program Model Act)** — шаблона для штатов, которые хотят создать программы помощи владельцам в укреплении домов от штормов. OIR пояснило, что пока Флорида не будет принимать модель в нынешнем виде: в штате уже есть программа грантов на укрепление жилья, которая складывалась десятилетиями, а по закону штата страховщики обязаны учитывать защитные элементы дома в части премии за ветер. Для владельцев домов во Флориде письмо сегодня ничего не меняет; оно показывает, что штат сохранит нынешний подход.',
          why: 'Для домов во Флориде инструменты прежние: отчёт об инспекции ветрозащиты (wind mitigation), где описаны крыша, крепления крыши к стенам и защита окон и дверей, и программа My Safe Florida Home, портал которой должен заработать снова 4 декабря. Сохраните копию отчёта и отправьте её своему агенту. См. наш [гид по инспекции ветрозащиты](/ru/blog/wind-mitigation-inspection-florida) и [гид по My Safe Florida Home](/ru/blog/my-safe-florida-home-2026).',
          sources: MITIGATION,
        },
        {
          headline:
            'Напоминание: с 1 января 2027 г. большинству полисов Citizens на дом с покрытием от ветра понадобится страховка от наводнения — независимо от зоны и стоимости дома',
          summary:
            'Округ Хиллсборо **13 ноября** напомнил жителям, что последний этап требования штата о страховке от наводнения для клиентов Citizens вступает в силу **1 января 2027 г.** По разделу 627.715 законов Флориды Citizens с 2024 года поэтапно вводил правило для домов вне зон высокого риска в зависимости от стоимости жилья (от $600 000, затем от $500 000, затем от $400 000); с 1 января оно распространяется на **все новые и продлеваемые личные жилищные полисы с покрытием от ветра**, независимо от стоимости. Полисы на квартиры в кондоминиумах, полисы арендаторов на имущество и полисы без покрытия ветра под требование не попадают. В качестве подтверждения Citizens принимает декларационную страницу полиса от наводнения (или заявление и подтверждение оплаты, если полис ещё оформляется) и подписанную форму-заявление о страховке от наводнения; лимит по наводнению должен быть не ниже покрытия дома в полисе Citizens либо равен максимуму NFIP — $250 000.',
          why: 'Если у вас Citizens, а страховки от наводнения нет, займитесь этим сейчас: полис NFIP обычно вступает в силу через 30 дней после покупки, то есть купленный сегодня начнёт действовать около 15 декабря, а текущие полномочия программы действуют до 11 декабря. См. наш [гид по требованию Citizens о наводнениях](/ru/blog/citizens-flood-insurance-requirement-2027), [страхование от наводнения](/ru/flood-insurance-homestead-fl) и [запросить расчёт](/ru/quote).',
          sources: FLOOD,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Федеральная программа страхования от наводнений действует **до 23:59 11 декабря 2026 г.**, то есть ещё 26 дней; на странице FEMA нового продления пока нет. Организационная сессия Законодательного собрания — во вторник, 17 ноября (Сенат собирается в 10:00); в тот же день комиссия Майами-Дейд окончательно голосует за правила для роботов-доставщиков на тротуарах. Приказа OIR по заявке NCCI о тарифах workers’ comp на 2027 год пока нет. По состоянию на утро воскресенья мы не видели федерального решения по запросу Флориды об объявлении крупного стихийного бедствия из-за осенних наводнений. Национальный центр по ураганам, 7:00 воскресенья: в ближайшие 7 дней образование тропических циклонов не ожидается.',
        },
      ],
      extraSources: BOX,
    },
  },
};
