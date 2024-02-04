import { createSlice } from "@reduxjs/toolkit";

const OrderAddFunction = createSlice({
  name: "orderlist",
  initialState: {
    order: [],
    
  },


  reducers: {
    addToCart: (state, action) => {
        state.order.push({...action.payload})
    },
    
  },
});

export const orderReducer = OrderAddFunction.reducer;
export const { addToCart } = OrderAddFunction.actions;
