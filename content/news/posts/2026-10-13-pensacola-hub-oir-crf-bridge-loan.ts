import type { NewsEdition, NewsSource } from '../types';

// Edition for Tuesday, Oct. 13, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const DFS_RESOURCES: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-13',
  url: 'https://myfloridacfo.com/division/consumers/storm/resources',
  title: 'Hurricane Resources — Insurance Assistance Hub locations',
};

const EOG_RECOVERY: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-10-12',
  url: 'https://flgov.com/eog/news/press/2026/governor-ron-desantis-issues-updates-state-response-and-recovery-efforts-2',
  title: 'Governor Ron DeSantis Issues Updates on State Response and Recovery Efforts for Hurricane Isaias',
};

const OIR_DATACALL: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-12',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/12/data-call-notice-hurricane-isaias-catastrophe-reporting',
  title: 'DATA CALL NOTICE: Hurricane Isaias Catastrophe Reporting',
};

const OIR_CAT: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-13',
  url: 'https://www.floir.gov/tools-and-data/catastrophe-reporting',
  title: 'Catastrophe Reporting',
};

const NHC_ADV15: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-10',
  url: 'https://www.nhc.noaa.gov/archive/2026/al09/al092026.public.015.shtml',
  title: 'Post-Tropical Cyclone Isaias Advisory Number 15',
};

const FS_627_4025: NewsSource = {
  name: 'The Florida Senate (Florida Statutes)',
  date: '2026-10-13',
  url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.4025',
  title: 'Section 627.4025, Florida Statutes: Residential coverage and hurricane coverage defined',
};

const FLCOMMERCE_EBL: NewsSource = {
  name: 'FloridaCommerce (CareerSource Gulf Coast reprint)',
  date: '2026-10-11',
  url: 'https://careersourcegc.com/floridacommerce-activates-the-florida-small-business-emergency-bridge-loan-program-making-10-million-available-for-businesses-impacted-by-hurricane-isaias/',
  title: 'FloridaCommerce Activates the Florida Small Business Emergency Bridge Loan Program',
};

const FLJOBS_EBL: NewsSource = {
  name: 'FloridaCommerce / FloridaJobs.org',
  date: '2026-10-13',
  url: 'https://www.floridajobs.org/DisasterRecovery/EBL',
  title: 'Florida Small Business Emergency Bridge Loan',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-13',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Atlantic Tropical Weather Outlook, 8 a.m. EDT Tue Oct 13, 2026',
};

