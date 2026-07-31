/* =====================================================================
   CARRUSEL DE TESTIMONIOS — avance automático cada 3 segundos
   ===================================================================== */
(function () {
  const track = document.getElementById('testimonialSlides');
  if (!track) return;
  const slides = Array.from(track.children);
  const dotsEl = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  let index = 0;
  let timer = null;

  function renderDots() {
    if (!dotsEl) return;
    dotsEl.innerHTML = slides.map((_, i) =>
      `<button type="button" data-dot="${i}" aria-label="Ir al testimonio ${i + 1}"
         class="h-2 w-2 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/25 hover:bg-white/50'}"></button>`
    ).join('');
    dotsEl.querySelectorAll('[data-dot]').forEach(b => b.addEventListener('click', () => {
      goTo(parseInt(b.getAttribute('data-dot'), 10));
      restartAutoplay();
    }));
  }
  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    renderDots();
  }
  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }
  function startAutoplay() {
    if (slides.length < 2) return;
    timer = setInterval(next, 3000);
  }
  function stopAutoplay() { if (timer) clearInterval(timer); }
  function restartAutoplay() { stopAutoplay(); startAutoplay(); }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

  const section = document.getElementById('testimonios');
  if (section) {
    section.addEventListener('mouseenter', stopAutoplay);
    section.addEventListener('mouseleave', startAutoplay);
  }

  renderDots();
  startAutoplay();
})();
