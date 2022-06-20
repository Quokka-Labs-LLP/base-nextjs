import React from 'react'

import { Sankey, Tooltip, Layer, Rectangle } from 'recharts'

const data = {
  nodes: [
    { name: 'Visit' },
    { name: 'Direct-Favourite' },
    { name: 'Page-Click' },
    { name: 'Detail-Favourite' },
    { name: 'Lost' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
}

// eslint-disable-next-line
function DemoSankeyNode({ x, y, width, height, index, payload, containerWidth }: any) {
  const isOut = x + width + 6 > containerWidth
  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle x={x} y={y} width={width} height={height} fill="#5192ca" fillOpacity="1" />
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="14"
        stroke="#333"
      >
        {payload.name}
      </text>
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2 + 13}
        fontSize="12"
        stroke="#333"
        strokeOpacity="0.5"
      >
        {payload.value + 'k'}
      </text>
    </Layer>
  )
}

export default function Chart(): JSX.Element {
  return (
    <Sankey
      width={1000}
      height={350}
      margin={{
        left: 200,
        right: 200,
        top: 100,
        bottom: 100,
      }}
      data={data}
      nodeWidth={10}
      nodePadding={60}
      linkCurvature={0.61}
      iterations={64}
      link={{ stroke: '#77c878' }}
      node={<DemoSankeyNode containerWidth={1000} />}
    >
      <defs>
        <linearGradient id={'linkGradient'}>
          <stop offset="0%" stopColor="rgba(0, 136, 254, 0.5)" />
          <stop offset="100%" stopColor="rgba(0, 197, 159, 0.3)" />
        </linearGradient>
      </defs>
      <Tooltip />
    </Sankey>
  )
}
