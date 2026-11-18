import type { CityPage } from './types';
import { sources } from './sources';

// /[lang]/homeowners-insurance-hillsborough-county-fl. Facts checked 2026-11-18.
// ACS: units 630,692; detached 56.9%; 50+ 7.3%; mobile 40,816 (6.5%);
// median 1991; pre-1990 48.6%; since 2000 37.5%; owner 61.5%; seasonal 10,336 (1.6%); age 65+ 15.1%.
// FEMA CIS: unincorporated county FIRM 10/07/2021, CRS class 4 eff. 10/01/2026.
// Tampa: same map date, class 5 eff. 10/01/2019.
// Temple Terrace: map 08/28/2008, class 7 eff. 10/01/2026.
// Plant City: map 08/28/2008 (M), class 6 eff. 04/01/2025.
// Not HVHZ. No single wind speed. OSRM only to Tampa City Hall, ~300 mi / ~5 h 30 min.
const SRC = ['acsHillsborough', 'fbcHvhz', 'femaCis', 'hcCoastal', 'tampaFlood', 'windForm', 'mitigation', 'roofAge', 'deductibles', 'claimDeadline', 'condoMaster', 'lossAssessment', 'condoInspections', 'floodsmart', 'nhcHelene', 'nhcMilton', 'msfh'] as const;

