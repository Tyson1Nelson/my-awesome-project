angular.module("MyApp.Auth")

.controller("LogoutController", ["UserService", function (UserService) {
    UserService.logout();
}]);