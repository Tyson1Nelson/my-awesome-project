angular.module("MyApp")

.controller("TypeController", ["$scope", "PartyService", "$routeParams", "$location", function ($scope, PartyService, $routeParams, $location) {

    $scope.user = PartyService.activeUser;
    $scope.parties = [];
    $scope.verified = false;

    if ($scope.user.length > 0) {
        $scope.userId = $scope.user[0];
        $scope.loggedIn = true;
    } else {
        $scope.userId = "";
        $scope.loggedIn = false;
        $scope.verified = true;
    }

    $scope.post = {
        personPosting: $scope.userId.firstName,
        typeOfParty: "Other",
        admissionAmount: 0,
        location: {
            state: "UT"
        }
    };

    $scope.comments = function (partyInfo, comments, index) {
        console.log(comments);
        if ($scope.userId !== "" && comments !== undefined) {
            $scope.partyComment = '';
            if (comments.length > 0) {
                partyInfo.comments.push(comments + "\n  - by user " + $scope.userId.username);
                PartyService.addComment(partyInfo, $scope.userId);
            }
        }
    };

    PartyService.getParty().then(function (response) {
        $scope.parties = response;
    });

    $scope.addParty = function (post) {
        console.log(post);
        PartyService.addPartyInfo(post).then(function (response) {
            $scope.parties.push(response.data);
        })
    };

    $scope.signIn = function () {
        $location.path("/home");
    }

}])