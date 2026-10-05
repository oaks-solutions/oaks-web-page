/* Shared video handling for the static export.
 *
 * Background clips (video[data-src]): silent loops that play while on screen,
 * unless reduced motion / data saving is on or the visitor paused them with a
 * [data-oaks-bg] button.
 *
 * Films ([data-oaks-player] > video[data-film]): show the poster and a play
 * button, load only when played, and get play/pause, seek, time, mute and
 * fullscreen controls.
 *
 * Only one film, native video or YouTube embed plays at a time; background
 * clips pause while it does. A film pauses when scrolled out of view.
 */
(() => {
  const backgrounds = new Set();
  const visible = new WeakSet();
  const pref = new WeakMap(); // background video -> 'play' | 'pause' chosen by the visitor
  const ready = new WeakSet();
  const connection = navigator.connection;
  const automatic = !matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !(connection && (connection.saveData || /(^|-)2g$/.test(connection.effectiveType)));
  let current = null; // the film, video or YouTube iframe currently playing

  /* ---------- background clips ---------- */
  function sync(video) {
    const want = pref.get(video) || (automatic ? 'play' : 'pause');
    if (!visible.has(video) || document.hidden || current || want === 'pause') { video.pause(); return; }
    const src = video.dataset.src;
    if (!src || src.includes('{{')) return;
    if (video.getAttribute('src') !== src) { video.src = src; video.load(); }
    video.muted = true;
    const play = video.play();
    if (play) play.catch(() => {});
  }
  function bgButtons() {
    document.querySelectorAll('[data-oaks-bg]').forEach(btn => {
      const video = bgVideo(btn);
      if (!video) return;
      const on = (pref.get(video) || (automatic ? 'play' : 'pause')) === 'play';
      btn.dataset.state = on ? 'playing' : 'paused';
      btn.setAttribute('aria-label', on ? 'Pause background video' : 'Play background video');
      btn.setAttribute('aria-pressed', on ? 'false' : 'true');
    });
  }
  function bgVideo(btn) {
    const scope = btn.closest('[data-oaks-bg-scope]');
    return scope && scope.querySelector('video[data-src]');
  }

  /* ---------- one at a time ---------- */
  function isFilm(el) {
    return el.tagName === 'IFRAME' || !!el.closest('[data-oaks-player]') || el.controls || !el.muted;
  }
  function pauseEl(el) {
    if (el.tagName === 'IFRAME') ytCommand(el, 'pauseVideo');
    else el.pause();
  }
  function claim(el) {
    if (current === el) return;
    const prev = current;
    current = el;
    if (prev && prev.isConnected) pauseEl(prev);
    document.querySelectorAll('video').forEach(v => { if (v !== el && isFilm(v) && !v.paused) v.pause(); });
    document.querySelectorAll('iframe[data-oaks-yt]').forEach(f => { if (f !== el) ytCommand(f, 'pauseVideo'); });
    backgrounds.forEach(sync);
    window.dispatchEvent(new CustomEvent('oaks-media-play'));
  }
  function release(el) {
    if (current !== el) return;
    current = null;
    backgrounds.forEach(sync);
  }
  document.addEventListener('play', e => { if (e.target.tagName === 'VIDEO' && isFilm(e.target)) claim(e.target); }, true);
  document.addEventListener('pause', e => { if (e.target.tagName === 'VIDEO') release(e.target); }, true);
  document.addEventListener('ended', e => { if (e.target.tagName === 'VIDEO') release(e.target); }, true);

  /* ---------- YouTube embeds ---------- */
  function ytCommand(frame, func) {
    try { frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*'); } catch (e) {}
  }
  function ytListen(frame) {
    try { frame.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: frame.dataset.oaksYt, channel: 'widget' }), '*'); } catch (e) {}
  }
  let ytCount = 0;
  function initYouTube(frame) {
    if (ready.has(frame)) return;
    ready.add(frame);
    frame.dataset.oaksYt = String(++ytCount);
    frame.addEventListener('load', () => ytListen(frame));
    // Embeds are only inserted after a visitor presses play, so this one is about to play.
    claim(frame);
  }
  window.addEventListener('message', e => {
    let host = ''; try { host = new URL(e.origin).hostname; } catch (err) { return; }
    if (!/(^|\.)youtube(-nocookie)?\.com$/.test(host)) return;
    let data; try { data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (err) { return; }
    if (!data) return;
    const frame = [...document.querySelectorAll('iframe[data-oaks-yt]')].find(f => f.contentWindow === e.source);
    if (!frame) return;
    const state = data.event === 'onStateChange' ? data.info : data.info && data.info.playerState;
    if (state === 1) claim(frame);
    else if (state === 0 || state === 2) release(frame);
  });

  /* ---------- film player ---------- */
  const fmt = t => { if (!isFinite(t) || t < 0) t = 0; const h = Math.floor(t / 3600), m = Math.floor(t / 60) % 60, s = Math.floor(t % 60); return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0'); };
  const q = (p, sel) => p.querySelector(sel);
  const filmOf = p => q(p, 'video');

  function setState(p, state) {
    p.dataset.state = state;
    const label = state === 'playing' || state === 'loading' ? 'Pause' : 'Play';
    p.querySelectorAll('[data-oaks-act="toggle"]').forEach(b => {
      const base = b.dataset.label || 'video';
      b.setAttribute('aria-label', (state === 'ended' && b.classList.contains('oaks-player-start') ? 'Replay ' : label + ' ') + base);
    });
  }
  function paint(p) {
    const v = filmOf(p), d = v.duration, t = v.currentTime;
    const ratio = isFinite(d) && d > 0 ? Math.min(1, t / d) : 0;
    const fill = q(p, '.oaks-pb-fill'); if (fill) fill.style.transform = 'scaleX(' + ratio + ')';
    const knob = q(p, '.oaks-pb-knob'); if (knob) knob.style.left = (ratio * 100) + '%';
    let buf = 0; try { if (v.buffered.length && isFinite(d) && d > 0) buf = v.buffered.end(v.buffered.length - 1) / d; } catch (e) {}
    const b = q(p, '.oaks-pb-buf'); if (b) b.style.transform = 'scaleX(' + Math.min(1, buf) + ')';
    const time = q(p, '.oaks-pb-time'); if (time) time.textContent = fmt(t) + ' / ' + fmt(d);
    const seek = q(p, '.oaks-pb-seek');
    if (seek) { seek.setAttribute('aria-valuenow', String(Math.round(ratio * 100))); seek.setAttribute('aria-valuetext', fmt(t) + ' of ' + fmt(d)); }
  }
  function load(p) {
    const v = filmOf(p), src = v.dataset.film;
    if (!src || src.includes('{{')) return false;
    if (v.dataset.loaded !== src) { v.dataset.loaded = src; v.src = src; v.preload = 'auto'; }
    return true;
  }
  function start(p) {
    const v = filmOf(p);
    if (!load(p)) return;
    if (v.ended) v.currentTime = 0;
    if (!v.dataset.touched) { v.muted = false; v.dataset.touched = '1'; }
    setState(p, 'loading');
    const play = v.play();
    if (play) play.catch(() => { v.muted = true; v.play().catch(() => setState(p, 'paused')); });
  }
  function toggle(p) { const v = filmOf(p); if (v.paused || v.ended) start(p); else v.pause(); }
  function reset(p) {
    const v = filmOf(p);
    v.pause();
    if (v.dataset.loaded) { delete v.dataset.loaded; v.removeAttribute('src'); v.load(); }
    delete v.dataset.touched;
    p.dataset.state = 'idle';
    setState(p, 'idle');
    paint(p);
  }
  function seekTo(p, ratio) {
    const v = filmOf(p);
    ratio = Math.max(0, Math.min(1, ratio));
    if (!isFinite(v.duration)) { load(p); v.addEventListener('loadedmetadata', () => { v.currentTime = ratio * v.duration; paint(p); }, { once: true }); return; }
    v.currentTime = ratio * v.duration; paint(p);
  }
  function fullscreen(p) {
    const v = filmOf(p);
    if (document.fullscreenElement || document.webkitFullscreenElement) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
    if (p.requestFullscreen) p.requestFullscreen().catch(() => {});
    else if (p.webkitRequestFullscreen) p.webkitRequestFullscreen();
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
  }
  function wake(p) {
    p.dataset.active = '1';
    clearTimeout(p._idle);
    p._idle = setTimeout(() => { if (p.dataset.state === 'playing' && !p.contains(document.activeElement)) delete p.dataset.active; }, 2600);
  }
  const offscreen = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
    if (!isIntersecting) { const v = filmOf(target); if (v && !v.paused) v.pause(); }
  }), { threshold: 0 });

  function initPlayer(p) {
    if (ready.has(p)) return;
    const v = filmOf(p);
    if (!v) return;
    ready.add(p);
    v.removeAttribute('controls');
    v.preload = 'none';
    setState(p, 'idle');
    v.addEventListener('playing', () => setState(p, 'playing'));
    v.addEventListener('waiting', () => { if (!v.paused) setState(p, 'loading'); });
    v.addEventListener('pause', () => { if (!v.ended) setState(p, 'paused'); wake(p); });
    v.addEventListener('ended', () => setState(p, 'ended'));
    ['timeupdate', 'progress', 'loadedmetadata', 'durationchange', 'seeked'].forEach(ev => v.addEventListener(ev, () => paint(p)));
    v.addEventListener('volumechange', () => {
      p.dataset.muted = v.muted ? '1' : '0';
      const m = q(p, '[data-oaks-act="mute"]'); if (m) m.setAttribute('aria-label', v.muted ? 'Unmute' : 'Mute');
    });
    v.addEventListener('click', () => toggle(p));
    v.addEventListener('dblclick', () => fullscreen(p));
    p.addEventListener('pointermove', () => wake(p));
    p.addEventListener('focusin', () => wake(p));
    p.addEventListener('keydown', e => {
      if (e.target.closest('.oaks-pb-seek')) return;
      const k = e.key;
      if ((k === ' ' || k === 'k') && e.target.tagName !== 'BUTTON') { e.preventDefault(); toggle(p); }
      else if (k === 'ArrowRight' || k === 'ArrowLeft') { e.preventDefault(); const vv = filmOf(p); if (isFinite(vv.duration)) { vv.currentTime = Math.max(0, Math.min(vv.duration, vv.currentTime + (k === 'ArrowRight' ? 5 : -5))); } }
      else if (k === 'm') { const vv = filmOf(p); vv.muted = !vv.muted; }
      else if (k === 'f') fullscreen(p);
      wake(p);
    });
    const seek = q(p, '.oaks-pb-seek');
    if (seek) {
      const at = e => { const r = seek.getBoundingClientRect(); return (e.clientX - r.left) / r.width; };
      seek.addEventListener('pointerdown', e => {
        e.preventDefault(); seek.setPointerCapture(e.pointerId); p.dataset.seeking = '1'; seekTo(p, at(e));
        const move = ev => seekTo(p, at(ev));
        const up = () => { delete p.dataset.seeking; seek.removeEventListener('pointermove', move); seek.removeEventListener('pointerup', up); seek.removeEventListener('pointercancel', up); };
        seek.addEventListener('pointermove', move); seek.addEventListener('pointerup', up); seek.addEventListener('pointercancel', up);
      });
      seek.addEventListener('keydown', e => {
        const vv = filmOf(p), d = vv.duration; if (!isFinite(d)) return;
        const step = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5, PageUp: 30, PageDown: -30 }[e.key];
        if (step != null) { e.preventDefault(); vv.currentTime = Math.max(0, Math.min(d, vv.currentTime + step)); }
        else if (e.key === 'Home') { e.preventDefault(); vv.currentTime = 0; }
        else if (e.key === 'End') { e.preventDefault(); vv.currentTime = d - 1; }
      });
    }
    p.dataset.muted = '0';
    paint(p);
    offscreen.observe(p);
    // Programme tabs reuse the same element with a new film: start over.
    new MutationObserver(() => { if (v.dataset.film !== v.dataset.loaded && v.dataset.loaded) reset(p); }).observe(v, { attributes: true, attributeFilter: ['data-film'] });
  }

  document.addEventListener('click', e => {
    const bg = e.target.closest('[data-oaks-bg]');
    if (bg) {
      const video = bgVideo(bg); if (!video) return;
      const on = (pref.get(video) || (automatic ? 'play' : 'pause')) === 'play';
      pref.set(video, on ? 'pause' : 'play');
      if (!on && current) pauseEl(current);
      sync(video); bgButtons();
      return;
    }
    const act = e.target.closest('[data-oaks-act]');
    if (!act) return;
    const p = act.closest('[data-oaks-player]'); if (!p) return;
    initPlayer(p);
    const v = filmOf(p);
    if (act.dataset.oaksAct === 'toggle') toggle(p);
    else if (act.dataset.oaksAct === 'mute') { v.muted = !v.muted; v.dataset.touched = '1'; }
    else if (act.dataset.oaksAct === 'full') fullscreen(p);
    wake(p);
  });

  /* ---------- discovery ---------- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) visible.add(target); else visible.delete(target);
      sync(target);
    });
  }, { threshold: 0.05 });
  function observe(video) {
    if (!video || !video.dataset.src) return;
    if (!backgrounds.has(video)) { backgrounds.add(video); observer.observe(video); }
    sync(video);
  }
  function scan() {
    for (const video of backgrounds) {
      if (!video.isConnected) { observer.unobserve(video); backgrounds.delete(video); }
    }
    if (current && !current.isConnected) release(current);
    document.querySelectorAll('video[data-src]').forEach(observe);
    document.querySelectorAll('[data-oaks-player]').forEach(initPlayer);
    document.querySelectorAll('iframe[src*="youtube"]').forEach(initYouTube);
    bgButtons();
  }
  let queued = false;
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; scan(); }); } };
  window.OAKSMedia = { observe, automatic };
  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true, subtree: true, attributes: true, attributeFilter: ['data-src', 'src']
  });
  document.addEventListener('visibilitychange', () => {
    backgrounds.forEach(sync);
    if (document.hidden && current) pauseEl(current);
  });
  scan();
})();
