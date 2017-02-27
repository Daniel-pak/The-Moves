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
}])