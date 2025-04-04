import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import registerReducer from './slices/registerSlice'
import weatherReducer from './slices/weatherSlice'
import { userApi } from './api/userApi'
import { weatherApi } from './api/weatherApi'
import { dogApi } from './api/dogApi'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['register', 'weather'],
}

const reducers = combineReducers({ register: registerReducer, weather: weatherReducer })

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: {
    persistedReducer,
    [userApi.reducerPath]: userApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userApi.middleware)
      .concat(weatherApi.middleware)
      .concat(dogApi.middleware),
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
