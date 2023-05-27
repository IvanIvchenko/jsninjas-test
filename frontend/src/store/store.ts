import { configureStore } from "@reduxjs/toolkit";
import { superheroApi } from "./superhero/superhero.api";
import { superheroSlice } from "./superhero/superhero.slice";

export const store = configureStore({
  reducer: {
    [superheroApi.reducerPath]: superheroApi.reducer,
    superhero: superheroSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([superheroApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
