import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
    reset: (state, action) => {
      state.value = 0;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
