import {initialState} from "@store/state";

import {EStore} from "@enums/store.enum";
import {EStorage} from "@enums/storage.enum";

import type {IAppState} from "@interfaces/state.interface";
import {IStoreAction} from "@interfaces/store.interface";
import {IUser} from "@interfaces/user.interface";

const updateUsersStorage = (users: IUser[]): void => {
    localStorage.setItem(EStorage.STATE, JSON.stringify({users}));
}

export const reducer = <T>(state: IAppState = initialState, action: IStoreAction<any>): IAppState => {
    switch (action.type) {
        // USER
        case EStore.ADD_USER:
            const updatedUsers: IUser[] = [action.payload as IUser, ...state.users];
            updateUsersStorage(updatedUsers);
            return {...state, users: updatedUsers};

        case EStore.DELETE_USER:
            const filteredUsers: IUser[] = state.users.filter(user => user.id !== (action.payload as number));
            updateUsersStorage(filteredUsers);
            return {...state, users: filteredUsers};

        case EStore.LOAD_USERS:
            return {...state, users: action.payload as IUser[]};

        // CREATE NEW USER
        case EStore.OPEN_CREATE_USER_DIALOG:
            return {...state, isOpenedCreateUserDialog: action.payload as true};

        case EStore.CLOSE_CREATE_USER_DIALOG:
            return {...state, isOpenedCreateUserDialog: action.payload as false};

        default:
            return state;
    }
};
