'use strict';

angular.module('mobileVibes.browse', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/browse', {
    templateUrl: 'browse/browse.html',
    controller: 'Friends'
  });
}])

.controller('Friends', function($scope) {
	$scope.friends = [
		{
			'name':'Will','username':'willmease','location':'Los Angeles'
		},
		{
			'name':'Edu','username':'eduard','location':'Holland'
		}
	]
});