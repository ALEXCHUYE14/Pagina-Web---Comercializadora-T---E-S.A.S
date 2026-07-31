/* =====================================================================
   RECURSOS / BLOG — artículos y modal de lectura
   ===================================================================== */
/* ---------------- Recursos / Blog (modal de artículos) ---------------- */
const ARTICLES = {
  gsm: {
    es: { title: '¿Qué es el gramaje (GSM) y por qué importa?', body: [
      'El GSM (gramos por metro cuadrado) mide cuánto pesa una tela por unidad de área. A mayor GSM, la tela suele ser más gruesa, densa y opaca; a menor GSM, más ligera y fresca.',
      'Como referencia general: telas livianas (120-160 GSM) funcionan bien para camisetas de verano y forros; telas medias (180-240 GSM) son ideales para uniformes y prendas de uso diario; telas pesadas (260 GSM en adelante) se usan en chaquetas, denim industrial y piezas de alta resistencia.',
      'Usa el filtro de "Gramaje mínimo" en nuestro catálogo para encontrar rápidamente las telas que cumplen el peso que necesitas para tu prenda.',
    ]},
    en: { title: 'What is fabric weight (GSM) and why does it matter?', body: [
      'GSM (grams per square meter) measures how much a fabric weighs per unit of area. Higher GSM usually means a thicker, denser and more opaque fabric; lower GSM means lighter and cooler.',
      'As a general reference: lightweight fabrics (120-160 GSM) work well for summer t-shirts and linings; mid-weight fabrics (180-240 GSM) are ideal for uniforms and everyday garments; heavyweight fabrics (260 GSM and up) are used for jackets, industrial denim and high-durability pieces.',
      'Use the "Minimum weight" filter in our catalog to quickly find fabrics that match the weight you need for your garment.',
    ]},
  },
  metraje: {
    es: { title: 'Cómo calcular el metraje correcto para tu lote de producción', body: [
      'La fórmula base es simple: metros totales = consumo por prenda × cantidad de prendas. El consumo por prenda varía según el patrón de corte, la talla y el tipo de prenda.',
      'Siempre agregamos un 5% adicional de merma para cubrir errores de corte, defectos de tela y ajustes de patrón — es el mismo cálculo que aplica nuestra calculadora de metraje interactiva.',
      'Para lotes grandes, te recomendamos pedir una muestra de tela y hacer un corte de prueba antes de confirmar el pedido completo, así validas el consumo real con tu patrón específico.',
    ]},
    en: { title: 'How to calculate the right yardage for your production batch', body: [
      'The base formula is simple: total meters = consumption per garment × number of garments. Consumption per garment varies with the cutting pattern, size and garment type.',
      "We always add a 5% waste allowance to cover cutting errors, fabric defects and pattern adjustments — it's the same calculation our interactive yardage calculator applies.",
      'For large batches, we recommend requesting a fabric sample and doing a test cut before confirming the full order, so you can validate real consumption against your specific pattern.',
    ]},
  },
  almacenamiento: {
    es: { title: 'Buenas prácticas para almacenar rollos de tela', body: [
      'Guarda los rollos en posición vertical u horizontal sobre estanterías, nunca directamente en el piso, para evitar humedad y deformación.',
      'Evita la exposición prolongada a luz solar directa: puede decolorar telas y debilitar fibras, especialmente en algodón y lino.',
      'Mantén un ambiente seco y ventilado — la humedad favorece hongos y manchas. Rota el inventario (primero en entrar, primero en salir) para evitar que las telas de alta rotación queden atrapadas detrás de stock antiguo.',
    ]},
    en: { title: 'Best practices for storing fabric rolls', body: [
      'Store rolls upright or horizontally on shelving, never directly on the floor, to avoid moisture and deformation.',
      'Avoid prolonged exposure to direct sunlight: it can fade fabrics and weaken fibers, especially cotton and linen.',
      'Keep a dry, ventilated environment — humidity encourages mold and stains. Rotate inventory (first in, first out) so high-turnover fabrics don\'t get trapped behind older stock.',
    ]},
  },
  privacidad: {
    es: { title: 'Política de tratamiento de datos personales', body: [
      'Comercializadora T&E S.A.S. trata tus datos personales (nombre, teléfono, correo y mensaje) únicamente para responder tu solicitud, elaborar cotizaciones y dar seguimiento a tus pedidos, de conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.',
      'No compartimos ni vendemos tus datos a terceros. Solo se conservan mientras exista una relación comercial o el tiempo necesario para cumplir la finalidad para la que fueron entregados.',
      'Como titular de tus datos tienes derecho a conocer, actualizar, rectificar y solicitar la supresión de tu información en cualquier momento, escribiéndonos por WhatsApp al +57 314 2588118.',
    ]},
    en: { title: 'Personal data processing policy', body: [
      'Comercializadora T&E S.A.S. processes your personal data (name, phone, email and message) solely to respond to your request, prepare quotes and follow up on your orders, in line with Colombian data protection law (Law 1581 of 2012 and Decree 1377 of 2013).',
      'We do not share or sell your data to third parties. It is kept only for as long as the commercial relationship lasts, or as needed to fulfill the purpose it was collected for.',
      'As the data owner you can access, update, correct or request deletion of your information at any time by messaging us on WhatsApp at +57 314 2588118.',
    ]},
  },
};
function openArticle(key) {
  const a = ARTICLES[key]; if (!a) return;
  const data = a[LANG] || a.es;
  document.getElementById('articleModalTitle').textContent = data.title;
  document.getElementById('articleModalBody').innerHTML = data.body.map(p => `<p>${p}</p>`).join('');
  document.getElementById('articleModal').classList.remove('hidden');
  lucide.createIcons();
}
document.querySelectorAll('[data-article]').forEach(b => b.addEventListener('click', () => openArticle(b.getAttribute('data-article'))));
document.getElementById('articleModalClose').addEventListener('click', () => document.getElementById('articleModal').classList.add('hidden'));
document.getElementById('articleModal').addEventListener('click', (e) => { if (e.target.id === 'articleModal') e.currentTarget.classList.add('hidden'); });
