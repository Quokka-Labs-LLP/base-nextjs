import React from 'react'
import { ResponsiveTreeMap } from '@nivo/treemap'

import { TreemapCommonProps } from '../../../data'
import { DynamicProps } from './types'

export default function TreeMap(props: DynamicProps): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveTreeMap {...TreemapCommonProps} {...props} />
    </div>
  )
}
