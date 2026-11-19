import type { NewsEdition, NewsSource } from '../types';

// Edition for Thursday, Nov. 19, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_PNS: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-19',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=PNS&format=txt&version=1&glossary=0',
  title: 'Public Information Statement: preliminary 48-hour precipitation totals, 6:41 a.m. EST Thu Nov 19, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-19',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:45 a.m. EST Thu Nov 19, 2026',
};

const EO_26_232: NewsSource = {
  name: 'Executive Office of the Governor of Florida',
  date: '2026-11-18',
  url: 'https://www.flgov.com/eog/sites/default/files/executive-orders/2026/EO%2026-232.pdf',
  title: 'Executive Order 26-232 (Amending Executive Order 26-227, 2026 Fall Flooding) (PDF)',
};

const EO_26_227: NewsSource = {
  name: 'Executive Office of the Governor of Florida',
  date: '2026-11-02',
  url: 'https://www.flgov.com/eog/sites/default/files/executive-orders/2026/EO%2026-227.pdf',
  title: 'Executive Order 26-227 (Emergency Management, 2026 Fall Flooding) (PDF)',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-19',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Thu Nov 19, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const MDC_ROBOTS: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-11-17',
  url: 'https://www.miamidade.gov/govaction/matter.asp?matter=261932&file=true&yearFolder=Y2026',
  title: 'File 261932: Ordinance relating to personal delivery devices and mobile carriers (agenda item 7C, Nov. 17, 2026)',
};

const WX = [NWS_MFL_PNS, NWS_MFL_AFD];
const EO = [EO_26_232, EO_26_227];
const TROP = [NHC_TWO, NWS_MFL_AFD];
const BOX = [FEMA_REAUTH, MDC_ROBOTS];

