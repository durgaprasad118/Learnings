import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    inpt: (state, action) => {
      state.count = action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
export const { increment, decrement, inpt, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
