'use client'

import { createTheme } from '@mui/material/styles'

export const theme: any = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#800000',
      main: '#FF0000',
      dark: '#8B0000',
    },
    custom: {
      light: '#800000',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
  typography: {
    h1: {
      fontSize: '4.4rem',
      fontWeight: '700',
      margin: '1rem 0',
    },
    h2: {
      fontSize: '1.2rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
    fontFamily: 'Raleway, Arial',
  },
})
