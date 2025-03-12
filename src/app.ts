import angular from "angular";
import "angular-route";

import {Unsubscribe} from "redux";
import {BehaviorSubject} from "rxjs";

import {store} from "@store/store";

import "./styles.css";

console.log("🚀 AngularJS App is starting...");

const app: angular.IModule = angular.module("app", ["ngRoute"]);

console.log("📌 Module 'app' created");

app.config(["$routeProvider", function ($routeProvider: angular.route.IRouteProvider) {
    console.log("✅ AngularJS Routes Configured");

    $routeProvider
        .when("/users", {
            template: "<h2>User List</h2>",
        })
        .otherwise({
            redirectTo: "/users",
        });
},]);

export const state$ = new BehaviorSubject(store.getState());

app.run(["$rootScope", function ($rootScope: any) {
    console.log("🟢 AngularJS App is running...");

    $rootScope.store = store;

    const unsubscribe: Unsubscribe = store.subscribe(() => {
        state$.next(store.getState());
        $rootScope.$applyAsync(() => {
            $rootScope.state = store.getState();
        });
    });

    $rootScope.$on("$destroy", () => {
        console.log("🔴 Unsubscribing from Redux Store...");
        unsubscribe();
    });

    console.log("📦 Redux Store Initialized:", store.getState());
},]);

export default app;
