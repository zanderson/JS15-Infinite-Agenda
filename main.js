angular.module('calendar', [])
   .controller('agendacontroller', ['$scope', function($scope){
   		var dates = {};
       // $scope.showPopup = false;
       // $scope.click = function(show) {
       //     $scope.showPopup = show;    
       //     }    
    	$scope.date = new Date();

   }]);

