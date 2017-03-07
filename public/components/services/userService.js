angular.module("TheMovesApp")

.service("UserService", ['$http', function ($http) {
    this.loggedIn = false;
    this.id;
    this.user;
    this.businessOwner = false;

    this.createUser = function (newUser) {
        return $http.post('/user', newUser)
    }

    this.validateUser = function (userObject) {
        var email = userObject.email
        return $http.get(`/user/sign-in/${email}`)
    }

    this.enterUser = function (id) {
        this.loggedIn = true;
        this.id = id
        return $http.put(`/user/${id}`, {
            isLoggedIn: true
        })
    }

    this.exitUser = function () {
        this.loggedIn = false;
        return $http.put(`/user/${this.id}`, {
            isLoggedIn: true
        })
    }

    this.seeUser = function () {
        return this.user
    }

    this.addEvent = function (eventId) {
        this.user.savedEventId.push(eventId)
        return $http.put(`/user/${this.user._id}`, {
            savedEventId: this.user.savedEventId
        })
    }

    this.saveUser = function (user) {
        this.user = user
    }

    this.deleteEvent = function (events) {
        this.user.savedEventId = events;
        return $http.put(`/user/${this.user._id}`, {
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
        return $http.put(`/user/${this.user._id}`, editedUser)
    }

    this.getMyEvents = function () {
        return $http.get(`/user/myEvents/${this.user._id}`)
    }

    this.isBusinessOwner = function () {
        this.businessOwner = true;
    }

    this.reset = function () {
        this.user = {};
        this.loggedIn = false;
        this.id = "";
        this.businessOwner = false;
    }
    
    this.postEvent = function(eventId) { 
        this.user.postedEventId.push(eventId);
        return $http.put(`/user/${this.user._id}`, {postedEventId: this.user.postedEventId})
    }
    
    this.getPostedEvents = function() { 
        return $http.get(`/user/postedEvents/${this.user._id}`)
    }
}])