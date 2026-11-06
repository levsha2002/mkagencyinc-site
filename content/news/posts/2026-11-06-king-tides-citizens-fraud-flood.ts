import type { NewsEdition, NewsSource } from '../types';

// Edition for Friday, Nov. 6, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-06',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 4:01 a.m. EST Fri Nov 6, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-06',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 5:32 a.m. EST Fri Nov 6, 2026',
};

const MDC_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const NOAA_TIDES: NewsSource = {
  name: 'NOAA Tides and Currents',
  date: '2026-11-06',
  url: 'https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=8723214',
  title: 'Tide predictions — Virginia Key, FL (station 8723214), Nov. 6, 2026',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (updated 03.26.2026)',
};

const DFS_FRAUD: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-11-05',
  url: 'https://myfloridacfo.com/news/pressreleases/press-release-details/2026/11/05/chief-financial-officer-blaise-ingoglia-announces-arrest-after-fraudulent-insurance-claims-filed-by-altered-medical-records-and-altered-crash-report',
  title:
    'CFO announces arrest after fraudulent insurance claims filed by altered medical records and altered crash report',
};

const NWS_MLB_FLW: NewsSource = {
  name: 'National Weather Service Melbourne',
  date: '2026-11-06',
  url: 'https://api.weather.gov/alerts/active?area=FL',
  title: 'Active Flood Warning — St. Johns River near Astor, 9:06 a.m. EST Fri Nov 6, 2026',
};

const EO_228: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-04',
  url: 'https://www.floridadisaster.org/globalassets/hazards-and-weather/flooding/eo-26-228.pdf',
  title: 'Executive Order 26-228 — Amending EO 26-227 – 2026 Fall Flooding',
};

const OIR_CRF: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-11-03',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/11/03/notice-to-industry-hurricane-isaias-catastrophe-reporting',
  title: 'NOTICE TO INDUSTRY: Hurricane Isaias Catastrophe Reporting',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-06',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Fri Nov 6, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-27',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'NCCI 2026 Public Rate Hearing — public comments through Nov 10, 2026',
};

const WX = [NWS_MFL_CFW, NWS_MFL_AFD, MDC_KING, NOAA_TIDES];
const CIT = [CITIZENS_CAL];
const FRAUD = [DFS_FRAUD];
const RIVER = [NWS_MLB_FLW, EO_228];
const BOX = [OIR_CRF, NHC_TWO, FEMA_REAUTH, OIR_NCCI];

