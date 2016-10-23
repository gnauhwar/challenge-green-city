(function () {
		angular
			.module('GreenCity')
			.controller('MainCtrl', ['$state', MainCtrl]);

			function MainCtrl ($state) {
				var self = this;
				self.url = "map.html";
			}
}());
