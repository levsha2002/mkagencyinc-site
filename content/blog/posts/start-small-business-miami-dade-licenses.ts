import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against official sources:
// - Florida Division of Corporations (Sunbiz), Start a Business: form a corporation, LLC or
//   partnership with the Division; fictitious name registration is needed only to trade
//   under a name other than the legal name.
// - s. 865.09 (2026): fictitious name must be registered before doing business under it;
//   applicant certifies the name was advertised once in a newspaper in the county of the
//   principal place of business; entity must be active with the Division.
// - Miami-Dade Tax Collector, Local Business Tax Receipt page: county receipt required for
//   each location and each business classification; businesses inside a municipality need
//   both a municipal and a county receipt; receipts run Oct 1 - Sep 30; apply online or with
//   a printed application; some categories have extra requirements.
// - s. 205.042 (2026): municipalities may levy a local business tax.
// - DBPR, Services Requiring a DBPR License (construction industry, electrical, cosmetology,
//   barbers, restaurants/food service, real estate, etc.).
// - s. 212.18(3) (2026): register with the Department of Revenue before engaging in business
//   that involves taxable sales.
// - s. 440.02 (2026): "employer" definition (4+ employees non-construction; 1+ construction).
// No fees, penalty amounts or processing times (not verified / change often).
const S = {
  sunbiz: 'https://dos.fl.gov/sunbiz/start-business/',
  s86509: 'https://www.flsenate.gov/Laws/Statutes/2026/865.09',
  lbtr: 'https://mdctaxcollector.gov/services/local-business-tax-receipt',
  s205042: 'https://www.flsenate.gov/Laws/Statutes/2026/205.042',
  dbpr: 'https://www2.myfloridalicense.com/services-requiring-a-dbpr-license/',
  s21218: 'https://www.flsenate.gov/Laws/Statutes/2026/212.18',
  s44002: 'https://www.flsenate.gov/Laws/Statutes/2026/440.02',
};

