angular.module("TheMovesApp")

.controller("PostedEventsController", ["$scope", "UserService", "eventService", function ($scope, UserService, eventService) {

    UserService.getPostedEvents().then(function (response) {
        console.log(response.data.postedEventId);
        $scope.events = response.data.postedEventId
    })

    $scope.deleteItem = function (index) {
        console.log($scope.events[index]._id)
        let id = $scope.events[index]._id
        eventService.deleteEvent(id).then(function (response) {
            console.log(response)
        })
        $scope.events.splice(index, 1);
    }

}])