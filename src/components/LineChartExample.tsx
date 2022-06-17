import React from 'react'

import { linearGradientDef } from '@nivo/core'

import { LineChart } from './charts'

const CustomSymbol = ({
  size,
  color,
  borderWidth,
  borderColor,
}: {
  size: number
  color: string
  borderWidth: number
  borderColor: string
}) => (
  <g>
    <circle fill='#fff' r={size / 2} strokeWidth={borderWidth} stroke={borderColor} />
    <circle r={size / 5} strokeWidth={borderWidth} stroke={borderColor} fill={color} fillOpacity={0.35} />
  </g>
)

export default function LineChartExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Line Chart</h1>
        <LineChart curve='linear' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Line Chart with MonotoneX Curve</h1>
        <LineChart curve='monotoneX' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Line Chart with Step Curve</h1>
        <LineChart curve='step' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Line Chart with StepBefore Curve</h1>
        <LineChart curve='stepBefore' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Line Chart with StepAfter Curve</h1>
        <LineChart curve='stepAfter' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Line Chart with StepAfter Curve</h1>
        <LineChart
          enableArea={true}
          yScale={{
            type: 'linear',
            stacked: true,
          }}
          curve='monotoneX'
          defs={[
            linearGradientDef('gradientA', [
              { offset: 0, color: 'inherit' },
              { offset: 100, color: 'inherit', opacity: 0 },
            ]),
          ]}
          fill={[{ match: '*', id: 'gradientA' }]}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Line Chart with Highlighting Negative Values</h1>
        <LineChart
          data={[
            {
              id: 'positive :)',
              data: [
                { x: 0, y: 0.7 },
                { x: 1, y: 0.9 },
                { x: 2, y: 0.8 },
                { x: 3, y: 0.6 },
                { x: 4, y: 0.3 },
                { x: 5, y: 0 },
                { x: 6, y: null },
                { x: 7, y: null },
                { x: 8, y: null },
                { x: 9, y: null },
                { x: 10, y: null },
                { x: 11, y: 0 },
                { x: 12, y: 0.4 },
                { x: 13, y: 0.6 },
                { x: 14, y: 0.5 },
                { x: 15, y: 0.3 },
                { x: 16, y: 0.4 },
                { x: 17, y: 0 },
              ],
            },
            {
              id: 'negative :(',
              data: [
                { x: 5, y: 0 },
                { x: 6, y: -0.3 },
                { x: 7, y: -0.5 },
                { x: 8, y: -0.9 },
                { x: 9, y: -0.2 },
                { x: 10, y: -0.4 },
                { x: 11, y: 0 },
                { x: 12, y: null },
                { x: 13, y: null },
                { x: 14, y: null },
                { x: 15, y: null },
                { x: 16, y: null },
                { x: 17, y: 0 },
                { x: 18, y: -0.4 },
                { x: 19, y: -0.2 },
                { x: 20, y: -0.1 },
                { x: 21, y: -0.6 },
              ],
            },
          ]}
          curve='monotoneX'
          enablePointLabel={true}
          pointSymbol={CustomSymbol}
          pointSize={14}
          pointBorderWidth={1}
          pointBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]],
          }}
          pointLabelYOffset={-20}
          enableGridX={false}
          colors={['rgb(97, 205, 187)', 'rgb(244, 117, 96)']}
          xScale={{
            type: 'linear',
          }}
          yScale={{
            type: 'linear',
            stacked: false,
            min: -1,
            max: 1,
          }}
          enableArea={true}
          areaOpacity={0.07}
          enableSlices={false}
          useMesh={true}
          crosshairType='cross'
        />
      </div>
    </>
  )
}
