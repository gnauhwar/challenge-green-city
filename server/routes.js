module.exports = function (app) {
    var main = require('./app/main.js');

    app.get('/aa', main.testApi);
};
