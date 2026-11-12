import type { NewsEdition, NewsSource } from '../types';

// Edition for Thursday, Nov. 12, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const WPTV_MDD: NewsSource = {
  name: 'WPTV',
  date: '2026-11-09',
  url: 'https://www.wptv.com/news/state/florida-requests-federal-disaster-assistance-after-widespread-flooding',
  title: 'Residents wait for FEMA assistance after Florida puts in request after widespread flooding',
};

const SPECTRUM_FLOOD_GAP: NewsSource = {
  name: 'Spectrum News 13',
  date: '2026-11-11',
  url: 'https://mynews13.com/fl/orlando/news/2026/11/11/flood-coverage-is-the-largest-insurance-gap-experts-see',
  title: 'Flood coverage is “the largest insurance gap” for property protection that experts say they see',
};

const FDEM_FALL: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-12',
  url: 'https://www.floridadisaster.org/disaster-updates/fall-flooding/',
  title: '2026 Fall Flooding',
};

const MD_REGISTRY_RELEASE: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-11-10',
  url: 'https://www.miamidade.gov/global/release.page?Mduid_release=rel1793982256323827',
  title: 'Deadline nears for Miami-Dade County’s Community Associations Registry annual renewals',
};

const MD_REGISTRY_PAGE: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-11-12',
  url: 'https://www.miamidade.gov/global/economy/consumer-protection/community-association-registry.page',
  title: 'Community Associations Registry and Resources',
};

const SENATE_ORG: NewsSource = {
  name: 'The Florida Senate',
  date: '2026-11-12',
  url: 'https://www.flsenate.gov/Home/11-17-2026',
  title: 'Calendar for 11/17/2026: 2026 Organization Session',
};

const FLBAR_LEADERS: NewsSource = {
  name: 'The Florida Bar News',
  date: '2026-11-10',
  url: 'https://www.floridabar.org/the-florida-bar-news/new-legislative-leaders-prepare-for-2027-session/',
  title: 'New legislative leaders prepare for 2027 session',
};

