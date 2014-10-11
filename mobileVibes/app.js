'use strict';

// Declare app level module which depends on views, and components
angular.module('mobileVibes', [
  'ngRoute',
  'ngTouch',
  'mobileVibes.login',
  'mobileVibes.browse',
  'mobileVibes.jam',
  'mobileVibes.version'
]).
config(['$routeProvider', function() {
  this.otherwise({redirectTo: '/login'});
}]);
