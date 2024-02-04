// import { createSlice } from "@reduxjs/toolkit";

// const OrderAddFunction = createSlice({
//   name: "orderlist",
//   initialState: {
//     order: [],
//     updatedTotalQuantity: [],
//     updatedTotalPrice: [],

//   },

//   reducers: {
//     addToCart: (state, action) => {
//         state.order.push({...action.payload})
//     },
//     updateQuantity: (state , action)=>{
//       state.updatedTotalQuantity.push({...action.payload});
//     },
//     updatedPrice: (state , action)=> {
//       state.updatedTotalPrice.push({...action.payload})
//     }

//   },
// });

// export const orderReducer = OrderAddFunction.reducer;
// export const { addToCart , updateQuantity , updatedPrice } = OrderAddFunction.actions;

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderlist",
  initialState: {
    order: [],
    totalQuantity: [],
    totalPrice: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.order.push({ ...action.payload });
    },
  },
});

export const { addToCart, updateQuantity, updatedPrice } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
