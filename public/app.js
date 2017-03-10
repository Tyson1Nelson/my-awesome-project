angular.module("MyApp", ["ngRoute", "MyApp.Auth"])

.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html",
//            controller: "HomeController"
        })
        .when("/type", {
            templateUrl: "type/type.html",
            controller: "TypeController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);

