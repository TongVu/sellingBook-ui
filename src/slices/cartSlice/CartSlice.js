import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value += action.payload;
      console.log(`in add to cart ${state.value}`);
    },

    removeFromCart: (state, action) => {
      state.value -= action.payload;
      console.log(`in remove from cart ${state.value}`);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
