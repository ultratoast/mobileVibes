'use strict';

angular.module('mobileVibes.jam', ['ngRoute'])

.config(['$routeProvider', function() {
  this.when('/jam', {
    templateUrl: 'jam/jam.html',
    controller: 'JamCtrl'
  });
}])

.controller('JamCtrl', [function() {

}]);