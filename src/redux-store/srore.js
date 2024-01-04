import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { bicycleApi } from './bicycle/bicycleApi';

export const store = configureStore({
  reducer: {
    [bicycleApi.reducerPath]: bicycleApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(bicycleApi.middleware),
});

setupListeners(store.dispatch);
