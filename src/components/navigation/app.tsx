import { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AppBar, Box, styled, ThemeProvider, Toolbar, Tooltip, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { theme } from 'theme/theme'

const StyledAppBar = styled(AppBar)(({}) => ({
  background: theme.header,
}))

const ExternalLinks = () => (
  <Box>
    <Tooltip title='LinkedIn' enterDelay={0.5}>
      <LinkedInIcon
        sx={{ mr: '.5rem' }}
        onClick={() => window.open('https://www.linkedin.com/in/kevin-smith-26339411a/', '_blank')}
      />
    </Tooltip>
    <Tooltip title='Github' enterDelay={0.5}>
      <GitHubIcon onClick={() => window.open('https://github.com/ksmith0813', '_blank')} />
    </Tooltip>
  </Box>
)

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
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Kevin Smith
            </Typography>
            <ExternalLinks />
          </Toolbar>
        </StyledAppBar>
        <Box sx={{ m: '2rem' }}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
