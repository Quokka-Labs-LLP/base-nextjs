import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'

import { CalendarCommonProps } from '../../../data'
import { DynamicProps } from './types'

export default function CalendarChart(props: DynamicProps): JSX.Element {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveCalendar {...CalendarCommonProps} {...props} />
    </div>
  )
}
