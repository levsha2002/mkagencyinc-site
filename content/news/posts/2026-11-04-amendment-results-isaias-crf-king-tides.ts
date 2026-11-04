import type { NewsEdition, NewsSource } from '../types';

// Edition for Wednesday, Nov. 4, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const FLEW_AMEND: NewsSource = {
  name: 'Florida Division of Elections — Florida Election Watch',
  date: '2026-11-03',
  url: 'https://floridaelectionwatch.gov/Amendments',
  title: 'Constitutional Amendments — statewide results (Election Night)',
};

const OIR_CRF: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-11-03',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/11/03/notice-to-industry-hurricane-isaias-catastrophe-reporting',
  title: 'NOTICE TO INDUSTRY: Hurricane Isaias Catastrophe Reporting',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-04',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 3:23 a.m. EST Wed Nov 4, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-04',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 6:30 a.m. EST Wed Nov 4, 2026',
};

const MDC_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (updated 03.26.2026)',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-04',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Wed Nov 4, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const AMEND = [FLEW_AMEND];
const CRF = [OIR_CRF];
const WX = [NWS_MFL_CFW, NWS_MFL_AFD, MDC_KING];
const CIT = [CITIZENS_CAL];
const BOX = [NHC_TWO, FEMA_REAUTH];

export const edition: NewsEdition = {
  slug: '2026-11-04-amendment-results-isaias-crf-king-tides',
  datePublished: '2026-11-04',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 4, 2026: Amendment 3 homestead measure passes, insurers file another Isaias claims report Friday, and king tides begin Nov. 6–9',
      metaTitle: 'Insurance News Nov. 4, 2026: Am. 3, Isaias CRF, King Tides | M&K',
      description:
        'Unofficial results show Amendment 3 clearing 60%, OIR sets a Friday noon Isaias catastrophe-reporting deadline, and South Florida’s next king-tide window starts Friday.',
      ogAlt:
        'A ballot box with a checked paper next to a house, a clipboard with storm-claim charts, and a rising tide near a coastal house',
      intro:
        'Four updates for South Florida drivers, homeowners and small-business owners on Wednesday after Election Day. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: Unofficial results show Amendment 3 passed; Amendments 1 and 2 fell short of 60%',
          summary:
            'Florida Election Watch (Division of Elections) election-night returns show **Amendment 3** — increased homestead exemption and a lower annual cap on non-homestead assessment increases — with **Yes 4,917,482 (61.99%)** and **No 3,015,840 (38.01%)**, clearing the **60%** threshold required for a constitutional amendment. **Amendment 1** (Budget Stabilization Fund) shows Yes **40.9%** / No **59.1%**. **Amendment 2** shows Yes **58.22%** / No **41.78%**. Provisional and overseas ballots can still be counted, so these are **unofficial** returns, but both failed measures sit well below 60%. As summarized ahead of the vote, Amendment 3 phases a larger non-school homestead exemption (**$150,000 in 2027**, **$250,000 in 2028**, then inflation indexing) and lowers the non-homestead assessment-increase cap from **10% to 5%** (school taxes treated separately).',
          why: 'Property-tax changes can affect escrow and what you budget for housing costs, but your dwelling limit should still track rebuild cost—not assessed value. Ask us to review your [homeowners coverage](/en/homeowners-insurance-florida-city) if your declarations look outdated.',
          sources: AMEND,
        },
        {
          headline:
            'Update: OIR sets Friday, Nov. 6 at noon ET as the next simplified Hurricane Isaias catastrophe-reporting deadline',
          summary:
            'On **Nov. 3** the Florida Office of Insurance Regulation issued another Notice to Industry requiring authorized property insurers to file a simplified **2026 Catastrophe Reporting Form (CRF)** for Hurricane Isaias through the Insurance Regulation Filing System. Data is due by **12 p.m. ET Friday, Nov. 6, 2026**. Reporting is **cumulative** as of the filing date; companies with no Florida policies or no claims still file **“No Data”** once, then must switch to data filings if claims arrive. The CRF is how the Office gathers county and statewide claim counts and related figures after a catastrophe so regulators—and later the public summary reports OIR may publish—can track market impact. This notice sets the filing deadline only; **it does not publish new claim totals**.',
          why: 'If you still have an open Isaias claim, keep adjusting notes, photos and correspondence dated. Aggregate CRF numbers, when OIR posts them, are industry statistics—not your individual settlement. Use our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) while you wait.',
          sources: CRF,
        },
        {
          headline:
            'Update: Coastal Flood Advisory ends; minor coastal flooding statement through Wednesday evening as king tides Nov. 6–9 approach',
          summary:
            'NWS Miami’s 3:23 a.m. Wednesday Coastal Hazard Message keeps a **Coastal Flood Statement** (isolated **minor** coastal flooding near high tide) for coastal Miami-Dade, Broward and Palm Beach **through Wednesday evening**—a step down from the Coastal Flood Advisory that ran through Tuesday evening. A **high rip current risk** continues through Wednesday evening for Palm Beach and until 10 a.m. Wednesday for Miami-Dade/Broward. The 6:30 a.m. Area Forecast Discussion still flags localized flooding risk where recent heavy rain soaked soils (highest chances this morning along the Atlantic coast) and **minor coastal flooding** at high tide, with drier air and weaker winds expected later Wednesday into the weekend. Miami-Dade’s published king-tide calendar lists the next window as **Nov. 6–9** (then **Nov. 23–26**), ahead of the **Nov. 9** new moon.',
          why: 'Move cars off low streets before peak tides, and do not drive flooded roads—salt water damage is usually a comprehensive claim ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Rising water into a building is generally a separate [flood policy](/en/flood-insurance-homestead-fl); NFIP coverage usually has a 30-day wait.',
          sources: WX,
        },
        {
          headline:
            'Update: Tomorrow (Thursday, Nov. 5) is the choice deadline for Citizens’ Nov. 17 takeout round',
          summary:
            'Citizens’ 2026 Personal Lines Depopulation Calendar still lists **Thursday, Nov. 5** as the policyholder choice deadline for the **Nov. 17** assumption round. If no choice is registered by the deadline, Citizens assigns the policy to a selecting takeout company (or to the company with the lowest estimated premium when more than one selected it). The next calendar round after that has a **Dec. 4** choice deadline for a **Dec. 15** assumption.',
          why: 'Compare limits, deductibles and exclusions—not only the estimated premium—before you accept or stay. We can walk through an offer using our [Citizens local-agent guide](/en/blog/citizens-property-insurance-local-agent) and, in English, the [take-out offer checklist](/en/blog/citizens-takeout-offer).',
          sources: CIT,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Hurricane Center’s 7 a.m. Wednesday outlook: a broad low is forming a few hundred miles south of Bermuda along a remnant front, with a low chance of subtropical development in 48 hours (30%) and a medium chance over seven days (50%) while it moves slowly east over the western and central subtropical Atlantic—no Florida watches or warnings. The National Flood Insurance Program remains authorized only through 11:59 p.m. on Dec. 11, 2026.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros de Florida, 4 de noviembre de 2026: la Enmienda 3 de homestead es aprobada, las aseguradoras deben reportar reclamos de Isaias el viernes y las mareas reales empiezan del 6 al 9 de noviembre',
      metaTitle: 'Noticias de seguros 4/11/2026: Enmienda 3, CRF Isaias, mareas | M&K',
      description:
        'Resultados no oficiales muestran que la Enmienda 3 supera el 60%, la OIR fija el mediodía del viernes para el reporte de catástrofe de Isaias y la próxima ventana de mareas reales empieza el viernes.',
      ogAlt:
        'Una urna con una papeleta marcada junto a una casa, un portapapeles con gráficas de reclamos por tormenta y una marea alta cerca de una casa costera',
      intro:
        'Cuatro novedades para conductores, propietarios de vivienda y dueños de pequeños negocios en el sur de Florida, el miércoles después del Día de las Elecciones. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline:
            'Actualización: resultados no oficiales indican que la Enmienda 3 fue aprobada; las Enmiendas 1 y 2 no alcanzaron el 60%',
          summary:
            'Los retornos de la noche electoral de Florida Election Watch (División de Elecciones) muestran la **Enmienda 3** — mayor exención homestead y un tope anual más bajo en aumentos de avalúo de propiedades no homestead — con **Sí 4,917,482 (61.99%)** y **No 3,015,840 (38.01%)**, por encima del **60%** que exige una enmienda constitucional. La **Enmienda 1** (fondo de estabilización presupuestaria) aparece con Sí **40.9%** / No **59.1%**. La **Enmienda 2** aparece con Sí **58.22%** / No **41.78%**. Aún pueden contarse boletas provisionales y del exterior, así que estos son retornos **no oficiales**, pero ambas medidas fallidas quedan claramente por debajo del 60%. Como se resumió antes de la votación, la Enmienda 3 aumenta por fases la exención homestead no escolar (**$150,000 en 2027**, **$250,000 en 2028**, luego indexación a la inflación) y baja el tope de aumento de avalúo no homestead del **10% al 5%** (los impuestos escolares se tratan aparte).',
          why: 'Los cambios en impuestos a la propiedad pueden afectar el escrow y el presupuesto de vivienda, pero el límite de dwelling debe seguir el costo de reconstrucción—no el valor tasado. Pídanos revisar su [seguro de hogar](/es/homeowners-insurance-florida-city) si sus declaraciones parecen desactualizadas.',
          sources: AMEND,
        },
        {
          headline:
            'Actualización: la OIR fija el viernes 6 de noviembre a las 12 p.m. ET como el próximo plazo simplificado de reporte de catástrofe por el huracán Isaias',
          summary:
            'El **3 de noviembre**, la Oficina de Regulación de Seguros de Florida emitió otro aviso a la industria que obliga a las aseguradoras de propiedad autorizadas a presentar un **Formulario de Reporte de Catástrofe (CRF) 2026** simplificado por el huracán Isaias a través del Insurance Regulation Filing System. Los datos vencen el **viernes 6 de noviembre de 2026 a las 12 p.m. ET**. El reporte es **acumulativo** a la fecha de la presentación; las compañías sin pólizas en Florida o sin reclamos aún presentan **“No Data”** una vez y luego deben pasar a presentaciones con datos si llegan reclamos. El CRF es cómo la Oficina reúne conteos de reclamos por condado y a nivel estatal tras una catástrofe para que los reguladores—y más adelante los resúmenes públicos que la OIR pueda publicar—sigan el impacto en el mercado. Este aviso solo fija el plazo de presentación; **no publica nuevos totales de reclamos**.',
          why: 'Si todavía tiene un reclamo abierto de Isaias, conserve notas del ajustador, fotos y correspondencia con fecha. Los números agregados del CRF, cuando la OIR los publique, son estadísticas del mercado—no su liquidación individual. Use nuestra [lista para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida) mientras espera.',
          sources: CRF,
        },
        {
          headline:
            'Actualización: terminó el aviso por inundación costera; queda un aviso de inundación costera menor hasta el miércoles por la noche mientras se acercan las mareas reales del 6 al 9 de noviembre',
          summary:
            'El mensaje de peligro costero del NWS Miami a las 3:23 a.m. del miércoles mantiene un **Coastal Flood Statement** (inundación costera **menor** aislada cerca de la marea alta) para la costa de Miami-Dade, Broward y Palm Beach **hasta el miércoles por la noche**—un nivel por debajo del Coastal Flood Advisory que corría hasta el martes por la noche. El **alto riesgo de corrientes de resaca** sigue hasta el miércoles por la noche en Palm Beach y hasta las 10 a.m. del miércoles en Miami-Dade/Broward. El Area Forecast Discussion de las 6:30 a.m. aún señala riesgo de inundación localizada donde la lluvia reciente empapó el suelo (más probabilidad esta mañana en la costa Atlántica) e **inundación costera menor** en marea alta, con aire más seco y vientos más débiles hacia el fin de semana. El calendario de mareas reales de Miami-Dade indica la próxima ventana del **6 al 9 de noviembre** (luego **23–26 de noviembre**), antes de la **luna nueva del 9 de noviembre**.',
          why: 'Mueva los carros de calles bajas antes de las mareas máximas y no conduzca por agua—el daño por agua salada suele ser un reclamo de comprehensive ([comprehensive o collision](/es/blog/comprehensive-vs-collision-florida)). El agua que sube en un edificio suele ser una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte; el NFIP suele tener 30 días de espera.',
          sources: WX,
        },
        {
          headline:
            'Actualización: mañana (jueves 5 de noviembre) vence el plazo para elegir en la ronda de traspaso de Citizens del 17 de noviembre',
          summary:
            'El calendario de depopulation de líneas personales de Citizens para 2026 sigue listando el **jueves 5 de noviembre** como fecha límite de elección del asegurado para la ronda de asunción del **17 de noviembre**. Si no se registra una decisión a tiempo, Citizens asigna la póliza a una compañía de traspaso que la seleccionó (o a la de prima estimada más baja si varias la eligieron). La siguiente ronda del calendario tiene fecha límite el **4 de diciembre** para una asunción el **15 de diciembre**.',
          why: 'Compare límites, deducibles y exclusiones—no solo la prima estimada—antes de aceptar o quedarse. Podemos revisar una oferta con nuestra [guía del agente local de Citizens](/es/blog/citizens-property-insurance-local-agent).',
          sources: CIT,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'La perspectiva de las 7 a.m. del miércoles del Centro Nacional de Huracanes: se forma una baja amplia a unos cientos de millas al sur de Bermudas a lo largo de un frente residual, con baja probabilidad de desarrollo subtropical en 48 horas (30%) y media en siete días (50%) mientras se mueve lentamente hacia el este sobre el Atlántico subtropical occidental y central—sin vigilancias ni avisos para Florida. El Programa Nacional de Seguro contra Inundaciones sigue autorizado solo hasta las 11:59 p.m. del 11 de diciembre de 2026.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 4 ноября 2026: поправка 3 о homestead принята, страховщики снова сдают отчёт по искам Isaias в пятницу, королевские приливы — 6–9 ноября',
      metaTitle: 'Страховые новости 4.11.2026: поправка 3, CRF Isaias, приливы | M&K',
      description:
        'Неофициальные итоги: поправка 3 набрала больше 60%, OIR назначила полдень пятницы для катастрофного отчёта по Isaias, следующее окно королевских приливов начинается в пятницу.',
      ogAlt:
        'Урна для голосования с отмеченным бюллетенем рядом с домом, планшет с графиками штормовых претензий и поднимающийся прилив у прибрежного дома',
      intro:
        'Четыре новости для водителей, владельцев жилья и малого бизнеса на юге Флориды в среду после дня выборов. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: неофициальные итоги — поправка 3 принята; поправки 1 и 2 не набрали 60%',
          summary:
            'Ночные итоги Florida Election Watch (Division of Elections) по **поправке 3** — увеличение homestead-освобождения и более низкий годовой потолок роста оценки не-homestead объектов — показывают **«за» 4 917 482 (61,99%)** и **«против» 3 015 840 (38,01%)**, то есть выше порога **60%** для конституционной поправки. **Поправка 1** (бюджетный стабилизационный фонд): «за» **40,9%** / «против» **59,1%**. **Поправка 2**: «за» **58,22%** / «против» **41,78%**. Ещё могут учесть provisional и зарубежные бюллетени, поэтому это **неофициальные** данные, но обе неуспешные меры явно ниже 60%. Как кратко писали до голосования, поправка 3 поэтапно повышает нешкольное homestead-освобождение (**$150 000 в 2027**, **$250 000 в 2028**, затем индексация) и снижает потолок роста оценки не-homestead с **10% до 5%** (школьные налоги отдельно).',
          why: 'Изменения налога на имущество могут затронуть escrow и бюджет на жильё, но лимит dwelling должен отражать стоимость восстановления — не оценочную стоимость. Попросите нас проверить вашу [страховку жилья](/ru/homeowners-insurance-florida-city), если декларации устарели.',
          sources: AMEND,
        },
        {
          headline:
            'Обновление: OIR назначила пятницу, 6 ноября, 12:00 ET следующим упрощённым сроком катастрофной отчётности по урагану Isaias',
          summary:
            '**3 ноября** Управление по регулированию страхования Флориды снова направило Notice to Industry: уполномоченные имущественные страховщики должны подать упрощённую **форму катастрофной отчётности CRF 2026** по урагану Isaias через Insurance Regulation Filing System. Данные — до **12:00 ET в пятницу, 6 ноября 2026**. Отчётность **накопительная** на дату подачи; компании без полисов во Флориде или без претензий один раз подают **«No Data»**, а при появлении претензий обязаны перейти на подачи с данными. CRF — способ, которым Управление собирает по округам и по штату число претензий и связанные показатели после катастрофы, чтобы регуляторы (и позже возможные сводные отчёты OIR) отслеживали влияние на рынок. Это уведомление только задаёт срок подачи; **новых итоговых цифр по претензиям оно не публикует**.',
          why: 'Если у вас ещё открыта претензия по Isaias, храните заметки аджастера, фото и переписку с датами. Агрегированные цифры CRF, когда OIR их выложит, — отраслевая статистика, а не ваше индивидуальное урегулирование. Пока ждёте, опирайтесь на наш [чек-лист ураганной претензии](/ru/blog/hurricane-claim-checklist-florida).',
          sources: CRF,
        },
        {
          headline:
            'Обновление: Coastal Flood Advisory снят; до вечера среды действует предупреждение о слабом прибрежном подтоплении, королевские приливы 6–9 ноября близко',
          summary:
            'Coastal Hazard Message NWS Miami в 3:23 утра среды оставляет **Coastal Flood Statement** (изолированное **слабое** прибрежное подтопление у высокой воды) для побережья Майами-Дейд, Бровард и Палм-Бич **до вечера среды** — это ниже уровня Coastal Flood Advisory, действовавшего до вечера вторника. **Высокий риск обратных течений** сохраняется до вечера среды в Палм-Бич и до 10:00 среды в Майами-Дейд/Бровард. Area Forecast Discussion в 6:30 утра всё ещё отмечает риск локальных паводков там, где недавние ливни насытили почву (выше всего этим утром вдоль атлантического побережья), и **слабое прибрежное подтопление** на высокой воде; к выходным ждут более сухой воздух и слабее ветер. В календаре королевских приливов Майами-Дейд следующее окно — **6–9 ноября** (затем **23–26 ноября**), перед **новолунием 9 ноября**.',
          why: 'Переставьте машины с низких улиц до пика приливов и не ездите по воде — ущерб от солёной воды обычно идёт по comprehensive ([comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida)). Поднявшуюся воду в здании обычно покрывает отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl); у NFIP обычно ожидание 30 дней.',
          sources: WX,
        },
        {
          headline:
            'Обновление: завтра (четверг, 5 ноября) — срок выбора для раунда передачи полисов Citizens 17 ноября',
          summary:
            'Календарь depopulation личных линий Citizens на 2026 год по-прежнему указывает **четверг, 5 ноября** как срок выбора страхователя для раунда принятия полисов **17 ноября**. Если к сроку выбор не зарегистрирован, Citizens передаёт полис выбранной takeout-компании (или компании с самой низкой оценочной премией, если полис выбрали несколько). Следующий раунд календаря — срок выбора **4 декабря** для принятия **15 декабря**.',
          why: 'Сравнивайте лимиты, франшизы и исключения — не только оценочную премию — прежде чем соглашаться или оставаться. Мы можем разобрать предложение по нашему [гайду местного агента Citizens](/ru/blog/citizens-property-insurance-local-agent).',
          sources: CIT,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Прогноз Национального центра по ураганам на 7:00 среды: к югу от Бермуд вдоль остаточного фронта формируется широкая область низкого давления; вероятность субтропического развития низкая за 48 часов (30%) и средняя за семь дней (50%), пока система медленно уходит на восток над западной и центральной субтропической Атлантикой — без предупреждений для Флориды. Национальная программа страхования от наводнений (NFIP) продлена только до 23:59 11 декабря 2026 года.',
        },
      ],
      extraSources: BOX,
    },
  },
};
