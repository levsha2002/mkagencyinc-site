import type { BlogPost } from '../types';

// Refreshed 2026-10-31 (first published 2026-10-04). Facts re-checked 2026-10-31 against official
// sources (raw copies in /workspace/usdot/):
// - s. 316.302 (2026): (1)(b) intrastate CMV owners/drivers subject to 49 CFR 382-386 and 390-397 as
//   they existed on Dec 31, 2023, except as provided; (2)(a)-(c) intrastate hours: no 395.3, max 12 h
//   driving after 10 h off, not after the 16th hour, 70 h/7 days or 80 h/8 days if the carrier runs
//   every day, 34 h off restarts; (2)(d) 150 air-mile radius: no 395.8/395.11 if 395.1(e)(1)(iii)-(iv)
//   met; (2)(e) farm/harvest exemption, 26,001+ lb or 3+ axles must show owner/carrier name and home
//   town on both sides, readable at 50 ft; (2)(f) GVW, GVWR and GCWR all under 26,001 lb, solely
//   intrastate, no placarded hazmat -> exempt from (1) but must follow 49 CFR 382, 392, 393,
//   396.3(a)(1), 396.9; (12) false/fraudulent/unauthorized ID number = 1st-degree misdemeanor.
// - s. 316.003 (2026): CMV = used on public highways in commerce, GVWR 10,000 lb or more, or more
//   than 15 passengers incl. driver, or hazmat.
// - s. 316.3025(3)(a) (2026): $50 civil penalty, identification requirements of 49 CFR 390.21;
//   (3)(d)2: $500 per violation of 49 CFR 390.19, failure of an intrastate carrier to register.
// - s. 627.7415 (2026): extra combined BI/PD minimums by GVW for CMVs (26,000+ / 35,000+ / 44,000+ lb);
//   details left to the work-truck landing page.
// - FLHSMV "Florida USDOT Numbers": register and display on CMV power units; company official applies
//   via fmcsa.dot.gov/registration; registration fees not applied to solely intrastate companies;
//   update every two years regardless of changes; updates on changes encouraged; exemptions
//   390.3(f), 316.302(2)(e), (2)(f); review exemptions with legal counsel.
// - FMCSA "Do I Need a USDOT Number?" (updated Sep 3, 2025): Florida is listed among states that require
//   intrastate CMV registrants to have a USDOT Number.
// - FMCSA "Move into Motus" (updated May 18, 2026): Motus at motus.dot.gov replaces the old systems;
//   user profile + identity verification, Login.gov; USDOT Wizard for new registrants; biennial
//   updates and record changes in Motus.
// - Federal Register 2026-08334 (Apr 29, 2026): identity verification needs a smartphone or tablet and a
//   valid government-issued ID.
// - FMCSA "Temporary Suspension of the Biennial Update Requirement" (updated Sep 10, 2026): Motus
//   launched May 19; enforcement of biennial updates and USDOT inactivation suspended for updates
//   due on or after June 1, 2026; further guidance to come.
// - 49 CFR 390.21 / 390.21T (same text on 2023-12-31 and today): legal or single trade name + number
//   preceded by "USDOT"; both sides; contrasting color; legible in daylight from 50 ft while
//   stationary; painted or removable device; rented CMVs with terms of 30 days or less: lessor option.
// - 49 CFR 390.19T(b) (same text on 2023-12-31 and today): file before operations and every 24 months;
//   last digit of the USDOT Number = month (1 Jan ... 9 Sep, 0 Oct), next-to-last digit odd/even year.
// Changes vs. the 2026-10-04 text: registration now runs through Motus (identity check), FMCSA's
// biennial-update enforcement pause, marking details, the update schedule, penalty amounts, the
// Dec 31, 2023 adoption date and the intrastate hours rules were added. Nothing old was wrong.
// Coverage note (site rule): the agency places coverage for trucks operating within Florida only.
const S = {
  s316302: 'https://www.flsenate.gov/Laws/Statutes/2026/316.302',
  s316003: 'https://www.flsenate.gov/Laws/Statutes/2026/316.003',
  s3163025: 'https://www.flsenate.gov/Laws/Statutes/2026/316.3025',
  s6277415: 'https://www.flsenate.gov/Laws/Statutes/2026/627.7415',
  flhsmv: 'https://www.flhsmv.gov/florida-highway-patrol/commercial-vehicle-enforcement/safety-enforcement/florida-usdot-numbers/',
  needDot: 'https://www.fmcsa.dot.gov/registration/do-i-need-usdot-number',
  motus: 'https://www.fmcsa.dot.gov/registration/move-motus',
  pause: 'https://www.fmcsa.dot.gov/registration/temporary-suspension-biennial-update-requirement',
  c39021: 'https://www.ecfr.gov/current/title-49/section-390.21',
  c39019T: 'https://www.ecfr.gov/current/title-49/section-390.19T',
  fr: 'https://www.federalregister.gov/documents/2026/04/29/2026-08334/availability-of-motus-fmcsas-new-registration-system',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'usdot-number-florida-work-trucks',
  datePublished: '2026-10-04',
  dateModified: '2026-10-31',
  translations: {
    en: {
      title: 'Does Your Florida Work Truck Need a USDOT Number? 2026 Rules for Trucks That Stay in Florida',
      metaTitle: 'USDOT Number for Florida Work Trucks (2026) | M&K Agency',
      description: 'When a truck that works only in Florida needs a USDOT number: the 26,001-pound line, trailers, marking the doors, Motus registration and the two-year update.',
      ogAlt: 'Illustration of a box truck and a pickup with an equipment trailer parked by a Florida warehouse with palm trees',
      excerpt: 'Florida applies federal truck safety rules to trucks that never leave the state. When a work truck needs a USDOT number, why the trailer matters, how to mark the truck and what changed with FMCSA’s new Motus system in 2026.',
      category: 'Commercial auto insurance',
      body: [
        { type: 'p', text: 'A box truck making local deliveries, a dump truck, a pickup towing an equipment trailer to job sites in Homestead and Kendall. If your trucks only work inside Florida, it is easy to assume federal trucking rules are for long-haul carriers. Florida law says otherwise. This guide covers trucks that operate **solely within Florida**. Trucks that cross state lines fall under separate federal rules that we do not cover here.' },
        { type: 'h2', text: 'Florida applies federal safety rules inside the state' },
        { type: 'p', text: 'Under [s. 316.302(1)(b)](' + S.s316302 + '), owners and drivers of commercial motor vehicles in **intrastate** commerce are subject to the federal motor carrier safety regulations in parts 382–386 and 390–397 of Title 49, as those rules existed on December 31, 2023, except where the statute says otherwise. Those parts include registering for a USDOT number. The Florida Highway Patrol puts it plainly: your company must register for a USDOT number and display it on its commercial motor vehicles ([FLHSMV](' + S.flhsmv + ')). FMCSA’s own list of states that require a USDOT number for intrastate vehicles includes Florida ([FMCSA](' + S.needDot + ')).' },
        { type: 'p', text: 'For Florida traffic law, a **commercial motor vehicle** is used on public roads in commerce and has a gross vehicle weight rating of 10,000 pounds or more, is designed to carry more than 15 passengers including the driver, or carries hazardous materials ([s. 316.003](' + S.s316003 + ')).' },
        { type: 'h2', text: 'The 26,001-pound line' },
        { type: 'p', text: 'The exception that matters most to local businesses is [s. 316.302(2)(f)](' + S.s316302 + '). A vehicle is exempt from the general rule when **all three** of these are under 26,001 pounds: the gross vehicle weight, the gross vehicle weight rating and the **gross combined weight rating**, and it runs solely in Florida without hazardous materials that require placards. FLHSMV lists this among the exemptions from USDOT registration.' },
        { type: 'ul', items: [
          '**The trailer counts.** The combined rating covers the truck plus what it tows. A pickup well under the line on its own can cross it with a heavy equipment trailer.',
          '**Lighter trucks still have rules.** Below 26,001 pounds the statute still requires the federal rules on driving (part 392), parts and accessories (part 393), and certain inspection and maintenance items (ss. 396.3(a)(1) and 396.9), plus part 382 where it applies.',
          '**Other exemptions exist.** Paragraph (2)(e) covers some farm-product hauling, and FLHSMV also points to 49 CFR 390.3(f). FLHSMV strongly encourages reviewing any exemption with legal counsel before relying on it.',
        ] },
        { type: 'h2', text: 'A quick check before a truck goes to work' },
        { type: 'ol', items: [
          'Read the gross vehicle weight rating on the driver’s door label, and the combined rating if it is listed.',
          'Add the rating of any trailer the truck pulls, even occasionally.',
          'Ask whether you ever carry hazardous materials in amounts that need placards.',
          'Confirm every trip stays in Florida. If not, the federal interstate rules apply, and they are outside this guide.',
        ] },
        { type: 'h2', text: 'Getting a number in 2026: Motus' },
        { type: 'p', text: 'FMCSA moved registration to a new system, **Motus**, which launched on May 19, 2026 ([FMCSA](' + S.pause + ')). A company official signs in at motus.dot.gov through Login.gov, completes an identity check and then starts a new registration; FMCSA’s USDOT Wizard helps if you are not sure what you need ([FMCSA](' + S.motus + ')). For the identity check you need a valid government-issued ID and a smartphone or tablet ([Federal Register](' + S.fr + ')). FLHSMV notes that registration fees are not applied to companies operating solely within Florida. FMCSA’s registration help line is 1-800-832-5660.' },
        { type: 'h2', text: 'Marking the truck' },
        { type: 'p', text: 'Under [49 CFR 390.21](' + S.c39021 + '), each power unit must show the company’s legal name or a single trade name and the number preceded by the letters “USDOT”. The marking must:' },
        { type: 'ul', items: [
          'appear on **both sides** of the vehicle;',
          'contrast sharply with the background;',
          'be readable in daylight from 50 feet while the truck is parked, and stay that way;',
          'be painted on or a removable sign that meets the same standard.',
        ] },
        { type: 'p', text: 'Florida sets a $50 civil penalty for violating the marking rule and a $500 civil penalty for each failure of an intrastate carrier to register ([s. 316.3025](' + S.s3163025 + ')). Displaying a false number, or one used without its owner’s consent, is a first-degree misdemeanor ([s. 316.302(12)](' + S.s316302 + ')).' },
        { type: 'h2', text: 'Keeping the record current' },
        { type: 'p', text: 'FLHSMV says every company must update its registration **every two years**, even if nothing changed, and encourages updates whenever the operation changes. Under the federal schedule ([49 CFR 390.19T](' + S.c39019T + ')), the last digit of the USDOT number sets the month and the next-to-last digit sets whether you file in odd or even years. During the Motus transition, FMCSA has temporarily paused enforcement of biennial updates, and the inactivation of numbers, for updates due on or after June 1, 2026. The requirement itself remains, so check [FMCSA’s notice](' + S.pause + ') before you count on the extra time.' },
        { type: 'h2', text: 'Over the line: hours and logs' },
        { type: 'p', text: 'For intrastate drivers who are not exempt, Florida replaces the federal hours limits with its own: no more than 12 hours of driving after 10 hours off duty, no driving after the 16th hour on duty, and weekly caps of 70 hours in 7 days or 80 hours in 8 days if the company runs every day ([s. 316.302(2)(b)–(c)](' + S.s316302 + ')). Drivers who stay within a 150 air-mile radius of their base may skip the federal log rules if they meet the conditions in paragraph (2)(d).' },
        { type: 'h2', text: 'Where insurance fits' },
        { type: 'p', text: 'When we quote a work truck, we ask for the weight ratings, what it tows and carries, and where it goes. The coverage we place is for trucks operating **within Florida**. Heavier commercial vehicles also have higher liability minimums under [s. 627.7415](' + S.s6277415 + '); our [work truck insurance page](/en/work-truck-insurance-florida) explains them along with the [commercial auto](/en/insurance/commercial-auto) options. If employees or friends drive your vehicles, read about [lending your car and owner liability](/en/blog/lending-your-car-florida-owner-liability). If a client asks for proof of coverage, see our guide to [certificates of insurance](/en/blog/certificate-of-insurance-contractors-florida).' },
        { type: 'callout', title: 'Insuring a work truck in Florida?', text: '[Request a quote](/en/quote) or call [(305) 859-3953](' + TEL + ') with each truck’s weight rating and any trailers. A licensed agent will go over it with you in English, Spanish or Russian. Coverage depends on the policy you choose. This is general information, not legal advice; check the statute, FLHSMV or FMCSA for your vehicles.' },
      ],
      faq: [
        { q: 'Does a truck that only operates in Florida need a USDOT number?', a: 'Often, yes. Florida applies the federal registration rules to intrastate commercial motor vehicles. A common exemption covers vehicles whose weight, weight rating and combined weight rating are all under 26,001 pounds, operating only in Florida without placarded hazardous materials.' },
        { q: 'Does my trailer count toward the 26,001 pounds?', a: 'Yes. The gross combined weight rating includes the trailer, and the Florida exemption requires it to be under 26,001 pounds as well.' },
        { q: 'Where do I apply for a USDOT number now?', a: 'In Motus, FMCSA’s registration system since May 2026, at motus.dot.gov. A company official signs in with Login.gov and completes an identity check first.' },
        { q: 'Do I have to renew the number?', a: 'FLHSMV says the registration must be updated every two years, even if nothing changed. FMCSA has temporarily paused enforcement for updates due on or after June 1, 2026, so check its notice for the latest.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 316.302 (2026): commercial motor vehicles; safety regulations', url: S.s316302 },
        { label: 'Florida Statutes s. 316.003 (2026): definitions (commercial motor vehicle)', url: S.s316003 },
        { label: 'Florida Statutes s. 316.3025 (2026): penalties', url: S.s3163025 },
        { label: 'Florida Statutes s. 627.7415 (2026): commercial motor vehicles; additional liability insurance', url: S.s6277415 },
        { label: 'FLHSMV, Commercial Vehicle Enforcement: Florida USDOT Numbers', url: S.flhsmv },
        { label: 'FMCSA: Do I Need a USDOT Number?', url: S.needDot },
        { label: 'FMCSA: Move into Motus', url: S.motus },
        { label: 'FMCSA: Temporary Suspension of the Biennial Update Requirement', url: S.pause },
        { label: '49 CFR 390.21: marking of self-propelled CMVs (eCFR)', url: S.c39021 },
        { label: '49 CFR 390.19T: identification reports and filing schedule (eCFR)', url: S.c39019T },
        { label: 'Federal Register, Apr. 29, 2026: Availability of Motus, FMCSA’s new registration system', url: S.fr },
      ],
    },
    es: {
      title: '¿Su camión de trabajo en Florida necesita número USDOT? Reglas 2026 para camiones que no salen de Florida',
      metaTitle: 'Número USDOT para camiones de trabajo (2026) | M&K Agency',
      description: 'Cuándo un camión que solo trabaja en Florida necesita número USDOT: el límite de 26,001 libras, el tráiler, el rotulado y el registro en Motus.',
      ogAlt: 'Ilustración de un box truck y una pickup con tráiler de equipo junto a un almacén en Florida con palmas',
      excerpt: 'Florida aplica las reglas federales de seguridad a camiones que nunca salen del estado. Cuándo un camión de trabajo necesita número USDOT, por qué importa el tráiler, cómo rotularlo y qué cambió en 2026 con Motus, el nuevo sistema de la FMCSA.',
      category: 'Seguro de auto comercial',
      body: [
        { type: 'p', text: 'Un box truck que hace entregas locales, un camión de volteo, una pickup que lleva un tráiler con equipo a obras en Homestead y Kendall. Si sus camiones solo trabajan dentro de Florida, es fácil pensar que las reglas federales son cosa de camioneros de larga distancia. La ley de Florida dice otra cosa. Esta guía trata de camiones que operan **solo dentro de Florida**. Los que cruzan a otros estados siguen otras reglas federales que no cubrimos aquí.' },
        { type: 'h2', text: 'Florida aplica las reglas federales dentro del estado' },
        { type: 'p', text: 'Según la [sección 316.302(1)(b)](' + S.s316302 + '), los dueños y conductores de vehículos comerciales en comercio **intraestatal** están sujetos a las normas federales de seguridad de las partes 382 a 386 y 390 a 397 del Título 49, tal como estaban el 31 de diciembre de 2023, salvo lo que la propia ley exceptúa. Entre esas normas está el registro del número USDOT. La Patrulla de Carreteras de Florida lo dice sin rodeos: su empresa debe registrarse para obtener un número USDOT y mostrarlo en sus vehículos comerciales ([FLHSMV](' + S.flhsmv + ')). La propia FMCSA incluye a Florida en su lista de estados que exigen número USDOT a los vehículos intraestatales ([FMCSA](' + S.needDot + ')).' },
        { type: 'p', text: 'Para la ley de tránsito de Florida, un **vehículo motorizado comercial** es el que se usa en vías públicas con fines comerciales y tiene un peso bruto vehicular nominal (GVWR) de 10,000 libras o más, está diseñado para más de 15 pasajeros contando al conductor, o transporta materiales peligrosos ([sección 316.003](' + S.s316003 + ')).' },
        { type: 'h2', text: 'La línea de las 26,001 libras' },
        { type: 'p', text: 'La excepción que más les importa a los negocios locales está en la [sección 316.302(2)(f)](' + S.s316302 + '). Un vehículo queda fuera de la regla general cuando **los tres** valores están por debajo de 26,001 libras: el peso bruto, el peso bruto nominal y el **peso bruto combinado nominal** (GCWR), y además opera solo en Florida, sin materiales peligrosos que requieran letreros. FLHSMV la incluye entre las exenciones del registro USDOT.' },
        { type: 'ul', items: [
          '**El tráiler cuenta.** El peso combinado nominal suma el camión y lo que remolca. Una pickup muy por debajo de la línea puede pasarla en cuanto engancha un tráiler de equipo pesado.',
          '**Los camiones livianos también tienen reglas.** Por debajo de 26,001 libras la ley sigue exigiendo las normas federales sobre manejo (parte 392), piezas y accesorios (parte 393) y ciertos puntos de inspección y mantenimiento (secciones 396.3(a)(1) y 396.9), además de la parte 382 cuando aplique.',
          '**Hay otras exenciones.** El inciso (2)(e) cubre cierto transporte de productos agrícolas, y FLHSMV menciona también la norma federal 390.3(f). FLHSMV recomienda revisar cualquier exención con un abogado antes de acogerse a ella.',
        ] },
        { type: 'h2', text: 'Revisión rápida antes de poner un camión a trabajar' },
        { type: 'ol', items: [
          'Lea el peso bruto nominal en la etiqueta de la puerta del conductor, y el combinado si aparece.',
          'Sume el peso nominal de cualquier tráiler que el camión jale, aunque sea de vez en cuando.',
          'Pregúntese si alguna vez lleva materiales peligrosos en cantidades que exigen letreros.',
          'Confirme que todos los viajes se quedan en Florida. Si no, aplican las reglas federales interestatales, que quedan fuera de esta guía.',
        ] },
        { type: 'h2', text: 'Cómo sacar el número en 2026: Motus' },
        { type: 'p', text: 'La FMCSA pasó el registro a un sistema nuevo, **Motus**, que arrancó el 19 de mayo de 2026 ([FMCSA](' + S.pause + ')). Un representante de la empresa entra en motus.dot.gov con una cuenta de Login.gov, pasa una verificación de identidad y luego inicia el registro; si no sabe bien qué necesita, el asistente USDOT Wizard de la FMCSA le orienta ([FMCSA](' + S.motus + ')). Para la verificación hace falta una identificación oficial vigente y un celular o tableta ([Federal Register](' + S.fr + ')). Según FLHSMV, a las empresas que operan solo dentro de Florida no se les cobran cargos de registro. La línea de ayuda de registro de la FMCSA es 1-800-832-5660.' },
        { type: 'h2', text: 'Cómo rotular el camión' },
        { type: 'p', text: 'Según la [norma 49 CFR 390.21](' + S.c39021 + '), cada unidad motriz debe mostrar el nombre legal de la empresa o un solo nombre comercial, y el número precedido de las letras “USDOT”. El rotulado debe:' },
        { type: 'ul', items: [
          'ir en **ambos lados** del vehículo;',
          'contrastar claramente con el fondo;',
          'leerse de día a 50 pies con el camión estacionado, y mantenerse así;',
          'estar pintado o en un letrero removible que cumpla lo mismo.',
        ] },
        { type: 'p', text: 'Florida fija una multa civil de $50 por incumplir el rotulado y otra de $500 por cada vez que un transportista intraestatal no se registra ([sección 316.3025](' + S.s3163025 + ')). Mostrar un número falso, o uno usado sin permiso de su titular, es un delito menor de primer grado ([sección 316.302(12)](' + S.s316302 + ')).' },
        { type: 'h2', text: 'Mantener el registro al día' },
        { type: 'p', text: 'FLHSMV indica que toda empresa debe actualizar su registro **cada dos años**, aunque nada haya cambiado, y recomienda hacerlo también cuando cambie la operación. En el calendario federal ([49 CFR 390.19T](' + S.c39019T + ')), el último dígito del número USDOT marca el mes y el penúltimo indica si le toca en años pares o impares. Mientras dura la transición a Motus, la FMCSA suspendió temporalmente la aplicación de las actualizaciones bienales, y la desactivación de números, para las que vencían a partir del 1 de junio de 2026. La obligación sigue vigente, así que revise [el aviso de la FMCSA](' + S.pause + ') antes de contar con ese tiempo extra.' },
        { type: 'h2', text: 'Por encima de la línea: horas y registros' },
        { type: 'p', text: 'Para los choferes intraestatales que no están exentos, Florida sustituye los límites federales de horas por los suyos: no más de 12 horas de manejo después de 10 horas libres, nada de manejar pasada la hora 16 de servicio y topes de 70 horas en 7 días, u 80 en 8 días si la empresa trabaja todos los días ([sección 316.302(2)(b)–(c)](' + S.s316302 + ')). Quien trabaja dentro de un radio de 150 millas aéreas de su base puede quedar libre de los registros federales de horas si cumple las condiciones del inciso (2)(d).' },
        { type: 'h2', text: 'Dónde entra el seguro' },
        { type: 'p', text: 'Cuando cotizamos un camión de trabajo, preguntamos los pesos nominales, qué remolca y carga, y por dónde anda. Las coberturas que colocamos son para camiones que operan **dentro de Florida**. Los vehículos comerciales más pesados tienen además mínimos de responsabilidad civil más altos según la [sección 627.7415](' + S.s6277415 + '); nuestra [página de seguro para camiones de trabajo](/es/work-truck-insurance-florida) los explica junto con las opciones de [auto comercial](/es/insurance/commercial-auto). Si empleados o amigos manejan sus vehículos, lea sobre [prestar su carro y la responsabilidad del dueño](/es/blog/lending-your-car-florida-owner-liability). Si un cliente le pide prueba de cobertura, vea nuestra guía de [certificados de seguro](/es/blog/certificate-of-insurance-contractors-florida).' },
        { type: 'callout', title: '¿Va a asegurar un camión de trabajo en Florida?', text: '[Pida una cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + ') con el peso nominal de cada camión y de sus tráileres. Un agente con licencia lo revisa con usted en español, inglés o ruso. La cobertura depende de la póliza que elija. Esto es información general, no asesoría legal; consulte la ley, a FLHSMV o a la FMCSA para sus vehículos.' },
      ],
      faq: [
        { q: '¿Un camión que solo opera en Florida necesita número USDOT?', a: 'Muchas veces, sí. Florida aplica las reglas federales de registro a los vehículos comerciales intraestatales. Una exención común cubre los vehículos cuyo peso, peso nominal y peso combinado nominal están por debajo de 26,001 libras, que operan solo en Florida y sin materiales peligrosos con letreros.' },
        { q: '¿Mi tráiler cuenta para las 26,001 libras?', a: 'Sí. El peso bruto combinado nominal incluye el tráiler, y la exención de Florida exige que también esté por debajo de 26,001 libras.' },
        { q: '¿Dónde se solicita ahora el número USDOT?', a: 'En Motus, el sistema de registro de la FMCSA desde mayo de 2026, en motus.dot.gov. Un representante de la empresa entra con Login.gov y primero verifica su identidad.' },
        { q: '¿Hay que renovar el número?', a: 'FLHSMV indica que el registro debe actualizarse cada dos años, aunque nada haya cambiado. La FMCSA suspendió temporalmente la aplicación para las actualizaciones que vencen a partir del 1 de junio de 2026; revise su aviso para lo más reciente.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 316.302 (2026): vehículos comerciales; normas de seguridad (en inglés)', url: S.s316302 },
        { label: 'Estatutos de Florida, sección 316.003 (2026): definiciones (vehículo motorizado comercial) (en inglés)', url: S.s316003 },
        { label: 'Estatutos de Florida, sección 316.3025 (2026): sanciones (en inglés)', url: S.s3163025 },
        { label: 'Estatutos de Florida, sección 627.7415 (2026): vehículos comerciales; seguro de responsabilidad adicional (en inglés)', url: S.s6277415 },
        { label: 'FLHSMV, control de vehículos comerciales: números USDOT en Florida (en inglés)', url: S.flhsmv },
        { label: 'FMCSA: ¿Necesito un número USDOT? (en inglés)', url: S.needDot },
        { label: 'FMCSA: el paso a Motus (en inglés)', url: S.motus },
        { label: 'FMCSA: suspensión temporal de la actualización bienal (en inglés)', url: S.pause },
        { label: '49 CFR 390.21: rotulado de vehículos comerciales (eCFR, en inglés)', url: S.c39021 },
        { label: '49 CFR 390.19T: informes de identificación y calendario (eCFR, en inglés)', url: S.c39019T },
        { label: 'Federal Register, 29 de abril de 2026: disponibilidad de Motus (en inglés)', url: S.fr },
      ],
    },
    ru: {
      title: 'Нужен ли рабочему грузовику во Флориде номер USDOT? Правила 2026 года для машин, которые не выезжают из штата',
      metaTitle: 'Номер USDOT для рабочих грузовиков во Флориде (2026) | M&K Agency',
      description: 'Когда грузовику, который работает только во Флориде, нужен номер USDOT: граница 26,001 фунт, прицеп, надписи на бортах, регистрация в Motus и обновление данных.',
      ogAlt: 'Иллюстрация: бокс-трак и пикап с прицепом для оборудования у склада во Флориде, пальмы',
      excerpt: 'Флорида применяет федеральные правила безопасности к грузовикам, которые никогда не покидают штат. Когда рабочей машине нужен номер USDOT, почему важен прицеп, как нанести номер и что изменилось в 2026 году с новой системой FMCSA — Motus.',
      category: 'Коммерческое автострахование',
      body: [
        { type: 'p', text: 'Бокс-трак на местных доставках, самосвал, пикап, который возит прицеп с оборудованием на объекты в Homestead и Kendall. Если ваши машины работают только во Флориде, легко решить, что федеральные правила — забота дальнобойщиков. Закон Флориды считает иначе. Эта статья — о машинах, которые работают **только в пределах Флориды**. Для тех, что пересекают границу штата, действуют отдельные федеральные правила, и здесь мы их не разбираем.' },
        { type: 'h2', text: 'Флорида применяет федеральные правила внутри штата' },
        { type: 'p', text: 'По [ст. 316.302(1)(b)](' + S.s316302 + ') владельцы и водители коммерческих машин, работающих **внутри штата** (intrastate), подчиняются федеральным правилам безопасности — частям 382–386 и 390–397 раздела 49 CFR в редакции на 31 декабря 2023 года, за исключениями, которые прописаны в самом законе. В эти части входит и регистрация номера USDOT. Дорожный патруль Флориды говорит прямо: компания обязана получить номер USDOT и нанести его на свои коммерческие машины ([FLHSMV](' + S.flhsmv + ')). Да и сама FMCSA включает Флориду в список штатов, где номер USDOT нужен машинам, работающим внутри штата ([FMCSA](' + S.needDot + ')).' },
        { type: 'p', text: 'По дорожному законодательству Флориды **коммерческое транспортное средство** (CMV) — это машина, которая используется на дорогах общего пользования в коммерческих целях и при этом имеет полную разрешённую массу (GVWR) от 10,000 фунтов, или рассчитана более чем на 15 пассажиров вместе с водителем, или перевозит опасные грузы ([ст. 316.003](' + S.s316003 + ')).' },
        { type: 'h2', text: 'Граница 26,001 фунт' },
        { type: 'p', text: 'Самое важное для местного бизнеса исключение — в [ст. 316.302(2)(f)](' + S.s316302 + '). Машина выходит из-под общего правила, если **все три** показателя меньше 26,001 фунта: фактическая масса, разрешённая масса и **разрешённая масса автопоезда** (GCWR), — и при этом она работает только во Флориде и не везёт опасных грузов, требующих табличек. FLHSMV относит этот случай к исключениям из регистрации USDOT.' },
        { type: 'ul', items: [
          '**Прицеп считается.** GCWR — это машина вместе с тем, что она тянет. Пикап, который сам по себе далеко от границы, с тяжёлым прицепом вполне может её перейти.',
          '**У лёгких машин тоже есть правила.** Даже ниже 26,001 фунта закон требует соблюдать федеральные правила вождения (часть 392), требования к узлам и оборудованию (часть 393) и отдельные пункты об осмотре и обслуживании (396.3(a)(1) и 396.9), а также часть 382 там, где она применима.',
          '**Есть и другие исключения.** Пункт (2)(e) касается части сельхозперевозок, а FLHSMV упоминает ещё федеральную норму 390.3(f). Прежде чем полагаться на любое исключение, FLHSMV настоятельно советует обсудить его с юристом.',
        ] },
        { type: 'h2', text: 'Быстрая проверка, прежде чем выпускать машину в работу' },
        { type: 'ol', items: [
          'Найдите разрешённую массу на наклейке в проёме водительской двери, а если указана — и массу автопоезда.',
          'Прибавьте разрешённую массу любого прицепа, который машина тянет, пусть даже изредка.',
          'Проверьте, не возите ли вы опасные грузы в количествах, при которых нужны таблички.',
          'Убедитесь, что все рейсы остаются во Флориде. Если нет — действуют федеральные правила для межштатных перевозок, а они за рамками этой статьи.',
        ] },
        { type: 'h2', text: 'Как получить номер в 2026 году: Motus' },
        { type: 'p', text: 'FMCSA перевела регистрацию в новую систему **Motus**, которая заработала 19 мая 2026 года ([FMCSA](' + S.pause + ')). Представитель компании входит на motus.dot.gov через аккаунт Login.gov, проходит проверку личности и начинает новую регистрацию; если непонятно, что именно нужно, поможет мастер FMCSA — USDOT Wizard ([FMCSA](' + S.motus + ')). Для проверки личности понадобятся действующий документ государственного образца и смартфон или планшет ([Federal Register](' + S.fr + ')). По данным FLHSMV, с компаний, которые работают только во Флориде, регистрационные сборы не взимаются. Телефон службы регистрации FMCSA: 1-800-832-5660.' },
        { type: 'h2', text: 'Надписи на машине' },
        { type: 'p', text: 'По [49 CFR 390.21](' + S.c39021 + ') на каждой машине-тягаче должны быть юридическое название компании или одно торговое название и номер с буквами «USDOT» перед ним. Надпись должна:' },
        { type: 'ul', items: [
          'быть на **обоих бортах**;',
          'резко контрастировать с фоном;',
          'читаться днём с 50 футов, пока машина стоит, и оставаться такой;',
          'быть нарисованной или на съёмной табличке, отвечающей тем же требованиям.',
        ] },
        { type: 'p', text: 'Во Флориде за нарушение правил маркировки предусмотрен гражданский штраф $50, а за каждый случай, когда внутриштатный перевозчик не зарегистрировался, — $500 ([ст. 316.3025](' + S.s3163025 + ')). Ложный номер или чужой номер без согласия владельца — мисдиминор первой степени ([ст. 316.302(12)](' + S.s316302 + ')).' },
        { type: 'h2', text: 'Как держать данные в актуальном виде' },
        { type: 'p', text: 'FLHSMV пишет, что каждая компания должна обновлять регистрацию **раз в два года**, даже если ничего не изменилось, и советует обновлять её при любых изменениях в работе. По федеральному графику ([49 CFR 390.19T](' + S.c39019T + ')) последняя цифра номера USDOT определяет месяц, а предпоследняя — чётный или нечётный год. На время перехода на Motus FMCSA временно приостановила контроль двухгодичных обновлений и деактивацию номеров для тех, у кого срок наступил 1 июня 2026 года или позже. Само требование никто не отменял, поэтому, прежде чем рассчитывать на отсрочку, проверьте [уведомление FMCSA](' + S.pause + ').' },
        { type: 'h2', text: 'Если машина выше границы: часы и журналы' },
        { type: 'p', text: 'Для водителей, работающих внутри штата и не подпадающих под исключения, Флорида заменяет федеральные лимиты своими: не более 12 часов за рулём после 10 часов отдыха, никакого вождения после 16-го часа смены и не больше 70 часов за 7 дней или 80 часов за 8 дней, если компания работает без выходных ([ст. 316.302(2)(b)–(c)](' + S.s316302 + ')). Водители, которые не отъезжают от базы дальше 150 миль по прямой, могут не вести федеральные журналы учёта времени при соблюдении условий пункта (2)(d).' },
        { type: 'h2', text: 'При чём здесь страховка' },
        { type: 'p', text: 'Когда мы считаем страховку для рабочей машины, мы спрашиваем разрешённую массу, что она буксирует и возит и где ездит. Мы страхуем машины, которые работают **в пределах Флориды**. Для более тяжёлых коммерческих машин закон устанавливает и более высокие минимальные лимиты ответственности ([ст. 627.7415](' + S.s6277415 + ')); подробности — на нашей [странице о страховании рабочих машин](/ru/work-truck-insurance-florida) и в разделе о [коммерческом автостраховании](/ru/insurance/commercial-auto). Если машины водят сотрудники или знакомые, прочитайте, [чем рискует владелец, одалживая машину](/ru/blog/lending-your-car-florida-owner-liability). А если заказчик просит подтверждение страховки, пригодится наша статья о [сертификатах страхования](/ru/blog/certificate-of-insurance-contractors-florida).' },
        { type: 'callout', title: 'Страхуете рабочую машину во Флориде?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните по номеру [(305) 859-3953](' + TEL + ') и назовите разрешённую массу каждой машины и прицепов. Лицензированный агент разберёт всё с вами на русском, английском или испанском. Покрытие зависит от выбранного полиса. Это общая информация, а не юридическая консультация; по своим машинам сверяйтесь с законом, FLHSMV или FMCSA.' },
      ],
      faq: [
        { q: 'Нужен ли номер USDOT грузовику, который ездит только по Флориде?', a: 'Часто да. Флорида применяет федеральные правила регистрации к коммерческим машинам, работающим внутри штата. Распространённое исключение — машины, у которых масса, разрешённая масса и масса автопоезда меньше 26,001 фунта, работающие только во Флориде и без опасных грузов с табличками.' },
        { q: 'Учитывается ли прицеп в 26,001 фунт?', a: 'Да. Разрешённая масса автопоезда (GCWR) включает прицеп, и для исключения во Флориде она тоже должна быть меньше 26,001 фунта.' },
        { q: 'Где теперь получают номер USDOT?', a: 'В Motus — системе регистрации FMCSA, которая работает с мая 2026 года, на сайте motus.dot.gov. Представитель компании входит через Login.gov и сначала проходит проверку личности.' },
        { q: 'Нужно ли продлевать номер?', a: 'По данным FLHSMV, регистрацию нужно обновлять раз в два года, даже если ничего не изменилось. FMCSA временно приостановила контроль для обновлений со сроком с 1 июня 2026 года — актуальные сведения смотрите в её уведомлении.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 316.302 (2026): коммерческие транспортные средства, правила безопасности (на английском)', url: S.s316302 },
        { label: 'Законы Флориды, ст. 316.003 (2026): определения (коммерческое транспортное средство) (на английском)', url: S.s316003 },
        { label: 'Законы Флориды, ст. 316.3025 (2026): санкции (на английском)', url: S.s3163025 },
        { label: 'Законы Флориды, ст. 627.7415 (2026): дополнительное страхование ответственности коммерческих машин (на английском)', url: S.s6277415 },
        { label: 'FLHSMV, контроль коммерческого транспорта: номера USDOT во Флориде (на английском)', url: S.flhsmv },
        { label: 'FMCSA: нужен ли мне номер USDOT? (на английском)', url: S.needDot },
        { label: 'FMCSA: переход на Motus (на английском)', url: S.motus },
        { label: 'FMCSA: временная приостановка двухгодичного обновления (на английском)', url: S.pause },
        { label: '49 CFR 390.21: маркировка коммерческих машин (eCFR, на английском)', url: S.c39021 },
        { label: '49 CFR 390.19T: регистрационные отчёты и график обновления (eCFR, на английском)', url: S.c39019T },
        { label: 'Federal Register, 29 апреля 2026: запуск Motus (на английском)', url: S.fr },
      ],
    },
  },
};
