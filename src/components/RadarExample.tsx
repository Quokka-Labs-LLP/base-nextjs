import React from 'react'

import { Radar } from './charts'

export default function RadarExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Radar</h1>
        <Radar />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Radar</h1>
        <Radar gridShape='linear' curve='catmullRomClosed' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Radar</h1>
        <Radar curve='catmullRomClosed' dotSize={32} enableDotLabel={true} dotLabelYOffset={3} gridLabelOffset={36} />
      </div>
    </>
  )
}
