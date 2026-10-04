import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against 40 CFR part 745 subpart E (current eCFR text) and EPA/FDOH:
// - 745.82(a): applies to renovations for compensation in target housing and child-occupied
//   facilities, unless components are determined lead-free by a certified inspector/risk
//   assessor, EPA-recognized test kit used by a certified renovator, or lab-tested paint chips.
// - 745.83: renovation includes surface preparation (sanding, scraping), window repair, etc.;
//   minor repair and maintenance = 6 sq ft or less per room interior / 20 sq ft exterior, no
//   prohibited practices, no window replacement or demolition; jobs in the same room within 30
//   days count as one; child-occupied facility definition; pamphlet = "Renovate Right".
// - 745.103: target housing = built before 1978 (elderly/disabled housing and 0-bedroom
//   dwellings excepted unless a child under 6 lives there).
// - 745.81(a)(2),(3): since April 22, 2010, firms need EPA certification and renovations must be
//   directed by certified renovators.
// - 745.84(a): give the owner (and an adult occupant if not owner-occupied) the pamphlet no more
//   than 60 days before work; written acknowledgment or certificate of mailing 7 days prior.
// - 745.85: signs, containment, prohibited practices (open flame; high-speed sanding/grinding
//   without shroud + HEPA; heat gun at or above 1,100 F).
// - 745.86: keep records 3 years.
// - 745.89 / EPA firm certification page: firm certificate up to 5 years; Florida is not among
//   the states authorized to run their own RRP program, so EPA certification applies.
// - 745.90: renovator certification = EPA-accredited course.
// - Florida DOH RRP page: rule generally doesn't apply to homeowners in their own homes, but
//   does if they rent it out, run home child care, or flip houses.
// No fees or penalties.
const E = (s: string) => 'https://www.ecfr.gov/current/title-40/section-745.' + s;
const S = {
  s82: E('82'),
  s83: E('83'),
  s84: E('84'),
  s85: E('85'),
  s86: E('86'),
  s103: E('103'),
  epaFirm: 'https://www.epa.gov/lead/renovation-repair-and-painting-program-firm-certification',
  epaRrp: 'https://www.epa.gov/lead/renovation-repair-and-painting-program',
  fdoh: 'https://www.floridahealth.gov/community-environmental-public-health/environmental-public-health/lead/renovation-repair-and-painting-rrp/',
};

