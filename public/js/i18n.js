/* =====================================================================
   IDIOMA (ES/EN) — diccionario de traducciones y helpers
   ===================================================================== */
let LANG = localStorage.getItem('te_lang') === 'en' ? 'en' : 'es';

const I18N = {
  es: {
    page_title_home: 'Comercializadora T&amp;E S.A.S. — Dotación Empresarial y Textiles',
    page_title_catalogo: 'Catálogo de Dotación — Comercializadora T&amp;E S.A.S.',
    page_title_trabajo: 'Nuestro Trabajo — Comercializadora T&amp;E S.A.S.',
    page_title_calculadora: 'Calculadora de Dotación — Comercializadora T&amp;E S.A.S.',
    page_title_recursos: 'Recursos y Guías — Comercializadora T&amp;E S.A.S.',
    page_title_garantia: 'Garantía de Calidad — Comercializadora T&amp;E S.A.S.',
    page_title_contacto: 'Contáctanos — Comercializadora T&amp;E S.A.S.',

    nav_catalogo: 'Catálogo', nav_calculadora: 'Calculadora', nav_soluciones: 'Soluciones B2B',
    nav_trabajo: 'Nuestro trabajo', nav_contactanos: 'Contáctanos', nav_cotizar: 'Cotizar',
    nav_recursos: 'Recursos', nav_garantia: 'Garantía',
    whatsapp_write: 'Escríbenos por WhatsApp',
    whatsapp_float: 'Hablemos por WhatsApp',
    topbar_1: '🚚 Despachos a nivel nacional', topbar_2: '💬 Cotización rápida por WhatsApp', topbar_3: '🧵 Dotación empresarial a la medida',
    topbar_catalog: 'Catálogo PDF',

    hero_badge: 'Dotación empresarial &amp; confección a la medida',
    hero_title: 'Prendas de Trabajo para tu Equipo',
    hero_desc: 'Uniformes, dotación industrial y prendas confeccionadas a la medida, pensadas para el bienestar de tu equipo y la satisfacción de tus clientes.',
    hero_cta_catalog: 'Ver catálogo', hero_cta_quote: 'Solicitar cotización',
    hero_cta_pdf1: 'Portafolio T&amp;E (PDF)', hero_cta_pdf2: 'Catálogo de EPP (PDF)',
    hero_scroll: 'Descubre más',
    hero_metric_meters: 'Prendas Confeccionadas', hero_metric_ontime: 'Entregas a Tiempo', hero_metric_clients: 'Empresa colombiana',

    cat_eyebrow: 'Catálogo de Dotación', cat_title: 'Prendas de trabajo disponibles',
    cat_desc: 'Filtra en tiempo real por categoría y disponibilidad, y solicita tu cotización directo por WhatsApp.',
    cat_cop_note: 'Precios en pesos colombianos (COP) por unidad. IVA no incluido — sujetos a volumen y disponibilidad.',
    cat_download_pdf: 'Descargar catálogo (PDF)',
    cat_filter_type: 'Categoría de producto', cat_filter_type_all: 'Todas las categorías',
    cat_overoles: 'Overoles', cat_altavisibilidad: 'Alta Visibilidad', cat_invierno: 'Ropa de Invierno',
    cat_pantalondama: 'Pantalón Dama', cat_pantaloncaballero: 'Pantalón Caballero', cat_camisas: 'Camisas para Caballero',
    cat_polo: 'Camisetas Polo', cat_chaquetas: 'Chaquetas', cat_chalecos: 'Chalecos',
    cat_filter_stock: 'Estado de stock', cat_filter_stock_all: 'Todos',
    stock_in: 'En Stock', stock_demand: 'Sobre Pedido', stock_out: 'Agotado',
    cat_empty: 'No hay prendas que coincidan con los filtros seleccionados.',
    cat_card_sizes: 'Tallas', cat_card_price: 'Precio / unidad', cat_card_quote: 'Ver y cotizar', cat_card_spec: 'Ficha técnica (PDF)',
    cat_card_quickview: 'Vista rápida', cat_count_label: 'Mostrando {n} prendas', unit_short: 'und',
    modal_qty_label: 'Cantidad', modal_size_label: 'Talla', modal_quote_btn: 'Solicitar por WhatsApp',

    calc_eyebrow: 'Herramienta interactiva', calc_title: 'Calculadora de dotación',
    calc_desc: 'Estima cuántas prendas necesitas para tu equipo según el número de empleados. Envía el resultado directo por WhatsApp.',
    calc_li1: 'Calcula por número de colaboradores.',
    calc_li2: 'Elige la prenda y las unidades por persona.',
    calc_li3: 'Envía el resultado directo por WhatsApp.',
    calc_garment_label: 'Prenda a solicitar', calc_per_employee_label: 'Unidades por empleado',
    calc_qty_label: 'Número de empleados',
    calc_base: 'Total de prendas', calc_waste: 'Precio por unidad', calc_total: 'Costo total estimado',
    calc_send_btn: 'Solicitar por WhatsApp',

    calcmeta_eyebrow: 'Metodología', calcmeta_title: 'Cómo calculamos tu dotación',
    calcmeta_desc: 'La fórmula base es simple: empleados × unidades por persona = total de prendas. A partir de ahí, un asesor ajusta el resultado según tallas, disponibilidad y tiempos de entrega.',
    calcmeta_1_t: 'Número de empleados', calcmeta_1_d: 'La cantidad de personas de tu equipo que necesitan dotación.',
    calcmeta_2_t: 'Unidades por persona', calcmeta_2_d: 'Cuántas prendas de repuesto necesita cada colaborador (rotación, lavado, turnos).',
    calcmeta_3_t: 'Ajuste final con un asesor', calcmeta_3_d: 'Confirmamos tallas exactas, colores y tiempos de entrega antes de producir.',
    calcfaq_eyebrow: 'Preguntas frecuentes', calcfaq_title: 'Dudas sobre la calculadora',
    calcfaq_1_q: '¿Puedo pedir tallas mixtas dentro del mismo lote?',
    calcfaq_1_a: 'Sí. La calculadora estima el total de unidades; el desglose por talla lo confirmas con tu asesor al cotizar por WhatsApp.',
    calcfaq_2_q: '¿El precio cambia según el volumen del pedido?',
    calcfaq_2_a: 'El precio mostrado es por unidad; para volúmenes grandes, tu asesor puede ofrecerte condiciones especiales según el pedido.',
    calcfaq_3_q: '¿Puedo combinar varias prendas en una sola cotización?',
    calcfaq_3_a: 'Claro. Calcula cada prenda por separado y envíanos los resultados por WhatsApp; tu asesor arma la cotización completa.',

    sol_badge: 'T&amp;E OS · Sistema web B2B', sol_title: 'Gestiona tus pedidos en el sistema T&amp;E OS',
    sol_desc: 'Nuestros clientes mayoristas operan sobre una plataforma integral de inventario, kardex y cierre contable. Todo el ciclo de compra, en un solo lugar.',
    sol_f1_t: 'Rastreo en tiempo real', sol_f1_d: 'Estado y ubicación de cada pedido.',
    sol_f2_t: 'Fichas técnicas PDF', sol_f2_d: 'Descarga de especificaciones por prenda.',
    sol_f3_t: 'Historial de facturación', sol_f3_d: 'Consulta y descarga tus documentos.',
    sol_f4_t: 'Inventario en bodega', sol_f4_d: 'Verificación de disponibilidad real.',
    sol_cta: 'Solicitar acceso como cliente mayorista',
    sol_mock_orders: 'Pedidos activos', sol_mock_rolls: 'Prendas en bodega', sol_mock_invoices: 'Facturas mes', sol_mock_transit: 'En ruta',

    test_eyebrow: 'Confianza de nuestros clientes', test_title: 'Lo que dicen nuestros clientes mayoristas',
    test_1_quote: '"Con T&amp;E dejamos de parar línea de producción por falta de dotación. La calidad de confección es real: lo que pedimos es lo que llega."',
    test_1_name: 'Andrés M.', test_1_role: 'Gerente de Producción · Confección de uniformes',
    test_2_quote: '"El catálogo con precios claros y la calculadora de dotación nos ahorran horas de pedido cada semana."',
    test_2_name: 'Laura P.', test_2_role: 'Jefe de Compras · Taller de maquila',
    test_3_quote: '"Pedimos grandes volúmenes de dotación y siempre llegan a tiempo. El soporte por WhatsApp es inmediato."',
    test_3_name: 'Camilo R.', test_3_role: 'Director de Operaciones · Dotación corporativa',

    warr_eyebrow: 'Nuestros pilares', warr_title: 'Por qué las empresas confían en T&amp;E',
    warr_1_t: 'Confección verificada', warr_1_d: 'Cada prenda revisada e inspeccionada antes del despacho.',
    warr_2_t: 'Continuidad de stock', warr_2_d: 'Reposición programada de tallas y modelos de alta rotación.',
    warr_3_t: 'Logística integral', warr_3_d: 'Distribución nacional con seguimiento por pedido.',
    warr_4_t: 'Confección a la medida', warr_4_d: 'Tallas, colores, logos bordados o estampados según tu necesidad.',

    qc_eyebrow: 'Control de calidad', qc_title: 'El proceso que sigue cada prenda',
    qc_1_t: 'Revisión de tela', qc_1_d: 'Verificamos gramaje, color y defectos de tela antes de iniciar el corte.',
    qc_2_t: 'Corte y confección', qc_2_d: 'Patronaje y costura siguiendo la ficha técnica de cada prenda.',
    qc_3_t: 'Inspección final', qc_3_d: 'Revisamos costuras, tallas y acabados antes de aprobar la prenda.',
    qc_4_t: 'Empaque y despacho', qc_4_d: 'Empacamos y despachamos con seguimiento hasta la entrega final.',

    warrfaq_eyebrow: 'Preguntas frecuentes', warrfaq_title: 'Preguntas sobre garantía',
    warrfaq_1_q: '¿Qué pasa si una prenda llega con un defecto de fábrica?',
    warrfaq_1_a: 'Escríbenos por WhatsApp con fotos del defecto y el número de pedido; gestionamos el cambio o la reposición de la prenda.',
    warrfaq_2_q: '¿Puedo solicitar cambios de talla después de recibir el pedido?',
    warrfaq_2_a: 'Sí, coordina el cambio directamente con tu asesor; la disponibilidad depende de la talla y el modelo solicitado.',
    warrfaq_3_q: '¿Cómo verifican la calidad antes de despachar?',
    warrfaq_3_a: 'Cada prenda pasa por inspección de costuras, tallas y acabados antes de ser empacada para su despacho.',

    spec_eyebrow: 'Nuestra especialidad', spec_title: 'Especialistas en dotación empresarial de:',
    spec_li_overoles: 'Overoles industriales', spec_li_altavis: 'Ropa de alta visibilidad', spec_li_invierno: 'Ropa de invierno',
    spec_li_pantalondama: 'Pantalón para dama', spec_li_pantaloncab: 'Pantalón para caballero', spec_li_camisas: 'Camisas para caballero',
    spec_li_polo: 'Camisetas polo', spec_li_chaquetas: 'Chaquetas de trabajo', spec_li_chalecos: 'Chalecos institucionales',
    spec_cta: 'Ver todo el catálogo',

    howto_eyebrow: 'Proceso de compra', howto_title: 'Cómo hacer tu pedido',
    howto_1_t: 'Explora y filtra', howto_1_d: 'Filtra el catálogo por categoría y disponibilidad para encontrar la prenda que necesitas.',
    howto_2_t: 'Solicita tu cotización', howto_2_d: 'Elige talla y cantidad; te abrimos WhatsApp con el detalle ya armado para enviarlo directo.',
    howto_3_t: 'Confirma y recibe', howto_3_d: 'Un asesor confirma cantidades, precio y tiempos de entrega, y coordina el despacho de tu pedido.',

    sizeguide_eyebrow: 'Referencia', sizeguide_title: 'Guía de tallas',
    sizeguide_desc: 'Tallas estándar de referencia. Como toda nuestra dotación se confecciona a la medida, también podemos ajustar patrones a las tallas específicas de tu equipo.',
    sizeguide_col_size: 'Talla', sizeguide_col_chest: 'Pecho / busto (cm)', sizeguide_col_waist: 'Cintura (cm)',
    sizeguide_note: 'Medidas de referencia en centímetros. Para pedidos grandes, recomendamos confirmar tallas exactas por WhatsApp antes de producir.',

    work_eyebrow: 'Producción propia', work_title: 'Nuestro trabajo',
    work_desc: 'Una muestra de las prendas que confeccionamos y despachamos cada semana desde nuestro taller para empresas en toda Colombia.',

    workproc_eyebrow: 'Nuestro proceso', workproc_title: 'Cómo trabajamos',
    workproc_1_t: 'Consulta y diseño', workproc_1_d: 'Definimos contigo tallas, colores, telas y logos según la necesidad de tu equipo.',
    workproc_2_t: 'Confección a la medida', workproc_2_d: 'Cortamos y confeccionamos cada lote en nuestro taller, prenda por prenda.',
    workproc_3_t: 'Control de calidad', workproc_3_d: 'Revisamos costuras, tallas y terminación antes de que la prenda salga del taller.',
    workproc_4_t: 'Entrega nacional', workproc_4_d: 'Despachamos tu pedido a cualquier ciudad de Colombia con seguimiento del envío.',

    res_eyebrow: 'Recursos', res_title: 'Guías técnicas para tu confección',
    res_desc: 'Contenido práctico para elegir mejor tus telas, calcular metraje y reducir mermas en producción.',
    res_tag_guide: 'Guía', res_tag_calc: 'Producción', res_tag_storage: 'Bodega', res_read_more: 'Leer artículo',
    res_1_title: '¿Qué es el gramaje (GSM) y por qué importa?',
    res_1_excerpt: 'Cómo elegir el peso correcto de tela según la prenda: de uniformes livianos a chaquetas técnicas.',
    res_2_title: 'Cómo calcular el metraje correcto para tu lote de producción',
    res_2_excerpt: 'La fórmula que usamos en nuestra calculadora y por qué siempre conviene incluir un margen de merma.',
    res_3_title: 'Buenas prácticas para almacenar rollos de tela',
    res_3_excerpt: 'Humedad, luz solar y apilado: los factores que más deterioran tu materia prima y cómo evitarlos.',
    res_tag_sizes: 'Tallas', res_tag_fabrics: 'Telas', res_tag_safety: 'Seguridad',
    res_4_title: 'Cómo elegir tallas para la dotación de un equipo grande',
    res_4_excerpt: 'Levanta una tabla de tallas real, deja tallas "puente" de repuesto y valida con una muestra antes de producir el lote completo.',
    res_5_title: 'Diferencias entre dril, gabardina y drill stretch',
    res_5_excerpt: 'Cuándo usar cada tela según resistencia, presentación y comodidad de movimiento para tu equipo.',
    res_6_title: '¿Cuándo es obligatorio usar ropa de alta visibilidad certificada?',
    res_6_excerpt: 'En qué entornos de trabajo se requiere, y qué debes indicarnos si tu operación exige una certificación específica.',

    contact_eyebrow: 'Contáctanos', contact_title: 'Escríbenos, te respondemos pronto',
    contact_desc: 'Cuéntanos qué necesitas y un asesor de Comercializadora T&amp;E te contactará directamente por WhatsApp.',
    contact_whatsapp_label: 'WhatsApp',
    contact_privacy_label: 'Tus datos están protegidos', contact_privacy_value: 'Uso exclusivo para atender tu solicitud',
    contact_name_label: 'Nombre completo *', contact_phone_label: 'Teléfono *', contact_email_label: 'Correo electrónico',
    contact_subject_label: 'Asunto *', contact_message_label: 'Mensaje *',
    contact_consent_pre: 'He leído y acepto la', contact_consent_link: 'Política de tratamiento de datos personales',
    contact_submit: 'Enviar por WhatsApp',
    contact_toast_ok: 'Abrimos WhatsApp con tu mensaje. ¡Gracias por escribirnos!',
    contact_toast_consent: 'Debes aceptar la política de tratamiento de datos para continuar.',

    contactfaq_eyebrow: 'Preguntas frecuentes', contactfaq_title: 'Antes de escribirnos',
    contactfaq_1_q: '¿Cuál es la mejor forma de contactarlos?',
    contactfaq_1_a: 'WhatsApp es el canal más rápido para cotizaciones y dudas puntuales; el formulario es ideal si prefieres detallar tu solicitud por escrito.',
    contactfaq_2_q: '¿Hacen despachos a todo el país?',
    contactfaq_2_a: 'Sí, despachamos a nivel nacional. Tu asesor te confirma tiempos y costo de envío según tu ciudad al cotizar.',
    contactfaq_3_q: '¿Qué información debo tener lista para cotizar más rápido?',
    contactfaq_3_a: 'Ten a la mano el tipo de prenda, cantidad aproximada de empleados y, si aplica, tallas o colores de referencia — así tu asesor arma la cotización en un solo mensaje.',

    footer_tagline: 'Dotación empresarial &amp; materia prima textil',
    footer_desc: 'Uniformes, dotación industrial y materia prima textil de alta gama, confeccionados a la medida con garantía de calidad y logística integral.',
    footer_coverage: 'Cobertura nacional',
    footer_nav_title: 'Navegación', footer_nav_catalog: 'Catálogo', footer_nav_calc: 'Calculadora de dotación',
    footer_nav_test: 'Testimonios', footer_nav_quote: 'Solicitar cotización',
    footer_res_title: 'Recursos', footer_res_specialties: 'Especialidades', footer_res_articles: 'Guías y artículos',
    footer_rights_prefix: '©', footer_rights: 'Comercializadora T&amp;E S.A.S. Todos los derechos reservados.',
    footer_bottom: 'Dotación empresarial &amp; textil · Ecosistema T&amp;E OS',

    toast_calc_sent: 'Abrimos WhatsApp con tu cotización',
    toast_calc_empty_warn: 'Selecciona una prenda y una cantidad válida antes de continuar.',
    toast_select_size: 'Selecciona una talla antes de continuar.',
    pdf_spec_subtitle: 'Ficha técnica de producto',
    pdf_col_category: 'Categoría', pdf_col_sizes: 'Tallas', pdf_col_material: 'Material',
    pdf_col_price: 'Precio/unidad', pdf_col_stock: 'Disponibilidad', pdf_col_description: 'Descripción',
    pdf_footer: 'Comercializadora T&E S.A.S. · Pedido sujeto a disponibilidad',
  },
  en: {
    page_title_home: 'Comercializadora T&amp;E S.A.S. — Corporate Workwear and Textiles',
    page_title_catalogo: 'Workwear Catalog — Comercializadora T&amp;E S.A.S.',
    page_title_trabajo: 'Our Work — Comercializadora T&amp;E S.A.S.',
    page_title_calculadora: 'Workwear Calculator — Comercializadora T&amp;E S.A.S.',
    page_title_recursos: 'Resources & Guides — Comercializadora T&amp;E S.A.S.',
    page_title_garantia: 'Quality Guarantee — Comercializadora T&amp;E S.A.S.',
    page_title_contacto: 'Contact Us — Comercializadora T&amp;E S.A.S.',

    nav_catalogo: 'Catalog', nav_calculadora: 'Calculator', nav_soluciones: 'B2B Solutions',
    nav_trabajo: 'Our work', nav_contactanos: 'Contact us', nav_cotizar: 'Get a quote',
    nav_recursos: 'Resources', nav_garantia: 'Guarantee',
    whatsapp_write: 'Message us on WhatsApp',
    whatsapp_float: "Let's talk on WhatsApp",
    topbar_1: '🚚 Nationwide shipping', topbar_2: '💬 Fast quotes on WhatsApp', topbar_3: '🧵 Corporate workwear made to order',
    topbar_catalog: 'Catalog PDF',

    hero_badge: 'Corporate workwear &amp; made-to-order manufacturing',
    hero_title: 'Work Garments for Your Team',
    hero_desc: 'Uniforms, industrial workwear and made-to-order garments, designed for your team’s wellbeing and your customers’ satisfaction.',
    hero_cta_catalog: 'View catalog', hero_cta_quote: 'Request a quote',
    hero_cta_pdf1: 'T&amp;E Portfolio (PDF)', hero_cta_pdf2: 'PPE Catalog (PDF)',
    hero_scroll: 'Discover more',
    hero_metric_meters: 'Garments Manufactured', hero_metric_ontime: 'On-time Deliveries', hero_metric_clients: 'Colombian company',

    cat_eyebrow: 'Workwear Catalog', cat_title: 'Available work garments',
    cat_desc: 'Filter in real time by category and availability, and request your quote directly on WhatsApp.',
    cat_cop_note: 'Prices in Colombian pesos (COP) per unit. VAT not included — subject to volume and availability.',
    cat_download_pdf: 'Download catalog (PDF)',
    cat_filter_type: 'Product category', cat_filter_type_all: 'All categories',
    cat_overoles: 'Coveralls', cat_altavisibilidad: 'High Visibility', cat_invierno: 'Winter Wear',
    cat_pantalondama: 'Women’s Pants', cat_pantaloncaballero: 'Men’s Pants', cat_camisas: 'Men’s Shirts',
    cat_polo: 'Polo Shirts', cat_chaquetas: 'Jackets', cat_chalecos: 'Vests',
    cat_filter_stock: 'Stock status', cat_filter_stock_all: 'All',
    stock_in: 'In Stock', stock_demand: 'On Demand', stock_out: 'Out of Stock',
    cat_empty: 'No garments match the selected filters.',
    cat_card_sizes: 'Sizes', cat_card_price: 'Price / unit', cat_card_quote: 'View & quote', cat_card_spec: 'Spec sheet (PDF)',
    cat_card_quickview: 'Quick view', cat_count_label: 'Showing {n} garments', unit_short: 'unit',
    modal_qty_label: 'Quantity', modal_size_label: 'Size', modal_quote_btn: 'Request via WhatsApp',

    calc_eyebrow: 'Interactive tool', calc_title: 'Workwear calculator',
    calc_desc: 'Estimate how many garments your team needs based on your headcount. Send the result straight via WhatsApp.',
    calc_li1: 'Calculate by number of employees.',
    calc_li2: 'Choose the garment and units per person.',
    calc_li3: 'Send the result straight via WhatsApp.',
    calc_garment_label: 'Garment to request', calc_per_employee_label: 'Units per employee',
    calc_qty_label: 'Number of employees',
    calc_base: 'Total garments', calc_waste: 'Price per unit', calc_total: 'Estimated total cost',
    calc_send_btn: 'Request via WhatsApp',

    calcmeta_eyebrow: 'Methodology', calcmeta_title: 'How we calculate your workwear needs',
    calcmeta_desc: 'The base formula is simple: employees × units per person = total garments. From there, an advisor fine-tunes the result based on sizes, availability and lead times.',
    calcmeta_1_t: 'Number of employees', calcmeta_1_d: 'How many people on your team need workwear.',
    calcmeta_2_t: 'Units per person', calcmeta_2_d: 'How many spare garments each employee needs (rotation, laundry, shifts).',
    calcmeta_3_t: 'Final adjustment with an advisor', calcmeta_3_d: 'We confirm exact sizes, colors and lead times before production.',
    calcfaq_eyebrow: 'FAQ', calcfaq_title: 'Questions about the calculator',
    calcfaq_1_q: 'Can I order mixed sizes within the same batch?',
    calcfaq_1_a: 'Yes. The calculator estimates the total units; the size breakdown is confirmed with your advisor when you request a quote on WhatsApp.',
    calcfaq_2_q: 'Does the price change based on order volume?',
    calcfaq_2_a: 'The price shown is per unit; for large volumes, your advisor can offer special terms based on the order.',
    calcfaq_3_q: 'Can I combine several garments in one quote?',
    calcfaq_3_a: 'Sure. Calculate each garment separately and send us the results on WhatsApp; your advisor will put together the full quote.',

    sol_badge: 'T&amp;E OS · B2B Web System', sol_title: 'Manage your orders in the T&amp;E OS system',
    sol_desc: 'Our wholesale clients operate on an integrated platform for inventory, stock ledger and accounting close. The full purchasing cycle, in one place.',
    sol_f1_t: 'Real-time tracking', sol_f1_d: 'Status and location of every order.',
    sol_f2_t: 'PDF spec sheets', sol_f2_d: 'Download specifications per garment.',
    sol_f3_t: 'Billing history', sol_f3_d: 'View and download your documents.',
    sol_f4_t: 'Warehouse inventory', sol_f4_d: 'Real-time availability verification.',
    sol_cta: 'Request access as a wholesale client',
    sol_mock_orders: 'Active orders', sol_mock_rolls: 'Garments in stock', sol_mock_invoices: 'Invoices this month', sol_mock_transit: 'In transit',

    test_eyebrow: 'Trusted by our clients', test_title: 'What our wholesale clients say',
    test_1_quote: '"With T&amp;E we stopped halting production lines for lack of workwear. The manufacturing quality is real: what we order is what arrives."',
    test_1_name: 'Andrés M.', test_1_role: 'Production Manager · Uniform manufacturing',
    test_2_quote: '"The catalog with clear pricing and the workwear calculator save us hours of ordering every week."',
    test_2_name: 'Laura P.', test_2_role: 'Purchasing Lead · Contract manufacturing workshop',
    test_3_quote: '"We order large volumes of workwear and they always arrive on time. WhatsApp support is immediate."',
    test_3_name: 'Camilo R.', test_3_role: 'Operations Director · Corporate workwear',

    warr_eyebrow: 'Our pillars', warr_title: 'Why companies trust T&amp;E',
    warr_1_t: 'Verified manufacturing', warr_1_d: 'Every garment inspected before dispatch.',
    warr_2_t: 'Stock continuity', warr_2_d: 'Scheduled replenishment of high-turnover sizes and models.',
    warr_3_t: 'End-to-end logistics', warr_3_d: 'Nationwide distribution with per-order tracking.',
    warr_4_t: 'Made-to-order manufacturing', warr_4_d: 'Sizes, colors, embroidered or printed logos to your needs.',

    qc_eyebrow: 'Quality control', qc_title: 'The process every garment goes through',
    qc_1_t: 'Fabric inspection', qc_1_d: 'We check weight, color and fabric defects before cutting begins.',
    qc_2_t: 'Cutting and sewing', qc_2_d: 'Pattern-making and sewing following each garment\'s spec sheet.',
    qc_3_t: 'Final inspection', qc_3_d: 'We check seams, sizing and finishing before approving the garment.',
    qc_4_t: 'Packing and dispatch', qc_4_d: 'We pack and ship with tracking through to final delivery.',

    warrfaq_eyebrow: 'FAQ', warrfaq_title: 'Questions about our guarantee',
    warrfaq_1_q: 'What happens if a garment arrives with a factory defect?',
    warrfaq_1_a: 'Message us on WhatsApp with photos of the defect and your order number; we arrange an exchange or replacement.',
    warrfaq_2_q: 'Can I request a size change after receiving my order?',
    warrfaq_2_a: 'Yes, coordinate the change directly with your advisor; availability depends on the size and model requested.',
    warrfaq_3_q: 'How do you check quality before shipping?',
    warrfaq_3_a: 'Every garment goes through an inspection of seams, sizing and finishing before being packed for dispatch.',

    spec_eyebrow: 'Our specialty', spec_title: 'Specialists in corporate workwear for:',
    spec_li_overoles: 'Industrial coveralls', spec_li_altavis: 'High-visibility apparel', spec_li_invierno: 'Winter workwear',
    spec_li_pantalondama: 'Women\'s pants', spec_li_pantaloncab: 'Men\'s pants', spec_li_camisas: 'Men\'s shirts',
    spec_li_polo: 'Polo shirts', spec_li_chaquetas: 'Work jackets', spec_li_chalecos: 'Institutional vests',
    spec_cta: 'View the full catalog',

    howto_eyebrow: 'Buying process', howto_title: 'How to place your order',
    howto_1_t: 'Browse and filter', howto_1_d: 'Filter the catalog by category and availability to find the garment you need.',
    howto_2_t: 'Request your quote', howto_2_d: 'Pick size and quantity; we open WhatsApp with the details already filled in, ready to send.',
    howto_3_t: 'Confirm and receive', howto_3_d: 'An advisor confirms quantities, pricing and lead times, and arranges delivery of your order.',

    sizeguide_eyebrow: 'Reference', sizeguide_title: 'Size guide',
    sizeguide_desc: 'Standard reference sizes. Since all our workwear is made to order, we can also adjust patterns to your team\'s specific sizes.',
    sizeguide_col_size: 'Size', sizeguide_col_chest: 'Chest / bust (cm)', sizeguide_col_waist: 'Waist (cm)',
    sizeguide_note: 'Reference measurements in centimeters. For large orders, we recommend confirming exact sizes via WhatsApp before production.',

    work_eyebrow: 'In-house production', work_title: 'Our work',
    work_desc: 'A look at the garments we manufacture and ship every week from our workshop for companies across Colombia.',

    workproc_eyebrow: 'Our process', workproc_title: 'How we work',
    workproc_1_t: 'Consultation and design', workproc_1_d: 'We work with you to define sizes, colors, fabrics and logos based on your team\'s needs.',
    workproc_2_t: 'Made-to-order manufacturing', workproc_2_d: 'We cut and sew every batch in our workshop, garment by garment.',
    workproc_3_t: 'Quality control', workproc_3_d: 'We check seams, sizing and finishing before the garment leaves the workshop.',
    workproc_4_t: 'Nationwide delivery', workproc_4_d: 'We ship your order to any city in Colombia with delivery tracking.',

    res_eyebrow: 'Resources', res_title: 'Technical guides for your manufacturing',
    res_desc: 'Practical content to choose better fabrics, calculate yardage and reduce production waste.',
    res_tag_guide: 'Guide', res_tag_calc: 'Production', res_tag_storage: 'Warehouse', res_read_more: 'Read article',
    res_1_title: 'What is fabric weight (GSM) and why does it matter?',
    res_1_excerpt: 'How to choose the right fabric weight for your garment: from lightweight uniforms to technical jackets.',
    res_2_title: 'How to calculate the right yardage for your production batch',
    res_2_excerpt: 'The formula behind our calculator and why you should always include a waste margin.',
    res_3_title: 'Best practices for storing fabric rolls',
    res_3_excerpt: 'Humidity, sunlight and stacking: the factors that damage raw material the most, and how to avoid them.',
    res_tag_sizes: 'Sizing', res_tag_fabrics: 'Fabrics', res_tag_safety: 'Safety',
    res_4_title: 'How to choose sizes for a large team\'s workwear',
    res_4_excerpt: 'Build a real size chart, keep "bridge" backup sizes, and validate with a sample before producing the full batch.',
    res_5_title: 'Differences between drill, gabardine and stretch drill',
    res_5_excerpt: 'When to use each fabric based on durability, presentation and freedom of movement for your team.',
    res_6_title: 'When is certified high-visibility clothing required?',
    res_6_excerpt: 'Which work environments require it, and what to tell us if your operation needs a specific certification.',

    contact_eyebrow: 'Contact us', contact_title: 'Write to us, we reply fast',
    contact_desc: 'Tell us what you need and a Comercializadora T&amp;E advisor will contact you directly on WhatsApp.',
    contact_whatsapp_label: 'WhatsApp',
    contact_privacy_label: 'Your data is protected', contact_privacy_value: 'Used only to handle your request',
    contact_name_label: 'Full name *', contact_phone_label: 'Phone *', contact_email_label: 'Email address',
    contact_subject_label: 'Subject *', contact_message_label: 'Message *',
    contact_consent_pre: 'I have read and accept the', contact_consent_link: 'Personal data processing policy',
    contact_submit: 'Send via WhatsApp',
    contact_toast_ok: 'We opened WhatsApp with your message. Thanks for reaching out!',
    contact_toast_consent: 'You must accept the data processing policy to continue.',

    contactfaq_eyebrow: 'FAQ', contactfaq_title: 'Before you write to us',
    contactfaq_1_q: 'What\'s the best way to reach you?',
    contactfaq_1_a: 'WhatsApp is the fastest channel for quotes and quick questions; the form is great if you prefer to detail your request in writing.',
    contactfaq_2_q: 'Do you ship nationwide?',
    contactfaq_2_a: 'Yes, we ship across Colombia. Your advisor will confirm lead times and shipping cost for your city when you request a quote.',
    contactfaq_3_q: 'What information should I have ready for a faster quote?',
    contactfaq_3_a: 'Have the garment type, approximate number of employees and, if applicable, reference sizes or colors ready — that way your advisor can put together the quote in a single message.',

    footer_tagline: 'Corporate workwear &amp; textile raw materials',
    footer_desc: 'Uniforms, industrial workwear and high-grade textile raw materials, made to order with a quality guarantee and end-to-end logistics.',
    footer_coverage: 'Nationwide coverage',
    footer_nav_title: 'Navigation', footer_nav_catalog: 'Catalog', footer_nav_calc: 'Workwear calculator',
    footer_nav_test: 'Testimonials', footer_nav_quote: 'Request a quote',
    footer_res_title: 'Resources', footer_res_specialties: 'Specialties', footer_res_articles: 'Guides & articles',
    footer_rights_prefix: '©', footer_rights: 'Comercializadora T&amp;E S.A.S. All rights reserved.',
    footer_bottom: 'Corporate workwear &amp; textile · T&amp;E OS Ecosystem',

    toast_calc_sent: 'We opened WhatsApp with your quote request',
    toast_calc_empty_warn: 'Select a garment and a valid quantity before continuing.',
    toast_select_size: 'Please select a size before continuing.',
    pdf_spec_subtitle: 'Product spec sheet',
    pdf_col_category: 'Category', pdf_col_sizes: 'Sizes', pdf_col_material: 'Material',
    pdf_col_price: 'Price/unit', pdf_col_stock: 'Availability', pdf_col_description: 'Description',
    pdf_footer: 'Comercializadora T&E S.A.S. · Order subject to availability',
  },
};
function t(key, vars) {
  let s = (I18N[LANG] && I18N[LANG][key] != null) ? I18N[LANG][key] : (I18N.es[key] || key);
  if (vars) Object.keys(vars).forEach(k => { s = s.replaceAll(`{${k}}`, vars[k]); });
  return s;
}


