import { createStore } from "redux";

// Reducer
const cartReducer = (
  state = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

// store
const store = createStore(cartReducer);
console.log("create store", store.getState());
// subscribe

// dispatch
