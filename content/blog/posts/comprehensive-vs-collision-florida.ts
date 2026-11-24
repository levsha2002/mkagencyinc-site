import type { BlogPost, PostTranslation } from '../types';

// Refresh 2026-11-24 (ET) (content plan 2026-11, row 2026-11-24; content_calendar.csv row 65).
// Original 2026-10-10. Facts re-checked 2026-11-24 against official sources (raw copies in /workspace/compcoll2/raw/;
// notes in /workspace/articles/comprehensive-vs-collision-florida_sources.md):
// - FLHSMV Florida Insurance Requirements: vehicle with at least four wheels needs PIP and PDL to register, $10,000
//   each; PDL pays for damage to another person's property; keep continuous coverage.
// - Florida DFS Personal Automobile Insurance Overview: comprehensive / other than collision = fire, theft, windstorm,
//   vandalism, flood, falling objects, hitting an animal; collision = collides with another vehicle, flips over or
//   crashes into an object (except animals), regardless of fault; total loss usually limited to ACV.
// - DFS Automobile Insurance Toolkit: comprehensive usually available without collision; insurers normally require
//   comprehensive to buy collision; common deductibles $250/$500/$1,000; rental reimbursement normally only with comp
//   and collision, usually reimbursement; most loan agreements require comp + collision and lender as loss payee;
//   lender buys insurance to protect its interest if you don't; subrogation can recover your deductible.
// - Miami-Dade County King Tides page: fall 2026 dates incl. Nov. 23-26 (per SFWMD); move vehicles to higher ground,
//   wash with fresh water after driving through salt water, don't drive through flooded areas.
// - NWS Turn Around Don't Drown: 12 inches of rushing water can carry away most cars.
// - 2026 F.S. 627.7288 (no deductible on windshield under comprehensive), 319.14 (flood vehicle brand +
//   written disclosure), 316.063 (duty after striking an unattended vehicle). 44 CFR Part 61 App. A(1) IV.5: the NFIP
//   Dwelling Form does not insure self-propelled vehicles. No insurer named, no prices.
const S = {
  flhsmv: 'https://www.flhsmv.gov/insurance/',
  dfsOverview: 'https://www.myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview',
  dfsToolkit: 'https://myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english%2D%2D%2Dautomobile-insurance-toolkit.pdf',
  kingTides: 'https://www.miamidade.gov/initiative/weather-ready/flooding/king-tides.page',
  nws: 'https://www.weather.gov/safety/flood-turn-around-dont-drown',
  s7288: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.7288.html',
  s1914: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0319/Sections/0319.14.html',
  s063: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.063.html',
  sfip: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/appendix-Appendix%20A(1)%20to%20Part%2061',
};

