'use strict';

angular.module('mobileVibes.login', ['ngRoute'])

.config(['$routeProvider', function() {
  this.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', [function() {

}]);