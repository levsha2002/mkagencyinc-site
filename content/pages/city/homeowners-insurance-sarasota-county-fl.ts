import type { CityPage } from './types';
import { sources } from './sources';

// /[lang]/homeowners-insurance-sarasota-county-fl. Facts checked 2026-11-18.
// ACS county: units 266,492; detached 57.5%; 50+ 6.8%; mobile 22,112 (8.3%);
// median 1988; pre-1990 54.3%; owner 76.7%; seasonal 40,327 (15.1%); age 65+ 37.5%.
// Sarasota city, no page: units 32,324; detached 39%; 50+ 20.7%; median 1976; owner 57.5%; seasonal 14.5%.
// FEMA CIS map date 03/27/2024 for county, North Port, Venice, Sarasota city, Longboat Key.
// CRS: county class 5 eff. 05/01/2007; North Port 5 eff. 05/01/2020; Venice 5 eff. 04/01/2025;
// Sarasota city 5 eff. 04/01/2022; Longboat Key 6 eff. 05/01/2020.
// Not HVHZ. No single wind speed. Remote: North Port ~4 h, Sarasota City Hall ~4 h 40 min.
const SRC = ['acsSarasota', 'acsSarasotaCity', 'fbcHvhz', 'femaCis', 'sarasotaFirm', 'scgovFirm', 'windForm', 'mitigation', 'roofAge', 'deductibles', 'claimDeadline', 'condoMaster', 'lossAssessment', 'condoInspections', 'floodsmart', 'nhcIan', 'nhcMilton', 'msfh'] as const;

