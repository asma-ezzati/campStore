import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../reducer/productsApi";
import cartReducer from "../reducer/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
