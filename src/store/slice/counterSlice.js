import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "product",
  initialState: {
    count: 11,
  },
  reducers: {
    incrementCount: (state, actions) => {
      state.count = state.count + 1;
    },

    decrementCount: (state, actions) => {
      state.count = state.count - 1;
    },
    resetCountToZero: (state, actions) => {
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementCount, decrementCount, resetCountToZero } =
  counterSlice.actions;

export default counterSlice.reducer;
