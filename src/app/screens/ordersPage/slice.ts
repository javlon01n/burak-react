import { createSlice } from "@reduxjs/toolkit";
import {  OrdersPageState } from "../../../lib/types/screen";


const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const ordersPageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setTFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setTFinishedOrders } =
  ordersPageSlice.actions;

const OrderPageReducer = ordersPageSlice.reducer;
export default OrderPageReducer;