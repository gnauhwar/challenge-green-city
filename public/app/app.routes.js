(function () {
	angular
		.module('GreenCity')
		.config(routes);

		function routes ($stateProvider, $urlRouterProvider) {

			$stateProvider
				.state('main', {
					url: '/main',
					controller: 'MainCtrl',
					controllerAs: 'main',
					templateUrl: 'app/components/main/templates/main.tpl.html'
				})
				.state('main.map', {
					url: '/map',
				})
				.state('table', {
					url: '/table',
					templateUrl: 'app/components/main/tpl/table.html',
					controller: 'tableCtrl',
					controllerAs: 'table'
				})

			$urlRouterProvider.otherwise('/main');
		}
}());
