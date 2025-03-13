import {IControllerConstructor, Injectable} from "angular";

import {state$} from "../app";
import {IAppState} from "@interfaces/state.interface";
import {Subscription} from "rxjs";
import {IUserCreate} from "@interfaces/user.interface";
import {IStoreAction} from "@interfaces/store.interface";
import {addUser} from "@store/actions";
import {dispatch} from "@store/store";

export const UserViewController: Injectable<IControllerConstructor> = [
    "$scope",
    function ($scope): void {
        console.log("✅ ViewController initialized");

        $scope.addUser = (): void => {
            const addUserAction: IStoreAction<IUserCreate> = addUser({
                id: Date.now(),
                username: "testuser",
                first_name: "John",
                last_name: "Doe",
                email: "johndoe@example.com",
                user_type: "Admin",
                password: "password123",
                repeatPassword: "password123",
            });
            // console.log(addUserAction)
            dispatch(addUserAction);
        };

        const subscription: Subscription = state$.subscribe((state: IAppState) => {
            $scope.$evalAsync(() => {
                $scope.users = state.users;
            });
        });

        $scope.$on("$destroy", function () {
            subscription.unsubscribe();
        });
    }
];