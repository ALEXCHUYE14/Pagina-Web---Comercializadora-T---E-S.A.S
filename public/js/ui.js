/* =====================================================================
   UI COMPARTIDA — toast, filtros, menú móvil, contadores animados
   ===================================================================== */
/* ---------------- Toast ---------------- */
let toastTimer;
function toast(msg, type='ok') {
  const t = document.getElementById('toast');
  const icon = document.getElementById('toastIcon');
  document.getElementById('toastMsg').textContent = msg;
  const colors = { ok:'bg-ok', warn:'bg-warn', danger:'bg-danger' };
  icon.className = 'grid h-6 w-6 place-items-center rounded-full ' + (colors[type]||'bg-ok');
  t.classList.remove('opacity-0','translate-y-4');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('opacity-0','translate-y-4'), 3400);
}

/* ---------------- Filtros (solo existen en la página de catálogo) ---------------- */
const fTypeEl = document.getElementById('fType');
const fStockEl = document.getElementById('fStock');
if (fTypeEl) fTypeEl.addEventListener('change', renderCatalog);
if (fStockEl) fStockEl.addEventListener('change', renderCatalog);

/* ---------------- Menú móvil ---------------- */
const drawer = document.getElementById('drawer');
const menuBtnEl = document.getElementById('menuBtn');
if (drawer && menuBtnEl) {
  menuBtnEl.addEventListener('click', () => drawer.classList.toggle('hidden'));
  drawer.querySelectorAll('[data-close]').forEach(a => a.addEventListener('click', () => drawer.classList.add('hidden')));
}

/* ---------------- Counters animados ---------------- */
function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const dur = 1400; const t0 = performance.now();
    const abbreviate = el.getAttribute('data-abbreviate') === 'true';
    const fmt = v => {
      if (abbreviate) return new Intl.NumberFormat(LANG === 'es' ? 'es-CO' : 'en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(v);
      return dec ? v.toFixed(dec) : Math.round(v).toLocaleString('es-CO');
    };
    (function step(now){
      const p = Math.min((now - t0)/dur, 1);
      const eased = 1 - Math.pow(1-p, 3);
      el.textContent = fmt(target*eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  });
}
