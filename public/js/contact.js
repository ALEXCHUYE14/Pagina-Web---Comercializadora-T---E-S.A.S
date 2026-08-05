/* =====================================================================
   CONTÁCTANOS — formulario que arma un mensaje de WhatsApp prellenado
   ===================================================================== */
/* ---------------- Formulario de contacto (solo existe en la página de Contáctanos) ---------------- */
const contactFormEl = document.getElementById('contactForm');
if (contactFormEl) contactFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const consent = document.getElementById('contactConsent');
  if (!consent.checked) {
    toast(t('contact_toast_consent'), 'warn');
    consent.focus();
    return;
  }

  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  const lines = [
    `Hola, soy ${name}.`,
    `Asunto: ${subject}`,
    `Teléfono: ${phone}`,
    email ? `Correo: ${email}` : null,
    `Mensaje: ${message}`,
  ].filter(Boolean);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(waUrl, '_blank', 'noopener');

  toast(t('contact_toast_ok'), 'ok');
  e.target.reset();
});
