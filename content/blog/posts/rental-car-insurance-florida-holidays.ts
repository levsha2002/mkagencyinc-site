import type { BlogPost } from '../types';

// Facts checked 2026-11-02 (ET) against official sources (raw text in /workspace/rental/):
// - 2026 F.S. 627.7263(1)-(2): the lessor's valid and collectible liability/PIP insurance is primary unless
//   otherwise stated in at least 10-point type on the face of the rental/lease agreement; primary for the limits
//   required by ss. 324.021(7) and 627.736; if the lessee's coverage is to be primary, the agreement must contain
//   the statutory sentence ("authorized rental or leasing driver").
// - 2026 F.S. 324.021(7): 10/20/10.
// - 2026 F.S. 324.022(1): PDL 10,000. FLHSMV insurance page: PIP + PDL 10,000 each.
// - 2026 F.S. 627.736(1): PIP 10,000, 80% medical; (4)(e)1 owner injured in this state while occupying a motor
//   vehicle; (4)(e)2 outside this state (U.S., territories, Canada) only while occupying the owner's motor vehicle.
// - 2026 F.S. 324.151(1)(a): owner's policy covers use within the United States or Canada.
// - 2026 F.S. 626.321(1)(d): motor vehicle rental insurance limited license (excess liability, damage to rented
//   vehicle, baggage/personal effects, personal accident); rentals up to 60 days; written notice that the personal
//   policy may provide coverage and that purchase is not required.
// - DFS personal auto overview: coverage definitions; rental reimbursement = replacement transportation after a
//   covered loss.
// - Florida Attorney General "How to Protect Yourself: Car Rentals": CDW exclusions (theft, tires, drugs/alcohol
//   incl. OTC medicine); check own policy/credit card; second driver; inspect + photo; cashless tolls billed later.
// - NAIC auto page (CDW/LDW, comp+collision, personal accident vs PIP/health, personal effects vs home/renters,
//   credit card usually secondary, non-owner policy); Utah Insurance Dept (CDW/LDW, loss of use/admin
//   fees, longer rentals, outside U.S., business travel); Texas DOI (deductible applies; business travel differs).
// No insurers, rental companies or card issuers named; no per-day cost figures.
const S = {
  s6277263: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.7263.html',
  s627736: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.736.html',
  s324021: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0324/Sections/0324.021.html',
  s324022: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0324/Sections/0324.022.html',
  s324151: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0324/Sections/0324.151.html',
  s626321: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0626/Sections/0626.321.html',
  flhsmv: 'https://www.flhsmv.gov/insurance/',
  dfs: 'https://www.myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview',
  ag: 'https://www.myfloridalegal.com/consumer-protection/how-to-protect-yourself-car-rentals',
  naic: 'https://content.naic.org/consumer/auto-insurance.htm',
  utah: 'https://insurance.utah.gov/consumers/auto/rental-car-coverage/',
  tdi: 'https://www.tdi.texas.gov/tips/rental-car-insurance.html',
};

