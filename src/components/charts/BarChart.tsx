import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import { BarCommonProps as CommonProps } from '../../data'
import { DynamicProps } from './types'

export default function BarChart(props: DynamicProps): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveBar {...CommonProps} {...props} />
    </div>
  )
}
