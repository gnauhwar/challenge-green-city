	angular.module('GreenCity', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/main');

		$stateProvider
			.state('main' , {
				url: '/main',
				temlate: '<p>asdasdasdasdasd</p>'
			})
	})
