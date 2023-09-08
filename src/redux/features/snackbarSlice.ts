/* eslint-disable */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SnackbarSliceProps = {
  openSnackbar: boolean
  message: string
  severity: 'error' | 'warning' | 'info' | 'success'
}

const initialState = {
  openSnackbar: false,
  message: 'Message',
  severity: 'success',
} as SnackbarSliceProps

export const snackbar = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    handleSnackbarOpen: (state, action: PayloadAction<any>) => {
      state.openSnackbar = true
      state.message = action.payload.message
      state.severity = action.payload.severity
    },
    handleCloseSnackbar: () => initialState,
  },
})

export const { handleSnackbarOpen, handleCloseSnackbar } = snackbar.actions
export default snackbar.reducer
