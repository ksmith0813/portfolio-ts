import { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AppBar, styled, ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { theme } from 'theme/theme'

const StyledAppBar = styled(AppBar)(({}) => ({
  background: theme.header,
}))

export const App = () => {
  const [activePage, setActivePage] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') navigate('../home')
    setActivePage(location.pathname.substring(1))
  }, [location.pathname, navigate])

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position='sticky'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Kevin Smith
            </Typography>
            <Button color='inherit'>Links</Button>
          </Toolbar>
        </StyledAppBar>
        <Box sx={{ m: '2rem' }}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
