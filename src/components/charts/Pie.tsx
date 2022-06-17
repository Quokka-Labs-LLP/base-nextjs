import React from 'react'

import { Pie, PieChart, Tooltip } from 'recharts'

const data = [
  { name: 'Page A', uv: 4000 },
  { name: 'Page B', uv: 3000 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D', uv: 2780 },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 },
]

export default function Chart(): JSX.Element {
  return (
    <PieChart width={1000} height={350}>
      <Pie data={data} dataKey='uv' nameKey='name' cx='50%' cy='50%' outerRadius={140} fill='#8884d8' label />
      <Tooltip />
    </PieChart>
  )
}
