import { createSlice } from '@reduxjs/toolkit'

import api from './api'
import { AuthState } from './types'

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
}

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
      // console.log('fulfilled', action)

      // save the value into redux store.
      state.user = 'User Name'
      state.token = action.payload.access_token
      state.isAuthenticated = true
    })
  },
})
