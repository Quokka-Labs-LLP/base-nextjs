import React from 'react'

import {
  BarChartExample,
  BulletChartExample,
  BumpChartExample,
  CalendarChartExample,
  ChordChartExample,
  CirclePackingExample,
  FunnelChartExample,
  HeatMapExample,
  LineChartExample,
  NetworkExample,
  PieChartExample,
  RadarExample,
  ScatterPlotExample,
  SwarmPlotExample,
  TimeRangeChartExample,
  TreemapExample,
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

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1280px', margin: '10px auto' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Welcome to React v17 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v17.0.2</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.3.5</p>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>ReCharts</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '45% 45%', gridGap: '60px', marginBottom: '20px' }}>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Area Chart</h1>
          <AreaChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bar Chart</h1>
          <BarChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Composed Chart</h1>
          <ComposedChart />
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
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Radar Chart</h1>
          <RadarChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>RadialBar Chart</h1>
          <RadialBarChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Sankey Chart</h1>
          <SankeyChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Scatter Chart</h1>
          <ScatterChart />
        </div>
        <div style={{ padding: '10px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Treemap Chart</h1>
          <TreemapChart />
        </div>
      </div>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Nivo Charts</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '45% 45%', gridGap: '60px', marginBottom: '20px' }}>
        <BarChartExample />
        <BulletChartExample />
        <BumpChartExample />
        <CalendarChartExample />
        <ChordChartExample />
        <CirclePackingExample />
        <FunnelChartExample />
        <HeatMapExample />
        <LineChartExample />
        <NetworkExample />
        <PieChartExample />
        <RadarExample />
        <ScatterPlotExample />
        <SwarmPlotExample />
        <TimeRangeChartExample />
        <TreemapExample />
      </div>
    </div>
  )
}
