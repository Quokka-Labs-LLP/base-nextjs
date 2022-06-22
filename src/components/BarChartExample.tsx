import React from 'react'

import { useTheme } from '@nivo/core'
import { AxisTickProps } from '@nivo/axes'

import { BarChart } from './charts'
import { BarCommonProps } from '../data'
import random from '../utils/random'

export default function BarChartExample(): JSX.Element {
  const divergingData = Array(9)
    .fill(0)
    .map((i, j) => {
      i
      let gain = random(0, 100)
      let loss = 100 - gain
      const highGain = Math.round(gain * 0.4)
      const highLoss = Math.round(loss * 0.4)
      gain = gain - highGain
      loss = loss - highLoss

      return {
        'gained > 100$': highGain,
        'gained <= 100$': gain,
        'lost <= 100$': -loss,
        'lost > 100$': -highLoss,
        user: ['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim', 'Junko', 'Lyu', 'André', 'Maki'][j],
      }
    })

  const divergingCommonProps = {
    ...BarCommonProps,
    data: divergingData,
    indexBy: 'user',
    minValue: -100,
    maxValue: 100,
    enableGridX: true,
    enableGridY: false,
    valueFormat: (value: number) => `${Math.abs(value)}`,
    labelTextColor: 'inherit:darker(1.2)',
    axisTop: {
      tickSize: 0,
      tickPadding: 12,
    },
    axisBottom: {
      legend: 'USERS',
      legendPosition: 'middle' as const,
      legendOffset: 50,
      tickSize: 0,
      tickPadding: 12,
    },
    axisLeft: null,
    axisRight: {
      format: (v: number) => `${Math.abs(v)}%`,
    },
    markers: [
      {
        axis: 'y',
        value: 0,
        lineStyle: { strokeOpacity: 0 },
        textStyle: { fill: '#2ebca6' },
        legend: 'gain',
        legendPosition: 'top-left',
        legendOrientation: 'vertical',
        legendOffsetY: 120,
      } as const,
      {
        axis: 'y',
        value: 0,
        lineStyle: { stroke: '#f47560', strokeWidth: 1 },
        textStyle: { fill: '#e25c3b' },
        legend: 'loss',
        legendPosition: 'bottom-left',
        legendOrientation: 'vertical',
        legendOffsetY: 120,
      } as const,
    ],
  }

  const CustomTick = (tick: AxisTickProps<string>) => {
    const theme = useTheme()

    return (
      <g transform={`translate(${tick.x},${tick.y + 22})`}>
        <rect x={-14} y={-6} rx={3} ry={3} width={28} height={24} fill='rgba(0, 0, 0, .05)' />
        <rect x={-12} y={-12} rx={2} ry={2} width={24} height={24} fill='rgb(232, 193, 160)' />
        <line stroke='rgb(232, 193, 160)' strokeWidth={1.5} y1={-22} y2={-12} />
        <text
          textAnchor='middle'
          dominantBaseline='middle'
          style={{
            ...theme.axis.ticks.text,
            fill: '#333',
            fontSize: 10,
          }}
        >
          {tick.value}
        </text>
      </g>
    )
  }

  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Vertical Stacked Bar Chart</h1>
        <BarChart layout='vertical' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Horizontal Stacked Bar Chart</h1>
        <BarChart layout='horizontal' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Vertical Grouped Bar Chart</h1>
        <BarChart layout='vertical' groupMode='grouped' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Horizontal Grouped Bar Chart</h1>
        <BarChart layout='horizontal' groupMode='grouped' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bar Chart with Marker</h1>
        <BarChart
          layout='vertical'
          markers={[
            {
              axis: 'y',
              value: 200,
              lineStyle: { stroke: 'rgba(0, 0, 0, .35)', strokeWidth: 2 },
              legend: 'y marker at 300',
              legendOrientation: 'vertical',
            },
          ]}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Diverging Stacked Bar Chart</h1>
        <BarChart
          {...divergingCommonProps}
          layout='vertical'
          keys={['gained <= 100$', 'gained > 100$', 'lost <= 100$', 'lost > 100$']}
          padding={0.4}
          // eslint-disable-next-line
          valueFormat={(v: any) => `${v}%`}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Diverging Grouped Bar Chart</h1>
        <BarChart
          {...divergingCommonProps}
          layout='vertical'
          groupMode='grouped'
          keys={['gained <= 100$', 'gained > 100$', 'lost <= 100$', 'lost > 100$']}
          padding={0.4}
          // eslint-disable-next-line
          valueFormat={(v: any) => `${v}%`}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bar Chart with Formatted Values</h1>
        <BarChart
          axisLeft={{
            // eslint-disable-next-line
            format: (value: any) =>
              `${Number(value).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
              })} ₽`,
          }}
          // eslint-disable-next-line
          valueFormat={(value: any) =>
            // eslint-disable-next-line
            `${Number(value).toLocaleString('ru-RU', {
              minimumFractionDigits: 2,
            })} ₽`
          }
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bar Chart with Custom Tooltip</h1>
        <BarChart
          axisLeft={{
            // eslint-disable-next-line
            format: (value: any) =>
              // eslint-disable-next-line
              Number(value).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
              }),
          }}
          // eslint-disable-next-line
          tooltip={({ id, value, color }: any) => (
            <div
              style={{
                padding: 12,
                color,
                background: '#222222',
              }}
            >
              <span>{`Look, I'm custom :)`}</span>
              <br />
              <strong>
                {id}: {value}
              </strong>
            </div>
          )}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bar Chart with Custom Tick</h1>
        <BarChart
          axisLeft={null}
          axisBottom={{
            renderTick: CustomTick,
          }}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bar Chart with Legends</h1>
        <BarChart
          legends={[
            {
              anchor: 'bottom',
              dataFrom: 'keys',
              direction: 'row',
              itemHeight: 20,
              itemWidth: 80,
              toggleSerie: true,
              translateY: 50,
            },
          ]}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bar Chart with Legend</h1>
        <BarChart
          // eslint-disable-next-line
          legendLabel={(datum: any) => `${datum.id} (${datum.value})`}
          legends={[
            {
              anchor: 'bottom-right',
              dataFrom: 'keys',
              direction: 'column',
              itemHeight: 20,
              itemWidth: 110,
              toggleSerie: true,
              translateX: 120,
            },
          ]}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bar Chart with Annotation</h1>
        <BarChart
          annotations={[
            {
              type: 'circle',
              match: { key: 'fries.AE' },
              noteX: 25,
              noteY: 25,
              offset: 3,
              noteTextOffset: -3,
              noteWidth: 5,
              note: 'an annotation',
              size: 40,
            },
          ]}
        />
      </div>
    </>
  )
}
