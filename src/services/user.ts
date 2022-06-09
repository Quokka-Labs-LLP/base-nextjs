import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithRetry } from '../globals'

export interface User {
  id: number,
  name: string,
  email: string,
}

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithRetry,
  refetchOnFocus: true,
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string; user: User }, unknown>({
      query: (credentials: unknown) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      // transformResponse: (response: { data: Post }, meta, arg) => response.data,
    }),
    getUsers: builder.query<User[], string>({
      query: () => `/users`,
    }),
  }),
})

export const { useGetUsersQuery, useLoginMutation } = userApi
export const { endpoints: { login } } = userApi
