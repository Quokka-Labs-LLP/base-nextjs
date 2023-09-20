import { Providers } from '@/redux/provider'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import CustomizedSnackbars from '@/components/Toaster'

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
}

// const DRAWER_WIDTH = 240

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <ThemeRegistry>
            <CssBaseline />
            {children}
          </ThemeRegistry>
          <CustomizedSnackbars />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
