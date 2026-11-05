import type { NewsEdition, NewsSource } from '../types';

// Edition for Thursday, Nov. 5, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (updated 03.26.2026)',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-05',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 3:04 a.m. EST Thu Nov 5, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-05',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 6:23 a.m. EST Thu Nov 5, 2026',
};

const MDC_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const EO_227: NewsSource = {
  name: 'Executive Office of the Governor of Florida',
  date: '2026-11-02',
  url: 'https://www.flgov.com/eog/sites/default/files/executive-orders/2026/EO%2026-227.pdf',
  title: 'Executive Order 26-227 — Emergency Management – 2026 Fall Flooding',
};

const EO_228: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-11-04',
  url: 'https://www.floridadisaster.org/globalassets/hazards-and-weather/flooding/eo-26-228.pdf',
  title: 'Executive Order 26-228 — Amending EO 26-227 – 2026 Fall Flooding',
};

const FLHSMV_EO: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-11-04',
  url: 'https://www.flhsmv.gov/wp-content/uploads/Amended%20EO-26-227-Fall-Flooding.pdf',
  title: 'Amended Emergency Order 26-06 pursuant to EO 26-228 (filed Nov 4, 2026)',
};

const OIR_CRF: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-11-03',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/11/03/notice-to-industry-hurricane-isaias-catastrophe-reporting',
  title: 'NOTICE TO INDUSTRY: Hurricane Isaias Catastrophe Reporting',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-05',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Thu Nov 5, 2026',
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

const CIT = [CITIZENS_CAL];
const WX = [NWS_MFL_CFW, NWS_MFL_AFD, MDC_KING];
const FLOOD_EO = [EO_228, EO_227, FLHSMV_EO];
const CRF = [OIR_CRF];
const BOX = [NHC_TWO, FEMA_REAUTH, OIR_NCCI];

