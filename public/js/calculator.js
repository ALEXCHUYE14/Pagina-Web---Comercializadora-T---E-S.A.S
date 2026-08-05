/* =====================================================================
   CALCULADORA DE DOTACIÓN
   ===================================================================== */
/* ---------------- Calculadora de dotación ---------------- */
function calcCatalogSource() {
  return (CATALOG && CATALOG.length) ? CATALOG : FALLBACK_CATALOG;
}
// Todas las funciones de abajo solo tienen efecto en la página que incluye la
// calculadora (#calcGarment y compañía) — se salen sin hacer nada en cualquier
// otra página que cargue este script pero no tenga esos elementos.
function populateCalcGarments() {
  const select = document.getElementById('calcGarment');
  if (!select) return;
  const current = select.value;
  select.innerHTML = calcCatalogSource().map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  if (current && calcCatalogSource().some(p => p.id === current)) select.value = current;
}
function calc() {
  const garmentEl = document.getElementById('calcGarment');
  const qtyEl = document.getElementById('calcQty');
  const perEmployeeEl = document.getElementById('calcPerEmployee');
  if (!garmentEl || !qtyEl || !perEmployeeEl) return { productId: null, totalUnits: 0 };
  const productId = garmentEl.value;
  const product = calcCatalogSource().find(p => p.id === productId) || calcCatalogSource()[0];
  const employees = parseInt(qtyEl.value, 10) || 0;
  const perEmployee = parseInt(perEmployeeEl.value, 10) || 0;
  const totalUnits = employees * perEmployee;
  const unitPrice = product ? product.price_per_meter : 0;
  const totalPrice = totalUnits * unitPrice;
  document.getElementById('calcBase').textContent = `${totalUnits} ${t('unit_short')}`;
  document.getElementById('calcWaste').textContent = fmtCOP(unitPrice);
  document.getElementById('calcTotal').textContent = fmtCOP(totalPrice);
  return { productId: product ? product.id : null, totalUnits };
}
const calcGarmentEl = document.getElementById('calcGarment');
const calcQtyEl = document.getElementById('calcQty');
const calcPerEmployeeEl = document.getElementById('calcPerEmployee');
const calcSendEl = document.getElementById('calcSend');
if (calcGarmentEl) calcGarmentEl.addEventListener('change', calc);
if (calcQtyEl) calcQtyEl.addEventListener('input', calc);
if (calcPerEmployeeEl) calcPerEmployeeEl.addEventListener('input', calc);
if (calcSendEl) calcSendEl.addEventListener('click', () => {
  const { productId, totalUnits } = calc();
  if (!productId || totalUnits < 1) { toast(t('toast_calc_empty_warn'), 'warn'); return; }
  const product = calcCatalogSource().find(p => p.id === productId);
  const lines = [
    `Hola, quiero cotizar dotación para mi equipo:`,
    product ? `${product.name} (SKU ${product.sku})` : null,
    `Cantidad total: ${totalUnits} ${t('unit_short')}`,
  ].filter(Boolean);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  toast(t('toast_calc_sent'), 'ok');
});
