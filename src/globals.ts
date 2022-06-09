import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from './redux/store'

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
    return headers
  },
})

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 })
