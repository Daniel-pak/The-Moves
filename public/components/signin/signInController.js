angular.module("TheMovesApp")

.controller("SignInController", ["$scope", "UserService", "$location", function ($scope, UserService, $location) {
    $scope.UserService = UserService;
    $scope.signIn = function (user) {
        UserService.validateUser(user).then(function (response) {
            let person = response.data
            UserService.saveUser(person);
            let password = person.password
            if (user.password !== password) {
                console.log("You entered the wrong password!");
            } else {
                console.log("Entered!");
                return UserService.enterUser(person._id)
            }
        })
    }
    
    $scope.signOut = function() { 
        UserService.exitUser().then(function(response){ 
            console.log(response)
        })
        $location.path('/home')
    }


}]);