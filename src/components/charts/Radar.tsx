import React from 'react'

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts'

const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
]

export default function Chart(): JSX.Element {
  return (
    <RadarChart outerRadius={90} width={1000} height={350} data={data}>
      <Legend />
      <PolarGrid />
      <PolarAngleAxis dataKey='subject' />
      <PolarRadiusAxis />
      <Radar name='Mike' dataKey='A' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
    </RadarChart>
  )
}