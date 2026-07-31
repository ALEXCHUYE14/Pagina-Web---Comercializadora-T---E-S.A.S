/* =====================================================================
   CALCULADORA DE DOTACIÓN
   ===================================================================== */
/* ---------------- Calculadora de dotación ---------------- */
function calcCatalogSource() {
  return (CATALOG && CATALOG.length) ? CATALOG : FALLBACK_CATALOG;
}
function populateCalcGarments() {
  const select = document.getElementById('calcGarment');
  const current = select.value;
  select.innerHTML = calcCatalogSource().map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  if (current && calcCatalogSource().some(p => p.id === current)) select.value = current;
}
function calc() {
  const productId = document.getElementById('calcGarment').value;
  const product = calcCatalogSource().find(p => p.id === productId) || calcCatalogSource()[0];
  const employees = parseInt(document.getElementById('calcQty').value, 10) || 0;
  const perEmployee = parseInt(document.getElementById('calcPerEmployee').value, 10) || 0;
  const totalUnits = employees * perEmployee;
  const unitPrice = product ? product.price_per_meter : 0;
  const totalPrice = totalUnits * unitPrice;
  document.getElementById('calcBase').textContent = `${totalUnits} ${t('unit_short')}`;
  document.getElementById('calcWaste').textContent = fmtCOP(unitPrice);
  document.getElementById('calcTotal').textContent = fmtCOP(totalPrice);
  return { productId: product ? product.id : null, totalUnits };
}
document.getElementById('calcGarment').addEventListener('change', calc);
document.getElementById('calcQty').addEventListener('input', calc);
document.getElementById('calcPerEmployee').addEventListener('input', calc);
document.getElementById('calcSend').addEventListener('click', () => {
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
