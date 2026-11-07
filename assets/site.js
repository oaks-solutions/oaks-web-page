/* Shared page behaviour: solid header once the page scrolls, and a gentle reveal for
 * .rv elements as they enter the viewport. Pages render client-side, so new .rv
 * elements are picked up as they appear. Reduced-motion visitors see everything at once. */
(() => {
  const root = document.documentElement;
  const onScroll = () => root.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Sticky sub-navigation: highlight the link of the section in view, and keep it scrolled into sight.
  const spy = () => {
    const nav = document.querySelector('.subnav');
    if (!nav || nav.dataset.spy) return;
    nav.dataset.spy = '1';
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const mark = id => links.forEach(a => {
      const on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-on', on);
      if (on) nav.querySelector('.subnav__row').scrollTo({ left: a.offsetLeft - 24, behavior: 'smooth' });
    });
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) mark(e.target.id); }), { rootMargin: '-35% 0px -60% 0px' });
    links.forEach(a => { const t = document.getElementById(a.getAttribute('href').slice(1)); if (t) io.observe(t); });
  };
  if ('IntersectionObserver' in window) { spy(); new MutationObserver(spy).observe(root, { childList: true, subtree: true }); }

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

  // Count .count figures up from zero the first time they scroll into view ("1.14M", "40K+", "95.6%").
  const counted = new WeakSet();
  const countUp = el => {
    const final = el.textContent.trim(), m = final.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
    if (!m) return;
    const target = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length, t0 = performance.now(), D = 1600;
    const node = el.querySelector('.sc-interp') || el;
    const step = now => {
      const k = Math.min(1, (now - t0) / D), v = target * (1 - Math.pow(1 - k, 3));
      node.textContent = k < 1 ? m[1] + (m[2].includes(',') ? Math.round(v).toLocaleString('en-GB') : v.toFixed(dec)) + m[3] : final;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { cio.unobserve(e.target); countUp(e.target); }
  }), { threshold: 0.6 });
  const scanCounts = () => document.querySelectorAll('.count').forEach(el => { if (!counted.has(el)) { counted.add(el); cio.observe(el); } });
  new MutationObserver(() => requestAnimationFrame(scanCounts)).observe(root, { childList: true, subtree: true });
  scanCounts();

  // Never leave content hidden if an element is missed (e.g. printed or already above the fold).
  setTimeout(() => document.querySelectorAll('.rv:not(.in)').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); }), 1200);
})();
