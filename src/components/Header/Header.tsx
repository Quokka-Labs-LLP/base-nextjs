'use client'

import MenuIcon from '@mui/icons-material/Menu'
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))
const open = { op: false }
const AppHeader = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position='fixed' open={false}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          // onClick={() => dispatch(handleDrawerOpenClose())}
          edge='start'
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
)
export default AppHeader
