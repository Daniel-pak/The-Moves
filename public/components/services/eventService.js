angular.module("TheMovesApp")

.service("eventService", ["$http", function ($http) {

    this.getEvents = function () {
        return $http.get('/event')
    }
    this.getEventCategory = function (category) {
        return $http.get(`/event/category/${category}`)
    }
    
    this.getYourLocation = function() { 
        return $http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDBHftUQVrdrHqiGk6eRmX6kY_wFGRdIMY')
    }
    

}])