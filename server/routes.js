module.exports = function (app) {
  var main = require('./app/main.js');

  app.get('/test', main.testApi);
};
