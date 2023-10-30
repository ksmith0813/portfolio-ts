import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    primary: string
    primaryLight: string
    header: string
    hero: string
    linearGradient: string
    linearGradientAngle: string
    gray9: string
    gray8: string
    gray7: string
    gray6: string
    gray5: string
    gray4: string
    gray3: string
    gray2: string
    gray1: string
    gray0: string
  }
  interface ThemeOptions {
    primary: string
    primaryLight: string
    header: string
    hero: string
    linearGradient: string
    linearGradientAngle: string
    gray9: string
    gray8: string
    gray7: string
    gray6: string
    gray5: string
    gray4: string
    gray3: string
    gray2: string
    gray1: string
    gray0: string
  }
}

const defaultTheme = {
  primary: '#1890ff',
  primaryLight: '#dbf4ff',
  header: '#000000',
  hero: 'radial-gradient(circle, rgba(25,118,210,1) 0%, rgba(9,9,121,1) 0%, rgba(25,118,210,1) 100%)',
  linearGradient: 'linear-gradient(95deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 50%, rgba(2,0,36,1) 100%)',
  linearGradientAngle: 'linear-gradient(136deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 75%, rgba(2,0,36,1) 100%)',
  gray9: '#22262a',
  gray8: '#2e3235',
  gray7: '#495057',
  gray6: '#6c757d',
  gray5: '#adb5bd',
  gray4: '#ced4da',
  gray3: '#dee2e6',
  gray2: '#eff2f5',
  gray1: '#f8f9fa',
  gray0: '#fafafa',
}

export const theme = createTheme({
  primary: defaultTheme.primary,
  primaryLight: defaultTheme.primaryLight,
  header: defaultTheme.header,
  hero: defaultTheme.hero,
  linearGradient: defaultTheme.linearGradient,
  linearGradientAngle: defaultTheme.linearGradientAngle,
  gray9: defaultTheme.gray9,
  gray8: defaultTheme.gray8,
  gray7: defaultTheme.gray7,
  gray6: defaultTheme.gray6,
  gray5: defaultTheme.gray5,
  gray4: defaultTheme.gray4,
  gray3: defaultTheme.gray3,
  gray2: defaultTheme.gray2,
  gray1: defaultTheme.gray1,
  gray0: defaultTheme.gray0,
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: defaultTheme.primaryLight,
            color: defaultTheme.primary,
            '& .MuiListItemIcon-root': {
              color: defaultTheme.primary,
            },
          },
        },
      },
    },
  },
})
