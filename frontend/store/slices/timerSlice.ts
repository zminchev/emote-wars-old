import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimerStatus } from "../../utils/TimerStatus/TimerStatus";

import type { RootState } from "../index";

const initialState = {
  status: TimerStatus.STOPPED,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimerStatus: (state: any, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});
export const { setTimerStatus } = timerSlice.actions;

export default timerSlice.reducer;
