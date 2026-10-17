import type { NewsEdition, NewsSource } from '../types';

// Edition for Saturday, Oct. 17, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const EOG_MAJOR: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-10-16',
  url: 'https://www.flgov.com/eog/news/press/2026/governor-ron-desantis-announces-florida-requests-approval-major-disaster',
  title:
    'Governor Ron DeSantis Announces Florida Requests Approval for Major Disaster Declaration Following Hurricane Isaias',
};

const FDEM_ICYMI: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-10-16',
  url: 'https://www.floridadisaster.org/news-media/news/20261026-icymi-governor-ron-desantis-announces-florida-requests-approval-for-major-disaster-declaration-following-hurricane-isaias/',
  title:
    'ICYMI: Governor Ron DeSantis Announces Florida Requests Approval for Major Disaster Declaration Following Hurricane Isaias',
};

const FDEM_ISAIAS: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-10-17',
  url: 'https://www.floridadisaster.org/disaster-updates/hurricane-isaias/',
  title: 'Hurricane Isaias — Disaster Updates',
};

const FOX13_MAJOR: NewsSource = {
  name: 'FOX 13 Tampa Bay',
  date: '2026-10-16',
  url: 'https://www.fox13news.com/news/desantis-requests-fema-disaster-declaration-following-hurricane-isaias-damage',
  title: 'DeSantis requests FEMA disaster declaration following Hurricane Isaias damage',
};

const FLVOICE: NewsSource = {
  name: "Florida's Voice",
  date: '2026-10-16',
  url: 'https://flvoicenews.com/florida-seeks-federal-disaster-aid-offers-rv-housing-for-hurricane-survivors/',
  title: 'Florida seeks federal disaster aid, offers RV housing for hurricane survivors',
};

const FEMA_3655: NewsSource = {
  name: 'Federal Emergency Management Agency',
  date: '2026-10-17',
  url: 'https://www.fema.gov/disaster/3655',
  title: 'EM-3655-FL Hurricane Isaias (Florida)',
};

const FEMA_EM_PR: NewsSource = {
  name: 'Federal Emergency Management Agency',
  date: '2026-10-09',
  url: 'https://www.fema.gov/press-release/20261009/president-donald-j-trump-approves-emergency-declaration-florida',
  title: 'President Approves Emergency Declaration for Florida',
};

const EMERGENCY_RV: NewsSource = {
  name: 'Emergency RV',
  date: '2026-10-17',
  url: 'https://www.emergencyrv.org/get-help',
  title: 'Get Help — Emergency RV',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (Agent)',
};

const CITIZENS_DEPOP: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-10-17',
  url: 'https://www.citizensfla.com/depoppl',
  title: 'Personal Lines Depopulation',
};

const CITIZENS_A3423: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-09-29',
  url: 'https://securesupport.citizensfla.com/app/answers/detail/a_id/3423/kw/policyholder',
  title: 'What happens if my policy is assumed? (Answer 3423)',
};

const OIR_TAKEOUT: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-17',
  url: 'https://www.floir.gov/property-casualty/take-out-companies',
  title: 'Take-Out Companies',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-17',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'National Council on Compensation Insurance Public Rate Hearing 2026',
};

const OIR_CAT: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-17',
  url: 'https://www.floir.gov/tools-and-data/catastrophe-reporting',
  title: 'Catastrophe Reporting',
};

const DFS_RESOURCES: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-17',
  url: 'https://myfloridacfo.com/division/consumers/storm/resources',
  title: 'Hurricane Resources — Consumer Services',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-17',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Atlantic Tropical Weather Outlook, 8 a.m. EDT Sat Oct 17, 2026',
};

const MIAMI_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

