import type { BlogPost } from '../types';

// Facts re-checked 2026-11-07 against the 2026 Florida Statutes on leg.state.fl.us
// (Online Sunshine), FLHSMV pages and NHTSA. Raw notes: /workspace/helmet/.
// - s. 316.211: (1) helmet meeting FMVSS 218 for anyone who operates or rides upon a
//   motorcycle; (2) operator eye protection; (3)(a) enclosed cab, and 16+ on a motorcycle
//   of 50 cc or less / 2 bhp or less that cannot exceed 30 mph on level ground;
//   (3)(b) "over 21" + policy with at least $10,000 in medical benefits; (4) under 16 on a
//   moped must wear a helmet; (6) unique plate when registered to someone under 21;
//   (7) noncriminal traffic infraction, nonmoving violation (ch. 318).
// - FLHSMV helmet exemption page: 21 or older + $10,000 medical benefits; effective
//   July 1, 2000; police advised to accept a current health insurance card, policy or
//   declarations page from a recognized health insurance provider; limited motorcycle
//   medical coverage suffices; car-policy PIP insufficient for operator or passenger.
// - s. 316.2085: (1) passenger only if the motorcycle is designed for more than one
//   person, on the regular seat or a firmly attached seat; (3) tag visible from the rear,
//   no deliberate concealment; (4) both hands on the handlebars; (7) moving violation.
// - FLHSMV endorsements page: endorsement or Motorcycle Only license for engines over
//   50 cc; new riders pass the Basic RiderCourse (s. 322.12(5)(a)); endorsement within
//   1 year of passing the course.
// - s. 627.732(3): PIP "motor vehicle" = four or more wheels. FLHSMV insurance page:
//   PIP + PDL proof before registering a vehicle with at least four wheels.
// - s. 627.727(1)-(2): UM included with bodily injury liability unless a named insured
//   rejects it in writing on an approved form; limits equal BI unless lower are selected;
//   over and above other benefits, without duplicating them.
// - NHTSA Traffic Safety Facts, Motorcycles: 2024 Data (DOT HS 813 824), Table 7:
//   Florida 642 motorcyclists killed (most of any state), 263 unhelmeted = 41% of known;
//   national rate 28.00 per 100M VMT, almost 27x passenger-car occupants; 35% of riders in
//   fatal crashes had no valid motorcycle license.
// No insurer named, no prices. Links to the motorcycle landing page.
const S = {
  s316211: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.211.html',
  s3162085: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.2085.html',
  s627732: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.732.html',
  s627727: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.727.html',
  helmet: 'https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/helmet-exemption/',
  endorse: 'https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/',
  ins: 'https://www.flhsmv.gov/insurance/',
  nhtsa: 'https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813824',
};

