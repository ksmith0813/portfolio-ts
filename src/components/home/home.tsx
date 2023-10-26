import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Grid, Paper } from '@mui/material'

const pageLinks = ['dashboard', 'register', 'table', 'list', 'weather', 'visuals']

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: '#dee2e6',
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
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {pageLinks.map((pageLink, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <StyledPaper elevation={0} onClick={() => onItemClick(pageLink)}>
            {pageLink}
          </StyledPaper>
        </Grid>
      ))}
    </Grid>
  )
}
