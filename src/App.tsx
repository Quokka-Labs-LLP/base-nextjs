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
} from './components'

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1280px', margin: '10px auto' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Welcome to React v17 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v17.0.2</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.3.5</p>
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
