angular.module("TheMovesApp.Auth")

.controller("SignInController", ["$scope", "UserService", function ($scope, UserService, $location) {
    $scope.UserService = UserService;
    $scope.signIn = function (user) {
        UserService.validateUser(user).then(function () {
                $scope.UserService = UserService;
                $scope.user = {};
            })
    }
    $scope.logout = function () {
            UserService.logout();
        }
}]);