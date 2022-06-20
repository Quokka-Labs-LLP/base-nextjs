import React from 'react'

import { ChordChart } from './charts'

export default function ChordChartExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Chord Chart</h1>
        <ChordChart />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Chord Chart with Radial Labels</h1>
        <ChordChart labelRotation={-90} />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Chord Chart with labels inside arcs</h1>
        <ChordChart
          padAngle={0.02}
          innerRadiusRatio={0.7}
          innerRadiusOffset={0.02}
          labelOffset={-30}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        />
      </div>
    </>
  )
}
