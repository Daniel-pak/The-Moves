angular.module("TheMovesApp", ["ngRoute", "ui.materialize"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl:"components/main/main.html",
            controller:"HomeController"
        })
        .when("/daily", { 
            templateUrl: "components/daily_inspiration/daily.html", 
            controller: "DailyController"
        })
        .when("/events/:category", { 
            templateUrl: "components/event_specific/event_specific.html", 
            controller: "EventSpecificController"
        })
        .when("/signup", {
            templateUrl: "components/signup/signup.html",
            controller: "SignUpController"
    })
}])