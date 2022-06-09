import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithRetry, apiRoot } from '../../globals'
import { LoginResponse, LoginRequest } from './types'

export default createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Auth'],
  endpoints: build => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials: LoginRequest) => ({
        url: `${apiRoot}/login`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})
