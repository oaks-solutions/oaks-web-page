// OAKS form → Google Sheets. Paste your Apps Script Web App URL below.
window.OAKS_SHEETS_URL = window.OAKS_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbzntS_v5ZzH3CwAtDIYklKCaFKcyaj1SZepsMTiRtvvcOxvPUODkfuxkkU_KsTp73ek/exec';

window.oaksSend = function (root, meta) {
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
    const payload = Object.assign({
      submittedAt: new Date().toISOString(),
      page: location.pathname.split('/').pop() || 'home',
      referrer: document.referrer || '',
      utm: location.search || ''
    }, meta || {}, data);
    if (!window.OAKS_SHEETS_URL) { console.warn('[OAKS forms] OAKS_SHEETS_URL not set — submission not sent', payload); return; }
    fetch(window.OAKS_SHEETS_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) })
      .catch(function (err) { console.warn('[OAKS forms] send failed', err); });
  } catch (err) { console.warn('[OAKS forms]', err); }
};
