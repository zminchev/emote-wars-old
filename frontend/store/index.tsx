import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import actionSlice from "./slices/actionSlice";
import rewardSlice from "./slices/rewardSlice";
import timerSlice from "./slices/timerSlice";

export const store = configureStore({
  reducer: {
    timer: timerSlice,
    action: actionSlice,
    reward: rewardSlice,
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
