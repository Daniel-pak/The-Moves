angular.module("TheMovesApp")

.directive("signIn", function(){ 
    return { 
        restrict: "EA", 
        templateUrl: "components/signin/signin.html"
    }
});