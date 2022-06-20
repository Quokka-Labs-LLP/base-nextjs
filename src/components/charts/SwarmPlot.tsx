import React from 'react'
import { ResponsiveSwarmPlot } from '@nivo/swarmplot'

import { SwarmPlotCommonProps } from '../../data'
import { DynamicProps } from './types'

export default function SwarmPlot(props: DynamicProps): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveSwarmPlot {...SwarmPlotCommonProps} {...props} />
    </div>
  )
}
