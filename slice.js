import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

// store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("oncreate : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("cart change : ", store.getState());
});

// Dispathc
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 2 }));
store.dispatch(cartSlice.actions.addToCart({ id: 10, qty: 20 }));
