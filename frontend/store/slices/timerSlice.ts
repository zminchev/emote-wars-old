import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimerStatus } from "../../utils/TimerStatus/TimerStatus";

import type { RootState } from "../index";

const initialState = {
  status: TimerStatus.STOPPED,
  secondsRemaining: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimerStatus: (state: any, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setSecondsRemaining: (state: any, action: PayloadAction<number>) => {
      state.secondsRemaining = action.payload;
    },
  },
});
export const { setTimerStatus, setSecondsRemaining } = timerSlice.actions;

export default timerSlice.reducer;
