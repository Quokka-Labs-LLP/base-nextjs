import React from 'react'

import { ForceGraph3D } from '../index'
import genRandomTree from './data'

export default function BackgroundColor(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Force Graph 3d with Background Color</h1>
        <ForceGraph3D
          width={580}
          height={400}
          graphData={genRandomTree()}
          backgroundColor='#eee'
          linkColor='#000'
          linkOpacity={1}
          linkWidth={1}
          nodeOpacity={1}
        />
      </div>
    </>
  )
}
