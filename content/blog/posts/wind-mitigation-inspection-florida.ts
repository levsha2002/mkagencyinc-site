import type { BlogPost } from '../types';

// Facts checked 2026-10-03 against:
// - Florida OIR Wind Mitigation Resources (floir.gov/consumers/wind-mitigation-resources) — OIR-B1-1802; 5-year validity; revised form effective Apr 1, 2026
// - Florida Statutes s. 627.711 (2026) — notice of hurricane mitigation discounts; authorized inspectors; personal inspection
// - Florida Statutes s. 627.0629 (via OIR page) — OIR reviews wind-loss mitigation fixtures/techniques
// - My Safe Florida Home FAQs (mysafeflhome.com/faqs-2/) — free inspection; grant eligibility; max $10,000; matching vs low-income
// - MSFH support: “Is funding currently available?” (modified Aug 17, 2026) — program accepting applications
// - MSFH 2025-26 program page (mysafeflhome.com/msfh-new-year-2025-26/) — inspection/grant eligibility overview
// No private insurers named. No premium %, discount %, or savings promises. Grant dollar cap stated only as official program limit.
const SOURCES_EN = [
  { label: 'Florida OIR: Wind Mitigation Resources (OIR-B1-1802; form validity; Apr. 1, 2026 revision)', url: 'https://floir.gov/consumers/wind-mitigation-resources' },
  { label: 'Florida Statutes s. 627.711 (2026): notice of hurricane mitigation discounts; uniform mitigation verification form; authorized inspectors', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.711' },
  { label: 'My Safe Florida Home: Frequently Asked Questions (inspection and grant eligibility; grant types)', url: 'https://mysafeflhome.com/faqs-2/' },
  { label: 'My Safe Florida Home Support: Is funding currently available? (applications accepted; Aug. 17, 2026 update)', url: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000024197-is-funding-currently-available-' },
  { label: 'My Safe Florida Home: 2025–26 program overview (inspection and grant criteria)', url: 'https://mysafeflhome.com/msfh-new-year-2025-26/' },
  { label: 'Florida Statutes s. 215.5586 (2025): My Safe Florida Home Program (subject to appropriation)', url: 'https://www.flsenate.gov/laws/statutes/2025/215.5586' },
];

const SOURCES_RU = [
  { label: 'Florida OIR: Wind Mitigation Resources (форма OIR-B1-1802; срок действия; редакция с 1 апреля 2026)', url: 'https://floir.gov/consumers/wind-mitigation-resources' },
  { label: 'Florida Statutes s. 627.711 (2026): уведомление о скидках за hurricane mitigation; единая форма проверки; уполномоченные инспекторы', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.711' },
  { label: 'My Safe Florida Home: Frequently Asked Questions (инспекция и гранты; типы грантов)', url: 'https://mysafeflhome.com/faqs-2/' },
  { label: 'My Safe Florida Home Support: доступно ли финансирование? (приём заявок; обновление 17 августа 2026)', url: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000024197-is-funding-currently-available-' },
  { label: 'My Safe Florida Home: обзор программы 2025–26 (критерии инспекции и гранта)', url: 'https://mysafeflhome.com/msfh-new-year-2025-26/' },
  { label: 'Florida Statutes s. 215.5586 (2025): программа My Safe Florida Home (при наличии ассигнований)', url: 'https://www.flsenate.gov/laws/statutes/2025/215.5586' },
];

export const post: BlogPost = {
  slug: 'wind-mitigation-inspection-florida',
  datePublished: '2026-10-03',
  translations: {
    en: {
      title: 'Wind Mitigation Inspection in Florida: What Form OIR-B1-1802 Documents',
      metaTitle: 'Wind Mitigation Inspection Florida | Form OIR-B1-1802',
      description: 'Wind mitigation inspection in Florida: what Form OIR-B1-1802 documents, who may sign it, how long it lasts, and how My Safe Florida Home fits.',
      excerpt: 'A wind mitigation inspection documents roof, openings, and other hurricane-resistant features on Form OIR-B1-1802. Here is what the form records, who can sign it, and how Florida programs fit in.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'In South Florida, wind and hurricane exposure shape almost every [homeowners insurance](/en/homeowners-insurance-florida-city) conversation. A **wind mitigation inspection** is how many features of your home — roof attachment, opening protection, and related construction details — get documented on the state’s **Uniform Mitigation Verification Inspection Form**, known as **OIR-B1-1802**. Insurers use that form when they evaluate wind-related rating factors for a personal residential policy.' },
        { type: 'p', text: 'This guide explains what the inspection is, what the form typically covers, who is authorized to sign it under Florida law, how long a completed form remains valid, and how the state’s **My Safe Florida Home** program relates — without promising any premium outcome. Coverage and rating always depend on your insurer, your policy, and your home’s actual features.' },

        { type: 'h2', text: 'What a wind mitigation inspection is' },
        { type: 'p', text: 'A wind mitigation inspection is a focused review of construction features that can affect how a house performs in high wind. The authorized inspector records findings on **Form OIR-B1-1802**, the Uniform Mitigation Verification Inspection Form adopted for use when policyholders submit mitigation documentation for wind insurance rating.' },
        { type: 'p', text: 'Florida Statutes **s. 627.711** requires insurers that write personal lines residential property insurance to notify applicants and policyholders, at issuance and at each renewal, about the availability and range of premium discounts, credits, other rate differentials, or deductible reductions tied to fixtures or construction techniques that reduce windstorm loss. The same statute directs use of the uniform mitigation verification form when that documentation is submitted.' },
        { type: 'callout', title: 'No guaranteed outcome', text: 'Having an inspection or a completed OIR-B1-1802 does not guarantee a lower premium, a specific credit, or a policy offer. Each insurer applies its own approved rating and underwriting rules. Ask your agent or insurer how they treat a current form for your property.' },

        { type: 'h2', text: 'Form OIR-B1-1802: what gets documented' },
        { type: 'p', text: 'The Florida Office of Insurance Regulation (**OIR**) publishes wind-mitigation resources for consumers and lists **OIR-B1-1802** as the form an authorized inspector completes during a wind mitigation inspection. OIR notes that a completed form is **valid for up to five (5) years**, provided no material changes are made to the structure and no inaccuracies are found on the form.' },
        { type: 'p', text: 'After a 2024 Residential Wind-Loss Mitigation Study, OIR updated Form OIR-B1-1802 **effective April 1, 2026**. Inspections on or after that date use the revised form. Categories commonly addressed include:' },
        { type: 'ul', items: [
          '**Building code** compliance related to the home’s construction era and applicable standards',
          '**Roof covering** type and condition as documented on the form',
          '**Roof deck attachment** — how the deck is fastened',
          '**Roof-to-wall attachment** — clips, wraps, or other connections between roof and walls',
          '**Secondary water resistance (SWR)** — measures that limit water intrusion if roof covering is lost',
          '**Opening protection** — the weakest form of wind-borne debris protection on windows, doors, skylights, and garage doors',
        ] },
        { type: 'p', text: 'Keep a copy of the completed form and supporting photos with your insurance records. After a roof remodel, opening replacement, or other material change to a listed feature, plan an updated inspection so the form still matches the house.' },

        { type: 'h2', text: 'Who may sign the form' },
        { type: 'p', text: 'Under **s. 627.711(2)(a)**, an insurer must accept as valid a uniform mitigation verification form signed by certain **authorized mitigation inspectors**, including:' },
        { type: 'ul', items: [
          'A **home inspector** licensed under s. 468.8314 who completed required hurricane mitigation training and a proficiency exam',
          'A **building code inspector** certified under s. 468.607',
          'A **general, building, or residential contractor** licensed under s. 489.111',
          'A **professional engineer** licensed under s. 471.015',
          'A **professional architect** licensed under s. 481.213',
          'Another individual or entity the **insurer recognizes** as qualified to complete the form',
        ] },
        { type: 'p', text: 'In general, the signer must **personally inspect** the structures on the form and attest to that inspection. Limited exceptions let certain licensed engineers or contractors authorize a qualified **direct employee** (not an independent contractor) to conduct it. Verify the inspector is authorized under the statute before hiring.' },
        { type: 'p', text: 'Florida law prohibits false mitigation forms and referral kickbacks between inspectors and insurance agencies. Misconduct can bring licensing discipline and, for knowing fraud, criminal penalties.' },

        { type: 'h2', text: 'How insurers may use the inspection' },
        { type: 'p', text: 'When you submit a current OIR-B1-1802, the insurer can use the documented features for **wind-related rating and underwriting**. Separately, **s. 627.711(1)** requires notice at issue and renewal of the ranges of discounts, credits, rate differentials, or deductible reductions available for mitigation features under that company’s filings.' },
        { type: 'p', text: 'OIR also notes that, effective October 1, 2023, residential property insurers must post website information on hurricane mitigation discounts available to policyholders. Your agent can explain how a completed form interacts with a specific policy — without promising a dollar or percentage outcome.' },
        { type: 'p', text: 'An insurer may, at its expense, independently verify a form before accepting it, with limited exceptions in the statute (including certain quality-assurance pathways and rules for forms submitted to Citizens Property Insurance Corporation).' },

        { type: 'h2', text: 'My Safe Florida Home: free inspection and grants' },
        { type: 'p', text: 'Separate from a privately hired OIR-B1-1802 inspection, Florida’s **My Safe Florida Home (MSFH)** program — run by the Department of Financial Services and subject to annual appropriations — offers eligible homeowners a **free hurricane mitigation inspection** and, for those who qualify, **mitigation grants** toward recommended improvements.' },
        { type: 'p', text: 'As of its August 2026 support update, MSFH was **accepting applications**. Create an Applicant Portal account, complete the prioritization questionnaire, and apply when your group’s window opens. Re-check [mysafeflhome.com](https://mysafeflhome.com) for current funding and schedule status before you apply.' },
        { type: 'p', text: 'Program materials describe inspection eligibility roughly as a **site-built, owner-occupied** single-family home (or townhouse under program rules) with a **homestead exemption**. Properties such as multifamily buildings, condominiums, mobile/manufactured homes, and second or rental homes are generally **not** eligible for the free MSFH inspection.' },
        { type: 'p', text: 'Grant eligibility is stricter. Among other criteria on the program FAQs, the home typically must already have received an MSFH initial inspection, have an **insured value of $700,000 or less**, and have been **built before January 1, 2008**. Matching grants provide **$2 of state funds for every $1** the homeowner contributes (reimbursement basis), up to a **maximum state contribution of $10,000**; low-income grants of up to **$10,000** may require no match — both subject to appropriation. Work generally must **not** start before official grant approval.' },
        { type: 'p', text: 'MSFH lists eligible improvements such as **opening protection**, **roof-to-wall attachment**, **roof deck attachment**, and **secondary water resistance** when they appear in the initial inspection report. The MSFH inspection is free and carries no obligation to pursue a grant. Confirm eligibility on the official site; our [My Safe Florida Home 2026 guide](/en/blog/my-safe-florida-home-2026) walks through eligibility, grant types and the application steps.' },

        { type: 'h2', text: 'Practical steps for Florida City and Homestead homeowners' },
        { type: 'ol', items: [
          '**Ask your insurer or agent** whether they already have a current OIR-B1-1802 on your policy and which revision they accept after April 1, 2026.',
          '**Hire an authorized inspector** if you need a new form — confirm license type and hurricane-mitigation credentials under s. 627.711.',
          '**Keep the signed form and photos** with your declarations page; share copies when you shop or renew.',
          '**Update the form** after material roof or opening changes so documentation matches the house.',
          '**Check My Safe Florida Home** if you may qualify for a free program inspection or grant — funding and group windows change.',
          '**Review related coverage** such as flood separately; wind mitigation documentation does not replace flood insurance needs in South Miami-Dade.',
        ] },
        { type: 'p', text: 'At [M&K Agency](/en/homeowners-insurance-florida-city) in Florida City, a licensed agent can review your declarations page, help you understand how a wind mitigation form fits a homeowners quote, and point you to official MSFH resources when relevant. Call **(305) 859-3953** or [request a quote](/en/quote). Office: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Hours: Monday–Friday 9–6; Saturday by appointment.' },
        { type: 'p', text: 'This page is general information based on OIR materials, Florida Statutes, and My Safe Florida Home publications. It is not a premium quote, a guarantee of credits, or legal advice. Speak with a licensed Florida agent about your property and policy.' },
      ],
      faq: [
        { q: 'What is Form OIR-B1-1802?', a: 'It is Florida’s Uniform Mitigation Verification Inspection Form. An authorized inspector completes it during a wind mitigation inspection so documented construction features can be submitted for wind-related insurance rating. OIR lists the form on its wind mitigation resources page.' },
        { q: 'How long is a completed wind mitigation form valid?', a: 'According to the Florida Office of Insurance Regulation, the Uniform Mitigation Verification Inspection Form (OIR-B1-1802) is valid for up to five years if no material changes are made to the structure and no inaccuracies are found on the form.' },
        { q: 'Who can perform a wind mitigation inspection in Florida?', a: 'Section 627.711 lists authorized mitigation inspectors, including certain licensed home inspectors with hurricane mitigation training, building code inspectors, general/building/residential contractors, professional engineers, professional architects, and others an insurer recognizes as qualified. The signer generally must personally inspect the property.' },
        { q: 'Does a wind mitigation inspection guarantee a lower premium?', a: 'No. The inspection and form document features; each insurer applies its own approved rates and underwriting. Florida law requires notice of available mitigation-related discounts or credits, but outcomes vary by company and property. Ask your agent how your insurer treats a current form.' },
        { q: 'What changed on April 1, 2026?', a: 'OIR updated Form OIR-B1-1802 effective April 1, 2026, after a 2024 residential wind-loss mitigation study. Inspections conducted on or after that date must use the revised form. Confirm with your inspector and insurer which revision applies to your file.' },
        { q: 'How is My Safe Florida Home different from a private wind mitigation inspection?', a: 'MSFH is a state program (subject to appropriation) that can provide a free hurricane mitigation inspection and, for eligible homes, grants toward recommended improvements. A private OIR-B1-1802 inspection is arranged with an authorized inspector for insurance documentation. Eligibility, funding, and process details are on mysafeflhome.com.' },
      ],
      sources: SOURCES_EN,
    },

    ru: {
      title: 'Инспекция wind mitigation во Флориде: что фиксирует форма OIR-B1-1802',
      metaTitle: 'Инспекция wind mitigation во Флориде | OIR-B1-1802',
      description: 'Инспекция wind mitigation во Флориде: что фиксирует форма OIR-B1-1802, кто вправе её подписать, срок действия и роль My Safe Florida Home.',
      excerpt: 'Инспекция wind mitigation фиксирует крышу, защиту проёмов и другие признаки устойчивости к урагану в форме OIR-B1-1802. Разбираем, что записывают, кто подписывает и где здесь госпрограмма.',
      category: 'Страхование жилья',
      body: [
        { type: 'p', text: 'В Южной Флориде ветер и ураганы почти всегда входят в разговор о [страховании жилья](/ru/homeowners-insurance-florida-city). **Инспекция wind mitigation** — это способ задокументировать важные особенности дома: крепление крыши, защиту окон и дверей и связанные детали конструкции — в единой государственной форме **Uniform Mitigation Verification Inspection Form**, известной как **OIR-B1-1802**. Страховщики используют эту форму при оценке факторов, связанных с ветром, по полису жилья.' },
        { type: 'p', text: 'Ниже — что это за инспекция, что обычно вносят в форму, кто по закону Флориды вправе её подписать, сколько действует заполненный бланк и как к этому относится программа **My Safe Florida Home**. Мы не обещаем снижение премии: итог всегда зависит от страховщика, условий полиса и реальных характеристик дома.' },

        { type: 'h2', text: 'Что такое инспекция wind mitigation' },
        { type: 'p', text: 'Это целевой осмотр конструктивных решений, которые влияют на поведение дома при сильном ветре. Уполномоченный инспектор заносит результаты в форму **OIR-B1-1802** — единый бланк проверки mitigation, который используют, когда страхователь подаёт документы для учёта ветровых факторов при тарификации.' },
        { type: 'p', text: 'По **s. 627.711** Florida Statutes страховщик, который пишет personal lines residential property insurance, должен при выдаче полиса и при каждом продлении уведомить заявителя или страхователя о доступности и диапазоне скидок, кредитов, иных тарифных различий или снижения франшиз, связанных с приспособлениями и методами строительства, снижающими убытки от windstorm. Та же статья предусматривает использование единой формы verification при подаче такой документации.' },
        { type: 'callout', title: 'Без гарантии результата', text: 'Сама инспекция или заполненная OIR-B1-1802 не гарантируют более низкую премию, конкретный кредит или предложение полиса. Каждый страховщик применяет свои утверждённые правила тарификации и андеррайтинга. Уточните у агента или компании, как они учитывают актуальную форму по вашему объекту.' },

        { type: 'h2', text: 'Форма OIR-B1-1802: что обычно фиксируют' },
        { type: 'p', text: 'Florida Office of Insurance Regulation (**OIR**) публикует для потребителей материалы по wind mitigation и указывает **OIR-B1-1802** как форму, которую заполняет уполномоченный инспектор. По данным OIR, заполненная форма **действует до пяти (5) лет**, если в конструкцию не внесли существенных изменений и на бланке нет неточностей.' },
        { type: 'p', text: 'После исследования Residential Wind-Loss Mitigation Study 2024 года OIR обновил форму **с 1 апреля 2026 года**. Инспекции в эту дату и позже проводят по новой редакции. На форме обычно отражают, среди прочего:' },
        { type: 'ul', items: [
          'соответствие **building code** / эпохе строительства и применимым нормам',
          'тип и состояние **кровельного покрытия** (roof covering)',
          'крепление **настила крыши** (roof deck attachment)',
          'связь **крыши со стенами** (roof-to-wall attachment) — клипсы, обхваты и аналоги',
          '**secondary water resistance (SWR)** — меры против протечек, если покрытие крыши сорвало',
          '**защиту проёмов** (opening protection) — самый слабый уровень защиты от летящего мусора на окнах, дверях, зенитных фонарях и гаражных воротах',
        ] },
        { type: 'p', text: 'Храните копию формы и подтверждающие фото вместе со страховыми документами. После ремонта крыши, замены окон/дверей или другого изменения перечисленных признаков обычно нужна обновлённая инспекция, чтобы бланк соответствовал дому.' },

        { type: 'h2', text: 'Кто вправе подписать форму' },
        { type: 'p', text: 'Согласно **s. 627.711(2)(a)**, страховщик обязан принимать как действительную единую форму, подписанную определёнными **authorized mitigation inspectors**, в том числе:' },
        { type: 'ul', items: [
          '**home inspector** по лицензии s. 468.8314 с обязательным hurricane mitigation training и экзаменом на компетентность',
          '**building code inspector**, сертифицированный по s. 468.607',
          '**general, building или residential contractor** по лицензии s. 489.111',
          '**professional engineer** по лицензии s. 471.015',
          '**professional architect** по лицензии s. 481.213',
          'иное лицо или организация, которых **страховщик признаёт** достаточно квалифицированными для заполнения формы',
        ] },
        { type: 'p', text: 'Как правило, подписант должен **лично осмотреть** указанные в форме конструкции и подтвердить личный осмотр. Для части инженеров и подрядчиков закон допускает, чтобы осмотр провёл квалифицированный **прямой сотрудник** (не независимый подрядчик). OIR рекомендует заранее убедиться, что инспектор уполномочен по статуту.' },
        { type: 'p', text: 'Закон также запрещает ложные и мошеннические mitigation-формы и «откаты» за направление клиентов между инспекторами и страховыми агентствами. Нарушения могут обернуться дисциплинарными мерами по лицензии, а при умышленном мошенничестве — уголовной ответственностью.' },

        { type: 'h2', text: 'Как страховщик может использовать инспекцию' },
        { type: 'p', text: 'Когда вы (или агент) подаёте актуальный OIR-B1-1802, страховщик может учесть зафиксированные признаки при **тарификации и андеррайтинге**, связанных с ветром. Отдельно **s. 627.711(1)** требует уведомлять о диапазонах скидок, кредитов, тарифных различий или снижения франшиз по mitigation-признакам в рамках filings этой компании — при выдаче и при продлении.' },
        { type: 'p', text: 'OIR также указывает: с **1 октября 2023 года** страховщики жилья должны размещать на своих сайтах информацию о доступных hurricane mitigation discounts. Агент поможет разобрать, как заполненная форма стыкуется с конкретным полисом — без обещаний суммы или процента.' },
        { type: 'p', text: 'Страховщик за свой счёт может независимо проверить форму до принятия; в статуте есть исключения (в том числе пути с quality assurance и отдельные правила при подаче формы в Citizens Property Insurance Corporation).' },

        { type: 'h2', text: 'My Safe Florida Home: бесплатная инспекция и гранты' },
        { type: 'p', text: 'Помимо частной инспекции с формой OIR-B1-1802, во Флориде действует программа **My Safe Florida Home (MSFH)** — её ведёт Department of Financial Services, и она зависит от ежегодных законодательных ассигнований. Для подходящих домовладельцев программа предлагает **бесплатную hurricane mitigation inspection** и, при соответствии критериям, **гранты** на рекомендованные улучшения.' },
        { type: 'p', text: 'По обновлению support-центра программы от августа 2026 года MSFH сообщала, что **принимает заявки**. Нужно создать аккаунт в Applicant Portal, заполнить Prioritization Questionnaire и подать заявку, когда откроется окно вашей группы. Перед подачей всегда перепроверяйте актуальный статус на [mysafeflhome.com](https://mysafeflhome.com).' },
        { type: 'p', text: 'По материалам программы к бесплатной инспекции обычно допускают **site-built, owner-occupied** односемейный дом (или townhouse по правилам программы) с **homestead exemption**. Многоквартирные дома, кондоминиумы, mobile/manufactured homes, второе жильё и сдаваемые объекты, как правило, **не** подходят под бесплатную MSFH-инспекцию.' },
        { type: 'p', text: 'К гранту требования жёстче. Среди прочего на FAQ программы: дом уже должен пройти начальную MSFH-инспекцию, **insured value не выше $700,000**, строительство **до 1 января 2008**. Matching-грант: **$2 государственных средств на каждый $1** вклада домовладельца (возмещение), до **максимум $10,000** от штата; для low-income — грант до **$10,000** без обязательного match — всё при наличии ассигнований. Работы обычно **нельзя** начинать до официального одобрения гранта.' },
        { type: 'p', text: 'Среди eligible improvements MSFH перечисляет **opening protection**, **roof-to-wall attachment**, **roof deck attachment** и **secondary water resistance**, если они рекомендованы в initial inspection report. MSFH-инспекция бесплатна и ни к чему не обязывает. Эта статья не заменяет правила программы — детали смотрите на официальном сайте.' },

        { type: 'h2', text: 'Практические шаги для домовладельцев Florida City и Homestead' },
        { type: 'ol', items: [
          '**Спросите страховщика или агента**, есть ли уже актуальный OIR-B1-1802 по вашему полису и какую редакцию принимают после 1 апреля 2026.',
          '**Нанимайте уполномоченного инспектора**, если нужна новая форма — проверьте тип лицензии и hurricane-mitigation подготовку по s. 627.711.',
          '**Храните подписанную форму и фото** вместе с declarations page; передавайте копии при поиске полиса или продлении.',
          '**Обновляйте форму** после существенных изменений крыши или проёмов.',
          '**Проверьте My Safe Florida Home**, если возможны бесплатная программная инспекция или грант — финансирование и окна групп меняются.',
          '**Отдельно оцените flood-покрытие**: документы wind mitigation не заменяют страхование от наводнения в South Miami-Dade.',
        ] },
        { type: 'p', text: 'В [M&K Agency](/ru/homeowners-insurance-florida-city) во Florida City лицензированный агент поможет разобрать declarations page, объяснить, как форма wind mitigation стыкуется с котировкой homeowners, и направить к официальным ресурсам MSFH. Звоните **(305) 859-3953** или [оставьте заявку на котировку](/ru/quote). Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Часы: пн–пт 9–6; суббота по записи.' },
        { type: 'p', text: 'Материал носит общий характер и опирается на публикации OIR, Florida Statutes и My Safe Florida Home. Это не котировка премии, не гарантия кредитов и не юридическая консультация. Обсудите ваш объект и полис с лицензированным агентом во Флориде.' },
      ],
      faq: [
        { q: 'Что такое форма OIR-B1-1802?', a: 'Это единая Uniform Mitigation Verification Inspection Form Флориды. Уполномоченный инспектор заполняет её при wind mitigation inspection, чтобы зафиксированные конструктивные признаки можно было подать для учёта ветровых факторов при тарификации. Форма указана на странице OIR по wind mitigation.' },
        { q: 'Сколько действует заполненная форма?', a: 'По данным Florida Office of Insurance Regulation, форма OIR-B1-1802 действительна до пяти лет, если в конструкцию не внесли существенных изменений и на бланке нет неточностей.' },
        { q: 'Кто может провести wind mitigation inspection во Флориде?', a: 'В s. 627.711 перечислены authorized mitigation inspectors: определённые licensed home inspectors с hurricane mitigation training, building code inspectors, general/building/residential contractors, professional engineers, professional architects и другие, кого страховщик признаёт квалифицированными. Подписант, как правило, должен лично осмотреть объект.' },
        { q: 'Гарантирует ли инспекция более низкую премию?', a: 'Нет. Инспекция и форма документируют признаки; каждый страховщик применяет свои утверждённые тарифы и андеррайтинг. Закон требует уведомлять о доступных mitigation-скидках или кредитах, но итог зависит от компании и объекта. Уточните у агента, как ваш страховщик учитывает актуальную форму.' },
        { q: 'Что изменилось с 1 апреля 2026 года?', a: 'OIR обновил форму OIR-B1-1802 с 1 апреля 2026 после исследования wind-loss mitigation 2024 года. Инспекции в эту дату и позже проводят по новой редакции. Уточните у инспектора и страховщика, какая версия нужна для вашего дела.' },
        { q: 'Чем My Safe Florida Home отличается от частной инспекции?', a: 'MSFH — государственная программа (при наличии ассигнований): бесплатная hurricane mitigation inspection и, для подходящих домов, гранты на рекомендованные улучшения. Частную инспекцию OIR-B1-1802 заказывают у уполномоченного инспектора для страховой документации. Критерии, финансирование и порядок — на mysafeflhome.com.' },
      ],
      sources: SOURCES_RU,
    },
  },
};
