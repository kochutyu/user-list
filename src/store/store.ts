import {applyMiddleware, compose, createStore, Dispatch, Store} from "redux";

import logger from "redux-logger";
import {BehaviorSubject} from "rxjs";

import {reducer} from "@store/reducer";

import type {IStoreAction} from "@interfaces/store.interface";
import {IAppState} from "@interfaces/state.interface";

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(logger))
);

export const storeState$: BehaviorSubject<IAppState> = new BehaviorSubject(store.getState());

export type AppDispatch = Dispatch<IStoreAction<any>>;
export type RootState = IAppState;

export const dispatch: AppDispatch = store.dispatch;
export const state: RootState = store.getState();
