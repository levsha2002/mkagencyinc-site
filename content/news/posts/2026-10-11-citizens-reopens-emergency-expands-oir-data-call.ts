import type { NewsEdition, NewsSource } from '../types';

// Edition for Sunday, Oct. 11, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const CITIZENS_LIFTED: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-10-10',
  url: 'https://www.citizensfla.com/-/20261010-citizens-binding-suspension-has-been-lifted',
  title: 'Citizens Binding Suspension Has Been Lifted',
};

const EO_26_212: NewsSource = {
  name: 'Executive Office of the Governor',
  date: '2026-10-10',
  url: 'https://flgov.com/eog/sites/default/files/shared/2026/10/EO%2026-212.pdf',
  title: 'Executive Order 26-212 (Amending Executive Order 26-202, Hurricane Isaias)',
};

const DFS_RESOURCES: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-10',
  url: 'https://myfloridacfo.com/news/pressreleases/press-release-details/2026/10/10/chief-financial-officer-and-state-fire-marshal-blaise-ingoglia-highlights-resources-for-floridians-impacted-by-hurricane-isaias',
  title: 'CFO Blaise Ingoglia Highlights Resources for Floridians Impacted by Hurricane Isaias',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-11',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Atlantic Tropical Weather Outlook, 8 a.m. EDT Sun Oct 11, 2026',
};

const NHC_ADV15: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-10',
  url: 'https://www.nhc.noaa.gov/archive/2026/al09/al092026.public.015.shtml',
  title: 'Post-Tropical Cyclone Isaias Advisory Number 15',
};

const FS_627_4025: NewsSource = {
  name: 'The Florida Senate (Florida Statutes)',
  date: '2026-10-11',
  url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.4025',
  title: 'Section 627.4025, Florida Statutes: Residential coverage and hurricane coverage defined',
};

