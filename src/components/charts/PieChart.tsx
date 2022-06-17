import React from 'react'
import { ResponsivePie } from '@nivo/pie'

import { PieCommonProps } from '../../data'
import { DynamicProps } from './types'

export default function PieChart(props: DynamicProps): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsivePie {...PieCommonProps} {...props} />
    </div>
  )
}
