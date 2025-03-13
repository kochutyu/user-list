import {IUser, IUserCreate} from "@interfaces/user.interface";
import {IStoreAction} from "@interfaces/store.interface";

import {EStore} from "@enums/store.enum";

export const addUser = (user: IUserCreate): IStoreAction<IUserCreate> => ({
    type: EStore.ADD_USER, payload: user,
});

export const deleteUser = (id: number): IStoreAction<number> => ({
    type: EStore.DELETE_USER, payload: id,
});

export const loadUsers = (users: IUser[]): IStoreAction<IUser[]> => ({
    type: EStore.LOAD_USERS, payload: users,
});

export const openCreateUserDialog = (): IStoreAction<true> => ({
    type: EStore.OPEN_CREATE_USER_DIALOG, payload: true,
});

export const closeCreateUserDialog = (): IStoreAction<false> => ({
    type: EStore.OPEN_CREATE_USER_DIALOG, payload: false,
});