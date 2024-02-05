import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderlist",
  initialState: {
    order: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.order.push({ ...action.payload });
    },
  },
});

export const { addToCart } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
