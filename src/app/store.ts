import { configureStore } from "@reduxjs/toolkit";

import timerReducer from "./features/timerSlice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
