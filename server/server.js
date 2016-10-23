var express = require('express');
var bodyParser = require('body-parser');
var parser = require('excel-parser');

var app = express();

app.use('/', express.static(__dirname + './../public/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
require('./routes')(app);

var server = app.listen('8000', function() {
    console.log('Server listening on port: ' + server.address().port)
})
