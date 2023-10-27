import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Box, Grid, Paper, Typography } from '@mui/material'
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt'
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined'
import TableViewIcon from '@mui/icons-material/TableView'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import BarChartIcon from '@mui/icons-material/BarChart'

type PageLink = {
  route: string
  icon: ReactElement
}
const pageLinks: PageLink[] = [
  { route: 'dashboard', icon: <ViewQuiltIcon /> },
  { route: 'register', icon: <AppRegistrationOutlinedIcon /> },
  { route: 'table', icon: <TableViewIcon /> },
  { route: 'list', icon: <FormatListBulletedOutlinedIcon /> },
  { route: 'weather', icon: <WbSunnyIcon /> },
  { route: 'visuals', icon: <BarChartIcon /> },
]

const StyledContainerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  background: theme.hero,
  color: theme.palette.primary.contrastText,
  marginBottom: '3rem',
  textAlign: 'center',
  padding: '2rem',
}))

const StyledGreetingBox = styled(Box)({
  maxWidth: '50%',
})

const StyledLinkPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.h6,
  backgroundColor: theme.gray3,
  padding: theme.spacing(6),
  fontSize: '2rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  ':hover': {
    cursor: 'pointer',
    color: theme.palette.primary.light,
    backgroundColor: theme.gray3,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '7rem',
    marginTop: '1rem',
  },
}))

export const Home = () => {
  const navigate = useNavigate()

  const onItemClick = (page: string) => navigate(`../${page}`)

  return (
    <>
      <StyledContainerBox>
        <StyledGreetingBox>
          <Typography variant='h2' sx={{ marginBottom: '1rem' }}>
            Hello.
          </Typography>
          <Typography variant='h5'>
            Welcome to my React portfolio application. My name is Kevin Smith. I am a Lead Software Engineer and Tech
            Lead. This application demostrates my frontend engineering skills using the ReactJS library. The tech stack
            is Typescript, Redux Toolkit, Redux Forms, Functional Components, Webpack, Material UI, Custom Theming, and
            Axios for hitting API endpoints. Feel free to explore some of the examples below. I definitely had fun
            coding the pages in this demo application.
          </Typography>
        </StyledGreetingBox>
      </StyledContainerBox>
      <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
        {pageLinks.map((pageLink: PageLink, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <StyledLinkPaper elevation={0} onClick={() => onItemClick(pageLink.route)}>
              <Typography variant='h6'>{pageLink.route}</Typography>
              {pageLink.icon}
            </StyledLinkPaper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
