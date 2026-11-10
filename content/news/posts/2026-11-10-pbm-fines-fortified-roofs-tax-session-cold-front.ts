import type { NewsEdition, NewsSource } from '../types';

// Edition for Tuesday, Nov. 10, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const OIR_PBM: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-11-09',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/11/09/insurance-commissioner-mike-yaworsky-penalizes-pharmacy-benefit-managers-over--12.66-million-for-contract-violations',
  title: 'Insurance Commissioner Mike Yaworsky Penalizes Pharmacy Benefit Managers Over $12.66 Million for Contract Violations',
};

const OIR_PBM_EXAMS: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-11-09',
  url: 'https://floir.gov/life-health/pbm-exams',
  title: 'Pharmacy Benefit Manager Examinations',
};

const IJ_FORTIFIED: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-11-09',
  url: 'https://www.insurancejournal.com/news/southeast/2026/11/09/891911.htm',
  title: 'Manufacturers Hammer IBHS Over 15-Year Roof Age Limit for Fortified Designation',
};

const IBHS_TB: NewsSource = {
  name: 'IBHS FORTIFIED Home',
  date: '2026-09-29',
  url: 'https://fortifiedhome.org/wp-content/uploads/FH-2026-03-Redesignation-Eligibility-1.pdf',
  title: 'Technical Bulletin FH 2026-03: New Re-designation Eligibility Requirements for Homes with Asphalt Shingle Roof Systems',
};

const STAT_627_7011: NewsSource = {
  name: 'Florida Statutes (Florida Senate)',
  date: '2026-07-01',
  url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.7011',
  title: 's. 627.7011, F.S. — Homeowners’ policies (roof age, subsection 5)',
};

const WBBH_A3: NewsSource = {
  name: 'WBBH (Gulf Coast News)',
  date: '2026-11-09',
  url: 'https://www.gulfcoastnewsnow.com/article/amendment-3-property-tax-desantis-donalds-florida/74379842',
  title: 'Florida lawmakers split on when to implement Amendment 3, aimed at lowering property taxes',
};

