import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { fetchBaseQuery, FetchArgs, retry, BaseQueryFn } from '@reduxjs/toolkit/query/react'

import { RootState } from './redux'
import { logout, renewToken } from './redux/auth'

export const apiRoot = process.env.REACT_APP_API_ROOT

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: apiRoot,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    headers.set('Accept', '*/*')
    headers.set('Content-Type', 'application/json')
    return headers
  },
})

// Create our baseQuery instance with Re-Authentication.
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(`${apiRoot}/refreshToken`, api, extraOptions)
    const { auth } = api.getState() as RootState
    refreshResult?.data ? api.dispatch(renewToken({ ...auth, token: 'RENEW_TOKEN' })) : api.dispatch(logout(auth))
  }

  return result
}

export const baseQueryWithRetryAndReAuth = retry(baseQueryWithReauth, { maxRetries: 3 })
