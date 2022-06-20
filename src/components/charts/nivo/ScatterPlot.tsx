import React from 'react'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

import { ScatterPlotCommonProps } from '../../../data'

// eslint-disable-next-line
export default function ScatterPlot(props: any): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveScatterPlot {...ScatterPlotCommonProps} {...props} />
    </div>
  )
}
