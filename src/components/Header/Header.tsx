'use client'

import { AppBar, Box, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'

import AccountMenu from './AccountMenu'

export default function Header() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
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
