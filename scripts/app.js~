angular
	.module('ngClassifieds',['ngMaterial','ui.router'])
	.config(function($mdThemingProvider, $stateProvider) {
		$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('orange');

		$stateProvider
			.state('classifieds', {
				url:'/classifieds',
				templateUrl: 'components/classifieds/classifieds.tpl.html',
				controller: 'ClassifiedCtrl as vm'
			})
			.state('classifieds.new', {
				url:'/new',
				templateUrl: 'components/classifieds/new/classifieds.new.tpl.html',
				controller: 'NewClassifiedsCtrl as vm'
			});
	});
