import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionType } from "../../utils/Actions/ActionType";

import type { RootState } from "../index";

const initialState = {
  actionType: ActionType.NONE,
};

export const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    setActionType: (state: any, action: PayloadAction<string>) => {
      state.actionType = action.payload;
    },
  },
});
export const { setActionType } = actionSlice.actions;

export default actionSlice.reducer;
