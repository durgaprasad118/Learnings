import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

export const counterSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSLice.actions;
export default counterSLice.reducer;
