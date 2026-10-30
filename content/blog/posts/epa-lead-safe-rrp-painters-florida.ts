import type { BlogPost } from '../types';

// Refreshed 2026-10-30 (first published 2026-10-04). Facts checked 2026-10-30 against the current eCFR
// text of 40 CFR part 745 subpart E and 745.103 (eCFR title 40 up to date as of 2026-10-28; subpart E
// last amended 89 FR 89457, Nov. 12, 2024) and EPA/FDOH pages (raw copies in /workspace/rrp/):
// - 745.81(a): subpart E applies in any State without an EPA-authorized program (subpart Q);
//   (a)(2)(ii) since April 22, 2010 no firm may perform, offer or claim to perform renovations without
//   EPA certification; (a)(3) renovations directed by certified renovators.
// - EPA RRP program page (updated June 17, 2026) and firm certification page (updated May 27, 2026):
//   authorized states are AL, DE, GA, IA, KS, MA, MS, NC, OK, OR, RI, UT, VT, (WA on the firm page), WI
//   and one Tribe. Florida is not listed, so EPA administers the RRP program in Florida. Rule generally
//   does not apply to homeowners in their own home, but does for renting, home child care, flipping.
//   Firm page: applies to all firms incl. sole proprietorships; certification good for five years;
//   apply for recertification at least 90 days before expiry; amend within 90 days; not transferable,
//   a new owner must apply anew. No fees quoted in the article.
// - 745.82(a)(1)-(3): exceptions for components determined to have no lead-based paint (certified
//   inspector/risk assessor; certified renovator with EPA-recognized test kit; paint chips to an
//   EPA-recognized lab). 745.82(b): emergency renovations.
// - 745.83: child-occupied facility (pre-1978; same child under 6; 2+ days/week, 3 h each, 6 h/week,
//   60 h/year); minor repair and maintenance (6 sq ft per room interior / 20 sq ft exterior; no
//   745.85(a)(3) practices; no window replacement or demolition; same room within 30 days = one job);
//   renovation includes surface preparation (sanding, scraping); pamphlet = Renovate Right.
// - 745.84(a): pamphlet to owner no more than 60 days before; written acknowledgment or certificate of
//   mailing at least 7 days prior; adult occupant too if owner does not occupy. (c) child-occupied
//   facilities: owner, adult representative, parents/guardians.
// - 745.85(a)(1) signs; (a)(2)(i) interior: objects out/covered, ducts closed, floor plastic 6 ft;
//   (a)(2)(ii) exterior: doors/windows within 20 ft closed, ground plastic 10 ft, vertical containment
//   within 10 ft of property line; (a)(3) open flame prohibited, high-speed machines only with shroud +
//   HEPA attachment, heat gun only below 1,100 F; (a)(4) waste contained; (a)(5) cleaning; (b) cleaning
//   verification by certified renovator (visual + wet cloth vs EPA cleaning verification card for
//   windowsills, uncarpeted floors, countertops; exterior visual); (d) painting already-prepared walls
//   after cleaning verification is not regulated.
// - 745.86(a) records 3 years; (c) compliance info to owner/occupant at final invoice or within 30 days
//   of completion, whichever is earlier.
// - 745.87(a),(d),(e): TSCA violation, civil and criminal sanctions; lead-based paint assumed present.
// - 745.89(a)(2)(i) certificate expiration not more than 5 years; (b) re-certified every 5 years;
//   (d) firm responsibilities.
// - 745.90(a)(4): refresher within 5 years; without hands-on = 3 years; with hands-on = 5 years; the
//   next refresher after an online one must include hands-on; lapse = retake initial course.
//   (b) renovator duties (present for signs, containment, cleaning; available on site or by phone;
//   carries certificates; trains workers). EPA renovator page: initial 8-hour course with 2 hours
//   hands-on; refresher 4 hours.
// - 745.103: target housing = built before 1978, except elderly/disabled housing and 0-bedroom
//   dwellings unless a child under 6 resides or is expected to reside there.
// - EPA post-disaster page: emergency provision exempts information distribution, signs, containment,
//   waste handling and training/certification only to the extent necessary; NOT cleaning, cleaning
//   verification, recordkeeping; remaining work after the emergency portion is fully covered.
// - EPA Renovate Right page: Spanish edition "Guía para remodelar correctamente".
// Correction vs. the 2026-10-04 text: it gave no renovator refresher rule (5 years hands-on / 3 years
// online), omitted the emergency-renovation limits, the 30-day post-job paperwork to the owner, and
// the cleaning verification card; the old "tested lead-..." wording now follows the rule’s own test language.
const E = (s: string) => 'https://www.ecfr.gov/current/title-40/section-745.' + s;
const S = {
  s81: E('81'),
  s82: E('82'),
  s83: E('83'),
  s84: E('84'),
  s85: E('85'),
  s86: E('86'),
  s87: E('87'),
  s89: E('89'),
  s90: E('90'),
  s103: E('103'),
  epaRrp: 'https://www.epa.gov/lead/lead-renovation-repair-and-painting-program',
  epaFirm: 'https://www.epa.gov/lead/renovation-repair-and-painting-program-firm-certification',
  epaTrain: 'https://www.epa.gov/lead/renovation-repair-and-painting-program-renovator-training',
  epaDisaster: 'https://www.epa.gov/lead/post-disaster-renovations-and-lead-based-paint',
  epaRR: 'https://www.epa.gov/lead/renovate-right',
  fdoh: 'https://www.floridahealth.gov/community-environmental-public-health/environmental-public-health/lead/renovation-repair-and-painting-rrp/',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'epa-lead-safe-rrp-painters-florida',
  datePublished: '2026-10-04',
  dateModified: '2026-10-30',
  translations: {
    en: {
      title: 'EPA Lead-Safe (RRP) Certification for Painters: Working on Pre-1978 Homes in Florida',
      metaTitle: 'EPA RRP Certification for Florida Painters | M&K Agency',
      description: 'Painting a pre-1978 home in Florida? Who needs EPA RRP firm and renovator certification, the 6/20 sq ft rule, refresher deadlines, cleanup and records.',
      ogAlt: 'Flat illustration of an older Florida house with plastic sheeting on the ground, a ladder, a scraper, a HEPA vacuum and a covered paint bucket',
      excerpt: 'Scraping and sanding old paint can release lead dust. If you paint homes or day cares built before 1978, EPA’s RRP rule sets who may do the work and how. Updated for 2026.',
      category: 'Painting contractor insurance',
      body: [
        { type: 'p', text: 'Plenty of South Florida homes were built before 1978, the cutoff year the federal lead paint rules use. When a paid painting job on one of them involves scraping, sanding or removing painted surfaces, the federal **Renovation, Repair and Painting (RRP) rule** in 40 CFR part 745, subpart E usually applies. Unless testing shows otherwise, the rule treats the paint as lead-based ([745.87](' + S.s87 + ')). Here is how it works for Florida painters, checked against the current rule in October 2026.' },
        { type: 'h2', text: 'Who runs the RRP program in Florida?' },
        { type: 'p', text: 'EPA does. The federal rule applies in every state that does not have its own EPA-authorized program ([745.81](' + S.s81 + ')). EPA’s current list of authorized states does not include Florida, so Florida painters get their firm certification from EPA and their renovator training from an EPA-accredited provider ([EPA](' + S.epaRrp + '); [EPA firm certification](' + S.epaFirm + ')). If you also take jobs in a state that runs its own program, such as Georgia or Alabama, check that state’s rules too.' },
        { type: 'h2', text: 'Which jobs are covered' },
        { type: 'p', text: 'The rule covers renovations **done for pay** in “target housing,” meaning housing built before 1978, and in **child-occupied facilities** ([745.82](' + S.s82 + '); [745.103](' + S.s103 + ')). A child-occupied facility is a pre-1978 building, or part of one, that the same child under 6 visits on at least two days a week, at least 3 hours a day, 6 hours a week and 60 hours a year. Think day cares and preschools. For painters, the key point is that “renovation” includes **surface preparation** such as sanding and scraping ([745.83](' + S.s83 + ')).' },
        { type: 'p', text: 'The main exceptions:' },
        { type: 'ul', items: [
          '**Minor repair and maintenance:** work that disturbs **6 square feet or less** of painted surface per room inside, or **20 square feet or less** outside. It stops being “minor” if you use a prohibited practice, replace windows or demolish painted surfaces, and jobs in the same room within 30 days count as one job.',
          '**Testing shows no lead-based paint:** a certified inspector or risk assessor made a written determination, or a certified renovator tested each affected component with an EPA-recognized test kit or sent paint chips to an EPA-recognized lab.',
          '**Excluded housing:** housing for the elderly or people with disabilities, and studios where the living and sleeping areas are not separated, unless a child under 6 lives there or is expected to.',
          '**Owners working on their own home:** generally outside the rule, but it does apply to an owner who rents out the home, runs a child care in it or flips houses ([Florida Department of Health](' + S.fdoh + ')).',
        ] },
        { type: 'p', text: 'One detail painters like: once the prep is done and the area has passed cleaning verification, work that does not disturb paint, such as rolling new paint on walls that are already prepared, is not regulated by the rule ([745.85(d)](' + S.s85 + ')).' },
        { type: 'h2', text: 'Certification for the firm' },
        { type: 'p', text: 'Since April 22, 2010, a firm may not perform, offer or **advertise** covered work without EPA certification. That includes one-person businesses. You apply online, and the certificate lasts up to five years ([745.89](' + S.s89 + ')). EPA asks for the recertification application at least 90 days before the current certificate expires. Changes such as a new business name or address must be reported within 90 days, and a firm certificate does not transfer when a business is sold ([EPA firm certification](' + S.epaFirm + ')).' },
        { type: 'h2', text: 'Certification for the renovator' },
        { type: 'p', text: 'Every covered job needs an assigned **certified renovator**: a person who passed an EPA-accredited course. The initial course is 8 hours, including 2 hours of hands-on training ([EPA renovator training](' + S.epaTrain + ')). The certificate does not last forever ([745.90](' + S.s90 + ')):' },
        { type: 'ul', items: [
          'A refresher course must be completed within **5 years** of the initial course.',
          'A refresher **with** hands-on training keeps you certified for **5 years**. An online refresher **without** hands-on training gives **3 years**, and the next refresher after it must include hands-on training.',
          'If the certification lapses, you have to retake the full initial course.',
        ] },
        { type: 'p', text: 'The certified renovator trains the rest of the crew on the job, must be on site while signs go up, while containment is set up and during cleaning, and must be reachable on site or by phone the whole time. They also keep copies of their course certificates at the job.' },
        { type: 'h2', text: 'What the rule asks on the job' },
        { type: 'ol', items: [
          '**Before work:** give the owner EPA’s **Renovate Right** pamphlet no more than 60 days before starting, and get a signed acknowledgment or a certificate of mailing at least 7 days ahead. If the owner does not live there, an adult occupant gets one too ([745.84](' + S.s84 + ')). EPA also publishes a Spanish edition ([EPA](' + S.epaRR + ')).',
          '**Signs and containment:** post warning signs, then contain the work area. Inside, that means moving or covering belongings, sealing ducts and taping plastic on the floor at least 6 feet out. Outside, it means closing doors and windows within 20 feet, covering the ground at least 10 feet out, and adding vertical containment when you work within 10 feet of the property line ([745.85](' + S.s85 + ')).',
          '**Prohibited practices:** no open-flame burning or torching, no power sanding, grinding or blasting unless the tool has a shroud and a HEPA vacuum attachment, and no heat gun at 1,100°F or hotter.',
          '**Waste and cleanup:** keep debris contained, bag chips and debris, mist and fold the plastic, and on interior jobs HEPA-vacuum and wet-clean the area.',
          '**Cleaning verification:** the certified renovator inspects visually, then wipes windowsills, floors and countertops with a damp cloth and compares it to EPA’s cleaning verification card. Exterior jobs get a visual check.',
          '**Paperwork:** give the owner (and an adult occupant, if different) the compliance records with the final invoice or within 30 days of finishing, whichever is first, and **keep records for 3 years** ([745.86](' + S.s86 + ')).',
        ] },
        { type: 'h2', text: 'After a hurricane or other emergency' },
        { type: 'p', text: 'Urgent work needed to protect a home or public health, such as patching storm damage, can fall under the rule’s emergency provision. It relaxes the pamphlet, signs, containment, waste and certification steps, but only as far as the emergency requires. Cleaning, cleaning verification and recordkeeping still apply, and once the emergency part is done, the rest of the job is fully covered ([EPA](' + S.epaDisaster + '); [745.82(b)](' + S.s82 + ')).' },
        { type: 'h2', text: 'Why it matters for your insurance' },
        { type: 'p', text: 'Breaking the rule is a federal violation that can bring civil and criminal penalties ([745.87](' + S.s87 + ')), and a client may blame a job for lead dust. Many general liability policies have a pollution exclusion or specific wording about lead, so ask your agent what your own GL policy says before you take pre-1978 work. When we quote a painting business, tell us whether you work on older homes or day cares, whether your firm is RRP-certified and how you handle surface prep. Coverage always depends on the policy wording.' },
        { type: 'p', text: 'More for painters: our [painting contractor insurance page](/en/painting-contractor-insurance-florida), [general liability insurance](/en/insurance/general-liability), [contractor insurance in Florida](/en/contractor-insurance-florida), [certificates of insurance for contractors](/en/blog/certificate-of-insurance-contractors-florida) and [helpers: employee or 1099 for workers’ comp](/en/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'callout', title: 'Questions about your coverage?', text: '[Request a quote](/en/quote) or call [(305) 859-3953](' + TEL + ') and tell us about the homes you work on. A licensed agent will go over it with you in English, Spanish or Russian. This is general information, not legal advice; check the regulation or EPA for your situation.' },
      ],
      faq: [
        { q: 'Do painters need EPA lead certification in Florida?', a: 'For paid work that disturbs paint in homes built before 1978 or in child-occupied facilities, generally yes, unless an exception applies. Florida has no state-run RRP program, so the firm needs EPA certification and a certified renovator must be assigned to the job.' },
        { q: 'How long does a certified renovator certificate last?', a: 'A refresher is due within 5 years of the initial course. A hands-on refresher keeps you certified for 5 years; an online refresher without hands-on training gives 3 years, and the next one must be hands-on.' },
        { q: 'Does my general liability policy cover lead claims?', a: 'It depends on the policy. Many GL policies contain pollution exclusions or lead-specific wording, so ask your agent to walk you through yours before you take pre-1978 work.' },
      ],
      sources: [
        { label: '40 CFR 745.81–745.83: effective dates, applicability, definitions (eCFR)', url: S.s83 },
        { label: '40 CFR 745.84: Renovate Right pamphlet delivery (eCFR)', url: S.s84 },
        { label: '40 CFR 745.85: work practice standards and cleaning verification (eCFR)', url: S.s85 },
        { label: '40 CFR 745.86–745.87: recordkeeping and enforcement (eCFR)', url: S.s86 },
        { label: '40 CFR 745.89: firm certification (eCFR)', url: S.s89 },
        { label: '40 CFR 745.90: renovator certification and refresher training (eCFR)', url: S.s90 },
        { label: '40 CFR 745.103: definition of target housing (eCFR)', url: S.s103 },
        { label: 'EPA: Lead Renovation, Repair and Painting Program (authorized states)', url: S.epaRrp },
        { label: 'EPA: RRP firm certification', url: S.epaFirm },
        { label: 'EPA: RRP renovator training', url: S.epaTrain },
        { label: 'EPA: Post-disaster renovations and lead-based paint', url: S.epaDisaster },
        { label: 'EPA: Renovate Right pamphlet', url: S.epaRR },
        { label: 'Florida Department of Health: Renovation, Repair, and Painting', url: S.fdoh },
      ],
    },
    es: {
      title: 'Certificación EPA Lead-Safe (RRP) para pintores: trabajos en casas de antes de 1978 en Florida',
      metaTitle: 'Certificación RRP de la EPA para pintores | M&K Agency',
      description: '¿Pinta casas de antes de 1978 en Florida? Quién necesita la certificación RRP de la EPA, la regla de 6 y 20 pies², los cursos de repaso y los registros.',
      ogAlt: 'Ilustración de una casa antigua en Florida con plástico en el suelo, escalera, raspador, aspiradora HEPA y un cubo de pintura tapado',
      excerpt: 'Raspar y lijar pintura vieja puede soltar polvo de plomo. Si pinta casas o guarderías construidas antes de 1978, la regla RRP de la EPA define quién puede hacer el trabajo y cómo. Actualizado para 2026.',
      category: 'Seguro para pintores',
      body: [
        { type: 'p', text: 'En el sur de Florida abundan las casas de antes de 1978, el año límite de las normas federales sobre pintura con plomo. Si un trabajo pagado en una de ellas incluye raspar, lijar o quitar pintura, por lo general aplica la **regla federal de Renovación, Reparación y Pintura (RRP)**, en el 40 CFR parte 745, subparte E. Salvo prueba en contrario, la norma da por hecho que la pintura tiene plomo ([745.87](' + S.s87 + ')). Así funciona para pintores en Florida, según el texto vigente en octubre de 2026.' },
        { type: 'h2', text: '¿Quién administra el programa RRP en Florida?' },
        { type: 'p', text: 'La EPA. La regla federal rige en todo estado sin programa propio autorizado por la EPA ([745.81](' + S.s81 + ')). Florida no aparece en la lista actual de estados autorizados, así que aquí la certificación de la empresa la otorga la EPA y el curso de renovador se toma con un proveedor acreditado por la EPA ([EPA](' + S.epaRrp + '); [certificación de empresas](' + S.epaFirm + ')). Si trabaja también en un estado con programa propio, como Georgia o Alabama, revise sus reglas.' },
        { type: 'h2', text: 'Qué trabajos cubre la regla' },
        { type: 'p', text: 'La regla aplica a renovaciones **hechas a cambio de pago** en “target housing”, es decir, viviendas construidas antes de 1978, y en **instalaciones ocupadas por niños** ([745.82](' + S.s82 + '); [745.103](' + S.s103 + ')). Es un edificio de antes de 1978 (o parte de él) al que un mismo niño menor de 6 años va al menos dos días por semana, 3 horas al día, 6 horas semanales y 60 al año, como una guardería. Lo clave para un pintor es que la “renovación” incluye la **preparación de superficies**, como lijar y raspar ([745.83](' + S.s83 + ')).' },
        { type: 'p', text: 'Las excepciones principales:' },
        { type: 'ul', items: [
          '**Reparaciones y mantenimiento menores:** tocar **6 pies cuadrados o menos** de superficie pintada por cuarto adentro, o **20 pies cuadrados o menos** afuera, sin prácticas prohibidas, cambio de ventanas ni demolición. Los trabajos en el mismo cuarto dentro de 30 días cuentan como uno solo.',
          '**Una prueba descarta la pintura con plomo:** lo determinó por escrito un inspector o evaluador de riesgos certificado, o un renovador certificado usando un kit o un laboratorio reconocidos por la EPA.',
          '**Viviendas excluidas:** las destinadas a personas mayores o con discapacidad y los estudios sin dormitorio separado, salvo que viva o vaya a vivir allí un niño menor de 6 años.',
          '**Dueños que trabajan en su propia casa:** por lo general quedan fuera, pero la regla sí aplica si alquila la casa, tiene una guardería en ella o compra casas para remodelar y vender ([Departamento de Salud de Florida](' + S.fdoh + ')).',
        ] },
        { type: 'p', text: 'Un detalle útil: cuando el área ya pasó la verificación de limpieza, pintar paredes ya preparadas sin tocar la pintura vieja no está regulado ([745.85(d)](' + S.s85 + ')).' },
        { type: 'h2', text: 'La certificación de la empresa' },
        { type: 'p', text: 'Desde el 22 de abril de 2010, ninguna empresa, ni siquiera de una sola persona, puede hacer, ofrecer ni **anunciar** trabajos cubiertos sin certificación de la EPA. La solicitud se hace en línea y el certificado dura hasta cinco años ([745.89](' + S.s89 + ')). Pida la renovación al menos 90 días antes del vencimiento. Un cambio de nombre o dirección se informa en 90 días, y el certificado no pasa a un nuevo dueño ([EPA](' + S.epaFirm + ')).' },
        { type: 'h2', text: 'La certificación del renovador' },
        { type: 'p', text: 'Cada trabajo cubierto necesita un **renovador certificado** asignado, que aprobó un curso acreditado por la EPA. El curso inicial dura 8 horas, con 2 horas de práctica ([EPA](' + S.epaTrain + ')). La certificación vence ([745.90](' + S.s90 + ')):' },
        { type: 'ul', items: [
          'Hay que tomar un curso de repaso dentro de los **5 años** siguientes al curso inicial.',
          'El repaso **con** práctica presencial lo mantiene certificado **5 años**. El repaso en línea **sin** práctica da **3 años**, y el siguiente repaso tiene que incluir práctica.',
          'Si vence, hay que repetir el curso inicial completo.',
        ] },
        { type: 'p', text: 'El renovador certificado entrena en la obra al resto de la cuadrilla, debe estar presente al poner los letreros, al instalar la contención y durante la limpieza, y estar localizable en la obra o por teléfono todo el tiempo, con copias de sus certificados a mano.' },
        { type: 'h2', text: 'Qué exige la regla en la obra' },
        { type: 'ol', items: [
          '**Antes de empezar:** entregue al dueño el folleto **Renovate Right** de la EPA no más de 60 días antes y consiga un acuse firmado o un certificado de envío por correo al menos 7 días antes. Si el dueño no vive allí, un ocupante adulto también lo recibe ([745.84](' + S.s84 + ')). La EPA tiene una versión en español, la *Guía para remodelar correctamente* ([EPA](' + S.epaRR + ')).',
          '**Letreros y contención:** ponga letreros de advertencia y aísle el área. Adentro: saque o cubra los muebles, selle los ductos y cubra el piso con plástico al menos 6 pies alrededor. Afuera: cierre puertas y ventanas a menos de 20 pies, cubra el suelo al menos 10 pies y use contención vertical cerca (a menos de 10 pies) del límite de la propiedad ([745.85](' + S.s85 + ')).',
          '**Prácticas prohibidas:** quemar con llama o soplete; lijar, esmerilar o chorrear con máquina sin protector y aspiradora HEPA acoplada; usar pistola de calor a 1,100 °F o más.',
          '**Desechos y limpieza:** contenga y embolse los escombros, humedezca y doble el plástico y, adentro, aspire con HEPA y limpie con paño húmedo.',
          '**Verificación de limpieza:** el renovador certificado revisa a la vista y luego pasa un paño húmedo por los alféizares, pisos y mostradores y lo compara con la tarjeta de verificación de la EPA. En exteriores basta la revisión visual.',
          '**Papeles:** entregue al dueño (y al ocupante adulto, si es otro) los registros de cumplimiento con la factura final o dentro de 30 días, lo que ocurra primero, y **guarde los registros 3 años** ([745.86](' + S.s86 + ')).',
        ] },
        { type: 'h2', text: 'Después de un huracán u otra emergencia' },
        { type: 'p', text: 'Los trabajos urgentes, como tapar daños de una tormenta, pueden acogerse a la disposición de emergencia, que flexibiliza el folleto, los letreros, la contención, el manejo de desechos y la certificación, pero solo en la medida que exige la emergencia. La limpieza, su verificación y los registros siguen siendo obligatorios, y al terminar la parte urgente, el resto del trabajo queda cubierto por completo ([EPA](' + S.epaDisaster + '); [745.82(b)](' + S.s82 + ')).' },
        { type: 'h2', text: 'Por qué importa para su seguro' },
        { type: 'p', text: 'Incumplir la regla es una infracción federal con posibles sanciones civiles y penales ([745.87](' + S.s87 + ')), y un cliente puede culpar a su trabajo por el polvo de plomo. Muchas pólizas de responsabilidad general tienen una exclusión por contaminación o cláusulas sobre el plomo: pregúntele a su agente qué dice su póliza de GL antes de aceptar trabajos en casas de antes de 1978. Al cotizar, díganos si trabaja en casas antiguas o guarderías, si su empresa tiene la certificación RRP y cómo prepara las superficies. La cobertura siempre depende de lo que diga la póliza.' },
        { type: 'p', text: 'Más para pintores: nuestra [página de seguro para pintores](/es/painting-contractor-insurance-florida), [seguro de responsabilidad general](/es/insurance/general-liability), [seguro para contratistas en Florida](/es/contractor-insurance-florida), [certificados de seguro para contratistas](/es/blog/certificate-of-insurance-contractors-florida) y [ayudantes: empleado o 1099 para workers’ comp](/es/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'callout', title: '¿Dudas sobre su cobertura?', text: '[Pida una cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + ') y cuéntenos en qué casas trabaja. Un agente con licencia le atiende en español, inglés o ruso. Información general, no asesoría legal; consulte la norma o a la EPA.' },
      ],
      faq: [
        { q: '¿Los pintores necesitan la certificación de plomo de la EPA en Florida?', a: 'Para trabajos pagados que tocan pintura en casas de antes de 1978 o en instalaciones ocupadas por niños, por lo general sí, salvo que aplique una excepción. Florida no tiene programa RRP estatal, así que la empresa necesita la certificación de la EPA y cada trabajo debe tener un renovador certificado asignado.' },
        { q: '¿Cuánto dura la certificación de renovador?', a: 'El curso de repaso debe tomarse dentro de los 5 años siguientes al curso inicial. Con práctica presencial queda certificado 5 años; en línea sin práctica, 3 años, y el siguiente repaso debe incluir práctica.' },
        { q: '¿Mi póliza de responsabilidad general cubre reclamos por plomo?', a: 'Depende de la póliza. Muchas pólizas de GL incluyen exclusiones por contaminación o lenguaje específico sobre el plomo, así que pídale a su agente que le explique la suya antes de aceptar trabajos en casas de antes de 1978.' },
      ],
      sources: [
        { label: '40 CFR 745.81–745.83: fechas, aplicación y definiciones (eCFR, en inglés)', url: S.s83 },
        { label: '40 CFR 745.84: entrega del folleto Renovate Right (eCFR, en inglés)', url: S.s84 },
        { label: '40 CFR 745.85: prácticas de trabajo y verificación de limpieza (eCFR, en inglés)', url: S.s85 },
        { label: '40 CFR 745.86–745.87: registros y cumplimiento (eCFR, en inglés)', url: S.s86 },
        { label: '40 CFR 745.89: certificación de empresas (eCFR, en inglés)', url: S.s89 },
        { label: '40 CFR 745.90: certificación de renovadores y cursos de repaso (eCFR, en inglés)', url: S.s90 },
        { label: '40 CFR 745.103: definición de target housing (eCFR, en inglés)', url: S.s103 },
        { label: 'EPA: programa RRP y estados autorizados (en inglés)', url: S.epaRrp },
        { label: 'EPA: certificación de empresas RRP (en inglés)', url: S.epaFirm },
        { label: 'EPA: capacitación de renovadores RRP (en inglés)', url: S.epaTrain },
        { label: 'EPA: renovaciones después de desastres y pintura con plomo (en inglés)', url: S.epaDisaster },
        { label: 'EPA: folleto Renovate Right y Guía para remodelar correctamente', url: S.epaRR },
        { label: 'Departamento de Salud de Florida: Renovation, Repair, and Painting (en inglés)', url: S.fdoh },
      ],
    },
    ru: {
      title: 'Сертификат EPA Lead-Safe (RRP) для маляров: работа в домах постройки до 1978 года во Флориде',
      metaTitle: 'Сертификат EPA RRP для маляров во Флориде | M&K Agency',
      description: 'Красите дом постройки до 1978 года во Флориде? Кому нужен сертификат EPA RRP, правило 6 и 20 кв. футов, сроки курсов повышения квалификации и документы.',
      ogAlt: 'Иллюстрация: старый дом во Флориде, плёнка на земле, лестница, скребок, HEPA-пылесос и закрытое ведро с краской',
      excerpt: 'Когда скоблят и шкурят старую краску, поднимается свинцовая пыль. Если вы красите дома или детские сады постройки до 1978 года, правило EPA RRP определяет, кто может делать работу и как. Обновлено в 2026 году.',
      category: 'Страхование для маляров',
      body: [
        { type: 'p', text: 'В Южной Флориде много домов, построенных до 1978 года, а именно этот год служит границей в федеральных правилах о свинцовой краске. Если оплачиваемая покраска такого дома включает скобление, шлифовку или снятие старой краски, как правило, действует федеральное правило **Renovation, Repair and Painting (RRP)**, 40 CFR часть 745, подраздел E. Пока анализ не показал обратного, правило исходит из того, что краска содержит свинец ([745.87](' + S.s87 + ')). Разберём, что это значит для малярной компании во Флориде; всё сверено с действующим текстом нормы на октябрь 2026 года.' },
        { type: 'h2', text: 'Кто ведёт программу RRP во Флориде' },
        { type: 'p', text: 'EPA. Федеральное правило действует во всех штатах, у которых нет своей программы, утверждённой EPA ([745.81](' + S.s81 + ')). Флориды в актуальном списке таких штатов нет, поэтому сертификат фирмы здесь выдаёт EPA, а курс renovator проходят у провайдера, аккредитованного EPA ([EPA](' + S.epaRrp + '); [сертификация фирм](' + S.epaFirm + ')). Если вы берёте заказы и в штатах со своей программой, например в Джорджии или Алабаме, проверьте и их требования.' },
        { type: 'h2', text: 'Какие работы попадают под правило' },
        { type: 'p', text: 'Правило касается **оплачиваемых** работ в «target housing», то есть в жилье постройки до 1978 года, и в **помещениях, которые регулярно посещают маленькие дети** ([745.82](' + S.s82 + '); [745.103](' + S.s103 + ')). Это здание до 1978 года или его часть, куда один и тот же ребёнок младше 6 лет приходит минимум два дня в неделю, не меньше 3 часов в день, 6 часов в неделю и 60 часов в год: детские сады, дошкольные группы, подготовительные классы. Для маляра главное: под «renovation» подпадает и **подготовка поверхности** — шлифовка и скобление ([745.83](' + S.s83 + ')).' },
        { type: 'p', text: 'Основные исключения:' },
        { type: 'ul', items: [
          '**Мелкий ремонт и обслуживание:** затрагивается **не больше 6 кв. футов** окрашенной поверхности на комнату внутри или **не больше 20 кв. футов** снаружи. Работа перестаёт быть «мелкой», если используются запрещённые методы, меняются окна или сносятся окрашенные конструкции; работы в одной комнате в течение 30 дней считаются одной работой.',
          '**Анализ показал, что свинцовой краски нет:** письменное заключение сертифицированного инспектора или risk assessor, либо certified renovator проверил каждый затрагиваемый элемент тест-набором, признанным EPA, или отправил пробы краски в лабораторию, признанную EPA.',
          '**Исключённое жильё:** жильё для пожилых или людей с инвалидностью и студии, где жилая зона не отделена от спальной, если там не живёт и не будет жить ребёнок младше 6 лет.',
          '**Владелец ремонтирует свой дом сам:** обычно правило его не касается, но касается, если дом сдаётся в аренду, в нём работает детский сад или владелец покупает дома под ремонт и перепродажу ([Департамент здравоохранения Флориды](' + S.fdoh + ')).',
        ] },
        { type: 'p', text: 'Полезная для маляров деталь: когда подготовка закончена и зона прошла проверку чистоты, работа, которая не затрагивает старую краску, например покраска уже подготовленных стен, правилом не регулируется ([745.85(d)](' + S.s85 + ')).' },
        { type: 'h2', text: 'Сертификат фирмы' },
        { type: 'p', text: 'С 22 апреля 2010 года фирма не может выполнять, предлагать или **рекламировать** такие работы без сертификата EPA, даже если вы работаете один. Заявка подаётся онлайн, сертификат действует до пяти лет ([745.89](' + S.s89 + ')). Заявку на продление EPA просит подать не позже чем за 90 дней до окончания срока. Об изменениях, например новом названии или адресе, нужно сообщить в течение 90 дней, а при продаже бизнеса сертификат новому владельцу не переходит ([EPA](' + S.epaFirm + ')).' },
        { type: 'h2', text: 'Сертификат renovator' },
        { type: 'p', text: 'На каждый такой объект назначается **certified renovator** — человек, прошедший курс, аккредитованный EPA. Первичный курс длится 8 часов, из них 2 часа практики ([EPA](' + S.epaTrain + ')). Сертификат не бессрочный ([745.90](' + S.s90 + ')):' },
        { type: 'ul', items: [
          'Курс повышения квалификации (refresher) нужно пройти в течение **5 лет** после первичного курса.',
          'Refresher **с** практикой продлевает сертификат на **5 лет**. Онлайн-курс **без** практики даёт **3 года**, и следующий refresher после него обязательно должен быть с практикой.',
          'Если сертификат истёк, придётся заново пройти полный первичный курс.',
        ] },
        { type: 'p', text: 'Certified renovator обучает остальных рабочих прямо на объекте, должен лично присутствовать, когда вешают знаки, ставят изоляцию зоны и делают уборку, и всё время работ быть на связи — на месте или по телефону. Копии своих сертификатов он держит при себе на объекте.' },
        { type: 'h2', text: 'Что правило требует на объекте' },
        { type: 'ol', items: [
          '**До начала:** передайте владельцу брошюру EPA **Renovate Right** не раньше чем за 60 дней до начала и получите подпись о получении или квитанцию об отправке почтой минимум за 7 дней. Если владелец там не живёт, брошюру получает и взрослый жилец ([745.84](' + S.s84 + ')). У EPA есть и испанская версия брошюры ([EPA](' + S.epaRR + ')).',
          '**Знаки и изоляция:** повесьте предупреждающие знаки и изолируйте рабочую зону. Внутри вынесите или накройте вещи, закройте вентиляционные отверстия и застелите пол плёнкой минимум на 6 футов вокруг. Снаружи закройте двери и окна в пределах 20 футов, застелите землю минимум на 10 футов и ставьте вертикальное ограждение, если работаете ближе 10 футов к границе участка ([745.85](' + S.s85 + ')).',
          '**Запрещено:** обжиг открытым пламенем и горелкой, машинная шлифовка, зачистка и пескоструй без кожуха и подключённого HEPA-пылесоса, строительный фен при 1,100 °F и выше.',
          '**Мусор и уборка:** не выпускайте мусор за пределы зоны, соберите стружку в мешки, смочите и сверните плёнку, а внутри помещений пропылесосьте HEPA-пылесосом и протрите всё влажной тканью.',
          '**Проверка чистоты:** certified renovator осматривает зону, затем протирает подоконники, полы и столешницы влажной салфеткой и сравнивает её с карточкой EPA (cleaning verification card). Снаружи достаточно визуального осмотра.',
          '**Документы:** передайте владельцу (и взрослому жильцу, если это другой человек) документы о соблюдении правил вместе с финальным счётом или в течение 30 дней после окончания работ — что наступит раньше — и **храните документы 3 года** ([745.86](' + S.s86 + ')).',
        ] },
        { type: 'h2', text: 'После урагана и в других экстренных случаях' },
        { type: 'p', text: 'Срочные работы для защиты дома или здоровья людей, например закрыть повреждения после шторма, могут подпадать под аварийное исключение. Оно смягчает требования к брошюре, знакам, изоляции зоны, мусору и сертификации, но только в той мере, в какой этого требует авария. Уборка, проверка чистоты и документы остаются обязательными, а когда срочная часть сделана, остальная работа снова подпадает под правило полностью ([EPA](' + S.epaDisaster + '); [745.82(b)](' + S.s82 + ')).' },
        { type: 'h2', text: 'Почему это важно для страховки' },
        { type: 'p', text: 'Нарушение правила — это федеральное нарушение, за которое возможны гражданские и уголовные санкции ([745.87](' + S.s87 + ')), а клиент может связать свинцовую пыль с вашей работой. Во многих полисах общей ответственности (GL) есть исключение по загрязнению или отдельные формулировки о свинце, поэтому до того как браться за дома постройки до 1978 года, спросите своего агента, что написано в вашем полисе GL. Когда мы делаем расчёт для малярной компании, расскажите, работаете ли вы в старых домах или детских садах, есть ли у фирмы сертификат RRP и как вы готовите поверхности. Покрытие всегда зависит от условий полиса.' },
        { type: 'p', text: 'Полезное для маляров: наша [страница о страховании маляров](/ru/painting-contractor-insurance-florida), [страхование общей ответственности](/ru/insurance/general-liability), [страхование подрядчиков во Флориде](/ru/contractor-insurance-florida), [сертификаты страхования для подрядчиков](/ru/blog/certificate-of-insurance-contractors-florida) и [помощник: сотрудник или 1099 для workers’ comp](/ru/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'callout', title: 'Вопросы по страховке?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните по номеру [(305) 859-3953](' + TEL + ') и расскажите, в каких домах вы работаете. Лицензированный агент разберёт всё с вами на русском, английском или испанском. Это общая информация, а не юридическая консультация; для своей ситуации сверяйтесь с нормой или с EPA.' },
      ],
      faq: [
        { q: 'Нужен ли маляру во Флориде сертификат EPA по свинцу?', a: 'Для оплачиваемых работ, затрагивающих краску в домах постройки до 1978 года или в помещениях для маленьких детей, как правило, да, если нет исключения. Своей программы RRP у Флориды нет, поэтому фирме нужен сертификат EPA, а на каждый объект назначается certified renovator.' },
        { q: 'Сколько действует сертификат certified renovator?', a: 'Refresher нужно пройти в течение 5 лет после первичного курса. С практикой сертификат продлевается на 5 лет, онлайн без практики — на 3 года, и следующий курс должен быть с практикой.' },
        { q: 'Покрывает ли мой полис GL претензии из-за свинца?', a: 'Это зависит от полиса. Во многих полисах GL есть исключения по загрязнению или особые условия о свинце, поэтому попросите агента разобрать ваш полис до того, как браться за дома постройки до 1978 года.' },
      ],
      sources: [
        { label: '40 CFR 745.81–745.83: сроки, сфера действия, определения (eCFR, на английском)', url: S.s83 },
        { label: '40 CFR 745.84: передача брошюры Renovate Right (eCFR, на английском)', url: S.s84 },
        { label: '40 CFR 745.85: правила работ и проверка чистоты (eCFR, на английском)', url: S.s85 },
        { label: '40 CFR 745.86–745.87: документы и ответственность (eCFR, на английском)', url: S.s86 },
        { label: '40 CFR 745.89: сертификация фирм (eCFR, на английском)', url: S.s89 },
        { label: '40 CFR 745.90: сертификация renovator и курсы refresher (eCFR, на английском)', url: S.s90 },
        { label: '40 CFR 745.103: определение target housing (eCFR, на английском)', url: S.s103 },
        { label: 'EPA: программа RRP и штаты со своими программами (на английском)', url: S.epaRrp },
        { label: 'EPA: сертификация фирм RRP (на английском)', url: S.epaFirm },
        { label: 'EPA: обучение renovator (на английском)', url: S.epaTrain },
        { label: 'EPA: ремонт после стихийных бедствий и свинцовая краска (на английском)', url: S.epaDisaster },
        { label: 'EPA: брошюра Renovate Right (на английском и испанском)', url: S.epaRR },
        { label: 'Департамент здравоохранения Флориды: Renovation, Repair, and Painting (на английском)', url: S.fdoh },
      ],
    },
  },
};
