// Smooth scroll for hash anchors
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href*="#"]');
  if (!a) return;
  const id = a.getAttribute('href').split('#')[1];
  if (!id) return;
  const el = document.getElementById(id);
  if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
});

// Reveal on scroll
const io = new IntersectionObserver((ents)=>ents.forEach(en=>{
  if (en.isIntersecting){ en.target.classList.add('reveal-in'); io.unobserve(en.target); }
}), { threshold: 0.12 });
document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));
