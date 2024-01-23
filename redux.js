import { createStore } from "redux";

// Reducer
const cartReducer = (
  state = {
    cart: [],
    login: false,
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "ADD_TO_NUMBER":
      return { ...state, login: action.isTrue };
    default:
      return state;
  }
};

// store
const store = createStore(cartReducer);
console.log("create store", store.getState());
// subscribe
store.subscribe(() => {
  console.log("Cart change : ", store.getState());
});
// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
const action2 = { type: "ADD_TO_NUMBER", isTrue: true };
store.dispatch(action2);
