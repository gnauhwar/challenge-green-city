(function () {
		angular
			.module('GreenCity')
			.controller('tableCtrl', ['$state', '$http', tableCtrl]);

			function tableCtrl ($state, $http) {
				var self = this;

        $http.get('/data').then(function (data) {
          console.log(data.data);
          self.data = data.data;
        });

			}
}());
