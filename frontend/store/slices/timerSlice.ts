import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimerStatus } from "../../components/Work/Timer/Timer";
import type { RootState } from "../index";

const initialState = {
  status: TimerStatus,
};

export const timerSlice = createSlice({
  name: "timerStatus",
  initialState,
  reducers: {
    setTimerStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});
export const { setTimerStatus } = timerSlice.actions;
export const selectStatus = (state: RootState) => state.timer.status;

export default timerSlice.reducer;
