import React from 'react'

import { NodeObject } from '../charts/ForceGraph3D'
import { ForceGraph3D } from '../index'
import genRandomTree from './data'

export default function ForceGraph3DExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Force Graph 3d with Directional Arrows</h1>
        <ForceGraph3D
          width={580}
          height={400}
          graphData={genRandomTree()}
          backgroundColor='#eee'
          linkColor='#000'
          linkOpacity={1}
          linkWidth={1}
          nodeOpacity={1}
          nodeColor={(node: NodeObject) => node.color}
          linkDirectionalArrowLength={3.5}
          linkDirectionalArrowRelPos={1}
          linkCurvature={0.25}
          linkDirectionalParticles='value'
        />
      </div>
    </>
  )
}
