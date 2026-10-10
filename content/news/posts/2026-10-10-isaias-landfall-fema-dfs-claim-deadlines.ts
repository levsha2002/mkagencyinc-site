import type { NewsEdition, NewsSource } from '../types';

// Edition for Saturday, Oct. 10, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NHC_LANDFALL: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-09',
  url: 'https://www.nhc.noaa.gov/archive/2026/al09/al092026.update.10100129.shtml',
  title: 'Hurricane Isaias Tropical Cyclone Update: Isaias makes landfall near Destin, Florida',
};

const NHC_ADV15: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-10',
  url: 'https://www.nhc.noaa.gov/text/MIATCPAT4.shtml',
  title: 'Post-Tropical Cyclone Isaias Advisory Number 15 (last NHC advisory)',
};

const FEMA_EM: NewsSource = {
  name: 'FEMA',
  date: '2026-10-09',
  url: 'https://www.fema.gov/press-release/20261009/president-donald-j-trump-approves-emergency-declaration-florida',
  title: 'President Donald J. Trump Approves Emergency Declaration for Florida (HQ-26-164)',
};

const DFS_HUBS: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-09',
  url: 'https://myfloridacfo.com/news/pressreleases/press-release-details/2026/10/09/chief-financial-officer-and-state-fire-marshal-blaise-ingoglia-shares-hurricane-isaias-preparedness-efforts-from-the-florida-department-of-financial-services',
  title: 'CFO Blaise Ingoglia Shares Hurricane Isaias Preparedness Efforts from DFS',
};

const FS_627_70132: NewsSource = {
  name: 'The Florida Senate (Florida Statutes)',
  date: '2026-10-10',
  url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.70132',
  title: 'Section 627.70132, Florida Statutes: Notice of property insurance claim',
};

const CITIZENS_BINDING: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-10-07',
  url: 'https://www.citizensfla.com/-/20261007-citizens-is-under-binding-suspension',
  title: 'Citizens Is Under Binding Suspension',
};

