import type { NewsEdition, NewsSource } from '../types';

// Edition for Wednesday, Oct. 14, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const DFS_DFAST: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-13',
  url: 'https://myfloridacfo.com/news/pressreleases/press-release-details/2026/10/13/chief-financial-officer-and-state-fire-marshal-blaise-ingoglia-shares-hurricane-isaias-response-efforts-from-the-florida-department-of-financial-services',
  title:
    'Chief Financial Officer and State Fire Marshal Blaise Ingoglia Shares Hurricane Isaias Response Efforts from the Florida Department of Financial Services',
};

const DFS_RESOURCES: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-14',
  url: 'https://myfloridacfo.com/division/consumers/storm/resources',
  title: 'Hurricane Resources — Insurance Assistance Hub locations',
};

const IJ_CLAIMS: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-10-13',
  url: 'https://www.insurancejournal.com/news/southeast/2026/10/13/888686.htm',
  title:
    '‘Unusual’ Isaias Brings Winds, Downed Trees But Fewer Claims Than Expected',
};

const OIR_DATACALL: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-12',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/12/data-call-notice-hurricane-isaias-catastrophe-reporting',
  title: 'DATA CALL NOTICE: Hurricane Isaias Catastrophe Reporting',
};

const OIR_CAT: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-14',
  url: 'https://www.floir.gov/tools-and-data/catastrophe-reporting',
  title: 'Catastrophe Reporting',
};

const FLHSMV_EO: NewsSource = {
  name: 'Florida Highway Safety and Motor Vehicles',
  date: '2026-10-08',
  url: 'https://www.flhsmv.gov/pdf/bulletins/2026/DL%2026-013%20and%20RSTL%2026-015.pdf',
  title:
    'DL 26-013 and RSTL 26-015 — Emergency Order 26-05 Pursuant to Executive Order 26-202',
};

const EOG_RECOVERY3: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-10-13',
  url: 'https://flgov.com/eog/news/press/2026/governor-ron-desantis-issues-updates-state-response-and-recovery-efforts-3',
  title:
    'Governor Ron DeSantis Issues Updates on State Response and Recovery Efforts for Hurricane Isaias',
};

const FEMA_DECL: NewsSource = {
  name: 'Federal Emergency Management Agency',
  date: '2026-10-14',
  url: 'https://www.fema.gov/disaster/declarations',
  title: 'Disasters and Other Declarations (EM-3655-FL Hurricane Isaias)',
};

const FEMA_EM_PR: NewsSource = {
  name: 'Federal Emergency Management Agency',
  date: '2026-10-09',
  url: 'https://www.fema.gov/press-release/20261009/president-donald-j-trump-approves-emergency-declaration-florida',
  title: 'President Approves Emergency Declaration for Florida',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (Agent)',
};

const CITIZENS_DEPOP: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-10-14',
  url: 'https://www.citizensfla.com/depoppl',
  title: 'Personal Lines Depopulation Program',
};

const CITIZENS_ANS: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-09-29',
  url: 'https://securesupport.citizensfla.com/app/answers/detail/a_id/3423/kw/policyholder',
  title: 'How will Citizens notify policyholders of their policyholder choice results?',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-14',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Atlantic Tropical Weather Outlook, 8 a.m. EDT Wed Oct 14, 2026',
};

