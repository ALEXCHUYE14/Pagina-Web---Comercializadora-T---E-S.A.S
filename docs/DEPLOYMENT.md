# Guía de Despliegue

## 1. Base de datos (Supabase)

1. Crea un proyecto en https://supabase.com
2. En **SQL Editor**, ejecuta en orden:
   - `database/migrations/01_schema.sql`
   - `database/migrations/02_rls_policies.sql`
   - `database/migrations/03_seed.sql`
   - `database/migrations/04_order_tracking.sql` (función segura de seguimiento de pedidos)
   - `database/migrations/05_shipping_fields.sql` (campos de entrega/dirección del checkout)
3. En **Project Settings -> API**, copia:
   - `Project URL`  -> `SUPABASE_URL`
   - `anon public`  -> `SUPABASE_ANON_KEY`

## 2. Configurar el frontend

Completa las claves que necesites en `public/js/config.js` (todas son opcionales — sin ellas la landing
funciona en modo demo):

```js
const SUPABASE_URL = "https://xxxxx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGci...";        // persistencia de cotizaciones + seguimiento de pedidos
const WOMPI_PUBLIC_KEY = "pub_prod_...";        // pasarela de pagos — https://comercios.wompi.co
const TIDIO_PUBLIC_KEY = "abcdEfgh...";         // chat en vivo (opcional) — https://www.tidio.com
```

Y en `public/js/analytics.js`, para activar analítica:

```js
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";       // Google Analytics 4
```

Actualiza también:
- El número de WhatsApp (ya configurado como `wa.me/573142588118`) si cambia — búscalo en `index.html`.
- El NIT real en el footer (placeholder `900.XXX.XXX-X`).

El dominio de producción (`<link rel="canonical">`, etiquetas `og:*`, JSON-LD, `sitemap.xml` y
`robots.txt`) ya está configurado con la URL real de despliegue: `https://tyecomercializadora.vercel.app/`.
Si más adelante conectas un dominio propio, actualiza esas mismas referencias.

## 3. Publicar

### Opción A — Vercel (ya desplegado)
El sitio está desplegado en **https://tyecomercializadora.vercel.app** (proyecto de Vercel
`tyecomercializadora`, cuenta `alexchuye14s-projects`). Para volver a desplegar tras un cambio:
```bash
cd public
vercel --prod
```
(requiere sesión iniciada con `vercel login` y el proyecto ya está enlazado vía `.vercel/project.json`).

Para desplegar desde cero en otra cuenta/proyecto:
```bash
npm i -g vercel
cd comercializadora-tye/public
vercel --prod
```
O arrastra la carpeta `public/` en https://vercel.com/new.

### Opción B — Cualquier hosting estático
Sube el contenido de `public/` (Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).
Es un sitio 100% estático (HTML + CSS + JS planos, sin bundler) — sin build ni dependencias de servidor.

## 4. Verificación

- El catálogo carga desde Supabase (o datos demo si faltan claves).
- Enviar una cotización crea filas en `quote_requests` y `quote_items`, y muestra un código de
  seguimiento (`TE-XXXXXXXX`).
- Ese mismo código + el correo usado permiten consultar el estado en la sección "Seguimiento de pedido".
- Revisa **Table Editor** en Supabase para confirmar la persistencia.
- Si configuraste `WOMPI_PUBLIC_KEY`, prueba un pago en modo `pub_test_...` antes de pasar a producción.
