const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "../features/Auth/authSlice";
import { apiSlice } from "../service/api/apiSlice";

export const store = configureStore({
  reducer: {
    user: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
