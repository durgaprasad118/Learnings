import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductsSlice from "./ProductsSlice";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductsSlice,
  },
});
