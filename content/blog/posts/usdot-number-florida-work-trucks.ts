import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against official sources:
// - s. 316.302(1)(b) (2026): owners/drivers of CMVs in intrastate commerce are subject to
//   49 CFR parts 382-386 and 390-397 as they existed on Dec 31, 2023, except as provided.
// - s. 316.302(2)(f): CMV with GVW, GVWR and GCWR under 26,001 lb, solely intrastate, no
//   placardable hazmat -> exempt from subsection (1), but must comply with 49 CFR parts 382,
//   392, 393 and ss. 396.3(a)(1), 396.9. (2)(e): agricultural harvest exemption.
// - s. 316.003 (2026): "commercial motor vehicle" = used on public highways in commerce and
//   GVWR 10,000 lb or more, or designed for more than 15 passengers incl. driver, or hazmat.
// - FLHSMV "Florida USDOT Numbers" page: companies must register for a USDOT Number and display
//   it on CMV power units; apply through FMCSA registration; update every two years (updates on changes are 'encouraged'); exemptions
//   listed incl. 316.302(2)(e) and (2)(f) and 49 CFR 390.3(f); review with counsel.
// - s. 316.3025(3)(d)2 (2026): civil penalty for failure of an interstate or intrastate carrier
//   to register under 49 CFR 390.19 (amount omitted).
// Coverage note (site rule): the agency places intrastate coverage only. The article is about
// trucks operating within Florida and says interstate rules are out of scope.
const S = {
  s316302: 'https://www.flsenate.gov/Laws/Statutes/2026/316.302',
  s316003: 'https://www.flsenate.gov/Laws/Statutes/2026/316.003',
  s3163025: 'https://www.flsenate.gov/Laws/Statutes/2026/316.3025',
  flhsmv: 'https://www.flhsmv.gov/florida-highway-patrol/commercial-vehicle-enforcement/safety-enforcement/florida-usdot-numbers/',
  fmcsa: 'https://www.fmcsa.dot.gov/registration',
};

