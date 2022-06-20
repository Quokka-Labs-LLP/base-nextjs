import React from 'react'

import { FunnelChart, Funnel, LabelList, Tooltip } from 'recharts'

const data = [
  { value: 100, name: 'Page A', fill: '#8884d8' },
  { value: 80, name: 'Page B', fill: '#83a6ed' },
  { value: 50, name: 'Page C', fill: '#8dd1e1' },
  { value: 40, name: 'Page D', fill: '#82ca9d' },
  { value: 26, name: 'Page E', fill: '#a4de6c' },
]

export default function Chart(): JSX.Element {
  return (
    <FunnelChart width={1000} height={350}>
      <Tooltip />
      <Funnel dataKey='value' data={data} isAnimationActive>
        <LabelList position='right' fill='#000' stroke='none' dataKey='name' />
      </Funnel>
    </FunnelChart>
  )
}
