import React, { useState } from 'react'

import { NodeObject } from '../charts/ForceGraph3D'
import { CSS2DObject, CSS2DRenderer } from '../charts/renderer'
import { ForceGraph3D } from '../index'
import genRandomTree from './data'

let leftPosOfInfinityTooltip = 0
let rightPosOfInfinityTooltip = 0
let topPosOfinfinityTooltip = 0

export default function ForceGraph3DExample(): JSX.Element {
  const [state, setState] = useState({
    data: genRandomTree(),
  })

  return (
    <>
      <div
        style={{ padding: '10px' }}
        onMouseMove={(ev: any) => {
          // const leftPosWrtToWindow = ev.pageX
          const topPosWrtToWindow = ev.pageY
          // eslint-disable-next-line
          // @ts-ignore
          const windowHeight = window.innerHeight
          const leftPosWrtToInfinityGraph = ev.pageX - ev.target.offsetLeft
          const rightPosWrtToInfinityGraph = Math.trunc(ev.target.clientWidth) - leftPosWrtToInfinityGraph
          const topPosWrtToInfinityGraph = topPosWrtToWindow - ev.target.offsetTop

          if (rightPosWrtToInfinityGraph > 200)
            leftPosOfInfinityTooltip = leftPosWrtToInfinityGraph < 200 ? 3 : leftPosWrtToInfinityGraph - 200
          else rightPosOfInfinityTooltip = 3

          if (windowHeight - topPosWrtToInfinityGraph < 253) topPosOfinfinityTooltip = topPosWrtToInfinityGraph - 250
          else topPosOfinfinityTooltip = topPosWrtToInfinityGraph
        }}
      >
        {/*<h1 style={{ textAlign: 'center', fontWeight: 400 }}>Force Graph 3d with HTML Content</h1>*/}
        <ForceGraph3D
          width={580}
          height={400}
          extraRenderers={[new CSS2DRenderer()]}
          graphData={state.data}
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
          tooltip={<p className='force_graph_3d_node_label_tooltip'>Tooltip content</p>}
          nodeAutoColorBy='group'
          onNodeHover={(node: NodeObject | null, previousNode: NodeObject | null) => {
            const tooltip = document.querySelector('.tooltip') as any
            // eslint-disable-next-line
            // @ts-ignore
            window.openMenu = function () {
              // eslint-disable-next-line
              // @ts-ignore
              document.querySelector('.mindMapTooltipMenu').style.display = 'block'
            }
            // eslint-disable-next-line
            // @ts-ignore
            window.addNode = function (parentNode: any) {
              const node = {
                id: Math.round(Math.random() * 1000),
                desc: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
                name: 'Ford ' + Math.round(Math.random() * 1000),
                color: Math.floor(Math.random() * 16777215).toString(16),
              }
              // eslint-disable-next-line
              // @ts-ignore
              setState({
                ...state,
                // counter: ++state.counter,
                data: {
                  ...state.data,
                  nodes: [...state.data.nodes, node],
                  links: [
                    ...state.data.links,
                    {
                      source: parentNode,
                      target: node,
                    },
                  ],
                },
              })
            }
            tooltip.innerHTML = `
            <div class="mindMapTooltipContainer">
              <div class="mindMapTooltipContainerHeader">
                  <b>${node?.name}</b>
                  <div class="threeDot2" onClick="openMenu()" style="cursor:pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                  </div>
                  <div class="mindMapTooltipMenu" style="display:none;">
                    <button onClick='addNode(${JSON.stringify(node)})'>Add</button>
                    <button onClick='editNode(${JSON.stringify(node)})'>Edit</button>
                    <button onClick='deleteNode(${JSON.stringify(node)})'}>Delete</button>
                  </div>
              </div>
              <div class="mindMapTooltipContainerBody">
                  <p>${node?.desc}</p>
              </div>
            </div>
            `
            tooltip.style.display = 'none'
            if (node) {
              tooltip.style.display = 'block'
              tooltip.style.position = 'absolute'
              tooltip.style.top = `${topPosOfinfinityTooltip}px`
              tooltip.style.left = `${leftPosOfInfinityTooltip}px`
            } else if (previousNode) {
              tooltip.style.top = '-200px'
              tooltip.innerHTML = ``
            }
          }}
        />
      </div>
    </>
  )
}
