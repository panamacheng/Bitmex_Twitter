var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1R9i6swIQGEUT7dCWQ_mVOLGBCIBHEBDQKYreaUuVPZw');

var docService = {};
docService.addRow = addRow;

function addRow(data, cb) {
    // Authenticate with the Google Spreadsheets API.
    doc.useServiceAccountAuth(creds, function (err) {
        doc.getRows(1, function (err, rows) {
            if(rows.length > 0) {
                rows[0].del();
                doc.addRow(1, data, function(err, result) {
                    if(err) {
                        console.log(err);
                    }

                    cb(result);
                });
            } else {
                doc.addRow(1, data, function(err, result) {
                    if(err) {
                        console.log(err);
                    }

                    cb(result);
                });
            }
        });
        
    });
}


module.exports = docService;