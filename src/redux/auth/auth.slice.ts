import { createSlice, Slice } from '@reduxjs/toolkit'

import { api as authApi } from './auth.api'
import { AuthState } from './types'

const initialState: AuthState = {
  user: null,
  token: null,
}

/**
 * createSlice
 *
 * A function that accepts an initial state, an object of reducer functions,
 * and a "slice name", and automatically generates action creators and action
 * types that correspond to the reducers and state.
 *
 * So, here we have created a slice for authentication, and define the
 * necessary reducer functions in order to handle the authentications.
 *
 * extraReducers
 * One of the key concepts of Redux is that each slice reducer "owns"
 * its slice of state, and that many slice reducers can independently
 * respond to the same action type. extraReducers allows createSlice
 * to respond to other action types besides the types it has generated.
 *
 * As case reducers specified with extraReducers are meant to reference
 * "external" actions, they will not have actions generated in
 * slice.actions.
 */
const slice: Slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (): AuthState => initialState,
    login: (state: AuthState) => state,
    // eslint-disable-next-line
    renewToken: (state: AuthState, action: any) => {
      console.log(state, action)
      state = action.payload
      return action.payload
    },
  },
  /**
   * extraReducers
   *
   * One of the key concepts of Redux is that each slice reducer "owns"
   * its slice of state, and that many slice reducers can independently
   * respond to the same action type. extraReducers allows createSlice
   * to respond to other action types besides the types it has generated.
   *
   * As case reducers specified with extraReducers are meant to reference
   * "external" actions, they will not have actions generated in
   * slice.actions.
   */
  // eslint-disable-next-line
  extraReducers: (builder: any) => {
    // eslint-disable-next-line
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state: AuthState, { payload }: { payload: any }) => {
      state.token = payload.token
      state.user = {
        id: 1,
        name: 'User Name',
        email: 'your_username@company.com',
      }
    })
  },
})

const { actions, reducer } = slice
export const { login, logout, renewToken } = actions
export default reducer
