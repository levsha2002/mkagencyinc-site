import type { BlogPost } from '../types';

// New article 2026-11-13 (content plan 2026-11, row 2026-11-13). Facts checked 2026-11-13 (ET) against
// official sources (raw copies in /workspace/eproof/; notes in
// /workspace/articles/electronic-proof-of-insurance-florida_sources.md):
// - s. 316.646 (2026): (1) proof of PDL/BI/PIP security in immediate possession while operating;
//   (1)(a) uniform paper or electronic format prescribed by FLHSMV, policy, binder, certificate, other proof;
//   (1)(b)1 showing a device is not consent to access other information; (1)(b)2 presenter assumes liability
//   for damage to the device; (2) display on demand; (3)(a) owner: nonmoving infraction, proof at or before
//   court date, otherwise suspension of license + registration on conviction, reinstatement under 324.0221;
//   (3)(b) non-owner: nonmoving infraction; (4) knowingly presenting proof of insurance not in force =
//   first-degree misdemeanor.
// - s. 775.082(4)(a) up to 1 year; s. 775.083(1)(d) fine up to $1,000.
// - s. 324.0221(1)(a) insurers report PIP/PDL cancellations to FLHSMV within 10 days; (3) reinstatement fees
//   $150 / $250 / $500.
// - Rule 15A-3.006, F.A.C. (eff. 2/3/2014): card contents, same information for electronic proof, new proof
//   when information changes, at least annually, not valid more than one year from the effective date.
// - FLHSMV procedure RS-36 (rev. 04/25): phone, tablet or an electronic picture of the card accepted at
//   registration; staff should not take the phone. FLHSMV insurance + "Received a Letter" pages.
const S = {
  s316646: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.646.html',
  s775082: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0775/Sections/0775.082.html',
  s775083: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0775/Sections/0775.083.html',
  s3240221: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0324/Sections/0324.0221.html',
  rule: 'https://www.flrules.org/gateway/ruleNo.asp?id=15A-3.006',
  rs36: 'https://www.flhsmv.gov/pdf/proc/rs/rs-36.pdf',
  ins: 'https://www.flhsmv.gov/insurance/',
  letter: 'https://www.flhsmv.gov/insurance/received-a-letter/',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'electronic-proof-of-insurance-florida',
  datePublished: '2026-11-13',
  translations: {
    en: {
      title: 'Electronic Proof of Auto Insurance in Florida: What You Must Carry',
      metaTitle: 'Insurance Card on Your Phone in Florida | M&K Agency',
      description: 'Florida accepts proof of auto insurance on your phone. What the card must show, what an officer may see, and what happens if you can’t show proof.',
      ogAlt: 'Illustration of a smartphone showing a blank insurance card next to a car, a blue shield with a check mark and palm trees',
      excerpt: 'Florida law lets you show proof of insurance on a phone. What the card has to show, what showing your phone does and doesn’t allow, and why an old card is a risk.',
      category: 'Car insurance',
      body: [
        { type: 'p', text: 'Heading out for the holidays? Before you go, check one small thing: can you show proof of your auto insurance right now? In Florida, the answer can be on your phone. The law accepts electronic proof, and it also sets a few rules about what that proof must show and what happens when you hand your phone to an officer. Here is what you need to know.' },

        { type: 'h2', text: 'What Florida law requires you to carry' },
        { type: 'p', text: 'If you are required to keep personal injury protection (PIP), property damage liability or bodily injury liability on a vehicle, you must have proof of that coverage **in your immediate possession at all times** while you drive it ([s. 316.646(1)](' + S.s316646 + ')). When a law enforcement officer, or anyone else authorized to issue traffic citations, asks for it, you have to show it ([s. 316.646(2)](' + S.s316646 + ')).' },
        { type: 'p', text: 'The law lists what counts as proof ([s. 316.646(1)(a)](' + S.s316646 + ')):' },
        { type: 'ul', items: [
          'an insurance card in the uniform **paper or electronic** format set by the Florida Department of Highway Safety and Motor Vehicles (FLHSMV);',
          'a valid insurance policy;',
          'an insurance policy binder;',
          'a certificate of insurance;',
          'other proof that FLHSMV allows.',
        ] },
        { type: 'p', text: 'Not sure which coverages you need in the first place? Our guide to [Florida minimum car insurance requirements](/en/blog/florida-minimum-car-insurance-requirements) explains PIP, property damage liability and when bodily injury liability comes in.' },

        { type: 'h2', text: 'What the card has to show' },
        { type: 'p', text: 'FLHSMV’s rule on insurance identification cards says the insurer provides proof in paper or electronic format, and that **electronic proof needs the same information as the paper card** ([Rule 15A-3.006, F.A.C.](' + S.rule + ')). A Florida card shows:' },
        { type: 'ul', items: [
          'the heading “Florida Automobile Insurance Identification Card”;',
          'the insurer’s name and its Florida company number;',
          'the named insured;',
          'the type of coverage: PIP/property damage liability and, if you bought it, bodily injury liability;',
          'the policy number and the effective date (month, day and year);',
          'the year, make and VIN of the vehicle (up to two vehicles per card, or “Fleet Coverage” when more than 25 vehicles are insured);',
          'the line “Not valid more than one year from effective date”;',
          'the warning “Misrepresentation of insurance is a first degree misdemeanor.”',
        ] },
        { type: 'p', text: 'The same rule says a new card must be issued **whenever the information changes** and at least once a year at renewal. So if you replaced a car, added one, or moved to a new policy, the old card on your phone is out of date.' },

        { type: 'h2', text: 'Showing your phone to an officer' },
        { type: 'p', text: 'Two parts of the law answer the questions people ask most about this:' },
        { type: 'ul', items: [
          '**Showing the screen is not permission to look through your phone.** Presenting a device with electronic proof of insurance does not count as consent for the officer to access any other information on it ([s. 316.646(1)(b)1](' + S.s316646 + ')).',
          '**The phone is your responsibility.** The person who hands over the device takes on the liability for any damage to it ([s. 316.646(1)(b)2](' + S.s316646 + ')).',
        ] },
        { type: 'p', text: 'A few practical habits help: open the card before you hand the phone over, keep a downloaded copy or a clear picture of the current card in case you have no signal, and keep your battery charged on long drives. If someone else in your household drives the car, make sure they have the card too.' },

        { type: 'h2', text: 'At the tag office' },
        { type: 'p', text: 'You may also need proof of insurance to register a vehicle. FLHSMV’s registration procedure lists an electronic format, “smart phone, tablet, or an electronic picture of the insurance card”, as acceptable proof, as long as it shows the same information as a paper card. The procedure even tells office staff to read the screen while you hold the phone, rather than taking it from you ([FLHSMV RS-36](' + S.rs36 + ')). Buying a car this season? See [what insurance you need before registration](/en/blog/buying-car-florida-insurance-registration).' },

        { type: 'h2', text: 'If you can’t show proof' },
        { type: 'p', text: 'Not having proof with you is a nonmoving traffic infraction. What happens next depends on whether you own the car ([s. 316.646(3)](' + S.s316646 + ')):' },
        { type: 'ul', items: [
          '**You own or registered the car.** You must show proof that the coverage was in effect at the time of the stop, at or before your court date. If you don’t, and you are convicted, your **driver license and registration are suspended**, and you can reinstate them only under the financial responsibility law.',
          '**You were driving someone else’s car.** It is a nonmoving infraction for the driver.',
        ] },
        { type: 'p', text: 'Reinstatement after an insurance suspension comes with a fee of $150 the first time, $250 the second time, and $500 for each later one within three years of the first ([s. 324.0221(3)](' + S.s3240221 + ')). Our guide to a [Florida license suspended for no insurance](/en/blog/florida-license-suspended-no-insurance) walks through the steps.' },

        { type: 'h2', text: 'A card is not coverage' },
        { type: 'p', text: 'The card only proves something if the policy behind it is active. Showing proof of insurance while **knowing** the coverage is no longer in force is a first-degree misdemeanor ([s. 316.646(4)](' + S.s316646 + ')), which can mean up to one year in jail ([s. 775.082](' + S.s775082 + ')) and a fine of up to $1,000 ([s. 775.083](' + S.s775083 + ')).' },
        { type: 'p', text: 'The state also checks coverage on its own. Insurers report new PIP and property damage liability policies and cancellations to FLHSMV electronically ([s. 324.0221(1)(a)](' + S.s3240221 + ')), and FLHSMV sends a letter when a registered vehicle shows no active Florida policy ([FLHSMV](' + S.letter + ')). If you sell a car or stop driving it, FLHSMV says to turn in the plate **before** you cancel the insurance ([FLHSMV](' + S.ins + ')).' },

        { type: 'h2', text: 'Before a holiday road trip' },
        { type: 'ul', items: [
          'Open your card and check the effective date and the VIN of the car you are taking.',
          'Delete old cards for cars you no longer own or policies that ended.',
          'Make sure every driver of the car can show the card.',
          'Lending the car to a guest? Read about [owner liability when someone borrows your car](/en/blog/lending-your-car-florida-owner-liability).',
          'Renting a car? See [rental car insurance for the holidays](/en/blog/rental-car-insurance-florida-holidays).',
          'Know what to do after a crash: our [Miami-Dade car accident guide](/en/auto-insurance-after-accident-miami-dade).',
        ] },
        { type: 'callout', title: 'Need a current card or a policy review?', text: 'Ask through the [quote form](/en/quote) or call [(305) 859-3953](' + TEL + '). Our office is at 33550 S Dixie Hwy, Suite 102, Florida City (Monday–Friday 9–6, Saturday by appointment), and we work in English, Spanish and Russian. More on [car insurance in Florida City](/en/car-insurance-florida-city). Coverage depends on the policy you choose. This is general information, not legal advice.' },
      ],
      faq: [
        { q: 'Is a picture of my insurance card on my phone enough?', a: 'The law accepts proof in FLHSMV’s electronic format, and electronic proof must show the same information as the paper card. FLHSMV’s registration procedure lists an electronic picture of the card as acceptable. A clear image of your current card that shows all of that information is the practical minimum.' },
        { q: 'Can the officer look through my phone if I hand it over?', a: 'No consent is given by showing it. Under s. 316.646(1)(b)1, presenting a device with electronic proof of insurance does not mean you agree to let the officer access any other information on it.' },
        { q: 'I had insurance but forgot the card. What now?', a: 'If you own or registered the car, show proof that the coverage was in effect at the time of the stop, at or before your court date. That is what keeps your license and registration from being suspended.' },
        { q: 'How often should I get a new card?', a: 'Under Rule 15A-3.006, insurers issue a new card whenever the information on it changes and at least once a year at renewal, and a card is not valid more than one year from its effective date.' },
      ],
      sources: [
        { label: 'Florida Statutes, s. 316.646 (2026): security required; proof of security and display', url: S.s316646 },
        { label: 'Rule 15A-3.006, F.A.C.: identification cards (FLHSMV)', url: S.rule },
        { label: 'FLHSMV procedure RS-36: insurance verification (PDF)', url: S.rs36 },
        { label: 'FLHSMV: Florida insurance requirements', url: S.ins },
        { label: 'FLHSMV: received a letter (insurance)', url: S.letter },
        { label: 'Florida Statutes, s. 324.0221 (2026): reports by insurers; suspension; reinstatement', url: S.s3240221 },
        { label: 'Florida Statutes, s. 775.082 (2026): penalties', url: S.s775082 },
        { label: 'Florida Statutes, s. 775.083 (2026): fines', url: S.s775083 },
      ],
    },
    es: {
      title: 'Prueba electrónica del seguro de auto en Florida: qué debe llevar consigo',
      metaTitle: 'Tarjeta de seguro en el celular en Florida | M&K Agency',
      description: 'En Florida puede mostrar la prueba del seguro de auto en el celular. Qué debe decir la tarjeta, qué puede ver el policía y qué pasa si no la tiene.',
      ogAlt: 'Ilustración de un celular con una tarjeta de seguro en blanco junto a un carro, un escudo azul con una marca de verificación y palmeras',
      excerpt: 'La ley de Florida permite mostrar la prueba del seguro en el celular. Qué datos debe tener la tarjeta, qué implica entregar su teléfono y por qué una tarjeta vieja es un riesgo.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: '¿Sale de viaje estas fiestas? Antes de arrancar, revise algo sencillo: ¿podría mostrar ahora mismo la prueba de su seguro de auto? En Florida, esa prueba puede estar en su celular. La ley acepta el formato electrónico, pero también fija reglas sobre qué debe mostrar y qué pasa cuando le entrega el teléfono a un policía. Esto es lo que conviene saber.' },

        { type: 'h2', text: 'Qué exige la ley de Florida' },
        { type: 'p', text: 'Si usted está obligado a mantener protección contra lesiones personales (PIP), responsabilidad por daños a la propiedad o responsabilidad por lesiones corporales en un vehículo, debe llevar la prueba de esa cobertura **en su poder en todo momento** mientras maneja ([sección 316.646(1)](' + S.s316646 + ')). Si un agente del orden, o cualquier persona autorizada para poner multas de tránsito, se la pide, tiene que mostrarla ([sección 316.646(2)](' + S.s316646 + ')).' },
        { type: 'p', text: 'La ley enumera lo que sirve como prueba ([sección 316.646(1)(a)](' + S.s316646 + ')):' },
        { type: 'ul', items: [
          'la tarjeta de seguro en el formato uniforme, **en papel o electrónico**, que fija el Departamento de Seguridad en las Carreteras y Vehículos Motorizados (FLHSMV);',
          'una póliza de seguro vigente;',
          'un binder (cobertura provisional) de la póliza;',
          'un certificado de seguro;',
          'otra prueba que acepte el FLHSMV.',
        ] },
        { type: 'p', text: '¿No tiene claro qué coberturas le exigen? Nuestra guía de [requisitos mínimos de seguro de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements) explica el PIP, la responsabilidad por daños a la propiedad y cuándo entra la de lesiones corporales.' },

        { type: 'h2', text: 'Qué datos debe tener la tarjeta' },
        { type: 'p', text: 'La regla del FLHSMV sobre tarjetas de identificación del seguro dice que la aseguradora entrega la prueba en papel o en formato electrónico, y que **la versión electrónica debe tener la misma información que la de papel** ([Regla 15A-3.006, F.A.C.](' + S.rule + ')). La tarjeta de Florida muestra:' },
        { type: 'ul', items: [
          'el encabezado “Florida Automobile Insurance Identification Card”;',
          'el nombre de la aseguradora y su número de compañía en Florida;',
          'el asegurado nombrado en la póliza;',
          'el tipo de cobertura: PIP/daños a la propiedad y, si la compró, responsabilidad por lesiones corporales;',
          'el número de póliza y la fecha de vigencia (mes, día y año);',
          'año, marca y VIN del vehículo (hasta dos por tarjeta, o “Fleet Coverage” si la póliza asegura más de 25);',
          'la leyenda de que no es válida más de un año desde la fecha de vigencia;',
          'la advertencia de que falsear el seguro es un delito menor de primer grado.',
        ] },
        { type: 'p', text: 'La misma regla exige una tarjeta nueva **cada vez que cambian los datos** y, como mínimo, una vez al año al renovar. Si cambió de carro, agregó otro o pasó a una póliza nueva, la tarjeta vieja que guarda en el celular ya no sirve.' },

        { type: 'h2', text: 'Si le entrega el celular a un policía' },
        { type: 'p', text: 'La ley responde a las dos dudas más comunes:' },
        { type: 'ul', items: [
          '**Mostrar la pantalla no da permiso para revisar su teléfono.** Presentar un dispositivo con la prueba electrónica no equivale a autorizar al agente a ver ninguna otra información del aparato ([sección 316.646(1)(b)1](' + S.s316646 + ')).',
          '**El teléfono corre por su cuenta.** Quien entrega el dispositivo asume la responsabilidad por cualquier daño que sufra ([sección 316.646(1)(b)2](' + S.s316646 + ')).',
        ] },
        { type: 'p', text: 'Algunos hábitos útiles: abra la tarjeta antes de pasar el celular, tenga descargada una copia o una foto nítida de la tarjeta vigente por si se queda sin señal, y lleve el teléfono cargado en viajes largos. Si otra persona de la casa maneja el carro, asegúrese de que también tenga la tarjeta.' },

        { type: 'h2', text: 'En la oficina de placas' },
        { type: 'p', text: 'Para registrar un vehículo también puede necesitar la prueba del seguro. El procedimiento de registro del FLHSMV acepta el formato electrónico, “smart phone, tablet, or an electronic picture of the insurance card”, siempre que muestre los mismos datos que la tarjeta de papel. Incluso indica al personal que lea la pantalla mientras usted sostiene el teléfono, sin quitárselo de las manos ([FLHSMV RS-36](' + S.rs36 + ')). ¿Va a comprar carro esta temporada? Vea [qué seguro necesita antes de registrarlo](/es/blog/buying-car-florida-insurance-registration).' },

        { type: 'h2', text: 'Si no puede mostrar la prueba' },
        { type: 'p', text: 'No llevar la prueba es una infracción de tránsito de tipo “nonmoving” (no relacionada con la conducción en marcha). Lo que sigue depende de si el carro es suyo ([sección 316.646(3)](' + S.s316646 + ')):' },
        { type: 'ul', items: [
          '**El carro es suyo o está registrado a su nombre.** Debe demostrar, a más tardar en la fecha de su cita en la corte, que la cobertura estaba vigente el día que lo pararon. Si no lo hace y lo condenan, **le suspenden la licencia y el registro**, y solo puede recuperarlos según la ley de responsabilidad financiera.',
          '**Manejaba el carro de otra persona.** Es una infracción “nonmoving” para el conductor.',
        ] },
        { type: 'p', text: 'Reactivar la licencia y el registro tras una suspensión por seguro cuesta $150 la primera vez, $250 la segunda y $500 cada una de las siguientes dentro de los tres años posteriores a la primera ([sección 324.0221(3)](' + S.s3240221 + ')). Nuestra guía sobre la [licencia suspendida por no tener seguro](/es/blog/florida-license-suspended-no-insurance) explica los pasos.' },

        { type: 'h2', text: 'La tarjeta no es la cobertura' },
        { type: 'p', text: 'La tarjeta solo prueba algo si la póliza sigue activa. Mostrar una prueba de seguro **sabiendo** que la cobertura ya no está vigente es un delito menor de primer grado ([sección 316.646(4)](' + S.s316646 + ')), castigado con hasta un año de cárcel ([sección 775.082](' + S.s775082 + ')) y una multa de hasta $1,000 ([sección 775.083](' + S.s775083 + ')).' },
        { type: 'p', text: 'Además, el estado verifica por su cuenta. Las aseguradoras reportan electrónicamente al FLHSMV las pólizas nuevas de PIP y daños a la propiedad y sus cancelaciones ([sección 324.0221(1)(a)](' + S.s3240221 + ')), y el FLHSMV envía una carta cuando un vehículo registrado no tiene póliza activa en Florida ([FLHSMV](' + S.letter + ')). Si vende el carro o deja de usarlo, el FLHSMV indica entregar la placa **antes** de cancelar el seguro ([FLHSMV](' + S.ins + ')).' },

        { type: 'h2', text: 'Antes de salir a la carretera en las fiestas' },
        { type: 'ul', items: [
          'Abra la tarjeta y revise la fecha de vigencia y el VIN del carro que va a usar.',
          'Borre las tarjetas de carros que ya no tiene o de pólizas que terminaron.',
          'Confirme que cada persona que maneje el carro pueda mostrar la tarjeta.',
          '¿Le presta el carro a un invitado? Lea sobre la [responsabilidad del dueño al prestar el carro](/es/blog/lending-your-car-florida-owner-liability).',
          '¿Va a alquilar? Vea nuestra guía de [seguro de carro de alquiler en las fiestas](/es/blog/rental-car-insurance-florida-holidays).',
          'Tenga a mano qué hacer tras un choque: nuestra [guía de accidentes en Miami-Dade](/es/auto-insurance-after-accident-miami-dade).',
        ] },
        { type: 'callout', title: '¿Necesita una tarjeta al día o revisar su póliza?', text: 'Escríbanos por el [formulario de cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + '). Estamos en 33550 S Dixie Hwy, Suite 102, Florida City (lunes a viernes de 9 a 6, sábados con cita) y atendemos en español, inglés y ruso. Más sobre el [seguro de auto en Florida City](/es/car-insurance-florida-city). La cobertura depende de la póliza que elija. Esto es información general, no asesoría legal.' },
      ],
      faq: [
        { q: '¿Basta con una foto de la tarjeta en el celular?', a: 'La ley acepta la prueba en el formato electrónico del FLHSMV, que debe tener los mismos datos que la tarjeta de papel, y el procedimiento de registro del FLHSMV menciona expresamente la foto electrónica de la tarjeta. Lo mínimo sensato es una imagen nítida de la tarjeta vigente donde se lean todos esos datos.' },
        { q: '¿El policía puede revisar mi teléfono si se lo entrego?', a: 'Mostrarlo no es dar permiso. Según la sección 316.646(1)(b)1, presentar un dispositivo con la prueba electrónica no significa que usted autorice al agente a ver otra información del aparato.' },
        { q: 'Tenía seguro, pero olvidé la tarjeta. ¿Qué hago?', a: 'Si el carro es suyo o está registrado a su nombre, demuestre a más tardar en la fecha de la corte que la cobertura estaba vigente cuando lo pararon. Eso es lo que evita la suspensión de la licencia y del registro.' },
        { q: '¿Cada cuánto debo recibir una tarjeta nueva?', a: 'Según la Regla 15A-3.006, la aseguradora emite una tarjeta nueva cada vez que cambian sus datos y al menos una vez al año al renovar; además, la tarjeta no es válida más de un año desde su fecha de vigencia.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 316.646 (2026): prueba del seguro y su presentación', url: S.s316646 },
        { label: 'Regla 15A-3.006, F.A.C.: tarjetas de identificación del seguro (FLHSMV)', url: S.rule },
        { label: 'FLHSMV, procedimiento RS-36: verificación del seguro (PDF, en inglés)', url: S.rs36 },
        { label: 'FLHSMV: requisitos de seguro en Florida (en inglés)', url: S.ins },
        { label: 'FLHSMV: si recibió una carta sobre su seguro (en inglés)', url: S.letter },
        { label: 'Estatutos de Florida, sección 324.0221 (2026): reportes de aseguradoras, suspensión y reactivación', url: S.s3240221 },
        { label: 'Estatutos de Florida, sección 775.082 (2026): penas', url: S.s775082 },
        { label: 'Estatutos de Florida, sección 775.083 (2026): multas', url: S.s775083 },
      ],
    },
    ru: {
      title: 'Электронное подтверждение автостраховки во Флориде: что нужно иметь при себе',
      metaTitle: 'Страховая карточка в телефоне во Флориде | M&K Agency',
      description: 'Во Флориде подтверждение автостраховки можно показать с телефона. Что должно быть в карточке, что вправе увидеть полицейский и что будет без неё.',
      ogAlt: 'Иллюстрация: смартфон с пустой страховой карточкой рядом с машиной, синий щит с галочкой и пальмы',
      excerpt: 'Закон Флориды разрешает показывать подтверждение страховки на телефоне. Какие данные нужны в карточке, что значит отдать телефон полицейскому и чем опасна старая карточка.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Собираетесь в дорогу на праздники? Перед выездом проверьте простую вещь: сможете ли вы прямо сейчас показать подтверждение автостраховки? Во Флориде оно может быть у вас в телефоне. Закон признаёт электронный формат, но при этом задаёт правила: что именно должно быть видно и что происходит, когда вы передаёте телефон полицейскому. Разберёмся по порядку.' },

        { type: 'h2', text: 'Что требует закон Флориды' },
        { type: 'p', text: 'Если вы обязаны иметь на машину страховку PIP (защита от травм), ответственность за ущерб имуществу или ответственность за телесные повреждения, подтверждение этой страховки должно быть **при вас всё время**, пока вы за рулём ([ст. 316.646(1)](' + S.s316646 + ')). По требованию полицейского или другого лица, которое вправе выписывать штрафы за нарушения ПДД, его нужно предъявить ([ст. 316.646(2)](' + S.s316646 + ')).' },
        { type: 'p', text: 'Закон перечисляет, что считается подтверждением ([ст. 316.646(1)(a)](' + S.s316646 + ')):' },
        { type: 'ul', items: [
          'страховая карточка единого образца, **бумажная или электронная**, в формате, установленном Департаментом безопасности дорожного движения и транспортных средств Флориды (FLHSMV);',
          'действующий страховой полис;',
          'binder — временное подтверждение покрытия;',
          'сертификат страхования;',
          'другое подтверждение, которое допускает FLHSMV.',
        ] },
        { type: 'p', text: 'Не уверены, какие виды страховки для вас обязательны? В статье о [минимальных требованиях к автостраховке во Флориде](/ru/blog/florida-minimum-car-insurance-requirements) объясняем, что такое PIP, ответственность за ущерб имуществу и когда нужна ответственность за телесные повреждения.' },

        { type: 'h2', text: 'Что должно быть в карточке' },
        { type: 'p', text: 'Правило FLHSMV о страховых карточках гласит: страховая компания выдаёт подтверждение на бумаге или в электронном виде, и **в электронной версии должны быть те же данные, что и в бумажной** ([Rule 15A-3.006, F.A.C.](' + S.rule + ')). На флоридской карточке указываются:' },
        { type: 'ul', items: [
          'заголовок «Florida Automobile Insurance Identification Card»;',
          'название страховой компании и её номер во Флориде;',
          'страхователь, указанный в полисе;',
          'вид покрытия: PIP/ущерб имуществу и, если куплена, ответственность за телесные повреждения;',
          'номер полиса и дата начала действия (месяц, день и год);',
          'год выпуска, марка и VIN машины (не больше двух машин на карточке; если в полисе больше 25 машин — отметка «Fleet Coverage»);',
          'пометка, что карточка действительна не больше года с даты начала действия;',
          'предупреждение о том, что ложные сведения о страховке — мисдиминор первой степени.',
        ] },
        { type: 'p', text: 'По тому же правилу новую карточку выдают **при любом изменении данных** и не реже раза в год при продлении. Если вы сменили машину, добавили вторую или перешли на новый полис, старая карточка в телефоне уже не годится.' },

        { type: 'h2', text: 'Если вы передаёте телефон полицейскому' },
        { type: 'p', text: 'Закон отвечает на два самых частых вопроса:' },
        { type: 'ul', items: [
          '**Показать экран — не значит разрешить просматривать телефон.** Предъявление устройства с электронным подтверждением страховки не считается согласием на доступ полицейского к любой другой информации на нём ([ст. 316.646(1)(b)1](' + S.s316646 + ')).',
          '**За телефон отвечаете вы.** Тот, кто передаёт устройство, сам несёт ответственность за возможные повреждения ([ст. 316.646(1)(b)2](' + S.s316646 + ')).',
        ] },
        { type: 'p', text: 'Несколько полезных привычек: откройте карточку до того, как передать телефон; держите загруженную копию или чёткий снимок действующей карточки на случай, если пропадёт связь; в долгой поездке следите за зарядом. Если машину водит кто-то ещё из семьи, у него тоже должна быть карточка.' },

        { type: 'h2', text: 'В офисе регистрации' },
        { type: 'p', text: 'Подтверждение страховки понадобится и при регистрации машины. Процедура FLHSMV прямо допускает электронный формат — «smart phone, tablet, or an electronic picture of the insurance card», если в нём те же данные, что и на бумажной карточке. Сотрудникам даже предписано читать данные с экрана, пока телефон в ваших руках, а не забирать его ([FLHSMV RS-36](' + S.rs36 + ')). Покупаете машину в этом сезоне? Читайте, [какая страховка нужна до регистрации](/ru/blog/buying-car-florida-insurance-registration).' },

        { type: 'h2', text: 'Если показать подтверждение нечего' },
        { type: 'p', text: 'Отсутствие подтверждения — нарушение ПДД категории nonmoving (не связанное с движением). Последствия зависят от того, ваша ли это машина ([ст. 316.646(3)](' + S.s316646 + ')):' },
        { type: 'ul', items: [
          '**Машина ваша или зарегистрирована на вас.** Не позднее даты судебного заседания нужно доказать, что страховка действовала в момент остановки. Если этого не сделать и суд признает вас виновным, **права и регистрацию машины приостановят**, а восстановить их можно только по правилам закона о финансовой ответственности.',
          '**Вы ехали на чужой машине.** Для водителя это нарушение категории nonmoving.',
        ] },
        { type: 'p', text: 'Восстановление после приостановки из-за страховки стоит $150 в первый раз, $250 во второй и $500 за каждый следующий в течение трёх лет после первого ([ст. 324.0221(3)](' + S.s3240221 + ')). Пошагово об этом — в статье о [правах, приостановленных из-за отсутствия страховки](/ru/blog/florida-license-suspended-no-insurance).' },

        { type: 'h2', text: 'Карточка — ещё не страховка' },
        { type: 'p', text: 'Карточка что-то доказывает, только пока полис действует. Если вы предъявляете подтверждение, **зная**, что страховка уже не действует, это мисдиминор первой степени ([ст. 316.646(4)](' + S.s316646 + ')): до одного года заключения ([ст. 775.082](' + S.s775082 + ')) и штраф до $1,000 ([ст. 775.083](' + S.s775083 + ')).' },
        { type: 'p', text: 'Кроме того, штат проверяет страховку сам. Страховые компании в электронном виде сообщают FLHSMV о новых полисах PIP и ответственности за ущерб имуществу и об их отмене ([ст. 324.0221(1)(a)](' + S.s3240221 + ')), а FLHSMV присылает письмо, если на зарегистрированную машину нет действующего флоридского полиса ([FLHSMV](' + S.letter + ')). Если вы продали машину или больше на ней не ездите, FLHSMV советует сдать номер **до** отмены страховки ([FLHSMV](' + S.ins + ')).' },

        { type: 'h2', text: 'Перед праздничной поездкой' },
        { type: 'ul', items: [
          'Откройте карточку и проверьте дату начала действия и VIN машины, на которой поедете.',
          'Удалите карточки на проданные машины и закончившиеся полисы.',
          'Убедитесь, что каждый, кто сядет за руль, сможет показать карточку.',
          'Даёте машину гостям? Прочитайте об [ответственности владельца, когда машину берут другие](/ru/blog/lending-your-car-florida-owner-liability).',
          'Берёте машину напрокат? Смотрите статью о [страховке арендованной машины на праздники](/ru/blog/rental-car-insurance-florida-holidays).',
          'Заранее узнайте, что делать после ДТП: [памятка для Miami-Dade](/ru/auto-insurance-after-accident-miami-dade).',
        ] },
        { type: 'callout', title: 'Нужна актуальная карточка или проверка полиса?', text: 'Напишите нам через [форму запроса](/ru/quote) или позвоните: [(305) 859-3953](' + TEL + '). Офис: 33550 S Dixie Hwy, Suite 102, Florida City (пн–пт 9–6, в субботу по записи). Говорим по-русски, по-английски и по-испански — подробнее о [русскоязычном страховом агенте в Майами](/ru/russian-speaking-insurance-agent-miami) и об [автостраховке во Florida City](/ru/car-insurance-florida-city). Покрытие зависит от выбранного полиса. Это общая информация, а не юридическая консультация.' },
      ],
      faq: [
        { q: 'Достаточно ли фото страховой карточки в телефоне?', a: 'Закон признаёт подтверждение в электронном формате FLHSMV, где должны быть те же данные, что и на бумажной карточке, а процедура регистрации FLHSMV прямо упоминает электронное фото карточки. Разумный минимум — чёткий снимок действующей карточки, на котором читаются все эти данные.' },
        { q: 'Может ли полицейский просматривать мой телефон, если я его передам?', a: 'Согласия вы этим не даёте. По ст. 316.646(1)(b)1 предъявление устройства с электронным подтверждением не означает разрешения смотреть другую информацию на нём.' },
        { q: 'Страховка была, но карточку я забыл. Что делать?', a: 'Если машина ваша или зарегистрирована на вас, не позднее даты суда докажите, что страховка действовала в момент остановки. Именно это защищает права и регистрацию от приостановки.' },
        { q: 'Как часто нужна новая карточка?', a: 'По Rule 15A-3.006 страховая компания выдаёт новую карточку при любом изменении данных и не реже раза в год при продлении, а сама карточка действительна не больше года с даты начала действия.' },
      ],
      sources: [
        { label: 'Florida Statutes, ст. 316.646 (2026): подтверждение страховки и его предъявление', url: S.s316646 },
        { label: 'Rule 15A-3.006, F.A.C.: страховые карточки (FLHSMV)', url: S.rule },
        { label: 'FLHSMV, процедура RS-36: проверка страховки (PDF, англ.)', url: S.rs36 },
        { label: 'FLHSMV: требования к страховке во Флориде (англ.)', url: S.ins },
        { label: 'FLHSMV: если вы получили письмо о страховке (англ.)', url: S.letter },
        { label: 'Florida Statutes, ст. 324.0221 (2026): отчёты страховщиков, приостановка, восстановление', url: S.s3240221 },
        { label: 'Florida Statutes, ст. 775.082 (2026): наказания', url: S.s775082 },
        { label: 'Florida Statutes, ст. 775.083 (2026): штрафы', url: S.s775083 },
      ],
    },
  },
};
