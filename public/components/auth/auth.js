angular.module("TheMovesApp.Auth", ['ngRoute', 'ngStorage'])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignUpController"
        })
}])

.service("TokenService", ['$localStorage', function ($localStorage) {
    this.setToken = function (token) {
        $localStorage.token = token; 
    }
    
    this.getToken = function() { 
        return $localStorage.token; 
    }

    this.removeToken = function() { 
        delete $localStorage.token;
    }
}])

.service("AuthInterceptor", ["$q", "$location", "TokenService", function($q, $location, TokenService) { 

    this.request = function(config) { 
        var token = TokenService.getToken(); 
        if (token) { 
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    }
    
    this.responseError = function(response) { 
        if (response.status === 401) { 
            TokenService.removeToken(); 
            $location.path('/home')
        }
        return $q.reject(response);
    }
    
}])

.config(["$httpProvider", function($httpProvider){ 
    $httpProvider.interceptors.push("AuthInterceptor")
}])

