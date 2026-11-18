import type { CityPage } from './types';
import { sources } from './sources';

// /[lang]/homeowners-insurance-venice-fl. Covers South Venice CDP. Facts checked 2026-11-18.
// Venice city: units 20,966; detached 42.1%; 50+ 7.7%; mobile 2,483 (11.8%);
// median 1986; pre-1990 56.4%; owner 80.4%; seasonal 4,723 (22.5%); age 65+ 61.4%.
// South Venice CDP: units 8,702; detached 92.1%; 50+ 0; mobile 6.0%; median 1984;
// pre-1990 62.6%; owner 83.3%; seasonal 8.2%; age 65+ 28.6%.
// FEMA CIS: Venice city FIRM 03/27/2024, CRS class 5 eff. 04/01/2025.
// Unincorporated Sarasota County (South Venice): FIRM 03/27/2024, CRS class 5 eff. 05/01/2007.
// City site: CRS since 1991, Class 5 as of 2025. Not HVHZ. OSRM 233 mi / ~4 h 20 min.
const SRC = ['acsVenice', 'acsSouthVenice', 'fbcHvhz', 'femaCis', 'veniceFlood', 'sarasotaFirm', 'scgovFirm', 'windForm', 'mitigation', 'roofAge', 'deductibles', 'claimDeadline', 'condoMaster', 'lossAssessment', 'condoInspections', 'floodsmart', 'nhcHelene', 'nhcMilton', 'msfh'] as const;

