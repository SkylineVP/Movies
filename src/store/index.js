import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { MoviesApi } from "./services/Movies";
import searchReducer from "store/reducers/Search";
export const store = configureStore({
  reducer: {
    [MoviesApi.reducerPath]: MoviesApi.reducer,
    search: searchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(MoviesApi.middleware),
});

setupListeners(store.dispatch);
