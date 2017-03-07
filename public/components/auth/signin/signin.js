angular.module("TheMovesApp.Auth")

.directive("signIn", function(){ 
    return { 
        restrict: "EA", 
        templateUrl: "components/auth/signin/signin.html"
    }
});