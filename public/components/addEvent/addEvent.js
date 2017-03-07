angular.module("TheMovesApp")

.controller("AddEventController", ["$scope", "UserService", "eventService", "$location", function($scope, UserService, eventService, $location) { 

    $scope.addEvent = function(newEvent) { 
        eventService.postEvent(newEvent).then(function(response) { 
            console.log(response)
            let id = response.data._id
            UserService.postEvent(id).then(function(response) { 
                console.log(response.data)
            })
        })
        $scope.newEvent = {};
    }
    
        
}])