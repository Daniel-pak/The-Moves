angular.module("TheMovesApp")

.controller("MyEventController", ['$scope', 'UserService', function ($scope, UserService) {

    $scope.user = UserService.seeUser();

    $scope.deleteEventFromUser = function (index) {
        var eventId = $scope.user.savedEventId[index]._id;
        $scope.user.savedEventId.splice(index, 1);
        UserService.deleteEvent($scope.user.savedEventId)
    }

}])