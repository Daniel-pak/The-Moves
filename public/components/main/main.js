angular.module("TheMovesApp")

.controller("HomeController", ["$scope", function($scope){

    $scope.searchByWord = function(search_input) { 
        console.log(search_input);
    }
    
    
}])