var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/', express.static(__dirname + './../public/'));

app.use(bodyParser.json());
require('./routes')(app);

var server = app.listen('8080', function () {
  console.log('The GreenCity App is listening on port : ' + server.address().port);
});
