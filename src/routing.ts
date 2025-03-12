import angular from "angular";


export const initRouteProvider = ($routeProvider: angular.route.IRouteProvider, $locationProvider: angular.ILocationProvider): void => {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/users", {
            templateUrl: "views/user/users.html",
            controller: "UserController",
        })
        .otherwise({
            redirectTo: "/users",
        });
}

export const AppConfig: any[] = [
    "$routeProvider",
    "$locationProvider",
    initRouteProvider
];