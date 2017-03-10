angular.module("MyApp")

.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "navbar/navbar.html",
        controller: function ($scope) {
            $scope.userService = UserService
        }
    }
}]);