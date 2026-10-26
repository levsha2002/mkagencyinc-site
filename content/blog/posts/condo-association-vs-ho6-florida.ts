import type { BlogPost } from '../types';

// Facts checked 2026-10-26 against official sources:
// - 2026 F.S. 718.111(11): applies to every residential condominium regardless of declaration date;
//   (a) adequate property insurance, replacement cost by independent appraisal at least every 3 years;
//   (c) deductibles set by the board at a meeting, based on available funds/reserves or assessment authority;
//   (e) association MAY buy flood insurance for common elements, association property and units;
//   (f) master policy gives primary coverage to condo property as originally installed (or like kind and
//   quality) and to alterations/additions under s. 718.113(2); must exclude personal property in the unit or
//   limited common elements, floor/wall/ceiling coverings, electrical fixtures, appliances, water heaters,
//   water filters, built-in cabinets and countertops, window treatments (incl. hardware), or replacements,
//   located within the unit and serving only it; that property and its insurance are the owner's
//   responsibility; (g)1-2 association does reconstruction, owner work only with prior written board
//   consent and permits, owner pays for reconstruction of portions he must insure (collectible as an
//   assessment); (h) fidelity coverage for persons who control or disburse funds; (j) repairs after an
//   insurable event are a common expense, deductibles and damage above coverage are a common expense, except
//   owner responsibility for intentional conduct/negligence/rule violations by owner, family, tenants,
//   guests or invitees (also for other owners' personal property), and no obligation for losses not reported
//   until after the association's claim was settled or denied as untimely; (k),(m) opt-out by majority of
//   total voting interests, notice recorded; (n) no obligation for non-standard improvements that benefit
//   only one unit.
// - 2026 F.S. 718.111(12): current insurance policies are official records; available within 10 working
//   days of a written request.
// - 2026 F.S. 718.113(2): material alterations/substantial additions to common elements or association
//   property.
// - 2026 F.S. 627.714(1),(2),(4): $2,000 loss assessment minimum, deductible max $250 (none if a deductible
//   already applied to the owner's other loss from the same event), loss must be of a type the owner's policy
//   covers; limit in effect 1 day before the occurrence; owner policy is excess over other insurance on the
//   same property.
// - FL DFS Homeowners Insurance Toolkit: HO-6 covers personal property, building items not insured by the
//   association, liability; raise limits after upgrades; association policy pays first when both cover;
//   seawall/flood loss assessment example; DBPR condo division phone (850) 488-1122 (also on the DBPR page).
// - Citizens: "Coverages Explained: Condo vs Homeowners" (request the association policy from the board);
//   Residential Policies (HO-6/HW-6 for owners who live in the unit; no building exterior).
// - 44 CFR Part 61 App. A(1) (Dwelling Form: unit owner building coverage alongside an RCBAP, $250,000
//   combined cap, damage paid once, loss assessments for flood, no assessments from the association's
//   deductible) and App. A(3) (RCBAP personal property only if owned in common or by the association).
// No carrier names, no premium figures.
const S = {
  s718111: 'https://www.flsenate.gov/Laws/Statutes/2026/718.111',
  s718113: 'https://www.flsenate.gov/Laws/Statutes/2026/718.113',
  s627714: 'https://www.flsenate.gov/Laws/Statutes/2026/627.714',
  dfs: 'https://www.myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---homeowners-insurance-toolkit.pdf',
  dbpr: 'https://www2.myfloridalicense.com/condos-timeshares-mobile-homes/',
  citizensCondo: 'https://www.citizensfla.com/-/coverages-explained-condo-vs-homeowners-insurance',
  citizensPolicies: 'https://www.citizensfla.com/-/residential-policies',
  sfipDwelling: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/appendix-Appendix%20A(1)%20to%20Part%2061',
  sfipRcbap: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/appendix-Appendix%20A(3)%20to%20Part%2061',
};

