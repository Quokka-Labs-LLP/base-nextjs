import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { apiRoot } from '../globals';
import { RootState } from '../redux/store';

export interface User {
  id: number,
  name: string,
  email: string,
};

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: apiRoot,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('authentication', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string; user: User }, any>({
      query: (credentials: any) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUsers: builder.query<User[], string>({
      query: () => `/users`,
    }),
  }),
});

export const { useGetUsersQuery, useLoginMutation } = userApi;
export const { endpoints: { login } } = userApi;

