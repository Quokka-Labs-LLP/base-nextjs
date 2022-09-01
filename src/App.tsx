import React from 'react'

import ArrowKeyStepperExample from './components/ArrowKeyStepperExample'
import AutoSizeExample from './components/AutoSizeExample'
import CellMeasurer from './components/CellMeasurer'
import InfiniteLoaderExample from './components/InfiniteLoader'
import MasonryExample from './components/MasonryExample'
import './App.css'

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1440px', margin: '10px auto 100px' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to React v18 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v18.1.0</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.7.3</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '49% 49%',
          gridColumnGap: '20px',
          gridRowGap: '40px',
          marginBottom: '20px',
          marginTop: '40px',
        }}
      >
        <ArrowKeyStepperExample />
        <AutoSizeExample />
        <CellMeasurer />
        <InfiniteLoaderExample />
        <MasonryExample />
      </div>
    </div>
  )
}
