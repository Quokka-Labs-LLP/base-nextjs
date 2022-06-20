import React from 'react'

import { CirclePacking } from './charts'

export default function CirclePackingExample(): JSX.Element {
  const [zoomedId, setZoomedId] = React.useState<string | null>(null)

  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>CirclePacking</h1>
        <CirclePacking />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>CirclePacking with Zoom on click</h1>
        <CirclePacking
          enableLabels
          labelsSkipRadius={16}
          // eslint-disable-next-line
          labelsFilter={(label: any) => label.node.height === 0}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
          }}
          zoomedId={zoomedId}
          motionConfig='slow'
          // eslint-disable-next-line
          onClick={(node: any) => {
            setZoomedId(zoomedId === node.id ? null : node.id)
          }}
        />
      </div>
    </>
  )
}
