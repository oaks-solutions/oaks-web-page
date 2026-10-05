// OAKS form → Google Apps Script (Sheets row + email to info@oaks.guru). Paste your Apps Script Web App URL below.
window.OAKS_SHEETS_URL = window.OAKS_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbzntS_v5ZzH3CwAtDIYklKCaFKcyaj1SZepsMTiRtvvcOxvPUODkfuxkkU_KsTp73ek/exec';

// Returns an error message for the visitor, or '' when the required fields are filled in.
window.oaksCheck = function (root) {
  if (!root) return '';
  const val = function (name) { const el = root.querySelector('[name="' + name + '"]'); return el ? el.value.trim() : null; };
  const name = val('name'), email = val('email');
  if (name !== null && !name) return 'Please enter your name.';
  if (email !== null && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.';
  return '';
};

// Resolves { ok: true } only when the Apps Script confirms the enquiry was saved.
window.oaksSend = function (root, meta) {
  return new Promise(function (resolve) {
    try {
      const data = {};
      if (root) root.querySelectorAll('input, select, textarea').forEach(function (el, i) {
        if (el.type === 'submit' || el.type === 'button') return;
        if ((el.type === 'radio' || el.type === 'checkbox') && !el.checked) return;
        let key = el.name || el.getAttribute('aria-label');
        if (!key) { const lab = el.closest('label'); const s = lab && lab.querySelector('span'); key = s ? s.textContent.replace(/\*/g, '').trim() : ''; }
        if (!key) key = el.placeholder || ('field_' + i);
        data[key] = el.value;
      });
      // Honeypot: people never see the "website" field, so anything in it came from a bot.
      if (data.website) { resolve({ ok: true, spam: true }); return; }
      delete data.website;
      const payload = Object.assign({
        submittedAt: new Date().toISOString(),
        page: location.pathname.split('/').pop() || 'home',
        referrer: document.referrer || '',
        utm: location.search || ''
      }, meta || {}, data);
      if (!window.OAKS_SHEETS_URL) { console.warn('[OAKS forms] OAKS_SHEETS_URL not set — submission not sent', payload); resolve({ ok: false, error: 'not configured' }); return; }
      const ctrl = window.AbortController ? new AbortController() : null;
      const timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 20000);
      // text/plain keeps this a simple CORS request (no preflight); Apps Script replies with readable JSON.
      fetch(window.OAKS_SHEETS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload), redirect: 'follow', signal: ctrl ? ctrl.signal : undefined })
        .then(function (res) { return res.ok ? res.json() : Promise.reject(new Error('HTTP ' + res.status)); })
        .then(function (json) {
          clearTimeout(timer);
          if (json && json.ok) resolve({ ok: true });
          else { console.warn('[OAKS forms] not saved', json); resolve({ ok: false, error: (json && json.error) || 'not saved' }); }
        })
        .catch(function (err) { clearTimeout(timer); console.warn('[OAKS forms] send failed', err); resolve({ ok: false, error: String(err) }); });
    } catch (err) { console.warn('[OAKS forms]', err); resolve({ ok: false, error: String(err) }); }
  });
};
