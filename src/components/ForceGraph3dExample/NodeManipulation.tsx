import React, { useState } from 'react'

import { NodeObject } from '../charts/ForceGraph3D'
import { ForceGraph3D } from '../index'
import genRandomTree from './data'

export default function ForceGraph3DExample(): JSX.Element {
  const [data, setData] = useState(genRandomTree())

  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Force Graph 3d with Node Manipulation</h1>
        <ForceGraph3D
          width={580}
          height={400}
          graphData={data}
          backgroundColor='#eee'
          linkColor='#000'
          linkOpacity={1}
          linkWidth={1}
          nodeOpacity={1}
          nodeColor={(node: NodeObject) => node.color}
          onNodeRightClick={(node: NodeObject, event: MouseEvent) => {
            console.log(node, event)
            const menuList = ['Add', 'Edit', 'Delete'].map((el: string, idx: number) => {
              const li = document.createElement('li')
              li.textContent = el
              li.value = idx
              li.onclick = function (e) {
                // eslint-disable-next-line
                // @ts-ignore
                switch (e?.target?.value) {
                  case 0:
                    {
                      const id = parseInt(`${Math.random() * 1000}`)
                      const n = {
                        id,
                        name: 'New Node ' + id,
                        color: Math.floor(Math.random() * 16777215).toString(16),
                      }
                      setData({
                        nodes: [...data.nodes, n],
                        links: [
                          ...data.links,
                          {
                            source: node.id,
                            target: n.id,
                          },
                        ],
                      })
                    }
                    break
                  case 1:
                    {
                      setData({
                        ...data,
                        // eslint-disable-next-line
                        nodes: data.nodes.map((d: any) =>
                          d.id === node.id ? { ...d, color: Math.floor(Math.random() * 16777215).toString(16) } : d,
                        ),
                      })
                    }
                    break
                  case 2:
                    {
                      setData({
                        ...data,
                        // eslint-disable-next-line
                        nodes: data.nodes.filter((n: any) => n.id !== node.id),
                        // eslint-disable-next-line
                        links: data.links.filter((n: any) => n.source !== node.id || n.target !== node.id),
                      })
                    }
                    break
                  default:
                    break
                }
                document.body.removeChild(document.querySelector('.menu') as Node)
              }
              return li
            })
            const ul = document.createElement('ul')

            ul.classList.add('menu')
            ul.style.position = 'absolute'
            ul.style.top = `${event.y}px`
            ul.style.left = `${event.x}px`
            ul.style.width = '100px'
            ul.style.height = '100px'
            ul.style.backgroundColor = '#fff'
            menuList.forEach(n => ul.appendChild(n))
            document.body.appendChild(ul)
          }}
          onBackgroundClick={() => {
            const node = document.querySelector('.menu')
            if (node) document.body.removeChild(node as Node)
          }}
        />
      </div>
    </>
  )
}
