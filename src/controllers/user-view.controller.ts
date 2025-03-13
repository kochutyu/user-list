import {IControllerConstructor, Injectable} from "angular";

import {state$} from "../app";
import {IAppState} from "@interfaces/state.interface";
import {Subscription} from "rxjs";
import {openCreateUserDialog} from "@store/actions";
import {dispatch} from "@store/store";

export const UserViewController: Injectable<IControllerConstructor> = [
    "$scope",
    function ($scope): void {
        console.log("✅ ViewController initialized");

        $scope.addUser = (): void => {
            dispatch(openCreateUserDialog());
            // const addUserAction: IStoreAction<IUserCreate> = addUser({
            //     id: Date.now(),
            //     username: "testuser",
            //     first_name: "John",
            //     last_name: "Doe",
            //     email: "johndoe@example.com",
            //     user_type: "Admin",
            //     password: "password123",
            //     repeatPassword: "password123",
            // });
            // // console.log(addUserAction)
            // dispatch(addUserAction);
        };

        const subscription: Subscription = state$.subscribe((state: IAppState) => {
            $scope.$evalAsync(() => {
                $scope.users = state.users;
                $scope.isOpenedCreateUserDialog = state.isOpenedCreateUserDialog;
            });
        });

        $scope.$on("$destroy", function () {
            subscription.unsubscribe();
        });
    }
];