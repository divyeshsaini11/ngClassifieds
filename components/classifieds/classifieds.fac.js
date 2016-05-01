(function() {
	"use strict";
	angular
		.module('ngClassifieds')
		.factory('classifiedsFactory', function($http, $firebaseArray){

			var ref = new Firebase('https://ng-classifiedapp.firebaseio.com/');

			return {
				ref: $firebaseArray(ref)
			};
		}); 
})();