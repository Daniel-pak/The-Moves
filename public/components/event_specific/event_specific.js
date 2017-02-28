angular.module("TheMovesApp")

.controller("EventSpecificController", ["$scope", "$routeParams", "eventService", function($scope, $routeParams, eventService){
    
    $scope.category = $routeParams.category
    var category = $routeParams.category
    eventService.getEventCategory(category).then(function(response) { 
        $scope.events = response.data
    }) 
}])