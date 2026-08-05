/* =====================================================================
   CATÁLOGO — datos de respaldo, carga desde Supabase, render y fichas técnicas PDF
   ===================================================================== */
/* ---- Datos de respaldo (dotación real de nuestro portafolio) para modo DEMO ---- */
const FALLBACK_CATALOG = [
  { id:'te-ovr-001', sku:'TE-OVR-001', name:'Overol de Trabajo Dril',        category:'Overoles',                  sizes:'S-M-L-XL-XXL',       material:'Dril 100% algodón nacional',        stock_status:'in_stock',   price_per_meter:78000,  image_url:'img/products/overoles.jpg',
    description:'Overol una pieza, manga corta o larga, en dril 100% algodón nacional (o gabardina, poliéster, según necesidad). Cerrado en máquina cerradora de tres agujas, con 2 bolsillos pectorales, 2 delanteros y 2 traseros; cierre de cremallera o botón. Se confecciona a gusto del cliente: color, diseño de bolsillos, cremalleras adicionales y logos estampados o bordados.' },
  { id:'te-avi-001', sku:'TE-AVI-001', name:'Chaqueta y Chaleco Alta Visibilidad', category:'Alta Visibilidad',    sizes:'S-M-L-XL-XXL',       material:'Dril + cinta reflectiva certificada', stock_status:'on_demand', price_per_meter:135000, image_url:'img/products/alta-visibilidad.jpg',
    description:'Chaquetas, chalecos y overoles con cinta reflectiva de alta visibilidad para entornos de trabajo donde es clave ser visto y prevenir accidentes. Confeccionados en tela de fondo fluorescente combinada con cinta reflectiva.' },
  { id:'te-inv-001', sku:'TE-INV-001', name:'Traje Térmico de Invierno',     category:'Ropa de Invierno',          sizes:'S-M-L-XL-XXL',       material:'Poliéster acolchado impermeable',   stock_status:'on_demand', price_per_meter:195000, image_url:'img/products/ropa-invierno.jpg',
    description:'Chaquetas, pantalones y conjuntos acolchados e impermeables, diseñados para labores en frío extremo o cuartos fríos. Capucha, cierres reforzados y costuras selladas para máxima protección térmica.' },
  { id:'te-ptd-001', sku:'TE-PTD-001', name:'Pantalón Dama Bota Recta',      category:'Pantalón Dama',             sizes:'4-6-8-10-12-14',     material:'Dril, gabardina o poliéster-algodón', stock_status:'in_stock', price_per_meter:62000,  image_url:'img/products/pantalon-dama.jpg',
    description:'Pantalón para dama, bota recta, confección según diseño de cliente. Materiales variados: poliéster 100% rígido o licrado, algodón 100%, dril, gabardina o polialgodón según necesidad. Logo bordado o estampado disponible.' },
  { id:'te-ptc-001', sku:'TE-PTC-001', name:'Pantalón de Vestir Caballero',  category:'Pantalón Caballero',        sizes:'28-30-32-34-36-38',  material:'Paño / gabardina de vestir',        stock_status:'in_stock',   price_per_meter:89000,  image_url:'img/products/pantalon-caballero.jpg',
    description:'Pantalón de vestir para caballero, corte clásico, en paño, gabardina o dril según necesidad del cliente. Confección con pretina reforzada y terminación profesional.' },
  { id:'te-cam-001', sku:'TE-CAM-001', name:'Camisa Oxford Caballero',       category:'Camisas para Caballero',    sizes:'S-M-L-XL-XXL',       material:'Oxford algodón-poliéster',          stock_status:'in_stock',   price_per_meter:58000,  image_url:'img/products/camisas-caballero.jpg',
    description:'Camisas para caballero manga larga o corta, en tela Oxford algodón-poliéster, con bordados o estampados. Distintos colores según clima y necesidad del cliente.' },
  { id:'te-pol-001', sku:'TE-POL-001', name:'Camiseta Tipo Polo',            category:'Camisetas Polo',            sizes:'XS-S-M-L-XL-XXL',    material:'Piqué 200 g algodón-poliéster',     stock_status:'in_stock',   price_per_meter:34000,  image_url:'img/products/camisetas-polo.jpg',
    description:'Camisa tipo polo básica, con cierre de botones en el delantero y borde de manga en rib. Confeccionada en tela de 200 gramos, en algodón o mezcla poliéster-algodón. Logos estampados o bordados.' },
  { id:'te-chq-001', sku:'TE-CHQ-001', name:'Chaqueta Industrial',          category:'Chaquetas',                 sizes:'S-M-L-XL-XXL',       material:'Dril / tela enguatada impermeable', stock_status:'on_demand',  price_per_meter:96000,  image_url:'img/products/chaquetas.jpg',
    description:'Chaquetas industriales y para eventos, en dril o telas enguatadas, algunas impermeables. Confección según necesidad del cliente, con logos bordados o estampados.' },
  { id:'te-chl-001', sku:'TE-CHL-001', name:'Chaleco Multibolsillos',        category:'Chalecos',                  sizes:'S-M-L-XL-XXL',       material:'Dril acolchado o reflectivo',       stock_status:'in_stock',   price_per_meter:52000,  image_url:'img/products/chalecos.jpg',
    description:'Chalecos multibolsillos, acolchados o reflectivos, en distintos diseños según clima y labor a desempeñar. Ideal para brigadas, seguridad y trabajo de campo.' },
];

