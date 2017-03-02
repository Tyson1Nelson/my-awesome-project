angular.module("MyApp")

.controller("HomeController", ["$scope", "PartyService", "$routeParams", "$location", function ($scope, PartyService, $routeParams, $location) {
    $scope.form = false;
    var count = 3;
    //    PartyService.getUser().then(function(response) {
    //        console.log(response.data);
    //    })
    $scope.getUser = function (user) {
        if (user === undefined) {
            alert("Nothing in the input fields");
        } else {
            PartyService.getUser(user).then(function () {
                console.log(PartyService.activeUser.length > 0);
                console.log(PartyService.activeUser)

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
                    alert("user name or password not valid");
                }
            })
        }
    }


    //    console.log($scope.name);
}]);