import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Autocomplete, Grid, TextField } from '@mui/material'
import { FormTextField } from 'components/_siteWide/formTextField'
import { StateProps, states } from 'data/dropDowns/states'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Actions } from './actions'

export const Contact = () => {
  const { registerState, setRegisterContact, nextRegisterStep } = useRegisterReducer()

  const contact = registerState.contact

  const onSubmit = () => nextRegisterStep(contact)

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
              label='First'
              property='firstName'
              element={contact}
              setElement={setRegisterContact}
              errors={errors}
              required
            />
          </Grid>
          <Grid item xs={2} sm={6} md={12}>
            <FormTextField
              register={register}
              label='Last'
              property='lastName'
              element={contact}
              setElement={setRegisterContact}
              errors={errors}
              required
            />
          </Grid>
          <Grid item xs={2} sm={6} md={12}>
            <FormTextField
              register={register}
              label='Address Line 1'
              property='address'
              element={contact}
              setElement={setRegisterContact}
              errors={errors}
              required
            />
          </Grid>
          <Grid item xs={2} sm={6} md={12}>
            <FormTextField
              register={register}
              label='Address Line 2'
              property='apt'
              element={contact}
              setElement={setRegisterContact}
              errors={errors}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} columns={{ xs: 4, sm: 6, md: 12 }} sx={{ mt: 0, mb: 0 }}>
          <Grid item xs={2} sm={4} md={4}>
            <FormTextField
              register={register}
              label='City'
              property='city'
              element={contact}
              setElement={setRegisterContact}
              errors={errors}
              required
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Autocomplete
              options={states.map((filteredState: StateProps) => filteredState.label)}
              isOptionEqualToValue={useCallback((option: any, value: any) => option.value === value.value, [])}
              value={contact.state}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Choose a State *'
                  onChange={(e) => setRegisterContact({ ...contact, state: e.target.value })}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                  }}
                />
              )}
              fullWidth
            />
            {errors.state && <p>State is required.</p>}
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <FormTextField
              register={register}
              label='Zip'
              property='zip'
              element={contact}
              setElement={setRegisterContact}
              errors={errors}
              required
              pattern={/(^\d{5}$)|(^\d{5}-\d{4}$)/}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          <Grid item xs={2} sm={6} md={12}>
            <FormTextField
              register={register}
              label='Email'
              property='email'
              element={contact}
              setElement={setRegisterContact}
              errors={errors}
              pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            />
          </Grid>
          <Grid item xs={2} sm={6} md={12}>
            <FormTextField
              register={register}
              label='Phone'
              property='phone'
              element={contact}
              setElement={setRegisterContact}
              errors={errors}
              required
              pattern={/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/}
            />
          </Grid>
        </Grid>
        <Actions submit={onSubmit} />
      </form>
    </>
  )
}