export const edition: NewsEdition = {
  slug: '2026-10-17-major-disaster-rv-citizens',
  datePublished: '2026-10-17',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 17, 2026: Major disaster request filed, Emergency RV temporary housing, and Citizens assumption Tuesday',
      metaTitle: 'Insurance News Oct. 17, 2026: Major Disaster Request | M&K Agency',
      description:
        'Today: Florida asks for a major disaster declaration and Individual Assistance for eight Panhandle counties, partners with Emergency RV for temporary housing, and Citizens’ Oct. 20 assumption is three days away.',
      ogAlt:
        'A sealed request clipboard, a temporary housing RV, and a calendar marked for an assumption date',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners as Hurricane Isaias recovery continues in the Panhandle. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: Florida requests a major disaster declaration — Individual Assistance still not open',
          summary:
            'On Oct. 16 Governor Ron DeSantis announced that the Florida Division of Emergency Management has submitted a request for a presidential Major Disaster Declaration after Hurricane Isaias. The request seeks Public Assistance for 15 Northwest Florida counties (Bay, Calhoun, Escambia, Franklin, Gadsden, Gulf, Holmes, Jackson, Jefferson, Liberty, Okaloosa, Santa Rosa, Wakulla, Walton and Washington) and Individual Assistance for residents in eight of those counties: Bay, Escambia, Gulf, Holmes, Okaloosa, Santa Rosa, Walton and Washington. As of Saturday morning, FEMA’s Florida Isaias record remained emergency declaration EM-3655-FL only — not a major disaster — so household Individual Assistance registration was still not open. Miami-Dade, Broward and Monroe are not on the requested lists.',
          why: 'If relatives in the Panhandle ask about “FEMA money,” wait for federal approval and an open registration window before applying at DisasterAssistance.gov or 800-621-3362; keep filing with the insurer first and photograph damage now.',
          sources: [EOG_MAJOR, FDEM_ICYMI, FOX13_MAJOR, FEMA_3655, FEMA_EM_PR],
        },
        {
          headline:
            'State partners with Emergency RV for temporary housing while federal aid is pending',
          summary:
            'The same Oct. 16 announcement said Florida is partnering with Emergency RV to provide temporary shelter for Floridians displaced by Hurricane Isaias, prioritizing households whose homes took the most severe damage. FDEM’s Isaias update page directs displaced families to EmergencyRV.org to learn more and apply. The nonprofit says it loans or donates RVs as transitional housing — often so a family can stay on their own property while rebuilding — and that eligibility details can take time to confirm case by case. The program is meant to help now, not replace federal Individual Assistance if that is later approved.',
          why: 'Displaced Panhandle households can start an Emergency RV intake at EmergencyRV.org while the major-disaster request is pending; keep insurance claim and damage photos handy for any housing or FEMA application.',
          sources: [EOG_MAJOR, FDEM_ISAIAS, EMERGENCY_RV, FLVOICE],
        },
        {
          headline:
            'Update: Citizens personal-lines assumption is Tuesday, Oct. 20 — watch for assumption notices',
          summary:
            'Citizens’ next personal-lines depopulation assumption is Tuesday, Oct. 20. Choice letters went out Aug. 27; the policyholder choice deadline was Monday, Oct. 5. Households that did not register a choice were generally assigned to a selected takeout company (often the lowest estimated premium among approved offers). On assumption day, affected policyholders typically receive a Notice of Assumption and Nonrenewal plus a Certificate of Assumption (or an unsuccessful-assumption notice). There is no 30-day “return to Citizens” window after assumption; offers generally within 20% of Citizens’ estimated renewal make staying with Citizens unavailable. OIR’s takeout-company page lists the insurers approved for this round — we do not name private carriers here.',
          why: 'If you or a client had a Citizens takeout packet, check mail and the Citizens account this week for assumption paperwork, compare the takeout quote to your needs, and call your agent before you ignore a notice.',
          sources: [CITIZENS_CAL, CITIZENS_DEPOP, CITIZENS_A3423, OIR_TAKEOUT],
        },
        {
          headline:
            'Update: Workers’ comp rate hearing still Oct. 27 — expert testimony must be prefiled by Tuesday',
          summary:
            'The Florida Office of Insurance Regulation will hold a virtual public rate hearing Tuesday, Oct. 27, at 10 a.m. Eastern on the National Council on Compensation Insurance’s proposed overall average 7.4% decrease for voluntary-market workers’ compensation rates effective Jan. 1, 2027. Anyone who wants to present expert testimony must prefile written testimony with OIR on or before Tuesday, Oct. 20; the hearing page warns that experts who miss that deadline may be barred from testifying. Written public comments remain open to ratehearings@floir.com (subject: “National Council on Compensation Insurance”) through Nov. 10 at 5 p.m. Eastern. OIR sets the final rate after the record closes.',
          why: 'Florida employers and agents who want to speak as experts at the Oct. 27 hearing need written testimony on file by Oct. 20; others can still email comments through Nov. 10.',
          sources: [OIR_NCCI],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Tropics, claims data & hubs',
          text: 'NHC’s Saturday 8 a.m. EDT outlook: tropical cyclone formation is not expected over the next 7 days. No Florida threat. OIR’s public catastrophe-reporting page still showed no statewide Isaias claim aggregates this morning. The Destin and Pensacola DFS Insurance Assistance Hubs’ published Oct. 11–16 window has ended; call 1-877-693-5236 for claim help, and check FDEM’s Isaias page for Multi-Agency Resource Centers still listed in several Panhandle counties. Miami-Dade king tides: Oct. 24–30.',
        },
      ],
      extraSources: [NHC_TWO, OIR_CAT, DFS_RESOURCES, FDEM_ISAIAS, MIAMI_KING],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 17 de octubre de 2026: solicitud de desastre mayor, vivienda temporal Emergency RV y asunción de Citizens el martes',
      metaTitle: 'Noticias de seguros, 17 oct. 2026: desastre mayor | M&K',
      description:
        'Hoy: Florida pide declaración de desastre mayor e Individual Assistance para ocho condados del Panhandle, se asocia con Emergency RV para vivienda temporal, y la asunción de Citizens del 20 de octubre está a tres días.',
      ogAlt:
        'Un portapapeles con sello de solicitud, una casa rodante de vivienda temporal y un calendario marcado para la asunción',
      intro:
        'Cuatro novedades para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida, mientras sigue la recuperación en el Panhandle tras el huracán Isaías. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: Florida solicita una declaración de desastre mayor — Individual Assistance aún no está abierta',
          summary:
            'El 16 de octubre el gobernador Ron DeSantis anunció que la División de Manejo de Emergencias de Florida presentó una solicitud de declaración presidencial de desastre mayor tras el huracán Isaías. La solicitud pide Public Assistance para 15 condados del noroeste de Florida (Bay, Calhoun, Escambia, Franklin, Gadsden, Gulf, Holmes, Jackson, Jefferson, Liberty, Okaloosa, Santa Rosa, Wakulla, Walton y Washington) e Individual Assistance para residentes en ocho de esos condados: Bay, Escambia, Gulf, Holmes, Okaloosa, Santa Rosa, Walton y Washington. Esta mañana del sábado, el registro de FEMA para Isaías en Florida seguía siendo solo la declaración de emergencia EM-3655-FL — no un desastre mayor — así que el registro de Individual Assistance para hogares aún no estaba abierto. Miami-Dade, Broward y Monroe no figuran en las listas solicitadas.',
          why: 'Si familiares en el Panhandle preguntan por “dinero de FEMA”, espere la aprobación federal y una ventana de registro abierta antes de solicitar en DisasterAssistance.gov o al 800-621-3362; siga presentando primero el reclamo al seguro y fotografíe los daños ahora.',
          sources: [EOG_MAJOR, FDEM_ICYMI, FOX13_MAJOR, FEMA_3655, FEMA_EM_PR],
        },
        {
          headline:
            'El Estado se asocia con Emergency RV para vivienda temporal mientras se decide la ayuda federal',
          summary:
            'El mismo anuncio del 16 de octubre indicó que Florida se asocia con Emergency RV para ofrecer refugio temporal a floridanos desplazados por el huracán Isaías, con prioridad a hogares cuyos daños fueron más graves. La página de actualizaciones de Isaías de FDEM dirige a las familias desplazadas a EmergencyRV.org para informarse y solicitar. La organización sin fines de lucro indica que presta o dona casas rodantes como vivienda de transición — a menudo para que la familia pueda permanecer en su propia propiedad mientras reconstruye — y que la elegibilidad se confirma caso por caso. El programa busca ayudar ahora; no sustituye Individual Assistance federal si más adelante se aprueba.',
          why: 'Hogares desplazados en el Panhandle pueden iniciar una solicitud en EmergencyRV.org mientras la petición de desastre mayor está pendiente; conserve el reclamo de seguro y las fotos del daño para cualquier trámite de vivienda o de FEMA.',
          sources: [EOG_MAJOR, FDEM_ISAIAS, EMERGENCY_RV, FLVOICE],
        },
        {
          headline:
            'Actualización: la asunción de líneas personales de Citizens es el martes 20 de octubre — esté atento a los avisos',
          summary:
            'La próxima asunción de despoblación de líneas personales de Citizens es el martes 20 de octubre. Las cartas de elección se enviaron el 27 de agosto; el plazo para que el asegurado eligiera fue el lunes 5 de octubre. Quienes no registraron una elección fueron asignados, en general, a una compañía de takeout seleccionada (a menudo la de prima estimada más baja entre ofertas aprobadas). El día de la asunción, los asegurados afectados suelen recibir un Notice of Assumption and Nonrenewal más un Certificate of Assumption (o un aviso de asunción no exitosa). No hay una ventana de 30 días para “volver a Citizens” después de la asunción; si la oferta está generalmente dentro del 20% de la renovación estimada de Citizens, quedarse con Citizens no está disponible. La página de compañías de takeout de la OIR lista las aseguradoras aprobadas para esta ronda — aquí no nombramos aseguradoras privadas.',
          why: 'Si usted o un cliente tuvo un paquete de takeout de Citizens, revise el correo y la cuenta de Citizens esta semana en busca de papeles de asunción, compare la oferta con sus necesidades y llame a su agente antes de ignorar un aviso.',
          sources: [CITIZENS_CAL, CITIZENS_DEPOP, CITIZENS_A3423, OIR_TAKEOUT],
        },
        {
          headline:
            'Actualización: la audiencia de tarifas de compensación laboral sigue el 27 de octubre — el testimonio pericial debe prepresentarse el martes',
          summary:
            'La Oficina de Regulación de Seguros de Florida celebrará una audiencia pública virtual de tarifas el martes 27 de octubre a las 10 a.m. hora del Este sobre la propuesta del National Council on Compensation Insurance de una disminución promedio general del 7,4% en las tarifas de compensación laboral del mercado voluntario, vigente el 1 de enero de 2027. Quien quiera presentar testimonio pericial debe prepresentar el testimonio escrito ante la OIR a más tardar el martes 20 de octubre; la página de la audiencia advierte que los peritos que no cumplan ese plazo pueden quedar impedidos de declarar. Los comentarios públicos por escrito siguen abiertos a ratehearings@floir.com (asunto: “National Council on Compensation Insurance”) hasta el 10 de noviembre a las 5 p.m. hora del Este. La OIR fija la tarifa final cuando cierra el expediente.',
          why: 'Empleadores y agentes de Florida que quieran declarar como peritos en la audiencia del 27 de octubre necesitan el testimonio escrito archivado para el 20 de octubre; el resto puede enviar comentarios por correo hasta el 10 de noviembre.',
          sources: [OIR_NCCI],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Trópico, datos de reclamos y hubs',
          text: 'Pronóstico del NHC del sábado a las 8 a.m. hora del Este: no se espera formación de ciclones tropicales en los próximos 7 días. Sin amenaza para Florida. La página pública de reportes de catástrofe de la OIR aún no mostraba agregados estatales de reclamos por Isaías esta mañana. La ventana publicada de los Insurance Assistance Hubs del DFS en Destin y Pensacola (11–16 de octubre) ya terminó; llame al 1-877-693-5236 para ayuda con reclamos y revise la página de Isaías de FDEM por Multi-Agency Resource Centers que siguen listados en varios condados del Panhandle. Mareas altas (king tides) en Miami-Dade: 24–30 de octubre.',
        },
      ],
      extraSources: [NHC_TWO, OIR_CAT, DFS_RESOURCES, FDEM_ISAIAS, MIAMI_KING],
    },
    ru: {
      title:
        'Страховые новости Флориды, 17 октября 2026: запрос major disaster, временное жильё Emergency RV и assumption Citizens во вторник',
      metaTitle: 'Страховые новости 17 окт. 2026: major disaster | M&K',
      description:
        'Сегодня: Флорида запросила major disaster declaration и Individual Assistance для восьми округов Panhandle, партнёрство с Emergency RV по временному жилью, assumption Citizens 20 октября — через три дня.',
      ogAlt:
        'Планшет с печатью запроса, дом на колёсах для временного жилья и календарь с датой assumption',
      intro:
        'Четыре новости для владельцев жилья, водителей и малого бизнеса в Южной Флориде: на Panhandle продолжается восстановление после урагана «Исайас». Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: Флорида запросила major disaster declaration — Individual Assistance ещё не открыта',
          summary:
            '16 октября губернатор Ron DeSantis объявил, что Florida Division of Emergency Management подала запрос на presidential Major Disaster Declaration после урагана «Исайас». Запрос предусматривает Public Assistance для 15 округов северо-запада Флориды (Bay, Calhoun, Escambia, Franklin, Gadsden, Gulf, Holmes, Jackson, Jefferson, Liberty, Okaloosa, Santa Rosa, Wakulla, Walton и Washington) и Individual Assistance для жителей восьми из них: Bay, Escambia, Gulf, Holmes, Okaloosa, Santa Rosa, Walton и Washington. Утром в субботу запись FEMA по «Исайасу» во Флориде оставалась только emergency declaration EM-3655-FL — не major disaster — поэтому регистрация Individual Assistance для домохозяйств ещё не открыта. Miami-Dade, Broward и Monroe в запрошенных списках нет.',
          why: 'Если родственники на Panhandle спрашивают про «деньги FEMA», дождитесь федерального одобрения и открытого окна регистрации, прежде чем подавать на DisasterAssistance.gov или по телефону 800-621-3362; сначала продолжайте страховой убыток и фотографируйте ущерб сейчас.',
          sources: [EOG_MAJOR, FDEM_ICYMI, FOX13_MAJOR, FEMA_3655, FEMA_EM_PR],
        },
        {
          headline:
            'Штат партнёрится с Emergency RV по временному жилью, пока федеральная помощь на рассмотрении',
          summary:
            'В том же объявлении от 16 октября сказано, что Флорида сотрудничает с Emergency RV, чтобы предоставить временное жильё флоридцам, переселённым из-за «Исайаса», с приоритетом для домов с наиболее серьёзным ущербом. Страница обновлений FDEM по «Исайасу» направляет семьи на EmergencyRV.org, чтобы узнать больше и подать заявку. Некоммерческая организация сообщает, что выдаёт RV в долг или в дар как переходное жильё — часто чтобы семья могла остаться на своём участке, пока идёт ремонт — и что eligibility подтверждается индивидуально. Программа нужна сейчас; она не заменяет федеральную Individual Assistance, если её позже одобрят.',
          why: 'Переселённые семьи на Panhandle могут начать заявку на EmergencyRV.org, пока major-disaster request на рассмотрении; держите под рукой страховой убыток и фото ущерба для жилья или FEMA.',
          sources: [EOG_MAJOR, FDEM_ISAIAS, EMERGENCY_RV, FLVOICE],
        },
        {
          headline:
            'Обновление: assumption personal lines Citizens — во вторник, 20 октября; следите за уведомлениями',
          summary:
            'Следующий personal-lines depopulation assumption Citizens — во вторник, 20 октября. Письма о выборе отправили 27 августа; дедлайн выбора страхователя был в понедельник, 5 октября. Тем, кто не зарегистрировал выбор, полис обычно назначили выбранной takeout-компании (часто с самой низкой estimated premium среди одобренных предложений). В день assumption затронутые страхователи обычно получают Notice of Assumption and Nonrenewal плюс Certificate of Assumption (или уведомление о неуспешном assumption). После assumption нет 30-дневного окна «вернуться в Citizens»; если предложение обычно в пределах 20% от estimated renewal Citizens, остаться в Citizens нельзя. На странице takeout companies OIR перечислены страховщики, одобренные на этот раунд — частных перевозчиков мы здесь не называем.',
          why: 'Если у вас или клиента был takeout-пакет Citizens, на этой неделе проверьте почту и аккаунт Citizens на бумаги assumption, сравните предложение с вашими нуждами и позвоните агенту, прежде чем игнорировать уведомление.',
          sources: [CITIZENS_CAL, CITIZENS_DEPOP, CITIZENS_A3423, OIR_TAKEOUT],
        },
        {
          headline:
            'Обновление: слушание по тарифам workers’ comp по-прежнему 27 октября — expert testimony нужно prefile до вторника',
          summary:
            'Управление страхового регулирования Флориды проведёт виртуальное публичное слушание по тарифам во вторник, 27 октября, в 10:00 Eastern по предложению National Council on Compensation Insurance о среднем снижении на 7,4% voluntary-market тарифов workers’ compensation с 1 января 2027. Кто хочет дать expert testimony, должен заранее подать письменные показания в OIR не позднее вторника, 20 октября; на странице слушания предупреждают, что экспертов без prefile могут не допустить к выступлению. Письменные публичные комментарии принимают на ratehearings@floir.com (тема: «National Council on Compensation Insurance») до 10 ноября, 17:00 Eastern. Итоговый тариф устанавливает OIR после закрытия record.',
          why: 'Работодателям и агентам Флориды, которые хотят выступить экспертами на слушании 27 октября, нужно подать письменные показания к 20 октября; остальные могут писать комментарии до 10 ноября.',
          sources: [OIR_NCCI],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Тропики, данные по убыткам и хабы',
          text: 'Утренний обзор NHC в субботу в 8:00 ET: образование тропических циклонов в ближайшие 7 дней не ожидается. Угрозы Флориде нет. На публичной странице catastrophe reporting OIR этим утром по-прежнему не было сводных штатных цифр по убыткам «Исайаса». Опубликованное окно Insurance Assistance Hubs DFS в Destin и Pensacola (11–16 октября) закончилось; звоните 1-877-693-5236 за помощью по убытку и смотрите страницу FDEM по «Исайасу» — там ещё указаны Multi-Agency Resource Centers в нескольких округах Panhandle. King tides в Miami-Dade: 24–30 октября.',
        },
      ],
      extraSources: [NHC_TWO, OIR_CAT, DFS_RESOURCES, FDEM_ISAIAS, MIAMI_KING],
    },
  },
};
