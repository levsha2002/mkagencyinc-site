import type { NewsEdition, NewsSource } from '../types';

// Edition for Tuesday, Nov. 24, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_FFA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-24',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=FFA&format=txt&version=1&glossary=0',
  title: 'Flood Watch, 4:16 a.m. EST Tue Nov 24, 2026',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-23',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=txt&version=1&glossary=0',
  title: 'Coastal Hazard Message (Coastal Flood Statement through Thursday morning), 10:12 p.m. EST Mon Nov 23, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-24',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:49 a.m. EST Tue Nov 24, 2026',
};

const GOV_UPDATE: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-11-23',
  url: 'https://www.flgov.com/eog/news/press/2026/governor-ron-desantis-issues-updates-state-response-and-recovery-efforts-november',
  title: 'Governor Ron DeSantis Issues Updates on State Response and Recovery Efforts for November Fall Flooding',
};

const HERALD_MDD: NewsSource = {
  name: 'Miami Herald',
  date: '2026-11-23',
  url: 'https://www.miamiherald.com/news/politics-government/state-politics/article318216368.html',
  title: 'DeSantis asks FEMA to unlock funds for flooded South Florida homeowners',
};

const FDEM_FALL: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-24',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding: Multi-Agency Resource Centers (checked Nov. 24, 2026)',
};

const DFS_FLOOD: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-11-24',
  url: 'https://www.myfloridacfo.com/division/consumers/understanding-insurance/flood-insurance-overview',
  title: 'Flood Insurance Overview: Claims (checked Nov. 24, 2026)',
};

const FDEM_EBL: NewsSource = {
  name: 'FloridaCommerce (via Florida Division of Emergency Management)',
  date: '2026-11-23',
  url: 'https://www.floridadisaster.org/news-media/news/icymi-floridacommerce-activates-the-florida-small-business-emergency-bridge-loan-program-making-$10-million-available-for-businesses-impacted-by-the-2026-fall-flooding/',
  title:
    'FloridaCommerce Activates the Florida Small Business Emergency Bridge Loan Program, Making $10 Million Available for Businesses Impacted by the 2026 Fall Flooding',
};

const FC_EBL: NewsSource = {
  name: 'FloridaCommerce',
  date: '2026-11-24',
  url: 'https://www.floridajobs.org/DisasterRecovery/EBL',
  title: 'Florida Small Business Emergency Bridge Loan Program (checked Nov. 24, 2026)',
};

const HWD_SCAM: NewsSource = {
  name: 'City of Hollywood',
  date: '2026-11-23',
  url: 'https://www.hollywoodfl.org/CivicAlerts.aspx?AID=1904',
  title: 'Scam Alert',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-24',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Tue Nov 24, 2026',
};

