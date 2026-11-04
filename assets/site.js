/* Shared page behaviour: solid header once the page scrolls, and a gentle reveal for
 * .rv elements as they enter the viewport. Pages render client-side, so new .rv
 * elements are picked up as they appear. Reduced-motion visitors see everything at once. */
(() => {
  const root = document.documentElement;
  const onScroll = () => root.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.classList.add('rv-on');
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  const seen = new WeakSet();
  const scan = () => document.querySelectorAll('.rv').forEach(el => { if (!seen.has(el)) { seen.add(el); io.observe(el); } });
  let queued = false;
  new MutationObserver(() => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; scan(); }); } })
    .observe(root, { childList: true, subtree: true });
  scan();
  // Never leave content hidden if an element is missed (e.g. printed or already above the fold).
  setTimeout(() => document.querySelectorAll('.rv:not(.in)').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); }), 1200);
})();
