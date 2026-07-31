# Sistema de Diseño — Comercializadora T&E S.A.S.

Estética objetivo: **elegante, sobria, industrial y corporativa** (referencia: Zara Supply Chain,
Uniqlo B2B, Gore-Tex B2B). Sin degradados neón, sin púrpuras fuera de marca, sin tarjetas infladas.

## Paleta de color

| Rol                 | Token           | HEX       |
|---------------------|-----------------|-----------|
| Primary / Navy      | `navy`          | `#0B132B` |
| Navy 800            | `navy-800`      | `#111A38` |
| Accent / Azul       | `accent`        | `#1D4ED8` |
| Accent bright       | `accent-bright` | `#0052FF` |
| Secondary Slate 600 | `slate-600`     | `#334155` |
| Secondary Slate 500 | `slate-500`     | `#64748B` |
| Background          | `surface`       | `#FFFFFF` |
| Background muted    | `surface-muted` | `#F8FAFC` |
| Estado En Stock     | `ok`            | `#10B981` |
| Estado Sobre Pedido | `warn`          | `#F59E0B` |
| Estado Agotado      | `danger`        | `#EF4444` |

## Tipografía y espaciado

- **Familia:** Plus Jakarta Sans (fallback Inter, system-ui).
- **Escala de espaciado:** 8pt (estándar Tailwind).
- **Radios:** `rounded-lg` = 8px (botones, inputs) · `rounded-xl` = 12px (tarjetas).
- **Sombras:** `shadow-sm` (rgba 0,0,0,0.04) y `shadow-md` (rgba 0,0,0,0.06).

## Breakpoints (mobile-first)

| Rango             | Dispositivo |
|-------------------|-------------|
| 360px – 767px     | Mobile      |
| 768px – 1023px    | Tablet      |
| 1024px +          | Desktop     |

## Patrones UX móviles

- Navegación en drawer suave.
- Botón WhatsApp sticky de contacto rápido.
- Tablas/grids con scroll horizontal suave (`overflow-x-auto`) y tarjetas apilables.

Los tokens están definidos en `tailwind.config` dentro de `public/index.html`.
