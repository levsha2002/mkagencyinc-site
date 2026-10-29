import type { NewsEdition, NewsSource } from '../types';

// Edition for Thursday, Oct. 29, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const DFS_ARREST: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-27',
  url: 'https://www.myfloridacfo.com/news/pressreleases/press-release-details/2026/10/27/chief-financial-officer-blaise-ingoglia-announces-arrest-of-unlicensed-insurance-agent-and-accomplice',
  title: 'CFO announces arrest of unlicensed insurance agent and accomplice',
};

const FLHSMV_MOVE_OVER: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-10-28',
  url: 'https://www.flhsmv.gov/2026/10/28/trooper-seriously-injured-after-driver-fails-to-move-over-in-active-work-zone/',
  title: 'Trooper seriously injured after driver fails to move over in active work zone',
};

const CITIZENS_PAYMENTS: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-10-15',
  url: 'https://www.citizensfla.com/-/20261015-online-payment-system-changes',
  title: 'Online Payment System Changes',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-28',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 7:54 p.m. EDT Wed Oct 28, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-29',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 7:24 a.m. EDT Thu Oct 29, 2026',
};

const NWS_KEY_CFW: NewsSource = {
  name: 'National Weather Service Key West',
  date: '2026-10-29',
  url: 'https://forecast.weather.gov/product.php?site=KEY&issuedby=KEY&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Flood Warning, Florida Keys, 5:38 a.m. EDT Thu Oct 29, 2026',
};

const MDC_KING_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-29',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8 a.m. EDT Thu Oct 29, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

