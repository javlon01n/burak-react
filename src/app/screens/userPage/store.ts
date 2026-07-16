import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import HomePageReducer from "../homePage/slice";

export const store = configureStore({
    reducer: {
        homePage: HomePageReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type Rootstate = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
 ReturnType, 
 RootState, 
 unknown,
 Action<string>
>;