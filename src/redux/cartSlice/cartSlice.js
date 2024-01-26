import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart(state, action) {
      const ItemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (ItemInCart) {
        ItemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
    deleteItem(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
