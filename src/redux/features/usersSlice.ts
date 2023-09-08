/* eslint-disable */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserSliceProps = {
  open: boolean
}

const initialState = {
  open: false,
} as UserSliceProps

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    handleOpen: (state) => {
      state.open = true
    },
    handleClose: () => initialState,
  },
})

export const { handleOpen, handleClose } = userSlice.actions
export default userSlice.reducer
