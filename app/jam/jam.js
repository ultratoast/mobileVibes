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
				'name':'Snare','id':'snare'
			},
			{
				'name':'Kick','id':'kick'
			},
			{
				'name':'Hi Hat','id':'hihat'
			},
			{
				'name':'Tom','id':'tom'
			}
		],
	$scope.triggerInstrument = function(index, key) {
		//console.log('trigger sample, index '+index+' key '+key)
	  	//var newSource = context.createBufferSource()
	    //newSource.buffer = noteNode[index][key]
	    // newSource.connect(bus[index].input)
	    //newSource.connect(context.destination)
	    //newSource.start()
	    //newSource.onended = function(){
	    //  newSource.stop()
	    //}
	    //console.log('ul.sample-pool#'+index, '.'+key)
	    $('ul.sample-pool#'+index).find('.'+key)[0].currentTime = 0;
	    $('ul.sample-pool#'+index).find('.'+key)[0].play()
	}
	$scope.panelSwipe = function(target) {
		$('.jam-panel').addClass('hidden')
		$('#'+target).fadeIn()
	}
})
//.controller('', [function(){}])