const en: PostTranslation = {
  title: "Comprehensive vs. Collision in Florida: Saltwater, King Tides and Holiday Parking",
  metaTitle: "Comprehensive vs. Collision in Florida (2026) | M&K Agency",
  description: "King tides, flooded streets and packed holiday parking lots: which Florida auto coverage applies, comprehensive or collision, and what to check on your policy.",
  ogAlt: "Flat illustration of a car on a flooded coastal street at high tide next to a car in a busy parking lot, with a shield and a checklist",
  excerpt: "Saltwater on the road and a dented door in a mall lot are different questions. Here is how comprehensive and collision split the work in Florida.",
  category: "Car insurance",
  body: [
    { type: 'p', text: "This is a busy week for South Florida cars. Miami-Dade County lists **Nov. 23–26** as the last fall 2026 King Tide window ([Miami-Dade County](" + S.kingTides + ")), Thanksgiving falls on Thursday, Nov. 26, and the holiday shopping season fills every parking lot from Florida City to Aventura. Saltwater on a low street, a door ding at the mall and a smashed window in a parking garage are three different situations, and two optional coverages decide whether your own policy helps: **comprehensive** and **collision**. Here is how they split the work, using the definitions published by the Florida Department of Financial Services (DFS)." },
    { type: 'h2', text: "What Florida requires, and what it does not" },
    { type: 'p', text: "To register a vehicle with at least four wheels, Florida requires **Personal Injury Protection (PIP)** and **Property Damage Liability (PDL)**, at least $10,000 each, and the coverage must stay in force even when the car is not being driven ([FLHSMV](" + S.flhsmv + ")). PDL pays for damage you cause to **another person’s** property. Neither PIP nor PDL repairs your own car. That is the job of collision and comprehensive, which state law does not require. More on the minimum: [Florida minimum car insurance requirements](/en/blog/florida-minimum-car-insurance-requirements)." },
    { type: 'h2', text: "The two coverages at a glance" },
    { type: 'ul', items: [
      "**Collision** pays to repair your vehicle if it collides with another vehicle, flips over or crashes into an object (except animals), **regardless of fault**. If the car is a total loss, payment is typically limited to its actual cash value ([DFS](" + S.dfsOverview + ")).",
      "**Comprehensive**, often printed as **Other than Collision**, pays for damage from incidents other than a collision, including **fire, theft, windstorm, vandalism or flood**, plus falling objects and hitting an animal ([DFS](" + S.dfsOverview + ")).",
      "Comprehensive is usually available on its own, but insurers normally require comprehensive in order to buy collision ([DFS toolkit](" + S.dfsToolkit + ")).",
    ] },
    { type: 'callout', title: "Quick test", text: "Did the car hit something, get hit by another car, or roll over? Think collision. Did something happen to the car, such as water, wind, fire, theft, vandalism, a falling object or an animal? Think comprehensive. Your policy wording has the final say." },
    { type: 'h2', text: "Saltwater, King Tides and flooded streets" },
    { type: 'p', text: "Miami-Dade County’s advice for King Tide days is direct: if possible, **move vehicles to higher ground** before the tides begin, **do not drive through flooded areas** because it is dangerous and can damage your vehicle, and **wash your vehicle down with fresh water** after driving through salt water ([Miami-Dade County](" + S.kingTides + ")). The National Weather Service adds that just 12 inches of rushing water can carry away most cars ([NWS](" + S.nws + "))." },
    { type: 'p', text: "Insurance-wise, DFS lists flood among the perils comprehensive is designed for, and collision is not. But do not assume that every water problem will be paid. Whether a specific loss is covered depends on your policy’s wording and exclusions, your deductible and the facts of the loss, for example a car swamped by a sudden tidal surge versus wear that shows up months later. If you do not carry comprehensive, your auto policy generally will not repair water damage to your own car. Do not count on a flood policy either: the federal NFIP Dwelling Form lists self-propelled vehicles as property it does not insure ([44 CFR Part 61](" + S.sfip + "))." },
    { type: 'p', text: "If your car does sit in water: take photos, report the claim promptly and ask the insurer before trying to start it. If it is declared a total loss because of water, Florida treats it as a **“flood vehicle”**: the title must be branded, and a seller must disclose it in writing ([s. 319.14, F.S.](" + S.s1914 + ")). See [buying a used car after a flood](/en/blog/flood-damaged-used-car-florida) and our [King Tides flood insurance guide](/en/blog/king-tides-flood-insurance-miami-dade) for your home." },
    { type: 'h2', text: "Holiday parking: dings, break-ins and garages" },
    { type: 'ul', items: [
      "**Someone hits your parked car.** Florida law requires a driver who damages an unattended vehicle to stop, find the owner or leave a written note with their name, address and tag number, and notify police ([s. 316.063, F.S.](" + S.s063 + ")). If you know who did it, their PDL may pay. If they drove off, collision on your own policy, which pays regardless of fault, is the coverage that can repair your car, subject to your deductible.",
      "**Break-in or stolen car.** Theft and vandalism fall under comprehensive ([DFS](" + S.dfsOverview + ")). File a police report first. Items stolen from inside the car are a separate question, so ask your agent how your policies treat them.",
      "**Something falls on the car** in a garage or under a tree: comprehensive lists falling objects.",
      "**You back into a pole** while hunting for a space: that is collision.",
    ] },
    { type: 'p', text: "When another driver is at fault and your insurer pays first, it may recover what it paid, **including your deductible**, from the at-fault party’s insurer (subrogation). Do not sign a release from the other driver’s company without checking with your own insurer ([DFS toolkit](" + S.dfsToolkit + ")). Driving to family this week? Our [Thanksgiving driving guide](/en/blog/thanksgiving-holiday-driving-florida) and [rental car guide](/en/blog/rental-car-insurance-florida-holidays) cover the rest of the trip." },
    { type: 'h2', text: "Deductibles, windshields and rentals" },
    { type: 'p', text: "Each coverage has its own deductible; DFS lists $250, $500 and $1,000 as common choices. Pick an amount you could pay the week after a loss ([DFS toolkit](" + S.dfsToolkit + ")). Under Florida law, the comprehensive deductible does not apply to damage to the **windshield** ([s. 627.7288, F.S.](" + S.s7288 + ")). Rental reimbursement is a separate option that is normally available only if you carry comprehensive and collision, and most contracts reimburse you after you pay for the rental. Towing and labor is also a separate option ([DFS toolkit](" + S.dfsToolkit + "))." },
    { type: 'h2', text: "Financed cars and older cars" },
    { type: 'ul', items: [
      "**Loan or lease:** most loan agreements require comprehensive and collision for the term of the loan, with the lender listed as loss payee. If you drop them, the lender will buy insurance to protect its own interest in the car ([DFS toolkit](" + S.dfsToolkit + ")). For the gap between the loan and the car’s value, see [gap insurance](/en/gap-insurance).",
      "**Older, paid-off car:** claims are normally paid at actual cash value, so compare the car’s value with the coverage. In our area, flood and theft risk do not go away as a car ages, which is why some owners keep comprehensive even after dropping collision.",
    ] },
    { type: 'h2', text: "Check your declarations page before Thursday" },
    { type: 'ol', items: [
      "Is **Other than Collision** (comprehensive) listed for each car, and what is the deductible?",
      "Is **Collision** listed, and with what deductible?",
      "Do you have rental reimbursement and towing, and what are the limits?",
      "If the car is financed, is the lender listed correctly?",
      "Are your declarations page and ID card saved on your phone?",
    ] },
    { type: 'p', text: "Coverage depends on your policy, so talk with a licensed agent about your situation. Want a second look? Visit our [car insurance page for Florida City](/en/car-insurance-florida-city), [request a quote](/en/quote) or call **(305) 859-3953**." },
  ],
  faq: [
    { q: "Does comprehensive cover saltwater damage from King Tides?", a: "DFS lists flood among the perils comprehensive (other than collision) covers, and collision does not. Whether a particular saltwater loss is paid depends on your policy wording, exclusions, deductible and the facts, so read your policy and report damage promptly. Without comprehensive, your auto policy generally will not pay for water damage to your own car." },
    { q: "Someone hit my parked car and left. Which coverage applies?", a: "Collision pays regardless of fault, so it is the coverage on your own policy that can repair the car, subject to your deductible. If the other driver is identified, their property damage liability may pay, and your insurer may recover your deductible. Report the hit-and-run to police." },
    { q: "Is comprehensive or collision required in Florida?", a: "Not by state law. Florida requires PIP and PDL to register a car. A lender or leasing company can require comprehensive and collision as a condition of the loan or lease." },
  ],
  sources: [
    { label: "FLHSMV: Florida Insurance Requirements", url: S.flhsmv },
    { label: "Florida DFS: Personal Automobile Insurance Overview", url: S.dfsOverview },
    { label: "Florida DFS: Automobile Insurance Toolkit (PDF)", url: S.dfsToolkit },
    { label: "Miami-Dade County: King Tides (2026 dates and safety tips)", url: S.kingTides },
    { label: "National Weather Service: Turn Around Don’t Drown", url: S.nws },
    { label: "Florida Statutes s. 316.063 (2026): damaging an unattended vehicle", url: S.s063 },
    { label: "Florida Statutes s. 319.14 (2026): flood vehicle title brand and disclosure", url: S.s1914 },
    { label: "Florida Statutes s. 627.7288 (2026): comprehensive deductible and windshields", url: S.s7288 },
    { label: "44 CFR Part 61, Appendix A(1): NFIP Dwelling Form (property not insured)", url: S.sfip },
  ],
};