export const HOME_SARASOTA: CityPage = {
  path: '/homeowners-insurance-sarasota-county-fl',
  line: 'home',
  kind: 'county',
  area: 'sarasota',
  heroImage: 'home-01',
  published: '2026-11-18',
  modified: '2026-11-18',
  served: [
    { name: 'North Port', path: '/homeowners-insurance-north-port-fl' },
    { name: 'Venice', path: '/homeowners-insurance-venice-fl' },
    { name: 'Sarasota' },
    { name: 'Siesta Key' },
    { name: 'Longboat Key' },
    { name: 'Osprey' },
    { name: 'Nokomis' },
    { name: 'Englewood' },
    { name: 'Laurel' },
    { name: 'Warm Mineral Springs' },
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Sarasota County, FL' },
  ],
  copy: {
    en: {
      metaTitle: 'Home Insurance in Sarasota County, FL | M&K Agency',
      metaDesc: 'Home insurance in Sarasota County: outside the HVHZ, March 2024 flood maps, CRS classes by city. Reviewed remotely from Florida City.',
      breadcrumb: 'Sarasota County',
      kicker: 'Home & condo insurance · Sarasota County',
      h1a: 'Home insurance in Sarasota County,',
      h1b: 'outside the high-velocity zone, read from Florida City.',
      sub: 'Houses in North Port, condos in the city of Sarasota, manufactured homes across the county. The flood class is not one number. Send the policy. English, Spanish or Russian.',
      serviceType: 'Homeowners and condo insurance',
      intro: [
        { type: 'h2', text: 'A county of houses, with a condo city inside it' },
        { type: 'p', text: 'The 2020–2024 Census estimates count about 266,000 housing units in Sarasota County and about 460,000 residents. About 57% of units are detached houses and about 10% are attached. About 7% are in buildings with 50 or more units. Manufactured homes are about 22,100 units, roughly 8%. The median year built is 1988, and about 54% of units were built before 1990. Of the occupied homes, about 77% are owner-occupied. About 40,300 units, roughly 15%, were vacant for seasonal or occasional use. About 38% of residents are 65 or older. The city of Sarasota, which does not have its own page yet, is a different mix: about 32,300 units, only about 39% detached, about 21% in buildings of 50 or more, a median year of 1976, and about 57% of occupied homes owner-occupied. Seasonal vacancy in the city is about 14%. North Port, which does have a page, is the newer detached-house end of the same county. Do not insure a downtown Sarasota condo on the assumptions that fit a 2005 house in North Port.' },
        { type: 'p', text: 'The county is not in the High-Velocity Hurricane Zone. Section 1620 of the Florida Building Code limits that zone to Miami-Dade and Broward. Design wind speed comes from the code maps and changes by parcel and risk category. This page does not print one miles-per-hour number from Englewood to Longboat Key.' },
        { type: 'p', text: 'We serve the county remotely from Florida City. There is no office here. North Port City Hall is about 218 miles and about 4 hours in light traffic. Sarasota City Hall is about 250 miles and about 4 hours 40 minutes. Phone, WhatsApp, text and email are the main path.' },
      ],
      checklistTitle: 'What we check across Sarasota County',
      checklist: [
        '**The form and the city.** An HO-3 in North Port, an HO-6 in the city of Sarasota, and a manufactured-home form where the building is one. About 8% of county units are manufactured homes.',
        '**The NFIP community, not just the county name.** Several places share a March 27, 2024 map date and do not share one CRS class date. Longboat Key is Class 6.',
        '**Wind mitigation on form OIR-B1-1802.** Outside the HVHZ, credits follow the form.',
        '**The hurricane deductible**, $500 or 2%, 5% or 10% of the dwelling limit, once per calendar year.',
        '**Roof age.** A median year of 1988 means many roofs are in actual-cash-value territory. A 2000s roof in North Port can be there too.',
        '**On a condo, the master-policy exclusions**, the HO-6, and loss assessment above the $2,000 floor. Milestone and reserve bills are generally not that claim.',
        '**Flood on a separate policy.** The 2024 maps added a Limit of Moderate Wave Action. They did not change hurricane evacuation levels.',
        '**Seasonal use.** About 15% of county units were vacant for seasonal use. The rule is in the policy.',
      ],
      body: [
        { type: 'h2', text: 'One wind form, and no single design speed' },
        { type: 'p', text: 'A wind-mitigation inspection records roof covering, roof deck attachment, roof-to-wall connection, roof geometry, secondary water resistance and opening protection. Florida Statute 627.0629 requires insurers to reflect the credits for what the form actually documents. This county is outside the High-Velocity Hurricane Zone, so the form is not a Miami-Dade Notice of Acceptance. Send it if you have it. My Safe Florida Home is a separate state program of inspections and grants. A grant is not automatic, and this page does not promise one. Hurricane deductibles are offered at $500 or at 2%, 5% or 10% of the dwelling limit and apply once per calendar year. For policies issued or renewed since July 1, 2022, an insurer cannot refuse coverage only because the roof is under 15 years old. An older roof can still be actual cash value. Law and ordinance coverage is the part that can pay to rebuild to the current code. On a pre-1990 house in the city of Sarasota, and on an older roof in a newer North Port subdivision, check that limit. They are not the same house.' },
        { type: 'h2', text: 'The map date is shared. The class is not.' },
        { type: 'p', text: 'No homeowners policy and no HO-6 covers flood, including storm surge and river flooding. FEMA’s Community Status Book lists March 27, 2024 as the current flood-map date for unincorporated Sarasota County and for the cities of North Port, Venice and Sarasota, and for the Town of Longboat Key. The City of Sarasota says those maps replaced the November 4, 2016 panels and show a Limit of Moderate Wave Action. The county’s notice says the update does not change hurricane evacuation levels. A flood zone and an evacuation level are different maps. The CRS class is also not one county figure. On the current status book, unincorporated Sarasota County is Class 5 with that class effective May 1, 2007. North Port is Class 5 effective May 1, 2020. The City of Venice is Class 5 effective April 1, 2025. The City of Sarasota is Class 5 effective April 1, 2022. Longboat Key is Class 6 effective May 1, 2020. The class rates a community’s floodplain program. It is not a coverage limit, and it does not put flood on the house policy. South Venice, covered on the Venice page, is in the unincorporated county’s community, not in the City of Venice’s.' },
        { type: 'p', text: 'About 7% of county units are in buildings of 50 or more, and that share rises to about 21% in the city of Sarasota. Florida Statute 718.111(11) requires the association to insure the building and to exclude the unit interior. That interior is an HO-6. Statute 627.714 requires at least $2,000 of loss-assessment coverage. Buildings of three or more habitable stories need a milestone inspection, generally at 30 years and every 10 years after, or at 25 if the local official requires it, plus a structural integrity reserve study at least every 10 years. An assessment for reserves or inspection repairs is generally not a loss-assessment claim. Hurricane Ian’s record river crests, and the I-75 closure in the south of the county, are the inland water story. Milton’s Category 3 landfall at Siesta Key on the evening of October 9, 2024 is the coastal one. Siesta Key has no page of its own. An NFIP policy usually takes 30 days to start unless it is tied to a loan closing. The program caps are $250,000 for the building and $100,000 for contents. Those caps are not a rebuilding estimate. Property claims have a clock: notice of a new claim is generally due within one year, supplemental claims within 18 months. M&K Agency is family-owned, with a team of 12 and more than 5,000 clients across Florida. **Send us your policy and we’ll check your coverage.**' },
      ],
      officeTitle: 'Sarasota County, served from Florida City',
      office: [
        { type: 'p', text: 'We do not have an office in Sarasota County. The office is at **33550 S Dixie Hwy, Suite 102, Florida City, FL 33034**. Light-traffic drives are about 4 hours to North Port and about 4 hours 40 minutes to Sarasota City Hall. Clients send the declarations, the wind-mitigation form and, for a condo, the association certificate by WhatsApp, text or email. Name the city. Remote review is how the county is served. A visit is by appointment.' },
        { type: 'p', text: 'Hours are Monday to Friday, 9 to 6, and Saturday by appointment. Call (305) 859-3953 or WhatsApp (971) 998-7313. During business hours an agent calls back within an hour.' },
      ],
      faqTitle: 'Home insurance in Sarasota County: common questions',
      faq: [
        { q: 'Is the whole county one CRS class?', a: 'No. The current FEMA status book rates unincorporated Sarasota County, North Port, Venice and the City of Sarasota as Class 5, with different effective dates, and Longboat Key as Class 6 effective May 1, 2020. The March 27, 2024 map date is shared. The class is not a coverage limit.' },
        { q: 'Is Sarasota County in the High-Velocity Hurricane Zone?', a: 'No. Only Miami-Dade and Broward are. We do not quote one design wind speed for the county. A wind-mitigation form still documents the roof and the openings on the house you actually own.' },
        { q: 'Which flood map is in effect?', a: 'March 27, 2024 for the county and for North Port, Venice, the City of Sarasota and Longboat Key. The maps include a Limit of Moderate Wave Action and, the county says, do not change hurricane evacuation levels. Flood is not part of a homeowners or HO-6 policy.' },
        { q: 'Does the city of Sarasota have its own page?', a: 'Not yet. North Port and Venice do. The city of Sarasota is listed here without a page. Its housing is older and more condominium-heavy than North Port: median year 1976, and about 21% of units in buildings of 50 or more. Send the address. We read that file the same way.' },
        { q: 'Can you review a policy if I never drive to Florida City?', a: 'Yes. That is how the county is served. North Port is about 4 hours away and Sarasota City Hall about 4 hours 40 minutes, in light traffic. We do not have an office in the county, and we do not promise a placement until we have read the file.' },
      ],
      sources: sources('en', [...SRC]),
    },
    es: {
      metaTitle: 'Seguro de Casa en el Condado Sarasota | M&K Agency',
      metaDesc: 'Seguro de casa en el condado de Sarasota: fuera de la HVHZ, mapas de marzo de 2024 y la clase CRS según la ciudad. Revisión a distancia desde Florida City.',
      breadcrumb: 'Condado Sarasota',
      kicker: 'Seguro de casa y condominio · Condado Sarasota',
      h1a: 'Seguro de casa en el condado de Sarasota,',
      h1b: 'fuera de la zona de alta velocidad, leído desde Florida City.',
      sub: 'Casas en North Port, condominios en la ciudad de Sarasota, casas manufacturadas en todo el condado. La clase de inundación no es un solo número. Envíe la póliza. En español, inglés o ruso.',
      serviceType: 'Seguro de vivienda y condominio',
      intro: [
        { type: 'h2', text: 'Un condado de casas, con una ciudad de condominios adentro' },
        { type: 'p', text: 'Las estimaciones del Censo de 2020–2024 cuentan unas 266,000 viviendas en el condado de Sarasota y unos 460,000 residentes. Cerca del 57% son casas separadas y cerca del 10% son adosadas. Cerca del 7% están en edificios de 50 unidades o más. Las casas manufacturadas son unas 22,100 unidades, cerca del 8%. El año mediano de construcción es 1988, y cerca del 54% es anterior a 1990. De las viviendas ocupadas, cerca del 77% las ocupa el dueño. Unas 40,300 unidades, cerca del 15%, estaban vacías por uso de temporada u ocasional. Cerca del 38% de los residentes tiene 65 años o más. La ciudad de Sarasota, que todavía no tiene página propia, es otra mezcla: unas 32,300 unidades, solo cerca del 39% separadas, cerca del 21% en edificios de 50 o más, un año mediano de 1976 y cerca del 57% de las viviendas ocupadas en manos del dueño. La vacancia de temporada en la ciudad es de cerca del 14%. North Port, que sí tiene página, es el extremo de casas separadas y más nuevas del mismo condado. No asegure un condominio del centro de Sarasota con las suposiciones que caben en una casa de 2005 en North Port.' },
        { type: 'p', text: 'El condado no está en la High-Velocity Hurricane Zone. La sección 1620 del Código de Construcción de Florida limita esa zona a Miami-Dade y Broward. La velocidad de viento de diseño sale de los mapas del código y cambia por lote y categoría de riesgo. Esta página no imprime una sola cifra en millas por hora desde Englewood hasta Longboat Key.' },
        { type: 'p', text: 'Atendemos el condado a distancia desde Florida City. Aquí no hay oficina. El ayuntamiento de North Port queda a unas 218 millas y unas 4 horas sin tráfico pesado. El de la ciudad de Sarasota queda a unas 250 millas y unas 4 horas y 40 minutos. Teléfono, WhatsApp, texto y correo son la vía principal.' },
      ],
      checklistTitle: 'Lo que revisamos en el condado de Sarasota',
      checklist: [
        '**La forma y la ciudad.** Un HO-3 en North Port, un HO-6 en la ciudad de Sarasota y la forma de casa manufacturada cuando el edificio lo es. Cerca del 8% de las unidades del condado son casas manufacturadas.',
        '**La comunidad del NFIP, no solo el nombre del condado.** Varios lugares comparten la fecha de mapa del 27 de marzo de 2024 y no comparten una sola fecha de clase CRS. Longboat Key es clase 6.',
        '**Mitigación de viento en el formulario OIR-B1-1802.** Fuera de la HVHZ, los créditos siguen el formulario.',
        '**El deducible de huracán**, $500 o 2%, 5% o 10% del límite de la vivienda, una vez por año calendario.',
        '**La edad del techo.** Un año mediano de 1988 quiere decir que muchos techos están en territorio de valor real. Un techo de la década de 2000 en North Port también puede estarlo.',
        '**En un condominio, las exclusiones de la póliza maestra**, el HO-6 y el loss assessment por encima del piso de $2,000. Las facturas de hito y de reservas en general no son ese reclamo.',
        '**Inundación en una póliza aparte.** Los mapas de 2024 agregaron una Limit of Moderate Wave Action. No cambiaron los niveles de evacuación por huracán.',
        '**Uso de temporada.** Cerca del 15% de las unidades del condado estaba vacío por uso de temporada. La regla está en la póliza.',
      ],
      body: [
        { type: 'h2', text: 'Un formulario de viento, y ninguna velocidad única de diseño' },
        { type: 'p', text: 'Una inspección de mitigación de viento anota la cubierta del techo, la fijación de la plataforma, la conexión del techo a las paredes, la forma del techo, la resistencia secundaria al agua y la protección de las aberturas. El estatuto 627.0629 exige que la aseguradora refleje los créditos de lo que el formulario documenta. Este condado está fuera de la High-Velocity Hurricane Zone, así que el formulario no es un Notice of Acceptance de Miami-Dade. Envíelo si lo tiene. My Safe Florida Home es un programa estatal aparte de inspecciones y subsidios. Un subsidio no es automático, y esta página no promete uno. Los deducibles de huracán se ofrecen en $500 o en 2%, 5% o 10% del límite de la vivienda y se aplican una vez por año calendario. En pólizas emitidas o renovadas desde el 1 de julio de 2022, una aseguradora no puede rechazar la cobertura solo porque el techo tiene menos de 15 años. Un techo más viejo igual puede ser valor real. La cobertura de ley y ordenanza es la parte que puede pagar reconstruir al código vigente. En una casa anterior a 1990 en la ciudad de Sarasota, y en un techo más viejo de una urbanización nueva de North Port, revise ese límite. No son la misma casa.' },
        { type: 'h2', text: 'La fecha del mapa se comparte. La clase no.' },
        { type: 'p', text: 'Ninguna póliza de casa y ningún HO-6 cubren inundación, incluida la marejada y la crecida de un río. El Community Status Book de FEMA lista el 27 de marzo de 2024 como la fecha vigente del mapa para el condado de Sarasota no incorporado y para las ciudades de North Port, Venice y Sarasota, y para el pueblo de Longboat Key. La ciudad de Sarasota dice que esos mapas reemplazaron los paneles del 4 de noviembre de 2016 y muestran una Limit of Moderate Wave Action. El aviso del condado dice que la actualización no cambia los niveles de evacuación por huracán. Una zona de inundación y un nivel de evacuación son mapas distintos. La clase CRS tampoco es una sola cifra del condado. En el libro vigente, el condado de Sarasota no incorporado es clase 5 con esa clase efectiva desde el 1 de mayo de 2007. North Port es clase 5 desde el 1 de mayo de 2020. La ciudad de Venice es clase 5 desde el 1 de abril de 2025. La ciudad de Sarasota es clase 5 desde el 1 de abril de 2022. Longboat Key es clase 6 desde el 1 de mayo de 2020. La clase califica el programa de llanura de inundación de una comunidad. No es un límite de cobertura y no mete la inundación en la póliza de casa. South Venice, que cubre la página de Venice, está en la comunidad del condado no incorporado, no en la de la ciudad de Venice.' },
        { type: 'p', text: 'Cerca del 7% de las unidades del condado están en edificios de 50 o más, y esa parte sube a cerca del 21% en la ciudad de Sarasota. El estatuto 718.111(11) exige que la asociación asegure el edificio y excluya el interior de la unidad. Ese interior es un HO-6. El estatuto 627.714 exige al menos $2,000 de cobertura de loss assessment. Los edificios de tres pisos habitables o más necesitan una inspección de hito, en general a los 30 años y cada 10 después, o a los 25 si el funcionario local lo exige, más un estudio de reservas de integridad estructural al menos cada 10 años. Una cuota para reservas o para reparaciones de la inspección en general no es un reclamo de loss assessment. Las crestas récord de los ríos en el huracán Ian, y el cierre de la I-75 en el sur del condado, son la historia de agua tierra adentro. La entrada a tierra de Milton como categoría 3 en Siesta Key, en la tarde del 9 de octubre de 2024, es la costera. Siesta Key no tiene página propia. Una póliza del NFIP normalmente tarda 30 días en empezar, salvo que esté atada al cierre de un préstamo. Los topes del programa son $250,000 para el edificio y $100,000 para el contenido. Esos topes no son un estimado de reconstrucción. Los reclamos de propiedad tienen reloj: el aviso de un reclamo nuevo en general vence en un año, y los suplementarios en 18 meses. M&K Agency es una agencia familiar, con un equipo de 12 personas y más de 5,000 clientes en toda Florida. **Envíenos su póliza y la revisamos.**' },
      ],
      officeTitle: 'El condado de Sarasota, desde Florida City',
      office: [
        { type: 'p', text: 'No tenemos oficina en el condado de Sarasota. La oficina está en **33550 S Dixie Hwy, Suite 102, Florida City, FL 33034**. Los trayectos sin tráfico pesado son de unas 4 horas hasta North Port y unas 4 horas y 40 minutos hasta el ayuntamiento de Sarasota. Los clientes envían las declaraciones, el formulario de mitigación de viento y, si es un condominio, el certificado de la asociación por WhatsApp, texto o correo. Nombre la ciudad. La revisión a distancia es la forma de atender el condado. La visita es con cita.' },
        { type: 'p', text: 'Horario: lunes a viernes de 9 a 6, sábados con cita. Llame al (305) 859-3953 o escriba por WhatsApp al (971) 998-7313. En horario de oficina un agente devuelve la llamada en menos de una hora.' },
      ],
      faqTitle: 'Seguro de casa en el condado de Sarasota: preguntas',
      faq: [
        { q: '¿Todo el condado es una sola clase CRS?', a: 'No. El libro vigente de FEMA califica al condado de Sarasota no incorporado, a North Port, a Venice y a la ciudad de Sarasota como clase 5, con fechas efectivas distintas, y a Longboat Key como clase 6 desde el 1 de mayo de 2020. La fecha de mapa del 27 de marzo de 2024 sí se comparte. La clase no es un límite de cobertura.' },
        { q: '¿El condado de Sarasota está en la High-Velocity Hurricane Zone?', a: 'No. Solo Miami-Dade y Broward lo están. No citamos una sola velocidad de viento de diseño para el condado. Un formulario de mitigación de viento igual documenta el techo y las aberturas de la casa que usted tiene.' },
        { q: '¿Qué mapa de inundación está vigente?', a: 'El 27 de marzo de 2024 para el condado y para North Port, Venice, la ciudad de Sarasota y Longboat Key. Los mapas incluyen una Limit of Moderate Wave Action y, dice el condado, no cambian los niveles de evacuación por huracán. La inundación no forma parte de una póliza de casa ni de un HO-6.' },
        { q: '¿La ciudad de Sarasota tiene su propia página?', a: 'Todavía no. North Port y Venice sí. La ciudad de Sarasota aparece aquí sin página. Su vivienda es más vieja y con más condominios que North Port: año mediano 1976, y cerca del 21% de las unidades en edificios de 50 o más. Envíe la dirección. Ese expediente lo leemos igual.' },
        { q: '¿Pueden revisar una póliza si nunca manejo hasta Florida City?', a: 'Sí. Así se atiende el condado. North Port queda a unas 4 horas y el ayuntamiento de Sarasota a unas 4 horas y 40 minutos, sin tráfico pesado. No tenemos oficina en el condado y no prometemos colocar una póliza hasta leer el expediente.' },
      ],
      sources: sources('es', [...SRC]),
    },
    ru: {
      metaTitle: 'Страховка дома округа Sarasota | M&K Agency',
      metaDesc: 'Страховка дома в округе Sarasota: вне HVHZ, карты марта 2024 года и класс CRS по городу. Проверка полиса удалённо из Florida City.',
      breadcrumb: 'Округ Sarasota',
      kicker: 'Страховка дома и кондо · округ Sarasota',
      h1a: 'Страховка дома в округе Sarasota —',
      h1b: 'вне зоны высокой скорости, разбор из Florida City.',
      sub: 'Дома в North Port, кондо в городе Sarasota, мобильные дома по округу. Класс затопления — не одна цифра. Пришлите полис. По-русски, по-английски или по-испански.',
      serviceType: 'Страхование дома и кондоминиума',
      intro: [
        { type: 'h2', text: 'Округ частных домов, и внутри него город кондоминиумов' },
        { type: 'p', text: 'По оценке Census за 2020–2024 годы в округе Sarasota около 266 000 единиц жилья и около 460 000 жителей. Около 57% — отдельные дома и около 10% — с общей стеной. Около 7% — в зданиях на 50 квартир и больше. Мобильных домов около 22 100, примерно 8%. Медианный год постройки — 1988, и около 54% построено до 1990 года. Среди занятого жилья около 77% живут владельцы. Около 40 300 единиц, примерно 15%, пустовали как сезонное или редкое жильё. Около 38% жителей старше 65 лет. Город Sarasota, своей страницы у него пока нет, — другая смесь: около 32 300 единиц, только около 39% отдельных домов, около 21% в зданиях на 50 квартир и больше, медианный год 1976, и около 57% занятого жилья у владельцев. Сезонная пустота в городе около 14%. North Port, у которого страница есть, — это более новый край отдельных домов того же округа. Не страхуйте кондо в центре Sarasota так, как будто это дом 2005 года в North Port.' },
        { type: 'p', text: 'Округ не входит в High-Velocity Hurricane Zone. Раздел 1620 Florida Building Code ограничивает эту зону округами Miami-Dade и Broward. Расчётная скорость ветра берётся с карт кода и меняется по участку и категории риска. На этой странице нет одной цифры в милях в час от Englewood до Longboat Key.' },
        { type: 'p', text: 'Округ мы обслуживаем удалённо из Florida City. Офиса здесь нет. До North Port City Hall около 218 миль и около 4 часов без плотного трафика. До Sarasota City Hall около 250 миль и около 4 часов 40 минут. Телефон, WhatsApp, SMS и почта — основной путь.' },
      ],
      checklistTitle: 'Что мы проверяем по округу Sarasota',
      checklist: [
        '**Форма и город.** HO-3 в North Port, HO-6 в городе Sarasota и форма мобильного дома, если здание такое. Около 8% единиц округа — мобильные дома.',
        '**Сообщество NFIP, а не только название округа.** Несколько мест делят дату карты 27 марта 2024 года и не делят одну дату класса CRS. Longboat Key — класс 6.',
        '**Wind mitigation по форме OIR-B1-1802.** Вне HVHZ кредиты идут по форме.',
        '**Ураганная франшиза**, $500 или 2%, 5% или 10% от лимита здания, один раз за календарный год.',
        '**Возраст крыши.** Медианный год 1988 значит, что многие крыши уже в зоне actual cash value. Крыша 2000-х в North Port тоже может там оказаться.',
        '**В кондо — исключения мастер-полиса**, HO-6 и loss assessment выше порога $2 000. Счета за milestone и резервы, как правило, не этот клейм.',
        '**Наводнение отдельным полисом.** Карты 2024 года добавили Limit of Moderate Wave Action. Уровни ураганной эвакуации они не меняли.',
        '**Сезонное жильё.** Около 15% единиц округа пустовали как сезонные. Правило — в полисе.',
      ],
      body: [
        { type: 'h2', text: 'Одна форма по ветру и ни одной общей расчётной скорости' },
        { type: 'p', text: 'Инспекция wind mitigation фиксирует покрытие крыши, крепление настила, связь крыши со стенами, форму крыши, вторичную защиту от воды и защиту проёмов. Статут 627.0629 требует, чтобы страховая отразила кредиты за то, что форма документирует. Этот округ вне High-Velocity Hurricane Zone, поэтому форма — не Notice of Acceptance округа Miami-Dade. Пришлите её, если она есть. My Safe Florida Home — отдельная государственная программа инспекций и грантов. Грант не автоматический, и эта страница его не обещает. Ураганную франшизу предлагают как $500 или как 2%, 5% или 10% от лимита здания, и она применяется один раз за календарный год. Для полисов, выданных или продлённых с 1 июля 2022 года, страховая не может отказать в покрытии только потому, что крыше меньше 15 лет. Более старую крышу всё равно могут считать по actual cash value. Law and ordinance — часть, которая может оплатить перестройку по действующему коду. На доме до 1990 года в городе Sarasota и на более старой крыше в новом районе North Port проверьте этот лимит. Это не один и тот же дом.' },
        { type: 'h2', text: 'Дату карты делят. Класс — нет.' },
        { type: 'p', text: 'Ни полис домовладельца, ни HO-6 не покрывают наводнение, включая штормовой нагон и речной паводок. Community Status Book FEMA указывает 27 марта 2024 года как действующую дату карты для неинкорпорированного округа Sarasota и для городов North Port, Venice и Sarasota, а также для Town of Longboat Key. Город Sarasota пишет, что эти карты заменили панели от 4 ноября 2016 года и показывают Limit of Moderate Wave Action. Сообщение округа говорит, что обновление не меняет уровни ураганной эвакуации. Зона затопления и уровень эвакуации — разные карты. Класс CRS тоже не одна окружная цифра. В действующей книге неинкорпорированный округ Sarasota — класс 5, и этот класс действует с 1 мая 2007 года. North Port — класс 5 с 1 мая 2020 года. Город Venice — класс 5 с 1 апреля 2025 года. Город Sarasota — класс 5 с 1 апреля 2022 года. Longboat Key — класс 6 с 1 мая 2020 года. Класс оценивает программу сообщества по пойме. Это не лимит покрытия, и наводнение в полис дома он не переносит. South Venice, который закрывает страница Venice, входит в сообщество неинкорпорированного округа, а не в сообщество города Venice.' },
        { type: 'p', text: 'Около 7% единиц округа — в зданиях на 50 квартир и больше, а в городе Sarasota эта доля около 21%. Статут 718.111(11) требует, чтобы ассоциация страховала здание и исключала интерьер квартиры. Этот интерьер — HO-6. Статут 627.714 требует не меньше $2 000 покрытия loss assessment. Зданиям от трёх жилых этажей нужна milestone inspection, как правило в 30 лет и затем каждые 10, или в 25, если местный чиновник так требует, плюс structural integrity reserve study не реже чем раз в 10 лет. Взнос на резервы или на ремонт по инспекции, как правило, не является клеймом loss assessment. Рекордные речные уровни урагана Ian и перекрытие I-75 на юге округа — это история воды в глубине. Выход Milton на сушу 3-й категории у Siesta Key вечером 9 октября 2024 года — береговая. У Siesta Key своей страницы нет. Полис NFIP обычно начинает действовать через 30 дней, если он не привязан к закрытию кредита. Потолки программы — $250 000 на здание и $100 000 на имущество. Это не смета перестройки. У имущественного клейма есть срок: извещение о новом клейме, как правило, в течение года, дополнительный клейм — в течение 18 месяцев. M&K Agency — семейное агентство: в команде 12 человек и больше 5 000 клиентов по всей Флориде. **Пришлите нам свой полис — мы проверим покрытие.**' },
      ],
      officeTitle: 'Округ Sarasota обслуживаем из Florida City',
      office: [
        { type: 'p', text: 'Офиса в округе Sarasota нет. Офис — **33550 S Dixie Hwy, Suite 102, Florida City, FL 33034**. Без плотного трафика до North Port около 4 часов, до Sarasota City Hall около 4 часов 40 минут. Клиенты присылают declarations, форму wind mitigation и, для кондо, сертификат ассоциации в WhatsApp, по SMS или почте. Назовите город. Удалённая проверка — способ обслуживания округа. Визит — по записи.' },
        { type: 'p', text: 'Часы: понедельник–пятница с 9 до 6, суббота по записи. Телефон (305) 859-3953, WhatsApp (971) 998-7313. В рабочее время агент перезванивает в течение часа.' },
      ],
      faqTitle: 'Страховка дома в округе Sarasota: вопросы',
      faq: [
        { q: 'Весь округ — один класс CRS?', a: 'Нет. Действующая книга FEMA ставит неинкорпорированный округ Sarasota, North Port, Venice и город Sarasota в класс 5, с разными датами, а Longboat Key — в класс 6 с 1 мая 2020 года. Дату карты 27 марта 2024 года они делят. Класс — не лимит покрытия.' },
        { q: 'Округ Sarasota входит в High-Velocity Hurricane Zone?', a: 'Нет. Туда входят только Miami-Dade и Broward. Одну расчётную скорость ветра на округ мы не называем. Форма wind mitigation всё равно фиксирует крышу и проёмы того дома, который у вас есть.' },
        { q: 'Какая карта затопления действует?', a: '27 марта 2024 года для округа и для North Port, Venice, города Sarasota и Longboat Key. На картах есть Limit of Moderate Wave Action, и округ пишет, что уровни ураганной эвакуации они не меняют. Наводнение не входит в полис дома и в HO-6.' },
        { q: 'У города Sarasota есть своя страница?', a: 'Пока нет. У North Port и Venice есть. Город Sarasota указан здесь без страницы. Жильё там старше и с большей долей кондо, чем в North Port: медианный год 1976, и около 21% единиц в зданиях на 50 квартир и больше. Пришлите адрес. Это дело мы читаем так же.' },
        { q: 'Можно проверить полис, не приезжая во Florida City?', a: 'Да. Так округ и обслуживается. До North Port около 4 часов, до Sarasota City Hall около 4 часов 40 минут без плотного трафика. Офиса в округе нет, и полис мы не обещаем, пока не прочитаем дело.' },
      ],
      sources: sources('ru', [...SRC]),
    },
  },
};