export const HOME_VENICE: CityPage = {
  path: '/homeowners-insurance-venice-fl',
  line: 'home',
  kind: 'city',
  area: 'venice',
  parent: '/homeowners-insurance-sarasota-county-fl',
  heroImage: 'home-08',
  published: '2026-11-18',
  modified: '2026-11-18',
  areaServed: [
    { '@type': 'City', name: 'Venice, FL' },
    { '@type': 'Place', name: 'South Venice, FL' },
    { '@type': 'AdministrativeArea', name: 'Sarasota County, FL' },
  ],
  copy: {
    en: {
      metaTitle: 'Home Insurance in Venice, FL | M&K Agency',
      metaDesc: 'Home and condo insurance in Venice and South Venice: 2024 flood maps, mobile homes and seasonal houses, reviewed from Florida City.',
      breadcrumb: 'Venice',
      kicker: 'Home & condo insurance · Venice and South Venice',
      h1a: 'Home insurance in Venice, FL,',
      h1b: 'two housing stocks and two flood communities.',
      sub: 'A city of older residents, seasonal condos and manufactured homes, and a census place of detached houses just south of it. Send the policy. English, Spanish or Russian.',
      serviceType: 'Homeowners and condo insurance',
      intro: [
        { type: 'h2', text: 'The city is not the CDP' },
        { type: 'p', text: 'The City of Venice and South Venice CDP are neighbors, and the 2020–2024 Census does not treat them as one housing market. The city has about 21,000 housing units and about 27,500 residents. About 42% of units are detached houses, about 8% are attached, and about 8% are in buildings of 50 or more units. Manufactured homes are about 2,500 units, roughly 12%. The median year built is 1986, and about 56% of units were built before 1990. Of the occupied homes, about 80% are owner-occupied. About 4,700 units, roughly 23%, were vacant for seasonal or occasional use. About 61% of city residents are 65 or older. South Venice CDP has about 8,700 units and about 17,500 residents. About 92% are detached houses. Buildings of 50 or more units are absent from the count. Manufactured homes are about 6%. The median year built is 1984, and about 63% of units predate 1990. About 83% of occupied homes are owner-occupied. Seasonal vacancy is about 8%. About 29% of CDP residents are 65 or older. Census table C16001 puts the Slavic-language line at about 1.5% in the city and about 7% in the CDP. The line is not a count of Russian alone.' },
        { type: 'p', text: 'Neither place is in the High-Velocity Hurricane Zone. Section 1620 of the Florida Building Code limits that zone to Miami-Dade and Broward. Design wind speed comes from the code maps and changes by parcel and risk category. This page does not print one speed for the island, the city grid and the CDP.' },
        { type: 'p', text: 'We serve both places from Florida City. The light-traffic drive to Venice City Hall, 401 West Venice Avenue, is about 233 miles and about 4 hours 20 minutes. There is no office in Venice or in South Venice.' },
      ],
      checklistTitle: 'What we check in Venice and in South Venice',
      checklist: [
        '**The form.** A house in the CDP is usually an HO-3. A city condo is an HO-6. A manufactured home, about 12% of city units, is neither.',
        '**Which NFIP community the address is in.** The city is CRS Class 5 effective April 1, 2025. Unincorporated Sarasota County, which includes South Venice, is also Class 5, with that class effective May 1, 2007. Same class number, different communities.',
        '**The March 27, 2024 flood-map date**, which FEMA lists for both, and the panel for the lot. A pier measurement is not the lot.',
        '**Wind mitigation on form OIR-B1-1802.** Outside the HVHZ, the credits follow the form, not a Miami-Dade product approval.',
        '**The hurricane deductible**, $500 or 2%, 5% or 10% of the dwelling limit, once per calendar year.',
        '**Roof age.** Median years of 1986 and 1984 mean a large share of roofs are past the point where settlement can be actual cash value.',
        '**On a city condo, the master policy’s exclusions**, the HO-6, loss assessment above the $2,000 floor, and any milestone or reserve bill.',
        '**Seasonal occupancy.** About one city unit in four was vacant for seasonal use. The vacancy rule is in the policy.',
      ],
      body: [
        { type: 'h2', text: 'Three contracts in one ZIP code conversation' },
        { type: 'p', text: 'A wind-mitigation inspection records roof covering, roof deck attachment, roof-to-wall connection, roof geometry, secondary water resistance and opening protection. Florida Statute 627.0629 requires insurers to reflect the credits for what the form actually documents. Venice is outside the High-Velocity Hurricane Zone, so this is not a Miami-Dade Notice of Acceptance. If you have the form, send it. If you do not, the gap has a name. My Safe Florida Home is a separate state program of inspections and grants. A grant is not automatic, and this page does not promise one. Hurricane deductibles are offered at $500 or at 2%, 5% or 10% of the dwelling limit and apply once per calendar year. For policies issued or renewed since July 1, 2022, an insurer cannot refuse coverage only because the roof is under 15 years old. An older roof can still be actual cash value. Law and ordinance coverage is the part that can pay to rebuild to the current code. With median years of 1984 and 1986, check that limit on the declarations.' },
        { type: 'p', text: 'About 12% of city units are manufactured homes, against about 6% in the CDP. A manufactured home is not written on a standard HO-3. Tie-downs and the roof are underwriting questions on the form made for that building. About 8% of city units are in buildings of 50 or more. Florida Statute 718.111(11) requires the association to insure the building and to exclude the interior of the unit: flooring, cabinets, appliances, the water heater, fixtures and personal property. That interior is an HO-6. Statute 627.714 requires at least $2,000 of loss-assessment coverage for a share of a covered loss to property the association insures. Two thousand dollars is a floor. Buildings of three or more habitable stories need a milestone inspection, generally at 30 years and every 10 years after, or at 25 if the local official requires it, plus a structural integrity reserve study at least every 10 years. An assessment for reserves or for inspection repairs is generally not a loss-assessment claim. The CDP’s count of buildings with 50 or more units is zero. Do not send a South Venice house file and expect a master policy.' },
        { type: 'h2', text: 'Same map date, two community numbers' },
        { type: 'p', text: 'No homeowners policy and no HO-6 covers flood, including storm surge. FEMA’s Community Status Book lists March 27, 2024 as the current flood-map date for the City of Venice and for unincorporated Sarasota County. The City of Sarasota’s map page, covering the same countywide study, says those maps replaced the November 4, 2016 panels and show a Limit of Moderate Wave Action. Sarasota County’s notice says the update does not change hurricane evacuation levels. The City of Venice says it has been in the Community Rating System since 1991 and is Class 5 as of 2025. The status book agrees: Class 5, with that class effective April 1, 2025. Unincorporated Sarasota County, the community that contains South Venice, is also Class 5, with that class effective May 1, 2007. The class is FEMA’s rating of a floodplain program. It is not a coverage limit, and it does not move flood onto the house policy. A South Venice address is read on the county’s community, not on the city’s.' },
        { type: 'p', text: 'Hurricane Helene, on the night of September 26, 2024, produced 4 to 6 feet of inundation above ground from Venice south toward Englewood, and a USGS sensor near the Venice Fishing Pier measured 5.71 feet above mean higher high water. Hurricane Milton made landfall at Siesta Key, north of the city, at 8:30 p.m. EDT on October 9, 2024, as a Category 3. The National Hurricane Center analyzed 4 to 6 feet of surge from Longboat Key to Venice, and the strongest sustained wind it lists in Florida was at a University of Florida tower at Venice Beach: 79 knots, about 91 mph, with a gust of 93 knots, about 107 mph. Those are coastal observations. They are not a depth for every lot in the CDP. An NFIP policy usually takes 30 days to start unless it is tied to a loan closing. The program caps are $250,000 for the building and $100,000 for contents. Those caps are not a rebuilding estimate. Property claims have a clock: notice of a new claim is generally due within one year, supplemental claims within 18 months. M&K Agency is family-owned, with a team of 12 and more than 5,000 clients across Florida. **Send us your policy and we’ll check your coverage.**' },
      ],
      officeTitle: 'Venice and South Venice, served from Florida City',
      office: [
        { type: 'p', text: 'We do not have an office in Venice or in South Venice. The office is at **33550 S Dixie Hwy, Suite 102, Florida City, FL 33034**. Venice City Hall is about 233 miles and about 4 hours 20 minutes in light traffic. Clients send the declarations, the wind-mitigation form and, for a condo, the association certificate by WhatsApp, text or email. Say whether the address is in the city or in the CDP. A visit is by appointment.' },
        { type: 'p', text: 'Hours are Monday to Friday, 9 to 6, and Saturday by appointment. Call (305) 859-3953 or WhatsApp (971) 998-7313. During business hours an agent calls back within an hour.' },
      ],
      faqTitle: 'Home insurance in Venice and South Venice: common questions',
      faq: [
        { q: 'Is a South Venice house on the City of Venice flood community?', a: 'No. South Venice is an unincorporated census place. FEMA lists the city and unincorporated Sarasota County as separate communities. Both have a March 27, 2024 map date and both are CRS Class 5, but the city’s class date is April 1, 2025 and the county’s is May 1, 2007. Use the community for the address.' },
        { q: 'Is Venice in the High-Velocity Hurricane Zone?', a: 'No. Only Miami-Dade and Broward are. We do not quote one design wind speed for the city and the CDP. A wind-mitigation form still documents the roof and the openings.' },
        { q: 'Does the association policy cover my condo interior?', a: 'No. Flooring, cabinets, appliances, the water heater, fixtures and your belongings are excluded from the master policy and belong on an HO-6. Loss-assessment coverage starts at $2,000 and responds only to certain assessments. A reserve or milestone bill is generally not one of them. The CDP’s census count of buildings with 50 or more units is zero, so this question is a city question.' },
        { q: 'We are here for the season. Does that matter?', a: 'It can. About 23% of city units were vacant for seasonal use, against about 8% in South Venice. Seasonal and vacant-home conditions are policy terms. Send the declarations. The rule is in your form.' },
        { q: 'Can you read the policy from WhatsApp?', a: 'Yes. That is how these places are served. Venice City Hall is about 233 miles from the Florida City office. We do not have an office here, and we do not promise a placement until we have read the file.' },
      ],
      sources: sources('en', [...SRC]),
    },
    es: {
      metaTitle: 'Seguro de Casa en Venice, FL | M&K Agency',
      metaDesc: 'Seguro de casa y condominio en Venice y South Venice: mapas de 2024, casas manufacturadas y viviendas de temporada. Revisión desde Florida City.',
      breadcrumb: 'Venice',
      kicker: 'Seguro de casa y condominio · Venice y South Venice',
      h1a: 'Seguro de casa en Venice, FL,',
      h1b: 'dos inventarios de vivienda y dos comunidades de inundación.',
      sub: 'Una ciudad de residentes mayores, condominios de temporada y casas manufacturadas, y un lugar del Censo de casas separadas justo al sur. Envíe la póliza. En español, inglés o ruso.',
      serviceType: 'Seguro de vivienda y condominio',
      intro: [
        { type: 'h2', text: 'La ciudad no es el CDP' },
        { type: 'p', text: 'La ciudad de Venice y el CDP de South Venice son vecinos, y el Censo de 2020–2024 no los trata como un solo mercado de vivienda. La ciudad tiene unas 21,000 viviendas y unos 27,500 residentes. Cerca del 42% son casas separadas, cerca del 8% son adosadas y cerca del 8% están en edificios de 50 unidades o más. Las casas manufacturadas son unas 2,500 unidades, cerca del 12%. El año mediano de construcción es 1986, y cerca del 56% es anterior a 1990. De las viviendas ocupadas, cerca del 80% las ocupa el dueño. Unas 4,700 unidades, cerca del 23%, estaban vacías por uso de temporada u ocasional. Cerca del 61% de los residentes de la ciudad tiene 65 años o más. El CDP de South Venice tiene unas 8,700 unidades y unos 17,500 residentes. Cerca del 92% son casas separadas. Los edificios de 50 unidades o más no aparecen en el conteo. Las casas manufacturadas son cerca del 6%. El año mediano es 1984, y cerca del 63% es anterior a 1990. Cerca del 83% de las viviendas ocupadas las ocupa el dueño. La vacancia de temporada es de cerca del 8%. Cerca del 29% de los residentes del CDP tiene 65 años o más. La tabla C16001 pone la línea de lenguas eslavas en cerca del 1.5% en la ciudad y cerca del 7% en el CDP. No es un conteo solo de ruso.' },
        { type: 'p', text: 'Ninguno de los dos lugares está en la High-Velocity Hurricane Zone. La sección 1620 del Código de Construcción de Florida limita esa zona a Miami-Dade y Broward. La velocidad de viento de diseño sale de los mapas del código y cambia por lote y categoría de riesgo. Esta página no imprime una sola velocidad para la isla, la cuadrícula de la ciudad y el CDP.' },
        { type: 'p', text: 'Atendemos los dos lugares desde Florida City. El trayecto sin tráfico pesado hasta el ayuntamiento de Venice, 401 West Venice Avenue, es de unas 233 millas y unas 4 horas y 20 minutos. No hay oficina en Venice ni en South Venice.' },
      ],
      checklistTitle: 'Lo que revisamos en Venice y en South Venice',
      checklist: [
        '**La forma.** Una casa en el CDP suele ser un HO-3. Un condominio de la ciudad es un HO-6. Una casa manufacturada, cerca del 12% de las unidades de la ciudad, no es ninguna de las dos.',
        '**En qué comunidad del NFIP está la dirección.** La ciudad es CRS clase 5 con efectividad el 1 de abril de 2025. El condado de Sarasota no incorporado, que incluye South Venice, también es clase 5, con esa clase efectiva desde el 1 de mayo de 2007. El mismo número de clase, comunidades distintas.',
        '**La fecha de mapa del 27 de marzo de 2024**, que FEMA lista para las dos, y el panel del lote. Una medición en el muelle no es el lote.',
        '**Mitigación de viento en el formulario OIR-B1-1802.** Fuera de la HVHZ, los créditos siguen el formulario, no una aprobación de producto de Miami-Dade.',
        '**El deducible de huracán**, $500 o 2%, 5% o 10% del límite de la vivienda, una vez por año calendario.',
        '**La edad del techo.** Años medianos de 1986 y 1984 quieren decir que una parte grande de los techos ya pasó el punto en que la liquidación puede ser valor real.',
        '**En un condominio de la ciudad, las exclusiones de la póliza maestra**, el HO-6, el loss assessment por encima del piso de $2,000 y cualquier factura de hito o de reservas.',
        '**Ocupación de temporada.** Cerca de una unidad de cada cuatro en la ciudad estaba vacía por uso de temporada. La regla de vacancia está en la póliza.',
      ],
      body: [
        { type: 'h2', text: 'Tres contratos en una misma conversación de código postal' },
        { type: 'p', text: 'Una inspección de mitigación de viento anota la cubierta del techo, la fijación de la plataforma, la conexión del techo a las paredes, la forma del techo, la resistencia secundaria al agua y la protección de las aberturas. El estatuto 627.0629 exige que la aseguradora refleje los créditos de lo que el formulario documenta. Venice está fuera de la High-Velocity Hurricane Zone, así que esto no es un Notice of Acceptance de Miami-Dade. Si tiene el formulario, envíelo. Si no, el hueco tiene nombre. My Safe Florida Home es un programa estatal aparte de inspecciones y subsidios. Un subsidio no es automático, y esta página no promete uno. Los deducibles de huracán se ofrecen en $500 o en 2%, 5% o 10% del límite de la vivienda y se aplican una vez por año calendario. En pólizas emitidas o renovadas desde el 1 de julio de 2022, una aseguradora no puede rechazar la cobertura solo porque el techo tiene menos de 15 años. Un techo más viejo igual puede ser valor real. La cobertura de ley y ordenanza es la parte que puede pagar reconstruir al código vigente. Con años medianos de 1984 y 1986, revise ese límite en las declaraciones.' },
        { type: 'p', text: 'Cerca del 12% de las unidades de la ciudad son casas manufacturadas, frente a cerca del 6% en el CDP. Una casa manufacturada no se escribe en un HO-3 estándar. Los anclajes y el techo son preguntas de suscripción en la forma hecha para ese edificio. Cerca del 8% de las unidades de la ciudad están en edificios de 50 o más. El estatuto 718.111(11) exige que la asociación asegure el edificio y excluya el interior de la unidad: pisos, gabinetes, electrodomésticos, el calentador de agua, accesorios y bienes personales. Ese interior es un HO-6. El estatuto 627.714 exige al menos $2,000 de cobertura de loss assessment por la parte de una pérdida cubierta sobre bienes que asegura la asociación. Dos mil dólares es un piso. Los edificios de tres pisos habitables o más necesitan una inspección de hito, en general a los 30 años y cada 10 después, o a los 25 si el funcionario local lo exige, más un estudio de reservas de integridad estructural al menos cada 10 años. Una cuota para reservas o para reparaciones de la inspección en general no es un reclamo de loss assessment. El conteo del CDP de edificios de 50 unidades o más es cero. No envíe el expediente de una casa de South Venice esperando una póliza maestra.' },
        { type: 'h2', text: 'La misma fecha de mapa, dos números de comunidad' },
        { type: 'p', text: 'Ninguna póliza de casa y ningún HO-6 cubren inundación, incluida la marejada. El Community Status Book de FEMA lista el 27 de marzo de 2024 como la fecha vigente del mapa para la ciudad de Venice y para el condado de Sarasota no incorporado. La página de mapas de la ciudad de Sarasota, sobre el mismo estudio del condado, dice que esos mapas reemplazaron los paneles del 4 de noviembre de 2016 y muestran una Limit of Moderate Wave Action. El aviso del condado dice que la actualización no cambia los niveles de evacuación por huracán. La ciudad de Venice dice que está en el Community Rating System desde 1991 y que es clase 5 desde 2025. El libro de estado coincide: clase 5, con esa clase efectiva el 1 de abril de 2025. El condado de Sarasota no incorporado, la comunidad que contiene South Venice, también es clase 5, con esa clase efectiva desde el 1 de mayo de 2007. La clase es la calificación de FEMA a un programa de llanura de inundación. No es un límite de cobertura y no mete la inundación en la póliza de casa. Una dirección de South Venice se lee en la comunidad del condado, no en la de la ciudad.' },
        { type: 'p', text: 'El huracán Helene, en la noche del 26 de septiembre de 2024, produjo de 4 a 6 pies de inundación sobre el terreno desde Venice hacia el sur, en dirección a Englewood, y un sensor del USGS cerca del Venice Fishing Pier midió 5.71 pies por encima de la pleamar media más alta. El huracán Milton entró a tierra en Siesta Key, al norte de la ciudad, a las 8:30 p.m. EDT del 9 de octubre de 2024, como categoría 3. El Centro Nacional de Huracanes analizó de 4 a 6 pies de marejada desde Longboat Key hasta Venice, y el viento sostenido más fuerte que lista en Florida fue en una torre de la Universidad de Florida en Venice Beach: 79 nudos, unas 91 mph, con una ráfaga de 93 nudos, unas 107 mph. Son observaciones costeras. No son una profundidad para cada lote del CDP. Una póliza del NFIP normalmente tarda 30 días en empezar, salvo que esté atada al cierre de un préstamo. Los topes del programa son $250,000 para el edificio y $100,000 para el contenido. Esos topes no son un estimado de reconstrucción. Los reclamos de propiedad tienen reloj: el aviso de un reclamo nuevo en general vence en un año, y los suplementarios en 18 meses. M&K Agency es una agencia familiar, con un equipo de 12 personas y más de 5,000 clientes en toda Florida. **Envíenos su póliza y la revisamos.**' },
      ],
      officeTitle: 'Venice y South Venice, desde Florida City',
      office: [
        { type: 'p', text: 'No tenemos oficina en Venice ni en South Venice. La oficina está en **33550 S Dixie Hwy, Suite 102, Florida City, FL 33034**. El ayuntamiento de Venice queda a unas 233 millas y unas 4 horas y 20 minutos sin tráfico pesado. Los clientes envían las declaraciones, el formulario de mitigación de viento y, si es un condominio, el certificado de la asociación por WhatsApp, texto o correo. Diga si la dirección está en la ciudad o en el CDP. La visita es con cita.' },
        { type: 'p', text: 'Horario: lunes a viernes de 9 a 6, sábados con cita. Llame al (305) 859-3953 o escriba por WhatsApp al (971) 998-7313. En horario de oficina un agente devuelve la llamada en menos de una hora.' },
      ],
      faqTitle: 'Seguro de casa en Venice y South Venice: preguntas',
      faq: [
        { q: '¿Una casa de South Venice está en la comunidad de inundación de la ciudad de Venice?', a: 'No. South Venice es un lugar del Censo no incorporado. FEMA lista la ciudad y el condado de Sarasota no incorporado como comunidades distintas. Las dos tienen fecha de mapa del 27 de marzo de 2024 y las dos son CRS clase 5, pero la fecha de clase de la ciudad es el 1 de abril de 2025 y la del condado es el 1 de mayo de 2007. Use la comunidad de la dirección.' },
        { q: '¿Venice está en la High-Velocity Hurricane Zone?', a: 'No. Solo Miami-Dade y Broward lo están. No citamos una sola velocidad de viento de diseño para la ciudad y el CDP. Un formulario de mitigación de viento igual documenta el techo y las aberturas.' },
        { q: '¿La póliza de la asociación cubre el interior de mi condominio?', a: 'No. Pisos, gabinetes, electrodomésticos, el calentador de agua, accesorios y sus pertenencias quedan fuera de la póliza maestra y van en un HO-6. El loss assessment empieza en $2,000 y responde solo a ciertas cuotas. Una factura de reservas o de hito en general no es una de ellas. El conteo del Censo del CDP de edificios de 50 unidades o más es cero, así que esta pregunta es de la ciudad.' },
        { q: 'Estamos aquí por la temporada. ¿Importa?', a: 'Puede importar. Cerca del 23% de las unidades de la ciudad estaba vacío por uso de temporada, frente a cerca del 8% en South Venice. Las condiciones de temporada y de casa vacía son cláusulas de la póliza. Envíe las declaraciones. La regla está en su forma.' },
        { q: '¿Pueden leer la póliza por WhatsApp?', a: 'Sí. Así se atienden estos lugares. El ayuntamiento de Venice queda a unas 233 millas de la oficina en Florida City. No tenemos oficina aquí y no prometemos colocar una póliza hasta leer el expediente.' },
      ],
      sources: sources('es', [...SRC]),
    },
    ru: {
      metaTitle: 'Страховка дома Венис, FL | M&K Agency',
      metaDesc: 'Страховка дома и кондо в Venice и South Venice: карты 2024 года, мобильные дома и сезонное жильё. Проверка полиса из Florida City.',
      breadcrumb: 'Venice',
      kicker: 'Страховка дома и кондо · Venice и South Venice',
      h1a: 'Страховка дома в Venice —',
      h1b: 'два фонда жилья и два сообщества по затоплению.',
      sub: 'Город старших жителей, сезонных кондо и мобильных домов, и место переписи частных домов сразу к югу. Пришлите полис. По-русски, по-английски или по-испански.',
      serviceType: 'Страхование дома и кондоминиума',
      intro: [
        { type: 'h2', text: 'Город — это не CDP' },
        { type: 'p', text: 'Город Venice и South Venice CDP — соседи, и Census 2020–2024 не считает их одним рынком жилья. В городе около 21 000 единиц и около 27 500 жителей. Около 42% — отдельные дома, около 8% — с общей стеной, около 8% — в зданиях на 50 квартир и больше. Мобильных домов около 2 500, примерно 12%. Медианный год постройки — 1986, и около 56% построено до 1990 года. Среди занятого жилья около 80% живут владельцы. Около 4 700 единиц, примерно 23%, пустовали как сезонное или редкое жильё. Около 61% жителей города старше 65 лет. В South Venice CDP около 8 700 единиц и около 17 500 жителей. Около 92% — отдельные дома. Зданий на 50 квартир и больше в подсчёте нет. Мобильных домов около 6%. Медианный год — 1984, и около 63% старше 1990 года. Около 83% занятого жилья занимают владельцы. Сезонная пустота — около 8%. Около 29% жителей CDP старше 65 лет. Таблица C16001 ставит славянскую строку на около 1,5% в городе и около 7% в CDP. Это не число «только русских».' },
        { type: 'p', text: 'Ни то ни другое место не входит в High-Velocity Hurricane Zone. Раздел 1620 Florida Building Code ограничивает эту зону округами Miami-Dade и Broward. Расчётная скорость ветра берётся с карт кода и меняется по участку и категории риска. На этой странице нет одной скорости для острова, городской сетки и CDP.' },
        { type: 'p', text: 'Оба места мы обслуживаем из Florida City. Без плотного трафика до Venice City Hall, 401 West Venice Avenue, около 233 миль и около 4 часов 20 минут. Офиса в Venice и в South Venice нет.' },
      ],
      checklistTitle: 'Что мы проверяем в Venice и в South Venice',
      checklist: [
        '**Форма.** Дом в CDP — обычно HO-3. Городское кондо — HO-6. Мобильный дом, около 12% единиц города, — ни то ни другое.',
        '**В каком сообществе NFIP адрес.** Город — CRS класс 5 с 1 апреля 2025 года. Неинкорпорированный округ Sarasota, куда входит South Venice, тоже класс 5, и этот класс действует с 1 мая 2007 года. Номер класса один, сообщества разные.',
        '**Дата карты 27 марта 2024 года**, которую FEMA указывает для обоих, и панель участка. Замер на пирсе — не участок.',
        '**Wind mitigation по форме OIR-B1-1802.** Вне HVHZ кредиты идут по форме, а не по допуску продукта Miami-Dade.',
        '**Ураганная франшиза**, $500 или 2%, 5% или 10% от лимита здания, один раз за календарный год.',
        '**Возраст крыши.** Медианные годы 1986 и 1984 значат, что у большой доли крыш выплата уже может идти по actual cash value.',
        '**В городском кондо — исключения мастер-полиса**, HO-6, loss assessment выше порога $2 000 и любой счёт за milestone или резервы.',
        '**Сезонное проживание.** Около четверти городских единиц пустовали как сезонные. Правило о пустующем доме — в полисе.',
      ],
      body: [
        { type: 'h2', text: 'Три договора в одном разговоре про индекс' },
        { type: 'p', text: 'Инспекция wind mitigation фиксирует покрытие крыши, крепление настила, связь крыши со стенами, форму крыши, вторичную защиту от воды и защиту проёмов. Статут 627.0629 требует, чтобы страховая отразила кредиты за то, что форма документирует. Venice вне High-Velocity Hurricane Zone, поэтому это не Notice of Acceptance округа Miami-Dade. Если форма есть, пришлите её. Если нет, у пробела есть имя. My Safe Florida Home — отдельная государственная программа инспекций и грантов. Грант не автоматический, и эта страница его не обещает. Ураганную франшизу предлагают как $500 или как 2%, 5% или 10% от лимита здания, и она применяется один раз за календарный год. Для полисов, выданных или продлённых с 1 июля 2022 года, страховая не может отказать в покрытии только потому, что крыше меньше 15 лет. Более старую крышу всё равно могут считать по actual cash value. Law and ordinance — часть, которая может оплатить перестройку по действующему коду. При медианных годах 1984 и 1986 проверьте этот лимит в declarations.' },
        { type: 'p', text: 'Около 12% городских единиц — мобильные дома, в CDP около 6%. Мобильный дом не пишут на стандартном HO-3. Крепление к земле и крыша — вопросы андеррайтинга на форме, которая сделана для такого здания. Около 8% городских единиц — в зданиях на 50 квартир и больше. Статут 718.111(11) требует, чтобы ассоциация страховала здание и исключала интерьер квартиры: полы, шкафы, технику, водонагреватель, арматуру и личное имущество. Этот интерьер — HO-6. Статут 627.714 требует не меньше $2 000 покрытия loss assessment на долю покрытого убытка по имуществу, которое страхует ассоциация. Две тысячи долларов — это нижний порог. Зданиям от трёх жилых этажей нужна milestone inspection, как правило в 30 лет и затем каждые 10, или в 25, если местный чиновник так требует, плюс structural integrity reserve study не реже чем раз в 10 лет. Взнос на резервы или на ремонт по итогам инспекции, как правило, не является клеймом loss assessment. В подсчёте CDP зданий на 50 квартир и больше — ноль. Не присылайте дело дома в South Venice в ожидании мастер-полиса.' },
        { type: 'h2', text: 'Одна дата карты, два номера сообщества' },
        { type: 'p', text: 'Ни полис домовладельца, ни HO-6 не покрывают наводнение, включая штормовой нагон. Community Status Book FEMA указывает 27 марта 2024 года как действующую дату карты и для города Venice, и для неинкорпорированного округа Sarasota. Страница карт города Sarasota про то же окружное исследование пишет, что эти карты заменили панели от 4 ноября 2016 года и показывают Limit of Moderate Wave Action. Сообщение округа говорит, что обновление не меняет уровни ураганной эвакуации. Город Venice пишет, что участвует в Community Rating System с 1991 года и с 2025 года имеет класс 5. Книга статуса совпадает: класс 5, и этот класс действует с 1 апреля 2025 года. Неинкорпорированный округ Sarasota, сообщество, в которое входит South Venice, тоже класс 5, и этот класс действует с 1 мая 2007 года. Класс — оценка FEMA программы по пойме. Это не лимит покрытия, и наводнение в полис дома он не переносит. Адрес в South Venice читают по сообществу округа, не по сообществу города.' },
        { type: 'p', text: 'Ураган Helene в ночь на 26 сентября 2024 года дал затопление 4–6 футов над землёй от Venice на юг в сторону Englewood, а датчик USGS у Venice Fishing Pier показал 5,71 фута выше средней высшей полной воды. Ураган Milton вышел на сушу у Siesta Key, севернее города, в 20:30 по восточному летнему времени 9 октября 2024 года, как ураган 3-й категории. Национальный центр ураганов оценил нагон в 4–6 футов от Longboat Key до Venice, а самый сильный устойчивый ветер, который он приводит по Флориде, был на вышке Университета Флориды на Venice Beach: 79 узлов, около 91 мили в час, с порывом 93 узла, около 107 миль в час. Это береговые наблюдения. Это не глубина для каждого участка CDP. Полис NFIP обычно начинает действовать через 30 дней, если он не привязан к закрытию кредита. Потолки программы — $250 000 на здание и $100 000 на имущество. Это не смета перестройки. У имущественного клейма есть срок: извещение о новом клейме, как правило, в течение года, дополнительный клейм — в течение 18 месяцев. M&K Agency — семейное агентство: в команде 12 человек и больше 5 000 клиентов по всей Флориде. **Пришлите нам свой полис — мы проверим покрытие.**' },
      ],
      officeTitle: 'Venice и South Venice обслуживаем из Florida City',
      office: [
        { type: 'p', text: 'Офиса в Venice и в South Venice нет. Офис — **33550 S Dixie Hwy, Suite 102, Florida City, FL 33034**. До Venice City Hall около 233 миль и около 4 часов 20 минут без плотного трафика. Клиенты присылают declarations, форму wind mitigation и, для кондо, сертификат ассоциации в WhatsApp, по SMS или почте. Напишите, адрес в городе или в CDP. Визит — по записи.' },
        { type: 'p', text: 'Часы: понедельник–пятница с 9 до 6, суббота по записи. Телефон (305) 859-3953, WhatsApp (971) 998-7313. В рабочее время агент перезванивает в течение часа.' },
      ],
      faqTitle: 'Страховка дома в Венис: вопросы',
      faq: [
        { q: 'Дом в South Venice относится к сообществу затопления города Venice?', a: 'Нет. South Venice — неинкорпорированное место переписи. FEMA ведёт город и неинкорпорированный округ Sarasota как разные сообщества. У обоих дата карты 27 марта 2024 года и оба CRS класс 5, но дата класса города — 1 апреля 2025 года, а округа — 1 мая 2007 года. Берите сообщество по адресу.' },
        { q: 'Venice входит в High-Velocity Hurricane Zone?', a: 'Нет. Туда входят только Miami-Dade и Broward. Одну расчётную скорость ветра на город и CDP мы не называем. Форма wind mitigation всё равно фиксирует крышу и проёмы.' },
        { q: 'Мастер-полис покрывает интерьер моего кондо?', a: 'Нет. Полы, шкафы, техника, водонагреватель, арматура и ваши вещи исключены из мастер-полиса и относятся к HO-6. Loss assessment начинается с $2 000 и отвечает только на часть взносов. Счёт на резервы или на milestone, как правило, к ним не относится. В подсчёте Census по CDP зданий на 50 квартир и больше — ноль, поэтому этот вопрос городской.' },
        { q: 'Мы здесь на сезон. Это важно?', a: 'Может быть важно. Около 23% городских единиц пустовали как сезонные, в South Venice около 8%. Условия сезонного и пустующего дома — пункты полиса. Пришлите declarations. Правило в вашей форме.' },
        { q: 'Можно прислать полис в WhatsApp?', a: 'Да. Так эти места и обслуживаются. До Venice City Hall около 233 миль от офиса во Florida City. Офиса здесь нет, и полис мы не обещаем, пока не прочитаем дело.' },
      ],
      sources: sources('ru', [...SRC]),
    },
  },
};
