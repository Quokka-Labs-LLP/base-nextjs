import React from 'react'
import { ResponsiveBump } from '@nivo/bump'

import { BumpCommonProps } from '../../../data'
import { DynamicProps } from './types'

export default function BumpChart(props: DynamicProps): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveBump {...BumpCommonProps} {...props} />
    </div>
  )
}