export const post: BlogPost = {
  slug: 'condo-association-vs-ho6-florida',
  datePublished: '2026-10-26',
  translations: {
    en: {
      title: 'Condo Owners in Florida: What the Association Covers vs. Your HO-6',
      metaTitle: 'Florida Condo Association vs. HO-6: Who Insures What | M&K Agency',
      description: 'Your condo association has insurance, so why buy your own? How Florida law (s. 718.111(11)) splits the master policy and your HO-6, plus questions to ask.',
      ogAlt: 'Illustration of a condo building with one unit opened to show floors, cabinets and furniture inside',
      excerpt: 'Florida law draws a line through your unit: the association insures one side, you insure the other. Where the line falls, who pays after a leak or a storm, and what to ask your board.',
      category: 'Condo insurance',
      body: [
        { type: 'p', text: 'Your condo association buys a master policy with everyone’s dues, so why buy a policy of your own? Because Florida law draws a line through your unit: the association insures one side, and the other side is yours. Here is where [s. 718.111(11)](' + S.s718111 + ') puts that line, who pays when something goes wrong, and what to ask before the next storm. (Milestone inspections and reserve studies have their own [SIRS guide](/en/blog/condo-milestone-inspection-sirs-florida).)' },
        { type: 'h2', text: 'The association’s side: the building as originally installed' },
        { type: 'p', text: 'The rules apply to every residential condominium in Florida, no matter when its declaration was recorded. The association must carry adequate property insurance, and the replacement cost of the property must be set by an independent appraisal, or an update of one, at least once every 3 years. The master policy must give **primary** coverage to:' },
        { type: 'ul', items: [
          'All portions of the condominium property **as originally installed**, or replacements of like kind and quality, following the original plans and specifications.',
          'Alterations or additions the association itself approves for the common elements or association property under [s. 718.113(2)](' + S.s718113 + ').',
        ] },
        { type: 'p', text: 'The board sets the master policy’s deductibles at a board meeting, based on available funds, including reserves, or its power to assess owners. A building deductible can end up on your statement.' },
        { type: 'h2', text: 'Your side: what the master policy must leave out' },
        { type: 'p', text: 'The same statute requires the association’s policy to **exclude** these items, and their replacements, when they are inside your unit and serve only your unit:' },
        { type: 'ul', items: [
          'All personal property in the unit or in limited common elements.',
          'Floor, wall and ceiling coverings, such as tile, wood, carpet and wallpaper.',
          'Electrical fixtures.',
          'Appliances, water heaters and water filters.',
          'Built-in cabinets and countertops.',
          'Window treatments: curtains, drapes, blinds and their hardware.',
        ] },
        { type: 'p', text: 'That property, and any insurance on it, is the unit owner’s responsibility. The Florida Department of Financial Services describes the HO-6 the same way: it covers your personal property and the building items the association’s policy does not insure, plus personal liability ([DFS toolkit](' + S.dfs + ')).' },
        { type: 'h2', text: 'Upgrades: the part many buyers miss' },
        { type: 'p', text: 'The association does not have to pay to repair improvements that benefit only your unit and were not among the developer’s standard finishes in every unit, no matter who installed them (s. 718.111(11)(n)). Bought a remodeled unit? The previous owner’s stone counters are your exposure, not the building’s.' },
        { type: 'p', text: 'DFS advises raising your policy limits when you finish interior upgrades. When an item is covered by both policies, the association’s policy should pay first, and Florida law makes every unit owner’s policy **excess** over other insurance on the same property ([s. 627.714(4)](' + S.s627714 + ')).' },
        { type: 'h2', text: 'After a leak or a storm: who pays for what' },
        { type: 'p', text: 'When an insurable event damages property the association must insure, the association repairs it as a common expense. The master policy’s deductible, and any damage above its limits, are common expenses too, shared by all owners. The exceptions are where owners get surprised:' },
        { type: 'ul', items: [
          '**Negligence or broken rules.** If you, your family, tenants, guests or invitees caused the damage through intentional conduct, negligence, or not following the declaration or the rules, you pay the repair costs insurance does not cover, including damage to other owners’ belongings.',
          '**Late reporting.** The association does not have to pay for a loss you knew or should have known about but reported only after its claim was settled or denied as late.',
          '**Opt-out.** By a majority of all voting interests, an association may opt out of these rules and follow its declaration instead, recording a notice of the vote.',
          '**Rebuilding.** The association handles reconstruction; you need the board’s prior written consent and permits to do it yourself, and the association can assess you for rebuilding the parts you must insure.',
        ] },
        { type: 'p', text: 'Say the supply line under your sink fails and soaks the unit below. Whether your HO-6 liability coverage responds depends on whether you are legally responsible and on your policy’s terms, which is why liability limits matter; owners with more at stake may also look at an [umbrella policy](/en/umbrella-insurance-florida-city).' },
        { type: 'h2', text: 'Loss assessment: the $2,000 floor' },
        { type: 'p', text: 'If the master policy leaves part of a loss unpaid, such as a large hurricane deductible, the board can assess every owner. Florida requires each unit owner’s policy to include at least **$2,000** of loss assessment coverage per direct loss, with a deductible of no more than $250 ([s. 627.714](' + S.s627714 + ')). Three details matter:' },
        { type: 'ul', items: [
          'The loss must be a type your own policy covers. DFS gives an example: if your HO-6 excludes flood and rising water damages the seawall, your policy will not pay that assessment.',
          'The limit that counts is the one in force one day before the loss. Changes made on or after that day do not apply to it.',
          'If a deductible already applies to your own damage from the same event, no second deductible applies to the assessment.',
        ] },
        { type: 'p', text: 'An assessment to build reserves or fix aging concrete is a different situation; our [SIRS guide](/en/blog/condo-milestone-inspection-sirs-florida) explains why. For deadlines after a storm, see the [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida).' },
        { type: 'h2', text: 'Flood is a separate conversation' },
        { type: 'p', text: 'The statute allows, but does not require, association flood insurance. Under the NFIP, the association’s building policy (the RCBAP) covers personal property only if it is owned in common or by the association ([44 CFR Part 61, App. A(3)](' + S.sfipRcbap + ')), so your furniture needs its own flood coverage. A unit owner can also buy an NFIP Dwelling Form policy with building coverage even when the building has an RCBAP: combined payments for one unit are capped at $250,000, and the same damage is paid only once. That policy can pay your share of a flood loss assessment, but not one that comes from the association’s deductible ([App. A(1)](' + S.sfipDwelling + ')). More on our [flood insurance page](/en/flood-insurance-homestead-fl) and in our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade).' },
        { type: 'h2', text: 'Questions to ask your board, and yourself' },
        { type: 'p', text: 'The association’s current insurance policies are official records, and it must make them available within 10 working days of a written request (s. 718.111(12)). Citizens also reminds condo owners that they can ask the board for a copy of the association policy ([Citizens](' + S.citizensCondo + ')). With the master policy and your declaration in hand, ask:' },
        { type: 'ol', items: [
          'What are the master policy’s hurricane and other deductibles, and how would the board pay them?',
          'Does the association carry flood insurance, and on what?',
          'Has the association opted out of the statutory repair-cost rules? If so, what does the declaration say?',
          'Which finishes in my unit are not the developer’s standard originals?',
          'Is my HO-6 interior limit enough to replace floors, cabinets and fixtures today?',
          'Is my loss assessment limit above the $2,000 minimum, and does it fit the size of the master deductible?',
        ] },
        { type: 'p', text: 'If you cannot get the documents, the DBPR Division of Florida Condominiums, Timeshares and Mobile Homes answers owner questions at (850) 488-1122 ([DBPR](' + S.dbpr + ')).' },
        { type: 'callout', title: 'Want a second set of eyes?', text: 'Bring both declarations pages, the master policy’s and your HO-6, and we will go through them with you in English, Spanish or Russian. [Request a quote](/en/quote), call [(305) 859-3953](tel:+13058593953), or see our [condo insurance page](/en/condo-insurance-florida-city). Coverage depends on your policy and your association’s documents, so talk with a licensed agent before you decide.' },
      ],
      faq: [
        { q: 'Who pays the master policy’s hurricane deductible?', a: 'Unless the association has opted out by vote, the deductible and any damage above the policy limits are a common expense shared by all owners. Your HO-6 loss assessment coverage may help with your share if the cause of loss is one your policy covers.' },
        { q: 'Is an HO-6 required if I have no mortgage?', a: 'Section 718.111(11) does not order you to buy one, but it makes you responsible for the items the master policy excludes. Your declaration or a lender may also require coverage.' },
        { q: 'Does my HO-6 cover flood?', a: 'Many HO-6 policies exclude flood, so check yours. Flood coverage for a unit owner’s contents, and building coverage that works alongside the association’s RCBAP, is available through the NFIP.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 718.111 (2026): association insurance, repair costs, official records', url: S.s718111 },
        { label: 'Florida Statutes s. 718.113 (2026): maintenance, material alterations and additions', url: S.s718113 },
        { label: 'Florida Statutes s. 627.714 (2026): condominium unit owner coverage; loss assessment', url: S.s627714 },
        { label: 'Florida Department of Financial Services: Homeowners Insurance Toolkit (PDF)', url: S.dfs },
        { label: 'Florida DBPR: Division of Florida Condominiums, Timeshares and Mobile Homes', url: S.dbpr },
        { label: 'Citizens Property Insurance: Coverages Explained, Condo vs Homeowners Insurance', url: S.citizensCondo },
        { label: 'Citizens Property Insurance: Residential Policies (HO-6)', url: S.citizensPolicies },
        { label: '44 CFR Part 61, Appendix A(1): NFIP Dwelling Form', url: S.sfipDwelling },
        { label: '44 CFR Part 61, Appendix A(3): NFIP Residential Condominium Building Association Policy', url: S.sfipRcbap },
      ],
    },
    es: {
      title: 'Condominios en Florida: qué cubre la asociación y qué cubre su HO-6',
      metaTitle: 'Asociación de condominio vs. HO-6 en Florida | M&K Agency',
      description: 'Su asociación ya tiene seguro, ¿para qué el suyo? Cómo la ley de Florida (s. 718.111(11)) reparte la póliza maestra y su HO-6, y qué preguntar a la junta.',
      ogAlt: 'Ilustración de un edificio de condominios con una unidad abierta que muestra pisos, gabinetes y muebles',
      excerpt: 'La ley de Florida traza una línea dentro de su unidad: de un lado asegura la asociación y del otro, usted. Dónde queda esa línea, quién paga tras una filtración o un huracán y qué preguntarle a la junta.',
      category: 'Seguro de condominio',
      body: [
        { type: 'p', text: 'La asociación paga una póliza maestra con las cuotas de todos. ¿Para qué la suya? Porque la ley de Florida traza una línea dentro de su unidad: de un lado asegura la asociación y del otro, usted. Veamos dónde la pone la [sección 718.111(11)](' + S.s718111 + ') y quién paga cuando algo se daña. (Las inspecciones de hito y el estudio de reservas tienen su propia [guía sobre SIRS](/es/blog/condo-milestone-inspection-sirs-florida).)' },
        { type: 'h2', text: 'Lo que asegura la asociación: el edificio tal como se construyó' },
        { type: 'p', text: 'Esto aplica a todo condominio residencial de Florida: la asociación debe tener un seguro de propiedad adecuado, y el costo de reemplazo debe fijarse con una tasación independiente, o su actualización, al menos cada 3 años. La póliza maestra debe dar cobertura **primaria** a:' },
        { type: 'ul', items: [
          'Todas las partes del condominio **tal como se instalaron originalmente**, o sus reemplazos de igual tipo y calidad, según los planos y especificaciones originales.',
          'Las modificaciones o ampliaciones que la propia asociación aprueba en las áreas comunes o en su propiedad, conforme a la [sección 718.113(2)](' + S.s718113 + ').',
        ] },
        { type: 'p', text: 'La junta fija los deducibles de la póliza maestra según los fondos disponibles, incluidas las reservas, o su facultad de cobrar cuotas. Un deducible del edificio puede terminar en su estado de cuenta.' },
        { type: 'h2', text: 'Lo que le toca a usted: lo que la póliza maestra debe excluir' },
        { type: 'p', text: 'La misma ley obliga a que la póliza de la asociación **excluya** lo siguiente, y sus reemplazos, cuando está dentro de su unidad y da servicio solo a ella:' },
        { type: 'ul', items: [
          'Los bienes personales dentro de la unidad o en áreas comunes de uso exclusivo.',
          'Revestimientos de pisos, paredes y techos: losas, madera, alfombra, papel tapiz.',
          'Lámparas e instalaciones eléctricas fijas.',
          'Electrodomésticos, calentadores de agua y filtros de agua.',
          'Gabinetes empotrados y encimeras.',
          'Cortinas, persianas y sus herrajes.',
        ] },
        { type: 'p', text: 'Esos bienes, y su seguro, son responsabilidad del dueño de la unidad. El Departamento de Servicios Financieros (DFS) lo resume igual: el HO-6 cubre sus pertenencias, lo que la asociación no asegura y su responsabilidad civil ([guía del DFS](' + S.dfs + ')).' },
        { type: 'h2', text: 'Remodelaciones: el detalle que muchos compradores pasan por alto' },
        { type: 'p', text: 'La asociación no tiene que pagar la reparación de mejoras que benefician solo a su unidad y que no formaban parte de los acabados estándar que el desarrollador puso en todas, sin importar quién las instaló (s. 718.111(11)(n)). ¿Compró una unidad remodelada? El granito del dueño anterior es asunto suyo.' },
        { type: 'p', text: 'El DFS recomienda subir sus límites tras mejoras interiores. Si ambas pólizas cubren un bien, debería pagar primero la de la asociación, y la ley convierte toda póliza de dueño de unidad en cobertura **en exceso** sobre otro seguro del mismo bien ([s. 627.714(4)](' + S.s627714 + ')).' },
        { type: 'h2', text: 'Después de una filtración o un huracán: quién paga qué' },
        { type: 'p', text: 'Si un evento asegurable daña lo que la asociación debe asegurar, ella repara como gasto común. El deducible de la póliza maestra y los daños que superen sus límites también son gasto común, repartido entre todos. Las sorpresas vienen de las excepciones:' },
        { type: 'ul', items: [
          '**Negligencia o reglas incumplidas.** Si usted, su familia, inquilinos o invitados causan el daño por un acto intencional, negligencia o por incumplir la declaración o las reglas, usted paga lo que el seguro no cubra, incluso daños a bienes de otros dueños.',
          '**Aviso tardío.** La asociación no paga una pérdida que usted conocía, o debió conocer, si la reportó después de que su reclamo se resolvió o se negó por tardío.',
          '**Exclusión por voto.** Con la mayoría de todos los votos, la asociación puede apartarse de estas reglas y repartir los costos según su declaración, registrando un aviso del voto.',
          '**Reconstrucción.** La hace la asociación (usted necesita consentimiento escrito previo de la junta y permisos), y puede cobrarle como cuota la reconstrucción de lo que usted debe asegurar.',
        ] },
        { type: 'p', text: 'Imagine que se rompe la manguera del fregadero y el agua baja al vecino. Que responda su responsabilidad civil del HO-6 depende de si usted es legalmente responsable y de su póliza. Por eso importan los límites; quien tiene más que proteger puede considerar una [póliza paraguas](/es/umbrella-insurance-florida-city).' },
        { type: 'h2', text: 'Cuotas por pérdida (loss assessment): el mínimo de $2,000' },
        { type: 'p', text: 'Si la póliza maestra deja parte de una pérdida sin pagar, como un deducible de huracán alto, la junta puede cobrar una cuota a cada dueño. Florida exige que toda póliza de dueño de unidad incluya al menos **$2,000** de cobertura de loss assessment por pérdida directa, con un deducible de no más de $250 ([s. 627.714](' + S.s627714 + ')). Tres detalles:' },
        { type: 'ul', items: [
          'La pérdida debe ser de un tipo que su propia póliza cubra. El ejemplo del DFS: si su HO-6 excluye inundación y el agua daña el malecón (seawall), su póliza no paga esa cuota.',
          'Cuenta el límite vigente un día antes de la pérdida. Los cambios hechos ese día o después no aplican a esa pérdida.',
          'Si ya se aplicó un deducible a sus propios daños por el mismo evento, no se aplica otro a la cuota.',
        ] },
        { type: 'p', text: 'Una cuota para reservas o para reparar concreto envejecido es otra cosa (vea la [guía sobre SIRS](/es/blog/condo-milestone-inspection-sirs-florida)). Tras un huracán, revise los [plazos de un reclamo por huracán](/es/blog/hurricane-claim-timeline-florida).' },
        { type: 'h2', text: 'La inundación es otro tema' },
        { type: 'p', text: 'La ley permite, pero no exige, que la asociación compre seguro de inundación. En el NFIP, la póliza del edificio de la asociación (RCBAP) cubre bienes personales solo si son de propiedad común o de la asociación ([44 CFR parte 61, apéndice A(3)](' + S.sfipRcbap + ')), así que sus muebles necesitan su propia cobertura. El dueño también puede comprar una póliza Dwelling Form del NFIP con cobertura de edificio aunque exista un RCBAP: entre ambas pagan como máximo $250,000 por unidad, y cada daño una sola vez. Puede pagar su parte de una cuota por inundación, pero no la que viene del deducible de la asociación ([apéndice A(1)](' + S.sfipDwelling + ')). Vea nuestra [página de inundación](/es/flood-insurance-homestead-fl) y la [guía de mareas reales](/es/blog/king-tides-flood-insurance-miami-dade).' },
        { type: 'h2', text: 'Preguntas para la junta, y para usted' },
        { type: 'p', text: 'Las pólizas vigentes de la asociación son registros oficiales, y debe ponerlas a su disposición dentro de 10 días hábiles después de una solicitud por escrito (s. 718.111(12)). Citizens también recuerda que puede pedírsela a la junta ([Citizens](' + S.citizensCondo + ')). Con la póliza y su declaración, pregunte:' },
        { type: 'ol', items: [
          '¿Qué deducibles de huracán y de otros riesgos tiene la póliza maestra, y cómo los pagaría la junta?',
          '¿Tiene la asociación seguro de inundación? ¿Sobre qué?',
          '¿Se apartó la asociación de las reglas legales sobre costos de reparación? ¿Qué dice entonces la declaración?',
          '¿Qué acabados de mi unidad no son los originales del desarrollador?',
          '¿Alcanza el límite de mi HO-6 para el interior para reponer pisos, gabinetes e instalaciones hoy?',
          '¿Mi límite de loss assessment supera los $2,000 y guarda relación con el deducible maestro?',
        ] },
        { type: 'p', text: 'Si no le entregan los documentos, la División de Condominios del DBPR atiende a los dueños al (850) 488-1122 ([DBPR](' + S.dbpr + ')).' },
        { type: 'callout', title: '¿Quiere que lo revisemos juntos?', text: 'Traiga las páginas de declaraciones de la póliza maestra y de su HO-6, y las revisamos con usted en español, inglés o ruso. [Pida una cotización](/es/quote), llame al [(305) 859-3953](tel:+13058593953) o visite nuestra página de [seguro de condominio](/es/condo-insurance-florida-city). La cobertura depende de su póliza y de los documentos de su asociación; hable con un agente con licencia antes de decidir.' },
      ],
      faq: [
        { q: '¿Quién paga el deducible de huracán de la póliza maestra?', a: 'Salvo que la asociación haya votado apartarse de la regla, el deducible y los daños sobre los límites son gasto común de todos los dueños. Su cobertura de loss assessment puede ayudar con su parte si la causa de la pérdida es una que su póliza cubre.' },
        { q: '¿Necesito un HO-6 si no tengo hipoteca?', a: 'La ley no le obliga a comprarlo, pero lo hace responsable de lo que la póliza maestra excluye. Su declaración o un prestamista pueden exigirlo.' },
        { q: '¿Mi HO-6 cubre inundación?', a: 'Muchas pólizas HO-6 excluyen la inundación; revise la suya. El NFIP ofrece cobertura para las pertenencias del dueño y cobertura de edificio que funciona junto con el RCBAP de la asociación.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 718.111 (2026): seguro de la asociación, costos de reparación, registros oficiales (en inglés)', url: S.s718111 },
        { label: 'Estatutos de Florida, sección 718.113 (2026): mantenimiento, modificaciones y ampliaciones (en inglés)', url: S.s718113 },
        { label: 'Estatutos de Florida, sección 627.714 (2026): cobertura del dueño de condominio y loss assessment (en inglés)', url: S.s627714 },
        { label: 'Departamento de Servicios Financieros de Florida: guía del seguro de vivienda (PDF, en inglés)', url: S.dfs },
        { label: 'DBPR de Florida: División de Condominios, Tiempos Compartidos y Casas Móviles (en inglés)', url: S.dbpr },
        { label: 'Citizens Property Insurance: coberturas de condominio vs. vivienda (en inglés)', url: S.citizensCondo },
        { label: 'Citizens Property Insurance: pólizas residenciales, HO-6 (en inglés)', url: S.citizensPolicies },
        { label: '44 CFR parte 61, apéndice A(1): póliza Dwelling Form del NFIP (en inglés)', url: S.sfipDwelling },
        { label: '44 CFR parte 61, apéndice A(3): póliza RCBAP del NFIP para asociaciones de condominio (en inglés)', url: S.sfipRcbap },
      ],
    },
    ru: {
      title: 'Владельцам кондо во Флориде: что покрывает ассоциация, а что HO-6',
      metaTitle: 'Ассоциация кондо или HO-6: кто что страхует | M&K Agency',
      description: 'У ассоциации уже есть страховка, зачем вам своя? Как закон Флориды (ст. 718.111(11)) делит мастер-полис и HO-6 и что спросить у правления.',
      ogAlt: 'Иллюстрация: кондоминиум, у одной квартиры снята стена, видны полы, кухонные шкафы и мебель',
      excerpt: 'Закон Флориды проводит границу прямо через вашу квартиру: одну сторону страхует ассоциация, другую — вы. Где проходит граница, кто платит после протечки или урагана и что спросить у правления.',
      category: 'Страхование кондо',
      body: [
        { type: 'p', text: 'Ассоциация оплачивает мастер-полис из взносов всех владельцев. Зачем же вам ещё и свой? Потому что закон Флориды проводит границу прямо через вашу квартиру: одну сторону страхует ассоциация, другую — вы. Разбираем, где эту границу проводит [ст. 718.111(11)](' + S.s718111 + '), кто платит, если что-то случилось, и что спросить до следующего урагана. (Про milestone-инспекции и резервы — отдельный [материал о SIRS](/ru/blog/condo-milestone-inspection-sirs-florida).)' },
        { type: 'h2', text: 'Зона ассоциации: здание в изначальном виде' },
        { type: 'p', text: 'Эти правила действуют для любого жилого кондоминиума во Флориде, независимо от даты его декларации. Ассоциация обязана иметь достаточную страховку имущества, а восстановительную стоимость нужно определять независимой оценкой (или её обновлением) не реже раза в 3 года. Мастер-полис должен давать **основное** покрытие:' },
        { type: 'ul', items: [
          'всему имуществу кондоминиума **в том виде, в каком оно было изначально установлено**, или замене такого же типа и качества по исходным чертежам и спецификациям;',
          'переделкам и пристройкам, которые сама ассоциация утверждает для общих элементов или своего имущества по [ст. 718.113(2)](' + S.s718113 + ').',
        ] },
        { type: 'p', text: 'Франшизы мастер-полиса правление утверждает на своём заседании, исходя из доступных средств, включая резервы, или права собирать с владельцев спецвзносы. Иначе говоря, франшиза по зданию может оказаться в вашем счёте.' },
        { type: 'h2', text: 'Ваша зона: что мастер-полис обязан исключить' },
        { type: 'p', text: 'Та же статья требует, чтобы полис ассоциации **исключал** следующее (и всё, чем это заменили), если оно находится внутри вашей квартиры и обслуживает только её:' },
        { type: 'ul', items: [
          'всё личное имущество в квартире и в общих элементах ограниченного пользования;',
          'покрытия полов, стен и потолков: плитку, паркет, ковролин, обои;',
          'электрические светильники и арматуру;',
          'бытовую технику, водонагреватели и фильтры для воды;',
          'встроенные шкафы и столешницы;',
          'шторы, жалюзи и крепления к ним.',
        ] },
        { type: 'p', text: 'Всё это, как и его страхование, — ответственность владельца квартиры. Департамент финансовых услуг Флориды (DFS) описывает HO-6 так же: полис покрывает ваше имущество и те части здания, которые не страхует ассоциация, плюс вашу гражданскую ответственность ([руководство DFS](' + S.dfs + ')).' },
        { type: 'h2', text: 'Ремонт и улучшения: то, что упускают покупатели' },
        { type: 'p', text: 'Ассоциация не обязана оплачивать восстановление улучшений, которые служат только вашей квартире и не входили в стандартную отделку застройщика для всех квартир, — кто бы их ни установил (ст. 718.111(11)(n)). Купили квартиру с ремонтом? Каменные столешницы прежнего хозяина теперь ваш риск, а не здания.' },
        { type: 'p', text: 'DFS советует увеличивать лимиты полиса после ремонта. Если вещь покрыта обоими полисами, первым должен платить полис ассоциации, а по закону любой полис владельца квартиры работает как **excess**, то есть платит сверх другой страховки того же имущества ([ст. 627.714(4)](' + S.s627714 + ')).' },
        { type: 'h2', text: 'После протечки или урагана: кто за что платит' },
        { type: 'p', text: 'Если страхуемое событие повредило то, что обязана страховать ассоциация, она ремонтирует это как общий расход. Франшиза мастер-полиса и ущерб сверх его лимитов — тоже общий расход всех владельцев. Сюрпризы кроются в исключениях:' },
        { type: 'ul', items: [
          '**Небрежность или нарушение правил.** Если ущерб причинили вы, ваша семья, арендаторы или гости — умышленно, по небрежности или нарушив декларацию либо правила, — то, что не оплатила страховка, платите вы, включая ущерб имуществу других владельцев.',
          '**Позднее сообщение.** Ассоциация не обязана платить за ущерб, о котором вы знали или должны были знать, но сообщили только после того, как её страховой случай урегулировали или отклонили из-за пропуска срока.',
          '**Отказ голосованием.** Большинством всех голосов ассоциация может отказаться от этих правил и делить расходы по своей декларации, зарегистрировав уведомление о голосовании.',
          '**Восстановление.** Им занимается ассоциация; чтобы делать работы самому, нужно предварительное письменное согласие правления и разрешения, а восстановление того, что обязаны страховать вы, ассоциация может взыскать с вас как взнос.',
        ] },
        { type: 'p', text: 'Допустим, под раковиной лопнул шланг и вода ушла к соседям снизу. Сработает ли страхование ответственности по HO-6, зависит от того, несёте ли вы юридическую ответственность, и от условий полиса. Поэтому лимиты ответственности важны, а тем, кому есть что защищать, стоит посмотреть и на [umbrella-полис](/ru/umbrella-insurance-florida-city).' },
        { type: 'h2', text: 'Loss assessment: минимум $2,000' },
        { type: 'p', text: 'Если мастер-полис оплатил ущерб не полностью — например, из-за большой ураганной франшизы, — правление может выставить спецвзнос каждому владельцу. Флорида требует, чтобы любой полис владельца квартиры включал не менее **$2,000** покрытия loss assessment на один прямой ущерб с франшизой не больше $250 ([ст. 627.714](' + S.s627714 + ')). Три важные детали:' },
        { type: 'ul', items: [
          'Ущерб должен быть того вида, который покрывает ваш собственный полис. Пример DFS: если ваш HO-6 исключает наводнение, а поднявшаяся вода повредила волнорез (seawall), этот взнос полис не оплатит.',
          'Считается лимит, действовавший за день до события. Изменения, сделанные в этот день или позже, к этому ущербу не применяются.',
          'Если к вашему собственному ущербу от того же события уже применили франшизу, второй франшизы на взнос не будет.',
        ] },
        { type: 'p', text: 'Взнос на пополнение резервов или ремонт стареющего бетона — другая ситуация, почему — в нашем [материале о SIRS](/ru/blog/condo-milestone-inspection-sirs-florida). Про сроки после урагана — в статье о [сроках клейма](/ru/blog/hurricane-claim-timeline-florida).' },
        { type: 'h2', text: 'Наводнение — отдельный разговор' },
        { type: 'p', text: 'Закон разрешает ассоциации страховать от наводнения, но не обязывает. В программе NFIP полис здания ассоциации (RCBAP) покрывает имущество, только если оно общее или принадлежит ассоциации ([44 CFR, ч. 61, прил. A(3)](' + S.sfipRcbap + ')), так что вашей мебели нужна своя страховка. Владелец может купить и полис NFIP Dwelling Form с покрытием конструкций квартиры, даже если у здания есть RCBAP: вместе на одну квартиру выплачивается не больше $250,000, и один и тот же ущерб оплачивается один раз. Такой полис может покрыть вашу долю взноса после наводнения, но не взнос на франшизу ассоциации ([прил. A(1)](' + S.sfipDwelling + ')). Подробнее — на нашей [странице о страховании от наводнения](/ru/flood-insurance-homestead-fl) и в статье о [королевских приливах](/ru/blog/king-tides-flood-insurance-miami-dade).' },
        { type: 'h2', text: 'Что спросить у правления — и у себя' },
        { type: 'p', text: 'Действующие полисы ассоциации — это официальные документы, и по письменному запросу она обязана предоставить их в течение 10 рабочих дней (ст. 718.111(12)). Citizens тоже напоминает, что копию полиса ассоциации можно запросить у правления ([Citizens](' + S.citizensCondo + ')). С мастер-полисом и декларацией на руках спросите:' },
        { type: 'ol', items: [
          'Какие у мастер-полиса франшизы на ураган и на прочие риски и как правление будет их оплачивать?',
          'Есть ли у ассоциации страховка от наводнения и что она покрывает?',
          'Отказалась ли ассоциация от правил закона о распределении расходов на ремонт? Если да, что говорит декларация?',
          'Какая отделка в моей квартире — не стандартная от застройщика?',
          'Хватит ли лимита HO-6 на внутреннюю отделку, чтобы сегодня заменить полы, шкафы и светильники?',
          'Выше ли мой лимит loss assessment минимальных $2,000 и соразмерен ли он франшизе мастер-полиса?',
        ] },
        { type: 'p', text: 'Если документы не дают, Отдел кондоминиумов, таймшеров и мобильных домов DBPR отвечает на вопросы владельцев по телефону (850) 488-1122 ([DBPR](' + S.dbpr + ')).' },
        { type: 'callout', title: 'Посмотрим вместе?', text: 'Возьмите обе декларационные страницы — мастер-полиса и вашего HO-6, и мы разберём их с вами по-русски, по-английски или по-испански. [Оставьте заявку на расчёт](/ru/quote), позвоните [(305) 859-3953](tel:+13058593953) или загляните на нашу [страницу о страховании кондо](/ru/condo-insurance-florida-city). Покрытие зависит от вашего полиса и документов ассоциации, поэтому перед решением поговорите с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Кто платит ураганную франшизу мастер-полиса?', a: 'Если ассоциация не отказалась от этого правила голосованием, франшиза и ущерб сверх лимитов — общий расход всех владельцев. С вашей долей может помочь покрытие loss assessment в HO-6, если причина ущерба покрывается вашим полисом.' },
        { q: 'Нужен ли HO-6, если ипотеки нет?', a: 'Статья 718.111(11) не обязывает его покупать, но делает вас ответственным за всё, что исключено из мастер-полиса. Страховку может требовать и декларация, и кредитор.' },
        { q: 'Покрывает ли HO-6 наводнение?', a: 'Многие полисы HO-6 наводнение исключают — проверьте свой. Через NFIP можно застраховать имущество владельца и конструкции квартиры в дополнение к RCBAP ассоциации.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 718.111 (2026): страхование ассоциации, расходы на ремонт, официальные документы (англ.)', url: S.s718111 },
        { label: 'Законы Флориды, ст. 718.113 (2026): содержание, переделки и пристройки (англ.)', url: S.s718113 },
        { label: 'Законы Флориды, ст. 627.714 (2026): страхование владельца квартиры в кондо, loss assessment (англ.)', url: S.s627714 },
        { label: 'Департамент финансовых услуг Флориды: руководство по страхованию жилья (PDF, англ.)', url: S.dfs },
        { label: 'DBPR Флориды: Отдел кондоминиумов, таймшеров и мобильных домов (англ.)', url: S.dbpr },
        { label: 'Citizens Property Insurance: страхование кондо и дома — в чём разница (англ.)', url: S.citizensCondo },
        { label: 'Citizens Property Insurance: жилищные полисы, HO-6 (англ.)', url: S.citizensPolicies },
        { label: '44 CFR, часть 61, приложение A(1): полис NFIP Dwelling Form (англ.)', url: S.sfipDwelling },
        { label: '44 CFR, часть 61, приложение A(3): полис NFIP RCBAP для ассоциаций кондо (англ.)', url: S.sfipRcbap },
      ],
    },
  },
};
