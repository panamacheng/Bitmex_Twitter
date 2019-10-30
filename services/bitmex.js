require('dotenv').config();
var BitmexClient = require('bitmex-realtime-api');

var options1 = {
    testnet: false,
    apiKeyID: process.env.BITMEX_API_KEY_ID1,
    apiKeySecret: process.env.BITMEX_API_KEY_SECRET1,
    maxTableLen: process.env.BITMEX_MAX_TABLE_LEN
};

var options2 = {
    testnet: false,
    apiKeyID: process.env.BITMEX_API_KEY_ID2,
    apiKeySecret: process.env.BITMEX_API_KEY_SECRET2,
    maxTableLen: process.env.BITMEX_MAX_TABLE_LEN
};

var client1 = new BitmexClient(options1);
var client2 = new BitmexClient(options2);

var bitmexService = {};
bitmexService.getCurrentXBTUSD = getCurrentXBTUSD;
bitmexService.getCurrentETHUSD = getCurrentETHUSD;
bitmexService.getCurrentADAU19 = getCurrentADAU19;
bitmexService.getCurrentBCHU19 = getCurrentBCHU19;
bitmexService.getCurrentEOSU19 = getCurrentEOSU19;
bitmexService.getCurrentLTCU19 = getCurrentLTCU19;
bitmexService.getCurrentTRXU19 = getCurrentTRXU19;
bitmexService.getCurrentXRPZ19 = getCurrentXRPZ19;
bitmexService.getWalletBalance1 = getWalletBalance1;
bitmexService.getWalletBalance2 = getWalletBalance2;

function getCurrentXBTUSD(cb) {
    client1.addStream('XBTUSD', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentETHUSD(cb) {
    client1.addStream('ETHUSD', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentADAU19(cb) {
    client1.addStream('ADAZ19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentBCHU19(cb) {
    client1.addStream('BCHZ19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentEOSU19(cb) {
    client1.addStream('EOSZ19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentLTCU19(cb) {
    client1.addStream('LTCZ19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentTRXU19(cb) {
    client1.addStream('TRXZ19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentXRPZ19(cb) {
    client1.addStream('XRPZ19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getWalletBalance1(cb) {
    client1.addStream('*', 'margin', (data) => {
        cb({
            wallet: data[0].walletBalance,
            margin: data[0].marginBalance
        })
    });
}

function getWalletBalance2(cb) {
    client2.addStream('*', 'margin', (data) => {
        cb({
            wallet: data[0].walletBalance,
            margin: data[0].marginBalance
        })
    });
}

module.exports = bitmexService;