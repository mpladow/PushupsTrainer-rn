import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import settingsReducer from './settingsSlice';
export const store = configureStore({
	reducer: { settingsReducer, characterReducer }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

