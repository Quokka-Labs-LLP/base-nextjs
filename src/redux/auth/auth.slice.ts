import { createSlice, Slice } from '@reduxjs/toolkit'

import { api as authApi } from './auth.api'
import { AuthState } from './types'

const initialState: AuthState = {
  user: null,
  token: null,
}

const slice: Slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (): AuthState => initialState,
    login: state => state,
    renewToken: (state, action) => {
      console.log(state, action)
      state = action.payload
      return action.payload
    },
  },
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state: AuthState, { payload }) => {
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
