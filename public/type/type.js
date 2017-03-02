angular.module("MyApp")

.controller("TypeController", ["$scope", "PartyService", "$routeParams", function ($scope, PartyService, $routeParams) {

    $scope.user = PartyService.activeUser;
    $scope.parties = [];
    $scope.goingBtn = false;
    

    if ($scope.user.length > 0) {
        $scope.userId = $scope.user[0]._id;
        $scope.loggedIn = true;
    } else {
        $scope.userId = "";
        $scope.loggedIn = false;
    }

    $scope.post = {
        personPosting: $scope.userId,
        typeOfParty: "Other",
        alcohol: false,
        admission: false
    };
    $scope.partyInput = false;

    console.log($scope.user);

    $scope.addParty = function (post) {
        console.log(post);
        PartyService.addPartyInfo(post).then(function (response) {
            console.log(response)
            $scope.parties.push(response);
        })
    };
    
    $scope.going = function (party, user, index) {
        if (user.length > 0) {
            PartyService.editPartyInfo(party, $scope.userId).then(function (response) {
                console.log(response);
            })
        } else {
            $scope.goingBtn = true;
        }
    };

    PartyService.getUsers().then(function (response) {
        console.log(response.data); 
        console.log($scope.parties);
        if ($scope.parties.personPosting === response.data){
            
        }
    })

    PartyService.getParty().then(function (response) {
        $scope.parties = response;
        response.forEach(function(data){
            console.log(data);
            if(data.personPosting === $scope.userId){
                console.log("we have matches")
                console.log($scope.user[0].username);
                $scope.parties.push($scope.user[0].firstName) ;
                console.log($scope.parties);
                
                
            }
        })
        console.log(response);
    });

    //    PartyService.getInfo().then(function (response) {
    //        $scope.name = response.data
    ////        console.log($scope.name);
    //    })
}])