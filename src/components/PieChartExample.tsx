import React from 'react'
import { animated } from '@react-spring/web'

import { PieChart } from './charts'

export default function PieChartExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Pie Chart</h1>
        <PieChart />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Donut Chart</h1>
        <PieChart innerRadius={0.6} />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Donut Chart with Fancy Slices</h1>
        <PieChart
          innerRadius={0.6}
          padAngle={0.5}
          cornerRadius={5}
          arcLinkLabelsColor={{
            from: 'color',
          }}
          arcLinkLabelsThickness={3}
          arcLinkLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 1.2]],
          }}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Donut Chart with Custom Arc Label</h1>
        <PieChart
          innerRadius={0.2}
          cornerRadius={3}
          arcLabelsSkipAngle={20}
          arcLabelsRadiusOffset={0.55}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 0.6]],
          }}
          arcLinkLabelsOffset={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLinkLabelsThickness={3}
          // eslint-disable-next-line
          arcLabelsComponent={({ datum, label, style }: { datum: any; label: string; style: any }) => (
            <animated.g transform={style.transform}>
              <circle fill={style.textColor} cy={6} r={15} />
              <circle fill='#ffffff' stroke={datum.color} strokeWidth={2} r={16} />
              <text
                textAnchor='middle'
                dominantBaseline='central'
                fill={style.textColor}
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                }}
              >
                {label}
              </text>
            </animated.g>
          )}
        />
      </div>
    </>
  )
}
