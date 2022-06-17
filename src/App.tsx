import React from 'react'

import {
  AreaChart,
  BarChart,
  ComposedChart,
  LineChart,
  PieChart,
  RadarChart,
  RadialBarChart,
  SankeyChart,
  ScatterChart,
  TreemapChart,
} from './components'
import './App.css'

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1000px', margin: '20px auto' }}>
      <h1 style={{ textAlign: 'center', margin: '50px', fontWeight: 100 }}>Recharts Example with CRA and TypeScript</h1>
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>AreaChart</h1>
      <AreaChart />
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>BarChart</h1>
      <BarChart />
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>ComposedChart</h1>
      <ComposedChart />
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>LineChart</h1>
      <LineChart />
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>PieChart</h1>
      <PieChart />
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>RadarChart</h1>
      <RadarChart />
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>RadialBarChart</h1>
      <RadialBarChart />
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>SankeyChart</h1>
      <SankeyChart />
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>ScatterChart</h1>
      <ScatterChart />
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 400 }}>TreemapChart</h1>
      <TreemapChart />
    </div>
  )
}
