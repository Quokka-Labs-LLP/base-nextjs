import React from 'react'

import { TimeRangeChart } from './charts'
import { TimeRangeCommonData } from '../data'

export default function TimeRangeChartExample(): JSX.Element {
  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>TimeRange Chart</h1>
      <TimeRangeChart
        data={TimeRangeCommonData}
        from='2018-04-01'
        to='2018-08-12'
        emptyColor='#eeeeee'
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor='#ffffff'
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            justify: false,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
            translateX: -60,
            translateY: -60,
            symbolSize: 20,
          },
        ]}
      />
    </div>
  )
}
