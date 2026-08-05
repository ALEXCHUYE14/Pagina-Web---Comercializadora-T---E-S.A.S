/* =====================================================================
   CONFIGURACIÓN — Supabase y Tidio (claves opcionales de integración)
   ===================================================================== */

/* Número de WhatsApp de la empresa, usado en cotizaciones, contacto y el botón flotante. */
const WHATSAPP_NUMBER = '573209291736';

/* =====================================================================
   CONFIG SUPABASE  — rellena estas dos claves para cargar el catálogo en vivo desde base de datos.
   Si quedan vacías, la landing funciona en modo DEMO (con el catálogo de respaldo incluido en catalog.js).
   Obtén los valores en: Supabase Dashboard -> Project Settings -> API
   ===================================================================== */
const SUPABASE_URL = "";          // ej: https://xxxxx.supabase.co
const SUPABASE_ANON_KEY = "";     // clave pública "anon"

let sb = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
  sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/* =====================================================================
   CONFIG CHAT EN VIVO — Tidio (opcional).
   Rellena tu clave pública para activar el widget de chat en vivo.
   Obtén la clave en: https://www.tidio.com -> tu proyecto -> Ajustes -> Canales -> Chat en vivo
   Nota: WhatsApp ya funciona como canal de chat inmediato aunque no configures esto.
   ===================================================================== */
const TIDIO_PUBLIC_KEY = ""; // ej: abcdEfghIjkLmnOpQrs
