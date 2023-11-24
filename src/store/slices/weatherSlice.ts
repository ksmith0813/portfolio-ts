import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

const initialState = {
  search: '',
  weather: null,
  loading: false,
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
      state.weather = null
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setWeather: (state, action: PayloadAction<any>) => {
      state.weather = action.payload
    },
  },
})

export const { setSearch, setWeather, setLoading } = weatherSlice.actions

export const weatherSelector = (state: RootState) => state.persistedReducer.weather

export default weatherSlice.reducer
