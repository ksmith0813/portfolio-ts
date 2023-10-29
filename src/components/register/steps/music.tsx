import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Autocomplete, Grid, TextField } from '@mui/material'
import { FormTextField } from 'components/_siteWide/formTextField'
import { instruments, InstrumentProps } from 'data/dropDowns/instruments'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Actions } from './actions'

export const Music = () => {
  const { registerState, setRegisterMusic, nextRegisterStep } = useRegisterReducer()

  const music = registerState.music

  const onSubmit = () => nextRegisterStep(music)

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
              label='Favorite Band'
              property='favoriteBand'
              element={music}
              setElement={setRegisterMusic}
              errors={errors}
              required
            />
          </Grid>
          <Grid item xs={2} sm={6} md={12}>
            <FormTextField
              register={register}
              label='Favorite Song'
              property='favoriteSong'
              element={music}
              setElement={setRegisterMusic}
              errors={errors}
              required
            />
          </Grid>
          <Grid item xs={2} sm={6} md={12}>
            <Autocomplete
              options={instruments.map((instrument: InstrumentProps) => instrument.label)}
              value={music.instruments}
              onChange={(_e: any, value: any) => setRegisterMusic({ ...music, instruments: value })}
              renderInput={(params) => <TextField {...params} label='Instruments' />}
              fullWidth
              multiple
              freeSolo
            />
            {errors.favoriteGenres && <p>Favorite Genres are required.</p>}
          </Grid>
          <Grid item xs={2} sm={6} md={12}>
            <FormTextField
              register={register}
              label='SoundCloud'
              property='soundCloud'
              element={music}
              setElement={setRegisterMusic}
              errors={errors}
            />
          </Grid>
        </Grid>
        <Actions submit={onSubmit} />
      </form>
    </>
  )
}
