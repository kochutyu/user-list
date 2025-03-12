console.log("🚀 AngularJS App is starting...");

import "./styles.css";

import * as angular from "angular";
import "angular-route";

const app = angular.module("app", ["ngRoute"]);

console.log("📌 Module 'userApp' created");

app.config(($routeProvider: angular.route.IRouteProvider) => {
    console.log("✅ AngularJS Routes Configured");

    $routeProvider
        .when("/users", {
            template: "<h2>User List</h2>",
        })
        .otherwise({
            redirectTo: "/users",
        });
});

app.run(($rootScope: any) => {
    console.log("🟢 AngularJS App is running...");
});