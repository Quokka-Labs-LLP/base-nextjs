import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithRetryAndReAuth, apiRoot } from '../../globals'
import { LoginRequest, LoginResponse } from './types'

/**
 * createApi
 *
 * It is the core of RTK Query's functionality. It allows you to define a set
 * of endpoints describe how to retrieve data from a series of endpoints,
 * including configuration of how to fetch and transform that data. It
 * generates an "API slice" structure that contains Redux logic (and
 * optionally React hooks) that encapsulate the data fetching and caching
 * process for you.
 *
 * Define a service using a base URL and expected endpoints.
 */
export const api = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithRetryAndReAuth,
  tagTypes: ['Auth'],
  // eslint-disable-next-line
  endpoints: (builder: any) => ({
    // eslint-disable-next-line
    // @ts-ignore
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
