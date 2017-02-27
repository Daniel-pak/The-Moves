angular.module("TheMovesApp")

.controller("DailyController", ["$scope", "eventService", function($scope, eventService){
    
    eventService.getEvents().then(function(response) { 
        console.log(response.data)
        $scope.events = response.data;
    })
    
}])