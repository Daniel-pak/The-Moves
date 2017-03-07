angular.module("TheMovesApp")

.controller("SearchedEventController", ["$scope", "$routeParams", "eventService", "UserService", function ($scope, $routeParams, eventService, UserService) {

    $scope.clicked = false;

    $scope.title = $routeParams.title
    var search = $routeParams.title
    eventService.getSearchedEvents(search).then(function (response) {
        console.log(response)
        $scope.events = response.data
    })

    function init(lat, lng, Map) {
        let location = {
            lat: lat,
            lng: lng
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    $scope.showMap = function (index) {
        eventService.getEventLocation($scope.events[index].location).then(function (response) {
            console.log(response)
            $scope.lat = response.data.results[0].geometry.location.lat
            $scope.lng = response.data.results[0].geometry.location.lng
            init($scope.lat, $scope.lng);
        })
    }

    $scope.addEventToUser = function (index) {
        console.log(UserService.seeUser())

        UserService.addEvent($scope.events[index]._id).then(function (response) {
            console.log(response.data)
        })
    }
}])