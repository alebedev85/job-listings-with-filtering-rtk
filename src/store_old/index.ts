import { createStore } from "redux";
import { rootReducer } from './root-reducer';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";


export const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;