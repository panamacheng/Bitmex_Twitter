'use strict';
var twitter = require('twitter');
var options = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TIWTTER_ACCESS_TOKEN_SECRET
}

var client = new twitter(options);

var twitterService = {}
twitterService.tweetSomething = tweetSomething;

function tweetSomething() {
    client.post('statuses/update', {status: 'This is my tweet for making sure all of my progress'})
        .then((tweet) => {
            console.log(tweet);  // Tweet body.
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = twitterService;