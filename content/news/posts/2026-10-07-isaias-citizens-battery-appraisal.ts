import type { NewsEdition, NewsSource } from '../types';

// Edition for Wednesday, Oct. 7, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NHC_ISAIAS: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-07',
  url: 'https://www.nhc.noaa.gov/archive/2026/al09/al092026.public.003.shtml',
  title: 'Tropical Storm Isaias Advisory Number 3',
};

const GOV_EO: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-10-06',
  url: 'https://flgov.com/eog/news/press/2026/governor-ron-desantis-issues-executive-order-preparation-tropical-depression-nine',
  title: 'Governor Ron DeSantis Issues Executive Order In Preparation For Tropical Depression Nine',
};

const CITIZENS_BINDING: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2025-12-30',
  url: 'https://securesupport.citizensfla.com/app/answers/detail/a_id/1455',
  title: 'What is Citizens hurricane or tropical storm binding suspension rule?',
};

const FLOODSMART: NewsSource = {
  name: 'FloodSmart (FEMA / NFIP)',
  date: '2026-10-07',
  url: 'https://www.floodsmart.gov/get-insured/buy-a-policy',
  title: 'Buy a Flood Insurance Policy',
};

const JMI_REPORT: NewsSource = {
  name: 'James Madison Institute',
  date: '2026-10-06',
  url: 'https://jamesmadison.org/from-backstop-to-market-participant-reassessing-citizens-role-restoring-citizens-property-insurance-corporation-to-its-role-as-floridas-insurer-of-last-resort/',
  title: 'From Backstop to Market Participant: Reassessing Citizens’ Role',
};

const FLPOL_JMI: NewsSource = {
  name: 'Florida Politics',
  date: '2026-10-06',
  url: 'https://floridapolitics.com/archives/823514-think-tank-urges-florida-to-shrink-citizens-return-it-to-insurer-of-last-resort/',
  title: 'Think tank urges Florida to shrink Citizens, return it to ‘insurer of last resort’',
};

const DFS_FIRE_WEEK: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-05',
  url: 'https://myfloridacfo.com/news/pressreleases/press-release-details/2026/10/05/chief-financial-officer-and-state-fire-marshal-blaise-ingoglia-highlights-2026-fire-prevention-week---charge-into-fire-safety.-safe-charging-is-a-superpower',
  title: 'CFO and State Fire Marshal Highlights 2026 Fire Prevention Week',
};

const DCA6_APPRAISAL: NewsSource = {
  name: 'Florida Sixth District Court of Appeal',
  date: '2026-10-02',
  url: 'https://flcourts-media.flcourts.gov/content/download/2496159/opinion/Opinion_2025-0045.pdf',
  title: 'Opinion, Case No. 6D2025-0045',
};

const MIAMI_DADE_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