const WEATHER = [NWS_MFL_FFA, NWS_MFL_CFW, NWS_MFL_AFD];
const DISASTER = [GOV_UPDATE, HERALD_MDD, FDEM_FALL, DFS_FLOOD];
const LOANS = [FDEM_EBL, FC_EBL];
const SCAMS = [HWD_SCAM];
const BOX = [FEMA_REAUTH, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-24-flood-watch-disaster-request-bridge-loans-scams',
  datePublished: '2026-11-24',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 24, 2026: a Flood Watch for tonight and Wednesday, a new state request for a federal disaster declaration, emergency bridge loans for flooded businesses, and a warning about recovery scams',
      metaTitle: 'Insurance News Nov. 24, 2026: Flood Watch, Disaster Request, Loans | M&K',
      description:
        'Flood Watch for Miami-Dade, Broward and Palm Beach through Wednesday night, Florida seeks a new federal disaster declaration, $10 million in bridge loans, and a scam alert.',
      ogAlt:
        'A rain cloud over a car standing in floodwater, a columned government building with a checked document, a small storefront under a green arched bridge, and a house with a padlock under a yellow warning sign',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners on the Tuesday before Thanksgiving. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: Flood Watch for Miami-Dade, Broward and Palm Beach from this evening through late Wednesday night, with minor coastal flooding possible through Thursday',
          summary:
            'NWS Miami has put the **metro and coastal areas of Miami-Dade, Broward and Palm Beach under a Flood Watch from Tuesday evening through late Wednesday night**. Forecasters expect **2 to 3 inches of rain**, with a reasonable worst case of 4 to 6 inches, and note that the ground is already saturated: rain over the last 30 days has run 400% to 600% of normal in parts of Palm Beach and Broward and 200% to 300% in parts of Miami-Dade, so it will not take much to cause flooding in poor-drainage and urban areas. Severe storms are also possible Wednesday, and a **Coastal Flood Statement** for coastal Palm Beach, Broward and Miami-Dade, as well as Far South Miami-Dade, now runs **through Thursday morning**, with some water on low-lying roads and property around high tide. Drier, cooler air is expected Friday and Saturday.',
          why: 'Before the rain starts, move cars off low streets and out of spots that flooded last week, and never drive through standing water: flood damage to a car is covered only if you carry comprehensive, and standard homeowners policies exclude flood, which needs a separate flood policy. If you are on the road for Thanksgiving on Wednesday, allow extra time. See [king tides and flood insurance](/en/blog/king-tides-flood-insurance-miami-dade), [flood insurance](/en/flood-insurance-homestead-fl) and [Thanksgiving weekend driving](/en/blog/thanksgiving-holiday-driving-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'Update: Florida is seeking a new federal disaster declaration after last week’s flooding, and a state recovery center is set to open in Dania Beach',
          summary:
            'At a briefing Monday, Gov. Ron DeSantis said the state is **submitting an additional Major Disaster Declaration request** for communities hit by the latest flooding; the Miami Herald reports it covers last week’s South Florida flooding and that FEMA called both this request and the earlier one for Brevard and other counties “currently under review.” No federal declaration has been announced yet, and federal assistance for households is available only after the president approves one. Meanwhile, the state lists a **Multi-Agency Resource Center at the Dania Beach City Hall parking garage, 49 Park Ave. E.**, opening **Friday, Nov. 27**, 7 a.m. to 7 p.m., where residents can meet state agencies and nonprofit partners; the state asks visitors to bring ID, proof of residence, insurance information and documents about their losses. All centers are closed on Thanksgiving Day.',
          why: 'Do not wait for a federal decision to start your insurance claim. If you have flood insurance, report the loss to your flood insurer promptly; Florida’s Department of Financial Services notes that NFIP policyholders must also submit a signed Proof of Loss within 60 days after the flood. Keep photos, receipts and a list of damaged items, because the same records help with both an insurance claim and any later aid application. See [storm claim checklist](/en/blog/hurricane-claim-checklist-florida), [claim timeline](/en/blog/hurricane-claim-timeline-florida) and [homeowners insurance in Broward County](/en/homeowners-insurance-broward-county-fl).',
          sources: DISASTER,
        },
        {
          headline:
            'New: $10 million in state emergency bridge loans for small businesses hurt by the fall flooding, including in Miami-Dade and Broward',
          summary:
            'FloridaCommerce has activated the **Florida Small Business Emergency Bridge Loan Program** with **$10 million** for businesses affected by the 2026 fall flooding. Small businesses, including sole proprietors, in 21 counties can apply, among them **Miami-Dade, Broward, Palm Beach and Monroe**. The loans are short-term and zero-interest, **up to $100,000** (up to $150,000 for agriculture and aquaculture businesses), and are meant to cover the gap until longer-term funding such as federal or commercial loans or insurance claims comes through. They are **not grants and must be repaid**; applications are open **through Jan. 1, 2027**, or until the money runs out, at FloridaJobs.org/DisasterRecovery/EBL or by phone at 833-832-4494.',
          why: 'A bridge loan can keep payroll and rent going, but it does not replace your insurance: report flood or storm damage to your commercial property or flood insurer now, with photos and an inventory. Many commercial property policies exclude flood, and business income coverage, if you have it, usually depends on covered physical damage, so ask your agent what your policy actually pays before you count on it. See [commercial insurance](/en/commercial-insurance-florida-city) and [water backup vs. flood insurance](/en/blog/water-backup-vs-flood-insurance-florida).',
          sources: LOANS,
        },
        {
          headline:
            'New: Hollywood warns flood victims about door-to-door recovery scams',
          summary:
            'The City of Hollywood is warning residents that scammers often go door to door after disasters, offering help or posing as legitimate recovery organizations. The city advises verifying identification before letting anyone onto your property, being cautious with unsolicited offers of cleanup, repairs or disaster assistance, never sharing personal or banking information, and **not paying cash before any work is done**. Suspected fraud can be reported to the Florida Attorney General at 1-866-9NO-SCAM, through the NO SCAM app or at MyFloridaLegal.com.',
          why: 'Before you sign anything that mentions your insurance claim, call your insurer or agent and read the contract carefully, and check that a contractor is licensed with the Florida Department of Business and Professional Regulation. Your insurer will arrange its own adjuster, so treat anyone who shows up uninvited and asks for money or your policy details with caution. See [storm claim checklist](/en/blog/hurricane-claim-checklist-florida) and [homeowners insurance in Hollywood](/en/homeowners-insurance-hollywood-fl).',
          sources: SCAMS,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program (NFIP) is authorized **through 11:59 p.m. on Dec. 11** (17 days away), and FEMA’s reauthorization page has not changed since Sept. 28; a new NFIP policy generally takes 30 days to start, so it will not cover this week’s rain. The National Hurricane Center expects no tropical cyclone formation in the next seven days, and the Atlantic hurricane season ends Monday, Nov. 30.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 24 de noviembre de 2026: vigilancia de inundaciones para esta noche y el miércoles, nueva solicitud estatal de declaración federal de desastre, préstamos puente de emergencia para negocios inundados y alerta sobre estafas en la recuperación',
      metaTitle: 'Noticias de seguros 24 nov. 2026: inundaciones, desastre, préstamos | M&K',
      description:
        'Vigilancia de inundaciones en Miami-Dade, Broward y Palm Beach hasta el miércoles, Florida pide una nueva declaración federal, $10 millones en préstamos puente y una alerta de estafas.',
      ogAlt:
        'Una nube de lluvia sobre un auto en agua de inundación, un edificio gubernamental con columnas y un documento aprobado, un pequeño local comercial bajo un puente verde en arco y una casa con candado bajo una señal amarilla de advertencia',
      intro:
        'Cuatro actualizaciones para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida en este martes previo a Acción de Gracias. Cada noticia está resumida con nuestras propias palabras, con enlace a la fuente original.',
      items: [
        {
          headline:
            'Actualización: vigilancia de inundaciones para Miami-Dade, Broward y Palm Beach desde esta noche hasta la noche del miércoles, con posibles inundaciones costeras menores hasta el jueves',
          summary:
            'El NWS de Miami emitió una **vigilancia de inundaciones (Flood Watch) para las zonas metropolitanas y costeras de Miami-Dade, Broward y Palm Beach desde la tarde del martes hasta la noche del miércoles**. Se esperan **de 2 a 3 pulgadas de lluvia**, y en el peor escenario razonable de 4 a 6, sobre un suelo ya saturado: en los últimos 30 días ha llovido entre 400% y 600% de lo normal en partes de Palm Beach y Broward, y entre 200% y 300% en partes de Miami-Dade, así que no hará falta mucha lluvia para que se inunden las zonas urbanas y de mal drenaje. El miércoles también podría haber tormentas severas, y el **aviso de inundación costera** para la costa de Palm Beach, Broward y Miami-Dade, además del extremo sur de Miami-Dade, se extiende ahora **hasta el jueves por la mañana**, con agua en calles y propiedades bajas durante la marea alta. Para el viernes y el sábado se espera un tiempo más seco y fresco.',
          why: 'Antes de que empiece a llover, saque el auto de las calles bajas y de los lugares que se inundaron la semana pasada, y nunca cruce calles inundadas: el daño por inundación al auto solo está cubierto si tiene cobertura amplia (comprehensive), y las pólizas de vivienda estándar excluyen las inundaciones, que requieren una póliza aparte. Si viaja el miércoles por Acción de Gracias, salga con tiempo. Vea [mareas reales y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade), [seguro de inundación](/es/flood-insurance-homestead-fl) y [manejar en Acción de Gracias](/es/blog/thanksgiving-holiday-driving-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'Actualización: Florida pide una nueva declaración federal de desastre por las inundaciones de la semana pasada, y abrirá un centro de recuperación en Dania Beach',
          summary:
            'En una rueda de prensa el lunes, el gobernador Ron DeSantis dijo que el estado está **presentando una nueva solicitud de Declaración de Desastre Mayor** para las comunidades afectadas por las últimas inundaciones; según el Miami Herald, abarca las inundaciones de la semana pasada en el sur de Florida, y FEMA indicó que tanto esta solicitud como la anterior, para Brevard y otros condados, están “en revisión”. Todavía no se ha anunciado ninguna declaración federal, y la ayuda federal para hogares solo llega cuando el presidente la aprueba. Mientras tanto, el estado anuncia un **Centro de Recursos Multiagencia en el estacionamiento del Ayuntamiento de Dania Beach, 49 Park Ave. E.**, que abrirá el **viernes 27 de noviembre**, de 7 a.m. a 7 p.m., para atender a residentes con agencias estatales y organizaciones sin fines de lucro; piden llevar identificación, comprobante de domicilio, datos del seguro y documentos de las pérdidas. Todos los centros cierran el Día de Acción de Gracias.',
          why: 'No espere la decisión federal para iniciar su reclamo. Si tiene seguro de inundación, reporte el daño a su aseguradora de inundación cuanto antes; el Departamento de Servicios Financieros de Florida recuerda que los asegurados del NFIP también deben enviar una prueba de pérdida (Proof of Loss) firmada dentro de los 60 días siguientes a la inundación. Guarde fotos, recibos y una lista de lo dañado: esos mismos documentos sirven para el reclamo y para cualquier solicitud de ayuda posterior. Vea [lista para reclamos por tormenta](/es/blog/hurricane-claim-checklist-florida), [plazos del reclamo](/es/blog/hurricane-claim-timeline-florida) y [seguro de vivienda en el condado de Broward](/es/homeowners-insurance-broward-county-fl).',
          sources: DISASTER,
        },
        {
          headline:
            'Nuevo: $10 millones en préstamos puente estatales para pequeños negocios afectados por las inundaciones de otoño, también en Miami-Dade y Broward',
          summary:
            'FloridaCommerce activó el **Programa de Préstamos Puente de Emergencia para Pequeños Negocios de Florida** con **$10 millones** para negocios afectados por las inundaciones de otoño de 2026. Pueden solicitarlo pequeños negocios, incluidos trabajadores por cuenta propia, de 21 condados, entre ellos **Miami-Dade, Broward, Palm Beach y Monroe**. Son préstamos a corto plazo y sin intereses, **de hasta $100,000** (hasta $150,000 para negocios agrícolas y de acuicultura), pensados para cubrir el tiempo hasta que lleguen fondos a más largo plazo, como préstamos federales o comerciales o pagos de seguros. **No son subvenciones y hay que devolverlos**; las solicitudes están abiertas **hasta el 1 de enero de 2027** o hasta agotar los fondos, en FloridaJobs.org/DisasterRecovery/EBL o al 833-832-4494.',
          why: 'Un préstamo puente puede ayudar a pagar la nómina y el alquiler, pero no sustituye al seguro: reporte ya los daños por inundación o tormenta a su aseguradora de propiedad comercial o de inundación, con fotos e inventario. Muchas pólizas de propiedad comercial excluyen las inundaciones, y la cobertura de pérdida de ingresos, si la tiene, normalmente depende de un daño físico cubierto, así que pregunte a su agente qué paga realmente su póliza. Vea [seguro comercial](/es/commercial-insurance-florida-city) y [daños por agua de drenaje vs. inundación](/es/blog/water-backup-vs-flood-insurance-florida).',
          sources: LOANS,
        },
        {
          headline: 'Nuevo: Hollywood alerta a los afectados por las inundaciones sobre estafas puerta a puerta',
          summary:
            'La Ciudad de Hollywood advierte que, tras un desastre, los estafadores suelen ir puerta por puerta ofreciendo ayuda o haciéndose pasar por organizaciones de recuperación legítimas. La ciudad recomienda verificar la identificación antes de dejar entrar a alguien a la propiedad, desconfiar de ofertas no solicitadas de limpieza, reparaciones o asistencia, no compartir nunca datos personales ni bancarios y **no pagar en efectivo antes de que se haga el trabajo**. Los casos sospechosos se pueden denunciar a la Fiscalía General de Florida al 1-866-9NO-SCAM, con la aplicación NO SCAM o en MyFloridaLegal.com.',
          why: 'Antes de firmar cualquier documento que mencione su reclamo de seguro, llame a su aseguradora o a su agente y lea bien el contrato, y compruebe que el contratista tenga licencia del Departamento de Regulación Profesional y de Negocios de Florida (DBPR). Su aseguradora asigna su propio ajustador, así que desconfíe de quien llegue sin aviso pidiendo dinero o los datos de su póliza. Vea [lista para reclamos por tormenta](/es/blog/hurricane-claim-checklist-florida) y [seguro de vivienda en Hollywood](/es/homeowners-insurance-hollywood-fl).',
          sources: SCAMS,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p.m. del 11 de diciembre** (faltan 17 días), y la página de FEMA sobre la reautorización no ha cambiado desde el 28 de septiembre; una póliza nueva del NFIP suele tardar 30 días en entrar en vigor, así que no cubrirá las lluvias de esta semana. El Centro Nacional de Huracanes no prevé la formación de ciclones tropicales en los próximos siete días, y la temporada de huracanes del Atlántico termina el lunes 30 de noviembre.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 24 ноября 2026 г.: предупреждение о наводнениях на вечер и среду, новый запрос штата о федеральном статусе бедствия, срочные займы для пострадавшего бизнеса и предупреждение о мошенниках',
      metaTitle: 'Страховые новости 24.11.2026: наводнения, статус бедствия, займы | M&K',
      description:
        'Предупреждение о наводнениях в Майами-Дейд, Бровард и Палм-Бич до ночи среды, Флорида просит новый федеральный статус бедствия, $10 млн займов и предупреждение о мошенниках.',
      ogAlt:
        'Дождевая туча над машиной в паводковой воде, правительственное здание с колоннами и одобренный документ, небольшой магазин под зелёным арочным мостом и дом с замком под жёлтым предупреждающим знаком',
      intro:
        'Четыре новости для домовладельцев, водителей и владельцев малого бизнеса Южной Флориды во вторник перед Днём благодарения. Каждая новость пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: с вечера вторника до ночи среды в Майами-Дейд, Бровард и Палм-Бич действует Flood Watch, слабое прибрежное подтопление возможно до четверга',
          summary:
            'Служба погоды NWS Miami объявила **Flood Watch (угрозу наводнений) для городских и прибрежных районов Майами-Дейд, Бровард и Палм-Бич с вечера вторника до поздней ночи среды**. Ожидается **2–3 дюйма осадков**, при неблагоприятном, но реалистичном сценарии — 4–6 дюймов. Земля уже насыщена водой: за последние 30 дней в части Палм-Бич и Броварда выпало 400–600% нормы, в части Майами-Дейд — 200–300%, так что даже умеренный дождь может подтопить городские районы и места с плохим дренажом. В среду возможны и сильные грозы, а **предупреждение о прибрежном подтоплении** для побережья Палм-Бич, Броварда и Майами-Дейд, а также для крайнего юга Майами-Дейд продлено **до утра четверга**: в часы прилива вода может выходить на низкие улицы и участки. В пятницу и субботу ожидается более сухая и прохладная погода.',
          why: 'До начала дождя переставьте машину с низких улиц и из мест, которые затопило на прошлой неделе, и никогда не въезжайте в воду: ущерб машине от наводнения покрывается только при наличии comprehensive, а обычная страховка дома наводнение исключает — для этого нужен отдельный полис. Если в среду едете к родным на День благодарения, выезжайте с запасом времени. См. [королевские приливы и страхование от наводнений](/ru/blog/king-tides-flood-insurance-miami-dade), [страхование от наводнений](/ru/flood-insurance-homestead-fl) и [поездки на День благодарения](/ru/blog/thanksgiving-holiday-driving-florida).',
          sources: WEATHER,
        },
        {
          headline:
            'Обновление: Флорида запрашивает новый федеральный статус бедствия после наводнений прошлой недели, в Дания-Бич откроется центр помощи',
          summary:
            'На брифинге в понедельник губернатор Рон Десантис сообщил, что штат **подаёт ещё один запрос на объявление крупного стихийного бедствия (Major Disaster Declaration)** для районов, пострадавших от последних наводнений. По данным Miami Herald, запрос касается наводнений прошлой недели в Южной Флориде, а FEMA назвало и его, и предыдущий запрос по Бреварду и другим округам «находящимися на рассмотрении». Федеральный статус пока не объявлен, а помощь домохозяйствам от федерального правительства становится доступна только после одобрения президентом. Тем временем штат открывает **многопрофильный центр помощи (MARC) в гараже мэрии Дания-Бич, 49 Park Ave. E.** — с **пятницы, 27 ноября**, с 7:00 до 19:00; там можно встретиться с представителями госагентств и некоммерческих организаций. С собой просят взять удостоверение личности, подтверждение адреса, данные страховки и документы об ущербе. В День благодарения все центры закрыты.',
          why: 'Не ждите решения Вашингтона, чтобы подать страховое требование. Если у вас есть страховка от наводнения, сообщите об ущербе страховщику как можно скорее; Департамент финансовых услуг Флориды напоминает, что владельцы полисов NFIP также обязаны в течение 60 дней после наводнения подать подписанное подтверждение ущерба (Proof of Loss). Сохраняйте фото, чеки и список повреждённого имущества: эти же документы пригодятся и для страховки, и для возможной заявки на помощь. См. [чек-лист по страховым случаям после шторма](/ru/blog/hurricane-claim-checklist-florida), [сроки рассмотрения претензии](/ru/blog/hurricane-claim-timeline-florida) и [страхование дома в округе Бровард](/ru/homeowners-insurance-broward-county-fl).',
          sources: DISASTER,
        },
        {
          headline:
            'Новое: $10 млн срочных «займов-мостов» от штата для малого бизнеса, пострадавшего от осенних наводнений, в том числе в Майами-Дейд и Броварде',
          summary:
            'Агентство FloridaCommerce запустило **программу срочных займов-мостов для малого бизнеса (Florida Small Business Emergency Bridge Loan Program)** на **$10 млн** для компаний, пострадавших от осенних наводнений 2026 года. Подать заявку могут малые предприятия, включая индивидуальных предпринимателей, из 21 округа, в том числе **Майами-Дейд, Бровард, Палм-Бич и Монро**. Это краткосрочные беспроцентные займы **до $100 000** (до $150 000 для сельскохозяйственных и аквакультурных предприятий), которые должны помочь продержаться до получения долгосрочного финансирования — федеральных или банковских кредитов либо страховых выплат. **Это не гранты, займы нужно вернуть**; заявки принимаются **до 1 января 2027 года** или пока не закончатся средства — на FloridaJobs.org/DisasterRecovery/EBL или по телефону 833-832-4494.',
          why: 'Заём поможет платить зарплату и аренду, но страховку не заменяет: сообщите об ущербе от наводнения или шторма своему страховщику коммерческого имущества или полиса от наводнений уже сейчас, с фото и описью. Многие полисы на коммерческое имущество исключают наводнение, а покрытие упущенного дохода (business income), если оно у вас есть, обычно срабатывает только при застрахованном физическом ущербе, поэтому уточните у агента, что именно оплачивает ваш полис. См. [страхование бизнеса](/ru/commercial-insurance-florida-city) и [обратный поток канализации и наводнение](/ru/blog/water-backup-vs-flood-insurance-florida).',
          sources: LOANS,
        },
        {
          headline: 'Новое: Голливуд предупреждает пострадавших от наводнения о мошенниках, которые ходят по домам',
          summary:
            'Город Голливуд предупреждает: после стихийных бедствий мошенники часто обходят дома, предлагая помощь или выдавая себя за официальные организации по восстановлению. Город советует проверять документы, прежде чем пускать кого-либо на участок, с осторожностью относиться к непрошеным предложениям уборки, ремонта или помощи, никому не сообщать личные и банковские данные и **не платить наличными до начала работ**. О подозрении на мошенничество можно сообщить генеральному прокурору Флориды по телефону 1-866-9NO-SCAM, через приложение NO SCAM или на MyFloridaLegal.com.',
          why: 'Прежде чем подписывать что-либо, где упоминается ваш страховой случай, позвоните страховщику или агенту и внимательно прочитайте договор, а также проверьте лицензию подрядчика в Департаменте делового и профессионального регулирования Флориды (DBPR). Страховая компания сама назначает своего оценщика, поэтому с осторожностью относитесь к тем, кто приходит без приглашения и просит деньги или данные вашего полиса. См. [чек-лист по страховым случаям после шторма](/ru/blog/hurricane-claim-checklist-florida) и [страхование дома в Голливуде](/ru/homeowners-insurance-hollywood-fl).',
          sources: SCAMS,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) продлена **до 23:59 11 декабря** (осталось 17 дней), страница FEMA о продлении не менялась с 28 сентября; новый полис NFIP обычно вступает в силу через 30 дней, так что дожди этой недели он не покроет. Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней, а сезон ураганов в Атлантике заканчивается в понедельник, 30 ноября.',
        },
      ],
      extraSources: BOX,
    },
  },
};
