import React from 'react'

import { Network } from './charts'

export default function HeatMapExample(): JSX.Element {
  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Network</h1>
      <Network />
    </div>
  )
}
