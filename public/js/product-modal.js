/* =====================================================================
   VISTA RÁPIDA DE PRODUCTO (quick view)
   ===================================================================== */
/* ---------------- Vista rápida de producto (quick view) ---------------- */
let currentModalProductId = null;
let currentModalSize = null;

function renderModalSizes(sizesStr) {
  const sizes = (sizesStr || '').split('-').map(s => s.trim()).filter(Boolean);
  currentModalSize = sizes[0] || null;
  const box = document.getElementById('productModalSizes');
  box.innerHTML = sizes.map(s => `
    <button type="button" data-size-opt="${s}"
      class="size-opt-btn rounded-md border px-3 py-1.5 text-xs font-semibold transition ${s === currentModalSize ? 'border-navy bg-navy text-white' : 'border-slate-300 text-slate-700 hover:border-navy'}">
      ${s}
    </button>`).join('');
  box.querySelectorAll('[data-size-opt]').forEach(b => b.addEventListener('click', () => {
    currentModalSize = b.getAttribute('data-size-opt');
    box.querySelectorAll('[data-size-opt]').forEach(btn => {
      const active = btn === b;
      btn.classList.toggle('border-navy', active);
      btn.classList.toggle('bg-navy', active);
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('border-slate-300', !active);
      btn.classList.toggle('text-slate-700', !active);
    });
  }));
}

function openProductModal(id) {
  const p = CATALOG.find(x => x.id === id);
  if (!p) return;
  currentModalProductId = id;
  const s = stockInfo(p.stock_status);
  document.getElementById('productModalImg').src = p.image_url;
  document.getElementById('productModalImg').alt = p.name;
  const stockEl = document.getElementById('productModalStock');
  stockEl.className = `absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur ${s.bg} ${s.text}`;
  stockEl.innerHTML = `<span class="h-1.5 w-1.5 rounded-full ${s.dot}"></span> ${s.label}`;
  document.getElementById('productModalSku').textContent = p.sku;
  document.getElementById('productModalName').textContent = p.name;
  document.getElementById('productModalSpecs').innerHTML = `
    <span class="rounded-md bg-surface-muted px-2 py-1 text-[11px] font-medium text-slate-600">${p.category || ''}</span>
    <span class="rounded-md bg-surface-muted px-2 py-1 text-[11px] font-medium text-slate-600">${p.material || ''}</span>`;
  document.getElementById('productModalDesc').textContent = p.description || '';
  document.getElementById('productModalPrice').textContent = fmtCOP(p.price_per_meter);
  document.getElementById('productModalMeters').value = 1;
  renderModalSizes(p.sizes);
  const addBtn = document.getElementById('productModalAdd');
  addBtn.disabled = p.stock_status === 'out_of_stock';
  addBtn.classList.toggle('opacity-50', addBtn.disabled);
  addBtn.classList.toggle('cursor-not-allowed', addBtn.disabled);
  document.getElementById('productModal').classList.remove('hidden');
  lucide.createIcons();
}
function closeProductModal() { document.getElementById('productModal').classList.add('hidden'); currentModalProductId = null; }
document.getElementById('productModalClose').addEventListener('click', closeProductModal);
document.getElementById('productModal').addEventListener('click', (e) => { if (e.target.id === 'productModal') closeProductModal(); });
document.getElementById('productModalInc').addEventListener('click', () => {
  const inp = document.getElementById('productModalMeters');
  inp.value = Math.max(1, (parseInt(inp.value, 10) || 0) + 1);
});
document.getElementById('productModalDec').addEventListener('click', () => {
  const inp = document.getElementById('productModalMeters');
  inp.value = Math.max(1, (parseInt(inp.value, 10) || 0) - 1);
});
document.getElementById('productModalAdd').addEventListener('click', () => {
  if (!currentModalProductId) return;
  if (!currentModalSize) { toast(t('toast_select_size'), 'warn'); return; }
  const p = CATALOG.find(x => x.id === currentModalProductId);
  if (!p) return;
  const qty = parseInt(document.getElementById('productModalMeters').value, 10) || 1;
  const lines = [
    `Hola, quiero cotizar esta prenda:`,
    `${p.name} (SKU ${p.sku})`,
    `Talla: ${currentModalSize}`,
    `Cantidad: ${qty} ${t('unit_short')}`,
  ];
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  closeProductModal();
});
