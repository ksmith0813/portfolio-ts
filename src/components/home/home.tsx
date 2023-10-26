import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Box, Grid, Paper, Typography } from '@mui/material'

const pageLinks = ['dashboard', 'register', 'table', 'list', 'weather', 'visuals']

const StyledContainerBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#dee2e6',
  marginBottom: '3rem',
  textAlign: 'center',
  padding: '2rem',
})

const StyledGreetingBox = styled(Box)({
  maxWidth: '50%',
})

const StyledLinkPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.subtitle1,
  backgroundColor: '#ced4da',
  padding: theme.spacing(6),
  textAlign: 'center',
  textTransform: 'uppercase',
  ':hover': {
    cursor: 'pointer',
    color: '#1976d2',
    opacity: 0.8,
  },
}))

export const Home = () => {
  const navigate = useNavigate()

  const onItemClick = (page: string) => navigate(`../${page}`)

  return (
    <>
      <StyledContainerBox>
        <StyledGreetingBox>
          <Typography variant='h2'>Hello.</Typography>
          <Typography variant='h6'>
            Welcome to my React portfolio application. My name is Kevin Smith. I am a Lead Software Engineer and Tech
            Lead. This application demostrates my frontend engineering skills using the ReactJS library. The tech stack
            is Typescript, Redux Toolkit, Redux Forms, Functional Components, Webpack, Material UI, Custom Theming, and
            Axios for hitting API endpoints. Feel free to explore some of the examples below. I definitely had fun
            coding the pages in this demo application.
          </Typography>
        </StyledGreetingBox>
      </StyledContainerBox>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {pageLinks.map((pageLink, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <StyledLinkPaper elevation={0} onClick={() => onItemClick(pageLink)}>
              {pageLink}
            </StyledLinkPaper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
