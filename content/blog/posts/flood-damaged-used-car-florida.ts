import type { BlogPost } from '../types';

// Facts checked 2026-10-14 against official sources: FLHSMV Flooded Vehicles
// consumer advisory + Motor Vehicle Check; F.S. 319.14 and 319.30 (2026 text on
// flsenate.gov); DOJ BJA NMVTIS consumer pages; NICB VINCheck (nonprofit). No
// private insurers or commercial vehicle-history companies named. Buyer-focused;
// links to comprehensive-vs-collision-florida and when-is-a-car-totaled-florida
// rather than repeating coverage or total-loss rules.
const S = {
  flhsmvFlood: 'https://www.flhsmv.gov/safety-center/consumer-education/consumer-advisory-flooded-vehicles/',
  mvCheck: 'https://services.flhsmv.gov/MVCheckWeb',
  s1914: 'https://www.flsenate.gov/Laws/Statutes/2026/319.14',
  s1930: 'https://www.flsenate.gov/Laws/Statutes/2026/319.30',
  nmvtis: 'https://vehiclehistory.bja.ojp.gov/nmvtis_consumers',
  nmvtisProviders: 'https://vehiclehistory.bja.ojp.gov/nmvtis_vehiclehistory',
  nicb: 'https://www.nicb.org/vincheck',
  flhsmvIns: 'https://www.flhsmv.gov/insurance/',
};

