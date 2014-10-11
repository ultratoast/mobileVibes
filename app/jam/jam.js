'use strict';

angular.module('mobileVibes.jam', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jam', {
    templateUrl: 'jam/jam.html',
    controller: 'Instruments'
  });
}])

.controller('Instruments', function() {
	this.instruments = [
			{
				'name':'Snare','id':'drum-snare'
			},
			{
				'name':'Kick','id':'drum-kick'
			},
			{
				'name':'Hi Hat','id':'drum-hihat'
			},
			{
				'name':'Tom','id':'drum-tom'
			}
		]
})
//.controller('', [function(){}])