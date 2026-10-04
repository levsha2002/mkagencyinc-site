import type { BlogPost } from '../types';

// Facts checked 2026-10-04: s. 320.086 F.S. (2026) (Horseless Carriage 1945 or earlier,
// permanent; Antique after 1945 and 30+ years; regular/specialty plate instead; exhibition-
// only historical/firefighting/military; historical plate 1974 or earlier; former military
// plate display exemption), FLHSMV procedure RS-25 (rev. 12/25: same owner/registrant,
// annual renewal for regular Antique, exhibition-only permanent plates not for daily
// driving, authenticated plates same year as model year, 5,000 lb, renewed annually, cannot
// be replaced, proof of Florida insurance), form HSMV 83045 (rev. 07/25: Horseless
// Carriage and permanent Antique issued by FLHSMV by mail; street rod / custom vehicle
// definitions, inspection, exhibition use), TL-72, FLHSMV insurance requirements page
// (PIP/PDL, continuous coverage, surrender plate before cancelling). NOTE: RS-25 says
// authenticated plates for vehicles "1975 or earlier"; the statute says "1974 or earlier".
// We cite the statute. No insurer named, no fees or prices.
const S = {
  s320086: 'https://www.flsenate.gov/Laws/Statutes/2026/320.086',
  rs25: 'https://www.flhsmv.gov/pdf/proc/rs/rs-25.pdf',
  f83045: 'https://www.flhsmv.gov/pdf/forms/83045.pdf',
  tl72: 'https://www.flhsmv.gov/pdf/proc/tl/tl-72.pdf',
  ins: 'https://www.flhsmv.gov/insurance/',
};