const es: PostTranslation = {
  title: "Cobertura amplia vs. colisión en Florida: agua salada, mareas reales y parqueos en las fiestas",
  metaTitle: "Cobertura amplia vs. colisión en Florida (2026) | M&K Agency",
  description: "Mareas reales, calles inundadas y parqueos llenos: cuándo aplica la cobertura amplia y cuándo la de colisión en Florida, y qué revisar en su póliza.",
  ogAlt: "Ilustración plana de un carro en una calle costera inundada por la marea junto a un carro en un parqueo lleno, con un escudo y una lista de control",
  excerpt: "El agua salada en la calle y una abolladura en el parqueo del centro comercial son casos distintos. Así se reparten el trabajo la cobertura amplia y la de colisión.",
  category: "Seguro de auto",
  body: [
    { type: 'p', text: "El condado de Miami-Dade señala del **23 al 26 de noviembre** como la última ventana de mareas reales (King Tides) del otoño de 2026 ([Condado de Miami-Dade](" + S.kingTides + ")), Acción de Gracias cae el jueves 26 y los parqueos se llenan de compradores. Agua salada en la calle, un golpe en el parqueo o un cristal roto son casos distintos, y lo que pague su póliza depende de dos coberturas opcionales: la **cobertura amplia** (comprehensive) y la de **colisión** (collision). Así se reparten el trabajo según el Departamento de Servicios Financieros de Florida (DFS)." },
    { type: 'h2', text: "Lo que exige Florida y lo que no" },
    { type: 'p', text: "Para registrar un vehículo de al menos cuatro ruedas, Florida exige **Protección contra Lesiones Personales (PIP)** y **Responsabilidad por Daños a la Propiedad (PDL)**, de al menos $10,000 cada una, y la cobertura debe mantenerse aunque el carro no se use ([FLHSMV](" + S.flhsmv + ")). El PDL paga los daños que usted cause a la propiedad **de otra persona**. Ni el PIP ni el PDL reparan su propio carro: eso les toca a la colisión y a la cobertura amplia, que la ley estatal no exige. Más detalles en [requisitos mínimos de seguro de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements)." },
    { type: 'h2', text: "Las dos coberturas, en resumen" },
    { type: 'ul', items: [
      "**Colisión:** paga la reparación de su vehículo si choca contra otro vehículo, se vuelca o choca contra un objeto (salvo animales), **sin importar quién tuvo la culpa**. Si el carro es pérdida total, el pago suele limitarse a su valor real en efectivo ([DFS](" + S.dfsOverview + ")).",
      "**Cobertura amplia**, que en la póliza suele aparecer como **Other than Collision**, paga daños por hechos que no son un choque: **incendio, robo, vendaval, vandalismo o inundación**, además de objetos que caen y el choque con un animal ([DFS](" + S.dfsOverview + ")).",
      "La cobertura amplia normalmente se puede comprar sola, pero las aseguradoras suelen exigirla para vender colisión ([guía del DFS](" + S.dfsToolkit + ")).",
    ] },
    { type: 'callout', title: "Prueba rápida", text: "¿El carro chocó, lo chocaron o se volcó? Piense en colisión. ¿Fue agua, viento, fuego, robo, vandalismo, un objeto que cayó o un animal? Piense en cobertura amplia. Manda el texto de su póliza." },
    { type: 'h2', text: "Agua salada, mareas reales y calles inundadas" },
    { type: 'p', text: "El consejo del condado para los días de mareas reales es claro: si puede, **mueva el carro a un lugar más alto** antes de que empiecen, **no maneje por zonas inundadas** porque es peligroso y puede dañar el vehículo, y **lávelo con agua dulce** si tuvo que pasar por agua salada ([Condado de Miami-Dade](" + S.kingTides + ")). El Servicio Meteorológico Nacional agrega que bastan 12 pulgadas de agua en movimiento para arrastrar la mayoría de los carros ([NWS](" + S.nws + "))." },
    { type: 'p', text: "En cuanto al seguro, el DFS incluye la inundación entre los riesgos de la cobertura amplia, no de la colisión. Pero no dé por hecho que se pagará cualquier daño por agua: depende del texto y las exclusiones de su póliza, del deducible y de cómo ocurrió el daño. No cuente con la póliza de inundación: la póliza federal del NFIP para viviendas excluye expresamente los vehículos autopropulsados ([44 CFR Parte 61](" + S.sfip + "))." },
    { type: 'p', text: "Si el carro quedó en el agua, tome fotos, reporte el reclamo cuanto antes y consulte con la aseguradora antes de intentar encenderlo. Si lo declaran pérdida total por agua, Florida lo considera un **“flood vehicle”**: el título debe llevar esa marca y el vendedor debe informarlo por escrito ([sección 319.14](" + S.s1914 + ")). Vea también [cómo comprar un carro usado después de una inundación](/es/blog/flood-damaged-used-car-florida) y nuestra [guía de mareas reales y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade) para su casa." },
    { type: 'h2', text: "Parqueos en las fiestas: golpes, robos y garajes" },
    { type: 'ul', items: [
      "**Le golpean el carro estacionado.** La ley de Florida obliga al conductor que daña un vehículo sin ocupantes a detenerse, buscar al dueño o dejar una nota por escrito con su nombre, dirección y número de placa, y avisar a la policía ([sección 316.063](" + S.s063 + ")). Si sabe quién fue, puede pagar el PDL de esa persona. Si no, la colisión de su póliza, que paga sin importar la culpa, puede reparar su carro, sujeta al deducible.",
      "**Robo del carro o le rompen el vidrio.** El robo y el vandalismo entran en la cobertura amplia ([DFS](" + S.dfsOverview + ")). Primero haga la denuncia policial. Las cosas que se llevan de adentro del carro son otro tema: pregunte a su agente cómo las tratan sus pólizas.",
      "**Algo cae sobre el carro** en un garaje o debajo de un árbol: la cobertura amplia incluye objetos que caen.",
      "**Usted da marcha atrás contra un poste** buscando dónde estacionar: eso es colisión.",
    ] },
    { type: 'p', text: "Cuando la culpa es de otro conductor y su aseguradora paga primero, esta puede recuperar lo pagado, **incluido su deducible**, de la aseguradora del responsable (subrogación). No firme un descargo de la compañía del otro conductor sin consultar antes con la suya ([guía del DFS](" + S.dfsToolkit + ")). Vea también nuestras guías para [manejar en Acción de Gracias](/es/blog/thanksgiving-holiday-driving-florida) y sobre [carros de alquiler](/es/blog/rental-car-insurance-florida-holidays)." },
    { type: 'h2', text: "Deducibles, parabrisas y carro de alquiler" },
    { type: 'p', text: "Cada cobertura tiene su propio deducible; el DFS menciona $250, $500 y $1,000 como opciones comunes. ([guía del DFS](" + S.dfsToolkit + ")). Por ley de Florida, el deducible de la cobertura amplia no se aplica a los daños al **parabrisas** ([sección 627.7288](" + S.s7288 + ")). El reembolso de alquiler es una opción aparte que normalmente solo se ofrece si tiene cobertura amplia y colisión, y la mayoría de los contratos le reembolsan después de que usted paga el alquiler. ([guía del DFS](" + S.dfsToolkit + "))." },
    { type: 'h2', text: "Carros financiados y carros viejos" },
    { type: 'ul', items: [
      "**Préstamo o arrendamiento:** la mayoría de los contratos de préstamo exigen cobertura amplia y colisión mientras dure el préstamo, con el prestamista como beneficiario de pérdida. Si usted las quita, el prestamista comprará un seguro para proteger su propio interés en el carro ([guía del DFS](" + S.dfsToolkit + ")). Para la diferencia entre la deuda y el valor del carro, vea [seguro GAP](/es/gap-insurance).",
      "**Carro viejo y pagado:** los reclamos normalmente se pagan al valor real en efectivo, así que compare el valor del carro con la cobertura. En nuestra zona el riesgo de inundación y de robo no desaparece con los años, y por eso hay dueños que mantienen la cobertura amplia aunque quiten la colisión.",
    ] },
    { type: 'h2', text: "Revise su página de declaraciones antes del jueves" },
    { type: 'ol', items: [
      "¿Aparece **Other than Collision** (cobertura amplia) para cada carro y con qué deducible?",
      "¿Aparece **Collision** y con qué deducible?",
      "¿Tiene reembolso de alquiler y remolque, y con qué límites?",
      "Si el carro está financiado, ¿el prestamista figura correctamente?",
      "¿Tiene la página de declaraciones y la tarjeta del seguro guardadas en el teléfono?",
    ] },
    { type: 'p', text: "La cobertura depende de su póliza, así que hable con un agente con licencia sobre su caso. ¿Quiere que la revisemos? Visite nuestra [página de seguro de auto en Florida City](/es/car-insurance-florida-city), [pida una cotización](/es/quote) o llame al **(305) 859-3953**." },
  ],
  faq: [
    { q: "¿La cobertura amplia paga los daños por agua salada de las mareas reales?", a: "El DFS incluye la inundación entre los riesgos de la cobertura amplia (other than collision); la colisión no la cubre. Que se pague un daño concreto por agua salada depende del texto de su póliza, las exclusiones, el deducible y los hechos, así que lea su póliza y reporte el daño pronto. Sin cobertura amplia, su póliza de auto por lo general no paga los daños por agua de su propio carro." },
    { q: "Me golpearon el carro estacionado y el otro conductor se fue. ¿Qué cobertura aplica?", a: "La colisión paga sin importar la culpa, así que es la cobertura de su propia póliza que puede reparar el carro, sujeta al deducible. Si se identifica al otro conductor, su seguro de daños a la propiedad puede pagar y su aseguradora puede recuperar su deducible. Denuncie el choque a la policía." },
    { q: "¿La cobertura amplia o la de colisión son obligatorias en Florida?", a: "No por ley estatal. Florida exige PIP y PDL para registrar un carro. El banco o la compañía de arrendamiento sí pueden exigir cobertura amplia y colisión como condición del préstamo o del contrato." },
  ],
  sources: [
    { label: "FLHSMV: requisitos de seguro en Florida", url: S.flhsmv },
    { label: "DFS de Florida: resumen del seguro de auto personal (en inglés)", url: S.dfsOverview },
    { label: "DFS de Florida: guía del seguro de automóvil (PDF, en inglés)", url: S.dfsToolkit },
    { label: "Condado de Miami-Dade: King Tides (fechas 2026 y consejos de seguridad, en inglés)", url: S.kingTides },
    { label: "Servicio Meteorológico Nacional: Turn Around Don’t Drown (en inglés)", url: S.nws },
    { label: "Estatutos de Florida, sección 316.063 (2026): daños a un vehículo sin ocupantes", url: S.s063 },
    { label: "Estatutos de Florida, sección 319.14 (2026): marca de flood vehicle en el título", url: S.s1914 },
    { label: "Estatutos de Florida, sección 627.7288 (2026): deducible y parabrisas", url: S.s7288 },
    { label: "44 CFR Parte 61, Apéndice A(1): póliza de inundación del NFIP para viviendas (bienes no asegurados)", url: S.sfip },
  ],
};

