import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import registerReducer from './slices/registerSlice'
import { userApi } from './api/userApi'
import { beerApi } from './api/beerApi'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['register'],
}

const reducers = combineReducers({
  register: registerReducer,
  [userApi.reducerPath]: userApi.reducer,
  [beerApi.reducerPath]: beerApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: {
    persistedReducer,
    [userApi.reducerPath]: userApi.reducer,
    [beerApi.reducerPath]: beerApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(beerApi.middleware)
      .concat(userApi.middleware),
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
