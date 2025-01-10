import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import customersReducer from "./slices/customersSlice";
import ordersReducer from "./slices/ordersSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    orders: ordersReducer,
  },
});

export default store;