const STOCK_META = {
  in_stock:     { key:'stock_in',     dot:'bg-ok',     text:'text-ok',     bg:'bg-ok/10' },
  on_demand:    { key:'stock_demand', dot:'bg-warn',   text:'text-warn',   bg:'bg-warn/10' },
  out_of_stock: { key:'stock_out',    dot:'bg-danger', text:'text-danger', bg:'bg-danger/10' },
};
function stockInfo(status) {
  const m = STOCK_META[status] || STOCK_META.in_stock;
  return { ...m, label: t(m.key) };
}
const fmtCOP = n => n==null ? '—' : new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);

let CATALOG = [];


/* ---------------- Cargar catálogo (Supabase o fallback) ---------------- */
function renderCatalogSkeleton() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  grid.innerHTML = Array.from({ length: 8 }).map(() => `
    <div class="animate-pulse overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm">
      <div class="aspect-[4/3] bg-slate-200"></div>
      <div class="p-4 space-y-2.5">
        <div class="h-3 w-1/3 rounded bg-slate-200"></div>
        <div class="h-4 w-2/3 rounded bg-slate-200"></div>
        <div class="h-8 w-full rounded bg-slate-200 mt-3"></div>
      </div>
    </div>`).join('');
}
async function loadCatalog() {
  renderCatalogSkeleton();
  if (sb) {
    const { data, error } = await sb.from('textile_catalog').select('*').eq('is_active', true).order('name');
    if (!error && data && data.length) { CATALOG = data; renderCatalog(); return; }
  }
  CATALOG = FALLBACK_CATALOG;
  renderCatalog();
}

/* ---------------- Render del catálogo con filtros ---------------- */
function renderCatalog() {
  const grid0 = document.getElementById('catalogGrid');
  if (!grid0) return; // esta página no tiene catálogo
  const category = document.getElementById('fType') ? document.getElementById('fType').value : '';
  const stock = document.getElementById('fStock') ? document.getElementById('fStock').value : '';
  const q     = (window.__heroQuery || '').toLowerCase().trim();

  const list = CATALOG.filter(p =>
    (!category || p.category === category) &&
    (!stock || p.stock_status === stock) &&
    (!q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || (p.category||'').toLowerCase().includes(q))
  );

  const grid = document.getElementById('catalogGrid');
  document.getElementById('catalogEmpty').classList.toggle('hidden', list.length !== 0);

  grid.innerHTML = list.map(p => {
    const s = stockInfo(p.stock_status);
    const disabled = p.stock_status === 'out_of_stock';
    return `
    <article class="group overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm transition hover:shadow-md">
      <div class="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        <button data-view="${p.id}" class="block h-full w-full cursor-zoom-in" title="${t('cat_card_quickview')}">
          <img src="${p.image_url}" alt="${p.name}" loading="lazy"
               class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
               onerror="this.style.display='none'" />
        </button>
        <span class="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full ${s.bg} px-2.5 py-1 text-[11px] font-semibold ${s.text} backdrop-blur">
          <span class="h-1.5 w-1.5 rounded-full ${s.dot}"></span> ${s.label}
        </span>
        <button data-pdf="${p.id}" title="${t('cat_card_spec')}"
          class="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-slate-600 shadow-sm hover:bg-white hover:text-accent transition">
          <i data-lucide="file-down" class="h-4 w-4"></i>
        </button>
      </div>
      <div class="p-4">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-semibold tracking-wide text-slate-500">${p.sku}</span>
          <span class="text-[11px] font-semibold text-accent">${p.category||''}</span>
        </div>
        <h3 class="mt-1 font-bold leading-snug">${p.name}</h3>
        <div class="mt-3 flex flex-wrap gap-1.5">
          <span class="rounded-md bg-surface-muted px-2 py-1 text-[11px] font-medium text-slate-600">${t('cat_card_sizes')} ${p.sizes||''}</span>
        </div>
        <div class="mt-3 flex items-center justify-between">
          <div><p class="text-[10px] text-slate-500">${t('cat_card_price')}</p><p class="font-extrabold text-navy">${fmtCOP(p.price_per_meter)}</p></div>
          <button ${disabled?'disabled':''} data-add='${p.id}'
            class="inline-flex items-center gap-1.5 rounded-lg ${disabled?'bg-slate-200 text-slate-400 cursor-not-allowed':'bg-accent text-white hover:bg-accent-bright'} px-3 py-2 text-xs font-semibold transition">
            <i data-lucide="eye" class="h-3.5 w-3.5"></i> ${t('cat_card_quote')}
          </button>
        </div>
      </div>
    </article>`;
  }).join('');

  grid.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => openProductModal(b.getAttribute('data-add'))));
  grid.querySelectorAll('[data-pdf]').forEach(b => b.addEventListener('click', () => downloadSpecSheet(b.getAttribute('data-pdf'))));
  grid.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => openProductModal(b.getAttribute('data-view'))));
  document.getElementById('catalogCount').textContent = t('cat_count_label', { n: list.length });
  if (typeof populateCalcGarments === 'function') populateCalcGarments();
  if (typeof calc === 'function') calc();
  lucide.createIcons();
}


