import React from 'react'
import { ResponsiveTimeRange } from '@nivo/calendar'

import { CalendarCommonProps } from '../../../data'
import { DynamicProps } from './types'

export default function TimeRangeChart(props: DynamicProps): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveTimeRange {...CalendarCommonProps} {...props} />
    </div>
  )
}
