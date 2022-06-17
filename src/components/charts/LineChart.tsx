import React from 'react'
import { ResponsiveLine } from '@nivo/line'

import { LineCommonProps } from '../../data'

// eslint-disable-next-line
export default function LineChart(props: any): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveLine
        {...LineCommonProps}
        yScale={{
          type: 'linear',
          stacked: true,
        }}
        {...props}
      />
    </div>
  )
}
