import type { BlogPost } from '../types';

// Facts checked 2026-10-12 against official sources: citizensfla.com "Get a Policy"
// (eligibility: no authorized offer, or all offers more than 20% higher; only appointed
// agents can sell), "Visiting Your Agent" (what to gather), "Clearinghouse" (required by
// s. 627.3518; proof of prior coverage, 45-day lapse note; renewal remarketing; an offer not
// more than 20% above the renewal premium means nonrenewal), "Flood", "Assessments"
// (policyholder surcharge up to 15%, emergency assessment up to 10% a year), "myPolicy",
// "Contact Us" (866.411.2742), "Depopulation" and the Oct. 10, 2026 binding bulletin;
// Citizens DP-1 coverage worksheet (Coverage A under $700,000, under $1,000,000 in
// Miami-Dade and Monroe); 2026 F.S. 627.351(6)(a)1. and 3., (6)(c)5.a.-b., (6)(n),
// 627.3518(6)(a). SB 1028 (2026, ch. 2026-150) mostly concerns commercial lines and is
// not described here. No private insurer is named.
const S = {
  getPolicy: 'https://www.citizensfla.com/-/content-get-a-policy-main-',
  visiting: 'https://www.citizensfla.com/visiting-your-agent',
  clearinghouse: 'https://www.citizensfla.com/clearinghouse',
  flood: 'https://www.citizensfla.com/flood',
  assessments: 'https://www.citizensfla.com/assessments',
  myPolicy: 'https://www.citizensfla.com/mypolicy',
  contact: 'https://www.citizensfla.com/contactus',
  depop: 'https://www.citizensfla.com/depopulation',
  binding: 'https://www.citizensfla.com/-/20261010-citizens-binding-suspension-has-been-lifted',
  windOnly: 'https://www.citizensfla.com/wind-only-eligibility',
  dp1: 'https://www.citizensfla.com/documents/20702/3728641/DP1+Comparison+Form+Citizens+Final.pdf/957f2911-ce32-4dc7-8e78-10692913a683',
  s351: 'https://www.flsenate.gov/Laws/Statutes/2026/627.351',
  s3518: 'https://www.flsenate.gov/Laws/Statutes/2026/627.3518',
};

