import { Box, Grid } from '@/lib/mui'

import CardComponent from '@/components/CardComponent/Card'
import MyBarChart from '@/components/MyBarChart/barChart'
import MyPieChart from '@/components/MyPieChart/pieChart'

const xAxisValues = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']
const barHeightValuesOne = [65, 59, 80, 81, 56, 55, 40]
const barHeightValuesTwo = [45, 39, 99, 91, 33, 30, 20]

export default async function Page() {
  return (
    <Box
      component='section'
      sx={{
        width: '100%',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardComponent backgroundColor='#ff6384cf' heading='Active User' />
        </Grid>
        <Grid item xs={4}>
          <CardComponent backgroundColor='#ff8e3dcf' heading='Total User' />
        </Grid>
        <Grid item xs={4}>
          <CardComponent backgroundColor='#dcd85bcf' heading='Weekly User' />
        </Grid>
        <Grid item xs={8}>
          <MyBarChart
            labelOne='Label 1'
            labelTwo='Label 2'
            yAxisSteps={1}
            xAxisValues={xAxisValues}
            barHeightValuesOne={barHeightValuesOne}
            barHeightValuesTwo={barHeightValuesTwo}
            canvasBackgroungColor='#feb5b5'
          />
        </Grid>
        <Grid item xs={4}>
          <MyPieChart canvasBackgroungColor='#feb5b5' />
        </Grid>
      </Grid>
    </Box>
  )
}
