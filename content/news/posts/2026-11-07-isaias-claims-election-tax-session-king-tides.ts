import type { NewsEdition, NewsSource } from '../types';

// Edition for Saturday, Nov. 7, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const OIR_ISAIAS: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-11-06',
  url: 'https://floir.gov/home/hurricane-isaias',
  title: 'OIR Hurricane Isaias Information — catastrophe claims data as of Nov. 6, 2026',
};

const FL_ELECTION_GOV: NewsSource = {
  name: 'Florida Division of Elections (Florida Election Watch)',
  date: '2026-11-03',
  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
  title: 'Governor and Lieutenant Governor — 2026 general election results (unofficial)',
};

const FL_ELECTION_CFO: NewsSource = {
  name: 'Florida Division of Elections (Florida Election Watch)',
  date: '2026-11-03',
  url: 'https://floridaelectionwatch.gov/StateOffices/ChiefFinancialOfficer',
  title: 'Chief Financial Officer — 2026 general election results (unofficial)',
};

const IJ_ELECTION: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-11-04',
  url: 'https://www.insurancejournal.com/news/southeast/2026/11/04/891473.htm',
  title: 'Georgia, Florida Insurers Facing New Scrutiny, Regulations After Election',
};

const PHOENIX_SESSION: NewsSource = {
  name: 'Florida Phoenix',
  date: '2026-11-04',
  url: 'https://floridaphoenix.com/2026/11/04/desantis-wants-special-session-to-implement-taxpayer-bill-of-rights/',
  title: 'DeSantis wants special session to implement ‘taxpayer bill of rights’',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-07',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 1:19 a.m. EST Sat Nov 7, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-07',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 6:41 a.m. EST Sat Nov 7, 2026',
};

const NOAA_TIDES: NewsSource = {
  name: 'NOAA Tides and Currents',
  date: '2026-11-07',
  url: 'https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=8723214',
  title: 'Tide predictions — Virginia Key, FL (station 8723214), Nov. 7–8, 2026',
};

const MDC_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-07',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Sat Nov 7, 2026',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-27',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'NCCI 2026 Public Rate Hearing — public comments through Nov 10, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const CLAIMS = [OIR_ISAIAS];
const ELECTION = [FL_ELECTION_GOV, FL_ELECTION_CFO, IJ_ELECTION];
const TAX = [PHOENIX_SESSION];
const WX = [NWS_MFL_CFW, NWS_MFL_AFD, NOAA_TIDES, MDC_KING];
const BOX = [NHC_TWO, OIR_NCCI, FEMA_REAUTH];

