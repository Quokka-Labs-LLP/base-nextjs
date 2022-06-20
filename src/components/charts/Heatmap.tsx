import React from 'react'
import { ResponsiveHeatMap } from '@nivo/heatmap'

import { HeatMapCommonProps } from '../../data'

// eslint-disable-next-line
export default function Heatmap(props: any): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveHeatMap {...HeatMapCommonProps} {...props} />
    </div>
  )
}
