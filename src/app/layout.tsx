import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'

import AppDrawer from '@/components/AppDrawer/AppDrawer'
import AppHeader from '@/components/Header/Header'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
}

// const DRAWER_WIDTH = 240

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <CssBaseline />
          <AppHeader />
          <AppDrawer />
          {/* <Box
            component='main'
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: `${DRAWER_WIDTH}px`,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
          > */}
          {children}
          {/* </Box> */}
        </ThemeRegistry>
      </body>
    </html>
  )
}
