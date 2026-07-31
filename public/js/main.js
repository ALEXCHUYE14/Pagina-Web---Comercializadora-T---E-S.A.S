/* =====================================================================
   INIT — arranque de la aplicación (se carga de último)
   ===================================================================== */
/* ---------------- Init ---------------- */
document.getElementById('year').textContent = new Date().getFullYear();
lucide.createIcons();
applyI18n();
loadCatalog();
calc();

// Hero background video: skip/pause on reduced-motion or data-saver, avoid
// unhandled play() rejections on browsers that block autoplay, and pause
// while off-screen to save battery/CPU.
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  if (prefersReducedMotion || saveData) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
    heroVideo.removeAttribute('src');
    heroVideo.querySelectorAll('source').forEach(s => s.removeAttribute('src'));
    heroVideo.load();
  } else {
    heroVideo.play().catch(() => { /* autoplay blocked: poster image stays visible */ });
    const heroVideoIo = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) heroVideo.play().catch(() => {});
        else heroVideo.pause();
      });
    }, { threshold: 0.1 });
    heroVideoIo.observe(heroVideo);
  }
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// Counters once hero visible
const heroIo = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { animateCounters(); heroIo.disconnect(); } });
}, { threshold: 0.4 });
const firstCounter = document.querySelector('[data-counter]');
if (firstCounter) heroIo.observe(firstCounter);
