import React from 'react'

import { ForceGraph3D } from '../index'
import genRandomTree from './data'

export default function ForceGraph3DExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Force Graph 3d</h1>
        <ForceGraph3D width={580} height={400} graphData={genRandomTree()} />
      </div>
    </>
  )
}