export const HOME_HILLSBOROUGH: CityPage = {
  path: '/homeowners-insurance-hillsborough-county-fl',
  line: 'home',
  kind: 'county',
  area: 'hillsborough',
  heroImage: 'home-04',
  published: '2026-11-18',
  modified: '2026-11-18',
  served: [
    { name: 'Tampa', path: '/homeowners-insurance-tampa-fl' },
    { name: 'Brandon' },
    { name: 'Riverview' },
    { name: 'Temple Terrace' },
    { name: 'Plant City' },
    { name: 'Lutz' },
    { name: 'Town \'n\' Country' },
    { name: 'Sun City Center' },
    { name: 'Ruskin' },
    { name: 'Apollo Beach' },
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Hillsborough County, FL' },
  ],
  copy: {
    en: {
      metaTitle: 'Home Insurance in Hillsborough County | M&K Agency',
      metaDesc: 'Home insurance in Hillsborough County: 2021 flood maps, CRS class by city, outside the HVHZ. Reviewed remotely from Florida City.',
      breadcrumb: 'Hillsborough County',
      kicker: 'Home & condo insurance · Hillsborough County',
      h1a: 'Home insurance in Hillsborough County,',
      h1b: 'one map date for the bay, and more than one flood class.',
      sub: 'Tampa is Class 5. Unincorporated Hillsborough is Class 4. Temple Terrace and Plant City are neither. We read the address from Florida City. English, Spanish or Russian.',
      serviceType: 'Homeowners and condo insurance',
      intro: [
        { type: 'h2', text: 'A large county of houses, served from five hours away' },
        { type: 'p', text: 'The 2020–2024 Census estimates count about 631,000 housing units in Hillsborough County and about 1.52 million residents. About 57% of units are detached houses and about 8% are attached. About 7% are in buildings with 50 or more units. Manufactured homes are about 40,800 units, roughly 6%. The median year built is 1991, and about 49% of units were built before 1990. About 38% were built in 2000 or later. Of the occupied homes, about 61% are owner-occupied. About 10,300 units, under 2%, were vacant for seasonal or occasional use. About 15% of residents are 65 or older. This is not a seasonal coast in the way Venice is. The city of Tampa, which has its own page, is half owner-occupied and about 16% towers. A Brandon house, a Plant City house and a Tampa condo are not one form.' },
        { type: 'p', text: 'The county is not in the High-Velocity Hurricane Zone. Section 1620 of the Florida Building Code limits that zone to Miami-Dade and Broward. Design wind speed comes from the code maps and changes by parcel and risk category. This page does not print one miles-per-hour number from Ruskin to Plant City.' },
        { type: 'p', text: 'We serve the county remotely from Florida City. There is no office here. The only drive time we computed is to Tampa City Hall: about 300 miles and about 5 hours 30 minutes in light traffic. We have not published a separate time for every community on this page.' },
      ],
      checklistTitle: 'What we check across Hillsborough County',
      checklist: [
        '**The form and the place.** An HO-3 for a detached house, an HO-6 for a Tampa condo, and a manufactured-home form for about 6% of county units.',
        '**The NFIP community.** Unincorporated Hillsborough is Class 4 effective October 1, 2026. Tampa is Class 5 effective October 1, 2019. Temple Terrace is Class 7. Plant City is Class 6.',
        '**The map date for that community.** Tampa and the unincorporated county list October 7, 2021. Temple Terrace and Plant City list August 28, 2008.',
        '**Wind mitigation on form OIR-B1-1802.** Outside the HVHZ, credits follow the form.',
        '**The hurricane deductible**, $500 or 2%, 5% or 10% of the dwelling limit, once per calendar year.',
        '**Roof age** against a median year of 1991, not against a single county roof.',
        '**On a condo, the master-policy exclusions** and loss assessment above the $2,000 floor. Milestone and reserve bills are generally not that claim.',
        '**Flood on a separate policy.** Helene’s bay gauges are not a depth for an inland house.',
      ],
      body: [
        { type: 'h2', text: 'The wind form is statewide. The flood class is local.' },
        { type: 'p', text: 'A wind-mitigation inspection records roof covering, roof deck attachment, roof-to-wall connection, roof geometry, secondary water resistance and opening protection. Florida Statute 627.0629 requires insurers to reflect the credits for what the form actually documents. This county is outside the High-Velocity Hurricane Zone, so the form is not a Miami-Dade Notice of Acceptance. Send it if you have it. My Safe Florida Home is a separate state program of inspections and grants. A grant is not automatic, and this page does not promise one. Hurricane deductibles are offered at $500 or at 2%, 5% or 10% of the dwelling limit and apply once per calendar year. For policies issued or renewed since July 1, 2022, an insurer cannot refuse coverage only because the roof is under 15 years old. An older roof can still be actual cash value. Law and ordinance coverage is the part that can pay to rebuild to the current code. With a median year of 1991, about half the stock is old enough that the code question is real, and a large share built since 2000 is not the same roof conversation.' },
        { type: 'h2', text: 'Four communities, not one class' },
        { type: 'p', text: 'No homeowners policy and no HO-6 covers flood, including storm surge. FEMA’s Community Status Book is the list we use for the class and the map date. Unincorporated Hillsborough County, community 120112, has a current map date of October 7, 2021 and is CRS Class 4, with that class effective October 1, 2026. The City of Tampa, community 120114, has the same map date and is Class 5, with that class effective October 1, 2019. The city’s stormwater page also describes Tampa as Class 5. Temple Terrace is Class 7, class effective October 1, 2026, with a map date of August 28, 2008. Plant City is Class 6, class effective April 1, 2025, and the status book shows a map date of August 28, 2008 marked (M). We do not treat that marker as the October 7, 2021 coastal study. The class rates a floodplain program. It is not a coverage limit, and it does not put flood on the house policy. A Brandon address in the unincorporated county is not Tampa’s class. Hillsborough County says the October 7, 2021 coastal maps replaced an analysis the 2008 countywide update had not redone.' },
        { type: 'p', text: 'About 7% of county units are in buildings of 50 or more, and that share is higher inside Tampa. Florida Statute 718.111(11) requires the association to insure the building and to exclude the unit interior. That interior is an HO-6. Statute 627.714 requires at least $2,000 of loss-assessment coverage. Buildings of three or more habitable stories need a milestone inspection, generally at 30 years and every 10 years after, or at 25 if the local official requires it, plus a structural integrity reserve study at least every 10 years. An assessment for reserves or inspection repairs is generally not a loss-assessment claim. Hurricane Helene put 5 to 7 feet of inundation in Tampa Bay and 7.2 feet above mean higher high water at East Bay. That is the coastal water story. It is not a measured depth for Plant City. Milton, ashore at Siesta Key two weeks later, is described by the National Hurricane Center as about 1 to 2 feet of inundation in the bay. An NFIP policy usually takes 30 days to start unless it is tied to a loan closing. The program caps are $250,000 for the building and $100,000 for contents. Those caps are not a rebuilding estimate. Property claims have a clock: notice of a new claim is generally due within one year, supplemental claims within 18 months. M&K Agency is family-owned, with a team of 12 and more than 5,000 clients across Florida. **Send us your policy and we’ll check your coverage.**' },
      ],
      officeTitle: 'Hillsborough County, served from Florida City',
      office: [
        { type: 'p', text: 'We do not have an office in Hillsborough County. The office is at **33550 S Dixie Hwy, Suite 102, Florida City, FL 33034**. Tampa City Hall is about 300 miles and about 5 hours 30 minutes in light traffic. We have not computed a separate drive for Brandon, Plant City or Ruskin. Clients send the declarations, the wind-mitigation form and, for a condo, the association certificate by WhatsApp, text or email. Name the city. Remote review is how the county is served. A visit is by appointment.' },
        { type: 'p', text: 'Hours are Monday to Friday, 9 to 6, and Saturday by appointment. Call (305) 859-3953 or WhatsApp (971) 998-7313. During business hours an agent calls back within an hour.' },
      ],
      faqTitle: 'Home insurance in Hillsborough County: common questions',
      faq: [
        { q: 'Is the whole county CRS Class 4?', a: 'No. Unincorporated Hillsborough County is Class 4 effective October 1, 2026. The City of Tampa is Class 5 effective October 1, 2019. Temple Terrace is Class 7, and Plant City is Class 6. The class is not a coverage limit. Use the community on the address.' },
        { q: 'Is Hillsborough County in the High-Velocity Hurricane Zone?', a: 'No. Only Miami-Dade and Broward are. We do not quote one design wind speed from the bay to Plant City. A wind-mitigation form still documents the roof and the openings on the building you own.' },
        { q: 'Which flood map is in effect?', a: 'October 7, 2021 for the City of Tampa and for unincorporated Hillsborough County. The status book lists August 28, 2008 for Temple Terrace and for Plant City. Flood is not part of a homeowners or HO-6 policy. Helene’s East Bay reading of 7.2 feet is a bay gauge, not a depth for every inland house.' },
        { q: 'Does Tampa’s page cover Brandon?', a: 'No. Tampa has its own homeowners page. Brandon, Riverview, Temple Terrace, Plant City, Lutz, Town \'n\' Country, Sun City Center, Ruskin and Apollo Beach are listed here without a page. Send the address. An unincorporated Brandon file is the county’s CRS class, not Tampa’s.' },
        { q: 'Can you review a policy if I never drive to Florida City?', a: 'Yes. That is how the county is served. Tampa City Hall is about 5 hours 30 minutes away in light traffic, and we have not published a shorter time for the other communities. We do not have an office in the county, and we do not promise a placement until we have read the file.' },
      ],
      sources: sources('en', [...SRC]),
    },
    es: {
      metaTitle: 'Seguro de Casa en el Condado Hillsborough | M&K',
      metaDesc: 'Seguro de casa en el condado de Hillsborough: mapas de 2021, clase CRS según la ciudad, fuera de la HVHZ. Revisión a distancia desde Florida City.',
      breadcrumb: 'Condado Hillsborough',
      kicker: 'Seguro de casa y condominio · Condado Hillsborough',
      h1a: 'Seguro de casa en el condado de Hillsborough,',
      h1b: 'una fecha de mapa para la bahía, y más de una clase de inundación.',
      sub: 'Tampa es clase 5. El Hillsborough no incorporado es clase 4. Temple Terrace y Plant City no son ninguna de las dos. Leemos la dirección desde Florida City. En español, inglés o ruso.',
      serviceType: 'Seguro de vivienda y condominio',
      intro: [
        { type: 'h2', text: 'Un condado grande de casas, atendido desde cinco horas de distancia' },
        { type: 'p', text: 'Las estimaciones del Censo de 2020–2024 cuentan unas 631,000 viviendas en el condado de Hillsborough y unos 1.52 millones de residentes. Cerca del 57% son casas separadas y cerca del 8% son adosadas. Cerca del 7% están en edificios de 50 unidades o más. Las casas manufacturadas son unas 40,800 unidades, cerca del 6%. El año mediano de construcción es 1991, y cerca del 49% es anterior a 1990. Cerca del 38% se construyó en 2000 o después. De las viviendas ocupadas, cerca del 61% las ocupa el dueño. Unas 10,300 unidades, menos del 2%, estaban vacías por uso de temporada u ocasional. Cerca del 15% de los residentes tiene 65 años o más. Esto no es una costa de temporada como Venice. La ciudad de Tampa, que tiene su propia página, está ocupada por el dueño en cerca de la mitad y tiene cerca del 16% en torres. Una casa en Brandon, una casa en Plant City y un condominio en Tampa no son una sola forma.' },
        { type: 'p', text: 'El condado no está en la High-Velocity Hurricane Zone. La sección 1620 del Código de Construcción de Florida limita esa zona a Miami-Dade y Broward. La velocidad de viento de diseño sale de los mapas del código y cambia por lote y categoría de riesgo. Esta página no imprime una sola cifra en millas por hora desde Ruskin hasta Plant City.' },
        { type: 'p', text: 'Atendemos el condado a distancia desde Florida City. Aquí no hay oficina. El único tiempo de manejo que calculamos es hasta el ayuntamiento de Tampa: unas 300 millas y unas 5 horas y 30 minutos sin tráfico pesado. No publicamos un tiempo distinto para cada comunidad de esta página.' },
      ],
      checklistTitle: 'Lo que revisamos en el condado de Hillsborough',
      checklist: [
        '**La forma y el lugar.** Un HO-3 para una casa separada, un HO-6 para un condominio de Tampa y la forma de casa manufacturada para cerca del 6% de las unidades del condado.',
        '**La comunidad del NFIP.** El Hillsborough no incorporado es clase 4 desde el 1 de octubre de 2026. Tampa es clase 5 desde el 1 de octubre de 2019. Temple Terrace es clase 7. Plant City es clase 6.',
        '**La fecha de mapa de esa comunidad.** Tampa y el condado no incorporado listan el 7 de octubre de 2021. Temple Terrace y Plant City listan el 28 de agosto de 2008.',
        '**Mitigación de viento en el formulario OIR-B1-1802.** Fuera de la HVHZ, los créditos siguen el formulario.',
        '**El deducible de huracán**, $500 o 2%, 5% o 10% del límite de la vivienda, una vez por año calendario.',
        '**La edad del techo** frente a un año mediano de 1991, no frente a un solo techo del condado.',
        '**En un condominio, las exclusiones de la póliza maestra** y el loss assessment por encima del piso de $2,000. Las facturas de hito y de reservas en general no son ese reclamo.',
        '**Inundación en una póliza aparte.** Los medidores de la bahía en Helene no son una profundidad para una casa del interior.',
      ],
      body: [
        { type: 'h2', text: 'El formulario de viento es del estado. La clase de inundación es local.' },
        { type: 'p', text: 'Una inspección de mitigación de viento anota la cubierta del techo, la fijación de la plataforma, la conexión del techo a las paredes, la forma del techo, la resistencia secundaria al agua y la protección de las aberturas. El estatuto 627.0629 exige que la aseguradora refleje los créditos de lo que el formulario documenta. Este condado está fuera de la High-Velocity Hurricane Zone, así que el formulario no es un Notice of Acceptance de Miami-Dade. Envíelo si lo tiene. My Safe Florida Home es un programa estatal aparte de inspecciones y subsidios. Un subsidio no es automático, y esta página no promete uno. Los deducibles de huracán se ofrecen en $500 o en 2%, 5% o 10% del límite de la vivienda y se aplican una vez por año calendario. En pólizas emitidas o renovadas desde el 1 de julio de 2022, una aseguradora no puede rechazar la cobertura solo porque el techo tiene menos de 15 años. Un techo más viejo igual puede ser valor real. La cobertura de ley y ordenanza es la parte que puede pagar reconstruir al código vigente. Con un año mediano de 1991, cerca de la mitad del inventario tiene edad para que la pregunta del código sea real, y una parte grande construida desde 2000 no es la misma conversación sobre el techo.' },
        { type: 'h2', text: 'Cuatro comunidades, no una clase' },
        { type: 'p', text: 'Ninguna póliza de casa y ningún HO-6 cubren inundación, incluida la marejada. El Community Status Book de FEMA es la lista que usamos para la clase y la fecha del mapa. El condado de Hillsborough no incorporado, comunidad 120112, tiene una fecha vigente de mapa del 7 de octubre de 2021 y es CRS clase 4, con esa clase efectiva desde el 1 de octubre de 2026. La ciudad de Tampa, comunidad 120114, tiene la misma fecha de mapa y es clase 5, con esa clase efectiva desde el 1 de octubre de 2019. La página de aguas pluviales de la ciudad también describe a Tampa como clase 5. Temple Terrace es clase 7, con esa clase efectiva desde el 1 de octubre de 2026, y una fecha de mapa del 28 de agosto de 2008. Plant City es clase 6, con esa clase efectiva desde el 1 de abril de 2025, y el libro muestra una fecha de mapa del 28 de agosto de 2008 marcada (M). No tratamos esa marca como el estudio costero del 7 de octubre de 2021. La clase califica un programa de llanura de inundación. No es un límite de cobertura y no mete la inundación en la póliza de casa. Una dirección de Brandon en el condado no incorporado no es la clase de Tampa. El condado dice que los mapas costeros del 7 de octubre de 2021 reemplazaron un análisis que la actualización de todo el condado en 2008 no había rehecho.' },
        { type: 'p', text: 'Cerca del 7% de las unidades del condado están en edificios de 50 o más, y esa parte es más alta dentro de Tampa. El estatuto 718.111(11) exige que la asociación asegure el edificio y excluya el interior de la unidad. Ese interior es un HO-6. El estatuto 627.714 exige al menos $2,000 de cobertura de loss assessment. Los edificios de tres pisos habitables o más necesitan una inspección de hito, en general a los 30 años y cada 10 después, o a los 25 si el funcionario local lo exige, más un estudio de reservas de integridad estructural al menos cada 10 años. Una cuota para reservas o para reparaciones de la inspección en general no es un reclamo de loss assessment. Helene puso de 5 a 7 pies de inundación en Tampa Bay y 7.2 pies por encima de la pleamar media más alta en East Bay. Esa es la historia de agua de la costa. No es una profundidad medida para Plant City. Milton, que entró a tierra en Siesta Key dos semanas después, lo describe el Centro Nacional de Huracanes como cerca de 1 a 2 pies de inundación en la bahía. Una póliza del NFIP normalmente tarda 30 días en empezar, salvo que esté atada al cierre de un préstamo. Los topes del programa son $250,000 para el edificio y $100,000 para el contenido. Esos topes no son un estimado de reconstrucción. Los reclamos de propiedad tienen reloj: el aviso de un reclamo nuevo en general vence en un año, y los suplementarios en 18 meses. M&K Agency es una agencia familiar, con un equipo de 12 personas y más de 5,000 clientes en toda Florida. **Envíenos su póliza y la revisamos.**' },
      ],
      officeTitle: 'El condado de Hillsborough, desde Florida City',
      office: [
        { type: 'p', text: 'No tenemos oficina en el condado de Hillsborough. La oficina está en **33550 S Dixie Hwy, Suite 102, Florida City, FL 33034**. El ayuntamiento de Tampa queda a unas 300 millas y unas 5 horas y 30 minutos sin tráfico pesado. No calculamos un trayecto distinto para Brandon, Plant City o Ruskin. Los clientes envían las declaraciones, el formulario de mitigación de viento y, si es un condominio, el certificado de la asociación por WhatsApp, texto o correo. Nombre la ciudad. La revisión a distancia es la forma de atender el condado. La visita es con cita.' },
        { type: 'p', text: 'Horario: lunes a viernes de 9 a 6, sábados con cita. Llame al (305) 859-3953 o escriba por WhatsApp al (971) 998-7313. En horario de oficina un agente devuelve la llamada en menos de una hora.' },
      ],
      faqTitle: 'Seguro de casa en el condado de Hillsborough: preguntas',
      faq: [
        { q: '¿Todo el condado es CRS clase 4?', a: 'No. El condado de Hillsborough no incorporado es clase 4 desde el 1 de octubre de 2026. La ciudad de Tampa es clase 5 desde el 1 de octubre de 2019. Temple Terrace es clase 7, y Plant City es clase 6. La clase no es un límite de cobertura. Use la comunidad de la dirección.' },
        { q: '¿El condado de Hillsborough está en la High-Velocity Hurricane Zone?', a: 'No. Solo Miami-Dade y Broward lo están. No citamos una sola velocidad de viento de diseño desde la bahía hasta Plant City. Un formulario de mitigación de viento igual documenta el techo y las aberturas del edificio que usted tiene.' },
        { q: '¿Qué mapa de inundación está vigente?', a: 'El 7 de octubre de 2021 para la ciudad de Tampa y para el condado de Hillsborough no incorporado. El libro lista el 28 de agosto de 2008 para Temple Terrace y para Plant City. La inundación no forma parte de una póliza de casa ni de un HO-6. La lectura de 7.2 pies en East Bay durante Helene es un medidor de la bahía, no una profundidad para cada casa del interior.' },
        { q: '¿La página de Tampa cubre Brandon?', a: 'No. Tampa tiene su propia página de casa. Brandon, Riverview, Temple Terrace, Plant City, Lutz, Town \'n\' Country, Sun City Center, Ruskin y Apollo Beach aparecen aquí sin página. Envíe la dirección. Un expediente de Brandon no incorporado es la clase CRS del condado, no la de Tampa.' },
        { q: '¿Pueden revisar una póliza si nunca manejo hasta Florida City?', a: 'Sí. Así se atiende el condado. El ayuntamiento de Tampa queda a unas 5 horas y 30 minutos sin tráfico pesado, y no publicamos un tiempo más corto para las demás comunidades. No tenemos oficina en el condado y no prometemos colocar una póliza hasta leer el expediente.' },
      ],
      sources: sources('es', [...SRC]),
    },
    ru: {
      metaTitle: 'Страховка дома округа Hillsborough | M&K',
      metaDesc: 'Страховка дома в округе Hillsborough: карты 2021 года, класс CRS по городу, вне HVHZ. Проверка полиса удалённо из Florida City.',
      breadcrumb: 'Округ Hillsborough',
      kicker: 'Страховка дома и кондо · округ Hillsborough',
      h1a: 'Страховка дома в округе Hillsborough —',
      h1b: 'одна дата карты у залива и больше одного класса затопления.',
      sub: 'Tampa — класс 5. Неинкорпорированный Hillsborough — класс 4. Temple Terrace и Plant City — ни то ни другое. Адрес читаем из Florida City. По-русски, по-английски или по-испански.',
      serviceType: 'Страхование дома и кондоминиума',
      intro: [
        { type: 'h2', text: 'Большой округ домов, обслуживание в пяти часах пути' },
        { type: 'p', text: 'По оценке Census за 2020–2024 годы в округе Hillsborough около 631 000 единиц жилья и около 1,52 миллиона жителей. Около 57% — отдельные дома и около 8% — с общей стеной. Около 7% — в зданиях на 50 квартир и больше. Мобильных домов около 40 800, примерно 6%. Медианный год постройки — 1991, и около 49% построено до 1990 года. Около 38% построено в 2000 году или позже. Среди занятого жилья около 61% живут владельцы. Около 10 300 единиц, меньше 2%, пустовали как сезонное или редкое жильё. Около 15% жителей старше 65 лет. Это не сезонный берег в том смысле, в каком им является Venice. Город Tampa, у которого есть своя страница, примерно наполовину занят владельцами, и около 16% фонда — башни. Дом в Brandon, дом в Plant City и кондо в Tampa — не одна форма.' },
        { type: 'p', text: 'Округ не входит в High-Velocity Hurricane Zone. Раздел 1620 Florida Building Code ограничивает эту зону округами Miami-Dade и Broward. Расчётная скорость ветра берётся с карт кода и меняется по участку и категории риска. На этой странице нет одной цифры в милях в час от Ruskin до Plant City.' },
        { type: 'p', text: 'Округ мы обслуживаем удалённо из Florida City. Офиса здесь нет. Единственное время в пути, которое мы посчитали, — до Tampa City Hall: около 300 миль и около 5 часов 30 минут без плотного трафика. Отдельное время для каждого места на этой странице мы не публикуем.' },
      ],
      checklistTitle: 'Что мы проверяем по округу Hillsborough',
      checklist: [
        '**Форма и место.** HO-3 для отдельного дома, HO-6 для кондо в Tampa и форма мобильного дома для около 6% единиц округа.',
        '**Сообщество NFIP.** Неинкорпорированный Hillsborough — класс 4 с 1 октября 2026 года. Tampa — класс 5 с 1 октября 2019 года. Temple Terrace — класс 7. Plant City — класс 6.',
        '**Дата карты этого сообщества.** У Tampa и неинкорпорированного округа — 7 октября 2021 года. У Temple Terrace и Plant City — 28 августа 2008 года.',
        '**Wind mitigation по форме OIR-B1-1802.** Вне HVHZ кредиты идут по форме.',
        '**Ураганная франшиза**, $500 или 2%, 5% или 10% от лимита здания, один раз за календарный год.',
        '**Возраст крыши** против медианного года 1991, а не против одной крыши на весь округ.',
        '**В кондо — исключения мастер-полиса** и loss assessment выше порога $2 000. Счета за milestone и резервы, как правило, не этот клейм.',
        '**Наводнение отдельным полисом.** Датчики залива при Helene — не глубина для дома в глубине округа.',
      ],
      body: [
        { type: 'h2', text: 'Форма по ветру — на весь штат. Класс затопления — местный.' },
        { type: 'p', text: 'Инспекция wind mitigation фиксирует покрытие крыши, крепление настила, связь крыши со стенами, форму крыши, вторичную защиту от воды и защиту проёмов. Статут 627.0629 требует, чтобы страховая отразила кредиты за то, что форма документирует. Этот округ вне High-Velocity Hurricane Zone, поэтому форма — не Notice of Acceptance округа Miami-Dade. Пришлите её, если она есть. My Safe Florida Home — отдельная государственная программа инспекций и грантов. Грант не автоматический, и эта страница его не обещает. Ураганную франшизу предлагают как $500 или как 2%, 5% или 10% от лимита здания, и она применяется один раз за календарный год. Для полисов, выданных или продлённых с 1 июля 2022 года, страховая не может отказать в покрытии только потому, что крыше меньше 15 лет. Более старую крышу всё равно могут считать по actual cash value. Law and ordinance — часть, которая может оплатить перестройку по действующему коду. При медианном годе 1991 около половины фонда достаточно старо, чтобы вопрос кода был настоящим, а большая доля построек с 2000 года — это уже другой разговор про крышу.' },
        { type: 'h2', text: 'Четыре сообщества, не один класс' },
        { type: 'p', text: 'Ни полис домовладельца, ни HO-6 не покрывают наводнение, включая штормовой нагон. Community Status Book FEMA — список, по которому мы берём класс и дату карты. Неинкорпорированный округ Hillsborough, сообщество 120112, имеет действующую дату карты 7 октября 2021 года и CRS класс 4; этот класс действует с 1 октября 2026 года. Город Tampa, сообщество 120114, имеет ту же дату карты и класс 5; этот класс действует с 1 октября 2019 года. Городская страница ливневой службы тоже описывает Tampa как класс 5. Temple Terrace — класс 7, класс действует с 1 октября 2026 года, дата карты 28 августа 2008 года. Plant City — класс 6, класс действует с 1 апреля 2025 года, и книга показывает дату карты 28 августа 2008 года с пометкой (M). Мы не считаем эту пометку береговым исследованием от 7 октября 2021 года. Класс оценивает программу по пойме. Это не лимит покрытия, и наводнение в полис дома он не переносит. Адрес в Brandon в неинкорпорированном округе — не класс Tampa. Округ пишет, что береговые карты от 7 октября 2021 года заменили анализ, который окружное обновление 2008 года не пересчитывало.' },
        { type: 'p', text: 'Около 7% единиц округа — в зданиях на 50 квартир и больше, и внутри Tampa эта доля выше. Статут 718.111(11) требует, чтобы ассоциация страховала здание и исключала интерьер квартиры. Этот интерьер — HO-6. Статут 627.714 требует не меньше $2 000 покрытия loss assessment. Зданиям от трёх жилых этажей нужна milestone inspection, как правило в 30 лет и затем каждые 10, или в 25, если местный чиновник так требует, плюс structural integrity reserve study не реже чем раз в 10 лет. Взнос на резервы или на ремонт по инспекции, как правило, не является клеймом loss assessment. Helene дал 5–7 футов затопления в Tampa Bay и 7,2 фута выше средней высшей полной воды на East Bay. Это береговая история воды. Это не измеренная глубина для Plant City. Milton, вышедший на сушу у Siesta Key две недели спустя, Национальный центр ураганов описывает как около 1–2 футов затопления в заливе. Полис NFIP обычно начинает действовать через 30 дней, если он не привязан к закрытию кредита. Потолки программы — $250 000 на здание и $100 000 на имущество. Это не смета перестройки. У имущественного клейма есть срок: извещение о новом клейме, как правило, в течение года, дополнительный клейм — в течение 18 месяцев. M&K Agency — семейное агентство: в команде 12 человек и больше 5 000 клиентов по всей Флориде. **Пришлите нам свой полис — мы проверим покрытие.**' },
      ],
      officeTitle: 'Округ Hillsborough обслуживаем из Florida City',
      office: [
        { type: 'p', text: 'Офиса в округе Hillsborough нет. Офис — **33550 S Dixie Hwy, Suite 102, Florida City, FL 33034**. До Tampa City Hall около 300 миль и около 5 часов 30 минут без плотного трафика. Отдельный путь для Brandon, Plant City или Ruskin мы не считали. Клиенты присылают declarations, форму wind mitigation и, для кондо, сертификат ассоциации в WhatsApp, по SMS или почте. Назовите город. Удалённая проверка — способ обслуживания округа. Визит — по записи.' },
        { type: 'p', text: 'Часы: понедельник–пятница с 9 до 6, суббота по записи. Телефон (305) 859-3953, WhatsApp (971) 998-7313. В рабочее время агент перезванивает в течение часа.' },
      ],
      faqTitle: 'Страховка дома в округе Hillsborough: вопросы',
      faq: [
        { q: 'Весь округ — CRS класс 4?', a: 'Нет. Неинкорпорированный округ Hillsborough — класс 4 с 1 октября 2026 года. Город Tampa — класс 5 с 1 октября 2019 года. Temple Terrace — класс 7, Plant City — класс 6. Класс — не лимит покрытия. Берите сообщество по адресу.' },
        { q: 'Округ Hillsborough входит в High-Velocity Hurricane Zone?', a: 'Нет. Туда входят только Miami-Dade и Broward. Одну расчётную скорость ветра от залива до Plant City мы не называем. Форма wind mitigation всё равно фиксирует крышу и проёмы того здания, которое у вас есть.' },
        { q: 'Какая карта затопления действует?', a: '7 октября 2021 года для города Tampa и для неинкорпорированного округа Hillsborough. Книга указывает 28 августа 2008 года для Temple Terrace и для Plant City. Наводнение не входит в полис дома и в HO-6. Показание East Bay 7,2 фута во время Helene — датчик залива, а не глубина для каждого дома в глубине округа.' },
        { q: 'Страница Tampa закрывает Brandon?', a: 'Нет. У Tampa своя страница страховки дома. Brandon, Riverview, Temple Terrace, Plant City, Lutz, Town \'n\' Country, Sun City Center, Ruskin и Apollo Beach перечислены здесь без страницы. Пришлите адрес. Дело по неинкорпорированному Brandon — это класс CRS округа, не класс Tampa.' },
        { q: 'Можно проверить полис, не приезжая во Florida City?', a: 'Да. Так округ и обслуживается. До Tampa City Hall около 5 часов 30 минут без плотного трафика, и более короткое время для других мест мы не публикуем. Офиса в округе нет, и полис мы не обещаем, пока не прочитаем дело.' },
      ],
      sources: sources('ru', [...SRC]),
    },
  },
};
