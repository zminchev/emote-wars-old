import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import timerSlice from "./slices/timerSlice";

export const store = configureStore({
  reducer: {
    timer: timerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
