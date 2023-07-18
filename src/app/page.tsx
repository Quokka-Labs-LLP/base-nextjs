'use client'

import { Button, Card, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function Home(props: any) {
  const theme = useTheme()

  return (
    <Card>
      <Button color='primary' variant='contained'>
        test
      </Button>
      <Typography color={`${theme.palette.primary.dark}`} variant='h1'>Hello</Typography>
    </Card>
  )
}
