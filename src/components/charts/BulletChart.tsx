import React from 'react'
import { ResponsiveBullet } from '@nivo/bullet'

import { BulletCommonProps } from '../../data'

// eslint-disable-next-line
export default function BulletChart(props: any): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveBullet {...BulletCommonProps} {...props} />
    </div>
  )
}
