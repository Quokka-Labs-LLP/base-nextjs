import React from 'react'

import { useAppDispatch, useAppSelector } from './hooks/redux'
import { decrement, increment } from './redux/counter'
import { RootState } from './redux'
import './App.css'

export default function App(): JSX.Element {
  const counterState = useAppSelector((state: RootState) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div className='container'>
      <div className='box'>
        <h1 className='heading'>Create React App example with Typescript</h1>
        <p className='paragraph'>
          <b>Featues: </b>
        </p>
        <p className='features'>
          <p>
            <b>React:</b> v18.1.0
          </p>
          <p>
            <b>Typescript:</b> v4.7.3
          </p>
          <p>
            <b>Redux Toolkit:</b> v1.8.2
          </p>
          <p>
            <b>Prettier:</b> v2.7.0
          </p>
        </p>

        <h1 className='heading'>Redux Example with Redux Toolkit</h1>
        <div style={{ display: 'flex', maxWidth: 'fit-content', margin: '10px auto' }}>
          <button style={{ margin: '0 8px' }} onClick={() => dispatch(increment(counterState))}>
            Add
          </button>
          <p style={{ margin: 0 }}>Counter: {counterState.value}</p>
          <button style={{ margin: '0 8px' }} onClick={() => dispatch(decrement(counterState))}>
            Subtract
          </button>
        </div>

        <p className='paragraph'>Open up your devtools and click on Redux tab to see the updates.</p>
      </div>
    </div>
  )
}
