import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    header: string
    hero: string
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
    header: string
    hero: string
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

export const theme = createTheme({
  header: '#000000',
  hero: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(25,118,210,1) 100%)',
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
})
