import {Action} from "redux";

export interface IStoreAction<T = any> extends Action<string> {
    payload?: T;
}