import {IAppState} from "../interfaces";
import {EStorage} from "@enums/storage.enum";

const loadState = (): IAppState => {
    const storedState: string | null = localStorage.getItem(EStorage.STATE);
    return storedState ? JSON.parse(storedState) : {users: []};
};

export const initialState: IAppState = loadState();
