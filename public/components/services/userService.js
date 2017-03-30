angular.module("TheMovesApp.Auth")

    .service("UserService", ['$http', '$location', 'TokenService', '$localStorage', function ($http, $location, TokenService, $localStorage) {
        this.user = $localStorage.user || {};
        this.createUser = function (newUser) {
            return $http.post('/themoves/user', newUser)
        }

        this.isBusinessOwner = function () {
            if ($localStorage.user && $localStorage.user.isBusinessOwner == true) {
                return true;
            } else {
                return false;
            }
        }

        this.validateUser = function (userObject) {
            return $http.post(`/themoves/user/sign-in`, userObject).then(function (response) {
                TokenService.setToken(response.data.token)
                $localStorage.user = response.data.user;
                return response.data;
            });
        }

        this.logout = function () {
            TokenService.removeToken();
            delete $localStorage.user;
            $location.path('/');
        }

        this.isAuthenticated = function () {
            return !!TokenService.getToken();
        }

        this.addEvent = function (eventId) {
            $localStorage.user.savedEventId.push(eventId)
            return $http.put(`/themoves/api/user-info/${$localStorage.user._id}`, {
                savedEventId: $localStorage.user.savedEventId
            })
        }

        this.deleteEvent = function (events) {
            $localStorage.user.savedEventId = events;
            return $http.put(`/themoves/api/user-info/${$localStorage.user._id}`, {
                savedEventId: $localStorage.user.savedEventId
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
            return $http.put(`/themoves/api/user-info/${$localStorage.user._id}`, editedUser)
        }

        this.getMyEvents = function () {
            return $http.get(`/themoves/api/user-info/myEvents/${$localStorage.user._id}`)
        }

        this.postEvent = function (eventId) {
            $localStorage.user.postedEventId.push(eventId);
            return $http.put(`/themoves/api/user-info/${$localStorage.user._id}`, {
                postedEventId: $localStorage.user.postedEventId
            })
        }

        this.getPostedEvents = function () {
            return $http.get(`/themoves/api/user-info/postedEvents/${$localStorage.user._id}`)
        }
    }])
