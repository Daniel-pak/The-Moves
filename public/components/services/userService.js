angular.module("TheMovesApp.Auth")

.service("UserService", ['$http', '$location', 'TokenService', '$localStorage', function ($http, $location, TokenService, $localStorage) {
    this.id;
    this.user = $localStorage.user || {};
    this.businessOwner = false;

    this.createUser = function (newUser) {
        return $http.post('/user', newUser)
    }

    this.validateUser = function (userObject) {
        return $http.post(`/user/sign-in`, userObject).then(function(response){
            TokenService.setToken(response.data.token)
            $localStorage.user = response.data.user
            return response.data;
        });
    }

    this.logout = function() { 
        TokenService.removeToken(); 
        console.log('this is working')
        $location.path('/');
    }
    
    this.isAuthenticated = function() {
        return !!TokenService.getToken(); 
    }

    this.addEvent = function (eventId) {
        this.user.savedEventId.push(eventId)
        return $http.put(`/api/user-info/${this.user._id}`, {
            savedEventId: this.user.savedEventId
        })
    }
    
    this.deleteEvent = function (events) {
        this.user.savedEventId = events;
        return $http.put(`/api/user-info/${this.user._id}`, {
            savedEventId: this.user.savedEventId
        })
    }

    this.editUser = function (user) {
        let editedUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            location: user.location
        }
        let id = this.user._id;
        return $http.put(`/api/user-info/${this.user._id}`, editedUser)
    }

    this.getMyEvents = function () {
        return $http.get(`/api/user-info/myEvents/${this.user._id}`)
    }
//
//    this.isBusinessOwner = function () {
//        this.businessOwner = true;
//    }
//
//    this.reset = function () {
//        this.user = {};
//        this.loggedIn = false;
//        this.id = "";
//        this.businessOwner = false;
//    }
//    
//    this.postEvent = function(eventId) { 
//        this.user.postedEventId.push(eventId);
//        return $http.put(`/user/${this.user._id}`, {postedEventId: this.user.postedEventId})
//    }
//    
//    this.getPostedEvents = function() { 
//        return $http.get(`/user/postedEvents/${this.user._id}`)
//    }
}])