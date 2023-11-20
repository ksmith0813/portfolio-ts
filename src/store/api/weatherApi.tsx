import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
  endpoints: (builder) => ({
    getWeather: builder.query<any, any>({
      query: (args) => {
        const { search, key } = args
        return { url: '/forecast.json', params: { q: search, key: key } }
      },
    }),
  }),
})

export const { useGetWeatherQuery } = weatherApi
