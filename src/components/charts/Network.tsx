import React from 'react'
import { ResponsiveNetwork } from '@nivo/network'

import { NetworkCommonProperties } from '../../data'

// eslint-disable-next-line
export default function Network(props: any): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveNetwork {...NetworkCommonProperties} {...props} />
    </div>
  )
}
