angular.module("MyApp")

.service("PartyService", ["$http", "$localStorage", function ($http, $localStorage) {

    var self = this;
    var url = "http://localhost:8000";
    var login = "/user/login";
    var party = "/api/party/";
    var user = "/user";
    var date = new Date();

    this.getUser = function() {
        return $localStorage.user;
    }

//    this.getUser = function (person) {
//        return $http.get(url + user).then(function (response) {
//            var dataInfo = response.data;
//            dataInfo.forEach(function (data) {
//                if (data.username === person.username && data.password === person.password) {
//                    self.activeUser.splice(0, 1);
//                    self.activeUser.push(data);
//                    return data.username;
//                } else {
//                    return false;
//                }
//            });
//        })
//    }
    this.getUsers = function () {
        return $http.get(url + user).then(function(response){
            var singleUser = response.data;
            self.filter(singleUser);
        })
    }
    
    this.getParty = function () {
        return $http.get(url + party).then(function (response) {
            console.log(date);
            var party = response.data;
            return party;
        });
    }
    this.filter = function(items){
        items.forEach(function(item){
            return item;
        })
    }

    this.addPartyInfo = function (input) {
        return $http.post(url + party, input)
    }

    this.addComment = function (input, person) {
        return $http.put(url + party + input._id, input);
    };
    this.deletParty = function(){
       return $http.delete(url + party._id)
    }

    this.editInfo = function (input) {
        return $http.get(url + party, input)
    }
}]);