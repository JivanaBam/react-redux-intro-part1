import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./slice/counterSlice";
import productReducer from "./slice/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReduce,
    product: productReducer,
  },
});

export default store;