const WCTV_SPECIAL: NewsSource = {
  name: 'WCTV',
  date: '2026-11-11',
  url: 'https://www.wctv.tv/2026/11/11/florida-lawmakers-could-return-special-session-newly-passed-property-tax-amendment/',
  title: 'Florida lawmakers could return for special session on newly-passed property tax amendment',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-12',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 6:32 a.m. EST Thu Nov 12, 2026',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-12',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Thu Nov 12, 2026',
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

const AID = [WPTV_MDD, SPECTRUM_FLOOD_GAP, FDEM_FALL];
const HOA = [MD_REGISTRY_RELEASE, MD_REGISTRY_PAGE];
const LEG = [SENATE_ORG, FLBAR_LEADERS, WCTV_SPECIAL];
const WX = [NWS_MFL_AFD];
const BOX = [FEMA_REAUTH, OIR_NCCI, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-12-flood-aid-request-hoa-registry-legislature-cold-front',
  datePublished: '2026-11-12',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 12, 2026: the state asks for federal flood aid, Miami-Dade condo and HOA boards face a Feb. 1 registry deadline, lawmakers convene Nov. 17, and the cold front arrives tonight',
      metaTitle: 'Insurance News Nov. 12, 2026: Flood Aid, HOA Registry, Cold Front | M&K',
      description:
        'Florida requests a federal disaster declaration for the fall flooding, Miami-Dade associations must renew their registry by Feb. 1, lawmakers meet Nov. 17, and a cold front arrives.',
      ogAlt:
        'A flooded house beside a document with a federal seal, a condo building next to a clipboard with a checklist, a columned capitol with a calendar, and a cold front arrow with a thermometer over palm trees',
      intro:
        'Four updates for South Florida homeowners, drivers and small-business owners this Thursday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'New: Florida asks Washington for a major disaster declaration for the fall flooding; nothing is approved yet',
          summary:
            'At Gov. Ron DeSantis’s request, the Florida Division of Emergency Management announced on Monday, Nov. 9, that the state had submitted a **Major Disaster Declaration request** for communities in Central and South Florida hit by the late-October and early-November flooding, WPTV reported. The state’s announcement did not say which counties are included or which types of federal help it is seeking, and nothing becomes available until the federal government approves it. Spectrum News 13 reported on Nov. 11 that the request had not been approved yet. The governor’s two emergency orders for this flooding cover 14 counties, including Palm Beach, Martin and St. Lucie; Miami-Dade and Broward are not on that list.',
          why: 'Federal disaster aid, if approved, is meant to cover basic needs and does not replace insurance. If your home or car took on water, report it to your insurer now, keep photos and repair receipts, and don’t wait on a federal decision. Rising water is not covered by a standard home policy; a car flooded by rain is generally a comprehensive claim. See our [flood insurance page](/en/flood-insurance-homestead-fl) and [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: AID,
        },
        {
          headline:
            'New: Miami-Dade reminds condo, co-op and HOA boards to renew their registry filing by Feb. 1, 2027, including a certificate of insurance',
          summary:
            'Miami-Dade County’s Department of Regulatory and Economic Resources said on Nov. 10 that condominium associations, co-ops and homeowners’ associations must register or renew in the county’s **Community Associations Registry by Feb. 1, 2027**, and urged boards to act now. The county’s registry page lists what must be kept current, including officers and directors, governing documents, budgets and financial statements, planned capital projects, structural and recertification reports from the last 10 years, and a **certificate of insurance** listing the association’s current policies, issuing companies, policy numbers, coverage limits and effective dates. Filing is online only; a late filing carries a fee of 50% of the registration fee, and a property manager, accountant or attorney may file for the association.',
          why: 'Board members: ask your agent now for an up-to-date certificate that covers every association policy (property, liability, D&O, flood, crime/fidelity), so it matches what you upload. Owners: the registry is a public place to check what your association carries before you set your own HO-6 limits. See [condo association vs. HO-6](/en/blog/condo-association-vs-ho6-florida) and our [condo insurance page](/en/condo-insurance-florida-city).',
          sources: HOA,
        },
        {
          headline:
            'New: The Legislature convenes Nov. 17 to pick new leaders; a special session on the property-tax amendment still has no date',
          summary:
            'The Florida Senate and House meet in **Organization Session on Tuesday, Nov. 17** (the Senate convenes at 10 a.m.) to swear in members and choose officers; Senate President-designate Jim Boyd and House Speaker-designate Sam Garrison take their oaths that day, The Florida Bar News reported on Nov. 10. Six interim committee weeks start Nov. 30, and the 2027 Regular Session opens **March 2, 2027**. WCTV reported on Nov. 11 that Gov. DeSantis still says lawmakers must return before Jan. 1 to implement Amendment 3 and pass a “taxpayer bill of rights,” and that holding it while legislators are already in town could make sense, but no date has been set.',
          why: 'Insurance, property-tax and flood bills for 2027 will start moving in committee weeks from Nov. 30, and homeowner exemption changes depend on what the special session decides. We will report rule changes as they become official. For what already takes effect Jan. 1, see [Florida insurance changes in January 2027](/en/blog/florida-insurance-changes-january-2027).',
          sources: LEG,
        },
        {
          headline:
            'Update: The strong cold front crosses South Florida before dawn Friday, with a chilly, breezy weekend and gusty winds into next week',
          summary:
            'NWS Miami’s 6:32 a.m. Area Forecast Discussion now has firm timing: the front should push through during the **pre-dawn and early-morning hours on Friday**, with only light showers expected along it, after scattered showers today (locally 1–2 inches of rain possible in a few spots through Friday morning). Behind it, Saturday morning lows are forecast in the **mid to upper 50s** for most areas and low 50s near Lake Okeechobee, with Saturday highs in the upper 60s to low 70s, about 10 degrees below normal; inland Southwest Florida could see upper 40s Sunday morning. Seas build to 2–4 feet on Friday, rip current risk rises at east coast beaches from Sunday, and forecasters expect a stretch of gusty winds early to mid next week while a possible Gulf low remains highly uncertain.',
          why: 'If you use a space heater this weekend, keep it away from curtains and furniture and plug it straight into the wall; a home fire is a homeowners claim, but prevention is better. Boat owners: check lines and covers before the wind picks up, and review your [boat insurance](/en/boat-insurance-florida).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The federal flood insurance program is authorized through **11:59 p.m. on Dec. 11, 2026**, 29 days from today, and FEMA’s page still shows no new extension. OIR has not yet posted an order on NCCI’s 2027 workers’ comp filing (a requested −7.4% average for the voluntary market; the comment record closed Nov. 10). National Hurricane Center, 7 a.m. Thursday: no tropical cyclone formation expected in the next 7 days.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 12 de noviembre de 2026: el estado pide ayuda federal por las inundaciones, las juntas de condominios y HOA de Miami-Dade tienen plazo hasta el 1 de febrero para el registro, la Legislatura se reúne el 17 de noviembre y el frente frío llega esta noche',
      metaTitle: 'Noticias 12 nov. 2026: ayuda federal, registro de HOA, frente frío | M&K',
      description:
        'Florida pide una declaración federal de desastre por las inundaciones, las asociaciones de Miami-Dade deben renovar su registro antes del 1 de febrero y llega un frente frío.',
      ogAlt:
        'Una casa inundada junto a un documento con sello federal, un edificio de condominios junto a una lista de verificación, un capitolio con columnas y un calendario, y una flecha de frente frío con un termómetro sobre palmeras',
      intro:
        'Cuatro novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este jueves. Cada nota está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Nuevo: Florida pide a Washington una declaración de desastre mayor por las inundaciones de otoño; todavía no hay aprobación',
          summary:
            'A pedido del gobernador Ron DeSantis, la División de Manejo de Emergencias de Florida anunció el lunes 9 de noviembre que el estado presentó una **solicitud de Declaración de Desastre Mayor** para las comunidades del centro y el sur de Florida afectadas por las inundaciones de fines de octubre y comienzos de noviembre, informó WPTV. El anuncio no indicó qué condados incluye ni qué tipo de ayuda federal se pide, y nada estará disponible hasta que el gobierno federal la apruebe. Spectrum News 13 informó el 11 de noviembre que la solicitud aún no había sido aprobada. Las dos órdenes de emergencia del gobernador por estas inundaciones abarcan 14 condados, entre ellos Palm Beach, Martin y St. Lucie; Miami-Dade y Broward no están en esa lista.',
          why: 'La ayuda federal por desastre, si se aprueba, busca cubrir necesidades básicas y no reemplaza al seguro. Si su casa o su auto se inundaron, repórtelo a su aseguradora ya, guarde fotos y recibos de reparación y no espere la decisión federal. El agua que sube no está cubierta por una póliza de vivienda estándar; un auto inundado por lluvia suele reclamarse bajo la cobertura comprensiva. Vea nuestra [página de seguro contra inundaciones](/es/flood-insurance-homestead-fl) y [comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida).',
          sources: AID,
        },
        {
          headline:
            'Nuevo: Miami-Dade recuerda a las juntas de condominios, cooperativas y HOA renovar su registro antes del 1 de febrero de 2027, incluido el certificado de seguro',
          summary:
            'El Departamento de Recursos Regulatorios y Económicos de Miami-Dade informó el 10 de noviembre que las asociaciones de condominio, las cooperativas y las asociaciones de propietarios (HOA) deben registrarse o renovar en el **Registro de Asociaciones Comunitarias del condado antes del 1 de febrero de 2027**, y pidió a las juntas actuar ya. La página del registro detalla lo que debe mantenerse al día: directivos y miembros de la junta, documentos constitutivos, presupuesto y estados financieros, proyectos de capital previstos, informes estructurales y de recertificación de los últimos 10 años y un **certificado de seguro** con las pólizas vigentes de la asociación, las compañías emisoras, los números de póliza, los límites de cobertura y las fechas de vigencia. El trámite es solo en línea; presentarlo tarde conlleva un recargo del 50% de la tarifa de registro, y un administrador, contador o abogado puede presentarlo en nombre de la asociación.',
          why: 'Miembros de la junta: pidan ya a su agente un certificado actualizado que incluya todas las pólizas de la asociación (propiedad, responsabilidad civil, D&O, inundación, fidelidad/crimen) para que coincida con lo que suben. Propietarios: el registro es un lugar público para ver qué seguro tiene su asociación antes de fijar los límites de su propia póliza HO-6. Vea [asociación de condominio vs. HO-6](/es/blog/condo-association-vs-ho6-florida) y nuestra [página de seguro de condominio](/es/condo-insurance-florida-city).',
          sources: HOA,
        },
        {
          headline:
            'Nuevo: la Legislatura se reúne el 17 de noviembre para elegir a sus nuevos líderes; la sesión especial sobre la enmienda del impuesto a la propiedad sigue sin fecha',
          summary:
            'El Senado y la Cámara de Florida se reúnen en **Sesión de Organización el martes 17 de noviembre** (el Senado se instala a las 10 a.m.) para juramentar a sus miembros y elegir autoridades; ese día asumen el presidente designado del Senado, Jim Boyd, y el presidente designado de la Cámara, Sam Garrison, informó The Florida Bar News el 10 de noviembre. Seis semanas de comités interinos comienzan el 30 de noviembre, y la Sesión Ordinaria de 2027 abre el **2 de marzo de 2027**. WCTV informó el 11 de noviembre que el gobernador DeSantis sigue diciendo que los legisladores deben volver antes del 1 de enero para implementar la Enmienda 3 y aprobar una “carta de derechos del contribuyente”, y que hacerlo mientras ya están en Tallahassee podría tener sentido, pero aún no hay fecha.',
          why: 'Los proyectos de ley de seguros, impuestos a la propiedad e inundaciones para 2027 empezarán a moverse en las semanas de comités desde el 30 de noviembre, y los cambios en la exención de vivienda dependen de lo que decida la sesión especial. Informaremos los cambios cuando sean oficiales. Para lo que ya entra en vigor el 1 de enero, vea [cambios en seguros en Florida en enero de 2027](/es/blog/florida-insurance-changes-january-2027).',
          sources: LEG,
        },
        {
          headline:
            'Actualización: el fuerte frente frío cruza el sur de Florida antes del amanecer del viernes, con un fin de semana fresco y ventoso y ráfagas hasta la próxima semana',
          summary:
            'La discusión de pronóstico de las 6:32 a.m. del Servicio Meteorológico Nacional en Miami ya fija el horario: el frente pasaría **en la madrugada y las primeras horas de la mañana del viernes**, con apenas lloviznas a su paso, después de chubascos dispersos hoy (en algunos puntos podrían caer 1 a 2 pulgadas hasta el viernes por la mañana). Detrás, el sábado amanecería **entre 55 y 59 °F (13–15 °C)** en la mayoría de las zonas y cerca de 50–53 °F junto al lago Okeechobee, con máximas el sábado de 67 a 72 °F, unos 10 grados por debajo de lo normal; el interior del suroeste de Florida podría bajar a los 40 y tantos °F el domingo por la mañana. El oleaje sube a 2–4 pies el viernes, el riesgo de corrientes de resaca aumenta en las playas de la costa este desde el domingo y se esperan varios días con ráfagas de viento a inicios y mediados de la próxima semana, mientras una posible baja en el Golfo sigue siendo muy incierta.',
          why: 'Si usa un calentador eléctrico este fin de semana, manténgalo lejos de cortinas y muebles y conéctelo directo a la pared; un incendio en casa es un reclamo de su póliza de vivienda, pero prevenir es mejor. Dueños de embarcaciones: revisen amarras y fundas antes de que suba el viento, y repasen su [seguro de embarcaciones](/es/boat-insurance-florida).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El programa federal de seguro contra inundaciones está autorizado hasta las **11:59 p.m. del 11 de diciembre de 2026**, dentro de 29 días, y la página de FEMA aún no muestra una nueva prórroga. La OIR todavía no ha publicado su orden sobre la solicitud de NCCI de tarifas de compensación laboral para 2027 (un cambio promedio solicitado de −7.4% para el mercado voluntario; el plazo de comentarios cerró el 10 de noviembre). Centro Nacional de Huracanes, 7 a.m. del jueves: no se espera la formación de ciclones tropicales en los próximos 7 días.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 12 ноября 2026 г.: штат просит федеральную помощь после наводнений, у кондо и HOA Майами-Дейд срок регистрации до 1 февраля, законодатели собираются 17 ноября, а ночью придёт холодный фронт',
      metaTitle: 'Новости 12 ноября 2026: федеральная помощь, реестр HOA, холодный фронт | M&K',
      description:
        'Флорида запросила федеральную декларацию о бедствии из-за наводнений, ассоциациям Майами-Дейд нужно обновить данные в реестре до 1 февраля, идёт холодный фронт.',
      ogAlt:
        'Затопленный дом рядом с документом с федеральной печатью, здание кондоминиума рядом с планшетом с чек-листом, капитолий с колоннами и календарь, стрелка холодного фронта с термометром над пальмами',
      intro:
        'Четыре новости для домовладельцев, водителей и владельцев малого бизнеса Южной Флориды в этот четверг. Каждая изложена нашими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Новое: Флорида попросила Вашингтон объявить крупное бедствие из-за осенних наводнений; решения пока нет',
          summary:
            'По поручению губернатора Рона Десантиса Управление по чрезвычайным ситуациям Флориды в понедельник, 9 ноября, объявило, что штат подал **запрос на объявление крупного бедствия (Major Disaster Declaration)** для районов Центральной и Южной Флориды, пострадавших от наводнений конца октября — начала ноября, сообщил телеканал WPTV. В объявлении не указано, какие округа входят в запрос и какую именно федеральную помощь просит штат; ничего не станет доступно, пока запрос не одобрит федеральное правительство. Spectrum News 13 сообщил 11 ноября, что одобрения всё ещё нет. Два указа губернатора о ЧС из-за этих наводнений охватывают 14 округов, в том числе Палм-Бич, Мартин и Сент-Луси; Майами-Дейд и Броуард в этот список не входят.',
          why: 'Федеральная помощь при бедствии, если её одобрят, рассчитана на базовые нужды и не заменяет страховку. Если дом или машину затопило, сообщите страховщику сейчас, сохраните фотографии и чеки за ремонт и не ждите федерального решения. Ущерб от поднявшейся воды обычный полис на дом не покрывает; машина, залитая дождём, обычно проходит по comprehensive. Подробнее — на нашей [странице страхования от наводнения](/ru/flood-insurance-homestead-fl) и в статье [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: AID,
        },
        {
          headline:
            'Новое: Майами-Дейд напоминает правлениям кондо, кооперативов и HOA обновить данные в реестре до 1 февраля 2027 г., включая сертификат страхования',
          summary:
            'Департамент регулирования и экономических ресурсов округа Майами-Дейд 10 ноября напомнил, что ассоциации кондоминиумов, кооперативы и ассоциации домовладельцев (HOA) обязаны зарегистрироваться или продлить регистрацию в **окружном реестре общественных ассоциаций до 1 февраля 2027 г.**, и призвал правления не откладывать. На странице реестра перечислено, что нужно поддерживать в актуальном виде: состав правления и должностных лиц, учредительные документы, бюджет и финансовую отчётность, планируемые капитальные проекты, отчёты о состоянии конструкций и повторной сертификации за последние 10 лет, а также **сертификат страхования** со списком действующих полисов ассоциации, страховых компаний, номеров полисов, лимитов и сроков действия. Подать данные можно только онлайн; за опоздание берётся надбавка в размере 50% регистрационного сбора, а подать заявку за ассоциацию может управляющий, бухгалтер или юрист.',
          why: 'Членам правления: попросите агента уже сейчас подготовить актуальный сертификат по всем полисам ассоциации (имущество, ответственность, D&O, наводнение, страхование от хищений сотрудниками), чтобы он совпадал с тем, что вы загружаете. Владельцам квартир: реестр — открытый источник, где можно увидеть, какая страховка есть у ассоциации, прежде чем выбирать лимиты своего полиса HO-6. Подробнее — в статье [страховка ассоциации кондо и HO-6](/ru/blog/condo-association-vs-ho6-florida) и на нашей [странице страхования кондо](/ru/condo-insurance-florida-city).',
          sources: HOA,
        },
        {
          headline:
            'Новое: 17 ноября Законодательное собрание выбирает новых руководителей; даты спецсессии по поправке о налоге на недвижимость по-прежнему нет',
          summary:
            'Сенат и Палата представителей Флориды собираются на **организационную сессию во вторник, 17 ноября** (Сенат открывает заседание в 10:00), чтобы привести к присяге членов и избрать руководство; в этот день присягу принимают назначенный председатель Сената Джим Бойд и назначенный спикер Палаты Сэм Гаррисон, сообщило издание The Florida Bar News 10 ноября. С 30 ноября начинаются шесть межсессионных недель работы комитетов, а очередная сессия 2027 года открывается **2 марта 2027 г.** Телеканал WCTV 11 ноября сообщил, что губернатор Десантис по-прежнему настаивает: законодатели должны вернуться до 1 января, чтобы ввести в действие Поправку 3 и принять «билль о правах налогоплательщика», и провести это, пока депутаты и так в Таллахасси, может быть разумно, но дата не назначена.',
          why: 'Законопроекты 2027 года о страховании, налоге на недвижимость и наводнениях начнут рассматриваться в комитетах с 30 ноября, а изменения льготы homestead зависят от решений спецсессии. Мы расскажем об изменениях, когда они станут официальными. О том, что уже вступает в силу 1 января, — в статье [изменения в страховании Флориды с января 2027 г.](/ru/blog/florida-insurance-changes-january-2027).',
          sources: LEG,
        },
        {
          headline:
            'Обновление: сильный холодный фронт пройдёт через Южную Флориду перед рассветом в пятницу; выходные будут прохладными и ветреными, порывы ветра — и на следующей неделе',
          summary:
            'В прогностическом обсуждении NWS Miami от 6:32 время уже определено: фронт пройдёт **перед рассветом и ранним утром в пятницу**, лишь со слабыми дождями, а сегодня ожидаются отдельные ливни (до пятничного утра местами возможно 1–2 дюйма, 25–50 мм). За фронтом в субботу утром в большинстве районов **55–59 °F (13–15 °C)**, у озера Окичоби около 50–53 °F (10–12 °C), днём в субботу 67–72 °F (19–22 °C) — примерно на 10 градусов ниже нормы; во внутренних районах юго-запада Флориды в воскресенье утром возможно около 45–49 °F (7–9 °C). В пятницу волнение моря вырастет до 2–4 футов, с воскресенья на пляжах восточного побережья усилится риск разрывных течений, а в начале и середине следующей недели синоптики ждут несколько дней с порывистым ветром; возможная область низкого давления в Мексиканском заливе остаётся под большим вопросом.',
          why: 'Если в выходные включаете обогреватель, держите его подальше от штор и мебели и включайте прямо в розетку, без удлинителя; пожар в доме — случай по полису на дом, но предотвратить его лучше. Владельцам лодок: проверьте швартовы и чехлы до усиления ветра и посмотрите условия [страхования лодки](/ru/boat-insurance-florida).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Федеральная программа страхования от наводнений действует **до 23:59 11 декабря 2026 г.**, то есть ещё 29 дней; на странице FEMA нового продления пока нет. Приказа OIR по заявке NCCI о тарифах workers’ comp на 2027 год (запрошено среднее изменение −7,4% для добровольного рынка; приём комментариев завершился 10 ноября) пока нет. Национальный центр по ураганам, 7:00 четверга: в ближайшие 7 дней образование тропических циклонов не ожидается.',
        },
      ],
      extraSources: BOX,
    },
  },
};