export const post: BlogPost = {
  slug: 'start-small-business-miami-dade-licenses',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Opening a Small Business in Miami-Dade: Registration, Business Tax Receipt and State Licenses',
      metaTitle: 'Opening a Small Business in Miami-Dade: First Steps | M&K Agency',
      description: 'Starting a business in Miami-Dade? First steps: Sunbiz registration, fictitious names, city and county business tax receipts, DBPR licenses and sales tax.',
      excerpt: 'Before the first customer walks in, a new Miami-Dade business usually deals with three offices: the state, the county and sometimes the city. Here is the order most owners follow, with the official links.',
      category: 'Business insurance',
      body: [
        { type: 'p', text: 'You have the idea, the van or the storefront, and maybe the first clients lined up. Before you open, Florida and Miami-Dade County expect a few registrations. None of them is complicated on its own, but the order matters, and skipping one can hold up the next. This is a general checklist with links to each official source; your business type may add steps.' },
        { type: 'h2', text: '1. Choose a structure and register with Sunbiz' },
        { type: 'p', text: 'Corporations, LLCs and partnerships are formed through the Florida Division of Corporations, known as **Sunbiz** ([Start a Business](' + S.sunbiz + ')). A sole proprietor working under their own legal name does not file a formation document there. Which structure fits you is a question for an accountant or attorney; the choice affects taxes and personal liability.' },
        { type: 'p', text: 'If you will trade under a name other than your legal name, say “Sunrise Pressure Cleaning” instead of your own name, you need a **fictitious name** registration first. Under [s. 865.09](' + S.s86509 + '), you must register the name before doing business under it, certify that it was advertised at least once in a newspaper in your county, and, if you are an entity, be active with the Division.' },
        { type: 'h2', text: '2. Get the local business tax receipt' },
        { type: 'p', text: 'Miami-Dade County requires a **Local Business Tax Receipt** for each place of business and for each type of business you operate there ([Miami-Dade Tax Collector](' + S.lbtr + ')). Some points owners often miss:' },
        { type: 'ul', items: [
          '**City and county.** If your business is inside a city such as Homestead or Florida City, you need the city’s receipt **and** the county’s. Florida law lets cities levy their own business tax ([s. 205.042](' + S.s205042 + ')).',
          '**It renews every year.** Receipts run from October 1 to September 30.',
          '**Your category may add requirements.** The tax collector lists extra documents for certain business types, so read the page for your category before you apply.',
          '**Late renewal has penalties.** Receipts not renewed by September 30 become delinquent, and the county’s mailed renewal notice is only a courtesy reminder.',
        ] },
        { type: 'h2', text: '3. Check for a state professional license' },
        { type: 'p', text: 'Many trades need a license from the Florida Department of Business and Professional Regulation (**DBPR**) before you can work: construction and electrical contractors, cosmetology and barbers, restaurants and other food service, real estate and others. DBPR keeps a list of [services requiring a DBPR license](' + S.dbpr + '). Some activities are regulated by other agencies instead, so if your trade is not on the list, search the relevant agency before you start.' },
        { type: 'h2', text: '4. Register for sales tax if you sell taxable items' },
        { type: 'p', text: 'If you will sell taxable goods or services, you need a certificate of registration from the Florida **Department of Revenue** before you start ([s. 212.18(3)](' + S.s21218 + ')). The department can tell you whether your sales are taxable.' },
        { type: 'h2', text: '5. Plan for employees and insurance' },
        { type: 'p', text: 'Hiring changes the picture. Florida’s workers’ compensation law generally applies once you have **four or more employees**, or **one or more** in the construction industry ([s. 440.02](' + S.s44002 + ')). Landlords, general contractors and some clients also ask for a certificate of insurance before you start a job, and a lease or contract may set specific coverage requirements. Read those clauses before you sign.' },
        { type: 'p', text: 'For the types of coverage a small business usually looks at, see our [commercial insurance page](/en/commercial-insurance-florida-city). Contractors can find the trade-specific rules on our [contractor insurance page](/en/contractor-insurance-florida).' },
        { type: 'callout', title: 'Ready for coverage?', text: '[Request a quote](/en/quote) once you know your structure, address and type of work. A licensed agent will walk you through it in English, Spanish or Russian. This is general information, not legal or tax advice; requirements depend on your business and location.' },
      ],
      faq: [
        { q: 'Do I need both a city and a county business tax receipt in Miami-Dade?', a: 'If your business is located inside a municipality, yes. The Miami-Dade Tax Collector states that those businesses need a receipt from the city and from the county.' },
        { q: 'Do I need to register a fictitious name?', a: 'Only if you do business under a name other than your legal name (or your entity’s legal name). Florida requires registration before you start using that name.' },
        { q: 'When does the Miami-Dade business tax receipt expire?', a: 'Receipts run from October 1 to September 30, so they are renewed every year.' },
      ],
      sources: [
        { label: 'Florida Division of Corporations (Sunbiz): Start a Business', url: S.sunbiz },
        { label: 'Florida Statutes s. 865.09 (2026): fictitious name registration', url: S.s86509 },
        { label: 'Miami-Dade Tax Collector: Local Business Tax Receipt', url: S.lbtr },
        { label: 'Florida Statutes s. 205.042 (2026): municipal local business tax', url: S.s205042 },
        { label: 'Florida DBPR: Services Requiring a DBPR License', url: S.dbpr },
        { label: 'Florida Statutes s. 212.18 (2026): registration with the Department of Revenue', url: S.s21218 },
        { label: 'Florida Statutes s. 440.02 (2026): workers’ compensation definitions (employment)', url: S.s44002 },
      ],
    },
    es: {
      title: 'Cómo abrir un pequeño negocio en Miami-Dade: registro, recibo de impuesto local y licencias del estado',
      metaTitle: 'Abrir un negocio en Miami-Dade: primeros pasos | M&K Agency',
      description: 'Abrir un negocio en Miami-Dade: registro en Sunbiz, nombre ficticio, recibo de impuesto local de la ciudad y el condado, licencias del DBPR y sales tax.',
      excerpt: 'Antes del primer cliente, un negocio nuevo en Miami-Dade suele pasar por tres oficinas: el estado, el condado y a veces la ciudad. Este es el orden que siguen la mayoría de los dueños, con los enlaces oficiales.',
      category: 'Seguro comercial',
      body: [
        { type: 'p', text: 'Ya tiene la idea, la van o el local, y quizás los primeros clientes. Antes de abrir, Florida y el condado de Miami-Dade piden algunos registros. Ninguno es complicado por sí solo, pero el orden importa y saltarse uno puede atrasar el siguiente. Esta es una lista general con el enlace a cada fuente oficial; según su tipo de negocio puede haber pasos adicionales.' },
        { type: 'h2', text: '1. Elija la estructura y regístrese en Sunbiz' },
        { type: 'p', text: 'Las corporaciones, LLC y sociedades se forman ante la División de Corporaciones de Florida, conocida como **Sunbiz** ([Start a Business](' + S.sunbiz + ')). Si usted trabaja como dueño único con su propio nombre legal, no presenta un documento de constitución allí. Qué estructura le conviene es una pregunta para su contador o abogado, porque afecta los impuestos y su responsabilidad personal.' },
        { type: 'p', text: 'Si va a operar con un nombre distinto a su nombre legal, por ejemplo “Sunrise Pressure Cleaning”, primero necesita registrar un **nombre ficticio**. Según la [sección 865.09](' + S.s86509 + '), debe registrar el nombre antes de usarlo, certificar que lo anunció al menos una vez en un periódico de su condado y, si es una entidad, estar activa ante la División.' },
        { type: 'h2', text: '2. Saque el recibo de impuesto local de negocios' },
        { type: 'p', text: 'Miami-Dade exige un **Local Business Tax Receipt** por cada local y por cada tipo de negocio que opere allí ([Recaudador de Impuestos de Miami-Dade](' + S.lbtr + ')). Algunos detalles que se pasan por alto:' },
        { type: 'ul', items: [
          '**Ciudad y condado.** Si su negocio está dentro de una ciudad, como Homestead o Florida City, necesita el recibo de la ciudad **y** el del condado. La ley de Florida permite a las ciudades cobrar su propio impuesto ([sección 205.042](' + S.s205042 + ')).',
          '**Se renueva cada año.** El recibo va del 1 de octubre al 30 de septiembre.',
          '**Su categoría puede tener requisitos extra.** El recaudador pide documentos adicionales para ciertos tipos de negocio; revise la página de su categoría antes de aplicar.',
          '**Renovar tarde tiene recargos.** Los recibos que no se renuevan antes del 30 de septiembre quedan morosos, y el aviso que envía el condado por correo es solo un recordatorio de cortesía.',
        ] },
        { type: 'h2', text: '3. Vea si necesita una licencia profesional del estado' },
        { type: 'p', text: 'Muchos oficios necesitan una licencia del Departamento de Negocios y Regulación Profesional de Florida (**DBPR**) antes de empezar: contratistas de construcción y electricistas, cosmetología y barberías, restaurantes y servicio de comida, bienes raíces, entre otros. El DBPR publica la lista de [servicios que requieren licencia](' + S.dbpr + '). Otras actividades las regula una agencia distinta; si su oficio no aparece, consulte a la agencia correspondiente antes de empezar.' },
        { type: 'h2', text: '4. Regístrese para el sales tax si vende algo gravable' },
        { type: 'p', text: 'Si va a vender productos o servicios sujetos a impuesto, necesita un certificado de registro del **Departamento de Ingresos** (Department of Revenue) antes de empezar ([sección 212.18(3)](' + S.s21218 + ')). El departamento le puede decir si sus ventas pagan impuesto.' },
        { type: 'h2', text: '5. Piense en empleados y seguros' },
        { type: 'p', text: 'Contratar empleados cambia las reglas. La ley de compensación laboral de Florida por lo general aplica desde **cuatro empleados**, o desde **uno** en la industria de la construcción ([sección 440.02](' + S.s44002 + ')). Además, muchos arrendadores, contratistas generales y clientes piden un certificado de seguro antes de empezar, y el contrato o el lease puede exigir coberturas específicas. Lea esas cláusulas antes de firmar.' },
        { type: 'p', text: 'Para ver las coberturas que suele considerar un negocio pequeño, visite nuestra [página de seguro comercial](/es/commercial-insurance-florida-city). Si es contratista, las reglas de su oficio están en nuestra [página de seguro para contratistas](/es/contractor-insurance-florida).' },
        { type: 'callout', title: '¿Listo para asegurar su negocio?', text: '[Pida una cotización](/es/quote) cuando tenga clara la estructura, la dirección y el tipo de trabajo. Un agente con licencia lo atiende en español, inglés o ruso. Esto es información general, no asesoría legal ni fiscal; los requisitos dependen de su negocio y su ubicación.' },
      ],
      faq: [
        { q: '¿Necesito recibo de la ciudad y del condado en Miami-Dade?', a: 'Si su negocio está dentro de un municipio, sí. El Recaudador de Impuestos de Miami-Dade indica que esos negocios necesitan el recibo de la ciudad y el del condado.' },
        { q: '¿Tengo que registrar un nombre ficticio?', a: 'Solo si opera con un nombre distinto a su nombre legal o al de su empresa. Florida exige registrarlo antes de empezar a usarlo.' },
        { q: '¿Cuándo vence el recibo de impuesto local de Miami-Dade?', a: 'El recibo va del 1 de octubre al 30 de septiembre, así que se renueva cada año.' },
      ],
      sources: [
        { label: 'División de Corporaciones de Florida (Sunbiz): Start a Business (en inglés)', url: S.sunbiz },
        { label: 'Estatutos de Florida, sección 865.09 (2026): registro de nombre ficticio (en inglés)', url: S.s86509 },
        { label: 'Recaudador de Impuestos de Miami-Dade: Local Business Tax Receipt (en inglés)', url: S.lbtr },
        { label: 'Estatutos de Florida, sección 205.042 (2026): impuesto local de negocios municipal (en inglés)', url: S.s205042 },
        { label: 'DBPR de Florida: servicios que requieren licencia (en inglés)', url: S.dbpr },
        { label: 'Estatutos de Florida, sección 212.18 (2026): registro con el Departamento de Ingresos (en inglés)', url: S.s21218 },
        { label: 'Estatutos de Florida, sección 440.02 (2026): definiciones de compensación laboral (empleo) (en inglés)', url: S.s44002 },
      ],
    },
    ru: {
      title: 'Как открыть малый бизнес в Майами-Дейд: регистрация, Business Tax Receipt и лицензии штата',
      metaTitle: 'Открыть бизнес в Майами-Дейд: первые шаги | M&K Agency',
      description: 'Открываете бизнес в Майами-Дейд? Первые шаги: регистрация на Sunbiz, fictitious name, business tax receipt от города и округа, лицензии DBPR и sales tax.',
      excerpt: 'До первого клиента новый бизнес в Майами-Дейд обычно проходит через три инстанции: штат, округ и иногда город. Вот порядок, которому следует большинство владельцев, со ссылками на официальные источники.',
      category: 'Коммерческое страхование',
      body: [
        { type: 'p', text: 'Идея есть, есть фургон или помещение, может быть, уже и первые клиенты. Но прежде чем начать работать, Флорида и округ Майами-Дейд ждут от вас несколько регистраций. Каждая по отдельности несложная, но важен порядок: пропустите одну — задержится следующая. Ниже общий чек-лист со ссылками на официальные источники; в зависимости от вида деятельности шагов может быть больше.' },
        { type: 'h2', text: '1. Выберите форму бизнеса и зарегистрируйтесь на Sunbiz' },
        { type: 'p', text: 'Корпорации, LLC и партнёрства регистрируются в Отделе корпораций Флориды — это сайт **Sunbiz** ([Start a Business](' + S.sunbiz + ')). Если вы работаете как sole proprietor под своим собственным именем, учредительные документы туда подавать не нужно. Какая форма вам подходит, лучше обсудить с бухгалтером или юристом: от этого зависят налоги и личная ответственность.' },
        { type: 'p', text: 'Если вы будете работать под названием, которое отличается от вашего юридического имени, например «Sunrise Pressure Cleaning», сначала нужно зарегистрировать **fictitious name** (вымышленное название). По [ст. 865.09](' + S.s86509 + ') название регистрируют до начала работы под ним, подтверждают, что объявление о нём хотя бы раз вышло в газете вашего округа, а компания должна иметь активный статус в Отделе корпораций.' },
        { type: 'h2', text: '2. Получите Local Business Tax Receipt' },
        { type: 'p', text: 'Округ Майами-Дейд требует **Local Business Tax Receipt** (в обиходе — «бизнес-лицензия» или occupational license) на каждое место ведения бизнеса и на каждый вид деятельности ([Налоговый сборщик Майами-Дейд](' + S.lbtr + ')). Что часто упускают:' },
        { type: 'ul', items: [
          '**Город и округ.** Если бизнес находится в черте города, например Homestead или Florida City, нужна квитанция и от города, **и** от округа. Закон Флориды разрешает городам вводить свой налог на бизнес ([ст. 205.042](' + S.s205042 + ')).',
          '**Продлевается каждый год.** Квитанция действует с 1 октября по 30 сентября.',
          '**Для вашей категории могут быть доп. требования.** Для некоторых видов бизнеса нужны дополнительные документы — посмотрите страницу своей категории до подачи заявления.',
          '**За просрочку — штрафы.** Квитанция, не продлённая до 30 сентября, считается просроченной, а письмо-напоминание от округа — это лишь любезность, ответственность за продление на вас.',
        ] },
        { type: 'h2', text: '3. Проверьте, нужна ли лицензия штата' },
        { type: 'p', text: 'Для многих профессий нужна лицензия Департамента бизнеса и профессионального регулирования Флориды (**DBPR**) ещё до начала работы: строительные подрядчики и электрики, косметология и барберы, рестораны и общепит, недвижимость и другие. У DBPR есть [список услуг, для которых нужна лицензия](' + S.dbpr + '). Некоторые виды деятельности регулирует другое ведомство, поэтому, если вашей профессии нет в списке, уточните у профильного ведомства до старта.' },
        { type: 'h2', text: '4. Зарегистрируйтесь для sales tax, если продаёте облагаемое' },
        { type: 'p', text: 'Если вы будете продавать товары или услуги, облагаемые налогом, до начала продаж нужно получить certificate of registration в **Department of Revenue** Флориды ([ст. 212.18(3)](' + S.s21218 + ')). Там же подскажут, облагаются ли ваши продажи налогом.' },
        { type: 'h2', text: '5. Подумайте о сотрудниках и страховке' },
        { type: 'p', text: 'С наймом людей правила меняются. Закон Флориды о workers’ comp, как правило, применяется с **четырёх сотрудников**, а в строительстве — уже с **одного** ([ст. 440.02](' + S.s44002 + ')). Кроме того, арендодатели, генподрядчики и многие заказчики просят certificate of insurance до начала работ, а в договоре или lease могут быть прописаны конкретные требования к покрытию. Прочитайте эти пункты до подписания.' },
        { type: 'p', text: 'Какие виды страховки обычно рассматривает малый бизнес, смотрите на нашей [странице коммерческого страхования](/ru/commercial-insurance-florida-city). Подрядчикам — правила по их профессии на [странице страхования для подрядчиков](/ru/contractor-insurance-florida).' },
        { type: 'callout', title: 'Готовы застраховать бизнес?', text: '[Оставьте заявку на расчёт](/ru/quote), когда определитесь с формой бизнеса, адресом и видом работ. Лицензированный агент поможет на русском, английском или испанском. Это общая информация, а не юридическая или налоговая консультация; требования зависят от вашего бизнеса и местоположения.' },
      ],
      faq: [
        { q: 'Нужна ли в Майами-Дейд квитанция и от города, и от округа?', a: 'Если бизнес находится в черте города — да. Налоговый сборщик Майами-Дейд указывает, что таким бизнесам нужны обе квитанции: городская и окружная.' },
        { q: 'Нужно ли регистрировать fictitious name?', a: 'Только если вы работаете под названием, которое отличается от вашего юридического имени или названия компании. Флорида требует зарегистрировать его до начала использования.' },
        { q: 'Когда истекает Local Business Tax Receipt в Майами-Дейд?', a: 'Квитанция действует с 1 октября по 30 сентября, поэтому её продлевают каждый год.' },
      ],
      sources: [
        { label: 'Отдел корпораций Флориды (Sunbiz): Start a Business (на английском)', url: S.sunbiz },
        { label: 'Законы Флориды, ст. 865.09 (2026): регистрация fictitious name (на английском)', url: S.s86509 },
        { label: 'Налоговый сборщик Майами-Дейд: Local Business Tax Receipt (на английском)', url: S.lbtr },
        { label: 'Законы Флориды, ст. 205.042 (2026): муниципальный налог на бизнес (на английском)', url: S.s205042 },
        { label: 'DBPR Флориды: услуги, для которых нужна лицензия (на английском)', url: S.dbpr },
        { label: 'Законы Флориды, ст. 212.18 (2026): регистрация в Department of Revenue (на английском)', url: S.s21218 },
        { label: 'Законы Флориды, ст. 440.02 (2026): определения по workers’ comp (employment) (на английском)', url: S.s44002 },
      ],
    },
  },
};
