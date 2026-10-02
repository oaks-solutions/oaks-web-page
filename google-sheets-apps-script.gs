/**
 * OAKS website → Google Sheets
 * 1. Create a Google Sheet (e.g. "OAKS Website Leads").
 * 2. Extensions → Apps Script → paste this file → Save.
 * 3. Deploy → New deployment → type "Web app"
 *      Execute as: Me   ·   Who has access: Anyone
 * 4. Copy the Web App URL and paste it into forms.js (OAKS_SHEETS_URL).
 * New columns are added automatically when a form sends a new field.
 * Columns Status / Owner / Notes are added for your team to track follow-up.
 */
const SHEET_NAME = 'Leads';
const NOTIFY = 'info@oaks.guru';
// Resend: key is read from Script Properties (Project Settings → Script properties → RESEND_API_KEY). Never paste it in website code.
const RESEND_FROM = 'OAKS Website <website@oaks.guru>'; // must be on a domain verified in Resend

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    let headers = sh.getLastColumn() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0] : [];
    if (!headers.length) {
      headers = ['submittedAt', 'Status', 'Owner', 'Notes', 'page', 'subject', 'audience'];
      sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
    Object.keys(data).forEach(function (k) {
      if (headers.indexOf(k) < 0) { headers.push(k); sh.getRange(1, headers.length).setValue(k).setFontWeight('bold'); }
    });
    data.Status = data.Status || 'New';
    sh.appendRow(headers.map(function (h) { return data[h] != null ? data[h] : ''; }));
    if (NOTIFY) sendLeadEmail(data);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function sendLeadEmail(data) {
  const subject = 'New website enquiry — ' + (data.subject || data.form || 'OAKS');
  const skip = { Status: 1, Owner: 1, Notes: 1 };
  const rows = Object.keys(data).filter(function (k) { return !skip[k] && data[k] !== ''; }).map(function (k) {
    return '<tr><td style="padding:6px 12px;color:#64748b;font:13px Arial;vertical-align:top">' + esc(k) + '</td><td style="padding:6px 12px;color:#0f172a;font:14px Arial">' + esc(String(data[k])).replace(/\n/g, '<br>') + '</td></tr>';
  }).join('');
  const html = '<div style="font-family:Arial"><h2 style="color:#283C53;margin:0 0 12px">' + esc(subject) + '</h2><table style="border-collapse:collapse;border:1px solid #e2e8f0">' + rows + '</table></div>';
  const text = Object.keys(data).filter(function (k) { return !skip[k]; }).map(function (k) { return k + ': ' + data[k]; }).join('\n');
  const key = PropertiesService.getScriptProperties().getProperty('RESEND_API_KEY');
  if (key) {
    const payload = { from: RESEND_FROM, to: [NOTIFY], subject: subject, html: html, text: text };
    if (data.email && /@/.test(data.email)) payload.reply_to = data.email;
    const res = UrlFetchApp.fetch('https://api.resend.com/emails', { method: 'post', contentType: 'application/json', headers: { Authorization: 'Bearer ' + key }, payload: JSON.stringify(payload), muteHttpExceptions: true });
    if (res.getResponseCode() < 300) return;
    console.error('Resend failed', res.getResponseCode(), res.getContentText());
  }
  MailApp.sendEmail({ to: NOTIFY, subject: subject, htmlBody: html, replyTo: data.email || undefined });
}

function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

function testResend() { sendLeadEmail({ form: 'TEST', subject: 'Resend connection test', name: 'OAKS test', email: 'info@oaks.guru', message: 'If you see this, Resend is working.' }); }