export const edition: NewsEdition = {
  slug: '2026-11-05-citizens-deadline-king-tides-flood-emergency',
  datePublished: '2026-11-05',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 5, 2026: Citizens choice deadline is today, king tides begin tomorrow, and a fall-flooding emergency expands into Palm Beach',
      metaTitle: 'Insurance News Nov. 5, 2026: Citizens, King Tides, Flood EO | M&K',
      description:
        'Today is the Citizens Nov. 17 takeout choice deadline, South Florida’s king-tide window opens Friday, and EO 26-228 adds Palm Beach to the fall-flooding emergency.',
      ogAlt:
        'A calendar marked today next to a house, rising king-tide water near a coastal home, and a state emergency seal over flooded roads',
      intro:
        'Four updates for South Florida drivers, homeowners and small-business owners on Thursday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: Today (Thursday, Nov. 5) is the last day to register a choice for Citizens’ Nov. 17 takeout round',
          summary:
            'Citizens’ 2026 Personal Lines Depopulation Calendar lists **Thursday, Nov. 5** as the policyholder choice deadline for the **Nov. 17** assumption round. Agents or policyholders must register the preference on or before that date. If no choice is registered, Citizens assigns the policy to a selecting takeout company—or to the company with the lowest estimated premium when more than one selected it. Policyholders who are eligible and ask to remain with Citizens receive a Remain with Citizens confirmation. The next calendar round after this one has a **Dec. 4** choice deadline for a **Dec. 15** assumption. Citizens states that once an assumption occurs, the transfer is final—there is no longer a 30-day window to return.',
          why: 'Compare limits, deductibles and exclusions—not only the estimated premium—before you accept or stay. We can walk through an offer using our [Citizens local-agent guide](/en/blog/citizens-property-insurance-local-agent) and, in English, the [take-out offer checklist](/en/blog/citizens-takeout-offer).',
          sources: CIT,
        },
        {
          headline:
            'Update: King tides begin tomorrow (Nov. 6–9); coastal flood statement continues through Thursday evening',
          summary:
            'NWS Miami’s 3:04 a.m. Thursday Coastal Hazard Message keeps a **Coastal Flood Statement** for coastal Miami-Dade, Broward and Palm Beach **through Thursday evening**, with **isolated minor coastal flooding** possible around high tide and some water on low-lying roads and property. The 6:23 a.m. Area Forecast Discussion’s key messages still include **minor coastal flooding at high tide**, while noting a much drier, sunnier pattern that should help communities still dealing with lingering street water. Miami-Dade’s published king-tide calendar lists the next window as **Nov. 6–9** (then **Nov. 23–26**), ahead of the **Nov. 9** new moon. County guidance: move vehicles to higher ground before peaks, do not drive flooded roads, and rinse after salt water.',
          why: 'Salt-water damage to a car is usually a comprehensive claim ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Rising water into a building is generally a separate [flood policy](/en/flood-insurance-homestead-fl); NFIP coverage usually has a 30-day wait. Our [king-tides flood guide](/en/blog/king-tides-flood-insurance-miami-dade) covers the South Florida windows.',
          sources: WX,
        },
        {
          headline:
            'New: Governor expands the 2026 Fall Flooding emergency into Palm Beach; FLHSMV waives duplicate plate and license fees in the affected counties',
          summary:
            'On **Nov. 2**, Executive Order **26-227** declared a state of emergency for Brevard, DeSoto, Hardee, Highlands, Indian River, Martin and St. Lucie after heavy rain and flash-flood warnings. On **Nov. 4**, Executive Order **26-228** amended that list to add **Glades, Hendry, Lake, Okeechobee, Palm Beach, Seminole and Volusia**, citing among other impacts **record rainfall in parts of Palm Beach County, including Riviera Beach (over 19 inches in 12 hours)**. The Florida Division of Emergency Management hosts the Fall Flooding update page with both orders. Separately, FLHSMV’s Amended Emergency Order filed **Nov. 4** (pursuant to EO 26-228) waives fees for duplicate or replacement vehicle plates, registrations, titles, disabled parking permits, driver licenses, ID cards and vessel documents in the affected counties, and defers related late fees when offices closed for weather; the FLHSMV order runs through **Jan. 3, 2027** unless rescinded earlier. Miami-Dade and Broward are **not** on the EO county list.',
          why: 'If floodwater ruined your registration, plate or license in an affected county (including Palm Beach), ask your tax collector or FLHSMV about the waived duplicate fees before you pay. Document car and property damage with dated photos before cleanup, and review whether a claim belongs under comprehensive auto or a separate flood policy—start with our [claim checklist](/en/blog/hurricane-claim-checklist-florida).',
          sources: FLOOD_EO,
        },
        {
          headline:
            'Update: Tomorrow (Friday, Nov. 6) at noon ET is the next simplified Hurricane Isaias catastrophe-reporting deadline',
          summary:
            'The Florida Office of Insurance Regulation’s **Nov. 3** Notice to Industry still requires authorized property insurers to file a simplified **2026 Catastrophe Reporting Form (CRF)** for Hurricane Isaias through the Insurance Regulation Filing System by **12 p.m. ET Friday, Nov. 6, 2026**. Reporting is **cumulative** as of the filing date; companies with no Florida policies or no claims file **“No Data”** once, then must switch to data filings if claims arrive. The CRF is how the Office gathers claim counts and related figures after a catastrophe so regulators—and later any public summary reports OIR may publish—can track market impact. The notice sets the filing deadline only; **it does not publish new claim totals**.',
          why: 'If you still have an open Isaias claim, keep adjusting notes, photos and correspondence dated. Aggregate CRF numbers, when OIR posts them, are industry statistics—not your individual settlement. Use our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) while you wait.',
          sources: CRF,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Hurricane Center’s 7 a.m. Thursday outlook: a broad non-tropical low a few hundred miles south of Bermuda may gradually acquire subtropical characteristics this weekend while moving slowly east over the western and central subtropical Atlantic (30% in 48 hours; 50% over seven days)—no Florida watches or warnings. Public comments on the NCCI 2027 workers’ compensation rate filing (overall average −7.4% voluntary market, effective Jan. 1, 2027) remain open at ratehearings@floir.gov through Monday, Nov. 10 at 5 p.m. ET. The National Flood Insurance Program remains authorized only through 11:59 p.m. on Dec. 11, 2026.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros de Florida, 5 de noviembre de 2026: hoy vence la elección de Citizens, mañana empiezan las mareas reales y la emergencia por inundaciones de otoño llega a Palm Beach',
      metaTitle: 'Noticias de seguros 5/11/2026: Citizens, mareas, EO inundación | M&K',
      description:
        'Hoy es el plazo de elección de Citizens para el traspaso del 17 de noviembre, la ventana de mareas reales empieza el viernes y la EO 26-228 añade Palm Beach a la emergencia por inundaciones.',
      ogAlt:
        'Un calendario marcado hoy junto a una casa, agua de marea real junto a una casa costera y un sello de emergencia estatal sobre calles inundadas',
      intro:
        'Cuatro novedades para conductores, propietarios de vivienda y dueños de pequeños negocios en el sur de Florida este jueves. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline:
            'Actualización: hoy (jueves 5 de noviembre) es el último día para registrar una elección en la ronda de traspaso de Citizens del 17 de noviembre',
          summary:
            'El calendario de depopulation de líneas personales de Citizens para 2026 lista el **jueves 5 de noviembre** como fecha límite de elección del asegurado para la ronda de asunción del **17 de noviembre**. El agente o el asegurado debe registrar la preferencia en o antes de esa fecha. Si no se registra una decisión, Citizens asigna la póliza a una compañía de traspaso que la seleccionó—o a la de prima estimada más baja si varias la eligieron. Quienes sean elegibles y pidan quedarse con Citizens reciben una confirmación Remain with Citizens. La siguiente ronda del calendario tiene fecha límite el **4 de diciembre** para una asunción el **15 de diciembre**. Citizens indica que, una vez ocurre la asunción, el traspaso es definitivo: ya no hay una ventana de 30 días para volver.',
          why: 'Compare límites, deducibles y exclusiones—no solo la prima estimada—antes de aceptar o quedarse. Podemos revisar una oferta con nuestra [guía del agente local de Citizens](/es/blog/citizens-property-insurance-local-agent).',
          sources: CIT,
        },
        {
          headline:
            'Actualización: las mareas reales empiezan mañana (6–9 de noviembre); el aviso de inundación costera menor sigue hasta el jueves por la noche',
          summary:
            'El mensaje de peligro costero del NWS Miami a las 3:04 a.m. del jueves mantiene un **Coastal Flood Statement** para la costa de Miami-Dade, Broward y Palm Beach **hasta el jueves por la noche**, con **inundación costera menor aislada** posible cerca de la marea alta y algo de agua en calles y propiedades bajas. Los mensajes clave del Area Forecast Discussion de las 6:23 a.m. siguen incluyendo **inundación costera menor en marea alta**, y señalan un patrón mucho más seco y soleado que debería ayudar a las comunidades que aún lidian con agua estancada. El calendario de mareas reales de Miami-Dade indica la próxima ventana del **6 al 9 de noviembre** (luego **23–26 de noviembre**), antes de la **luna nueva del 9 de noviembre**. La guía del condado: mueva vehículos a terreno más alto antes de los picos, no conduzca por calles inundadas y enjuague después del agua salada.',
          why: 'El daño por agua salada en un carro suele ser un reclamo de comprehensive ([comprehensive o collision](/es/blog/comprehensive-vs-collision-florida)). El agua que sube en un edificio suele ser una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte; el NFIP suele tener 30 días de espera. Nuestra [guía de mareas reales e inundación](/es/blog/king-tides-flood-insurance-miami-dade) cubre las ventanas del sur de Florida.',
          sources: WX,
        },
        {
          headline:
            'Nuevo: el gobernador amplía la emergencia por inundaciones de otoño 2026 a Palm Beach; FLHSMV exime tarifas de placas y licencias duplicadas en los condados afectados',
          summary:
            'El **2 de noviembre**, la Orden Ejecutiva **26-227** declaró estado de emergencia en Brevard, DeSoto, Hardee, Highlands, Indian River, Martin y St. Lucie tras lluvias intensas y avisos de inundación repentina. El **4 de noviembre**, la Orden Ejecutiva **26-228** enmendó esa lista para añadir **Glades, Hendry, Lake, Okeechobee, Palm Beach, Seminole y Volusia**, citando entre otros impactos **lluvia récord en partes de Palm Beach County, incluida Riviera Beach (más de 19 pulgadas en 12 horas)**. La División de Manejo de Emergencias de Florida publica la página de actualización Fall Flooding con ambas órdenes. Por separado, la Orden de Emergencia Enmendada de FLHSMV presentada el **4 de noviembre** (conforme a la EO 26-228) exime tarifas de placas, registros, títulos, permisos de estacionamiento para discapacitados, licencias de conducir, tarjetas de identidad y documentos de embarcaciones duplicados o de reemplazo en los condados afectados, y aplaza cargos por demora relacionados cuando las oficinas cerraron por el clima; la orden de FLHSMV corre hasta el **3 de enero de 2027** salvo que se rescinda antes. Miami-Dade y Broward **no** están en la lista de condados de la EO.',
          why: 'Si el agua dañó su registro, placa o licencia en un condado afectado (incluido Palm Beach), pregunte en el tax collector o FLHSMV por las tarifas de duplicado exentas antes de pagar. Documente el daño al carro y a la propiedad con fotos fechadas antes de limpiar, y revise si el reclamo corresponde al auto comprehensive o a una póliza de inundación aparte—empiece con nuestra [lista para reclamos](/es/blog/hurricane-claim-checklist-florida).',
          sources: FLOOD_EO,
        },
        {
          headline:
            'Actualización: mañana (viernes 6 de noviembre) a las 12 p.m. ET vence el próximo plazo simplificado de reporte de catástrofe por el huracán Isaias',
          summary:
            'El aviso a la industria de la Oficina de Regulación de Seguros de Florida del **3 de noviembre** sigue exigiendo a las aseguradoras de propiedad autorizadas presentar un **Formulario de Reporte de Catástrofe (CRF) 2026** simplificado por el huracán Isaias a través del Insurance Regulation Filing System a más tardar el **viernes 6 de noviembre de 2026 a las 12 p.m. ET**. El reporte es **acumulativo** a la fecha de la presentación; las compañías sin pólizas en Florida o sin reclamos presentan **“No Data”** una vez y luego deben pasar a presentaciones con datos si llegan reclamos. El CRF es cómo la Oficina reúne conteos de reclamos y cifras relacionadas tras una catástrofe para que los reguladores—y más adelante cualquier resumen público que la OIR publique—sigan el impacto en el mercado. El aviso solo fija el plazo de presentación; **no publica nuevos totales de reclamos**.',
          why: 'Si todavía tiene un reclamo abierto de Isaias, conserve notas del ajustador, fotos y correspondencia con fecha. Los números agregados del CRF, cuando la OIR los publique, son estadísticas del mercado—no su liquidación individual. Use nuestra [lista para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida) mientras espera.',
          sources: CRF,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'La perspectiva de las 7 a.m. del jueves del Centro Nacional de Huracanes: una baja no tropical amplia a unos cientos de millas al sur de Bermudas podría adquirir características subtropicales este fin de semana mientras se mueve lentamente hacia el este sobre el Atlántico subtropical occidental y central (30% en 48 horas; 50% en siete días)—sin vigilancias ni avisos para Florida. Los comentarios públicos sobre la presentación de tarifas de compensación laboral 2027 de NCCI (promedio general −7.4% en el mercado voluntario, vigente el 1 de enero de 2027) siguen abiertos en ratehearings@floir.gov hasta el lunes 10 de noviembre a las 5 p.m. ET. El Programa Nacional de Seguro contra Inundaciones sigue autorizado solo hasta las 11:59 p.m. del 11 de diciembre de 2026.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 5 ноября 2026: сегодня срок выбора Citizens, завтра начинаются королевские приливы, а осенняя ЧС по паводкам расширена на Palm Beach',
      metaTitle: 'Страховые новости 5.11.2026: Citizens, приливы, EO паводков | M&K',
      description:
        'Сегодня — срок выбора Citizens для передачи 17 ноября, окно королевских приливов открывается в пятницу, EO 26-228 добавляет Palm Beach в ЧС по осенним паводкам.',
      ogAlt:
        'Календарь с отметкой «сегодня» рядом с домом, вода королевского прилива у прибрежного дома и печать ЧС штата над затопленными дорогами',
      intro:
        'Четыре новости для водителей, владельцев жилья и малого бизнеса на юге Флориды в четверг. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: сегодня (четверг, 5 ноября) — последний день зарегистрировать выбор для раунда передачи полисов Citizens 17 ноября',
          summary:
            'Календарь depopulation личных линий Citizens на 2026 год указывает **четверг, 5 ноября** как срок выбора страхователя для раунда принятия полисов **17 ноября**. Агент или страхователь должен зарегистрировать предпочтение не позднее этой даты. Если выбор не зарегистрирован, Citizens передаёт полис выбранной takeout-компании — или компании с самой низкой оценочной премией, если полис выбрали несколько. Те, кто имеет право остаться в Citizens и просит об этом, получают подтверждение Remain with Citizens. Следующий раунд календаря — срок выбора **4 декабря** для принятия **15 декабря**. Citizens указывает: после принятия полиса перевод окончательный — 30-дневного окна для возврата больше нет.',
          why: 'Сравнивайте лимиты, франшизы и исключения — не только оценочную премию — прежде чем соглашаться или оставаться. Мы можем разобрать предложение по нашему [гайду местного агента Citizens](/ru/blog/citizens-property-insurance-local-agent).',
          sources: CIT,
        },
        {
          headline:
            'Обновление: королевские приливы начинаются завтра (6–9 ноября); предупреждение о слабом прибрежном подтоплении действует до вечера четверга',
          summary:
            'Coastal Hazard Message NWS Miami в 3:04 утра четверга оставляет **Coastal Flood Statement** для побережья Майами-Дейд, Бровард и Палм-Бич **до вечера четверга**: возможно **изолированное слабое прибрежное подтопление** у высокой воды и вода на низких улицах и участках. Ключевые тезисы Area Forecast Discussion в 6:23 утра по-прежнему включают **слабое прибрежное подтопление на высокой воде**, отмечая гораздо более сухую и солнечную погоду, которая должна помочь районам, где ещё стоит вода после ливней. В календаре королевских приливов Майами-Дейд следующее окно — **6–9 ноября** (затем **23–26 ноября**), перед **новолунием 9 ноября**. Рекомендации округа: переставьте машины на более высокое место до пиков, не ездите по затопленным дорогам и промойте после солёной воды.',
          why: 'Ущерб от солёной воды машине обычно идёт по comprehensive ([comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida)). Поднявшуюся воду в здании обычно покрывает отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl); у NFIP обычно ожидание 30 дней. Наш [гайд по королевским приливам](/ru/blog/king-tides-flood-insurance-miami-dade) описывает окна на юге Флориды.',
          sources: WX,
        },
        {
          headline:
            'Новое: губернатор расширил ЧС по осенним паводкам 2026 на Palm Beach; FLHSMV отменяет сборы за дубликаты номеров и прав в затронутых округах',
          summary:
            '**2 ноября** исполнительный указ **26-227** объявил ЧС в Brevard, DeSoto, Hardee, Highlands, Indian River, Martin и St. Lucie после сильных дождей и предупреждений о внезапных паводках. **4 ноября** указ **26-228** дополнил список округами **Glades, Hendry, Lake, Okeechobee, Palm Beach, Seminole и Volusia**, среди прочего ссылаясь на **рекордные осадки в части Palm Beach County, включая Riviera Beach (более 19 дюймов за 12 часов)**. Florida Division of Emergency Management ведёт страницу Fall Flooding с обоими указами. Отдельно Amended Emergency Order FLHSMV от **4 ноября** (на основании EO 26-228) отменяет сборы за дубликаты/замену номеров, регистраций, титулов, disabled parking permits, водительских прав, ID-карт и судовых документов в затронутых округах и откладывает связанные штрафы за просрочку, если офисы закрывались из-за погоды; приказ FLHSMV действует до **3 января 2027**, если не будет отменён раньше. Miami-Dade и Broward **не** входят в список округов EO.',
          why: 'Если паводок испортил регистрацию, номер или права в затронутом округе (включая Palm Beach), спросите у tax collector или FLHSMV про освобождение от сборов за дубликат, прежде чем платить. Зафиксируйте ущерб машине и имуществу датированными фото до уборки и уточните, идёт ли претензия по auto comprehensive или по отдельному полису от наводнения — начните с нашего [чек-листа претензии](/ru/blog/hurricane-claim-checklist-florida).',
          sources: FLOOD_EO,
        },
        {
          headline:
            'Обновление: завтра (пятница, 6 ноября) в 12:00 ET — следующий упрощённый срок катастрофной отчётности по урагану Isaias',
          summary:
            'Notice to Industry Управления по регулированию страхования Флориды от **3 ноября** по-прежнему требует от уполномоченных имущественных страховщиков подать упрощённую **форму катастрофной отчётности CRF 2026** по урагану Isaias через Insurance Regulation Filing System до **12:00 ET в пятницу, 6 ноября 2026**. Отчётность **накопительная** на дату подачи; компании без полисов во Флориде или без претензий один раз подают **«No Data»**, а при появлении претензий обязаны перейти на подачи с данными. CRF — способ, которым Управление собирает число претензий и связанные показатели после катастрофы, чтобы регуляторы (и позже возможные сводные отчёты OIR) отслеживали влияние на рынок. Уведомление только задаёт срок подачи; **новых итоговых цифр по претензиям оно не публикует**.',
          why: 'Если у вас ещё открыта претензия по Isaias, храните заметки аджастера, фото и переписку с датами. Агрегированные цифры CRF, когда OIR их выложит, — отраслевая статистика, а не ваше индивидуальное урегулирование. Пока ждёте, опирайтесь на наш [чек-лист ураганной претензии](/ru/blog/hurricane-claim-checklist-florida).',
          sources: CRF,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Прогноз Национального центра по ураганам на 7:00 четверга: широкая нетропическая область низкого давления в нескольких сотнях миль к югу от Бермуд может постепенно приобрести субтропические черты в эти выходные, медленно уходя на восток над западной и центральной субтропической Атлантикой (30% за 48 часов; 50% за семь дней) — без предупреждений для Флориды. Публичные комментарии по тарифной заявке NCCI на workers’ compensation 2027 (в среднем −7,4% для добровольного рынка с 1 января 2027) принимаются на ratehearings@floir.gov до понедельника, 10 ноября, 17:00 ET. Национальная программа страхования от наводнений (NFIP) продлена только до 23:59 11 декабря 2026 года.',
        },
      ],
      extraSources: BOX,
    },
  },
};
