export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = {
  title: string;
  effectiveDateLabel: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: Record<'en' | 'es' | 'ru', LegalDoc> = {
  en: {
    title: 'Privacy Policy',
    effectiveDateLabel: 'Effective Date: July 2026',
    intro:
      'M&K Agency Inc. ("M&K Agency," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit mkagencyinc.com (the "Site") or otherwise interact with us, including by phone, text message, or in person at our office.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'When you request a quote, contact us, use our AI chat assistant, or otherwise communicate with us, we may collect your name, phone number, email address, and mailing/property address; insurance-related information such as vehicle identification numbers (VIN), number of drivers, property details, and desired coverage types; and any other information you choose to include in a message, comment, or form field.',
          'When you visit the Site, we and our service providers may automatically collect certain technical information, such as your IP address, browser type, device type, pages visited, and the date and time of your visit, using standard web technologies such as cookies and similar tracking tools.',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        body: [
          'We use the information we collect to provide insurance quotes and respond to your inquiries; contact you by phone, text message, or email about insurance products and services; operate, maintain, and improve the Site and our services; comply with legal and regulatory obligations; and communicate with insurance carriers on your behalf to obtain quotes or bind coverage, where you have requested that we do so.',
        ],
      },
      {
        heading: '3. Consent to Communications (TCPA)',
        body: [
          'By submitting your phone number through our Site, you agree that M&K Agency may contact you by phone call, text message, or email at the number provided regarding insurance products and services, even if that number is registered on a state or federal Do-Not-Call list. Consent to receive such communications is not a condition of purchasing any product or service. You may reply "STOP" to any text message at any time to opt out of further text communications, or contact us using the information below.',
        ],
      },
      {
        heading: '4. Cookies and Tracking Technologies',
        body: [
          'We may use cookies, web beacons, and similar technologies to recognize your browser, remember your preferences, and understand how visitors use the Site. You can typically set your browser to refuse cookies or alert you when cookies are being sent, though some parts of the Site may not function properly without them.',
        ],
      },
      {
        heading: '5. How We Share Your Information',
        body: [
          "We do not sell your personal information. We may share your information with insurance carriers and underwriters, in order to obtain quotes or bind coverage you have requested; service providers who perform functions on our behalf, such as email delivery, data hosting, customer communications platforms, and website analytics; regulators or other parties when required by law, subpoena, or other legal process; and a successor entity in the event of a merger, acquisition, or sale of some or all of our assets.",
        ],
      },
      {
        heading: '6. Data Security',
        body: [
          'We use reasonable administrative, technical, and physical safeguards designed to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        heading: '7. Your Choices',
        body: [
          'You may opt out of text messages at any time by replying "STOP"; ask to review, correct, or request deletion of the personal information we hold about you, subject to our legal and business record-keeping obligations, by contacting us using the information below; and decline to provide certain information, though this may limit our ability to provide you with a quote or service.',
        ],
      },
      {
        heading: "8. Children's Privacy",
        body: [
          'The Site is not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.',
        ],
      },
      {
        heading: '9. Contact Us',
        body: [
          'M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Phone: (305) 859-3953',
        ],
      },
      {
        heading: '10. Changes to This Policy',
        body: [
          'We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Effective Date" and will be effective as soon as it is posted on the Site.',
        ],
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    effectiveDateLabel: 'Fecha de vigencia: julio de 2026',
    intro:
      'M&K Agency Inc. ("M&K Agency", "nosotros" o "nuestro") respeta su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita mkagencyinc.com (el "Sitio") o interactúa con nosotros de otra manera, incluso por teléfono, mensaje de texto o en persona en nuestra oficina.',
    sections: [
      {
        heading: '1. Información que Recopilamos',
        body: [
          'Cuando solicita una cotización, nos contacta, usa nuestro asistente de chat con IA, o se comunica con nosotros de otra manera, podemos recopilar su nombre, número de teléfono, correo electrónico y dirección postal/de la propiedad; información relacionada con seguros, como VIN, número de conductores, detalles de la propiedad y tipos de cobertura deseados; y cualquier otra información que decida incluir en un mensaje, comentario o campo del formulario.',
          'Cuando visita el Sitio, podemos recopilar automáticamente información técnica como su dirección IP, tipo de navegador, tipo de dispositivo, páginas visitadas y la fecha y hora de su visita, mediante cookies y herramientas similares.',
        ],
      },
      {
        heading: '2. Cómo Usamos su Información',
        body: [
          'Usamos la información para proporcionar cotizaciones de seguros y responder a sus consultas; contactarlo sobre productos y servicios de seguros; operar y mejorar el Sitio; cumplir con obligaciones legales; y comunicarnos con aseguradoras en su nombre cuando usted lo haya solicitado.',
        ],
      },
      {
        heading: '3. Consentimiento para Comunicaciones (TCPA)',
        body: [
          'Al enviar su número de teléfono a través de nuestro Sitio, usted acepta que M&K Agency puede contactarlo por llamada, mensaje de texto o correo electrónico sobre seguros, incluso si ese número está en una lista de No Llamar. El consentimiento no es una condición de compra. Puede responder "STOP" en cualquier momento para dejar de recibir mensajes de texto.',
        ],
      },
      {
        heading: '4. Cookies y Tecnologías de Seguimiento',
        body: [
          'Podemos usar cookies y tecnologías similares para reconocer su navegador y entender cómo se usa el Sitio. Puede configurar su navegador para rechazar cookies, aunque algunas partes del Sitio pueden no funcionar correctamente.',
        ],
      },
      {
        heading: '5. Cómo Compartimos su Información',
        body: [
          'No vendemos su información personal. Podemos compartirla con aseguradoras para obtener cotizaciones o cobertura; proveedores de servicios que trabajan en nuestro nombre; reguladores cuando lo exija la ley; y una entidad sucesora en caso de fusión o venta de activos.',
        ],
      },
      {
        heading: '6. Seguridad de los Datos',
        body: [
          'Utilizamos medidas de seguridad razonables para proteger su información, aunque ningún método de transmisión por internet es completamente seguro.',
        ],
      },
      {
        heading: '7. Sus Opciones',
        body: [
          'Puede optar por no recibir mensajes de texto respondiendo "STOP"; solicitar revisar, corregir o eliminar su información; o decidir no proporcionar cierta información, aunque esto puede limitar nuestro servicio.',
        ],
      },
      {
        heading: '8. Privacidad de los Menores',
        body: [
          'El Sitio no está dirigido a menores de 18 años. No recopilamos conscientemente información de menores.',
        ],
      },
      {
        heading: '9. Contáctenos',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Teléfono: (305) 859-3953'],
      },
      {
        heading: '10. Cambios a esta Política',
        body: [
          'Podemos actualizar esta Política periódicamente. La versión actualizada entrará en vigor al publicarse en el Sitio.',
        ],
      },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности',
    effectiveDateLabel: 'Дата вступления в силу: июль 2026',
    intro:
      'M&K Agency Inc. («M&K Agency», «мы», «нас» или «наш») уважает вашу конфиденциальность. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем вашу информацию, когда вы посещаете mkagencyinc.com («Сайт») или иным образом взаимодействуете с нами, включая по телефону, SMS или лично в офисе.',
    sections: [
      {
        heading: '1. Информация, которую мы собираем',
        body: [
          'Когда вы запрашиваете расчёт стоимости или связываетесь с нами, мы можем собирать имя, телефон, email, адрес; данные, связанные со страхованием (VIN, число водителей, детали недвижимости); и любую другую информацию, указанную в форме.',
          'При посещении Сайта мы можем автоматически собирать техническую информацию — IP-адрес, тип браузера, посещённые страницы — через cookie-файлы и аналогичные инструменты.',
        ],
      },
      {
        heading: '2. Как мы используем вашу информацию',
        body: [
          'Мы используем информацию для предоставления расчётов стоимости, связи с вами по вопросам страхования, работы и улучшения Сайта, соблюдения юридических обязательств, а также взаимодействия со страховыми компаниями от вашего имени.',
        ],
      },
      {
        heading: '3. Согласие на коммуникации (TCPA)',
        body: [
          'Указывая номер телефона на Сайте, вы соглашаетесь, что M&K Agency может связываться с вами по телефону, SMS или электронной почте, даже если номер в списке «Не звонить». Согласие не является условием покупки. Ответьте «STOP», чтобы отказаться от SMS.',
        ],
      },
      {
        heading: '4. Файлы cookie',
        body: [
          'Мы можем использовать cookie-файлы, чтобы понимать, как посетители используют Сайт. Вы можете настроить браузер на отклонение cookie.',
        ],
      },
      {
        heading: '5. Как мы делимся вашей информацией',
        body: [
          'Мы не продаём личную информацию. Мы можем передавать её страховым компаниям для получения расчётов, поставщикам услуг, регуляторам по требованию закона, а также правопреемнику при продаже бизнеса.',
        ],
      },
      {
        heading: '6. Безопасность данных',
        body: ['Мы применяем разумные меры безопасности, хотя ни один метод передачи данных не является абсолютно безопасным.'],
      },
      {
        heading: '7. Ваш выбор',
        body: [
          'Вы можете отказаться от SMS, ответив «STOP»; запросить просмотр или удаление своих данных; отказаться предоставлять информацию (это может ограничить наши услуги).',
        ],
      },
      {
        heading: '8. Конфиденциальность несовершеннолетних',
        body: ['Сайт не предназначен для лиц младше 18 лет.'],
      },
      {
        heading: '9. Свяжитесь с нами',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Телефон: (305) 859-3953'],
      },
      {
        heading: '10. Изменения в этой Политике',
        body: ['Мы можем периодически обновлять данную Политику. Обновления вступают в силу после публикации на Сайте.'],
      },
    ],
  },
};

export const termsOfService: Record<'en' | 'es' | 'ru', LegalDoc> = {
  en: {
    title: 'Terms of Service',
    effectiveDateLabel: 'Effective Date: July 2026',
    intro:
      'Please read these Terms of Service ("Terms") carefully before using mkagencyinc.com (the "Site"), operated by M&K Agency Inc. By accessing or using the Site, you agree to be bound by these Terms.',
    sections: [
      {
        heading: '1. About Our Services',
        body: [
          'M&K Agency Inc. is a family-owned insurance agency licensed in the State of Florida. We help customers review coverage options and obtain insurance quotes through a licensed agent. The Site does not itself provide insurance coverage, and no coverage exists until a policy is formally issued by a carrier.',
        ],
      },
      {
        heading: '2. No Guarantee of Coverage, Price, or Eligibility',
        body: [
          'Any quote or coverage example shown on the Site is for informational purposes only and is not a binding offer of insurance. Final eligibility, terms, and premiums are determined solely by the applicable carrier following underwriting review.',
        ],
      },
      {
        heading: '3. AI Chat Assistant',
        body: [
          'The Site may include an AI-assisted chat feature intended to answer general questions and help route requests to a licensed agent. Responses are for general informational purposes only, do not constitute professional advice, and do not create an agent-client relationship. Coverage decisions must be confirmed with a licensed agent.',
        ],
      },
      {
        heading: '4. Communications Consent',
        body: [
          'By submitting your contact information, you consent to be contacted by M&K Agency by phone, text, or email regarding insurance products and services, as described in our Privacy Policy.',
        ],
      },
      {
        heading: '5. Accuracy of Information You Provide',
        body: [
          'You agree to provide accurate, current, and complete information. Providing false or misleading information may result in denial of coverage, cancellation of a policy, or denial of a claim by the applicable carrier.',
        ],
      },
      {
        heading: '6. Intellectual Property',
        body: [
          'All content on the Site is the property of M&K Agency Inc. or its licensors and is protected by applicable intellectual property laws.',
        ],
      },
      {
        heading: '7. Third-Party Links and Carriers',
        body: [
          'We do not control and are not responsible for the content, policies, or practices of any third-party carrier or service provider referenced on the Site.',
        ],
      },
      {
        heading: '8. Limitation of Liability',
        body: [
          'To the fullest extent permitted by law, M&K Agency Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Site.',
        ],
      },
      {
        heading: '9. Governing Law',
        body: [
          'These Terms are governed by the laws of the State of Florida. Any disputes shall be resolved in the state or federal courts located in Miami-Dade County, Florida.',
        ],
      },
      {
        heading: '10. Changes to These Terms',
        body: ['We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance.'],
      },
      {
        heading: '11. Contact Us',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Phone: (305) 859-3953'],
      },
    ],
  },
  es: {
    title: 'Términos de Servicio',
    effectiveDateLabel: 'Fecha de vigencia: julio de 2026',
    intro:
      'Lea cuidadosamente estos Términos de Servicio antes de usar mkagencyinc.com, operado por M&K Agency Inc. Al usar el Sitio, usted acepta estos Términos.',
    sections: [
      {
        heading: '1. Sobre Nuestros Servicios',
        body: [
          'M&K Agency Inc. es una agencia de seguros familiar con licencia en Florida. Ayudamos a revisar opciones de cobertura y obtener cotizaciones a través de un agente licenciado. El Sitio no proporciona cobertura por sí mismo.',
        ],
      },
      {
        heading: '2. Sin Garantía de Cobertura, Precio o Elegibilidad',
        body: ['Cualquier cotización mostrada es solo informativa y no es una oferta vinculante. La aseguradora determina la elegibilidad final.'],
      },
      {
        heading: '3. Asistente de Chat con IA',
        body: ['Las respuestas del asistente de IA son solo informativas y no constituyen asesoría profesional ni crean relación agente-cliente.'],
      },
      {
        heading: '4. Consentimiento para Comunicaciones',
        body: ['Al enviar su información de contacto, usted consiente ser contactado por M&K Agency sobre seguros, según nuestra Política de Privacidad.'],
      },
      {
        heading: '5. Exactitud de la Información',
        body: ['Proporcionar información falsa puede resultar en denegación de cobertura o de un reclamo.'],
      },
      {
        heading: '6. Propiedad Intelectual',
        body: ['Todo el contenido del Sitio es propiedad de M&K Agency Inc. o sus licenciantes.'],
      },
      {
        heading: '7. Enlaces de Terceros',
        body: ['No controlamos ni somos responsables de terceros referenciados en el Sitio.'],
      },
      {
        heading: '8. Limitación de Responsabilidad',
        body: ['M&K Agency Inc. no será responsable de daños indirectos o consecuentes derivados del uso del Sitio.'],
      },
      {
        heading: '9. Ley Aplicable',
        body: ['Estos Términos se rigen por las leyes de Florida. Disputas resueltas en tribunales del Condado de Miami-Dade.'],
      },
      {
        heading: '10. Cambios a estos Términos',
        body: ['El uso continuado del Sitio tras cambios constituye aceptación.'],
      },
      {
        heading: '11. Contáctenos',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Teléfono: (305) 859-3953'],
      },
    ],
  },
  ru: {
    title: 'Условия использования',
    effectiveDateLabel: 'Дата вступления в силу: июль 2026',
    intro:
      'Пожалуйста, ознакомьтесь с Условиями использования перед использованием mkagencyinc.com, управляемого M&K Agency Inc. Используя Сайт, вы соглашаетесь с настоящими Условиями.',
    sections: [
      {
        heading: '1. О наших услугах',
        body: ['M&K Agency Inc. — семейное страховое агентство, лицензированное во Флориде. Сайт сам по себе не предоставляет покрытие.'],
      },
      {
        heading: '2. Отсутствие гарантии покрытия или цены',
        body: ['Любой расчёт стоимости на Сайте носит информационный характер. Итоговые условия определяет страховая компания.'],
      },
      {
        heading: '3. ИИ-чат-ассистент',
        body: ['Ответы ИИ-ассистента носят общий информационный характер и не создают отношений агент-клиент.'],
      },
      {
        heading: '4. Согласие на коммуникации',
        body: ['Отправляя контактные данные, вы соглашаетесь на связь с M&K Agency по вопросам страхования согласно нашей Политике конфиденциальности.'],
      },
      {
        heading: '5. Точность предоставляемой информации',
        body: ['Предоставление ложной информации может привести к отказу в покрытии или выплате.'],
      },
      {
        heading: '6. Интеллектуальная собственность',
        body: ['Весь контент Сайта — собственность M&K Agency Inc. или её лицензиаров.'],
      },
      {
        heading: '7. Ссылки на третьих лиц',
        body: ['Мы не несём ответственности за сторонние компании, упомянутые на Сайте.'],
      },
      {
        heading: '8. Ограничение ответственности',
        body: ['M&K Agency Inc. не несёт ответственности за косвенные убытки, связанные с использованием Сайта.'],
      },
      {
        heading: '9. Применимое право',
        body: ['Настоящие Условия регулируются законодательством Флориды. Споры рассматриваются в судах округа Майами-Дейд.'],
      },
      {
        heading: '10. Изменения настоящих Условий',
        body: ['Продолжение использования Сайта после публикации изменений означает их принятие.'],
      },
      {
        heading: '11. Свяжитесь с нами',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Телефон: (305) 859-3953'],
      },
    ],
  },
};

export const referralRules: Record<'en' | 'es' | 'ru', LegalDoc> = {
  en: {
    title: 'Referral Program — Official Rules',
    effectiveDateLabel: 'Effective Date: July 2026',
    intro:
      'The "We Care About Our Community" Referral Program is a free directory of local Florida businesses recommended by M&K Agency Inc. and the community. It is a goodwill and community-visibility feature of our website. It is not a contest, sweepstakes, lottery, or promotion, and no money, prize, or thing of value is awarded to any participant, referrer, or business.',
    sections: [
      {
        heading: '1. How a Business Gets Listed',
        body: [
          'Anyone may submit a local business for consideration using the "Recommend a local business" form. Submission requires: business name, address, category, owner first and last name, phone number, email address, and a short description.',
          'No business is added to the public map automatically. Before any listing goes live, a member of the M&K Agency team personally contacts the business owner by phone to confirm the business is real, currently operating, and that the owner consents to being listed. We call this step "Verified by M&K Agency."',
        ],
      },
      {
        heading: '2. What "Verified by M&K Agency" Means — and What It Does Not Mean',
        body: [
          'The badge means only that a member of our team spoke with the business owner and confirmed the business exists and is operating. It is not an endorsement, guarantee, or warranty of quality, safety, pricing, licensing, or legality; not a statement that the business is a client of M&K Agency or any insurance carrier; and not a representation that we verified the business\u2019s insurance coverage or professional credentials.',
          'Anyone who chooses to do business with a listed company does so at their own discretion and risk. M&K Agency is not a party to, and accepts no liability for, any transaction, dispute, injury, or loss arising from dealings with a listed business.',
        ],
      },
      {
        heading: '3. No Payment, No Kickback, No Rebate',
        body: [
          'Being listed is free. M&K Agency does not charge businesses to be listed and does not accept payment or any other thing of value in exchange for a listing. Listing is never conditioned on purchasing insurance from M&K Agency, and requesting or purchasing a quote is never required to submit or view a business recommendation.',
        ],
      },
      {
        heading: '4. No Prize, No Voting, No Purchase Necessary',
        body: [
          'There is currently no prize, drawing, sweepstakes, cash award, or donation tied to this program. If M&K Agency introduces any prize or donation component in the future, separate official rules will be published before that component launches, and no purchase or insurance quote will ever be required to participate.',
        ],
      },
      {
        heading: '5. What Cannot Be Listed',
        body: [
          'To avoid any appearance of endorsement, referral fee arrangements, or conflict of interest, M&K Agency does not list insurance agencies, insurance agents, insurance carriers, or other financial/insurance-adjacent businesses in this directory.',
        ],
      },
      {
        heading: '6. Removal of a Listing',
        body: [
          'M&K Agency may remove any listing at any time, for any reason. A business owner may request removal of their own listing at any time by contacting us.',
        ],
      },
      {
        heading: '7. No Guarantee of Placement or Timing',
        body: [
          'Submitting a recommendation does not guarantee a business will be listed, or establish any review timeline. We review submissions as staff time allows.',
        ],
      },
      {
        heading: '8. Contact',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Phone: (305) 859-3953'],
      },
      {
        heading: '9. Changes to These Rules',
        body: ['We may update these rules at any time. The most current version will always be available on this page.'],
      },
    ],
  },
  es: {
    title: 'Programa de Referidos — Reglas Oficiales',
    effectiveDateLabel: 'Fecha de vigencia: julio de 2026',
    intro:
      'El Programa de Referidos "We Care About Our Community" es un directorio gratuito de negocios locales de Florida recomendados por M&K Agency Inc. y la comunidad. No es un concurso, sorteo o lotería, y no se otorga dinero ni premios a ningún participante o negocio.',
    sections: [
      {
        heading: '1. Cómo un Negocio Aparece Listado',
        body: [
          'Cualquier persona puede enviar un negocio local usando el formulario "Recomendar un negocio local". Se requiere: nombre, dirección, categoría, nombre del propietario, teléfono, correo electrónico y una breve descripción.',
          'Ningún negocio se agrega automáticamente. Antes de publicar un listado, nuestro equipo contacta personalmente al propietario por teléfono para confirmar que el negocio es real y consiente ser listado ("Verificado por M&K Agency").',
        ],
      },
      {
        heading: '2. Qué Significa "Verificado por M&K Agency" — y Qué No Significa',
        body: [
          'Significa solo que hablamos con el propietario y confirmamos que el negocio existe. No es un respaldo de calidad, precios o legalidad; no significa que sea cliente de M&K Agency; no confirma su cobertura de seguro o licencias.',
          'Cualquier persona que haga negocios con una empresa listada lo hace bajo su propio riesgo. M&K Agency no acepta responsabilidad por transacciones con negocios listados.',
        ],
      },
      {
        heading: '3. Sin Pago, Sin Comisión, Sin Descuento',
        body: ['Ser listado es gratis. Nunca se requiere comprar un seguro para ser listado o para enviar/ver una recomendación.'],
      },
      {
        heading: '4. Sin Premio, Sin Votación, Sin Compra Necesaria',
        body: ['Actualmente no hay premio ni sorteo vinculado a este programa. Si eso cambia, se publicarán reglas oficiales separadas antes del lanzamiento.'],
      },
      {
        heading: '5. Qué No Puede Ser Listado',
        body: ['Para evitar conflictos de interés, no incluimos agencias de seguros, agentes o aseguradoras en este directorio.'],
      },
      {
        heading: '6. Eliminación de un Listado',
        body: ['Podemos eliminar cualquier listado en cualquier momento. Un propietario puede solicitar la eliminación de su propio listado.'],
      },
      {
        heading: '7. Sin Garantía de Publicación o Tiempo',
        body: ['Enviar una recomendación no garantiza que será listada ni establece un plazo de revisión.'],
      },
      {
        heading: '8. Contacto',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Teléfono: (305) 859-3953'],
      },
      {
        heading: '9. Cambios a Estas Reglas',
        body: ['La versión más actual siempre estará disponible en esta página.'],
      },
    ],
  },
  ru: {
    title: 'Программа рекомендаций — официальные правила',
    effectiveDateLabel: 'Дата вступления в силу: июль 2026',
    intro:
      'Программа рекомендаций «We Care About Our Community» — бесплатный каталог местных флоридских компаний, рекомендованных M&K Agency Inc. и сообществом. Это не конкурс и не лотерея — участникам не выплачиваются деньги или призы.',
    sections: [
      {
        heading: '1. Как компания попадает в список',
        body: [
          'Любой может предложить местную компанию через форму «Рекомендовать местную компанию»: название, адрес, категория, имя владельца, телефон, email и краткое описание.',
          'Ни одна компания не добавляется автоматически. Перед публикацией сотрудник M&K Agency лично звонит владельцу, чтобы подтвердить бизнес и получить согласие («Проверено M&K Agency»).',
        ],
      },
      {
        heading: '2. Что означает «Проверено M&K Agency» — и чего не означает',
        body: [
          'Означает только, что мы поговорили с владельцем и подтвердили существование бизнеса. Не является гарантией качества, цен или законности; не означает, что бизнес — клиент M&K Agency; не подтверждает страхование или лицензии бизнеса.',
          'Любой, кто ведёт дела с компанией из списка, делает это на свой риск. M&K Agency не несёт ответственности за такие сделки.',
        ],
      },
      {
        heading: '3. Без оплаты, без откатов, без скидок',
        body: ['Размещение бесплатно. Покупка страховки никогда не требуется для листинга или отправки рекомендации.'],
      },
      {
        heading: '4. Без призов, без голосования, покупка не требуется',
        body: ['В настоящее время призов или розыгрышей нет. Если это изменится, будут опубликованы отдельные официальные правила до запуска.'],
      },
      {
        heading: '5. Что не может быть добавлено в список',
        body: ['Во избежание конфликта интересов мы не размещаем страховые агентства, агентов или страховые компании в этом каталоге.'],
      },
      {
        heading: '6. Удаление листинга',
        body: ['Мы можем удалить любой листинг в любое время. Владелец может запросить удаление своего листинга.'],
      },
      {
        heading: '7. Отсутствие гарантии размещения или сроков',
        body: ['Отправка рекомендации не гарантирует размещение и не устанавливает сроков рассмотрения.'],
      },
      {
        heading: '8. Контакты',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Телефон: (305) 859-3953'],
      },
      {
        heading: '9. Изменения настоящих правил',
        body: ['Актуальная версия всегда доступна на этой странице.'],
      },
    ],
  },
};

export const disclosures: Record<'en' | 'es' | 'ru', LegalDoc> = {
  en: {
    title: 'Insurance Disclosures',
    effectiveDateLabel: 'Effective date: July 25, 2026',
    intro:
      'This page provides licensing information and required insurance disclosures for M&K Agency Inc. It is provided for transparency and consumer protection. Note: wording regarding carrier relationships is subject to review by the carrier’s advertising compliance program and a licensed attorney.',
    sections: [
      {
        heading: 'Licensing',
        body: [
          'M&K Agency Inc is a licensed insurance agency in the State of Florida. Florida Agency License #L109526, Agency NPN #19586268. Agent in Charge: Mikhail Kozlov, Florida License #W639521, NPN #17798891.',
          'Office: 33550 South Dixie Highway, Ste 102, Florida City, FL 33034. Phone: (305) 247-8877.',
          'License status can be verified through the Florida Department of Financial Services licensee search at licenseesearch.fldfs.com.',
        ],
      },
      {
        heading: 'Carrier Relationships',
        body: [
          'Insurance products are offered through insurance carriers with which the agency and its agents hold appointments. All trademarks and brand names belong to their respective owners. This website is operated by M&K Agency Inc and is not the official website of any insurance carrier.',
        ],
      },
      {
        heading: 'No Coverage Bound',
        body: [
          'Nothing on this website binds, changes, or extends insurance coverage. Coverage cannot be bound, amended, or cancelled through this website, by email, by text message, or by voicemail. No coverage is in effect until confirmed in writing by the insurance company.',
        ],
      },
      {
        heading: 'Quotes Are Estimates',
        body: [
          'Premium quotes and rate information are estimates only, based on the information you provide. Final rates and eligibility are determined by the insurance company after underwriting review and are subject to its terms, conditions, and availability. Discounts are subject to eligibility requirements and may vary.',
        ],
      },
      {
        heading: 'AI Chat Assistant',
        body: [
          'The “Chat with Mike” feature is an AI-assisted tool intended to answer general questions and route requests to a licensed agent. Its responses are for general informational purposes only, do not constitute insurance, legal, or financial advice, and do not bind coverage or create an agent-client relationship. Coverage questions must be confirmed with a licensed agent.',
        ],
      },
      {
        heading: 'Communications, Calls, and Text Messages',
        body: [
          'By submitting a form with your consent, you authorize us to contact you by phone, text message (SMS), and email regarding your inquiry. Consent is not a condition of purchase. Message frequency varies; message and data rates may apply. Reply STOP to cancel text messages or HELP for help. See our Privacy Policy for details.',
        ],
      },
      {
        heading: 'Translations',
        body: [
          'This website is offered in English, Spanish, and Russian. Translations are provided for convenience only. In the event of any conflict or discrepancy, the English-language version controls. Insurance policies and related documents are issued in English.',
        ],
      },
      {
        heading: 'Contact',
        body: ['Questions about these disclosures: mikhailkozlov@allstate.com or (305) 247-8877.'],
      },
    ],
  },
  es: {
    title: 'Divulgaciones de Seguros',
    effectiveDateLabel: 'Fecha de vigencia: 25 de julio de 2026',
    intro:
      'Esta página proporciona información de licencias y las divulgaciones de seguros requeridas para M&K Agency Inc. Se ofrece por transparencia y protección al consumidor.',
    sections: [
      {
        heading: 'Licencias',
        body: [
          'M&K Agency Inc es una agencia de seguros con licencia en el Estado de Florida. Licencia de Agencia de Florida #L109526, NPN de la Agencia #19586268. Agente a Cargo: Mikhail Kozlov, Licencia de Florida #W639521, NPN #17798891.',
          'Oficina: 33550 South Dixie Highway, Ste 102, Florida City, FL 33034. Teléfono: (305) 247-8877.',
          'El estado de la licencia puede verificarse en el buscador del Departamento de Servicios Financieros de Florida: licenseesearch.fldfs.com.',
        ],
      },
      {
        heading: 'Relaciones con Aseguradoras',
        body: [
          'Los productos de seguros se ofrecen a través de aseguradoras con las que la agencia y sus agentes tienen nombramientos. Todas las marcas pertenecen a sus respectivos dueños. Este sitio web es operado por M&K Agency Inc y no es el sitio oficial de ninguna aseguradora.',
        ],
      },
      {
        heading: 'No Se Vincula Cobertura',
        body: [
          'Nada en este sitio web vincula, modifica ni extiende cobertura de seguro. La cobertura no puede vincularse, modificarse ni cancelarse a través de este sitio, por correo electrónico, mensaje de texto o buzón de voz. Ninguna cobertura está vigente hasta que la aseguradora la confirme por escrito.',
        ],
      },
      {
        heading: 'Las Cotizaciones Son Estimaciones',
        body: [
          'Las cotizaciones son solo estimaciones, basadas en la información que usted proporciona. Las tarifas finales y la elegibilidad las determina la aseguradora tras la revisión de suscripción y están sujetas a sus términos, condiciones y disponibilidad. Los descuentos están sujetos a requisitos de elegibilidad.',
        ],
      },
      {
        heading: 'Asistente de Chat con IA',
        body: [
          'La función “Chat with Mike” es una herramienta asistida por IA para responder preguntas generales y dirigir solicitudes a un agente con licencia. Sus respuestas son solo informativas, no constituyen asesoramiento de seguros, legal ni financiero, y no vinculan cobertura. Las decisiones de cobertura deben confirmarse con un agente con licencia.',
        ],
      },
      {
        heading: 'Comunicaciones, Llamadas y Mensajes de Texto',
        body: [
          'Al enviar un formulario con su consentimiento, usted nos autoriza a contactarlo por teléfono, mensaje de texto (SMS) y correo electrónico sobre su consulta. El consentimiento no es una condición de compra. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar o HELP para ayuda. Consulte nuestra Política de Privacidad.',
        ],
      },
      {
        heading: 'Traducciones',
        body: [
          'Este sitio se ofrece en inglés, español y ruso. Las traducciones son solo por conveniencia. En caso de conflicto o discrepancia, prevalece la versión en inglés. Las pólizas y documentos relacionados se emiten en inglés.',
        ],
      },
      {
        heading: 'Contacto',
        body: ['Preguntas sobre estas divulgaciones: mikhailkozlov@allstate.com o (305) 247-8877.'],
      },
    ],
  },
  ru: {
    title: 'Раскрытие информации',
    effectiveDateLabel: 'Дата вступления в силу: 25 июля 2026 г.',
    intro:
      'На этой странице приведена информация о лицензиях и обязательные страховые раскрытия M&K Agency Inc.',
    sections: [
      {
        heading: 'Лицензии',
        body: [
          'M&K Agency Inc — лицензированное страховое агентство штата Флорида. Лицензия агентства #L109526, NPN агентства #19586268. Главный агент: Mikhail Kozlov, лицензия #W639521, NPN #17798891.',
          'Офис: 33550 South Dixie Highway, Ste 102, Florida City, FL 33034. Телефон: (305) 247-8877.',
          'Статус лицензии можно проверить на сайте Департамента финансовых услуг Флориды: licenseesearch.fldfs.com.',
        ],
      },
      {
        heading: 'Отношения со страховыми компаниями',
        body: [
          'Страховые продукты предлагаются через страховые компании, в которых агентство и его агенты имеют назначения (appointments). Все товарные знаки принадлежат их владельцам. Этот сайт управляется M&K Agency Inc и не является официальным сайтом какой-либо страховой компании.',
        ],
      },
      {
        heading: 'Покрытие не оформляется через сайт',
        body: [
          'Ничто на этом сайте не оформляет, не изменяет и не продлевает страховое покрытие. Покрытие нельзя оформить, изменить или отменить через сайт, по email, SMS или голосовой почте. Покрытие вступает в силу только после письменного подтверждения страховой компании.',
        ],
      },
      {
        heading: 'Расчёты — только оценка',
        body: [
          'Расчёты стоимости — это оценки, основанные на предоставленной вами информации. Окончательные тарифы определяет страховая компания после андеррайтинга. Скидки зависят от условий и могут различаться.',
        ],
      },
      {
        heading: 'AI-чат',
        body: [
          'Функция «Chat with Mike» — инструмент на базе ИИ для ответов на общие вопросы и передачи запросов лицензированному агенту. Его ответы носят информационный характер, не являются консультацией и не оформляют покрытие. Вопросы покрытия подтверждайте у лицензированного агента.',
        ],
      },
      {
        heading: 'Звонки и сообщения',
        body: [
          'Отправляя форму с согласием, вы разрешаете связываться с вами по телефону, SMS и email по вашему запросу. Согласие не является условием покупки. Ответьте STOP, чтобы отказаться от SMS. Подробности — в Политике конфиденциальности.',
        ],
      },
      {
        heading: 'Переводы',
        body: [
          'Сайт доступен на английском, испанском и русском языках. Переводы предоставлены для удобства. При расхождениях преимущественную силу имеет английская версия. Страховые полисы оформляются на английском языке.',
        ],
      },
      {
        heading: 'Контакт',
        body: ['Вопросы по раскрытиям: mikhailkozlov@allstate.com или (305) 247-8877.'],
      },
    ],
  },
};
