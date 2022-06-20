import React from 'react'

import { HeatMap } from './charts'

export default function HeatMapExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>HeatMap</h1>
        <HeatMap />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>HeatMap</h1>
        <HeatMap
          valueFormat='>-.2s'
          cellComponent='circle'
          sizeVariation={{
            sizes: [0.6, 1],
          }}
          forceSquare
          enableGridX={true}
          enableGridY={true}
        />
      </div>
    </>
  )
}
