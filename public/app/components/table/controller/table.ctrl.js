(function () {
	'use strict';

	angular
		.module('GreenCity')
		.controller('table', ['$http', table]);

		function table ($http) {
			var self = this;
			alert(true);
		};
})();
