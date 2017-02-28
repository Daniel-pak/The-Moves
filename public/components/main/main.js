angular.module("TheMovesApp")

.controller("HomeController", ["$scope", "$location", function($scope, $location){

    $scope.searchByWord = function(search_input) { 
        console.log(search_input);
    }
    
    $scope.searchByCategory = function(category) { 
        console.log(category)
        $location.path(`/events/${category}`)
    }
    
}])