const ru: PostTranslation = {
  title: "Comprehensive и collision во Флориде: солёная вода, королевские приливы и праздничные парковки",
  metaTitle: "Comprehensive и collision во Флориде (2026) | M&K Agency",
  description: "Королевские приливы, затопленные улицы и забитые парковки в праздники: когда во Флориде работает comprehensive, а когда collision, и что проверить в полисе.",
  ogAlt: "Плоская иллюстрация: машина на затопленной приливом прибрежной улице рядом с машиной на заполненной парковке, щит и чек-лист",
  excerpt: "Солёная вода на дороге и вмятина на двери у торгового центра — это разные истории. Объясняем, как comprehensive и collision делят работу во Флориде.",
  category: "Автострахование",
  body: [
    { type: 'p', text: "Для машин в Южной Флориде эта неделя непростая. Округ Майами-Дейд называет **23–26 ноября** последним осенним окном королевских приливов (King Tides) в 2026 году ([округ Майами-Дейд](" + S.kingTides + ")), День благодарения выпадает на четверг, 26 ноября, а праздничный шопинг забивает все парковки. Солёная вода на низкой улице, вмятина на двери у молла и разбитое стекло в гараже — три разные ситуации, и поможет ли ваш собственный полис, зависит от двух необязательных покрытий: **comprehensive** и **collision**. Разбираемся, как они делят работу, по определениям Департамента финансовых услуг Флориды (DFS)." },
    { type: 'h2', text: "Что Флорида требует, а что нет" },
    { type: 'p', text: "Чтобы зарегистрировать машину с четырьмя и более колёсами, во Флориде нужны **PIP** (Personal Injury Protection) и **PDL** (Property Damage Liability), минимум по $10,000 каждое, и страховка должна действовать, даже если машиной не пользуются ([FLHSMV](" + S.flhsmv + ")). PDL оплачивает ущерб, который вы причинили **чужому** имуществу. Ни PIP, ни PDL не ремонтируют вашу машину — это задача collision и comprehensive, которых закон штата не требует. Подробнее о минимуме: [минимальные требования к автостраховке во Флориде](/ru/blog/florida-minimum-car-insurance-requirements)." },
    { type: 'h2', text: "Два покрытия коротко" },
    { type: 'ul', items: [
      "**Collision** оплачивает ремонт вашей машины, если она столкнулась с другой машиной, перевернулась или врезалась в предмет (кроме животных), **независимо от того, кто виноват**. При полной гибели выплата обычно ограничена рыночной стоимостью машины ([DFS](" + S.dfsOverview + ")).",
      "**Comprehensive**, в полисе часто **Other than Collision**, покрывает ущерб не от столкновения: **пожар, угон, ураганный ветер, вандализм или наводнение**, а также падающие предметы и наезд на животное ([DFS](" + S.dfsOverview + ")).",
      "Comprehensive обычно можно купить отдельно, а вот для collision страховщики, как правило, требуют и comprehensive ([руководство DFS](" + S.dfsToolkit + ")).",
    ] },
    { type: 'callout', title: "Быстрая проверка", text: "Машина во что-то врезалась, в неё въехали или она перевернулась? Это скорее collision. С машиной что-то случилось — вода, ветер, огонь, угон, вандализм, упавший предмет, животное? Это скорее comprehensive. Окончательный ответ — в тексте вашего полиса." },
    { type: 'h2', text: "Солёная вода, королевские приливы и затопленные улицы" },
    { type: 'p', text: "Совет округа на дни королевских приливов простой: по возможности **заранее переставьте машину повыше**, **не езжайте по затопленным участкам** — это опасно и может повредить машину, а если всё же проехали по солёной воде, **вымойте машину пресной водой** ([округ Майами-Дейд](" + S.kingTides + ")). Национальная метеослужба добавляет: всего 12 дюймов (около 30 см) быстро текущей воды достаточно, чтобы унести большинство легковых машин ([NWS](" + S.nws + "))." },
    { type: 'p', text: "Со страховой стороны DFS относит наводнение к рискам comprehensive, а не collision. Но не рассчитывайте, что оплатят любую проблему с водой: многое зависит от формулировок и исключений вашего полиса, франшизы и обстоятельств. Машина, которую внезапно залил прилив, и износ, проявившийся через несколько месяцев, — разные случаи. Без comprehensive автополис, как правило, не оплатит ущерб от воды вашей собственной машине. И на полис от наводнения не надейтесь: федеральный полис NFIP для жилья прямо исключает самоходные транспортные средства ([44 CFR, часть 61](" + S.sfip + "))." },
    { type: 'p', text: "Если машина постояла в воде, сделайте фото, сразу заявите об убытке и спросите страховщика, прежде чем пытаться её завести. Если её признают полностью уничтоженной из-за воды, во Флориде это **flood vehicle**: в титуле ставится соответствующая отметка, а продавец обязан письменно сообщить об этом покупателю ([ст. 319.14](" + S.s1914 + ")). См. также [как купить подержанную машину после наводнения](/ru/blog/flood-damaged-used-car-florida) и наш [гид по королевским приливам и страховке от наводнения](/ru/blog/king-tides-flood-insurance-miami-dade) для дома." },
    { type: 'h2', text: "Праздничные парковки: вмятины, взломы и гаражи" },
    { type: 'ul', items: [
      "**В вашу припаркованную машину въехали.** По закону Флориды водитель, повредивший машину без водителя, обязан остановиться, найти владельца или оставить записку с именем, адресом и номером своей машины и сообщить в полицию ([ст. 316.063](" + S.s063 + ")). Если виновник известен, может заплатить его PDL. Если он уехал, отремонтировать машину поможет collision по вашему полису — оно платит независимо от вины, но с вашей франшизой.",
      "**Угон или разбитое стекло.** Угон и вандализм относятся к comprehensive ([DFS](" + S.dfsOverview + ")). Сначала заявление в полицию. Вещи, украденные из салона, — отдельный вопрос: уточните у агента, как с ними поступают ваши полисы.",
      "**На машину что-то упало** в гараже или под деревом: падающие предметы входят в comprehensive.",
      "**Вы задели столб**, пока искали место: это collision.",
    ] },
    { type: 'p', text: "Если виноват другой водитель, а ваш страховщик заплатил первым, он может взыскать выплату, **включая вашу франшизу**, со страховщика виновника (суброгация). Не подписывайте отказ от претензий, присланный компанией другого водителя, не посоветовавшись со своим страховщиком ([руководство DFS](" + S.dfsToolkit + ")). Едете к родным? Загляните в наши статьи о [поездках на День благодарения](/ru/blog/thanksgiving-holiday-driving-florida) и об [аренде машины в праздники](/ru/blog/rental-car-insurance-florida-holidays)." },
    { type: 'h2', text: "Франшиза, лобовое стекло и машина на замену" },
    { type: 'p', text: "У каждого покрытия своя франшиза; DFS называет распространёнными $250, $500 и $1,000. Выбирайте сумму, которую сможете заплатить сразу после убытка ([руководство DFS](" + S.dfsToolkit + ")). По закону Флориды франшиза comprehensive не применяется к повреждению **лобового стекла** ([ст. 627.7288](" + S.s7288 + ")). Компенсация аренды (rental reimbursement) — отдельная опция, обычно доступная только при наличии comprehensive и collision; по большинству договоров вы сначала платите за аренду сами, а потом получаете возмещение. Эвакуатор — тоже отдельная опция ([руководство DFS](" + S.dfsToolkit + "))." },
    { type: 'h2', text: "Кредит и старая машина" },
    { type: 'ul', items: [
      "**Кредит или лизинг:** большинство кредитных договоров требуют comprehensive и collision на весь срок кредита и указания кредитора получателем выплаты (loss payee). Если вы их уберёте, кредитор сам купит страховку для защиты своего интереса в машине ([руководство DFS](" + S.dfsToolkit + ")). О разнице между долгом и стоимостью машины — в разделе [GAP-страховка](/ru/gap-insurance).",
      "**Старая выплаченная машина:** выплаты обычно идут по рыночной стоимости, поэтому сравните стоимость машины с покрытием. У нас риск наводнения и угона с годами не исчезает, поэтому часть владельцев оставляет comprehensive, даже отказавшись от collision.",
    ] },
    { type: 'h2', text: "Проверьте страницу деклараций до четверга" },
    { type: 'ol', items: [
      "Указано ли **Other than Collision** (comprehensive) для каждой машины и какая франшиза?",
      "Есть ли **Collision** и с какой франшизой?",
      "Есть ли компенсация аренды и эвакуатор, и какие лимиты?",
      "Если машина в кредите, правильно ли указан кредитор?",
      "Сохранены ли страница деклараций и страховая карточка в телефоне?",
    ] },
    { type: 'p', text: "Покрытие зависит от условий вашего полиса, поэтому обсудите свою ситуацию с лицензированным агентом. Мы говорим по-русски: загляните на страницу [автостраховки во Флорида-Сити](/ru/car-insurance-florida-city), [запросите расчёт](/ru/quote) или позвоните **(305) 859-3953**. Подробнее о нас — [русскоязычный страховой агент в Майами](/ru/russian-speaking-insurance-agent-miami)." },
  ],
  faq: [
    { q: "Покрывает ли comprehensive ущерб от солёной воды во время королевских приливов?", a: "DFS относит наводнение к рискам comprehensive (other than collision); collision его не покрывает. Оплатят ли конкретный ущерб от солёной воды, зависит от формулировок полиса, исключений, франшизы и обстоятельств, поэтому прочитайте полис и сообщайте об ущербе сразу. Без comprehensive автополис, как правило, не платит за ущерб от воды вашей машине." },
    { q: "В мою машину на парковке въехали и уехали. Какое покрытие сработает?", a: "Collision платит независимо от вины, поэтому именно оно по вашему полису может покрыть ремонт, с учётом франшизы. Если виновника найдут, заплатить может его страховка ответственности за имущество, а ваш страховщик может вернуть вам франшизу. Сообщите о происшествии в полицию." },
    { q: "Обязательны ли comprehensive или collision во Флориде?", a: "По закону штата — нет. Для регистрации машины нужны PIP и PDL. Банк или лизинговая компания могут требовать comprehensive и collision по условиям кредита или лизинга." },
  ],
  sources: [
    { label: "FLHSMV: требования к страхованию во Флориде (англ.)", url: S.flhsmv },
    { label: "DFS Флориды: обзор личного автострахования (англ.)", url: S.dfsOverview },
    { label: "DFS Флориды: руководство по автострахованию (PDF, англ.)", url: S.dfsToolkit },
    { label: "Округ Майами-Дейд: King Tides — даты 2026 года и советы (англ.)", url: S.kingTides },
    { label: "Национальная метеослужба: Turn Around Don’t Drown (англ.)", url: S.nws },
    { label: "Законы Флориды, ст. 316.063 (2026): повреждение машины без водителя", url: S.s063 },
    { label: "Законы Флориды, ст. 319.14 (2026): отметка flood vehicle в титуле", url: S.s1914 },
    { label: "Законы Флориды, ст. 627.7288 (2026): франшиза и лобовое стекло", url: S.s7288 },
    { label: "44 CFR, часть 61, приложение A(1): полис NFIP для жилья (незастрахованное имущество)", url: S.sfip },
  ],
};

export const post: BlogPost = {
  slug: 'comprehensive-vs-collision-florida',
  datePublished: '2026-10-10',
  dateModified: '2026-11-24',
  translations: { en, es, ru },
};
