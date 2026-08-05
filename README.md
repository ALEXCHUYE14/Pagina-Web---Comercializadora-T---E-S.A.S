# Comercializadora T&E S.A.S. — Dotación Empresarial y Textiles

🔗 **En vivo:** https://tyecomercializadora.vercel.app

Sitio web multi-página para **Comercializadora T&E S.A.S.**, empresa colombiana de dotación
empresarial (uniformes, overoles, ropa de trabajo) y materia prima textil. Catálogo con selección
de talla, calculadora de dotación y cotización directa por **WhatsApp** — sin carrito de compras ni
pasarela de pagos en línea. Disponible en español e inglés.

---

## Estructura del proyecto

```
comercializadora-tye/
├── README.md                     Este archivo
├── .env.example                  Plantilla de variables (claves Supabase)
├── public/
│   ├── index.html                Home: hero, pilares, especialidades, soluciones B2B, testimonios
│   ├── catalogo.html             Catálogo completo + guía de tallas + cómo hacer tu pedido
│   ├── nuestro-trabajo.html      Galería de producción + cómo trabajamos
│   ├── calculadora.html          Calculadora de dotación + metodología + FAQ
│   ├── recursos.html             Guías técnicas (6 artículos) con modal de lectura
│   ├── garantia.html             Pilares de calidad + proceso de control + FAQ
│   ├── contacto.html             Formulario de contacto + FAQ + política de datos
│   ├── PORTAFOLIO TE.pdf         Catálogo/portafolio descargable
│   ├── img/logo.png              Logo oficial de la empresa
│   ├── img/products/*.jpg        Fotos de producto (generadas con IA, estilo catálogo)
│   ├── sitemap.xml               Mapa del sitio (actualiza el dominio antes de publicar)
│   ├── robots.txt                Directivas para buscadores
│   ├── css/
│   │   └── main.css              Estilos base y animaciones propias (fuera de Tailwind CDN)
│   ├── video/hero-confeccion.mp4 Video de fondo del hero
│   └── js/                       Lógica dividida por responsabilidad (scripts clásicos, sin bundler)
│       ├── tailwind-config.js      Tokens de color/tipografía de Tailwind (carga en <head>)
│       ├── analytics.js            Google Analytics 4, opcional (carga en <head>)
│       ├── config.js               Número de WhatsApp + claves de Supabase y Tidio — 1er script del <body>
│       ├── i18n.js                 Diccionario ES/EN, t(), applyI18n(), selector de idioma
│       ├── catalog.js              Datos de respaldo, carga desde Supabase, render y fichas PDF
│       ├── product-modal.js        Vista rápida de producto (talla, cantidad) -> cotizar por WhatsApp
│       ├── calculator.js           Calculadora de dotación (empleados x prendas) -> cotizar por WhatsApp
│       ├── articles.js             Blog / recursos técnicos y política de datos (modal)
│       ├── contact.js              Formulario de contacto -> mensaje de WhatsApp prellenado
│       ├── chat.js                 Chat en vivo Tidio, opcional
│       ├── ui.js                   Toast, filtros de catálogo, menú móvil, contadores animados
│       └── main.js                 Arranque de la app — se carga de último
├── database/
│   └── migrations/                 Esquema opcional de Supabase para el catálogo en vivo
│       ├── 01_schema.sql            Tablas del catálogo (incluye quote_requests/quote_items, sin uso actual)
│       ├── 02_rls_policies.sql      Row Level Security + políticas de acceso
│       ├── 03_seed.sql              Datos de ejemplo del catálogo
│       ├── 04_order_tracking.sql    (Sin uso — quedó del flujo de seguimiento de pedidos, ya retirado)
│       └── 05_shipping_fields.sql   (Sin uso — quedó del checkout, ya retirado)
└── docs/
    ├── DESIGN_SYSTEM.md          Paleta, tipografía, tokens y breakpoints
    └── DEPLOYMENT.md             Guía de despliegue (Supabase + Vercel)
```

---

## Puesta en marcha rápida