export const edition: NewsEdition = {
  slug: '2026-10-11-citizens-reopens-emergency-expands-oir-data-call',
  datePublished: '2026-10-11',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 11, 2026: Citizens resumes new policies, the state emergency grows to 30 counties, and regulators start tracking Isaias claims',
      metaTitle: 'Insurance News Oct. 11, 2026: Citizens Reopens | M&K Agency',
      description:
        'Today: Citizens lifted its binding suspension, the Isaias state of emergency now covers 30 counties, OIR’s claims data call starts Monday, and the tropics are quiet near Florida.',
      ogAlt: 'A Florida home with an insurance policy document and a calm weather map',
      intro:
        'Four updates from the last two days for South Florida homeowners, drivers and small-business owners, as recovery from Hurricane Isaias begins. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'Citizens lifts its statewide pause: new policies and coverage increases are back',
          summary:
            'Citizens Property Insurance Corporation says the binding suspension it put in place for Isaias was lifted as of 5 a.m. ET on Saturday, Oct. 10, and all regular business operations have resumed. The pause had been in effect statewide since Oct. 7, so agents could not bind new applications or changes that increase coverage anywhere in Florida, including Miami-Dade.',
          why: 'If you were waiting to start a Citizens policy, raise your limits or close on a home, your agent can move forward again. A new policy still only covers losses that happen after its effective date.',
          sources: [CITIZENS_LIFTED],
        },
        {
          headline: 'Isaias state of emergency expanded to 30 counties, including Tampa Bay',
          summary:
            'Gov. DeSantis signed Executive Order 26-212 on Oct. 10, adding Hillsborough, Pasco and Pinellas counties to the Isaias state of emergency, which now covers 30 counties from Escambia to the Tampa Bay area. The order also lets the Commissioner of Agriculture order mosquito-control measures in those counties because of standing water left by the storm. Miami-Dade, Broward and Monroe are not on the list.',
          why: 'Emergency orders can affect deadlines and services in the listed counties. If you own a rental, a business location or family property on the Gulf Coast, check the damage and report any claim promptly.',
          sources: [EO_26_212],
        },
        {
          headline: 'Regulators to start Isaias claims data call Monday; state warns of post-storm scams',
          summary:
            'In an Oct. 10 release, the Department of Financial Services said the Office of Insurance Regulation will issue its mandatory data call to insurers on Monday, Oct. 12, to start collecting data on property claims handling, with results posted on the OIR website as they come in. OIR said it will be actively monitoring how insurers handle claims in the coming weeks. DFS also warned about insurance, home-repair and contractor scams and pointed residents to its fraud hotline, 1-800-378-0445, and FraudFreeFlorida.com.',
          why: 'Before you sign a repair contract or hand over your claim to anyone, verify their license. If a claim stalls, the state consumer helpline at 1-877-693-5236 can help.',
          sources: [DFS_RESOURCES],
        },
        {
          headline: 'Tropics quiet near Florida; hurricane-deductible window is closing',
          summary:
            'NHC’s Sunday-morning outlook shows Isaias as a post-tropical low near the Tennessee–Kentucky border, and the only area being watched is a disorganized low far out near the Cabo Verde Islands, with a low 20% chance of forming over the next 7 days. NHC discontinued the last storm surge and tropical storm warnings for Florida by 4 a.m. CDT on Oct. 10. Under section 627.4025, Florida Statutes, the hurricane-deductible period ends 72 hours after the last hurricane watch or warning for Florida ends.',
          why: 'Damage from a separate storm after that window usually falls under your regular deductible, not the hurricane deductible. Your declarations page shows which deductible applies to which peril.',
          sources: [NHC_TWO, NHC_ADV15, FS_627_4025],
        },
      ],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 11 de octubre de 2026: Citizens reanuda las pólizas nuevas, el estado de emergencia llega a 30 condados y los reguladores empiezan a vigilar los reclamos por Isaías',
      metaTitle: 'Noticias de seguros, 11 oct. 2026: Citizens reabre | M&K',
      description:
        'Hoy: Citizens levantó la suspensión de emisión, la emergencia por Isaías abarca 30 condados, la solicitud de datos de la OIR empieza el lunes y el trópico está tranquilo cerca de Florida.',
      ogAlt: 'Una casa en Florida con un documento de póliza de seguro y un mapa del tiempo en calma',
      intro:
        'Cuatro novedades de los últimos dos días para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida, mientras comienza la recuperación tras el huracán Isaías. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline: 'Citizens levanta su pausa estatal: vuelven las pólizas nuevas y los aumentos de cobertura',
          summary:
            'Citizens Property Insurance Corporation informa que la suspensión de emisión (binding suspension) que aplicó por Isaías se levantó a las 5 a.m. hora del Este del sábado 10 de octubre, y que todas sus operaciones regulares se reanudaron. La pausa regía en todo el estado desde el 7 de octubre, así que los agentes no podían emitir solicitudes nuevas ni cambios que aumentaran la cobertura en ningún lugar de Florida, incluido Miami-Dade.',
          why: 'Si esperaba para iniciar una póliza con Citizens, subir sus límites o cerrar la compra de una casa, su agente ya puede seguir adelante. Una póliza nueva solo cubre pérdidas ocurridas después de su fecha de vigencia.',
          sources: [CITIZENS_LIFTED],
        },
        {
          headline: 'El estado de emergencia por Isaías se amplía a 30 condados, incluida la Bahía de Tampa',
          summary:
            'El gobernador DeSantis firmó la Orden Ejecutiva 26-212 el 10 de octubre, que añade los condados de Hillsborough, Pasco y Pinellas al estado de emergencia por Isaías, que ahora abarca 30 condados desde Escambia hasta la zona de la Bahía de Tampa. La orden también permite al Comisionado de Agricultura ordenar medidas de control de mosquitos en esos condados por el agua estancada que dejó la tormenta. Miami-Dade, Broward y Monroe no están en la lista.',
          why: 'Las órdenes de emergencia pueden afectar plazos y servicios en los condados incluidos. Si tiene una propiedad de alquiler, un local de negocio o una propiedad familiar en la costa del Golfo, revise los daños y reporte cualquier reclamo cuanto antes.',
          sources: [EO_26_212],
        },
        {
          headline: 'Los reguladores inician el lunes la solicitud de datos sobre reclamos por Isaías; el estado alerta sobre estafas',
          summary:
            'En un comunicado del 10 de octubre, el Departamento de Servicios Financieros (DFS) indicó que la Oficina de Regulación de Seguros (OIR) emitirá el lunes 12 de octubre su solicitud obligatoria de datos a las aseguradoras para empezar a recopilar información sobre el manejo de reclamos de propiedad, con resultados que se publicarán en el sitio de la OIR a medida que lleguen. La OIR dijo que vigilará de cerca cómo las aseguradoras manejan los reclamos en las próximas semanas. El DFS también advirtió sobre estafas de seguros, reparaciones y contratistas, y recordó su línea contra el fraude, 1-800-378-0445, y FraudFreeFlorida.com.',
          why: 'Antes de firmar un contrato de reparación o ceder su reclamo a alguien, verifique su licencia. Si un reclamo se estanca, la línea estatal de ayuda al consumidor, 1-877-693-5236, puede orientarle.',
          sources: [DFS_RESOURCES],
        },
        {
          headline: 'Trópico tranquilo cerca de Florida; se cierra el periodo del deducible por huracán',
          summary:
            'El pronóstico del NHC del domingo por la mañana muestra a Isaías como una baja postropical cerca de la frontera entre Tennessee y Kentucky, y la única zona vigilada es una baja desorganizada lejos, cerca de las islas de Cabo Verde, con una probabilidad baja (20%) de formarse en los próximos 7 días. El NHC canceló los últimos avisos de marejada ciclónica y de tormenta tropical para Florida a más tardar a las 4 a.m. hora del Centro del 10 de octubre. Según la sección 627.4025 de los Estatutos de Florida, el periodo del deducible por huracán termina 72 horas después de que finalice la última vigilancia o aviso de huracán para Florida.',
          why: 'Los daños de otra tormenta después de ese periodo normalmente se rigen por su deducible regular, no por el de huracán. Su página de declaraciones indica qué deducible aplica a cada riesgo.',
          sources: [NHC_TWO, NHC_ADV15, FS_627_4025],
        },
      ],
    },
    ru: {
      title:
        'Страховые новости Флориды, 11 октября 2026: Citizens снова оформляет полисы, режим ЧС расширен до 30 округов, регуляторы начинают сбор данных по убыткам от «Исайаса»',
      metaTitle: 'Страховые новости 11 окт. 2026: Citizens снова оформляет | M&K',
      description:
        'Сегодня: Citizens снял паузу на оформление, режим ЧС из-за «Исайаса» охватывает 30 округов, OIR в понедельник запрашивает данные об убытках, а у Флориды в тропиках спокойно.',
      ogAlt: 'Дом во Флориде, страховой полис и спокойная карта погоды',
      intro:
        'Четыре новости за последние два дня для владельцев жилья, водителей и малого бизнеса в Южной Флориде — после урагана «Исайас» начинается восстановление. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: 'Citizens снял паузу по всему штату: новые полисы и увеличение покрытия снова доступны',
          summary:
            'Citizens Property Insurance Corporation сообщает, что пауза на оформление (binding suspension), введённая из-за «Исайаса», снята с 5:00 по восточному времени в субботу, 10 октября, и компания вернулась к обычной работе. Пауза действовала по всему штату с 7 октября: агенты не могли оформлять новые заявки или изменения с увеличением покрытия нигде во Флориде, включая Майами-Дейд.',
          why: 'Если вы ждали, чтобы оформить полис Citizens, повысить лимиты или закрыть сделку по дому, агент снова может этим заняться. Новый полис покрывает только убытки, случившиеся после даты его вступления в силу.',
          sources: [CITIZENS_LIFTED],
        },
        {
          headline: 'Режим ЧС из-за «Исайаса» расширен до 30 округов, включая район Тампа-Бэй',
          summary:
            'Губернатор Десантис 10 октября подписал указ 26-212, добавив округа Хиллсборо, Паско и Пинеллас к режиму ЧС из-за «Исайаса» — теперь он охватывает 30 округов, от Эскамбии до района Тампа-Бэй. Указ также позволяет комиссару по сельскому хозяйству вводить меры борьбы с комарами в этих округах из-за стоячей воды после шторма. Майами-Дейд, Бровард и Монро в список не входят.',
          why: 'Указы о ЧС могут влиять на сроки и работу служб в перечисленных округах. Если у вас есть сдаваемое жильё, помещение бизнеса или семейная недвижимость на побережье Залива, проверьте повреждения и сообщите об убытке без промедления.',
          sources: [EO_26_212],
        },
        {
          headline: 'В понедельник регуляторы начнут сбор данных по убыткам от «Исайаса»; штат предупреждает о мошенниках',
          summary:
            'В пресс-релизе от 10 октября Департамент финансовых услуг (DFS) сообщил, что Управление по регулированию страхования (OIR) в понедельник, 12 октября, направит страховщикам обязательный запрос данных, чтобы начать сбор сведений об урегулировании имущественных убытков; результаты будут публиковаться на сайте OIR по мере поступления. OIR заявило, что в ближайшие недели будет внимательно следить за тем, как страховщики рассматривают заявления. DFS также предупредил о мошенничестве со страховкой, ремонтом и подрядчиками и напомнил о горячей линии по мошенничеству 1-800-378-0445 и сайте FraudFreeFlorida.com.',
          why: 'Прежде чем подписывать договор на ремонт или передавать кому-то права по своему заявлению, проверьте лицензию. Если урегулирование застопорилось, поможет горячая линия штата для потребителей: 1-877-693-5236.',
          sources: [DFS_RESOURCES],
        },
        {
          headline: 'В тропиках у Флориды спокойно; ураганный период для франшизы заканчивается',
          summary:
            'По утреннему прогнозу NHC в воскресенье, «Исайас» — посттропическая депрессия у границы Теннесси и Кентукки, а единственная зона наблюдения — неорганизованный циклон далеко у островов Кабо-Верде с низкой (20%) вероятностью развития в ближайшие 7 дней. Последние предупреждения о нагоне и тропическом шторме для Флориды NHC снял к 4:00 по центральному времени 10 октября. По статье 627.4025 Законов Флориды ураганный период для франшизы заканчивается через 72 часа после снятия последнего hurricane watch или warning для Флориды.',
          why: 'Ущерб от другого шторма после этого периода обычно подпадает под обычную франшизу, а не под ураганную. На странице деклараций полиса указано, какая франшиза относится к какому риску.',
          sources: [NHC_TWO, NHC_ADV15, FS_627_4025],
        },
      ],
    },
  },
};
