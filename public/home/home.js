angular.module("MyApp")

.controller("HomeController", ["$scope", "PartyService", "$routeParams", "$location", function ($scope, PartyService, $routeParams, $location) {
    
    $scope.user = {};
    $scope.form = false;
    var count = 3;
    
    $scope.getUser = function (user) {
        if (user === undefined) {
            alert("Nothing in the input fields");
        } else {
            PartyService.getUser(user).then(function () {
                if (PartyService.activeUser.length > 0) {
                    if (PartyService.activeUser[0].username === user.username) {
                        $location.path("/type");
                    }
                } else {
                    count--;
                    if (count === 0) {
                        $scope.form = true;
                    }
                    console.log(count);
                    alert("user name or password is not valid \n you have " + count + " tries left");
                };
            });
        };
    };
}]);