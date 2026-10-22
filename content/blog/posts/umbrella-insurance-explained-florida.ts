import type { BlogPost } from '../types';

// Facts checked 2026-10-22 against official sources:
// - NAIC Consumer Insight "What's an Umbrella Policy?" (Dec. 15, 2022): covers liability and defense costs
//   above auto/home/renters limits; may cover claims the primary policy does not; covers bodily injury,
//   property damage and personal injury you are held responsible for; does not pay for damage to your own
//   home or vehicle; punitive damages (example: drunk driving) not covered.
// - NAIC Consumer Insight "Your Annual Insurance Check": an umbrella can extend homeowners/renters liability,
//   e.g. $1 million or more above a $250,000 homeowners limit.
// - NAIC Consumer Insight on pools, hot tubs and backyard toys: umbrella sits above homeowners and boat
//   policies; questions to ask before adding a pool, trampoline, etc.
// - Massachusetts Division of Insurance (mass.gov): umbrella/excess policies require you to maintain
//   "underlying insurance", each listed on the umbrella declarations page; the umbrella responds only when
//   primary limits are exhausted; if underlying coverage isn't maintained, the umbrella treats the
//   underlying limits as a deductible; sold in million-dollar increments; driving history can affect it.
// - New York DFS homeowners page: umbrellas typically $1 million or more; usually also cover libel,
//   slander, false arrest, invasion of privacy; insurers may require minimum underlying limits.
// - Florida DFS Homeowners' Insurance Toolkit: personal liability (Coverage E) has a maximum limit,
//   excludes auto liability and intentional harm; some cities/counties may require liability coverage if
//   you own certain pets or a pool; certain dog breeds or a trampoline can rule out coverage from many
//   authorized insurers.
// - FLHSMV insurance requirements: only PIP $10,000 and PDL $10,000 required to register a car.
// - 2026 F.S. 322.09(2): negligence or willful misconduct of a minor driving on a highway is imputed to the
//   person who signed the minor's license application; jointly and severally liable.
// - 2026 F.S. 324.021(9)(b)3: natural-person owner who lends a car liable up to $100k/$300k BI and $50k PD;
//   if the permissive user is uninsured or has under $500k combined, owner liable for up to an additional
//   $500k in economic damages.
// - 2026 F.S. 767.04: dog owner liable for bites regardless of former viciousness; reduced by victim's
//   negligence share; "Bad Dog" sign defense does not apply to a person under 6 or the owner's negligence.
// - 2026 F.S. 515.27(1): a new residential pool needs at least one safety feature (barrier, approved
//   cover, door/window exit alarms, self-closing self-latching doors, or pool alarm) to pass final inspection.
// - 2026 F.S. 327.32: vessels are dangerous instrumentalities; liability for careless operation is the
//   operator's, not the owner's, unless the owner is operating or on board.
// - 2026 F.S. 768.81(2),(6): damages reduced by the claimant's share of fault; a party more than 50% at
//   fault for his or her own harm recovers nothing (except medical negligence); s. 9, ch. 2023-15.
// - 2026 F.S. 627.727(2): UM requirement does not apply to a policy that does not provide primary auto
//   liability for a specifically insured vehicle, but the insurer must make UM available on written request
//   up to the policy's BI limits or $1 million, whichever is less.
// - Florida Constitution Art. X, s. 4: homestead protected from forced sale, with exceptions (taxes,
//   mortgage, improvements); other property is not.
// No carrier names, no underlying-limit dollar amounts (no official source states typical amounts).
const S = {
  naic: 'https://content.naic.org/article/whats-umbrella-policy',
  naicAnnual: 'https://content.naic.org/article/consumer-insight-your-annual-insurance-check',
  naicPool: 'https://content.naic.org/article/consumer-insight-protecting-your-home-coverage-pools-hot-tubs-and-backyard-toys',
  mass: 'https://www.mass.gov/info-details/personal-umbrella-and-excess-liability-insurance',
  nydfs: 'https://www.dfs.ny.gov/consumers/help_for_homeowners/insurance/basic_coverage',
  dfsHo: 'https://www.myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---homeowners-insurance-toolkit.pdf',
  flhsmv: 'https://www.flhsmv.gov/insurance/',
  s32209: 'https://www.flsenate.gov/Laws/Statutes/2026/322.09',
  s324021: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021',
  s76704: 'https://www.flsenate.gov/Laws/Statutes/2026/767.04',
  s51527: 'https://www.flsenate.gov/Laws/Statutes/2026/515.27',
  s32732: 'https://www.flsenate.gov/Laws/Statutes/2026/327.32',
  s76881: 'https://www.flsenate.gov/Laws/Statutes/2026/768.81',
  s627727: 'https://www.flsenate.gov/Laws/Statutes/2026/627.727',
  const: 'https://www.flsenate.gov/Laws/Constitution',
};

