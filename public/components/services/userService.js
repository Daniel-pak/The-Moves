angular.module("TheMovesApp")

.service("UserService", ['$http', function ($http) {

    this.createUser = function (newUser) {
        return $http.post('/user', newUser)
    }

    //    this.getUser = function(id) 

}])