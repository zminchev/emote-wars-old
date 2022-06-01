import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Timer, { TimerStatus } from "../../components/Work/Timer/Timer";
import type { RootState } from "../index";

interface Status {
  status: TimerStatus.STARTED | TimerStatus.STOPPED;
}

const initialState = {
  status: TimerStatus.STOPPED,
};

export const timerSlice = createSlice({
  name: "timerStatus",
  initialState,
  reducers: {
    setTimerStatus: (state: any, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});
export const { setTimerStatus } = timerSlice.actions;

export default timerSlice.reducer;
