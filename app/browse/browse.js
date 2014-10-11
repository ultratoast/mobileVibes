'use strict';

angular.module('mobileVibes.browse', ['ngRoute'])

.config(['$routeProvider', function() {
  this.when('/browse', {
    templateUrl: 'browse/browse.html',
    controller: 'BrowseCtrl'
  });
}])

.controller('BrowseCtrl', [function() {

}]);