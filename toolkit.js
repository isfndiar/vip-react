// import toolkit from "@reduxjs/toolkit";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

// Reducer

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// configureStore
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("oncreate : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("cart change : ", store.getState());
});
// Dispathc
store.dispatch(addToCart({ id: 1, qty: 21331 }));
store.dispatch(addToCart({ id: 2, qty: 2 }));
store.dispatch(login());
