var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/', express.static(__dirname + './../public/'));

app.use(bodyParser.json());
require('./routes')(app);

var server = app.listen('8000', function() {
    console.log('Server listening on port: ' + server.address().port)
})