export const edition: NewsEdition = {
  slug: '2026-11-19-rain-totals-state-emergency-bahamas-low',
  datePublished: '2026-11-19',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 19, 2026: two-day rain totals top 16 inches in Broward and 9 inches in south Miami-Dade, the state of emergency now covers Broward and Miami-Dade, and a low near the Bahamas could become a named storm',
      metaTitle: 'Insurance News Nov. 19, 2026: Rain Totals, State of Emergency | M&K',
      description:
        'NWS Miami reports up to 16.65 inches of rain in two days, the governor adds Broward and Miami-Dade to the flooding emergency, and NHC watches a low near the Bahamas.',
      ogAlt:
        'A rain gauge filled to the top beside a flooded street, a state emergency document with a seal, and a swirling storm cloud over the ocean near small islands',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Thursday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: two-day rain totals reach 16.65 inches in Broward and 9.22 inches near Princeton in south Miami-Dade, and the Flood Watch runs through this evening',
          summary:
            'NWS Miami’s preliminary 48-hour totals at 6:41 a.m. Thursday show **16.65 inches north of Dania Beach**, 16.38 inches near Plantation and 15.37 inches near Lauderhill. Far south Miami-Dade was hit harder than on Tuesday night: **9.22 inches east of Princeton**, 6.75 inches southeast of Florida City and about 5 inches south of Naranja, while Aventura reported 8.35 inches. Forecasters expect the heaviest bands today over Broward and Palm Beach, with isolated 3 to 5 inches, and warn that even 1 to 2 inches on saturated ground can cause serious flooding; the **Flood Watch for the Miami-Dade, Broward and Palm Beach metro areas runs through this evening**, and drier weather is expected this weekend.',
          why: 'If water reached your home, garage or car in Homestead, Florida City or anywhere else, take dated photos before you clean up, keep damaged items and receipts, and report the claim promptly. Homeowners policies generally exclude flood, which is covered by a separate flood policy, and flood damage to a car is covered only with comprehensive coverage. See our [claim checklist](/en/blog/hurricane-claim-checklist-florida), [flood insurance](/en/flood-insurance-homestead-fl) and [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: WX,
        },
        {
          headline:
            'New: Governor adds Broward, Miami-Dade and Monroe to Florida’s fall-flooding state of emergency, now 21 counties',
          summary:
            'Executive Order 26-232, signed Wednesday, Nov. 18, extends the state of emergency first declared on Nov. 2 to **Broward, Miami-Dade and Monroe** and four northeast Florida counties, citing more than 10 inches of rain in under 12 hours in parts of Fort Lauderdale, Davie and Hollywood on Nov. 17. The order keeps all the provisions of the original declaration, which runs **60 days from Nov. 2 unless extended**. Among them: pharmacists may give residents of covered counties an emergency refill of up to 30 days of maintenance medication, and state law against charging unconscionable amounts for essential goods and services during an emergency now applies in our area.',
          why: 'A state emergency is not the same as a federal disaster declaration, which FEMA aid to households requires, so your own policy remains the main way to recover damage. Report damage to your insurance company or agent first, hire only licensed contractors who can show proof of liability and workers’ comp coverage, and report suspected gouging on repairs or supplies to the Florida Attorney General. See [certificates of insurance for contractors](/en/blog/certificate-of-insurance-contractors-florida) and our [claim checklist](/en/blog/hurricane-claim-checklist-florida).',
          sources: EO,
        },
        {
          headline:
            'Update: National Hurricane Center raises the chance that a low near the northwest Bahamas becomes a subtropical or tropical storm to 60% over seven days',
          summary:
            'At 7 a.m. Thursday, NHC said a non-tropical low is expected to form along a front near the northwest Bahamas on Friday and could become a subtropical or tropical storm as it moves north or northeast near or just off the southeastern U.S. coast through the weekend. The formation chance is low (20%) for 48 hours and **medium (60%) for seven days**, up from 20% on Wednesday. NHC expects strong winds, dangerous surf and coastal flooding along parts of the Southeast and mid-Atlantic coasts into early next week, and NWS Miami says hazardous seas and a high rip current risk at our Atlantic beaches will continue into the weekend.',
          why: 'Hurricane season officially ends Nov. 30, but late systems still form, so do not wait for a name to review your policy, deductibles and flood coverage. Boat owners should check dock lines and moorings before seas build, and beachgoers should stay out of the water while rip current warnings are up. See our [end-of-season checklist](/en/blog/end-of-hurricane-season-checklist-florida) and [hurricane plan for your boat](/en/blog/hurricane-plan-for-your-boat-florida).',
          sources: TROP,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program is authorized through **11:59 p.m. Dec. 11, 2026**, 22 days from today; FEMA’s reauthorization page has no newer update. Miami-Dade’s county record still shows no final action on the sidewalk delivery-robot ordinance (File 261932) heard on Nov. 17; we will report the outcome once it is posted.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 19 de noviembre de 2026: la lluvia de dos días supera las 16 pulgadas en Broward y las 9 en el sur de Miami-Dade, el estado de emergencia ya incluye Broward y Miami-Dade, y una baja cerca de las Bahamas podría convertirse en tormenta con nombre',
      metaTitle: 'Noticias 19 nov. 2026: lluvias, estado de emergencia | M&K',
      description:
        'NWS Miami reporta hasta 16.65 pulgadas de lluvia en dos días, el gobernador incluye Broward y Miami-Dade en la emergencia por inundaciones y el NHC vigila una baja cerca de las Bahamas.',
      ogAlt:
        'Un pluviómetro lleno junto a una calle inundada, un documento oficial de emergencia con sello y una nube de tormenta girando sobre el mar cerca de unas islas',
      intro:
        'Tres novedades para dueños de casa, conductores y pequeños negocios del sur de Florida este jueves. Resumimos cada noticia con nuestras propias palabras y enlazamos la fuente original.',
      items: [
        {
          headline:
            'Actualización: la lluvia de dos días llega a 16.65 pulgadas en Broward y a 9.22 cerca de Princeton, en el sur de Miami-Dade, y la vigilancia de inundaciones sigue hasta esta noche',
          summary:
            'Los totales preliminares de 48 horas del NWS Miami, publicados a las 6:41 a.m. del jueves, muestran **16.65 pulgadas al norte de Dania Beach**, 16.38 cerca de Plantation y 15.37 cerca de Lauderhill. El extremo sur de Miami-Dade recibió mucho más que el martes por la noche: **9.22 pulgadas al este de Princeton**, 6.75 al sureste de Florida City y unas 5 al sur de Naranja; Aventura reportó 8.35. Hoy se esperan las bandas más fuertes sobre Broward y Palm Beach, con acumulados aislados de 3 a 5 pulgadas, y los meteorólogos advierten que incluso 1 o 2 pulgadas sobre suelos saturados pueden causar inundaciones serias; la **vigilancia de inundaciones para las zonas metropolitanas de Miami-Dade, Broward y Palm Beach sigue vigente hasta esta noche**, y se espera un fin de semana más seco.',
          why: 'Si el agua entró en su casa, garaje o carro en Homestead, Florida City o cualquier otro lugar, tome fotos con fecha antes de limpiar, guarde los objetos dañados y los recibos, y reporte el reclamo cuanto antes. El seguro de vivienda por lo general excluye las inundaciones, que se cubren con una póliza de inundación aparte, y los daños por agua a un carro solo se cubren con cobertura comprensiva. Vea nuestra [lista para reclamos](/es/blog/hurricane-claim-checklist-florida), [seguro de inundación](/es/flood-insurance-homestead-fl) y [comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida).',
          sources: WX,
        },
        {
          headline:
            'Nuevo: el gobernador incluye Broward, Miami-Dade y Monroe en el estado de emergencia por las inundaciones de otoño, que ya abarca 21 condados',
          summary:
            'La Orden Ejecutiva 26-232, firmada el miércoles 18 de noviembre, extiende a **Broward, Miami-Dade y Monroe**, y a cuatro condados del noreste de Florida, el estado de emergencia declarado el 2 de noviembre, por las más de 10 pulgadas de lluvia que cayeron en menos de 12 horas en partes de Fort Lauderdale, Davie y Hollywood el 17 de noviembre. La orden mantiene todas las disposiciones de la declaración original, que dura **60 días a partir del 2 de noviembre, salvo prórroga**. Entre ellas: los farmacéuticos pueden dar a los residentes de los condados incluidos un resurtido de emergencia de hasta 30 días de sus medicamentos de uso continuo, y ya rige en nuestra zona la ley estatal que prohíbe cobrar montos abusivos por bienes y servicios esenciales durante una emergencia.',
          why: 'Un estado de emergencia estatal no es lo mismo que una declaración federal de desastre, que es necesaria para la ayuda de FEMA a las familias; por eso, su propia póliza sigue siendo la vía principal para recuperar los daños. Reporte primero los daños a su compañía de seguros o a su agente, contrate solo contratistas con licencia que puedan mostrar prueba de seguro de responsabilidad civil y de compensación laboral, y denuncie ante la Fiscalía General de Florida cualquier cobro abusivo por reparaciones o suministros. Vea [certificados de seguro de contratistas](/es/blog/certificate-of-insurance-contractors-florida) y nuestra [lista para reclamos](/es/blog/hurricane-claim-checklist-florida).',
          sources: EO,
        },
        {
          headline:
            'Actualización: el Centro Nacional de Huracanes sube al 60% en siete días la probabilidad de que una baja cerca del noroeste de las Bahamas se convierta en tormenta subtropical o tropical',
          summary:
            'A las 7 a.m. del jueves, el NHC informó que se espera que una baja no tropical se forme el viernes sobre un frente cerca del noroeste de las Bahamas y que podría convertirse en tormenta subtropical o tropical mientras avanza hacia el norte o noreste, cerca o justo frente a la costa sureste de EE. UU., durante el fin de semana. La probabilidad de formación es baja (20%) en 48 horas y **media (60%) en siete días**, frente al 20% del miércoles. El NHC prevé vientos fuertes, oleaje peligroso e inundaciones costeras en partes de las costas del sureste y del Atlántico medio hasta principios de la próxima semana, y el NWS Miami indica que el mar peligroso y el alto riesgo de corrientes de resaca en nuestras playas del Atlántico seguirán durante el fin de semana.',
          why: 'La temporada de huracanes termina oficialmente el 30 de noviembre, pero todavía se forman sistemas tardíos: no espere a que una tormenta tenga nombre para revisar su póliza, sus deducibles y su cobertura de inundación. Si tiene bote, revise amarras y fondeo antes de que suba el oleaje, y no se meta al mar mientras haya avisos de corrientes de resaca. Vea nuestra [lista para el fin de la temporada](/es/blog/end-of-hurricane-season-checklist-florida) y el [plan de huracanes para su bote](/es/blog/hurricane-plan-for-your-boat-florida).',
          sources: TROP,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p.m. del 11 de diciembre de 2026**, dentro de 22 días; la página de FEMA sobre la reautorización no tiene novedades. El registro del condado de Miami-Dade todavía no muestra la decisión final sobre la ordenanza de robots de reparto en las aceras (expediente 261932), tratada el 17 de noviembre; informaremos el resultado cuando se publique.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 19 ноября 2026 г.: за двое суток в Броварде выпало больше 16 дюймов дождя, а на юге Майами-Дейд — больше 9, режим чрезвычайной ситуации распространён на Бровард и Майами-Дейд, а у Багамских островов может сформироваться шторм с именем',
      metaTitle: 'Новости 19 нояб. 2026: ливни, режим ЧС, шторм у Багам | M&K',
      description:
        'NWS Miami: до 16,65 дюйма дождя за двое суток; губернатор включил Бровард и Майами-Дейд в режим ЧС из-за наводнений; NHC следит за депрессией у Багамских островов.',
      ogAlt:
        'Дождемер, полный до краёв, рядом с затопленной улицей, официальный документ о чрезвычайной ситуации с печатью и закрученное штормовое облако над океаном у небольших островов',
      intro:
        'Три новости этого четверга для домовладельцев, водителей и владельцев малого бизнеса Южной Флориды. Каждую мы пересказываем своими словами и даём ссылку на первоисточник.',
      items: [
        {
          headline:
            'Обновление: за двое суток в Броварде выпало 16,65 дюйма дождя, у Принстона на юге Майами-Дейд — 9,22 дюйма; предупреждение о возможных наводнениях действует до вечера',
          summary:
            'По предварительным данным NWS Miami за 48 часов на 6:41 утра четверга, **16,65 дюйма выпало к северу от Дания-Бич**, 16,38 — у Плантейшна и 15,37 — у Лодерхилла. Крайний юг Майами-Дейд пострадал сильнее, чем во вторник ночью: **9,22 дюйма к востоку от Принстона**, 6,75 — к юго-востоку от Флорида-Сити и около 5 — к югу от Наранхи, а в Авентуре — 8,35. Сегодня самые сильные полосы дождей ожидаются над Бровардом и Палм-Бич, местами до 3–5 дюймов; синоптики предупреждают, что на переувлажнённой земле даже 1–2 дюйма могут вызвать серьёзные подтопления. **Предупреждение о возможных наводнениях (Flood Watch) для городских районов Майами-Дейд, Броварда и Палм-Бич действует до сегодняшнего вечера**, на выходных ожидается более сухая погода.',
          why: 'Если вода попала в дом, гараж или машину — в Хомстеде, Флорида-Сити или где угодно ещё, — до уборки сделайте фотографии с датой, сохраните повреждённые вещи и чеки и как можно скорее заявите о страховом случае. Страховка дома, как правило, не покрывает наводнение: для этого нужен отдельный полис от наводнений, а ущерб автомобилю от воды покрывается только при наличии comprehensive. См. наш [чек-лист для страхового случая](/ru/blog/hurricane-claim-checklist-florida), [страхование от наводнений](/ru/flood-insurance-homestead-fl) и [comprehensive или collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: WX,
        },
        {
          headline:
            'Новое: губернатор включил Бровард, Майами-Дейд и Монро в режим чрезвычайной ситуации из-за осенних наводнений — теперь это 21 округ',
          summary:
            'Указ губернатора 26-232, подписанный в среду, 18 ноября, распространяет режим ЧС, объявленный 2 ноября, на **Бровард, Майами-Дейд и Монро**, а также на четыре округа на северо-востоке штата. Основание — более 10 дюймов дождя менее чем за 12 часов 17 ноября в части Форт-Лодердейла, Дейви и Голливуда. Все положения первоначального указа сохраняются, а сам режим действует **60 дней с 2 ноября, если его не продлят**. В частности, фармацевты могут выдать жителям включённых округов экстренный запас лекарств для постоянного приёма на срок до 30 дней, и в нашем районе теперь действует закон штата, запрещающий завышать цены на товары и услуги первой необходимости во время ЧС.',
          why: 'Режим ЧС на уровне штата — это не федеральное объявление о стихийном бедствии, без которого FEMA не выплачивает помощь семьям, поэтому главным способом возместить ущерб остаётся ваш собственный полис. Сначала сообщите об ущербе в страховую компанию или своему агенту, нанимайте только лицензированных подрядчиков, которые могут подтвердить страховку ответственности и workers’ comp, а о завышенных ценах на ремонт или материалы сообщайте в Генеральную прокуратуру Флориды. См. [сертификаты страхования подрядчиков](/ru/blog/certificate-of-insurance-contractors-florida) и наш [чек-лист для страхового случая](/ru/blog/hurricane-claim-checklist-florida).',
          sources: EO,
        },
        {
          headline:
            'Обновление: Национальный центр по ураганам повысил до 60% вероятность того, что депрессия у северо-запада Багамских островов за неделю станет субтропическим или тропическим штормом',
          summary:
            'В 7 утра четверга NHC сообщил, что в пятницу на фронте у северо-запада Багамских островов ожидается образование нетропической депрессии. На выходных, смещаясь на север или северо-восток вблизи юго-восточного побережья США или чуть мористее, она может превратиться в субтропический или тропический шторм. Вероятность формирования — низкая (20%) в ближайшие 48 часов и **средняя (60%) в течение семи дней**, тогда как в среду она оценивалась в 20%. NHC ожидает сильный ветер, опасный прибой и прибрежные подтопления на части юго-восточного и среднеатлантического побережья до начала следующей недели, а NWS Miami предупреждает, что опасное волнение и высокий риск разрывных течений на наших атлантических пляжах сохранятся и на выходных.',
          why: 'Сезон ураганов официально заканчивается 30 ноября, но поздние системы всё ещё формируются, поэтому не ждите, пока шторму дадут имя: проверьте полис, франшизы и страхование от наводнений уже сейчас. Владельцам лодок стоит заранее проверить швартовы и стоянку, пока волнение не усилилось, а купаться при предупреждениях о разрывных течениях нельзя. См. наш [чек-лист к концу сезона](/ru/blog/end-of-hurricane-season-checklist-florida) и [план на случай урагана для лодки](/ru/blog/hurricane-plan-for-your-boat-florida).',
          sources: TROP,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) действует **до 23:59 11 декабря 2026 г.**, то есть ещё 22 дня; на странице FEMA о продлении программы обновлений нет. В реестре округа Майами-Дейд по-прежнему нет итогового решения по постановлению о роботах-доставщиках на тротуарах (дело 261932), которое рассматривалось 17 ноября; мы сообщим результат, когда его опубликуют.',
        },
      ],
      extraSources: BOX,
    },
  },
};
