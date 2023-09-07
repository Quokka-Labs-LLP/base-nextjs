/* eslint-disable */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
  open: boolean
}

const initialState = {
  open: false,
} as CounterState

export const drawer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    reset: () => initialState,
    handleDrawerOpen: (state) => {
      state.open = true
    },
    handleDrawerClose: (state) => {
      state.open = false
    },
  },
})

export const { handleDrawerOpen,handleDrawerClose } = drawer.actions
export default drawer.reducer
