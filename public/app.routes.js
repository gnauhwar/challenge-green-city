(function () {

	'use strict';

	angular
		.module('GreenCity', ['ui.router'])
		.config(routes);

		function routes ($stateProvider, $urlRouterProvider) {

			$stateProvider
				.state('main', {
					url: '/main',
					controller: 'MainCtrl',
					controllerAs: 'main',
					templateUrl: './app/components/main/tpl/main.tpl.html'
				});

				$urlRouterProvider.otherwise('main');
		};
})();
