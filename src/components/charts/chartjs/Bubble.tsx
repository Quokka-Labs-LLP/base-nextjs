import React from 'react'
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'
import { Bubble } from 'react-chartjs-2'
import random from '../../../utils/random'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

const data = {
  datasets: [
    {
      label: 'Red dataset',
      data: Array.from({ length: 50 }, () => ({
        x: random(1, 100),
        y: random(1, 100),
        r: random(5, 20),
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Blue dataset',
      data: Array.from({ length: 50 }, () => ({
        x: random(1, 100),
        y: random(1, 100),
        r: random(5, 20),
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export default function Chart(): JSX.Element {
  return <Bubble options={options} data={data} />
}
