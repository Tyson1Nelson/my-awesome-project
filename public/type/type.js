angular.module("MyApp")

.controller("TypeController", ["$scope", "PartyService", "$routeParams", "$location", function ($scope, PartyService, $routeParams, $location) {

    $scope.parties = [];
    $scope.user = PartyService.getUser();

    $scope.post = {
        personPosting: $scope.user,
        alcohol: false,
        typeOfParty: "Other",
//        admissionAmount: 0,
        location: {
            state: "UT"
        }
    };
    

    $scope.comments = function (party, index) {
        console.log(party.newComment);
        party.comments.push(party.newComment + " - " + $scope.user.firstName + " " + $scope.user.lastName);
        delete party.newComment;
        PartyService.addComment(party, $scope.userId);
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

}]);