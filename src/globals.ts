import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers'
import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query'

import { RootState } from './redux'

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