1. **Base de datos** — En Supabase -> SQL Editor, ejecuta en orden:
   `01_schema.sql` -> `02_rls_policies.sql` -> `03_seed.sql` -> `04_order_tracking.sql` -> `05_shipping_fields.sql`.
2. **Claves** — Copia `.env.example` a `.env` y rellena `SUPABASE_URL` y `SUPABASE_ANON_KEY`
   (Supabase -> Project Settings -> API).
3. **Frontend** — Completa las constantes de configuración en sus archivos (todas son opcionales y la
   página funciona en modo demo si las dejas vacías):
   - `public/js/config.js` -> `WHATSAPP_NUMBER` (número usado en cotizaciones, contacto y el botón flotante),
     `SUPABASE_URL` / `SUPABASE_ANON_KEY` (catálogo en vivo, opcional) y `TIDIO_PUBLIC_KEY` (chat en vivo —
     WhatsApp ya funciona sin esto).
   - `public/js/analytics.js` -> `GA_MEASUREMENT_ID` (Google Analytics 4).
4. El dominio de producción (`<link rel="canonical">`, `og:*`, JSON-LD, `sitemap.xml`, `robots.txt`) ya
   apunta a `https://tyecomercializadora.vercel.app/` — actualízalo solo si conectas un dominio propio.
5. Abre `public/index.html` en el navegador, o despliega cambios con `vercel --prod` desde `public/`
   (ver `docs/DEPLOYMENT.md`).

> Sin claves de Supabase configuradas, el catálogo funciona igual con los datos de respaldo incluidos
> en `catalog.js` (modo demo).

---

## Características

- Catálogo de dotación con filtros por categoría/stock, vista rápida con selección de talla y precios en COP.
- Cotización directa por **WhatsApp**: desde la ficha de producto, la calculadora de dotación y el
  formulario de contacto — cada uno arma un mensaje prellenado y abre WhatsApp, sin carrito ni checkout.
- Calculadora de dotación (empleados × unidades por persona).
- Formulario de contacto con casilla de Habeas Data (política de tratamiento de datos personales en modal).
- Descarga de fichas técnicas por producto en **PDF**, generadas en el navegador.
- Hero con video de fondo, carrusel de testimonios con auto-avance, galería "Nuestro trabajo" y
  recursos/guías técnicas (con modal de lectura).
- Selector de idioma **Español / English** persistente (localStorage).
- SEO: metadatos Open Graph, JSON-LD `Organization`, `sitemap.xml` y `robots.txt`.
- Integraciones opcionales: Google Analytics 4, catálogo en vivo vía Supabase y chat en vivo (Tidio).
- Mobile-first: menú hamburguesa, botón WhatsApp flotante estilo píldora, tarjetas apilables.
- Paleta blanco / azul / navy derivada del logo (`js/tailwind-config.js`), sin negro.
- Sitio multi-página (7 páginas .html independientes que comparten header/footer duplicados, sin
  bundler). Cada nav-item del menú lleva a su propia página con más contenido que el resumen del home.

> **Nota para quien edite el JS compartido** (`catalog.js`, `calculator.js`, `ui.js`, `main.js`,
> `i18n.js`, `articles.js`, `contact.js`, `product-modal.js`): como el mismo script se carga en
> páginas que no siempre tienen todos los elementos (p. ej. `calculadora.html` no tiene `#catalogGrid`),
> todo acceso a `document.getElementById(...)` en esos archivos debe ir guardado con una comprobación
> de existencia (`if (el) ...`) — no asumas que el elemento está en la página actual.

## Stack

| Capa       | Tecnología                                          |
|------------|------------------------------------------------------|
| Frontend   | HTML5 + Tailwind CSS (CDN) + Lucide Icons             |
| Datos      | Supabase (PostgreSQL) + supabase-js v2, opcional para el catálogo en vivo |
| Contacto   | WhatsApp (wa.me) para cotizaciones y contacto         |
| PDF        | jsPDF (generación de fichas técnicas)                 |
| Hosting    | Vercel (https://tyecomercializadora.vercel.app)       |
| Tipografía | Plus Jakarta Sans / Inter / Playfair Display          |

(c) Comercializadora T&E S.A.S. — Todos los derechos reservados.
