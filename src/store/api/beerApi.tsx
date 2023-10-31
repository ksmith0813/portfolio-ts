import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type BeerResponse = {
  id: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  type: string
}

export const beerApi = createApi({
  reducerPath: 'beerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openbrewerydb.org/' }),
  endpoints: (builder) => ({
    getBeer: builder.query<BeerResponse[], void>({
      query: () => {
        return { url: '/breweries', params: { per_page: '100 ' } }
      },
    }),
  }),
})

export const { useGetBeerQuery } = beerApi
