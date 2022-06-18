import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Resource } from "../../models/Resource";

const initialState = {
  resources: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setResources: (state: any, action: PayloadAction<Resource[]>) => {
      state.resources = action.payload;
    },
  },
});
export const { setResources } = userSlice.actions;

export default userSlice.reducer;
