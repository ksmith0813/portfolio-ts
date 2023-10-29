import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Autocomplete, Grid, TextField } from '@mui/material'
import { FormTextField } from 'components/_siteWide/formTextField'
import { movieGenres, MovieProps } from 'data/dropDowns/movieGenres'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Actions } from './actions'

export const Movie = () => {
  const { registerState, setRegisterMovie, nextRegisterStep } = useRegisterReducer()

  const movie = registerState.movie

  const onSubmit = () => nextRegisterStep(movie)

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
            <FormTextField
              register={register}
              label='Favorite Movie'
              property='favoriteMovie'
              element={movie}
              setElement={setRegisterMovie}
              errors={errors}
              required
            />
          </Grid>
          <Grid item xs={2} sm={6} md={12}>
            <Autocomplete
              options={movieGenres.map((genre: MovieProps) => genre.label)}
              value={movie.favoriteGenres}
              onChange={(_e: any, value: any) => setRegisterMovie({ ...movie, favoriteGenres: value })}
              renderInput={(params) => <TextField {...params} label='Favorite Genre *' />}
              fullWidth
              multiple
              freeSolo
            />
            {errors.favoriteGenres && <p>Favorite Genres are required.</p>}
          </Grid>
        </Grid>
        <Actions submit={onSubmit} />
      </form>
    </>
  )
}
