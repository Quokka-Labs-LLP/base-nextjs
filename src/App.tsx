import React from 'react'
import './App.css'

export default function App(): JSX.Element {
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
            <b>Prettier:</b> v2.7.0
          </p>
        </p>
      </div>
    </div>
  )
}
