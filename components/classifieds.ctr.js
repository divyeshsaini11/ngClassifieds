(function() {
	"use strict"

	angular.module('ngClassifieds')
			.controller('ClassifiedCtrl', function($scope){
				$scope.classifieds = [{
					title : 'First Item',
					price : '100,000,000',
					description : "Lorema aasfkj nkjbakfk kn kjajfkfa oaivuhbkl",
					contact : {
						name: 'Aaron',
						phone: '1234567890',
						email: 'aaron@gmail.com'
					}
				}]});
})();