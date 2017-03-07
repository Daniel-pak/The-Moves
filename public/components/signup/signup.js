angular.module("TheMovesApp")

.controller("SignUpController", ["$scope", "UserService", function($scope, UserService){ 

    $scope.addUser = function(newUser) { 
        UserService.createUser(newUser).then(function(response) { 
            console.log(response)
        })
        $scope.newUser = {};
    }
    
}])