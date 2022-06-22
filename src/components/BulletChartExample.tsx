import React from 'react'

import { BulletCommonProps } from '../data'
import { BulletChart } from './charts'

const CustomRange = ({
  x,
  y,
  width,
  height,
  color,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}: {
  x: number
  y: number
  width: number
  height: number
  color: string
  onMouseEnter: () => void
  onMouseMove: () => void
  onMouseLeave: () => void
}) => (
  <rect
    x={x + 2}
    y={y + 2}
    rx={5}
    ry={5}
    width={width - 4}
    height={height - 4}
    fill={color}
    onMouseEnter={onMouseEnter}
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
  />
)

const CustomMeasure = ({
  x,
  y,
  width,
  height,
  color,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}: {
  x: number
  y: number
  width: number
  height: number
  color: string
  onMouseEnter: () => void
  onMouseMove: () => void
  onMouseLeave: () => void
}) => (
  <rect
    x={x + 2}
    y={y + 2}
    rx={height / 2}
    ry={height / 2}
    width={width - 4}
    height={height - 4}
    fill={color}
    onMouseEnter={onMouseEnter}
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
  />
)

const CustomMarker = ({
  x,
  size,
  color,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}: {
  x: number
  size: number
  color: string
  onMouseEnter: () => void
  onMouseMove: () => void
  onMouseLeave: () => void
}) => (
  <g transform={`translate(${x},0)`} onMouseEnter={onMouseEnter} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
    <line x1={0} x2={0} y1={0} y2={size} stroke={color} strokeWidth={2} strokeDasharray='2,3' fill='none' />
    <path d='M0 -10 L 10 0 L 0 10 L -10 0 Z' fill={color} />
    <path transform={`translate(0,${size})`} d='M0 -10 L 10 0 L 0 10 L -10 0 Z' fill={color} />
  </g>
)

export default function BulletChartExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bullet Chart</h1>
        <BulletChart />
      </div>
      {/* <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Vertical Bullet Chart</h1>
        <BulletChart
          layout='vertical'
          height={500}
          spacing={240}
          margin={{ ...BulletCommonProps.margin, top: 70 }}
          titleAlign='start'
          titleOffsetX={0}
          titleOffsetY={-15}
          titleRotation={-90}
        />
      </div> */}
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bullet Chart with Custom Range</h1>
        <BulletChart rangeComponent={CustomRange} />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bullet Chart with Custom Measure</h1>
        <BulletChart measureComponent={CustomMeasure} />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bullet Chart with Custom Marker</h1>
        <BulletChart markerComponent={CustomMarker} />
      </div>
    </>
  )
}
