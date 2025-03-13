import {IAppState} from "../interfaces";
import {EStorage} from "@enums/storage.enum";

const loadState = (): IAppState => {
    const storedState: string | null = localStorage.getItem(EStorage.STATE);
    return storedState ? JSON.parse(storedState) : {
        users: [],
        isOpenedCreateUserDialog: false
    };
};

export const initialState: IAppState = loadState();
