import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";
import { useEffect } from "react";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// store
store.subscribe(() => {
  console.log("change cart : ", store.getState());
});

export default store;
