	angular.module('GreenCity', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/main');

		$stateProvider
			.state('main' , {
				url: '/main',
				temlate: '<p>asdasdasdasdasd</p>'
			}).state('table' , {
				url: '/table',
				temlateUrl: './public/tpls/table.html'
			})
	})
