'use client'

import path from 'path'
import { handleDrawerClose } from '@/redux/features/drawerSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import BarChartIcon from '@mui/icons-material/BarChart'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import PostsActive from '@mui/icons-material/DynamicFeed'
import Posts from '@mui/icons-material/DynamicFeedOutlined'
import UsersActive from '@mui/icons-material/SupervisorAccount'
import Users from '@mui/icons-material/SupervisorAccountOutlined'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
// eslint-disable-next-line
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles'
import * as React from 'react'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Router } from 'next/router'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
)

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppDrawer = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const open = useAppSelector((state: any) => state.drawerReducer.open)

  const pathname = usePathname()

  const navLinks = [
    {
      title: 'Dashboard',
      path: '/dashboard/',
      icons:
        pathname === '/dashboard/' ? <BarChartIcon style={{ color: 'white' }} /> : <BarChartIcon />,
    },
    {
      title: 'Users',
      path: '/dashboard/users/',
      icons:
        pathname === '/dashboard/users/' ? <UsersActive style={{ color: 'white' }} /> : <Users />,
    },
    {
      title: 'Posts',
      path: '/dashboard/posts/',
      icons:
        pathname === '/dashboard/posts/' ? <PostsActive style={{ color: 'white' }} /> : <Posts />,
    },
  ]

  return (
    <Drawer variant='permanent' open={open}>
      <DrawerHeader>
        <IconButton onClick={() => dispatch(handleDrawerClose())}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navLinks.map(({ path, title, icons }) => {
          const isActive = pathname === path
          return (
            <ListItem
              key={path}
              disablePadding
              sx={{
                display: 'block',
                backgroundColor: `${isActive ? theme.palette.primary.main : 'transparent'}`,
              }}
            >
              <Link
                href={path}
                style={{
                  textDecoration: 'none',
                  color: `${isActive ? 'white' : theme.palette.primary.main}`,
                }}
                data-testid={'path'}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: `${isActive ? 'white' : theme.palette.primary.main}`,
                    }}
                  >
                    {icons}
                  </ListItemIcon>
                  <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}

export default AppDrawer