export const edition: NewsEdition = {
  slug: '2026-10-07-isaias-citizens-battery-appraisal',
  datePublished: '2026-10-07',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 7, 2026: Tropical Storm Isaias, a push to shrink Citizens, battery fire safety, an appraisal ruling',
      metaTitle: 'Insurance News Oct. 7, 2026: Isaias, Citizens | M&K Agency',
      description:
        'Today: Tropical Storm Isaias and a North Florida emergency, a think tank’s plan for Citizens, lithium-ion charging tips and a court ruling on appraisal fees.',
      ogAlt: 'A hurricane symbol, a charging battery and a house on a light blue background',
      intro:
        'Four updates from the last few days for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Tropical Storm Isaias forms in the Gulf; state of emergency in 25 North Florida counties',
          summary:
            'Tropical Depression Nine strengthened into **Tropical Storm Isaias** early Wednesday in the southwestern Gulf of America. In its 4 a.m. CDT (5 a.m. EDT) advisory, the National Hurricane Center forecast rapid strengthening, with Isaias expected to become a hurricane by Thursday and to approach the U.S. northern Gulf Coast on Friday; NHC said hurricane watches will likely be needed for part of that coast later today and told residents from Louisiana to the Florida Panhandle to keep their hurricane plans ready. On Oct. 6, Gov. Ron DeSantis signed Executive Order 26-202, declaring a state of emergency in 25 North Florida counties, including Escambia, Okaloosa, Bay and Leon. Miami-Dade, Broward and Monroe are not on that list.',
          why: 'Under Citizens’ rule, once a tropical storm or hurricane watch or warning is issued for **any part of Florida**, agents can’t bind new Citizens coverage or coverage increases anywhere in the state until the suspension is lifted. A new NFIP flood policy also generally takes effect 30 days after purchase. If you were planning a change, talk to your agent today; our [flood insurance page](/en/flood-insurance-homestead-fl) explains the basics.',
          sources: [NHC_ISAIAS, GOV_EO, CITIZENS_BINDING, FLOODSMART],
        },
        {
          headline:
            'Think tank urges lawmakers to return Citizens to a true “insurer of last resort”',
          summary:
            'The James Madison Institute, a Florida policy group, published a report on Oct. 6 arguing that Citizens Property Insurance grew from a backstop into a competitor of private insurers. It notes that Citizens fell from about 1.41 million policies at the end of September 2023 to roughly 255,000 by late September 2026. The report asks the Legislature to consider reducing, or eventually dropping, the premium-comparison test that lets some homeowners get or keep Citizens coverage even when private coverage is available; to revisit the “glide path” that limits yearly Citizens rate increases; and to have Citizens’ rates reflect catastrophe risk more the way private insurers’ rates do. These are recommendations only, and any change would need new legislation.',
          why: 'Nothing changes for Citizens policyholders today. If you are with Citizens, keep reviewing takeout and renewal offers with an agent (see [Citizens takeout offers](/en/blog/citizens-takeout-offer)) so you know your options if eligibility rules tighten in a future session.',
          sources: [JMI_REPORT, FLPOL_JMI],
        },
        {
          headline:
            'Fire Prevention Week: the State Fire Marshal’s safe-charging tips for lithium-ion batteries',
          summary:
            'Through Oct. 10, CFO and State Fire Marshal Blaise Ingoglia is marking Fire Prevention Week with the theme “Charge into Fire Safety.” The Division of State Fire Marshal warns that lithium-ion batteries in phones, laptops, power tools, e-bikes, e-scooters and toys can overheat, start a fire or explode if they are damaged, misused or charged the wrong way. Its tips: use the charger that came with the device or one the manufacturer approves, charge on a hard, flat surface, unplug once the battery is full, charge e-bikes, scooters and power tools outside when possible without blocking exits, and stop using any battery that gets very hot, swells, smells odd, leaks, smokes or makes popping or hissing sounds.',
          why: 'A battery fire can damage a home, a rental unit or a work van and shop full of tools. Set up a safe charging spot now, and ask your agent how your [homeowners](/en/homeowners-insurance-florida-city) or [business](/en/commercial-insurance-florida-city) policy handles fire damage.',
          sources: [DFS_FIRE_WEEK],
        },
        {
          headline:
            'Appeals court: suing in the middle of appraisal didn’t earn a homeowner attorney’s fees',
          summary:
            'On Oct. 2, Florida’s Sixth District Court of Appeal ruled against a Lee County homeowner who sued his insurer over a Hurricane Ian claim while appraisal was still under way. The insurer had accepted coverage, paid about $200,000, invoked appraisal after his notice of intent to sue, and paid the umpire’s policy-limits award within the 60 days the policy allowed. The court held that paying the award after the suit was filed was not a “confession of judgment,” because the claims process had not broken down, and that the old pre-suit law’s 90-day mark allowed a lawsuit but neither set a deadline for appraisal nor automatically entitled him to fees. The fee laws involved have since been repealed, so the ruling mainly matters for older claims.',
          why: 'If you have an open claim, follow your policy’s appraisal steps and deadlines and keep copies of everything. Our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida) walks through the process.',
          sources: [DCA6_APPRAISAL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'King tides start today (Oct. 7–13)',
          text: 'Miami-Dade County lists **Oct. 7–13** as the current king-tide window, one of the highest predicted this fall, followed by Oct. 24–30. If you can, move your car to higher ground before high tide, don’t drive through flooded streets, and rinse your vehicle with fresh water after driving through salt water. With Isaias in the Gulf, keep an eye on the [National Hurricane Center](https://www.nhc.noaa.gov/) for updates.',
        },
      ],
      extraSources: [MIAMI_DADE_TIDES],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 7 de octubre de 2026: tormenta tropical Isaías, propuesta para reducir Citizens, baterías seguras y un fallo sobre tasación',
      metaTitle: 'Noticias de seguros, 7 oct. 2026: Isaías y Citizens | M&K',
      description:
        'Hoy: la tormenta Isaías y la emergencia en el norte de Florida, una propuesta para Citizens, consejos para cargar baterías de litio y un fallo sobre tasación.',
      ogAlt: 'Un símbolo de huracán, una batería cargando y una casa sobre fondo celeste',
      intro:
        'Cuatro novedades de los últimos días para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Se forma la tormenta tropical Isaías en el Golfo; estado de emergencia en 25 condados del norte de Florida',
          summary:
            'La depresión tropical Nueve se convirtió el miércoles de madrugada en la **tormenta tropical Isaías** (Isaias, en inglés) en el suroeste del Golfo de América. En su aviso de las 4 a.m. hora del Centro (5 a.m. hora del Este), el Centro Nacional de Huracanes pronosticó un fortalecimiento rápido: se espera que Isaías sea huracán el jueves y que se acerque a la costa norte del Golfo de EE. UU. el viernes. El NHC indicó que probablemente hoy mismo hagan falta vigilancias de huracán para parte de esa costa y pidió a los residentes de Luisiana al Panhandle de Florida tener listo su plan. El 6 de octubre, el gobernador Ron DeSantis firmó la Orden Ejecutiva 26-202, que declara el estado de emergencia en 25 condados del norte de Florida, entre ellos Escambia, Okaloosa, Bay y Leon. Miami-Dade, Broward y Monroe no están en esa lista.',
          why: 'Según la regla de Citizens, en cuanto se emite una vigilancia o un aviso de tormenta tropical o de huracán para **cualquier parte de Florida**, los agentes no pueden emitir nuevas pólizas de Citizens ni aumentos de cobertura en todo el estado hasta que se levante la suspensión. Además, una póliza nueva de inundación del NFIP por lo general entra en vigor 30 días después de la compra. Si pensaba hacer un cambio, hable hoy con su agente; nuestra [página de seguro de inundación](/es/flood-insurance-homestead-fl) explica lo básico.',
          sources: [NHC_ISAIAS, GOV_EO, CITIZENS_BINDING, FLOODSMART],
        },
        {
          headline:
            'Un centro de estudios pide que Citizens vuelva a ser solo la “aseguradora de último recurso”',
          summary:
            'El James Madison Institute, un centro de estudios de Florida, publicó el 6 de octubre un informe que sostiene que Citizens Property Insurance pasó de ser un respaldo a competir con las aseguradoras privadas. Recuerda que Citizens bajó de unos 1,41 millones de pólizas a fines de septiembre de 2023 a cerca de 255,000 a fines de septiembre de 2026. El informe pide a la Legislatura considerar reducir, o con el tiempo eliminar, el criterio de comparación de primas que permite a algunos propietarios entrar o quedarse en Citizens aunque haya cobertura privada disponible; revisar el “glide path”, que limita los aumentos anuales de tarifas de Citizens; y lograr que las tarifas de Citizens reflejen el riesgo catastrófico de forma más parecida a las de las aseguradoras privadas. Son solo recomendaciones: cualquier cambio requeriría una ley nueva.',
          why: 'Por ahora no cambia nada para los asegurados de Citizens. Si tiene una póliza de Citizens, siga revisando con un agente las ofertas de traspaso (takeout) y de renovación, para conocer sus opciones si en una futura sesión se endurecen las reglas. Puede empezar por nuestro [seguro de vivienda](/es/homeowners-insurance-florida-city).',
          sources: [JMI_REPORT, FLPOL_JMI],
        },
        {
          headline:
            'Semana de Prevención de Incendios: consejos del Jefe de Bomberos del estado para cargar baterías de litio',
          summary:
            'Hasta el 10 de octubre, el director financiero (CFO) y jefe estatal de bomberos, Blaise Ingoglia, celebra la Semana de Prevención de Incendios con el lema “Charge into Fire Safety” (carga con seguridad). La División del Jefe de Bomberos del Estado advierte que las baterías de iones de litio de teléfonos, laptops, herramientas eléctricas, bicicletas y patinetas eléctricas y juguetes pueden recalentarse, provocar un incendio o explotar si están dañadas, se usan mal o se cargan de forma incorrecta. Sus consejos: use el cargador original del aparato o uno aprobado por el fabricante, cargue sobre una superficie dura y plana, desconecte cuando la carga esté completa, cargue afuera las bicicletas, patinetas y herramientas cuando sea posible y sin bloquear salidas, y deje de usar cualquier batería que se caliente mucho, se hinche, huela raro, gotee, eche humo o haga chasquidos o silbidos.',
          why: 'Un incendio por batería puede dañar una casa, una vivienda alquilada o una camioneta y un taller llenos de herramientas. Prepare desde ya un lugar seguro para cargar y pregunte a su agente cómo cubre los daños por incendio su póliza de [vivienda](/es/homeowners-insurance-florida-city) o de [negocio](/es/commercial-insurance-florida-city).',
          sources: [DFS_FIRE_WEEK],
        },
        {
          headline:
            'Tribunal de apelaciones: demandar en plena tasación no le dio al propietario derecho a honorarios de abogado',
          summary:
            'El 2 de octubre, el Tribunal de Apelaciones del Sexto Distrito de Florida falló en contra de un propietario del condado de Lee que demandó a su aseguradora por un reclamo del huracán Ian mientras la tasación (appraisal) seguía en curso. La aseguradora había aceptado la cobertura, pagado unos $200,000, pedido la tasación después de recibir su aviso de intención de demandar, y pagado el laudo del árbitro, por el límite de la póliza, dentro de los 60 días que fijaba la póliza. El tribunal concluyó que ese pago posterior a la demanda no fue una “confesión de juicio”, porque el proceso del reclamo no se había roto, y que el plazo de 90 días de la antigua ley previa a la demanda permitía demandar, pero no fijaba un plazo para la tasación ni daba derecho automático a honorarios. Esas leyes sobre honorarios ya fueron derogadas, así que el fallo importa sobre todo para reclamos antiguos.',
          why: 'Si tiene un reclamo abierto, siga los pasos y plazos de tasación de su póliza y guarde copia de todo. Nuestra [guía de plazos de reclamos por huracán](/es/blog/hurricane-claim-timeline-florida) explica el proceso.',
          sources: [DCA6_APPRAISAL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Las mareas reales empiezan hoy (7 al 13 de octubre)',
          text: 'El condado de Miami-Dade indica que del **7 al 13 de octubre** hay mareas reales (king tides), una de las ventanas más altas previstas este otoño, y la siguiente será del 24 al 30. Si puede, lleve el auto a un lugar alto antes de la marea, no maneje por calles inundadas y enjuague el vehículo con agua dulce si pasó por agua salada. Con Isaías en el Golfo, siga las actualizaciones del [Centro Nacional de Huracanes](https://www.nhc.noaa.gov/).',
        },
      ],
      extraSources: [MIAMI_DADE_TIDES],
    },
    ru: {
      title:
        'Новости страхования во Флориде, 7 октября 2026: шторм «Исайас», план сократить Citizens, безопасная зарядка батарей и решение суда об оценке',
      metaTitle: 'Новости страхования, 7 окт. 2026: «Исайас», Citizens | M&K',
      description:
        'Сегодня: шторм «Исайас» и режим ЧС на севере Флориды, предложения по Citizens, советы по зарядке литиевых батарей и решение суда о гонорарах при оценке.',
      ogAlt: 'Значок урагана, заряжающаяся батарея и дом на светло-голубом фоне',
      intro:
        'Четыре новости последних дней для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'В Мексиканском заливе сформировался шторм «Исайас»; в 25 округах на севере Флориды режим ЧС',
          summary:
            'Рано утром в среду тропическая депрессия номер девять усилилась до **тропического шторма «Исайас»** (Isaias) на юго-западе Мексиканского залива. В бюллетене на 4:00 по центральному времени (5:00 по восточному) Национальный центр ураганов (NHC) прогнозирует быстрое усиление: к четвергу «Исайас», вероятно, станет ураганом, а в пятницу подойдёт к северному побережью залива в США. По словам NHC, уже сегодня для части этого побережья, скорее всего, объявят hurricane watch, а жителям от Луизианы до Панхэндла Флориды советуют держать план на случай урагана наготове. 6 октября губернатор Рон ДеСантис подписал указ 26-202 о режиме чрезвычайной ситуации в 25 округах на севере штата, в том числе Escambia, Okaloosa, Bay и Leon. Майами-Дейд, Броуард и Монро в этот список не входят.',
          why: 'По правилу Citizens, как только для **любой части Флориды** объявлен watch или warning по тропическому шторму или урагану, агенты по всему штату не могут оформлять новые полисы Citizens или увеличивать покрытие, пока ограничение не снимут. Кроме того, новый flood-полис NFIP обычно начинает действовать только через 30 дней после покупки. Если планировали изменения, поговорите с агентом сегодня; основы описаны на нашей [странице о страховании от наводнения](/ru/flood-insurance-homestead-fl).',
          sources: [NHC_ISAIAS, GOV_EO, CITIZENS_BINDING, FLOODSMART],
        },
        {
          headline:
            'Аналитический центр предлагает вернуть Citizens роль «страховщика последней инстанции»',
          summary:
            'Флоридский аналитический центр James Madison Institute 6 октября опубликовал доклад, в котором утверждает, что Citizens Property Insurance из запасного варианта превратился в конкурента частных страховщиков. В докладе напоминают, что число полисов Citizens сократилось примерно с 1,41 млн в конце сентября 2023 года до около 255 тысяч к концу сентября 2026-го. Авторы предлагают законодателям рассмотреть смягчение или полную отмену критерия сравнения страховых премий, который позволяет части домовладельцев попасть в Citizens или остаться в нём даже при наличии частного покрытия; пересмотреть «glide path», ограничивающий ежегодный рост тарифов Citizens; и обязать Citizens учитывать катастрофический риск в тарифах ближе к тому, как это делают частные компании. Это лишь рекомендации, и для любых изменений нужен новый закон.',
          why: 'Для клиентов Citizens пока ничего не меняется. Если ваш полис в Citizens, продолжайте разбирать с агентом предложения takeout и условия продления, чтобы понимать свои варианты, если в будущем правила ужесточат. Начать можно с нашей страницы о [страховании жилья](/ru/homeowners-insurance-florida-city).',
          sources: [JMI_REPORT, FLPOL_JMI],
        },
        {
          headline:
            'Неделя пожарной безопасности: советы пожарного надзора штата по зарядке литий-ионных батарей',
          summary:
            'До 10 октября финансовый директор штата (CFO) и главный пожарный инспектор Блейз Инголья проводит Неделю пожарной безопасности под девизом «Charge into Fire Safety» («Заряжай безопасно»). Отдел пожарного надзора штата предупреждает, что литий-ионные батареи в телефонах, ноутбуках, электроинструменте, электровелосипедах, самокатах и игрушках могут перегреться, загореться или взорваться, если они повреждены, используются неправильно или неправильно заряжаются. Советы ведомства: заряжайте родным зарядным устройством или одобренным производителем, кладите устройство на твёрдую ровную поверхность, отключайте после полной зарядки, электровелосипеды, самокаты и инструмент по возможности заряжайте на улице и не загораживайте выходы, а батарею, которая сильно греется, вздувается, странно пахнет, течёт, дымит, щёлкает или шипит, сразу прекращайте использовать.',
          why: 'Пожар от батареи может повредить дом, сдаваемое жильё или рабочий фургон и мастерскую с инструментом. Обустройте безопасное место для зарядки уже сейчас и уточните у агента, как ваш полис на [жильё](/ru/homeowners-insurance-florida-city) или [бизнес](/ru/commercial-insurance-florida-city) покрывает ущерб от пожара.',
          sources: [DFS_FIRE_WEEK],
        },
        {
          headline:
            'Апелляционный суд: иск посреди процедуры оценки не дал домовладельцу права на гонорар адвоката',
          summary:
            '2 октября Апелляционный суд Шестого округа Флориды вынес решение против домовладельца из округа Ли, который подал в суд на свою страховую компанию по делу об ущербе от урагана Ian, пока ещё шла процедура оценки (appraisal). Страховщик признал покрытие, выплатил около $200 000, после уведомления о намерении судиться потребовал оценку и выплатил решение арбитра-оценщика в размере лимита полиса в течение 60 дней, как и предусматривал полис. Суд решил, что такая выплата после подачи иска не является «признанием иска» (confession of judgment), поскольку процесс урегулирования не был сорван. Кроме того, 90-дневный срок из прежнего досудебного закона разрешал подать иск, но не устанавливал срок для оценки и не давал автоматического права на гонорар; эти нормы о гонорарах уже отменены, поэтому решение важно в основном для старых убытков.',
          why: 'Если у вас открыт страховой случай, соблюдайте шаги и сроки оценки по полису и сохраняйте копии всех документов. Порядок действий описан в нашей [статье о сроках урегулирования после урагана](/ru/blog/hurricane-claim-timeline-florida).',
          sources: [DCA6_APPRAISAL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Сегодня начинаются king tides (7–13 октября)',
          text: 'По данным округа Майами-Дейд, **7–13 октября** идут king tides — одни из самых высоких приливов, ожидаемых этой осенью, а следующее окно — 24–30 октября. По возможности заранее переставьте машину повыше, не въезжайте на затопленные улицы и промойте автомобиль пресной водой, если проехали по солёной. Пока «Исайас» в заливе, следите за обновлениями [Национального центра ураганов](https://www.nhc.noaa.gov/).',
        },
      ],
      extraSources: [MIAMI_DADE_TIDES],
    },
  },
};
