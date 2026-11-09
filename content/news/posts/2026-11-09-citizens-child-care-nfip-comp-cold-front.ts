import type { NewsEdition, NewsSource } from '../types';

// Edition for Monday, Nov. 9, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const CITIZENS_CHILDCARE: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-11-05',
  url: 'https://www.citizensfla.com/-/20261105-child-care-home-eligibility-changes-discontinued-policy-forms',
  title: 'Child Care Home Eligibility Changes & Discontinued Policy Forms',
};

const STAT_627_70161: NewsSource = {
  name: 'Florida Statutes (Online Sunshine)',
  date: '2026-07-01',
  url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.70161.html',
  title: 's. 627.70161, F.S. — Family child care and large family child care insurance (2026)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const CRS_LAPSE: NewsSource = {
  name: 'Congressional Research Service',
  date: '2026-09-11',
  url: 'https://www.congress.gov/crs_external_products/IN/PDF/IN10835/IN10835.62.pdf',
  title: 'What Happens If the National Flood Insurance Program (NFIP) Lapses? (IN10835)',
};

const IB_MIDTERMS: NewsSource = {
  name: 'Insurance Business',
  date: '2026-11-04',
  url: 'https://www.insurancebusinessmag.com/us/news/breaking-news/us-midterms-reshape-insurance-agenda-as-democrats-take-congress-596185.aspx',
  title: '“Insurance isn’t partisan”: Industry urges cooperation after Democratic sweep',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-27',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'NCCI 2026 Public Rate Hearing — record open for comment until Nov. 10, 2026, 5 p.m. ET',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-09',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 1:19 a.m. EST Mon Nov 9, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-09',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 6:35 a.m. EST Mon Nov 9, 2026',
};

const MDC_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-09',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Mon Nov 9, 2026',
};

const CITIZENS_HOME: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-11-09',
  url: 'https://www.citizensfla.com/',
  title: 'Citizens website notice: offices closed Wednesday, Nov. 11, for Veterans Day',
};

const CHILDCARE = [CITIZENS_CHILDCARE, STAT_627_70161];
const NFIP = [FEMA_REAUTH, CRS_LAPSE, IB_MIDTERMS];
const COMP = [OIR_NCCI];
const WX = [NWS_MFL_AFD, NWS_MFL_CFW, MDC_KING];
const BOX = [NHC_TWO, CITIZENS_HOME];