export const edition: NewsEdition = {
  slug: '2026-10-14-dfast-claims-flhsmv-fema',
  datePublished: '2026-10-14',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 14, 2026: DFS fraud teams on the ground, early Isaias claim picture, FLHSMV fee waivers, FEMA still emergency-only, and Citizens’ Oct. 20 takeout',
      metaTitle: 'Insurance News Oct. 14, 2026: DFS Fraud Teams | M&K Agency',
      description:
        'Today: DFS deploys Isaias fraud strike teams as hubs run through Friday, early claim estimates while OIR awaits Thursday filings, FLHSMV fee waivers, FEMA still emergency-only, and Citizens’ Oct. 20 assumption.',
      ogAlt:
        'A fraud-warning flyer, claim forms, a driver license, a FEMA checklist and a Citizens takeout letter',
      intro:
        'Five updates for South Florida homeowners, drivers and small-business owners as Panhandle recovery from Hurricane Isaias continues. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: DFS deploys three fraud strike teams; insurance hubs run through Friday with dozens of carriers',
          summary:
            'On Oct. 13 the Florida Department of Financial Services said its Disaster Fraud Action Strike Teams (DFAST) had sent three detective teams into Santa Rosa, Okaloosa, Escambia and Walton counties after Hurricane Isaias, contacting hundreds of residents about common fraud indicators and unlicensed or predatory contractors. The same release said the Destin and Pensacola Insurance Assistance Hubs had 16 and 20 insurance carriers on site, respectively, on the second day of operations. Both hubs remain listed through Friday, Oct. 16, generally 9 a.m. to 4 p.m. Central — Destin at Morgan Sports Complex, 4200 Indian Bayou Trail; Pensacola at the University of West Florida, 11000 University Parkway, Parking Lot B. Helpline 1-877-693-5236; fraud reports 1-800-378-0445 or FraudFreeFlorida.com.',
          why: 'Storm recovery is when door-to-door contractor and assignment scams spike. If you or family have Panhandle damage, use the hubs or the helpline before you sign anything, and verify any contractor’s license.',
          sources: [DFS_DFAST, DFS_RESOURCES],
        },
        {
          headline:
            'Early Isaias insured-loss estimates land below Hurricane Michael; OIR still awaits Thursday claim filings',
          summary:
            'Insurance Journal reported Oct. 13 that early industry feedback points to fewer and less severe Florida claims than feared after Isaias’s Destin landfall, with analytics firm Verisk estimating about $1 billion to $2 billion in insured losses across the storm’s path — still large, but far below Hurricane Michael’s Florida toll. The Florida Office of Insurance Regulation’s public catastrophe page still showed no statewide Isaias aggregate claim totals as of this morning. Insurers’ first simplified Catastrophe Reporting Form deadline was noon ET Tuesday, Oct. 13; the second cumulative filing is due noon ET Thursday, Oct. 15.',
          why: 'Statewide OIR totals will be the official scoreboard for how many claims Florida carriers are handling. If you have storm damage, file promptly, keep photos and receipts, and do not wait for those aggregates to appear.',
          sources: [IJ_CLAIMS, OIR_DATACALL, OIR_CAT],
        },
        {
          headline:
            'FLHSMV waives replacement and late fees for Isaias counties through Dec. 5',
          summary:
            'Florida Highway Safety and Motor Vehicles Emergency Order 26-05, issued Oct. 8 under Executive Order 26-202, waives certain fees when adverse weather delayed the transaction in listed counties — including Escambia, Santa Rosa, Okaloosa, Walton, Bay and much of the Panhandle and Big Bend. Covered items include duplicate or replacement driver licenses and ID cards, license plates, validation stickers, vehicle registration and title certificates, vessel registrations and titles, handicapped parking permits, and additional late-renewal or late-application fees. Administrative actions for those late renewals are also deferred. The order runs through midnight Dec. 5, 2026, or until the emergency order or EO 26-202 ends earlier. Offices should note “EO 26-05” on the transaction.',
          why: 'If Isaias kept you from renewing or replacing a license, plate or title in a covered county, ask the tax collector or FLHSMV office about the fee waiver before you pay — and bring proof of the storm-related delay if asked.',
          sources: [FLHSMV_EO, EOG_RECOVERY3],
        },
        {
          headline:
            'Update: FEMA’s Florida Isaias help remains emergency-only — no Individual Assistance for households yet',
          summary:
            'FEMA’s public declarations list still shows Florida Hurricane Isaias as emergency declaration EM-3655-FL (declared Oct. 9 for conditions beginning Oct. 6), not a major disaster declaration. That emergency declaration supports public-assistance work for designated counties; it does not, by itself, open FEMA’s Individuals and Households Program for home repairs, temporary housing or other needs assistance. As of this morning, Miami-Dade, Broward and Monroe were not on the designated-county list for this event. Households cannot apply for Individual Assistance until FEMA issues a major disaster declaration that specifically designates counties for that program.',
          why: 'If family in the Panhandle asks about “FEMA money,” the answer for now is still insurance first, state hubs and helplines — not a FEMA household application. Watch DisasterAssistance.gov only after a major-disaster / IA designation appears.',
          sources: [FEMA_DECL, FEMA_EM_PR],
        },
        {
          headline:
            'Citizens personal-lines takeout assumption is next Tuesday, Oct. 20',
          summary:
            'Citizens’ 2026 personal-lines calendar lists Tuesday, Oct. 20, as the next assumption date. The policyholder-choice deadline for that round was Monday, Oct. 5; choice letters went out Aug. 27. On assumption day, Citizens sends a Notice of Assumption and Nonrenewal plus a Certificate of Assumption to policyholders whose policies move to a takeout company, and an Unsuccessful Assumption notice when a selected policy is not assumed. There is no longer a 30-day window to return to Citizens after an assumption — once it occurs, the transfer is final. Policies that received a private-market offer not more than 20% above Citizens’ estimated renewal premium were generally ineligible to stay with Citizens.',
          why: 'If you got an Oct. 20 takeout packet, watch your mail and myPolicy this week for the assumption or unsuccessful-assumption letter, and call your agent if the new company’s coverage or contacts are unclear.',
          sources: [CITIZENS_CAL, CITIZENS_DEPOP, CITIZENS_ANS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Tropics check',
          text: 'NHC’s Wednesday 8 a.m. EDT outlook: tropical cyclone formation is not expected over the next 7 days. No Florida threat. Reminder: DFS Isaias insurance hubs in Destin and Pensacola are scheduled through Friday, Oct. 16; OIR’s second Isaias CRF filing deadline is noon ET Thursday, Oct. 15.',
        },
      ],
      extraSources: [NHC_TWO, DFS_RESOURCES, OIR_DATACALL],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 14 de octubre de 2026: equipos antifraude del DFS, primeras cifras de reclamos por Isaías, exención de tarifas de FLHSMV, FEMA sigue en emergencia y la asunción de Citizens el 20 de octubre',
      metaTitle: 'Noticias de seguros, 14 oct. 2026: equipos antifraude | M&K',
      description:
        'Hoy: el DFS despliega equipos antifraude por Isaías mientras los hubs abren hasta el viernes, primeras estimaciones de reclamos mientras la OIR espera filings del jueves, exención de tarifas de FLHSMV, FEMA sigue solo en emergencia y la asunción de Citizens el 20 de octubre.',
      ogAlt:
        'Un aviso de fraude, formularios de reclamo, una licencia de conducir, una lista de FEMA y una carta de takeout de Citizens',
      intro:
        'Cinco novedades para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida, mientras sigue la recuperación en el Panhandle tras el huracán Isaías. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: el DFS despliega tres equipos antifraude; los hubs de seguros operan hasta el viernes con docenas de aseguradoras',
          summary:
            'El 13 de octubre el Departamento de Servicios Financieros de Florida indicó que sus Disaster Fraud Action Strike Teams (DFAST) enviaron tres equipos de detectives a los condados de Santa Rosa, Okaloosa, Escambia y Walton tras el huracán Isaías, contactando a cientos de residentes sobre indicios comunes de fraude y contratistas sin licencia o depredadores. El mismo comunicado dijo que los Insurance Assistance Hubs de Destin y Pensacola tenían 16 y 20 aseguradoras en el lugar, respectivamente, el segundo día de operaciones. Ambos hubs figuran hasta el viernes 16 de octubre, en general de 9 a.m. a 4 p.m. hora del Centro — Destin en Morgan Sports Complex, 4200 Indian Bayou Trail; Pensacola en la University of West Florida, 11000 University Parkway, Parking Lot B. Línea de ayuda 1-877-693-5236; denuncias de fraude 1-800-378-0445 o FraudFreeFlorida.com.',
          why: 'La recuperación tras una tormenta es cuando aumentan las estafas de contratistas y cesiones de beneficios. Si usted o su familia tienen daños en el Panhandle, use los hubs o la línea de ayuda antes de firmar nada, y verifique la licencia de cualquier contratista.',
          sources: [DFS_DFAST, DFS_RESOURCES],
        },
        {
          headline:
            'Las primeras estimaciones de pérdidas aseguradas por Isaías quedan por debajo de Michael; la OIR aún espera los filings del jueves',
          summary:
            'Insurance Journal informó el 13 de octubre que las primeras señales de la industria apuntan a menos reclamos en Florida — y menos graves — de lo temido tras el aterrizaje de Isaías cerca de Destin; la firma de analítica Verisk estima unos $1.000 a $2.000 millones en pérdidas aseguradas en la trayectoria de la tormenta: aún una cifra grande, pero muy por debajo del costo de Michael en Florida. La página pública de reportes de catástrofe de la Oficina de Regulación de Seguros de Florida aún no mostraba totales estatales agregados de reclamos por Isaías esta mañana. El primer plazo del Catastrophe Reporting Form simplificado fue el mediodía hora del Este del martes 13 de octubre; el segundo filing acumulativo vence al mediodía hora del Este el jueves 15 de octubre.',
          why: 'Los totales estatales de la OIR serán el marcador oficial de cuántos reclamos manejan las aseguradoras de Florida. Si tiene daños por la tormenta, presente el reclamo pronto, guarde fotos y recibos, y no espere a que aparezcan esos agregados.',
          sources: [IJ_CLAIMS, OIR_DATACALL, OIR_CAT],
        },
        {
          headline:
            'FLHSMV exime tarifas de reemplazo y de demora en condados afectados por Isaías hasta el 5 de diciembre',
          summary:
            'La Orden de Emergencia 26-05 de Florida Highway Safety and Motor Vehicles, emitida el 8 de octubre bajo la Orden Ejecutiva 26-202, exime ciertas tarifas cuando el mal tiempo retrasó el trámite en condados de la lista — incluidos Escambia, Santa Rosa, Okaloosa, Walton, Bay y gran parte del Panhandle y el Big Bend. Cubre, entre otros, licencias de conducir e identificaciones duplicadas o de reemplazo, placas, stickers de validación, certificados de registro y título de vehículos, registros y títulos de embarcaciones, permisos de estacionamiento para discapacitados, y tarifas adicionales por renovación o solicitud tardía. También se difieren acciones administrativas por esas renovaciones tardías. La orden rige hasta la medianoche del 5 de diciembre de 2026, o hasta que termine antes la orden de emergencia o la EO 26-202. Las oficinas deben anotar “EO 26-05” en la transacción.',
          why: 'Si Isaías le impidió renovar o reemplazar una licencia, placa o título en un condado cubierto, pregunte en el tax collector o en FLHSMV sobre la exención de tarifas antes de pagar — y lleve prueba del retraso relacionado con la tormenta si se la piden.',
          sources: [FLHSMV_EO, EOG_RECOVERY3],
        },
        {
          headline:
            'Actualización: la ayuda de FEMA por Isaías en Florida sigue solo en emergencia — aún no hay Individual Assistance para hogares',
          summary:
            'La lista pública de declaraciones de FEMA sigue mostrando el huracán Isaías en Florida como declaración de emergencia EM-3655-FL (declarada el 9 de octubre por condiciones desde el 6 de octubre), no como declaración de desastre mayor. Esa declaración de emergencia respalda asistencia pública para condados designados; por sí sola no abre el Individuals and Households Program de FEMA para reparaciones del hogar, vivienda temporal u other needs assistance. Esta mañana, Miami-Dade, Broward y Monroe no estaban en la lista de condados designados para este evento. Los hogares no pueden solicitar Individual Assistance hasta que FEMA emita una declaración de desastre mayor que designe condados específicamente para ese programa.',
          why: 'Si familiares en el Panhandle preguntan por “dinero de FEMA”, por ahora la respuesta sigue siendo primero el seguro, los hubs estatales y las líneas de ayuda — no una solicitud de FEMA para el hogar. Revise DisasterAssistance.gov solo después de que aparezca una designación de desastre mayor / IA.',
          sources: [FEMA_DECL, FEMA_EM_PR],
        },
        {
          headline:
            'La asunción de takeout de líneas personales de Citizens es el martes 20 de octubre',
          summary:
            'El calendario de líneas personales de Citizens para 2026 fija el martes 20 de octubre como la próxima fecha de asunción. El plazo de elección del asegurado para esa ronda fue el lunes 5 de octubre; las cartas de oferta salieron el 27 de agosto. El día de la asunción, Citizens envía un Notice of Assumption and Nonrenewal y un Certificate of Assumption a quienes pasan a una compañía de takeout, y un aviso de Unsuccessful Assumption cuando una póliza seleccionada no se asume. Ya no hay una ventana de 30 días para volver a Citizens después de una asunción: una vez ocurre, la transferencia es definitiva. Las pólizas que recibieron una oferta del mercado privado no más de un 20% por encima de la prima estimada de renovación de Citizens en general no eran elegibles para quedarse en Citizens.',
          why: 'Si recibió un paquete de takeout del 20 de octubre, revise el correo y myPolicy esta semana en busca de la carta de asunción o de asunción fallida, y llame a su agente si la cobertura o los contactos de la nueva compañía no están claros.',
          sources: [CITIZENS_CAL, CITIZENS_DEPOP, CITIZENS_ANS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Chequeo del trópico',
          text: 'Pronóstico del NHC del miércoles a las 8 a.m. hora del Este: no se espera formación de ciclones tropicales en los próximos 7 días. Sin amenaza para Florida. Recordatorio: los hubs de seguros del DFS por Isaías en Destin y Pensacola están programados hasta el viernes 16 de octubre; el segundo plazo del CRF de Isaías ante la OIR es el mediodía hora del Este del jueves 15 de octubre.',
        },
      ],
      extraSources: [NHC_TWO, DFS_RESOURCES, OIR_DATACALL],
    },
    ru: {
      title:
        'Страховые новости Флориды, 14 октября 2026: антифрод-команды DFS, ранняя картина убытков «Исайаса», льготы FLHSMV, FEMA всё ещё emergency-only и takeout Citizens 20 октября',
      metaTitle: 'Страховые новости 14 окт. 2026: антифрод DFS | M&K',
      description:
        'Сегодня: DFS направил антифрод-команды по «Исайасу», хабы работают до пятницы; ранние оценки убытков, пока OIR ждёт filings в четверг; льготы FLHSMV; FEMA всё ещё только emergency; takeout Citizens 20 октября.',
      ogAlt:
        'Листовка о мошенничестве, бланки убытков, водительские права, чеклист FEMA и письмо takeout Citizens',
      intro:
        'Пять новостей для владельцев жилья, водителей и малого бизнеса в Южной Флориде: на Panhandle продолжается восстановление после урагана «Исайас». Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: DFS направил три антифрод-команды; страховые хабы работают до пятницы с десятками страховщиков',
          summary:
            '13 октября Департамент финансовых услуг Флориды сообщил, что его Disaster Fraud Action Strike Teams (DFAST) направили три группы детективов в округа Santa Rosa, Okaloosa, Escambia и Walton после урагана «Исайас» и связались с сотнями жителей по типичным признакам мошенничества и нелицензированным или агрессивным подрядчикам. В том же релизе указано, что в хабах помощи в Destin и Pensacola во второй день работы было 16 и 20 страховщиков соответственно. Оба хаба по-прежнему указаны до пятницы, 16 октября, обычно с 9:00 до 16:00 по центральному времени — Destin: Morgan Sports Complex, 4200 Indian Bayou Trail; Pensacola: University of West Florida, 11000 University Parkway, Parking Lot B. Телефон помощи 1-877-693-5236; о мошенничестве — 1-800-378-0445 или FraudFreeFlorida.com.',
          why: 'Именно в период восстановления после шторма чаще всего появляются «подрядчики у двери» и схемы с уступкой прав по полису. Если у вас или родственников есть ущерб на Panhandle, сначала хаб или горячая линия — и проверка лицензии подрядчика до любой подписи.',
          sources: [DFS_DFAST, DFS_RESOURCES],
        },
        {
          headline:
            'Ранние оценки застрахованных убытков «Исайаса» ниже Michael; OIR всё ещё ждёт filings в четверг',
          summary:
            'Insurance Journal 13 октября пишет, что по первым отзывам отрасли во Флориде заявлений меньше и они легче, чем опасались после выхода «Исайаса» у Destin; аналитическая фирма Verisk оценивает примерно $1–2 млрд застрахованных убытков по всей траектории шторма — всё ещё крупная сумма, но далеко не масштаб Hurricane Michael во Флориде. На публичной странице catastrophe reporting Управления страхового регулирования Флориды этим утром по-прежнему не было сводных штатных цифр по «Исайасу». Первый срок упрощённой Catastrophe Reporting Form — полдень ET во вторник, 13 октября; второй накопительный filing — полдень ET в четверг, 15 октября.',
          why: 'Именно сводные цифры OIR станут официальной «табло» по числу убытков у флоридских страховщиков. При ущербе от шторма подавайте заявление быстро, храните фото и чеки и не ждите появления этих агрегатов.',
          sources: [IJ_CLAIMS, OIR_DATACALL, OIR_CAT],
        },
        {
          headline:
            'FLHSMV до 5 декабря отменяет сборы за замену и просрочку в округах, затронутых «Исайасом»',
          summary:
            'Emergency Order 26-05 Florida Highway Safety and Motor Vehicles от 8 октября (на основании Executive Order 26-202) отменяет ряд сборов, если из-за непогоды сделка задержалась в перечисленных округах — в том числе Escambia, Santa Rosa, Okaloosa, Walton, Bay и значительной части Panhandle и Big Bend. Подпадают дубликаты/замена водительских прав и ID, номера, validation stickers, регистрация и title автомобиля, регистрация и title судна, handicapped parking permits, а также дополнительные сборы за позднюю renewal/application. Административные меры по таким просрочкам тоже откладываются. Приказ действует до полуночи 5 декабря 2026 года либо до более раннего окончания emergency order или EO 26-202. В транзакции офисы должны указать «EO 26-05».',
          why: 'Если из-за «Исайаса» вы не успели обновить или заменить права, номер или title в покрытом округе, перед оплатой спросите в tax collector или FLHSMV про waiver — и при необходимости возьмите подтверждение задержки из-за шторма.',
          sources: [FLHSMV_EO, EOG_RECOVERY3],
        },
        {
          headline:
            'Обновление: помощь FEMA по «Исайасу» во Флориде всё ещё только emergency — Individual Assistance для домохозяйств пока нет',
          summary:
            'В публичном списке деклараций FEMA ураган «Исайас» во Флориде по-прежнему значится как emergency declaration EM-3655-FL (объявлена 9 октября по условиям с 6 октября), а не как major disaster declaration. Emergency declaration поддерживает public assistance для указанных округов и сама по себе не открывает Individuals and Households Program FEMA для ремонта жилья, временного жилья или other needs assistance. Этим утром Miami-Dade, Broward и Monroe не входили в список designated counties по этому событию. Домохозяйства не могут подать на Individual Assistance, пока FEMA не выпустит major disaster declaration с явной designation округов под эту программу.',
          why: 'Если родственники на Panhandle спрашивают про «деньги FEMA», пока ответ тот же: сначала страховка, штатные хабы и горячие линии — не заявка FEMA для семьи. Смотрите DisasterAssistance.gov только после появления major disaster / IA.',
          sources: [FEMA_DECL, FEMA_EM_PR],
        },
        {
          headline:
            'Takeout Citizens по личным линиям — следующий вторник, 20 октября',
          summary:
            'В календаре personal lines Citizens на 2026 год следующий день assumption — вторник, 20 октября. Дедлайн выбора страхователя по этому раунду был понедельник, 5 октября; письма с предложениями разослали 27 августа. В день assumption Citizens отправляет Notice of Assumption and Nonrenewal и Certificate of Assumption тем, чьи полисы переходят к takeout-компании, и Unsuccessful Assumption — если выбранный полис не переведён. Окна в 30 дней для возврата в Citizens после assumption больше нет: после перевода возврат окончательный. Полисы, получившие предложение рынка не более чем на 20% выше оценочной renewal premium Citizens, как правило не имели права остаться в Citizens.',
          why: 'Если вам пришёл пакет takeout на 20 октября, на этой неделе следите за почтой и myPolicy — письмо об assumption или о несостоявшемся переводе — и звоните агенту, если покрытие или контакты новой компании неясны.',
          sources: [CITIZENS_CAL, CITIZENS_DEPOP, CITIZENS_ANS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Тропики',
          text: 'Утренний обзор NHC в среду в 8:00 ET: образование тропических циклонов в ближайшие 7 дней не ожидается. Угрозы Флориде нет. Напоминание: страховые хабы DFS по «Исайасу» в Destin и Pensacola запланированы до пятницы, 16 октября; второй срок CRF по «Исайасу» в OIR — полдень ET в четверг, 15 октября.',
        },
      ],
      extraSources: [NHC_TWO, DFS_RESOURCES, OIR_DATACALL],
    },
  },
};
