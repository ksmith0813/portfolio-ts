import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'
import { PageLink, pageLinks } from 'components/_siteWide/pageLink'

const StyledContainerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  background: theme.hero,
  color: theme.palette.primary.contrastText,
  margin: '-2rem',
  marginBottom: '2rem',
  padding: '2rem',
  textAlign: 'center',
}))

const StyledGreetingBox = styled(Box)({
  maxWidth: '50%',
})

const StyledLinkBox = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.gray3,
  color: theme.gray7,
  padding: theme.spacing(4),
  marginBottom: '2rem',
  fontSize: '2rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  ':hover': {
    cursor: 'pointer',
    color: theme.palette.primary.light,
    backgroundColor: theme.gray4,
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
          <Typography variant='h5' sx={{ marginBottom: '1rem' }}>
            Welcome to my React portfolio application. My name is Kevin Smith. I am a Lead Software Engineer and Tech
            Lead. This application demostrates my frontend engineering skills using the ReactJS library. The tech stack
            is Typescript, Redux Toolkit, Redux Persist, Functional Components, Webpack, Material UI, Custom Theming,
            and Recharts for data visualizations. Feel free to explore some of the examples below. I definitely had fun
            coding the pages in this demo application.
          </Typography>
        </StyledGreetingBox>
      </StyledContainerBox>
      <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
        {pageLinks.map((pageLink: PageLink, index) => {
          const route = pageLink.route.substring(1)
          if (route === 'home') return
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <StyledLinkBox onClick={() => onItemClick(route)}>
                <Typography variant='h6'>{route}</Typography>
                {pageLink.icon}
              </StyledLinkBox>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
