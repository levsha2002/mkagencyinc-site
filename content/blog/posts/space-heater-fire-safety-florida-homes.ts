import type { BlogPost } from '../types';

// New article 2026-11-16 (content plan 2026-11, row 2026-11-16). Facts checked 2026-11-16 (ET) against
// official sources (raw copies in /workspace/spaceheater/; notes in
// /workspace/articles/space-heater-fire-safety-florida-homes_sources.md):
// - NFPA Home Heating Safety page (2020-2024 annual averages): 37,365 heating fires/yr, 11% of home fires,
//   417 deaths, 1,260 injuries, $1.2 billion direct property damage; space heaters and heating stoves 30% of the
//   fires but 73% of deaths and 70% of injuries; 46% of heating fires December-February.
// - CPSC news release Jan 23, 2026: portable heaters ~1,600 fires/yr, 70 deaths, 150 injuries (2020-2022);
//   3 ft from drapes/furniture/bedding; wall outlet only, never extension cord or power strip; off when sleeping;
//   never refuel a fuel-burning heater in use; yearly professional inspection of fuel-burning systems and chimneys;
//   generators outdoors only, 20 ft; smoke alarms every level + inside each bedroom; CO alarms every level +
//   outside sleeping areas; test monthly; batteries yearly or sealed 10-year batteries; check cpsc.gov/recalls.
// - CPSC Pub. 098 (portable electric heaters): hot plug/cord/outlet -> stop using; cord never under rugs.
// - Miami-Dade Fire Rescue "Safety Tips: Portable Space Heaters": lab-tested/UL; thermostat, overheat protection,
//   tip-over shutoff; flat solid surface; not in damp/wet areas; check cords; wall outlet; 3 ft from anything that
//   can burn; 3-ft zone for kids and pets; out of foot traffic, never block an exit; no grills/fuel-burning
//   appliances inside; never heat with the oven; turn off and unplug when leaving the room or going to bed.
// - USFA heating page: 3 ft from all heat sources; no oven; off when leaving/going to bed; yearly cleaning and
//   inspection of heating equipment and chimneys. USFA escape plans: <2 minutes after the smoke alarm sounds,
//   2 ways out of every room, outside meeting place, call the fire department from outside.
// - FL DFS / State Fire Marshal CO flyer: odorless, colorless; common sources include furnaces, stoves, water
//   heaters, kerosene heaters, generators, grills, vehicles; symptoms can resemble cold/flu; CO alarms outside
//   sleeping areas and on every level; test monthly; if it sounds, get out, then call.
// - s. 553.885 (2026): CO alarm within 10 ft of each sleeping room in buildings/additions built on or after
//   July 1, 2008 with a fossil-fuel heater/appliance, fireplace or attached garage; combo CO/smoke allowed;
//   not for existing buildings under alteration/repair unless an addition.
// - s. 553.883 (2026): 1-2 family dwellings and townhomes undergoing repair or level 1 alteration may use
//   10-year sealed-battery smoke alarms; new/replacement battery alarms in that case must be 10-year sealed.
// - s. 83.51(2)(b) (2026): landlord of a single-family home or duplex installs working smoke detection devices
//   at the start of the tenancy unless otherwise agreed in writing.
// - s. 627.70132(2) (2026): property claim notice within 1 year after the date of loss (supplemental 18 months).
const LEG = 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=';
const S = {
  nfpa: 'https://www.nfpa.org/education-and-research/home-fire-safety/heating',
  cpsc: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/Keep-Warm-and-Safe-This-Winter-Tips-for-Using-Generators-Furnaces-and-Space-Heaters',
  cpscPub: 'https://www.cpsc.gov/s3fs-public/heaters.pdf',
  recalls: 'https://www.cpsc.gov/recalls',
  mdfr: 'https://www.miamidade.gov/global/fire/safety-space-heaters.page',
  usfa: 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/heating/',
  usfaEscape: 'https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/home-fire-escape-plans/',
  sfmCo: 'https://www.myfloridacfo.com/docs-sf/state-fire-marshal-libraries/sfm-documents/co-carbon-monoxide-prevention.pdf',
  s553885: LEG + '0500-0599/0553/Sections/0553.885.html',
  s553883: LEG + '0500-0599/0553/Sections/0553.883.html',
  s8351: LEG + '0000-0099/0083/Sections/0083.51.html',
  s62770132: LEG + '0600-0699/0627/Sections/0627.70132.html',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'space-heater-fire-safety-florida-homes',
  datePublished: '2026-11-16',
  translations: {
    en: {
      title: 'Space Heaters and Cold-Weather Fire Safety for Florida Homes',
      metaTitle: 'Space Heater Fire Safety for Florida Homes | M&K Agency',
      description: 'Cold front in South Florida? How to use a space heater safely, what Florida law says about smoke and CO alarms, and what to ask about your home policy.',
      ogAlt: 'Illustration of a small electric space heater in a living room with a dotted safety circle on the floor, a smoke alarm on the ceiling, a window with palm trees and a blue shield with a check mark',
      excerpt: 'Most of the year, a space heater sits in the closet. When a cold front arrives, here is how to use it without starting a fire, plus the smoke and CO alarm rules Florida law sets.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'In South Florida, a space heater can sit in a closet for eleven months and then run for a few cold nights in a row. That is when problems start: a dusty unit, a damaged cord, a heater too close to the bed. Here is what fire officials recommend, what Florida law says about smoke and carbon monoxide (CO) alarms, and what to ask about your homeowners policy.' },

        { type: 'h2', text: 'Why a few cold nights matter' },
        { type: 'p', text: 'Heating equipment is one of the leading causes of U.S. home fire deaths. According to the National Fire Protection Association (NFPA), a nonprofit standards organization, fire departments responded to an average of **37,365 home heating fires a year** in 2020–2024, about 11% of reported home fires, with an estimated 417 civilian deaths, 1,260 injuries and $1.2 billion in direct property damage each year ([NFPA](' + S.nfpa + ')).' },
        { type: 'ul', items: [
          '**Space heaters and heating stoves** were involved in about 30% of those fires, but in **73% of the deaths** and 70% of the injuries.',
          'Nearly half of home heating fires (46%) happen from **December through February**.',
          'The U.S. Consumer Product Safety Commission (CPSC) estimates that portable heaters are involved in about 1,600 fires a year, with about 70 deaths and 150 injuries a year (2020–2022) ([CPSC](' + S.cpsc + ')).',
        ] },

        { type: 'h2', text: 'Before you plug it in' },
        { type: 'ul', items: [
          '**Look for a safety certification.** Miami-Dade Fire Rescue recommends electric heaters tested by a qualified laboratory (a UL mark, for example), with a **thermostat, overheat protection and automatic shut-off if the heater tips over** ([Miami-Dade Fire Rescue](' + S.mdfr + ')).',
          '**Inspect the heater, cord and plug.** Don’t use a heater you suspect is damaged ([CPSC Pub. 098](' + S.cpscPub + ')). Clean off the dust.',
          '**Check for recalls** at [cpsc.gov/recalls](' + S.recalls + '). If a heater has been recalled, stop using it and contact the company for the remedy ([CPSC](' + S.cpsc + ')).',
        ] },

        { type: 'h2', text: 'Where and how to use it' },
        { type: 'ul', items: [
          '**The three-foot rule.** Keep anything that can burn, such as curtains, bedding, sofas, clothes and paper, at least 3 feet from the front, sides and back of the heater ([CPSC](' + S.cpsc + '), [USFA](' + S.usfa + ')). Miami-Dade Fire Rescue also suggests a three-foot zone around the heater where children and pets don’t play.',
          '**Wall outlet only.** Plug an electric heater straight into a wall outlet, never into an extension cord or power strip, and don’t run the cord under a rug ([CPSC](' + S.cpsc + '), [Miami-Dade Fire Rescue](' + S.mdfr + ')).',
          '**Feel for heat.** If the plug, cord or outlet gets hot, stop using the heater and have an electrician or repair person check it ([CPSC Pub. 098](' + S.cpscPub + ')).',
          '**Stable and out of the way.** Set it on a flat, solid surface, away from foot traffic, never blocking an exit, and never in damp or wet areas ([Miami-Dade Fire Rescue](' + S.mdfr + ')).',
          '**Turn it off and unplug it** when you leave the room or go to sleep ([Miami-Dade Fire Rescue](' + S.mdfr + ')).',
        ] },

        { type: 'h2', text: 'Never heat the house with an oven, grill or generator' },
        { type: 'p', text: 'Fire officials are clear: **don’t use the oven to heat your home**, and never bring a grill or other fuel-burning appliance indoors ([USFA](' + S.usfa + '), [Miami-Dade Fire Rescue](' + S.mdfr + ')). Fuel-burning equipment can produce carbon monoxide, an odorless, colorless gas. The State Fire Marshal lists furnaces, stoves, water heaters, **kerosene heaters**, generators, grills and vehicles among common CO sources ([Florida State Fire Marshal](' + S.sfmCo + ')). If you own a fuel-burning heater, never refuel it while it is running; turn it off and let it cool first. Portable generators belong outdoors only, at least 20 feet from the house ([CPSC](' + S.cpsc + ')). Have fireplaces, chimneys and fuel-burning heating systems inspected by a professional each year.' },

        { type: 'h2', text: 'Smoke and CO alarms: what Florida law says' },
        { type: 'ul', items: [
          '**CO alarms in newer buildings.** Buildings and additions built on or after **July 1, 2008** that have a fossil-fuel heater or appliance, a fireplace or an attached garage must have an approved CO alarm **within 10 feet of each bedroom** (or where the Florida Building Code requires). A combination CO and smoke alarm qualifies. The rule does not reach existing homes undergoing repairs or alterations unless the work is an addition ([s. 553.885](' + S.s553885 + ')).',
          '**10-year sealed batteries.** When a one- or two-family home or townhome undergoes a repair or a level 1 alteration, it may use smoke alarms powered by 10-year nonremovable batteries instead of being retrofitted with hard-wired alarms, and a battery alarm installed or replaced in that situation must have such a battery (with exceptions for monitored, wireless and multisensor devices) ([s. 553.883](' + S.s553883 + ')).',
          '**If you rent out a house or duplex.** Unless otherwise agreed in writing, the landlord must install working smoke detection devices when the tenancy begins ([s. 83.51(2)(b)](' + S.s8351 + ')).',
        ] },
        { type: 'p', text: 'Beyond the legal minimums, CPSC recommends smoke alarms on every level and inside each bedroom, CO alarms on every level and outside sleeping areas, and **testing all alarms monthly** ([CPSC](' + S.cpsc + ')). The State Fire Marshal’s guidance is the same for CO alarms, and adds that early CO symptoms can feel like a cold or the flu; if the CO alarm sounds, get out of the house first, then call ([Florida State Fire Marshal](' + S.sfmCo + ')).' },

        { type: 'h2', text: 'Have an escape plan' },
        { type: 'p', text: 'The U.S. Fire Administration warns that you could have **less than 2 minutes** to escape once the smoke alarm sounds. Know two ways out of every room, keep doors and windows clear, pick a meeting place outside, and call the fire department once you are out ([USFA](' + S.usfaEscape + ')).' },

        { type: 'h2', text: 'Your homeowners policy: questions to ask now' },
        { type: 'p', text: 'We can’t tell you in advance that a particular fire or loss will be covered; that depends on the terms, limits, exclusions and deductible in your policy. A cold-weather check is a good time to review it with an agent and ask:' },
        { type: 'ul', items: [
          'How does my policy handle fire and smoke damage, and what deductible applies?',
          'Do my dwelling and personal property limits still match my home and belongings?',
          'Does it help with living expenses if I can’t stay in the home during repairs?',
          'What liability protection do I have if a fire spreads to a neighbor’s property? (See [umbrella insurance explained](/en/blog/umbrella-insurance-explained-florida).)',
          'I own a condo: what does the association policy cover, and what is mine? (See [condo association vs. HO-6](/en/blog/condo-association-vs-ho6-florida).)',
        ] },
        { type: 'p', text: 'Keep a current home inventory with photos (our [year-end checklist](/en/blog/end-of-hurricane-season-checklist-florida) walks through it). If you do have a loss, report it promptly under the terms of your policy. Florida law bars a property insurance claim unless notice is given within **1 year after the date of loss** (18 months for a supplemental claim) ([s. 627.70132](' + S.s62770132 + ')). Our [claim checklist](/en/blog/hurricane-claim-checklist-florida) was written for storms, but its documentation steps apply to any home claim.' },
        { type: 'callout', title: 'Talk it through with a local agent', text: 'Ask through the [quote form](/en/quote) or call [(305) 859-3953](' + TEL + '). M&K Agency is at 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (Monday–Friday 9–6, Saturday by appointment), and we work in English, Spanish and Russian. See also [homeowners insurance in Florida City](/en/homeowners-insurance-florida-city). Coverage depends on the policy you choose. This is general safety information, not legal advice.' },
      ],
      faq: [
        { q: 'Is it safe to leave a space heater on overnight?', a: 'No. CPSC and Miami-Dade Fire Rescue advise turning heaters off when you go to sleep.' },
        { q: 'Does Florida require a carbon monoxide alarm in my house?', a: 'Section 553.885 requires one within 10 feet of each bedroom in buildings and additions built on or after July 1, 2008 that have a fossil-fuel heater or appliance, a fireplace or an attached garage. Even where the law doesn’t apply, CPSC and the State Fire Marshal recommend CO alarms on every level and outside sleeping areas.' },
        { q: 'Will my homeowners insurance pay if a space heater starts a fire?', a: 'We can’t promise that any loss is covered. It depends on your policy’s terms, limits, exclusions and deductible. Review your policy with a licensed agent before winter, and report any loss promptly under the policy terms.' },
      ],
      sources: [
        { label: 'NFPA: Home heating safety (2020–2024 statistics)', url: S.nfpa },
        { label: 'U.S. CPSC: Keep warm and safe this winter (Jan. 23, 2026)', url: S.cpsc },
        { label: 'U.S. CPSC: Reducing fire hazards for portable electric heaters (Pub. 098)', url: S.cpscPub },
        { label: 'Miami-Dade Fire Rescue: Safety tips for portable space heaters', url: S.mdfr },
        { label: 'U.S. Fire Administration (FEMA): Heating fire safety', url: S.usfa },
        { label: 'U.S. Fire Administration (FEMA): Home fire escape plans', url: S.usfaEscape },
        { label: 'Florida DFS, State Fire Marshal: Carbon monoxide safety and prevention', url: S.sfmCo },
        { label: 'Florida Statutes, s. 553.885 (2026): carbon monoxide alarm required', url: S.s553885 },
        { label: 'Florida Statutes, s. 553.883 (2026): smoke alarms in one- and two-family dwellings and townhomes', url: S.s553883 },
        { label: 'Florida Statutes, s. 83.51 (2026): landlord’s obligation to maintain premises', url: S.s8351 },
        { label: 'Florida Statutes, s. 627.70132 (2026): notice of property insurance claim', url: S.s62770132 },
      ],
    },
    es: {
      title: 'Calentadores portátiles y prevención de incendios en casa cuando hace frío en Florida',
      metaTitle: 'Calentadores portátiles y riesgo de incendio | M&K Agency',
      description: '¿Llegó el frío? Cómo usar un calentador portátil con seguridad, qué exige Florida sobre alarmas de humo y de CO, y qué revisar en su póliza.',
      ogAlt: 'Ilustración de un pequeño calentador eléctrico en una sala con un círculo de seguridad punteado en el piso, una alarma de humo en el techo, una ventana con palmeras y un escudo azul con una marca de verificación',
      excerpt: 'Casi todo el año el calentador está guardado en el clóset. Cuando llega un frente frío, así se usa sin provocar un incendio, más las reglas de Florida sobre alarmas de humo y de monóxido de carbono.',
      category: 'Seguro de vivienda',
      body: [
        { type: 'p', text: 'En el sur de Florida, un calentador portátil pasa once meses guardado y luego trabaja varias noches seguidas. Ahí empiezan los problemas: polvo, un cable dañado, el calentador pegado a la cama. Aquí verá qué recomiendan los bomberos, qué dice la ley de Florida sobre las alarmas de humo y de monóxido de carbono (CO) y qué preguntar sobre su seguro de vivienda.' },

        { type: 'h2', text: 'Por qué importan unas pocas noches frías' },
        { type: 'p', text: 'La calefacción es una de las principales causas de muertes por incendios en hogares de EE. UU. Según la National Fire Protection Association (NFPA), organización sin fines de lucro que elabora normas, los bomberos atendieron en promedio **37,365 incendios por calefacción al año** en viviendas entre 2020 y 2024, cerca del 11 % de los incendios residenciales, con unas 417 muertes, 1,260 heridos y $1,200 millones en daños directos al año ([NFPA](' + S.nfpa + ')).' },
        { type: 'ul', items: [
          'Los **calentadores portátiles y las estufas de calefacción** participaron en cerca del 30 % de esos incendios, pero en el **73 % de las muertes** y el 70 % de los heridos.',
          'Casi la mitad (46 %) ocurre **entre diciembre y febrero**.',
          'Según la Comisión de Seguridad de Productos del Consumidor (CPSC), los calentadores portátiles causan unos 1,600 incendios, 70 muertes y 150 heridos al año (2020–2022) ([CPSC](' + S.cpsc + ')).',
        ] },

        { type: 'h2', text: 'Antes de enchufarlo' },
        { type: 'ul', items: [
          '**Busque una certificación de seguridad.** Miami-Dade Fire Rescue recomienda calentadores eléctricos probados por un laboratorio calificado (por ejemplo, con la marca UL), con **termostato, protección contra sobrecalentamiento y apagado automático si se vuelca** ([Miami-Dade Fire Rescue](' + S.mdfr + ')).',
          '**Revise el aparato, el cable y el enchufe.** No use un calentador que crea dañado ([CPSC, publicación 098](' + S.cpscPub + ')). Quítele el polvo.',
          '**Verifique si tiene un retiro del mercado (recall)** en [cpsc.gov/recalls](' + S.recalls + '). Si aparece, deje de usarlo y contacte a la empresa ([CPSC](' + S.cpsc + ')).',
        ] },

        { type: 'h2', text: 'Dónde y cómo usarlo' },
        { type: 'ul', items: [
          '**La regla de los tres pies (casi un metro).** Mantenga cortinas, ropa de cama, sofás, ropa y papeles al menos a 3 pies del calentador, por todos sus lados ([CPSC](' + S.cpsc + '), [USFA](' + S.usfa + ')). Miami-Dade Fire Rescue sugiere además que niños y mascotas no jueguen en esa zona.',
          '**Solo al tomacorriente de la pared.** Conecte el calentador eléctrico directamente a la pared, nunca a una extensión ni a una regleta, y no pase el cable debajo de una alfombra ([CPSC](' + S.cpsc + '), [Miami-Dade Fire Rescue](' + S.mdfr + ')).',
          '**Fíjese si algo se calienta.** Si el enchufe, el cable o el tomacorriente se calientan, deje de usarlo y llame a un electricista o técnico ([CPSC, publicación 098](' + S.cpscPub + ')).',
          '**Estable y fuera del paso.** Póngalo en una superficie plana y firme, fuera del paso, sin bloquear salidas y nunca en lugares húmedos ([Miami-Dade Fire Rescue](' + S.mdfr + ')).',
          '**Apáguelo y desenchúfelo** al salir de la habitación o al irse a dormir ([Miami-Dade Fire Rescue](' + S.mdfr + ')).',
        ] },

        { type: 'h2', text: 'Nunca caliente la casa con el horno, la parrilla o el generador' },
        { type: 'p', text: 'Los bomberos son claros: **no use el horno para calentar la casa** y nunca meta una parrilla u otro aparato de combustible dentro de la vivienda ([USFA](' + S.usfa + '), [Miami-Dade Fire Rescue](' + S.mdfr + ')). Estos equipos pueden producir monóxido de carbono, un gas sin olor ni color. El State Fire Marshal de Florida incluye entre las fuentes comunes de CO los hornos de calefacción (furnaces), estufas, calentadores de agua, **calentadores de queroseno**, generadores, parrillas y vehículos ([State Fire Marshal de Florida](' + S.sfmCo + ')). Si su calentador usa combustible, nunca lo recargue encendido: apáguelo y déjelo enfriar. El generador portátil va solo afuera, a por lo menos 20 pies de la casa ([CPSC](' + S.cpsc + ')). Haga revisar cada año la chimenea y la calefacción a combustible por un profesional.' },

        { type: 'h2', text: 'Alarmas de humo y de CO: qué dice la ley de Florida' },
        { type: 'ul', items: [
          '**Alarmas de CO en construcciones más nuevas.** Los edificios y ampliaciones construidos **desde el 1 de julio de 2008** que tengan un calentador o aparato a combustible fósil, una chimenea o un garaje adosado deben tener una alarma de CO aprobada **a menos de 10 pies de cada dormitorio** (o donde lo indique el Código de Construcción de Florida). Sirve una alarma combinada de CO y humo. No se aplica a casas existentes en reparación o remodelación, salvo una ampliación ([s. 553.885](' + S.s553885 + ')).',
          '**Baterías selladas de 10 años.** En una vivienda uni- o bifamiliar o un townhome en reparación o alteración de nivel 1, se pueden usar alarmas de humo con batería no removible de 10 años en lugar de alarmas cableadas; la alarma de batería que se instale o reemplace en ese caso debe ser de ese tipo (hay excepciones para equipos monitoreados, inalámbricos o multisensor) ([s. 553.883](' + S.s553883 + ')).',
          '**Si alquila una casa o un dúplex.** Salvo pacto escrito en contrario, el arrendador instala detectores de humo funcionando al inicio del alquiler ([s. 83.51(2)(b)](' + S.s8351 + ')).',
        ] },
        { type: 'p', text: 'Además, la CPSC recomienda alarmas de humo en cada piso y dentro de cada dormitorio, alarmas de CO en cada piso y fuera de las áreas donde se duerme, y **probar todas las alarmas una vez al mes** ([CPSC](' + S.cpsc + ')). El State Fire Marshal coincide en las alarmas de CO y advierte que los síntomas pueden parecer una gripe; si suena la alarma de CO, primero salga de la casa y después llame ([State Fire Marshal de Florida](' + S.sfmCo + ')).' },

        { type: 'h2', text: 'Tenga un plan de escape' },
        { type: 'p', text: 'La Administración de Bomberos de EE. UU. (USFA) advierte que podría tener **menos de 2 minutos** para salir una vez que suena la alarma de humo. Tenga dos salidas por habitación, puertas y ventanas despejadas y un punto de encuentro afuera; llame a los bomberos desde allí ([USFA](' + S.usfaEscape + ')).' },

        { type: 'h2', text: 'Su seguro de vivienda: preguntas para hacer ahora' },
        { type: 'p', text: 'No podemos anticiparle que un incendio concreto estará cubierto: depende de las condiciones, límites, exclusiones y deducible de su póliza. Antes del frío, repásela con un agente y pregunte:' },
        { type: 'ul', items: [
          '¿Cómo trata mi póliza los daños por fuego y humo, y qué deducible se aplica?',
          '¿Los límites de la vivienda y de mis pertenencias siguen siendo adecuados?',
          '¿Ayuda con gastos de vivienda si debo salir de casa durante las reparaciones?',
          '¿Qué protección de responsabilidad civil tengo si el fuego pasa a la propiedad del vecino? (Vea [el seguro umbrella explicado](/es/blog/umbrella-insurance-explained-florida).)',
          'Tengo un condominio: ¿qué cubre la póliza de la asociación y qué me toca a mí? (Vea [póliza de la asociación vs. HO-6](/es/blog/condo-association-vs-ho6-florida).)',
        ] },
        { type: 'p', text: 'Tenga un inventario con fotos (vea nuestra [lista de fin de año](/es/blog/end-of-hurricane-season-checklist-florida)) y, si hay un siniestro, avise pronto según su póliza. La ley de Florida impide el reclamo de seguro de propiedad si el aviso no se da **dentro de 1 año desde la fecha de la pérdida** (18 meses para un reclamo suplementario) ([s. 627.70132](' + S.s62770132 + ')). Los pasos para documentar daños de nuestra [lista para reclamos](/es/blog/hurricane-claim-checklist-florida), pensada para huracanes, sirven para cualquier reclamo de la casa.' },
        { type: 'callout', title: 'Hable con un agente local', text: 'Escríbanos por el [formulario de cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + '). M&K Agency está en 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (lunes a viernes de 9 a 6, sábados con cita) y le atendemos en español, inglés y ruso. Vea también [seguro de vivienda en Florida City](/es/homeowners-insurance-florida-city). La cobertura depende de la póliza que elija. Esta es información general de seguridad, no asesoría legal.' },
      ],
      faq: [
        { q: '¿Puedo dejar el calentador encendido toda la noche?', a: 'No. La CPSC y Miami-Dade Fire Rescue recomiendan apagarlo al irse a dormir.' },
        { q: '¿La ley de Florida exige una alarma de monóxido de carbono en mi casa?', a: 'La sección 553.885 la exige a menos de 10 pies de cada dormitorio en edificios y ampliaciones construidos desde el 1 de julio de 2008 que tengan un aparato a combustible fósil, una chimenea o un garaje adosado. Aun si no aplica, la CPSC y el State Fire Marshal recomiendan alarmas de CO en cada piso.' },
        { q: '¿Mi seguro de vivienda pagará si un calentador causa un incendio?', a: 'No podemos prometer que una pérdida esté cubierta. Depende de las condiciones, límites, exclusiones y deducible de su póliza. Revísela con un agente con licencia y avise a tiempo de cualquier pérdida.' },
      ],
      sources: [
        { label: 'NFPA: Home heating safety (estadísticas 2020–2024)', url: S.nfpa },
        { label: 'CPSC: Keep warm and safe this winter (23 de enero de 2026)', url: S.cpsc },
        { label: 'CPSC: Reducing fire hazards for portable electric heaters (publicación 098)', url: S.cpscPub },
        { label: 'Miami-Dade Fire Rescue: consejos para calentadores portátiles', url: S.mdfr },
        { label: 'U.S. Fire Administration (FEMA): Heating fire safety', url: S.usfa },
        { label: 'U.S. Fire Administration (FEMA): planes de escape en casa', url: S.usfaEscape },
        { label: 'Florida DFS, State Fire Marshal: prevención del monóxido de carbono', url: S.sfmCo },
        { label: 'Estatutos de Florida, s. 553.885 (2026): alarma de monóxido de carbono', url: S.s553885 },
        { label: 'Estatutos de Florida, s. 553.883 (2026): alarmas de humo en viviendas uni- y bifamiliares y townhomes', url: S.s553883 },
        { label: 'Estatutos de Florida, s. 83.51 (2026): obligaciones del arrendador', url: S.s8351 },
        { label: 'Estatutos de Florida, s. 627.70132 (2026): aviso de reclamo de seguro de propiedad', url: S.s62770132 },
      ],
    },
    ru: {
      title: 'Обогреватели и пожарная безопасность дома в холодную погоду во Флориде',
      metaTitle: 'Обогреватели и пожарная безопасность дома | M&K Agency',
      description: 'Похолодало во Флориде? Как безопасно пользоваться обогревателем, что закон требует от датчиков дыма и угарного газа и что уточнить в полисе.',
      ogAlt: 'Иллюстрация: небольшой электрический обогреватель в гостиной, пунктирный круг безопасности на полу, датчик дыма на потолке, окно с пальмами и синий щит с галочкой',
      excerpt: 'Большую часть года обогреватель лежит в шкафу. Когда приходит холодный фронт, вот как включать его без риска пожара — и какие правила о датчиках дыма и угарного газа действуют во Флориде.',
      category: 'Страхование жилья',
      body: [
        { type: 'p', text: 'В Южной Флориде обогреватель может одиннадцать месяцев пролежать в шкафу, а потом несколько ночей подряд работать без перерыва. Именно тогда и случаются беды: пыльный прибор, повреждённый шнур, обогреватель вплотную к кровати или включённый в удлинитель. Рассказываем, что советуют пожарные, что закон Флориды говорит о датчиках дыма и угарного газа (CO) и какие вопросы о страховке дома стоит задать заранее, а не после происшествия.' },

        { type: 'h2', text: 'Почему важны даже несколько холодных ночей' },
        { type: 'p', text: 'Отопительное оборудование — одна из главных причин гибели людей при пожарах в жилых домах США. По данным National Fire Protection Association (NFPA), некоммерческой организации, разрабатывающей стандарты пожарной безопасности, в 2020–2024 годах пожарные выезжали в среднем на **37 365 пожаров в год, связанных с отоплением жилья**, — около 11 % всех зарегистрированных пожаров в домах. Ежегодно они уносили около 417 жизней, 1 260 человек получали травмы, а прямой ущерб имуществу составлял 1,2 млрд долларов ([NFPA](' + S.nfpa + ')).' },
        { type: 'ul', items: [
          '**Обогреватели и отопительные печи** стали причиной примерно 30 % этих пожаров, но на них пришлось **73 % погибших** и 70 % пострадавших.',
          'Почти половина таких пожаров (46 %) случается **с декабря по февраль**.',
          'Комиссия США по безопасности потребительских товаров (CPSC) оценивает, что переносные обогреватели ежегодно становятся причиной около 1 600 пожаров, в которых в среднем гибнут 70 и получают травмы 150 человек (2020–2022) ([CPSC](' + S.cpsc + ')).',
        ] },

        { type: 'h2', text: 'Прежде чем включить в розетку' },
        { type: 'ul', items: [
          '**Ищите знак сертификации.** Пожарная служба Miami-Dade советует электрические обогреватели, проверенные аккредитованной лабораторией (например, с маркировкой UL), с **термостатом, защитой от перегрева и автоматическим отключением при опрокидывании** ([Miami-Dade Fire Rescue](' + S.mdfr + ')).',
          '**Осмотрите прибор, шнур и вилку.** Не пользуйтесь обогревателем, если подозреваете повреждение ([CPSC, публикация 098](' + S.cpscPub + ')). Сотрите пыль, накопившуюся за месяцы хранения.',
          '**Проверьте, не отозвана ли модель**, на [cpsc.gov/recalls](' + S.recalls + '). Если отозвана — прекратите пользоваться и свяжитесь с производителем ([CPSC](' + S.cpsc + ')).',
          '**Прочитайте инструкцию производителя**, особенно если обогреватель работает на топливе.',
        ] },

        { type: 'h2', text: 'Где ставить и как пользоваться' },
        { type: 'ul', items: [
          '**Правило трёх футов (около метра).** Всё, что может загореться, — шторы, постельное бельё, диван, одежду, бумаги — держите не ближе 3 футов от передней, боковых и задней стенок обогревателя ([CPSC](' + S.cpsc + '), [USFA](' + S.usfa + ')). Пожарная служба Miami-Dade также советует зону в три фута вокруг прибора, где не играют дети и не бегают домашние животные.',
          '**Только в стенную розетку.** Включайте электрообогреватель напрямую в розетку на стене — никогда через удлинитель или сетевой фильтр — и не прячьте шнур под ковёр ([CPSC](' + S.cpsc + '), [Miami-Dade Fire Rescue](' + S.mdfr + ')).',
          '**Проверяйте на ощупь.** Если вилка, шнур или розетка горячие, выключите прибор и вызовите электрика или сервисного мастера ([CPSC, публикация 098](' + S.cpscPub + ')).',
          '**Устойчиво и не на проходе.** Ставьте на ровную твёрдую поверхность, вдали от прохода, не загораживая выход и никогда во влажных или мокрых местах ([Miami-Dade Fire Rescue](' + S.mdfr + ')).',
          '**Выключайте и вынимайте вилку из розетки**, когда выходите из комнаты или ложитесь спать ([Miami-Dade Fire Rescue](' + S.mdfr + ')).',
        ] },

        { type: 'h2', text: 'Никогда не грейте дом духовкой, грилем или генератором' },
        { type: 'p', text: 'Пожарные говорят прямо: **не обогревайте дом духовкой** и никогда не заносите в дом гриль или другой прибор, работающий на топливе ([USFA](' + S.usfa + '), [Miami-Dade Fire Rescue](' + S.mdfr + ')). Такие приборы могут выделять угарный газ — он не имеет ни запаха, ни цвета. State Fire Marshal Флориды среди частых источников CO называет отопительные котлы (furnaces), плиты, водонагреватели, **керосиновые обогреватели**, генераторы, грили и автомобили ([State Fire Marshal Флориды](' + S.sfmCo + ')). Топливный обогреватель никогда не заправляйте включённым: выключите и дайте остыть. Переносной генератор — только на улице, не ближе 20 футов от дома ([CPSC](' + S.cpsc + ')). Камин, дымоход и топливные системы отопления раз в год должен проверять специалист.' },

        { type: 'h2', text: 'Датчики дыма и CO: что требует закон Флориды' },
        { type: 'ul', items: [
          '**Датчики CO в более новых зданиях.** В зданиях и пристройках, построенных **1 июля 2008 года или позже**, где есть отопительный прибор или техника на ископаемом топливе, камин или пристроенный гараж, должен стоять одобренный датчик CO **не дальше 10 футов от каждой спальни** (или там, где требует Строительный кодекс Флориды). Подходит и комбинированный датчик CO и дыма. Требование не распространяется на существующие дома при ремонте или переделке, если только работы не являются пристройкой ([s. 553.885](' + S.s553885 + ')).',
          '**Несъёмные батареи на 10 лет.** Если в доме на одну или две семьи или в таунхаусе идёт ремонт или переделка 1-го уровня, вместо прокладки проводки под сетевые датчики дыма можно поставить датчики с несъёмной батареей на 10 лет; а батарейный датчик, установленный или заменённый в такой ситуации, обязан иметь именно такую батарею (есть исключения для систем с мониторингом, беспроводных и мультисенсорных устройств) ([s. 553.883](' + S.s553883 + ')).',
          '**Если вы сдаёте дом или дуплекс.** Если в письменном договоре не оговорено иное, арендодатель должен к началу аренды установить исправные датчики дыма ([s. 83.51(2)(b)](' + S.s8351 + ')).',
        ] },
        { type: 'p', text: 'Сверх обязательного минимума CPSC рекомендует датчики дыма на каждом этаже и в каждой спальне, датчики CO — на каждом этаже и рядом со спальнями, а **проверять все датчики раз в месяц** ([CPSC](' + S.cpsc + ')). State Fire Marshal даёт те же советы для датчиков CO и предупреждает: первые симптомы отравления похожи на простуду или грипп. Если сработал датчик CO, сначала выйдите из дома, потом звоните ([State Fire Marshal Флориды](' + S.sfmCo + ')).' },

        { type: 'h2', text: 'Продумайте план эвакуации' },
        { type: 'p', text: 'Пожарная администрация США (USFA) предупреждает: после срабатывания датчика дыма на то, чтобы выбраться, может оставаться **меньше 2 минут**. Знайте два выхода из каждой комнаты, не загромождайте двери и окна, договоритесь о месте встречи на улице и звоните пожарным, уже выйдя из дома ([USFA](' + S.usfaEscape + ')).' },

        { type: 'h2', text: 'Страховка дома: какие вопросы задать сейчас' },
        { type: 'p', text: 'Мы не можем заранее сказать, что конкретный пожар или ущерб будет покрыт: это зависит от условий, лимитов, исключений и франшизы вашего полиса. Начало прохладного сезона — хороший повод просмотреть полис вместе с агентом и спросить:' },
        { type: 'ul', items: [
          'Как мой полис относится к ущербу от огня и дыма и какая франшиза применяется?',
          'Соответствуют ли лимиты на дом и на личное имущество тому, что у меня есть сейчас?',
          'Помогает ли полис с расходами на жильё, если на время ремонта придётся съехать?',
          'Какая у меня защита ответственности, если огонь перекинется на соседский участок? (См. [что такое страховка umbrella](/ru/blog/umbrella-insurance-explained-florida).)',
          'У меня кондоминиум: что покрывает полис ассоциации, а что — мой собственный? (См. [полис ассоциации и HO-6](/ru/blog/condo-association-vs-ho6-florida).)',
        ] },
        { type: 'p', text: 'Ведите опись имущества с фотографиями (как это сделать — в нашем [чек-листе на конец года](/ru/blog/end-of-hurricane-season-checklist-florida)). Если ущерб всё же случился, сообщите о нём без промедления, как того требуют условия полиса. По закону Флориды претензия по страхованию имущества не принимается, если о ней не заявили **в течение 1 года с даты ущерба** (для дополнительной претензии — 18 месяцев) ([s. 627.70132](' + S.s62770132 + ')). Наш [чек-лист по страховым претензиям](/ru/blog/hurricane-claim-checklist-florida) написан для ураганов, но шаги по документированию ущерба подходят для любой претензии по дому.' },
        { type: 'callout', title: 'Обсудите свою ситуацию с местным агентом', text: 'Оставьте заявку через [форму](/ru/quote) или позвоните [(305) 859-3953](' + TEL + '). M&K Agency: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (понедельник–пятница 9–6, суббота по записи). Говорим по-русски, по-английски и по-испански — см. также [русскоязычный страховой агент в Майами](/ru/russian-speaking-insurance-agent-miami) и [страхование дома во Florida City](/ru/homeowners-insurance-florida-city). Покрытие зависит от выбранного полиса. Это общая информация о безопасности, а не юридическая консультация.' },
      ],
      faq: [
        { q: 'Можно ли оставить обогреватель включённым на ночь?', a: 'Нет. CPSC и пожарная служба Miami-Dade советуют выключать обогреватель перед сном.' },
        { q: 'Обязателен ли по закону Флориды датчик угарного газа в моём доме?', a: 'Статья 553.885 требует его не дальше 10 футов от каждой спальни в зданиях и пристройках, построенных 1 июля 2008 года или позже, если в них есть прибор на ископаемом топливе, камин или пристроенный гараж. Даже если закон к вашему дому не относится, CPSC и State Fire Marshal советуют ставить датчики CO на каждом этаже и рядом со спальнями.' },
        { q: 'Заплатит ли страховка дома, если пожар начался из-за обогревателя?', a: 'Обещать, что ущерб будет покрыт, мы не можем. Всё зависит от условий, лимитов, исключений и франшизы полиса. Просмотрите полис с лицензированным агентом до холодов и сообщайте о любом ущербе вовремя, как требуют условия полиса.' },
      ],
      sources: [
        { label: 'NFPA: Home heating safety (статистика 2020–2024)', url: S.nfpa },
        { label: 'CPSC: Keep warm and safe this winter (23 января 2026)', url: S.cpsc },
        { label: 'CPSC: Reducing fire hazards for portable electric heaters (публикация 098)', url: S.cpscPub },
        { label: 'Miami-Dade Fire Rescue: советы по переносным обогревателям', url: S.mdfr },
        { label: 'U.S. Fire Administration (FEMA): Heating fire safety', url: S.usfa },
        { label: 'U.S. Fire Administration (FEMA): план эвакуации из дома', url: S.usfaEscape },
        { label: 'Florida DFS, State Fire Marshal: профилактика отравления угарным газом', url: S.sfmCo },
        { label: 'Florida Statutes, s. 553.885 (2026): обязательный датчик угарного газа', url: S.s553885 },
        { label: 'Florida Statutes, s. 553.883 (2026): датчики дыма в домах на одну и две семьи и таунхаусах', url: S.s553883 },
        { label: 'Florida Statutes, s. 83.51 (2026): обязанности арендодателя', url: S.s8351 },
        { label: 'Florida Statutes, s. 627.70132 (2026): уведомление о претензии по страхованию имущества', url: S.s62770132 },
      ],
    },
  },
};
