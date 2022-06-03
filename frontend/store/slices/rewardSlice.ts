import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RewardState = { reward: number[] };

const initialState: RewardState = {
  reward: [],
};

export const rewardSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    //@ts-ignore
    setRewards: (state, action: PayloadAction<number[]>) => {
      state.reward = action.payload;
    },
  },
});
export const { setRewards } = rewardSlice.actions;

export default rewardSlice.reducer;
