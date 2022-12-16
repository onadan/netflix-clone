import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../features/user/userSlice";
import { tmdbApi } from "../services/tmdb";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

setupListeners(store.dispatch)