export const post: BlogPost = {
  slug: 'antique-license-plates-florida',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Florida Antique and Horseless Carriage License Plates: Rules for Classic Car Owners',
      metaTitle: 'Antique and Horseless Carriage Plates in Florida | M&K Agency',
      description: 'Florida’s special plates for older cars: Horseless Carriage, Antique, show-only and model-year plates, street rods, and the insurance proof FLHSMV requires.',
      excerpt: 'Florida has several special plates for older vehicles, each with its own age rule, renewal rule and use limits. Here is which one fits your classic and what FLHSMV asks for.',
      category: 'Classic car insurance',
      body: [
        { type: 'p', text: 'A classic car in Florida can wear a regular plate, but the state also offers special plates for older vehicles ([s. 320.086](' + S.s320086 + ')). Each one has its own age rule, renewal rule and, in some cases, limits on how the car may be used. Here is how they differ.' },
        { type: 'h2', text: 'Horseless Carriage: model year 1945 or earlier' },
        { type: 'p', text: 'Cars, trucks and motorcycles for private use built in **1945 or earlier** can get a Horseless Carriage plate. It is **permanent**: no renewal as long as the vehicle stays with the same owner, according to FLHSMV’s procedure manual ([RS-25](' + S.rs25 + ')). This plate is issued by FLHSMV itself, not your local tax collector. You mail form **HSMV 83045** with a copy of your Florida title or registration and **proof of insurance**, and a department employee calls you to finish processing ([HSMV 83045](' + S.f83045 + ')).' },
        { type: 'h2', text: 'Antique: 30 years or older' },
        { type: 'p', text: 'A vehicle from a model year **after 1945** that is **30 years or older** can get an Antique plate. This plate is **renewed every year** through your county tax collector or license plate agency, and form 83045 is not needed for it ([RS-25](' + S.rs25 + ')). If you prefer, you may keep a regular or specialty Florida plate instead.' },
        { type: 'h2', text: 'Permanent plates for show vehicles only' },
        { type: 'p', text: 'A permanent Horseless Carriage or Antique plate is also available for firefighting apparatus, former military vehicles and other historical vehicles **30 years or older** that are used **only in exhibitions, parades or public display**. FLHSMV is clear that this option does not apply to a car driven on a daily basis. A former military vehicle may skip displaying the plate if that is needed to keep its markings accurate, but the plate and registration must be carried inside it.' },
        { type: 'h2', text: 'A plate from the car’s own year' },
        { type: 'p', text: 'Owners of older models can ask to use an original Florida plate that matches the car’s model year as a personalized plate. The statute sets the cutoff at **model year 1974 or earlier**. The plate must be the same year as the vehicle and may be refurbished if it stays historically correct and readable. It is renewed every year and, being one of a kind, **cannot be replaced** if stolen or damaged ([RS-25](' + S.rs25 + ')).' },
        { type: 'h2', text: 'Street rods and custom vehicles are different' },
        { type: 'p', text: 'A modified car falls under other plates. A **street rod** is a model year 1948 or older (or built to resemble one) and altered from the original design. A **custom vehicle** is a model year after 1948, at least 25 years old, and altered. Both need an inspection at an FLHSMV regional office and a title brand, and on the application the owner certifies the vehicle will be used **for exhibition, not general transportation** ([HSMV 83045](' + S.f83045 + ')).' },
        { type: 'h2', text: 'Insurance comes first' },
        { type: 'p', text: 'FLHSMV requires **proof of Florida insurance** for these plates ([TL-72](' + S.tl72 + ')). A registered vehicle with four or more wheels needs at least **$10,000 of PIP and $10,000 of property damage liability**, and the coverage must stay **continuous even when the car is not driven**. If you put the car away and want to cancel the policy, surrender the plate first ([FLHSMV](' + S.ins + ')).' },
        { type: 'p', text: 'One more practical point: how you describe the car’s use on a plate application (for example, exhibition only) should match how you describe it to your insurer. Our [classic car insurance page](/en/classic-car-insurance-florida-city) explains how collector policies handle value and mileage, and our guide to [uninsured motorist coverage](/en/blog/uninsured-motorist-coverage-florida) covers what happens if a driver without insurance hits your car.' },
        { type: 'callout', title: 'Insuring a classic?', text: '[Request a quote](/en/quote) or call us with the year, make and how you use the car. A licensed agent will go over the options. This is general information; plate rules come from FLHSMV, and coverage depends on the policy.' },
      ],
      faq: [
        { q: 'How old does a car have to be for an antique plate in Florida?', a: 'At least 30 years old for a model year after 1945. Cars from 1945 or earlier qualify for the permanent Horseless Carriage plate.' },
        { q: 'Does a Florida antique plate need to be renewed?', a: 'The regular Antique plate is renewed every year. The Horseless Carriage plate, and the permanent plate for exhibition-only historical vehicles, do not need renewal while the vehicle stays with the same owner.' },
        { q: 'Do I need insurance for an antique plate?', a: 'Yes. FLHSMV requires proof of Florida insurance, and a registered four-wheel vehicle must carry at least $10,000 of PIP and $10,000 of property damage liability, continuously.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 320.086 (2026): ancient or antique motor vehicles; horseless carriage, antique or historical plates', url: S.s320086 },
        { label: 'FLHSMV procedure RS-25: Horseless Carriage, Antique and Authenticated License Plates (PDF)', url: S.rs25 },
        { label: 'FLHSMV form HSMV 83045: Application for Street Rod, Custom Vehicle, Horseless Carriage or Antique (Permanent) (PDF)', url: S.f83045 },
        { label: 'FLHSMV procedure TL-72: Ancient or Antique Motor Vehicles (PDF)', url: S.tl72 },
        { label: 'FLHSMV: Florida Insurance Requirements', url: S.ins },
      ],
    },
    es: {
      title: 'Placas de antigüedad y Horseless Carriage en Florida: reglas para dueños de autos clásicos',
      metaTitle: 'Placas de antigüedad para autos clásicos en Florida | M&K Agency',
      description: 'Placas especiales de Florida para carros antiguos: Horseless Carriage, Antique, de exhibición y del año del modelo, street rods y el seguro que pide el FLHSMV.',
      excerpt: 'Florida tiene varias placas especiales para vehículos antiguos, cada una con su regla de edad, de renovación y de uso. Cuál le corresponde a su clásico y qué pide el FLHSMV.',
      category: 'Seguro de auto clásico',
      body: [
        { type: 'p', text: 'Un carro clásico en Florida puede llevar una placa normal, pero el estado también ofrece placas especiales para vehículos antiguos ([s. 320.086](' + S.s320086 + ')). Cada una tiene su propia regla de edad, de renovación y, en algunos casos, límites sobre cómo se puede usar el carro. Así se diferencian.' },
        { type: 'h2', text: 'Horseless Carriage: modelo 1945 o anterior' },
        { type: 'p', text: 'Los carros, camionetas y motocicletas de uso privado fabricados en **1945 o antes** pueden llevar la placa Horseless Carriage. Es **permanente**: no se renueva mientras el vehículo siga con el mismo dueño, según el manual de procedimientos del FLHSMV ([RS-25](' + S.rs25 + ')). Esta placa la emite el propio FLHSMV, no la oficina del recaudador de impuestos (tax collector) de su condado. Usted envía por correo el formulario **HSMV 83045** con una copia del título o del registro de Florida y **prueba de seguro**, y un empleado del departamento lo llama para terminar el trámite ([HSMV 83045](' + S.f83045 + ')).' },
        { type: 'h2', text: 'Antique: 30 años o más' },
        { type: 'p', text: 'Un vehículo de un modelo **posterior a 1945** que tenga **30 años o más** puede llevar la placa Antique. Esta placa **se renueva cada año** en la oficina del tax collector o en una agencia de placas, y no necesita el formulario 83045 ([RS-25](' + S.rs25 + ')). Si prefiere, puede quedarse con una placa normal o una placa especial (specialty) de Florida.' },
        { type: 'h2', text: 'Placas permanentes solo para exhibición' },
        { type: 'p', text: 'También hay placa permanente Horseless Carriage o Antique para camiones de bomberos, vehículos militares retirados y otros vehículos históricos de **30 años o más** que se usan **solo en exhibiciones, desfiles o presentaciones públicas**. El FLHSMV aclara que esta opción no aplica a un carro que se maneja a diario. Un vehículo militar retirado puede no mostrar la placa si hace falta para conservar sus marcas originales, pero la placa y el registro deben ir dentro del vehículo.' },
        { type: 'h2', text: 'Una placa del mismo año del carro' },
        { type: 'p', text: 'Los dueños de modelos antiguos pueden pedir usar una placa original de Florida del mismo año del modelo como placa personalizada. La ley fija el límite en **modelos de 1974 o anteriores**. La placa debe ser del mismo año que el vehículo y se puede restaurar si sigue siendo fiel a la original y legible. Se renueva cada año y, como es única, **no se puede reponer** si se la roban o se daña ([RS-25](' + S.rs25 + ')).' },
        { type: 'h2', text: 'Los street rods y los carros modificados son otra cosa' },
        { type: 'p', text: 'Un carro modificado lleva otras placas. Un **street rod** es un modelo 1948 o anterior (o hecho para parecerse a uno) que fue alterado del diseño original. Un **custom vehicle** es un modelo posterior a 1948, con 25 años o más, también alterado. Los dos necesitan inspección en una oficina regional del FLHSMV y una marca en el título, y en la solicitud el dueño certifica que el vehículo se usará **para exhibición y no como transporte general** ([HSMV 83045](' + S.f83045 + ')).' },
        { type: 'h2', text: 'Primero, el seguro' },
        { type: 'p', text: 'El FLHSMV exige **prueba de seguro de Florida** para estas placas ([TL-72](' + S.tl72 + ')). Un vehículo registrado de cuatro ruedas o más necesita por lo menos **$10,000 de PIP y $10,000 de responsabilidad por daños a la propiedad**, y la cobertura debe ser **continua aunque el carro no se maneje**. Si guarda el carro y quiere cancelar la póliza, entregue primero la placa ([FLHSMV](' + S.ins + ')).' },
        { type: 'p', text: 'Un consejo práctico: cómo describe el uso del carro en la solicitud de la placa (por ejemplo, solo exhibición) debe coincidir con lo que le dice a su aseguradora. Nuestra página de [seguro de auto clásico](/es/classic-car-insurance-florida-city) explica cómo manejan el valor y el millaje las pólizas para coleccionistas, y nuestra guía de [cobertura de motorista sin seguro](/es/blog/uninsured-motorist-coverage-florida) explica qué pasa si un conductor sin seguro le choca el carro.' },
        { type: 'callout', title: '¿Va a asegurar un clásico?', text: '[Pida una cotización](/es/quote) o llámenos con el año, la marca y el uso que le da al carro. Un agente con licencia le explicará las opciones. Esto es información general; las reglas de las placas son del FLHSMV y la cobertura depende de la póliza.' },
      ],
      faq: [
        { q: '¿Cuántos años debe tener un carro para la placa de antigüedad en Florida?', a: 'Por lo menos 30 años, si es un modelo posterior a 1945. Los carros de 1945 o antes califican para la placa permanente Horseless Carriage.' },
        { q: '¿La placa Antique de Florida se renueva?', a: 'La placa Antique normal se renueva cada año. La Horseless Carriage y la placa permanente para vehículos históricos de solo exhibición no se renuevan mientras el vehículo siga con el mismo dueño.' },
        { q: '¿Necesito seguro para una placa de antigüedad?', a: 'Sí. El FLHSMV exige prueba de seguro de Florida, y un vehículo registrado de cuatro ruedas debe tener por lo menos $10,000 de PIP y $10,000 de responsabilidad por daños a la propiedad, sin interrupciones.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 320.086 (2026): vehículos antiguos; placas Horseless Carriage, Antique e históricas (en inglés)', url: S.s320086 },
        { label: 'FLHSMV, procedimiento RS-25: placas Horseless Carriage, Antique y autenticadas (PDF, en inglés)', url: S.rs25 },
        { label: 'FLHSMV, formulario HSMV 83045: solicitud de registro de street rod, custom vehicle, Horseless Carriage o Antique permanente (PDF, en inglés)', url: S.f83045 },
        { label: 'FLHSMV, procedimiento TL-72: vehículos antiguos (PDF, en inglés)', url: S.tl72 },
        { label: 'FLHSMV: requisitos de seguro en Florida', url: S.ins },
      ],
    },
    ru: {
      title: 'Номера Antique и Horseless Carriage во Флориде: правила для владельцев классических авто',
      metaTitle: 'Номера Antique для классических авто во Флориде | M&K Agency',
      description: 'Специальные номера Флориды для старых машин: Horseless Carriage, Antique, номера для выставочных авто и номера года выпуска, стрит-роды и нужная страховка.',
      excerpt: 'Во Флориде есть несколько специальных номеров для старых машин, у каждого свои требования к возрасту, продлению и использованию. Какой подходит вашей классике и что требует FLHSMV.',
      category: 'Страхование классических авто',
      body: [
        { type: 'p', text: 'На классическую машину во Флориде можно повесить обычный номер, но штат предлагает и специальные номера для старых автомобилей ([ст. 320.086](' + S.s320086 + ')). У каждого свои требования к возрасту, свои правила продления, а иногда и ограничения на то, как можно ездить. Разбираемся, чем они отличаются.' },
        { type: 'h2', text: 'Horseless Carriage: модели 1945 года и старше' },
        { type: 'p', text: 'Легковые машины, пикапы и мотоциклы для личного пользования **1945 года выпуска и раньше** могут получить номер Horseless Carriage. Он **постоянный**: продлевать его не нужно, пока машина у того же владельца, — так сказано в процедурном руководстве FLHSMV ([RS-25](' + S.rs25 + ')). Этот номер выдаёт сам FLHSMV, а не местный tax collector. Вы отправляете по почте форму **HSMV 83045** с копией флоридского титула или регистрации и **подтверждением страховки**, и сотрудник департамента звонит вам, чтобы завершить оформление ([HSMV 83045](' + S.f83045 + ')).' },
        { type: 'h2', text: 'Antique: от 30 лет' },
        { type: 'p', text: 'Машина модельного года **после 1945-го**, которой **30 лет или больше**, может получить номер Antique. Этот номер **продлевают каждый год** у tax collector округа или в агентстве по номерам, и форма 83045 для него не нужна ([RS-25](' + S.rs25 + ')). При желании можно оставить обычный или specialty-номер Флориды.' },
        { type: 'h2', text: 'Постоянные номера — только для выставочных машин' },
        { type: 'p', text: 'Постоянный номер Horseless Carriage или Antique можно получить и для пожарной техники, бывших военных машин и других исторических автомобилей **от 30 лет**, которые используются **только на выставках, парадах и публичных показах**. FLHSMV прямо пишет, что этот вариант не для машины, на которой ездят каждый день. Бывшая военная машина может не показывать номер, если это нужно для сохранения её маркировки, но номер и регистрация должны быть в машине.' },
        { type: 'h2', text: 'Номер того же года, что и машина' },
        { type: 'p', text: 'Владельцы старых моделей могут попросить использовать оригинальный флоридский номер года выпуска машины как персонализированный. Закон устанавливает границу — **модели 1974 года и старше**. Номер должен быть того же года, что и машина; его можно отреставрировать, если он остаётся исторически точным и читаемым. Его продлевают каждый год, и, поскольку он единственный в своём роде, **заменить его нельзя**, если его украли или повредили ([RS-25](' + S.rs25 + ')).' },
        { type: 'h2', text: 'Стрит-роды и кастомы — отдельная история' },
        { type: 'p', text: 'Для переделанных машин — другие номера. **Street rod** — модель 1948 года или старше (или сделанная под неё), изменённая по сравнению с заводской. **Custom vehicle** — модель после 1948 года, от 25 лет, тоже изменённая. Для обоих нужен осмотр в региональном офисе FLHSMV и отметка в титуле, а в заявлении владелец подтверждает, что машина будет использоваться **для выставок, а не как обычный транспорт** ([HSMV 83045](' + S.f83045 + ')).' },
        { type: 'h2', text: 'Сначала — страховка' },
        { type: 'p', text: 'Для этих номеров FLHSMV требует **подтверждение флоридской страховки** ([TL-72](' + S.tl72 + ')). Зарегистрированной машине с четырьмя колёсами и больше нужны минимум **$10,000 PIP и $10,000 ответственности за ущерб имуществу (PDL)**, и страховка должна быть **непрерывной, даже если машина стоит**. Если вы ставите машину на хранение и хотите отменить полис, сначала сдайте номер ([FLHSMV](' + S.ins + ')).' },
        { type: 'p', text: 'И практический момент: то, как вы описываете использование машины в заявлении на номер (например, только выставки), должно совпадать с тем, что вы говорите страховой. На странице о [страховке классических авто](/ru/classic-car-insurance-florida-city) рассказано, как коллекционные полисы учитывают стоимость и пробег, а в статье о [покрытии UM/UIM](/ru/blog/uninsured-motorist-coverage-florida) — что будет, если в вашу машину врежется водитель без страховки.' },
        { type: 'callout', title: 'Страхуете классику?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните нам — назовите год, марку и как вы используете машину. Лицензированный агент расскажет о вариантах. Это общая информация; правила по номерам устанавливает FLHSMV, а покрытие зависит от полиса.' },
      ],
      faq: [
        { q: 'Сколько лет должно быть машине для номера Antique во Флориде?', a: 'Не меньше 30 лет, если модельный год после 1945-го. Машины 1945 года и старше подходят под постоянный номер Horseless Carriage.' },
        { q: 'Нужно ли продлевать номер Antique?', a: 'Обычный номер Antique продлевают каждый год. Horseless Carriage и постоянный номер для исторических машин, которые ездят только на выставки, продлевать не нужно, пока машина у того же владельца.' },
        { q: 'Нужна ли страховка для номера Antique?', a: 'Да. FLHSMV требует подтверждение флоридской страховки, а у зарегистрированной четырёхколёсной машины должны быть минимум $10,000 PIP и $10,000 PDL без перерывов.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 320.086 (2026): старинные и антикварные автомобили, номера Horseless Carriage, Antique и исторические (на английском)', url: S.s320086 },
        { label: 'FLHSMV, процедура RS-25: номера Horseless Carriage, Antique и аутентичные номера (PDF, на английском)', url: S.rs25 },
        { label: 'FLHSMV, форма HSMV 83045: заявление на регистрацию street rod, custom vehicle, Horseless Carriage или постоянного Antique (PDF, на английском)', url: S.f83045 },
        { label: 'FLHSMV, процедура TL-72: старинные и антикварные автомобили (PDF, на английском)', url: S.tl72 },
        { label: 'FLHSMV: требования к страховке во Флориде (на английском)', url: S.ins },
      ],
    },
  },
};
