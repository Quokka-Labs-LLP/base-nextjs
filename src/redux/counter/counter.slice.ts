import { createSlice, Slice } from '@reduxjs/toolkit'

import { CounterState } from './types'

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const slice: Slice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
      return state
    },
    decrement: state => {
      state.value -= 1
      return state
    },
  },
})

const { actions, reducer } = slice
export const { decrement, increment } = actions

export default reducer
