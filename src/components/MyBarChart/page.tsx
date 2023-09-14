'use client'

import { Paper } from '@mui/material'
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { MyBarChartProps } from './MyBarChart'

ChartJS.register(BarController, BarElement, Tooltip, CategoryScale, LinearScale)

const MyBarChart = ({ label, xAxisValues, yAxisSteps = 1, barHeightValues }: MyBarChartProps) => {
  return (
    <Paper elevation={5} sx={{ padding: '1rem' }}>
      <Bar
        style={{ background: 'white' }}
        data={{
          labels: xAxisValues,
          datasets: [
            {
              label,
              data: barHeightValues,
              borderWidth: 1,
              barPercentage: 0.5,
              barThickness: 20,
              minBarLength: 2,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
            },
          ],
        }}
        options={{
          scales: {
            y: {
              ticks: {
                callback: function (defaultValue: any) {
                  return defaultValue * yAxisSteps
                },
              },
            },
          },
        }}
      />
    </Paper>
  )
}
export default MyBarChart