export const post: BlogPost = {
  slug: 'citizens-property-insurance-local-agent',
  datePublished: '2026-10-12',
  translations: {
    en: {
      title: 'Citizens Property Insurance Through a Local Agent: Who Qualifies, How to Apply and What Happens at Renewal',
      metaTitle: 'Citizens Property Insurance: Eligibility & Renewal | M&K Agency',
      description: 'Who qualifies for Citizens Property Insurance in Florida, how the 20% rule and the Clearinghouse work, Miami-Dade value limits, and what changes at renewal.',
      ogAlt: 'A Florida home beside a checklist and a calendar marked for renewal',
      excerpt: 'Citizens is sold only through appointed agents, and eligibility is checked again at every renewal. Here is how the 20% rule, the Clearinghouse and the value limits work.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'Citizens Property Insurance Corporation is not a private company. Florida law created it as a government entity to insure property for owners who, in good faith, cannot get coverage in the private market ([s. 627.351(6)(a), F.S.](' + S.s351 + ')). Many South Miami-Dade homeowners start looking for it after a nonrenewal notice. This guide explains who qualifies, how an application works, what changes at every renewal, and where current policyholders can find their documents.' },

        { type: 'h2', text: 'Who can get a Citizens policy' },
        { type: 'p', text: 'Under Florida law, Citizens may write a new policy only when one of these is true ([Citizens: Get a Policy](' + S.getPolicy + ')):' },
        { type: 'ul', items: [
          'No Florida-authorized insurance company offers coverage for the property, or',
          'Every offer from an authorized insurer is **more than 20% higher** than the Citizens premium for comparable coverage.',
        ] },
        { type: 'p', text: 'That second test is known as the **20% rule**. In practice, the agent multiplies the Citizens premium by 1.2. If any authorized offer for comparable coverage comes in at or below that number, a primary residence is not eligible for Citizens ([s. 627.351(6)(c)5.a.](' + S.s351 + ')).' },
        { type: 'p', text: 'Second homes and rentals have a stricter version. For a home that is not a primary residence, an offer from an approved surplus lines insurer made through a take-out plan also counts ([s. 627.351(6)(c)5.b.](' + S.s351 + ')). In the Citizens statute’s rate section, a primary residence is described as the home the policyholder (or, for a rental, the tenant) lives in for more than 9 months of each year ([s. 627.351(6)(n)](' + S.s351 + ')).' },

        { type: 'h2', text: 'Value limits and other conditions' },
        { type: 'ul', items: [
          '**Value cap.** A home with a dwelling replacement cost of $700,000 or more is not eligible. For a condo unit, the cap applies to dwelling plus contents ([s. 627.351(6)(a)3.](' + S.s351 + ')). In counties where regulators find too little competition, the limit is under $1 million, and Citizens’ coverage worksheets list Miami-Dade and Monroe ([Citizens DP-1 worksheet](' + S.dp1 + ')). Replacement cost is what it would take to rebuild the house, not its sale price.',
          '**Flood insurance.** Most new and renewing Citizens personal residential policies that include wind must carry flood coverage by January 1, 2027. Condo unit-owner, tenant and wind-excluded policies are exempt ([Citizens: Flood](' + S.flood + ')). Details are in our guide to the [Citizens 2027 flood requirement](/en/blog/citizens-flood-insurance-requirement-2027).',
          '**Roof and condition.** Citizens has its own roof-age rules, explained in [Is your roof too old for home insurance?](/en/blog/roof-age-home-insurance-florida). Your agent will tell you which inspections, if any, the application needs ([Citizens: Visiting Your Agent](' + S.visiting + ')).',
          '**Wind-only policies.** In certain coastal areas Citizens offers policies that cover only wind ([s. 627.351(6)(b)](' + S.s351 + ')). Its [Wind-Only Eligibility](' + S.windOnly + ') tool checks an address.',
        ] },

        { type: 'h2', text: 'How to apply: only through a Citizens-appointed agent' },
        { type: 'p', text: 'You cannot buy a Citizens policy directly from Citizens. In its own words, “only appointed Citizens agents can help you purchase a Citizens policy,” and its Agent Look-Up tool lists them ([Citizens: Get a Policy](' + S.getPolicy + ')). Before placing a policy, the agent must run it through the **Clearinghouse**, a program required by [s. 627.3518, F.S.](' + S.s3518 + ') that checks private-market offers first. If the Clearinghouse returns an authorized offer at or below the 20% threshold, the home is not eligible for Citizens and the application stops there ([s. 627.3518(6)(a)](' + S.s3518 + '); [Citizens: Clearinghouse](' + S.clearinghouse + ')).' },
        { type: 'p', text: 'Citizens may ask the agent to upload proof of prior coverage: a renewal offer, a nonrenewal or cancellation notice, or purchase documents for a newly bought home. No proof is needed if coverage lapsed more than 45 days ago.' },

        { type: 'h3', text: 'What to gather before the appointment' },
        { type: 'p', text: 'Citizens suggests collecting as much of this as you can ([Visiting Your Agent](' + S.visiting + ')):' },
        { type: 'ul', items: [
          'Construction type, year built, number of rooms and total living area',
          'Roof covering, shape, condition and date of the last update',
          'Years the electrical, plumbing and heating/cooling systems were updated',
          'Wind-mitigation features and documents, such as a [wind mitigation inspection](/en/blog/wind-mitigation-inspection-florida)',
          'Front and back photos, plus details on any pool, alarm system, home business or nearby water',
        ] },
        { type: 'p', text: 'Also bring your current declarations page and any letter from your insurer. If you don’t have everything, your agent can help find the rest.' },

        { type: 'h2', text: 'What happens at every renewal' },
        { type: 'ul', items: [
          '**Your policy is shopped again.** Agents must remarket all Citizens business at renewal. For the main home and dwelling forms, any offer that is not more than 20% above the Citizens renewal premium results in a nonrenewal of the Citizens policy, and a new policy must be written with another insurer ([Citizens: Clearinghouse](' + S.clearinghouse + ')).',
          '**You can still choose.** If a Clearinghouse offer is more than 20% higher, you may take it or stay with Citizens ([s. 627.3518(6)(a)](' + S.s3518 + ')).',
          '**Take-out letters are a separate process.** Private insurers can also select Citizens policies through depopulation, and a missed deadline lets Citizens choose for you ([Citizens: Depopulation](' + S.depop + ')). See [how to compare a take-out offer](/en/blog/citizens-takeout-offer).',
          '**Assessments.** If a major storm leaves Citizens short of funds to pay claims, its policyholders can owe a surcharge of up to 15% of their premium. Emergency assessments of up to 10% a year can then apply to Citizens and most private-market policies ([Citizens: Assessments](' + S.assessments + ')).',
        ] },
        { type: 'callout', title: 'Storm season timing', text: 'New coverage can’t always be bound while a hurricane threatens. Citizens lifted its Hurricane Isaias binding suspension at 5 a.m. ET on October 10, 2026, and regular operations resumed ([Citizens bulletin](' + S.binding + ')). Don’t wait for a storm to fix a gap.' },

        { type: 'h2', text: 'Already with Citizens? Quick answers' },
        { type: 'ul', items: [
          '**Documents, claims and billing:** log in to [myPolicy](' + S.myPolicy + '). Registration needs your policy number, property ZIP code and the email on file with Citizens.',
          '**Phone:** claims (24 hours) and the Customer Care Center (weekdays, 8 a.m. to 5 p.m. ET) are both at 866.411.2742 ([Citizens: Contact Us](' + S.contact + ')).',
          '**Changes or cancellation:** go through your agent. Citizens recommends reviewing your coverage with your agent at least once a year.',
        ] },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Whether your home ends up with Citizens or a private-market policy, the comparison starts with your documents. Bring your declarations page and any nonrenewal, renewal or take-out letter to 33550 S Dixie Hwy, Suite 102, Florida City, or call (305) 859-3953. A licensed agent will explain how Citizens’ eligibility rules apply to your home and review the options available through our agency, in English, Spanish or Russian. We are open Monday through Friday, 9 to 6, and Saturdays by appointment. Start with our [homeowners insurance page](/en/homeowners-insurance-florida-city) or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you change or cancel coverage.' },
      ],
      faq: [
        { q: 'Can I buy a Citizens policy directly from Citizens?', a: 'No. Citizens says only appointed Citizens agents can help you purchase a policy, and its Agent Look-Up tool lists them. The agent must check private-market offers through the Clearinghouse first.' },
        { q: 'A private insurer offered me coverage. Can I still choose Citizens?', a: 'For a primary residence, only if every comparable offer from an authorized insurer is more than 20% higher than the Citizens premium. If an offer is within 20%, the home is not eligible for Citizens.' },
        { q: 'My house is worth more than $1 million. Can Citizens insure it?', a: 'The limit is based on dwelling replacement cost, not market value. In Miami-Dade and Monroe, Citizens can insure a home whose dwelling replacement cost is under $1 million; elsewhere the limit is under $700,000.' },
      ],
      sources: [
        { label: 'Citizens Property Insurance Corporation: Get a Policy (eligibility, appointed agents)', url: S.getPolicy },
        { label: 'Citizens: Clearinghouse (new business and renewal rules)', url: S.clearinghouse },
        { label: 'Citizens: Visiting Your Agent', url: S.visiting },
        { label: 'Citizens: Flood insurance requirements', url: S.flood },
        { label: 'Citizens: Assessments', url: S.assessments },
        { label: 'Citizens: Personal Lines Depopulation Program', url: S.depop },
        { label: 'Citizens: myPolicy', url: S.myPolicy },
        { label: 'Citizens: Contact Us', url: S.contact },
        { label: 'Citizens: Binding suspension lifted (Oct. 10, 2026)', url: S.binding },
        { label: 'Citizens: DP-1 coverage worksheet (Coverage A limits)', url: S.dp1 },
        { label: 'Florida Statutes s. 627.351 (2026)', url: S.s351 },
        { label: 'Florida Statutes s. 627.3518 (2026), Citizens Property Insurance Corporation policyholder eligibility clearinghouse program', url: S.s3518 },
      ],
    },
    es: {
      title: 'Citizens Property Insurance con un agente local: quién califica, cómo solicitarlo y qué pasa en cada renovación',
      metaTitle: 'Citizens Property Insurance: requisitos y renovación | M&K Agency',
      description: 'Quién califica para Citizens Property Insurance en Florida, cómo funcionan la regla del 20% y el Clearinghouse, el límite en Miami-Dade y qué pasa al renovar.',
      ogAlt: 'Una casa en Florida junto a una lista de verificación y un calendario marcado para la renovación',
      excerpt: 'Citizens solo se vende a través de agentes designados y su elegibilidad se revisa en cada renovación. Así funcionan la regla del 20%, el Clearinghouse y los límites de valor.',
      category: 'Seguro de casa',
      body: [
        { type: 'p', text: 'Citizens Property Insurance Corporation no es una compañía privada. La ley de Florida la creó como una entidad del gobierno para asegurar la propiedad de quienes, de buena fe, no consiguen cobertura en el mercado privado ([s. 627.351(6)(a), F.S.](' + S.s351 + ')). En el sur de Miami-Dade, muchos la buscan después de recibir un aviso de no renovación. Aquí explicamos quién califica, cómo se solicita y qué cambia en cada renovación.' },

        { type: 'h2', text: '¿Quién puede tener una póliza de Citizens?' },
        { type: 'p', text: 'Según la ley de Florida, Citizens solo puede emitir una póliza nueva si se cumple una de estas condiciones ([Citizens: Get a Policy](' + S.getPolicy + ')):' },
        { type: 'ul', items: [
          'Ninguna aseguradora autorizada en Florida ofrece cobertura para la propiedad, o',
          'Todas las ofertas de aseguradoras autorizadas cuestan **más de un 20% por encima** de la prima de Citizens por una cobertura comparable.',
        ] },
        { type: 'p', text: 'Esa segunda condición es la **regla del 20%**. En la práctica, el agente multiplica la prima de Citizens por 1.2. Si alguna oferta autorizada con cobertura comparable queda en esa cifra o por debajo, la residencia principal no califica para Citizens ([s. 627.351(6)(c)5.a.](' + S.s351 + ')).' },
        { type: 'p', text: 'Para segundas viviendas y casas de alquiler la regla es más estricta: también cuenta la oferta de una aseguradora de líneas excedentes (surplus lines) aprobada dentro de un plan de take-out ([s. 627.351(6)(c)5.b.](' + S.s351 + ')). En la sección de tarifas de la ley de Citizens, la residencia principal se describe como la vivienda donde el asegurado (o, si está alquilada, el inquilino) vive más de 9 meses al año ([s. 627.351(6)(n)](' + S.s351 + ')).' },

        { type: 'h2', text: 'Límites de valor y otras condiciones' },
        { type: 'ul', items: [
          '**Tope de valor.** Una casa cuyo costo de reconstrucción de la vivienda es de $700,000 o más no califica. En un condominio, el tope se aplica a la unidad más su contenido ([s. 627.351(6)(a)3.](' + S.s351 + ')). En los condados donde los reguladores determinan que no hay suficiente competencia, el límite es menos de $1 millón, y las hojas de cobertura de Citizens incluyen a Miami-Dade y Monroe ([hoja DP-1 de Citizens](' + S.dp1 + ')). El costo de reconstrucción no es el precio de venta.',
          '**Seguro de inundación.** La mayoría de las pólizas residenciales personales de Citizens que incluyen viento, nuevas o renovadas, deben tener seguro de inundación a más tardar el 1 de enero de 2027. Las pólizas de unidad de condominio, de inquilino y las que excluyen viento están exentas ([Citizens: Flood](' + S.flood + ')). Vea nuestra guía sobre el [requisito de inundación de Citizens en 2027](/es/blog/citizens-flood-insurance-requirement-2027).',
          '**Techo y estado de la casa.** Citizens tiene sus propias reglas sobre la edad del techo, explicadas en [¿Su techo es demasiado viejo para el seguro de casa?](/es/blog/roof-age-home-insurance-florida). Su agente le dirá qué inspecciones hacen falta, si alguna ([Citizens: Visiting Your Agent](' + S.visiting + ')).',
          '**Pólizas solo de viento.** En ciertas zonas costeras Citizens ofrece pólizas que cubren únicamente el viento ([s. 627.351(6)(b)](' + S.s351 + ')). Su herramienta [Wind-Only Eligibility](' + S.windOnly + ') revisa una dirección.',
        ] },

        { type: 'h2', text: 'Cómo solicitarla: solo con un agente designado por Citizens' },
        { type: 'p', text: 'Citizens no vende directamente: según la propia Citizens, solo sus agentes designados pueden ayudarle a comprar una póliza, y su herramienta Agent Look-Up los muestra ([Citizens: Get a Policy](' + S.getPolicy + ')). Antes de colocar la póliza, el agente debe pasar la solicitud por el **Clearinghouse**, un programa exigido por la [s. 627.3518, F.S.](' + S.s3518 + ') que primero busca ofertas en el mercado privado. Si aparece una oferta autorizada dentro del umbral del 20%, la casa no califica para Citizens y la solicitud no sigue adelante ([s. 627.3518(6)(a)](' + S.s3518 + '); [Citizens: Clearinghouse](' + S.clearinghouse + ')).' },
        { type: 'p', text: 'Citizens puede pedirle al agente prueba de su cobertura anterior: una oferta de renovación, un aviso de no renovación o de cancelación, o los documentos de compra si acaba de comprar la casa. No hace falta esa prueba si la cobertura lleva más de 45 días vencida.' },

        { type: 'h3', text: 'Qué reunir antes de la cita' },
        { type: 'p', text: 'Citizens recomienda reunir todo lo que pueda de esta lista ([Visiting Your Agent](' + S.visiting + ')):' },
        { type: 'ul', items: [
          'Tipo de construcción, año en que se construyó, número de cuartos y área habitable total',
          'Material, forma y estado del techo, y la fecha de su último cambio',
          'Años en que se actualizaron la electricidad, la plomería y el aire acondicionado o la calefacción',
          'Mejoras contra el viento y sus documentos, como una inspección de mitigación de viento (vea [My Safe Florida Home](/es/blog/my-safe-florida-home-2026))',
          'Fotos del frente y de atrás; datos sobre piscina, alarma, negocio en casa o agua cercana',
        ] },
        { type: 'p', text: 'Traiga también su página de declaraciones y las cartas de su aseguradora.' },

        { type: 'h2', text: 'Qué pasa en cada renovación' },
        { type: 'ul', items: [
          '**Su póliza se vuelve a cotizar.** Al renovar, el agente debe buscar ofertas privadas para toda póliza de Citizens. En los formularios principales de casa, cualquier oferta que no supere en más de un 20% la prima de renovación de Citizens lleva a la no renovación de la póliza de Citizens, y hay que emitir una póliza nueva con otra aseguradora ([Citizens: Clearinghouse](' + S.clearinghouse + ')).',
          '**Usted puede elegir.** Si la oferta del Clearinghouse cuesta más de un 20% por encima, puede aceptarla o seguir con Citizens ([s. 627.3518(6)(a)](' + S.s3518 + ')).',
          '**Las cartas de take-out son otro proceso.** Las aseguradoras privadas también pueden tomar pólizas de Citizens mediante la despoblación (depopulation). Si no registra su decisión antes de la fecha límite, Citizens asigna la póliza a la oferta con la prima estimada más baja ([Citizens: Depopulation](' + S.depop + ')).',
          '**Recargos (assessments).** Si una tormenta fuerte deja a Citizens sin fondos suficientes para pagar reclamos, sus asegurados pueden tener que pagar un recargo de hasta el 15% de la prima. Después pueden aplicarse recargos de emergencia de hasta el 10% al año a las pólizas de Citizens y a la mayoría de las del mercado privado ([Citizens: Assessments](' + S.assessments + ')).',
        ] },
        { type: 'callout', title: 'Ojo con la temporada de huracanes', text: 'No siempre se puede activar una cobertura nueva mientras amenaza un huracán. Citizens levantó la suspensión de nuevas pólizas por el huracán Isaías a las 5 a.m. (hora del Este) del 10 de octubre de 2026 ([boletín de Citizens](' + S.binding + ')). No espere a la próxima tormenta.' },

        { type: 'h2', text: '¿Ya tiene Citizens? Respuestas rápidas' },
        { type: 'ul', items: [
          '**Documentos, reclamos y facturas:** entre en [myPolicy](' + S.myPolicy + '). Para registrarse necesita el número de póliza, el código postal de la propiedad y el correo que Citizens tiene registrado.',
          '**Teléfono:** reclamos (las 24 horas) y el Centro de Atención al Cliente (días laborables, de 8 a.m. a 5 p.m., hora del Este) atienden en el 866.411.2742 ([Citizens: Contact Us](' + S.contact + ')).',
          '**Cambios o cancelación:** a través de su agente. Citizens recomienda revisar la cobertura con él al menos una vez al año.',
        ] },

        { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
        { type: 'p', text: 'Con Citizens o con una aseguradora privada, la comparación empieza por sus documentos. Traiga su página de declaraciones y cualquier carta de no renovación, de renovación o de take-out a 33550 S Dixie Hwy, Suite 102, Florida City, o llame al (305) 859-3953. Un agente con licencia le explicará cómo se aplican las reglas de Citizens a su casa y revisará las opciones de nuestra agencia, en español, inglés o ruso. Atendemos de lunes a viernes de 9 a 6, y los sábados con cita. Empiece por nuestra página de [seguro de casa](/es/homeowners-insurance-florida-city) o [pida una cotización](/es/quote).' },
        { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza. Hable con un agente con licencia antes de cambiar o cancelar su seguro.' },
      ],
      faq: [
        { q: '¿Puedo comprar una póliza directamente a Citizens?', a: 'No. Solo los agentes designados por Citizens pueden ayudarle a comprarla, y antes deben revisar las ofertas privadas a través del Clearinghouse.' },
        { q: 'Una aseguradora privada me ofreció cobertura. ¿Puedo quedarme con Citizens?', a: 'Si es su residencia principal, solo si todas las ofertas comparables de aseguradoras autorizadas cuestan más de un 20% por encima de la prima de Citizens. Si alguna queda dentro de ese 20%, la casa no califica para Citizens.' },
        { q: 'Mi casa vale más de $1 millón. ¿Citizens la puede asegurar?', a: 'El límite se basa en el costo de reconstrucción de la vivienda, no en su valor de mercado. En Miami-Dade y Monroe, Citizens puede asegurar una casa cuyo costo de reconstrucción sea menor de $1 millón; en el resto del estado, menor de $700,000.' },
      ],
      sources: [
        { label: 'Citizens Property Insurance Corporation: Get a Policy (requisitos, agentes designados)', url: S.getPolicy },
        { label: 'Citizens: Clearinghouse (pólizas nuevas y renovaciones)', url: S.clearinghouse },
        { label: 'Citizens: Visiting Your Agent', url: S.visiting },
        { label: 'Citizens: requisitos de seguro de inundación', url: S.flood },
        { label: 'Citizens: Assessments (recargos)', url: S.assessments },
        { label: 'Citizens: programa de despoblación (Personal Lines)', url: S.depop },
        { label: 'Citizens: myPolicy', url: S.myPolicy },
        { label: 'Citizens: Contact Us', url: S.contact },
        { label: 'Citizens: se levanta la suspensión de nuevas pólizas (10 de octubre de 2026)', url: S.binding },
        { label: 'Citizens: hoja de cobertura DP-1 (límites de Coverage A)', url: S.dp1 },
        { label: 'Estatutos de Florida, s. 627.351 (2026)', url: S.s351 },
        { label: 'Estatutos de Florida, s. 627.3518 (2026), programa Clearinghouse de Citizens', url: S.s3518 },
      ],
    },
    ru: {
      title: 'Citizens Property Insurance через местного агента: кто может застраховаться, как подать заявку и что происходит при продлении',
      metaTitle: 'Citizens Property Insurance: условия и продление | M&K Agency',
      description: 'Кого страхует Citizens Property Insurance во Флориде, как работают правило 20% и Clearinghouse, лимит стоимости в Майами-Дейд и что меняется при продлении.',
      ogAlt: 'Дом во Флориде рядом с чек-листом и календарём с отмеченной датой продления',
      excerpt: 'Полис Citizens оформляют только назначенные агенты, а право на него проверяют заново при каждом продлении. Объясняем правило 20%, Clearinghouse и лимиты стоимости.',
      category: 'Страхование дома',
      body: [
        { type: 'p', text: 'Citizens Property Insurance Corporation — не частная компания. Закон Флориды создал её как государственную структуру, которая страхует имущество тех владельцев, кто добросовестно пытался, но не смог найти страховку на частном рынке ([s. 627.351(6)(a), F.S.](' + S.s351 + ')). На юге Майами-Дейд о Citizens чаще всего вспоминают, когда страховая присылает уведомление об отказе продлить полис (nonrenewal). Ниже — кто имеет право на полис Citizens, как проходит оформление, что меняется при каждом продлении и где найти документы, если полис у вас уже есть.' },

        { type: 'h2', text: 'Кто может получить полис Citizens' },
        { type: 'p', text: 'По закону Флориды Citizens может выписать новый полис, только если выполняется одно из условий ([Citizens: Get a Policy](' + S.getPolicy + ')):' },
        { type: 'ul', items: [
          'ни одна страховая компания, авторизованная во Флориде, не предлагает страховку на этот объект, или',
          'все предложения авторизованных страховщиков **дороже более чем на 20%**, чем премия Citizens за сопоставимое покрытие.',
        ] },
        { type: 'p', text: 'Второе условие называют **правилом 20%**. На практике агент умножает премию Citizens на 1,2. Если хотя бы одно предложение авторизованной компании за сопоставимое покрытие укладывается в эту сумму, основное жильё не может быть застраховано в Citizens ([s. 627.351(6)(c)5.a.](' + S.s351 + ')).' },
        { type: 'p', text: 'Для второго дома или жилья, которое сдаётся, правило строже: учитывается и предложение одобренного страховщика surplus lines (компании, работающей вне стандартного рынка), сделанное в рамках программы take-out ([s. 627.351(6)(c)5.b.](' + S.s351 + ')). В разделе закона о тарифах Citizens основное жильё описано как дом, в котором страхователь (а если дом сдаётся — арендатор) живёт больше 9 месяцев в году ([s. 627.351(6)(n)](' + S.s351 + ')).' },

        { type: 'h2', text: 'Лимиты стоимости и другие условия' },
        { type: 'ul', items: [
          '**Предел стоимости.** Дом, восстановительная стоимость которого (dwelling replacement cost) составляет $700 000 или больше, не подходит. Для квартиры в кондо предел считается по самой квартире вместе с имуществом ([s. 627.351(6)(a)3.](' + S.s351 + ')). В округах, где регулятор признал конкуренцию недостаточной, предел — меньше $1 млн; в таблицах покрытия Citizens это Майами-Дейд и Монро ([таблица DP-1 Citizens](' + S.dp1 + ')). Восстановительная стоимость — это сколько стоит отстроить дом заново, а не цена, за которую его можно продать.',
          '**Страховка от наводнения.** Большинство новых и продлеваемых личных жилых полисов Citizens с покрытием от ветра должны иметь страховку от наводнения не позднее 1 января 2027 года. Полисы на квартиру в кондо, полисы арендатора и полисы без покрытия ветра под это требование не подпадают ([Citizens: Flood](' + S.flood + ')). Подробности — в нашей статье о [требовании Citizens о страховке от наводнения с 2027 года](/ru/blog/citizens-flood-insurance-requirement-2027).',
          '**Крыша и состояние дома.** У Citizens свои правила по возрасту крыши — о них в статье [«Крыша слишком старая для страховки дома?»](/ru/blog/roof-age-home-insurance-florida). Какие инспекции нужны для заявки (и нужны ли вообще), подскажет агент ([Citizens: Visiting Your Agent](' + S.visiting + ')).',
          '**Полисы только от ветра.** В некоторых прибрежных районах Citizens предлагает полисы, покрывающие только ветер ([s. 627.351(6)(b)](' + S.s351 + ')). Проверить адрес можно в сервисе [Wind-Only Eligibility](' + S.windOnly + ').',
        ] },

        { type: 'h2', text: 'Как оформить: только через агента, назначенного Citizens' },
        { type: 'p', text: 'Напрямую у Citizens полис не купить. Сама компания пишет, что помочь с покупкой полиса могут только назначенные ею агенты (appointed agents), а найти их можно через сервис Agent Look-Up ([Citizens: Get a Policy](' + S.getPolicy + ')). Прежде чем оформить полис, агент обязан провести заявку через **Clearinghouse** — программу, которую требует [s. 627.3518, F.S.](' + S.s3518 + '): сначала она ищет предложения частных страховщиков. Если находится предложение авторизованной компании в пределах 20%, дом не подходит для Citizens и заявка дальше не идёт ([s. 627.3518(6)(a)](' + S.s3518 + '); [Citizens: Clearinghouse](' + S.clearinghouse + ')).' },
        { type: 'p', text: 'Citizens может попросить агента загрузить подтверждение прежней страховки: предложение о продлении, уведомление об отказе в продлении или об отмене полиса либо документы о покупке, если дом куплен недавно. Если страховки нет уже больше 45 дней, подтверждение не нужно.' },

        { type: 'h3', text: 'Что подготовить к встрече с агентом' },
        { type: 'p', text: 'Citizens советует собрать как можно больше из этого списка ([Visiting Your Agent](' + S.visiting + ')):' },
        { type: 'ul', items: [
          'тип конструкции, год постройки, число комнат и общую жилую площадь;',
          'материал, форму и состояние крыши, дату последней замены;',
          'годы обновления электрики, сантехники и системы отопления и кондиционирования;',
          'защиту от ветра и документы о ней, например отчёт [инспекции wind mitigation](/ru/blog/wind-mitigation-inspection-florida);',
          'фото дома спереди и сзади, сведения о бассейне, сигнализации, бизнесе на дому и ближайших водоёмах.',
        ] },
        { type: 'p', text: 'Возьмите также текущую страницу деклараций (declarations page) и все письма от вашей страховой. Если чего-то не хватает, агент поможет это найти.' },

        { type: 'h2', text: 'Что происходит при каждом продлении' },
        { type: 'ul', items: [
          '**Полис снова проверяют на рынке.** При каждом продлении агент обязан заново искать для клиента Citizens предложения частных компаний. Для основных форм полисов на дом любое предложение, которое дороже продлённой премии Citizens не более чем на 20%, ведёт к отказу Citizens в продлении — и полис придётся оформлять у другой компании ([Citizens: Clearinghouse](' + S.clearinghouse + ')).',
          '**Выбор остаётся за вами.** Если предложение через Clearinghouse дороже более чем на 20%, можно принять его или остаться в Citizens ([s. 627.3518(6)(a)](' + S.s3518 + ')).',
          '**Письма take-out — отдельная история.** Частные страховщики могут забирать полисы Citizens по программе depopulation. В форме указан срок ответа, и если вы не зарегистрируете свой выбор вовремя, Citizens передаст полис компании с самой низкой расчётной премией ([Citizens: Depopulation](' + S.depop + ')).',
          '**Дополнительные сборы (assessments).** Если после сильного шторма Citizens не хватит денег на выплаты, с её клиентов могут взять надбавку до 15% от премии. Затем экстренные сборы — до 10% в год — могут применяться и к полисам Citizens, и к большинству полисов частных компаний ([Citizens: Assessments](' + S.assessments + ')).',
        ] },
        { type: 'callout', title: 'Сезон ураганов', text: 'Пока к Флориде идёт ураган, новый полис оформить можно не всегда. Citizens сняла приостановку оформления новых полисов из-за урагана «Исайас» в 5 утра по восточному времени 10 октября 2026 года и вернулась к обычной работе ([бюллетень Citizens](' + S.binding + ')). Не ждите шторма, чтобы закрыть пробел в страховке.' },

        { type: 'h2', text: 'Если полис Citizens у вас уже есть' },
        { type: 'ul', items: [
          '**Документы, заявления об убытке и счета:** в личном кабинете [myPolicy](' + S.myPolicy + '). Для регистрации нужны номер полиса, почтовый индекс объекта и email, который указан у Citizens.',
          '**Телефон:** заявления об убытке (круглосуточно) и служба поддержки клиентов (по будням с 8 до 17 по восточному времени) — 866.411.2742 ([Citizens: Contact Us](' + S.contact + ')).',
          '**Изменения или отмена полиса** — через вашего агента. Citizens советует пересматривать покрытие с агентом хотя бы раз в год.',
        ] },

        { type: 'h2', text: 'Чем поможет M&K Agency' },
        { type: 'p', text: 'Окажется ли ваш дом в Citizens или у частной компании, сравнение начинается с документов. Принесите страницу деклараций и любые письма об отказе в продлении, о продлении или take-out в наш офис: 33550 S Dixie Hwy, Suite 102, Florida City, или позвоните по номеру (305) 859-3953. Лицензированный агент объяснит, как правила Citizens применяются к вашему дому, и разберёт варианты, доступные в нашем агентстве, — по-русски, по-английски или по-испански. Мы работаем с понедельника по пятницу с 9 до 6, по субботам — по записи. Подробнее на странице [страхования дома](/ru/homeowners-insurance-florida-city), или сразу [запросите расчёт](/ru/quote).' },
        { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений конкретного полиса. Прежде чем менять или отменять страховку, поговорите с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Можно ли купить полис напрямую у Citizens?', a: 'Нет. Citizens сообщает, что помочь с покупкой полиса могут только назначенные ею агенты; их список есть в сервисе Agent Look-Up. Кроме того, агент сначала должен проверить предложения частных компаний через Clearinghouse.' },
        { q: 'Частная компания предложила мне страховку. Могу ли я всё равно выбрать Citizens?', a: 'Для основного жилья — только если все сопоставимые предложения авторизованных компаний дороже премии Citizens более чем на 20%. Если хотя бы одно укладывается в эти 20%, дом не подходит для Citizens.' },
        { q: 'Мой дом стоит больше $1 млн. Застрахует ли его Citizens?', a: 'Предел считается по восстановительной стоимости дома, а не по рыночной цене. В Майами-Дейд и Монро Citizens может застраховать дом с восстановительной стоимостью меньше $1 млн, в остальных округах — меньше $700 000.' },
      ],
      sources: [
        { label: 'Citizens Property Insurance Corporation: Get a Policy (условия, назначенные агенты)', url: S.getPolicy },
        { label: 'Citizens: Clearinghouse (новые полисы и продление)', url: S.clearinghouse },
        { label: 'Citizens: Visiting Your Agent', url: S.visiting },
        { label: 'Citizens: требования о страховке от наводнения', url: S.flood },
        { label: 'Citizens: Assessments (дополнительные сборы)', url: S.assessments },
        { label: 'Citizens: программа Depopulation (Personal Lines)', url: S.depop },
        { label: 'Citizens: myPolicy', url: S.myPolicy },
        { label: 'Citizens: Contact Us', url: S.contact },
        { label: 'Citizens: приостановка оформления снята (10 октября 2026 г.)', url: S.binding },
        { label: 'Citizens: таблица покрытия DP-1 (лимиты Coverage A)', url: S.dp1 },
        { label: 'Законы Флориды, s. 627.351 (2026)', url: S.s351 },
        { label: 'Законы Флориды, s. 627.3518 (2026), программа Clearinghouse Citizens', url: S.s3518 },
      ],
    },
  },
};
