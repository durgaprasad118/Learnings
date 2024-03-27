import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    allProducts: (state, action) => {
      state.products.push(...action.payload);
    },
  },
});

export const { allProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
