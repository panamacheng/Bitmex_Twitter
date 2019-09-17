var BitmexClient = require('bitmex-realtime-api');

var options = {
    testnet: false,
    apiKeyID: process.env.BITMEX_API_KEY_ID,
    apiKeySecret: process.env.BITMEX_API_KEY_SECRET,
    maxTableLen: process.env.BITMEX_MAX_TABLE_LEN
};

var client = new BitmexClient(options);

var bitmexService = {};
bitmexService.getCurrentXBTUSD = getCurrentXBTUSD;
bitmexService.getCurrentETHUSD = getCurrentETHUSD;
bitmexService.getCurrentADAU19 = getCurrentADAU19;
bitmexService.getCurrentBCHU19 = getCurrentBCHU19;
bitmexService.getCurrentEOSU19 = getCurrentEOSU19;
bitmexService.getCurrentLTCU19 = getCurrentLTCU19;
bitmexService.getCurrentTRXU19 = getCurrentTRXU19;
bitmexService.getCurrentXRPZ19 = getCurrentXRPZ19;
bitmexService.getWalletBalance = getWalletBalance;

function getCurrentXBTUSD(cb) {
    client.addStream('XBTUSD', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentETHUSD(cb) {
    client.addStream('ETHUSD', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentADAU19(cb) {
    client.addStream('ADAU19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentBCHU19(cb) {
    client.addStream('BCHU19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentEOSU19(cb) {
    client.addStream('EOSU19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentLTCU19(cb) {
    client.addStream('LTCU19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentTRXU19(cb) {
    client.addStream('TRXU19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getCurrentXRPZ19(cb) {
    client.addStream('XRPZ19', 'trade', (data) => {
        if(cb(data[data.length-1].price) != undefined) {
            cb(data[data.length-1].price);
        }
    }); 
};

function getWalletBalance(cb) {
    client.addStream('*', 'margin', (data) => {
        cb({
            wallet: data[0].walletBalance,
            margin: data[0].marginBalance
        })
    });
}


module.exports = bitmexService;