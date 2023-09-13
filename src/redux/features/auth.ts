/* eslint-disable */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthStateProps = {
  token: string
  isLoggedIn: boolean
  email: string
  fullName: string
}

const initialState = {
  isLoggedIn: false,
  token: '',
  fullName: '',
} as AuthStateProps

export const drawer = createSlice({
  name: 'AuthState',
  initialState,
  reducers: {
    resetUserAuth: () => {
      // window.location.href = '/login'
      return initialState
    },
    setUserAuth: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      state.isLoggedIn = true
      state.token = action.payload.data.token
      state.email = action.payload.data.email
      state.fullName = action.payload.data.fullName
    },
  },
})

export const { setUserAuth, resetUserAuth } = drawer.actions
export default drawer.reducer
