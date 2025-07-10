import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist';
import exerciseReducer from './exerciseSlice';
import recordReducer from './recordSlice';
import settingsReducer from './settingsSlice';

export const store = configureStore({
	reducer: { settingsReducer, exerciseReducer, recordReducer },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		}
	})
});
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	timeout: 1000,
	whitelist: ['recordsSlice', 'exercisesSlice'], // reducers to persist
};
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

