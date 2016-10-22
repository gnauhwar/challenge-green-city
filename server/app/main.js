var parse = require('excel-parser');
var path = require('path');
var fs = require('fs');

module.exports.testApi = function testApi (req, res) {
  res.send('Server is loaded')
};


module.exports.parseApi = function parseApi (req, res) {
  parse.parse({
    worksheet: 1,
    inFile: './aer.xlsx',
    skipEmpty: true,
    searchFor: {
      // term: ['кишинев', 'бельцы', 'тирасполь', 'концентрация', 'максимально'],
      type: 'loose'
    }
  }, function (err, rec) {
    if (err) console.log(err);
    // var len = res.length;
    // var r1 = results[0][0];
    // var r1000 = results[len - 1][0];

    var data = [];

    this.forCities = function () {
      // cities

      for (var i = 7; i < rec.length - 2; i++) {

        data.push({
          id: rec[i][0],
          city: rec[i][1],
          ch: rec[i][4],
          so: rec[i][5],
          co: rec[i][6],
          no: rec[i][7],
          subst: rec[i][8],
          compusi: rec[i][9],
          altele: rec[i][10],
        });
      }

      data.push({
        id: 'total',
        // city: rec[rec.length - 1][1],
        _2012: rec[rec.length - 1][1],
        _2013: rec[rec.length - 1][2],
        ch: rec[rec.length - 1][3],
        so: rec[rec.length - 1][4],
        co: rec[rec.length - 1][5],
        no: rec[rec.length - 1][6],
        subst: rec[rec.length - 1][7],
        compusi: rec[rec.length - 1][8],
        altele: rec[rec.length - 1][9],
      })

      var jsonfile = require('jsonfile')

      var file = 'cities.json';
      var obj = data;

      jsonfile.writeFile(file, obj, function (err) {
        console.error(err)
      });
    }



    this.forStations = function () {
      stations

      var arr = [];
      var count = 0;

      for (var i = 0; i < rec.length; i++) {
        if (rec[i].length > 1 && rec[i][0] != "Максимально разовая  концентрация") arr.push([rec[i][0], rec[i][rec[i].length - 1]]);
        else if (rec[i].length == 1) {
          count++;
          arr.push(rec[i][0].slice(0, 25) + ' ' + rec[i][0].slice(-50));
        };
      }

      for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "string" && !(~arr[i].indexOf('по городу'))) {
          data.push({
            target: arr[i],
            dust: {
              sredn: arr[i + 1][1],
              pdk: arr[i + 2][1]
            },
            so2: {
              sredn: arr[i + 3][1],
              pdk: arr[i + 4][1]
            },
            no2: {
              sredn: arr[i + 5][1],
              pdk: arr[i + 6][1]
            },
            co: {
              sredn: arr[i + 7][1],
              pdk: arr[i + 8][1]
            }

          })
        }
      }

      var jsonfile = require('jsonfile')

      var file = 'stations.json';
      var obj = data;

      jsonfile.writeFile(file, obj, function (err) {
        console.error(err)
      });
    }

    res.send(data);
    // console.log(res);
  })
  // res.send();
}
