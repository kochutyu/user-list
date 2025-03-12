import {IControllerConstructor, Injectable} from "angular";

import {dispatch, store} from "@store/store";
import {addUser, deleteUser} from "@store/actions";

import {IStoreAction} from "@interfaces/store.interface";
import {IUserCreate} from "@interfaces/user.interface";

export const UserController: Injectable<IControllerConstructor> = [
    "$scope",
    "$rootScope",
    function ($scope, $rootScope) {
        $scope.state = store.getState();

        $scope.addUser = (body: IUserCreate): void => {
            const addUserAction: IStoreAction<IUserCreate> = addUser(body);
            dispatch(addUserAction);
        };

        $scope.deleteUser = (id: number): void => {
            const deleteUserAction: IStoreAction<number> = deleteUser(id);
            dispatch(deleteUserAction);
        };
    }
];