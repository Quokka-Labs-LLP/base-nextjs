import React from 'react'
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import random from '../../../utils/random'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

export const data = {
  datasets: [
    {
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: random(1, 100),
        y: random(1, 100),
      })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
}

export default function Chart(): JSX.Element {
  return <Scatter options={options} data={data} />
}
