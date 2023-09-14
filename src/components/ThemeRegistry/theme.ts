import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';





const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const customThemeOption = {
  primaryColor: '#ec5f2a',
  secondaryColor: '#ff9727',
  tertiaryColor: '#b3e5fc',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: customThemeOption.primaryColor, },
    secondary: { main: customThemeOption.secondaryColor },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
})

export default theme