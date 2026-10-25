import type { BlogPost } from '../types';

// Refreshed 2026-10-25 (first published 2026-10-04). Facts checked 2026-10-25 against official sources:
// - s. 482.1562 (2026): anyone applying commercial fertilizer to an urban landscape must hold the FDACS
//   limited certification; requires the s. 403.9338 training certificate; expires 4 years after issuance;
//   recertification needs 4 classroom hours of CE (at least 2 on fertilizer BMPs); after a grace period of
//   up to 30 days past expiration, a certificate is issued only by reapplying; does NOT authorize pesticide
//   application to turf/ornamentals (incl. pesticide-fertilizer mixtures), a pest control business, or
//   unlicensed/uncertified workers under supervision; yard workers using the resident's fertilizer and
//   equipment on individual residential properties are exempt.
// - s. 403.9338 (2026): DEP/UF-IFAS training; certificate holder not subject to additional local testing.
// - s. 482.156 (2026): limited certification for commercial landscape maintenance personnel: herbicides in
//   plant beds, driveways, sidewalks, patios + IPM on ornamentals with no-signal-word or "caution" products;
//   handheld/backpack equipment only, no power equipment; exam; proof of a certificate of insurance that the
//   employer meets s. 482.071(4); expires 1 year after issuance; 4 CE hours + insurance proof to renew;
//   not for pesticides on turf; records of pests, areas, methods and materials.
// - s. 482.071(4) (2026): BI $250,000 per person / $500,000 per occurrence and PD $250,000 per occurrence /
//   $500,000 aggregate, or $500,000 combined single limit (aggregate).
// - FDACS FAQ: six hours of GI-BMP training; certificate valid four years.
// - UF/IFAS FFL: LF certificate applied for online via the FDACS licensing portal with the GI-BMP certificate
//   number; each individual applicator needs it; renewal = 2 CORE + 2 LF CEUs. GI-BMP FAQ: training
//   certificate does not expire; 75% to pass; offered in English and Spanish.
// - Miami-Dade County Fertilizer Regulations page (DERM, Ch. 18C, adopted April 2021): no N or P May 15 -
//   Oct 31; max 4 lb N/1,000 sq ft per year, 1 lb per application (solid), 0.5 lb (liquid); granular N
//   products at least 65% slow-release; P only with soil-test deficiency; 20-ft zones; deflector shields;
//   clippings off streets/drains; no N/P during severe weather advisories, > 2 in/24 h forecasts, before
//   seeding/sodding or first 60 days after; commercial applicators carry FDACS proof; GI-BMP certificate to
//   obtain/renew Local Business Tax; countywide incl. municipalities (which may add rules); exemptions incl.
//   vegetable/community gardens, athletic fields, bona fide farms, certain golf courses and parks;
//   enforcement under Ch. 8CC, municipalities may designate code inspectors; DERM 305-372-6789.
// - TDI commercial general liability page: pollution exclusion in most GL policies (hedged).
// Fees left out on purpose.
const S = {
  s4821562: 'https://www.flsenate.gov/Laws/Statutes/2026/482.1562',
  s4039338: 'https://www.flsenate.gov/Laws/Statutes/2026/403.9338',
  s482156: 'https://www.flsenate.gov/Laws/Statutes/2026/482.156',
  s482071: 'https://www.flsenate.gov/Laws/Statutes/2026/482.071',
  fdacs: 'https://www.fdacs.gov/Business-Services/Pest-Control/Pest-Control-FAQ/Do-commercial-fertilizer-applicators-need-to-be-licensed-to-apply-fertilizers',
  mdc: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1620843942468395',
  ifasLf: 'https://ffl.ifas.ufl.edu/ffl-and-you/gi-bmp-program/fertilizer-certification/',
  ifasFaq: 'https://ffl.ifas.ufl.edu/ffl-and-you/gi-bmp-program/gi-bmp-faq/',
  ifas: 'https://blogs.ifas.ufl.edu/miamidadeco/2021/05/05/miami-dade-county-has-a-new-fertilizer-ordinance/',
  mdcOrd: 'http://www.miamidade.gov/govaction/matter.asp?matter=210882&file=true&fileAnalysis=false&yearFolder=Y2021',
  tdi: 'https://www.tdi.texas.gov/pubs/pc/pcgenliab.html',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'fertilizer-rules-landscapers-miami-dade',
  datePublished: '2026-10-04',
  dateModified: '2026-10-25',
  translations: {
    en: {
      title: 'Fertilizer Rules for Landscapers in Miami-Dade: State Certification and the Summer Ban',
      metaTitle: 'Miami-Dade Fertilizer Rules After Oct. 31 | M&K Agency',
      description: 'Miami-Dade’s summer fertilizer ban ends Oct. 31. Nitrogen limits from Nov. 1, the FDACS applicator certificate, weed-and-feed rules and county paperwork.',
      ogAlt: 'Fertilizer spreader with a deflector shield on a lawn beside a canal, with a pickup and trailer',
      excerpt: 'The May 15–October 31 ban ends this week, but the county’s nitrogen limits, buffer zones and certification rules apply all year. What landscapers need to check before the first fall application.',
      category: 'Landscaping insurance',
      body: [
        { type: 'p', text: 'Miami-Dade’s rainy-season fertilizer ban runs from May 15 through October 31, so on November 1 lawn crews can apply nitrogen and phosphorus again. That doesn’t mean anything goes. The county ordinance limits how much you put down, where and when, all year, and the state requires a certification for every person who applies fertilizer for hire. This guide covers both, plus the separate certificate for herbicides and where insurance fits in.' },
        { type: 'h2', text: 'What changes on November 1, and what doesn’t' },
        { type: 'p', text: 'Chapter 18C of the county code applies throughout Miami-Dade, including inside cities, and cities may add their own restrictions ([Miami-Dade County, DERM](' + S.mdc + ')). Outside the restricted period, these limits still apply:' },
        { type: 'ul', items: [
          '**Nitrogen:** no more than 4 pounds per 1,000 square feet per calendar year, 1 pound per application of solid fertilizer, and half a pound per application of liquid fertilizer.',
          '**Slow release:** granular fertilizer with nitrogen must contain at least 65% slow-release nitrogen, as shown on the product label.',
          '**Phosphorus:** only when a soil test shows a deficiency.',
          '**Buffer zones:** no fertilizer within 20 feet of the top of the bank of a pond, lake, canal or stream, a storm drain, Biscayne Bay, wetlands or the top of a seawall.',
          '**Weather and new sod:** no nitrogen or phosphorus during severe weather advisories, when more than 2 inches of rain in 24 hours is forecast, before seeding or sodding, or for the first 60 days after.',
          '**Clean-up:** use spreader deflector shields near pavement, water and buffer zones, and keep clippings and fertilizer off sidewalks, streets and drains.',
        ] },
        { type: 'p', text: 'The county lists exemptions for bona fide farm operations, vegetable and community gardens, athletic fields and certain golf courses and parks. A typical residential, HOA or commercial lawn is covered.' },
        { type: 'h2', text: 'The state fertilizer certificate (LF)' },
        { type: 'p', text: 'Under [s. 482.1562](' + S.s4821562 + '), anyone applying commercial fertilizer to an urban landscape needs the **limited certification for urban landscape commercial fertilizer application** from the Florida Department of Agriculture and Consumer Services (FDACS), often called the LF or “fertilizer license.” UF/IFAS notes that each individual applicator needs it, not just the company owner ([UF/IFAS](' + S.ifasLf + ')).' },
        { type: 'ol', items: [
          '**Take the Green Industries Best Management Practices (GI-BMP) training.** FDACS describes it as six hours ([FDACS](' + S.fdacs + ')). You need 75% on the test, classes are offered in English and Spanish, and the training certificate itself does not expire ([UF/IFAS GI-BMP FAQ](' + S.ifasFaq + ')).',
          '**Apply to FDACS** through its online licensing portal, using the number on your GI-BMP certificate.',
          '**Renew every 4 years** with 4 hours of continuing education, at least 2 of them on fertilizer best management practices. If you miss the date, the statute allows a grace period of up to 30 days; after that you have to reapply from the start.',
        ] },
        { type: 'p', text: 'With the state certificate, local governments can’t make you take an additional test ([s. 403.9338](' + S.s4039338 + ')). Two limits matter for crews: the certificate does **not** let uncertified workers apply fertilizer under your supervision, and yard workers are exempt only when they fertilize individual homes with the owner’s or resident’s fertilizer and equipment.' },
        { type: 'h2', text: 'Weed-and-feed and herbicides need a different certificate' },
        { type: 'p', text: 'The LF certificate covers fertilizer only. It does not authorize applying pesticides to turf or ornamentals, including pesticide-fertilizer mixtures such as weed-and-feed products, or running a pest control business.' },
        { type: 'p', text: 'For spot-spraying weeds in plant beds, driveways, sidewalks and patios, Florida has a separate **limited certification for commercial landscape maintenance personnel** ([s. 482.156](' + S.s482156 + ')). It requires an exam, is limited to handheld equipment and backpack sprayers, expires 1 year after issuance and does not cover pesticides on turf. Before FDACS issues or renews it, you must show a certificate of insurance stating that the employer meets the minimums in [s. 482.071(4)](' + S.s482071 + '): bodily injury of $250,000 per person and $500,000 per occurrence plus property damage of $250,000 per occurrence and $500,000 aggregate, or a $500,000 combined single limit. Certificate holders must also keep records of the pests and areas treated and the materials used.' },
        { type: 'h2', text: 'County paperwork and enforcement' },
        { type: 'p', text: 'Commercial applicators must carry proof of their FDACS certification at all times while applying fertilizer. To obtain or renew a Miami-Dade Local Business Tax receipt in any category that may apply fertilizer, the business must show a GI-BMP training certificate ([Miami-Dade County, DERM](' + S.mdc + '); [UF/IFAS Extension](' + S.ifas + ')). Violations of Chapter 18C can bring penalties under Chapter 8CC, and each city may designate code inspectors to issue civil violation notices. Questions go to DERM at 305-372-6789. For the rest of your startup paperwork, see [opening a small business in Miami-Dade](/en/blog/start-small-business-miami-dade-licenses).' },
        { type: 'h2', text: 'A quick crew checklist before the first fall application' },
        { type: 'ul', items: [
          'Every person who applies fertilizer has a current LF certificate and carries proof of it.',
          'Check expiration dates now, since the grace period is short.',
          'Spreaders have working deflector shields, and crews know the 20-foot buffer at canals, lakes and storm drains.',
          'Bags on the truck meet the 65% slow-release rule, and phosphorus goes down only with a soil test on file.',
          'Anyone spot-spraying herbicide holds the right certificate, and weed-and-feed jobs go to licensed pest control.',
        ] },
        { type: 'h2', text: 'Where insurance fits' },
        { type: 'p', text: 'General liability is the policy most clients ask about when your crew damages a customer’s property or injures someone on the job, subject to its terms. Chemical work is a gray area. The Texas Department of Insurance explains that most GL policies carry a **pollution exclusion** for damage caused by the discharge of pollutants, a term that typically includes chemicals, and that businesses with a real pollution exposure may look at separate coverage ([TDI](' + S.tdi + ')). Whether a drift or runoff claim is covered depends on your policy wording, so describe your fertilizer and chemical work accurately when you apply. Fines from a code violation are something to prevent, not something to count on insurance for. Our guide to [pressure washing runoff](/en/blog/pressure-washing-runoff-storm-drains-miami-dade) covers the related storm drain rules.' },
        { type: 'p', text: 'Other pieces usually matter as much: [general liability](/en/insurance/general-liability) limits that match HOA and property manager contracts, a [certificate of insurance](/en/blog/certificate-of-insurance-contractors-florida) they’ll accept, workers’ compensation for your crew (see [helper: employee or 1099?](/en/blog/helper-employee-or-1099-florida-workers-comp)) and [coverage for the work truck](/en/work-truck-insurance-florida) and trailer. Our [landscaping insurance page](/en/landscaping-insurance-florida) puts it together. Coverage always depends on the policy, so review the details with a licensed agent.' },
        { type: 'callout', title: 'Reviewing your coverage for the new season?', text: '[Request a quote](/en/quote) or call [(305) 859-3953](' + TEL + ') and list every service your crews offer. We’ll go over it with you in English, Spanish or Russian. This is general information, not legal advice; check the statutes and the county ordinance for the full rules.' },
      ],
      faq: [
        { q: 'Can I fertilize lawns in Miami-Dade in November?', a: 'Yes. The ban on nitrogen and phosphorus runs May 15 through October 31. From November 1, the yearly and per-application nitrogen limits, the 65% slow-release rule for granular products, the soil-test rule for phosphorus and the 20-foot buffer zones still apply.' },
        { q: 'Does every crew member need the fertilizer certificate?', a: 'Every person who applies fertilizer for hire needs the FDACS limited certification. Uncertified workers can’t apply it under a certified person’s supervision. The only exemption is for yard workers using the homeowner’s or resident’s own fertilizer and equipment on individual homes.' },
        { q: 'Can I apply weed-and-feed with the fertilizer certificate?', a: 'No. The LF certificate does not cover pesticide-fertilizer mixtures. Pesticides on turf require pest control licensing under chapter 482 of the Florida Statutes.' },
        { q: 'What insurance does the herbicide certificate require?', a: 'For the commercial landscape maintenance certificate, you must show a certificate of insurance that the employer meets s. 482.071(4): $250,000/$500,000 bodily injury and $250,000/$500,000 property damage, or a $500,000 combined single limit.' },
      ],
      sources: [
        { label: 'Miami-Dade County (DERM): Fertilizer Regulations (Chapter 18C)', url: S.mdc },
        { label: 'Florida Statutes s. 482.1562 (2026): limited certification for urban landscape commercial fertilizer application', url: S.s4821562 },
        { label: 'Florida Statutes s. 403.9338 (2026): urban landscape best management practices training', url: S.s4039338 },
        { label: 'Florida Statutes s. 482.156 (2026): limited certification for commercial landscape maintenance personnel', url: S.s482156 },
        { label: 'Florida Statutes s. 482.071 (2026): licenses and minimum financial responsibility', url: S.s482071 },
        { label: 'FDACS: Do commercial fertilizer applicators need to be licensed?', url: S.fdacs },
        { label: 'UF/IFAS Florida-Friendly Landscaping: Limited Urban Commercial Fertilizer Applicator Certification', url: S.ifasLf },
        { label: 'UF/IFAS Florida-Friendly Landscaping: GI-BMP FAQ', url: S.ifasFaq },
        { label: 'UF/IFAS Extension Miami-Dade: Miami-Dade County has a New Fertilizer Ordinance', url: S.ifas },
        { label: 'Miami-Dade County Ordinance No. 21-26 (fertilizer; Chapter 18C)', url: S.mdcOrd },
        { label: 'Texas Department of Insurance: Commercial general liability insurance (pollution exclusions)', url: S.tdi },
      ],
    },
    es: {
      title: 'Reglas de fertilizante para jardineros en Miami-Dade: certificación del estado y la prohibición de verano',
      metaTitle: 'Fertilizante en Miami-Dade tras el 31 de octubre | M&K Agency',
      description: 'La prohibición de verano termina el 31 de octubre. Límites de nitrógeno desde noviembre, certificación de FDACS, weed-and-feed y trámites del condado.',
      ogAlt: 'Esparcidora de fertilizante con deflector sobre césped junto a un canal, con camioneta y tráiler',
      excerpt: 'La prohibición del 15 de mayo al 31 de octubre termina esta semana, pero los límites de nitrógeno, las zonas de protección y las certificaciones siguen todo el año. Qué revisar antes de la primera aplicación de otoño.',
      category: 'Seguro para jardinería',
      body: [
        { type: 'p', text: 'En Miami-Dade, la prohibición de fertilizantes durante la temporada de lluvias va del 15 de mayo al 31 de octubre. Desde el 1 de noviembre se puede volver a aplicar nitrógeno y fósforo, pero no vale todo: el condado limita cuánto, dónde y cuándo todo el año, y el estado exige una certificación a cada persona que fertiliza por pago. Aquí van las dos cosas, la certificación para herbicidas y el papel del seguro.' },
        { type: 'h2', text: 'Qué cambia el 1 de noviembre y qué no' },
        { type: 'p', text: 'El Capítulo 18C del código del condado rige en todo Miami-Dade, también dentro de las ciudades, y cada ciudad puede sumar sus propias restricciones ([Condado de Miami-Dade, DERM](' + S.mdc + ')). Fuera del período restringido siguen vigentes estos límites:' },
        { type: 'ul', items: [
          '**Nitrógeno:** máximo 4 libras por cada 1,000 pies cuadrados al año, 1 libra por aplicación de fertilizante sólido y media libra por aplicación de fertilizante líquido.',
          '**Liberación lenta:** el fertilizante granulado con nitrógeno debe tener al menos un 65% de nitrógeno de liberación lenta, según la etiqueta.',
          '**Fósforo:** solo si un análisis de suelo muestra deficiencia.',
          '**Zonas de protección:** nada de fertilizante a menos de 20 pies de la orilla de un lago, estanque, canal o arroyo, de un desagüe pluvial, de la Bahía de Biscayne, de humedales o del borde de un seawall.',
          '**Clima y grama nueva:** nada de nitrógeno ni fósforo durante avisos de mal tiempo, si se pronostican más de 2 pulgadas de lluvia en 24 horas, antes de sembrar o poner sod, ni en los 60 días siguientes.',
          '**Limpieza:** use deflectores en la esparcidora cerca del pavimento, del agua y de las zonas de protección, y no deje grama cortada ni fertilizante en aceras, calles o desagües.',
        ] },
        { type: 'p', text: 'Quedan exentos, entre otros, las fincas agrícolas, los huertos comunitarios, los campos deportivos y ciertos campos de golf y parques. El césped de una casa, un HOA o un local comercial sí está incluido.' },
        { type: 'h2', text: 'La certificación estatal de fertilizante (LF)' },
        { type: 'p', text: 'Según la [sección 482.1562](' + S.s4821562 + '), quien aplica fertilizante comercial en jardines urbanos necesita la **certificación limitada para aplicación comercial de fertilizante en paisajes urbanos** del Departamento de Agricultura y Servicios al Consumidor de Florida (FDACS), conocida como LF o “licencia de fertilizante”. UF/IFAS aclara que la necesita cada aplicador, no solo el dueño de la compañía ([UF/IFAS](' + S.ifasLf + ')).' },
        { type: 'ol', items: [
          '**Tome el curso de Buenas Prácticas de Manejo para la Industria Verde (GI-BMP).** Según FDACS dura seis horas ([FDACS](' + S.fdacs + ')). Se aprueba con 75%, se ofrece en inglés y en español, y el certificado no vence ([preguntas frecuentes de UF/IFAS](' + S.ifasFaq + ')).',
          '**Solicite la certificación a FDACS** en su portal de licencias en línea, con el número de su certificado GI-BMP.',
          '**Renuévela cada 4 años** con 4 horas de educación continua, al menos 2 sobre buenas prácticas con fertilizantes. Si se le pasa la fecha, la ley da un período de gracia de hasta 30 días; después hay que solicitarla de nuevo desde cero.',
        ] },
        { type: 'p', text: 'Con la certificación estatal, los gobiernos locales no pueden exigirle otro examen ([sección 403.9338](' + S.s4039338 + ')). Para las cuadrillas hay dos límites claros: la certificación **no** permite que trabajadores sin certificar apliquen fertilizante bajo su supervisión, y la excepción para trabajadores de patio vale solo si fertilizan casas particulares con el fertilizante y el equipo del dueño o residente.' },
        { type: 'h2', text: 'El weed-and-feed y los herbicidas requieren otra certificación' },
        { type: 'p', text: 'La certificación LF cubre solo fertilizante. No autoriza aplicar pesticidas a la grama u ornamentales, incluidas las mezclas de pesticida y fertilizante tipo weed-and-feed, ni operar un negocio de control de plagas.' },
        { type: 'p', text: 'Para rociar maleza en canteros, entradas de carro, aceras y patios, Florida tiene otra **certificación limitada para personal comercial de mantenimiento de jardines** ([sección 482.156](' + S.s482156 + ')). Exige examen, permite solo equipo manual y mochilas fumigadoras, vence al año y no sirve para pesticidas en la grama. Antes de emitirla o renovarla, FDACS pide un certificado de seguro que muestre que el empleador cumple los mínimos de la [sección 482.071(4)](' + S.s482071 + '): lesiones corporales de $250,000 por persona y $500,000 por incidente, y daños a la propiedad de $250,000 por incidente y $500,000 en total, o un límite único combinado de $500,000. Además, hay que registrar las plagas, áreas y productos.' },
        { type: 'h2', text: 'Trámites del condado y sanciones' },
        { type: 'p', text: 'Quien aplica fertilizante de forma comercial debe llevar siempre consigo la prueba de su certificación de FDACS. Para obtener o renovar el Local Business Tax Receipt de Miami-Dade en cualquier categoría que pueda aplicar fertilizante, el negocio debe presentar el certificado GI-BMP ([Condado de Miami-Dade, DERM](' + S.mdc + '); [Extensión UF/IFAS](' + S.ifas + ')). Las infracciones al Capítulo 18C se sancionan según el Capítulo 8CC, y cada ciudad puede nombrar inspectores que emiten multas civiles. Para los demás trámites al empezar, vea [cómo abrir un pequeño negocio en Miami-Dade](/es/blog/start-small-business-miami-dade-licenses).' },
        { type: 'h2', text: 'Lista rápida para la cuadrilla antes de la primera aplicación de otoño' },
        { type: 'ul', items: [
          'Cada persona que aplica fertilizante tiene la certificación LF vigente y lleva la prueba encima.',
          'Revise hoy las fechas de vencimiento: el período de gracia es corto.',
          'Las esparcidoras tienen el deflector en buen estado y todos conocen la franja de 20 pies junto a canales, lagos y desagües.',
          'Los sacos del camión cumplen el 65% de liberación lenta, y el fósforo se aplica solo con análisis de suelo en el expediente.',
          'Quien rocía herbicida tiene la certificación correcta, y el weed-and-feed lo hace una compañía de control de plagas con licencia.',
        ] },
        { type: 'h2', text: 'Dónde entra el seguro' },
        { type: 'p', text: 'La responsabilidad civil general (GL) es la póliza que más piden los clientes por si su cuadrilla daña la propiedad de un cliente o lesiona a alguien en el trabajo, según los términos de la póliza. Con los químicos hay matices: el Departamento de Seguros de Texas explica que la mayoría de las pólizas GL traen una **exclusión de contaminación** para daños por descarga de contaminantes, un término que suele incluir químicos, y que un negocio con riesgo real de contaminación puede considerar una cobertura aparte ([TDI](' + S.tdi + ')). Si un reclamo por deriva o escorrentía queda cubierto depende de su póliza, así que describa bien su trabajo con químicos al solicitarla. Las multas se previenen; no cuente con que el seguro las pague. Nuestra guía sobre el [agua del lavado a presión](/es/blog/pressure-washing-runoff-storm-drains-miami-dade) trata las reglas de los desagües pluviales.' },
        { type: 'p', text: 'Igual de importantes suelen ser unos límites de [responsabilidad civil general](/es/insurance/general-liability) que cumplan los contratos de HOA y administradores, un [certificado de seguro](/es/blog/certificate-of-insurance-contractors-florida) que acepten, la compensación laboral de su cuadrilla (vea [¿ayudante empleado o 1099?](/es/blog/helper-employee-or-1099-florida-workers-comp)) y el [seguro de la camioneta de trabajo](/es/work-truck-insurance-florida) y el tráiler. Nuestra [página de seguro para jardinería](/es/landscaping-insurance-florida) lo reúne todo. La cobertura siempre depende de la póliza; revise los detalles con un agente con licencia.' },
        { type: 'callout', title: '¿Va a revisar su seguro para la nueva temporada?', text: '[Pida una cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + ') e incluya todos los servicios de sus cuadrillas. Lo atendemos en español, inglés o ruso. Esto es información general, no asesoría legal; consulte las leyes y la ordenanza del condado para ver todas las reglas.' },
      ],
      faq: [
        { q: '¿Se puede fertilizar en Miami-Dade en noviembre?', a: 'Sí. La prohibición termina el 31 de octubre, pero siguen los límites de nitrógeno, el 65% de liberación lenta, el análisis de suelo para el fósforo y las franjas de 20 pies.' },
        { q: '¿Cada trabajador necesita la certificación de fertilizante?', a: 'Sí, cada persona que aplica fertilizante por pago, aunque trabaje bajo supervisión. Solo están exentos quienes usan el fertilizante y el equipo del dueño en casas particulares.' },
        { q: '¿Puedo aplicar weed-and-feed con la certificación de fertilizante?', a: 'No. La certificación LF no cubre mezclas de pesticida y fertilizante. Los pesticidas en la grama requieren licencias de control de plagas según el capítulo 482 de los Estatutos de Florida.' },
        { q: '¿Qué seguro pide la certificación para herbicidas?', a: 'Para la certificación de mantenimiento comercial de jardines hay que presentar un certificado de seguro de que el empleador cumple la sección 482.071(4): $250,000/$500,000 por lesiones corporales y $250,000/$500,000 por daños a la propiedad, o un límite combinado de $500,000.' },
      ],
      sources: [
        { label: 'Condado de Miami-Dade (DERM): reglamento de fertilizantes, Capítulo 18C (en inglés)', url: S.mdc },
        { label: 'Estatutos de Florida, sección 482.1562 (2026): certificación limitada para aplicación comercial de fertilizante (en inglés)', url: S.s4821562 },
        { label: 'Estatutos de Florida, sección 403.9338 (2026): capacitación en buenas prácticas de manejo (en inglés)', url: S.s4039338 },
        { label: 'Estatutos de Florida, sección 482.156 (2026): certificación limitada para personal de mantenimiento de jardines (en inglés)', url: S.s482156 },
        { label: 'Estatutos de Florida, sección 482.071 (2026): licencias y responsabilidad financiera mínima (en inglés)', url: S.s482071 },
        { label: 'FDACS: ¿necesitan licencia los aplicadores comerciales de fertilizante? (en inglés)', url: S.fdacs },
        { label: 'UF/IFAS Florida-Friendly Landscaping: certificación LF de fertilizante (en inglés)', url: S.ifasLf },
        { label: 'UF/IFAS Florida-Friendly Landscaping: preguntas frecuentes del curso GI-BMP (en inglés)', url: S.ifasFaq },
        { label: 'Extensión UF/IFAS Miami-Dade: nueva ordenanza de fertilizantes del condado (en inglés)', url: S.ifas },
        { label: 'Ordenanza n.º 21-26 del condado de Miami-Dade (fertilizantes; cap. 18C, en inglés)', url: S.mdcOrd },
        { label: 'Departamento de Seguros de Texas: responsabilidad civil general comercial, exclusiones de contaminación (en inglés)', url: S.tdi },
      ],
    },
    ru: {
      title: 'Правила по удобрениям для ландшафтных компаний в Майами-Дейд: сертификат штата и летний запрет',
      metaTitle: 'Удобрения в Майами-Дейд после 31 октября | M&K Agency',
      description: 'Летний запрет на удобрения в Майами-Дейд заканчивается 31 октября. Нормы азота с 1 ноября, сертификат FDACS, weed-and-feed и окружные документы.',
      ogAlt: 'Разбрасыватель удобрений с отражающим щитком на газоне у канала, рядом пикап с прицепом',
      excerpt: 'Запрет с 15 мая по 31 октября заканчивается на этой неделе, но нормы азота, защитные зоны и сертификаты действуют круглый год. Что проверить до первого осеннего внесения.',
      category: 'Страхование ландшафтного бизнеса',
      body: [
        { type: 'p', text: 'Запрет на удобрения в сезон дождей в Майами-Дейд действует с 15 мая по 31 октября, так что с 1 ноября бригады снова могут вносить азот и фосфор. Но это не значит, что можно всё. Окружной закон круглый год ограничивает, сколько, где и когда вносить, а штат требует сертификат от каждого, кто удобряет газоны за деньги. Ниже — оба набора правил, отдельный сертификат для гербицидов и то, при чём здесь страховка.' },
        { type: 'h2', text: 'Что меняется 1 ноября, а что нет' },
        { type: 'p', text: 'Глава 18C окружного кодекса действует по всему Майами-Дейд, в том числе внутри городов, и города могут добавлять свои ограничения ([округ Майами-Дейд, DERM](' + S.mdc + ')). Вне запретного периода остаются такие нормы:' },
        { type: 'ul', items: [
          '**Азот:** не больше 4 фунтов на 1000 кв. футов за календарный год, 1 фунт за одно внесение твёрдого удобрения и полфунта за одно внесение жидкого.',
          '**Медленное высвобождение:** в гранулированном удобрении с азотом не меньше 65% азота медленного высвобождения — смотрите этикетку.',
          '**Фосфор:** только если анализ почвы показал его нехватку.',
          '**Защитные зоны:** никаких удобрений ближе 20 футов к берегу пруда, озера, канала или ручья, к ливнёвке, заливу Бискейн, заболоченным участкам или краю seawall.',
          '**Погода и новый газон:** никакого азота и фосфора при штормовых предупреждениях, при прогнозе больше 2 дюймов осадков за сутки, перед посевом или укладкой sod и в первые 60 дней после.',
          '**Чистота:** у разбрасывателя должен стоять отражающий щиток рядом с асфальтом, водой и защитными зонами; скошенная трава и удобрения не должны оставаться на тротуарах, дорогах и в ливнёвках.',
        ] },
        { type: 'p', text: 'Округ делает исключения для настоящих фермерских хозяйств, огородов и общественных садов, спортивных полей и некоторых гольф-полей и парков. Обычный газон у дома, в HOA или у коммерческого здания под правила попадает.' },
        { type: 'h2', text: 'Сертификат штата на удобрения (LF)' },
        { type: 'p', text: 'По [ст. 482.1562](' + S.s4821562 + ') любой, кто вносит коммерческие удобрения на городские газоны и клумбы, должен иметь **limited certification for urban landscape commercial fertilizer application** от Департамента сельского хозяйства и защиты потребителей Флориды (FDACS). Его часто называют LF или «лицензией на удобрения». UF/IFAS уточняет: сертификат нужен каждому, кто вносит удобрения, а не только владельцу компании ([UF/IFAS](' + S.ifasLf + ')).' },
        { type: 'ol', items: [
          '**Пройдите курс Green Industries Best Management Practices (GI-BMP).** По данным FDACS, это шесть часов ([FDACS](' + S.fdacs + ')). Для зачёта нужно набрать не меньше 75%, курс есть на английском и испанском, а сам сертификат об обучении бессрочный ([FAQ UF/IFAS](' + S.ifasFaq + ')).',
          '**Подайте заявку в FDACS** через онлайн-портал лицензирования, указав номер сертификата GI-BMP.',
          '**Продлевайте каждые 4 года:** нужно 4 часа повышения квалификации, из них минимум 2 — по правилам работы с удобрениями. Если срок пропущен, закон даёт льготный период до 30 дней, а дальше придётся оформлять всё заново.',
        ] },
        { type: 'p', text: 'С сертификатом штата местные власти не могут требовать от вас дополнительный экзамен ([ст. 403.9338](' + S.s4039338 + ')). Для бригад важны два ограничения: работники без сертификата **не** могут вносить удобрения «под присмотром» сертифицированного, а исключение для дворовых работников действует, только если они удобряют частные дома удобрением и инструментом хозяина или жильца.' },
        { type: 'h2', text: 'Для weed-and-feed и гербицидов нужен другой сертификат' },
        { type: 'p', text: 'Сертификат LF — только про удобрения. Он не даёт права вносить пестициды на газон или декоративные растения, включая смеси пестицидов с удобрениями вроде weed-and-feed, и вести pest control бизнес.' },
        { type: 'p', text: 'Чтобы обрабатывать сорняки на клумбах, подъездных дорожках, тротуарах и патио, во Флориде есть отдельный **limited certification for commercial landscape maintenance personnel** ([ст. 482.156](' + S.s482156 + ')). Для него нужен экзамен, работать можно только ручным оборудованием и ранцевыми опрыскивателями, действует он 1 год и на пестициды для газона не распространяется. Перед выдачей и продлением FDACS требует сертификат страхования о том, что работодатель соблюдает минимумы [ст. 482.071(4)](' + S.s482071 + '): за вред здоровью $250,000 на человека и $500,000 на случай, за ущерб имуществу $250,000 на случай и $500,000 в совокупности, либо единый лимит $500,000. Кроме того, нужно вести записи: какие вредители, какие участки, какие методы и препараты.' },
        { type: 'h2', text: 'Окружные документы и штрафы' },
        { type: 'p', text: 'Тот, кто вносит удобрения на коммерческой основе, обязан всегда иметь при себе подтверждение сертификата FDACS. Чтобы получить или продлить Local Business Tax Receipt в Майами-Дейд по любой категории, где возможно внесение удобрений, бизнес должен показать сертификат GI-BMP ([округ Майами-Дейд, DERM](' + S.mdc + '); [UF/IFAS Extension](' + S.ifas + ')). Нарушения главы 18C наказываются по главе 8CC, а каждый город может назначать инспекторов, которые выписывают гражданские штрафы. Вопросы можно задать DERM по телефону 305-372-6789. Об остальных документах на старте — в статье о том, [как открыть малый бизнес в Майами-Дейд](/ru/blog/start-small-business-miami-dade-licenses).' },
        { type: 'h2', text: 'Короткий чек-лист для бригады перед первым осенним внесением' },
        { type: 'ul', items: [
          'У каждого, кто вносит удобрения, есть действующий сертификат LF и подтверждение при себе.',
          'Проверьте сроки сертификатов сейчас: льготный период короткий.',
          'На разбрасывателях исправные щитки, и все знают про 20 футов у каналов, озёр и ливнёвок.',
          'Мешки в машине соответствуют правилу 65% медленного высвобождения, а фосфор вносится только при анализе почвы в документах.',
          'Тот, кто опрыскивает гербицидами, имеет нужный сертификат, а weed-and-feed отдаётся лицензированной pest control компании.',
        ] },
        { type: 'h2', text: 'При чём здесь страховка' },
        { type: 'p', text: 'General liability (GL) — полис, о котором чаще всего спрашивают заказчики: на случай, если бригада повредит имущество клиента или кто-то пострадает на объекте, в рамках условий полиса. С химией всё сложнее. Департамент страхования Техаса объясняет, что в большинстве полисов GL есть **исключение по загрязнению** — за вред от выброса загрязняющих веществ, к которым обычно относят и химикаты, — и что бизнесу с реальным риском загрязнения стоит рассмотреть отдельное покрытие ([TDI](' + S.tdi + ')). Покроет ли полис претензию из-за сноса или смыва удобрений, зависит от его формулировок, поэтому честно описывайте работу с удобрениями и химией при оформлении. Штрафы за нарушения нужно предотвращать, а не рассчитывать, что их оплатит страховка. О правилах для ливнёвок — в нашей статье про [стоки после мойки давлением](/ru/blog/pressure-washing-runoff-storm-drains-miami-dade).' },
        { type: 'p', text: 'Не менее важны лимиты [general liability](/ru/insurance/general-liability) под требования HOA и управляющих компаний, [сертификат страхования (COI)](/ru/blog/certificate-of-insurance-contractors-florida), который они примут, workers’ comp для бригады (см. [помощник: работник или 1099?](/ru/blog/helper-employee-or-1099-florida-workers-comp)) и [страховка рабочего пикапа](/ru/work-truck-insurance-florida) с прицепом. Всё вместе — на нашей [странице страхования для лендскейперов](/ru/landscaping-insurance-florida). Покрытие всегда зависит от конкретного полиса, поэтому детали лучше обсудить с лицензированным агентом.' },
        { type: 'callout', title: 'Пересматриваете страховку к новому сезону?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните по номеру [(305) 859-3953](' + TEL + ') и перечислите все услуги ваших бригад. Мы говорим по-русски, по-английски и по-испански. Это общая информация, а не юридическая консультация; полные правила — в законах штата и окружном кодексе.' },
      ],
      faq: [
        { q: 'Можно ли удобрять газоны в Майами-Дейд в ноябре?', a: 'Да. Запрет на азот и фосфор действует с 15 мая по 31 октября. С 1 ноября продолжают действовать годовые и разовые нормы азота, правило 65% медленного высвобождения для гранул, анализ почвы для фосфора и защитные зоны в 20 футов.' },
        { q: 'Нужен ли сертификат на удобрения каждому работнику?', a: 'Сертификат FDACS нужен каждому, кто вносит удобрения за деньги. Работник без сертификата не может вносить их под присмотром коллеги. Исключение — только для тех, кто работает удобрением и инструментом хозяина или жильца на частных домах.' },
        { q: 'Можно ли с сертификатом на удобрения вносить weed-and-feed?', a: 'Нет. Сертификат LF не распространяется на смеси пестицидов с удобрениями. Для пестицидов на газоне нужны лицензии на pest control по главе 482 законов Флориды.' },
        { q: 'Какая страховка нужна для сертификата на гербициды?', a: 'Для сертификата commercial landscape maintenance нужно показать сертификат страхования о том, что работодатель соблюдает ст. 482.071(4): $250,000/$500,000 за вред здоровью и $250,000/$500,000 за ущерб имуществу либо единый лимит $500,000.' },
      ],
      sources: [
        { label: 'Округ Майами-Дейд (DERM): правила по удобрениям, глава 18C (на английском)', url: S.mdc },
        { label: 'Законы Флориды, ст. 482.1562 (2026): сертификат на коммерческое внесение удобрений (на английском)', url: S.s4821562 },
        { label: 'Законы Флориды, ст. 403.9338 (2026): обучение best management practices (на английском)', url: S.s4039338 },
        { label: 'Законы Флориды, ст. 482.156 (2026): сертификат для персонала по обслуживанию ландшафта (на английском)', url: S.s482156 },
        { label: 'Законы Флориды, ст. 482.071 (2026): лицензии и минимальная финансовая ответственность (на английском)', url: S.s482071 },
        { label: 'FDACS: нужна ли лицензия для коммерческого внесения удобрений? (на английском)', url: S.fdacs },
        { label: 'UF/IFAS Florida-Friendly Landscaping: сертификат LF на удобрения (на английском)', url: S.ifasLf },
        { label: 'UF/IFAS Florida-Friendly Landscaping: FAQ по курсу GI-BMP (на английском)', url: S.ifasFaq },
        { label: 'UF/IFAS Extension Майами-Дейд: новый ордонанс округа по удобрениям (на английском)', url: S.ifas },
        { label: 'Ордонанс округа Майами-Дейд № 21-26 (удобрения; гл. 18C, на английском)', url: S.mdcOrd },
        { label: 'Департамент страхования Техаса: commercial general liability, исключения по загрязнению (на английском)', url: S.tdi },
      ],
    },
  },
};
