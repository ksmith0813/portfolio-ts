import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import registerReducer from './slices/registerSlice'
import weatherReducer from './slices/weatherSlice'
import { beerApi } from './api/beerApi'
import { userApi } from './api/userApi'
import { weatherApi } from './api/weatherApi'

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
    [beerApi.reducerPath]: beerApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(beerApi.middleware)
      .concat(userApi.middleware)
      .concat(weatherApi.middleware),
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
