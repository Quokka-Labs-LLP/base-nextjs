import React from 'react'

import { ScatterPlot } from './charts'

export default function ScatterPlotExample(): JSX.Element {
  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>ScatterPlot</h1>
      <ScatterPlot />
    </div>
  )
}
