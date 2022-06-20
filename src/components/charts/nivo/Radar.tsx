import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'

import { RadarCommonProps } from '../../../data'

// eslint-disable-next-line
export default function Radar(props: any): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveRadar {...RadarCommonProps} {...props} />
    </div>
  )
}
