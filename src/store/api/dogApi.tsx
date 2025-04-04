import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type DogResponse = {
  message: string
  status: string
}

export const dogApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/' }),
  endpoints: (builder) => ({
    getDog: builder.query<DogResponse, void>({
      query: () => {
        return { url: '/api/breeds/image/random' }
      },
    }),
  }),
})

export const { useLazyGetDogQuery } = dogApi