export const post: BlogPost = {
  slug: 'epa-lead-safe-rrp-painters-florida',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'EPA Lead-Safe (RRP) Certification for Painters: Working on Pre-1978 Homes in Florida',
      metaTitle: 'EPA Lead-Safe RRP Rule for Florida Painters | M&K Agency',
      description: 'Painting a home built before 1978? When the EPA lead-safe RRP rule applies, firm and renovator certification, the Renovate Right pamphlet and job rules.',
      ogAlt: 'Older Florida home with a ladder, a paint roller and paint cans',
      excerpt: 'Scraping and sanding old paint can release lead dust. If you paint homes built before 1978, the EPA RRP rule decides who may do the work and how. The basics, with links to the regulation.',
      category: 'Painting contractor insurance',
      body: [
        { type: 'p', text: 'Plenty of South Florida homes were built before 1978, the cutoff year the federal lead paint rules use. When a painting job on one of them involves scraping, sanding or removing painted surfaces, the federal **Renovation, Repair and Painting (RRP) rule** usually applies. Here is when it applies and what it asks of a painting business.' },
        { type: 'h2', text: 'When the rule applies' },
        { type: 'p', text: 'The rule covers renovations **done for pay** in “target housing,” which is housing built before 1978, and in **child-occupied facilities** such as day cares and preschools in pre-1978 buildings ([40 CFR 745.82](' + S.s82 + '); [745.103](' + S.s103 + ')). For painters, the key point is that “renovation” includes **surface preparation** like sanding and scraping ([745.83](' + S.s83 + ')). Some exceptions:' },
        { type: 'ul', items: [
          '**Minor repair and maintenance:** disturbing **6 square feet or less** of painted surface per room inside, or **20 square feet or less** outside. Window replacement and demolition never count as minor, and jobs in the same room within 30 days count as one job.',
          '**Tested lead-free:** a certified inspector or risk assessor, or a certified renovator with an EPA-recognized test kit or lab samples, found the components free of lead-based paint.',
          'Certain housing for the elderly or people with disabilities, and studio-type dwellings, unless a child under 6 lives there.',
        ] },
        { type: 'p', text: 'EPA notes that the rule generally does not apply to homeowners working on their own homes, but does apply to someone who rents out a home, runs a child care in it, or flips houses ([EPA](' + S.epaRrp + ')).' },
        { type: 'h2', text: 'Two certifications: the firm and the renovator' },
        { type: 'ul', items: [
          '**The firm.** Since April 22, 2010, a firm may not perform, offer or claim to perform covered renovations without EPA firm certification. Florida is not one of the states that runs its own RRP program, so certification comes from EPA. It lasts five years ([EPA](' + S.epaFirm + ')).',
          '**The renovator.** Each covered job must be directed by a **certified renovator**, an individual who completed an EPA-accredited course. Other workers must be certified or trained on the job by the certified renovator.',
        ] },
        { type: 'h2', text: 'What the rule asks on the job' },
        { type: 'ol', items: [
          '**Before work:** give the owner the EPA pamphlet **Renovate Right** no more than 60 days before starting, and get a signed acknowledgment or a certificate of mailing at least 7 days ahead. In a rental, an adult occupant gets one too ([745.84](' + S.s84 + ')).',
          '**Set up:** post warning signs and contain the work area so no dust or debris leaves it ([745.85](' + S.s85 + ')).',
          '**Prohibited practices:** no open-flame burning, no power sanding or grinding unless the tool has a shroud and HEPA vacuum attachment, and no heat gun at 1,100°F or more.',
          '**Clean up and verify:** follow the cleaning and cleaning verification steps in the rule before you leave.',
          '**Keep records for 3 years** ([745.86](' + S.s86 + ')).',
        ] },
        { type: 'h2', text: 'Why it matters for your insurance' },
        { type: 'p', text: 'When we quote a painting business, we ask what kind of work you do and on what kind of buildings. Tell us if you work on pre-1978 homes, whether your firm is RRP-certified, and how you handle surface prep. Lead-related claims are a topic many liability policies address specifically, so read that part of your policy and ask us to walk you through it. See our [painting contractor insurance page](/en/painting-contractor-insurance-florida) for coverage, and our article on [helpers and workers’ comp](/en/blog/helper-employee-or-1099-florida-workers-comp) if you bring on crew.' },
        { type: 'callout', title: 'Questions about your coverage?', text: '[Request a quote](/en/quote) and tell us about the homes you work on. A licensed agent will go over it with you in English, Spanish or Russian. This is general information, not legal advice; check the regulation or EPA for your situation.' },
      ],
      faq: [
        { q: 'Do painters need EPA lead certification in Florida?', a: 'For paid work that disturbs paint in homes built before 1978 or in child-occupied facilities, generally yes, unless an exception applies. The firm needs EPA certification and a certified renovator must direct the job.' },
        { q: 'What is the 6 and 20 square foot rule?', a: 'Minor repair and maintenance that disturbs 6 square feet or less of painted surface per room indoors, or 20 square feet or less outdoors, is outside the rule, as long as no prohibited practices, window replacement or demolition are involved.' },
        { q: 'What is the Renovate Right pamphlet?', a: 'It is the EPA lead hazard pamphlet you must give the owner, and in rentals an adult occupant, no more than 60 days before a covered renovation begins.' },
      ],
      sources: [
        { label: '40 CFR 745.82: applicability of the RRP rule (eCFR)', url: S.s82 },
        { label: '40 CFR 745.83: definitions (renovation, minor repair and maintenance) (eCFR)', url: S.s83 },
        { label: '40 CFR 745.84: information distribution (Renovate Right pamphlet) (eCFR)', url: S.s84 },
        { label: '40 CFR 745.85: work practice standards (eCFR)', url: S.s85 },
        { label: '40 CFR 745.86: recordkeeping (eCFR)', url: S.s86 },
        { label: '40 CFR 745.103: definition of target housing (eCFR)', url: S.s103 },
        { label: 'EPA: Renovation, Repair and Painting Program, firm certification', url: S.epaFirm },
        { label: 'EPA: Renovation, Repair, and Painting (RRP) Program', url: S.epaRrp },
        { label: 'Florida Department of Health: Renovation, Repair, and Painting', url: S.fdoh },
      ],
    },
    es: {
      title: 'Certificación EPA Lead-Safe (RRP) para pintores: trabajos en casas de antes de 1978 en Florida',
      metaTitle: 'Regla RRP de la EPA para pintores en Florida | M&K Agency',
      description: '¿Pintará una casa de antes de 1978? Cuándo aplica la regla RRP de la EPA, la certificación de empresa y renovador, el folleto Renovate Right y las prácticas.',
      ogAlt: 'Casa antigua en Florida con escalera, rodillo y latas de pintura',
      excerpt: 'Raspar y lijar pintura vieja puede soltar polvo de plomo. Si pinta casas construidas antes de 1978, la regla RRP de la EPA decide quién puede hacer el trabajo y cómo. Lo básico, con enlaces a la norma.',
      category: 'Seguro para pintores',
      body: [
        { type: 'p', text: 'En el sur de Florida hay muchas casas construidas antes de 1978, el año de corte que usan las reglas federales sobre pintura con plomo. Cuando un trabajo de pintura en una de ellas implica raspar, lijar o quitar superficies pintadas, por lo general aplica la regla federal de **Renovación, Reparación y Pintura (RRP)**. Aquí le explicamos cuándo aplica y qué le exige a un negocio de pintura.' },
        { type: 'h2', text: 'Cuándo aplica la regla' },
        { type: 'p', text: 'La regla cubre las renovaciones **que se hacen por pago** en “target housing”, es decir, viviendas construidas antes de 1978, y en **instalaciones ocupadas por niños**, como guarderías y preescolares en edificios de antes de 1978 ([40 CFR 745.82](' + S.s82 + '); [745.103](' + S.s103 + ')). Para un pintor, lo clave es que “renovación” incluye la **preparación de superficies**, como lijar y raspar ([745.83](' + S.s83 + ')). Algunas excepciones:' },
        { type: 'ul', items: [
          '**Reparaciones y mantenimiento menores:** tocar **6 pies cuadrados o menos** de superficie pintada por cuarto adentro, o **20 pies cuadrados o menos** afuera. Cambiar ventanas o demoler nunca cuenta como menor, y los trabajos en el mismo cuarto dentro de 30 días cuentan como uno solo.',
          '**Sin plomo comprobado:** un inspector o evaluador de riesgos certificado, o un renovador certificado con un kit reconocido por la EPA o muestras de laboratorio, determinó que los componentes no tienen pintura con plomo.',
          'Cierta vivienda para personas mayores o con discapacidad, y los estudios sin dormitorio separado, salvo que viva allí un niño menor de 6 años.',
        ] },
        { type: 'p', text: 'La EPA aclara que, en general, la regla no aplica al dueño que trabaja en su propia casa, pero sí a quien la alquila, tiene una guardería en ella o compra y revende casas ([EPA](' + S.epaRrp + ')).' },
        { type: 'h2', text: 'Dos certificaciones: la empresa y el renovador' },
        { type: 'ul', items: [
          '**La empresa.** Desde el 22 de abril de 2010, ninguna empresa puede hacer, ofrecer ni anunciar renovaciones cubiertas sin la certificación de empresa de la EPA. Florida no es uno de los estados con programa RRP propio, así que la certificación la da la EPA. Dura cinco años ([EPA](' + S.epaFirm + ')).',
          '**El renovador.** Cada trabajo cubierto debe estar dirigido por un **renovador certificado**, una persona que aprobó un curso acreditado por la EPA. Los demás trabajadores deben estar certificados o capacitados en la obra por el renovador certificado.',
        ] },
        { type: 'h2', text: 'Qué exige la regla en la obra' },
        { type: 'ol', items: [
          '**Antes de empezar:** entréguele al dueño el folleto de la EPA **Renovate Right** no más de 60 días antes, y consiga su firma de recibido o un certificado de envío por correo al menos 7 días antes. En una vivienda alquilada, también se le entrega a un ocupante adulto ([745.84](' + S.s84 + ')).',
          '**Preparación:** ponga letreros de advertencia y aísle el área para que no salga polvo ni escombro ([745.85](' + S.s85 + ')).',
          '**Prácticas prohibidas:** nada de quemar con llama, nada de lijar o pulir con máquina salvo que tenga cubierta y aspiradora HEPA, y nada de pistola de calor a 1,100 °F o más.',
          '**Limpieza y verificación:** siga los pasos de limpieza y verificación de la regla antes de irse.',
          '**Guarde los registros 3 años** ([745.86](' + S.s86 + ')).',
        ] },
        { type: 'h2', text: 'Por qué importa para su seguro' },
        { type: 'p', text: 'Cuando cotizamos para un negocio de pintura, preguntamos qué tipo de trabajo hace y en qué tipo de edificios. Díganos si trabaja en casas de antes de 1978, si su empresa tiene la certificación RRP y cómo hace la preparación de superficies. Muchas pólizas de responsabilidad tratan de forma específica los reclamos relacionados con plomo, así que lea esa parte de su póliza y pídanos que se la expliquemos. Vea nuestra [página de seguro para pintores](/es/painting-contractor-insurance-florida) para las coberturas, y nuestro artículo sobre [ayudantes y workers’ comp](/es/blog/helper-employee-or-1099-florida-workers-comp) si trabaja con cuadrilla.' },
        { type: 'callout', title: '¿Dudas sobre su cobertura?', text: '[Pida una cotización](/es/quote) y cuéntenos en qué casas trabaja. Un agente con licencia lo revisa con usted en español, inglés o ruso. Esto es información general, no asesoría legal; consulte la norma o a la EPA para su caso.' },
      ],
      faq: [
        { q: '¿Los pintores necesitan certificación de plomo de la EPA en Florida?', a: 'Para trabajos pagados que tocan pintura en casas construidas antes de 1978 o en instalaciones ocupadas por niños, por lo general sí, salvo que aplique una excepción. La empresa necesita la certificación de la EPA y un renovador certificado debe dirigir el trabajo.' },
        { q: '¿Qué es la regla de 6 y 20 pies cuadrados?', a: 'Las reparaciones y el mantenimiento menores que tocan 6 pies cuadrados o menos de superficie pintada por cuarto adentro, o 20 pies cuadrados o menos afuera, quedan fuera de la regla, siempre que no haya prácticas prohibidas, cambio de ventanas ni demolición.' },
        { q: '¿Qué es el folleto Renovate Right?', a: 'Es el folleto de la EPA sobre riesgos del plomo que debe entregarle al dueño, y en viviendas alquiladas a un ocupante adulto, no más de 60 días antes de empezar una renovación cubierta.' },
      ],
      sources: [
        { label: '40 CFR 745.82: aplicación de la regla RRP (eCFR, en inglés)', url: S.s82 },
        { label: '40 CFR 745.83: definiciones (renovación, reparación y mantenimiento menores) (eCFR, en inglés)', url: S.s83 },
        { label: '40 CFR 745.84: entrega de información (folleto Renovate Right) (eCFR, en inglés)', url: S.s84 },
        { label: '40 CFR 745.85: prácticas de trabajo (eCFR, en inglés)', url: S.s85 },
        { label: '40 CFR 745.86: registros (eCFR, en inglés)', url: S.s86 },
        { label: '40 CFR 745.103: definición de target housing (eCFR, en inglés)', url: S.s103 },
        { label: 'EPA: programa RRP, certificación de empresas (en inglés)', url: S.epaFirm },
        { label: 'EPA: programa Renovation, Repair, and Painting (RRP) (en inglés)', url: S.epaRrp },
        { label: 'Departamento de Salud de Florida: Renovation, Repair, and Painting (en inglés)', url: S.fdoh },
      ],
    },
    ru: {
      title: 'Сертификат EPA Lead-Safe (RRP) для маляров: работа в домах постройки до 1978 года во Флориде',
      metaTitle: 'Правило EPA RRP для маляров во Флориде | M&K Agency',
      description: 'Красите дом постройки до 1978 года? Когда действует правило EPA RRP, сертификация фирмы и renovator, брошюра Renovate Right и правила на объекте.',
      ogAlt: 'Старый дом во Флориде: лестница, валик и банки с краской',
      excerpt: 'Когда шкурят и скоблят старую краску, может подниматься свинцовая пыль. Если вы красите дома постройки до 1978 года, правило EPA RRP определяет, кто может делать эту работу и как. Основное со ссылками на нормы.',
      category: 'Страхование для маляров',
      body: [
        { type: 'p', text: 'В Южной Флориде много домов, построенных до 1978 года — именно этот год служит границей в федеральных правилах о свинцовой краске. Если покраска такого дома включает шкурение, скобление или снятие окрашенных поверхностей, обычно действует федеральное правило **Renovation, Repair and Painting (RRP)**. Разберём, когда оно применяется и что требует от малярной компании.' },
        { type: 'h2', text: 'Когда действует правило' },
        { type: 'p', text: 'Правило распространяется на **оплачиваемые** работы в «target housing», то есть в жилье постройки до 1978 года, и в **помещениях, где регулярно бывают маленькие дети**, например в детских садах и дошкольных учреждениях в зданиях до 1978 года ([40 CFR 745.82](' + S.s82 + '); [745.103](' + S.s103 + ')). Для маляра главное: под «renovation» попадает и **подготовка поверхности** — шкурение и скобление ([745.83](' + S.s83 + ')). Исключения:' },
        { type: 'ul', items: [
          '**Мелкий ремонт и обслуживание:** затрагивается **не больше 6 кв. футов** окрашенной поверхности на комнату внутри или **не больше 20 кв. футов** снаружи. Замена окон и демонтаж никогда не считаются мелкими работами, а работы в одной комнате в течение 30 дней считаются одной работой.',
          '**Подтверждено отсутствие свинца:** сертифицированный инспектор или risk assessor либо certified renovator с признанным EPA тест-набором или лабораторными пробами установил, что свинцовой краски нет.',
          'Некоторое жильё для пожилых или людей с инвалидностью и студии без отдельной спальни — если там не живёт ребёнок младше 6 лет.',
        ] },
        { type: 'p', text: 'EPA уточняет: обычно правило не касается владельца, который ремонтирует свой дом сам, но касается того, кто сдаёт дом в аренду, держит в нём детский сад или перепродаёт дома (флиппинг) ([EPA](' + S.epaRrp + ')).' },
        { type: 'h2', text: 'Два сертификата: фирма и renovator' },
        { type: 'ul', items: [
          '**Фирма.** С 22 апреля 2010 года фирма не может выполнять, предлагать или рекламировать такие работы без сертификата фирмы от EPA. У Флориды нет собственной программы RRP, поэтому сертификат выдаёт EPA. Он действует пять лет ([EPA](' + S.epaFirm + ')).',
          '**Renovator.** Каждой такой работой должен руководить **certified renovator** — человек, прошедший курс, аккредитованный EPA. Остальные работники должны быть сертифицированы или обучены на объекте этим renovator.',
        ] },
        { type: 'h2', text: 'Что правило требует на объекте' },
        { type: 'ol', items: [
          '**До начала:** передайте владельцу брошюру EPA **Renovate Right** не раньше чем за 60 дней до начала работ и получите подпись о получении или квитанцию об отправке почтой минимум за 7 дней. В арендованном жилье брошюру получает и взрослый жилец ([745.84](' + S.s84 + ')).',
          '**Подготовка:** повесьте предупреждающие знаки и изолируйте рабочую зону, чтобы пыль и мусор не выходили за её пределы ([745.85](' + S.s85 + ')).',
          '**Запрещено:** обжиг открытым пламенем, машинная шлифовка без кожуха и пылесоса с HEPA-фильтром, фен (heat gun) при температуре 1,100 °F и выше.',
          '**Уборка и проверка:** перед уходом выполните уборку и проверку чистоты по правилу.',
          '**Храните документы 3 года** ([745.86](' + S.s86 + ')).',
        ] },
        { type: 'h2', text: 'Почему это важно для страховки' },
        { type: 'p', text: 'Когда мы делаем расчёт для малярной компании, мы спрашиваем, какие работы вы выполняете и на каких зданиях. Скажите нам, работаете ли вы в домах постройки до 1978 года, есть ли у фирмы сертификат RRP и как вы готовите поверхности. Претензии, связанные со свинцом, во многих полисах ответственности оговорены отдельно, поэтому прочитайте этот раздел своего полиса и попросите нас его объяснить. О страховании — на нашей [странице для маляров](/ru/painting-contractor-insurance-florida), а если работаете с бригадой — статья о [помощниках и workers’ comp](/ru/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'callout', title: 'Вопросы по страховке?', text: '[Оставьте заявку на расчёт](/ru/quote) и расскажите, в каких домах вы работаете. Лицензированный агент разберёт всё с вами на русском, английском или испанском. Это общая информация, а не юридическая консультация; для своей ситуации сверяйтесь с нормой или с EPA.' },
      ],
      faq: [
        { q: 'Нужен ли маляру во Флориде сертификат EPA по свинцу?', a: 'Для оплачиваемых работ, затрагивающих краску в домах постройки до 1978 года или в помещениях для маленьких детей, как правило, да, если нет исключения. Фирме нужен сертификат EPA, а работой должен руководить certified renovator.' },
        { q: 'Что за правило 6 и 20 квадратных футов?', a: 'Мелкий ремонт и обслуживание, при которых затрагивается не больше 6 кв. футов окрашенной поверхности на комнату внутри или не больше 20 кв. футов снаружи, под правило не попадают, если нет запрещённых методов, замены окон и демонтажа.' },
        { q: 'Что такое брошюра Renovate Right?', a: 'Это брошюра EPA о рисках свинца, которую нужно передать владельцу, а в арендованном жилье и взрослому жильцу, не раньше чем за 60 дней до начала работ.' },
      ],
      sources: [
        { label: '40 CFR 745.82: сфера действия правила RRP (eCFR, на английском)', url: S.s82 },
        { label: '40 CFR 745.83: определения (renovation, мелкий ремонт) (eCFR, на английском)', url: S.s83 },
        { label: '40 CFR 745.84: информирование (брошюра Renovate Right) (eCFR, на английском)', url: S.s84 },
        { label: '40 CFR 745.85: правила выполнения работ (eCFR, на английском)', url: S.s85 },
        { label: '40 CFR 745.86: хранение документов (eCFR, на английском)', url: S.s86 },
        { label: '40 CFR 745.103: определение target housing (eCFR, на английском)', url: S.s103 },
        { label: 'EPA: программа RRP, сертификация фирм (на английском)', url: S.epaFirm },
        { label: 'EPA: программа Renovation, Repair, and Painting (RRP) (на английском)', url: S.epaRrp },
        { label: 'Департамент здравоохранения Флориды: Renovation, Repair, and Painting (на английском)', url: S.fdoh },
      ],
    },
  },
};
