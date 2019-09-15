'use strict';
var BitmexClient = require('bitmex-realtime-api');

var options = {
    testnet: process.env.BITMEX_TEST_NET,
    apiKeyID: process.env.BITMEX_API_KEY_ID,
    apiKeySecret: process.env.BITMEX_API_KEY_SECRET,
    maxTableLen: process.env.BITMEX_MAX_TABLE_LEN
}

const client = new BitmexClient(options);

var bitmexService = {};
bitmexService.getCurrentXBTPosition = getCurrentXBTPosition;

function getCurrentXBTPosition() {
    client.addStream('XBTUSD', 'position', (data) => {
        console.log(data);
    });
}

module.exports = bitmexService;