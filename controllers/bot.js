var bitMexService = require('../services/bitmex');
var twitterService = require('../services/twitter');
var docService = require('../services/spreadsheet');

var botCtrl = {
    init: () => {
        var initialData = {
            XBTUSD: 0,
            ETHUSD: 0,
            ADAU19: 0,
            BCHU19: 0,
            EOSU19: 0,
            LTCU19: 0,
            TRXU19: 0,
            XRPZ19: 0,
            BALENCE: 0
        }
        bitMexService.getCurrentXBTUSD(cb => {
            initialData.XBTUSD = cb
        });

        bitMexService.getCurrentETHUSD(cb => {
            initialData.ETHUSD = cb;
        });

        bitMexService.getCurrentADAU19(cb => {
            initialData.ADAU19 = cb;
        });

        bitMexService.getCurrentBCHU19(cb => {
            initialData.BCHU19 = cb;
        });

        bitMexService.getCurrentEOSU19(cb => {
            initialData.EOSU19 = cb;
        });

        bitMexService.getCurrentLTCU19(cb => {
            initialData.LTCU19 = cb;
        });

        bitMexService.getCurrentTRXU19(cb => {
            initialData.TRXU19 = cb;
        });

        bitMexService.getCurrentXRPZ19(cb => {
            initialData.XRPZ19 = cb;
        });

        bitMexService.getWalletBalance(cb => {
            initialData.BALENCE = cb / 100000000;
        });

        setInterval(() => {
            console.log(initialData);
            docService.addRow(initialData, cb => {

            });
        }, 30000);

        
    }
}

module.exports = botCtrl;