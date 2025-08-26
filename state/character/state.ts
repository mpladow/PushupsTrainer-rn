import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import exerciseReducer from './exerciseSlice';
import recordReducer from './recordSlice';
import settingsReducer from './settingsSlice';


const rootReducer = combineReducers({
	exercises: exerciseReducer,
	userData: recordReducer,
	settings: settingsReducer,
})
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	timeout: 1000,
	whitelist: ['recordsSlice', 'exercisesSlice', 'dataSlice'], // reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		}
	})
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

