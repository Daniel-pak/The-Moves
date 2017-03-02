angular.module("TheMovesApp")

.controller("SettingsController", ["$scope", "UserService", function($scope, UserService){

    $scope.user = UserService.seeUser()
    
    $scope.editing = false;
    
    $scope.editUser = function(user) { 
        UserService.editUser(user)
    }
}])