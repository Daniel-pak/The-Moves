angular.module("TheMovesApp", ["ngRoute", "ui.materialize"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/main/main.html",
            controller: "HomeController"
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
        .when('/myEvents', {
            controller: "MyEventController",
            templateUrl: "components/myEvents/myEvents.html"
        })
        .when('/settings', {
            controller: "SettingsController",
            templateUrl: "components/settings/settings.html"
        })
        .when('/addEvent', {
            controller: "AddEventController",
            templateUrl: "components/addEvent/addEvent.html"
        })
        .when('/postedEvents', {
            controller: "PostedEventsController",
            templateUrl: "components/postedEvents/postedEvents.html"
        })
        .when('/search/:title', {
            controller: "SearchedEventController", 
            templateUrl: "components/searchedEvent/searchedEvent.html"
        })
        .otherwise({
            redirectTo: '/home'
        })
}])