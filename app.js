'use strict';
require('dotenv').config();
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var createError  = require('http-errors');
var botCtrl = require('./controllers/bot');
var app = express();
var port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

botCtrl.init();

var server = http.createServer(app);

server.listen(port, () => {
    console.log(`App listening on ${port}`);
});