export const post: BlogPost = {
  slug: 'umbrella-insurance-explained-florida',
  datePublished: '2026-10-22',
  translations: {
    en: {
      title: 'Umbrella Insurance in Florida: Who Should Consider It',
      metaTitle: 'Umbrella Insurance in Florida: Who Needs It? | M&K Agency',
      description: 'Teen drivers, a pool, a dog, a boat or a rental? How Florida liability law works in each case, what underlying insurance means and when an umbrella fits.',
      ogAlt: 'An open umbrella sheltering a house, a car, a pool and a small boat',
      excerpt: 'A decision guide, not a sales pitch: the Florida laws behind teen-driver, lent-car, dog-bite, pool and boat claims, why the umbrella depends on your underlying policies, and a five-minute self-check.',
      category: 'Umbrella & liability',
      body: [
        { type: 'p', text: 'Your car and home policies each stop paying at their liability limit. A personal umbrella is a separate policy that adds a layer above those limits. Not every household needs one. This guide walks through the Florida situations where the question comes up most, what the law says about each one, and what an umbrella requires from you before it pays.' },
        { type: 'h2', text: 'What an umbrella does, and what it does not' },
        { type: 'p', text: 'According to the National Association of Insurance Commissioners (NAIC), a personal umbrella pays liability and legal defense costs that go beyond what your auto, homeowners or renters policy pays, and it may cover some liability claims your primary policy does not cover at all ([NAIC](' + S.naic + ')). It applies to bodily injury, property damage and “personal injury” you are held responsible for. New York’s insurance regulator notes that umbrellas usually also cover offenses such as libel, slander, false arrest and invasion of privacy, and are typically written for **$1 million or more** ([NY DFS](' + S.nydfs + ')).' },
        { type: 'ul', items: [
          'It does **not** pay for damage to your own house or car ([NAIC](' + S.naic + ')).',
          'NAIC lists **punitive damages** as not covered, with drunk driving as the example.',
          'Your homeowners personal liability never covered car accidents in the first place; that is the auto policy’s job ([Florida DFS](' + S.dfsHo + ')).',
        ] },
        { type: 'h2', text: 'The condition most people miss: underlying insurance' },
        { type: 'p', text: 'An umbrella is built on top of your other policies, so insurers typically require you to keep certain minimum liability limits on them ([NY DFS](' + S.nydfs + ')). The Massachusetts Division of Insurance explains how it works: each underlying auto, home, boat or off-road vehicle policy is listed on the umbrella’s declarations page, and the umbrella pays only after those limits are used up. **If you do not keep an underlying policy in force, the umbrella can treat its required limit as a deductible you pay yourself** ([Mass. DOI](' + S.mass + ')).' },
        { type: 'p', text: 'This matters in Florida because the state requires only $10,000 of PIP and $10,000 of property damage liability to register a car, with no bodily injury liability for most drivers ([FLHSMV](' + S.flhsmv + ')). A minimum-limits auto policy usually will not meet an umbrella’s underlying requirement. The exact limits differ by insurer, so ask before you buy. Background: [Florida minimum car insurance](/en/blog/florida-minimum-car-insurance-requirements) and [bodily injury liability and FR-44](/en/blog/bodily-injury-liability-fr44-florida).' },
        { type: 'h2', text: 'Florida situations where an umbrella is worth a look' },
        { type: 'h3', text: 'A teen driver in the house' },
        { type: 'p', text: 'In Florida, the parent or guardian who signs a minor’s license application takes on the minor’s driving negligence: the signer is **jointly and severally liable** with the teen for damages ([s. 322.09(2)](' + S.s32209 + ')). A serious crash can reach the signer’s own assets.' },
        { type: 'h3', text: 'Lending your car' },
        { type: 'p', text: 'A person who lends a car is liable for the driver’s use up to $100,000 per person and $300,000 per incident for bodily injury and $50,000 for property damage. If the borrower is uninsured or carries less than $500,000 combined, the owner can owe up to an **additional $500,000** in economic damages ([s. 324.021(9)(b)3](' + S.s324021 + ')). More in [lending your car in Florida](/en/blog/lending-your-car-florida-owner-liability).' },
        { type: 'h3', text: 'A dog' },
        { type: 'p', text: 'A Florida dog owner is liable when the dog bites someone in a public place or lawfully on private property, **even if the dog never showed aggression before**. The victim’s own negligence reduces the amount, and a visible “Bad Dog” sign is a defense, but not for a child under 6 or when the owner was negligent ([s. 767.04](' + S.s76704 + ')). Florida DFS also warns that certain dog breeds can rule out home coverage with many insurers ([DFS](' + S.dfsHo + ')).' },
        { type: 'h3', text: 'A pool, a trampoline or a busy backyard' },
        { type: 'p', text: 'A new residential pool in Florida must have at least one safety feature (a barrier, an approved cover, exit alarms on doors and windows, self-closing and self-latching doors, or a pool alarm) to pass final inspection ([s. 515.27](' + S.s51527 + ')). The NAIC suggests talking to your agent before adding a pool, spa or trampoline, and points to the umbrella as the layer above home and boat liability ([NAIC](' + S.naicPool + ')).' },
        { type: 'h3', text: 'A boat or a jet ski' },
        { type: 'p', text: 'Vessels are “dangerous instrumentalities” in Florida. Liability for careless operation falls on the operator, and on the owner only when the owner is driving or on board ([s. 327.32](' + S.s32732 + ')). If you take guests out, see [letting guests drive a jet ski](/en/blog/jet-ski-rental-guest-drivers-florida) and our [boat insurance page](/en/boat-insurance-florida).' },
        { type: 'h3', text: 'A rental property, real estate or a high income' },
        { type: 'p', text: 'The Massachusetts regulator lists landlords, pool owners, households with inexperienced drivers and boat owners who take guests out as people who may want an umbrella ([Mass. DOI](' + S.mass + ')). Each rental needs its own liability policy listed as underlying insurance. Florida’s homestead protection shields your primary home from forced sale, with exceptions, but not a second home, a rental or bank and investment accounts ([Fla. Const. Art. X, s. 4](' + S.const + ')).' },
        { type: 'h2', text: 'Two Florida rules that shape the numbers' },
        { type: 'p', text: '**Comparative fault.** Damages are reduced by the injured person’s own share of fault, and since 2023 someone more than 50% at fault for their own harm recovers nothing, except in medical negligence cases ([s. 768.81](' + S.s76881 + ')). That limits some claims, but it does not help when you are mostly at fault.' },
        { type: 'p', text: '**Uninsured motorist on an umbrella.** Florida does not make UM mandatory on a policy that is not primary auto liability, but the insurer must make it available on your written request, up to the umbrella’s bodily injury limit or $1 million, whichever is less ([s. 627.727(2)](' + S.s627727 + ')). See [UM/UIM coverage in Florida](/en/blog/uninsured-motorist-coverage-florida).' },
        { type: 'h2', text: 'A five-minute self-check' },
        { type: 'ol', items: [
          'Find the liability limits on your auto and home declarations pages ([car](/en/car-insurance-florida-city), [home](/en/homeowners-insurance-florida-city)).',
          'List every driver in the household, including teens and anyone who borrows a car.',
          'Note the pool, dog, trampoline, boat, jet ski or rental units.',
          'Estimate what a large judgment could reach: non-homestead property, investments and future wages.',
          'Ask which underlying limits the umbrella requires and confirm every vehicle and property is listed.',
        ] },
        { type: 'p', text: 'How the coverage is structured, with real Florida cases: [umbrella and wealth protection guide](/en/protect/umbrella-insurance). Local details: [umbrella insurance in Florida City](/en/umbrella-insurance-florida-city).' },
        { type: 'callout', title: 'Want a second look at your limits?', text: '[Request a quote](/en/quote) or call [(305) 859-3953](tel:+13058593953). A licensed agent at our Florida City office (33550 S Dixie Hwy, Suite 102; Monday–Friday 9–6, Saturday by appointment) will go over your underlying limits and whether an umbrella fits, in English, Spanish or Russian. This is general information, not legal advice; coverage depends on the policy and its terms.' },
      ],
      faq: [
        { q: 'Does Florida law require umbrella insurance?', a: 'No. Florida’s auto law requires only PIP and property damage liability to register a car. An umbrella is optional coverage you choose based on your risks and assets.' },
        { q: 'Can I get an umbrella with minimum auto coverage?', a: 'Usually not. Insurers typically require minimum liability limits on your auto and home policies first. If an underlying policy lapses, the umbrella can treat the missing limit as a deductible.' },
        { q: 'Does an umbrella fix my own car or house?', a: 'No. It is liability coverage for injuries and damage you cause to others, plus defense costs. Damage to your own property is handled by your auto and home policies.' },
        { q: 'I rent my apartment. Can an umbrella still apply?', a: 'Yes. The NAIC notes an umbrella can extend the liability limit of a renters policy as well as a homeowners policy.' },
        { q: 'Will an umbrella pay punitive damages after a DUI crash?', a: 'The NAIC lists punitive damages, such as those tied to drunk driving, as not covered by umbrella policies. Read the exclusions in your policy.' },
      ],
      sources: [
        { label: 'NAIC: What’s an Umbrella Policy? (Dec. 15, 2022)', url: S.naic },
        { label: 'NAIC: Your Annual Insurance Check', url: S.naicAnnual },
        { label: 'NAIC: Pools, hot tubs and backyard toys', url: S.naicPool },
        { label: 'Massachusetts Division of Insurance: Personal Umbrella and Excess Liability Insurance', url: S.mass },
        { label: 'New York DFS: Homeowners insurance, personal excess and umbrella policies', url: S.nydfs },
        { label: 'Florida DFS: Homeowners’ Insurance Toolkit', url: S.dfsHo },
        { label: 'FLHSMV: Florida Insurance Requirements', url: S.flhsmv },
        { label: 'Florida Statutes s. 322.09 (2026): application of minors', url: S.s32209 },
        { label: 'Florida Statutes s. 324.021 (2026): owner who lends a vehicle', url: S.s324021 },
        { label: 'Florida Statutes s. 767.04 (2026): dog owner’s liability', url: S.s76704 },
        { label: 'Florida Statutes s. 515.27 (2026): residential pool safety features', url: S.s51527 },
        { label: 'Florida Statutes s. 327.32 (2026): vessels as dangerous instrumentalities', url: S.s32732 },
        { label: 'Florida Statutes s. 768.81 (2026): comparative fault', url: S.s76881 },
        { label: 'Florida Statutes s. 627.727 (2026): uninsured motorist coverage', url: S.s627727 },
        { label: 'Florida Constitution, Article X, Section 4: homestead', url: S.const },
      ],
    },
    es: {
      title: 'Seguro paraguas (umbrella) en Florida: ¿quién debería considerarlo?',
      metaTitle: 'Seguro paraguas en Florida: ¿lo necesita? | M&K Agency',
      description: '¿Hijo adolescente al volante, piscina, perro, bote o una casa alquilada? Qué dice la ley de Florida en cada caso y qué pide una póliza paraguas para pagar.',
      ogAlt: 'Un paraguas abierto que cubre una casa, un carro, una piscina y un bote pequeño',
      excerpt: 'Una guía para decidir, no para vender: las leyes de Florida detrás de los reclamos por conductores adolescentes, carros prestados, mordidas de perro, piscinas y botes, por qué el paraguas depende de sus pólizas base y una revisión de cinco minutos.',
      category: 'Paraguas y responsabilidad civil',
      body: [
        { type: 'p', text: 'Su póliza de carro y la de su casa dejan de pagar cuando llegan a su límite de responsabilidad civil. El seguro paraguas (umbrella) es una póliza aparte que agrega una capa por encima de esos límites. No todas las familias lo necesitan. Veamos cuándo surge la pregunta en Florida, qué dice la ley y qué exige el paraguas antes de pagar.' },
        { type: 'h2', text: 'Qué hace un paraguas y qué no hace' },
        { type: 'p', text: 'Según la Asociación Nacional de Comisionados de Seguros (NAIC), el paraguas personal paga la responsabilidad civil y los gastos de defensa legal que superan lo que paga su póliza de auto, de casa o de inquilino, y puede cubrir algunos reclamos que su póliza principal no cubre ([NAIC](' + S.naic + ')). Se aplica a lesiones corporales, daños a la propiedad y “daño personal” de los que usted sea responsable. El regulador de Nueva York añade que suele cubrir también difamación, calumnia, arresto indebido e invasión de la privacidad, y que normalmente se emite por **$1 millón o más** ([NY DFS](' + S.nydfs + ')).' },
        { type: 'ul', items: [
          '**No** paga daños a su propia casa ni a su carro ([NAIC](' + S.naic + ')).',
          'La NAIC indica que los **daños punitivos** no están cubiertos, y pone como ejemplo manejar borracho.',
          'La responsabilidad civil de su seguro de casa nunca cubre accidentes de carro; eso le toca a la póliza de auto ([DFS de Florida](' + S.dfsHo + ')).',
        ] },
        { type: 'h2', text: 'La condición que casi nadie conoce: el seguro base' },
        { type: 'p', text: 'Las aseguradoras suelen exigir que mantenga ciertos límites mínimos de responsabilidad en ellas ([NY DFS](' + S.nydfs + ')). La División de Seguros de Massachusetts lo explica así: cada póliza base (auto, casa, bote o vehículo todoterreno) aparece en la página de declaraciones del paraguas, y este paga solo cuando esos límites se agotan. **Si usted no mantiene vigente una póliza base, el paraguas puede tratar el límite exigido como un deducible que usted paga de su bolsillo** ([Mass. DOI](' + S.mass + ')).' },
        { type: 'p', text: 'En Florida esto pesa mucho, porque para registrar un carro solo se exigen $10,000 de PIP y $10,000 de responsabilidad por daños a la propiedad, sin responsabilidad por lesiones corporales para la mayoría de los conductores ([FLHSMV](' + S.flhsmv + ')). Una póliza de auto con el mínimo casi nunca cumple lo que pide un paraguas. Los límites exactos varían según la aseguradora. Más contexto: [seguro mínimo de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements) y [responsabilidad por lesiones y FR-44](/es/blog/bodily-injury-liability-fr44-florida).' },
        { type: 'h2', text: 'Situaciones en Florida en las que vale la pena pensarlo' },
        { type: 'h3', text: 'Un adolescente que maneja' },
        { type: 'p', text: 'En Florida, el padre, la madre o el tutor que firma la solicitud de licencia de un menor asume la negligencia de ese menor al volante: quien firma responde **de forma solidaria** con el adolescente por los daños ([s. 322.09(2)](' + S.s32209 + ')).' },
        { type: 'h3', text: 'Prestar su carro' },
        { type: 'p', text: 'Quien presta su carro responde por el uso que le dé el conductor hasta $100,000 por persona y $300,000 por accidente en lesiones, y $50,000 en daños a la propiedad. Si quien lo maneja no tiene seguro o tiene menos de $500,000 combinados, el dueño puede deber **hasta $500,000 adicionales** en daños patrimoniales ([s. 324.021(9)(b)3](' + S.s324021 + ')). Más detalles en [prestar su carro en Florida](/es/blog/lending-your-car-florida-owner-liability).' },
        { type: 'h3', text: 'Un perro' },
        { type: 'p', text: 'En Florida, el dueño responde cuando su perro muerde a alguien en un lugar público o que está legalmente en una propiedad privada, **aunque el perro nunca haya sido agresivo**. La negligencia de la víctima reduce el monto, y un letrero visible de “Bad Dog” sirve de defensa, salvo con niños menores de 6 años o si el dueño fue negligente ([s. 767.04](' + S.s76704 + ')). El DFS de Florida advierte además que ciertas razas pueden dejarlo sin cobertura de casa con muchas aseguradoras ([DFS](' + S.dfsHo + ')).' },
        { type: 'h3', text: 'Una piscina, un trampolín o un patio con mucha visita' },
        { type: 'p', text: 'Una piscina residencial nueva en Florida necesita al menos una medida de seguridad (cerca, cubierta aprobada, alarmas en puertas y ventanas, puertas con cierre y pestillo automáticos o una alarma de piscina) para pasar la inspección final ([s. 515.27](' + S.s51527 + ')). La NAIC recomienda hablar con su agente antes de instalar una piscina, un jacuzzi o un trampolín, y menciona el paraguas como la capa sobre la responsabilidad de casa y de bote ([NAIC](' + S.naicPool + ')).' },
        { type: 'h3', text: 'Un bote o una moto acuática' },
        { type: 'p', text: 'En Florida las embarcaciones son “instrumentos peligrosos”. La responsabilidad por manejarlas sin cuidado recae en quien las opera, y en el dueño solo si él maneja o va a bordo ([s. 327.32](' + S.s32732 + ')). Si sale con invitados, lea [cuando sus invitados manejan una moto acuática](/es/blog/jet-ski-rental-guest-drivers-florida) y vea nuestra página de [seguro de bote](/es/boat-insurance-florida).' },
        { type: 'h3', text: 'Una casa alquilada, otras propiedades o buenos ingresos' },
        { type: 'p', text: 'El regulador de Massachusetts incluye a los arrendadores entre quienes podrían querer un paraguas ([Mass. DOI](' + S.mass + ')). Cada propiedad alquilada necesita su propia póliza de responsabilidad registrada como seguro base. La protección del homestead en Florida impide la venta forzosa de su vivienda principal, con excepciones, pero no protege una segunda casa, una propiedad alquilada ni sus cuentas e inversiones ([Const. de Fla., Art. X, s. 4](' + S.const + ')).' },
        { type: 'h2', text: 'Dos reglas de Florida que influyen en las cifras' },
        { type: 'p', text: '**Culpa comparativa.** La indemnización se reduce según la parte de culpa de la persona lesionada y, desde 2023, quien tiene más del 50% de la culpa de su propio daño no recibe nada, salvo en casos de negligencia médica ([s. 768.81](' + S.s76881 + ')).' },
        { type: 'p', text: '**Conductor sin seguro (UM) en el paraguas.** Florida no exige UM en una póliza que no es de responsabilidad de auto primaria, pero la aseguradora debe ofrecerla si usted la pide por escrito, hasta el límite de lesiones del paraguas o $1 millón, lo que sea menor ([s. 627.727(2)](' + S.s627727 + ')). Vea [cobertura UM/UIM en Florida](/es/blog/uninsured-motorist-coverage-florida).' },
        { type: 'h2', text: 'Revisión rápida de cinco minutos' },
        { type: 'ol', items: [
          'Busque los límites de responsabilidad en las páginas de declaraciones de su [auto](/es/car-insurance-florida-city) y de su [casa](/es/homeowners-insurance-florida-city).',
          'Anote a todos los que manejan, incluidos adolescentes y quien le pide el carro.',
          'Anote la piscina, el perro, el trampolín, el bote, la moto acuática o las propiedades alquiladas.',
          'Calcule qué podría alcanzar una sentencia grande: propiedades que no son homestead, inversiones y sueldos futuros.',
          'Pregunte qué límites base exige el paraguas y confirme que cada vehículo y propiedad aparezca en la póliza.',
        ] },
        { type: 'p', text: 'Cómo se estructura la cobertura, con casos reales de Florida: [guía de paraguas y protección del patrimonio](/es/protect/umbrella-insurance). Información local: [seguro paraguas en Florida City](/es/umbrella-insurance-florida-city).' },
        { type: 'callout', title: '¿Quiere que revisemos sus límites?', text: '[Pida una cotización](/es/quote) o llame al [(305) 859-3953](tel:+13058593953). Un agente con licencia en nuestra oficina de Florida City (33550 S Dixie Hwy, Suite 102; lunes a viernes de 9 a 6, sábados con cita) revisa con usted sus límites base y si un paraguas le conviene, en español, inglés o ruso. Esto es información general, no asesoría legal; la cobertura depende de la póliza y sus condiciones.' },
      ],
      faq: [
        { q: '¿La ley de Florida exige un seguro paraguas?', a: 'No. La ley de auto de Florida solo exige PIP y responsabilidad por daños a la propiedad para registrar un carro. El paraguas es una cobertura opcional que usted decide según sus riesgos y su patrimonio.' },
        { q: '¿Puedo tener un paraguas con el seguro mínimo de auto?', a: 'Por lo general, no. Las aseguradoras suelen exigir primero ciertos límites mínimos de responsabilidad en sus pólizas de auto y de casa. Si una póliza base se cae, el paraguas puede tratar ese límite como un deducible.' },
        { q: '¿El paraguas paga los daños de mi carro o de mi casa?', a: 'No. Es cobertura de responsabilidad por lesiones y daños que usted cause a otros, más los gastos de defensa. Los daños a sus propios bienes los cubren sus pólizas de auto y de casa.' },
        { q: 'Vivo alquilado. ¿Me sirve un paraguas?', a: 'Sí. La NAIC explica que el paraguas puede ampliar el límite de responsabilidad de una póliza de inquilino, igual que el de una póliza de casa.' },
        { q: '¿El paraguas paga daños punitivos después de un choque por manejar borracho?', a: 'La NAIC indica que los daños punitivos, como los relacionados con manejar borracho, no están cubiertos por las pólizas paraguas.' },
      ],
      sources: [
        { label: 'NAIC: What’s an Umbrella Policy? (15 de diciembre de 2022)', url: S.naic },
        { label: 'NAIC: Your Annual Insurance Check', url: S.naicAnnual },
        { label: 'NAIC: piscinas, jacuzzis y juegos de patio', url: S.naicPool },
        { label: 'División de Seguros de Massachusetts: Personal Umbrella and Excess Liability Insurance', url: S.mass },
        { label: 'NY DFS: seguro de casa, pólizas de exceso y paraguas', url: S.nydfs },
        { label: 'DFS de Florida: Homeowners’ Insurance Toolkit', url: S.dfsHo },
        { label: 'FLHSMV: requisitos de seguro en Florida', url: S.flhsmv },
        { label: 'Estatutos de Florida s. 322.09 (2026): solicitudes de menores', url: S.s32209 },
        { label: 'Estatutos de Florida s. 324.021 (2026): dueño que presta su vehículo', url: S.s324021 },
        { label: 'Estatutos de Florida s. 767.04 (2026): responsabilidad del dueño de un perro', url: S.s76704 },
        { label: 'Estatutos de Florida s. 515.27 (2026): seguridad de piscinas residenciales', url: S.s51527 },
        { label: 'Estatutos de Florida s. 327.32 (2026): embarcaciones como instrumentos peligrosos', url: S.s32732 },
        { label: 'Estatutos de Florida s. 768.81 (2026): culpa comparativa', url: S.s76881 },
        { label: 'Estatutos de Florida s. 627.727 (2026): cobertura de conductor sin seguro', url: S.s627727 },
        { label: 'Constitución de Florida, Artículo X, Sección 4: homestead', url: S.const },
      ],
    },
    ru: {
      title: 'Umbrella-страховка во Флориде: кому она нужна',
      metaTitle: 'Umbrella-страховка во Флориде: кому нужна | M&K Agency',
      description: 'Подросток за рулём, бассейн, собака, лодка или сдаваемое жильё? Что говорит закон Флориды в каждом случае и какие условия ставит зонтичный полис.',
      ogAlt: 'Открытый зонт над домом, машиной, бассейном и небольшой лодкой',
      excerpt: 'Не реклама, а помощь в решении: законы Флориды об ответственности за подростка-водителя, одолженную машину, укус собаки, бассейн и лодку, почему umbrella зависит от базовых полисов и проверка за пять минут.',
      category: 'Umbrella и ответственность',
      body: [
        { type: 'p', text: 'Автостраховка и страховка дома платят по искам только до своего лимита ответственности. Umbrella, или зонтичный полис, — это отдельный полис, который добавляет слой защиты поверх этих лимитов. Нужен он не всем. Разберём, в каких ситуациях во Флориде этот вопрос встаёт чаще всего, что говорит закон в каждой из них и что umbrella требует от вас, прежде чем начнёт платить.' },
        { type: 'h2', text: 'Что umbrella делает и чего не делает' },
        { type: 'p', text: 'По данным Национальной ассоциации страховых комиссаров (NAIC), личный umbrella оплачивает ответственность и расходы на юридическую защиту сверх того, что платит ваш полис на машину, дом или съёмное жильё, и может покрывать некоторые иски, которых основной полис не покрывает вовсе ([NAIC](' + S.naic + ')). Речь о травмах, ущербе имуществу и так называемом personal injury, за которые вас признали ответственным. Страховой регулятор штата Нью-Йорк добавляет: такие полисы обычно покрывают и клевету, незаконный арест, вмешательство в частную жизнь, а лимит у них, как правило, **от $1 миллиона** ([NY DFS](' + S.nydfs + ')).' },
        { type: 'ul', items: [
          'Ремонт **вашего** дома или машины umbrella **не** оплачивает ([NAIC](' + S.naic + ')).',
          'По NAIC, **штрафные убытки** (punitive damages) не покрываются; пример — езда в нетрезвом виде.',
          'Ответственность по страховке дома никогда не распространяется на ДТП: это задача автополиса ([DFS Флориды](' + S.dfsHo + ')).',
        ] },
        { type: 'h2', text: 'Условие, о котором мало кто знает: базовые полисы' },
        { type: 'p', text: 'Umbrella надстраивается над другими полисами, поэтому страховщики обычно требуют держать в них определённые минимальные лимиты ответственности ([NY DFS](' + S.nydfs + ')). Отдел страхования Массачусетса объясняет механику: каждый базовый полис (авто, дом, лодка, внедорожная техника) указан на странице деклараций umbrella, и зонтичный полис платит только после того, как эти лимиты исчерпаны. **Если базовый полис не действует, umbrella может считать его обязательный лимит франшизой, которую вы платите сами** ([Mass. DOI](' + S.mass + ')).' },
        { type: 'p', text: 'Для Флориды это особенно важно: для регистрации машины достаточно $10 000 PIP и $10 000 ответственности за ущерб имуществу, а ответственность за травмы большинству водителей не обязательна ([FLHSMV](' + S.flhsmv + ')). Минимальный автополис почти никогда не проходит по требованиям umbrella. Точные лимиты у страховщиков разные, поэтому уточняйте заранее. Подробнее: [минимальная автостраховка во Флориде](/ru/blog/florida-minimum-car-insurance-requirements) и [ответственность за травмы и FR-44](/ru/blog/bodily-injury-liability-fr44-florida).' },
        { type: 'h2', text: 'Когда во Флориде стоит задуматься об umbrella' },
        { type: 'h3', text: 'В семье есть водитель-подросток' },
        { type: 'p', text: 'Во Флориде родитель или опекун, подписавший заявление несовершеннолетнего на права, отвечает за его неосторожность за рулём: подписавший несёт **солидарную ответственность** вместе с подростком ([ст. 322.09(2)](' + S.s32209 + ')). После серьёзной аварии под удар может попасть имущество того, кто подписал.' },
        { type: 'h3', text: 'Вы одалживаете машину' },
        { type: 'p', text: 'Тот, кто дал машину другому, отвечает за действия водителя в пределах $100 000 на человека и $300 000 на случай по травмам и $50 000 по имуществу. Если у водителя нет страховки или его лимиты в сумме меньше $500 000, владелец может дополнительно ответить **ещё на $500 000** материального ущерба (economic damages) ([ст. 324.021(9)(b)3](' + S.s324021 + ')). Подробнее — в статье [о том, чем рискует владелец, одалживая машину](/ru/blog/lending-your-car-florida-owner-liability).' },
        { type: 'h3', text: 'У вас собака' },
        { type: 'p', text: 'Во Флориде хозяин отвечает, если его собака укусила человека в общественном месте или на частной территории, где тот находился законно, **даже если раньше собака никогда не проявляла агрессии**. Неосторожность пострадавшего уменьшает сумму, а заметная табличка «Bad Dog» служит защитой, но не в случае с ребёнком младше 6 лет и не при небрежности самого хозяина ([ст. 767.04](' + S.s76704 + ')). DFS Флориды предупреждает также, что некоторые породы собак могут закрыть доступ к страховке дома у многих страховщиков ([DFS](' + S.dfsHo + ')).' },
        { type: 'h3', text: 'Бассейн, батут или частые гости во дворе' },
        { type: 'p', text: 'Новый жилой бассейн во Флориде проходит финальную инспекцию, только если у него есть хотя бы одно средство безопасности: ограждение, сертифицированное покрытие, сигнализация на дверях и окнах, самозакрывающиеся двери с защёлкой или датчик в воде ([ст. 515.27](' + S.s51527 + ')). NAIC советует обсудить с агентом бассейн, джакузи или батут до установки и называет umbrella слоем поверх ответственности по дому и лодке ([NAIC](' + S.naicPool + ')).' },
        { type: 'h3', text: 'Лодка или гидроцикл' },
        { type: 'p', text: 'Плавсредства во Флориде считаются «источником повышенной опасности». За неосторожное управление отвечает тот, кто управляет, а владелец — только если он сам за штурвалом или на борту ([ст. 327.32](' + S.s32732 + ')). Если катаете гостей, прочитайте, [как давать гостям управлять гидроциклом](/ru/blog/jet-ski-rental-guest-drivers-florida), и загляните на страницу [страхования лодок](/ru/boat-insurance-florida).' },
        { type: 'h3', text: 'Сдаёте жильё, есть недвижимость или высокий доход' },
        { type: 'p', text: 'Регулятор Массачусетса среди тех, кому стоит подумать об umbrella, называет арендодателей, владельцев бассейнов, семьи с неопытными водителями и владельцев лодок, которые катают гостей ([Mass. DOI](' + S.mass + ')). Для каждого сдаваемого объекта нужен свой полис ответственности, указанный как базовый. Защита homestead во Флориде не даёт принудительно продать ваше основное жильё (с исключениями), но не распространяется на второй дом, сдаваемую недвижимость, банковские счета и инвестиции ([Конституция Флориды, ст. X, разд. 4](' + S.const + ')).' },
        { type: 'h2', text: 'Два правила Флориды, которые влияют на суммы' },
        { type: 'p', text: '**Сравнительная вина.** Возмещение уменьшается на долю вины самого пострадавшего, а с 2023 года тот, кто виноват в собственном вреде больше чем на 50%, не получает ничего (кроме дел о врачебной небрежности) ([ст. 768.81](' + S.s76881 + ')). Это ограничивает часть исков, но не поможет, если основная вина ваша.' },
        { type: 'p', text: '**UM в зонтичном полисе.** Флорида не делает UM обязательным для полиса, который не является основной автостраховкой ответственности, но страховщик должен предложить такое покрытие по вашему письменному запросу — до лимита umbrella по травмам или до $1 миллиона, смотря что меньше ([ст. 627.727(2)](' + S.s627727 + ')). См. [покрытие UM/UIM во Флориде](/ru/blog/uninsured-motorist-coverage-florida).' },
        { type: 'h2', text: 'Проверка за пять минут' },
        { type: 'ol', items: [
          'Найдите лимиты ответственности на страницах деклараций по [машине](/ru/car-insurance-florida-city) и [дому](/ru/homeowners-insurance-florida-city).',
          'Перечислите всех, кто водит в семье, включая подростков и тех, кому вы даёте машину.',
          'Отметьте бассейн, собаку, батут, лодку, гидроцикл или сдаваемые объекты.',
          'Прикиньте, до чего может дотянуться крупное судебное решение: недвижимость вне homestead, инвестиции, будущая зарплата.',
          'Спросите, какие базовые лимиты требует umbrella, и проверьте, что в нём указаны все машины и объекты.',
        ] },
        { type: 'p', text: 'Как устроено покрытие, с реальными делами из Флориды: [гид по umbrella и защите капитала](/ru/protect/umbrella-insurance). Местная информация: [зонтичная страховка во Florida City](/ru/umbrella-insurance-florida-city).' },
        { type: 'callout', title: 'Хотите, чтобы мы проверили ваши лимиты?', text: '[Запросите расчёт](/ru/quote) или позвоните [(305) 859-3953](tel:+13058593953). Лицензированный агент в нашем офисе во Florida City (33550 S Dixie Hwy, Suite 102; пн–пт 9–18, суббота по записи) разберёт с вами базовые лимиты и подскажет, подходит ли вам umbrella, — по-русски, по-английски или по-испански. Это общая информация, а не юридическая консультация; покрытие зависит от полиса и его условий.' },
      ],
      faq: [
        { q: 'Обязательна ли umbrella-страховка по закону Флориды?', a: 'Нет. Закон Флориды требует для регистрации машины только PIP и ответственность за ущерб имуществу. Umbrella — добровольное покрытие, которое выбирают исходя из своих рисков и имущества.' },
        { q: 'Можно ли оформить umbrella при минимальной автостраховке?', a: 'Как правило, нет. Страховщики обычно требуют сначала определённые минимальные лимиты ответственности по машине и дому. Если базовый полис перестал действовать, umbrella может считать этот лимит франшизой.' },
        { q: 'Оплатит ли umbrella ремонт моей машины или дома?', a: 'Нет. Это страхование ответственности за травмы и ущерб, причинённые другим, плюс расходы на защиту. Ваше собственное имущество покрывают авто- и домовой полисы.' },
        { q: 'Я снимаю квартиру. Umbrella мне подходит?', a: 'Да. NAIC отмечает, что umbrella может расширить лимит ответственности не только по страховке дома, но и по полису арендатора.' },
        { q: 'Покроет ли umbrella штрафные убытки после ДТП в нетрезвом виде?', a: 'По данным NAIC, штрафные убытки, например связанные с ездой в нетрезвом виде, зонтичные полисы не покрывают. Проверьте исключения в своём полисе.' },
      ],
      sources: [
        { label: 'NAIC: What’s an Umbrella Policy? (15 декабря 2022 г.)', url: S.naic },
        { label: 'NAIC: Your Annual Insurance Check', url: S.naicAnnual },
        { label: 'NAIC: бассейны, джакузи и игровые конструкции во дворе', url: S.naicPool },
        { label: 'Отдел страхования Массачусетса: Personal Umbrella and Excess Liability Insurance', url: S.mass },
        { label: 'NY DFS: страхование дома, полисы excess и umbrella', url: S.nydfs },
        { label: 'DFS Флориды: Homeowners’ Insurance Toolkit', url: S.dfsHo },
        { label: 'FLHSMV: требования к страховке во Флориде', url: S.flhsmv },
        { label: 'Законы Флориды, ст. 322.09 (2026): заявления несовершеннолетних', url: S.s32209 },
        { label: 'Законы Флориды, ст. 324.021 (2026): владелец, одолживший машину', url: S.s324021 },
        { label: 'Законы Флориды, ст. 767.04 (2026): ответственность владельца собаки', url: S.s76704 },
        { label: 'Законы Флориды, ст. 515.27 (2026): безопасность жилых бассейнов', url: S.s51527 },
        { label: 'Законы Флориды, ст. 327.32 (2026): плавсредства как источник повышенной опасности', url: S.s32732 },
        { label: 'Законы Флориды, ст. 768.81 (2026): сравнительная вина', url: S.s76881 },
        { label: 'Законы Флориды, ст. 627.727 (2026): покрытие UM', url: S.s627727 },
        { label: 'Конституция Флориды, ст. X, разд. 4: homestead', url: S.const },
      ],
    },
  },
};
