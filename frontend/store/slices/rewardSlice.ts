import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../index";

const initialState = {
  reward: [0, 0, 0, 0],
};

export const rewardSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    setRewards: (state: any, action: PayloadAction<number[]>) => {
      state.reward = action.payload;
    },
  },
});
export const { setRewards } = rewardSlice.actions;

export default rewardSlice.reducer;
