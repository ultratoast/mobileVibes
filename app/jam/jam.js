'use strict';

angular.module('mobileVibes.jam', ['ngRoute'])

.config(['$routeProvider', function($routeProvider,userId) {
  $routeProvider.when('/jam', {
    templateUrl: 'jam/jam.html',
    controller: 'Instruments'
  },
  $routeProvider.when('/jam/'+userId, {
  	templateUrl: 'jam/jam.html',
  	controller: 'Instruments'
  })
  );
}])

.controller('Instruments', function($scope) {
	$scope.instruments = [
			{
				'name':'Snare','id':'0'
			},
			{
				'name':'Kick','id':'1'
			},
			{
				'name':'Hi Hat','id':'2'
			},
			{
				'name':'Tom','id':'3'
			}
		],
	$scope.triggerInstrument = function(index, key) {
		//console.log('trigger sample, index '+index+' key '+key)
	  	var newSource = context.createBufferSource()
	    newSource.buffer = noteNode[index][key]
	    // newSource.connect(bus[index].input)
	    newSource.connect(context.destination)
	    newSource.start()
	    newSource.onended = function(){
	      newSource.stop()
	    }
}
	$scope.panelSwipe = function(target) {
		$('.jam-panel').addClass('hidden')
		$('#'+target).fadeIn()
	}
})
//.controller('', [function(){}])