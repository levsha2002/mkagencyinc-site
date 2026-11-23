import type { BlogPost } from '../types';

// New article 2026-11-23 (ET) (content plan 2026-11, row 2026-11-23; content_calendar.csv row 64).
// Facts checked 2026-11-23 against official sources (raw copies in /workspace/thanksgiving/raw/; notes in
// /workspace/articles/thanksgiving-holiday-driving-florida_sources.md):
// - FLHSMV/FHP press release, Nov. 10, 2026 ("not to wing it"): last year's five-day Thanksgiving travel period
//   (Wednesday through Sunday) had 7,331 crashes and 45 fatalities; most crashes on the Wednesday before Thanksgiving,
//   fewest on Thanksgiving Day; Nov.-Dec. 2025: more than 1,000 crashes involved alcohol, drugs or both. Tips: some
//   over-the-counter medications can impair; check tires, tire pressure, brakes, fluids, lights; have driver license,
//   proof of insurance, registration or rental agreement available. FLHSMV Safe Holiday Travel page.
// - F.S. 316.646(1) (2026): proof of PIP/PDL/BI security in immediate possession while operating; paper or electronic.
// - F.S. 316.614(4)-(5),(8): driver belted; every passenger under 18 belted or in a child restraint; front-seat
//   passengers 18+ belted; nonmoving violation.
// - F.S. 316.613(1)(a),(5): child 5 or younger in a crash-tested, federally approved restraint; through age 3 separate
//   carrier or integrated seat; ages 4-5 carrier, integrated seat or booster; moving violation, 3 points.
// - F.S. 316.193(1),(2)(a): DUI = normal faculties impaired by alcohol/chemical/controlled substance, or BAC/BrAC 0.08+;
//   first conviction fine $500-$1,000 and up to 6 months.
// - F.S. 322.2615(1): 0.08+ = 6-month suspension (first); refusal = 1 year (first); 10-day temporary permit;
//   review request within 10 days.
// - F.S. 316.305(3)(a),(4): no manual typing/reading texts while operating; stationary vehicle not operated; navigation
//   exception; first offense nonmoving, second within 5 years moving.
// - F.S. 316.306(3)(a)1.,(4)(a): no handheld use in school crossing/zone or work zone (work zone when workers present
//   or operating equipment); moving violation, 3 points.
// - F.S. 316.217(1)(a)-(b): lamps sunset to sunrise incl. twilight; any rain, smoke or fog.
// - F.S. 316.126(1)(b): move over a lane (2+ lanes same direction) or slow to 20 mph below posted limit (25+),
//   5 mph if limit 20 or less; covers emergency, sanitation, utility, wrecker, road maintenance vehicles and disabled
//   vehicles with hazards, flares/signage or people present.
// - F.S. 316.081(3): do not continue in the furthermost left lane when being overtaken by a faster vehicle.
// - F.S. 316.061(1)-(2): stop and remain; property-damage-only: make every reasonable effort to move a vehicle that
//   blocks traffic. F.S. 316.062(1): give name, address, registration; show license on request; render reasonable aid.
// - F.S. 316.065(1): notify police/sheriff/FHP for injury, death or apparent damage of at least $2,000.
// - F.S. 316.066(1)(d): each party provides proof of insurance to the officer.
// - F.S. 627.736(1)(a): PIP medical benefits require initial services and care within 14 days after the accident.
// - FLHSMV insurance requirements page: PIP $10,000 and PDL $10,000; PIP pays 80% of necessary medical up to $10,000.
// No private insurer named. No price, premium or outcome claims. General information, not legal advice.
const S = {
  flhsmvRelease: 'https://www.flhsmv.gov/2026/11/10/flhsmv-and-fhp-ask-motorists-not-to-wing-it-and-arrive-alive-this-holiday-season/',
  flhsmvHoliday: 'https://www.flhsmv.gov/safety-center/driving-safety/holidaytravel/',
  flhsmvIns: 'https://www.flhsmv.gov/insurance/',
  s316646: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.646.html',
  s316614: 'https://www.flsenate.gov/Laws/Statutes/2026/316.614',
  s316613: 'https://www.flsenate.gov/Laws/Statutes/2026/316.613',
  s316193: 'https://www.flsenate.gov/Laws/Statutes/2026/316.193',
  s3222615: 'https://www.flsenate.gov/Laws/Statutes/2026/322.2615',
  s316305: 'https://www.flsenate.gov/Laws/Statutes/2026/316.305',
  s316306: 'https://www.flsenate.gov/Laws/Statutes/2026/316.306',
  s316217: 'https://www.flsenate.gov/Laws/Statutes/2026/316.217',
  s316126: 'https://www.flsenate.gov/Laws/Statutes/2026/316.126',
  s316081: 'https://www.flsenate.gov/Laws/Statutes/2026/316.081',
  s316061: 'https://www.flsenate.gov/Laws/Statutes/2026/316.061',
  s316062: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.062.html',
  s316065: 'https://www.flsenate.gov/Laws/Statutes/2026/316.065',
  s316066: 'https://www.flsenate.gov/Laws/Statutes/2026/316.066',
  s627736: 'https://www.flsenate.gov/Laws/Statutes/2026/627.736',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'thanksgiving-holiday-driving-florida',
  datePublished: '2026-11-23',
  translations: {
    en: {
      title: 'Thanksgiving Weekend Driving in Florida: Laws That Still Apply on a Holiday',
      metaTitle: 'Thanksgiving Driving in Florida: Laws to Know | M&K Agency',
      description: 'Driving to family for Thanksgiving? Florida’s seat belt, DUI, phone, headlight and Move Over laws still apply, plus what to do and report after a crash.',
      excerpt: 'Thanksgiving week is one of the busiest times on Florida roads. Here are the state laws that do not take a holiday, what the law asks of you after a crash, and a short insurance check before you leave.',
      ogAlt: 'Illustration of a car driving on a Florida highway at dusk between palm trees, with a roast turkey dish, a seat belt buckle and a blue shield with a check mark',
      category: 'Car insurance',
      body: [
        { type: 'p', text: 'Thanksgiving falls on **Thursday, November 26**, and for many South Florida families it means a drive: up the Turnpike, across Alligator Alley, or just across Miami-Dade with a pie on the back seat. The holiday changes the traffic, not the law. Every rule that applies on a normal Tuesday applies on Thanksgiving weekend too.' },
        { type: 'p', text: 'The Florida Highway Patrol and the Department of Highway Safety and Motor Vehicles (FLHSMV) reported that during last year’s five-day Thanksgiving travel period, Wednesday through Sunday, there were **7,331 crashes on Florida roads and 45 deaths**. The most crashes happened on the Wednesday before Thanksgiving, the fewest on Thanksgiving Day itself ([FLHSMV, Nov. 10, 2026](' + S.flhsmvRelease + ')). If you can, leave early or travel on Thursday.' },

        { type: 'h2', text: 'Before you leave: papers and the car' },
        { type: 'p', text: 'Florida law says that while you drive, you must have **proof of your required insurance in your immediate possession**, and it may be paper or electronic ([s. 316.646](' + S.s316646 + ')). Our guide to [electronic proof of insurance](/en/blog/electronic-proof-of-insurance-florida) explains what counts. FLHSMV’s holiday checklist adds your driver license and registration, or the rental agreement if you rent, plus a quick look at the tires, tire pressure, brakes, fluids and lights ([FLHSMV holiday travel](' + S.flhsmvHoliday + ')).' },

        { type: 'h2', text: 'Seat belts and car seats for everyone in the car' },
        { type: 'ul', items: [
          '**The driver** must wear a seat belt, and so must **every front-seat passenger 18 or older** ([s. 316.614](' + S.s316614 + ')).',
          '**Every passenger under 18**, in any seat, must be belted or in a child restraint, and the driver is the one responsible for that.',
          '**Children 5 and younger** need a crash-tested, federally approved child restraint. Through age 3 that means a separate car seat or a built-in child seat; at ages 4 and 5 a booster seat is also allowed ([s. 316.613](' + S.s316613 + ')). A child-restraint violation is a moving violation with 3 points on your license.',
        ] },
        { type: 'p', text: 'Holiday trips often mean extra cousins and grandchildren in the car. If you do not have enough belts or car seats for everyone, the answer is a second car, not a lap.' },

        { type: 'h2', text: 'Impaired driving: no holiday exception' },
        { type: 'p', text: 'Under [s. 316.193](' + S.s316193 + '), you are driving under the influence if alcohol, a controlled substance or certain chemicals impair your normal faculties, **or** if your blood or breath alcohol is 0.08 or higher. A first conviction carries a fine of $500 to $1,000 and up to 6 months in jail.' },
        { type: 'p', text: 'The license consequence can start the same night. An officer suspends the license of a driver at 0.08 or higher (6 months for a first time) or of a driver who refuses a breath, blood or urine test (1 year for a first refusal), and issues a 10-day temporary permit. You have 10 days to ask for a review ([s. 322.2615](' + S.s3222615 + ')).' },
        { type: 'p', text: 'FHP and FLHSMV say more than 1,000 crashes in November and December 2025 involved alcohol, drugs or both, and remind drivers that even some over-the-counter medications can impair driving. Choose a sober driver or a ride before the first drink. What a DUI does to your license and insurance afterward, including the FR-44 filing, is covered in our [FR-44 and bodily injury liability guide](/en/blog/bodily-injury-liability-fr44-florida).' },

        { type: 'h2', text: 'The phone stays down' },
        { type: 'p', text: 'Florida bans typing or reading texts, emails and messages while you drive ([s. 316.305](' + S.s316305 + ')). Using the phone for navigation is allowed, and a car that is stopped is not considered "operated" under this law. In **school zones, school crossings and active work zones**, the rule is stricter: no handheld use at all while moving, only hands-free. That violation is a moving violation with 3 points ([s. 316.306](' + S.s316306 + ')). Long holiday drives pass a lot of highway work zones, so set the route and the music before you pull out.' },

        { type: 'h2', text: 'Dark evenings, rain and the shoulder' },
        { type: 'ul', items: [
          '**Headlights** must be on from sunset to sunrise, including twilight, and during any rain, smoke or fog, day or night ([s. 316.217](' + S.s316217 + ')). Many people drive home from dinner after dark.',
          '**Move Over.** For a police car, tow truck, sanitation or utility truck, road crew, or a disabled car with hazard lights, flares or people next to it, leave the lane closest to it when you safely can. If you cannot, slow to 20 mph below the posted limit, or to 5 mph where the limit is 20 or less ([s. 316.126](' + S.s316126 + ')).',
          '**Left lane.** On a road with two or more lanes in your direction, do not stay in the far-left lane when a faster car is coming up behind you ([s. 316.081](' + S.s316081 + ')).',
        ] },
        { type: 'p', text: 'For the full rules on headlights, high beams and Move Over, see our [headlight and Move Over guide](/en/blog/florida-headlight-move-over-law).' },

        { type: 'h2', text: 'If there is a crash on the way' },
        { type: 'ol', items: [
          '**Stop and stay.** Every driver involved must stop at or near the scene. If no one is hurt and your damaged car blocks traffic, make every reasonable effort to move it out of the travel lanes ([s. 316.061](' + S.s316061 + ')).',
          '**Help and exchange information.** Give your name, address and the vehicle registration number, show your license if asked, and give reasonable help to anyone who is injured ([s. 316.062](' + S.s316062 + ')).',
          '**Call it in when the law requires.** Notify the local police, the sheriff or FHP right away if anyone is hurt or killed or the damage looks like at least $2,000 ([s. 316.065](' + S.s316065 + ')). Each driver must give the officer proof of insurance ([s. 316.066](' + S.s316066 + ')).',
          '**See a doctor promptly.** Florida PIP medical benefits depend on getting initial care **within 14 days** after the accident ([s. 627.736](' + S.s627736 + ')).',
          '**Call your agent** once everyone is safe. Our page on [what to do after a car accident in Miami-Dade](/en/auto-insurance-after-accident-miami-dade) walks through the claim steps.',
        ] },

        { type: 'h2', text: 'A five-minute insurance check before a long drive' },
        { type: 'p', text: 'Florida requires only $10,000 of personal injury protection (PIP) and $10,000 of property damage liability (PDL) on most cars ([FLHSMV](' + S.flhsmvIns + ')). That minimum does not pay for injuries you cause to other people; our [minimum car insurance guide](/en/blog/florida-minimum-car-insurance-requirements) explains the gap. Before a holiday trip, pull up your declarations page and ask:' },
        { type: 'ul', items: [
          'Do I carry bodily injury liability, and are my limits enough for a highway crash with a full car?',
          'Do I have [uninsured motorist coverage](/en/blog/uninsured-motorist-coverage-florida) if the other driver has little or none?',
          'Is someone else, like a visiting relative, going to drive my car? Read [lending your car in Florida](/en/blog/lending-your-car-florida-owner-liability) and call us first.',
          'Am I renting a car for the trip? See [rental cars over the holidays](/en/blog/rental-car-insurance-florida-holidays).',
        ] },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Call [(305) 859-3953](' + TEL + ') or [request a quote](/en/quote) before you leave town, or visit our office at 33550 S Dixie Hwy, Suite 102, Florida City (Monday–Friday 9–6, Saturday by appointment). A licensed agent will go over your [car insurance](/en/car-insurance-florida-city) in English, Spanish or Russian, so you know what your policy says before the trip, not after.' },
        { type: 'p', text: 'This is general information, not legal advice. Coverage depends on the terms of your policy. Talk with a licensed agent about your situation.' },
      ],
      faq: [
        { q: 'Do Florida traffic laws change on Thanksgiving or other holidays?', a: 'No. Seat belt, DUI, texting, headlight and Move Over laws apply every day of the year, holidays included. FHP and FLHSMV run holiday safety campaigns because traffic is heavier, not because the rules change.' },
        { q: 'Can I show proof of insurance on my phone in Florida?', a: 'Yes. Section 316.646 allows proof of insurance in a uniform paper or electronic format. Showing the officer your phone does not give consent to look at anything else on it.' },
        { q: 'Do I have to call the police after a minor crash in Florida?', a: 'You must notify the police, the sheriff or FHP right away if anyone is injured or killed, or if the damage appears to be at least $2,000 (s. 316.065). In every crash, drivers must stop, exchange information and help anyone injured.' },
      ],
      sources: [
        { label: 'FLHSMV press release, Nov. 10, 2026: FLHSMV and FHP ask motorists to Arrive Alive this holiday season', url: S.flhsmvRelease },
        { label: 'FLHSMV: Safe Holiday Travel', url: S.flhsmvHoliday },
        { label: 'FLHSMV: Florida insurance requirements', url: S.flhsmvIns },
        { label: 'Florida Statutes s. 316.646, proof of insurance', url: S.s316646 },
        { label: 'Florida Statutes s. 316.614 (2026), Florida Safety Belt Law', url: S.s316614 },
        { label: 'Florida Statutes s. 316.613 (2026), child restraint requirements', url: S.s316613 },
        { label: 'Florida Statutes s. 316.193 (2026), driving under the influence', url: S.s316193 },
        { label: 'Florida Statutes s. 322.2615 (2026), administrative license suspension', url: S.s3222615 },
        { label: 'Florida Statutes s. 316.305 and s. 316.306 (2026), texting and handheld phone use', url: S.s316305 },
        { label: 'Florida Statutes s. 316.217, s. 316.126 and s. 316.081 (2026): headlights, Move Over, left lane', url: S.s316126 },
        { label: 'Florida Statutes s. 316.061, s. 316.062, s. 316.065, s. 316.066: duties and reports after a crash', url: S.s316065 },
        { label: 'Florida Statutes s. 627.736 (2026), PIP 14-day rule', url: S.s627736 },
      ],
    },
    es: {
      title: 'Manejar en Acción de Gracias en Florida: las leyes que no se toman el feriado',
      metaTitle: 'Manejar en Acción de Gracias en Florida | M&K Agency',
      description: '¿Va a manejar a casa de la familia en Acción de Gracias? Cinturón, DUI, celular, luces y Move Over: lo que exige la ley de Florida y qué hacer si choca.',
      excerpt: 'La semana de Acción de Gracias es de las más cargadas en las carreteras de Florida. Estas son las leyes que siguen vigentes en el feriado, lo que pide la ley después de un choque y un repaso rápido de su seguro antes de salir.',
      ogAlt: 'Ilustración de un carro en una autopista de Florida al atardecer entre palmas, con un pavo asado, la hebilla de un cinturón de seguridad y un escudo azul con una marca de verificación',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'El Día de Acción de Gracias cae el **jueves 26 de noviembre**, y para muchas familias del sur de Florida eso significa carretera: subir por el Turnpike, cruzar Alligator Alley o atravesar Miami-Dade con el pastel en el asiento de atrás. El feriado cambia el tráfico, no la ley.' },
        { type: 'p', text: 'Según la Patrulla de Carreteras de Florida (FHP) y el Departamento de Seguridad Vial y Vehículos Motorizados (FLHSMV), durante los cinco días de viaje de Acción de Gracias del año pasado, de miércoles a domingo, hubo **7,331 choques en las vías de Florida y 45 muertes**. El día con más choques fue el miércoles anterior al feriado; el de menos, el propio jueves de Acción de Gracias ([FLHSMV, 10 de noviembre de 2026](' + S.flhsmvRelease + ')). Si puede, viaje el jueves.' },

        { type: 'h2', text: 'Antes de salir: documentos y carro' },
        { type: 'p', text: 'La ley de Florida exige que, mientras maneja, lleve consigo **prueba del seguro obligatorio**, en papel o en formato electrónico ([sección 316.646](' + S.s316646 + ')). En nuestra guía sobre la [prueba de seguro electrónica](/es/blog/electronic-proof-of-insurance-florida) explicamos qué vale. La lista de FLHSMV para las fiestas suma la licencia de conducir y el registro del vehículo, o el contrato si el carro es rentado, y una revisión rápida de gomas, presión de aire, frenos, líquidos y luces ([FLHSMV: viajes en las fiestas](' + S.flhsmvHoliday + ')).' },

        { type: 'h2', text: 'Cinturón y asiento de seguridad para todos' },
        { type: 'ul', items: [
          '**El conductor** tiene que llevar el cinturón puesto, igual que **todo pasajero de 18 años o más que vaya adelante** ([sección 316.614](' + S.s316614 + ')).',
          '**Todo pasajero menor de 18 años**, en cualquier asiento, debe llevar cinturón o ir en un asiento para niños, y el responsable de que así sea es el conductor.',
          '**Los niños de 5 años o menos** necesitan un sistema de retención infantil aprobado a nivel federal y probado en choques. Hasta los 3 años, una sillita independiente o el asiento infantil integrado del carro; a los 4 y 5 años también se permite el booster ([sección 316.613](' + S.s316613 + ')). No cumplir es una infracción en movimiento con 3 puntos en la licencia.',
        ] },
        { type: 'p', text: 'Si no alcanzan los cinturones o las sillitas para los primos y nietos, hace falta un segundo carro, no un niño en las piernas.' },

        { type: 'h2', text: 'Manejar bajo los efectos: el feriado no es excusa' },
        { type: 'p', text: 'Según la [sección 316.193](' + S.s316193 + '), usted maneja bajo la influencia (DUI) si el alcohol, una sustancia controlada o ciertos químicos afectan sus facultades normales, **o** si su nivel de alcohol en sangre o en aliento es de 0.08 o más. Una primera condena trae una multa de $500 a $1,000 y hasta 6 meses de cárcel.' },
        { type: 'p', text: 'La consecuencia para la licencia puede empezar esa misma noche. El agente suspende la licencia de quien marque 0.08 o más (6 meses la primera vez) o de quien se niegue a la prueba de aliento, sangre u orina (1 año la primera negativa), y le entrega un permiso temporal de 10 días. Hay 10 días para pedir una revisión ([sección 322.2615](' + S.s3222615 + ')).' },
        { type: 'p', text: 'FHP y FLHSMV informan que en noviembre y diciembre de 2025 más de 1,000 choques involucraron alcohol, drogas o ambos, y recuerdan que hasta algunos medicamentos sin receta pueden afectar la manera de manejar. Decida quién maneja antes del primer trago. Lo que pasa después con su licencia y su seguro, incluido el FR-44, está en nuestra [guía sobre FR-44 y responsabilidad por lesiones](/es/blog/bodily-injury-liability-fr44-florida).' },

        { type: 'h2', text: 'El celular, guardado' },
        { type: 'p', text: 'En Florida está prohibido escribir o leer textos, correos y mensajes mientras se maneja ([sección 316.305](' + S.s316305 + ')). Usar el teléfono como GPS sí se permite, y un carro detenido no se considera "en operación" para esta ley. En **zonas escolares, cruces escolares y zonas de obras activas** la regla es más estricta: nada de celular en la mano con el carro en marcha, solo manos libres. Esa infracción es en movimiento y suma 3 puntos ([sección 316.306](' + S.s316306 + ')). Programe la ruta y la música antes de arrancar.' },

        { type: 'h2', text: 'Noches oscuras, lluvia y el paseo' },
        { type: 'ul', items: [
          '**Luces.** Deben ir encendidas desde la puesta hasta la salida del sol, incluido el crepúsculo, y siempre que haya lluvia, humo o neblina, sea de día o de noche ([sección 316.217](' + S.s316217 + ')).',
          '**Move Over.** Ante una patrulla, una grúa, un camión de basura o de servicios públicos, una cuadrilla de mantenimiento vial o un carro averiado con luces intermitentes, bengalas o gente al lado, deje libre el carril más cercano cuando pueda hacerlo con seguridad. Si no puede, baje a 20 mph por debajo del límite, o a 5 mph donde el límite sea de 20 mph o menos ([sección 316.126](' + S.s316126 + ')).',
          '**Carril izquierdo.** En una vía con dos o más carriles en su sentido, no siga en el carril de la extrema izquierda si un carro más rápido se le acerca por detrás ([sección 316.081](' + S.s316081 + ')).',
        ] },
        { type: 'p', text: 'Las reglas completas sobre luces, luces altas y Move Over están en nuestra [guía de luces y la ley Move Over](/es/blog/florida-headlight-move-over-law).' },

        { type: 'h2', text: 'Si tiene un choque en el camino' },
        { type: 'ol', items: [
          '**Pare y quédese.** Todo conductor involucrado debe detenerse en el lugar o lo más cerca posible. Si nadie está herido y su carro dañado bloquea el tráfico, haga todo lo razonable por sacarlo de los carriles ([sección 316.061](' + S.s316061 + ')).',
          '**Ayude e intercambie datos.** Dé su nombre, dirección y el número de registro del vehículo, muestre la licencia si se la piden y preste ayuda razonable a cualquier herido ([sección 316.062](' + S.s316062 + ')).',
          '**Avise cuando la ley lo exige.** Llame enseguida a la policía, al sheriff o a FHP si hay heridos o muertos, o daños aparentes de al menos $2,000 ([sección 316.065](' + S.s316065 + ')). Cada conductor debe darle al agente prueba de su seguro ([sección 316.066](' + S.s316066 + ')).',
          '**Vea a un médico pronto.** Los beneficios médicos del PIP en Florida dependen de recibir la atención inicial **dentro de los 14 días** posteriores al accidente ([sección 627.736](' + S.s627736 + ')).',
          '**Llame a su agente** cuando todos estén a salvo. Vea [qué hacer después de un choque en Miami-Dade](/es/auto-insurance-after-accident-miami-dade).',
        ] },

        { type: 'h2', text: 'Cinco minutos para revisar su seguro antes del viaje' },
        { type: 'p', text: 'Florida solo exige $10,000 de protección contra lesiones personales (PIP) y $10,000 de responsabilidad por daños a la propiedad (PDL) en la mayoría de los carros ([FLHSMV](' + S.flhsmvIns + ')). Ese mínimo no paga las lesiones que usted les cause a otras personas; nuestra [guía del seguro mínimo](/es/blog/florida-minimum-car-insurance-requirements) explica ese hueco. Antes de salir, revise su página de declaraciones:' },
        { type: 'ul', items: [
          '¿Tengo responsabilidad por lesiones corporales (BI), y mis límites alcanzan para un choque en autopista con el carro lleno?',
          '¿Tengo [cobertura de motorista sin seguro](/es/blog/uninsured-motorist-coverage-florida) por si el otro conductor tiene poco o ningún seguro?',
          '¿Va a manejar mi carro otra persona, por ejemplo un familiar de visita? Lea [prestar su carro en Florida](/es/blog/lending-your-car-florida-owner-liability) y llámenos antes.',
          '¿Voy a rentar un carro para el viaje? Vea [carros rentados en las fiestas](/es/blog/rental-car-insurance-florida-holidays).',
        ] },

        { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
        { type: 'p', text: 'Llame al [(305) 859-3953](' + TEL + ') o [pida una cotización](/es/quote) antes de salir de viaje, o visite nuestra oficina en 33550 S Dixie Hwy, Suite 102, Florida City (lunes a viernes de 9 a 6, sábados con cita). Un agente con licencia revisará su [seguro de auto](/es/car-insurance-florida-city) en español, inglés o ruso, para que sepa lo que dice su póliza antes del viaje.' },
        { type: 'p', text: 'Esta es información general, no asesoría legal. La cobertura depende de los términos de su póliza. Hable con un agente con licencia sobre su caso.' },
      ],
      faq: [
        { q: '¿Cambian las leyes de tránsito de Florida en Acción de Gracias u otros feriados?', a: 'No. Las leyes sobre cinturón, DUI, textos, luces y Move Over rigen todos los días del año, feriados incluidos.' },
        { q: '¿Puedo mostrar la prueba del seguro en el celular en Florida?', a: 'Sí. La sección 316.646 acepta la prueba de seguro en formato uniforme de papel o electrónico. Mostrarle el teléfono al agente no le da permiso para revisar nada más en él.' },
        { q: '¿Tengo que llamar a la policía después de un choque leve en Florida?', a: 'Debe avisar enseguida a la policía, al sheriff o a FHP si hay heridos o muertos, o si los daños parecen ser de al menos $2,000 (sección 316.065).' },
      ],
      sources: [
        { label: 'FLHSMV, comunicado del 10 de noviembre de 2026: FLHSMV y FHP piden manejar con cuidado en las fiestas (en inglés)', url: S.flhsmvRelease },
        { label: 'FLHSMV: viajes seguros en las fiestas (en inglés)', url: S.flhsmvHoliday },
        { label: 'FLHSMV: requisitos de seguro en Florida', url: S.flhsmvIns },
        { label: 'Estatutos de Florida, sección 316.646: prueba de seguro', url: S.s316646 },
        { label: 'Estatutos de Florida, sección 316.614 (2026): ley del cinturón de seguridad', url: S.s316614 },
        { label: 'Estatutos de Florida, sección 316.613 (2026): asientos de seguridad para niños', url: S.s316613 },
        { label: 'Estatutos de Florida, sección 316.193 (2026): manejar bajo la influencia', url: S.s316193 },
        { label: 'Estatutos de Florida, sección 322.2615 (2026): suspensión administrativa de la licencia', url: S.s3222615 },
        { label: 'Estatutos de Florida, secciones 316.305 y 316.306 (2026): textos y celular en la mano', url: S.s316305 },
        { label: 'Estatutos de Florida, secciones 316.217, 316.126 y 316.081 (2026): luces, Move Over, carril izquierdo', url: S.s316126 },
        { label: 'Estatutos de Florida, secciones 316.061, 316.062, 316.065 y 316.066: deberes y reportes después de un choque', url: S.s316065 },
        { label: 'Estatutos de Florida, sección 627.736 (2026): regla de 14 días del PIP', url: S.s627736 },
      ],
    },
    ru: {
      title: 'Поездки на День благодарения во Флориде: какие законы действуют в праздник',
      metaTitle: 'День благодарения за рулём: законы Флориды | M&K Agency',
      description: 'Едете к родным на День благодарения? Ремни, DUI, телефон, фары и закон Move Over во Флориде действуют и в праздник. И что делать, если случилась авария.',
      excerpt: 'Неделя Дня благодарения — одна из самых загруженных на дорогах Флориды. Какие законы не уходят на выходные, что требует закон после аварии и как за пять минут проверить страховку перед поездкой.',
      ogAlt: 'Иллюстрация: машина на шоссе во Флориде между пальмами в сумерках, блюдо с запечённой индейкой, пряжка ремня безопасности и синий щит с галочкой',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'День благодарения в этом году — **в четверг, 26 ноября**, и для многих семей Южной Флориды это значит дорогу: на север по Turnpike, через Alligator Alley или просто через весь Miami-Dade с пирогом на заднем сиденье. Праздник меняет трафик, но не законы. Всё, что действует в обычный вторник, действует и в длинные выходные.' },
        { type: 'p', text: 'По данным Дорожного патруля Флориды (FHP) и Департамента безопасности дорожного движения и транспортных средств (FLHSMV), за пять праздничных дней в прошлом году, со среды по воскресенье, на дорогах штата произошло **7 331 ДТП, погибли 45 человек**. Больше всего аварий пришлось на среду перед праздником, меньше всего — на сам четверг ([FLHSMV, 10 ноября 2026 г.](' + S.flhsmvRelease + ')). Если есть возможность, выезжайте пораньше или в четверг.' },

        { type: 'h2', text: 'Перед выездом: документы и машина' },
        { type: 'p', text: 'По закону Флориды за рулём у вас **при себе должно быть подтверждение обязательной страховки** — на бумаге или в электронном виде ([s. 316.646](' + S.s316646 + ')). Что именно подходит, мы разбирали в статье об [электронном подтверждении страховки](/ru/blog/electronic-proof-of-insurance-florida). FLHSMV в праздничной памятке добавляет водительские права и регистрацию (или договор аренды, если машина арендована), а также советует проверить шины и давление в них, тормоза, жидкости и фары ([FLHSMV: поездки в праздники](' + S.flhsmvHoliday + ')).' },

        { type: 'h2', text: 'Ремни и автокресла — для всех в машине' },
        { type: 'ul', items: [
          '**Водитель** обязан быть пристёгнут, как и **любой пассажир 18 лет и старше на переднем сиденье** ([s. 316.614](' + S.s316614 + ')).',
          '**Все пассажиры младше 18 лет**, на любом месте, должны быть пристёгнуты ремнём или сидеть в детском удерживающем устройстве. Отвечает за это водитель.',
          '**Детям 5 лет и младше** нужно детское автокресло, одобренное по федеральным стандартам и прошедшее краш-тесты. До 3 лет включительно — отдельное автокресло или встроенное детское сиденье; в 4 и 5 лет можно и бустер ([s. 316.613](' + S.s316613 + ')). Нарушение — это moving violation и 3 штрафных балла в правах.',
        ] },
        { type: 'p', text: 'В праздники машина часто набита племянниками и внуками. Если ремней или кресел на всех не хватает, нужна вторая машина, а не ребёнок на коленях.' },

        { type: 'h2', text: 'Алкоголь за рулём: праздник не исключение' },
        { type: 'p', text: 'Согласно [s. 316.193](' + S.s316193 + '), вы считаетесь водителем в состоянии опьянения (DUI), если алкоголь, контролируемое вещество или некоторые химические вещества нарушают ваши нормальные способности, **или** если содержание алкоголя в крови или выдыхаемом воздухе — 0,08 и выше. За первое осуждение — штраф от $500 до $1 000 и до 6 месяцев заключения.' },
        { type: 'p', text: 'Последствия для прав могут наступить в ту же ночь. Полицейский приостанавливает права водителя с показателем 0,08 и выше (на 6 месяцев в первый раз) или водителя, отказавшегося от теста дыхания, крови или мочи (на 1 год при первом отказе), и выдаёт временное разрешение на 10 дней. Запросить пересмотр можно в течение 10 дней ([s. 322.2615](' + S.s3222615 + ')).' },
        { type: 'p', text: 'FHP и FLHSMV сообщают, что в ноябре и декабре 2025 года более 1 000 аварий были связаны с алкоголем, наркотиками или и тем и другим, и напоминают: даже некоторые безрецептурные лекарства могут влиять на вождение. Решите, кто повезёт гостей домой, или вызовите такси ещё до первого бокала. Что DUI означает потом для прав и страховки, включая форму FR-44, — в нашей [статье о FR-44 и ответственности за травмы](/ru/blog/bodily-injury-liability-fr44-florida).' },

        { type: 'h2', text: 'Телефон — в сторону' },
        { type: 'p', text: 'Во Флориде запрещено набирать и читать сообщения, письма и мессенджеры во время движения ([s. 316.305](' + S.s316305 + ')). Пользоваться телефоном как навигатором можно, а стоящая машина по этому закону не считается «управляемой». В **школьных зонах, на школьных переходах и в зонах дорожных работ, где идут работы**, правило строже: никакого телефона в руке на ходу, только hands-free. Это нарушение — moving violation с 3 баллами ([s. 316.306](' + S.s316306 + ')). На длинной трассе зон ремонта много, поэтому маршрут и музыку настройте до того, как тронетесь.' },

        { type: 'h2', text: 'Темнота, дождь и обочина' },
        { type: 'ul', items: [
          '**Фары** должны гореть от заката до рассвета, включая сумерки, а также в любой дождь, дым или туман — днём и ночью ([s. 316.217](' + S.s316217 + ')). С праздничного ужина многие возвращаются уже затемно.',
          '**Move Over.** Если на обочине стоит полиция, эвакуатор, мусоровоз, машина коммунальной службы, дорожная бригада или сломанная машина с аварийкой, фальшфейерами или людьми рядом — когда это безопасно, освободите ближайшую к ней полосу. Если не получается, снизьте скорость на 20 миль/ч ниже разрешённой, а там, где ограничение 20 миль/ч и меньше, — до 5 миль/ч ([s. 316.126](' + S.s316126 + ')).',
          '**Левая полоса.** На дороге с двумя и более полосами в вашем направлении не оставайтесь в крайней левой, если сзади вас догоняет более быстрая машина ([s. 316.081](' + S.s316081 + ')).',
        ] },
        { type: 'p', text: 'Подробнее о фарах, дальнем свете и законе Move Over — в нашей [статье о фарах и Move Over](/ru/blog/florida-headlight-move-over-law).' },

        { type: 'h2', text: 'Если по дороге случилась авария' },
        { type: 'ol', items: [
          '**Остановитесь и не уезжайте.** Каждый участник ДТП обязан остановиться на месте или как можно ближе к нему. Если никто не пострадал, а ваша повреждённая машина мешает движению, сделайте всё разумно возможное, чтобы убрать её с полос ([s. 316.061](' + S.s316061 + ')).',
          '**Помогите и обменяйтесь данными.** Сообщите имя, адрес и регистрационный номер машины, по просьбе покажите права и окажите разумную помощь пострадавшим ([s. 316.062](' + S.s316062 + ')).',
          '**Сообщите в полицию, когда это требуется.** Немедленно звоните в местную полицию, шерифу или в FHP, если есть пострадавшие или погибшие либо ущерб на вид не меньше $2 000 ([s. 316.065](' + S.s316065 + ')). Каждый водитель обязан предъявить полицейскому подтверждение страховки ([s. 316.066](' + S.s316066 + ')).',
          '**Не откладывайте визит к врачу.** Медицинские выплаты по PIP во Флориде зависят от того, получили ли вы первую помощь **в течение 14 дней** после аварии ([s. 627.736](' + S.s627736 + ')).',
          '**Позвоните своему агенту**, когда все в безопасности. На странице [что делать после ДТП в Miami-Dade](/ru/auto-insurance-after-accident-miami-dade) мы разбираем шаги по страховому случаю.',
        ] },

        { type: 'h2', text: 'Пять минут на проверку страховки перед дальней дорогой' },
        { type: 'p', text: 'Флорида требует для большинства машин всего $10 000 PIP (личная защита от травм) и $10 000 PDL (ответственность за ущерб имуществу) ([FLHSMV](' + S.flhsmvIns + ')). Этот минимум не оплачивает травмы, которые вы причините другим людям; об этом пробеле — в нашей [статье о минимальной автостраховке](/ru/blog/florida-minimum-car-insurance-requirements). Перед поездкой откройте страницу деклараций (declarations page) своего полиса и спросите себя:' },
        { type: 'ul', items: [
          'Есть ли у меня ответственность за телесные повреждения (BI) и хватит ли лимитов, если авария на шоссе, а в машине полно людей?',
          'Есть ли у меня [покрытие UM/UIM](/ru/blog/uninsured-motorist-coverage-florida) на случай, если у виновника мало страховки или её нет вовсе?',
          'Сядет ли за руль моей машины кто-то другой, например приехавший в гости родственник? Прочитайте статью о том, [как одалживать машину во Флориде](/ru/blog/lending-your-car-florida-owner-liability), и сначала позвоните нам.',
          'Беру ли я машину напрокат? Смотрите статью об [аренде машины на праздники](/ru/blog/rental-car-insurance-florida-holidays).',
        ] },

        { type: 'h2', text: 'Чем поможет M&K Agency' },
        { type: 'p', text: 'Позвоните по номеру [(305) 859-3953](' + TEL + ') или [оставьте заявку](/ru/quote) до отъезда, либо приезжайте в офис: 33550 S Dixie Hwy, Suite 102, Florida City (пн–пт 9–6, в субботу по записи). Лицензированный агент на русском, английском или испанском разберёт ваш [автополис](/ru/car-insurance-florida-city), чтобы вы знали, что в нём написано, до поездки, а не после. Подробнее о нас — на странице [русскоязычного страхового агента в Майами](/ru/russian-speaking-insurance-agent-miami).' },
        { type: 'p', text: 'Это общая информация, а не юридическая консультация. Покрытие зависит от условий вашего полиса. Обсудите свою ситуацию с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Меняются ли правила дорожного движения во Флориде на День благодарения и другие праздники?', a: 'Нет. Законы о ремнях, DUI, сообщениях за рулём, фарах и Move Over действуют каждый день, включая праздники. FHP и FLHSMV проводят праздничные кампании потому, что машин на дорогах больше, а не потому, что меняются правила.' },
        { q: 'Можно ли во Флориде показать подтверждение страховки на телефоне?', a: 'Да. Раздел 316.646 допускает подтверждение страховки в стандартном бумажном или электронном формате. Показав телефон полицейскому, вы не даёте согласия просматривать на нём что-либо ещё.' },
        { q: 'Нужно ли вызывать полицию после небольшой аварии во Флориде?', a: 'Сообщить полиции, шерифу или FHP нужно немедленно, если есть пострадавшие или погибшие либо ущерб на вид не меньше $2 000 (s. 316.065). При любой аварии водители обязаны остановиться, обменяться данными и помочь пострадавшим.' },
      ],
      sources: [
        { label: 'FLHSMV, пресс-релиз от 10 ноября 2026 г.: FLHSMV и FHP призывают к безопасным поездкам в праздники (англ.)', url: S.flhsmvRelease },
        { label: 'FLHSMV: безопасные поездки в праздники (англ.)', url: S.flhsmvHoliday },
        { label: 'FLHSMV: требования к страховке во Флориде (англ.)', url: S.flhsmvIns },
        { label: 'Законы Флориды, s. 316.646: подтверждение страховки', url: S.s316646 },
        { label: 'Законы Флориды, s. 316.614 (2026): закон о ремнях безопасности', url: S.s316614 },
        { label: 'Законы Флориды, s. 316.613 (2026): детские удерживающие устройства', url: S.s316613 },
        { label: 'Законы Флориды, s. 316.193 (2026): вождение в состоянии опьянения', url: S.s316193 },
        { label: 'Законы Флориды, s. 322.2615 (2026): административная приостановка прав', url: S.s3222615 },
        { label: 'Законы Флориды, s. 316.305 и s. 316.306 (2026): сообщения и телефон в руке за рулём', url: S.s316305 },
        { label: 'Законы Флориды, s. 316.217, s. 316.126 и s. 316.081 (2026): фары, Move Over, левая полоса', url: S.s316126 },
        { label: 'Законы Флориды, s. 316.061, s. 316.062, s. 316.065, s. 316.066: обязанности и отчёты после ДТП', url: S.s316065 },
        { label: 'Законы Флориды, s. 627.736 (2026): правило 14 дней для PIP', url: S.s627736 },
      ],
    },
  },
};