const TD_A3: NewsSource = {
  name: 'Tallahassee Democrat',
  date: '2026-11-05',
  url: 'https://www.tallahassee.com/story/news/breaking/2026/11/04/amendment-3-will-bring-legislature-into-special-session-on-property-tax/92610607007/',
  title: 'DeSantis to call special session to implement property tax overhaul',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-10',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 6:20 a.m. EST Tue Nov 10, 2026',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-10',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Tue Nov 10, 2026',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-27',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'NCCI 2026 Public Rate Hearing — record open for comment until Nov. 10, 2026, 5 p.m. ET',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const PBM = [OIR_PBM, OIR_PBM_EXAMS];
const ROOF = [IJ_FORTIFIED, IBHS_TB, STAT_627_7011];
const TAX = [WBBH_A3, TD_A3];
const WX = [NWS_MFL_AFD];
const BOX = [OIR_NCCI, FEMA_REAUTH, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-10-pbm-fines-fortified-roofs-tax-session-cold-front',
  datePublished: '2026-11-10',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 10, 2026: $12.66 million in pharmacy benefit manager fines, a 15-year limit for FORTIFIED shingle roofs, no date yet for the property-tax session, and a strong cold front Thursday night',
      metaTitle: 'Insurance News Nov. 10, 2026: PBM Fines, FORTIFIED Roofs, Cold Front | M&K',
      description:
        'OIR fines pharmacy benefit managers $12.66 million, FORTIFIED limits shingle-roof re-designation to 15 years, the Amendment 3 session has no date, and a cold front nears.',
      ogAlt:
        'A prescription bottle and pills beside a document with a gavel, a house with a shingle roof and a shield badge, a columned government building with a calendar, and a cold front arrow with a rain cloud over palm trees',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners this Tuesday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'New: Florida regulators fine pharmacy benefit managers a combined $12.66 million after contract exams',
          summary:
            'The Office of Insurance Regulation announced on Nov. 9 that it has issued more than **$12.66 million** in penalties against pharmacy benefit managers (PBMs), the middlemen that run prescription drug benefits for health plans. Its exams found contract violations tied to fair pricing models, network adequacy and fair access, payments to pharmacies, and one-sided changes to pharmacy contracts. OIR’s exam page lists **16 PBMs** reviewed since 2025: 13 were fined and 3 had no exceptions; the law sets a **$5,000 fine per violation**, and fines go to the state’s General Revenue Fund. OIR says several PBMs are pushing back on the findings or penalties, including in court, and some exams are delayed because PBMs are not cooperating.',
          why: 'If your business offers a health plan, ask your benefits administrator which PBM runs the drug benefit and whether its exam is final. The fines go to the state, not back to plan members. Questions about a pharmacy claim can go to the state consumer helpline, 1-877-693-5236.',
          sources: PBM,
        },
        {
          headline:
            'New: FORTIFIED will stop re-designating shingle roofs after 15 years starting Jan. 1, and roofing makers push back',
          summary:
            'Under an IBHS technical bulletin first released Sept. 29, a FORTIFIED Roof, Silver or Gold home with asphalt shingles can’t be re-designated with an expiration date more than **15 years** after its first FORTIFIED designation (or after a documented roof installation date, for existing-roof designations). The rule applies to applications submitted **on or after Jan. 1, 2027**; it doesn’t shorten terms issued before then, and replacing the shingle areas to current FORTIFIED standards may start a new eligibility period. Insurance Journal reported Nov. 9 that the Asphalt Roofing Manufacturers Association is challenging the study behind the rule and urging insurers not to use it for broader underwriting limits. IBHS says the bulletin doesn’t set shingle service life or decide whether a roof must be replaced.',
          why: 'FORTIFIED is a voluntary program, and it is separate from Florida law. Under s. 627.7011(5), an insurer can’t refuse to issue or renew a homeowners policy just because the roof is under 15 years old. For an older roof, an authorized inspection showing at least 5 years of useful life left blocks a refusal based on age alone. If your home is FORTIFIED, check your designation’s expiration date. See our [15-year roof rule guide](/en/blog/roof-age-home-insurance-florida) and [My Safe Florida Home guide](/en/blog/my-safe-florida-home-2026).',
          sources: ROOF,
        },
        {
          headline:
            'Update: Still no date for the Amendment 3 special session, and some lawmakers may want to wait for the new governor',
          summary:
            'Gov. Ron DeSantis said on Nov. 4 that he will call a special session to put Amendment 3 into law and that it has to be implemented by Jan. 1. He left the dates to legislative leaders. WBBH reported on Nov. 9 that, according to multiple Republican sources and Democratic state Rep. Anna Eskamani, some lawmakers would rather wait until Governor-elect Byron Donalds takes office. The governor’s office hadn’t said when the session would be called. The amendment raises the non-school homestead exemption from $50,000 to **$150,000 in 2027** and **$250,000 in 2028**, and it lowers the annual assessment cap on non-homestead property, including businesses, rentals and second homes, from **10% to 5%**.',
          why: 'Nothing changes in your insurance policy because of this. If your escrow payment is recalculated next year, the property-tax part may change, but your dwelling coverage should still match what it would cost to rebuild the home. See our [homeowners insurance page](/en/homeowners-insurance-florida-city).',
          sources: TAX,
        },
        {
          headline:
            'Update: The strong cold front now looks faster, Thursday night into Friday morning, with 50s by the weekend',
          summary:
            'NWS Miami’s 6:20 a.m. Area Forecast Discussion says recent model runs favor a faster cold front, crossing South Florida **late Thursday night into early Friday morning**. Scattered showers and isolated storms are possible ahead of it, and Thursday may turn breezy and gusty from the southwest. Before that, Wednesday afternoon could bring a few thunderstorms, and an isolated strong one with gusty winds and heavy downpours can’t be ruled out, mainly near Lake Okeechobee. Behind the front, northwest winds and the coolest air of the fall so far should bring lows in the **50s** Friday and Saturday nights in most areas and highs only around the low 70s south of Alligator Alley on Saturday. Hazardous marine conditions may develop on Atlantic and Gulf waters late in the week.',
          why: 'If you own a boat, check lines and covers before Friday’s winds. On the road, slow down in downpours and stay out of flooded lanes; water damage to a car is generally a comprehensive claim. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'Today, **Tuesday, Nov. 10, at 5 p.m. ET**, is the last chance to comment on NCCI’s 2027 workers’ comp filing (an average −7.4% for the voluntary market requested for Jan. 1, 2027; email ratehearings@floir.gov). The flood insurance program is authorized through **11:59 p.m. Dec. 11, 2026**, 31 days from today; FEMA’s page still shows no new extension. National Hurricane Center, 7 a.m. Tuesday: no tropical cyclone formation expected in the next 7 days.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 10 de noviembre de 2026: multas de $12.66 millones a administradores de beneficios de farmacia, límite de 15 años para techos de tejas FORTIFIED, sin fecha aún para la sesión sobre impuestos y un fuerte frente frío el jueves por la noche',
      metaTitle: 'Noticias 10 nov. 2026: multas a PBM, techos FORTIFIED, frente frío | M&K',
      description:
        'La OIR multa a administradores de beneficios de farmacia por $12.66 millones, FORTIFIED limita techos de tejas a 15 años, la Enmienda 3 sigue sin fecha y llega un frente frío.',
      ogAlt:
        'Un frasco de medicamentos junto a un documento con un mazo, una casa con techo de tejas y un escudo, un edificio de gobierno con columnas y un calendario, y una flecha de frente frío con una nube de lluvia sobre palmeras',
      intro:
        'Cuatro novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este martes. Cada noticia está resumida con nuestras propias palabras e incluye el enlace a la fuente original.',
      items: [
        {
          headline:
            'Nuevo: Florida multa por un total de $12.66 millones a administradores de beneficios de farmacia tras revisar sus contratos',
          summary:
            'La Oficina de Regulación de Seguros (OIR) anunció el 9 de noviembre más de **$12.66 millones** en multas contra administradores de beneficios de farmacia (PBM), los intermediarios que gestionan la cobertura de medicamentos de los planes de salud. Sus exámenes detectaron infracciones contractuales relacionadas con modelos de precios justos, suficiencia de la red y acceso equitativo, pagos a las farmacias y cambios unilaterales en los contratos con farmacias. La página de exámenes de la OIR enumera **16 PBM** revisados desde 2025: 13 recibieron multas y 3 no tuvieron observaciones; la ley fija una **multa de $5,000 por infracción**, y el dinero va al Fondo General del estado. Según la OIR, varios PBM impugnan los hallazgos o las multas en los tribunales, y algunos exámenes se retrasan porque ciertos PBM no cooperan.',
          why: 'Si su negocio ofrece un plan de salud, pregúntele a su administrador de beneficios qué PBM maneja la cobertura de medicamentos y si su examen ya está finalizado. Las multas van al estado, no se devuelven a los afiliados. Para dudas sobre un reclamo de farmacia, puede llamar a la línea de ayuda al consumidor del estado: 1-877-693-5236.',
          sources: PBM,
        },
        {
          headline:
            'Nuevo: desde el 1 de enero, FORTIFIED no renovará la designación de techos de tejas asfálticas con más de 15 años, y los fabricantes protestan',
          summary:
            'Según un boletín técnico de IBHS publicado por primera vez el 29 de septiembre, una casa FORTIFIED Roof, Silver o Gold con tejas asfálticas no podrá renovar su designación con una fecha de vencimiento de más de **15 años** después de su primera designación FORTIFIED (o de la fecha documentada de instalación del techo, en las designaciones de techo existente). La regla se aplica a las solicitudes presentadas **a partir del 1 de enero de 2027**; no acorta las vigencias emitidas antes, y reemplazar las áreas de tejas según las normas FORTIFIED actuales puede abrir un nuevo período de elegibilidad. Insurance Journal informó el 9 de noviembre que la Asociación de Fabricantes de Techos Asfálticos (ARMA) cuestiona el estudio en que se basa la regla y pide a las aseguradoras que no la usen para imponer restricciones más amplias. IBHS aclara que el boletín no fija la vida útil de las tejas ni determina si un techo debe reemplazarse.',
          why: 'FORTIFIED es un programa voluntario y no es lo mismo que la ley de Florida. Según la sección 627.7011(5), una aseguradora no puede negarse a emitir ni a renovar una póliza de vivienda solo porque el techo tenga menos de 15 años. Si el techo es más antiguo, una inspección autorizada que muestre al menos 5 años de vida útil restante impide un rechazo basado únicamente en la edad. Si su casa es FORTIFIED, revise la fecha de vencimiento de su designación. Más información en nuestra [guía sobre la regla de 15 años del techo](/es/blog/roof-age-home-insurance-florida) y en la [guía de My Safe Florida Home](/es/blog/my-safe-florida-home-2026).',
          sources: ROOF,
        },
        {
          headline:
            'Actualización: la sesión especial sobre la Enmienda 3 sigue sin fecha, y algunos legisladores preferirían esperar al nuevo gobernador',
          summary:
            'El gobernador Ron DeSantis dijo el 4 de noviembre que convocará una sesión especial para poner en marcha la Enmienda 3, que según él debe aplicarse antes del 1 de enero. Las fechas las dejó en manos de los líderes legislativos. WBBH informó el 9 de noviembre que, según varias fuentes republicanas y la representante estatal demócrata Anna Eskamani, algunos legisladores prefieren esperar a que asuma el gobernador electo Byron Donalds. La oficina del gobernador no había dicho cuándo se convocará la sesión. La enmienda eleva la exención de homestead, fuera de los impuestos escolares, de $50,000 a **$150,000 en 2027** y a **$250,000 en 2028**, y reduce del **10% al 5%** el tope anual de aumento del avalúo para propiedades sin homestead, incluidos negocios, alquileres y segundas viviendas.',
          why: 'Esto no cambia nada en su póliza de seguro. Si el próximo año se recalcula su pago de escrow, la parte de impuestos puede variar, pero la cobertura de la vivienda debe seguir correspondiendo a lo que costaría reconstruirla. Vea nuestra [página de seguro de vivienda](/es/homeowners-insurance-florida-city).',
          sources: TAX,
        },
        {
          headline:
            'Actualización: el fuerte frente frío llegaría antes, entre la noche del jueves y la mañana del viernes, con mínimas en los 50 °F el fin de semana',
          summary:
            'La discusión de pronóstico de las 6:20 a.m. del Servicio Meteorológico Nacional en Miami indica que los modelos más recientes favorecen un frente frío más rápido, que cruzaría el sur de Florida **a última hora del jueves y la madrugada del viernes**. Antes de su paso habrá posibilidad de chubascos dispersos y alguna tormenta aislada, y el jueves podría haber viento racheado del suroeste. Antes de eso, el miércoles por la tarde podrían formarse algunas tormentas, y no se descarta alguna fuerte y aislada con ráfagas y aguaceros, sobre todo cerca del lago Okeechobee. Tras el frente, el viento del noroeste y el aire más fresco del otoño hasta ahora traerían mínimas **en los 50 °F (10–15 °C)** las noches del viernes y el sábado en la mayoría de las zonas, y máximas de poco más de 70 °F al sur de Alligator Alley el sábado. A finales de semana podrían darse condiciones marinas peligrosas en aguas del Atlántico y del Golfo.',
          why: 'Si tiene un bote, revise amarras y cubiertas antes del viento del viernes. En la carretera, reduzca la velocidad con los aguaceros y evite los carriles inundados; el daño por agua a un auto suele reclamarse bajo la cobertura comprensiva. Vea [comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'Hoy, **martes 10 de noviembre, a las 5 p.m. (hora del Este)**, vence el plazo para enviar comentarios sobre la solicitud de NCCI de tarifas de compensación laboral para 2027 (un cambio promedio de −7.4% para el mercado voluntario, solicitado desde el 1 de enero de 2027; correo: ratehearings@floir.gov). El programa federal de seguro contra inundaciones está autorizado hasta las **11:59 p.m. del 11 de diciembre de 2026**, dentro de 31 días; la página de FEMA aún no muestra una nueva prórroga. Centro Nacional de Huracanes, 7 a.m. del martes: no se espera la formación de ciclones tropicales en los próximos 7 días.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 10 ноября 2026 г.: штрафы $12,66 млн для управляющих аптечными льготами, 15-летний лимит для крыш FORTIFIED из черепицы, у сессии по налогу на недвижимость всё ещё нет даты, а в ночь на пятницу придёт сильный холодный фронт',
      metaTitle: 'Новости 10 ноября 2026: штрафы PBM, крыши FORTIFIED, холодный фронт | M&K',
      description:
        'OIR оштрафовало управляющих аптечными льготами на $12,66 млн, FORTIFIED ограничивает крыши из черепицы 15 годами, у сессии по Поправке 3 нет даты, идёт холодный фронт.',
      ogAlt:
        'Флакон с таблетками рядом с документом и судейским молотком, дом с черепичной крышей и значком-щитом, здание с колоннами и календарём, стрелка холодного фронта с дождевым облаком над пальмами',
      intro:
        'Четыре новости для домовладельцев, водителей и владельцев малого бизнеса Южной Флориды в этот вторник. Каждая изложена нашими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Новое: регулятор Флориды оштрафовал управляющих аптечными льготами в общей сложности на $12,66 млн по итогам проверки договоров',
          summary:
            'Управление по регулированию страхования Флориды (OIR) 9 ноября объявило о штрафах на сумму более **$12,66 млн** для управляющих аптечными льготами (PBM), то есть посредников, которые ведут лекарственное покрытие медицинских планов. Проверки выявили нарушения в договорах, связанные со справедливыми моделями ценообразования, достаточностью аптечной сети и равным доступом, выплатами аптекам и односторонним изменением договоров с аптеками. На странице проверок OIR указано **16 PBM**, проверенных с 2025 года: 13 получили штрафы, у 3 замечаний нет; закон устанавливает **штраф $5000 за каждое нарушение**, а деньги поступают в общий бюджетный фонд штата. По данным OIR, несколько PBM оспаривают выводы или штрафы в суде, а часть проверок задерживается, потому что некоторые PBM не сотрудничают.',
          why: 'Если ваш бизнес предоставляет сотрудникам медицинский план, узнайте у администратора льгот, какой PBM ведёт лекарственное покрытие и завершена ли его проверка. Штрафы идут в бюджет штата и участникам планов не возвращаются. С вопросами по аптечной претензии можно обратиться на линию помощи потребителям штата: 1-877-693-5236.',
          sources: PBM,
        },
        {
          headline:
            'Новое: с 1 января FORTIFIED перестанет продлевать статус крышам из асфальтовой черепицы старше 15 лет, производители против',
          summary:
            'Согласно техническому бюллетеню IBHS, впервые опубликованному 29 сентября, дом уровня FORTIFIED Roof, Silver или Gold с асфальтовой черепицей нельзя переаттестовать с датой окончания позже чем через **15 лет** после первой аттестации FORTIFIED (для аттестаций существующей крыши — после документально подтверждённой даты её монтажа). Правило действует для заявок, поданных **с 1 января 2027 г.**; уже выданные сроки оно не сокращает, а замена черепичных участков по текущим стандартам FORTIFIED может открыть новый период. Insurance Journal 9 ноября сообщил, что Ассоциация производителей асфальтовых кровельных материалов (ARMA) оспаривает исследование, на котором основано правило, и призывает страховщиков не использовать его для более широких ограничений. IBHS подчёркивает, что бюллетень не устанавливает срок службы черепицы и не решает, нужно ли менять крышу.',
          why: 'FORTIFIED — добровольная программа, и это не то же самое, что закон Флориды. По ст. 627.7011(5) страховая компания не может отказать в оформлении или продлении полиса на дом только потому, что крыше меньше 15 лет. Если крыша старше, а проверка уполномоченного инспектора показывает, что ей осталось не меньше 5 лет службы, отказать из-за одного лишь возраста тоже нельзя. Если ваш дом аттестован по FORTIFIED, проверьте дату окончания статуса. Подробнее — в нашей [статье о правиле 15 лет для крыши](/ru/blog/roof-age-home-insurance-florida) и [статье о My Safe Florida Home](/ru/blog/my-safe-florida-home-2026).',
          sources: ROOF,
        },
        {
          headline:
            'Обновление: у специальной сессии по Поправке 3 всё ещё нет даты, и часть законодателей, возможно, хочет дождаться нового губернатора',
          summary:
            'Губернатор Рон Десантис 4 ноября заявил, что созовёт специальную сессию для принятия законов о Поправке 3: по его словам, её нужно ввести в действие к 1 января. Даты он оставил на усмотрение руководства Легислатуры. Телеканал WBBH 9 ноября сообщил, что, по словам нескольких источников среди республиканцев и депутата-демократа Анны Эскамани, часть законодателей предпочла бы подождать, пока в должность вступит избранный губернатор Байрон Доналдс. Офис губернатора о сроках сессии не сообщил. Поправка повышает льготу homestead (кроме школьных налогов) с $50 000 до **$150 000 в 2027 г.** и **$250 000 в 2028 г.**, а также снижает годовой потолок роста оценочной стоимости для недвижимости без homestead, включая бизнес, сдаваемое жильё и вторые дома, с **10% до 5%**.',
          why: 'На ваш страховой полис это никак не влияет. Если в следующем году пересчитают платёж escrow, налоговая часть может измениться, но страховая сумма на дом по-прежнему должна соответствовать стоимости его восстановления. Подробнее — на нашей [странице страхования дома](/ru/homeowners-insurance-florida-city).',
          sources: TAX,
        },
        {
          headline:
            'Обновление: сильный холодный фронт, похоже, придёт раньше — в ночь с четверга на пятницу, а к выходным ночью будет около 10–15 °C',
          summary:
            'В прогностическом обсуждении NWS Miami от 6:20 говорится, что последние расчёты моделей склоняются к более быстрому фронту: он пройдёт через Южную Флориду **поздно вечером в четверг и ранним утром в пятницу**. Перед ним возможны отдельные ливни и местами грозы, а в четверг ожидается порывистый юго-западный ветер. Ещё раньше, в среду днём, могут сформироваться грозы; не исключена и отдельная сильная гроза с порывами ветра и ливнем, в основном у озера Окичоби. За фронтом северо-западный ветер и самый прохладный за эту осень воздух дадут в ночи на субботу и на воскресенье минимумы **50–59 °F (около 10–15 °C)** в большинстве районов, а в субботу к югу от Alligator Alley днём будет лишь немногим выше 70 °F (21–23 °C). К концу недели в водах Атлантики и Мексиканского залива возможны опасные морские условия.',
          why: 'Если у вас есть лодка, проверьте швартовы и чехлы до пятничного ветра. За рулём снижайте скорость в ливень и не заезжайте на затопленные полосы; ущерб машине от воды обычно возмещается по comprehensive. Подробнее — в статье [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Сегодня, **во вторник, 10 ноября, до 17:00 по восточному времени**, — последний срок для комментариев по заявке NCCI о тарифах workers’ comp на 2027 год (запрошено среднее изменение −7,4% для добровольного рынка с 1 января 2027 г.; адрес: ratehearings@floir.gov). Федеральная программа страхования от наводнений действует **до 23:59 11 декабря 2026 г.**, то есть ещё 31 день; на странице FEMA нового продления пока нет. Национальный центр по ураганам, 7:00 вторника: в ближайшие 7 дней образование тропических циклонов не ожидается.',
        },
      ],
      extraSources: BOX,
    },
  },
};
