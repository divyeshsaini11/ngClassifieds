(function() {
	"use strict";
	
	angular
		.module('ngClassifieds')
		.controller('ClassifiedsCtrl', 
			function($scope, $state, $stateParams, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){
			
			var vm = this;

			vm.openSidebar = openSidebar;
			vm.closeSidebar = closeSidebar;	
			vm.onSave = onSave;
			vm.editClassified = editClassified;
			vm.deleteClassified = deleteClassified;

			vm.classifieds;
			vm.classified;
			vm.categories;
			vm.editing;



			classifiedsFactory.getClassifieds().then(function(classifieds) {
				vm.classifieds = classifieds.data;
				vm.categories = getCategories(vm.classifieds);
			});

			$scope.$on('newClassified', function(event, classified) {
				classified.id = vm.classifieds.length + 1;
				vm.classifieds.push(classified);
				toast('Classified Saved!');
			});

			$scope.$on('newClassified', function(event, message) {
				toast(message);
			});

			var contact = {
				name:'Divyesh Saini',
				phone:'1235447985',
				email:'ds@gamil.com'
			}

			function openSidebar() {
				$state.go('classifieds.new');
			}
			function closeSidebar() {
				$mdSidenav('left').close();
				vm.classified = {};
			}

			function toast(message) {
				$mdToast.show(
						$mdToast.simple()
						.content(message)
						.position('top, right')
						.hideDelay(3000)
					);
			}

			function onSave(classified) {
				if(classified) {
					classified.contact = contact;
					vm.classifieds.push(classified);
					closeSidebar();
					toast('Classified Saved!');
					vm.editing = false;
				}
			}

			function editClassified(classified) {
				$state.go('classifieds.edit', {
					id: classified.id,
					classified: classified
				})
			}

			function deleteClassified(event, classified) {
				var confirm = $mdDialog.confirm()
					.title('Do you want to delete ' + classified.title + ' ?')
					.targetEvent(event)
					.ok('Yes')
					.cancel('No');
				$mdDialog.show(confirm).then(function() {
					var index = vm.classifieds.indexOf(classified);
					vm.classifieds.splice(index, 1);
					toast('Classified Deleted!!');
				}, function () {
					// on Cancel
				});
			}

			function getCategories(classifieds) {
				var categories = [];
				angular.forEach(classifieds, function(item) {
					angular.forEach(item.categories, function(category) {
						categories.push(category);
					});
				});

				return _.uniq(categories);
			}

		});
})();
