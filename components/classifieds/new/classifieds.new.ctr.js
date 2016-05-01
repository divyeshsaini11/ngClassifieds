	(function() {
	"use strict";

	angular
		.module('ngClassifieds')
		.controller('NewClassifiedsCtrl', 
			function($scope, $timeout, $state, $mdSidenav, $mdDialog, classifiedsFactory){
			
			var vm = this;
			vm.closeSidebar = closeSidebar;
			vm.saveClassified = saveClassified;

			$timeout(function() {
				$mdSidenav('left').open();
			});

			$scope.$watch('vm.sideNavOpen', function(sidenav) {
				if(sidenav === false) {
					$mdSidenav('left')
						.close()
						.then(function() {
							$state.go('classifieds');
						});
				}
			});

			function closeSidebar() {
				vm.sideNavOpen = false;
			}

			function saveClassified(classified) {
				if(classified) {

					classified.contact = {
						name:'Divyesh Saini',
						phone:'1235447985',
						email:'ds@gamil.com'
					}
					$scope.$emit('newClassified', classified);
					vm.sideNavOpen = false;
				}
			}
			
		});
})();