export const edition: NewsEdition = {
  slug: '2026-10-13-pensacola-hub-oir-crf-bridge-loan',
  datePublished: '2026-10-13',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 13, 2026: Pensacola insurance hub opens, OIR starts Isaias claim reporting, the hurricane deductible closes, and small-business bridge loans launch',
      metaTitle: 'Insurance News Oct. 13, 2026: Pensacola Hub | M&K Agency',
      description:
        'Today: DFS confirms a Pensacola Isaias insurance hub, OIR sets claim data-call deadlines, Florida’s hurricane-deductible window has closed, and a state small-business bridge loan opens.',
      ogAlt: 'A recovery help desk, claim forms, a deductible page and a small-business loan checklist',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners as Panhandle recovery from Hurricane Isaias continues. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'DFS confirms Pensacola insurance assistance hub alongside Destin',
          summary:
            'The Florida Department of Financial Services now lists a second Insurance Assistance Hub for Hurricane Isaias in Pensacola at the University of West Florida, 11000 University Parkway, Parking Lot B, Pensacola, FL 32514. Both the Pensacola and Destin hubs (Morgan Sports Complex, 4200 Indian Bayou Trail) are scheduled Monday, Oct. 12, through Friday, Oct. 16, generally 9 a.m. to 4 p.m. Central; Pensacola’s first day on Oct. 12 ran 1–4 p.m. Central. Policyholders can meet insurer representatives and Division of Consumer Services staff in person about storm-damage claims; bring photo ID, policy information and damage photos if you have them. If you cannot visit, call 1-877-693-5236 (1-877-MY-FL-CFO). Report suspected fraud at 1-800-378-0445 or FraudFreeFlorida.com.',
          why: 'Panhandle residents — and anyone with family or rental property there — now have a second official address for in-person claims help through Oct. 16. Verify any contractor’s license before you sign.',
          sources: [DFS_RESOURCES, EOG_RECOVERY],
        },
        {
          headline: 'OIR orders Isaias catastrophe claim reporting due Oct. 13 and Oct. 15',
          summary:
            'On Oct. 12 the Florida Office of Insurance Regulation issued a formal data-call notice requiring authorized property and related insurers to file a simplified 2026 Catastrophe Reporting Form for Hurricane Isaias through the Insurance Regulation Filing System. Filings are due by noon Eastern on Tuesday, Oct. 13, and again on Thursday, Oct. 15; reporting is cumulative and must include all claims as of each deadline. Insurers with no Florida policies or no claims for the event must still submit a “No Data” filing. As of this morning, OIR’s public catastrophe-reporting page still showed no statewide aggregate Isaias claim totals — those figures typically appear after the first rounds of filings.',
          why: 'Statewide claim counts help regulators watch how insurers handle Isaias losses. If you have storm damage, file promptly and keep records; South Florida was not in the landfall path, but Panhandle claims are what this call tracks.',
          sources: [OIR_DATACALL, OIR_CAT],
        },
        {
          headline: 'Update: Isaias hurricane-deductible period closed early today',
          summary:
            'NHC Advisory 15 at 4 a.m. CDT on Oct. 10 reported Post-Tropical Cyclone Isaias and said no watches or warnings remained after the last Florida storm-surge and tropical-storm warnings were discontinued. Under section 627.4025, Florida Statutes, the residential “hurricane” period begins when a hurricane warning is issued for any part of Florida and ends 72 hours after the last hurricane watch or hurricane warning for any part of the state ends. Counting from that Oct. 10 morning advisory, the Isaias hurricane-deductible window closed early Tuesday, Oct. 13 — about 4 a.m. CDT / 5 a.m. ET.',
          why: 'Damage tied to Isaias still falls under the hurricane deductible on your declarations page. A separate weather event after the window closed usually uses your regular deductible — confirm the wording with your agent if you are unsure.',
          sources: [NHC_ADV15, FS_627_4025],
        },
        {
          headline: 'State activates $10 million small-business bridge loans for Isaias counties',
          summary:
            'FloridaCommerce on Oct. 11 activated the Florida Small Business Emergency Bridge Loan Program with $10 million for businesses that had economic injury or physical damage from Hurricane Isaias. Eligible counties include the Panhandle and Big Bend impact area plus Hillsborough, Pasco and Pinellas; sole proprietors may apply. The program offers short-term, interest-free loans of up to $100,000 (up to $150,000 for agriculture and aquaculture) meant to bridge the gap until longer-term recovery funding — such as insurance claim proceeds or federal or commercial loans — is in place. Applications run through Nov. 25, 2026, or until funds are exhausted, at FloridaJobs.org/DisasterRecovery/EBL; program phone 1-833-832-4494.',
          why: 'If you own a small business in a listed county and lost income or property to Isaias, this state loan can help while an insurance claim or other financing is pending. Miami-Dade, Broward and Monroe are not on the eligible list.',
          sources: [FLCOMMERCE_EBL, FLJOBS_EBL, EOG_RECOVERY],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Tropics check',
          text: 'NHC’s Tuesday 8 a.m. EDT outlook shows a low-pressure trough several hundred miles west-northwest of the Cabo Verde Islands with near 0% chance of development over the next 48 hours and 7 days as upper-level winds stay strong. No Florida threat. FEMA’s Isaias help for Florida remains an emergency declaration (public assistance for designated counties); no major disaster declaration with Individual Assistance for households had been announced as of this morning.',
        },
      ],
      extraSources: [NHC_TWO],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 13 de octubre de 2026: abre el centro de Pensacola, la OIR pide datos de reclamos por Isaías, cierra el deducible por huracán y llegan préstamos puente para pequeños negocios',
      metaTitle: 'Noticias de seguros, 13 oct. 2026: hub en Pensacola | M&K',
      description:
        'Hoy: el DFS confirma un centro de seguros por Isaías en Pensacola, la OIR fija plazos de reporte de reclamos, ya cerró la ventana del deducible por huracán y arranca un préstamo puente estatal para pequeños negocios.',
      ogAlt: 'Un mostrador de ayuda, formularios de reclamo, una página de deducible y una lista de préstamo',
      intro:
        'Cuatro novedades para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida, mientras sigue la recuperación en el Panhandle tras el huracán Isaías. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline: 'El DFS confirma un centro de asistencia de seguros en Pensacola, además del de Destin',
          summary:
            'El Departamento de Servicios Financieros de Florida ahora publica un segundo Insurance Assistance Hub por el huracán Isaías en Pensacola, en la University of West Florida, 11000 University Parkway, Parking Lot B, Pensacola, FL 32514. Los centros de Pensacola y Destin (Morgan Sports Complex, 4200 Indian Bayou Trail) están programados del lunes 12 al viernes 16 de octubre, en general de 9 a.m. a 4 p.m. hora del Centro; el primer día en Pensacola (12 de octubre) fue de 1 a 4 p.m. hora del Centro. Los asegurados pueden reunirse en persona con representantes de aseguradoras y personal de Consumer Services sobre reclamos por daños; lleve identificación con foto, datos de la póliza y fotos del daño si las tiene. Si no puede ir, llame al 1-877-693-5236 (1-877-MY-FL-CFO). Denuncie fraude sospechoso al 1-800-378-0445 o en FraudFreeFlorida.com.',
          why: 'Quienes viven en el Panhandle — o tienen familia o una propiedad de alquiler allí — ya tienen una segunda dirección oficial para ayuda presencial con reclamos hasta el 16 de octubre. Verifique la licencia de cualquier contratista antes de firmar.',
          sources: [DFS_RESOURCES, EOG_RECOVERY],
        },
        {
          headline: 'La OIR exige reportes de reclamos por Isaías para el 13 y el 15 de octubre',
          summary:
            'El 12 de octubre la Oficina de Regulación de Seguros de Florida emitió un aviso formal de data call que obliga a las aseguradoras autorizadas de propiedad y líneas relacionadas a presentar un Catastrophe Reporting Form simplificado de 2026 por el huracán Isaías a través del Insurance Regulation Filing System. Los envíos vencen al mediodía hora del Este el martes 13 de octubre y de nuevo el jueves 15 de octubre; el reporte es acumulativo e incluye todos los reclamos a la fecha de cada plazo. Las aseguradoras sin pólizas en Florida o sin reclamos por el evento deben presentar un filing de “No Data”. Esta mañana, la página pública de reportes de catástrofe de la OIR aún no mostraba totales estatales agregados de reclamos por Isaías; esas cifras suelen aparecer tras las primeras rondas de filings.',
          why: 'Los conteos estatales ayudan a los reguladores a vigilar cómo las aseguradoras manejan las pérdidas de Isaías. Si tiene daños por la tormenta, presente el reclamo pronto y guarde registros; el sur de la Florida no estuvo en la trayectoria de aterrizaje, pero este llamado rastrea los reclamos del Panhandle.',
          sources: [OIR_DATACALL, OIR_CAT],
        },
        {
          headline: 'Actualización: el periodo del deducible por huracán de Isaías cerró temprano hoy',
          summary:
            'El aviso 15 del NHC a las 4 a.m. hora del Centro del 10 de octubre reportó a Isaías como ciclón postropical e indicó que ya no quedaban vigilancias ni avisos tras cancelar los últimos de marejada y de tormenta tropical para Florida. Según la sección 627.4025 de los Estatutos de Florida, el periodo de “huracán” en las pólizas residenciales comienza cuando se emite un aviso de huracán para cualquier parte de Florida y termina 72 horas después de que finalice la última vigilancia o aviso de huracán para cualquier parte del estado. Contando desde ese aviso de la mañana del 10 de octubre, la ventana del deducible por huracán de Isaías cerró temprano el martes 13 de octubre — cerca de las 4 a.m. hora del Centro / 5 a.m. hora del Este.',
          why: 'Los daños vinculados a Isaías siguen bajo el deducible por huracán de su página de declaraciones. Un evento meteorológico distinto después de esa ventana suele usar su deducible regular: confirme la redacción con su agente si tiene dudas.',
          sources: [NHC_ADV15, FS_627_4025],
        },
        {
          headline: 'El estado activa $10 millones en préstamos puente para pequeños negocios en condados afectados por Isaías',
          summary:
            'FloridaCommerce activó el 11 de octubre el Florida Small Business Emergency Bridge Loan Program con $10 millones para negocios que tuvieron perjuicio económico o daño físico por el huracán Isaías. Los condados elegibles incluyen el Panhandle y el Big Bend, más Hillsborough, Pasco y Pinellas; también pueden solicitar los propietarios únicos. El programa ofrece préstamos a corto plazo y sin intereses de hasta $100,000 (hasta $150,000 para agricultura y acuicultura) para cubrir la brecha hasta que llegue financiamiento a más largo plazo — por ejemplo, el pago de un reclamo de seguro u otros préstamos. Las solicitudes van hasta el 25 de noviembre de 2026, o hasta agotar fondos, en FloridaJobs.org/DisasterRecovery/EBL; teléfono del programa 1-833-832-4494.',
          why: 'Si tiene un pequeño negocio en un condado de la lista y perdió ingresos o propiedad por Isaías, este préstamo estatal puede ayudar mientras espera un reclamo de seguro u otro financiamiento. Miami-Dade, Broward y Monroe no están en la lista elegible.',
          sources: [FLCOMMERCE_EBL, FLJOBS_EBL, EOG_RECOVERY],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Chequeo del trópico',
          text: 'El pronóstico del NHC del martes a las 8 a.m. hora del Este muestra una vaguada de baja presión a varios cientos de millas al oeste-noroeste de las islas de Cabo Verde, con cerca de 0% de probabilidad de desarrollo en las próximas 48 horas y 7 días ante vientos en altura fuertes. Sin amenaza para Florida. La ayuda de FEMA por Isaías en Florida sigue siendo una declaración de emergencia (asistencia pública para condados designados); esta mañana no se había anunciado una declaración de desastre mayor con Individual Assistance para hogares.',
        },
      ],
      extraSources: [NHC_TWO],
    },
    ru: {
      title:
        'Страховые новости Флориды, 13 октября 2026: хаб в Пенсаколе, OIR собирает данные по убыткам «Исайаса», ураганная франшиза закрылась, и штат открыл bridge-кредиты для малого бизнеса',
      metaTitle: 'Страховые новости 13 окт. 2026: хаб в Пенсаколе | M&K',
      description:
        'Сегодня: DFS подтвердил страховой хаб по «Исайасу» в Пенсаколе, OIR задал сроки data call по убыткам, ураганное окно франшизы закрылось, и стартовала программа bridge-кредитов для малого бизнеса.',
      ogAlt: 'Стойка помощи, бланки убытков, страница франшизы и чеклист кредита для бизнеса',
      intro:
        'Четыре новости для владельцев жилья, водителей и малого бизнеса в Южной Флориде: на Panhandle продолжается восстановление после урагана «Исайас». Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: 'DFS подтвердил страховой хаб помощи в Пенсаколе — рядом с хабом в Дестине',
          summary:
            'Департамент финансовых услуг Флориды теперь указывает второй Insurance Assistance Hub по урагану «Исайас» в Пенсаколе: University of West Florida, 11000 University Parkway, Parking Lot B, Pensacola, FL 32514. Хабы в Пенсаколе и Дестине (Morgan Sports Complex, 4200 Indian Bayou Trail) запланированы с понедельника 12 по пятницу 16 октября, обычно с 9:00 до 16:00 по центральному времени; в первый день в Пенсаколе (12 октября) работали с 13:00 до 16:00 CT. Страхователи могут лично встретиться с представителями страховщиков и сотрудниками Division of Consumer Services по убыткам от шторма; возьмите фото ID, данные полиса и фото ущерба, если есть. Если приехать нельзя, звоните 1-877-693-5236 (1-877-MY-FL-CFO). О подозрении на мошенничество — 1-800-378-0445 или FraudFreeFlorida.com.',
          why: 'Жители Panhandle — и те, у кого там родственники или арендное жильё — получили второй официальный адрес для очной помощи с заявлениями до 16 октября. Перед подписью договора проверьте лицензию подрядчика.',
          sources: [DFS_RESOURCES, EOG_RECOVERY],
        },
        {
          headline: 'OIR требует отчётность по убыткам «Исайаса» к 13 и 15 октября',
          summary:
            '12 октября Управление страхового регулирования Флориды опубликовало официальный data call: уполномоченные страховщики имущества и смежных линий должны подать упрощённую форму Catastrophe Reporting Form 2026 по урагану «Исайас» через Insurance Regulation Filing System. Срок — до полудня по восточному времени во вторник 13 октября и снова в четверг 15 октября; отчётность накопительная и должна включать все заявления на каждую дату. Страховщики без полисов во Флориде или без убытков по событию всё равно подают filing «No Data». Этим утром на публичной странице catastrophe reporting OIR ещё не было сводных штатных цифр по «Исайасу» — они обычно появляются после первых раундов filings.',
          why: 'Штатные подсчёты помогают регуляторам следить, как страховщики обрабатывают убытки «Исайаса». При ущербе от шторма подавайте заявление быстро и храните документы; Южная Флорида не была на пути выхода на сушу, но этот call отслеживает убытки Panhandle.',
          sources: [OIR_DATACALL, OIR_CAT],
        },
        {
          headline: 'Обновление: ураганный период франшизы по «Исайасу» закрылся рано утром сегодня',
          summary:
            'В advisory № 15 NHC в 4:00 по центральному времени 10 октября «Исайас» уже был посттропическим циклоном, и для Флориды не осталось действующих watch/warning после снятия последних предупреждений о нагоне и тропическом шторме. По статье 627.4025 Законов Флориды «ураганный» период для жилых полисов начинается с hurricane warning для любой части штата и заканчивается через 72 часа после снятия последнего hurricane watch или hurricane warning для любой части Флориды. Отсчитывая от того утреннего advisory 10 октября, окно ураганной франшизы по «Исайасу» закрылось рано утром во вторник, 13 октября — около 4:00 CDT / 5:00 ET.',
          why: 'Ущерб, связанный с «Исайасом», по-прежнему идёт под ураганную франшизу со страницы деклараций. Отдельное погодное событие после закрытия окна обычно считается по обычной франшизе — уточните формулировки у агента, если не уверены.',
          sources: [NHC_ADV15, FS_627_4025],
        },
        {
          headline: 'Штат активировал $10 млн bridge-кредитов для малого бизнеса в округах, затронутых «Исайасом»',
          summary:
            'FloridaCommerce 11 октября активировала Florida Small Business Emergency Bridge Loan Program: $10 млн для бизнеса с экономическим ущербом или физическими повреждениями от урагана «Исайас». В списке округов — Panhandle и Big Bend, а также Hillsborough, Pasco и Pinellas; sole proprietors тоже могут подавать. Программа даёт краткосрочные беспроцентные кредиты до $100 000 (до $150 000 для сельского хозяйства и аквакультуры), чтобы «перекинуть мост» до более долгосрочного финансирования — например, выплаты по страховому заявлению или федеральных/коммерческих кредитов. Заявки — до 25 ноября 2026 или пока не закончатся средства, на FloridaJobs.org/DisasterRecovery/EBL; телефон программы 1-833-832-4494.',
          why: 'Если у вас малый бизнес в одном из перечисленных округов и «Исайас» ударил по доходам или имуществу, этот штатный кредит может помочь, пока идёт страховое заявление или другое финансирование. Miami-Dade, Broward и Monroe в списке eligible нет.',
          sources: [FLCOMMERCE_EBL, FLJOBS_EBL, EOG_RECOVERY],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Тропики',
          text: 'Утренний обзор NHC во вторник в 8:00 ET показывает ложбину низкого давления в нескольких сотнях миль к западу-северо-западу от островов Кабо-Верде: почти 0% шансов развития на 48 часов и на 7 дней при сильных верхних ветрах. Угрозы Флориде нет. Помощь FEMA по «Исайасу» во Флориде по-прежнему в формате emergency declaration (public assistance для указанных округов); этим утром major disaster declaration с Individual Assistance для домохозяйств не объявляли.',
        },
      ],
      extraSources: [NHC_TWO],
    },
  },
};