export const edition: NewsEdition = {
  slug: '2026-10-29-fake-coverage-arrests-move-over-citizens-payments',
  datePublished: '2026-10-29',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 29, 2026: two arrests over business coverage that never existed, a trooper hurt by a driver who didn’t move over, changes to Citizens online payments, and the king tide winds down before a stormy weekend',
      metaTitle: 'Insurance News Oct. 29, 2026: Fake Coverage, Move Over | M&K',
      description:
        'Arrests over fake business coverage, a trooper hurt in a Move Over crash, new Citizens online payment rules, and the king tide easing before weekend storms.',
      ogAlt:
        'A document with a red X and a magnifying glass, a road with cones where a car moves over for a stopped patrol car, two payment cards next to a phone with a house shield, and a storm cloud with lightning over a house in shallow water',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'Two men arrested after a construction company paid for business coverage that was never active',
          summary:
            'Florida’s Department of Financial Services announced on **Oct. 27** the arrests of two men after a construction company turned over two certificates of insurance to a state compliance officer; the insurer named on them confirmed the policies had never been active, even though the owner had paid $10,500 in premium. Investigators say the man who sold the coverage has been permanently barred from holding an insurance license since 2002 and worked out of another man’s agency, where the agent-in-charge allegedly knew this and let him collect premiums without providing real coverage. The charges include racketeering conspiracy, organized scheme to defraud and grand theft, and the Miami-Dade State Attorney’s Office is handling the case; the charges are allegations until proven in court.',
          why: 'Before you pay for a business policy, look up the agent on the Florida DFS licensee search, pay the insurer or the licensed agency directly, and ask for the policy documents, not only a certificate. If a customer or general contractor relies on your certificate, it’s fair for them to confirm it with the insurer; our guide to [certificates of insurance for contractors](/en/blog/certificate-of-insurance-contractors-florida) explains how. Suspected insurance fraud can be reported to DFS at 1-800-378-0445.',
          sources: [DFS_ARREST],
        },
        {
          headline: 'Update: A trooper is seriously hurt after a driver fails to move over in a work zone, and Florida counted 215 Move Over crashes in 2025',
          summary:
            'The Florida Highway Patrol says a pickup truck hit the back of a trooper’s patrol car at about 9:12 p.m. on **Tuesday, Oct. 27**, on State Road 429 in Orange County, where the car was stopped with its emergency lights on as part of a lane closure in a construction zone. The trooper was airlifted with serious injuries and is in stable condition, the driver had non-life-threatening injuries, and charges are pending. FLHSMV reports that in 2025 Florida had 215 crashes and issued more than 17,300 citations for failing to move over. The law requires drivers to move over a lane for stopped emergency, service, utility and disabled vehicles, or slow to 20 mph below the speed limit when they can’t, and since Jan. 1, 2025, it also covers any vehicle on the roadside with hazard lights, flares or emergency signage.',
          why: 'A Move Over violation means a fine, fees and points on your license, and points or an at-fault crash can affect what your auto insurer charges at renewal. With longer, darker evenings ahead, our new guide to [Florida’s headlight and Move Over laws](/en/blog/florida-headlight-move-over-law) covers what the law expects at night.',
          sources: [FLHSMV_MOVE_OVER],
        },
        {
          headline: 'Citizens policyholders: online payments have changed, and saved payment methods won’t carry over',
          summary:
            'Citizens has updated how policyholders pay online through its myPolicy portal and one-time payments, according to its **Oct. 15** notice. Card payments can now be split between two cards; policyholders on semiannual or quarterly plans can pay more than the minimum due, up to the full amount owed, but any extra is applied to future balances and is not refundable while the policy stays in force; and payment methods saved in myPolicy before the change will not carry over, so they must be entered again. Payments made by phone post the next calendar day, and the payment vendor adds a 2.99% processing fee to each credit or debit card used. Citizens says it is emailing policyholders who have an email address on file, pay Citizens directly and renew between Oct. 1 and Dec. 31, 2026; everyone else will be notified in December.',
          why: 'If you pay your Citizens policy yourself rather than through your mortgage escrow, log in a few days before your due date, re-enter your payment method and keep the receipt so the payment isn’t late. If you have questions about your Citizens policy or a takeout offer, see our page on [Citizens insurance with a local agent](/en/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_PAYMENTS],
        },
        {
          headline: 'Update: The king tide advisory ends tonight in Miami-Dade, the Keys stay under a warning until Friday, and storms are likely Sunday and Monday',
          summary:
            'The National Weather Service in Miami says the Coastal Flood Advisory for moderate flooding along coastal Miami-Dade, Broward and Palm Beach runs until **8 p.m. Thursday**, and Thursday morning’s forecast discussion expects moderate to major flooding at today’s high tides, noting that tide gauges keep running above forecasts, with moderate flooding into the end of the week. In the Florida Keys, the warning for major saltwater flooding runs until 5 a.m. Friday. After only a few showers through Friday, forecasters expect a wetter weekend, with scattered to numerous afternoon showers and thunderstorms on Sunday and Monday that could bring frequent lightning, gusty winds and locally heavy rain.',
          why: 'Keep cars out of salt water and away from low spots; flood and storm damage to a car falls under comprehensive coverage ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Wind or lightning damage to a home is usually a homeowners claim subject to your deductible, while rising water needs a separate [flood policy](/en/flood-insurance-homestead-fl) that usually starts 30 days after purchase; Miami-Dade County lists the next king tide windows as Nov. 6–9 and Nov. 23–26.',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY_CFW, MDC_KING_TIDES],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Also this week',
          text: 'The National Hurricane Center does not expect any tropical cyclone to form in the next seven days (8 a.m. Thursday outlook). The National Flood Insurance Program remains authorized only through 11:59 p.m. on Dec. 11, 2026, and FEMA’s reauthorization page shows no newer extension; if it lapses, existing policies stay in force, but new policies and renewals can’t be issued.',
        },
      ],
      extraSources: [NHC_TWO, FEMA_REAUTH],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 29 de octubre de 2026: dos arrestos por un seguro de negocio que nunca existió, un patrullero herido por un conductor que no se apartó, cambios en los pagos en línea de Citizens y la marea real se despide antes de un fin de semana tormentoso',
      metaTitle: 'Noticias de seguros 29/10/2026: seguro falso, Move Over | M&K',
      description:
        'Arrestos por un seguro de negocio falso, un patrullero herido por no cumplir la ley Move Over, cambios en los pagos de Citizens y la marea real cede antes de tormentas.',
      ogAlt:
        'Un documento con una X roja y una lupa, una carretera con conos donde un carro se aparta de una patrulla detenida, dos tarjetas de pago junto a un teléfono con un escudo con una casa, y una nube de tormenta con un rayo sobre una casa en agua poco profunda',
      intro:
        'Cuatro novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline: 'Arrestan a dos hombres después de que una constructora pagó un seguro de negocio que nunca estuvo vigente',
          summary:
            'El Departamento de Servicios Financieros de Florida (DFS) anunció el **27 de octubre** el arresto de dos hombres después de que una constructora entregó dos certificados de seguro a un oficial de cumplimiento del estado; la aseguradora que figuraba en ellos confirmó que las pólizas nunca estuvieron activas, aunque el dueño había pagado $10,500 de prima. Según los investigadores, el hombre que vendió la cobertura tiene prohibido de por vida tener licencia de seguros desde 2002 y trabajaba desde la agencia de otro hombre, cuyo agente a cargo presuntamente lo sabía y le permitió cobrar primas sin dar una cobertura real. Los cargos incluyen conspiración para cometer crimen organizado (racketeering), esquema organizado para defraudar y hurto mayor, y el caso lo lleva la Fiscalía Estatal de Miami-Dade; los cargos son acusaciones hasta que se prueben en un tribunal.',
          why: 'Antes de pagar una póliza para su negocio, busque al agente en el buscador de licencias del DFS de Florida, pague directamente a la aseguradora o a la agencia con licencia y pida los documentos de la póliza, no solo un certificado. Si un cliente o contratista general depende de su certificado, es razonable que lo confirme con la aseguradora; nuestra guía sobre [certificados de seguro para contratistas](/es/blog/certificate-of-insurance-contractors-florida) explica cómo. Las sospechas de fraude de seguros se pueden reportar al DFS al 1-800-378-0445.',
          sources: [DFS_ARREST],
        },
        {
          headline: 'Actualización: un patrullero resulta gravemente herido porque un conductor no se apartó en una zona de obras, y Florida registró 215 choques por la ley Move Over en 2025',
          summary:
            'La Patrulla de Carreteras de Florida (FHP) informa que una camioneta pickup chocó contra la parte trasera de una patrulla hacia las 9:12 p.m. del **martes 27 de octubre** en la State Road 429, en el condado Orange, donde el vehículo estaba detenido con las luces de emergencia encendidas como parte del cierre de un carril en una zona de construcción. El patrullero fue trasladado en helicóptero con heridas graves y está estable, el conductor sufrió heridas que no ponen en riesgo su vida y hay cargos pendientes. Según el FLHSMV, en 2025 hubo en Florida 215 choques y más de 17,300 multas por no apartarse. La ley obliga a cambiarse de carril ante vehículos de emergencia, de servicio, de servicios públicos o averiados detenidos, o a bajar a 20 mph por debajo del límite cuando no se pueda, y desde el 1 de enero de 2025 también protege a cualquier vehículo en el borde de la vía con luces intermitentes, bengalas o señales de emergencia.',
          why: 'Una infracción de la ley Move Over trae multa, cargos y puntos en su licencia, y los puntos o un choque con culpa pueden influir en lo que cobra su seguro de auto al renovar. Con tardes más largas y oscuras por delante, nuestra nueva guía sobre [las leyes de luces y Move Over en Florida](/es/blog/florida-headlight-move-over-law) explica lo que exige la ley de noche.',
          sources: [FLHSMV_MOVE_OVER],
        },
        {
          headline: 'Asegurados de Citizens: cambiaron los pagos en línea y los métodos de pago guardados no se conservan',
          summary:
            'Citizens actualizó la forma en que los asegurados pagan en línea a través de su portal myPolicy y de los pagos únicos, según su aviso del **15 de octubre**. Ahora los pagos con tarjeta se pueden dividir entre dos tarjetas; quienes tienen plan semestral o trimestral pueden pagar más del mínimo, hasta el total adeudado, pero el excedente se aplica a saldos futuros y no se reembolsa mientras la póliza siga vigente; y los métodos de pago guardados en myPolicy antes del cambio no se conservan, así que hay que volver a ingresarlos. Los pagos por teléfono se registran al día calendario siguiente, y la empresa que procesa los pagos cobra un cargo del 2.99% por cada tarjeta de crédito o débito usada. Citizens indica que está enviando un correo a los asegurados que tienen correo electrónico registrado, pagan directamente a Citizens y renuevan entre el 1 de octubre y el 31 de diciembre de 2026; a los demás les avisará en diciembre.',
          why: 'Si usted paga su póliza de Citizens directamente y no a través del escrow de su hipoteca, entre unos días antes del vencimiento, vuelva a registrar su método de pago y guarde el recibo para que el pago no llegue tarde. Si tiene preguntas sobre su póliza de Citizens o una oferta de traspaso (takeout), vea nuestra página sobre [Citizens con un agente local](/es/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_PAYMENTS],
        },
        {
          headline: 'Actualización: el aviso por la marea real termina esta noche en Miami-Dade, los Cayos siguen bajo advertencia hasta el viernes y se esperan tormentas el domingo y el lunes',
          summary:
            'El Servicio Nacional de Meteorología (NWS) en Miami informa que el aviso por inundación costera moderada (Coastal Flood Advisory) para la costa de Miami-Dade, Broward y Palm Beach rige hasta las **8 p.m. del jueves**, y la discusión del pronóstico de esta mañana prevé inundación de moderada a mayor en las mareas altas de hoy, señala que los medidores de marea siguen superando lo pronosticado y espera inundación moderada hasta el final de la semana. En los Cayos de la Florida, la advertencia por inundación mayor con agua salada sigue hasta las 5 a.m. del viernes. Después de solo algunos aguaceros hasta el viernes, los meteorólogos esperan un fin de semana más lluvioso, con aguaceros y tormentas de dispersos a numerosos en la tarde del domingo y del lunes, que podrían traer rayos frecuentes, ráfagas de viento y lluvias fuertes en algunas zonas.',
          why: 'Mantenga los carros fuera del agua salada y lejos de las zonas bajas; el daño por inundación o tormenta en un carro entra en la cobertura comprensiva ([comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida)). El daño por viento o rayo en la casa normalmente es un reclamo del seguro de vivienda sujeto a su deducible, mientras que el agua que sube necesita una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, que normalmente empieza 30 días después de comprarla; el condado Miami-Dade indica que las próximas mareas reales serán del 6 al 9 y del 23 al 26 de noviembre.',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY_CFW, MDC_KING_TIDES],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'También esta semana',
          text: 'El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en los próximos siete días (pronóstico de las 8 a.m. del jueves). El Programa Nacional de Seguro contra Inundaciones (NFIP) sigue autorizado solo hasta las 11:59 p.m. del 11 de diciembre de 2026, y la página de FEMA sobre la reautorización no muestra una extensión más reciente; si vence, las pólizas existentes siguen vigentes, pero no se pueden emitir pólizas nuevas ni renovaciones.',
        },
      ],
      extraSources: [NHC_TWO, FEMA_REAUTH],
    },
    ru: {
      title:
        'Страховые новости Флориды, 29 октября 2026: два ареста из-за страховки для бизнеса, которой не существовало, патрульный пострадал из-за водителя, не перестроившегося по закону Move Over, изменения в онлайн-оплате Citizens и затухающий king tide перед дождливыми выходными',
      metaTitle: 'Страховые новости 29.10.2026: фальшивый полис, Move Over | M&K',
      description:
        'Аресты из-за фальшивой страховки для бизнеса, патрульный пострадал в ДТП по закону Move Over, новые правила онлайн-оплаты Citizens и спад прилива перед грозами.',
      ogAlt:
        'Документ с красным крестом и лупой, дорога с конусами, где машина перестраивается, объезжая остановившуюся патрульную машину, две платёжные карты рядом с телефоном со щитом и домиком, и грозовая туча с молнией над домом в неглубокой воде',
      intro:
        'Четыре новости для владельцев жилья, водителей и малого бизнеса Южной Флориды. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: 'Двое арестованы: строительная компания заплатила за страховку бизнеса, которая так и не начала действовать',
          summary:
            'Департамент финансовых услуг Флориды (DFS) **27 октября** сообщил об аресте двух мужчин после того, как строительная компания передала инспектору штата два сертификата страхования; указанная в них страховая компания подтвердила, что полисы никогда не действовали, хотя владелец заплатил $10 500 страховой премии. По данным следствия, продавцу этой «страховки» ещё с 2002 года пожизненно запрещено иметь страховую лицензию, а работал он в агентстве другого человека — ответственный агент этого агентства, как утверждается, знал об этом и позволял ему собирать премии, не оформляя настоящего покрытия. Среди обвинений — сговор с целью рэкета, организованная схема мошенничества и кража в крупном размере; дело ведёт прокуратура штата по округу Майами-Дейд. Пока суд не доказал вину, это лишь обвинения.',
          why: 'Прежде чем платить за полис для бизнеса, проверьте агента в поиске лицензий DFS Флориды, платите напрямую страховой компании или лицензированному агентству и просите сами документы полиса, а не только сертификат. Если ваш заказчик или генподрядчик опирается на ваш сертификат, он вправе подтвердить его у страховой; как это делается, объясняет наш материал о [сертификатах страхования для подрядчиков](/ru/blog/certificate-of-insurance-contractors-florida). О подозрении на страховое мошенничество можно сообщить в DFS по телефону 1-800-378-0445.',
          sources: [DFS_ARREST],
        },
        {
          headline: 'Обновление: патрульный тяжело ранен, потому что водитель не перестроился в зоне дорожных работ, а за 2025 год во Флориде было 215 аварий по закону Move Over',
          summary:
            'Дорожный патруль Флориды (FHP) сообщает, что во **вторник, 27 октября**, около 21:12 пикап врезался в заднюю часть патрульной машины на State Road 429 в округе Orange: машина стояла с включёнными проблесковыми маячками, перекрывая полосу в зоне строительных работ. Патрульного с тяжёлыми травмами доставили в больницу вертолётом, его состояние стабильное; водитель получил травмы, не угрожающие жизни, обвинения ему пока не предъявлены. По данным FLHSMV, в 2025 году во Флориде произошло 215 аварий и выписано более 17 300 штрафов за то, что водители не уступили место. Закон требует перестроиться на соседнюю полосу, если на обочине стоит машина экстренной, сервисной или коммунальной службы либо сломанная машина, а если это невозможно — снизить скорость на 20 миль/ч ниже разрешённой; с 1 января 2025 года закон распространяется и на любую машину на обочине с аварийкой, сигнальными огнями или знаками аварийной остановки.',
          why: 'Нарушение закона Move Over — это штраф, сборы и баллы на водительских правах, а баллы или ДТП по вашей вине могут повлиять на стоимость автостраховки при продлении. Вечера становятся длиннее и темнее, и наш новый материал о [законах Флориды о фарах и Move Over](/ru/blog/florida-headlight-move-over-law) рассказывает, чего закон требует от водителей ночью.',
          sources: [FLHSMV_MOVE_OVER],
        },
        {
          headline: 'Клиентам Citizens: онлайн-оплата изменилась, а сохранённые способы оплаты не перенесутся',
          summary:
            'Citizens обновила порядок онлайн-оплаты через портал myPolicy и разовых платежей, говорится в её уведомлении от **15 октября**. Теперь платёж картой можно разделить между двумя картами; клиенты с полугодовым или ежеквартальным графиком могут заплатить больше минимума, вплоть до всей суммы долга, но переплата засчитывается в будущие платежи и не возвращается, пока полис действует; а способы оплаты, сохранённые в myPolicy до изменений, не перенесутся, и их нужно ввести заново. Платежи по телефону зачисляются на следующий календарный день, а платёжный оператор берёт сбор 2,99% с каждой использованной кредитной или дебетовой карты. Citizens рассылает письма клиентам, у которых указан email, которые платят Citizens напрямую и продлевают полис с 1 октября по 31 декабря 2026 года; остальных уведомят в декабре.',
          why: 'Если вы платите за полис Citizens сами, а не через escrow по ипотеке, зайдите в кабинет за несколько дней до срока, заново введите способ оплаты и сохраните квитанцию, чтобы платёж не опоздал. Если есть вопросы по полису Citizens или по предложению о переводе (takeout), загляните на нашу страницу о [Citizens с местным агентом](/ru/blog/citizens-property-insurance-local-agent).',
          sources: [CITIZENS_PAYMENTS],
        },
        {
          headline: 'Обновление: рекомендация из-за king tide в Майами-Дейд заканчивается сегодня вечером, на Keys предупреждение действует до пятницы, а в воскресенье и понедельник ожидаются грозы',
          summary:
            'Национальная метеослужба (NWS) в Майами сообщает, что рекомендация (Coastal Flood Advisory) из-за умеренного прибрежного подтопления на побережье Майами-Дейд, Броварда и Палм-Бич действует до **20:00 четверга**. В утреннем прогнозе синоптики ожидают умеренного или сильного подтопления во время сегодняшних полных вод, отмечают, что мареографы по-прежнему показывают уровень выше прогнозов, и ждут умеренного подтопления до конца недели. На Florida Keys предупреждение о сильном подтоплении солёной водой действует до 5:00 пятницы. После лишь отдельных ливней до пятницы синоптики ждут дождливых выходных: в воскресенье и понедельник после обеда — местами или повсеместно ливни и грозы с частыми молниями, порывами ветра и местами сильными дождями.',
          why: 'Не оставляйте машины в солёной воде и в низинах; ущерб машине от наводнения или шторма покрывает comprehensive ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Ущерб дому от ветра или молнии обычно покрывает страховка жилья за вычетом франшизы, а от поднимающейся воды нужен отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), который обычно начинает действовать через 30 дней после покупки; по данным округа Майами-Дейд, следующие king tides ожидаются 6–9 и 23–26 ноября.',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD, NWS_KEY_CFW, MDC_KING_TIDES],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Также на этой неделе',
          text: 'Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней (прогноз на 8:00 четверга). Национальная программа страхования от наводнений (NFIP) по-прежнему действует только до 23:59 11 декабря 2026 года, и на странице FEMA о продлении нет более нового решения; если срок истечёт, действующие полисы сохранятся, но новые полисы и продления оформлять будет нельзя.',
        },
      ],
      extraSources: [NHC_TWO, FEMA_REAUTH],
    },
  },
};
