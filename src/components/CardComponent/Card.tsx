import { CardActions } from '@mui/material'

import { Button, Card, CardContent, Paper, Typography } from '../../lib/mui'

const CardComponent = ({ backgroundColor, heading }: any) => (
  <Paper elevation={3} sx={{ backgroundColor }}>
    <Card sx={{ minWidth: 275, backgroundColor }}>
      <CardContent>
        <Typography variant='h6' component='div'>
          {heading}
        </Typography>
        <Typography variant='h3'>99999</Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size='small'>
          Info
        </Button>
      </CardActions>
    </Card>
  </Paper>
)

export default CardComponent
