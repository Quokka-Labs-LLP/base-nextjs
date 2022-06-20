import React from 'react'

import { CalendarChart } from './charts'

export default function CalendarChartExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Calendar Chart</h1>
        <CalendarChart />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Calendar Chart with custom colors</h1>
        <CalendarChart colors={['#a1cfff', '#468df3', '#a053f0', '#9629f0', '#8428d8']} />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Calendar Chart with Vertical Direction</h1>
        <CalendarChart direction='vertical' />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Calendar Chart with Month Spacing</h1>
        <CalendarChart monthSpacing={25} />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Calendar Chart with custom legend formatter</h1>
        <CalendarChart
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          valueFormat='.2f'
          // eslint-disable-next-line
          legendFormat={(value: any) => value / 10 + 'M'}
          height={460}
          legends={[
            {
              anchor: 'top',
              direction: 'row',
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: 'right-to-left',
            },
          ]}
        />
      </div>
    </>
  )
}
