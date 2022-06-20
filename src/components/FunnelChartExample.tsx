import React from 'react'

import { FunnelChart } from './charts'

export default function FunnelChartExample(): JSX.Element {
  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Funnel Chart</h1>
      <FunnelChart
        labelColor={{
          from: 'color',
          modifiers: [['darker', 3]],
        }}
      />
    </div>
  )
}