export const post: BlogPost = {
  slug: 'florida-motorcycle-helmet-law-medical-coverage',
  datePublished: '2026-10-03',
  dateModified: '2026-11-07',
  translations: {
    en: {
      title: 'Florida’s Motorcycle Helmet Law and the $10,000 Medical Coverage Rule',
      metaTitle: 'Florida Helmet Law and Motorcycle Insurance | M&K Agency',
      description: 'Riding without a helmet in Florida takes age 21+ and $10,000 in medical benefits. What counts as proof, why car PIP doesn’t, and what to review.',
      ogAlt: 'Flat illustration of a motorcycle on a Florida road at sunset with a helmet, goggles and a blue shield',
      excerpt: 'Florida is not a “no-helmet” state. Adults may ride without one only with at least $10,000 in medical benefits. What counts, what doesn’t, and the other rules riders forget.',
      category: 'Motorcycle insurance',
      body: [
        { type: 'p', text: 'Riding in Florida without a helmet? The law allows it, but with a condition, and that condition is insurance. People often call Florida a “no-helmet state.” It isn’t. Every rider and passenger must wear a helmet unless he or she meets a specific exception. If you ride, carry a passenger or are about to buy your first bike, here is what Florida law actually says in 2026 and what it means for your coverage.' },
        { type: 'h2', text: 'What s. 316.211 requires' },
        { type: 'ul', items: [
          'Anyone who **operates or rides upon** a motorcycle must wear a securely fastened helmet that meets Federal Motor Vehicle Safety Standard 218 ([s. 316.211(1)](' + S.s316211 + ')). That includes passengers.',
          'The operator must also wear **eye protection** of a type approved by FLHSMV (s. 316.211(2)). The helmet exception does not remove this rule.',
          'The helmet rule does not apply inside an **enclosed cab**, or to a rider **16 or older** on a small motorcycle of 50 cc or less (or no more than 2 brake horsepower) that cannot go faster than 30 mph on level ground (s. 316.211(3)(a)).',
          'Anyone **under 16** riding a moped must wear a helmet (s. 316.211(4)).',
          'A motorcycle registered to someone **under 21** must display a license plate of a unique design and color (s. 316.211(6)).',
          'A violation is a noncriminal traffic infraction, handled as a **nonmoving** violation (s. 316.211(7)).',
        ] },
        { type: 'h2', text: 'The adult exception: age plus $10,000 in medical benefits' },
        { type: 'p', text: 'The statute lets a person “over 21 years of age” ride without a helmet if he or she is **covered by an insurance policy providing at least $10,000 in medical benefits** for injuries from a motorcycle crash ([s. 316.211(3)(b)](' + S.s316211 + ')). FLHSMV describes the same rule as **21 or older** and notes it took effect on July 1, 2000 ([FLHSMV](' + S.helmet + ')). If you have just turned 21, don’t lean on the difference in wording: wear the helmet.' },
        { type: 'p', text: 'The exception works person by person. The operator needs his or her own qualifying coverage, and so does a passenger who wants to ride without a helmet. If your passenger doesn’t have it, your passenger wears a helmet.' },
        { type: 'h2', text: 'What counts as proof' },
        { type: 'p', text: 'FLHSMV advises police to accept a **health insurance card**, or the actual policy or declarations page, from a recognized health insurance provider. The card must show **current** coverage. FLHSMV adds that **limited motorcycle medical coverage** also works. And it says plainly that **PIP under a personal car policy is not enough**, for the operator or the passenger ([FLHSMV](' + S.helmet + ')).' },
        { type: 'ul', items: [
          'Carry the card or declarations page every time you ride without a helmet.',
          'Check the dates. An expired card doesn’t show current coverage.',
          'Make sure your passenger carries his or her own proof.',
        ] },
        { type: 'h2', text: 'Why car PIP doesn’t follow you onto a bike' },
        { type: 'p', text: 'Florida’s no-fault law defines a “motor vehicle” as a self-propelled vehicle with **four or more wheels** ([s. 627.732(3)](' + S.s627732 + ')). FLHSMV likewise requires proof of PIP and property damage liability before you register a vehicle **with at least four wheels** ([FLHSMV insurance requirements](' + S.ins + ')). A motorcycle sits outside that system, which is why the PIP on your car policy doesn’t satisfy the helmet rule. For the car side of the picture, see [Florida’s minimum car insurance requirements](/en/blog/florida-minimum-car-insurance-requirements).' },
        { type: 'callout', title: 'Riding in Florida?', text: 'See our [Florida motorcycle insurance guide](/en/motorcycle-insurance-florida-city): the no-PIP gap, uninsured drivers and the coverage to ask about.' },
        { type: 'h2', text: 'Other Florida rules riders forget' },
        { type: 'ul', items: [
          '**Endorsement.** To ride a two- or three-wheel motorcycle with an engine over 50 cc you need a motorcycle endorsement or a “Motorcycle Only” license. New riders must pass the Basic RiderCourse first, then add the endorsement within one year ([FLHSMV](' + S.endorse + ')). Three-wheelers have their own twists; see [our guide to trikes and autocycles](/en/blog/autocycle-motorcycle-endorsement-florida).',
          '**Passengers.** You may carry one only if the motorcycle is designed for more than one person, on the regular two-person seat or a seat firmly attached behind or beside you ([s. 316.2085(1)](' + S.s3162085 + ')).',
          '**Hands and cargo.** You may not carry a package or bundle that keeps you from holding the handlebars with both hands (s. 316.2085(4)).',
          '**License plate.** The tag must stay clearly visible from the rear, and deliberately hiding it is prohibited (s. 316.2085(3)).',
        ] },
        { type: 'p', text: 'Unlike the helmet rule, a violation of s. 316.2085 is a **moving** violation (s. 316.2085(7)).' },
        { type: 'h2', text: 'Why $10,000 is a legal minimum, not a plan' },
        { type: 'p', text: 'According to NHTSA, **642 motorcyclists were killed in Florida traffic crashes in 2024**, more than in any other state, and **263 of them (41% of those with known helmet use) were not wearing a helmet**. Nationally, the motorcyclist death rate per mile traveled was almost **27 times** the rate for people in passenger cars, and 35% of riders in fatal crashes had no valid motorcycle license ([NHTSA, 2024 data](' + S.nhtsa + ')).' },
        { type: 'p', text: 'A serious crash can mean surgery, rehab and months away from work. $10,000 in medical benefits meets the law; it may not go far in a real recovery.' },
        { type: 'h2', text: 'Questions to ask about your policy this riding season' },
        { type: 'p', text: 'Cooler months bring more riders out in South Florida, which makes now a good time to review your coverage, helmet or not:' },
        { type: 'ol', items: [
          '**Medical payments coverage:** is it on your motorcycle policy, and for how much?',
          '**Uninsured motorist (UM) coverage:** for motor vehicle policies with bodily injury liability, Florida law requires UM unless a named insured rejects it in writing on an approved form, and the limits equal your bodily injury limits unless you choose lower ones ([s. 627.727](' + S.s627727 + ')). Ask whether your bike policy has it. More in our [UM/UIM guide](/en/blog/uninsured-motorist-coverage-florida).',
          '**Your health plan:** what are the deductible and out-of-pocket maximum, and does it limit injuries from motorcycle crashes?',
          '**Your passenger:** if you cause a crash, who pays for your passenger’s injuries? That is a liability question.',
        ] },
        { type: 'p', text: 'Coverage, limits and exclusions depend on each policy. A licensed agent can go through yours with you. Our office in Florida City works with riders from Homestead to Kendall in English, Spanish and Russian. Call **(305) 859-3953** or [request a quote](/en/quote).' },
      ],
      faq: [
        { q: 'Can I ride without a helmet in Florida?', a: 'Only if you are an adult (the statute says over 21; FLHSMV says 21 or older) and covered by an insurance policy with at least $10,000 in medical benefits for motorcycle crash injuries. The operator must still wear approved eye protection.' },
        { q: 'Does my passenger need a helmet?', a: 'Yes, unless the passenger also qualifies for the exception with his or her own coverage. The helmet rule in s. 316.211 applies to anyone who operates or rides upon a motorcycle.' },
        { q: 'Does my car PIP count as the $10,000 medical coverage?', a: 'No. FLHSMV says PIP under a personal car policy is insufficient for either the operator or the passenger on a motorcycle.' },
        { q: 'What proof should I carry?', a: 'A current health insurance card, or the policy or declarations page, from a recognized health insurance provider, or proof of limited motorcycle medical coverage. That is what FLHSMV advises police to accept.' },
        { q: 'Do I need a helmet on a small scooter?', a: 'Not if you are 16 or older and the scooter has an engine of 50 cc or less (or no more than 2 brake horsepower) and cannot exceed 30 mph on level ground. Anyone under 16 on a moped must wear a helmet.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 316.211 (2026): equipment for motorcycle and moped riders (Online Sunshine)', url: S.s316211 },
        { label: 'Florida Statutes s. 316.2085 (2026): riding on motorcycles or mopeds (Online Sunshine)', url: S.s3162085 },
        { label: 'Florida Statutes s. 627.732 (2026): PIP definitions (Online Sunshine)', url: S.s627732 },
        { label: 'Florida Statutes s. 627.727 (2026): uninsured and underinsured vehicle coverage (Online Sunshine)', url: S.s627727 },
        { label: 'FLHSMV: Motorcycle helmet exemption', url: S.helmet },
        { label: 'FLHSMV: Motorcycle rider education and endorsements', url: S.endorse },
        { label: 'FLHSMV: Florida insurance requirements', url: S.ins },
        { label: 'NHTSA: Traffic Safety Facts, Motorcycles: 2024 Data, DOT HS 813 824 (PDF)', url: S.nhtsa },
      ],
    },
    es: {
      title: 'La ley del casco para motociclistas en Florida y la regla de los $10,000 en gastos médicos',
      metaTitle: 'Ley del casco en Florida y seguro de moto | M&K Agency',
      description: 'Andar en moto sin casco en Florida exige 21 años o más y $10,000 en beneficios médicos. Qué prueba sirve, por qué el PIP del carro no y qué revisar.',
      ogAlt: 'Ilustración de una moto en una carretera de Florida al atardecer, con casco, gafas y un escudo azul',
      excerpt: 'Florida no es un estado “sin casco”. Un adulto puede ir sin él solo si tiene al menos $10,000 en beneficios médicos. Qué cuenta, qué no y otras reglas que muchos olvidan.',
      category: 'Seguro de motocicleta',
      body: [
        { type: 'p', text: '¿Quiere andar en moto sin casco en Florida? La ley lo permite, pero con una condición, y esa condición es el seguro. Mucha gente dice que en Florida “no hace falta casco”. No es así: todo el que maneje o vaya de pasajero tiene que usarlo, salvo que cumpla una excepción muy concreta. Esto es lo que dice la ley en 2026 y lo que significa para su cobertura, tanto si maneja como si lleva a alguien atrás.' },
        { type: 'h2', text: 'Lo que exige la s. 316.211' },
        { type: 'ul', items: [
          'Todo el que **maneje o vaya en** una motocicleta debe llevar bien abrochado un casco que cumpla la norma federal de seguridad FMVSS 218 ([s. 316.211(1)](' + S.s316211 + ')). Eso incluye al pasajero.',
          'Quien maneja también debe usar **protección para los ojos** de un tipo aprobado por el FLHSMV (s. 316.211(2)). La excepción del casco no lo libra de esto.',
          'La regla del casco no aplica dentro de una **cabina cerrada**, ni a una persona de **16 años o más** en una moto pequeña de 50 cc o menos (o de no más de 2 caballos de fuerza al freno) que no pase de 30 mph en terreno plano (s. 316.211(3)(a)).',
          'Los **menores de 16 años** que vayan en un ciclomotor (moped) tienen que usar casco (s. 316.211(4)).',
          'Una moto registrada a nombre de alguien **menor de 21 años** debe llevar una placa de diseño y color especiales (s. 316.211(6)).',
          'La infracción es de tránsito, no penal, y se trata como una falta **que no es de movimiento** (s. 316.211(7)).',
        ] },
        { type: 'h2', text: 'La excepción para adultos: edad más $10,000 en beneficios médicos' },
        { type: 'p', text: 'La ley permite ir sin casco a una persona “mayor de 21 años” que **esté cubierta por una póliza de seguro con al menos $10,000 en beneficios médicos** por lesiones sufridas en un accidente de moto ([s. 316.211(3)(b)](' + S.s316211 + ')). El FLHSMV explica la misma regla como **21 años o más** y aclara que está vigente desde el 1 de julio de 2000 ([FLHSMV](' + S.helmet + ')). Si acaba de cumplir 21, no se arriesgue con la diferencia de palabras: póngase el casco.' },
        { type: 'p', text: 'La excepción es individual. Quien maneja necesita su propia cobertura, y el pasajero que quiera ir sin casco necesita la suya. Si su pasajero no la tiene, va con casco.' },
        { type: 'h2', text: 'Qué sirve como prueba' },
        { type: 'p', text: 'El FLHSMV le indica a la policía que acepte una **tarjeta de seguro médico**, o la póliza o la página de declaraciones, de un proveedor de seguro médico reconocido. La tarjeta tiene que mostrar cobertura **vigente**. Además, una **cobertura médica limitada para motocicleta** también sirve. Y el FLHSMV aclara que **el PIP de una póliza personal de carro no alcanza**, ni para quien maneja ni para el pasajero ([FLHSMV](' + S.helmet + ')).' },
        { type: 'ul', items: [
          'Lleve la tarjeta o la página de declaraciones cada vez que salga sin casco.',
          'Revise las fechas: una tarjeta vencida no demuestra cobertura vigente.',
          'Asegúrese de que su pasajero lleve su propia prueba.',
        ] },
        { type: 'h2', text: 'Por qué el PIP del carro no lo acompaña en la moto' },
        { type: 'p', text: 'La ley de no-fault de Florida define “vehículo motorizado” como un vehículo autopropulsado de **cuatro ruedas o más** ([s. 627.732(3)](' + S.s627732 + ')). El FLHSMV, por su parte, pide prueba de PIP y de daños a la propiedad antes de registrar un vehículo **de al menos cuatro ruedas** ([requisitos de seguro del FLHSMV](' + S.ins + ')). La moto queda fuera de ese sistema, y por eso el PIP de su carro no cumple la regla del casco. Para el lado del carro, vea [los requisitos mínimos de seguro de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements).' },
        { type: 'callout', title: '¿Anda en moto en Florida?', text: 'Vea nuestra [guía de seguro de motocicleta en Florida](/es/motorcycle-insurance-florida-city): el hueco del PIP, los conductores sin seguro y las coberturas que conviene preguntar.' },
        { type: 'h2', text: 'Otras reglas que muchos motociclistas olvidan' },
        { type: 'ul', items: [
          '**Endoso.** Para manejar una moto de dos o tres ruedas con motor de más de 50 cc necesita el endoso de motocicleta en su licencia o una licencia “Motorcycle Only”. Si es nuevo, primero tiene que aprobar el Basic RiderCourse y luego sacar el endoso dentro de un año ([FLHSMV](' + S.endorse + ')). Los triciclos tienen sus propias reglas; vea [nuestra guía de trikes y autociclos](/es/blog/autocycle-motorcycle-endorsement-florida).',
          '**Pasajeros.** Solo puede llevar uno si la moto está diseñada para más de una persona, en el asiento para dos o en un asiento firmemente fijado detrás o al lado suyo ([s. 316.2085(1)](' + S.s3162085 + ')).',
          '**Manos y carga.** No puede cargar un paquete o bulto que le impida llevar las dos manos en el manubrio (s. 316.2085(4)).',
          '**Placa.** Tiene que verse claramente desde atrás, y está prohibido taparla a propósito (s. 316.2085(3)).',
        ] },
        { type: 'p', text: 'A diferencia de la regla del casco, una infracción de la s. 316.2085 **sí es de movimiento** (s. 316.2085(7)).' },
        { type: 'h2', text: 'Por qué $10,000 es un mínimo legal y no un plan' },
        { type: 'p', text: 'Según la NHTSA, **en 2024 murieron 642 motociclistas en accidentes de tránsito en Florida**, más que en cualquier otro estado, y **263 de ellos (el 41% de los casos en que se sabe si usaban casco) no lo llevaban**. A nivel nacional, la tasa de muertes de motociclistas por milla recorrida fue casi **27 veces** la de quienes van en carro, y el 35% de los motociclistas en accidentes fatales no tenía una licencia de moto válida ([NHTSA, datos de 2024](' + S.nhtsa + ')).' },
        { type: 'p', text: 'Un accidente serio puede significar cirugía, rehabilitación y meses sin trabajar. Con $10,000 se cumple la ley, pero puede quedarse corto.' },
        { type: 'h2', text: 'Preguntas para revisar su póliza en esta temporada' },
        { type: 'p', text: 'Con el fresco salen más motos a la calle en el sur de Florida, así que es buen momento para revisar su cobertura, use casco o no:' },
        { type: 'ol', items: [
          '**Pagos médicos (MedPay):** ¿los tiene en la póliza de la moto y por cuánto?',
          '**Conductor sin seguro (UM):** en las pólizas de vehículo con responsabilidad por lesiones corporales, la ley de Florida exige incluir UM salvo que el asegurado la rechace por escrito en un formulario aprobado, y el límite es igual al de lesiones corporales a menos que usted elija uno menor ([s. 627.727](' + S.s627727 + ')). Pregunte si su póliza de moto la tiene. Más detalles en nuestra [guía de UM/UIM](/es/blog/uninsured-motorist-coverage-florida).',
          '**Su seguro médico:** ¿cuál es el deducible y el máximo de bolsillo, y pone límites a las lesiones en accidentes de moto?',
          '**Su pasajero:** si usted causa el accidente, ¿quién paga sus lesiones? Eso es un tema de responsabilidad civil.',
        ] },
        { type: 'p', text: 'La cobertura, los límites y las exclusiones dependen de cada póliza. Un agente licenciado puede revisar la suya con usted. Nuestra oficina en Florida City atiende a motociclistas desde Homestead hasta Kendall, en español, inglés y ruso. Llame al **(305) 859-3953** o [pida una cotización](/es/quote).' },
      ],
      faq: [
        { q: '¿Puedo andar en moto sin casco en Florida?', a: 'Solo si es adulto (la ley dice mayor de 21; el FLHSMV dice 21 años o más) y tiene una póliza con al menos $10,000 en beneficios médicos por lesiones en un accidente de moto. Quien maneja igual debe usar protección para los ojos aprobada.' },
        { q: '¿Mi pasajero necesita casco?', a: 'Sí, a menos que el pasajero también cumpla la excepción con su propia cobertura. La regla del casco de la s. 316.211 aplica a todo el que maneje o vaya en una motocicleta.' },
        { q: '¿El PIP de mi carro cuenta como los $10,000 de cobertura médica?', a: 'No. El FLHSMV dice que el PIP de una póliza personal de carro no es suficiente ni para quien maneja ni para el pasajero de una moto.' },
        { q: '¿Qué prueba debo llevar?', a: 'Una tarjeta de seguro médico vigente, o la póliza o la página de declaraciones, de un proveedor reconocido, o prueba de una cobertura médica limitada para motocicleta. Eso es lo que el FLHSMV le indica aceptar a la policía.' },
        { q: '¿Necesito casco en un scooter pequeño?', a: 'No, si tiene 16 años o más y el scooter tiene motor de 50 cc o menos (o no más de 2 caballos de fuerza al freno) y no pasa de 30 mph en terreno plano. Los menores de 16 en un ciclomotor sí tienen que usar casco.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, s. 316.211 (2026): equipo para conductores de motocicletas y ciclomotores (Online Sunshine, en inglés)', url: S.s316211 },
        { label: 'Estatutos de Florida, s. 316.2085 (2026): cómo se debe ir en motocicleta o ciclomotor (Online Sunshine, en inglés)', url: S.s3162085 },
        { label: 'Estatutos de Florida, s. 627.732 (2026): definiciones de PIP (Online Sunshine, en inglés)', url: S.s627732 },
        { label: 'Estatutos de Florida, s. 627.727 (2026): cobertura de conductor sin seguro o con seguro insuficiente (Online Sunshine, en inglés)', url: S.s627727 },
        { label: 'FLHSMV: exención del casco para motociclistas (en inglés)', url: S.helmet },
        { label: 'FLHSMV: educación y endoso de motocicleta (en inglés)', url: S.endorse },
        { label: 'FLHSMV: requisitos de seguro en Florida (en inglés)', url: S.ins },
        { label: 'NHTSA: Traffic Safety Facts, motocicletas, datos de 2024, DOT HS 813 824 (PDF, en inglés)', url: S.nhtsa },
      ],
    },
    ru: {
      title: 'Закон о мотошлемах во Флориде и правило $10 000 на медицинские расходы',
      metaTitle: 'Шлем, закон и страховка мотоцикла во Флориде | M&K Agency',
      description: 'Без шлема во Флориде можно ездить с 21 года и при медпокрытии от $10 000. Чем это подтвердить, почему PIP от машины не подходит и что проверить.',
      ogAlt: 'Иллюстрация: мотоцикл на дороге Флориды на закате, шлем, очки и синий щит',
      excerpt: 'Флорида — не «штат без шлемов». Взрослый может ехать без шлема, только если у него есть медпокрытие не меньше $10 000. Что засчитывается, что нет и о каких правилах часто забывают.',
      category: 'Страхование мотоциклов',
      body: [
        { type: 'p', text: 'Хотите ездить по Флориде без шлема? Закон это допускает, но с условием, и это условие — страховка. Про Флориду часто говорят: «тут можно без шлема». Это не так. Шлем обязан носить каждый водитель и пассажир мотоцикла, если только он не подпадает под конкретное исключение. Если вы ездите сами, возите пассажира или собираетесь купить первый мотоцикл, вот что на самом деле говорит закон в 2026 году и что это значит для вашей страховки.' },
        { type: 'h2', text: 'Что требует статья 316.211' },
        { type: 'ul', items: [
          'Каждый, кто **управляет мотоциклом или едет на нём**, должен быть в застёгнутом шлеме, соответствующем федеральному стандарту безопасности FMVSS 218 ([ст. 316.211(1)](' + S.s316211 + ')). Пассажир — тоже.',
          'Водитель, кроме того, обязан носить **защиту для глаз** одобренного FLHSMV типа (ст. 316.211(2)). Исключение по шлему от этого не освобождает.',
          'Правило о шлеме не действует в **закрытой кабине**, а также для тех, кому **16 лет и больше**, на маленьком мотоцикле объёмом до 50 куб. см (или мощностью не более 2 л. с.), который не разгоняется быстрее 30 миль в час по ровной дороге (ст. 316.211(3)(a)).',
          'Тем, кому **ещё нет 16**, на мопеде шлем обязателен (ст. 316.211(4)).',
          'На мотоцикле, зарегистрированном на человека **младше 21 года**, должен стоять номер особого дизайна и цвета (ст. 316.211(6)).',
          'Нарушение — некриминальное дорожное правонарушение, которое считается **не связанным с движением** (nonmoving violation, ст. 316.211(7)).',
        ] },
        { type: 'h2', text: 'Исключение для взрослых: возраст плюс $10 000 медицинских выплат' },
        { type: 'p', text: 'Закон разрешает ехать без шлема человеку «старше 21 года», если у него есть **страховой полис минимум с $10 000 медицинских выплат** на травмы, полученные в аварии на мотоцикле ([ст. 316.211(3)(b)](' + S.s316211 + ')). FLHSMV формулирует то же правило как **21 год и старше** и уточняет, что оно действует с 1 июля 2000 года ([FLHSMV](' + S.helmet + ')). Если вам только что исполнился 21, не полагайтесь на разницу в формулировках — наденьте шлем.' },
        { type: 'p', text: 'Исключение работает для каждого отдельно. Водителю нужно своё подходящее покрытие, а пассажиру, который хочет ехать без шлема, — своё. Нет покрытия у пассажира — пассажир едет в шлеме.' },
        { type: 'h2', text: 'Чем это подтвердить' },
        { type: 'p', text: 'FLHSMV рекомендует полиции принимать **карточку медицинской страховки** либо сам полис или страницу деклараций от признанного медстраховщика. На карточке должно быть видно, что покрытие **действует сейчас**. Подходит и **ограниченное медицинское покрытие для мотоциклистов**. А вот **PIP по полису на легковую машину недостаточно** — ни для водителя, ни для пассажира, прямо пишет FLHSMV ([FLHSMV](' + S.helmet + ')).' },
        { type: 'ul', items: [
          'Возите карточку или страницу деклараций каждый раз, когда едете без шлема.',
          'Проверьте даты: просроченная карточка не подтверждает действующее покрытие.',
          'Убедитесь, что у пассажира с собой его собственное подтверждение.',
        ] },
        { type: 'h2', text: 'Почему PIP от машины не «переезжает» на мотоцикл' },
        { type: 'p', text: 'Закон Флориды о no-fault определяет «транспортное средство» как самоходную машину с **четырьмя и более колёсами** ([ст. 627.732(3)](' + S.s627732 + ')). И FLHSMV требует подтверждение PIP и страховки имущественной ответственности перед регистрацией машины **минимум с четырьмя колёсами** ([требования FLHSMV к страховке](' + S.ins + ')). Мотоцикл в эту систему не входит, поэтому PIP от вашей машины правило о шлеме не закрывает. Про автомобильную часть — в статье о [минимальной автостраховке во Флориде](/ru/blog/florida-minimum-car-insurance-requirements).' },
        { type: 'callout', title: 'Ездите во Флориде?', text: 'Читайте наш [гид по страховке мотоцикла во Флориде](/ru/motorcycle-insurance-florida-city): дыра без PIP, водители без страховки и покрытия, о которых стоит спросить.' },
        { type: 'h2', text: 'Другие правила, о которых часто забывают' },
        { type: 'ul', items: [
          '**Мотоциклетная отметка.** Для двух- или трёхколёсного мотоцикла с двигателем больше 50 куб. см нужна отметка (endorsement) в правах или права категории «Motorcycle Only». Новичок сначала сдаёт курс Basic RiderCourse, а потом оформляет отметку в течение года ([FLHSMV](' + S.endorse + ')). У трициклов свои нюансы — см. [наш гид по трайкам и автоциклам](/ru/blog/autocycle-motorcycle-endorsement-florida).',
          '**Пассажир.** Возить его можно, только если мотоцикл рассчитан больше чем на одного человека: на штатном двухместном сиденье или на сиденье, надёжно закреплённом сзади или сбоку от водителя ([ст. 316.2085(1)](' + S.s3162085 + ')).',
          '**Руки и груз.** Нельзя везти пакет или свёрток, из-за которого вы не можете держать руль обеими руками (ст. 316.2085(4)).',
          '**Номер.** Он должен быть хорошо виден сзади, а намеренно закрывать его запрещено (ст. 316.2085(3)).',
        ] },
        { type: 'p', text: 'В отличие от правила о шлеме, нарушение ст. 316.2085 считается **связанным с движением** (moving violation, ст. 316.2085(7)).' },
        { type: 'h2', text: 'Почему $10 000 — это минимум по закону, а не план' },
        { type: 'p', text: 'По данным NHTSA, **в 2024 году в ДТП во Флориде погибли 642 мотоциклиста** — больше, чем в любом другом штате, и **263 из них (41% среди случаев, где известно, был ли шлем) ехали без шлема**. По стране риск гибели на милю пути у мотоциклиста почти в **27 раз** выше, чем у человека в легковой машине, а у 35% мотоциклистов, попавших в смертельные аварии, не было действующих мотоциклетных прав ([NHTSA, данные за 2024 год](' + S.nhtsa + ')).' },
        { type: 'p', text: 'Серьёзная авария — это операции, реабилитация и месяцы без работы. $10 000 медицинских выплат закрывают требование закона, но на настоящее лечение их может не хватить.' },
        { type: 'h2', text: 'Что спросить о своём полисе в этот сезон' },
        { type: 'p', text: 'С приходом прохладной погоды на дорогах Южной Флориды становится больше мотоциклистов, так что сейчас самое время проверить полис — в шлеме вы ездите или нет:' },
        { type: 'ol', items: [
          '**Медицинские расходы (MedPay):** есть ли они в полисе на мотоцикл и на какую сумму?',
          '**Покрытие UM (незастрахованный водитель):** в полисах на транспорт со страховкой ответственности за телесные повреждения закон Флориды требует UM, если только страхователь не откажется от него письменно на утверждённом бланке; лимит равен лимиту по телесным повреждениям, если вы не выберете меньший ([ст. 627.727](' + S.s627727 + ')). Уточните, есть ли оно в полисе на мотоцикл. Подробнее — в нашем [гиде по UM/UIM](/ru/blog/uninsured-motorist-coverage-florida).',
          '**Медстраховка:** какая франшиза и максимум личных расходов, нет ли ограничений по травмам на мотоцикле?',
          '**Пассажир:** кто оплатит его травмы, если аварию устроите вы? Это вопрос страховки ответственности.',
        ] },
        { type: 'p', text: 'Покрытия, лимиты и исключения зависят от конкретного полиса. Лицензированный агент разберёт ваш вместе с вами. Наш офис во Флорида-Сити работает с мотоциклистами от Хомстеда до Кендалла, и с нами можно говорить по-русски — см. [страницу русскоязычного агента](/ru/russian-speaking-insurance-agent-miami). Звоните **(305) 859-3953** или [запросите расчёт](/ru/quote).' },
      ],
      faq: [
        { q: 'Можно ли ездить без шлема во Флориде?', a: 'Только взрослым (в законе — старше 21 года, у FLHSMV — 21 год и старше) и только при полисе минимум с $10 000 медицинских выплат на травмы в аварии на мотоцикле. Защита для глаз водителю всё равно нужна.' },
        { q: 'Нужен ли шлем пассажиру?', a: 'Да, если только пассажир сам не подпадает под исключение со своим покрытием. Правило о шлеме в ст. 316.211 распространяется на всех, кто управляет мотоциклом или едет на нём.' },
        { q: 'Засчитывается ли PIP от машины как $10 000 медицинского покрытия?', a: 'Нет. FLHSMV пишет, что PIP по полису на легковую машину недостаточно ни для водителя, ни для пассажира мотоцикла.' },
        { q: 'Какой документ возить с собой?', a: 'Действующую карточку медстраховки, полис или страницу деклараций признанного медстраховщика либо подтверждение ограниченного медицинского покрытия для мотоциклистов. Именно это FLHSMV рекомендует принимать полиции.' },
        { q: 'Нужен ли шлем на маленьком скутере?', a: 'Нет, если вам 16 лет или больше, а у скутера двигатель до 50 куб. см (или не мощнее 2 л. с.) и он не едет быстрее 30 миль в час по ровной дороге. Тем, кому нет 16, на мопеде шлем обязателен.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 316.211 (2026): снаряжение мотоциклистов и водителей мопедов (Online Sunshine, англ.)', url: S.s316211 },
        { label: 'Законы Флориды, ст. 316.2085 (2026): правила езды на мотоцикле и мопеде (Online Sunshine, англ.)', url: S.s3162085 },
        { label: 'Законы Флориды, ст. 627.732 (2026): определения PIP (Online Sunshine, англ.)', url: S.s627732 },
        { label: 'Законы Флориды, ст. 627.727 (2026): покрытие UM/UIM (Online Sunshine, англ.)', url: S.s627727 },
        { label: 'FLHSMV: исключение из правила о шлеме (англ.)', url: S.helmet },
        { label: 'FLHSMV: обучение мотоциклистов и мотоциклетная отметка (англ.)', url: S.endorse },
        { label: 'FLHSMV: требования к страховке во Флориде (англ.)', url: S.ins },
        { label: 'NHTSA: Traffic Safety Facts, мотоциклы, данные за 2024 год, DOT HS 813 824 (PDF, англ.)', url: S.nhtsa },
      ],
    },
  },
};
