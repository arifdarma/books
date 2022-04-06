var createError = require('http-errors');
var express = require('express');
var bp = require('body-parser')
var path = require('path');

var bookRouter = require('./router/books');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs')

app.use('/book', bookRouter);

app.listen(process.env.PORT || 3000,function() {
  console.log('server is okay')
})

module.exports = app;
