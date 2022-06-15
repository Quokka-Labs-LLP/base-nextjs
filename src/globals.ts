import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers'
import { BaseQueryFn, fetchBaseQuery, retry } from '@reduxjs/toolkit/query'

import { RootState } from './redux'
import { logout, renewToken } from './redux/auth'

export const apiRoot = process.env.REACT_APP_API_ROOT

export type BaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>

export const baseQuery: BaseQuery = fetchBaseQuery({
  baseUrl: apiRoot,
  prepareHeaders: (headers: Headers, { getState }): MaybePromise<Headers> => {
    const token = (getState() as RootState).auth.token

    token && headers.set('Authorization', `Bearer ${token}`)
    headers.set('Accept', '*/*')
    headers.set('Content-Type', 'application/json')

    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(`${apiRoot}/refreshToken`, api, extraOptions)
    const { auth } = api.getState() as RootState
    refreshResult?.data ? api.dispatch(renewToken({ ...auth, token: 'RENEWED TOKEN' })) : api.dispatch(logout(auth))
  }

  return result
}

export const baseQueryWithReauthWithRetry = retry(baseQueryWithReauth, { maxRetries: 3 })
