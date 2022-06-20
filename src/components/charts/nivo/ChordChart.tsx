import React from 'react'
import { ResponsiveChord } from '@nivo/chord'

import { ChordCommonProps } from '../../../data'

// eslint-disable-next-line
export default function ChordChart(props: any): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveChord {...ChordCommonProps} {...props} />
    </div>
  )
}
