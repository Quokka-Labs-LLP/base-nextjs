import * as React from 'react'
import Typography from '@mui/material/Typography'

export default function Features() {
  return (
    <>
      <Typography sx={{ mt: 6, mb: 0 }} color='text.secondary' variant='h6'>
        <b>Features: </b>
      </Typography>
      <Typography sx={{ mt: 0, mb: 3 }} color='text.secondary'>
        <b>React:</b> v18.1.0 <br />
        <b>TypeScript:</b> v4.7.3 <br />
        <b>Material </b>UI: v5.8.4
        <br />
        <b>Emotion-React </b>UI: v11.9.3
        <br />
        <b>Emotion-Styled </b>UI: v11.9.3
      </Typography>
    </>
  )
}
