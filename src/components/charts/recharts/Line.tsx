import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2000 },
  { name: 'Page B', uv: 300, pv: 2500, amt: 2100 },
  { name: 'Page C', uv: 500, pv: 2300, amt: 2200 },
  { name: 'Page D', uv: 600, pv: 2200, amt: 2300 },
  { name: 'Page E', uv: 300, pv: 2100, amt: 2500 },
  { name: 'Page F', uv: 700, pv: 2000, amt: 2400 },
]

export default function Chart(): JSX.Element {
  return (
    <LineChart width={580} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type='monotone' dataKey='uv' stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
    </LineChart>
  )
}
