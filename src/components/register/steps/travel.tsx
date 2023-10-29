import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Autocomplete, Grid, TextField } from '@mui/material'
import { FormTextField } from 'components/_siteWide/formTextField'
import { CountryProps, countries } from 'data/dropDowns/countries'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Actions } from './actions'

export const Travel = () => {
  const { registerState, setRegisterTravel, nextRegisterStep } = useRegisterReducer()

  const travel = registerState.travel

  const onSubmit = () => nextRegisterStep(travel)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
            {errors.favoriteGenres && <p>Favorite Countries are required.</p>}
          </Grid>
          <Grid item xs={2} sm={6} md={12}>
            <FormTextField
              register={register}
              label='Favorite City'
              property='favoriteCity'
              element={travel}
              setElement={setRegisterTravel}
              errors={errors}
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
            {errors.favoriteGenres && <p>Favorite City are required.</p>}
          </Grid>
        </Grid>
        <Actions submit={onSubmit} />
      </form>
    </>
  )
}
