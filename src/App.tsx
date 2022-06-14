import React from 'react'

import { useAppDispatch, useAppSelector } from './hooks/redux'
import { decrement, increment } from './redux/counter'
import './App.css'

export default function App(): JSX.Element {
  const counterState = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Welcome to React v18 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v18.1.0</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.7.3</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Redux Toolkit: v1.8.2</p>

      <div style={{ display: 'flex', maxWidth: 'fit-content', margin: '10px auto' }}>
        <button style={{ margin: '0 8px' }} onClick={() => dispatch(increment(counterState))}>
          Add
        </button>
        <p style={{ margin: 0 }}>Counter: {counterState.value}</p>
        <button style={{ margin: '0 8px' }} onClick={() => dispatch(decrement(counterState))}>
          Subtract
        </button>
      </div>
    </>
  )
}
