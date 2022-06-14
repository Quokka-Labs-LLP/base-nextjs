import { createSlice, Slice } from '@reduxjs/toolkit'

import { AuthState } from './types'

// Define the initial state using that type
const initialState: AuthState = {
  token: null,
  user: null,
}

export const slice: Slice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state = payload
      return state
    },
    logout: () => initialState,
    renewToken: (state, action) => {
      state = action.payload
      return state
    },
  },
  // Another use case to update the redux store. These
  // reducers will not have actions generated in slice.actions.
  // For e.g., you want to update the redux store based on another
  // action.
  extraReducers: () => {
    // eslint-disable-line
    // builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state: AuthState, { payload }) => {
    //   state.token = payload.token
    //   state.user = {
    //     id: 1,
    //     name: 'User Name',
    //     email: 'your_username@company.com',
    //   }
    // })
  },
})

const { actions, reducer } = slice
export const { login, logout, renewToken } = actions

export default reducer
