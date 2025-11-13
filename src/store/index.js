import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../reducer/productsApi";
import cartReducer from "../reducer/cartSlice";

const LOCAL_KEY = "myapp_cart_v1";

const loadCartFromLocalStorage = () => {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return undefined; // undefined => let store use reducer initialState
    return { cart: JSON.parse(raw) };
  } catch (err) {
    console.warn("Couldn't load cart from localStorage:", err);
    return undefined;
  }
};

const saveCartToLocalStorage = (cartState) => {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(cartState));
  } catch (err) {
    console.warn("Couldn't save cart to localStorage:", err);
  }
};

const preloadedState = loadCartFromLocalStorage();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

let previousCart = store.getState().cart;
store.subscribe(() => {
  const currentCart = store.getState().cart;
  // ساده‌سازی: فقط وقتی تغییر واقعی رخ داده ذخیره می‌کنیم
  if (JSON.stringify(currentCart) !== JSON.stringify(previousCart)) {
    saveCartToLocalStorage(currentCart);
    previousCart = currentCart;
  }
});
