import React from 'react'
import {
  BarChart,
  BubbleChart,
  ComposedChart,
  DoughnutChart,
  GroupedBarChart,
  LineChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  ScatterChart,
  StackedBarChart,
} from './components'

import './App.css'

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1100px', margin: '10px auto' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Welcome to React v18 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v18.1.0</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.7.3</p>

      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>React-Chartjs</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '45% 45%', gridGap: '10px', marginBottom: '20px' }}>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Vertical Bar Chart</h1>
          <BarChart type='x' />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Horizontal Bar Chart</h1>
          <BarChart type='y' />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bubble Chart</h1>
          <BubbleChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Composed Chart</h1>
          <ComposedChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Doughnut Chart</h1>
          <DoughnutChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>GroupedBar Chart</h1>
          <GroupedBarChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Line Chart</h1>
          <LineChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Pie Chart</h1>
          <PieChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>PolarArea Chart</h1>
          <PolarAreaChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Radar Chart</h1>
          <RadarChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Scatter Chart</h1>
          <ScatterChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>StackedBar Chart</h1>
          <StackedBarChart />
        </div>
      </div>
    </div>
  )
}