export const post: BlogPost = {
  slug: 'flood-damaged-used-car-florida',
  datePublished: '2026-10-14',
  translations: {
    en: {
      title: 'Buying a Used Car After a Storm: How to Spot a Flood-Damaged Title in Florida',
      metaTitle: 'Flood-Damaged Used Car Titles in Florida | M&K Agency',
      description:
        'How Florida brands a flood vehicle on the title, how to check VIN and brands before you buy, and what out-of-state cars can hide after a hurricane.',
      ogAlt:
        'A car standing in floodwater next to a title document stamped FLOOD and a magnifying glass',
      excerpt:
        'After a hurricane, flood-damaged cars can appear on lots and private sales. Here is how Florida brands the title and how buyers can check before they pay.',
      category: 'Car insurance',
      body: [
        {
          type: 'p',
          text:
            'After a storm season in Florida, used-car shoppers in Miami-Dade and Homestead often see more cars leave other parts of the state — and arrive from other states — looking clean on the outside. Some of those vehicles sat in floodwater. Florida law brands many of them as a **"flood vehicle"** on the title and requires written disclosure before a sale. This guide is for buyers: what the brand means, where to look it up, and what FLHSMV says to inspect in person. For how flood damage is treated on an auto policy, see [Comprehensive vs. collision in Florida](/en/blog/comprehensive-vs-collision-florida). For total loss and actual cash value, see [When is a car totaled in Florida?](/en/blog/when-is-a-car-totaled-florida).',
        },
        { type: 'h2', text: 'What Florida means by "flood vehicle"' },
        {
          type: 'p',
          text:
            'Under [s. 319.14(1)(c)8, F.S.](' +
            S.s1914 +
            '), a **flood vehicle** is a motor vehicle or mobile home that was declared a **total loss** under [s. 319.30(3)(a)](' +
            S.s1930 +
            ') because of **water damage**. In plain terms: an insurer paid to replace the vehicle after water ruined it, or — for an uninsured vehicle — the repair cost met the statute\'s total-loss threshold. FLHSMV explains that when a flooded vehicle is reported to the owner\'s insurer, the insurer brands the vehicle and reports it to the department. A brand is a descriptive label on the title that identifies a prior condition such as junk, salvage or flood ([FLHSMV flooded-vehicles advisory](' +
            S.flhsmvFlood +
            ')).',
        },
        {
          type: 'p',
          text:
            'The same statute says a person may not knowingly offer, sell or exchange a flood vehicle until FLHSMV has stamped that fact in a conspicuous place on the title ([s. 319.14(1)(b)](' +
            S.s1914 +
            ')). Before the sale is finished, the seller must **disclose in writing** that the vehicle is a flood vehicle ([s. 319.14(2)](' +
            S.s1914 +
            ')). Ads that offer such a vehicle must state the flood status clearly ([s. 319.14(3)](' +
            S.s1914 +
            ')). Once a brand is on the title, it must also appear on the registration certificate and **carry forward** on every later title for the life of the vehicle ([s. 319.14(4)](' +
            S.s1914 +
            ')).',
        },
        {
          type: 'callout',
          title: 'Rebuilt is a separate stamp',
          text:
            'If a salvage or flood car is rebuilt, FLHSMV inspects major component parts before issuing a rebuilt title, and a rebuilt decal is affixed ([s. 319.14(1)(b)](' +
            S.s1914 +
            '); [FLHSMV](' +
            S.flhsmvFlood +
            ')). A rebuilt stamp does not erase the history you should still research.',
        },
        { type: 'h2', text: 'Why out-of-state cars need extra caution' },
        {
          type: 'p',
          text:
            'Florida participates in title branding, but **title rules differ by state**. FLHSMV states clearly that a flood-damaged vehicle from another state can be sold in Florida with a **clean title** if the other state never branded it ([FLHSMV FAQ](' +
            S.flhsmvFlood +
            ')). That is why a Florida-only title printout is not enough when the car recently moved across state lines. Check the national brand history as well.',
        },
        { type: 'h2', text: 'Three lookups to run before you pay' },
        {
          type: 'ol',
          items: [
            '**Florida Motor Vehicle Check (Florida-titled cars):** Enter the VIN or title number at [FLHSMV\'s Motor Vehicle Information Check](' +
              S.mvCheck +
              '). FLHSMV says this confirms the vehicle description and shows brands on Florida titles ([advisory](' +
              S.flhsmvFlood +
              ')).',
            '**NMVTIS (national brand history):** The National Motor Vehicle Title Information System, overseen through the U.S. Department of Justice, lets consumers research title information, the latest reported odometer reading, **brand history** (including flood, junk and salvage) and, when available, theft data ([NMVTIS for consumers](' +
              S.nmvtis +
              ')). Once a state brands a vehicle, that brand becomes a permanent part of the NMVTIS record. Obtain a report through an [approved NMVTIS data provider](' +
              S.nmvtisProviders +
              ') listed on the official site — do not confuse this with private commercial reports that are not NMVTIS.',
            '**NICB VINCheck (insurance salvage/flood/theft tips):** The National Insurance Crime Bureau, a nonprofit, offers [VINCheck](' +
              S.nicb +
              '), which checks participating insurers\' reports of stolen-unrecovered, salvage or flood-damaged vehicles. NICB limits searches (five per IP address in 24 hours) and states that a clean result is **not** a full history. Use it as one more screen, not the only one.',
          ],
        },
        {
          type: 'callout',
          title: 'Match the VIN on the dash and door',
          text:
            'Copy the VIN from the metal plate on the dash (visible through the windshield) and the driver-door sticker. If those numbers disagree, or disagree with the seller\'s paperwork, walk away and do not rely on a printed "report" the seller hands you.',
        },
        { type: 'h2', text: 'What to look for on the car itself' },
        {
          type: 'p',
          text:
            'Paperwork cannot replace a physical inspection. FLHSMV\'s buyer tips include ([advisory](' +
            S.flhsmvFlood +
            ')):',
        },
        {
          type: 'ul',
          items: [
            'A **musty** smell, or a strong air-freshener smell that may be covering mildew.',
            'A **waterline** or mud in places sellers skip: the glove box, under the dash and in the trunk.',
            '**Rust or corrosion** under the vehicle that looks wrong for the car\'s age and where it was supposedly driven.',
          ],
        },
        {
          type: 'p',
          text:
            'FLHSMV also notes that vehicles are **not** inspected before they are branded as flood vehicles; insurers brand them as salvage flood when reported. If the car was later rebuilt, the department inspects major components to help ensure parts were not stolen — not to certify that the car is a good buy ([FLHSMV FAQ](' +
            S.flhsmvFlood +
            ')). Have an independent mechanic you choose inspect any used car before you buy, especially after a hurricane year.',
        },
        { type: 'h2', text: 'Insurance before you drive it home' },
        {
          type: 'p',
          text:
            'Florida requires **PIP** and **property damage liability** to register a car with four or more wheels ([FLHSMV insurance requirements](' +
            S.flhsmvIns +
            ')). Those coverages do not repair your own car. Flood damage to your vehicle is generally a **comprehensive** ("other than collision") claim when you carry that optional coverage — details in our [comprehensive vs. collision guide](/en/blog/comprehensive-vs-collision-florida). If you finance the purchase, the lender will often require comprehensive and collision. Get the policy (or binder) in place **before** you drive off the lot, and bring the VIN to your agent so the vehicle is listed correctly.',
        },
        {
          type: 'p',
          text:
            'Buying in Homestead or Florida City? See our [car insurance page](/en/car-insurance-florida-city), [request a quote](/en/quote) or call **(305) 859-3953**. Our office at 33550 S Dixie Hwy, Suite 102, Florida City, is open Monday–Friday 9–6 and Saturday by appointment. This article is general information, not legal advice; coverage depends on your policy and the facts of each vehicle.',
        },
      ],
      faq: [
        {
          q: 'What does a "flood vehicle" brand mean in Florida?',
          a: 'Under s. 319.14, it means the vehicle was declared a total loss because of water damage under s. 319.30(3)(a). The brand must be stamped on the title and carried forward on later titles.',
        },
        {
          q: 'Do sellers and dealers have to tell me a car was flood-branded?',
          a: 'Yes. Florida law requires written disclosure before the sale, and advertisements must state the flood status. FLHSMV also states that dealers must disclose branded vehicles in writing.',
        },
        {
          q: 'How do I check a Florida title for a flood brand?',
          a: 'Use FLHSMV\'s Motor Vehicle Information Check with the VIN or title number. For cars that may have been titled in other states, also get an NMVTIS report through an approved provider on vehiclehistory.bja.ojp.gov.',
        },
        {
          q: 'Can a flood brand be washed off if the car is retitled?',
          a: 'In Florida, s. 319.14(4) requires the brand to carry forward on subsequent titles and registrations. NMVTIS also keeps brands reported by states as a permanent part of the vehicle\'s record. Still check both Florida and NMVTIS, because not every state brands flood damage the same way.',
        },
      ],
      sources: [
        { label: 'FLHSMV: Flooded Vehicles consumer advisory', url: S.flhsmvFlood },
        { label: 'FLHSMV: Motor Vehicle Information Check', url: S.mvCheck },
        { label: 'Florida Statutes s. 319.14 (2026): flood vehicle brand and disclosure', url: S.s1914 },
        { label: 'Florida Statutes s. 319.30 (2026): total loss and salvage', url: S.s1930 },
        { label: 'NMVTIS: information for consumers (U.S. DOJ / BJA)', url: S.nmvtis },
        { label: 'NMVTIS: approved data providers', url: S.nmvtisProviders },
        { label: 'NICB VINCheck (nonprofit)', url: S.nicb },
        { label: 'FLHSMV: Florida Insurance Requirements', url: S.flhsmvIns },
      ],
    },
    es: {
      title:
        'Comprar un carro usado después de una tormenta: cómo detectar un título de flood vehicle en Florida',
      metaTitle: 'Título de carro inundado (flood vehicle) en Florida | M&K Agency',
      description:
        'Qué significa la marca flood vehicle en el título de Florida, cómo revisar el VIN antes de comprar y por qué un carro de otro estado puede ocultar daños por agua.',
      ogAlt:
        'Un carro en agua de inundación junto a un título sellado FLOOD y una lupa',
      excerpt:
        'Después de un huracán, carros dañados por agua aparecen en lotes y ventas particulares. Así marca Florida el título y cómo puede verificarlo el comprador.',
      category: 'Seguro de auto',
      body: [
        {
          type: 'p',
          text:
            'Después de la temporada de tormentas en Florida, quien busca un carro usado en Miami-Dade u Homestead ve más vehículos que vienen de otras zonas del estado — y de otros estados — con aspecto impecable por fuera. Algunos estuvieron bajo el agua. La ley de Florida marca muchos como **"flood vehicle"** en el título y exige divulgación por escrito antes de la venta. Esta guía es para compradores: qué significa la marca, dónde consultarla y qué recomienda FLHSMV revisar en persona. Sobre cómo trata la póliza de auto el daño por inundación, vea [Cobertura amplia vs. colisión en Florida](/es/blog/comprehensive-vs-collision-florida). Sobre pérdida total y valor real en efectivo, vea [¿Cuándo se considera pérdida total un carro en Florida?](/es/blog/when-is-a-car-totaled-florida).',
        },
        { type: 'h2', text: 'Qué significa "flood vehicle" en Florida' },
        {
          type: 'p',
          text:
            'Según la [sección 319.14(1)(c)8](' +
            S.s1914 +
            '), un **flood vehicle** es un vehículo o casa móvil declarado **pérdida total** conforme a la [sección 319.30(3)(a)](' +
            S.s1930 +
            ') por **daños causados por agua**. En la práctica: la aseguradora pagó para reemplazar el vehículo tras el agua, o — si no había seguro — el costo de reparación alcanzó el umbral legal de pérdida total. FLHSMV explica que, cuando se reporta un vehículo inundado a la aseguradora del dueño, esta lo marca y lo informa al departamento. Una marca (brand) es una etiqueta descriptiva en el título que identifica una condición previa, como chatarra, salvage o inundación ([aviso de FLHSMV](' +
            S.flhsmvFlood +
            ')).',
        },
        {
          type: 'p',
          text:
            'La misma ley prohíbe ofrecer, vender o intercambiar a sabiendas un flood vehicle hasta que FLHSMV selle ese hecho en un lugar visible del título ([sección 319.14(1)(b)](' +
            S.s1914 +
            ')). Antes de cerrar la venta, el vendedor debe **informarlo por escrito** ([sección 319.14(2)](' +
            S.s1914 +
            ')). Los anuncios deben indicar claramente que se trata de un flood vehicle ([sección 319.14(3)](' +
            S.s1914 +
            ')). Una vez en el título, la marca también aparece en el registro y **sigue** en todos los títulos posteriores durante la vida del vehículo ([sección 319.14(4)](' +
            S.s1914 +
            ')).',
        },
        {
          type: 'callout',
          title: 'Rebuilt es otro sello',
          text:
            'Si un carro salvage o flood se reconstruye, FLHSMV inspecciona componentes mayores antes del título rebuilt y coloca una calcomanía ([sección 319.14(1)(b)](' +
            S.s1914 +
            '); [FLHSMV](' +
            S.flhsmvFlood +
            ')). Ese sello no borra el historial que usted debe investigar.',
        },
        { type: 'h2', text: 'Por qué un carro de otro estado exige más cuidado' },
        {
          type: 'p',
          text:
            'Florida participa en el marcado de títulos, pero **las reglas varían por estado**. FLHSMV indica que un vehículo dañado por inundación en otro estado puede venderse en Florida con un **título limpio** si ese estado nunca lo marcó ([preguntas frecuentes de FLHSMV](' +
            S.flhsmvFlood +
            ')). Por eso un solo comprobante de Florida no basta si el carro cambió de estado hace poco. Revise también el historial nacional de marcas.',
        },
        { type: 'h2', text: 'Tres consultas antes de pagar' },
        {
          type: 'ol',
          items: [
            '**Motor Vehicle Check de Florida (títulos de Florida):** Ingrese el VIN o el número de título en el [Motor Vehicle Information Check de FLHSMV](' +
              S.mvCheck +
              '). FLHSMV indica que confirma la descripción del vehículo y muestra las marcas en títulos de Florida ([aviso](' +
              S.flhsmvFlood +
              ')).',
            '**NMVTIS (historial nacional de marcas):** El National Motor Vehicle Title Information System, con supervisión del Departamento de Justicia de EE. UU., permite investigar información del título, el odómetro más reciente reportado, el **historial de marcas** (incluidas flood, junk y salvage) y, cuando existe, datos de robo ([NMVTIS para consumidores](' +
              S.nmvtis +
              ')). Cuando un estado marca un vehículo, esa marca pasa a ser parte permanente del registro NMVTIS. Obtenga el informe mediante un [proveedor de datos NMVTIS aprobado](' +
              S.nmvtisProviders +
              ') listado en el sitio oficial; no lo confunda con informes comerciales privados que no son NMVTIS.',
            '**VINCheck de NICB (pistas de salvage/flood/robo de aseguradoras):** El National Insurance Crime Bureau, una organización sin fines de lucro, ofrece [VINCheck](' +
              S.nicb +
              '), que consulta reportes de aseguradoras participantes sobre vehículos robados no recuperados, salvage o dañados por inundación. NICB limita las búsquedas (cinco por dirección IP en 24 horas) y aclara que un resultado limpio **no** es un historial completo. Úselo como una pantalla más, no como la única.',
          ],
        },
        {
          type: 'callout',
          title: 'Compare el VIN del tablero y de la puerta',
          text:
            'Copie el VIN de la placa del tablero (visible por el parabrisas) y de la etiqueta de la puerta del conductor. Si no coinciden, o no coinciden con los papeles del vendedor, no compre y no confíe solo en un "informe" que le entregue el vendedor.',
        },
        { type: 'h2', text: 'Qué revisar en el carro' },
        {
          type: 'p',
          text:
            'Los papeles no reemplazan una inspección física. Los consejos de FLHSMV para compradores incluyen ([aviso](' +
            S.flhsmvFlood +
            ')):',
        },
        {
          type: 'ul',
          items: [
            'Olor a **humedad** o a ambientador fuerte que puede ocultar moho.',
            'Una **línea de agua** o lodo en sitios que el vendedor suele saltarse: la guantera, debajo del tablero y el baúl.',
            '**Óxido o corrosión** debajo del vehículo que no corresponde a la edad ni al lugar donde supuestamente se usó.',
          ],
        },
        {
          type: 'p',
          text:
            'FLHSMV también señala que los vehículos **no** se inspeccionan antes de marcarlos como flood; las aseguradoras los marcan como salvage flood cuando se reportan. Si luego se reconstruyó, el departamento inspecciona componentes mayores para ayudar a detectar piezas robadas — no para certificar que sea una buena compra ([FAQ de FLHSMV](' +
            S.flhsmvFlood +
            ')). Haga que un mecánico independiente de su elección revise cualquier carro usado antes de comprarlo, sobre todo después de un año de huracanes.',
        },
        { type: 'h2', text: 'Seguro antes de llevárselo' },
        {
          type: 'p',
          text:
            'Florida exige **PIP** y **responsabilidad por daños a la propiedad** para registrar un carro de cuatro ruedas o más ([requisitos de FLHSMV](' +
            S.flhsmvIns +
            ')). Esas coberturas no reparan su propio carro. El daño por inundación a su vehículo suele ser un reclamo de **cobertura amplia** (comprehensive / other than collision) cuando usted la tiene — detalles en nuestra guía de [cobertura amplia vs. colisión](/es/blog/comprehensive-vs-collision-florida). Si financia la compra, el acreedor suele exigir cobertura amplia y colisión. Tramite la póliza (o el binder) **antes** de salir del lote y lleve el VIN a su agente para que el vehículo quede bien listado.',
        },
        {
          type: 'p',
          text:
            '¿Compra en Homestead o Florida City? Vea nuestra [página de seguro de auto](/es/car-insurance-florida-city), [solicite una cotización](/es/quote) o llame al **(305) 859-3953**. La oficina en 33550 S Dixie Hwy, Suite 102, Florida City, atiende de lunes a viernes de 9 a 6 y el sábado con cita. Este artículo es información general, no asesoría legal; la cobertura depende de su póliza y de cada vehículo.',
        },
      ],
      faq: [
        {
          q: '¿Qué significa la marca "flood vehicle" en Florida?',
          a: 'Según la sección 319.14, el vehículo fue declarado pérdida total por daños de agua conforme a la sección 319.30(3)(a). La marca debe sellarse en el título y continuar en los títulos posteriores.',
        },
        {
          q: '¿El vendedor o el concesionario deben avisarme si el carro tiene marca de inundación?',
          a: 'Sí. La ley exige divulgación por escrito antes de la venta, y los anuncios deben indicar el estado de flood. FLHSMV también indica que los concesionarios deben divulgar por escrito los vehículos marcados.',
        },
        {
          q: '¿Cómo reviso un título de Florida por marca de inundación?',
          a: 'Use el Motor Vehicle Information Check de FLHSMV con el VIN o el número de título. Si el carro pudo haberse titulado en otros estados, obtenga también un informe NMVTIS por un proveedor aprobado en vehiclehistory.bja.ojp.gov.',
        },
        {
          q: '¿Se puede borrar la marca de flood al retitular el carro?',
          a: 'En Florida, la sección 319.14(4) exige que la marca continúe en títulos y registros posteriores. NMVTIS también conserva las marcas reportadas por los estados como parte permanente del registro. Aun así revise Florida y NMVTIS, porque no todos los estados marcan igual el daño por agua.',
        },
      ],
      sources: [
        { label: 'FLHSMV: aviso al consumidor sobre vehículos inundados (en inglés)', url: S.flhsmvFlood },
        { label: 'FLHSMV: Motor Vehicle Information Check', url: S.mvCheck },
        { label: 'Estatutos de Florida, sección 319.14 (2026): marca flood vehicle', url: S.s1914 },
        { label: 'Estatutos de Florida, sección 319.30 (2026): pérdida total y salvage', url: S.s1930 },
        { label: 'NMVTIS: información para consumidores (DOJ / BJA)', url: S.nmvtis },
        { label: 'NMVTIS: proveedores de datos aprobados', url: S.nmvtisProviders },
        { label: 'NICB VINCheck (organización sin fines de lucro)', url: S.nicb },
        { label: 'FLHSMV: requisitos de seguro en Florida', url: S.flhsmvIns },
      ],
    },
    ru: {
      title: 'Покупка б/у машины после шторма: как распознать «утопленника» во Флориде',
      metaTitle: 'Титул flood vehicle во Флориде | M&K Agency',
      description:
        'Что значит отметка flood vehicle в титуле Флориды, как проверить VIN до покупки и почему машина из другого штата может скрывать повреждения от воды.',
      ogAlt:
        'Машина в паводковой воде рядом с титулом со штампом FLOOD и лупой',
      excerpt:
        'После урагана на площадках и у частных продавцов появляются машины с водяными повреждениями. Как Флорида ставит отметку в титул и что проверить покупателю.',
      category: 'Автостраховка',
      body: [
        {
          type: 'p',
          text:
            'После сезона штормов во Флориде покупатели подержанных машин в Майами-Дейд и Хомстеде чаще видят авто из других районов штата — и из других штатов — с «чистым» видом снаружи. Часть из них стояла в воде. Закон Флориды помечает многие как **"flood vehicle"** в титуле и требует письменного раскрытия перед продажей. Это гайд для покупателя: что значит отметка, где её проверить и что FLHSMV советует осмотреть на месте. Как полис автостраховки относится к ущербу от наводнения — в статье [Comprehensive и collision во Флориде](/ru/blog/comprehensive-vs-collision-florida). Что такое тотал и рыночная стоимость — в [«Когда машину признают тоталом во Флориде»](/ru/blog/when-is-a-car-totaled-florida).',
        },
        { type: 'h2', text: 'Что во Флориде значит «flood vehicle»' },
        {
          type: 'p',
          text:
            'По [ст. 319.14(1)(c)8](' +
            S.s1914 +
            ') **flood vehicle** — это автомобиль или mobile home, признанный **тоталом** по [ст. 319.30(3)(a)](' +
            S.s1930 +
            ') из‑за **повреждений водой**. Проще: страховщик выплатил замену после воды, или — без страховки — стоимость ремонта достигла порога тотала в законе. FLHSMV поясняет: когда затопленную машину сообщают страховщику владельца, страховщик ставит brand и передаёт сведения в департамент. Brand — описательная метка в титуле о прежнем состоянии: junk, salvage, flood ([памятка FLHSMV](' +
            S.flhsmvFlood +
            ')).',
        },
        {
          type: 'p',
          text:
            'Тот же закон запрещает заведомо предлагать, продавать или обменивать flood vehicle, пока FLHSMV не проставит это на видном месте в титуле ([ст. 319.14(1)(b)](' +
            S.s1914 +
            ')). До завершения сделки продавец обязан **письменно сообщить**, что это flood vehicle ([ст. 319.14(2)](' +
            S.s1914 +
            ')). В объявлениях статус flood нужно указывать ясно ([ст. 319.14(3)](' +
            S.s1914 +
            ')). После появления в титуле отметка идёт и в registration и **переносится** на все последующие титулы на весь срок жизни машины ([ст. 319.14(4)](' +
            S.s1914 +
            ')).',
        },
        {
          type: 'callout',
          title: 'Rebuilt — отдельный штамп',
          text:
            'Если salvage- или flood-машину восстановили, FLHSMV проверяет крупные узлы до выдачи rebuilt-титула и клеит decal ([ст. 319.14(1)(b)](' +
            S.s1914 +
            '); [FLHSMV](' +
            S.flhsmvFlood +
            ')). Штамп rebuilt не стирает историю, которую всё равно стоит проверить.',
        },
        { type: 'h2', text: 'Почему машины из других штатов опаснее' },
        {
          type: 'p',
          text:
            'Флорида участвует в branding титулов, но **правила различаются по штатам**. FLHSMV прямо пишет: затопленную в другом штате машину можно продать во Флориде с **чистым титулом**, если тот штат её не пометил ([FAQ FLHSMV](' +
            S.flhsmvFlood +
            ')). Поэтому одной флоридской распечатки мало, если авто недавно переехало через границу штата. Смотрите и национальную историю brands.',
        },
        { type: 'h2', text: 'Три проверки до оплаты' },
        {
          type: 'ol',
          items: [
            '**Florida Motor Vehicle Check (титулы Флориды):** Введите VIN или номер титула на [Motor Vehicle Information Check FLHSMV](' +
              S.mvCheck +
              '). По словам FLHSMV, сервис подтверждает описание машины и показывает brands по флоридским титулам ([памятка](' +
              S.flhsmvFlood +
              ')).',
            '**NMVTIS (национальная история brands):** National Motor Vehicle Title Information System под надзором Минюста США позволяет узнать данные титула, последний заявленный пробег, **историю brands** (включая flood, junk и salvage) и, если есть, данные об угоне ([NMVTIS для потребителей](' +
              S.nmvtis +
              ')). Когда штат ставит brand, он становится постоянной частью записи NMVTIS. Отчёт берите у [одобренного провайдера NMVTIS](' +
              S.nmvtisProviders +
              ') со списка на официальном сайте — не путайте с частными коммерческими отчётами вне NMVTIS.',
            '**NICB VINCheck (сигналы страховщиков о salvage/flood/угоне):** National Insurance Crime Bureau, некоммерческая организация, даёт [VINCheck](' +
              S.nicb +
              '): сверка с сообщениями участвующих страховщиков об угнанных ненайденных, salvage или затопленных машинах. NICB ограничивает число запросов (пять с одного IP за 24 часа) и подчёркивает: «чистый» результат — **не** полная история. Это дополнительный фильтр, не единственный.',
          ],
        },
        {
          type: 'callout',
          title: 'Сверьте VIN на панели и на двери',
          text:
            'Спишите VIN с металлической пластины на панели (видно через лобовое) и с наклейки на двери водителя. Если номера не совпадают или не совпадают с бумагами продавца — уходите и не опирайтесь на «отчёт», который вам протянул продавец.',
        },
        { type: 'h2', text: 'Что смотреть на самой машине' },
        {
          type: 'p',
          text:
            'Бумаги не заменяют осмотр. Советы FLHSMV покупателям ([памятка](' +
            S.flhsmvFlood +
            ')):',
        },
        {
          type: 'ul',
          items: [
            'Запах **сырости** или сильный ароматизатор, которым маскируют плесень.',
            '**Линия воды** или грязь в местах, которые продавец часто не показывают: бардачок, под панелью, багажник.',
            '**Ржавчина или коррозия** снизу, нетипичные для возраста и заявленного региона эксплуатации.',
          ],
        },
        {
          type: 'p',
          text:
            'FLHSMV также отмечает: перед brand «flood» машину **не** осматривают; страховщики ставят salvage flood при сообщении. Если авто потом восстановили, департамент проверяет крупные узлы, чтобы снизить риск краденых деталей — а не чтобы подтвердить выгодную покупку ([FAQ FLHSMV](' +
            S.flhsmvFlood +
            ')). Перед сделкой закажите независимый осмотр у механика, которого выбрали вы, особенно после ураганного сезона.',
        },
        { type: 'h2', text: 'Страховка до того, как уедете на новой машине' },
        {
          type: 'p',
          text:
            'Во Флориде для регистрации легкового авто нужны **PIP** и **property damage liability** ([требования FLHSMV](' +
            S.flhsmvIns +
            ')). Они не чинят вашу собственную машину. Ущерб от воды по вашему авто обычно идёт по **comprehensive** («other than collision»), если эта опция есть — подробности в гайде [comprehensive vs. collision](/ru/blog/comprehensive-vs-collision-florida). При кредите кредитор часто требует comprehensive и collision. Оформите полис (или binder) **до** выезда с площадки и передайте агенту VIN, чтобы машина была правильно внесена.',
        },
        {
          type: 'p',
          text:
            'Покупаете в Хомстеде или Florida City? Смотрите нашу [страницу автостраховки](/ru/car-insurance-florida-city), [запросите котировку](/ru/quote) или звоните **(305) 859-3953**. Офис: 33550 S Dixie Hwy, Suite 102, Florida City; пн–пт 9–18, суббота по записи. Статья — общая информация, не юридическая консультация; покрытие зависит от вашего полиса и конкретной машины.',
        },
      ],
      faq: [
        {
          q: 'Что значит отметка «flood vehicle» во Флориде?',
          a: 'По ст. 319.14 машина признана тоталом из‑за повреждений водой по ст. 319.30(3)(a). Отметка ставится в титул и переносится на последующие титулы.',
        },
        {
          q: 'Обязан ли продавец или дилер сообщить о flood-марке?',
          a: 'Да. Закон требует письменного раскрытия до продажи, а в объявлениях нужно указать статус flood. FLHSMV также пишет, что дилеры обязаны письменно раскрывать branded-машины.',
        },
        {
          q: 'Как проверить флоридский титул на flood-марку?',
          a: 'Используйте Motor Vehicle Information Check FLHSMV по VIN или номеру титула. Если машина могла быть титулована в других штатах, возьмите также отчёт NMVTIS у одобренного провайдера на vehiclehistory.bja.ojp.gov.',
        },
        {
          q: 'Можно ли «смыть» flood-марку при переоформлении титула?',
          a: 'Во Флориде ст. 319.14(4) требует переносить марку на последующие титулы и registrations. NMVTIS тоже хранит brands штатов как постоянную часть записи. Всё равно проверяйте и Флориду, и NMVTIS: не все штаты одинаково маркируют ущерб от воды.',
        },
      ],
      sources: [
        { label: 'FLHSMV: памятка о затопленных машинах (на англ.)', url: S.flhsmvFlood },
        { label: 'FLHSMV: Motor Vehicle Information Check', url: S.mvCheck },
        { label: 'Законы Флориды, ст. 319.14 (2026): отметка flood vehicle', url: S.s1914 },
        { label: 'Законы Флориды, ст. 319.30 (2026): тотал и salvage', url: S.s1930 },
        { label: 'NMVTIS: для потребителей (DOJ / BJA)', url: S.nmvtis },
        { label: 'NMVTIS: одобренные провайдеры данных', url: S.nmvtisProviders },
        { label: 'NICB VINCheck (некоммерческая организация)', url: S.nicb },
        { label: 'FLHSMV: требования к автостраховке во Флориде', url: S.flhsmvIns },
      ],
    },
  },
};
