/**
 * Privée Events — Questionnaire endpoint
 * Receives POSTs from questionnaire.html, appends a row to a Google Sheet,
 * and emails the inquiry to tina@ and lilly@villaazurepr.com.
 *
 * SETUP (one time, ~5 minutes, in the villaazurepr@gmail.com account):
 * 1. Create a Google Sheet named "Privée Questionnaire Replies".
 * 2. Extensions → Apps Script. Delete the sample code, paste this file.
 * 3. Replace SHEET_ID below with the ID from the Sheet URL
 *    (the long string between /d/ and /edit).
 * 4. Deploy → New deployment → type "Web app":
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, authorize, and copy the Web app URL.
 * 5. Paste that URL into SHEET_ENDPOINT in questionnaire.html.
 */

var SHEET_ID = "PASTE_SHEET_ID_HERE";
var NOTIFY_EMAIL = "tina@villaazurepr.com, lilly@villaazurepr.com";

var COLUMNS = [
  "timestamp", "name", "email", "phone", "heard",
  "eventType", "date", "altDate", "flexible", "weekendAck",
  "startTime", "endTime", "multipleEvents", "eventsDetail",
  "guestsEvent", "guestsOvernight", "nights",
  "services", "budget", "vision", "language"
];

function doPost(e) {
  var p = (e && e.parameter) || {};
  var row = COLUMNS.map(function (c) {
    return c === "timestamp" ? new Date() : (p[c] || "");
  });

  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
  sheet.appendRow(row);

  var lines = COLUMNS.slice(1).map(function (c) {
    return c + ": " + (p[c] || "—");
  });
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "Privée questionnaire — " + (p.name || "New inquiry") + " · " + (p.eventType || "") + " · " + (p.date || ""),
    body: lines.join("\n"),
    replyTo: p.email || NOTIFY_EMAIL
  });

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
