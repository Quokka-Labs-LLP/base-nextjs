import React from 'react'
import { ResponsiveFunnel } from '@nivo/funnel'

import { FunnelCommonProps } from '../../../data'

// eslint-disable-next-line
export default function FunnelChart(props: any): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveFunnel {...FunnelCommonProps} {...props} />
    </div>
  )
}
