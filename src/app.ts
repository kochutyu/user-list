import angular from "angular";
import "angular-route";

import {Unsubscribe} from "redux";
import {BehaviorSubject} from "rxjs";

import {store} from "@store/store";

import "./styles.css";
import {AppConfig} from "./routing";
import {IAppState} from "@interfaces/state.interface";
import {UserController} from "@controllers/index";
import {UserViewController} from "@controllers/user-view.controller";

export const state$: BehaviorSubject<IAppState> = new BehaviorSubject(store.getState());

/**
 * Run App
 */
console.log("🚀 AngularJS App is starting...");

// Step 1
const app: angular.IModule = angular.module("app", ["ngRoute"]);
console.log("✅ Step 1: AngularJS App created");

// Step 2
app.controller('UserController', UserController);
app.controller('UserViewController', UserViewController);
console.log("✅ Step 2: AngularJS Controllers Configured");

// Step 3
app.config(AppConfig);
console.log("✅ Step 3: AngularJS Routes Configured");

// Step 4
app.run(["$rootScope", initRoot]);
console.log("🟢 Step 4: AngularJS App is running...");

function initRoot($rootScope: any): void {
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
}

export default app;