angular.module("TheMovesApp")

.controller("EventSpecificController", ["$scope", "$routeParams", "eventService", function ($scope, $routeParams, eventService) {

    $scope.clicked = false;

    $scope.category = $routeParams.category
    var category = $routeParams.category
    eventService.getEventCategory(category).then(function (response) {
        $scope.events = response.data
    })
    
    function init(lat, lng, Map) {
        let location = {lat: lat, lng: lng};
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
}])