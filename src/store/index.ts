import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import logger from "redux-logger";
import jobsReducer from "./jobsSlice";
import categoresReducer from "./categoresSlice";

const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        categores: categoresReducer,
    },
    devTools: true,
    middleware: (getDeafaultMiddlware) => getDeafaultMiddlware().concat(logger),
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;