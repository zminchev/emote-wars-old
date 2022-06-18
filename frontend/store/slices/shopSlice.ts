import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../models/Item";

type ItemType = {
  item: Item;
};

const initialState: ItemType = {
  item: {
    id: "0",
    name: "",
    image: "",
    itemLevel: 0,
    price: {
      gold: 0,
      wood: 0,
      diamonds: 0,
    },
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    buyItem: (state: any, action: PayloadAction<Item>) => {
      state.item = action.payload;
    },
  },
});
export const { buyItem } = shopSlice.actions;

export default shopSlice.reducer;
