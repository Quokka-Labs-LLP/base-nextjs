import React from 'react'

import { NodeObject } from '../charts/ForceGraph3D'
import { CSS2DObject, CSS2DRenderer } from '../charts/renderer'
import { ForceGraph3D } from '../index'
import genRandomTree from './data'

export default function ForceGraph3DExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Force Graph 3d with HTML Content</h1>
        <ForceGraph3D
          width={580}
          height={400}
          extraRenderers={[new CSS2DRenderer()]}
          graphData={genRandomTree()}
          backgroundColor='#eee'
          linkColor='#000'
          linkOpacity={1}
          linkWidth={1}
          nodeOpacity={1}
          nodeColor={(node: NodeObject) => node.color}
          nodeThreeObject={(node: NodeObject) => {
            const nodeEl = document.createElement('div')
            nodeEl.textContent = node.name
            nodeEl.style.color = node.color
            nodeEl.className = 'node-label'
            return new CSS2DObject(nodeEl)
          }}
          nodeThreeObjectExtend={true}
        />
      </div>
    </>
  )
}
