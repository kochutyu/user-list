import {IUser} from "@interfaces/user.interface";
import {IStoreAction} from "@interfaces/store.interface";

import {EStore} from "@enums/store.enum";

export const addUser = (user: IUser): IStoreAction<IUser> => ({
    type: EStore.ADD_USER, payload: user,
});

export const removeUser = (id: number): IStoreAction<number> => ({
    type: EStore.REMOVE_USER, payload: id,
});

export const loadUsers = (users: IUser[]): IStoreAction<IUser[]> => ({
    type: EStore.LOAD_USERS, payload: users,
});
