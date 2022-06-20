import React from 'react'

import { AreaBumpChart, BumpChart } from './charts'
import { generateBumpData } from '../data'

export default function BumpChartExample(): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bump Chart</h1>
        <BumpChart />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bump Chart with Missing Data</h1>
        <BumpChart
          pointSize={12}
          activePointSize={16}
          inactivePointSize={8}
          data={[
            {
              id: 'Serie A',
              data: [
                // missing data at the beginning
                { x: 0, y: null },
                { x: 1, y: 1 },
                { x: 2, y: 1 },
                { x: 3, y: 2 },
                { x: 4, y: 2 },
              ],
            },
            {
              id: 'Serie B',
              data: [
                { x: 0, y: 1 },
                { x: 1, y: 2 },
                // missing data in the middle
                { x: 2, y: null },
                { x: 3, y: 3 },
                { x: 4, y: 3 },
              ],
            },
            {
              id: 'Serie C',
              data: [
                { x: 0, y: 3 },
                { x: 1, y: 3 },
                { x: 2, y: 3 },
                { x: 3, y: 1 },
                // missing data at the end
                { x: 4, y: null },
              ],
            },
          ]}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Bump Chart with more series than ranks</h1>
        <BumpChart
          // eslint-disable-next-line
          data={generateBumpData().map((series: any) => ({
            ...series,
            // eslint-disable-next-line
            data: series.data.map((datum: any) => ({
              x: datum.x,
              y: datum.y >= 5 ? null : datum.y,
            })),
          }))}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Area Bump Chart</h1>
        <AreaBumpChart />
      </div>
    </>
  )
}
