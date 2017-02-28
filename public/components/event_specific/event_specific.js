angular.module("TheMovesApp")

.controller("EventSpecificController", ["$scope", "$routeParams", "eventService", function ($scope, $routeParams, eventService) {

    $scope.clicked = false;

    $scope.category = $routeParams.category
    var category = $routeParams.category
    eventService.getEventCategory(category).then(function (response) {
        $scope.events = response.data
    })

    $scope.showMap = function (index) {
        eventService.getYourLocation().then(function (response) {
            $scope.lat = response.data.location.lat
            $scope.lng = response.data.location.lng
            console.log($scope.lat, $scope.lng)
            
            initialize();
            
            var map;
            var service;
            var infowindow;

            function initialize() {
                var location = new google.maps.LatLng($scope.lat, $scope.lng);

                map = new google.maps.Map(document.getElementById('map'), {
                    center: location,
                    zoom: 15
                });

                var request = {
                    location: location,
                    radius: '100',
                    query: $scope.events[index].location
                };

                service = new google.maps.places.PlacesService(map);
                service.textSearch(request, callback);
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                        createMarker(results[i]);
                    }
                }
            }
        })
    }

}])