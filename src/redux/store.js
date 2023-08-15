import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice";

// import productReducer from "./slice/productSlice";
// import filterReducer from "./slice/filterSlice";
// import checkoutReducer from "./slice/checkoutSlice";
// import orderReducer from "./slice/orderSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  // product: productReducer,
  // filter: filterReducer,

  // checkout: checkoutReducer,
  // orders: orderReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
