import React from 'react'

import { SwarmPlot } from './charts'

export default function SwarmPlotExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>SwarmPlot</h1>
        <SwarmPlot />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>SwampPlot using annotations</h1>
        <SwarmPlot
          useMesh={true}
          annotations={[
            {
              type: 'circle',
              match: { index: 40 },
              noteX: 40,
              noteY: 40,
              offset: 4,
              note: 'Node at index: 40',
            },
            {
              type: 'rect',
              match: { index: 80 },
              noteX: -40,
              noteY: -40,
              offset: 4,
              note: 'Node at index: 80',
            },
            {
              type: 'dot',
              match: { index: 120 },
              noteX: 0,
              noteY: { abs: -20 },
              size: 6,
              note: 'Node at index: 120',
            },
          ]}
        />
      </div>
    </>
  )
}
