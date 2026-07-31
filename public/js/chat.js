/* =====================================================================
   CHAT EN VIVO (Tidio, opcional)
   ===================================================================== */
/* ---------------- Chat en vivo (Tidio, opcional) ---------------- */
if (TIDIO_PUBLIC_KEY) {
  const tidioScript = document.createElement('script');
  tidioScript.src = `//code.tidio.co/${TIDIO_PUBLIC_KEY}.js`;
  tidioScript.async = true;
  document.body.appendChild(tidioScript);
}
