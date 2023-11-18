import { Autocomplete, Grid, TextField } from '@mui/material'
import { FormTextField } from 'components/_siteWide/form/formTextField'
import { CountryProps, countries } from 'data/dropDowns/countries'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Actions } from './actions'

export const Travel = () => {
  const { registerState, setRegisterTravel, nextRegisterStep } = useRegisterReducer()

  const travel = registerState.travel

  const onSubmit = () => nextRegisterStep(travel)

  return (
    <form>
      <Grid container spacing={4}>
        <Grid item xs={2} sm={6} md={12}>
          <Autocomplete
            options={countries.map((country: CountryProps) => country.label)}
            value={travel.favoriteCountries}
            onChange={(_e: any, value: any) => setRegisterTravel({ ...travel, favoriteCountries: value })}
            renderInput={(params) => <TextField {...params} label='Favorite Countries *' />}
            fullWidth
            multiple
            freeSolo
          />
        </Grid>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField
            label='Favorite City'
            property='favoriteCity'
            element={travel}
            setElement={setRegisterTravel}
            required
          />
        </Grid>
        <Grid item xs={2} sm={6} md={12}>
          <Autocomplete
            options={countries.map((country: CountryProps) => country.label)}
            value={travel.placesVisited}
            onChange={(_e: any, value: any) => setRegisterTravel({ ...travel, placesVisited: value })}
            renderInput={(params) => <TextField {...params} label='Places Visited' />}
            fullWidth
            multiple
            freeSolo
          />
        </Grid>
      </Grid>
      <Actions submit={onSubmit} />
    </form>
  )
}
