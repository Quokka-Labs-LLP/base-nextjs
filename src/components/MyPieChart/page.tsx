'use client'

import { Paper } from '@mui/material'
import { ArcElement, Chart as ChartJS, PieController, Tooltip } from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'

ChartJS.register(PieController, ArcElement, Tooltip)

const MyPieChart = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <Paper elevation={5}>
        <Pie
          style={{ background: 'white', float: 'right' }}
          data={{
            labels: ['Players', 'Coachs', 'Gym Instructures'],
            datasets: [
              {
                data: [56, 55, 40],
                borderWidth: 1,
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)'],
              },
            ],
          }}
        />
      </Paper>
    </div>
  )
}
export default MyPieChart
