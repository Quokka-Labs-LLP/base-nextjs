import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { fetchBaseQuery, FetchArgs, retry, BaseQueryFn } from '@reduxjs/toolkit/query/react'

import { RootState } from './redux'
import { logout, renewToken } from './redux/auth'

export const apiRoot = process.env.REACT_APP_API_ROOT

/**
 * fetchBaseQuery
 *
 * This is a very small wrapper around fetch that aims to simplify requests. It is
 * not a full-blown replacement for axios, superagent, or any other more heavy-weight
 * library, but it will cover the large majority of your needs.
 *
 * Create our baseQuery instance in order to handle RESTFul apis.
 */
const baseQuery = fetchBaseQuery({
  baseUrl: apiRoot,
  // eslint-disable-next-line
  prepareHeaders: (headers: any, { getState }: { getState: any }) => {
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
  // eslint-disable-next-line
  args: any,
  // eslint-disable-next-line
  api: any,
  // eslint-disable-next-line
  extraOptions: any,
) => {
  const result = await baseQuery(args, api, extraOptions)

  // If api returns 401 error code we can call `/refreshToken` for re-authentication
  // and update the token into redux store.
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(`${apiRoot}/refreshToken`, api, extraOptions)
    const { auth } = api.getState() as RootState
    refreshResult?.data ? api.dispatch(renewToken({ ...auth, token: 'RENEW_TOKEN' })) : api.dispatch(logout(auth))
  }

  return result
}

/**
 * Wrap the baseQuery with `retry` method for retying the api calls if it fails.
 */
export const baseQueryWithRetryAndReAuth = retry(baseQueryWithReauth, { maxRetries: 3 })
