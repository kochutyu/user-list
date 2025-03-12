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
        case EStore.ADD_USER:
            const updatedUsers: IUser[] = [...state.users, action.payload as IUser];
            updateUsersStorage(updatedUsers);
            return {users: updatedUsers};

        case EStore.DELETE_USER:
            const filteredUsers: IUser[] = state.users.filter(user => user.id !== (action.payload as number));
            updateUsersStorage(filteredUsers);
            return {users: filteredUsers};

        case EStore.LOAD_USERS:
            return {users: action.payload as IUser[]};

        default:
            return state;
    }
};
