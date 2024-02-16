import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import counterReducer from "./CounterSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
  },
});
