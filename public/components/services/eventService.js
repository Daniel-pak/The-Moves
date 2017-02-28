angular.module("TheMovesApp")

.service("eventService", ["$http", function ($http) {

    this.getEvents = function () {
        return $http.get('/event')
    }
    this.getEventCategory = function(category) { 
        return $http.get(`/event/category/${category}`)
    }
}])