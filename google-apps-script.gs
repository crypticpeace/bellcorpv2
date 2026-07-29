// Bellcorp International — contact form -> Google Sheet
// Setup: open your Google Sheet -> Extensions -> Apps Script -> paste this ->
// Deploy -> New deployment -> Web app -> Execute as: Me, Who has access: Anyone
// Copy the Web app URL into SHEETS_WEBHOOK_URL (in .env.local and on Vercel).

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Leads') || ss.insertSheet('Leads');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Product Interest', 'Message']);
    }
    var d = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(), d.name || '', d.email || '', d.phone || '',
      d.company || '', d.product || '', d.message || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
