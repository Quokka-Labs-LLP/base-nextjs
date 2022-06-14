import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery, apiRoot } from '../../globals'
import { LoginRequest, LoginResponse } from './types'

export const api = createApi({
  reducerPath: 'authApi',
  baseQuery,
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

export const { useLoginMutation } = api
