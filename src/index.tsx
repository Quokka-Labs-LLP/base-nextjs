import React, { StrictMode } from 'react'
import { render } from 'react-dom'
// eslint-disable-next-line
// @ts-ignore
import { QueryClient, QueryClientProvider } from 'react-query'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
const clientProps = {
  defaultOptions: {
    queries: {
      /**
       * If `false`, failed queries will not retry by default.
       * If `true`, failed queries will retry infinitely., failureCount: num
       * If set to an integer number, e.g. 3, failed queries will retry until the failed query count meets that number.
       * If set to a function `(failureCount, error) => boolean` failed queries will retry until the function returns false.
       */
      retry: false,
      retryDelay: 0,
      networkMode: 'online',
      cacheTime: 0,
      // isDataEqual: (oldData, newData) => boolean
      /**
       * The time in milliseconds after data is considered stale.
       * If set to `Infinity`, the data will never be considered stale.
       */
      staleTime: Infinity,
      /**
       * If set to a number, the query will continuously refetch at this frequency in milliseconds.
       * If set to a function, the function will be executed with the latest data and query to compute a frequency
       * Defaults to `false`.
       */
      refetchInterval: false,
      /**
       * If set to `true`, the query will continue to refetch while their tab/window is in the background.
       * Defaults to `false`.
       */
      refetchIntervalInBackground: false,
      /**
       * If set to `true`, the query will refetch on window focus if the data is stale.
       * If set to `false`, the query will not refetch on window focus.
       * If set to `'always'`, the query will always refetch on window focus.
       * If set to a function, the function will be executed with the latest data and query to compute the value.
       * Defaults to `true`.
       */
      refetchOnWindowFocus: 'always',
      /**
       * If set to `true`, the query will refetch on reconnect if the data is stale.
       * If set to `false`, the query will not refetch on reconnect.
       * If set to `'always'`, the query will always refetch on reconnect.
       * If set to a function, the function will be executed with the latest data and query to compute the value.
       * Defaults to the value of `networkOnline` (`true`)
       */
      refetchOnReconnect: true,
      /**
       * If set to `true`, the query will refetch on mount if the data is stale.
       * If set to `false`, will disable additional instances of a query to trigger background refetches.
       * If set to `'always'`, the query will always refetch on mount.
       * If set to a function, the function will be executed with the latest data and query to compute the value
       * Defaults to `true`.
       */
      refetchOnMount: true,
      /**
       * If set to `false`, the query will not be retried on mount if it contains an error.
       * Defaults to `true`.
       */
      retryOnMount: true,
      /**
       * If set, the component will only re-render if any of the listed properties change.
       * When set to `['data', 'error']`, the component will only re-render when the `data` or `error` properties change.
       * When set to `'all'`, the component will re-render whenever a query is updated.
       * By default, access to properties will be tracked, and the component will only re-render when one of the tracked properties change.
       */
      notifyOnChangeProps: 'all',
      /**
       * This callback will fire any time the query successfully fetches new data or the cache is updated via `setQueryData`.
       */
      // onSuccess: (data: any) => {return},
      /**
       * This callback will fire if the query encounters an error and will be passed the error.
       */
      // onError: (err: any) => {return},
      /**
       * This callback will fire any time the query is either successfully fetched or errors and be passed either the data or error.
       */
      // onSettled: (data: any, error: any) => {return},
      /**
       * Whether errors should be thrown instead of setting the `error` property.
       * If set to `true` or `suspense` is `true`, all errors will be thrown to the error boundary.
       * If set to `false` and `suspense` is `false`, errors are returned as state.
       * If set to a function, it will be passed the error and the query, and it should return a boolean indicating whether to show the error in an error boundary (`true`) or return the error as state (`false`).
       * Defaults to `false`.
       */
      useErrorBoundary: false,
      /**
       * This option can be used to transform or select a part of the data returned by the query function.
       */
      // select: (data: any) => {return},
      /**
       * If set to `true`, the query will suspend when `status === 'loading'`
       * and throw errors when `status === 'error'`.
       * Defaults to `false`.
       */
      suspense: false,
      /**
       * Set this to `true` to keep the previous `data` when fetching based on a new query key.
       * Defaults to `false`.
       */
      keepPreviousData: false,
      /**
       * If set, this value will be used as the placeholder data for this particular query observer while the query is still in the `loading` data and no initialData has been provided.
       */
      // placeholderData: () => {return}
    },
  },
}
const queryClient = new QueryClient()

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
