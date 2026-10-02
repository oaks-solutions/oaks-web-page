/* Shared, viewport-driven video loading for the static export. */
(() => {
  const videos = new Set();
  const visible = new WeakSet();
  const connection = navigator.connection;
  const automatic = !matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !(connection && (connection.saveData || /(^|-)2g$/.test(connection.effectiveType)));
  function sync(video) {
    if (!visible.has(video) || document.hidden || !automatic) { video.pause(); return; }
    const src = video.dataset.src;
    if (!src || src.includes('{{')) return;
    if (video.getAttribute('src') !== src) {
      video.src = src;
      video.load();
    }
    video.muted = true;
    const play = video.play();
    if (play) play.catch(() => {});
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({target, isIntersecting}) => {
      if (isIntersecting) visible.add(target); else visible.delete(target);
      sync(target);
    });
  }, {threshold: 0.05});
  function observe(video) {
    if (!video) return;
    if (!videos.has(video)) { videos.add(video); observer.observe(video); }
    sync(video);
  }
  function scan() {
    for (const video of videos) {
      if (!video.isConnected) { observer.unobserve(video); videos.delete(video); }
    }
    document.querySelectorAll('video[data-src]').forEach(observe);
  }
  window.OAKSMedia = {observe, automatic};
  new MutationObserver(scan).observe(document.documentElement, {
    childList: true, subtree: true, attributes: true, attributeFilter: ['data-src']
  });
  document.addEventListener('visibilitychange', () => videos.forEach(sync));
  scan();
})();
