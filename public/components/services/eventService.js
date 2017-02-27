angular.module("TheMovesApp")

.service("eventService", ["$http", function ($http) {

    this.getEvents = function () {
        return $http.get('/event')
    }
}])