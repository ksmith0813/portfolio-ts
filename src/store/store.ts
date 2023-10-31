import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './slices/registerSlice'
import { userApi } from './api/userApi'
import { beerApi } from './api/beerApi'

export const store = configureStore({
  reducer: {
    register: registerReducer,
    [userApi.reducerPath]: userApi.reducer,
    [beerApi.reducerPath]: beerApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beerApi.middleware).concat(userApi.middleware),
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
