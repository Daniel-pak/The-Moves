angular.module("TheMovesApp")

.directive("signIn", function(){ 
    return { 
        scope: {}, 
        restrict: "EA", 
        templateUrl: "components/signin/signin.html"
    }
})