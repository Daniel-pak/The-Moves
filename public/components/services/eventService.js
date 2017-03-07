angular.module("TheMovesApp")

.service("eventService", ["$http", function ($http) {

    this.postEvent = function(event) { 
        return $http.post('/event', event)
    }
    
    this.getEvents = function () {
        return $http.get('/event')
    }
    this.getEventCategory = function (category) {
        return $http.get(`/event/category/${category}`)
    }
    
    this.deleteEvent = function(id) { 
        return $http.delete(`/event/${id}`);
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
        return $http.get('/event/search?title=' + search_input);
    }

}])