import { Box } from '@/lib/mui'

import CardComponent from '@/components/CardComponent/Card'
import MyPieChart from '@/components/MyPieChart/pieChart'

const xAxisValues = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']
const barHeightValuesOne = [65, 59, 80, 81, 56, 55, 40]
const barHeightValuesTwo = [45, 39, 99, 91, 33, 30, 20]

export default async function Page() {
  return (
    <Box
      component='section'
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1rem',
        width: '100%',
      }}
    >
      <CardComponent bgColor='#ff6384cf' />
      <CardComponent bgColor='#ff6384cf' />
      <CardComponent bgColor='#ff6384cf' />
      {/* <MyBarChart
        labelOne='Label 1'
        labelTwo='Label 2'
        yAxisSteps={1}
        xAxisValues={xAxisValues}
        barHeightValuesOne={barHeightValuesOne}
        barHeightValuesTwo={barHeightValuesTwo}
    /> */}
      <MyPieChart />
    </Box>
  )
}
