import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type UserProps = {
  id: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  type: string
}

export type UserResponse = {
  results: UserProps[]
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => {
        return { url: '/api', params: { results: '200 ' } }
      },
    }),
  }),
})

export const { useGetUsersQuery } = userApi
