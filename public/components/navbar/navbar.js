angular.module("TheMovesApp.Auth")

.directive("navbar", function() { 
    return { 
        templateUrl: "components/navbar/navbar.html", 
        restrict: "EA"
    }
})