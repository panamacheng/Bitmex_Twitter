require('dotenv').config;
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
            BALENCE1: 0,
            MARGIN1: 0,
            BALENCE2: 0,
            MARGIN2: 0,
            STARTBAL1: process.env.BITMEX_STARTUP_BALANCE1,
            PERCENT1: '',
            STARTBAL2: process.env.BITMEX_STARTUP_BALANCE2,
            PERCENT2: '',
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

        bitMexService.getWalletBalance1(cb => {
            var currentBalance = cb.wallet / 100000000;

            initialData.BALENCE1 = currentBalance;
            initialData.MARGIN1 = cb.margin / 100000000;
            var percentage = (currentBalance - process.env.BITMEX_STARTUP_BALANCE1)/currentBalance*100;
            initialData.PERCENT1 = `${Math.round(percentage)}%`;
        });

        bitMexService.getWalletBalance2(cb => {
            var currentBalance = cb.wallet / 100000000;

            initialData.BALENCE2 = currentBalance;
            initialData.MARGIN2 = cb.margin / 100000000;
            var percentage = (currentBalance - process.env.BITMEX_STARTUP_BALANCE2)/currentBalance*100;
            initialData.PERCENT2 = `${Math.round(percentage)}%`;
        });

        setInterval(() => {
            docService.addRow(initialData);
        }, 60000);
    }
}

module.exports = botCtrl;