'use strict';

battleworldApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  	$scope.performSearch = function(term) {
		$http.jsonp('http://api.github.com/users/' + term + '/repos?&callback=JSON_CALLBACK').success(function(res) {
			console.log(res);
			$scope.results = res.data
			if (!res.data.length) {
				$scope.noResults = "No Results Found for " + term;
			}
		}).error(function(res) {
			//handle error
		});
	};
}]);