var mobileVibesServices = angular.module('mobileVibesServices', ['ngResource']);

mobileVibesServices.factory('Friends', ['$resource',
  function($resource){
    return $resource('friends/:friends.json', {}, {
      query: {method:'GET', params:{userId:'username'}, isArray:true}
    });
  }]);