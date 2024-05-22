import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productName: "dell xps 13",
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;