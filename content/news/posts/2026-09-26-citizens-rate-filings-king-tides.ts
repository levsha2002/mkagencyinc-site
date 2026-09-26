import type { NewsEdition, NewsSource } from '../types';

// First edition. Every fact below was checked against the linked source on
// Sept. 26, 2026. Items covered are also logged in /workspace/articles/news_log.md.

const OIR: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-09-22',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/09/22/commissioner-mike-yaworsky-approves-significant-rate-decreases-for-homeowners',
  title: 'Commissioner Mike Yaworsky Approves Significant Rate Decreases for Homeowners',
};
const NSF_CITIZENS: NewsSource = {
  name: 'The News Service of Florida (via Tallahassee Reports)',
  date: '2026-09-24',
  url: 'https://tallahasseereports.com/2026/09/24/citizens-property-insurance-president-market-is-working/',
  title: "Citizens Property Insurance President: 'Market is Working'",
};
const IJ_CLEARINGHOUSE: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-09-24',
  url: 'https://www.insurancejournal.com/news/southeast/2026/09/24/886645.htm',
  title: "Florida's Commercial Clearinghouse Plan Hits a Snag, With OIR and Board Concerns",
};
const FLBAR: NewsSource = {
  name: 'The Florida Bar News',
  date: '2026-09-23',
  url: 'https://www.floridabar.org/the-florida-bar-news/supreme-court-to-review-citizens-mandatory-arbitration-requirement/',
  title: "Supreme Court to review Citizens' mandatory arbitration requirement",
};
const KING_TIDES: NewsSource = {
  name: 'USA TODAY Network',
  date: '2026-09-24',
  url: 'https://www.usatoday.com/story/news/state/florida/miami/2026/09/24/king-tides-miami-dade-county-september-rain-forecast/91916572007/',
  title: 'King tides expected in Miami-Dade after days of flooding worries',
};
const CRS_NFIP: NewsSource = {
  name: 'Congressional Research Service (congress.gov)',
  date: '2026-09-11',
  url: 'https://www.congress.gov/crs_external_products/IN/PDF/IN10835/IN10835.62.pdf',
  title: 'What Happens If the National Flood Insurance Program (NFIP) Lapses?',
};
const CBS12_PLATES: NewsSource = {
  name: 'CBS12 News',
  date: '2026-09-23',
  url: 'https://cbs12.com/news/local/can-you-keep-your-dealer-university-license-plate-frame-florida-law-changes-oct-1-plate-obscuring-law-wording-uncovered-new-law-plate-number-registration-sticker-obscuring-device-record-license-plate-number-registration-sticker',
  title: 'Can Florida police pull you over for a license plate frame? What the new law says',
};
const SB488: NewsSource = {
  name: 'The Florida Senate: SB 488 (Chapter 2026-39), effective Oct. 1, 2026',
  date: '2026-04-22',
  url: 'https://www.flsenate.gov/Session/Bill/2026/488',
  title: 'Senate Bill 488 (2026): Transportation',
};
const NHC: NewsSource = {
  name: 'National Hurricane Center: Atlantic Tropical Weather Outlook',
  date: '2026-09-26',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 2:00 PM EDT Sat Sep 26 2026',
};

