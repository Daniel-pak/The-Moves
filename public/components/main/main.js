angular.module("TheMovesApp")

.controller("HomeController", ["$scope", "$location", "eventService", function ($scope, $location, eventService) {

    $scope.searchByWord = function (search_input) {
        $location.path(`/search/${search_input}`)
    }

    $scope.searchByCategory = function (category) {
        $location.path(`/events/${category}`)
    }


}])