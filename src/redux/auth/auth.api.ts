import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithRetryAndReAuth, apiRoot } from '../../globals'
import { LoginRequest, LoginResponse } from './types'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithRetryAndReAuth,
  tagTypes: ['Auth'],
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (creds: LoginRequest) => ({
        url: `${apiRoot}/login`,
        method: 'POST',
        body: creds,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = api
