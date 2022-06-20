import React from 'react'
import { ResponsiveCirclePacking } from '@nivo/circle-packing'

import { CirclePackingCommonProps } from '../../../data'

// eslint-disable-next-line
export default function CirclePacking(props: any): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveCirclePacking {...CirclePackingCommonProps} {...props} />
    </div>
  )
}