export const edition: NewsEdition = {
  slug: '2026-11-07-isaias-claims-election-tax-session-king-tides',
  datePublished: '2026-11-07',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 7, 2026: Isaias claims top 68,000, unofficial results for governor and CFO, an Amendment 3 special-session debate, and king tides through Sunday',
      metaTitle: 'Insurance News Nov. 7, 2026: Isaias Claims, Election, Tides | M&K',
      description:
        'OIR’s Nov. 6 data show 68,071 Hurricane Isaias claims, unofficial results name Florida’s next governor and CFO, lawmakers debate when to implement Amendment 3, and minor coastal flooding continues through Sunday.',
      ogAlt:
        'A clipboard with rising bar chart next to a small house, a columned government building with a ballot box and checked ballot, and a coastal house beside rising tide water, a tide gauge and a crescent moon',
      intro:
        'Four updates for South Florida drivers, homeowners and small-business owners this Saturday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: Hurricane Isaias claims top 68,000, and 58% are now closed',
          summary:
            'The Office of Insurance Regulation’s latest Isaias data, as of **Nov. 6**, show **68,071 claims** with about **$735.5 million** in estimated insured losses, up from 62,295 claims and about $652 million as of Oct. 27. Residential property accounts for **55,471** claims, private passenger auto for **7,825** and commercial property for **2,828**. **58.2%** of all claims are closed—**25,211** with payment and **14,402** without—while 20,482 remain open with no payment yet. Among the claims closed without payment, OIR lists **6,835** where the damage was below the deductible, **5,374** for administrative reasons, **1,864** for other exclusions or no policy in force, and **326** with no flood coverage. Santa Rosa and Escambia counties in the Panhandle still lead the claim count.',
          why: 'A “closed without payment” status often comes down to the deductible or paperwork, so if your claim closed unexpectedly, ask your insurer for the reason in writing. Know your hurricane deductible before the next storm—see our [wind deductible guide](/en/florida-home-insurance-wind-deductible) and [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida). Florida’s insurance consumer helpline is 1-877-693-5236.',
          sources: CLAIMS,
        },
        {
          headline:
            'New: Unofficial results name Byron Donalds governor-elect and keep Blaise Ingoglia as CFO',
          summary:
            'Florida Election Watch’s unofficial statewide returns show **Byron Donalds** (with running mate Bryan Avila) at **50.01%** in the governor’s race, ahead of David Jolly at **48.72%**, and CFO **Blaise Ingoglia** at **50.93%** over Annette Taddeo at **49.07%**; results stay unofficial until they are certified. The CFO oversees the Department of Financial Services, which runs the state’s insurance consumer helpline and insurance-fraud investigations. Insurance Journal reports that Donalds has pledged a public scorecard for insurers that could look at how fast claims are paid, and has said he would push to end the Florida Hurricane Catastrophe Fund’s cash build-up factor, a 25% charge added to what insurers pay for Cat Fund reinsurance. A 2025 Cat Fund paper cited in the article warned that removing it would make the fund more reliant on debt after a major hurricane.',
          why: 'Nothing in your current policy changes because of the election. Campaign proposals only matter once they become law or rules, so watch the 2027 legislative session, keep renewing on time and review your coverage as usual. We will cover any concrete proposals here once they are filed.',
          sources: ELECTION,
        },
        {
          headline:
            'Update: Governor calls for an Amendment 3 special session before Jan. 1; legislative leaders sound unsure',
          summary:
            'At a Nov. 4 news conference, Gov. Ron DeSantis said he wants a special session to pass a “taxpayer bill of rights” implementing Amendment 3 before he leaves office, partly to keep local governments from shifting the lost revenue to other taxes or fees, the Florida Phoenix reports. The date is up to the Legislature, and before the election Senate President-Designate Jim Boyd said much of the amendment is self-executing and implementing language could wait until January, while House Speaker-Designate Sam Garrison called it a very complicated issue. The amendment takes effect **Jan. 1** and raises the homestead exemption for non-school taxes to **$150,000 in 2027** and **$250,000 in 2028**. Lawmakers meet for a mostly ceremonial organization session the week of **Nov. 30**.',
          why: 'Lower property taxes can change your mortgage escrow payment, but they don’t change your insurance. Your dwelling coverage should track the cost to rebuild, not your assessed or taxable value. Review both when your escrow analysis arrives; our [homeowners page](/en/homeowners-insurance-florida-city) explains the coverage parts.',
          sources: TAX,
        },
        {
          headline:
            'Update: King tides keep a coastal flood statement in place through Sunday evening',
          summary:
            'NWS Miami’s 1:19 a.m. Saturday Coastal Hazard Message extends the **Coastal Flood Statement** for coastal Miami-Dade, Broward and Palm Beach **through Sunday evening**, with isolated minor coastal flooding and some water on low-lying roads and property. The 6:41 a.m. Area Forecast Discussion ties the minor flooding at each high tide this weekend to the king tides around the coming new moon and adds a chance of scattered showers this afternoon and tonight as a weak front moves through, then mainly dry weather early next week. NOAA predictions for Virginia Key put high tide around **7:14 a.m.** and **7:22 p.m.** ET Saturday and **7:59 a.m.** and **8:05 p.m.** Sunday. Miami-Dade’s king-tide window runs **Nov. 6–9**, with the next one **Nov. 23–26**.',
          why: 'Move cars off low streets before high tide; salt-water damage to a vehicle is usually a comprehensive claim ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Water rising into a home is generally covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), and NFIP coverage usually has a 30-day wait. See our [king-tides guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'National Hurricane Center, 7 a.m. Saturday: a non-tropical low several hundred miles south-southeast of Bermuda (AL94) has a low chance of turning subtropical (10% in 48 hours and in seven days) as it moves east and is absorbed by another low early next week, with no threat to Florida in the outlook. Public comments on NCCI’s 2027 workers’ compensation filing (an overall average change of −7.4% for the voluntary market, effective Jan. 1, 2027) close **Monday, Nov. 10, at 5 p.m. ET** at ratehearings@floir.gov. The National Flood Insurance Program remains authorized only through **11:59 p.m. on Dec. 11, 2026**.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 7 de noviembre de 2026: los reclamos por Isaias superan 68,000, resultados no oficiales para gobernador y CFO, debate sobre una sesión especial por la Enmienda 3 y mareas reales hasta el domingo',
      metaTitle: 'Noticias de seguros 7 nov. 2026: Isaias, elección, mareas | M&K',
      description:
        'Los datos de la OIR al 6 de noviembre muestran 68,071 reclamos por el huracán Isaias, los resultados no oficiales señalan al próximo gobernador y CFO, se debate cuándo implementar la Enmienda 3 y sigue la inundación costera leve hasta el domingo.',
      ogAlt:
        'Un portapapeles con un gráfico de barras en aumento junto a una casa pequeña, un edificio de gobierno con columnas y una urna con boleta marcada, y una casa costera junto al agua de marea, un medidor de marea y una luna creciente',
      intro:
        'Cuatro novedades para conductores, propietarios de vivienda y pequeños negocios del sur de Florida este sábado. Cada noticia está resumida con nuestras propias palabras y enlazada a la fuente original.',
      items: [
        {
          headline:
            'Actualización: los reclamos por el huracán Isaias superan 68,000 y el 58% ya está cerrado',
          summary:
            'Los datos más recientes de la Oficina de Regulación de Seguros (OIR) sobre Isaias, al **6 de noviembre**, muestran **68,071 reclamos** y unos **$735.5 millones** en pérdidas aseguradas estimadas, frente a 62,295 reclamos y unos $652 millones al 27 de octubre. La propiedad residencial suma **55,471** reclamos, el auto particular **7,825** y la propiedad comercial **2,828**. El **58.2%** de todos los reclamos está cerrado—**25,211** con pago y **14,402** sin pago—mientras 20,482 siguen abiertos sin pago todavía. Entre los cerrados sin pago, la OIR registra **6,835** con daños por debajo del deducible, **5,374** por razones administrativas, **1,864** por otras exclusiones o sin póliza vigente y **326** sin cobertura de inundación. Los condados de Santa Rosa y Escambia, en el Panhandle, siguen encabezando el número de reclamos.',
          why: 'Un reclamo “cerrado sin pago” muchas veces se debe al deducible o a trámites; si el suyo se cerró sin esperarlo, pida a su aseguradora la razón por escrito. Conozca su deducible por huracán antes de la próxima tormenta—vea nuestra [guía del deducible por viento](/es/florida-home-insurance-wind-deductible) y la [cronología de un reclamo por huracán](/es/blog/hurricane-claim-timeline-florida). La línea de ayuda al consumidor de seguros de Florida es 1-877-693-5236.',
          sources: CLAIMS,
        },
        {
          headline:
            'Nuevo: resultados no oficiales dan a Byron Donalds como gobernador electo y mantienen a Blaise Ingoglia como CFO',
          summary:
            'Los resultados estatales no oficiales de Florida Election Watch muestran a **Byron Donalds** (con su compañero de fórmula Bryan Avila) con **50.01%** en la carrera por la gobernación, por delante de David Jolly con **48.72%**, y al CFO **Blaise Ingoglia** con **50.93%** frente a Annette Taddeo con **49.07%**; los resultados siguen siendo no oficiales hasta su certificación. El CFO dirige el Departamento de Servicios Financieros, que opera la línea de ayuda al consumidor de seguros y las investigaciones de fraude de seguros. Insurance Journal informa que Donalds prometió una calificación pública de aseguradoras que podría medir la rapidez con que pagan los reclamos, y que buscaría eliminar el factor de acumulación de efectivo del Fondo de Catástrofes por Huracanes de Florida, un cargo del 25% sobre lo que las aseguradoras pagan por el reaseguro del fondo. Un informe del fondo de 2025, citado en el artículo, advirtió que eliminarlo haría al fondo más dependiente de la deuda después de un huracán grave.',
          why: 'Nada en su póliza actual cambia por la elección. Las propuestas de campaña solo cuentan cuando se convierten en ley o reglamento, así que siga la sesión legislativa de 2027, renueve a tiempo y revise su cobertura como siempre. Cubriremos aquí cualquier propuesta concreta cuando se presente.',
          sources: ELECTION,
        },
        {
          headline:
            'Actualización: el gobernador pide una sesión especial sobre la Enmienda 3 antes del 1 de enero; los líderes legislativos se muestran dudosos',
          summary:
            'En una conferencia de prensa el 4 de noviembre, el gobernador Ron DeSantis dijo que quiere una sesión especial para aprobar una “carta de derechos del contribuyente” que implemente la Enmienda 3 antes de dejar el cargo, en parte para evitar que los gobiernos locales trasladen los ingresos perdidos a otros impuestos o cargos, según el Florida Phoenix. La fecha depende de la Legislatura; antes de la elección, el presidente designado del Senado, Jim Boyd, dijo que gran parte de la enmienda se aplica por sí sola y que el lenguaje de implementación podría esperar a enero, mientras que el presidente designado de la Cámara, Sam Garrison, lo calificó de asunto muy complicado. La enmienda entra en vigor el **1 de enero** y eleva la exención de homestead para impuestos no escolares a **$150,000 en 2027** y **$250,000 en 2028**. Los legisladores se reúnen en una sesión de organización, mayormente ceremonial, la semana del **30 de noviembre**.',
          why: 'Unos impuestos a la propiedad más bajos pueden cambiar el pago de escrow de su hipoteca, pero no cambian su seguro. La cobertura de la vivienda debe reflejar el costo de reconstruir, no el valor tasado o gravable. Revise ambos cuando llegue su análisis de escrow; nuestra [página de seguro de vivienda](/es/homeowners-insurance-florida-city) explica las partes de la cobertura.',
          sources: TAX,
        },
        {
          headline:
            'Actualización: las mareas reales mantienen un aviso de inundación costera hasta el domingo por la noche',
          summary:
            'El Mensaje de Peligros Costeros del NWS Miami de la 1:19 a.m. del sábado extiende el **Coastal Flood Statement** para la costa de Miami-Dade, Broward y Palm Beach **hasta el domingo por la noche**, con inundación costera leve y aislada y algo de agua en calles y propiedades bajas. La Discusión de Pronóstico de las 6:41 a.m. vincula la inundación leve en cada marea alta de este fin de semana con las mareas reales de la próxima luna nueva, y añade la posibilidad de aguaceros dispersos esta tarde y esta noche con el paso de un frente débil, seguido de un tiempo mayormente seco a inicios de la próxima semana. Las predicciones de NOAA para Virginia Key sitúan la marea alta cerca de las **7:14 a.m.** y **7:22 p.m.** ET el sábado y de las **7:59 a.m.** y **8:05 p.m.** el domingo. La ventana de mareas reales de Miami-Dade va del **6 al 9 de noviembre**, y la siguiente del **23 al 26 de noviembre**.',
          why: 'Saque el carro de las calles bajas antes de la marea alta; el daño por agua salada a un vehículo suele ser un reclamo de cobertura amplia ([comprehensive vs. collision](/es/blog/comprehensive-vs-collision-florida)). El agua que sube dentro de una casa generalmente solo la cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, y la cobertura del NFIP suele tener una espera de 30 días. Vea nuestra [guía de mareas reales](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'Centro Nacional de Huracanes, 7 a.m. del sábado: una baja no tropical a varios cientos de millas al sur-sureste de Bermudas (AL94) tiene baja probabilidad de volverse subtropical (10% en 48 horas y en siete días) mientras se mueve al este y es absorbida por otra baja a inicios de la próxima semana, sin amenaza para Florida en la perspectiva. Los comentarios públicos sobre la presentación de compensación laboral 2027 de NCCI (un cambio promedio general de −7.4% para el mercado voluntario, vigente el 1 de enero de 2027) cierran el **lunes 10 de noviembre a las 5 p.m. ET** en ratehearings@floir.gov. El Programa Nacional de Seguro contra Inundaciones sigue autorizado solo hasta las **11:59 p.m. del 11 de diciembre de 2026**.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 7 ноября 2026: претензий по Isaias больше 68 000, неофициальные итоги выборов губернатора и CFO, спор о спецсессии по Поправке 3 и королевские приливы до воскресенья',
      metaTitle: 'Страховые новости 7.11.2026: Isaias, выборы, приливы | M&K',
      description:
        'Данные OIR на 6 ноября: 68 071 претензия по урагану Isaias; неофициальные итоги называют следующего губернатора и CFO; законодатели спорят, когда внедрять Поправку 3; слабое прибрежное подтопление продолжается до воскресенья.',
      ogAlt:
        'Планшет с растущей столбчатой диаграммой рядом с маленьким домом, здание с колоннами и урна с отмеченным бюллетенем, прибрежный дом у поднявшейся воды, уровнемер и полумесяц',
      intro:
        'Четыре новости для водителей, владельцев жилья и малого бизнеса на юге Флориды в эту субботу. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: претензий по урагану Isaias больше 68 000, закрыто уже 58%',
          summary:
            'Последние данные Управления страхового регулирования (OIR) по Isaias на **6 ноября**: **68 071 претензия** и около **$735,5 млн** оценочных застрахованных убытков — против 62 295 претензий и примерно $652 млн на 27 октября. На жилую недвижимость приходится **55 471** претензия, на личные автомобили — **7 825**, на коммерческую недвижимость — **2 828**. Закрыто **58,2%** всех претензий: **25 211** с выплатой и **14 402** без выплаты, а 20 482 остаются открытыми пока без выплат. Среди закрытых без выплаты OIR указывает **6 835** случаев, где ущерб ниже франшизы, **5 374** — по административным причинам, **1 864** — из-за других исключений или отсутствия действующего полиса и **326** — без покрытия от наводнения. По числу претензий по-прежнему лидируют округа Santa Rosa и Escambia на северо-западе штата (Panhandle).',
          why: 'Статус «закрыто без выплаты» часто связан с франшизой или документами — если вашу претензию закрыли неожиданно, попросите у страховщика письменное объяснение. Узнайте свою ураганную франшизу до следующего шторма — см. наш [гайд по франшизе от ветра](/ru/florida-home-insurance-wind-deductible) и [хронологию ураганной претензии](/ru/blog/hurricane-claim-timeline-florida). Линия помощи потребителям страховых услуг Флориды: 1-877-693-5236.',
          sources: CLAIMS,
        },
        {
          headline:
            'Новое: по неофициальным итогам губернатором избран Byron Donalds, CFO остаётся Blaise Ingoglia',
          summary:
            'Неофициальные итоги по штату на Florida Election Watch: **Byron Donalds** (в паре с Bryan Avila) набирает **50,01%** на выборах губернатора против **48,72%** у David Jolly, а CFO **Blaise Ingoglia** — **50,93%** против **49,07%** у Annette Taddeo; до сертификации результаты остаются неофициальными. CFO руководит Департаментом финансовых услуг, который ведёт линию помощи потребителям страховых услуг и расследования страхового мошенничества. Insurance Journal пишет, что Donalds обещал публичный рейтинг страховщиков, который может учитывать скорость выплат по претензиям, и заявлял, что добьётся отмены «cash build-up factor» Флоридского фонда ураганных катастроф — надбавки 25% к тому, что страховщики платят за перестрахование фонда. В статье цитируется документ фонда 2025 года: отмена надбавки сделает фонд более зависимым от займов после крупного урагана.',
          why: 'В вашем действующем полисе из-за выборов ничего не меняется. Предвыборные обещания имеют значение, только когда становятся законом или правилами, поэтому следите за сессией 2027 года, продлевайте полис вовремя и пересматривайте покрытие как обычно. Конкретные законопроекты мы разберём здесь, когда их внесут.',
          sources: ELECTION,
        },
        {
          headline:
            'Обновление: губернатор просит спецсессию по Поправке 3 до 1 января; лидеры Легислатуры сомневаются',
          summary:
            'На пресс-конференции 4 ноября губернатор Ron DeSantis заявил, что хочет до ухода с поста провести спецсессию и принять «билль о правах налогоплательщика» для внедрения Поправки 3 — в том числе чтобы местные власти не переложили выпавшие доходы на другие налоги или сборы, сообщает Florida Phoenix. Дату назначает Легислатура; ещё до выборов будущий председатель Сената Jim Boyd говорил, что поправка во многом действует сама по себе и нормы о внедрении могут подождать до января, а будущий спикер Палаты Sam Garrison назвал вопрос очень сложным. Поправка вступает в силу **1 января** и повышает освобождение homestead для нешкольных налогов до **$150 000 в 2027** и **$250 000 в 2028** году. Организационная, в основном церемониальная, сессия пройдёт на неделе **30 ноября**.',
          why: 'Снижение налога на недвижимость может изменить платёж escrow по ипотеке, но не меняет вашу страховку. Покрытие дома должно соответствовать стоимости восстановления, а не оценочной или налогооблагаемой стоимости. Проверьте и то и другое, когда придёт пересчёт escrow; наша [страница о страховании жилья](/ru/homeowners-insurance-florida-city) объясняет части покрытия.',
          sources: TAX,
        },
        {
          headline:
            'Обновление: из-за королевских приливов предупреждение о прибрежном подтоплении действует до вечера воскресенья',
          summary:
            'Coastal Hazard Message NWS Miami в 1:19 ночи субботы продлевает **Coastal Flood Statement** для побережья Майами-Дейд, Бровард и Палм-Бич **до вечера воскресенья**: возможно изолированное слабое прибрежное подтопление и вода на низких улицах и участках. Area Forecast Discussion в 6:41 утра связывает слабое подтопление в каждую высокую воду в эти выходные с королевскими приливами перед новолунием и добавляет вероятность разрозненных ливней сегодня днём и ночью при прохождении слабого фронта, а в начале следующей недели — в основном сухую погоду. Прогноз NOAA для Virginia Key: высокая вода около **7:14** и **19:22** ET в субботу и около **7:59** и **20:05** в воскресенье. Окно королевских приливов Майами-Дейд — **6–9 ноября**, следующее — **23–26 ноября**.',
          why: 'Уберите машину с низких улиц до высокой воды; ущерб автомобилю от солёной воды обычно идёт по comprehensive ([comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida)). Воду, поднявшуюся в дом, как правило, покрывает только отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), а у NFIP обычно ожидание 30 дней. См. наш [гайд по королевским приливам](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: WX,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальный центр по ураганам, 7:00 субботы: нетропическая область низкого давления в нескольких сотнях миль к юго-юго-востоку от Бермуд (AL94) имеет низкие шансы стать субтропической (10% за 48 часов и за семь дней), уходя на восток, пока в начале следующей недели её не поглотит другой циклон; угрозы для Флориды в прогнозе нет. Публичные комментарии по заявке NCCI на workers’ compensation 2027 (общее среднее изменение −7,4% для добровольного рынка с 1 января 2027) принимаются до **понедельника, 10 ноября, 17:00 ET** на ratehearings@floir.gov. Национальная программа страхования от наводнений (NFIP) продлена только до **23:59 11 декабря 2026 года**.',
        },
      ],
      extraSources: BOX,
    },
  },
};
