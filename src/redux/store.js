import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/redux/features/cart";
import { logger } from "@/redux/middleware/logger";
import { movieApi } from "@/redux/services/movieApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware, logger]),
  devTools: process.env.NODE_ENV !== "production",
});

// export const store = configureStore({
//   reducer: {
//     [movieApi.reducerPath]: movieApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat([movieApi.middleware]),
//   devTools: process.env.NODE_ENV !== "production",
// });
