import { Autocomplete, Grid, TextField } from '@mui/material'
import { FormTextField } from 'components/_siteWide/form/formTextField'
import { instruments, InstrumentProps } from 'data/dropDowns/instruments'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Actions } from './actions'

export const Music = () => {
  const { registerState, setRegisterMusic, nextRegisterStep, resetRegisterStep } = useRegisterReducer()

  const music = registerState.music

  const onSubmit = () => nextRegisterStep(music)

  const onReset = () => {
    resetRegisterStep()
  }

  return (
    <form>
      <Grid container spacing={4}>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField
            label='Favorite Band'
            property='favoriteBand'
            element={music}
            setElement={setRegisterMusic}
            required
          />
        </Grid>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField
            label='Favorite Song'
            property='favoriteSong'
            element={music}
            setElement={setRegisterMusic}
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
        </Grid>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField label='SoundCloud' property='soundCloud' element={music} setElement={setRegisterMusic} />
        </Grid>
      </Grid>
      <Actions submit={onSubmit} />
    </form>
  )
}
