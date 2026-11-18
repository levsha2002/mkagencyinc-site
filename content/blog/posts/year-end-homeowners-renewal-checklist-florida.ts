import type { BlogPost } from '../types';

// New article 2026-11-18 (content plan 2026-11, row 2026-11-18). Facts checked 2026-11-18 (ET) against
// official sources (raw copies in /workspace/renewal/; notes in
// /workspace/articles/year-end-homeowners-renewal-checklist-florida_sources.md):
// - s. 627.4133(2)(a),(b),(b)1,(d) (2026): residential property: 45 days' notice of renewal premium; 120 days'
//   notice of nonrenewal/cancellation with the reason; 10 days for nonpayment; coverage continues if notice is late.
// - s. 627.701(3)(a),(4)(b),(4)(c),(4)(e)2,(5)(a)1,(5)(a)4 (2026): hurricane deductible options ($500/2/5/10%)
//   noticed with each renewal; dollar value of hurricane (and roof) deductible shown on the renewal declarations
//   page or renewal notice; inflation guard note; annual (calendar-year) hurricane deductible; a lower deductible
//   after a hurricane loss starts Jan. 1 of the next year.
// - s. 627.4143(3) (2026): coverage checklist + outline of coverage delivered with homeowner/dwelling/mobile home/
//   condo unit owner policies.
// - s. 627.7011(1)-(2) (2026): replacement cost and law and ordinance offers; 25% L&O unless rejected in writing;
//   notice at least once every 3 years.
// - s. 627.711(1) (2026): OIR-prescribed mitigation notice at issuance and each renewal.
// - s. 627.70132(2)-(3) (2026): claim notice 1 year, supplemental 18 months; hurricane date of loss = landfall.
// - OIR (floir.gov): OIR-B1-1802 updated eff. April 1, 2026; valid up to 5 years absent material changes/inaccuracies.
// - DFS Homeowners Insurance Toolkit (rev. March 2024) + DFS storm page: declarations page; inventory with photos and
//   serial numbers, update at least once a year; review limits after improvements; flood not covered by standard
//   homeowners policies; keep papers in a secure place. Helpline 1-877-693-5236.
// - FloodSmart: most homeowners policies don't cover flood; 30-day wait with exceptions (mortgage, renewal change).
// - Citizens newsletter: flood insurance needed to renew personal lines wind policies (not condo unit owners)
//   effective on or after Jan. 1, 2027.
// - MSFH support Modernization FAQs (modified Nov. 6): portal unavailable from Nov. 10, new portal anticipated Dec. 4;
//   mysafeflhome.com returned 503 (maintenance) on Nov. 18.
// No private insurers named. No coverage promises, no rate or premium outcome claims.
const LEG = 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/';
const S = {
  s4133: LEG + '0627.4133.html',
  s701: LEG + '0627.701.html',
  s4143: LEG + '0627.4143.html',
  s7011: LEG + '0627.7011.html',
  s711: LEG + '0627.711.html',
  s70132: LEG + '0627.70132.html',
  oirWind: 'https://floir.gov/consumers/wind-mitigation-resources',
  dfsToolkit: 'https://www.myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---homeowners-insurance-toolkit.pdf',
  dfsStorm: 'https://www.myfloridacfo.com/division/consumers/storm',
  floodsmart: 'https://www.floodsmart.gov/get-insured/buy-a-policy',
  citizensFlood: 'https://www.citizensfla.com/-/new-flood-requirements-begin-january-1',
  msfhFaq: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000390446-msfh-program-modernization-faqs',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'year-end-homeowners-renewal-checklist-florida',
  datePublished: '2026-11-18',
  translations: {
    en: {
      title: 'Year-End Home Insurance Renewal Checklist for Florida Homeowners',
      metaTitle: 'Home Insurance Renewal Checklist for Florida | M&K Agency',
      description: 'Florida home policy renewing soon? Check the notice dates, declarations page, hurricane deductible, rebuild limits, inventory and flood policy before it renews.',
      ogAlt: 'Flat illustration of a Florida house next to a large renewal document with check marks, a calendar page, a magnifying glass, a palm tree and a blue shield with a check mark',
      excerpt: 'Your renewal packet is more than a bill. Here is what Florida law requires your insurer to send, and the documents and numbers to check before your home policy renews.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'Many Florida homeowners open the renewal envelope, look at one number and file it away. The packet deserves ten more minutes: Florida law sets what your insurer must tell you and when, and the declarations page shows what you are buying for the next year. This checklist covers the **documents and review steps** for a homeowners renewal.' },
        { type: 'p', text: 'For open claims and storm paperwork, see our [end-of-hurricane-season checklist](/en/blog/end-of-hurricane-season-checklist-florida); for new rules, see [what changes on January 1, 2027](/en/blog/florida-insurance-changes-january-2027).' },

        { type: 'h2', text: '1. Know the notice dates Florida law sets' },
        { type: 'p', text: 'For homeowners, condo unit owner, mobile home and other residential property policies, [s. 627.4133(2), Florida Statutes](' + S.s4133 + '), requires the insurer to give the first-named insured:' },
        { type: 'ul', items: [
          'at least **45 days’** advance written notice of the **renewal premium**;',
          'at least **120 days’** written notice of a **nonrenewal, cancellation or termination**, including the reason;',
          'at least **10 days’** notice if the policy is canceled for **nonpayment**.',
        ] },
        { type: 'p', text: 'If a required notice (other than the 10-day notice) is not given, the statute keeps coverage in effect for a period, until replacement coverage starts or the notice period runs. Practical step: put your renewal date on the calendar. If no renewal notice has arrived about six weeks before it, ask your agent. If you get a nonrenewal notice, call right away; the 120 days give you time to find other coverage.' },

        { type: 'h2', text: '2. Read the renewal declarations page line by line' },
        { type: 'p', text: 'The Florida Department of Financial Services (DFS) calls the declarations page, or “dec page,” a summary of the essential information in your policy, usually the first page or two ([DFS Homeowners Insurance Toolkit](' + S.dfsToolkit + ')). Check:' },
        { type: 'ul', items: [
          '**Names and addresses:** every named insured, the insured property address, your mailing address and your mortgage company.',
          '**Coverage limits:** dwelling (A), other structures (B), personal property (C), loss of use (D), personal liability (E) and medical payments to others (F).',
          '**Deductibles:** the all-other-perils deductible and, if your policy has one, the separate hurricane deductible and any roof deductible.',
          '**Endorsements:** the add-ons listed by name. If one you had last year is missing, ask why.',
        ] },

        { type: 'h2', text: '3. Find the dollar value of your hurricane deductible' },
        { type: 'p', text: 'A hurricane deductible is usually a percentage of the dwelling limit, so it moves with the limit. Under [s. 627.701(4)](' + S.s701 + '), the insurer must compute and prominently show the **actual dollar amount** of the hurricane deductible on the renewal declarations page or the premium renewal notice. If the policy has an inflation guard rider, the insurer must also warn that the deductible may be higher at the time of a loss. A separate roof deductible must likewise be shown in dollars.' },
        { type: 'p', text: 'With each renewal, the insurer must also send a notice of the hurricane deductible options it must offer: $500, 2%, 5% and 10% of the dwelling limit, with some exceptions for higher-value homes (s. 627.701(3)). Two year-end details: the hurricane deductible applies to all covered hurricane losses in the **calendar year**, and if you had a hurricane loss under the prior policy and choose a lower hurricane deductible at renewal, the lower amount does not apply until **January 1 of the following year** (s. 627.701(5)). See our [hurricane deductible guide](/en/florida-home-insurance-wind-deductible).' },

        { type: 'h2', text: '4. Check the rebuild numbers, not just the total' },
        { type: 'p', text: 'Homeowners, dwelling, mobile home and condo unit owner policies come with a state-adopted **coverage checklist** and an **outline of coverage** ([s. 627.4143(3)](' + S.s4143 + ')). The checklist shows what is and is not included, such as sinkhole loss, mold, additional living expenses and law and ordinance coverage. If you can’t find yours, ask for a copy.' },
        { type: 'ul', items: [
          '**Replacement cost and law and ordinance.** Insurers must offer replacement cost coverage and law and ordinance coverage, which helps with the extra cost of rebuilding to current code. Unless you rejected it in writing, the policy is treated as including law and ordinance coverage at **25%** of the dwelling limit; 50% must be offered ([s. 627.7011](' + S.s7011 + ')).',
          '**Is the dwelling limit still enough?** DFS reminds homeowners that it is their responsibility to make sure they carry the coverage they need, and that being underinsured at the time of a loss can reduce what the insurer pays ([DFS Toolkit](' + S.dfsToolkit + ')).',
        ] },

        { type: 'h2', text: '5. Tell your agent what changed this year' },
        { type: 'p', text: 'DFS advises reviewing your limits after improvements or large purchases ([DFS storm resources](' + S.dfsStorm + ')). Before the renewal date, list anything new: a **roof replacement** (keep the permit and invoice; see [roof age and home insurance](/en/blog/roof-age-home-insurance-florida)), new windows or shutters, a remodel, an addition, a pool or a change in who lives in the home.' },
        { type: 'p', text: 'Mitigation paperwork matters at renewal too. At issuance and at each renewal, the insurer must send an OIR-prescribed notice explaining how wind-resistant features can be reflected in its rates or deductibles ([s. 627.711](' + S.s711 + ')). The Uniform Mitigation Verification Inspection Form (OIR-B1-1802) was updated effective **April 1, 2026** and is valid for up to five years if the structure has no material changes and the form has no inaccuracies ([OIR](' + S.oirWind + ')). Read our [wind mitigation inspection guide](/en/blog/wind-mitigation-inspection-florida). If you planned to use My Safe Florida Home, its applicant portal has been offline since November 10, and the program says an enhanced portal is anticipated on **December 4** ([MSFH](' + S.msfhFaq + '); background in our [MSFH guide](/en/blog/my-safe-florida-home-2026)).' },

        { type: 'h2', text: '6. Update your home inventory' },
        { type: 'p', text: 'DFS recommends a room-by-room inventory with photos and serial numbers, compared against your personal property limit, and says to **update it at least once a year** ([DFS Toolkit](' + S.dfsToolkit + ')). Check the limits on valuables such as jewelry, silverware, guns and antiques. Keep the policy, inventory and your agent’s phone number in a secure place you can reach after a storm ([DFS](' + S.dfsStorm + ')).' },

        { type: 'h2', text: '7. Remember flood is a separate policy' },
        { type: 'p', text: 'Standard homeowners policies do not cover flood damage ([DFS](' + S.dfsStorm + ')). National Flood Insurance Program (NFIP) coverage generally takes effect **30 days** after purchase; there is no wait when you buy it in connection with making, increasing, extending or renewing a mortgage, or when you change coverage at your flood policy’s renewal ([FloodSmart](' + S.floodsmart + ')). Flood policies often renew on a different date, so track both.' },
        { type: 'p', text: 'If you are insured by **Citizens Property Insurance Corporation**, personal lines residential policyholders with wind coverage (other than condo unit owners) must have flood insurance to renew a policy effective on or after **January 1, 2027** ([Citizens](' + S.citizensFlood + ')). Details in our [Citizens flood requirement guide](/en/blog/citizens-flood-insurance-requirement-2027) and [flood insurance page](/en/flood-insurance-homestead-fl).' },

        { type: 'h2', text: '8. Close the loop on any claims' },
        { type: 'p', text: 'Under [s. 627.70132](' + S.s70132 + '), a new or reopened property claim must be noticed within **one year** after the date of loss (for hurricanes, the landfall date), and a supplemental claim within **18 months**. See our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida).' },

        { type: 'h2', text: 'Your renewal checklist' },
        { type: 'ol', items: [
          'Mark the renewal dates of your homeowners and flood policies.',
          'Compare names, coverages A–F and endorsements with last year.',
          'Write down the hurricane deductible in dollars.',
          'Check replacement cost and law and ordinance coverage.',
          'List the year’s changes: roof, windows, remodel, pool.',
          'Find your wind mitigation form and check its date.',
          'Update the home inventory and confirm your flood policy.',
        ] },
        { type: 'callout', title: 'Review your renewal with a local agent', text: 'Coverage always depends on your policy’s terms, limits, exclusions and deductibles, so review it with a licensed agent. Send us your questions through the [quote form](/en/quote) or call [(305) 859-3953](' + TEL + '). M&K Agency is at 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (Monday–Friday 9–6, Saturday by appointment). More on our [homeowners insurance page](/en/homeowners-insurance-florida-city).' },
      ],
      faq: [
        { q: 'How early must my insurer tell me about my renewal premium in Florida?', a: 'For residential property policies, at least 45 days before the policy renews, in writing (s. 627.4133(2)(a)). A nonrenewal notice must come at least 120 days ahead, with the reason.' },
        { q: 'Where do I find my hurricane deductible in dollars?', a: 'On the renewal declarations page or the premium renewal notice (s. 627.701(4)).' },
        { q: 'Does my homeowners policy cover flood?', a: 'Standard homeowners policies don’t cover flood. Flood is a separate policy, and NFIP coverage generally starts 30 days after purchase, with some exceptions.' },
      ],
      sources: [
        { label: 'Florida Statutes, s. 627.4133 (2026): notice of cancellation, nonrenewal or renewal premium', url: S.s4133 },
        { label: 'Florida Statutes, s. 627.701 (2026): deductibles, including hurricane deductibles', url: S.s701 },
        { label: 'Florida Statutes, s. 627.4143 (2026): outline of coverage and coverage checklist', url: S.s4143 },
        { label: 'Florida Statutes, s. 627.7011 (2026): replacement cost and law and ordinance coverage', url: S.s7011 },
        { label: 'Florida Statutes, s. 627.711 (2026): hurricane loss mitigation notice; uniform mitigation inspection form', url: S.s711 },
        { label: 'Florida Statutes, s. 627.70132 (2026): notice of property insurance claim', url: S.s70132 },
        { label: 'Florida OIR: Wind mitigation resources (OIR-B1-1802, effective April 1, 2026)', url: S.oirWind },
        { label: 'Florida DFS: Homeowners Insurance Toolkit', url: S.dfsToolkit },
        { label: 'Florida DFS: Storm and hurricane insurance resources', url: S.dfsStorm },
        { label: 'FloodSmart (NFIP): Buy a flood policy', url: S.floodsmart },
        { label: 'Citizens Property Insurance: New flood requirements begin January 1', url: S.citizensFlood },
        { label: 'My Safe Florida Home: Program modernization FAQs', url: S.msfhFaq },
      ],
    },
    es: {
      title: 'Lista de fin de año para renovar el seguro de vivienda en Florida',
      metaTitle: 'Renovación del seguro de casa en Florida: lista | M&K Agency',
      description: '¿Su póliza de vivienda se renueva pronto? Revise avisos, página de declaraciones, deducible de huracán, límites, inventario y seguro de inundación en Florida.',
      ogAlt: 'Ilustración plana de una casa de Florida junto a un documento de renovación con marcas de verificación, una hoja de calendario, una lupa, una palmera y un escudo azul con una marca de verificación',
      excerpt: 'El paquete de renovación es más que una factura. Esto es lo que la ley de Florida exige que su aseguradora le envíe y lo que conviene revisar antes de que la póliza se renueve.',
      category: 'Seguro de vivienda',
      body: [
        { type: 'p', text: 'Muchos propietarios abren el sobre de la renovación, miran una cifra y lo guardan. Ese paquete merece diez minutos más: la ley fija qué debe informarle la aseguradora y cuándo, y la página de declaraciones muestra lo que usted compra para el próximo año. Esta lista se centra en los **documentos y pasos de revisión**.' },
        { type: 'p', text: 'Para reclamos abiertos, vea la [lista para el fin de la temporada de huracanes](/es/blog/end-of-hurricane-season-checklist-florida); para las reglas nuevas, [qué cambia el 1 de enero de 2027](/es/blog/florida-insurance-changes-january-2027).' },

        { type: 'h2', text: '1. Conozca los plazos de aviso que fija la ley' },
        { type: 'p', text: 'Para pólizas de vivienda, condominio, casa móvil y otras residenciales, la [sección 627.4133(2) de los Estatutos de Florida](' + S.s4133 + ') exige que la aseguradora le dé al primer asegurado nombrado:' },
        { type: 'ul', items: [
          'por lo menos **45 días** de aviso por escrito de la **prima de renovación**;',
          'por lo menos **120 días** de aviso por escrito de **no renovación, cancelación o terminación**, con el motivo;',
          'por lo menos **10 días** de aviso si la póliza se cancela por **falta de pago**.',
        ] },
        { type: 'p', text: 'Si falta un aviso requerido (salvo el de 10 días), la ley mantiene la cobertura vigente por un tiempo, hasta que empiece otra cobertura o venza el plazo del aviso. Anote la fecha de renovación; si seis semanas antes no llegó el aviso, pregunte a su agente. Si le llega un aviso de no renovación, llame enseguida: los 120 días son para que busque otra cobertura.' },

        { type: 'h2', text: '2. Lea la página de declaraciones renglón por renglón' },
        { type: 'p', text: 'El Departamento de Servicios Financieros de Florida (DFS) describe la página de declaraciones (“dec page”) como el resumen de lo esencial de la póliza, normalmente la primera o las dos primeras páginas ([DFS, guía del seguro de vivienda](' + S.dfsToolkit + ')). Revise:' },
        { type: 'ul', items: [
          '**Nombres y direcciones:** asegurados, dirección de la propiedad, dirección postal e hipotecaria.',
          '**Límites:** vivienda (A), otras estructuras (B), bienes personales (C), pérdida de uso (D), responsabilidad civil (E) y gastos médicos a terceros (F).',
          '**Deducibles:** el de otros riesgos y, si los hay, el de huracán y el de techo.',
          '**Endosos:** si falta uno que tenía el año pasado, pregunte por qué.',
        ] },

        { type: 'h2', text: '3. Busque el deducible de huracán en dólares' },
        { type: 'p', text: 'El deducible de huracán suele ser un porcentaje del límite de la vivienda, así que cambia con él. Según la [sección 627.701(4)](' + S.s701 + '), la aseguradora debe calcular y mostrar de forma destacada su **monto en dólares** en la página de declaraciones de la renovación o en el aviso de prima. Si la póliza tiene un endoso contra la inflación, debe advertir que el deducible podría ser mayor al momento de la pérdida. Un deducible de techo aparte también se muestra en dólares.' },
        { type: 'p', text: 'Con cada renovación también llega un aviso con las opciones de deducible de huracán: $500, 2%, 5% y 10% del límite, con excepciones para casas de mayor valor (secc. 627.701(3)). Dos detalles de fin de año: el deducible se aplica a todas las pérdidas por huracán del **año calendario**, y si tuvo una pérdida por huracán con la póliza anterior y elige un deducible más bajo, este no se aplica hasta el **1 de enero del año siguiente** (secc. 627.701(5)). Más en nuestra [guía del deducible de huracán](/es/florida-home-insurance-wind-deductible).' },

        { type: 'h2', text: '4. Revise los números de reconstrucción, no solo el total' },
        { type: 'p', text: 'Las pólizas de vivienda, de casa móvil y de unidad de condominio se entregan con una **lista de verificación de coberturas** en un formulario adoptado por el estado y un **resumen de cobertura** ([secc. 627.4143(3)](' + S.s4143 + ')). La lista muestra lo que se incluye y lo que no (socavones, moho, gastos adicionales de vivienda, leyes y ordenanzas). Si no la encuentra, pida copia.' },
        { type: 'ul', items: [
          '**Costo de reemplazo y leyes y ordenanzas.** Las aseguradoras deben ofrecer ambas; la segunda ayuda con el costo extra de reconstruir según el código vigente. Si no la rechazó por escrito, la póliza incluye leyes y ordenanzas al **25%** del límite de la vivienda; también deben ofrecer el 50% ([secc. 627.7011](' + S.s7011 + ')).',
          '**¿Alcanza el límite de la vivienda?** Según el DFS, le toca al propietario asegurarse de tener la cobertura necesaria; estar infraasegurado puede reducir el pago de un reclamo ([DFS](' + S.dfsToolkit + ')).',
        ] },

        { type: 'h2', text: '5. Cuéntele a su agente qué cambió este año' },
        { type: 'p', text: 'Después de mejoras o compras grandes, revise los límites ([DFS](' + S.dfsStorm + ')). Anote lo nuevo: un **techo nuevo** (guarde permiso y factura; vea [la edad del techo y el seguro](/es/blog/roof-age-home-insurance-florida)), ventanas o contraventanas, remodelación, ampliación, piscina o cambios en quién vive en la casa.' },
        { type: 'p', text: 'En cada renovación, la aseguradora debe enviar un aviso en formulario de la OIR sobre cómo las mejoras contra el viento pueden reflejarse en sus tarifas o deducibles ([secc. 627.711](' + S.s711 + ')). El formulario OIR-B1-1802 se actualizó desde el **1 de abril de 2026** y vale hasta cinco años si la casa no tiene cambios importantes y el formulario no tiene errores ([OIR](' + S.oirWind + ')). Lea nuestra [guía de la inspección de mitigación de viento](/es/blog/wind-mitigation-inspection-florida). El portal de My Safe Florida Home está fuera de servicio desde el 10 de noviembre; el programa prevé uno nuevo el **4 de diciembre** ([MSFH](' + S.msfhFaq + '); más en nuestra [guía de MSFH](/es/blog/my-safe-florida-home-2026)).' },

        { type: 'h2', text: '6. Actualice el inventario de su casa' },
        { type: 'p', text: 'El DFS recomienda un inventario cuarto por cuarto, con fotos y números de serie, comparado con el límite de bienes personales, y **actualizarlo por lo menos una vez al año** ([DFS](' + S.dfsToolkit + ')). Revise los límites para joyas, plata, armas y antigüedades. Guarde la póliza, el inventario y el teléfono de su agente en un lugar seguro y accesible después de una tormenta ([DFS](' + S.dfsStorm + ')).' },

        { type: 'h2', text: '7. La inundación va en una póliza aparte' },
        { type: 'p', text: 'Las pólizas de vivienda estándar no cubren daños por inundación ([DFS](' + S.dfsStorm + ')). La cobertura del Programa Nacional de Seguro contra Inundaciones (NFIP) suele empezar **30 días** después de la compra; no hay espera si se compra al obtener, aumentar, extender o renovar una hipoteca, ni al cambiar la cobertura en la renovación ([FloodSmart](' + S.floodsmart + ')). Suele renovarse en otra fecha; anote las dos.' },
        { type: 'p', text: 'En **Citizens Property Insurance Corporation**, las pólizas residenciales personales con viento (salvo unidades de condominio) necesitarán seguro de inundación para renovarse con vigencia desde el **1 de enero de 2027** ([Citizens](' + S.citizensFlood + ')). Detalles en nuestra [guía del requisito de inundación de Citizens](/es/blog/citizens-flood-insurance-requirement-2027) y en la [página de seguro de inundación](/es/flood-insurance-homestead-fl).' },

        { type: 'h2', text: '8. Cierre cualquier reclamo pendiente' },
        { type: 'p', text: 'Según la [secc. 627.70132](' + S.s70132 + '), un reclamo nuevo o reabierto se notifica dentro de **un año** desde la pérdida (en huracanes, la fecha del impacto en tierra) y uno suplementario dentro de **18 meses**. Vea nuestra [lista para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida).' },

        { type: 'h2', text: 'Su lista de renovación' },
        { type: 'ol', items: [
          'Anote las fechas de renovación de la póliza de vivienda y de la de inundación.',
          'Compare nombres, coberturas A–F y endosos con el año pasado.',
          'Escriba el deducible de huracán en dólares.',
          'Revise el costo de reemplazo y la cobertura de leyes y ordenanzas.',
          'Anote los cambios del año: techo, ventanas, remodelación, piscina.',
          'Busque su formulario de mitigación de viento y revise la fecha.',
          'Actualice el inventario y confirme su póliza de inundación.',
        ] },
        { type: 'callout', title: 'Revise su renovación con un agente local', text: 'La cobertura siempre depende de los términos, límites, exclusiones y deducibles de su póliza, así que revísela con un agente con licencia. Envíenos sus preguntas por el [formulario de cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + '). M&K Agency está en 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (lunes a viernes de 9 a 6, sábados con cita). Más en nuestra [página de seguro de vivienda](/es/homeowners-insurance-florida-city).' },
      ],
      faq: [
        { q: '¿Con cuánta anticipación deben avisarme la prima de renovación en Florida?', a: 'Por lo menos 45 días antes, por escrito (secc. 627.4133(2)(a)). La no renovación se avisa con al menos 120 días y con el motivo.' },
        { q: '¿Dónde veo mi deducible de huracán en dólares?', a: 'En la página de declaraciones de la renovación o en el aviso de prima (secc. 627.701(4)).' },
        { q: '¿Mi póliza de vivienda cubre inundaciones?', a: 'No, las pólizas estándar no la cubren. Es una póliza aparte; la del NFIP suele empezar 30 días después de la compra, con excepciones.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, secc. 627.4133 (2026): aviso de cancelación, no renovación o prima de renovación', url: S.s4133 },
        { label: 'Estatutos de Florida, secc. 627.701 (2026): deducibles, incluido el de huracán', url: S.s701 },
        { label: 'Estatutos de Florida, secc. 627.4143 (2026): resumen y lista de verificación de coberturas', url: S.s4143 },
        { label: 'Estatutos de Florida, secc. 627.7011 (2026): costo de reemplazo y leyes y ordenanzas', url: S.s7011 },
        { label: 'Estatutos de Florida, secc. 627.711 (2026): aviso de mitigación de huracanes; formulario de inspección', url: S.s711 },
        { label: 'Estatutos de Florida, secc. 627.70132 (2026): aviso de reclamo de seguro de propiedad', url: S.s70132 },
        { label: 'OIR de Florida: Wind mitigation resources (OIR-B1-1802, vigente desde el 1 de abril de 2026)', url: S.oirWind },
        { label: 'DFS de Florida: Homeowners Insurance Toolkit (guía del seguro de vivienda)', url: S.dfsToolkit },
        { label: 'DFS de Florida: recursos de seguros para tormentas y huracanes', url: S.dfsStorm },
        { label: 'FloodSmart (NFIP): comprar una póliza de inundación', url: S.floodsmart },
        { label: 'Citizens Property Insurance: New flood requirements begin January 1', url: S.citizensFlood },
        { label: 'My Safe Florida Home: preguntas frecuentes sobre la modernización del programa', url: S.msfhFaq },
      ],
    },
    ru: {
      title: 'Чек-лист продления домашней страховки на конец года во Флориде',
      metaTitle: 'Продление страховки дома во Флориде: чек-лист | M&K Agency',
      description: 'Скоро продление полиса на дом во Флориде? Проверьте сроки уведомлений, declarations page, ураганную франшизу, лимиты, опись имущества и полис от наводнения.',
      ogAlt: 'Плоская иллюстрация: дом во Флориде рядом с большим документом о продлении с галочками, листок календаря, лупа, пальма и синий щит с галочкой',
      excerpt: 'Пакет документов о продлении — это не только счёт. Что страховая компания обязана прислать по закону Флориды и что стоит проверить до того, как полис продлится.',
      category: 'Страхование жилья',
      body: [
        { type: 'p', text: 'Многие владельцы домов во Флориде открывают конверт с продлением, смотрят на одну цифру и убирают его в ящик. Этот пакет заслуживает ещё десяти минут: закон определяет, что и когда страховщик обязан сообщить, а declarations page показывает, что вы покупаете на следующий год. Этот чек-лист — о **документах и проверках** при продлении.' },
        { type: 'p', text: 'Об открытых претензиях — в [чек-листе на конец сезона ураганов](/ru/blog/end-of-hurricane-season-checklist-florida), о новых правилах — в материале [что меняется с 1 января 2027 года](/ru/blog/florida-insurance-changes-january-2027).' },

        { type: 'h2', text: '1. Сроки уведомлений, которые устанавливает закон' },
        { type: 'p', text: 'Для полисов на дом, квартиру в кондоминиуме, мобильный дом и другое жильё [статья 627.4133(2) Статутов Флориды](' + S.s4133 + ') обязывает страховщика направить первому названному в полисе страхователю:' },
        { type: 'ul', items: [
          'письменное уведомление о **стоимости продления** не позднее чем за **45 дней**;',
          'письменное уведомление об **отказе в продлении, расторжении или прекращении** полиса не позднее чем за **120 дней**, с указанием причины;',
          'уведомление не позднее чем за **10 дней**, если полис расторгается за **неоплату**.',
        ] },
        { type: 'p', text: 'Если страховщик не направил обязательное уведомление (кроме 10-дневного), покрытие по закону сохраняется до начала нового полиса или до истечения после уведомления срока, равного обязательному, — смотря что наступит раньше. На практике: отметьте дату продления в календаре. Если примерно за шесть недель до неё уведомление не пришло, спросите своего агента. Если пришёл отказ в продлении, звоните сразу: 120 дней даются именно для того, чтобы успеть найти другое покрытие.' },

        { type: 'h2', text: '2. Прочитайте declarations page строка за строкой' },
        { type: 'p', text: 'Департамент финансовых услуг Флориды (DFS) называет declarations page («dec page») сводкой главной информации по полису; обычно это первая или первые две страницы ([DFS, руководство по страхованию жилья](' + S.dfsToolkit + ')). Проверьте:' },
        { type: 'ul', items: [
          '**Имена и адреса:** всех страхователей, адрес застрахованного дома, почтовый адрес и ипотечную компанию.',
          '**Лимиты:** дом (A), другие постройки (B), личное имущество (C), временное проживание (D), гражданская ответственность (E) и медицинские расходы третьих лиц (F).',
          '**Франшизы:** основную и, если она есть в полисе, отдельную ураганную франшизу, а также франшизу на крышу.',
          '**Дополнения (endorsements):** перечень по названиям. Если исчезло то, что было в прошлом году, спросите почему.',
        ] },

        { type: 'h2', text: '3. Узнайте ураганную франшизу в долларах' },
        { type: 'p', text: 'Ураганная франшиза обычно задаётся процентом от лимита на дом, поэтому меняется вместе с ним. По [статье 627.701(4)](' + S.s701 + ') страховщик обязан рассчитать и на видном месте указать **точную сумму в долларах** ураганной франшизы на declarations page при продлении или в уведомлении о стоимости продления. Если в полисе есть дополнение с автоматической индексацией лимита (inflation guard), страховщик должен также предупредить, что на момент ущерба франшиза может оказаться выше. Отдельная франшиза на крышу тоже должна быть указана в долларах.' },
        { type: 'p', text: 'При каждом продлении страховщик обязан прислать уведомление о вариантах ураганной франшизы, которые он должен предложить: $500, 2%, 5% и 10% от лимита на дом, с исключениями для более дорогих домов (ст. 627.701(3)). Две детали, важные в конце года: ураганная франшиза применяется ко всем покрытым ураганным убыткам за **календарный год**, а если у вас был ураганный убыток по прежнему полису и при продлении вы выбрали франшизу ниже, новая сумма начнёт действовать только с **1 января следующего года** (ст. 627.701(5)). Подробнее — в нашем [материале об ураганной франшизе](/ru/florida-home-insurance-wind-deductible).' },

        { type: 'h2', text: '4. Проверьте суммы на восстановление, а не только итог' },
        { type: 'p', text: 'К полисам на дом, мобильный дом и квартиру в кондоминиуме прилагаются **чек-лист покрытий** по утверждённой штатом форме и **краткое описание покрытия** ([ст. 627.4143(3)](' + S.s4143 + ')). Чек-лист показывает, что в полис входит, а что нет: ураган и неураганный ветер, карстовые провалы, плесень, расходы на временное проживание, покрытие law and ordinance, восстановительная стоимость или фактическая (с учётом износа). Если не можете найти свой, попросите копию.' },
        { type: 'ul', items: [
          '**Восстановительная стоимость и law and ordinance.** Страховщики обязаны предлагать покрытие по восстановительной стоимости и покрытие law and ordinance — оно помогает с дополнительными расходами на восстановление по действующим строительным нормам. Если вы не отказались от него письменно, считается, что полис включает law and ordinance в размере **25%** от лимита на дом; вариант 50% тоже должен быть предложен ([ст. 627.7011](' + S.s7011 + ')).',
          '**Хватает ли лимита на дом?** DFS напоминает: убедиться, что покрытия достаточно, — ответственность самого владельца, а недострахование на момент ущерба может уменьшить выплату ([DFS](' + S.dfsToolkit + ')).',
        ] },

        { type: 'h2', text: '5. Расскажите агенту, что изменилось за год' },
        { type: 'p', text: 'DFS советует пересматривать лимиты после улучшений дома или крупных покупок ([DFS, ресурсы на случай штормов](' + S.dfsStorm + ')). До даты продления составьте список нового: **замена крыши** (сохраните разрешение и счёт; см. [возраст крыши и страховка дома](/ru/blog/roof-age-home-insurance-florida)), новые окна или ставни, ремонт, пристройка, бассейн, изменения в том, кто живёт в доме.' },
        { type: 'p', text: 'Документы по защите от ветра тоже важны. При оформлении и при каждом продлении страховщик обязан прислать уведомление по форме OIR о том, как ветроустойчивые элементы дома могут учитываться в его тарифах или франшизах ([ст. 627.711](' + S.s711 + ')). Форма инспекции OIR-B1-1802 обновлена и действует с **1 апреля 2026 года**; заполненная форма действительна до пяти лет, если в конструкции дома не было существенных изменений и в форме нет ошибок ([OIR](' + S.oirWind + ')). Подробнее — в нашем [материале об инспекции wind mitigation](/ru/blog/wind-mitigation-inspection-florida). Если вы собирались подавать заявку в My Safe Florida Home: портал для заявителей не работает с 10 ноября, а запуск обновлённого портала программа ожидает **4 декабря** ([MSFH](' + S.msfhFaq + '); подробности — в [нашем материале о MSFH](/ru/blog/my-safe-florida-home-2026)).' },

        { type: 'h2', text: '6. Обновите опись имущества' },
        { type: 'p', text: 'DFS рекомендует составить опись по комнатам — с фотографиями и серийными номерами, сравнить итог с лимитом на личное имущество и **обновлять её хотя бы раз в год** ([DFS](' + S.dfsToolkit + ')). Многие полисы ограничивают покрытие ценностей — украшений, столового серебра, оружия, антиквариата, — так что проверьте и эти лимиты. Храните полис, опись и телефон агента в надёжном месте, до которого сможете добраться после шторма ([DFS](' + S.dfsStorm + ')).' },

        { type: 'h2', text: '7. Наводнение — это отдельный полис' },
        { type: 'p', text: 'Стандартные полисы на дом не покрывают ущерб от наводнения ([DFS](' + S.dfsStorm + ')). Полис Национальной программы страхования от наводнений (NFIP) обычно вступает в силу через **30 дней** после покупки; ожидания нет, если полис покупается в связи с оформлением, увеличением, продлением срока или переоформлением ипотеки, а также при изменении покрытия во время продления полиса от наводнения ([FloodSmart](' + S.floodsmart + ')). Полис от наводнения часто продлевается в другую дату, чем полис на дом, поэтому отметьте обе.' },
        { type: 'p', text: 'Если ваш дом застрахован в **Citizens Property Insurance Corporation**, то для продления личного жилищного полиса с покрытием от ветра (кроме квартир в кондоминиумах) с датой начала **1 января 2027 года** или позже понадобится страховка от наводнения ([Citizens](' + S.citizensFlood + ')). Подробности — в [нашем материале о требовании Citizens](/ru/blog/citizens-flood-insurance-requirement-2027) и на [странице о страховании от наводнения](/ru/flood-insurance-homestead-fl).' },

        { type: 'h2', text: '8. Закройте вопросы по претензиям' },
        { type: 'p', text: 'Продление — хороший момент убедиться, что ничего не осталось незавершённым. По [статье 627.70132](' + S.s70132 + ') о новой или возобновлённой претензии по имуществу нужно уведомить страховщика в течение **одного года** с даты ущерба, о дополнительной — в течение **18 месяцев**; для ураганов датой ущерба считается день выхода урагана на сушу. Порядок действий — в нашем [чек-листе по претензиям после урагана](/ru/blog/hurricane-claim-checklist-florida).' },

        { type: 'h2', text: 'Ваш чек-лист продления' },
        { type: 'ol', items: [
          'Отметьте даты продления полиса на дом и полиса от наводнения.',
          'Сравните имена, покрытия A–F и дополнения с прошлым годом.',
          'Запишите ураганную франшизу в долларах.',
          'Проверьте восстановительную стоимость и покрытие law and ordinance.',
          'Составьте список изменений за год: крыша, окна, ремонт, пристройки, бассейн.',
          'Найдите форму wind mitigation и проверьте её дату.',
          'Обновите опись имущества и проверьте полис от наводнения.',
        ] },
        { type: 'callout', title: 'Разберите продление с местным агентом', text: 'Покрытие всегда зависит от условий, лимитов, исключений и франшиз вашего полиса, поэтому проверьте его вместе с лицензированным агентом. Задайте вопрос через [форму заявки](/ru/quote) или позвоните по номеру [(305) 859-3953](' + TEL + '). M&K Agency: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (понедельник–пятница 9–6, суббота по записи). Мы говорим по-русски — [о нас](/ru/russian-speaking-insurance-agent-miami). Подробнее — на нашей [странице о страховании дома](/ru/homeowners-insurance-florida-city).' },
      ],
      faq: [
        { q: 'За сколько дней страховщик должен сообщить стоимость продления во Флориде?', a: 'Для полисов на жильё — не позднее чем за 45 дней до продления, письменно (ст. 627.4133(2)(a)). Об отказе в продлении — не позднее чем за 120 дней, с указанием причины.' },
        { q: 'Где посмотреть ураганную франшизу в долларах?', a: 'На declarations page при продлении или в уведомлении о стоимости продления. Закон Флориды обязывает страховщика рассчитать сумму в долларах и указать её на видном месте (ст. 627.701(4)).' },
        { q: 'Покрывает ли полис на дом наводнение?', a: 'Стандартные полисы на дом наводнение не покрывают. Для этого нужен отдельный полис; покрытие NFIP обычно начинается через 30 дней после покупки, с некоторыми исключениями.' },
      ],
      sources: [
        { label: 'Florida Statutes, s. 627.4133 (2026): уведомления о расторжении, отказе в продлении и стоимости продления', url: S.s4133 },
        { label: 'Florida Statutes, s. 627.701 (2026): франшизы, включая ураганную', url: S.s701 },
        { label: 'Florida Statutes, s. 627.4143 (2026): описание покрытия и чек-лист покрытий', url: S.s4143 },
        { label: 'Florida Statutes, s. 627.7011 (2026): восстановительная стоимость и law and ordinance', url: S.s7011 },
        { label: 'Florida Statutes, s. 627.711 (2026): уведомление о защите от ураганов; форма инспекции', url: S.s711 },
        { label: 'Florida Statutes, s. 627.70132 (2026): уведомление о претензии по страхованию имущества', url: S.s70132 },
        { label: 'OIR Флориды: Wind mitigation resources (OIR-B1-1802, действует с 1 апреля 2026)', url: S.oirWind },
        { label: 'DFS Флориды: Homeowners Insurance Toolkit (руководство по страхованию жилья)', url: S.dfsToolkit },
        { label: 'DFS Флориды: страхование на случай штормов и ураганов', url: S.dfsStorm },
        { label: 'FloodSmart (NFIP): покупка полиса от наводнения', url: S.floodsmart },
        { label: 'Citizens Property Insurance: New flood requirements begin January 1', url: S.citizensFlood },
        { label: 'My Safe Florida Home: вопросы и ответы о модернизации программы', url: S.msfhFaq },
      ],
    },
  },
};