export const edition: NewsEdition = {
  slug: '2026-09-26-citizens-rate-filings-king-tides',
  datePublished: '2026-09-26',
  translations: {
    en: {
      title: 'Florida insurance news, Sept. 26, 2026: rate filings, Citizens, king tides and new driving rules',
      metaTitle: 'Insurance News Sept. 26, 2026: Citizens, Rates, Flood | M&K Agency',
      description: 'This week: more homeowners rate decreases approved, Citizens shrinks and urges shopping, a Supreme Court arbitration case, king tides and Oct. 1 driving rules.',
      intro: 'Five updates from this week for South Miami-Dade homeowners, drivers and small business owners. Each one is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'State regulator approves another round of homeowners rate decreases',
          summary: 'On Sept. 22, Florida Insurance Commissioner Mike Yaworsky announced that his office approved rate decreases for four home insurers. The changes take effect at renewal and together affect more than 62,000 policies. OIR says more requests are waiting for review: since January 2024, 48 companies have filed for a decrease and 53 have asked for no change, and the office says it will speed up its reviews.',
          why: 'An approved filing applies only to that insurer’s policyholders, and your own renewal still depends on your home, coverage and deductibles. When your renewal notice arrives, put it next to last year’s declarations page and ask a licensed agent to walk you through any change.',
          sources: [OIR],
        },
        {
          headline: 'Citizens is down to about 255,000 policies and tells customers to compare at renewal',
          summary: 'At its Sept. 23 Board of Governors meeting, Citizens Property Insurance Corporation said it had just under 255,000 policies as of Sept. 18, compared with about 1.4 million in September 2023, and it projects roughly 248,000 by the end of the year. President Tim Cerio encouraged policyholders whose renewal shows a sizable increase to “shop the market.” The board chairman also said the planned clearinghouse for Citizens commercial policies, required by a 2026 state law (SB 1028), is going back to the drawing board; separately, the Office of Insurance Regulation told Citizens in a Sept. 15 letter that it cannot approve the program yet.',
          why: 'If you are insured with Citizens, don’t renew on autopilot: when a renewal or a takeout offer arrives, compare coverage, deductibles and the hurricane deductible side by side (here is [what to check in a takeout offer](/en/blog/citizens-takeout-offer)). Business owners with Citizens commercial policies should expect the commercial clearinghouse timeline to shift.',
          sources: [NSF_CITIZENS, IJ_CLEARINGHOUSE],
        },
        {
          headline: 'Florida Supreme Court will decide whether Citizens can require arbitration of claim disputes',
          summary: 'On Sept. 23, the Florida Supreme Court agreed to hear Citizens Property Insurance Corporation v. Quintana, a challenge to the 2023 law that lets Citizens send claim disputes to binding arbitration at the state Division of Administrative Hearings instead of a courtroom. A Miami-Dade circuit judge raised due-process concerns in April, and the Third District Court of Appeal sent the case straight to the Supreme Court as a matter of great public importance. The first brief is due Oct. 22; oral arguments have not been scheduled.',
          why: 'Nothing changes yet: the current dispute rules apply while the case is pending. If you have an open claim with Citizens, read the dispute-resolution section of your policy and keep track of every deadline.',
          sources: [FLBAR],
        },
        {
          headline: 'King tides are back in Miami-Dade Sept. 26–30, and flood deadlines are getting closer',
          summary: 'Miami-Dade is in a king tide window from Sept. 26 to 30, based on predicted dates published by the City of Miami Beach, with more windows in October and November; these tides can flood low-lying streets even when it isn’t raining. Standard homeowners policies generally don’t cover flooding, and [Citizens](https://www.citizensfla.com/flood) will require flood insurance on all personal residential policies with wind coverage that take effect on or after Jan. 1, 2027, whatever the flood zone or home value. The National Flood Insurance Program is currently authorized only through Dec. 11, 2026, unless Congress extends it.',
          why: 'Don’t drive through or park in floodwater; flood damage to a car is typically covered only if your auto policy includes comprehensive coverage. If you have a Citizens renewal in January, start your flood policy early, because a new NFIP policy generally has a 30-day waiting period ([our guide to the 2027 Citizens flood rule](/en/blog/citizens-flood-insurance-requirement-2027)).',
          sources: [KING_TIDES, CRS_NFIP],
        },
        {
          headline: 'New Florida driving rules start Oct. 1: crash reporting and license plate frames',
          summary: 'A transportation law passed this year (SB 488) takes effect Oct. 1. It raises the property-damage level at which a driver must immediately notify police of a crash from $500 to $2,000; a crash that injures or kills anyone must still be reported no matter the damage. It also says a plate frame or decorative border is not a prohibited obscuring device as long as the plate number and the registration decal stay visible, although the separate rule that the whole plate be readable still applies.',
          why: 'Even when a small crash no longer requires a police call, take photos, exchange information and notify your insurer as your policy requires. And keep your whole tag clear, including the state name and printed wording.',
          sources: [CBS12_PLATES, SB488],
        },
      ],
      extra: [
        { type: 'callout', title: 'Tropics check (Saturday, Sept. 26, 2 p.m. EDT)', text: 'The [National Hurricane Center](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) is tracking Tropical Storm Gonzalo north of the Cabo Verde Islands and Tropical Depression Fay far west-southwest of the Azores. Neither is forecast to affect Florida. NHC gives a disturbance southeast of Bermuda a low chance (20%) of forming over the next seven days. Hurricane season runs through Nov. 30, so keep your policy documents and your hurricane deductible handy.' },
      ],
      extraSources: [NHC],
    },
    es: {
      title: 'Noticias de seguros en Florida, 26 de septiembre de 2026: tarifas, Citizens, mareas altas y nuevas reglas para conductores',
      metaTitle: 'Noticias de seguros, 26 sept. 2026: Citizens y más | M&K Agency',
      description: 'Esta semana: más rebajas de tarifas de hogar aprobadas, Citizens se achica, un caso de arbitraje en la Corte Suprema, mareas reales y reglas de tránsito del 1 de octubre.',
      intro: 'Cinco novedades de esta semana para propietarios, conductores y dueños de pequeños negocios del sur de Miami-Dade. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline: 'El regulador estatal aprueba otra ronda de rebajas de tarifas para seguros de hogar',
          summary: 'El 22 de septiembre, el comisionado de Seguros de Florida, Mike Yaworsky, anunció que su oficina aprobó rebajas de tarifas para cuatro aseguradoras de vivienda. Los cambios se aplican al renovar y, en conjunto, alcanzan a más de 62,000 pólizas. La OIR dice que tiene más solicitudes pendientes: desde enero de 2024, 48 compañías han pedido bajar sus tarifas y 53 han pedido dejarlas igual, y la oficina asegura que acelerará las revisiones.',
          why: 'Una tarifa aprobada solo afecta a los clientes de esa aseguradora, y su renovación sigue dependiendo de su casa, su cobertura y sus deducibles. Cuando le llegue el aviso de renovación, compárelo con la página de declaraciones del año pasado y pídale a un agente licenciado que le explique cualquier cambio.',
          sources: [OIR],
        },
        {
          headline: 'Citizens baja a unas 255,000 pólizas y pide a sus clientes comparar al renovar',
          summary: 'En la reunión de su Junta de Gobernadores del 23 de septiembre, Citizens Property Insurance Corporation informó que tenía algo menos de 255,000 pólizas al 18 de septiembre, frente a cerca de 1.4 millones en septiembre de 2023, y calcula cerrar el año con unas 248,000. Su presidente, Tim Cerio, animó a quienes reciban una renovación con un aumento considerable a comparar opciones en el mercado privado. El presidente de la junta también dijo que el plan para crear un sistema de colocación (clearinghouse) de pólizas comerciales de Citizens, exigido por una ley estatal de 2026 (SB 1028), vuelve a revisarse desde cero; por su parte, la Oficina de Regulación de Seguros le comunicó a Citizens en una carta del 15 de septiembre que todavía no puede aprobarlo.',
          why: 'Si está asegurado con Citizens, no renueve sin mirar: cuando le llegue la renovación o una oferta de traspaso (takeout), compare coberturas, deducibles y el deducible de huracán lado a lado. Si tiene un negocio con póliza comercial de Citizens, es probable que cambien los plazos del sistema de colocación comercial.',
          sources: [NSF_CITIZENS, IJ_CLEARINGHOUSE],
        },
        {
          headline: 'La Corte Suprema de Florida decidirá si Citizens puede exigir arbitraje en los reclamos',
          summary: 'El 23 de septiembre, la Corte Suprema de Florida aceptó el caso Citizens Property Insurance Corporation v. Quintana, que cuestiona la ley de 2023 que permite a Citizens llevar las disputas de reclamos a un arbitraje obligatorio ante la División de Audiencias Administrativas del estado, en lugar de a un tribunal. En abril, un juez de circuito de Miami-Dade planteó dudas sobre el debido proceso, y el Tercer Tribunal de Apelaciones envió el caso directamente a la Corte Suprema por ser de gran importancia pública. El primer escrito vence el 22 de octubre y todavía no hay fecha para los argumentos orales.',
          why: 'Por ahora no cambia nada: mientras el caso está pendiente siguen vigentes las reglas actuales. Si tiene un reclamo abierto con Citizens, lea la sección de resolución de disputas de su póliza y no deje pasar ningún plazo.',
          sources: [FLBAR],
        },
        {
          headline: 'Vuelven las mareas reales a Miami-Dade del 26 al 30 de septiembre, y se acercan las fechas clave del seguro de inundación',
          summary: 'Miami-Dade está en un período de mareas reales (king tides) del 26 al 30 de septiembre, según las fechas previstas que publica la Ciudad de Miami Beach, y habrá más en octubre y noviembre; estas mareas pueden inundar calles bajas aunque no llueva. El seguro de hogar estándar por lo general no cubre inundaciones, y [Citizens](https://www.citizensfla.com/flood) exigirá seguro de inundación en todas las pólizas residenciales personales con cobertura de viento que entren en vigor a partir del 1 de enero de 2027, sin importar la zona ni el valor de la casa. Además, el Programa Nacional de Seguros contra Inundaciones (NFIP) solo está autorizado hasta el 11 de diciembre de 2026, salvo que el Congreso lo extienda.',
          why: 'No maneje ni estacione en calles inundadas; los daños por inundación a un auto normalmente solo están cubiertos si su póliza incluye cobertura amplia (comprehensive). Si su póliza de Citizens se renueva en enero, contrate el seguro de inundación con tiempo, porque una póliza nueva del NFIP por lo general tiene un período de espera de 30 días ([nuestra guía sobre el requisito de Citizens para 2027](/es/blog/citizens-flood-insurance-requirement-2027)).',
          sources: [KING_TIDES, CRS_NFIP],
        },
        {
          headline: 'Nuevas reglas para conductores en Florida desde el 1 de octubre: reporte de choques y marcos de placa',
          summary: 'Una ley de transporte aprobada este año (SB 488) entra en vigor el 1 de octubre. Sube de $500 a $2,000 el monto de daños materiales a partir del cual el conductor debe avisar de inmediato a la policía después de un choque; si hay heridos o muertos, hay que reportarlo sin importar los daños. También aclara que un marco o borde decorativo de placa no es un dispositivo prohibido siempre que se vean el número de la placa y la calcomanía de registro, aunque sigue vigente la regla aparte de que toda la placa debe poder leerse.',
          why: 'Aunque un choque menor ya no requiera llamar a la policía, tome fotos, intercambie datos y avise a su aseguradora como lo pide su póliza. Y mantenga la placa completamente visible, incluido el nombre del estado y los textos impresos.',
          sources: [CBS12_PLATES, SB488],
        },
      ],
      extra: [
        { type: 'callout', title: 'Los trópicos hoy (sábado 26 de septiembre, 2 p.m. hora del Este)', text: 'El [Centro Nacional de Huracanes](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) sigue a la tormenta tropical Gonzalo, al norte de las islas de Cabo Verde, y a la depresión tropical Fay, muy al oeste-suroeste de las Azores. Según los pronósticos, ninguna afectará a Florida. El NHC le da a una perturbación al sureste de Bermudas una probabilidad baja (20%) de formarse en los próximos siete días. La temporada de huracanes sigue hasta el 30 de noviembre: tenga a mano sus documentos de póliza y conozca su deducible de huracán.' },
      ],
      extraSources: [NHC],
    },
    ru: {
      title: 'Новости страхования во Флориде, 26 сентября 2026: тарифы, Citizens, высокие приливы и новые правила для водителей',
      metaTitle: 'Новости страхования, 26 сентября 2026 | M&K Agency',
      description: 'За неделю: штат одобрил новые снижения тарифов на страхование жилья, Citizens сокращается, дело об арбитраже в Верховном суде, приливы и правила с 1 октября.',
      intro: 'Пять новостей этой недели для домовладельцев, водителей и владельцев малого бизнеса на юге Miami-Dade. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: 'Регулятор штата одобрил новую партию снижений тарифов на страхование жилья',
          summary: '22 сентября страховой комиссар Флориды Майк Яворски объявил, что его ведомство (OIR) одобрило снижение тарифов для четырёх страховщиков жилья. Изменения вступают в силу при продлении полиса и в сумме касаются более 62 000 полисов. По данным OIR, на рассмотрении ещё много заявок: с января 2024 года 48 компаний подали на снижение тарифов и 53 — на сохранение без изменений, и ведомство обещает ускорить проверку.',
          why: 'Одобренный тариф касается только клиентов конкретной компании, а ваше продление по-прежнему зависит от дома, покрытия и франшиз. Когда придёт уведомление о продлении, сравните его с прошлогодней страницей деклараций и попросите лицензированного агента объяснить любые изменения.',
          sources: [OIR],
        },
        {
          headline: 'У Citizens осталось около 255 000 полисов, клиентам советуют сравнивать варианты при продлении',
          summary: 'На заседании совета управляющих 23 сентября Citizens Property Insurance Corporation сообщила, что на 18 сентября у неё было чуть меньше 255 000 полисов против примерно 1,4 миллиона в сентябре 2023 года; к концу года ожидается около 248 000. Президент Citizens Тим Серио посоветовал клиентам, у которых при продлении заметно вырос платёж, поискать варианты на частном рынке. Председатель совета также заявил, что план по созданию «клиринговой площадки» для коммерческих полисов Citizens, которую требует закон штата 2026 года (SB 1028), будут пересматривать с нуля; кроме того, регулятор (OIR) ещё 15 сентября письменно сообщил Citizens, что пока не может его одобрить.',
          why: 'Если вы застрахованы в Citizens, не продлевайте полис не глядя: когда придёт продление или предложение о переводе полиса (takeout), сравните покрытие, франшизы и отдельную франшизу на ураган. Владельцам бизнеса с коммерческим полисом Citizens стоит ожидать, что сроки запуска площадки сдвинутся.',
          sources: [NSF_CITIZENS, IJ_CLEARINGHOUSE],
        },
        {
          headline: 'Верховный суд Флориды решит, может ли Citizens требовать арбитража по спорам о выплатах',
          summary: '23 сентября Верховный суд Флориды согласился рассмотреть дело Citizens Property Insurance Corporation v. Quintana. Оно оспаривает закон 2023 года, по которому Citizens может передавать споры о страховых выплатах в обязательный арбитраж при Управлении административных слушаний штата, а не в обычный суд. В апреле судья окружного суда Miami-Dade усомнился, что такой порядок соблюдает право на справедливое разбирательство, а Третий апелляционный суд передал дело сразу в Верховный суд как вопрос большой общественной важности. Первый письменный отзыв нужно подать до 22 октября; дата устных слушаний пока не назначена.',
          why: 'Пока ничего не меняется: до решения суда действуют нынешние правила. Если у вас открыт спор по выплате с Citizens, перечитайте раздел полиса о разрешении споров и следите за всеми сроками.',
          sources: [FLBAR],
        },
        {
          headline: 'В Miami-Dade снова «королевские» приливы (26–30 сентября), а важные даты по страхованию от наводнений всё ближе',
          summary: 'С 26 по 30 сентября в Miami-Dade ожидаются очень высокие приливы (king tides) — по прогнозным датам, которые публикует город Miami Beach; следующие периоды будут в октябре и ноябре. Такие приливы могут затапливать низкие улицы даже без дождя. Обычный полис на дом, как правило, не покрывает наводнение, а [Citizens](https://www.citizensfla.com/flood) с 1 января 2027 года будет требовать страховку от наводнения для всех жилых полисов с покрытием от ветра — независимо от зоны затопления и стоимости дома. К тому же федеральная программа страхования от наводнений (NFIP) продлена только до 11 декабря 2026 года, если Конгресс не продлит её снова.',
          why: 'Не ездите по затопленным улицам и не паркуйтесь в воде: ущерб машине от наводнения обычно покрывается, только если в автополисе есть покрытие comprehensive. Если ваш полис Citizens продлевается в январе, оформляйте страховку от наводнения заранее: у нового полиса NFIP, как правило, 30 дней ожидания.',
          sources: [KING_TIDES, CRS_NFIP],
        },
        {
          headline: 'С 1 октября — новые правила для водителей во Флориде: сообщения о ДТП и рамки номерных знаков',
          summary: 'Закон о транспорте, принятый в этом году (SB 488), вступает в силу 1 октября. Порог материального ущерба, при котором водитель обязан сразу сообщить о ДТП в полицию, повышается с $500 до $2000; если в аварии кто-то пострадал или погиб, сообщать нужно при любом ущербе. Закон также уточняет, что рамка или декоративная окантовка номера не считается запрещённым устройством, если видны сам номер и наклейка о регистрации, но отдельное правило о том, что весь номер должен хорошо читаться, продолжает действовать.',
          why: 'Даже если после мелкой аварии звонить в полицию уже не обязательно, сфотографируйте повреждения, обменяйтесь данными и сообщите страховщику в сроки, указанные в полисе. И следите, чтобы номер был виден целиком, включая название штата и надписи.',
          sources: [CBS12_PLATES, SB488],
        },
      ],
      extra: [
        { type: 'callout', title: 'Тропики сегодня (суббота, 26 сентября, 14:00 по восточному времени)', text: '[Национальный центр по ураганам](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) следит за тропическим штормом Gonzalo к северу от островов Кабо-Верде и тропической депрессией Fay далеко к западо-юго-западу от Азорских островов. По прогнозам, ни один из них Флориду не затронет. Вероятность того, что возмущение к юго-востоку от Бермуд сформируется в циклон в ближайшие семь дней, NHC оценивает как низкую (20%). Сезон ураганов продлится до 30 ноября — держите документы по полису под рукой и знайте свою франшизу на ураган.' },
      ],
      extraSources: [NHC],
    },
  },
};
