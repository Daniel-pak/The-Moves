angular.module("TheMovesApp")

.controller("DailyController", ["$scope", "eventService", "UserService", function($scope, eventService, UserService){
    
    $scope.events;
    
    eventService.getEvents().then(function(response) { 
        console.log(response.data)
        $scope.events = response.data;
    })
    
    $scope.addEventToUser = function(index) { 
        console.log(UserService.seeUser())
        
        UserService.addEvent($scope.events[index]._id).then(function(response) { 
            console.log(response.data)
        })
    }
    
}])