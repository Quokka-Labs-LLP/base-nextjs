import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers'
import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const apiRoot = process.env.REACT_APP_API_ROOT

export type BaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>

export const baseQuery: BaseQuery = fetchBaseQuery({
  baseUrl: apiRoot,
  prepareHeaders: (headers: Headers): MaybePromise<Headers> => {
    headers.set('Accept', '*/*')
    headers.set('Content-Type', 'application/json')

    return headers
  },
})
