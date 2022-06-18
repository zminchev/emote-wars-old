import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import actionSlice from "./slices/actionSlice";
import rewardSlice from "./slices/rewardSlice";
import shopSlice from "./slices/shopSlice";
import timerSlice from "./slices/timerSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    timer: timerSlice,
    action: actionSlice,
    reward: rewardSlice,
    shop: shopSlice,
    user: userSlice,
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
