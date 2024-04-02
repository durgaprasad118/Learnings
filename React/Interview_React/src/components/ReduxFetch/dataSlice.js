import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    addAll: (state, action) => {
      state.data = action.payload;
    },
    addPost: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addAll, addPost } = dataSlice.actions;

export default dataSlice.reducer;
