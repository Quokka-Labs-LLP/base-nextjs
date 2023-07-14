import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

import type { RootState } from './redux/store/store'
import type { MethodType } from './types'

export const apiRoot = 'https://jsonplaceholder.typicode.com/'
// export const apiRoot = process.env.NEXT_APP_API_ROOT

export const baseQuery = fetchBaseQuery({
  baseUrl: apiRoot,
  prepareHeaders: (headers: any, { getState }: any) => {
    const token: any = (getState() as RootState).authSlice.userToken
    // if (token) {
    //   headers.set('AuthorizationToken', token)
    // }
    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
): any => {
  const result: any = await baseQuery(args, api, extraOptions)

  if (result?.error?.data) {
    const responseCode: any = result.error.data
    // if (responseCode.code === 509) {
    //   api.dispatch(logoutAction(''))
    // }
  }
  return result
}

export const baseQueryWithRetryAndReAuth = retry(baseQueryWithReauth, {
  maxRetries: 0,
})

export function FETCH(
  method: MethodType,
  url: string,
  authToken: string | null,
  body: object | null,
  customHeaders: object = {},
  isFullUrl = false,
) {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(authToken ? { Authorization: `${authToken}` } : {}),
      ...customHeaders,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  }

  return fetch(isFullUrl ? `${url}` : `${apiRoot}${url}`, config).then((res: any) => res.json())
}
