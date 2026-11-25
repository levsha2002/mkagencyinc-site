import type { BlogPost } from '../types';

// New article 2026-11-25 (ET) (content plan 2026-11, row 2026-11-25; content_calendar.csv row 66).
// Facts checked 2026-11-25 against official sources (raw copies in /workspace/burstpipes/raw/; notes in
// /workspace/articles/burst-pipes-cold-weather-florida-insurance_sources.md):
// - 44 CFR 59.1: flood = general and temporary condition of partial or complete inundation of normally dry land areas.
// - SFIP Dwelling Form, 44 CFR Part 61 App. A(1): II.B (2+ acres or 2+ properties, one yours; overflow, unusual and
//   rapid accumulation/runoff, mudflow); V.D.1-2 pressure or weight of ice, freezing or thawing excluded; V.D.4 water,
//   moisture, mildew or mold damage primarily from a condition substantially confined to the dwelling or within your
//   control, incl. failure/stoppage/breakage of water or sewer lines, fixtures or equipment.
// - FloodSmart "Buy a policy": most homeowners and renters insurance does not cover flood; 30 days to take effect.
// - Florida DFS homeowners overview: HO-1/HO-2 specified perils, HO-3 all perils except excluded, HO-6 normally named
//   perils; flood not covered by homeowners; a single water damage claim may not be the sole reason for cancellation
//   or nonrenewal unless the insured failed to take action reasonably requested by the insurer.
// - F.S. 627.70132 (2026): notice within 1 year after date of loss; supplemental 18 months.
// - F.S. 627.70131 (2026): acknowledge within 7 calendar days; pay or deny within 60 days after notice.
// - F.S. 627.7142 (2026) Homeowner Claims Bill of Rights, "You are advised to": contact insurer before repair
//   contract (managed repair / preferred vendors); make and document emergency repairs; keep damaged property if
//   feasible; keep receipts; photos/video before and after.
// - Citizens 2021 form changes (OIR-approved, policies eff. on/after Feb 1, 2021): HO-3, HO-6, DP-3 updates incl.
//   reasonable emergency measures and exclusion for constant or repeated seepage or leakage of water or steam.
// - Citizens report-a-claim page: 24/7 hotline 866.411.2742, myPolicy; offices closed Nov 25-27, 2026 (Thanksgiving).
// - Miami-Dade WASD leak detection: house valve generally on outside wall where line enters home or near water
//   heater; WASD maintains service up to and including the meter box; account holder responsible past the meter.
//   WASD contact page: 24-hour emergency line 305-274-9272 (broken or leaking water or sewer pipes, meters).
// - NWS Miami Cold Weather Forecast Page (expected minimum apparent temperatures by county); NWS "Before extreme cold"
//   (take precautions so water pipes do not freeze); Ready.gov winter weather (insulation, caulking, weather stripping).
// No private insurer named. No cost or outcome claims.
const S = {
  cfr591: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-59/subpart-A/section-59.1',
  sfip: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/appendix-Appendix%20A(1)%20to%20Part%2061',
  floodsmart: 'https://www.floodsmart.gov/get-insured/buy-a-policy',
  dfsHome: 'https://myfloridacfo.com/division/consumers/understanding-insurance/homeownersinsuranceoverview',
  s70132: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.70132.html',
  s70131: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.70131.html',
  s7142: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.7142.html',
  cit2021: 'https://www.citizensfla.com/-/20201210-2021-form-changes',
  citReport: 'https://www.citizensfla.com/report-a-claim',
  wasdLeak: 'https://www.miamidade.gov/global/water/leak-detection.page',
  wasdContact: 'https://www.miamidade.gov/global/water/contact-water-sewer.page',
  nwsCold: 'https://www.weather.gov/mfl/coldweather',
  nwsColdBefore: 'https://www.weather.gov/safety/cold-before',
  ready: 'https://www.ready.gov/winter-weather',
  readyEs: 'https://www.ready.gov/es/invierno',
  readyRu: 'https://www.ready.gov/ru/winter-weather',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'burst-pipes-cold-weather-florida-insurance',
  datePublished: '2026-11-25',
  translations: {
    en: {
      title: 'Cold Nights and Burst Pipes in Florida: Water Damage vs. Flood',
      metaTitle: 'Burst Pipe vs. Flood: Florida Home Insurance | M&K Agency',
      description: 'A burst pipe is not a flood. How the NFIP defines flood, how Florida homeowners policies handle plumbing leaks, and what to do in the first hour.',
      excerpt: 'Water on the floor after a pipe breaks feels like a flood, but insurance treats it as a different loss. Here is where the line is, and what to do if a pipe bursts.',
      ogAlt: 'Illustration of a Florida house on a cool night with a broken pipe spraying water inside and a closed shut-off valve',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'South Florida does get cold nights. When a winter front comes through, the National Weather Service in Miami posts expected minimum wind chills for Miami-Dade and nearby counties on its [Cold Weather Forecast Page](' + S.nwsCold + '). Pipes also fail on warm days, from age or a cracked supply line. Either way, when water sprays from a wall, people say “the house flooded.”' },
        { type: 'p', text: 'For insurance, that word matters: a burst pipe and a flood are different perils, usually handled by different policies. If the water came up through your drains, read our separate guide on [water backup vs. flood](/en/blog/water-backup-vs-flood-insurance-florida). This article is about water that escapes from your own plumbing.' },

        { type: 'h2', text: 'Why a burst pipe is not a “flood”' },
        { type: 'p', text: 'Federal rules for the National Flood Insurance Program (NFIP) define a flood as a **general and temporary condition** of partial or complete inundation of normally dry land. The NFIP policy for homes, the Dwelling Form, adds that it must cover **two or more acres, or two or more properties (one of which is yours)**, and come from the overflow of inland or tidal waters, the unusual and rapid accumulation or runoff of surface water, or mudflow.' },
        { type: 'p', text: 'A pipe that breaks inside one house does not meet that definition. The Dwelling Form also lists exclusions that fit a cold-night burst almost word for word:' },
        { type: 'ul', items: [
          '**Freezing or thawing**, and the pressure or weight of ice.',
          'Water, moisture, mildew or mold damage that results mainly from a condition **substantially confined to the dwelling** or within your control, including the **failure or breakage of water lines**, fixtures or equipment.',
        ] },
        { type: 'p', text: 'So even if you carry flood insurance, a burst pipe is generally not a flood claim. It is a question for your homeowners policy.' },

        { type: 'h2', text: 'Where a burst pipe usually lands: your homeowners policy' },
        { type: 'p', text: 'Florida’s Department of Financial Services (DFS) explains that the main difference between homeowners forms is the perils covered. Basic and broad forms (HO-1, HO-2) cover the structure for perils named in the policy. A special form (HO-3) covers the structure for all perils except those the policy specifically excludes. A condo unit owner’s policy (HO-6) normally covers named perils. Your form shapes how a plumbing loss is read.' },
        { type: 'p', text: 'Many homeowners policies also separate a **sudden, accidental discharge** of water from a pipe or appliance from damage caused by a **leak that went on over time**. Citizens Property Insurance Corporation is one public example: its HO-3, HO-6 and DP-3 forms include an exclusion for constant or repeated seepage or leakage of water or steam, and Citizens listed changes to that exclusion and to its reasonable emergency measures provision when the Florida Office of Insurance Regulation approved form updates for policies effective on or after February 1, 2021. Other insurers use their own wording, limits and deductibles, so check your policy.' },
        { type: 'p', text: 'Questions worth asking about your own form:' },
        { type: 'ul', items: [
          'Does it cover accidental discharge of water from plumbing, and is there a special limit or deductible for water losses?',
          'How does it treat repairing the broken pipe itself, compared with the floors and walls the water damaged?',
          'Condo owners: where does the association’s master policy end and your HO-6 start? See [condo association vs. HO-6](/en/blog/condo-association-vs-ho6-florida).',
        ] },
        { type: 'callout', title: 'Quick test', text: 'Did the water come from inside your plumbing, or did it move across the ground from outside after rain or high tide? Inside plumbing points to your homeowners policy. Water rising across your neighborhood points to flood insurance.' },

        { type: 'h2', text: 'If a pipe bursts: what to do first' },
        { type: 'ol', items: [
          '**Shut off the water.** Miami-Dade Water and Sewer (WASD) says the house valve is generally on an outside wall where the water line enters the home, or near the water heater. WASD maintains service up to and including the meter box; pipes past the meter are the owner’s. If the break is at the meter or in the street, call the WASD 24-hour line at 305-274-9272.',
          '**Prevent more damage and keep proof.** Florida’s Homeowner Claims Bill of Rights (s. 627.7142) tells policyholders to make and document emergency repairs needed to prevent further damage, keep the damaged property if feasible, keep all receipts, and take photos or video before and after repairs. It also advises contacting your insurer before you sign a repair contract, to confirm any managed repair provisions or preferred vendors.',
          '**Ask the plumber for a written report** that says where and why the pipe failed. The cause often decides how a water claim is handled.',
          '**Report the claim promptly.** Under s. 627.70132, a property claim is barred unless notice is given within 1 year after the date of loss (18 months for a supplemental claim). Do not wait that long. After you report, Florida law requires the insurer to acknowledge your communication within 7 calendar days and to pay or deny the claim within 60 days of notice, unless factors beyond its control prevent it.',
        ] },
        { type: 'p', text: '**Citizens policyholders:** claims can be reported 24/7 through myPolicy or at 866.411.2742. Citizens says its offices are closed November 25–27 for Thanksgiving, but the claims line stays open.' },
        { type: 'p', text: 'One more point from DFS: a single water damage claim may not be the sole reason an insurer cancels or nonrenews your policy, unless it can show you failed to take reasonably necessary action it requested to prevent a similar loss. Fixing the cause matters.' },

        { type: 'h2', text: 'Before a cold night' },
        { type: 'ul', items: [
          '**Watch the forecast.** The NWS advises taking precautions so water pipes do not freeze. Check the NWS Miami cold weather page when a front is coming.',
          '**Seal out the cold.** Ready.gov suggests insulation, caulking and weather stripping to keep the cold out.',
          '**Heat safely.** If you use a space heater, read our [space heater safety guide](/en/blog/space-heater-fire-safety-florida-homes).',
        ] },

        { type: 'h2', text: 'Snowbirds, second homes and empty houses' },
        { type: 'p', text: 'A leak in an empty house can run for days unnoticed, which is exactly where the line between a sudden discharge and a long-term leak gets tested. If your Florida home sits empty part of the season, consider closing the main valve while you are away, have someone check the house regularly, and read your policy for any vacancy or unoccupancy conditions. Winter residents can also see our guide to [license, registration and insurance for snowbirds](/en/blog/winter-residents-florida-license-registration-insurance).' },

        { type: 'h2', text: 'Flood still needs its own policy' },
        { type: 'p', text: 'FloodSmart, FEMA’s consumer site, notes that most homeowners and renters policies do not cover flood, and a new NFIP policy generally takes 30 days to go into effect. If you insure with Citizens, also read about the [flood requirement starting in 2027](/en/blog/citizens-flood-insurance-requirement-2027), and see our [flood insurance page](/en/flood-insurance-homestead-fl).' },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Bring your homeowners and flood declarations pages to our office at 33550 S Dixie Hwy, Suite 102, Florida City (Monday–Friday 9–6, Saturday by appointment), or call [(305) 859-3953](' + TEL + '). A licensed agent will review how your policy treats water damage and flood. Learn more on our [homeowners insurance page](/en/homeowners-insurance-florida-city), review our [year-end renewal checklist](/en/blog/year-end-homeowners-renewal-checklist-florida), or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms of the policy you choose. Talk with a licensed agent about your situation.' },
      ],
      faq: [
        { q: 'Is a burst pipe considered a flood for insurance?', a: 'Generally no. The NFIP defines flood as a general condition affecting two or more acres or properties, and its Dwelling Form excludes freezing and damage from broken water lines confined to the dwelling.' },
        { q: 'Does homeowners insurance cover a burst or frozen pipe in Florida?', a: 'It depends on your form, exclusions, limits and deductible. Many policies treat a sudden accidental discharge differently from a slow leak over time. Check your declarations page and policy, or ask a licensed agent to go through it with you.' },
        { q: 'How long do I have to report water damage in Florida?', a: 'Florida law (s. 627.70132) bars a property claim unless notice is given within 1 year after the date of loss. Report as soon as you can, document the damage, and make reasonable emergency repairs to prevent more damage.' },
      ],
      sources: [
        { label: 'eCFR: 44 CFR 59.1, definition of flood or flooding', url: S.cfr591 },
        { label: 'eCFR: 44 CFR Part 61, Appendix A(1), Standard Flood Insurance Policy, Dwelling Form (II.B, V.D, VII.G)', url: S.sfip },
        { label: 'FEMA FloodSmart: Buy a policy (homeowners policies and flood, 30-day wait)', url: S.floodsmart },
        { label: 'Florida DFS: Homeowners Insurance Overview (policy forms, flood, single water damage claim)', url: S.dfsHome },
        { label: 'Florida Statutes s. 627.70132 (2026), notice of property insurance claim', url: S.s70132 },
        { label: 'Florida Statutes s. 627.70131 (2026), insurer duty to acknowledge and pay or deny claims', url: S.s70131 },
        { label: 'Florida Statutes s. 627.7142 (2026), Homeowner Claims Bill of Rights', url: S.s7142 },
        { label: 'Citizens Property Insurance Corporation: 2021 personal lines form changes', url: S.cit2021 },
        { label: 'Citizens Property Insurance Corporation: Report a claim', url: S.citReport },
        { label: 'Miami-Dade County WASD: Leak detection tips and responsibility for leaky pipes', url: S.wasdLeak },
        { label: 'Miami-Dade County WASD: Contact and 24-hour emergencies', url: S.wasdContact },
        { label: 'National Weather Service Miami: Cold Weather Forecast Page', url: S.nwsCold },
        { label: 'National Weather Service: Before extreme cold', url: S.nwsColdBefore },
        { label: 'Ready.gov: Winter weather', url: S.ready },
      ],
    },
    es: {
      title: 'Noches frías y tuberías rotas en Florida: daño por agua no es lo mismo que inundación',
      metaTitle: 'Tubería rota vs. inundación en Florida | M&K Agency',
      description: 'Una tubería rota no es una inundación. Cómo define el NFIP la inundación, cómo ve una fuga su seguro de casa en Florida y qué hacer en la primera hora.',
      excerpt: 'Cuando revienta una tubería, el agua en el piso parece una inundación, pero el seguro lo trata como otro tipo de daño. Aquí le explicamos dónde está la línea y qué hacer.',
      ogAlt: 'Ilustración de una casa en Florida en una noche fresca, con una tubería rota que suelta agua adentro y una llave de paso cerrada',
      category: 'Seguro de casa',
      body: [
        { type: 'p', text: 'En el sur de Florida también hay noches frías. Cuando entra un frente de invierno, el Servicio Nacional de Meteorología (NWS) en Miami publica la sensación térmica mínima prevista para Miami-Dade y condados vecinos en su [página de pronóstico de frío](' + S.nwsCold + '). Pero las tuberías también fallan en días de calor, por los años o por una manguera agrietada. Sea cual sea la causa, cuando sale agua a chorros de una pared, la gente dice “se me inundó la casa”.' },
        { type: 'p', text: 'Para el seguro, esa palabra pesa: una tubería rota y una inundación son riesgos distintos, casi siempre con pólizas distintas. Si el agua subió por los desagües, vea nuestra guía sobre [retroceso del alcantarillado vs. inundación](/es/blog/water-backup-vs-flood-insurance-florida). Aquí hablamos del agua de su propia plomería.' },

        { type: 'h2', text: 'Por qué una tubería rota no es una “inundación”' },
        { type: 'p', text: 'Las normas federales del Programa Nacional de Seguro contra Inundaciones (NFIP) definen la inundación como una **condición general y temporal** en la que el agua cubre, total o parcialmente, terreno normalmente seco. La póliza del NFIP para viviendas (Dwelling Form) precisa que debe afectar **dos acres o más, o dos propiedades o más (una de ellas la suya)**, por desborde de aguas interiores o de marea, acumulación o escorrentía inusual y rápida de aguas superficiales, o flujo de lodo.' },
        { type: 'p', text: 'Una tubería rota dentro de una sola casa no cumple esa definición. Además, el Dwelling Form excluye:' },
        { type: 'ul', items: [
          '**La congelación o el deshielo**, y la presión o el peso del hielo.',
          'El daño por agua, humedad, moho u hongos que se debe principalmente a una condición **limitada a la vivienda** o bajo su control, incluida la **falla o rotura de tuberías de agua**, accesorios o equipos.',
        ] },
        { type: 'p', text: 'Aunque tenga seguro de inundación, una tubería rota por lo general es un asunto de su póliza de casa.' },

        { type: 'h2', text: 'Dónde suele caer una tubería rota: su seguro de casa' },
        { type: 'p', text: 'Según el Departamento de Servicios Financieros de Florida (DFS), la diferencia principal entre los formularios son los riesgos cubiertos. Los formularios básico y amplio (HO-1, HO-2) cubren la estructura contra los riesgos que nombra la póliza; el especial (HO-3), contra todos salvo los excluidos expresamente; y la póliza de condominio (HO-6) normalmente cubre riesgos nombrados.' },
        { type: 'p', text: 'Muchas pólizas distinguen además entre una **descarga de agua repentina y accidental** de una tubería o un electrodoméstico y una **fuga que siguió durante un tiempo**. Un ejemplo público es Citizens Property Insurance Corporation: sus formularios HO-3, HO-6 y DP-3 excluyen la filtración o fuga constante o repetida de agua o vapor, según los cambios aprobados por la Oficina de Regulación de Seguros de Florida para pólizas vigentes desde el 1 de febrero de 2021, que también tocaron las medidas razonables de emergencia. Cada aseguradora usa su propia redacción, límites y deducibles; revise su póliza.' },
        { type: 'p', text: 'Preguntas que vale la pena hacerse sobre su propia póliza:' },
        { type: 'ul', items: [
          '¿Cubre la descarga accidental de agua de la plomería? ¿Hay un límite o un deducible especial para daños por agua?',
          'En condominio: ¿dónde termina la póliza maestra de la asociación y empieza su HO-6? Vea [asociación de condominio vs. HO-6](/es/blog/condo-association-vs-ho6-florida).',
        ] },
        { type: 'callout', title: 'Prueba rápida', text: '¿El agua salió de su plomería o entró desde afuera tras la lluvia o la marea alta? Plomería: empiece por su seguro de casa. Agua en todo el vecindario: seguro de inundación.' },

        { type: 'h2', text: 'Si revienta una tubería: lo primero que debe hacer' },
        { type: 'ol', items: [
          '**Cierre el agua.** El Departamento de Agua y Alcantarillado de Miami-Dade (WASD) indica que la llave de paso de la casa suele estar en una pared exterior, donde la tubería entra a la vivienda, o cerca del calentador de agua. WASD responde hasta la caja del medidor, inclusive; después del medidor, las tuberías son del dueño. Si la rotura está en el medidor o en la calle, llame a WASD (24 horas): 305-274-9272.',
          '**Evite más daños y guarde pruebas.** La Carta de Derechos del Propietario en Reclamos de Florida (s. 627.7142) aconseja hacer y documentar las reparaciones de emergencia necesarias, guardar lo dañado si es posible, conservar los recibos y tomar fotos o video antes y después de reparar. También aconseja llamar a su aseguradora antes de firmar un contrato de reparación, para confirmar si hay un programa de reparación administrada o contratistas preferidos.',
          '**Pida al plomero un informe escrito** que diga dónde y por qué falló la tubería. La causa suele decidir cómo se maneja el reclamo.',
          '**Reporte el reclamo pronto.** Según la s. 627.70132, un reclamo de propiedad queda prohibido si no se avisa dentro de 1 año desde la fecha del daño. No espere tanto. Después del aviso, la aseguradora debe acusar recibo en 7 días calendario y pagar o negar el reclamo en 60 días, salvo factores fuera de su control.',
        ] },
        { type: 'p', text: '**Asegurados de Citizens:** pueden reportar un reclamo las 24 horas por myPolicy o al 866.411.2742; sus oficinas cierran del 25 al 27 de noviembre por Acción de Gracias, pero esa línea sigue abierta.' },
        { type: 'p', text: 'Según el DFS, un solo reclamo por daño de agua no puede ser el único motivo para cancelar o no renovar su póliza, salvo que la aseguradora demuestre que usted no tomó las medidas razonables que le pidió para evitar un daño parecido. Reparar la causa importa.' },

        { type: 'h2', text: 'Antes de una noche fría' },
        { type: 'ul', items: [
          '**Siga el pronóstico.** El NWS recomienda tomar precauciones para que las tuberías no se congelen; consulte la página de frío del NWS Miami cuando llegue un frente.',
          '**Que no entre el frío.** Ready.gov sugiere aislamiento, sellador y burletes en puertas y ventanas.',
          '**Caliéntese con cuidado.** Si usa un calentador portátil, lea nuestra [guía de seguridad con calentadores](/es/blog/space-heater-fire-safety-florida-homes).',
        ] },

        { type: 'h2', text: 'Residentes de invierno, segundas casas y viviendas vacías' },
        { type: 'p', text: 'En una casa vacía, una fuga puede correr días sin que nadie la vea, y ahí se pone a prueba esa diferencia entre descarga repentina y fuga prolongada. Si su casa pasa parte de la temporada sola, piense en cerrar la llave principal al irse, pida a alguien que la revise y lea en su póliza las condiciones para viviendas desocupadas. Vea también nuestra guía sobre [licencia, registro y seguro para residentes de invierno](/es/blog/winter-residents-florida-license-registration-insurance).' },

        { type: 'h2', text: 'La inundación necesita su propia póliza' },
        { type: 'p', text: 'FloodSmart, el sitio de FEMA, recuerda que la mayoría de las pólizas de casa y de inquilino no cubren inundación y que una póliza nueva del NFIP suele tardar 30 días en entrar en vigor. Si está asegurado con Citizens, lea también sobre el [requisito de seguro de inundación desde 2027](/es/blog/citizens-flood-insurance-requirement-2027) y visite nuestra [página de seguro de inundación](/es/flood-insurance-homestead-fl).' },

        { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
        { type: 'p', text: 'Traiga las declaraciones de su seguro de casa y de inundación a nuestra oficina en 33550 S Dixie Hwy, Suite 102, Florida City (lunes a viernes de 9 a 6, sábados con cita), o llame al [(305) 859-3953](' + TEL + '). Un agente con licencia revisará cómo trata su póliza el daño por agua y la inundación. Vea nuestra [página de seguro de casa](/es/homeowners-insurance-florida-city), repase nuestra [lista para la renovación de fin de año](/es/blog/year-end-homeowners-renewal-checklist-florida) o [pida una cotización](/es/quote).' },
        { type: 'p', text: 'La cobertura depende de los términos de su póliza. Hable con un agente con licencia sobre su caso.' },
      ],
      faq: [
        { q: '¿Una tubería rota cuenta como inundación para el seguro?', a: 'Por lo general, no. El NFIP define la inundación como una condición general que afecta dos acres o más, o dos propiedades o más, y su Dwelling Form excluye la congelación y la rotura de tuberías limitada a la vivienda.' },
        { q: '¿El seguro de casa cubre una tubería rota o congelada en Florida?', a: 'Depende de su formulario, exclusiones, límites y deducible. Muchas pólizas no tratan igual una descarga repentina y una fuga lenta de semanas. Revise su póliza con un agente con licencia.' },
        { q: '¿Cuánto tiempo tengo para reportar un daño por agua en Florida?', a: 'La ley de Florida (s. 627.70132) prohíbe el reclamo si no se avisa dentro de 1 año desde la fecha del daño. Reporte cuanto antes, documente todo y haga las reparaciones de emergencia necesarias.' },
      ],
      sources: [
        { label: 'eCFR: 44 CFR 59.1, definición de inundación (en inglés)', url: S.cfr591 },
        { label: 'eCFR: 44 CFR Parte 61, Apéndice A(1), póliza estándar del NFIP, Dwelling Form (II.B, V.D, VII.G) (en inglés)', url: S.sfip },
        { label: 'FEMA FloodSmart: Comprar una póliza (seguro de casa e inundación, espera de 30 días) (en inglés)', url: S.floodsmart },
        { label: 'DFS de Florida: Resumen del seguro de propietario (formularios, inundación, un solo reclamo por agua) (en inglés)', url: S.dfsHome },
        { label: 'Estatutos de Florida s. 627.70132 (2026), aviso de reclamo de seguro de propiedad (en inglés)', url: S.s70132 },
        { label: 'Estatutos de Florida s. 627.70131 (2026), plazos para acusar recibo y pagar o negar reclamos (en inglés)', url: S.s70131 },
        { label: 'Estatutos de Florida s. 627.7142 (2026), Carta de Derechos del Propietario en Reclamos (en inglés)', url: S.s7142 },
        { label: 'Citizens Property Insurance Corporation: cambios de formularios 2021 (en inglés)', url: S.cit2021 },
        { label: 'Citizens Property Insurance Corporation: Reportar un reclamo (en inglés)', url: S.citReport },
        { label: 'Condado de Miami-Dade, WASD: detección de fugas y responsabilidad por tuberías (en inglés)', url: S.wasdLeak },
        { label: 'Condado de Miami-Dade, WASD: contacto y emergencias 24 horas (en inglés)', url: S.wasdContact },
        { label: 'Servicio Nacional de Meteorología Miami: página de pronóstico de frío (en inglés)', url: S.nwsCold },
        { label: 'Servicio Nacional de Meteorología: antes del frío extremo (en inglés)', url: S.nwsColdBefore },
        { label: 'Ready.gov: Clima invernal', url: S.readyEs },
      ],
    },
    ru: {
      title: 'Холодные ночи и прорыв труб во Флориде: протечка и наводнение — не одно и то же',
      metaTitle: 'Прорыв трубы или наводнение во Флориде | M&K Agency',
      description: 'Прорыв трубы — это не наводнение. Как NFIP определяет наводнение, как страховка дома во Флориде смотрит на протечки и что делать в первый час.',
      excerpt: 'Когда лопается труба, вода на полу выглядит как наводнение, но для страховки это совсем другой убыток. Объясняем, где проходит граница и что делать, если прорвало трубу.',
      ogAlt: 'Иллюстрация: дом во Флориде прохладной ночью, внутри из лопнувшей трубы бьёт вода, рядом закрытый запорный кран',
      category: 'Страхование дома',
      body: [
        { type: 'p', text: 'В Южной Флориде тоже бывают холодные ночи. Когда приходит зимний фронт, Национальная метеослужба (NWS) в Майами публикует прогноз минимальной ощущаемой температуры для Майами-Дейд и соседних округов на своей [странице холодной погоды](' + S.nwsCold + '). Но трубы лопаются и в тёплые дни — от старости или из-за треснувшего шланга. Причины разные, а фраза, когда вода хлещет из стены, одна: «меня затопило».' },
        { type: 'p', text: 'Для страховки это слово важно. Прорыв трубы и наводнение — разные риски, и чаще всего их покрывают разные полисы с разными правилами. Если вода поднялась через сливы и канализацию, прочитайте наш отдельный материал о том, [чем обратный ток канализации отличается от наводнения](/ru/blog/water-backup-vs-flood-insurance-florida). Здесь речь о воде, которая вырвалась из вашей собственной сантехники.' },

        { type: 'h2', text: 'Почему прорыв трубы — не «наводнение»' },
        { type: 'p', text: 'Федеральные правила Национальной программы страхования от наводнений (NFIP) определяют наводнение как **общее и временное состояние**, при котором вода полностью или частично заливает обычно сухую территорию. Полис NFIP для жилых домов (Dwelling Form) уточняет: затоплено должно быть **не меньше двух акров или не меньше двух участков (один из них ваш)**, а вода должна прийти от разлива внутренних или приливных вод, от необычно быстрого скопления или стока поверхностных вод либо от селевого потока.' },
        { type: 'p', text: 'Труба, лопнувшая в одном доме, под это определение не подходит. Кроме того, в Dwelling Form есть исключения, которые почти дословно описывают холодную ночь:' },
        { type: 'ul', items: [
          '**Замерзание или оттаивание**, а также давление или вес льда.',
          'Ущерб от воды, сырости, грибка или плесени, вызванный в основном проблемой, **ограниченной самим домом** или находящейся под вашим контролем, в том числе **поломкой или разрывом водопроводных труб**, сантехники или оборудования.',
        ] },
        { type: 'p', text: 'Поэтому даже при наличии страховки от наводнения прорыв трубы, как правило, не будет страховым случаем по наводнению. Это вопрос к вашему полису страхования дома.' },

        { type: 'h2', text: 'Куда обычно относится прорыв трубы: полис страхования дома' },
        { type: 'p', text: 'Департамент финансовых услуг Флориды (DFS) поясняет, что главное различие между формами полисов — перечень покрываемых рисков. Базовая и расширенная формы (HO-1, HO-2) покрывают строение от рисков, названных в полисе. Специальная форма (HO-3) покрывает строение от всех рисков, кроме прямо исключённых. Полис владельца квартиры в кондоминиуме (HO-6) обычно покрывает названные риски. От того, какая у вас форма, зависит, как будет рассматриваться ущерб от сантехники.' },
        { type: 'p', text: 'Многие полисы также разделяют **внезапный и случайный выброс воды** из трубы или бытового прибора и ущерб от **протечки, которая продолжалась какое-то время**. Публичный пример — Citizens Property Insurance Corporation: в её формах HO-3, HO-6 и DP-3 есть исключение для постоянной или повторяющейся утечки воды или пара, и Citizens сообщала об изменениях в этом исключении и в положении о разумных экстренных мерах, когда Управление по регулированию страхования Флориды одобрило новые формы для полисов, вступающих в силу с 1 февраля 2021 года. У других страховщиков свои формулировки, лимиты и франшизы, так что проверьте свой полис.' },
        { type: 'p', text: 'Что стоит выяснить про свой полис:' },
        { type: 'ul', items: [
          'Покрывает ли он случайный выброс воды из сантехники? Есть ли отдельный лимит или отдельная франшиза по ущербу от воды?',
          'Как оплачивается ремонт самой трубы по сравнению с полами и стенами, которые пострадали от воды?',
          'Если у вас квартира в кондоминиуме: что покрывает общий полис ассоциации и где начинается ваш HO-6? Подробнее — в статье [ассоциация кондоминиума и полис HO-6](/ru/blog/condo-association-vs-ho6-florida).',
        ] },
        { type: 'callout', title: 'Быстрая проверка', text: 'Вода вырвалась из вашей сантехники или пришла снаружи, по земле, после дождя или высокого прилива? Если из сантехники — начинайте с полиса страхования дома. Если вода стоит по всей улице — думайте о страховке от наводнения.' },

        { type: 'h2', text: 'Если прорвало трубу: первые шаги' },
        { type: 'ol', items: [
          '**Перекройте воду.** Департамент водоснабжения и канализации Майами-Дейд (WASD) пишет, что домовой кран обычно находится на наружной стене, где водопровод входит в дом, или рядом с водонагревателем. WASD отвечает за водоснабжение до счётчика включительно; всё, что после счётчика, — зона ответственности владельца. Если прорыв у счётчика или на улице, звоните на круглосуточную аварийную линию WASD: 305-274-9272.',
          '**Не дайте ущербу вырасти и сохраните доказательства.** Билль о правах домовладельца при страховых претензиях (s. 627.7142) советует сделать и задокументировать экстренный ремонт, необходимый, чтобы предотвратить дальнейший ущерб, по возможности сохранить повреждённые вещи, сохранить все чеки и снять фото или видео до и после ремонта. Там же сказано, что до подписания договора на ремонт стоит связаться со страховщиком и уточнить, нет ли в полисе условий об управляемом ремонте или рекомендованных подрядчиках.',
          '**Попросите сантехника дать письменное заключение**: где и почему лопнула труба. От причины часто зависит, как будет рассматриваться претензия.',
          '**Сообщите о страховом случае без промедления.** По s. 627.70132 претензия по страхованию имущества не принимается, если о ней не сообщили в течение 1 года с даты ущерба (18 месяцев для дополнительной претензии). Не тяните до последнего. После вашего обращения закон Флориды обязывает страховщика подтвердить его получение в течение 7 календарных дней и оплатить или отклонить претензию в течение 60 дней с момента уведомления, если этому не мешают обстоятельства вне его контроля.',
        ] },
        { type: 'p', text: '**Клиенты Citizens:** о страховом случае можно сообщить круглосуточно через myPolicy или по телефону 866.411.2742. По данным Citizens, офисы закрыты 25–27 ноября на День благодарения, но линия приёма претензий работает.' },
        { type: 'p', text: 'И ещё одно уточнение от DFS: одна претензия по ущербу от воды не может быть единственной причиной расторжения или непродления полиса, если только страховщик не докажет, что вы не приняли разумные меры, которые он просил принять, чтобы подобный ущерб не повторился. Поэтому причину протечки нужно устранить.' },

        { type: 'h2', text: 'Перед холодной ночью' },
        { type: 'ul', items: [
          '**Следите за прогнозом.** NWS советует заранее принять меры, чтобы водопроводные трубы не замёрзли. Когда приближается фронт, загляните на страницу холодной погоды NWS Майами.',
          '**Не пускайте холод в дом.** Ready.gov рекомендует теплоизоляцию, герметик и уплотнители для дверей и окон.',
          '**Обогревайтесь безопасно.** Если пользуетесь обогревателем, прочитайте наши [советы по безопасности обогревателей](/ru/blog/space-heater-fire-safety-florida-homes).',
        ] },

        { type: 'h2', text: 'Зимние жители, второй дом и пустующее жильё' },
        { type: 'p', text: 'В пустом доме протечка может идти несколько дней, и никто её не заметит. Именно здесь граница между внезапным выбросом воды и длительной протечкой становится особенно важной. Если ваш дом во Флориде часть сезона стоит пустым, подумайте о том, чтобы перекрывать главный кран на время отъезда, попросите кого-то регулярно заходить и проверьте в полисе условия для незанятого или пустующего жилья. Тем, кто проводит здесь зиму, пригодится и наш материал о [правах, регистрации и страховке для зимних жителей](/ru/blog/winter-residents-florida-license-registration-insurance).' },

        { type: 'h2', text: 'От наводнения нужен отдельный полис' },
        { type: 'p', text: 'FloodSmart, потребительский сайт FEMA, напоминает, что большинство полисов для домовладельцев и арендаторов не покрывают наводнение, а новый полис NFIP обычно вступает в силу через 30 дней. Если вы застрахованы в Citizens, прочитайте и о [требовании страховки от наводнения с 2027 года](/ru/blog/citizens-flood-insurance-requirement-2027), а также загляните на нашу [страницу о страховании от наводнения](/ru/flood-insurance-homestead-fl).' },

        { type: 'h2', text: 'Чем поможет M&K Agency' },
        { type: 'p', text: 'Принесите страницы деклараций по страховке дома и от наводнения в наш офис по адресу 33550 S Dixie Hwy, Suite 102, Florida City (понедельник–пятница с 9 до 6, суббота по записи) или позвоните по номеру [(305) 859-3953](' + TEL + '). Лицензированный агент разберёт с вами, как ваш полис относится к ущербу от воды, наводнению и протечкам. Мы говорим по-русски: подробнее на странице [русскоязычного страхового агента в Майами](/ru/russian-speaking-insurance-agent-miami). Смотрите также нашу [страницу страхования дома](/ru/homeowners-insurance-florida-city), [чек-лист перед продлением полиса в конце года](/ru/blog/year-end-homeowners-renewal-checklist-florida) или [запросите расчёт](/ru/quote).' },
        { type: 'p', text: 'Покрытие зависит от условий выбранного вами полиса. Обсудите свою ситуацию с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Считается ли прорыв трубы наводнением для страховки?', a: 'Как правило, нет. NFIP определяет наводнение как общее состояние, затрагивающее не меньше двух акров или двух участков, а Dwelling Form исключает замерзание и ущерб от разрыва водопроводных труб в пределах дома. Прорыв трубы обычно относится к полису страхования дома.' },
        { q: 'Покрывает ли страховка дома во Флориде лопнувшую или замёрзшую трубу?', a: 'Зависит от формы полиса, исключений, лимитов и франшизы. Многие полисы по-разному относятся к внезапному случайному выбросу воды и к медленной протечке, которая шла неделями. Проверьте страницу деклараций и сам полис или разберите его с лицензированным агентом.' },
        { q: 'Сколько времени есть, чтобы заявить об ущербе от воды во Флориде?', a: 'По закону Флориды (s. 627.70132) претензия по имуществу не принимается, если о ней не сообщили в течение 1 года с даты ущерба. Сообщайте как можно раньше, документируйте повреждения и сделайте разумный экстренный ремонт, чтобы ущерб не вырос.' },
      ],
      sources: [
        { label: 'eCFR: 44 CFR 59.1, определение наводнения (на англ.)', url: S.cfr591 },
        { label: 'eCFR: 44 CFR, часть 61, приложение A(1), стандартный полис NFIP, Dwelling Form (II.B, V.D, VII.G) (на англ.)', url: S.sfip },
        { label: 'FEMA FloodSmart: покупка полиса (страховка дома и наводнение, 30 дней ожидания) (на англ.)', url: S.floodsmart },
        { label: 'DFS Флориды: обзор страхования домовладельцев (формы полисов, наводнение, одна претензия по воде) (на англ.)', url: S.dfsHome },
        { label: 'Статуты Флориды s. 627.70132 (2026), уведомление о претензии по страхованию имущества (на англ.)', url: S.s70132 },
        { label: 'Статуты Флориды s. 627.70131 (2026), сроки подтверждения и оплаты или отказа (на англ.)', url: S.s70131 },
        { label: 'Статуты Флориды s. 627.7142 (2026), Билль о правах домовладельца при страховых претензиях (на англ.)', url: S.s7142 },
        { label: 'Citizens Property Insurance Corporation: изменения форм полисов 2021 года (на англ.)', url: S.cit2021 },
        { label: 'Citizens Property Insurance Corporation: как сообщить о страховом случае (на англ.)', url: S.citReport },
        { label: 'Округ Майами-Дейд, WASD: поиск протечек и ответственность за трубы (на англ.)', url: S.wasdLeak },
        { label: 'Округ Майами-Дейд, WASD: контакты и круглосуточная аварийная линия (на англ.)', url: S.wasdContact },
        { label: 'Национальная метеослужба, Майами: страница холодной погоды (на англ.)', url: S.nwsCold },
        { label: 'Национальная метеослужба: перед сильными холодами (на англ.)', url: S.nwsColdBefore },
        { label: 'Ready.gov: зимняя погода', url: S.readyRu },
      ],
    },
  },
};