export const edition: NewsEdition = {
  slug: '2026-10-10-isaias-landfall-fema-dfs-claim-deadlines',
  datePublished: '2026-10-10',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 10, 2026: Isaias makes landfall near Destin, a federal emergency declaration, the state claims helpline, and your claim deadlines',
      metaTitle: 'Insurance News Oct. 10, 2026: Isaias Landfall | M&K Agency',
      description:
        'Today: Isaias came ashore near Destin and has weakened, FEMA approved an emergency declaration for 27 counties, the DFS claims helpline, and claim-notice deadlines.',
      ogAlt: 'A hurricane symbol over the Florida Panhandle and an insurance claim form',
      intro:
        'Four updates from the last two days for South Florida homeowners, drivers and small-business owners, as Hurricane Isaias moves out of Florida. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'Isaias makes landfall near Destin as a Category 2 hurricane, then weakens; Florida warnings are over',
          summary:
            'The National Hurricane Center says **Isaias** made landfall near Destin at about 8:30 p.m. CDT (9:30 p.m. EDT) Friday with top sustained winds near 105 mph, after briefly reaching major-hurricane strength earlier in the day. By 4 a.m. CDT Saturday it was a post-tropical cyclone near Montgomery, Alabama, all remaining storm surge and tropical storm warnings had been discontinued, and NHC issued its last advisory; heavy rain and flash flooding are still possible in the Panhandle and Big Bend this weekend. NHC’s 8 a.m. EDT outlook expects no new tropical cyclone formation in the Atlantic over the next 7 days.',
          why: 'Citizens’ statewide pause on new policies and coverage increases is tied to Florida watches and warnings, and it lifts only when Citizens sends its follow-up notice, so check with your agent before counting on a new policy or higher limits. Under state law, the hurricane-deductible period ends 72 hours after the last Florida hurricane watch or warning ends.',
          sources: [NHC_LANDFALL, NHC_ADV15, CITIZENS_BINDING],
        },
        {
          headline: 'Federal emergency declaration approved for 27 Florida counties',
          summary:
            'FEMA announced late Friday that the President approved an emergency declaration for Florida for Hurricane Isaias, covering conditions from Oct. 6 onward. It covers the same 27 North Florida and Big Bend counties in the governor’s state of emergency, from Escambia to Levy, and lets FEMA provide equipment and resources for emergency protective measures, with direct federal assistance at 75% federal funding. More designations may follow if the state requests them and damage assessments support it; Miami-Dade, Broward and Monroe are not included.',
          why: 'An emergency declaration is not the same as individual disaster aid for households. If you have property in the Panhandle, your own insurance policy is still the first place to turn for repairs.',
          sources: [FEMA_EM],
        },
        {
          headline: 'State sets up insurance help for storm damage: call 1-877-MY-FL-CFO',
          summary:
            'Florida’s Department of Financial Services says its Division of Consumer Services contacted 60 insurance companies to set up insurance assistance hubs quickly after the storm. Anyone whose home, condo or car was damaged by Isaias can call 1-877-693-5236 (1-877-MY-FL-CFO) to speak with an insurance specialist about post-storm claims. DFS also says its criminal investigators will pursue people who try to exploit storm victims, and fraud can be reported at FraudFreeFlorida.com.',
          why: 'If your insurer is slow to respond or you get a suspicious repair offer after a storm, this state helpline is a good next step.',
          sources: [DFS_HUBS],
        },
        {
          headline: 'Your deadline to report an Isaias claim: one year from landfall',
          summary:
            'Section 627.70132, Florida Statutes, bars a new or reopened property claim unless the insurer gets notice within 1 year after the date of loss, and a supplemental claim within 18 months. For hurricane claims, the date of loss is the date the hurricane made landfall, which NHC put at Oct. 9, 2026, for Isaias. These limits apply to home and condo property policies; the policy itself may require prompt notice too.',
          why: 'Report damage as soon as you can, even if it looks minor, and keep photos and receipts. Our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) walks through the steps.',
          sources: [FS_627_70132, NHC_LANDFALL],
        },
      ],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 10 de octubre de 2026: Isaías toca tierra cerca de Destin, declaración federal de emergencia, línea estatal de ayuda para reclamos y sus plazos',
      metaTitle: 'Noticias de seguros, 10 oct. 2026: Isaías toca tierra | M&K',
      description:
        'Hoy: Isaías tocó tierra cerca de Destin y se debilitó, FEMA aprobó una declaración de emergencia para 27 condados, la línea de ayuda del DFS y los plazos para reclamar.',
      ogAlt: 'Un símbolo de huracán sobre el Panhandle de Florida y un formulario de reclamo de seguro',
      intro:
        'Cuatro novedades de los últimos dos días para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida, mientras el huracán Isaías sale de Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline: 'Isaías toca tierra cerca de Destin como huracán categoría 2 y se debilita; terminan los avisos en Florida',
          summary:
            'El Centro Nacional de Huracanes informa que **Isaías** (Isaias, en inglés) tocó tierra cerca de Destin alrededor de las 8:30 p.m. hora del Centro (9:30 p.m. hora del Este) del viernes, con vientos sostenidos máximos de unas 105 mph, después de alcanzar brevemente la fuerza de huracán mayor más temprano ese día. A las 4 a.m. hora del Centro del sábado ya era un ciclón postropical cerca de Montgomery (Alabama), se habían cancelado todos los avisos de marejada ciclónica y de tormenta tropical, y el NHC emitió su último boletín; este fin de semana todavía puede haber lluvias fuertes e inundaciones repentinas en el Panhandle y el Big Bend. El pronóstico del NHC de las 8 a.m. hora del Este no prevé la formación de nuevos ciclones tropicales en el Atlántico en los próximos 7 días.',
          why: 'La pausa estatal de Citizens para pólizas nuevas y aumentos de cobertura depende de las vigilancias y avisos en Florida y solo se levanta cuando Citizens envía su aviso posterior, así que consulte con su agente antes de contar con una póliza nueva o límites más altos. Según la ley estatal, el periodo del deducible por huracán termina 72 horas después de que finalice la última vigilancia o aviso de huracán en Florida.',
          sources: [NHC_LANDFALL, NHC_ADV15, CITIZENS_BINDING],
        },
        {
          headline: 'Aprueban una declaración federal de emergencia para 27 condados de Florida',
          summary:
            'FEMA anunció el viernes por la noche que el Presidente aprobó una declaración de emergencia para Florida por el huracán Isaías, por las condiciones desde el 6 de octubre en adelante. Abarca los mismos 27 condados del norte y del Big Bend incluidos en el estado de emergencia del gobernador, desde Escambia hasta Levy, y permite a FEMA aportar equipos y recursos para medidas de protección de emergencia, con asistencia federal directa financiada al 75%. Podrían añadirse más designaciones si el estado las solicita y las evaluaciones de daños lo justifican; Miami-Dade, Broward y Monroe no están incluidos.',
          why: 'Una declaración de emergencia no es lo mismo que la ayuda individual por desastre para hogares. Si tiene una propiedad en el Panhandle, su propia póliza de seguro sigue siendo el primer recurso para las reparaciones.',
          sources: [FEMA_EM],
        },
        {
          headline: 'El estado organiza ayuda con seguros por daños de la tormenta: llame al 1-877-MY-FL-CFO',
          summary:
            'El Departamento de Servicios Financieros de Florida (DFS) dice que su División de Servicios al Consumidor contactó a 60 compañías de seguros para instalar centros de asistencia de seguros poco después de la tormenta. Quien tenga daños en su casa, condominio o auto por Isaías puede llamar al 1-877-693-5236 (1-877-MY-FL-CFO) para hablar con un especialista en seguros sobre reclamos después de la tormenta. El DFS también indica que sus investigadores perseguirán a quienes intenten aprovecharse de los afectados, y el fraude se puede denunciar en FraudFreeFlorida.com.',
          why: 'Si su aseguradora tarda en responder o recibe una oferta de reparación sospechosa después de una tormenta, esta línea estatal es un buen siguiente paso.',
          sources: [DFS_HUBS],
        },
        {
          headline: 'Su plazo para reportar un reclamo por Isaías: un año desde que tocó tierra',
          summary:
            'La sección 627.70132 de los Estatutos de Florida impide un reclamo de propiedad nuevo o reabierto si la aseguradora no recibe el aviso dentro de 1 año desde la fecha de la pérdida, y un reclamo suplementario dentro de 18 meses. En reclamos por huracán, la fecha de la pérdida es el día en que el huracán tocó tierra, que el NHC fijó en el 9 de octubre de 2026 para Isaías. Estos límites aplican a pólizas de propiedad de casa y condominio; la póliza también puede exigir aviso inmediato.',
          why: 'Reporte los daños lo antes posible, aunque parezcan menores, y guarde fotos y recibos. Nuestra [lista para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida) explica los pasos.',
          sources: [FS_627_70132, NHC_LANDFALL],
        },
      ],
    },
    ru: {
      title:
        'Страховые новости Флориды, 10 октября 2026: «Исайас» вышел на сушу у Дестина, федеральный режим ЧС, горячая линия штата по убыткам и сроки заявления',
      metaTitle: 'Страховые новости 10 окт. 2026: «Исайас» вышел на сушу | M&K',
      description:
        'Сегодня: «Исайас» вышел на сушу у Дестина и ослаб, FEMA утвердило режим ЧС для 27 округов, горячая линия DFS по убыткам и сроки заявления об убытке.',
      ogAlt: 'Значок урагана над Панхэндлом Флориды и бланк заявления об убытке',
      intro:
        'Четыре новости за последние два дня для владельцев жилья, водителей и малого бизнеса в Южной Флориде — ураган «Исайас» уходит из Флориды. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: '«Исайас» вышел на сушу у Дестина ураганом 2-й категории и ослаб; предупреждения во Флориде сняты',
          summary:
            'По данным Национального центра ураганов (NHC), **«Исайас»** (Isaias) вышел на сушу у Дестина около 20:30 по центральному времени (21:30 по восточному) в пятницу с максимальным устойчивым ветром около 105 миль/ч, а днём ранее ненадолго достигал силы мощного урагана. К 4:00 по центральному времени в субботу он стал посттропическим циклоном у Монтгомери (Алабама), все оставшиеся предупреждения о нагоне и тропическом шторме были сняты, и NHC выпустил последний бюллетень; в выходные в Панхэндле и районе Биг-Бенд ещё возможны сильные дожди и внезапные наводнения. Прогноз NHC на 8:00 по восточному времени не ожидает образования новых тропических циклонов в Атлантике в ближайшие 7 дней.',
          why: 'Пауза Citizens на новые полисы и увеличение покрытия по всему штату привязана к watch и warning во Флориде и снимается только после отдельного уведомления Citizens, поэтому уточните у агента, прежде чем рассчитывать на новый полис или более высокие лимиты. По закону штата ураганный период для франшизы заканчивается через 72 часа после снятия последнего hurricane watch или warning во Флориде.',
          sources: [NHC_LANDFALL, NHC_ADV15, CITIZENS_BINDING],
        },
        {
          headline: 'Утверждён федеральный режим ЧС для 27 округов Флориды',
          summary:
            'В пятницу вечером FEMA сообщило, что президент утвердил для Флориды декларацию о чрезвычайной ситуации (emergency declaration) из-за урагана «Исайас» — за период с 6 октября и далее. Она охватывает те же 27 округов севера и Биг-Бенда, что и режим ЧС губернатора, от Escambia до Levy, и позволяет FEMA выделять технику и ресурсы для экстренных защитных мер с федеральным финансированием прямой помощи на 75%. Позже могут добавиться новые округа, если штат попросит и это подтвердит оценка ущерба; Майами-Дейд, Бровард и Монро в список не входят.',
          why: 'Emergency declaration — это не то же самое, что индивидуальная помощь пострадавшим семьям. Если у вас есть недвижимость в Панхэндле, первым делом для ремонта обращайтесь по своему страховому полису.',
          sources: [FEMA_EM],
        },
        {
          headline: 'Штат организует помощь по страховым убыткам от шторма: звоните 1-877-MY-FL-CFO',
          summary:
            'Департамент финансовых услуг Флориды (DFS) сообщает, что его отдел по работе с потребителями связался с 60 страховыми компаниями, чтобы вскоре после шторма открыть пункты страховой помощи. Тот, чей дом, кондо или машина пострадали от «Исайаса», может позвонить по номеру 1-877-693-5236 (1-877-MY-FL-CFO) и поговорить со специалистом по страхованию об убытках после шторма. DFS также предупреждает, что его следователи будут преследовать тех, кто пытается нажиться на пострадавших; о мошенничестве можно сообщить на FraudFreeFlorida.com.',
          why: 'Если страховщик долго не отвечает или после шторма вам предлагают подозрительный ремонт, горячая линия штата — хороший следующий шаг.',
          sources: [DFS_HUBS],
        },
        {
          headline: 'Срок заявления об убытке от «Исайаса» — год с момента выхода на сушу',
          summary:
            'По статье 627.70132 Статутов Флориды новое или повторно открытое заявление об убытке по имуществу не принимается, если страховщик не получил уведомление в течение 1 года с даты убытка, а дополнительное (supplemental) — в течение 18 месяцев. Для ураганных убытков датой убытка считается день выхода урагана на сушу — для «Исайаса» это, по данным NHC, 9 октября 2026 года. Эти сроки касаются полисов на дом и кондо; сам полис может требовать и немедленного уведомления.',
          why: 'Сообщайте об ущербе как можно скорее, даже если он кажется небольшим, и сохраняйте фото и чеки. Пошагово — в нашем [чек-листе по ураганным убыткам](/ru/blog/hurricane-claim-checklist-florida).',
          sources: [FS_627_70132, NHC_LANDFALL],
        },
      ],
    },
  },
};
