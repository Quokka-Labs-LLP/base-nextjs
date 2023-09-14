import { Box, Paper } from '@mui/material'

import MyBarChart from '@/components/MyBarChart/page'
import MyPieChart from '@/components/MyPieChart/page'

const xAxisValues = ['val-1', 'val-2', 'val-3', 'val-4', 'val-5', 'val-6', 'val-7']
const barHeightValues = [65, 59, 80, 81, 56, 55, 40]

export default async function Page() {
  return (
    <Box
      component='section'
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        width: '100%',
      }}
    >
      <MyBarChart
        label='This is label'
        yAxisSteps={1}
        xAxisValues={xAxisValues}
        barHeightValues={barHeightValues}
      />
      <MyPieChart />
    </Box>
  )
}
