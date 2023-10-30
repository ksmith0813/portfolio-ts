import { Box, Chip, Divider, Grid, styled, Typography } from '@mui/material'
import { DataItem } from 'components/_siteWide/dataItem'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Actions } from './actions'

const StyledRegisterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.gray1,
  padding: '2rem',
  border: `1px solid ${theme.gray6}`,
}))

export const Review = () => {
  const { completeRegistration } = useRegisterReducer()

  return (
    <StyledRegisterBox sx={{ mt: '0rem', mb: '2rem' }}>
      <ContactContent />
      <MovieContent />
      <MusicContent />
      <TravelContent />
      <Actions submit={completeRegistration} />
    </StyledRegisterBox>
  )
}

const chipList = (array: any = []) => {
  return (
    array.length &&
    array.map((value: string, i: number) => <Chip key={i} label={value} sx={{ mt: '.5rem', mr: '.5rem' }} />)
  )
}

const ContactContent = () => {
  const { registerState } = useRegisterReducer()
  const contact = registerState.contact
  return (
    <>
      <Box sx={{ mb: '1rem' }}>
        <Typography variant='h6'>Contact</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <DataItem label='First Name' children={contact.firstName} />
        </Grid>
        <Grid item xs={3}>
          <DataItem label='Last Name' children={contact.lastName} />
        </Grid>
        <Grid item xs={12}>
          <DataItem label='Address' children={contact.address} />
        </Grid>
        {contact.apt && (
          <Grid item xs={12}>
            <DataItem label='APT #' children={contact.apt} />
          </Grid>
        )}
        <Grid item xs={3}>
          <DataItem label='City' children={contact.city} />
        </Grid>
        <Grid item xs={3}>
          <DataItem label='State' children={contact.state} />
        </Grid>
        <Grid item xs={3}>
          <DataItem label='Zip' children={contact.zip} />
        </Grid>
        <Grid item xs={12}>
          <DataItem label='Phone' children={contact.phone} />
        </Grid>
        <Grid item xs={12}>
          <DataItem label='Email' children={contact.email} />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Divider sx={{ mt: '2rem' }} />
        </Grid>
      </Grid>
    </>
  )
}

const MovieContent = () => {
  const { registerState } = useRegisterReducer()
  const movie = registerState.movie
  return (
    <>
      <Box sx={{ mt: '2rem', mb: '1rem' }}>
        <Typography variant='h6'>Movies</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <DataItem label='Favorite Movie' children={movie.favoriteMovie} />
        </Grid>
        <Grid item xs={12}>
          <DataItem label='Favorite Genres' children={chipList(movie.favoriteGenres)} />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Divider sx={{ mt: '2rem' }} />
        </Grid>
      </Grid>
    </>
  )
}

const MusicContent = () => {
  const { registerState } = useRegisterReducer()
  const music = registerState.music
  return (
    <>
      <Box sx={{ mt: '2rem', mb: '1rem' }}>
        <Typography variant='h6'>Music</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <DataItem label='Favorite Band' children={music.favoriteBand} />
        </Grid>
        <Grid item xs={3}>
          <DataItem label='Favorite Song' children={music.favoriteSong} />
        </Grid>
        <Grid item xs={12}>
          <DataItem label='Instruments' children={chipList(music.instruments)} />
        </Grid>
        <Grid item xs={12}>
          <DataItem label='SoundCloud' children={music.soundCloud} />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Divider sx={{ mt: '2rem' }} />
        </Grid>
      </Grid>
    </>
  )
}

const TravelContent = () => {
  const { registerState } = useRegisterReducer()
  const travel = registerState.travel
  return (
    <>
      <Box sx={{ mt: '2rem', mb: '1rem' }}>
        <Typography variant='h6'>Travel</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <DataItem label='Favorite Countries' children={chipList(travel.favoriteCountries)} />
        </Grid>
        <Grid item xs={12}>
          <DataItem label='Favorite City' children={travel.favoriteCity} />
        </Grid>
        <Grid item xs={12}>
          <DataItem label='Places Visited' children={chipList(travel.placesVisited)} />
        </Grid>
      </Grid>
    </>
  )
}
