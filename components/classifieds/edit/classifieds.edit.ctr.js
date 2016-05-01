(function() {
	"use strict";

	angular
		.module('ngClassifieds')
		.controller('EditClassifiedsCtrl', 
			function($scope, $timeout, $state, $mdSidenav, $mdDialog, classifiedsFactory){
			
			var vm = this;
			vm.closeSidebar = closeSidebar;
			vm.saveEdit = saveEdit;
			vm.classified = $state.params.classified;

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

			function saveEdit() {
				$scope.$emit('editSaved', 'Edit Saved!')
				vm.sideNavOpen = false;
			}
			
		});
})();