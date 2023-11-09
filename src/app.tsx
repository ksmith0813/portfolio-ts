import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { PageLink, pageLinks } from 'components/_siteWide/pageLink'
import { store } from 'store/store'
import { theme } from 'theme/theme'

const StyledAppBar = styled(AppBar)({
  background: theme.header,
})

const StyledListItemText = styled(ListItemText)({
  textTransform: 'capitalize',
})

const StyledBoxOutlet = styled(Box)({
  paddingTop: '2rem',
  paddingLeft: '184px',
  width: 'calc(100% - 32px)',
})

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

const SideNav = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onItemClick = (page: string) => navigate(`../${page}`)

  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {pageLinks.map((pageLink: PageLink) => {
          const route = pageLink.route
          return (
            <ListItem key={route} disablePadding sx={{ display: 'block' }} onClick={() => onItemClick(route)}>
              <ListItemButton selected={route === pathname}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    justifyContent: 'center',
                  }}
                >
                  {pageLink.icon}
                </ListItemIcon>
                <StyledListItemText primary={route.substring(1)} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export const App = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') navigate('../home')
  }, [pathname, navigate])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledAppBar position='sticky' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Kevin Smith
            </Typography>
            <ExternalLinks />
          </Toolbar>
        </StyledAppBar>
        <Drawer
          variant='permanent'
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <SideNav />
        </Drawer>
        <StyledBoxOutlet>
          <Outlet />
        </StyledBoxOutlet>
      </ThemeProvider>
    </Provider>
  )
}
