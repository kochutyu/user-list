import {IControllerConstructor, Injectable} from "angular";

import {ERole} from "@enums/role.enum";
import {dispatch} from "@store/store";
import {closeCreateUserDialog} from "@store/actions";
import {Subscription} from "rxjs";
import {state$} from "../app";
import {IAppState} from "@interfaces/state.interface";

export const UserFormController: Injectable<IControllerConstructor> = [
    "$scope",
    function ($scope, $rootScope) {
        $scope.selectedRole = "";

        $scope.user = {
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            user_type: "",
            password: "",
            repeatPassword: "",
        };

        $scope.closeCreateUserDialog = (): void => {
            dispatch(closeCreateUserDialog());
        };

        $scope.onRoleChange = (role: ERole): void => {
            console.log("🟢 Selected Role:", role);
        };

        $scope.submitForm = (userForm: any): void => {
            if (userForm.$valid && $scope.user.password === $scope.user.repeatPassword) {
                console.log("🟢 User Created:", $scope.user);
                alert("User successfully created!");

                // Очистити форму після сабміту
                $scope.user = {
                    username: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    user_type: "Admin",
                    password: "",
                    repeatPassword: "",
                };
                userForm.$setPristine();
                userForm.$setUntouched();
            } else {
                console.log("🔴 Form is invalid");
            }
        };

        const subscription: Subscription = state$.subscribe((state: IAppState) => {
            $scope.$evalAsync(() => {
                $scope.isOpenedCreateUserDialog = state.isOpenedCreateUserDialog;
            });
        });

        $scope.$on("$destroy", function () {
            subscription.unsubscribe();
        });
    }
];