export const post: BlogPost = {
  slug: 'rental-car-insurance-florida-holidays',
  datePublished: '2026-11-02',
  translations: {
    en: {
      title: 'Driving a Rental Car Over the Holidays in Florida: Does Your Policy Follow?',
      metaTitle: 'Does Car Insurance Cover Rental Cars in Florida? | M&K Agency',
      description: 'Renting a car for the holidays? Who pays first under Florida law, what your own auto policy may carry over, and what to check before the rental counter.',
      ogAlt: 'Illustration of a rental car with a key tag parked near palm trees, with a shield and a checklist next to it',
      excerpt: 'Florida law decides whose insurance pays first in a rental car, but your own policy decides much of the rest. What to check before you sign at the counter.',
      category: 'Car insurance',
      body: [
        { type: 'p', text: 'Thanksgiving and the December holidays are when many South Florida families rent a car: relatives fly into Miami, the family car is too small, or you are flying out and picking up a car somewhere else. At the counter you get about a minute to accept or decline several coverage options. It is better to decide now, with your policy in front of you. Here is what Florida law says, what your own policy may bring along, and what to ask your agent.' },
        { type: 'h2', text: 'The short answer' },
        { type: 'p', text: 'Your own auto policy may already cover part of what is sold at the rental counter, but policies differ, and not every part of a policy works the same way in a rental. What carries over depends on the coverages you bought and on your policy wording. State insurance regulators give the same advice: read your policy or call your agent before you reach the counter ([NAIC](' + S.naic + '); [Utah Insurance Department](' + S.utah + ')). Florida law adds one rule of its own about whose insurance pays first.' },
        { type: 'h2', text: 'Who pays first in Florida: s. 627.7263' },
        { type: 'p', text: 'Under [s. 627.7263, Florida Statutes](' + S.s6277263 + '), the liability and personal injury protection (PIP) insurance that covers the **rental or leasing company** is **primary**, unless the rental agreement says otherwise in at least 10-point type on its face. The company’s coverage is primary only up to the state minimums: 10/20/10 liability under [s. 324.021(7)](' + S.s324021 + ') and $10,000 PIP under [s. 627.736](' + S.s627736 + ').' },
        { type: 'p', text: 'The law also lets the company shift that role to you. If the agreement contains the statutory sentence saying that the renter’s “valid and collectible liability insurance and personal injury protection insurance” is primary, **your own policy pays first**. So read the front page of the agreement, not just the total.' },
        { type: 'p', text: 'The primary rule covers only liability and PIP, and only up to the minimums. It says nothing about **damage to the rental car itself**, which is usually your responsibility under the contract.' },
        { type: 'h2', text: 'What your own Florida policy may bring along' },
        { type: 'p', text: 'Check your declarations page coverage by coverage:' },
        { type: 'ul', items: [
          '**Bodily injury and property damage liability.** These pay for harm you cause to others. Florida only requires $10,000 of property damage liability ([s. 324.022](' + S.s324022 + '); [FLHSMV](' + S.flhsmv + ')), so a crash in a newer rental can go past the minimum quickly. Our guide to [Florida minimum car insurance](/en/blog/florida-minimum-car-insurance-requirements) explains what the minimum leaves out.',
          '**PIP.** Florida PIP pays 80% of reasonable medical expenses up to $10,000, regardless of fault ([s. 627.736(1)](' + S.s627736 + ')). The law requires your insurer to cover you for an injury **in Florida** while occupying *a* motor vehicle, not only your own car ([s. 627.736(4)(e)1](' + S.s627736 + ')).',
          '**Collision and comprehensive.** These repair or replace a covered car after a crash, theft, flood or other loss ([DFS](' + S.dfs + ')). If you carry them on your own car, ask whether and how they apply to a rental; the regulators say that with both coverages you are less likely to need the counter’s damage waiver ([NAIC](' + S.naic + ')). Your deductible still applies ([Texas Department of Insurance](' + S.tdi + ')). See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
        ] },
        { type: 'callout', title: 'Rental reimbursement is a different coverage', text: 'The “rental” line on many Florida policies is **rental reimbursement**: it pays for replacement transportation, up to the limit shown, when your own car cannot be driven after a covered loss ([DFS](' + S.dfs + ')). It does not by itself insure a car you rent for a holiday trip.' },
        { type: 'h2', text: 'Damage to the rental car and the counter options' },
        { type: 'p', text: 'The collision or loss damage waiver (CDW/LDW) releases you from charges for damage to the rental car. The Florida Attorney General warns that the waiver may still exclude theft, tire damage or a driver who has taken drugs or alcohol, even an over-the-counter cold medicine, and suggests checking your own policy or credit card agreement first ([Florida Attorney General](' + S.ag + ')).' },
        { type: 'p', text: 'Read the agreement for **loss of use** and administrative fees: after an accident the company may charge for the time the car cannot be rented, so ask how your own policy handles these charges ([Utah Insurance Department](' + S.utah + ')). Credit card benefits, where they exist, are usually **secondary**, paying after other insurance ([NAIC](' + S.naic + ')).' },
        { type: 'p', text: 'In Florida, insurance sold at the rental counter is a limited line under [s. 626.321(1)(d)](' + S.s626321 + '). It can include excess liability, damage to the rented car, baggage, and injury to the renter and passengers. It is allowed only for rentals of up to 60 days, and you must receive **written notice** that your personal policy may already cover these risks and that buying the coverage is **not required** to rent the car.' },
        { type: 'h2', text: 'Renting outside Florida' },
        { type: 'p', text: 'If you fly to see family and rent a car there, two Florida rules matter:' },
        { type: 'ul', items: [
          'The PIP that Florida law requires covers you **outside Florida** (in the U.S., its territories or Canada) only while you occupy **your own** insured car ([s. 627.736(4)(e)2](' + S.s627736 + ')). For an injury in a rental in another state, check your policy, any medical payments coverage and your health insurance.',
          'A Florida liability policy used as proof of financial responsibility covers use in the United States and Canada ([s. 324.151(1)(a)](' + S.s324151 + ')). Driving into Mexico or renting abroad needs its own check; regulators note that policies may exclude other countries ([Utah Insurance Department](' + S.utah + ')).',
        ] },
        { type: 'h2', text: 'A quick checklist before you pick up the keys' },
        { type: 'ol', items: [
          '**Who will drive?** A low rate may not include a second driver ([Florida Attorney General](' + S.ag + ')). Add every driver to the agreement; s. 627.7263 speaks of an “authorized” driver.',
          '**Personal or business trip?** A personal policy generally does not apply to business travel, so check with your employer ([Utah Insurance Department](' + S.utah + ')).',
          '**How long?** Longer rentals, a week, a month or more, may run into policy limits ([Utah Insurance Department](' + S.utah + ')).',
          '**Inspect the car.** Note every scratch with the agent and take photos before you leave the lot ([Florida Attorney General](' + S.ag + ')).',
          '**Tolls.** Florida has cashless tolls, and the toll plus the company’s toll fee may reach your card days after you return the car. Ask how it is billed ([Florida Attorney General](' + S.ag + ')).',
        ] },
        { type: 'h2', text: 'What to ask your agent' },
        { type: 'ul', items: [
          'Does my liability carry over to a rental, and are my limits enough for a newer car?',
          'Do my collision and comprehensive apply to a rental, with what deductible, and what about loss of use and fees?',
          'Who is covered if a relative or friend drives the rental?',
          'Does anything change for a rental outside Florida or outside the U.S.?',
          'If I don’t own a car, is a non-owner policy worth a look? ([NAIC](' + S.naic + ')) See our [non-owner SR-22 guide](/en/blog/non-owner-sr22-florida) if you also need a filing.',
        ] },
        { type: 'p', text: 'Lending your own car to visiting relatives is a separate topic; see [lending your car in Florida](/en/blog/lending-your-car-florida-owner-liability). For a review of your declarations page before the trip, visit our [Florida City car insurance page](/en/car-insurance-florida-city), [request a quote](/en/quote) or call [(305) 859-3953](tel:+13058593953). We will go through what your policy says about rentals; the policy wording always decides.' },
      ],
      faq: [
        { q: 'Does my Florida car insurance cover a rental car?', a: 'It may cover part of it for personal use, but it depends on the coverages you bought and the policy wording. Liability, PIP, collision and comprehensive each work differently, so check them one by one with your agent.' },
        { q: 'Whose insurance is primary in a Florida rental car?', a: 'Under s. 627.7263, the rental company’s liability and PIP coverage is primary up to the state minimums, unless the agreement states in at least 10-point type that the renter’s insurance is primary.' },
        { q: 'Do I have to buy the rental company’s coverage?', a: 'No. Florida law requires the company to tell you in writing that buying it is not required and that your own policy may already cover those risks.' },
        { q: 'Does my Florida PIP cover me in a rental car in another state?', a: 'The PIP Florida requires covers you outside Florida only while you are in your own insured car. Check your policy, medical payments coverage and health insurance before renting out of state.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 627.7263 (2026): rental and leasing driver’s insurance to be primary; exception', url: S.s6277263 },
        { label: 'Florida Statutes s. 627.736 (2026): required personal injury protection benefits', url: S.s627736 },
        { label: 'Florida Statutes s. 324.021 (2026): definitions and minimum limits', url: S.s324021 },
        { label: 'Florida Statutes s. 324.022 (2026): financial responsibility for property damage', url: S.s324022 },
        { label: 'Florida Statutes s. 324.151 (2026): motor vehicle liability policies; required provisions', url: S.s324151 },
        { label: 'Florida Statutes s. 626.321 (2026): limited licenses; motor vehicle rental insurance', url: S.s626321 },
        { label: 'FLHSMV: Florida insurance requirements', url: S.flhsmv },
        { label: 'Florida Department of Financial Services: Personal automobile insurance overview', url: S.dfs },
        { label: 'Florida Attorney General: How to protect yourself, car rentals', url: S.ag },
        { label: 'NAIC: Auto insurance, rental car insurance', url: S.naic },
        { label: 'Utah Insurance Department: Rental car coverage', url: S.utah },
        { label: 'Texas Department of Insurance: Do I need to buy insurance when I rent a car?', url: S.tdi },
      ],
    },
    es: {
      title: 'Rentar un carro en las fiestas en Florida: ¿su seguro lo acompaña?',
      metaTitle: '¿Su seguro de auto cubre un carro rentado en Florida? | M&K Agency',
      description: '¿Va a rentar un carro en las fiestas? Quién paga primero según la ley de Florida, qué parte de su póliza lo acompaña y qué revisar antes de firmar.',
      ogAlt: 'Ilustración de un carro rentado con una etiqueta de llave, estacionado junto a palmeras, con un escudo y una lista de verificación al lado',
      excerpt: 'La ley de Florida decide qué seguro paga primero en un carro rentado, pero su propia póliza decide casi todo lo demás. Qué revisar antes de firmar en el mostrador.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'En Thanksgiving y en diciembre muchas familias del sur de Florida rentan un carro: llegan parientes a Miami, el carro de la casa se queda chico o usted viaja y renta allá. En el mostrador le pedirán aceptar o rechazar varias coberturas en un minuto. Mejor decidirlo ahora, con su póliza en la mano: qué dice la ley de Florida, qué lo acompaña de su póliza y qué preguntarle a su agente.' },
        { type: 'h2', text: 'La respuesta corta' },
        { type: 'p', text: 'Su póliza de auto puede cubrir ya parte de lo que venden en el mostrador, pero las pólizas varían y no todas sus partes funcionan igual en un carro rentado. Depende de lo que usted compró y de la redacción de la póliza. Los reguladores aconsejan leer la póliza o llamar a su agente antes de llegar al mostrador ([NAIC](' + S.naic + '); [Departamento de Seguros de Utah](' + S.utah + ')). Florida añade su propia regla sobre qué seguro paga primero.' },
        { type: 'h2', text: 'Quién paga primero en Florida: la sección 627.7263' },
        { type: 'p', text: 'Según la [sección 627.7263 de los Estatutos de Florida](' + S.s6277263 + '), el seguro de responsabilidad civil y de protección contra lesiones personales (PIP) de la **compañía de alquiler** es el **primario**, salvo que el contrato diga otra cosa en letra de al menos 10 puntos en la primera página. Es primario solo hasta los mínimos del estado: responsabilidad 10/20/10 según la [sección 324.021(7)](' + S.s324021 + ') y $10,000 de PIP según la [sección 627.736](' + S.s627736 + ').' },
        { type: 'p', text: 'La compañía puede pasarle ese papel a usted: si el contrato incluye la frase del estatuto que dice que el seguro de responsabilidad civil y de PIP “válido y cobrable” del conductor es el primario, **su póliza paga primero**. Por eso conviene leer la primera página del contrato, no solo el total.' },
        { type: 'p', text: 'La regla del seguro primario cubre solo responsabilidad civil y PIP, y solo hasta los mínimos. No habla de los **daños al propio carro rentado**, que por contrato suelen correr por su cuenta.' },
        { type: 'h2', text: 'Qué puede acompañarlo de su propia póliza' },
        { type: 'p', text: 'Revise su página de declaraciones cobertura por cobertura:' },
        { type: 'ul', items: [
          '**Responsabilidad civil por lesiones y por daños a la propiedad.** Pagan el daño que usted cause a otros. Florida solo exige $10,000 de responsabilidad por daños a la propiedad ([sección 324.022](' + S.s324022 + '); [FLHSMV](' + S.flhsmv + ')), y un choque con un carro nuevo lo supera rápido. Nuestra guía del [seguro mínimo en Florida](/es/blog/florida-minimum-car-insurance-requirements) explica lo que el mínimo deja fuera.',
          '**PIP.** El PIP de Florida paga el 80% de los gastos médicos razonables hasta $10,000, sin importar quién tuvo la culpa ([sección 627.736(1)](' + S.s627736 + ')). La ley obliga a su aseguradora a cubrirlo por una lesión **dentro de Florida** mientras va en *cualquier* vehículo de motor, no solo en el suyo ([sección 627.736(4)(e)1](' + S.s627736 + ')).',
          '**Colisión y cobertura amplia (comprehensive).** Reparan o reponen un carro cubierto después de un choque, robo, inundación u otra pérdida ([DFS](' + S.dfs + ')). Si las tiene, pregunte si aplican al carro rentado y cómo; según los reguladores, con ambas es menos probable que necesite la exención de daños del mostrador ([NAIC](' + S.naic + ')). Su deducible sigue aplicando ([Departamento de Seguros de Texas](' + S.tdi + ')). Vea [cobertura amplia vs. colisión](/es/blog/comprehensive-vs-collision-florida).',
        ] },
        { type: 'callout', title: 'El reembolso de alquiler es otra cobertura', text: 'La línea “rental” de muchas pólizas es el **reembolso de alquiler**: paga transporte de reemplazo, hasta el límite indicado, cuando su carro no se puede manejar tras una pérdida cubierta ([DFS](' + S.dfs + ')). No asegura por sí sola el carro que renta para las fiestas.' },
        { type: 'h2', text: 'Daños al carro rentado y lo que ofrecen en el mostrador' },
        { type: 'p', text: 'La exención de daños por colisión o pérdida (CDW/LDW) lo libera de los cargos por daños al carro rentado. La Fiscalía General de Florida advierte que la exención puede excluir el robo, las llantas o al conductor que haya tomado drogas o alcohol, incluso un antigripal sin receta, y recomienda revisar antes su póliza o su tarjeta de crédito ([Fiscalía General de Florida](' + S.ag + ')).' },
        { type: 'p', text: 'Busque en el contrato los cargos por **pérdida de uso** y administrativos: después de un accidente la compañía puede cobrar el tiempo en que el carro no se puede rentar; pregunte cómo trata su póliza esos cargos ([Departamento de Seguros de Utah](' + S.utah + ')). Los beneficios de tarjetas de crédito suelen ser **secundarios**: pagan después de otros seguros ([NAIC](' + S.naic + ')).' },
        { type: 'p', text: 'El seguro que se vende en el mostrador es una línea limitada según la [sección 626.321(1)(d)](' + S.s626321 + '). Puede incluir responsabilidad civil en exceso, daños al carro, equipaje y lesiones del conductor y los pasajeros. Solo se permite en alquileres de hasta 60 días, y usted debe recibir un **aviso por escrito** de que su póliza personal puede ya cubrir esos riesgos y de que comprarlo **no es obligatorio** para rentar.' },
        { type: 'h2', text: 'Si renta fuera de Florida' },
        { type: 'p', text: 'Si viaja a ver a la familia y renta allá, importan dos reglas de Florida:' },
        { type: 'ul', items: [
          'El PIP que exige la ley de Florida lo cubre **fuera de Florida** (en EE. UU., sus territorios o Canadá) solo mientras va en **su propio** carro asegurado ([sección 627.736(4)(e)2](' + S.s627736 + ')). Para una lesión en un carro rentado en otro estado, revise su póliza, el Med Pay si lo tiene y su seguro de salud.',
          'La póliza de responsabilidad civil de Florida que sirve como prueba de responsabilidad financiera cubre Estados Unidos y Canadá ([sección 324.151(1)(a)](' + S.s324151 + ')). Para México u otro país, revise aparte: las pólizas pueden excluir otros países ([Departamento de Seguros de Utah](' + S.utah + ')).',
        ] },
        { type: 'h2', text: 'Lista rápida antes de recoger las llaves' },
        { type: 'ol', items: [
          '**¿Quién va a manejar?** Una tarifa baja puede no incluir un segundo conductor ([Fiscalía General de Florida](' + S.ag + ')). Ponga a cada conductor en el contrato.',
          '**¿Viaje personal o de trabajo?** La póliza personal por lo general no aplica a viajes de negocios; consulte a su empleador ([Departamento de Seguros de Utah](' + S.utah + ')).',
          '**¿Por cuánto tiempo?** Un alquiler de una semana, un mes o más puede tener límites en la póliza ([Departamento de Seguros de Utah](' + S.utah + ')).',
          '**Revise el carro.** Anote cada rayón con el empleado y tome fotos antes de salir ([Fiscalía General de Florida](' + S.ag + ')).',
          '**Peajes.** Los peajes de Florida son sin efectivo; el peaje y el cargo de la compañía pueden llegar a su tarjeta días después. Pregunte cómo se cobra ([Fiscalía General de Florida](' + S.ag + ')).',
        ] },
        { type: 'h2', text: 'Qué preguntarle a su agente' },
        { type: 'ul', items: [
          '¿Mi responsabilidad civil me acompaña y mis límites alcanzan para un carro nuevo?',
          '¿Mi colisión y mi cobertura amplia aplican al carro rentado? ¿Con qué deducible? ¿Y la pérdida de uso?',
          '¿Quién está cubierto si maneja un pariente o amigo?',
          '¿Cambia algo fuera de Florida o de EE. UU.?',
          'Si no tengo carro, ¿me conviene una póliza de no propietario? ([NAIC](' + S.naic + ')) Si además necesita un formulario, vea nuestra [guía del SR-22 de no propietario](/es/blog/non-owner-sr22-florida).',
        ] },
        { type: 'p', text: 'Prestarles su carro a los parientes es otro tema; vea [prestar su carro en Florida](/es/blog/lending-your-car-florida-owner-liability). Para revisar su página de declaraciones antes del viaje, visite nuestra [página de seguro de carro en Florida City](/es/car-insurance-florida-city), [pida una cotización](/es/quote) o llame al [(305) 859-3953](tel:+13058593953). Le explicamos qué dice su póliza sobre carros rentados; siempre decide la redacción de la póliza.' },
      ],
      faq: [
        { q: '¿Mi seguro de auto de Florida cubre un carro rentado?', a: 'Puede cubrir una parte para uso personal, pero depende de lo que compró y de la póliza. Revise con su agente cada cobertura: responsabilidad civil, PIP, colisión y amplia.' },
        { q: '¿Qué seguro es el primario en un carro rentado en Florida?', a: 'Según la sección 627.7263, el de la compañía de alquiler (responsabilidad civil y PIP), hasta los mínimos del estado, salvo que el contrato diga en letra de 10 puntos o más que el primario es el del conductor.' },
        { q: '¿Tengo que comprar el seguro de la compañía de alquiler?', a: 'No. La ley de Florida obliga a la compañía a avisarle por escrito que no es obligatorio y que su propia póliza puede cubrir ya esos riesgos.' },
        { q: '¿Mi PIP de Florida me cubre en un carro rentado en otro estado?', a: 'El PIP obligatorio lo cubre fuera de Florida solo en su propio carro asegurado. Revise su póliza, el Med Pay y su seguro de salud antes del viaje.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 627.7263 (2026): seguro primario en alquiler y arrendamiento', url: S.s6277263 },
        { label: 'Estatutos de Florida, sección 627.736 (2026): beneficios obligatorios de PIP', url: S.s627736 },
        { label: 'Estatutos de Florida, sección 324.021 (2026): definiciones y límites mínimos', url: S.s324021 },
        { label: 'Estatutos de Florida, sección 324.022 (2026): responsabilidad financiera por daños a la propiedad', url: S.s324022 },
        { label: 'Estatutos de Florida, sección 324.151 (2026): pólizas de responsabilidad civil de vehículos', url: S.s324151 },
        { label: 'Estatutos de Florida, sección 626.321 (2026): licencias limitadas; seguro de alquiler de vehículos', url: S.s626321 },
        { label: 'FLHSMV: requisitos de seguro en Florida (en inglés)', url: S.flhsmv },
        { label: 'Departamento de Servicios Financieros de Florida: seguro de auto personal (en inglés)', url: S.dfs },
        { label: 'Fiscalía General de Florida: cómo protegerse al rentar un carro (en inglés)', url: S.ag },
        { label: 'NAIC: seguro de auto y de carros rentados (en inglés)', url: S.naic },
        { label: 'Departamento de Seguros de Utah: cobertura de carros rentados (en inglés)', url: S.utah },
        { label: 'Departamento de Seguros de Texas: ¿necesito comprar seguro al rentar un carro? (en inglés)', url: S.tdi },
      ],
    },
    ru: {
      title: 'Аренда машины на праздники во Флориде: действует ли ваша страховка?',
      metaTitle: 'Покрывает ли автостраховка арендованную машину? | M&K Agency',
      description: 'Берёте машину напрокат на Thanksgiving или праздники? Чья страховка платит первой по закону Флориды, что даёт ваш полис и что проверить до стойки проката.',
      ogAlt: 'Иллюстрация: арендованная машина с биркой на ключе у пальм, рядом щит и чек-лист',
      excerpt: 'Закон Флориды определяет, чья страховка платит первой в арендованной машине, но почти всё остальное зависит от вашего полиса. Что проверить, прежде чем подписывать договор.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'На Thanksgiving и декабрьские праздники многие семьи в Южной Флориде берут машину напрокат: прилетают родственники, своя машина мала, или вы сами летите в другой город и арендуете машину там. У стойки проката вам за минуту предложат принять или отказаться от нескольких видов покрытия. Решать лучше заранее, с полисом в руках. Разберём, что говорит закон Флориды об арендованных машинах, какие части вашего полиса могут на них распространяться и что спросить у агента перед поездкой.' },
        { type: 'h2', text: 'Коротко' },
        { type: 'p', text: 'Ваш автополис может уже покрывать часть того, что предлагают у стойки проката, но полисы бывают разные, и не все их разделы одинаково работают для арендованной машины. Всё зависит от того, какие покрытия вы купили и как написан ваш полис. Страховые регуляторы советуют одно и то же: прочитайте полис или позвоните агенту до того, как подойдёте к стойке ([NAIC](' + S.naic + '); [Департамент страхования Юты](' + S.utah + ')). У Флориды есть и своё правило о том, чья страховка платит первой.' },
        { type: 'h2', text: 'Кто платит первым во Флориде: ст. 627.7263' },
        { type: 'p', text: 'По [ст. 627.7263 Законов Флориды](' + S.s6277263 + ') страховка ответственности и PIP (страхование от травм) **прокатной компании** является **первичной**, если в договоре аренды на первой странице шрифтом не меньше 10 пунктов не сказано иное. Первичной она считается только в пределах минимумов штата: ответственность 10/20/10 по [ст. 324.021(7)](' + S.s324021 + ') и $10 000 PIP по [ст. 627.736](' + S.s627736 + ').' },
        { type: 'p', text: 'Закон позволяет компании переложить эту роль на вас. Если в договоре есть фраза из закона о том, что «действующая и подлежащая взысканию» страховка ответственности и PIP арендатора является первичной, **первым платит ваш полис**. Поэтому читайте первую страницу договора, а не только итоговую сумму.' },
        { type: 'p', text: 'Правило о первичной страховке касается только ответственности и PIP и только в пределах минимумов. О **повреждении самой арендованной машины** в нём ничего нет, а по договору за неё обычно отвечаете вы.' },
        { type: 'h2', text: 'Что может дать ваш собственный полис' },
        { type: 'p', text: 'Откройте страницу деклараций (declarations page) и пройдитесь по каждому покрытию:' },
        { type: 'ul', items: [
          '**Ответственность за травмы и ущерб имуществу.** Оплачивает вред, который вы причинили другим. Флорида требует всего $10 000 ответственности за ущерб имуществу ([ст. 324.022](' + S.s324022 + '); [FLHSMV](' + S.flhsmv + ')), а авария на новой арендованной машине легко выходит за этот минимум. Что минимум не покрывает, мы разбирали в статье о [минимальной автостраховке во Флориде](/ru/blog/florida-minimum-car-insurance-requirements).',
          '**PIP.** Флоридский PIP оплачивает 80% разумных медицинских расходов в пределах $10 000 независимо от того, кто виноват ([ст. 627.736(1)](' + S.s627736 + ')). По закону страховщик обязан покрыть вашу травму **во Флориде**, полученную в *любом* автомобиле, а не только в вашем ([ст. 627.736(4)(e)1](' + S.s627736 + ')).',
          '**Collision и comprehensive.** Оплачивают ремонт или замену застрахованной машины после аварии, угона, наводнения и других случаев ([DFS](' + S.dfs + ')). Если они есть на вашей машине, уточните, распространяются ли они на арендованную и как; по словам регуляторов, с обоими покрытиями отказ от ущерба у стойки вам, скорее всего, не понадобится ([NAIC](' + S.naic + ')). Франшиза при этом остаётся ([Департамент страхования Техаса](' + S.tdi + ')). Подробнее в статье [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida).',
        ] },
        { type: 'callout', title: 'Rental reimbursement — это другое покрытие', text: 'Строка «rental» во многих флоридских полисах — это **rental reimbursement**: оплата замены транспорта в пределах указанного лимита, когда ваша машина не на ходу после страхового случая ([DFS](' + S.dfs + ')). Само по себе это покрытие не страхует машину, которую вы берёте напрокат на праздники.' },
        { type: 'h2', text: 'Повреждение арендованной машины и что предлагают у стойки' },
        { type: 'p', text: 'Отказ от претензий за ущерб (CDW/LDW) освобождает вас от расходов за повреждение арендованной машины. Генеральный прокурор Флориды предупреждает, что такой отказ может не действовать при угоне, повреждении шин или если водитель принимал наркотики или алкоголь, даже обычное лекарство от простуды без рецепта, и советует сначала проверить свой полис или условия кредитной карты ([Генеральный прокурор Флориды](' + S.ag + ')).' },
        { type: 'p', text: 'Поищите в договоре плату за **простой машины** (loss of use) и административные сборы: после аварии компания может выставить счёт за время, когда машину нельзя сдавать, поэтому спросите, как ваш полис относится к таким сборам ([Департамент страхования Юты](' + S.utah + ')). Защита от кредитных карт, если она есть, обычно **вторична** и платит после другой страховки ([NAIC](' + S.naic + ')).' },
        { type: 'p', text: 'Страховка, которую продают у стойки проката во Флориде, — это ограниченная лицензия по [ст. 626.321(1)(d)](' + S.s626321 + '). Она может включать дополнительную ответственность сверх лимитов компании, ущерб арендованной машине, багаж и личные вещи, а также травмы арендатора и пассажиров. Её можно продавать только при аренде до 60 дней, и вам обязаны **письменно сообщить**, что ваш личный полис может уже покрывать эти риски и что покупать её для аренды **не обязательно**.' },
        { type: 'h2', text: 'Если берёте машину за пределами Флориды' },
        { type: 'p', text: 'Если вы летите к родным и арендуете машину там, важны два правила Флориды:' },
        { type: 'ul', items: [
          'Обязательный по закону PIP покрывает вас **за пределами Флориды** (в США, на их территориях или в Канаде) только в **вашей собственной** застрахованной машине ([ст. 627.736(4)(e)2](' + S.s627736 + ')). На случай травмы в арендованной машине в другом штате проверьте, что сделают ваш полис, покрытие медицинских расходов (Med Pay), если оно есть, и медицинская страховка.',
          'Флоридский полис ответственности, который служит доказательством финансовой ответственности, действует в США и Канаде ([ст. 324.151(1)(a)](' + S.s324151 + ')). Поездку в Мексику или аренду за границей нужно проверять отдельно: регуляторы предупреждают, что полисы могут исключать другие страны ([Департамент страхования Юты](' + S.utah + ')).',
        ] },
        { type: 'h2', text: 'Короткий чек-лист перед тем, как взять ключи' },
        { type: 'ol', items: [
          '**Кто будет за рулём?** Низкий тариф может не включать второго водителя ([Генеральный прокурор Флориды](' + S.ag + ')). Впишите в договор каждого водителя: ст. 627.7263 говорит об «уполномоченном» водителе.',
          '**Личная поездка или рабочая?** Личный полис, как правило, не действует в деловых поездках, уточните у работодателя ([Департамент страхования Юты](' + S.utah + ')).',
          '**На какой срок?** При долгой аренде, на неделю, месяц и больше, могут действовать ограничения полиса ([Департамент страхования Юты](' + S.utah + ')).',
          '**Осмотрите машину.** Отметьте каждую царапину с сотрудником проката и сфотографируйте машину до выезда со стоянки ([Генеральный прокурор Флориды](' + S.ag + ')).',
          '**Платные дороги.** Во Флориде проезд оплачивается без наличных, и сам проезд плюс сбор компании могут списать с карты через несколько дней после возврата машины. Спросите, как это начисляется ([Генеральный прокурор Флориды](' + S.ag + ')).',
        ] },
        { type: 'h2', text: 'Что спросить у агента' },
        { type: 'ul', items: [
          'Распространяется ли моя ответственность на арендованную машину и хватит ли лимитов, если машина новая?',
          'Действуют ли мои collision и comprehensive для арендованной машины, с какой франшизой и что с простоем и сборами?',
          'Кто застрахован, если за руль сядет родственник или друг?',
          'Меняется ли что-то при аренде за пределами Флориды или США?',
          'Если своей машины нет, стоит ли посмотреть полис для невладельца? ([NAIC](' + S.naic + ')) Если нужна ещё и справка SR-22, см. статью [non-owner SR-22](/ru/blog/non-owner-sr22-florida).',
        ] },
        { type: 'p', text: 'Дать свою машину приехавшим родственникам — отдельный вопрос, см. статью о том, [как давать машину другим во Флориде](/ru/blog/lending-your-car-florida-owner-liability). Чтобы перед поездкой разобрать страницу деклараций, зайдите на нашу [страницу автострахования во Флорида-Сити](/ru/car-insurance-florida-city), [запросите расчёт](/ru/quote) или позвоните по номеру [(305) 859-3953](tel:+13058593953). Мы объясним, что ваш полис говорит об аренде; решающее значение всегда имеет текст полиса.' },
      ],
      faq: [
        { q: 'Покрывает ли моя флоридская автостраховка арендованную машину?', a: 'Может покрывать часть рисков при аренде для личных целей, но это зависит от купленных покрытий и текста полиса. Ответственность, PIP, collision и comprehensive работают по-разному, поэтому проверьте каждое с агентом.' },
        { q: 'Чья страховка первична в арендованной машине во Флориде?', a: 'По ст. 627.7263 страховка ответственности и PIP прокатной компании первична в пределах минимумов штата, если в договоре шрифтом не меньше 10 пунктов не указано, что первична страховка арендатора.' },
        { q: 'Обязан ли я покупать страховку прокатной компании?', a: 'Нет. Закон Флориды требует, чтобы компания письменно сообщила вам, что покупка не обязательна и ваш полис может уже покрывать эти риски.' },
        { q: 'Покрывает ли флоридский PIP аренду в другом штате?', a: 'Обязательный PIP Флориды действует за пределами штата только в вашей собственной застрахованной машине. Перед арендой в другом штате проверьте полис, Med Pay и медицинскую страховку.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 627.7263 (2026): первичность страховки при аренде и лизинге', url: S.s6277263 },
        { label: 'Законы Флориды, ст. 627.736 (2026): обязательные выплаты PIP', url: S.s627736 },
        { label: 'Законы Флориды, ст. 324.021 (2026): определения и минимальные лимиты', url: S.s324021 },
        { label: 'Законы Флориды, ст. 324.022 (2026): финансовая ответственность за ущерб имуществу', url: S.s324022 },
        { label: 'Законы Флориды, ст. 324.151 (2026): полисы ответственности владельцев ТС', url: S.s324151 },
        { label: 'Законы Флориды, ст. 626.321 (2026): ограниченные лицензии; страхование при аренде ТС', url: S.s626321 },
        { label: 'FLHSMV: требования к страхованию во Флориде (на англ.)', url: S.flhsmv },
        { label: 'Департамент финансовых услуг Флориды: личное автострахование (на англ.)', url: S.dfs },
        { label: 'Генеральный прокурор Флориды: как защитить себя при аренде машины (на англ.)', url: S.ag },
        { label: 'NAIC: автострахование и страховка при аренде (на англ.)', url: S.naic },
        { label: 'Департамент страхования Юты: покрытие арендованных машин (на англ.)', url: S.utah },
        { label: 'Департамент страхования Техаса: нужна ли страховка при аренде машины (на англ.)', url: S.tdi },
      ],
    },
  },
};
