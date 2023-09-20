'use client'

import { Paper } from '@mui/material'
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import type { MyBarChartProps } from './MyBarChart'

ChartJS.register(BarController, BarElement, Tooltip, CategoryScale, LinearScale, Title, Legend)

const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart
    ctx.save()
    ctx.globalCompositeOperation = 'destination-over'
    ctx.fillStyle = options.color || '#99ffff'
    ctx.fillRect(0, 0, chart.width, chart.height)
    ctx.restore()
  },
}

const MyBarChart = ({
  labelOne,
  labelTwo,
  xAxisValues,
  yAxisSteps = 1,
  barHeightValuesOne,
  barHeightValuesTwo,
  canvasBackgroungColor,
}: MyBarChartProps) => (
  <Paper elevation={5} sx={{ padding: '1rem' }}>
    <Bar
      style={{ background: 'white' }}
      data={{
        labels: xAxisValues,
        datasets: [
          {
            label: labelOne,
            data: barHeightValuesOne,
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
          {
            label: labelTwo,
            data: barHeightValuesTwo,
            borderWidth: 1,
            barPercentage: 0.5,
            barThickness: 20,
            minBarLength: 2,
            backgroundColor: [
              'rgb(186, 74, 98)',
              'rgb(191, 119, 47)',
              'rgb(173, 138, 56)',
              'rgb(54, 139, 139)',
              'rgb(38, 115, 166)',
              'rgb(105, 71, 175)',
              'rgb(137, 138, 140)',
            ],
          },
        ],
      }}
      options={{
        scales: {
          y: {
            ticks: {
              callback(defaultValue: any) {
                return defaultValue * yAxisSteps
              },
            },
          },
        },
        plugins: {
          customCanvasBackgroundColor: {
            color: canvasBackgroungColor,
          },
        },
      }}
      plugins={[plugin]}
    />
  </Paper>
)
export default MyBarChart
