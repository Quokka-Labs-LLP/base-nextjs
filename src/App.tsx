import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import Link from '@mui/material/Link'
import OutlinedInput from '@mui/material/OutlinedInput'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import Info from '@mui/icons-material/Info'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import styles from './App.module.css'

export default function App() {
  return (
    <Box>
      <header className={styles.header}>
        <Box sx={{ width: 40, height: 40, cursor: 'pointer' }}>
          <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 512 512'>
            <defs>
              <linearGradient id='BG1' x1='100%' x2='50%' y1='9.946%' y2='50%'>
                <stop offset='0%' stopColor='#007B55'></stop>
                <stop offset='100%' stopColor='#00AB55'></stop>
              </linearGradient>
              <linearGradient id='BG2' x1='50%' x2='50%' y1='0%' y2='100%'>
                <stop offset='0%' stopColor='#5BE584'></stop>
                <stop offset='100%' stopColor='#00AB55'></stop>
              </linearGradient>
              <linearGradient id='BG3' x1='50%' x2='50%' y1='0%' y2='100%'>
                <stop offset='0%' stopColor='#5BE584'></stop>
                <stop offset='100%' stopColor='#00AB55'></stop>
              </linearGradient>
            </defs>
            <g fill='#00AB55' fillRule='evenodd' stroke='none' strokeWidth='1'>
              <path
                fill='url(#BG1)'
                d='M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z'
              ></path>
              <path
                fill='url(#BG2)'
                d='M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994'
              ></path>
              <path
                fill='url(#BG3)'
                d='M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48'
              ></path>
            </g>
          </svg>
        </Box>
        <Typography variant='body2'>
          {`Don't have an account? `}
          <Link href='#' underline='hover' variant='subtitle2'>
            Get Started
          </Link>
        </Typography>
      </header>

      <div className={styles.container}>
        <div className={styles.contents}>
          <div className={styles.heading}>
            <Box sx={{ flexGrow: 1 }} className={styles.headingBox}>
              <Typography variant='h4'>Sign in to Minimal</Typography>
              <Typography variant='body1'>Enter your details below.</Typography>
            </Box>
          </div>

          <Paper elevation={0} className={styles.paper} sx={{ background: '#d0f2ff', borderRadius: '8px' }}>
            <Info sx={{ margin: '8px', color: '#1890ff' }} />
            <Box sx={{ padding: '8px 0' }}>
              Use email : <strong>demo@minimals.cc</strong> / password : <strong>demo1234</strong>
            </Box>
          </Paper>

          <form>
            <TextField label='Email address' type='password' autoComplete='current-password' fullWidth />
            <FormControl variant='outlined' sx={{ marginTop: '24px' }} fullWidth>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <OutlinedInput
                id='password'
                type='password'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' edge='end'>
                      <VisibilityOff />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button variant='contained' fullWidth className={styles.button}>
              Login
            </Button>
          </form>
        </div>
      </div>

      <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>
        Made with CRA - React v18.1.0, TypeScript v4.7.3, Material-UI v5.8.4
      </Typography>
    </Box>
  )
}