export const post: BlogPost = {
  slug: 'usdot-number-florida-work-trucks',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Does Your Florida Work Truck Need a USDOT Number? The Rules for Trucks That Stay in Florida',
      metaTitle: 'USDOT Number for a Florida Work Truck? | M&K Agency',
      description: 'When a work truck that stays in Florida needs a USDOT number: the 26,001-pound line, why trailers count, rules that apply below it, and how to register.',
      excerpt: 'Florida applies most federal truck safety rules to trucks that never leave the state. A plain guide to when a Florida work truck needs a USDOT number, why the trailer matters, and what still applies to lighter trucks.',
      category: 'Commercial auto insurance',
      body: [
        { type: 'p', text: 'Box trucks for local deliveries, a dump truck, a pickup towing an equipment trailer to job sites in Homestead and Kendall. If your trucks work only inside Florida, you may think federal trucking rules are for long-haul carriers. Florida law says otherwise. This article covers trucks that operate **solely within Florida**; trucks that cross state lines follow different federal rules that we do not cover here.' },
        { type: 'h2', text: 'Florida applies federal safety rules inside the state' },
        { type: 'p', text: 'Under [s. 316.302(1)(b)](' + S.s316302 + '), owners and drivers of commercial motor vehicles in **intrastate** commerce are subject to the federal motor carrier safety regulations, parts 382–386 and 390–397 of Title 49, with the exceptions written into the statute. Those federal parts include registering for a USDOT number. The Florida Highway Patrol puts it simply: by law, your company must register for a USDOT number and display it on its commercial motor vehicles ([FLHSMV](' + S.flhsmv + ')).' },
        { type: 'p', text: 'For Florida traffic law, a **commercial motor vehicle** is one used on public roads in commerce that has a gross vehicle weight rating of 10,000 pounds or more, is designed to carry more than 15 passengers including the driver, or carries hazardous materials ([s. 316.003](' + S.s316003 + ')).' },
        { type: 'h2', text: 'The 26,001-pound line' },
        { type: 'p', text: 'The most important exception for local businesses is in [s. 316.302(2)(f)](' + S.s316302 + '). A vehicle is exempt from the general rule when **all three** of these are under 26,001 pounds: the gross vehicle weight, the gross vehicle weight rating and the **gross combined weight rating**, and it operates solely in Florida without hazardous materials that require placards. FLHSMV lists this among the exemptions from USDOT registration.' },
        { type: 'ul', items: [
          '**The trailer counts.** Gross combined weight rating covers the truck plus what it tows. A pickup that is well under the line alone can cross it with a heavy equipment trailer.',
          '**Lighter trucks still have rules.** Even under 26,001 pounds, the statute requires compliance with federal rules on driving (part 392), parts and accessories (part 393), and certain inspection and maintenance items (ss. 396.3(a)(1) and 396.9), plus part 382 where it applies.',
          '**Other exemptions exist.** For example, (2)(e) covers some farm-product hauling during harvest. FLHSMV recommends reviewing any exemption with legal counsel before relying on it.',
        ] },
        { type: 'h2', text: 'If you need a number' },
        { type: 'ol', items: [
          'Apply online through the [FMCSA registration system](' + S.fmcsa + '). A company official completes the application.',
          'Display the number on each power unit as the federal marking rule requires.',
          'Update your registration **every two years**, even if nothing changed. FLHSMV also encourages updating it when your operation changes ([FLHSMV](' + S.flhsmv + ')).',
        ] },
        { type: 'p', text: 'Florida law sets civil penalties for an intrastate carrier that fails to register ([s. 316.3025](' + S.s3163025 + ')). If you are unsure whether a truck is over the line, check the weight ratings on the door sticker and the trailer before you put it to work.' },
        { type: 'h2', text: 'Where insurance fits' },
        { type: 'p', text: 'When we quote a work truck, we ask for the weight ratings, what it tows and carries, and where it goes. The coverage we place is for trucks operating within Florida. See our [work truck insurance page](/en/work-truck-insurance-florida) for the coverage side. If employees or friends drive your vehicles, our article on [lending your car and owner liability](/en/blog/lending-your-car-florida-owner-liability) explains why business vehicles are treated differently.' },
        { type: 'callout', title: 'Insuring a work truck?', text: '[Request a quote](/en/quote) with the truck’s weight rating and any trailers. A licensed agent will go over it with you in English, Spanish or Russian. This is general information, not legal advice; check the statute or FLHSMV for your vehicles.' },
      ],
      faq: [
        { q: 'Does a truck that only operates in Florida need a USDOT number?', a: 'Often, yes. Florida applies the federal registration rules to intrastate commercial motor vehicles. A common exemption covers vehicles whose weight, weight rating and combined weight rating are all under 26,001 pounds, operating only in Florida without placarded hazardous materials.' },
        { q: 'Does my trailer count toward the 26,001 pounds?', a: 'Yes, through the gross combined weight rating, which includes the trailer. The Florida exemption requires that it, too, be under 26,001 pounds.' },
        { q: 'How often do I update my USDOT registration?', a: 'Every two years, according to FLHSMV, even if nothing has changed. FLHSMV also encourages updates when your operation changes.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 316.302 (2026): commercial motor vehicles; safety regulations', url: S.s316302 },
        { label: 'Florida Statutes s. 316.003 (2026): definitions (commercial motor vehicle)', url: S.s316003 },
        { label: 'Florida Statutes s. 316.3025 (2026): penalties', url: S.s3163025 },
        { label: 'FLHSMV, Office of Commercial Vehicle Enforcement: Florida USDOT Numbers', url: S.flhsmv },
        { label: 'FMCSA: Registration', url: S.fmcsa },
      ],
    },
    es: {
      title: '¿Su camión de trabajo en Florida necesita número USDOT? Las reglas para camiones que no salen de Florida',
      metaTitle: '¿Número USDOT para su camión de trabajo en Florida? | M&K Agency',
      description: 'Cuándo un camión que solo opera en Florida necesita un USDOT: el límite de 26,001 libras, por qué cuenta el tráiler, qué aplica por debajo y cómo registrarse.',
      excerpt: 'Florida aplica la mayoría de las reglas federales de seguridad a camiones que nunca salen del estado. Una guía clara de cuándo un camión de trabajo necesita número USDOT, por qué importa el tráiler y qué aplica a los más livianos.',
      category: 'Seguro de auto comercial',
      body: [
        { type: 'p', text: 'Un box truck para entregas locales, un camión de volteo, una pickup que lleva un tráiler con equipo a obras en Homestead y Kendall. Si sus camiones solo trabajan dentro de Florida, puede pensar que las reglas federales son para camioneros de larga distancia. La ley de Florida dice otra cosa. Este artículo trata de camiones que operan **solo dentro de Florida**; los que cruzan a otros estados siguen otras reglas federales que no cubrimos aquí.' },
        { type: 'h2', text: 'Florida aplica las reglas federales dentro del estado' },
        { type: 'p', text: 'Según la [sección 316.302(1)(b)](' + S.s316302 + '), los dueños y conductores de vehículos comerciales en comercio **intraestatal** están sujetos a las normas federales de seguridad de transportistas, partes 382 a 386 y 390 a 397 del Título 49, con las excepciones que fija la ley. Esas partes incluyen el registro del número USDOT. La Patrulla de Carreteras de Florida lo dice claro: por ley, su empresa debe registrarse para obtener un número USDOT y mostrarlo en sus vehículos comerciales ([FLHSMV](' + S.flhsmv + ')).' },
        { type: 'p', text: 'Para la ley de tránsito de Florida, un **vehículo motorizado comercial** es el que se usa en vías públicas con fines comerciales y tiene un peso bruto vehicular nominal (GVWR) de 10,000 libras o más, está diseñado para más de 15 pasajeros contando al conductor, o transporta materiales peligrosos ([sección 316.003](' + S.s316003 + ')).' },
        { type: 'h2', text: 'La línea de las 26,001 libras' },
        { type: 'p', text: 'La excepción más importante para negocios locales está en la [sección 316.302(2)(f)](' + S.s316302 + '). Un vehículo queda exento de la regla general cuando **los tres** valores están por debajo de 26,001 libras: el peso bruto, el peso bruto nominal y el **peso bruto combinado nominal** (GCWR), y opera solo en Florida sin materiales peligrosos que requieran letreros. FLHSMV la incluye entre las exenciones del registro USDOT.' },
        { type: 'ul', items: [
          '**El tráiler cuenta.** El peso combinado nominal incluye el camión y lo que remolca. Una pickup muy por debajo de la línea puede pasarla con un tráiler de equipo pesado.',
          '**Los camiones livianos también tienen reglas.** Aun por debajo de 26,001 libras, la ley exige cumplir las normas federales sobre manejo (parte 392), piezas y accesorios (parte 393) y ciertos puntos de inspección y mantenimiento (secciones 396.3(a)(1) y 396.9), además de la parte 382 cuando aplique.',
          '**Hay otras exenciones.** Por ejemplo, el inciso (2)(e) cubre cierto transporte de productos agrícolas en época de cosecha. FLHSMV recomienda revisar cualquier exención con un abogado antes de usarla.',
        ] },
        { type: 'h2', text: 'Si necesita el número' },
        { type: 'ol', items: [
          'Solicítelo en línea en el [sistema de registro de la FMCSA](' + S.fmcsa + '). Lo llena un representante de la empresa.',
          'Muestre el número en cada unidad motriz como exige la norma federal de marcado.',
          'Actualice el registro **cada dos años**, aunque nada haya cambiado. FLHSMV también recomienda actualizarlo cuando cambie su operación ([FLHSMV](' + S.flhsmv + ')).',
        ] },
        { type: 'p', text: 'La ley de Florida fija multas civiles para el transportista intraestatal que no se registra ([sección 316.3025](' + S.s3163025 + ')). Si no está seguro de si un camión pasa la línea, revise los pesos nominales en la etiqueta de la puerta y en el tráiler antes de ponerlo a trabajar.' },
        { type: 'h2', text: 'Dónde entra el seguro' },
        { type: 'p', text: 'Cuando cotizamos un camión de trabajo, pedimos los pesos nominales, qué remolca y carga, y por dónde anda. Las coberturas que colocamos son para camiones que operan dentro de Florida. Vea nuestra [página de seguro para camiones de trabajo](/es/work-truck-insurance-florida) para la parte de coberturas. Si sus empleados o amigos manejan sus vehículos, nuestro artículo sobre [prestar su carro y la responsabilidad del dueño](/es/blog/lending-your-car-florida-owner-liability) explica por qué los vehículos de negocio se tratan distinto.' },
        { type: 'callout', title: '¿Va a asegurar un camión de trabajo?', text: '[Pida una cotización](/es/quote) con el peso nominal del camión y de sus tráileres. Un agente con licencia lo revisa con usted en español, inglés o ruso. Esto es información general, no asesoría legal; consulte la ley o a FLHSMV para sus vehículos.' },
      ],
      faq: [
        { q: '¿Un camión que solo opera en Florida necesita número USDOT?', a: 'Muchas veces, sí. Florida aplica las reglas federales de registro a los vehículos comerciales intraestatales. Una exención común cubre los vehículos cuyo peso, peso nominal y peso combinado nominal están por debajo de 26,001 libras, que operan solo en Florida y sin materiales peligrosos con letreros.' },
        { q: '¿Mi tráiler cuenta para las 26,001 libras?', a: 'Sí, a través del peso bruto combinado nominal, que incluye el tráiler. La exención de Florida exige que ese valor también esté por debajo de 26,001 libras.' },
        { q: '¿Cada cuánto actualizo mi registro USDOT?', a: 'Cada dos años, según FLHSMV, aunque nada haya cambiado. FLHSMV también recomienda actualizarlo cuando cambie su operación.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 316.302 (2026): vehículos comerciales; normas de seguridad (en inglés)', url: S.s316302 },
        { label: 'Estatutos de Florida, sección 316.003 (2026): definiciones (vehículo motorizado comercial) (en inglés)', url: S.s316003 },
        { label: 'Estatutos de Florida, sección 316.3025 (2026): sanciones (en inglés)', url: S.s3163025 },
        { label: 'FLHSMV, Oficina de Control de Vehículos Comerciales: números USDOT en Florida (en inglés)', url: S.flhsmv },
        { label: 'FMCSA: registro (en inglés)', url: S.fmcsa },
      ],
    },
    ru: {
      title: 'Нужен ли вашему рабочему траку во Флориде номер USDOT? Правила для машин, которые не выезжают из штата',
      metaTitle: 'Номер USDOT для рабочего трака во Флориде | M&K Agency',
      description: 'Когда рабочему траку, который ездит только по Флориде, нужен номер USDOT: граница 26,001 фунт, при чём тут прицеп, что действует ниже и как получить номер.',
      excerpt: 'Флорида применяет большинство федеральных правил безопасности к тракам, которые никогда не покидают штат. Простым языком о том, когда рабочей машине нужен номер USDOT, почему важен прицеп и что действует для лёгких машин.',
      category: 'Коммерческое автострахование',
      body: [
        { type: 'p', text: 'Бокс-трак для местных доставок, самосвал, пикап с прицепом для оборудования на объекты в Homestead и Kendall. Если ваши машины работают только во Флориде, может показаться, что федеральные правила — для дальнобойщиков. Закон Флориды говорит иначе. Эта статья — о машинах, которые работают **только в пределах Флориды**; для тех, что пересекают границу штата, действуют другие федеральные правила, о них мы здесь не пишем.' },
        { type: 'h2', text: 'Флорида применяет федеральные правила внутри штата' },
        { type: 'p', text: 'По [ст. 316.302(1)(b)](' + S.s316302 + ') владельцы и водители коммерческих транспортных средств, работающих **внутри штата** (intrastate), подчиняются федеральным правилам безопасности перевозчиков — частям 382–386 и 390–397 раздела 49 CFR, с исключениями, прописанными в законе. В эти части входит и регистрация номера USDOT. Дорожный патруль Флориды формулирует просто: по закону компания обязана зарегистрироваться для получения номера USDOT и наносить его на свои коммерческие машины ([FLHSMV](' + S.flhsmv + ')).' },
        { type: 'p', text: 'По дорожному законодательству Флориды **коммерческое транспортное средство** (CMV) — это машина, используемая на дорогах общего пользования в коммерческих целях, у которой полная разрешённая масса (GVWR) 10,000 фунтов и больше, или которая рассчитана более чем на 15 пассажиров с водителем, или которая везёт опасные грузы ([ст. 316.003](' + S.s316003 + ')).' },
        { type: 'h2', text: 'Граница 26,001 фунт' },
        { type: 'p', text: 'Главное исключение для местного бизнеса — в [ст. 316.302(2)(f)](' + S.s316302 + '). Машина освобождается от общего правила, если **все три** показателя меньше 26,001 фунта: фактическая масса, разрешённая масса и **разрешённая масса автопоезда** (GCWR), — и она работает только во Флориде без опасных грузов, требующих табличек. FLHSMV относит это к исключениям из регистрации USDOT.' },
        { type: 'ul', items: [
          '**Прицеп считается.** GCWR включает машину и то, что она тянет. Пикап, который сам по себе далеко от границы, с тяжёлым прицепом может её перейти.',
          '**У лёгких машин тоже есть правила.** Даже ниже 26,001 фунта закон требует соблюдать федеральные правила вождения (часть 392), требования к узлам и оборудованию (часть 393) и отдельные пункты по осмотру и обслуживанию (396.3(a)(1) и 396.9), а также часть 382, где она применима.',
          '**Есть и другие исключения.** Например, пункт (2)(e) касается части перевозок сельхозпродукции в сезон урожая. FLHSMV советует обсуждать любое исключение с юристом, прежде чем на него полагаться.',
        ] },
        { type: 'h2', text: 'Если номер нужен' },
        { type: 'ol', items: [
          'Подайте заявку онлайн в [системе регистрации FMCSA](' + S.fmcsa + '). Заявку заполняет представитель компании.',
          'Нанесите номер на каждый тягач (power unit), как требует федеральное правило о маркировке.',
          'Обновляйте регистрацию **каждые два года**, даже если ничего не изменилось. FLHSMV также советует обновлять данные при изменениях в работе ([FLHSMV](' + S.flhsmv + ')).',
        ] },
        { type: 'p', text: 'Закон Флориды предусматривает гражданские штрафы для внутриштатного перевозчика, который не зарегистрировался ([ст. 316.3025](' + S.s3163025 + ')). Если не уверены, перешла ли машина границу, проверьте разрешённую массу на наклейке в проёме двери и на прицепе до того, как выпускать её в работу.' },
        { type: 'h2', text: 'При чём здесь страховка' },
        { type: 'p', text: 'При расчёте для рабочей машины мы спрашиваем разрешённую массу, что она буксирует и везёт и где ездит. Мы страхуем машины, которые работают в пределах Флориды. О страховании — на нашей [странице для рабочих машин](/ru/work-truck-insurance-florida). Если ваши машины водят сотрудники или знакомые, прочитайте статью о том, [как одалживать машину и чем рискует владелец](/ru/blog/lending-your-car-florida-owner-liability): там объясняется, почему к машинам бизнеса подход другой.' },
        { type: 'callout', title: 'Страхуете рабочую машину?', text: '[Оставьте заявку на расчёт](/ru/quote), указав разрешённую массу машины и прицепов. Лицензированный агент разберёт всё с вами на русском, английском или испанском. Это общая информация, а не юридическая консультация; по своим машинам сверяйтесь с законом или с FLHSMV.' },
      ],
      faq: [
        { q: 'Нужен ли номер USDOT траку, который ездит только по Флориде?', a: 'Часто да. Флорида применяет федеральные правила регистрации к коммерческим машинам, работающим внутри штата. Распространённое исключение — машины, у которых масса, разрешённая масса и разрешённая масса автопоезда меньше 26,001 фунта, работающие только во Флориде без опасных грузов с табличками.' },
        { q: 'Учитывается ли прицеп в 26,001 фунт?', a: 'Да, через разрешённую массу автопоезда (GCWR), которая включает прицеп. Для исключения во Флориде она тоже должна быть меньше 26,001 фунта.' },
        { q: 'Как часто обновлять регистрацию USDOT?', a: 'По данным FLHSMV — каждые два года, даже если ничего не изменилось. FLHSMV также советует обновлять данные при изменениях в работе.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 316.302 (2026): коммерческие транспортные средства, правила безопасности (на английском)', url: S.s316302 },
        { label: 'Законы Флориды, ст. 316.003 (2026): определения (коммерческое транспортное средство) (на английском)', url: S.s316003 },
        { label: 'Законы Флориды, ст. 316.3025 (2026): санкции (на английском)', url: S.s3163025 },
        { label: 'FLHSMV, Управление контроля коммерческого транспорта: номера USDOT во Флориде (на английском)', url: S.flhsmv },
        { label: 'FMCSA: регистрация (на английском)', url: S.fmcsa },
      ],
    },
  },
};
