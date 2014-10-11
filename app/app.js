'use strict';

// Declare app level module which depends on views, and components
angular.module('mobileVibes', [
  'ngRoute',
  'ngTouch',
  'ngResource',
  'mobileVibes.login',
  'mobileVibes.browse',
  'mobileVibes.jam',
  'mobileVibesServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
