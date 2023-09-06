'use client'

import { createTheme, ThemeProvider } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

import AccountMenu from './AccountMenu'

export default function Header() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <AccountMenu />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