export const edition: NewsEdition = {
  slug: '2026-11-06-king-tides-citizens-fraud-flood',
  datePublished: '2026-11-06',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 6, 2026: king tides begin today, Citizens choice deadline has passed, a Broward insurance-fraud arrest, and St. Johns flood warnings continue',
      metaTitle: 'Insurance News Nov. 6, 2026: King Tides, Citizens, Fraud | M&K',
      description:
        'South Florida’s Nov. 6–9 king-tide window opens under a coastal flood statement, the Citizens Nov. 5 choice deadline has passed ahead of the Nov. 17 takeout, and DFS announced a Broward fraud arrest.',
      ogAlt:
        'Rising king-tide water near a coastal house with a tide gauge, a calendar past a marked deadline next to a house, and a clipboard with a crash-report form and checkmark',
      intro:
        'Four updates for South Florida drivers, homeowners and small-business owners on Friday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: King tides begin today (Nov. 6–9); coastal flood statement remains through Friday evening',
          summary:
            'NWS Miami’s 4:01 a.m. Friday Coastal Hazard Message keeps a **Coastal Flood Statement** for coastal Miami-Dade, Broward and Palm Beach **through this evening**, with **isolated minor coastal flooding** possible around high tide and some water on low-lying roads and property. The 5:32 a.m. Area Forecast Discussion’s key message is **minor coastal flooding during high tide**, while the short-term outlook stays dry into the weekend after earlier flooding. Miami-Dade’s published king-tide calendar lists **Nov. 6–9** (then **Nov. 23–26**), ahead of the **Nov. 9** new moon. NOAA tide predictions for Virginia Key show Friday highs around **6:26 a.m.** and **6:38 p.m.** ET. County guidance: move vehicles to higher ground before peaks, do not drive flooded roads, and rinse after salt water.',
          why: 'Salt-water damage to a car is usually a comprehensive claim ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Rising water into a building is generally a separate [flood policy](/en/flood-insurance-homestead-fl); NFIP coverage usually has a 30-day wait. Our [king-tides flood guide](/en/blog/king-tides-flood-insurance-miami-dade) covers the South Florida windows.',
          sources: WX,
        },
        {
          headline:
            'Update: Citizens’ Nov. 5 choice deadline has passed; Nov. 17 assumption still on the calendar',
          summary:
            'Citizens’ 2026 Personal Lines Depopulation Calendar listed **Thursday, Nov. 5** as the policyholder choice deadline for the **Nov. 17** assumption round—so that registration window is now closed. If no choice was registered, Citizens assigns the policy to a selecting takeout company—or to the company with the lowest estimated premium when more than one selected it. Policyholders who were eligible and asked to remain with Citizens receive a Remain with Citizens confirmation. Citizens states that once an assumption occurs, the transfer is final—there is no longer a 30-day window to return. The next calendar round has a **Dec. 4** choice deadline for a **Dec. 15** assumption.',
          why: 'If you still have an offer letter, compare limits, deductibles and exclusions—not only the estimated premium—and confirm with your agent what status letter Citizens will send before Nov. 17. We can walk through an offer using our [Citizens local-agent guide](/en/blog/citizens-property-insurance-local-agent) and, in English, the [take-out offer checklist](/en/blog/citizens-takeout-offer).',
          sources: CIT,
        },
        {
          headline:
            'New: DFS announces Broward County arrest after alleged insurance claims built on altered medical records and a crash report',
          summary:
            'On **Nov. 5**, Chief Financial Officer Blaise Ingoglia announced that the Department of Financial Services Criminal Investigations Division obtained a warrant for **Jazmine Nicole Rhodes**, who was taken into custody at the Broward County Main Jail on **Oct. 21**. Investigators say she filed four fraudulent healthcare claims for her son and claims for three unrelated children without their parents’ knowledge, receiving **$18,520** she was not entitled to, and separately tried to obtain **$11,700** in medical reimbursement for an alleged traffic crash by altering a Florida Highway Patrol crash report and her own medical records to claim a broken leg. DFS says she confessed during a sworn statement. Charges include criminal use of personal identification information, grand theft and insurance fraud; they are allegations until proven in court. The Broward County State Attorney’s Office is prosecuting. DFS asks anyone with fraud tips to call **1-800-378-0445** or report at FraudFreeFlorida.com.',
          why: 'Keep your own crash reports and medical bills unaltered, and treat requests to “fix” an official report as a red flag. Suspected insurance fraud can be reported to DFS at 1-800-378-0445. If you are documenting a real auto claim, start with dated photos and our [claim checklist](/en/blog/hurricane-claim-checklist-florida).',
          sources: FRAUD,
        },
        {
          headline:
            'Update: St. Johns River flood warnings continue Friday in Fall Flooding emergency counties',
          summary:
            'NWS Melbourne’s Friday-morning Flood Warnings keep **moderate flooding** on the St. Johns River near Astor (Lake/Volusia) into early next week as upstream rainwater works north, with additional warnings covering other St. Johns gauges in Seminole, Lake, Volusia and Brevard. That matches the forecast cited in Executive Order **26-228** (Nov. 4), which expanded the 2026 Fall Flooding emergency to 14 counties—including **Palm Beach, Martin, St. Lucie, Seminole, Lake and Volusia**—and noted St. Johns flooding that could last several weeks. Miami-Dade and Broward remain **off** the EO county list. Avoid flooded roads and riverbanks; document damage from a safe place before cleanup.',
          why: 'River and street flooding are usually separate from a standard homeowners wind policy—confirm whether you have a [flood policy](/en/flood-insurance-homestead-fl). If water ruined plates or licenses in an EO county (including Palm Beach), ask FLHSMV about the waived duplicate fees covered in yesterday’s edition, and use our [claim checklist](/en/blog/hurricane-claim-checklist-florida).',
          sources: RIVER,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'OIR’s simplified Hurricane Isaias Catastrophe Reporting Form deadline is **today (Friday, Nov. 6) at noon ET**—the Nov. 3 notice sets the filing deadline only and does not yet post new aggregate claim totals. National Hurricane Center 7 a.m. Friday outlook: a gale-force non-tropical low several hundred miles south of Bermuda (AL94) may briefly acquire subtropical characteristics while moving generally east (20% in 48 hours; 20% over seven days) before being absorbed this weekend—no Florida watches or warnings. Public comments on the NCCI 2027 workers’ compensation rate filing (overall average −7.4% voluntary market, effective Jan. 1, 2027) remain open at ratehearings@floir.gov through Monday, Nov. 10 at 5 p.m. ET. The National Flood Insurance Program remains authorized only through 11:59 p.m. on Dec. 11, 2026.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros de Florida, 6 de noviembre de 2026: empiezan las mareas reales, ya pasó el plazo de Citizens, arresto por fraude en Broward y siguen los avisos en el río St. Johns',
      metaTitle: 'Noticias de seguros 6/11/2026: mareas, Citizens, fraude | M&K',
      description:
        'La ventana de mareas reales del 6–9 de noviembre abre bajo un aviso costero, el plazo de elección de Citizens del 5 de noviembre ya pasó antes del traspaso del 17, y el DFS anunció un arresto por fraude en Broward.',
      ogAlt:
        'Agua de marea real junto a una casa costera con medidor de marea, un calendario pasado el plazo marcado junto a una casa, y un portapapeles con un parte de accidente y una marca de verificación',
      intro:
        'Cuatro novedades para conductores, propietarios de vivienda y dueños de pequeños negocios en el sur de Florida este viernes. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline:
            'Actualización: las mareas reales empiezan hoy (6–9 de noviembre); el aviso de inundación costera menor sigue hasta el viernes por la noche',
          summary:
            'El mensaje de peligro costero del NWS Miami a las 4:01 a.m. del viernes mantiene un **Coastal Flood Statement** para la costa de Miami-Dade, Broward y Palm Beach **hasta esta noche**, con **inundación costera menor aislada** posible cerca de la marea alta y algo de agua en calles y propiedades bajas. El mensaje clave del Area Forecast Discussion de las 5:32 a.m. es **inundación costera menor durante la marea alta**, y el corto plazo se mantiene seco hacia el fin de semana tras las inundaciones anteriores. El calendario de mareas reales de Miami-Dade lista el **6–9 de noviembre** (luego **23–26 de noviembre**), antes de la **luna nueva del 9 de noviembre**. Las predicciones de marea de NOAA para Virginia Key muestran máximos el viernes alrededor de las **6:26 a.m.** y las **6:38 p.m.** ET. Guía del condado: mueva vehículos a terreno más alto antes de los picos, no conduzca por calles inundadas y enjuague después del agua salada.',
          why: 'El daño por agua salada en un carro suele ser un reclamo de comprehensive ([comprehensive o collision](/es/blog/comprehensive-vs-collision-florida)). El agua que sube en un edificio suele ser una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte; el NFIP suele tener 30 días de espera. Nuestra [guía de mareas reales e inundación](/es/blog/king-tides-flood-insurance-miami-dade) cubre las ventanas del sur de Florida.',
          sources: WX,
        },
        {
          headline:
            'Actualización: ya pasó el plazo de elección de Citizens del 5 de noviembre; la asunción del 17 de noviembre sigue en el calendario',
          summary:
            'El calendario de depopulation de líneas personales de Citizens para 2026 listaba el **jueves 5 de noviembre** como fecha límite de elección del asegurado para la ronda de asunción del **17 de noviembre**—esa ventana de registro ya está cerrada. Si no se registró una decisión, Citizens asigna la póliza a una compañía de traspaso que la seleccionó—o a la de prima estimada más baja si varias la eligieron. Quienes eran elegibles y pidieron quedarse con Citizens reciben una confirmación Remain with Citizens. Citizens indica que, una vez ocurre la asunción, el traspaso es definitivo: ya no hay una ventana de 30 días para volver. La siguiente ronda del calendario tiene fecha límite el **4 de diciembre** para una asunción el **15 de diciembre**.',
          why: 'Si aún tiene una carta de oferta, compare límites, deducibles y exclusiones—no solo la prima estimada—y confirme con su agente qué carta de estado enviará Citizens antes del 17 de noviembre. Podemos revisar una oferta con nuestra [guía del agente local de Citizens](/es/blog/citizens-property-insurance-local-agent).',
          sources: CIT,
        },
        {
          headline:
            'Nuevo: el DFS anuncia un arresto en Broward tras reclamos de seguro alegadamente basados en historiales médicos y un parte de accidente alterados',
          summary:
            'El **5 de noviembre**, el director financiero Blaise Ingoglia anunció que la División de Investigaciones Criminales del Departamento de Servicios Financieros obtuvo una orden de arresto contra **Jazmine Nicole Rhodes**, detenida en la cárcel principal del condado Broward el **21 de octubre**. Según los investigadores, presentó cuatro reclamos de atención médica fraudulentos por su hijo y reclamos por tres menores no relacionados sin conocimiento de sus padres, recibió **$18,520** a los que no tenía derecho y, por separado, intentó obtener **$11,700** de reembolso médico por un supuesto choque alterando un parte de la Florida Highway Patrol y sus propios historiales médicos para alegar una pierna rota. El DFS dice que confesó en una declaración jurada. Los cargos incluyen uso criminal de información de identificación personal, hurto mayor y fraude de seguros; son acusaciones hasta que se prueben en un tribunal. La Fiscalía Estatal de Broward lleva el caso. El DFS pide reportar sospechas al **1-800-378-0445** o en FraudFreeFlorida.com.',
          why: 'Conserve sus partes de accidente y facturas médicas sin alterar, y trate cualquier pedido de “arreglar” un informe oficial como una señal de alerta. Las sospechas de fraude de seguros se pueden reportar al DFS al 1-800-378-0445. Si documenta un reclamo de auto real, empiece con fotos fechadas y nuestra [lista para reclamos](/es/blog/hurricane-claim-checklist-florida).',
          sources: FRAUD,
        },
        {
          headline:
            'Actualización: el viernes continúan los avisos de inundación del río St. Johns en condados de la emergencia por inundaciones de otoño',
          summary:
            'Los Flood Warnings del NWS Melbourne de la mañana del viernes mantienen **inundación moderada** en el río St. Johns cerca de Astor (Lake/Volusia) hasta principios de la próxima semana mientras el agua de lluvia aguas arriba avanza hacia el norte, con avisos adicionales en otros medidores del St. Johns en Seminole, Lake, Volusia y Brevard. Eso coincide con el pronóstico citado en la Orden Ejecutiva **26-228** (4 de noviembre), que amplió la emergencia Fall Flooding 2026 a 14 condados—incluidos **Palm Beach, Martin, St. Lucie, Seminole, Lake y Volusia**—y señaló inundaciones del St. Johns que podrían durar varias semanas. Miami-Dade y Broward siguen **fuera** de la lista de condados de la EO. Evite calles y orillas inundadas; documente el daño desde un lugar seguro antes de limpiar.',
          why: 'Las inundaciones de río y calle suelen ser aparte de una póliza de vivienda estándar por viento—confirme si tiene una [póliza de inundación](/es/flood-insurance-homestead-fl). Si el agua arruinó placas o licencias en un condado de la EO (incluido Palm Beach), pregunte a FLHSMV por las tarifas de duplicado exentas cubiertas en la edición de ayer, y use nuestra [lista para reclamos](/es/blog/hurricane-claim-checklist-florida).',
          sources: RIVER,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El plazo del Formulario simplificado de Reporte de Catástrofe (CRF) de la OIR por el huracán Isaias es **hoy (viernes 6 de noviembre) a las 12 p.m. ET**—el aviso del 3 de noviembre solo fija el plazo de presentación y aún no publica nuevos totales agregados de reclamos. Perspectiva del Centro Nacional de Huracanes a las 7 a.m. del viernes: una baja no tropical con vientos de temporal a varios cientos de millas al sur de Bermudas (AL94) podría adquirir brevemente características subtropicales mientras se mueve en general hacia el este (20% en 48 horas; 20% en siete días) antes de ser absorbida este fin de semana—sin vigilancias ni avisos para Florida. Los comentarios públicos sobre la presentación de tarifas de compensación laboral 2027 de NCCI (promedio general −7.4% en el mercado voluntario, vigente el 1 de enero de 2027) siguen abiertos en ratehearings@floir.gov hasta el lunes 10 de noviembre a las 5 p.m. ET. El Programa Nacional de Seguro contra Inundaciones sigue autorizado solo hasta las 11:59 p.m. del 11 de diciembre de 2026.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 6 ноября 2026: сегодня начинаются королевские приливы, срок выбора Citizens прошёл, арест за страховое мошенничество в Broward и продолжаются предупреждения по реке St. Johns',
      metaTitle: 'Страховые новости 6.11.2026: приливы, Citizens, мошенничество | M&K',
      description:
        'Окно королевских приливов 6–9 ноября открывается при coastal flood statement, срок выбора Citizens 5 ноября уже прошёл перед передачей 17 ноября, DFS объявил арест за мошенничество в Broward.',
      ogAlt:
        'Вода королевского прилива у прибрежного дома с уровнемером, календарь после отмеченного срока рядом с домом и планшет с формой ДТП и галочкой',
      intro:
        'Четыре новости для водителей, владельцев жилья и малого бизнеса на юге Флориды в пятницу. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: королевские приливы начинаются сегодня (6–9 ноября); предупреждение о слабом прибрежном подтоплении действует до вечера пятницы',
          summary:
            'Coastal Hazard Message NWS Miami в 4:01 утра пятницы оставляет **Coastal Flood Statement** для побережья Майами-Дейд, Бровард и Палм-Бич **до сегодняшнего вечера**: возможно **изолированное слабое прибрежное подтопление** у высокой воды и вода на низких улицах и участках. Ключевой тезис Area Forecast Discussion в 5:32 утра — **слабое прибрежное подтопление во время высокой воды**, а краткосрочный прогноз остаётся сухим до выходных после недавних паводков. В календаре королевских приливов Майами-Дейд окно — **6–9 ноября** (затем **23–26 ноября**), перед **новолунием 9 ноября**. Прогноз приливов NOAA для Virginia Key показывает пятничные максимумы около **6:26 утра** и **18:38 ET**. Рекомендации округа: переставьте машины на более высокое место до пиков, не ездите по затопленным дорогам и промойте после солёной воды.',
          why: 'Ущерб от солёной воды машине обычно идёт по comprehensive ([comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida)). Поднявшуюся воду в здании обычно покрывает отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl); у NFIP обычно ожидание 30 дней. Наш [гайд по королевским приливам](/ru/blog/king-tides-flood-insurance-miami-dade) описывает окна на юге Флориды.',
          sources: WX,
        },
        {
          headline:
            'Обновление: срок выбора Citizens 5 ноября уже прошёл; принятие полисов 17 ноября по-прежнему в календаре',
          summary:
            'Календарь depopulation личных линий Citizens на 2026 год указывал **четверг, 5 ноября** как срок выбора страхователя для раунда принятия полисов **17 ноября** — это окно регистрации теперь закрыто. Если выбор не был зарегистрирован, Citizens передаёт полис выбранной takeout-компании — или компании с самой низкой оценочной премией, если полис выбрали несколько. Те, кто имел право остаться в Citizens и просил об этом, получают подтверждение Remain with Citizens. Citizens указывает: после принятия полиса перевод окончательный — 30-дневного окна для возврата больше нет. Следующий раунд календаря — срок выбора **4 декабря** для принятия **15 декабря**.',
          why: 'Если у вас ещё есть письмо с предложением, сравните лимиты, франшизы и исключения — не только оценочную премию — и уточните у агента, какое письмо о статусе пришлёт Citizens до 17 ноября. Мы можем разобрать предложение по нашему [гайду местного агента Citizens](/ru/blog/citizens-property-insurance-local-agent).',
          sources: CIT,
        },
        {
          headline:
            'Новое: DFS объявил арест в округе Broward после якобы страховых претензий на основе изменённых медкарт и отчёта о ДТП',
          summary:
            '**5 ноября** финансовый директор Blaise Ingoglia сообщил, что Criminal Investigations Division Департамента финансовых услуг получила ордер на арест **Jazmine Nicole Rhodes**, которую взяли под стражу в главной тюрьме округа Broward **21 октября**. По версии следователей, она подала четыре мошеннические претензии по медобслуживанию за сына и претензии за трёх неродственных детей без ведома родителей, получила **$18 520**, на которые не имела права, и отдельно пыталась получить **$11 700** медвозмещения за якобы ДТП, изменив отчёт Florida Highway Patrol и свои медкарт, чтобы заявить о переломе ноги. DFS сообщает, что она призналась под присягой. Обвинения включают преступное использование персональных идентификационных данных, grand theft и страховое мошенничество; до суда это только обвинения. Дело ведёт прокуратура округа Broward. DFS просит сообщать о подозрениях по телефону **1-800-378-0445** или на FraudFreeFlorida.com.',
          why: 'Храните собственные отчёты о ДТП и медицинские счета без правок и воспринимайте просьбы «подправить» официальный документ как тревожный сигнал. О подозрении в страховом мошенничестве можно сообщить в DFS по 1-800-378-0445. Если вы оформляете реальную автопретензию, начните с датированных фото и нашего [чек-листа претензии](/ru/blog/hurricane-claim-checklist-florida).',
          sources: FRAUD,
        },
        {
          headline:
            'Обновление: в пятницу продолжаются предупреждения о паводке на реке St. Johns в округах осенней ЧС по затоплениям',
          summary:
            'Пятничные утренние Flood Warnings NWS Melbourne сохраняют **умеренный паводок** на реке St. Johns у Astor (Lake/Volusia) до начала следующей недели, пока дождевая вода с верховьев идёт на север; дополнительные предупреждения охватывают другие посты St. Johns в Seminole, Lake, Volusia и Brevard. Это согласуется с прогнозом, на который ссылается исполнительный указ **26-228** (4 ноября), расширивший ЧС Fall Flooding 2026 на 14 округов — включая **Palm Beach, Martin, St. Lucie, Seminole, Lake и Volusia** — и отметивший, что паводок на St. Johns может длиться несколько недель. Miami-Dade и Broward по-прежнему **не** входят в список округов EO. Не ездите по затопленным дорогам и берегам; фиксируйте ущерб из безопасного места до уборки.',
          why: 'Речные и уличные паводки обычно отдельно от стандартного полиса жилья от ветра — уточните, есть ли у вас [полис от наводнения](/ru/flood-insurance-homestead-fl). Если вода испортила номера или права в округе EO (включая Palm Beach), спросите у FLHSMV про освобождение от сборов за дубликат из вчерашнего выпуска и используйте наш [чек-лист претензии](/ru/blog/hurricane-claim-checklist-florida).',
          sources: RIVER,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Срок упрощённой формы катастрофной отчётности OIR (CRF) по урагану Isaias — **сегодня (пятница, 6 ноября) в 12:00 ET**: уведомление от 3 ноября только задаёт срок подачи и пока не публикует новых агрегированных итогов по претензиям. Прогноз Национального центра по ураганам на 7:00 пятницы: нетропическая область низкого давления со штормовыми ветрами в нескольких сотнях миль к югу от Бермуд (AL94) может кратко приобрести субтропические черты, в целом уходя на восток (20% за 48 часов; 20% за семь дней), прежде чем будет поглощена в эти выходные — без предупреждений для Флориды. Публичные комментарии по тарифной заявке NCCI на workers’ compensation 2027 (в среднем −7,4% для добровольного рынка с 1 января 2027) принимаются на ratehearings@floir.gov до понедельника, 10 ноября, 17:00 ET. Национальная программа страхования от наводнений (NFIP) продлена только до 23:59 11 декабря 2026 года.',
        },
      ],
      extraSources: BOX,
    },
  },
};
