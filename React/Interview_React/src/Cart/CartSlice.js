import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const newItem = action.payload;
      const ItemIndex = state.cart.findIndex((x) => x?.Item?.id === newItem.id);
      if (ItemIndex === -1) {
        state.cart.push({
          Item: { ...newItem },
          qty: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((x) => x.Item.id !== id);
    },
    plus: (state, action) => {
      const id = action.payload;
      const ItemIndex = state.cart.findIndex((x) => x?.Item?.id === id);
      state.cart[ItemIndex].qty += 1;
    },
    minus: (state, action) => {
      const id = action.payload;
      const ItemIndex = state.cart.findIndex((x) => x?.Item?.id === id);
      if (state.cart[ItemIndex].qty >= 1) {
        state.cart[ItemIndex].qty -= 1;
      }

      if (state.cart[ItemIndex].qty == 0) {
        state.cart = state.cart.filter((x) => x.Item.id !== id);
      }
    },
  },
});

export const { addtoCart, removeFromCart, plus, minus } = cartSlice.actions;
export default cartSlice.reducer;