/* ---------------- Idioma (ES/EN) ---------------- */
function applyI18n() {
  document.documentElement.lang = LANG;
  // El <title id="pageTitle" data-i18n="page_title_x"> de cada página se traduce
  // igual que cualquier otro texto, en el bucle general de abajo.
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });

  [['langEs','langEn'],['langEsMobile','langEnMobile']].forEach(([esId, enId]) => {
    const esBtn = document.getElementById(esId), enBtn = document.getElementById(enId);
    if (!esBtn || !enBtn) return;
    esBtn.classList.toggle('bg-navy', LANG === 'es');
    esBtn.classList.toggle('text-white', LANG === 'es');
    esBtn.classList.toggle('text-slate-500', LANG !== 'es');
    enBtn.classList.toggle('bg-navy', LANG === 'en');
    enBtn.classList.toggle('text-white', LANG === 'en');
    enBtn.classList.toggle('text-slate-500', LANG !== 'en');
  });

  // Estas funciones solo existen en las páginas que cargan catalog.js / calculator.js
  // y solo tienen efecto si sus elementos (#catalogGrid, #calcGarment...) están en la página actual.
  if (typeof renderCatalog === 'function' && document.getElementById('catalogGrid')) renderCatalog();
  if (typeof calc === 'function' && document.getElementById('calcGarment')) calc();
  lucide.createIcons();
}
function setLang(lang) {
  LANG = lang;
  localStorage.setItem('te_lang', lang);
  applyI18n();
}
['langEs','langEsMobile'].forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener('click', () => setLang('es')); });
['langEn','langEnMobile'].forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener('click', () => setLang('en')); });
