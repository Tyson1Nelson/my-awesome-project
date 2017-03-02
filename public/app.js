angular.module("MyApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "HomeController"
        })
        .when("/type", {
            templateUrl: "type/type.html",
            controller: "TypeController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);