export const edition: NewsEdition = {
  slug: '2026-11-09-citizens-child-care-nfip-comp-cold-front',
  datePublished: '2026-11-09',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 9, 2026: Citizens changes child-care-home and tenant-contents rules, 32 days left on flood insurance, workers’ comp comments close Tuesday, and a strong cold front ahead',
      metaTitle: 'Insurance News Nov. 9, 2026: Citizens, NFIP, Comp, Cold Front | M&K',
      description:
        'Citizens updates child-care-home eligibility and drops tenant-contents forms Dec. 1, the NFIP runs out Dec. 11, NCCI comp comments close Nov. 10 and a strong cold front nears.',
      ogAlt:
        'A house with a small playground and building blocks beside a policy document with a check mark, a calendar page with a flood-water house icon, and a cold front with a blue arrow and rain cloud over palm trees',
      intro:
        'Four updates for South Florida drivers, homeowners and small-business owners this Monday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'New: Citizens opens eligibility to homes running a large family child care home and drops three tenant-contents policy types on Dec. 1',
          summary:
            'A Nov. 5 Citizens bulletin says that, **effective Dec. 1, 2026**, its underwriting rules follow Senate Bill 1690: “Family Day Care Home” becomes “Family Child Care Home,” and a dwelling where a licensed or registered **large family child care home** operates may now qualify for Homeowners, Dwelling, Mobile Home Dwelling and Mobile Homeowners policies, since running one can’t be the only reason for a denial. Citizens still provides **no liability coverage** for any child care operation, and Florida law (s. 627.70161) keeps child-care liability out of home policies unless it is added specifically or through a business rider or endorsement. In the same bulletin, Citizens says that, with OIR approval, it will stop offering **DP-1, DP-3 and MDP-1 tenant contents** policies because of low demand; existing ones will be nonrenewed, and an **HO-4 or MHO-4** contents policy may be available if underwriting requirements are met.',
          why: 'If you care for children at home, the house policy and the child-care liability are two separate things; the statute lets an insurer decline or nonrenew a provider who doesn’t keep separate liability coverage for the operation. If you rent and hold a Citizens tenant-contents dwelling policy, watch your mail for a nonrenewal notice and plan replacement coverage before it ends. See our [Citizens guide](/en/blog/citizens-property-insurance-local-agent) and [business insurance page](/en/commercial-insurance-florida-city).',
          sources: CHILDCARE,
        },
        {
          headline:
            'Update: 32 days left on the flood insurance program, and the outgoing Congress has to act',
          summary:
            'FEMA’s reauthorization page says the National Flood Insurance Program is authorized only through **11:59 p.m. on Dec. 11, 2026**, which is 32 days from today. After the Nov. 3 midterms, Democrats won majorities in both chambers, Insurance Business reports, but the new Congress doesn’t take office until January, so the NFIP deadline falls to the outgoing Congress in its post-election session; the Independent Insurance Agents & Brokers of America is pressing for a long-term reauthorization or, at a minimum, no lapse. If it lapses, the Congressional Research Service says the program loses authority to issue new policies (existing ones run to the end of their term) and its Treasury borrowing limit drops from **$30.425 billion to $1 billion**, while FEMA says it would still pay valid claims with available funds. Congress has passed 36 short-term NFIP extensions since the end of fiscal 2017.',
          why: 'If you are buying, refinancing or renewing an NFIP policy in December, line up your flood coverage early rather than near Dec. 11. A new NFIP policy usually has a 30-day waiting period, and a lender can accept a qualifying private flood policy. See our [flood insurance page](/en/flood-insurance-homestead-fl).',
          sources: NFIP,
        },
        {
          headline:
            'Update: Public comments on the 2027 workers’ comp rate filing close Tuesday at 5 p.m.',
          summary:
            'The Office of Insurance Regulation keeps its record on NCCI’s 2027 workers’ compensation filing open for public comment until **Tuesday, Nov. 10, at 5 p.m. ET**. NCCI requests an overall average change of **−7.4%** for the voluntary market on new and renewal policies **effective Jan. 1, 2027**; that is a request, not an approved rate. Comments go to ratehearings@floir.gov with “National Council on Compensation Insurance” in the subject line, and OIR notes that written comments, including email addresses, are public record. (Our Nov. 5–7 editions listed this deadline as Monday; the correct day is Tuesday.)',
          why: 'Your own workers’ comp cost depends on your class codes and payroll at renewal, not only on the statewide average. Contractors should also keep current certificates from every subcontractor; see today’s guide on [collecting subcontractor certificates](/en/blog/subcontractor-insurance-certificates-florida).',
          sources: COMP,
        },
        {
          headline:
            'New: King tides fade this morning as a strong cold front heads for South Florida late this week',
          summary:
            'NWS Miami kept its **Coastal Flood Statement** for coastal Miami-Dade, Broward and Palm Beach only until **9 a.m. today**, with isolated minor flooding at this morning’s king-tide high tide. The 6:35 a.m. Area Forecast Discussion calls for a few showers early in the week, then rising chances of showers and thunderstorms as a **strong cold front** approaches and passes **Thursday into Friday**; computer models still disagree on its timing, and any stronger storms could bring heavy downpours and gusty winds. Behind the front, forecasters expect the **coolest air of the season so far** by next weekend. Miami-Dade’s next king-tide window is **Nov. 23–26**.',
          why: 'Slow down in heavy rain and avoid flooded streets; water damage to a car is generally a comprehensive claim ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). If you want flood coverage before the next king tides, note that a new NFIP policy usually takes 30 days to start. See our [king-tides guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'National Hurricane Center, 7 a.m. Monday: no tropical cyclone formation is expected in the Atlantic, Caribbean or Gulf over the next seven days. Citizens offices are closed **Wednesday, Nov. 11**, for Veterans Day; claims can still be reported through myPolicy or the 24/7 claims line, 866-411-2742. OIR’s Hurricane Isaias claims page still shows data as of Nov. 6, which we covered on Saturday.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 9 de noviembre de 2026: Citizens cambia sus reglas para guarderías en casa y pólizas de contenido para inquilinos, quedan 32 días al seguro de inundación, cierran el martes los comentarios sobre compensación laboral y se acerca un frente frío fuerte',
      metaTitle: 'Noticias de seguros 9 nov. 2026: Citizens, NFIP, frente frío | M&K',
      description:
        'Citizens amplía la elegibilidad de guarderías en el hogar y elimina pólizas de contenido el 1 de dic., el NFIP vence el 11 de dic., cierran comentarios de la NCCI y llega un frente frío.',
      ogAlt:
        'Una casa con un pequeño parque infantil y bloques de juguete junto a un documento de póliza con una marca de verificación, una hoja de calendario con el ícono de una casa en agua de inundación, y un frente frío con una flecha azul y una nube de lluvia sobre palmeras',
      intro:
        'Cuatro novedades para conductores, propietarios de vivienda y pequeños negocios del sur de Florida este lunes. Cada noticia está resumida con nuestras propias palabras y enlazada a la fuente original.',
      items: [
        {
          headline:
            'Nuevo: Citizens acepta viviendas con guardería familiar grande y deja de ofrecer tres tipos de póliza de contenido para inquilinos desde el 1 de diciembre',
          summary:
            'Un boletín de Citizens del 5 de noviembre indica que, **a partir del 1 de diciembre de 2026**, sus reglas de suscripción se ajustan a la ley SB 1690: el término “Family Day Care Home” pasa a ser “Family Child Care Home”, y una vivienda donde funciona una **guardería familiar grande** (large family child care home) con licencia o registro ahora puede calificar para pólizas Homeowners, Dwelling, Mobile Home Dwelling y Mobile Homeowners, porque operarla no puede ser el único motivo para negar la cobertura. Citizens sigue **sin ofrecer cobertura de responsabilidad civil** para ningún tipo de guardería, y la ley de Florida (s. 627.70161) excluye esa responsabilidad de las pólizas de vivienda salvo que se incluya de forma expresa o mediante un anexo o endoso comercial. En el mismo boletín, Citizens informa que, con aprobación de la OIR, dejará de ofrecer las pólizas de **contenido para inquilinos DP-1, DP-3 y MDP-1** por baja demanda; las existentes no se renovarán, y una póliza de contenido **HO-4 o MHO-4** podría estar disponible si se cumplen los requisitos de suscripción.',
          why: 'Si cuida niños en su casa, la póliza de la vivienda y la responsabilidad civil de la guardería son dos cosas distintas; la ley permite a la aseguradora rechazar o no renovar a un proveedor que no mantenga una cobertura de responsabilidad aparte para esa actividad. Si alquila y tiene una póliza de contenido para inquilinos de Citizens, esté atento a un aviso de no renovación y planifique la cobertura de reemplazo antes de que termine. Vea nuestra [guía sobre Citizens](/es/blog/citizens-property-insurance-local-agent) y nuestra [página de seguros comerciales](/es/commercial-insurance-florida-city).',
          sources: CHILDCARE,
        },
        {
          headline:
            'Actualización: quedan 32 días al programa federal de seguro de inundación y le toca actuar al Congreso saliente',
          summary:
            'Según la página de FEMA sobre la reautorización, el Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado solo hasta las **11:59 p.m. del 11 de diciembre de 2026**, es decir, dentro de 32 días. Tras las elecciones de mitad de período del 3 de noviembre, los demócratas obtuvieron la mayoría en ambas cámaras, informa Insurance Business, pero el nuevo Congreso no asume hasta enero, así que el plazo del NFIP queda en manos del Congreso saliente en su sesión poselectoral; la asociación de agentes independientes IIABA pide una reautorización de largo plazo o, como mínimo, evitar que caduque. Si caduca, el Servicio de Investigación del Congreso (CRS) explica que el programa pierde la autoridad para emitir pólizas nuevas (las vigentes siguen hasta el final de su período) y su límite de préstamo del Tesoro baja de **$30,425 millones a $1,000 millones**, mientras FEMA afirma que seguiría pagando los reclamos válidos con los fondos disponibles. Desde el final del año fiscal 2017, el Congreso ha aprobado 36 extensiones de corto plazo del NFIP.',
          why: 'Si va a comprar, refinanciar o renovar una póliza del NFIP en diciembre, organice su cobertura de inundación con tiempo y no cerca del 11 de diciembre. Una póliza nueva del NFIP suele tener un período de espera de 30 días, y el prestamista puede aceptar una póliza privada de inundación que cumpla los requisitos. Vea nuestra [página de seguro de inundación](/es/flood-insurance-homestead-fl).',
          sources: NFIP,
        },
        {
          headline:
            'Actualización: los comentarios públicos sobre las tarifas de compensación laboral 2027 cierran el martes a las 5 p.m.',
          summary:
            'La Oficina de Regulación de Seguros (OIR) mantiene abierto el expediente de la solicitud de tarifas de compensación laboral 2027 de la NCCI para comentarios del público hasta el **martes 10 de noviembre a las 5 p.m. (hora del Este)**. La NCCI pide un cambio promedio general de **−7.4%** para el mercado voluntario en pólizas nuevas y renovaciones **con vigencia desde el 1 de enero de 2027**; es una solicitud, no una tarifa aprobada. Los comentarios se envían a ratehearings@floir.gov con “National Council on Compensation Insurance” en el asunto, y la OIR advierte que las comunicaciones escritas, incluidas las direcciones de correo, son de dominio público. (Nuestras ediciones del 5 al 7 de noviembre indicaron que el plazo vencía el lunes; el día correcto es el martes.)',
          why: 'Lo que usted paga por compensación laboral depende de sus códigos de clasificación y su nómina al renovar, no solo del promedio estatal. Los contratistas también deben tener al día los certificados de cada subcontratista; vea la guía de hoy sobre [cómo reunir los certificados de sus subcontratistas](/es/blog/subcontractor-insurance-certificates-florida).',
          sources: COMP,
        },
        {
          headline:
            'Nuevo: las mareas reales se despiden esta mañana y un frente frío fuerte llega al sur de Florida a fines de semana',
          summary:
            'El Servicio Meteorológico Nacional (NWS) en Miami mantuvo su **aviso de inundación costera** (Coastal Flood Statement) para la costa de Miami-Dade, Broward y Palm Beach solo hasta las **9 a.m. de hoy**, con inundación leve aislada durante la marea alta de esta mañana. La discusión de pronóstico de las 6:35 a.m. prevé algunos aguaceros a comienzos de semana y luego más probabilidad de lluvias y tormentas eléctricas a medida que un **frente frío fuerte** se acerca y cruza la región **entre el jueves y el viernes**; los modelos aún no coinciden en la hora, y las tormentas más fuertes podrían traer aguaceros intensos y ráfagas de viento. Detrás del frente, los meteorólogos esperan **el aire más fresco de la temporada hasta ahora** para el próximo fin de semana. La próxima ventana de mareas reales en Miami-Dade es del **23 al 26 de noviembre**.',
          why: 'Reduzca la velocidad con lluvia intensa y evite las calles inundadas; los daños por agua a un auto suelen reclamarse bajo la cobertura integral ([integral vs. colisión](/es/blog/comprehensive-vs-collision-florida)). Si quiere cobertura de inundación antes de las próximas mareas reales, recuerde que una póliza nueva del NFIP suele tardar 30 días en entrar en vigor. Vea nuestra [guía sobre mareas reales](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'Centro Nacional de Huracanes, 7 a.m. del lunes: no se espera la formación de ciclones tropicales en el Atlántico, el Caribe ni el Golfo durante los próximos siete días. Las oficinas de Citizens cierran el **miércoles 11 de noviembre** por el Día de los Veteranos; los reclamos se pueden reportar por myPolicy o por la línea de reclamos 24/7, 866-411-2742. La página de la OIR sobre el huracán Isaias sigue mostrando datos al 6 de noviembre, que cubrimos el sábado.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 9 ноября 2026 г.: Citizens меняет правила для домашних детских садов и полисов имущества арендаторов, до истечения программы страхования от наводнений осталось 32 дня, во вторник закрывается приём комментариев по workers’ comp, впереди сильный холодный фронт',
      metaTitle: 'Страховые новости 9 ноября 2026: Citizens, NFIP, фронт | M&K',
      description:
        'Citizens с 1 декабря меняет правила для домашних детских садов и отказывается от полисов имущества арендаторов, NFIP истекает 11 декабря, комментарии NCCI до 10 ноября, идёт холодный фронт.',
      ogAlt:
        'Дом с маленькой детской площадкой и кубиками рядом с документом полиса и галочкой, листок календаря со значком дома в воде и холодный фронт с синей стрелкой и дождевым облаком над пальмами',
      intro:
        'Четыре новости для водителей, домовладельцев и владельцев малого бизнеса Южной Флориды в этот понедельник. Каждая новость пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Новое: Citizens будет страховать дома с крупным семейным детским садом и с 1 декабря прекращает три вида полисов имущества арендаторов',
          summary:
            'В бюллетене Citizens от 5 ноября сказано, что **с 1 декабря 2026 г.** правила андеррайтинга приводятся в соответствие с законом SB 1690: термин «Family Day Care Home» заменяется на «Family Child Care Home», а дом, где работает лицензированный или зарегистрированный **крупный семейный детский сад** (large family child care home), теперь может получить полисы Homeowners, Dwelling, Mobile Home Dwelling и Mobile Homeowners — сама по себе такая деятельность больше не может быть единственной причиной отказа. При этом Citizens по-прежнему **не страхует ответственность** за любую деятельность по уходу за детьми, а закон Флориды (ст. 627.70161) исключает такую ответственность из полисов на жильё, если она не включена отдельно или через коммерческий райдер либо дополнение к полису. В том же бюллетене Citizens сообщает, что с одобрения OIR перестаёт предлагать полисы **имущества арендаторов DP-1, DP-3 и MDP-1** из-за низкого спроса; действующие полисы не будут продлены, а взамен может подойти полис на имущество **HO-4 или MHO-4**, если выполнены требования андеррайтинга.',
          why: 'Если вы присматриваете за детьми у себя дома, страховка дома и ответственность за детский сад — это разные вещи: закон позволяет страховой компании отказать или не продлевать полис, если у вас нет отдельного страхования ответственности для этой деятельности. Если вы арендуете жильё и у вас полис Citizens на имущество арендатора, следите за письмом о непродлении и заранее подберите замену. Подробнее — в нашей [статье о Citizens](/ru/blog/citizens-property-insurance-local-agent) и на [странице страхования бизнеса](/ru/commercial-insurance-florida-city).',
          sources: CHILDCARE,
        },
        {
          headline:
            'Обновление: до истечения федеральной программы страхования от наводнений осталось 32 дня, решать будет уходящий Конгресс',
          summary:
            'Согласно странице FEMA о продлении, Национальная программа страхования от наводнений (NFIP) действует только **до 23:59 11 декабря 2026 г.**, то есть ещё 32 дня. По итогам промежуточных выборов 3 ноября демократы получили большинство в обеих палатах, пишет Insurance Business, но новый Конгресс приступит к работе только в январе, поэтому вопрос NFIP остаётся за уходящим Конгрессом на послевыборной сессии; ассоциация независимых агентов IIABA добивается долгосрочного продления или хотя бы недопущения перерыва. Если программа истечёт, по данным Исследовательской службы Конгресса (CRS), она потеряет право выпускать новые полисы (действующие сохраняются до конца срока), а лимит заимствований у Минфина снизится с **$30,425 млрд до $1 млрд**; FEMA при этом заявляет, что продолжит оплачивать обоснованные претензии из имеющихся средств. С конца 2017 финансового года Конгресс уже 36 раз продлевал NFIP на короткий срок.',
          why: 'Если в декабре вы покупаете дом, рефинансируете ипотеку или продлеваете полис NFIP, оформляйте страховку от наводнения заранее, а не в последние дни перед 11 декабря. У нового полиса NFIP обычно 30-дневный период ожидания, а банк может принять подходящий частный полис от наводнения. Подробнее — на нашей [странице о страховании от наводнений](/ru/flood-insurance-homestead-fl).',
          sources: NFIP,
        },
        {
          headline:
            'Обновление: приём комментариев по тарифам workers’ comp на 2027 год закрывается во вторник в 17:00',
          summary:
            'Управление по регулированию страхования Флориды (OIR) принимает публичные комментарии по заявке NCCI на тарифы страхования работников (workers’ compensation) на 2027 год до **вторника, 10 ноября, 17:00 по восточному времени**. NCCI просит общее среднее изменение **−7,4%** для добровольного рынка по новым и продлеваемым полисам **с 1 января 2027 г.**; это заявка, а не утверждённый тариф. Комментарии отправляют на ratehearings@floir.gov с темой «National Council on Compensation Insurance»; OIR предупреждает, что письменные обращения, включая адреса электронной почты, являются публичными документами. (В наших выпусках 5–7 ноября днём окончания был ошибочно указан понедельник; правильно — вторник.)',
          why: 'Ваша собственная стоимость workers’ comp зависит от кодов классификации и фонда оплаты труда при продлении, а не только от среднего по штату. Подрядчикам также стоит держать актуальные сертификаты от всех субподрядчиков — см. сегодняшнюю статью о [сертификатах субподрядчиков](/ru/blog/subcontractor-insurance-certificates-florida).',
          sources: COMP,
        },
        {
          headline:
            'Новое: королевские приливы сходят на нет этим утром, а к концу недели к Южной Флориде подходит сильный холодный фронт',
          summary:
            'Метеослужба NWS Miami сохраняла **предупреждение о прибрежном подтоплении** (Coastal Flood Statement) для побережья округов Майами-Дейд, Броуард и Палм-Бич только **до 9:00 сегодня** — с местами слабым подтоплением во время утреннего королевского прилива. Прогностическое обсуждение от 6:35 обещает отдельные ливни в начале недели, а затем рост вероятности дождей и гроз, когда **сильный холодный фронт** подойдёт и пройдёт через регион **в четверг–пятницу**; модели пока расходятся во времени его прохождения, а самые сильные грозы могут принести ливни и порывистый ветер. За фронтом синоптики ожидают **самый прохладный воздух за этот сезон** к следующим выходным. Следующее окно королевских приливов в Майами-Дейд — **23–26 ноября**.',
          why: 'В сильный дождь снижайте скорость и объезжайте затопленные улицы; ущерб автомобилю от воды обычно покрывается по comprehensive ([comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida)). Если хотите страховку от наводнения до следующих королевских приливов, учтите, что новый полис NFIP обычно вступает в силу через 30 дней. Подробнее — в нашей [статье о королевских приливах](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальный центр по ураганам, 7:00 понедельника: в ближайшие семь дней образование тропических циклонов в Атлантическом бассейне, включая Карибское море, не ожидается. Офисы Citizens закрыты в **среду, 11 ноября**, в День ветеранов; сообщить об убытке можно через myPolicy или по круглосуточной линии 866-411-2742. Страница OIR по урагану Isaias по-прежнему показывает данные на 6 ноября — мы писали о них в субботу.',
        },
      ],
      extraSources: BOX,
    },
  },
};
