angular.module("MyApp")

.service("PartyService", ["$http", function ($http) {

    var self = this;
    var url = "http://localhost:8000";
    var login = "/user/login";
    var party = "/party/";
    var boozer = "/boozer";
    var user = "/user"

    this.activeUser = [];

    //    this.getUser = function (user){
    //        return $http.post(url + login, user).then(function(response){
    //            if(response.status !== 500){
    //                return response.data;
    //            } else {
    //                alert("user name or password not valid");
    //            }
    //        });
    //    }

    this.getUser = function (person) {
        return $http.get(url + user).then(function (response) {
            var dataInfo = response.data;
            dataInfo.forEach(function (data) {
                if (data.username === person.username && data.password === person.password) {
                    self.activeUser.splice(0, 1);
                    self.activeUser.push(data);
                    return data.username;
                } else {
                    return false;
                }
            });
        })
    }
    this.getUsers = function () {
        return $http.get(url + user);
    }

    this.getParty = function () {
        return $http.get(url + party).then(function (response) {
            var party = response.data;
            return party;
        });
    }

    this.addPartyInfo = function (input) {
        return $http.post(url + party, input).then(function (response) {

        })
        console.log(response);
    }

    this.editPartyInfo = function (input, personId) {
        return $http.put(url + party + input._id, {
            peopleGoing: personId
        }).then(function (response) {
            console.log("response");
            if (personId.length > 0) {
                var party = response.data;
                return party;
            } else {
                return false;
            };
        });

    };


    this.editInfo = function (input) {
        return $http.get(url + party, input)
    }
}]);