/* ---------------- Descargas PDF (catálogo y fichas técnicas) ---------------- */
let LOGO_DATA_URL;
async function getLogoDataUrl() {
  if (LOGO_DATA_URL !== undefined) return LOGO_DATA_URL;
  try {
    const res = await fetch('img/logo.png');
    const blob = await res.blob();
    LOGO_DATA_URL = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
  } catch { LOGO_DATA_URL = null; }
  return LOGO_DATA_URL;
}

async function downloadSpecSheet(id) {
  const p = CATALOG.find(x => x.id === id);
  if (!p || !window.jspdf) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const logo = await getLogoDataUrl();
  if (logo) doc.addImage(logo, 'PNG', 14, 10, 20, 20);
  doc.setFontSize(13); doc.setFont(undefined, 'bold');
  doc.text('Comercializadora T&E S.A.S.', 40, 18);
  doc.setFontSize(10); doc.setFont(undefined, 'normal'); doc.setTextColor(100);
  doc.text(t('pdf_spec_subtitle'), 40, 24);
  doc.setTextColor(0);
  doc.setDrawColor(210); doc.line(14, 36, 196, 36);

  doc.setFontSize(18); doc.setFont(undefined, 'bold');
  doc.text(p.name, 14, 50);
  doc.setFontSize(10); doc.setFont(undefined, 'normal'); doc.setTextColor(100);
  doc.text(`SKU: ${p.sku}`, 14, 57);
  doc.setTextColor(0);

  const rows = [
    [t('pdf_col_category'), p.category || '—'],
    [t('pdf_col_sizes'), p.sizes || '—'],
    [t('pdf_col_material'), p.material || '—'],
    [t('pdf_col_price'), fmtCOP(p.price_per_meter) + ' / ' + t('unit_short')],
    [t('pdf_col_stock'), stockInfo(p.stock_status).label],
  ];
  let y = 70;
  rows.forEach(([k, v]) => {
    doc.setFont(undefined, 'bold'); doc.text(String(k), 14, y);
    doc.setFont(undefined, 'normal'); doc.text(String(v), 80, y);
    y += 9;
  });

  if (p.description) {
    y += 4;
    doc.setFont(undefined, 'bold'); doc.text(t('pdf_col_description'), 14, y); y += 7;
    doc.setFont(undefined, 'normal'); doc.setFontSize(9.5);
    const lines = doc.splitTextToSize(p.description, 182);
    doc.text(lines, 14, y);
  }

  doc.setFontSize(8); doc.setTextColor(140);
  doc.text(`${t('pdf_footer')} · WhatsApp +57 320 929 1736`, 14, 290);
  doc.save(`ficha-tecnica-${p.sku}.pdf`);
}
