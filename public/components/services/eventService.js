angular.module("TheMovesApp")

.service("eventService", ["$http", function ($http) {

    this.postEvent = function(event) { 
        return $http.post('localhost:9000/api/event', event)
    }
    
    this.getEvents = function () {
        return $http.get('localhost:9000/allevents')
    }
    this.getEventCategory = function (category) {
        return $http.get(`localhost:9000/allevents/category/${category}`)
    }
    
    this.deleteEvent = function(id) { 
        return $http.delete(`localhost:9000/api/event/${id}`);
    }

    this.getYourLocation = function () {
        return $http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCUByRmmx0IyAgfiCUXLMCFqYaame6l5Y4')
    }

    this.getEventLocation = function (address) {
        let newAddress = "" 
        for (var i = 0; i < address.length; i++) { 
            if (address[i] == " ") { 
                newAddress += "+"
            } else { 
                newAddress += address[i]
            }
        }
        return $http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCUByRmmx0IyAgfiCUXLMCFqYaame6l5Y4`)
    }
    
    this.getSearchedEvents = function(search_input) { 
        return $http.get('localhost:9000/allevents/search?title=' + search_input);
    }

}])