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
  tallas: {
    es: { title: 'Cómo elegir tallas para la dotación de un equipo grande', body: [
      'Antes de pedir dotación para muchas personas, levanta una tabla de tallas real del equipo (no supongas la distribución): pide a cada colaborador su talla de camisa/camiseta y de pantalón por separado, porque no siempre coinciden.',
      'Para equipos nuevos o rotación alta, pide 2-3 tallas "puente" de más en las medidas más comunes (M y L suelen concentrar la mayoría), así cubres ingresos de personal sin esperar un nuevo lote de producción.',
      'Usa nuestra guía de tallas del catálogo como referencia general y, para pedidos grandes, valida con tu asesor una muestra física antes de confirmar todo el lote.',
    ]},
    en: { title: 'How to choose sizes for a large team\'s workwear', body: [
      'Before ordering workwear for many people, build a real size chart for the team (don\'t assume the distribution): ask each employee for their shirt/t-shirt size and pants size separately, since they don\'t always match.',
      'For new or high-turnover teams, order 2-3 extra "bridge" sizes in the most common measurements (M and L usually cover most of the team), so you can cover new hires without waiting for a new production batch.',
      'Use our catalog size guide as a general reference and, for large orders, confirm a physical sample with your advisor before confirming the full batch.',
    ]},
  },
  telas: {
    es: { title: 'Diferencias entre dril, gabardina y drill stretch', body: [
      'El dril 100% algodón es resistente y transpirable, ideal para overoles y prendas de trabajo pesado; tiende a ser más rígido y a encoger un poco en los primeros lavados.',
      'La gabardina tiene una trama más fina y un acabado más "de vestir" — se usa mucho en pantalones de dotación administrativa y prendas donde la presentación importa tanto como la resistencia.',
      'El drill stretch agrega un porcentaje de elastano a la mezcla, ganando comodidad y libertad de movimiento — muy usado en dotación operativa donde el colaborador se agacha, camina o se mueve mucho durante el turno.',
    ]},
    en: { title: 'Differences between drill, gabardine and stretch drill', body: [
      '100% cotton drill is durable and breathable, ideal for coveralls and heavy-duty workwear; it tends to be stiffer and shrink slightly after the first few washes.',
      'Gabardine has a finer weave and a more "dressy" finish — commonly used in administrative uniform pants and garments where presentation matters as much as durability.',
      'Stretch drill adds a percentage of elastane to the blend, gaining comfort and freedom of movement — widely used in operational workwear where employees bend, walk or move a lot during their shift.',
    ]},
  },
  altavisibilidad: {
    es: { title: '¿Cuándo es obligatorio usar ropa de alta visibilidad certificada?', body: [
      'La ropa de alta visibilidad combina tela fluorescente con cinta reflectiva para que el trabajador sea visible tanto de día como de noche o en condiciones de poca luz.',
      'Suele ser obligatoria en labores cerca de vías con tráfico vehicular, patios de maniobra, obra civil, y en general cualquier entorno donde operen vehículos o maquinaria pesada cerca del personal.',
      'Si tu operación exige un nivel de certificación específico (por ejemplo, según normas ANSI/ISEA o ISO 20471 aplicables a tu sector), cuéntanos el requerimiento al cotizar para confirmar disponibilidad de esa referencia puntual.',
    ]},
    en: { title: 'When is certified high-visibility clothing required?', body: [
      'High-visibility clothing combines fluorescent fabric with reflective tape so the worker is visible both during the day and at night or in low-light conditions.',
      'It\'s usually required for work near vehicle traffic, maneuvering yards, civil construction, and generally any environment where vehicles or heavy machinery operate close to personnel.',
      'If your operation requires a specific certification level (for example, under ANSI/ISEA or ISO 20471 standards applicable to your industry), let us know when requesting a quote so we can confirm availability of that specific reference.',
    ]},
  },
  privacidad: {
    es: { title: 'Política de tratamiento de datos personales', body: [
      'Comercializadora T&E S.A.S. trata tus datos personales (nombre, teléfono, correo y mensaje) únicamente para responder tu solicitud, elaborar cotizaciones y dar seguimiento a tus pedidos, de conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.',
      'No compartimos ni vendemos tus datos a terceros. Solo se conservan mientras exista una relación comercial o el tiempo necesario para cumplir la finalidad para la que fueron entregados.',
      'Como titular de tus datos tienes derecho a conocer, actualizar, rectificar y solicitar la supresión de tu información en cualquier momento, escribiéndonos por WhatsApp al +57 320 929 1736.',
    ]},
    en: { title: 'Personal data processing policy', body: [
      'Comercializadora T&E S.A.S. processes your personal data (name, phone, email and message) solely to respond to your request, prepare quotes and follow up on your orders, in line with Colombian data protection law (Law 1581 of 2012 and Decree 1377 of 2013).',
      'We do not share or sell your data to third parties. It is kept only for as long as the commercial relationship lasts, or as needed to fulfill the purpose it was collected for.',
      'As the data owner you can access, update, correct or request deletion of your information at any time by messaging us on WhatsApp at +57 320 929 1736.',
    ]},
  },
};
function openArticle(key) {
  const modal = document.getElementById('articleModal');
  const a = ARTICLES[key];
  if (!a || !modal) return;
  const data = a[LANG] || a.es;
  document.getElementById('articleModalTitle').textContent = data.title;
  document.getElementById('articleModalBody').innerHTML = data.body.map(p => `<p>${p}</p>`).join('');
  modal.classList.remove('hidden');
  lucide.createIcons();
}
// El modal de artículos se usa tanto en Recursos como en la política de datos de Contáctanos.
document.querySelectorAll('[data-article]').forEach(b => b.addEventListener('click', () => openArticle(b.getAttribute('data-article'))));
const articleModalEl = document.getElementById('articleModal');
if (articleModalEl) {
  const closeBtn = document.getElementById('articleModalClose');
  if (closeBtn) closeBtn.addEventListener('click', () => articleModalEl.classList.add('hidden'));
  articleModalEl.addEventListener('click', (e) => { if (e.target.id === 'articleModal') e.currentTarget.classList.add('hidden'); });
}
